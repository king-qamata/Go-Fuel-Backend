$(document).ready(function(){




$('.Vm2Maps').click(function(){
$('.ComingSoonVM2').fadeIn();
$('.ComingSoonVM2').removeClass('ComingSoonServStat');
$('.ComingSoonVM2').addClass('ComingSoonMap');
$('.Mapinput2').fadeIn();

});



$('.Vm2SChange').click(function(){
$('.ComingSoonVM2').fadeIn();
$('.ComingSoonVM2').removeClass('ComingSoonMap');
$('.ComingSoonVM2').addClass('ComingSoonServStat');
$('.Mapinput2').fadeOut();
});



$('.Vm2Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM2').fadeOut();
$('.Mapinput2').fadeOut()
});






$('.TogglefriendsVM2').click(function(){

$('.ContactNameMOBIVM2').toggleClass('ContactNameMOBIxLinearVM2');
$('.friendsVM2').toggleClass('friendsLinearVM2');
$('.FQtyVM2').toggleClass('FQtyLinearVM2'); 
$('.MikeVM2').toggleClass('MikeLinearVM2');
$('.NoShowVM2').toggleClass('friendLinearNoShowVM2');
});













  $('.total2').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue1d= 0;
var itemValue1d=0;
var payMethod1d='none';
var total1d=0;
var totalMOBI2=0;






//function to get itm value

 $('.itmVxx').on('click', function(){

    itemValue1d = $(this).attr('value');
    qtyValue1d=1;
    $('.QtyValueXX').attr('value', qtyValue1d);
    total1d= itemValue1d;
    totalMOBI2= itemValue1d;


    


   //  total2= itemValue * qtyValue;
    
  
 total1d= "$" + itemValue1d;
 
    //Testing
 
    console.log('item value is ' + itemValue1d+ ' and it is type of '
      + typeof('itemValue2')+ ' and qty is '+ qtyValue1d);
    console.log('Total is ' + total1d);

    

   //
 
 $('.total2').attr('value', total1d);

 });







//functions to get quantity value

 $('.Sub1dXX').on('click', function(){
 console.log('Sub was clicked');
 
    qtyValue1d = qtyValue1d - 1;
    $('.QtyValueXX').attr('value', qtyValue1d);

      if(qtyValue1d <=20){
      
      $('#add1d').fadeIn('fast');

    }


    if(qtyValue1d === 0){
      qtyValue1d = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue1d+ ' and it is type of '+ typeof('qtyValue2'));
    
    //multiply item value per quantity

    multiply1d= qtyValue1d * itemValue1d;

   decimal1d=multiply1d.toFixed(2);
    total1d= decimal1d;
    totalMOBI2= decimal1d;
  
  //testing
  total1d= "$" + total1d;
  console.log('total is ' + total1d);
  
 $('.total2').attr('value', total1d);

//
 });





 $('.Add1dXX').click(function(){


console.log('Add was clicked');

 if(qtyValue1d <=20){

   
    qtyValue1d = qtyValue1d + 1;
    $('.QtyValueXX').attr('value', qtyValue1d);

    //Testing
    console.log('quantity value is ' + qtyValue1d+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub1d
}


     if(qtyValue1d >=20){
        qtyValue1d=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply1d= qtyValue1d * itemValue1d;

   decimal1d=multiply1d.toFixed(2);
    total1d= decimal1d;
    totalMOBI2= decimal1d;
  
  //testing
  total1d= "$" + total1d;
  console.log('total is ' + total1d);
  
 $('.total2').attr('value', total1d);

//
 });





//funtion to show hide quantity buttons


// ////////Linear qty buttons//////////////////


 $('.qtyV').click(function(){

   qtyValue1d = $(this).attr('value');
    //Testing
    console.log('quantity value is ' + qtyValue1d+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

   multiply1d= qtyValue1d * itemValue1d;

   decimal1d=multiply1d.toFixed(2);

  total1d= decimal1d;
  totalMOBI2= decimal1d;


    //if total len is less then 2 add .00 to total
  
   

  //testing
  total1d= "$" + total1d;
  console.log('total is ' + total1d);
  
 $('#total2').attr('value', total1d);

//

 });





// ////////Linear qty buttons//////////////////











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift1d, .NoGiftx').click(function(){

   $('.sendGiftVM2, .closeGiftVM2').fadeIn();

});




$('.confirmSendVM2').click(function(){
    $('.sendGiftVM2, .closeGiftVM2').fadeOut();
    totalGiftVM2 = 0;
    $('#totalGiftVM2').attr('value', totalGiftVM2);

    
$('.friendsVM2').removeClass('active');

MySelfVM2 = 0;
JeffVM2 = 0;
MariaVM2 = 0;
JohnVM2 = 0;
LeahVM2 = 0;
PaulVM2 = 0;
JennyVM2 = 0;
GokuVM2 = 0;



    $('.GiftSentVM2').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM2').click(function(){
    $('.sendGiftVM2, .closeGiftVM2').fadeOut();

    totalGiftVM2 = 0;
    $('#totalGiftVM2').attr('value', totalGiftVM2);

$('.friendsVM2').removeClass('active');
MySelfVM2 = 0;
JeffVM2 = 0;
MariaVM2 = 0;
JohnVM2 = 0;
LeahVM2 = 0;
PaulVM2 = 0;
JennyVM2 = 0;
GokuVM2 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM2 = 0;
JeffVM2 = 0;
MariaVM2 = 0;
JohnVM2 = 0;
LeahVM2 = 0;
PaulVM2 = 0;
JennyVM2 = 0;
GokuVM2 = 0;




$('#MySelfVM2').click(function(){

  if (MySelfVM2 === 0){MySelfVM2 = 1;} else {MySelfVM2=0;}

console.log(MySelfVM2);
});






$('#JeffVM2').click(function(){

  if (JeffVM2 === 0){JeffVM2 = 1;} else {JeffVM2=0;}

console.log(JeffVM2);
});


$('#MariaVM2').click(function(){
  
  if (MariaVM2 === 0){MariaVM2 = 1;} else {MariaVM2=0;}

console.log(MariaVM2);
});


$('#JohnVM2').click(function(){
  
  if (JohnVM2 === 0){JohnVM2 = 1;} else {JohnVM2=0;}

console.log(JohnVM2);
});


$('#LeahVM2').click(function(){
  
  if (LeahVM2 === 0){LeahVM2 = 1;} else {LeahVM2=0;}

console.log(LeahVM2);
});


$('#PaulVM2').click(function(){
  
  if (PaulVM2 === 0){PaulVM2 = 1;} else {PaulVM2=0;}

console.log(PaulVM2);
});



$('#JennyVM2').click(function(){
  
  if (JennyVM2 === 0){JennyVM2 = 1;} else {JennyVM2=0;}

console.log(JennyVM2);
});


$('#GokuVM2').click(function(){
  
  if (GokuVM2 === 0){GokuVM2 = 1;} else {GokuVM2=0;}

console.log(GokuVM2);
});















AllFriendsVM2 = JeffVM2 + MariaVM2 + JohnVM2 + LeahVM2 + PaulVM2 + JennyVM2 + GokuVM2 + MySelfVM2; 




totalGiftVM2 = parseFloat(totalMOBI2) * parseFloat(AllFriendsVM2);


$('.friendsVM2').click(function(){

AllFriendsVM2 = JeffVM2 + MariaVM2 + JohnVM2 + LeahVM2 + PaulVM2 + JennyVM2 + GokuVM2 + MySelfVM2; 

totalGiftVM2 = parseFloat(totalMOBI2) * parseFloat(AllFriendsVM2);

 console.log("All friendsVM2 is =" + AllFriendsVM2);
console.log("All friendsVM2 is =" + typeof('AllFriendsVM2'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM2);
console.log("The totalMOBI1d =" + totalMOBI2);
console.log("The totalGiftVM2 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + typeof('totalMOBI1d'));

$('#totalGiftVM2').attr('value', totalGiftVM2);



});




$('.friendVM21').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM21').fadeIn('');





});


$('.friendVM1d').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM1d').show();



});

$('.friendVM23').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM23').show();



});

$('.friendVM24').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM24').show();



});

$('.friendVM25').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM25').show();




});

$('.friendVM26').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM26').show();



});

$('.friendVM27').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM27').show();




});

$('.friendVM28').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM28').show();



});






// ////////////////////////////////////////////////////////////

    FriendQtyVM21 = 0;
    $('.FriendQtyVM21').attr('value', FriendQtyVM21);


 $('.SubVM21').click(function(){

    FriendQtyVM21 = FriendQtyVM21 - 1;
    $('.FriendQtyVM21').attr('value', FriendQtyVM21);

  });


 $('.AddVM21').click(function(){

    FriendQtyVM21 = FriendQtyVM21 + 1;
    $('.FriendQtyVM21').attr('value', FriendQtyVM21);

  });
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////

    FriendQtyVM1d = 0;
    $('.FriendQtyVM1d').attr('value', FriendQtyVM1d);


 $('.SubVM1d').click(function(){

    FriendQtyVM1d = FriendQtyVM1d - 1;
    $('.FriendQtyVM1d').attr('value', FriendQtyVM1d);

  });


 $('.AddVM1d').click(function(){

    FriendQtyVM1d = FriendQtyVM1d + 1;
    $('.FriendQtyVM1d').attr('value', FriendQtyVM1d);

  });
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////

    FriendQtyVM23 = 0;
    $('.FriendQtyVM23').attr('value', FriendQtyVM23);


 $('.SubVM23').click(function(){

    FriendQtyVM23 = FriendQtyVM23 - 1;
    $('.FriendQtyVM23').attr('value', FriendQtyVM23);

  });


 $('.AddVM23').click(function(){

    FriendQtyVM23 = FriendQtyVM23 + 1;
    $('.FriendQtyVM23').attr('value', FriendQtyVM23);

  });
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////

    FriendQtyVM24 = 0;
    $('.FriendQtyVM24').attr('value', FriendQtyVM24);


 $('.SubVM24').click(function(){

    FriendQtyVM24 = FriendQtyVM24 - 1;
    $('.FriendQtyVM24').attr('value', FriendQtyVM24);

  });


 $('.AddVM24').click(function(){

    FriendQtyVM24 = FriendQtyVM24 + 1;
    $('.FriendQtyVM24').attr('value', FriendQtyVM24);

  });
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////

    FriendQtyVM25 = 0;
    $('.FriendQtyVM25').attr('value', FriendQtyVM25);


 $('.SubVM25').click(function(){

    FriendQtyVM25 = FriendQtyVM25 - 1;
    $('.FriendQtyVM25').attr('value', FriendQtyVM25);

  });


 $('.AddVM25').click(function(){

    FriendQtyVM25 = FriendQtyVM25 + 1;
    $('.FriendQtyVM25').attr('value', FriendQtyVM25);

  });
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////

    FriendQtyVM26 = 0;
    $('.FriendQtyVM26').attr('value', FriendQtyVM26);


 $('.SubVM26').click(function(){

    FriendQtyVM26 = FriendQtyVM26 - 1;
    $('.FriendQtyVM26').attr('value', FriendQtyVM26);

  });


 $('.AddVM26').click(function(){

    FriendQtyVM26 = FriendQtyVM26 + 1;
    $('.FriendQtyVM26').attr('value', FriendQtyVM26);

  });
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

    FriendQtyVM27 = 0;
    $('.FriendQtyVM27').attr('value', FriendQtyVM27);


 $('.SubVM27').click(function(){

    FriendQtyVM27 = FriendQtyVM27 - 1;
    $('.FriendQtyVM27').attr('value', FriendQtyVM27);

  });


 $('.AddVM27').click(function(){

    FriendQtyVM27 = FriendQtyVM27 + 1;
    $('.FriendQtyVM27').attr('value', FriendQtyVM27);

  });
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

    FriendQtyVM28 = 0;
    $('.FriendQtyVM28').attr('value', FriendQtyVM28);


 $('.SubVM28').click(function(){

    FriendQtyVM28 = FriendQtyVM28 - 1;
    $('.FriendQtyVM28').attr('value', FriendQtyVM28);

  });


 $('.AddVM28').click(function(){

    FriendQtyVM28 = FriendQtyVM28 + 1;
    $('.FriendQtyVM28').attr('value', FriendQtyVM28);

  });
// ////////////////////////////////////////////////////////////








///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI1d > label').click(function(){
payMethod1d = $(this).attr('value');
console.log(payMethod1d);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod1d = "none";
  itemValue1d = '';
  total1d = "$0.00";
  $('.total2').attr('value', total1d);

  $('.itmV1d, .PayButtonsMOBI1d > label').removeClass('active');


$(this).fadeOut();
$('.qty1d').fadeOut();
qtyValue1d = 1;

});



$('.Nobuy2MOBI').click(function(){

 if(itemValue1d !=='0'){
$('.BuyNewVM2').fadeIn();
}

});


$('.lan1d, lan1dMOBI').click(function(){

$('.itmV1d, .PayButtonsMOBI1d > label, .PayButtons1d > label').removeClass('active');
$('.qty1d').fadeOut();
total1d = "$0.00";
 $('.total2').attr('value', total1d);

});



$('.itm2').dblclick(function(){

  $('.qty1d').fadeOut();

$('.itmV1d, .PayButtonsMOBI1d > label, .PayButtons1d > label').removeClass('active');
$('.qty1d').fadeOut();
total1d = "$0.00";
 $('.total2').attr('value', total1d);

});



$(' #Refill1d').click(function(){
if(itemValue1d !=='0' && payMethod1d !=='none'){
$('.RenewVM2').fadeIn();
}
});


$('#CheckBalVM2').click(function(){
  $('.CheckBalVM2').fadeIn();
});




//////////////////////////////////////////////////////////



























// $('.fix2').click(function() {
// //show these numbers when ride1 or ride2 are clicked
// $('.qty1d').fadeIn('fast');

// //change attribute of these numbers ride1 or ride2 are clicked

// });


// $('.unli2').click(function(){
// $('.qty1d').fadeOut('fast');
// });










// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty1d').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub1d').attr('class','disabled');
// $('#add1d').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub1d').fadeIn('fast');
$('#add1d').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod1d= $(this).attr('value');
  console.log('Payment method is: ' + payMethod1d + 'and item value is: ' +itemValue1d);

});

//Hide these PopUps

$('.seOptions1d, .seItem1d, .pmethod1d').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy2').click(function(){

  if(itemValue1d !=='0'){
  
       
       $('.check').hide();
       $('.thankRefill1d').hide();
       $('.thankBuy1d').fadeIn('fast');
       $('.TapBuy2').click(function(){
          $('.thankBuy1d').hide(); 
         });

        }

 });




$('#refill2').click(function(){

   if(itemValue1d !=='0'){
   
    
      $('.check').hide();
      $('.thankBuy1d').hide();
      $('.thankRefill1d').fadeIn('fast');
      $('.TapRefill2').click(function(){
      $('.thankRefill1d').hide();


 });
}
});







/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod1d =='none'){
    $('.seOptions1d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1d =='none'){

      $('.pmethod1d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1d !== 'none'){
       $('.seItem1d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check').hide();
       $('.thankRefill11').hide();
       $('.thankBuy11').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill').click(function(){

   if(itemValue11 =='0' && payMethod1d =='none'){
    $('.seOptions1d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1d =='none'){

      $('.pmethod1d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1d !== 'none'){
       $('.seItem1d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check').hide();
      $('.thankBuy11').hide();
        $('.thankRefill11').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});


*/









/*

//THANK YOU for BUYING DIVs

$('#buy').click(function(){
$('.check1').hide();
$('.thankRefill11').hide();
 $('.thankBuy11').fadeIn('fast').click(function(){
  $(this).hide();
  
 });

});


$('#refill').click(function(){
  $('.check1').hide();
  $('.thankBuy11').hide();
    $('.thankRefill11').fadeIn('fast').click(function(){
  $(this).hide();
  
 });

});



*/




//Check div of firts UI

$('#cbalance').click(function(){
 $('.check1d').fadeIn('fast').click(function(){
  $(this).fadeOut('fast');


});


});


//Check div of second UI

$('#cbalancex').click(function(){
 $('.check').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     

     

//show ITEM INFO Panel
     $('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').dblclick(function(){
      $('#panel1d').fadeIn('fast');

      });

     $('#panel1d').click(function(){

      $(this).fadeOut('fast');
     });


//second UI info

    $('#ride1x, #ride2x, #ride7x, #ride30x, #ridebtx, #cbalancex').dblclick(function(){
    $('#panel2').fadeIn('fast');
});

    $('#panel2').click(function(){

      $(this).fadeOut('fast');
     });



    //when any language is clicked all buttons become unchecked
$('.Modelbuttons, #english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').removeClass('class','active');
$('#credit, #cash, #debit, #other').removeClass('class','active');
$('#btn1a, #btn2a, #btn3a, #btn4a, #btn5a, #btn6a, #btn7a, #btn8a, #btn9a, #btn10a, #morea, #btn15a, #btn20a, btn25a, btn30a').fadeIn('fast');
$('.QtyValueXX').attr('value', '');

$('.total2').attr('value','$0.00');
});



    
});


































/////////////////////////////MOBI MoBI///////////////////////////////
/////////////////////////////////////////////////////////////////////








$('#Vm2Mobile, .UI2buttonsMOBI > button').click(function(){

$('.itmV1d').css('border-radius', '25px');
  
$('.itm1dtoHorizontal').show();
$('.ui1d').addClass('ui1dMOBI uiXXMOBI');

$('.TapBarXX').addClass('TapBarMOBIXX');

$('.Vm2LanB').hide();


if(Tapbar="Bottom"){
$('.Vm2LanBMOBI').hide();
} 


if(Tapbar="Top"){
$('.Vm2LanBMOBI').show();
} 


$('.itm1d').addClass('itm1dMOBI');
$('.itm1dBackground').addClass('itm1dBackgroundMOBI');


$('.DropItmMenu1d').addClass('DropItmMenu1dMOBI'); 


$('.itmV1d').addClass('itmV1dMOBI'); 

$('.itm1dCost').addClass('itm1dCostMOBI');

$('.itm1dtext').addClass('itm1dtextMOBI');

$('.BalanceV1d').show();

$('.qty1d').addClass('qty1dMOBI') 

$('.sub1d').addClass('sub1dMOBI');





$('.add1d').addClass('add1dMOBI');

$('.qtyvalue1d').addClass('qtyvalue1dMOBI');




$('.py2').addClass('py2MOBI');

$('.PayButtons1d').hide();


$('.PayButtonsMOBI1d').show();



$('.fin1d').addClass('fin1dMOBI');






$('.buy2').hide();

$('.total2').addClass('total2MOBI'); 


$('.refill2').hide();


$('.Nobuy2MOBI').show();


$('.refill2MOBI').show();






$('#CheckBalVM2, .MOBIshowVMs').show();
$('#cbalance').hide();



   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx');
   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx');

   $('.VmHelloxx').hide();
   $('.LanBgroupMOBIXX').show();
   $('.LanBMOBIxx').removeClass('SmallerLanBMOBIxx');

  $('.LanBMOBIxx').removeClass('SmallerLanBMOBIxx'); 
  
  
  $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').hide('');
   $('.BottomLanXX').hide();


   $('.NoAllFinModelsVm').show();

   $('.TransportModel12x4').show();


   $('.VmMachineHide').show();

$('.qtyVMx2').addClass('qtyVMMOBIx2');
$('.qtyvalue1dx2').addClass('qtyvalue1dMOBIx2');
$('.sub1dx2').addClass('sub1dMOBIx2');
$('.add1dx2').addClass('add1dMOBIx2');
$('.qtyVMx3').addClass('qtyVMMOBIx3');
$('.qtyV').addClass('qtyVMOBI');

});





LinearitmV1d = false;



// ///////Change itmv1d shape///////////

$('.itm1dtoLinear').click(function(){

  LinearitmV1d = true;

  $('.itmV1dMOBI').addClass('LinearitmV1dMOBI');
  $('.itm1dCostMOBI').addClass('Linearitm1dCostMOBI');
  $('.itm1dtextMOBI').addClass('Linearitm1dtextMOBI');
  $('.BalanceV1d ').addClass('LinearBalanceV1d'); 

   $('.itmV1dMOBI').removeClass('HorizontalitmV1dMOBI');


console.log('LinearitmV1d = '+ LinearitmV1d);



});





$('.itm1dtoMiniSquare').click(function(){

  LinearitmV1d = false;
  
  $('.itmV1dMOBI').removeClass('LinearitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('Linearitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('Linearitm1dtextMOBI');
  $('.BalanceV1d ').removeClass('LinearBalanceV1d');  
  $('.itmV1dMOBI').removeClass('HorizontalitmV1dMOBI');

  $('.itmV1dMOBI').addClass('MiniSquareitmV1dMOBI');
  $('.itm1dCostMOBI').addClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtextMOBI').addClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').addClass('MiniSquareitm1dPhoto');

  $('.itmV1dMOBI').removeClass('BlackLinear');
  $('.itmV1dMOBI').removeClass('whiteLinear');
console.log('LinearitmV1d = '+ LinearitmV1d);



});






$('.itm1dtoLinearPhoto').click(function(){

   LinearitmV1d = true;
  
  $('.itmV1dMOBI').removeClass('MiniSquareitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').removeClass('MiniSquareitm1dPhoto');
  $('.BalanceV1d ').removeClass('LinearBalanceV1d');
  $('.itmV1dMOBI').removeClass('HorizontalitmV1dMOBI');

  $('.itmV1dMOBI').addClass('PhotoLinearitmV1dMOBI');
  $('.itm1dPhoto').addClass('PhotoLinearitm1dPhoto');

console.log('LinearitmV1d = '+ LinearitmV1d);



});





$('.itm1dtoRegular').click(function(){

  LinearitmV1d = false;

  $('.itmV1dMOBI').removeClass('HorizontalitmV1dMOBI');
  
  $('.itmV1dMOBI').removeClass('PhotoLinearitmV1dMOBI');
  $('.itm1dPhoto').removeClass('PhotoLinearitm1dPhoto'); 
  $('.BalanceV1d ').removeClass('LinearBalanceV1d'); 

  $('.itmV1dMOBI').removeClass('MiniSquareitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').removeClass('MiniSquareitm1dPhoto');

  $('.itmV1dMOBI').removeClass('LinearitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('Linearitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('Linearitm1dtextMOBI'); 

  $('.itmV1dMOBI').removeClass('MiniSquareitmV1dMOBI');

  $('.itmV1dMOBI').removeClass('BlackLinear');
  $('.itmV1dMOBI').removeClass('whiteLinear');




console.log('LinearitmV1d = '+ LinearitmV1d);



});





$('.itm1dtoHorizontal').click(function(){

  LinearitmV1d = false;

  $('.itmV1dMOBI').addClass('HorizontalitmV1dMOBI');
  
  $('.itmV1dMOBI').removeClass('PhotoLinearitmV1dMOBI');
  $('.itm1dPhoto').removeClass('PhotoLinearitm1dPhoto'); 
  $('.BalanceV1d ').removeClass('LinearBalanceV1d'); 

  $('.itmV1dMOBI').removeClass('MiniSquareitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').removeClass('MiniSquareitm1dPhoto');

  $('.itmV1dMOBI').removeClass('LinearitmV1dMOBI');
  $('.itm1dCostMOBI').removeClass('Linearitm1dCostMOBI');
  $('.itm1dtextMOBI').removeClass('Linearitm1dtextMOBI'); 

  $('.itmV1dMOBI').removeClass('MiniSquareitmV1dMOBI');

  $('.itmV1dMOBI').removeClass('BlackLinear');
  $('.itmV1dMOBI').removeClass('whiteLinear');

console.log('LinearitmV1d = '+ LinearitmV1d);


});









// ///////Change itmv1d shape///////////



$('.itm1dtoHorizontal').click(function(){

   $(this).hide();
   $('.itm1dtoLinear').show();

});

$('.itm1dtoLinear').click(function(){

   $(this).hide();
   $('.itm1dtoMiniSquare').show();

});
$('.itm1dtoMiniSquare').click(function(){

   $(this).hide();
   $('.itm1dtoLinearPhoto').show();

});
$('.itm1dtoLinearPhoto').click(function(){

   $(this).hide();
   $('.itm1dtoRegular').show();

});

$('.itm1dtoRegular').click(function(){

   $(this).hide();
   $('.itm1dtoHorizontal').show();



});







$('.itm1dtoLinear, .itm1dtoLinearPhoto').click(function(){



if ((LinearitmV1d = true) && (uiColor = "White")){

  $('.itmV1dMOBI').removeClass('BlackLinear');
  $('.itmV1dMOBI').addClass('whiteLinear');


}else if((LinearitmV1d = true) && (uiColor = "Dark")){

  $('.itmV1dMOBI').removeClass('whiteLinear');
  $('.itmV1dMOBI').addClass('BlackLinear');

}

console.log('LinearitmV1d = '+ LinearitmV1d);
console.log('uiColor = '+ uiColor);


});







/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#Vm2Machine, .UI2buttons > button').click(function(){



  $('.itmV1d').css('border-radius', '20px');


$('.Organizeitm1d').hide();  

$('.ui1d').removeClass('ui1dMOBI uiXXMOBI');

$('.lan1d').removeClass('lan1dMOBI');

$('.Vm2LanB').show();


$('.Vm2LanBMOBI').hide();

$('.itm1dBackground').removeClass('itm1dBackgroundMOBI'); 
$('.itm1d').removeClass('itm1dMOBI');
$('.itmV1d').removeClass('itmV1dMOBI'); 

$('.DropItmMenu1d').removeClass('DropItmMenu1dMOBI');


$('.itm1dCost').removeClass('itm1dCostMOBI');

$('.itm1dtext').removeClass('itm1dtextMOBI');

$('.BalanceV1d').hide();


$('.qty1d').removeClass('qty1dMOBI') 

$('.sub1d').removeClass('sub1dMOBI');





$('.add1d').removeClass('add1dMOBI');

$('.qtyvalue1d').removeClass('qtyvalue1dMOBI');




$('.py2').removeClass('py2MOBI');

$('.PayButtons1d').show();


$('.PayButtonsMOBI1d').hide();



$('.fin1d').removeClass('fin1dMOBI');








$('#CheckBalVM2, .MOBIshowVMs').hide();
$('#cbalance').show();







  $('.itmV1d').removeClass('LinearitmV1dMOBI');
  $('.itm1dCost').removeClass('Linearitm1dCostMOBI');
  $('.itm1dtext').removeClass('Linearitm1dtextMOBI'); 

  $('.itmV1d').removeClass('MiniSquareitmV1dMOBI');
  $('.itm1dCost').removeClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtext').removeClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').removeClass('MiniSquareitm1dPhoto');
  $('.itmV1d').removeClass('PhotoLinearitmV1dMOBI');
  $('.itm1dPhoto').removeClass('PhotoLinearitm1dPhoto');  

  $('.itmV1d').removeClass('MiniSquareitmV1dMOBI');
  $('.itm1dCost').removeClass('MiniSquareitm1dCostMOBI');
  $('.itm1dtext').removeClass('MiniSquareitm1dtextMOBI');
  $('.itm1dPhoto').removeClass('MiniSquareitm1dPhoto');
  $('.itmV1d').removeClass('LinearitmV1dMOBI');
  $('.itm1dCost').removeClass('Linearitm1dCostMOBI');
  $('.itm1dtext').removeClass('Linearitm1dtextMOBI'); 
  $('.itmV1d').removeClass('MiniSquareitmV1dMOBI');




$('.fin1d').hide('');
$('.fin1d1').show('');

 $('.fin1d').removeClass('Fin1dNoRadius RoundFin');

 $('.VmHelloxx').hide();


$('.BottomLanXX').hide();

   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx TapBarMOBIXX');


$('.TransportationModelx4').removeClass('FFTSelectedModelx4');
$('.TransportModel2x4').addClass('FFTSelectedModelx4');


  $('.AllHeadersVm, .NoAllFinModelsVm').hide();

  $('.TransportModel12x4').hide();

$('.VmMachineHide').hide();



$('.qtyVMx2').removeClass('qtyVMMOBIx2');
$('.qtyvalue1dx2').removeClass('qtyvalue1dMOBIx2');
$('.sub1dx2').removeClass('sub1dMOBIx2');
$('.add1dx2').removeClass('add1dMOBIx2');
$('.qtyVMx3').removeClass('qtyVMMOBIx3');
$('.qtyV').removeClass('qtyVMOBI');



});













// $('.TransportModel1x4').click(function(){

//   $('.VModels').hide('');
//   $('#firtUI').show('');
// });



// $('.TransportModel2x4').click(function(){

//   $('.VModels').hide('');
//   $('#secondUI').show('');
// });


// $('.TransportModel3x4').click(function(){

//   $('.VModels').hide('');
//   $('#thirdUI').show('');
// });


// $('.TransportModel4x4').click(function(){

//   $('.VModels').hide('');
//   $('#fourthUI').show('');
// });


// $('.TransportModel5x4').click(function(){

//   $('.VModels').hide('');
//   $('#fifthUI').show('');
// });


// $('.TransportModel6x4').click(function(){

//   $('.VModels').hide('');
//   $('#sixthUI').show('');
// });


// $('.TransportModel7x4').click(function(){

//   $('.VModels').hide('');
//   $('#seventhUI').show('');
// });


// $('.TransportModel8x4').click(function(){

//   $('.VModels').hide('');
//   $('#eightUI').show('');
// });


// $('.TransportModel9x4').click(function(){

//   $('.VModels').hide('');
//   $('#ninethUI').show('');
// });



// $('.TransportModel10x4').click(function(){

//   $('.VModels').hide('');
//   $('#tenthUI').show('');
// });



// $('.TransportModel11x4').click(function(){

//   $('.VModels').hide('');
//   $('#eleventhUI').show('');
// });





// //////Switch items Models//////////////////////////









