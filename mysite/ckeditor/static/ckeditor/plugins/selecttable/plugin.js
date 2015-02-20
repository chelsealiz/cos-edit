/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'selecttable', {
	requires: 'dialog,ajax',
	icons: 'selecttable', // %REMOVE_LINE_CORE%
	init: function( editor ) {
		editor.addCommand( 'selecttable', new CKEDITOR.dialogCommand( 'selecttable', {
			context: 'selecttable',
			allowedContent: 'img[table_id,class,src]{*}(*)',
			requiredContent: 'img[table_id,class,src]',
		}));

		editor.ui.addButton && editor.ui.addButton( 'SelectTable', {
			label: 'Подключить таблицу',
			command: 'selecttable',
		});

		CKEDITOR.dialog.add( 'selecttable', this.path + 'dialogs/selecttable.js' );
	}
});
