
// Fonction pour personnaliser le contenu de l'exportation Excel
function customizeExcelContent(xlsx) {
    var sheet = xlsx.xl.worksheets['sheet1.xml'];
    $('row c', sheet).each(function () {
        var value = $(this).find('is t').text();
        if (value === 'check_circle') {
            $(this).find('is t').text('oui');
        } else if (value === 'cancel') {
            $(this).find('is t').text('non');
        }
    });
}


function customizePDFContent(doc) {
    doc.content[1].table.body.forEach(function(row) {
        row.forEach(function(cell, cellIndex) {
            if (cell.text === 'check_circle') {
                cell.text = 'oui';
            } else if (cell.text === 'cancel') {
                cell.text = 'non';
            }
        });
    });
}


$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', {
                extend: 'excelHtml5',
                text: 'Excel',
                customize: customizeExcelContent
            }, {
                extend: 'pdfHtml5',
                text: 'PDF',
                customize: customizePDFContent 

            }, 'print'
        ]
    } );
} );
