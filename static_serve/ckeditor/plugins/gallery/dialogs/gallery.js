/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

var gallery_dialog_id = 0;

galleryDialog = function(editor, command) {
 return {
    title : 'Слайдшоу',
    minWidth : 310,
    minHeight : 280,
    onOk: function() {
      if (gallery_dialog_id) {
        editor.insertHtml('<img src="/static/img/gallery.png" class="gallery_slideshow" gallery_id="'+gallery_dialog_id+'" />');
      }
    },    
    contents: [
        {
          id: 'info',
          label: 'Выберите слайдшоу',
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
                      id: 'id_slideshow',
                      items: [],
                      onLoad : function(element) {
                          var element_id = this.getInputElement().$.id;
                          element = document.getElementById(element_id);
                          var html = element.innerHTML;
                          CKEDITOR.ajax.load( '/admin/gallery/gallery/json/', function( data ) {
                            element.innerHTML = data;
                          });                                                
                      },         
                      onChange : function( api ) {
                        gallery_dialog_id = this.getValue();
                      }, 
                      label: 'Выберите слайдшоу',
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

CKEDITOR.dialog.add( 'gallery', function( editor ) {
  return galleryDialog( editor, 'gallery' );
});