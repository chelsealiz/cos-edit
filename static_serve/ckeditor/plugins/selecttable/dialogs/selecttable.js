/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

var table_dialog_id = 0;

selectTableDialog = function(editor, command) {
 return {
    title : 'Выбрать таблицу',
    minWidth : 310,
    minHeight : 280,
    onOk: function() {
      if (table_dialog_id) {
        editor.insertHtml('<img src="/static/img/selecttable.png" class="showtable" table_id="'+table_dialog_id+'" />');
      }
    },    
    contents: [
        {
          id: 'info',
          label: 'Выберите таблицу',
          elements: [
            {
              type: 'hbox',
              widths: [ null, null ],
              styles: [ 'vertical-align:top' ],
              children: [
                {
                  type: 'vbox',
                  padding: 0,
                  children: [
                    {
                      type: 'select',
                      id: 'id_table',
                      items: [],
                      onLoad : function(element) {
                          var element_id = this.getInputElement().$.id;
                          element = document.getElementById(element_id);
                          var html = element.innerHTML;
                          CKEDITOR.ajax.load( '/admin/spreadsheet/spreadsheet/json/', function( data ) {
                            element.innerHTML = data;
                          });                                                
                      },         
                      onChange : function( api ) {
                        table_dialog_id = this.getValue();
                      }, 
                      label: 'Выберите таблицу',
                      required: true,
                      controlStyle: 'width: 7em',
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  }    
}

CKEDITOR.dialog.add( 'selecttable', function( editor ) {
  return selectTableDialog( editor, 'selecttable' );
});