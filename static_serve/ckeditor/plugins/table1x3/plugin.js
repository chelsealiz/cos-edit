CKEDITOR.plugins.add('table1x3', {
    init : function(editor) {
        var me = this; 

        editor.addCommand('insertTable1x3', {
            exec : function() {
              var sel = editor.getSelection().getStartElement();
              if (sel) {
                if (sel.getName() == 'td') {
                  return false;
                }
              }              
              editor.insertHtml('<table style="width:100%"><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table>');
            }
        });

        editor.ui.addButton('Table1x3', {
            label : 'Table 1x3',
            command : 'insertTable1x3',
            icon : me.path + 'icons/table1x3.png',
            allowedContent: 'table{width,height}[align,border,cellpadding,cellspacing,summary];' +
              'caption tbody thead tfoot;' +
              'th td tr[scope];' +
              ( editor.plugins.dialogadvtab ? 'table' + editor.plugins.dialogadvtab.allowedContent() : '' ),
            requiredContent: 'table',	
	      });
    }
});