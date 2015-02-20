/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'gallery', {
	requires: 'dialog,ajax',
	icons: 'gallery', // %REMOVE_LINE_CORE%
	init: function( editor ) {
		editor.addCommand( 'gallery', new CKEDITOR.dialogCommand( 'gallery', {
			context: 'gallery',
			allowedContent: 'img[gallery_id,class,src]{*}(*)',
			requiredContent: 'img[gallery_id,class,src]',
		}));

		editor.ui.addButton && editor.ui.addButton( 'Gallery', {
			label: 'Слайдшоу',
			command: 'gallery',
		});

		CKEDITOR.dialog.add( 'gallery', this.path + 'dialogs/gallery.js' );
	}
});
