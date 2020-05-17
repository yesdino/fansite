$(document).ready(function() {
    var year = getQueryVariable("year");
    console.log("year :"+year);
    load_table(year);



});


function load_table(year)
{
    if(!year)
        year = "18"

    var focusObj = $(".20"+year);
    focusObj.siblings("font-weight","");
    focusObj.css("font-weight","800");

    $("#all_tab").DataTable({
        "ajax": "excel/"+year+".json",
        "pageLength": 25,
        "columns": [
            { "data": "日期" }, //0
            { "data": "标题" }, //1
            { "data": "在线" }, //2 hidden
            { "data": "B站" },  //3
            { "data": "分类" }, //4
            { "data": "类名" }, //5 hidden
            { "data": "度盘" }, //6 
            { "data": "密码" }  //7 hidden
        ],
        // 列定义
        "columnDefs": [
            {
                // "标题"
                "targets": [ 1 ],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        var onlink_url = row.在线;
                        if(onlink_url=="xx")
                            return data;
                        else
                            return '<a href="'+onlink_url+'">'+ data+'</a>';
                    }
                    return data;
                }
            },
            {
                // "B站"
                "targets": [ 3 ],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        var Bzhan_url = row.B站;
                        if(Bzhan_url=="xx")
                            return "暂无";
                        else
                            return '<a href="'+Bzhan_url+'">B站</a>';
                    }
                    return "暂无";
                }
            },
            {
                // "度盘"
                "targets": [ 6 ],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        var psword = row.密码;
                        if(data=="xx"){
                            return "暂无";
                        }
                        else{
                            if(psword=="xx"){
                                return '<a href="'+data+'">资源</a>';
                            }
                            else{
                                return '<a href="'+data+'">资源</a>  ('+psword+')';
                            }
                        }
                    }
                    return "暂无";
                }
            },
            { "targets": [ 4 ], "orderable": false },
            { "targets": [ 2 ], "visible": false, "searchable": false, },
            { "targets": [ 5 ], "visible": false, "searchable": false, },
            { "targets": [ 7 ], "visible": false, "searchable": false, }
        ],
        "order": [[0, 'desc']],
        "initComplete": function () {
            // 表格全部行加載完成時調用
            console.log( '表格初始化完成 initComplete' );       // DEBUG
            // var select_div = $('<div id="clas_fy_sel">分类<select></select></div>');
            var select_div = $('<div id="clas_fy_sel"><span class="clsfy">分类</span><select></select></div>');
            var select = select_div.find("select");
            select.append( '<option value="">无分类</option>' )
            this.api().columns(4).every( function () {
                var per_classify_col = this;        // 每一行的第4列元素
                // var select = $('<select><option value="" selected>无分类</option></select>');
                var classify_th = $(per_classify_col.header());    // 第4列 header <th>
                classify_th.empty();
                select_div.appendTo( classify_th );
                per_classify_col.data().unique().sort().each( function ( v, j ) {
                    // 遍历第三列每一个元素 不重复排序添加到option中
                    select.append( '<option value="'+v+'">'+v+'</option>' )
                } );
                select.on('change', function () {
                    // 按照搜索条件 加载
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    per_classify_col.search( val ? '^'+val+'$' : '', true, false ).draw();
                } );
            });

            // select.on("click", function(event){
            //     console.log("sel click")
			// 	event.stopPropagation(); 
            // })
            // $("#clas_fy_sel").find("span").on("click", function(){
            //     console.log("select div click");
            //     // $("#clas_fy_sel").find("select option").trigger("click");
            //     // select.click();
            // })
        },
        "createdRow": function (row, data, dataIndex) {
            /* 每一行创建完调用的函数
            row : tr dom
            data: row data
            dataIndex:row data's index */
            // console.log( '一行 createdRow:'+dataIndex ); // DEBUG
            $(row).addClass(data.类名);
        }
    });

}


function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return(false);
}