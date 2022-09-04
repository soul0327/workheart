$(document).ready(function () {

    // Setup - add a text input to each footer cell
    $('#myTable tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    $('#myTable').DataTable({
        searching: true,
        // 搜索功能是否開啟(預設開啟)

        ordering: true,
        // 排序是否開啟(預設開啟) 
        // order: [[1, 'asc']],

        dom: 'lr<"marginBottom"t>Bip',

        lengthChange: true,
        // 呈現左上角下拉頁數選單

        lengthMenu: [[2, 3, 4, -1], [2, 3, 4, "All"]],
        // 頁數選單數值

        pageLength: 5,

        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;

                $('input', this.footer()).on('keyup change clear', function () {
                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            }),
                this.api().columns(3).every(function () {
                    var column = this;
                    var select = $('<select><option value=""></option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );

                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });

                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });
        },
        // 表格footer的搜尋

        "oLanguage": {
            "sUrl": "../json/zhHant.json"
        }

    });

    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });

    $('input.column_filter').on('keyup click', function () {
        filterColumn($(this).parents('tr').attr('data-column'));
    });

});