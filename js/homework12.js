    var res = '';
    var linkClass = 'linkClass1';
    var link2Class = 'link2Class1';
    var link3Class = 'link3Class1';
    var listClass = 'listClass1';
    
    function createMainLists(n){
        var ul = `<ul class = "${listClass}"><li class = "${linkClass}"></li><li class = "${link2Class}"></li><li class = "${link3Class}"></li></ul>`;
        if(n > 0){
            res += ul;
            console.log(res);
            $('#listContainer').html(res);
            linkClass += '1';
            link2Class += '1';
            link3Class += '1';
            listClass += '1'
            createMainLists(n-1);
        }
    }
        createMainLists(3);

    function createPhoneList(){
        var createlink1 = '<a href = "https://rozetka.com.ua/mobile-phones/c80003/preset=dual_sim/" class = "qwe">Two Sim-Cards</a>';
        var createlink2 = '<a href = "https://rozetka.com.ua/mobile-phones/c80003/preset=222/">With big accumulator</a>'
        var createlink3 = '<a href = "https://rozetka.com.ua/mobile-phones/c80003/preset=budget_smartphones/">Cheap phones</a>'
        $('.linkClass1').html(createlink1);
        $('.link2Class1').html(createlink2);
        $('.link3Class1').html(createlink3);
    } 
        
    function createTVList(){
        var createlink1 = '<a href = "https://rozetka.com.ua/all-tv/c80037/">TV\'s</a>';
        var createlink2 = '<a href = "https://rozetka.com.ua/tv-mounts-stands/c80071/">TV holders</a>'
        var createlink3 = '<a href = "https://rozetka.com.ua/tv_webcam/c221177/">TV accessories</a>'
            $('.linkClass11').html(createlink1);
            $('.link2Class11').html(createlink2);
            $('.link3Class11').html(createlink3);
    }     

    function createAutoElectrList(){
        var createlink1 = '<a href = "https://rozetka.com.ua/vdr/c153617/">Registrators</a>';
        var createlink2 = '<a href = "https://rozetka.com.ua/gps-navigators/c80047/">GPS</a>'
        var createlink3 = '<a href = "https://rozetka.com.ua/parktronic/c278669/">Parkink systems</a>'
            $('.linkClass111').html(createlink1);
            $('.link2Class111').html(createlink2);
            $('.link3Class111').html(createlink3);
   }
    
   function call(){
       createPhoneList();
       createTVList();
       createAutoElectrList();
   }

   window.onload = call;
    

    