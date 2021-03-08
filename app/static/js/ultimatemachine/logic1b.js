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
var qtyValue1b= 0;
var itemValue1b=0;
var payMethod1b='none';
var total1b=0;
var totalMOBI2=0;






//function to get itm value

 $('.itmVxx').on('click', function(){

    itemValue1b = $(this).attr('value');
    qtyValue1b=1;
    $('.QtyValueXX').attr('value', qtyValue1b);
    total1b= itemValue1b;
    totalMOBI2= itemValue1b;


    


   //  total2= itemValue * qtyValue;
    
  
 total1b= "$" + itemValue1b;
 
    //Testing
 
    console.log('item value is ' + itemValue1b+ ' and it is type of '
      + typeof('itemValue2')+ ' and qty is '+ qtyValue1b);
    console.log('Total is ' + total1b);

    

   //
 
 $('.total2').attr('value', total1b);

 });







//functions to get quantity value

 $('.Sub1bXX').on('click', function(){
 console.log('Sub was clicked');
 
    qtyValue1b = qtyValue1b - 1;
    $('.QtyValueXX').attr('value', qtyValue1b);

      if(qtyValue1b <=20){
      
      $('#add1b').fadeIn('fast');

    }


    if(qtyValue1b === 0){
      qtyValue1b = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue1b+ ' and it is type of '+ typeof('qtyValue2'));
    
    //multiply item value per quantity

    multiply1b= qtyValue1b * itemValue1b;

   decimal1b=multiply1b.toFixed(2);
    total1b= decimal1b;
    totalMOBI2= decimal1b;
  
  //testing
  total1b= "$" + total1b;
  console.log('total is ' + total1b);
  
 $('.total2').attr('value', total1b);

//
 });





 $('.Add1bXX').click(function(){


console.log('Add was clicked');

 if(qtyValue1b <=20){

   
    qtyValue1b = qtyValue1b + 1;
    $('.QtyValueXX').attr('value', qtyValue1b);

    //Testing
    console.log('quantity value is ' + qtyValue1b+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub1b
}


     if(qtyValue1b >=20){
        qtyValue1b=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply1b= qtyValue1b * itemValue1b;

   decimal1b=multiply1b.toFixed(2);
    total1b= decimal1b;
    totalMOBI2= decimal1b;
  
  //testing
  total1b= "$" + total1b;
  console.log('total is ' + total1b);
  
 $('.total2').attr('value', total1b);

//
 });





//funtion to show hide quantity buttons


// ////////Linear qty buttons//////////////////


 $('.qtyV').click(function(){

   qtyValue1b = $(this).attr('value');
    //Testing
    console.log('quantity value is ' + qtyValue1b+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

   multiply1b= qtyValue1b * itemValue1b;

   decimal1b=multiply1b.toFixed(2);

  total1b= decimal1b;
  totalMOBI2= decimal1b;


    //if total len is less then 2 add .00 to total
  
   

  //testing
  total1b= "$" + total1b;
  console.log('total is ' + total1b);
  
 $('#total2').attr('value', total1b);

//

 });





// ////////Linear qty buttons//////////////////











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift1b, .NoGiftx').click(function(){

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
console.log("The totalMOBI1b =" + totalMOBI2);
console.log("The totalGiftVM2 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + typeof('totalMOBI1b'));

$('#totalGiftVM2').attr('value', totalGiftVM2);



});




$('.friendVM21').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM21').fadeIn('');





});


$('.friendVM1b').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM1b').show();



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

    FriendQtyVM1b = 0;
    $('.FriendQtyVM1b').attr('value', FriendQtyVM1b);


 $('.SubVM1b').click(function(){

    FriendQtyVM1b = FriendQtyVM1b - 1;
    $('.FriendQtyVM1b').attr('value', FriendQtyVM1b);

  });


 $('.AddVM1b').click(function(){

    FriendQtyVM1b = FriendQtyVM1b + 1;
    $('.FriendQtyVM1b').attr('value', FriendQtyVM1b);

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

$('.PayButtonsMOBI1b > label').click(function(){
payMethod1b = $(this).attr('value');
console.log(payMethod1b);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod1b = "none";
  itemValue1b = '';
  total1b = "$0.00";
  $('.total2').attr('value', total1b);

  $('.itmV1b, .PayButtonsMOBI1b > label').removeClass('active');


$(this).fadeOut();
$('.qty1b').fadeOut();
qtyValue1b = 1;

});



$('.Nobuy2MOBI').click(function(){

 if(itemValue1b !=='0'){
$('.BuyNewVM2').fadeIn();
}

});


$('.lan1b, lan1bMOBI').click(function(){

$('.itmV1b, .PayButtonsMOBI1b > label, .PayButtons1b > label').removeClass('active');
$('.qty1b').fadeOut();
total1b = "$0.00";
 $('.total2').attr('value', total1b);

});



$('.itm2').dblclick(function(){

  $('.qty1b').fadeOut();

$('.itmV1b, .PayButtonsMOBI1b > label, .PayButtons1b > label').removeClass('active');
$('.qty1b').fadeOut();
total1b = "$0.00";
 $('.total2').attr('value', total1b);

});



$(' #Refill1b').click(function(){
if(itemValue1b !=='0'){
$('.RenewVM2').fadeIn();
}
});


$('#CheckBalVM2').click(function(){
  $('.CheckBalVM2').fadeIn();
});




//////////////////////////////////////////////////////////



























// $('.fix2').click(function() {
// //show these numbers when ride1 or ride2 are clicked
// $('.qty1b').fadeIn('fast');

// //change attribute of these numbers ride1 or ride2 are clicked

// });


// $('.unli2').click(function(){
// $('.qty1b').fadeOut('fast');
// });










// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty1b').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub1b').attr('class','disabled');
// $('#add1b').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub1b').fadeIn('fast');
$('#add1b').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod1b= $(this).attr('value');
  console.log('Payment method is: ' + payMethod1b + 'and item value is: ' +itemValue1b);

});

//Hide these PopUps

$('.seOptions1b, .seItem1b, .pmethod1b').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy2').click(function(){

  if(itemValue1b !=='0'){
  
       
       $('.check').hide();
       $('.thankRefill1b').hide();
       $('.thankBuy1b').fadeIn('fast');
       $('.TapBuy2').click(function(){
          $('.thankBuy1b').hide(); 
         });

        }

 });




$('#refill2').click(function(){

   if(itemValue1b !=='0'){
   
    
      $('.check').hide();
      $('.thankBuy1b').hide();
      $('.thankRefill1b').fadeIn('fast');
      $('.TapRefill2').click(function(){
      $('.thankRefill1b').hide();


 });
}
});







/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod1b =='none'){
    $('.seOptions1b').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1b =='none'){

      $('.pmethod1b').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1b !== 'none'){
       $('.seItem1b').fadeIn('fast');
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

   if(itemValue11 =='0' && payMethod1b =='none'){
    $('.seOptions1b').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1b =='none'){

      $('.pmethod1b').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1b !== 'none'){
       $('.seItem1b').fadeIn('fast');
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
 $('.check1b').fadeIn('fast').click(function(){
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
      $('#panel1b').fadeIn('fast');

      });

     $('#panel1b').click(function(){

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

$('.itmV1b').css('border-radius', '25px');
  
$('.itm1btoHorizontal').show();
$('.ui1b').addClass('ui1bMOBI uiXXMOBI');

$('.TapBarXX').addClass('TapBarMOBIXX');

$('.Vm2LanB').hide();


if(Tapbar="Bottom"){
$('.Vm2LanBMOBI').hide();
} 


if(Tapbar="Top"){
$('.Vm2LanBMOBI').show();
} 


$('.itm1b').addClass('itm1bMOBI');
$('.itm1bBackground').addClass('itm1bBackgroundMOBI');


$('.DropItmMenu1b').addClass('DropItmMenu1bMOBI'); 


$('.itmV1b').addClass('itmV1bMOBI'); 

$('.itm1bCost').addClass('itm1bCostMOBI');

$('.itm1btext').addClass('itm1btextMOBI');

$('.BalanceV1b').show();

$('.qty1b').addClass('qty1bMOBI') 

$('.sub1b').addClass('sub1bMOBI');





$('.add1b').addClass('add1bMOBI');

$('.qtyvalue1b').addClass('qtyvalue1bMOBI');




$('.py2').addClass('py2MOBI');

$('.PayButtons1b').hide();


$('.PayButtonsMOBI1b').show();



$('.fin1b').addClass('fin1bMOBI');






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


   $('.TransportModel12x4').show();


   $('.VmMachineHide').show();

$('.qtyVMx2').addClass('qtyVMMOBIx2');
$('.qtyvalue1bx2').addClass('qtyvalue1bMOBIx2');
$('.sub1bx2').addClass('sub1bMOBIx2');
$('.add1bx2').addClass('add1bMOBIx2');
$('.qtyVMx3').addClass('qtyVMMOBIx3');
$('.qtyV').addClass('qtyVMOBI');

});





LinearitmV1b = false;



// ///////Change itmv1b shape///////////

$('.itm1btoLinear').click(function(){

  LinearitmV1b = true;

  $('.itmV1bMOBI').addClass('LinearitmV1bMOBI');
  $('.itm1bCostMOBI').addClass('Linearitm1bCostMOBI');
  $('.itm1btextMOBI').addClass('Linearitm1btextMOBI');
  $('.BalanceV1b ').addClass('LinearBalanceV1b'); 

   $('.itmV1bMOBI').removeClass('HorizontalitmV1bMOBI');


console.log('LinearitmV1b = '+ LinearitmV1b);



});





$('.itm1btoMiniSquare').click(function(){

  LinearitmV1b = false;
  
  $('.itmV1bMOBI').removeClass('LinearitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('Linearitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('Linearitm1btextMOBI');
  $('.BalanceV1b ').removeClass('LinearBalanceV1b');  
  $('.itmV1bMOBI').removeClass('HorizontalitmV1bMOBI');

  $('.itmV1bMOBI').addClass('MiniSquareitmV1bMOBI');
  $('.itm1bCostMOBI').addClass('MiniSquareitm1bCostMOBI');
  $('.itm1btextMOBI').addClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').addClass('MiniSquareitm1bPhoto');

  $('.itmV1bMOBI').removeClass('BlackLinear');
  $('.itmV1bMOBI').removeClass('whiteLinear');
console.log('LinearitmV1b = '+ LinearitmV1b);



});






$('.itm1btoLinearPhoto').click(function(){

   LinearitmV1b = true;
  
  $('.itmV1bMOBI').removeClass('MiniSquareitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('MiniSquareitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').removeClass('MiniSquareitm1bPhoto');
  $('.BalanceV1b ').removeClass('LinearBalanceV1b');
  $('.itmV1bMOBI').removeClass('HorizontalitmV1bMOBI');

  $('.itmV1bMOBI').addClass('PhotoLinearitmV1bMOBI');
  $('.itm1bPhoto').addClass('PhotoLinearitm1bPhoto');

console.log('LinearitmV1b = '+ LinearitmV1b);



});





$('.itm1btoRegular').click(function(){

  LinearitmV1b = false;

  $('.itmV1bMOBI').removeClass('HorizontalitmV1bMOBI');
  
  $('.itmV1bMOBI').removeClass('PhotoLinearitmV1bMOBI');
  $('.itm1bPhoto').removeClass('PhotoLinearitm1bPhoto'); 
  $('.BalanceV1b ').removeClass('LinearBalanceV1b'); 

  $('.itmV1bMOBI').removeClass('MiniSquareitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('MiniSquareitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').removeClass('MiniSquareitm1bPhoto');

  $('.itmV1bMOBI').removeClass('LinearitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('Linearitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('Linearitm1btextMOBI'); 

  $('.itmV1bMOBI').removeClass('MiniSquareitmV1bMOBI');

  $('.itmV1bMOBI').removeClass('BlackLinear');
  $('.itmV1bMOBI').removeClass('whiteLinear');




console.log('LinearitmV1b = '+ LinearitmV1b);



});





$('.itm1btoHorizontal').click(function(){

  LinearitmV1b = false;

  $('.itmV1bMOBI').addClass('HorizontalitmV1bMOBI');
  
  $('.itmV1bMOBI').removeClass('PhotoLinearitmV1bMOBI');
  $('.itm1bPhoto').removeClass('PhotoLinearitm1bPhoto'); 
  $('.BalanceV1b ').removeClass('LinearBalanceV1b'); 

  $('.itmV1bMOBI').removeClass('MiniSquareitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('MiniSquareitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').removeClass('MiniSquareitm1bPhoto');

  $('.itmV1bMOBI').removeClass('LinearitmV1bMOBI');
  $('.itm1bCostMOBI').removeClass('Linearitm1bCostMOBI');
  $('.itm1btextMOBI').removeClass('Linearitm1btextMOBI'); 

  $('.itmV1bMOBI').removeClass('MiniSquareitmV1bMOBI');

  $('.itmV1bMOBI').removeClass('BlackLinear');
  $('.itmV1bMOBI').removeClass('whiteLinear');

console.log('LinearitmV1b = '+ LinearitmV1b);


});









// ///////Change itmv1b shape///////////



$('.itm1btoHorizontal').click(function(){

   $(this).hide();
   $('.itm1btoLinear').show();

});

$('.itm1btoLinear').click(function(){

   $(this).hide();
   $('.itm1btoMiniSquare').show();

});
$('.itm1btoMiniSquare').click(function(){

   $(this).hide();
   $('.itm1btoLinearPhoto').show();

});
$('.itm1btoLinearPhoto').click(function(){

   $(this).hide();
   $('.itm1btoRegular').show();

});

$('.itm1btoRegular').click(function(){

   $(this).hide();
   $('.itm1btoHorizontal').show();



});







$('.itm1btoLinear, .itm1btoLinearPhoto').click(function(){



if ((LinearitmV1b = true) && (uiColor = "White")){

  $('.itmV1bMOBI').removeClass('BlackLinear');
  $('.itmV1bMOBI').addClass('whiteLinear');


}else if((LinearitmV1b = true) && (uiColor = "Dark")){

  $('.itmV1bMOBI').removeClass('whiteLinear');
  $('.itmV1bMOBI').addClass('BlackLinear');

}

console.log('LinearitmV1b = '+ LinearitmV1b);
console.log('uiColor = '+ uiColor);


});







/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#Vm2Machine, .UI2buttons > button').click(function(){



  $('.itmV1b').css('border-radius', '20px');


$('.Organizeitm1b').hide();  

$('.ui1b').removeClass('ui1bMOBI uiXXMOBI');

$('.lan1b').removeClass('lan1bMOBI');

$('.Vm2LanB').show();


$('.Vm2LanBMOBI').hide();

$('.itm1bBackground').removeClass('itm1bBackgroundMOBI'); 
$('.itm1b').removeClass('itm1bMOBI');
$('.itmV1b').removeClass('itmV1bMOBI'); 

$('.DropItmMenu1b').removeClass('DropItmMenu1bMOBI');


$('.itm1bCost').removeClass('itm1bCostMOBI');

$('.itm1btext').removeClass('itm1btextMOBI');

$('.BalanceV1b').hide();


$('.qty1b').removeClass('qty1bMOBI') 

$('.sub1b').removeClass('sub1bMOBI');





$('.add1b').removeClass('add1bMOBI');

$('.qtyvalue1b').removeClass('qtyvalue1bMOBI');




$('.py2').removeClass('py2MOBI');

$('.PayButtons1b').show();


$('.PayButtonsMOBI1b').hide();



$('.fin1b').removeClass('fin1bMOBI');








$('#CheckBalVM2, .MOBIshowVMs').hide();
$('#cbalance').show();







  $('.itmV1b').removeClass('LinearitmV1bMOBI');
  $('.itm1bCost').removeClass('Linearitm1bCostMOBI');
  $('.itm1btext').removeClass('Linearitm1btextMOBI'); 

  $('.itmV1b').removeClass('MiniSquareitmV1bMOBI');
  $('.itm1bCost').removeClass('MiniSquareitm1bCostMOBI');
  $('.itm1btext').removeClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').removeClass('MiniSquareitm1bPhoto');
  $('.itmV1b').removeClass('PhotoLinearitmV1bMOBI');
  $('.itm1bPhoto').removeClass('PhotoLinearitm1bPhoto');  

  $('.itmV1b').removeClass('MiniSquareitmV1bMOBI');
  $('.itm1bCost').removeClass('MiniSquareitm1bCostMOBI');
  $('.itm1btext').removeClass('MiniSquareitm1btextMOBI');
  $('.itm1bPhoto').removeClass('MiniSquareitm1bPhoto');
  $('.itmV1b').removeClass('LinearitmV1bMOBI');
  $('.itm1bCost').removeClass('Linearitm1bCostMOBI');
  $('.itm1btext').removeClass('Linearitm1btextMOBI'); 
  $('.itmV1b').removeClass('MiniSquareitmV1bMOBI');




$('.fin1b').hide('');
$('.fin1b1').show('');

 $('.fin1b').removeClass('Fin1bNoRadius RoundFin');

 $('.VmHelloxx').hide();


$('.BottomLanXX').hide();

   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx TapBarMOBIXX');


$('.TransportationModelx4').removeClass('FFTSelectedModelx4');
$('.TransportModel2x4').addClass('FFTSelectedModelx4');


  $('.NoAllFinModelsVm').hide();

  $('.TransportModel12x4').hide();

$('.VmMachineHide').hide();



$('.qtyVMx2').removeClass('qtyVMMOBIx2');
$('.qtyvalue1bx2').removeClass('qtyvalue1bMOBIx2');
$('.sub1bx2').removeClass('sub1bMOBIx2');
$('.add1bx2').removeClass('add1bMOBIx2');
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









