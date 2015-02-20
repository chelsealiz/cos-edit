/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

(function() { 
	function noBlockLeft( bqBlock ) {
		for ( var i = 0, length = bqBlock.getChildCount(), child; i < length && ( child = bqBlock.getChild( i ) ); i++ ) {
			if ( child.type == CKEDITOR.NODE_ELEMENT && child.isBlockBoundary() )
				return false;
		}
		return true;
	}

	var commandObject = {
		exec: function( editor ) {
			var state = editor.getCommand( 'h1' ).state,
				selection = editor.getSelection(),
				range = selection && selection.getRanges( true )[ 0 ];
      
			if ( !range )
				return;

      var iterator = range.createIterator(),
      block;

			if ( state == CKEDITOR.TRISTATE_OFF ) {
				// Now we have all the blocks to be included in a new h1 node.
				var bqBlock = editor.document.createElement( 'h1' );
				block = selection;
				var tmpBqBlock = bqBlock;
				var tmpTxt = selection.getSelectedText();
				var tmpId = url_slug(tmpTxt, {'limit': 64});
	   		tmpBqBlock.setAttribute('id', tmpId);
	   		tmpBqBlock.setText(tmpTxt);
  			editor.insertElement(tmpBqBlock);
			} else if ( state == CKEDITOR.TRISTATE_ON ) {
			  var selection = editor.getSelection();
			  var sel = selection.getStartElement();
			  if (sel) {
			    if (sel.getName() == 'h1') {
			      if (sel.$.childNodes.length) {
			        var _txt = sel.$.childNodes[0].data;
			        sel.remove();
			        editor.insertHtml(_txt);
			      }
			    }
			  }
			}

			editor.focus();
		},

		refresh: function( editor, path ) {
			// Check if inside of h1.
			var firstBlock = path.block || path.blockLimit;
			this.setState( editor.elementPath( firstBlock ).contains( 'h1', 1 ) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF );
		},

		context: 'h1',

		allowedContent: 'h1[id]',
		requiredContent: 'h1'
	};

	CKEDITOR.plugins.add( 'h1', {
		lang: 'en',
		icons: 'h1',
		init: function( editor ) {
		  CKEDITOR.scriptLoader.load(this.path + 'url_slug.js');      
			if ( editor.blockless )
				return;

			editor.addCommand( 'h1', commandObject );

			editor.ui.addButton && editor.ui.addButton( 'h1', {
				label: editor.lang.h1.toolbar,
				command: 'h1',
				toolbar: 'blocks,10'
			});
		}
	});
})();
