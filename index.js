
$(function(){
     $("#mytable").dataTable(
        {
           //paging: false,       
           //ordering: false,
           //info: false,
           //lengthChange: false,
           //searching: false,
           autoWidth: false, 
           //processing: true,
           scrollX: true,
           scrollY: 500,
           scrollCollapse: true,
           //order: [[0,'desc']], 
           //displayStart: 20,
           //lengthMenu: [10, 25, 50, -1] ,
           lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
           //pageLength: 25,
           //orderFixed: [ 0, 'desc' ],
           pagingType: "full_numbers",   //vlues--"full_numbers","simple_numbers","numbers","simple","full","first_last_numbers" 
           //search: { search: "ritesh" },
           //search: { caseInsensitive: false },
           //stripeClasses: [ 'odd', 'even'],
           //columnDefs: [{ orderable: false, targets: 0 },{ orderable: false, targets: 2 }],
           //columnDefs: [{ searchable: false, targets: 0 },{ searchable: false, targets: 2 }],
           //columnDefs: [{ title: "Person Name", targets: 0 },{ title: "Person City", targets: 2 }],
           //columnDefs: [{ visible:false, targets: 0 }],
           //button property will work after adding the exetension...
           //dom: 'Bfrtip',
           //buttons: ['copyHtml5'],  //['copyHtml5','excelHtml5','csvHtml5','pdfHtml5']
           dom: '<"#length-filter"lf>Br<"#dt-table"t>ip',
           buttons: [{extend:'copy',text:'copy',className:'dt-copy'}, {extend:'pdf',text:'pdf',className:'dt-pdf'}, {extend:'excel',text:"save as excel",className:"dt-excel"},{text:"my button",className:'my-button',titleAttr: 'alert will show',action:function(){alert("this is my button")}}],  
        //    drawCallback: function() {
        //     $('a.paginate_button').on('mouseenter',function() {
        //       $('a.paginate_button.current').css({"background-color":"red"})
        //       $('a.paginate_button.current').css({"border-radius":"10px"})
        //     })}
        language:{
             paginate: {
               first:      '<i class="fa-solid fa-backward-step"></i>',
               last:       '<i class="fa-solid fa-forward-step"></i>',
               next:       '<i class="fa-solid fa-caret-right"></i>',
               previous:   '<i class="fa-solid fa-caret-left"></i>'
           },
           info: "<span id='dt-info'>showing _START_ to _END_ of _TOTAL_ entries</span>",
         }

        
        }

     );

    //  setting the color of the odd rows in table
     //$(".odd").css("background-color","#4682B4");
    // $(".odd").css("color","white");
     
    // setting the css on the custom button
    $(".my-button").css({"background-color":"crimson","color":"white","border":"none","outline":"none"});

    $(".dt-excel").css({"background-color":"green","color":"white","border":"none"})
    $(".dt-pdf").css({"background-color":"red","color":"white","border":"none"})
    $(".dt-copy").css({"background-color":"blue","color":"white","border":"none"})
    
    
});

