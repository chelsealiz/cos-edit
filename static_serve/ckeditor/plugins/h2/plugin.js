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
      var state = editor.getCommand( 'h2' ).state,
        selection = editor.getSelection(),
        range = selection && selection.getRanges( true )[ 0 ];
      
      if ( !range )
        return;

      var iterator = range.createIterator(),
      block;

      if ( state == CKEDITOR.TRISTATE_OFF ) {
        // Now we have all the blocks to be included in a new h2 node.
        var bqBlock = editor.document.createElement( 'h2' );
        block = selection;
        var tmpBqBlock = bqBlock;
        var tmpTxt = selection.getSelectedText();
        tmpBqBlock.setText(tmpTxt);
        editor.insertElement(tmpBqBlock);
      } else if ( state == CKEDITOR.TRISTATE_ON ) {
        var selection = editor.getSelection();
        var sel = selection.getStartElement();
        if (sel) {
          if (sel.getName() == 'h2') {
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
      // Check if inside of h2.
      var firstBlock = path.block || path.blockLimit;
      this.setState( editor.elementPath( firstBlock ).contains( 'h2', 1 ) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF );
    },

    context: 'h2',

    allowedContent: 'h2[id]',
    requiredContent: 'h2'
  };

  CKEDITOR.plugins.add( 'h2', {
    lang: 'en',
    icons: 'h2',
    init: function( editor ) {   
      if ( editor.blockless )
        return;

      editor.addCommand( 'h2', commandObject );

      editor.ui.addButton && editor.ui.addButton( 'h2', {
        label: editor.lang.h2.toolbar,
        command: 'h2',
        toolbar: 'blocks,10'
      });
    }
  });
})();
