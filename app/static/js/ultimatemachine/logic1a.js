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
var qtyValue1a= 0;
var itemValue1a=0;
var payMethod1a='none';
var total1a=0;
var totalMOBI2=0;






//function to get itm value

 $('.itmVxx').on('click', function(){

    itemValue1a = $(this).attr('value');
    qtyValue1a=1;
    $('.QtyValueXX').attr('value', qtyValue1a);
    total1a= itemValue1a;
    totalMOBI2= itemValue1a;


    


   //  total2= itemValue * qtyValue;
    
  
 total1a= "$" + itemValue1a;
 
    //Testing
 
    console.log('item value is ' + itemValue1a+ ' and it is type of '
      + typeof('itemValue2')+ ' and qty is '+ qtyValue1a);
    console.log('Total is ' + total1a);

    

   //
 
 $('.total2').attr('value', total1a);

 });







//functions to get quantity value

 $('.Sub1aXX').on('click', function(){
 console.log('Sub was clicked');
 
    qtyValue1a = qtyValue1a - 1;
    $('.QtyValueXX').attr('value', qtyValue1a);

      if(qtyValue1a <=20){
      
      $('#add1a').fadeIn('fast');

    }


    if(qtyValue1a === 0){
      qtyValue1a = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue1a+ ' and it is type of '+ typeof('qtyValue2'));
    
    //multiply item value per quantity

    multiply1a= qtyValue1a * itemValue1a;

   decimal1a=multiply1a.toFixed(2);
    total1a= decimal1a;
    totalMOBI2= decimal1a;
  
  //testing
  total1a= "$" + total1a;
  console.log('total is ' + total1a);
  
 $('.total2').attr('value', total1a);

//
 });





 $('.Add1aXX').click(function(){


console.log('Add was clicked');

 if(qtyValue1a <=20){

   
    qtyValue1a = qtyValue1a + 1;
    $('.QtyValueXX').attr('value', qtyValue1a);

    //Testing
    console.log('quantity value is ' + qtyValue1a+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub1a
}


     if(qtyValue1a >=20){
        qtyValue1a=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply1a= qtyValue1a * itemValue1a;

   decimal1a=multiply1a.toFixed(2);
    total1a= decimal1a;
    totalMOBI2= decimal1a;
  
  //testing
  total1a= "$" + total1a;
  console.log('total is ' + total1a);
  
 $('.total2').attr('value', total1a);

//
 });





//funtion to show hide quantity buttons


// ////////Linear qty buttons//////////////////


 $('.qtyV').click(function(){

   qtyValue1a = $(this).attr('value');
    //Testing
    console.log('quantity value is ' + qtyValue1a+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

   multiply1a= qtyValue1a * itemValue1a;

   decimal1a=multiply1a.toFixed(2);

  total1a= decimal1a;
  totalMOBI2= decimal1a;


    //if total len is less then 2 add .00 to total
  
   

  //testing
  total1a= "$" + total1a;
  console.log('total is ' + total1a);
  
 $('#total2').attr('value', total1a);

//

 });





// ////////Linear qty buttons//////////////////











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift1a, .NoGiftx').click(function(){

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
console.log("The totalMOBI1a =" + totalMOBI2);
console.log("The totalGiftVM2 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + typeof('totalMOBI1a'));

$('#totalGiftVM2').attr('value', totalGiftVM2);



});




$('.friendVM21').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM21').fadeIn('');





});


$('.friendVM1a').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM1a').show();



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

    FriendQtyVM1a = 0;
    $('.FriendQtyVM1a').attr('value', FriendQtyVM1a);


 $('.SubVM1a').click(function(){

    FriendQtyVM1a = FriendQtyVM1a - 1;
    $('.FriendQtyVM1a').attr('value', FriendQtyVM1a);

  });


 $('.AddVM1a').click(function(){

    FriendQtyVM1a = FriendQtyVM1a + 1;
    $('.FriendQtyVM1a').attr('value', FriendQtyVM1a);

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

$('.PayButtonsMOBI1a > label').click(function(){
payMethod1a = $(this).attr('value');
console.log(payMethod1a);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod1a = "none";
  itemValue1a = '';
  total1a = "$0.00";
  $('.total2').attr('value', total1a);

  $('.itmV1a, .PayButtonsMOBI1a > label').removeClass('active');


$(this).fadeOut();
$('.qty1a').fadeOut();
qtyValue1a = 1;

});



$('.Nobuy2MOBI').click(function(){

 if(itemValue1a !=='0'){
$('.BuyNewVM2').fadeIn();
}

});


$('.lan1a, lan1aMOBI').click(function(){

$('.itmV1a, .PayButtonsMOBI1a > label, .PayButtons1a > label').removeClass('active');
$('.qty1a').fadeOut();
total1a = "$0.00";
 $('.total2').attr('value', total1a);

});



$('.itm2').dblclick(function(){

  $('.qty1a').fadeOut();

$('.itmV1a, .PayButtonsMOBI1a > label, .PayButtons1a > label').removeClass('active');
$('.qty1a').fadeOut();
total1a = "$0.00";
 $('.total2').attr('value', total1a);

});



$(' #Refill1a').click(function(){
if(itemValue1a !=='0' && payMethod1a !=='none'){
$('.RenewVM2').fadeIn();
}
});


$('#CheckBalVM2').click(function(){
  $('.CheckBalVM2').fadeIn();
});




//////////////////////////////////////////////////////////



























// $('.fix2').click(function() {
// //show these numbers when ride1 or ride2 are clicked
// $('.qty1a').fadeIn('fast');

// //change attribute of these numbers ride1 or ride2 are clicked

// });


// $('.unli2').click(function(){
// $('.qty1a').fadeOut('fast');
// });










// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty1a').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub1a').attr('class','disabled');
// $('#add1a').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub1a').fadeIn('fast');
$('#add1a').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod1a= $(this).attr('value');
  console.log('Payment method is: ' + payMethod1a + 'and item value is: ' +itemValue1a);

});

//Hide these PopUps

$('.seOptions1a, .seItem1a, .pmethod1a').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy2').click(function(){

  if(itemValue1a !=='0'){
  
       
       $('.check').hide();
       $('.thankRefill1a').hide();
       $('.thankBuy1a').fadeIn('fast');
       $('.TapBuy2').click(function(){
          $('.thankBuy1a').hide(); 
         });

        }

 });




$('#refill2').click(function(){

   if(itemValue1a !=='0'){
   
    
      $('.check').hide();
      $('.thankBuy1a').hide();
      $('.thankRefill1a').fadeIn('fast');
      $('.TapRefill2').click(function(){
      $('.thankRefill1a').hide();


 });
}
});







/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod1a =='none'){
    $('.seOptions1a').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1a =='none'){

      $('.pmethod1a').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1a !== 'none'){
       $('.seItem1a').fadeIn('fast');
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

   if(itemValue11 =='0' && payMethod1a =='none'){
    $('.seOptions1a').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1a =='none'){

      $('.pmethod1a').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1a !== 'none'){
       $('.seItem1a').fadeIn('fast');
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
 $('.check1a').fadeIn('fast').click(function(){
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
      $('#panel1a').fadeIn('fast');

      });

     $('#panel1a').click(function(){

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

$('.itmV1a').css('border-radius', '25px');
  
$('.itm1atoHorizontal').show();
$('.ui1a').addClass('ui1aMOBI uiXXMOBI');

$('.TapBarXX').addClass('TapBarMOBIXX');

$('.Vm2LanB').hide();


if(Tapbar="Bottom"){
$('.Vm2LanBMOBI').hide();
} 


if(Tapbar="Top"){
$('.Vm2LanBMOBI').show();
} 


$('.itm1a').addClass('itm1aMOBI');
$('.itm1aBackground').addClass('itm1aBackgroundMOBI');


$('.DropItmMenu1a').addClass('DropItmMenu1aMOBI'); 


$('.itmV1a').addClass('itmV1aMOBI'); 

$('.itm1aCost').addClass('itm1aCostMOBI');

$('.itm1atext').addClass('itm1atextMOBI');

$('.BalanceV1a').show();

$('.qty1a').addClass('qty1aMOBI') 

$('.sub1a').addClass('sub1aMOBI');





$('.add1a').addClass('add1aMOBI');

$('.qtyvalue1a').addClass('qtyvalue1aMOBI');




$('.py2').addClass('py2MOBI');

$('.PayButtons1a').hide();


$('.PayButtonsMOBI1a').show();



$('.fin1a').addClass('fin1aMOBI');






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
$('.qtyvalue1ax2').addClass('qtyvalue1aMOBIx2');
$('.sub1ax2').addClass('sub1aMOBIx2');
$('.add1ax2').addClass('add1aMOBIx2');
$('.qtyVMx3').addClass('qtyVMMOBIx3');
$('.qtyV').addClass('qtyVMOBI');

});





LinearitmV1a = false;



// ///////Change itmv1a shape///////////

$('.itm1atoLinear').click(function(){

  LinearitmV1a = true;

  $('.itmV1aMOBI').addClass('LinearitmV1aMOBI');
  $('.itm1aCostMOBI').addClass('Linearitm1aCostMOBI');
  $('.itm1atextMOBI').addClass('Linearitm1atextMOBI');
  $('.BalanceV1a ').addClass('LinearBalanceV1a'); 

   $('.itmV1aMOBI').removeClass('HorizontalitmV1aMOBI');


console.log('LinearitmV1a = '+ LinearitmV1a);



});





$('.itm1atoMiniSquare').click(function(){

  LinearitmV1a = false;
  
  $('.itmV1aMOBI').removeClass('LinearitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('Linearitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('Linearitm1atextMOBI');
  $('.BalanceV1a ').removeClass('LinearBalanceV1a');  
  $('.itmV1aMOBI').removeClass('HorizontalitmV1aMOBI');

  $('.itmV1aMOBI').addClass('MiniSquareitmV1aMOBI');
  $('.itm1aCostMOBI').addClass('MiniSquareitm1aCostMOBI');
  $('.itm1atextMOBI').addClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').addClass('MiniSquareitm1aPhoto');

  $('.itmV1aMOBI').removeClass('BlackLinear');
  $('.itmV1aMOBI').removeClass('whiteLinear');
console.log('LinearitmV1a = '+ LinearitmV1a);



});






$('.itm1atoLinearPhoto').click(function(){

   LinearitmV1a = true;
  
  $('.itmV1aMOBI').removeClass('MiniSquareitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('MiniSquareitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').removeClass('MiniSquareitm1aPhoto');
  $('.BalanceV1a ').removeClass('LinearBalanceV1a');
  $('.itmV1aMOBI').removeClass('HorizontalitmV1aMOBI');

  $('.itmV1aMOBI').addClass('PhotoLinearitmV1aMOBI');
  $('.itm1aPhoto').addClass('PhotoLinearitm1aPhoto');

console.log('LinearitmV1a = '+ LinearitmV1a);



});





$('.itm1atoRegular').click(function(){

  LinearitmV1a = false;

  $('.itmV1aMOBI').removeClass('HorizontalitmV1aMOBI');
  
  $('.itmV1aMOBI').removeClass('PhotoLinearitmV1aMOBI');
  $('.itm1aPhoto').removeClass('PhotoLinearitm1aPhoto'); 
  $('.BalanceV1a ').removeClass('LinearBalanceV1a'); 

  $('.itmV1aMOBI').removeClass('MiniSquareitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('MiniSquareitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').removeClass('MiniSquareitm1aPhoto');

  $('.itmV1aMOBI').removeClass('LinearitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('Linearitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('Linearitm1atextMOBI'); 

  $('.itmV1aMOBI').removeClass('MiniSquareitmV1aMOBI');

  $('.itmV1aMOBI').removeClass('BlackLinear');
  $('.itmV1aMOBI').removeClass('whiteLinear');




console.log('LinearitmV1a = '+ LinearitmV1a);



});





$('.itm1atoHorizontal').click(function(){

  LinearitmV1a = false;

  $('.itmV1aMOBI').addClass('HorizontalitmV1aMOBI');
  
  $('.itmV1aMOBI').removeClass('PhotoLinearitmV1aMOBI');
  $('.itm1aPhoto').removeClass('PhotoLinearitm1aPhoto'); 
  $('.BalanceV1a ').removeClass('LinearBalanceV1a'); 

  $('.itmV1aMOBI').removeClass('MiniSquareitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('MiniSquareitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').removeClass('MiniSquareitm1aPhoto');

  $('.itmV1aMOBI').removeClass('LinearitmV1aMOBI');
  $('.itm1aCostMOBI').removeClass('Linearitm1aCostMOBI');
  $('.itm1atextMOBI').removeClass('Linearitm1atextMOBI'); 

  $('.itmV1aMOBI').removeClass('MiniSquareitmV1aMOBI');

  $('.itmV1aMOBI').removeClass('BlackLinear');
  $('.itmV1aMOBI').removeClass('whiteLinear');

console.log('LinearitmV1a = '+ LinearitmV1a);


});









// ///////Change itmv1a shape///////////



$('.itm1atoHorizontal').click(function(){

   $(this).hide();
   $('.itm1atoLinear').show();

});

$('.itm1atoLinear').click(function(){

   $(this).hide();
   $('.itm1atoMiniSquare').show();

});
$('.itm1atoMiniSquare').click(function(){

   $(this).hide();
   $('.itm1atoLinearPhoto').show();

});
$('.itm1atoLinearPhoto').click(function(){

   $(this).hide();
   $('.itm1atoRegular').show();

});

$('.itm1atoRegular').click(function(){

   $(this).hide();
   $('.itm1atoHorizontal').show();



});







$('.itm1atoLinear, .itm1atoLinearPhoto').click(function(){



if ((LinearitmV1a = true) && (uiColor = "White")){

  $('.itmV1aMOBI').removeClass('BlackLinear');
  $('.itmV1aMOBI').addClass('whiteLinear');


}else if((LinearitmV1a = true) && (uiColor = "Dark")){

  $('.itmV1aMOBI').removeClass('whiteLinear');
  $('.itmV1aMOBI').addClass('BlackLinear');

}

console.log('LinearitmV1a = '+ LinearitmV1a);
console.log('uiColor = '+ uiColor);


});







/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#Vm2Machine, .UI2buttons > button').click(function(){



  $('.itmV1a').css('border-radius', '20px');


$('.Organizeitm1a').hide();  

$('.ui1a').removeClass('ui1aMOBI uiXXMOBI');

$('.lan1a').removeClass('lan1aMOBI');

$('.Vm2LanB').show();


$('.Vm2LanBMOBI').hide();

$('.itm1aBackground').removeClass('itm1aBackgroundMOBI'); 
$('.itm1a').removeClass('itm1aMOBI');
$('.itmV1a').removeClass('itmV1aMOBI'); 

$('.DropItmMenu1a').removeClass('DropItmMenu1aMOBI');


$('.itm1aCost').removeClass('itm1aCostMOBI');

$('.itm1atext').removeClass('itm1atextMOBI');

$('.BalanceV1a').hide();


$('.qty1a').removeClass('qty1aMOBI') 

$('.sub1a').removeClass('sub1aMOBI');





$('.add1a').removeClass('add1aMOBI');

$('.qtyvalue1a').removeClass('qtyvalue1aMOBI');




$('.py2').removeClass('py2MOBI');

$('.PayButtons1a').show();


$('.PayButtonsMOBI1a').hide();



$('.fin1a').removeClass('fin1aMOBI');







$('#CheckBalVM2, .MOBIshowVMs').hide();
$('#cbalance').show();







  $('.itmV1a').removeClass('LinearitmV1aMOBI');
  $('.itm1aCost').removeClass('Linearitm1aCostMOBI');
  $('.itm1atext').removeClass('Linearitm1atextMOBI'); 

  $('.itmV1a').removeClass('MiniSquareitmV1aMOBI');
  $('.itm1aCost').removeClass('MiniSquareitm1aCostMOBI');
  $('.itm1atext').removeClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').removeClass('MiniSquareitm1aPhoto');
  $('.itmV1a').removeClass('PhotoLinearitmV1aMOBI');
  $('.itm1aPhoto').removeClass('PhotoLinearitm1aPhoto');  

  $('.itmV1a').removeClass('MiniSquareitmV1aMOBI');
  $('.itm1aCost').removeClass('MiniSquareitm1aCostMOBI');
  $('.itm1atext').removeClass('MiniSquareitm1atextMOBI');
  $('.itm1aPhoto').removeClass('MiniSquareitm1aPhoto');
  $('.itmV1a').removeClass('LinearitmV1aMOBI');
  $('.itm1aCost').removeClass('Linearitm1aCostMOBI');
  $('.itm1atext').removeClass('Linearitm1atextMOBI'); 
  $('.itmV1a').removeClass('MiniSquareitmV1aMOBI');




$('.fin1a').hide('');
$('.fin1a1').show('');

 $('.fin1a').removeClass('Fin1aNoRadius RoundFin');

 $('.VmHelloxx').hide();


$('.BottomLanXX').hide();

   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx TapBarMOBIXX');


$('.TransportationModelx4').removeClass('FFTSelectedModelx4');
$('.TransportModel2x4').addClass('FFTSelectedModelx4');


  $('.NoAllFinModelsVm').hide();

  $('.TransportModel12x4').hide();

$('.VmMachineHide').hide();



$('.qtyVMx2').removeClass('qtyVMMOBIx2');
$('.qtyvalue1ax2').removeClass('qtyvalue1aMOBIx2');
$('.sub1ax2').removeClass('sub1aMOBIx2');
$('.add1ax2').removeClass('add1aMOBIx2');
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









