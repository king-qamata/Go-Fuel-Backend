$(document).ready(function(){

$('.fin22').addClass('NoPy');


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
var qtyValue22= 0;
var itemValue22=0;
var payMethod22='none';
var total22=0;
var totalMOBI2=0;






//function to get itm value

 $('.itmVxx').on('click', function(){

    itemValue22 = $(this).attr('value');
    qtyValue22=1;
    $('.QtyValueXX').attr('value', qtyValue22);
    total22= itemValue22;
    totalMOBI2= itemValue22;


    


   //  total2= itemValue * qtyValue;
    
  
 total22= "$" + itemValue22;
 
    //Testing
 
    console.log('item value is ' + itemValue22+ ' and it is type of '
      + typeof('itemValue2')+ ' and qty is '+ qtyValue22);
    console.log('Total is ' + total22);

    

   //
 
 $('.total2').attr('value', total22);

 });







//functions to get quantity value

 $('.Sub22XX').on('click', function(){
 console.log('Sub was clicked');
 
    qtyValue22 = qtyValue22 - 1;
    $('.QtyValueXX').attr('value', qtyValue22);

      if(qtyValue22 <=20){
      
      $('#add22').fadeIn('fast');

    }


    if(qtyValue22 === 0){
      qtyValue22 = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue22+ ' and it is type of '+ typeof('qtyValue2'));
    
    //multiply item value per quantity

    multiply22= qtyValue22 * itemValue22;

   decimal22=multiply22.toFixed(2);
    total22= decimal22;
    totalMOBI2= decimal22;
  
  //testing
  total22= "$" + total22;
  console.log('total is ' + total22);
  
 $('.total2').attr('value', total22);

//
 });





 $('.Add22XX').click(function(){


console.log('Add was clicked');

 if(qtyValue22 <=20){

   
    qtyValue22 = qtyValue22 + 1;
    $('.QtyValueXX').attr('value', qtyValue22);

    //Testing
    console.log('quantity value is ' + qtyValue22+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub22
}


     if(qtyValue22 >=20){
        qtyValue22=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply22= qtyValue22 * itemValue22;

   decimal22=multiply22.toFixed(2);
    total22= decimal22;
    totalMOBI2= decimal22;
  
  //testing
  total22= "$" + total22;
  console.log('total is ' + total22);
  
 $('.total2').attr('value', total22);

//
 });





//funtion to show hide quantity buttons


// ////////Linear qty buttons//////////////////


 $('.qtyV').click(function(){

   qtyValue22 = $(this).attr('value');
    //Testing
    console.log('quantity value is ' + qtyValue22+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

   multiply22= qtyValue22 * itemValue22;

   decimal22=multiply22.toFixed(2);

  total22= decimal22;
  totalMOBI2= decimal22;


    //if total len is less then 2 add .00 to total
  
   

  //testing
  total22= "$" + total22;
  console.log('total is ' + total22);
  
 $('#total2').attr('value', total22);

//

 });





// ////////Linear qty buttons//////////////////











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift22, .GiftX').click(function(){

  if( VM2screenType === 'Mobile'){
   $('.sendGiftVM2, .closeGiftVM2').fadeIn();
  }

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
console.log("The totalMOBI22 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + typeof('totalMOBI22'));

$('#totalGiftVM2').attr('value', totalGiftVM2);



});




$('.friendVM21').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM21').fadeIn('');





});


$('.friendVM22').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM22').show();



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

    FriendQtyVM22 = 0;
    $('.FriendQtyVM22').attr('value', FriendQtyVM22);


 $('.SubVM22').click(function(){

    FriendQtyVM22 = FriendQtyVM22 - 1;
    $('.FriendQtyVM22').attr('value', FriendQtyVM22);

  });


 $('.AddVM22').click(function(){

    FriendQtyVM22 = FriendQtyVM22 + 1;
    $('.FriendQtyVM22').attr('value', FriendQtyVM22);

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

$('.PayButtonsMOBI22 > label').click(function(){
payMethod22 = $(this).attr('value');
console.log(payMethod22);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod22 = "none";
  itemValue22 = '';
  total22 = "$0.00";
  $('.total2').attr('value', total22);

  $('.itmV22, .PayButtonsMOBI22 > label').removeClass('active');


$(this).fadeOut();
$('.qty22').fadeOut();
qtyValue22 = 1;

});



$('.buy2MOBI').click(function(){

 if(VM2screenType === 'Machine' && itemValue22 !=='0'){
 $('.thankBuy22').fadeIn();
 }


 if(VM2screenType === 'Mobile' && itemValue22 !=='0'){
 $('.BuyNewVM2').fadeIn();
 }

});


$('.thankBuy22, .thankRefill22, .lan22, lan22MOBI, .TransportServiceLabel, .BlankTapbarVM ').click(function(){

$('.itmVxx, .PayButtonsMOBI22 > label, .PayButtons22 > label').removeClass('active');
$('.qty22, .Qtyx1').fadeOut();
total22 = "$0.00";
 $('.total2').attr('value', total22);

});







$('.itm2').dblclick(function(){

  $('.qty22').fadeOut();

$('.itmV22, .PayButtonsMOBI22 > label, .PayButtons22 > label').removeClass('active');
$('.qty22').fadeOut();
total22 = "$0.00";
 $('.total2').attr('value', total22);

});



$(' #Refill22').click(function(){
if(itemValue22 !=='0' && payMethod22 !=='none'){
$('.RenewVM2').fadeIn();
}
});


$('#CheckBalVM2').click(function(){
  $('.CheckBalVM2').fadeIn();
});




//////////////////////////////////////////////////////////








$('#Refill22').click(function(){

 if(itemValue22 !=='0' && payMethod22 !=='none'){
$('.RefundVM2').fadeIn();
}

});


















// $('.fix2').click(function() {
// //show these numbers when ride1 or ride2 are clicked
// $('.qty22').fadeIn('fast');

// //change attribute of these numbers ride1 or ride2 are clicked

// });


// $('.unli2').click(function(){
// $('.qty22').fadeOut('fast');
// });










// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty22').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub22').attr('class','disabled');
// $('#add22').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub22').fadeIn('fast');
$('#add22').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod22= $(this).attr('value');
  console.log('Payment method is: ' + payMethod22 + 'and item value is: ' +itemValue22);

});

//Hide these PopUps

$('.seOptions22, .seItem22, .pmethod22').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy2').click(function(){

  if(itemValue22 !=='0'){
  
       
       $('.check').hide();
       $('.thankRefill22').hide();
       $('.thankBuy22').fadeIn('');
        }

 });





$('#refill2').click(function(){

   if(itemValue22 !=='0'){
   
    
      $('.check').hide();
      $('.thankBuy22').hide();
      $('.thankRefill22').fadeIn('');

 }

});





$('.thankBuy22, .thankRefill22').click(function(){

   $(this).fadeOut();

});






/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod22 =='none'){
    $('.seOptions22').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod22 =='none'){

      $('.pmethod22').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod22 !== 'none'){
       $('.seItem22').fadeIn('fast');
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

   if(itemValue11 =='0' && payMethod22 =='none'){
    $('.seOptions22').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod22 =='none'){

      $('.pmethod22').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod22 !== 'none'){
       $('.seItem22').fadeIn('fast');
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
 $('.check22').fadeIn('fast').click(function(){
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
      $('#panel22').fadeIn('fast');

      });

     $('#panel22').click(function(){

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




























VM2screenType = 'Machine';

///////////////////////////////////

$('#Vm2Machine, .Vm2Machine').click(function(){

  console.log('buttons are ' + VM2screenType);

VM2screenType = 'Machine';

// $('.UI2buttons').show();
// $('.UI2buttonsMOBI').hide();

$('.BlankTapbarVM').hide();
});




$('#Vm2Mobile').click(function(){

VM2screenType = 'Mobile';
// $('.UI2buttons').hide();
// $('.UI2buttonsMOBI').show();

console.log('buttons are ' + VM2screenType);
$('.BlankTapbarVM').hide();
});


////////////////////////////////////








$('#BusTr, #SubTr, .TransportationModelx4').click(function(){
  
  $('.ItmBackG44').hide();
  $('.ItmBackG').show();

});



$('#MetroTr, #LirrTr').click(function(){
  
  $('.ItmBackG').hide();
  $('.ItmBackG44').show();

});














/////////////////////////////MOBI MoBI///////////////////////////////
/////////////////////////////////////////////////////////////////////








$('#Vm2Mobile, .UI2buttonsMOBI > button').click(function(){

VM2screenType = 'Mobile';

$('.py2').show();

$('.itmV22').css('border-radius', '25px');
  
$('.itm22toHorizontal').show();
$('.ui22').addClass('ui22MOBI uiXXMOBI');

$('.TapBarXX').addClass('TapBarMOBIXX');

$('.Vm2LanB').hide();


if(Tapbar="Bottom"){
$('.Vm2LanBMOBI').hide();
} 


if(Tapbar="Top"){
$('.Vm2LanBMOBI').show();
} 


$('.itm2').addClass('itm2MOBI');
$('.itm22Background').addClass('itm22BackgroundMOBI');


$('.DropItmMenu22').addClass('DropItmMenu22MOBI'); 


$('.itmV22').addClass('itmV22MOBI'); 

$('.itm22Cost').addClass('itm22CostMOBI');

$('.itm22text').addClass('itm22textMOBI');

$('.BalanceV22, .BalanceV33').show();

$('.qty22').addClass('qty22MOBI') 

$('.sub22').addClass('sub22MOBI');





$('.add22').addClass('add22MOBI');

$('.qtyvalue22').addClass('qtyvalue22MOBI');




$('.py2').addClass('py2MOBI');

$('.PayButtons22').hide();


$('.PayButtonsMOBI22').show();



$('.fin22').addClass('fin22MOBI');



$('.total2').addClass('total2MOBI'); 



if(FinModel1 === true){


$('.buy2First').hide();
$('.refill2First').hide();
$('.buy2MOBIFirst').show();
$('.refill2MOBIFirst').show();


}



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


   $('.VmTapBar2, .VmTapBar3').show();

   $('.TransportModel6x4, .TransportModel7x4, .TransportModel7Bx4, .TransportModel7Cx4, .TransportModel9x4, .TransportModel9bx4, .TransportModel12x4, .TransportModel78x4 ').show();


   $('.VmMachineHide').show();

$('.qtyVMx2').addClass('qtyVMMOBIx2');
$('.qtyvalue22x2').addClass('qtyvalue22MOBIx2');
$('.sub22x2').addClass('sub22MOBIx2');
$('.add22x2').addClass('add22MOBIx2');
$('.qtyVMx3').addClass('qtyVMMOBIx3');
$('.qtyV').addClass('qtyVMOBI');



$('.MobileVMs').show();
$('.BigFont1a').addClass('BigFont1aMOBI');
$('.SmallFont1a').addClass('SmallFont1aMOBI');
$('.ItemCost1a').addClass('ItemCost1aMOBI');

$('.BigFont1b').addClass('BigFont1bMOBI');
$('.SmallFont1b').addClass('SmallFont1bMOBI');
$('.ItemCost1b').addClass('ItemCost1bMOBI');


$('.BigFont1c').addClass('BigFont1cMOBI');
$('.SmallFont1c').addClass('SmallFont1cMOBI');
$('.ItemCost1c').addClass('ItemCost1cMOBI');

$('.BigFont1d').addClass('BigFont1dMOBI');
$('.SmallFont1d').addClass('SmallFont1dMOBI');
$('.ItemCost1d').addClass('ItemCost1dMOBI');

$('.TransportService').show();


$('.BalanceV1c').addClass('BalanceV1cMOBI');

$('.BalanceV1d').addClass('BalanceV1dMOBI');


$('.BlankTapbarVM').addClass('BlankTapbarMOBIVM');


$('.BlankLogoVM').addClass('BlankLogoMOBIVM');



$('.fin222').addClass('fin222MOBI');
$('.FinButton2').addClass('FinButton2MOBI');
$('.fin223').addClass('fin223MOBI');
$('.FinButton3').addClass('FinButton3MOBI');
$('.fin224').addClass('fin224MOBI');
$('.FinButton4').addClass('FinButton4MOBI');
$('.fin224a').addClass('fin224aMOBI');
$('.FinButton4a').addClass('FinButton4aMOBI');
$('.fin225').addClass('fin225MOBI');
$('.FinButton5').addClass('FinButton5MOBI');
$('.fin226').addClass('fin226MOBI');
$('.FinButton6').addClass('FinButton6MOBI');
$('.fin227').addClass('fin227MOBI '); 
$('.FinButton7').addClass('FinButton7MOBI');
$('.fin228').addClass('fin228MOBI');
$('.FinButton8').addClass('FinButton8MOBI');
$('.FinIconX').addClass('FinIconXMOBI');
$('.fin229').addClass('fin229MOBI '); 
$('.FinButton9').addClass('FinButton9MOBI');
$('.fin2210').addClass('fin2210MOBI');
$('.FinButton10').addClass('FinButton10MOBI');
$('.fin2211').addClass('fin2211MOBI');
$('.total2211').addClass('total2211MOBI');
$('.FinButton11').addClass('FinButton11MOBI');
$('.FinButton11Other').addClass('FinButton11OtherMOBI');
$('.fin224c').addClass('fin224cMOBI');
$('.FinButton4c').addClass('FinButton4cMOBI');
$('.FinButtonGift4c').addClass('FinButtonGift4cMOBI');


});





LinearitmV22 = false;



// ///////Change itmv22 shape///////////

$('.itm22toLinear').click(function(){

  LinearitmV22 = true;

  $('.itmV22MOBI').addClass('LinearitmV22MOBI');
  $('.itm22CostMOBI').addClass('Linearitm22CostMOBI');
  $('.itm22textMOBI').addClass('Linearitm22textMOBI');
  $('.BalanceV22 ').addClass('LinearBalanceV22'); 

   $('.itmV22MOBI').removeClass('HorizontalitmV22MOBI');


console.log('LinearitmV22 = '+ LinearitmV22);



});





$('.itm22toMiniSquare').click(function(){

  LinearitmV22 = false;
  
  $('.itmV22MOBI').removeClass('LinearitmV22MOBI');
  $('.itm22CostMOBI').removeClass('Linearitm22CostMOBI');
  $('.itm22textMOBI').removeClass('Linearitm22textMOBI');
  $('.BalanceV22 ').removeClass('LinearBalanceV22');  
  $('.itmV22MOBI').removeClass('HorizontalitmV22MOBI');

  $('.itmV22MOBI').addClass('MiniSquareitmV22MOBI');
  $('.itm22CostMOBI').addClass('MiniSquareitm22CostMOBI');
  $('.itm22textMOBI').addClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').addClass('MiniSquareitm22Photo');

  $('.itmV22MOBI').removeClass('BlackLinear');
  $('.itmV22MOBI').removeClass('whiteLinear');
console.log('LinearitmV22 = '+ LinearitmV22);



});






$('.itm22toLinearPhoto').click(function(){

   LinearitmV22 = true;
  
  $('.itmV22MOBI').removeClass('MiniSquareitmV22MOBI');
  $('.itm22CostMOBI').removeClass('MiniSquareitm22CostMOBI');
  $('.itm22textMOBI').removeClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').removeClass('MiniSquareitm22Photo');
  $('.BalanceV22 ').removeClass('LinearBalanceV22');
  $('.itmV22MOBI').removeClass('HorizontalitmV22MOBI');

  $('.itmV22MOBI').addClass('PhotoLinearitmV22MOBI');
  $('.itm22Photo').addClass('PhotoLinearitm22Photo');

console.log('LinearitmV22 = '+ LinearitmV22);



});





$('.itm22toRegular').click(function(){

  LinearitmV22 = false;

  $('.itmV22MOBI').removeClass('HorizontalitmV22MOBI');
  
  $('.itmV22MOBI').removeClass('PhotoLinearitmV22MOBI');
  $('.itm22Photo').removeClass('PhotoLinearitm22Photo'); 
  $('.BalanceV22 ').removeClass('LinearBalanceV22'); 

  $('.itmV22MOBI').removeClass('MiniSquareitmV22MOBI');
  $('.itm22CostMOBI').removeClass('MiniSquareitm22CostMOBI');
  $('.itm22textMOBI').removeClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').removeClass('MiniSquareitm22Photo');

  $('.itmV22MOBI').removeClass('LinearitmV22MOBI');
  $('.itm22CostMOBI').removeClass('Linearitm22CostMOBI');
  $('.itm22textMOBI').removeClass('Linearitm22textMOBI'); 

  $('.itmV22MOBI').removeClass('MiniSquareitmV22MOBI');

  $('.itmV22MOBI').removeClass('BlackLinear');
  $('.itmV22MOBI').removeClass('whiteLinear');




console.log('LinearitmV22 = '+ LinearitmV22);



});





$('.itm22toHorizontal').click(function(){

  LinearitmV22 = false;

  $('.itmV22MOBI').addClass('HorizontalitmV22MOBI');
  
  $('.itmV22MOBI').removeClass('PhotoLinearitmV22MOBI');
  $('.itm22Photo').removeClass('PhotoLinearitm22Photo'); 
  $('.BalanceV22 ').removeClass('LinearBalanceV22'); 

  $('.itmV22MOBI').removeClass('MiniSquareitmV22MOBI');
  $('.itm22CostMOBI').removeClass('MiniSquareitm22CostMOBI');
  $('.itm22textMOBI').removeClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').removeClass('MiniSquareitm22Photo');

  $('.itmV22MOBI').removeClass('LinearitmV22MOBI');
  $('.itm22CostMOBI').removeClass('Linearitm22CostMOBI');
  $('.itm22textMOBI').removeClass('Linearitm22textMOBI'); 

  $('.itmV22MOBI').removeClass('MiniSquareitmV22MOBI');

  $('.itmV22MOBI').removeClass('BlackLinear');
  $('.itmV22MOBI').removeClass('whiteLinear');

console.log('LinearitmV22 = '+ LinearitmV22);


});









// ///////Change itmv22 shape///////////



$('.itm22toHorizontal').click(function(){

   $(this).hide();
   $('.itm22toLinear').show();

});

$('.itm22toLinear').click(function(){

   $(this).hide();
   $('.itm22toMiniSquare').show();

});
$('.itm22toMiniSquare').click(function(){

   $(this).hide();
   $('.itm22toLinearPhoto').show();

});
$('.itm22toLinearPhoto').click(function(){

   $(this).hide();
   $('.itm22toRegular').show();

});

$('.itm22toRegular').click(function(){

   $(this).hide();
   $('.itm22toHorizontal').show();



});







$('.itm22toLinear, .itm22toLinearPhoto').click(function(){



if ((LinearitmV22 = true) && (uiColor = "White")){

  $('.itmV22MOBI').removeClass('BlackLinear');
  $('.itmV22MOBI').addClass('whiteLinear');


}else if((LinearitmV22 = true) && (uiColor = "Dark")){

  $('.itmV22MOBI').removeClass('whiteLinear');
  $('.itmV22MOBI').addClass('BlackLinear');

}

console.log('LinearitmV22 = '+ LinearitmV22);
console.log('uiColor = '+ uiColor);


});







/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#Vm2Machine, .UI2buttons > button').click(function(){


  $('.py2').hide();

  $('.VModels').hide(); 
  $('.VModel1b').show();

  $('.itmV22').css('border-radius', '20px');

  $('.AllHeadersVm').show();


$('.Organizeitm22, .Refill2MOBIFirst').hide();  

$('.ui22').removeClass('ui22MOBI uiXXMOBI');

$('.lan22').removeClass('lan22MOBI');

$('.Vm2LanB').show();


$('.Vm2LanBMOBI').hide();

$('.itm22Background').removeClass('itm22BackgroundMOBI'); 
$('.itm2').removeClass('itm2MOBI');
$('.itmV22').removeClass('itmV22MOBI'); 

$('.DropItmMenu22').removeClass('DropItmMenu22MOBI');


$('.itm22Cost').removeClass('itm22CostMOBI');

$('.itm22text').removeClass('itm22textMOBI');

$('.BalanceV22, .BalanceV33').hide();


$('.qty22').removeClass('qty22MOBI') 

$('.sub22').removeClass('sub22MOBI');





$('.add22').removeClass('add22MOBI');

$('.qtyvalue22').removeClass('qtyvalue22MOBI');




$('.py2').removeClass('py2MOBI');

$('.PayButtons22').show();


$('.PayButtonsMOBI22').hide();



$('.fin22').removeClass('fin22MOBI');


$('.total2').removeClass('total2MOBI'); 


if (FinModel1 === true){

$('.buy2First').show();
$('.refill2First').show();
$('.buy2MOBIFirst').hide();
$('.refill2MOBIFirst').hide();

}

console.log('FinModel1 =' + FinModel1);

// $('.fin22').hide('');
// $('.fin221').show('');

 $('.fin22').removeClass('Fin22NoRadius RoundFin');



$('#CheckBalVM2, .MOBIshowVMs').hide();
$('#cbalance').show();







  $('.itmV22').removeClass('LinearitmV22MOBI');
  $('.itm22Cost').removeClass('Linearitm22CostMOBI');
  $('.itm22text').removeClass('Linearitm22textMOBI'); 

  $('.itmV22').removeClass('MiniSquareitmV22MOBI');
  $('.itm22Cost').removeClass('MiniSquareitm22CostMOBI');
  $('.itm22text').removeClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').removeClass('MiniSquareitm22Photo');
  $('.itmV22').removeClass('PhotoLinearitmV22MOBI');
  $('.itm22Photo').removeClass('PhotoLinearitm22Photo');  

  $('.itmV22').removeClass('MiniSquareitmV22MOBI');
  $('.itm22Cost').removeClass('MiniSquareitm22CostMOBI');
  $('.itm22text').removeClass('MiniSquareitm22textMOBI');
  $('.itm22Photo').removeClass('MiniSquareitm22Photo');
  $('.itmV22').removeClass('LinearitmV22MOBI');
  $('.itm22Cost').removeClass('Linearitm22CostMOBI');
  $('.itm22text').removeClass('Linearitm22textMOBI'); 
  $('.itmV22').removeClass('MiniSquareitmV22MOBI');






 $('.VmHelloxx').hide();


$('.BottomLanXX').hide();

   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx TapBarMOBIXX');


$('.TransportationModelx4').removeClass('FFTSelectedModelx4');
$('.TransportModel2x4').addClass('FFTSelectedModelx4');


$('.VmTapBar2, .VmTapBar3').hide();

$('.TransportModel6x4, .TransportModel7x4, .TransportModel7Bx4, .TransportModel7Cx4, .TransportModel9x4, .TransportModel9bx4, .TransportModel12x4, .TransportModel78x4').hide();



$('.VmMachineHide').hide();



$('.qtyVMx2').removeClass('qtyVMMOBIx2');
$('.qtyvalue22x2').removeClass('qtyvalue22MOBIx2');
$('.sub22x2').removeClass('sub22MOBIx2');
$('.add22x2').removeClass('add22MOBIx2');
$('.qtyVMx3').removeClass('qtyVMMOBIx3');
$('.qtyV').removeClass('qtyVMOBI');







$('.MobileVMs').hide();
$('.BigFont1a').removeClass('BigFont1aMOBI');
$('.SmallFont1a').removeClass('SmallFont1aMOBI');
$('.ItemCost1a').removeClass('ItemCost1aMOBI');

$('.BigFont1b').removeClass('BigFont1bMOBI');
$('.SmallFont1b').removeClass('SmallFont1bMOBI');
$('.ItemCost1b').removeClass('ItemCost1bMOBI');


$('.BigFont1c').removeClass('BigFont1cMOBI');
$('.SmallFont1c').removeClass('SmallFont1cMOBI');
$('.ItemCost1c').removeClass('ItemCost1cMOBI');


$('.BigFont1d').removeClass('BigFont1dMOBI');
$('.SmallFont1d').removeClass('SmallFont1dMOBI');
$('.ItemCost1d').removeClass('ItemCost1dMOBI');

$('.TransportService').hide();


$('.BalanceV1d').removeClass('BalanceV1dMOBI');

$('.BlankTapbarVM').removeClass('BlankTapbarMOBIVM');

$('.BlankLogoVM').removeClass('BlankLogoMOBIVM');




$('.fin222').removeClass('fin222MOBI');
$('.FinButton2').removeClass('FinButton2MOBI');
$('.fin223').removeClass('fin223MOBI');
$('.FinButton3').removeClass('FinButton3MOBI');
$('.fin224').removeClass('fin224MOBI');
$('.FinButton4').removeClass('FinButton4MOBI');
$('.fin224a').removeClass('fin224aMOBI');
$('.FinButton4a').removeClass('FinButton4aMOBI');
$('.fin225').removeClass('fin225MOBI');
$('.FinButton5').removeClass('FinButton5MOBI');
$('.fin226').removeClass('fin226MOBI');
$('.FinButton6').removeClass('FinButton6MOBI');
$('.fin227').removeClass('fin227MOBI '); 
$('.FinButton7').removeClass('FinButton7MOBI');
$('.fin228').removeClass('fin228MOBI');
$('.FinButton8').removeClass('FinButton8MOBI');
$('.FinIconX').removeClass('FinIconXMOBI');
$('.fin229').removeClass('fin229MOBI '); 
$('.FinButton9').removeClass('FinButton9MOBI');
$('.fin2210').removeClass('fin2210MOBI');
$('.FinButton10').removeClass('FinButton10MOBI');
$('.fin2211').removeClass('fin2211MOBI');
$('.total2211').removeClass('total2211MOBI');
$('.FinButton11').removeClass('FinButton11MOBI');
$('.FinButton11Other').removeClass('FinButton11OtherMOBI');
$('.fin224c').removeClass('fin224cMOBI');
$('.FinButton4c').removeClass('FinButton4cMOBI');
$('.FinButtonGift4c').removeClass('FinButtonGift4cMOBI');




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



$('.TransportModel1ax4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1a').show('');
});







$('.TransportModel1bx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1b').show('');
});


$('.TransportModel1bbx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1bb').show('');
});







$('.TransportModel1cx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1c').show('');
});



$('.TransportModel1ccx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1cc').show('');
});








$('.TransportModel1dx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1d').show('');
});





$('.TransportModel1x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked')

  $('.VModels').hide('');
  $('.VModel1').show('');
});



$('.TransportModel2x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel2').show('');
});


$('.TransportModel3x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel3').show('');
});


$('.TransportModel4x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel4').show('');
});


$('.TransportModel5x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel5').show('');
});


$('.TransportModel6x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel6').show('');
});


$('.TransportModel7x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel7').show('');
});



$('.TransportModel7Bx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel7B').show('');
});


$('.TransportModel7Cx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel7C').show('');
});



$('.TransportModel78x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel78').show('');
});




$('.TransportModel8x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel8').show('');
});


$('.TransportModel9x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel9').show('');
});


$('.TransportModel9bx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel9b').show('');
});




$('.TransportModel9cx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel9c').show('');
});




$('.TransportModel9dx4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
  $('.VModel9d').show('');
});




$('.TransportModel10x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

  $('.VModels').hide('');
   $('.VModel10').show('');
});



$('.TransportModel12x4').click(function(){
    $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
    $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

   $('.VModels').hide('');
   $('.VModel12').show('');

});




// //////Switch items Models//////////////////////////


// /////// Especify Quantity Models ///////////////////


VmQtyXX = 'VmQty1';

$('.VmQty1').click(function(){
    $('.VmQty').removeClass('FFTSelectedModelx4');
    $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

   $('.QtyXX').hide('');
   // $('.Qtyx1').show('');
   VmQtyXX = 'VmQty1';

});




$('.VmQty2').click(function(){
    $('.VmQty').removeClass('FFTSelectedModelx4');
    $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

   $('.QtyXX').hide('');
   $('.Qtyx2').show('');
   VmQtyXX = 'VmQty2';

});




$('.VmQty3').click(function(){
    $('.VmQty').removeClass('FFTSelectedModelx4');
    $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

   $('.QtyXX').hide('');
   $('.Qtyx3').show('');
   VmQtyXX = 'VmQty3';

});


$('.VmQty4').click(function(){
    $('.VmQty').removeClass('FFTSelectedModelx4');
    $(this).addClass('FFTSelectedModelx4');

  console.log('Transport button clicked');

   $('.QtyXX').hide('');
   $('.Qtyx4').show('');
   VmQtyXX = 'VmQty4';

});


$('.itmVxx').click(function(){
   $('.Qtyx1').hide();
});


$('.SingleItemVxx').click(function(){

console.log('VmQtyXX = '+ VmQtyXX);

   if (VmQtyXX === 'VmQty1'){
   $('.QtyXX').hide();
   $('.Qtyx1').show();


   }else if (VmQtyXX === 'VmQty4'){
   $('.QtyXX').hide();
   $('.Qtyx4, .Qtyx1').show();


   }else{
    $('.Qtyx1').hide();
   }

});


$('.itmV99A, .itmV44').click(function(){
$('.Qtyx1').hide();

});







// $('.itmXX').click(function(){

// if(qtyvalue22 !== 0){
//   console.log('VmQtyXX = '+ VmQtyXX);
//   $('.Qtyx1').hide();
// }

// });





$('.itmXX').dblclick(function(){

  $('.Qtyx1').hide();

});


$('.OtherVMxx').click(function(){
  $('.itmVxx').removeClass('active');
  $('.Qtyx1').hide();

});


// /////// Especify Quantity Models ///////////////////





// ////////////////// Py2  Models ///////////////////





$('.PayVM1').click(function(){

  console.log('Fin button clicked');

  $('.PayVM').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.py23, .py22').hide('');
  $('.py2').show('');

   $('.fin22').removeClass('NoPy');

});





$('.PayVM2').click(function(){

  console.log('Fin button clicked');

  $('.PayVM').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.py2, .py23').hide('');
  $('.py22').show('');

   $('.fin22').addClass('NoPy');

});





$('.PayVM3').click(function(){

  console.log('Fin button clicked');

  $('.PayVM').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.py2, .py23, .py22').hide('');

  $('.fin22').addClass('NoPy');
 

});











// ////////////////// Py2 Models ///////////////////



/////////////Switch Fin Models////////////////////////

FinModel1 = true;



$('.FinModel1').click(function(){

  FinModel1 = true;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin221').show('');


  if(VM2screenType === "Mobile"){
$('.buy2First').hide();
$('.refill2First').hide();
$('.buy2MOBIFirst').show();
$('.refill2MOBIFirst').show();

  }

  if(VM2screenType === "Machine"){

$('.buy2First').show();
$('.refill2First').show();
$('.buy2MOBIFirst').hide();
$('.refill2MOBIFirst').hide();
  }


});



$('.FinModel2').click(function(){

  FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin222').show('');

});




$('.FinModel3').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin223').show('');

});



$('.FinModel4a').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin224a').show('');

});









$('.FinModel4').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin224').show('');

});



$('.FinModel4b').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin224c').show('');

});




$('.FinModel5').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin225').show('');

});




$('.FinModel6').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin226').show('');

});




$('.FinModel7').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin227').show('');

});




$('.FinModel8').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin228').show('');

});



$('.FinModel9').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin229').show('');

});


$('.FinModel10').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin2210').show('');

});


$('.FinModel11').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.fin2211').show('');

  $('.BlankTapbarVM').hide();

});



$('.FinModel12').click(function(){

   FinModel1 = false;

  console.log('Fin button clicked');

  $('.FinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.fin22').hide('');
  $('.finJustTotal').show('');

  // $('.BlankTapbarVM').hide();

});




/////////////Switch Fin Models////////////////////////



Tapbar= 'Regular';

$('.VmTapBar1').click(function(){

  $('.VmTapBar').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with regular buttons and no user
  $('.TopBotTap').hide();
  $('.lan22').show();

  Tapbar= 'Regular';

if (VM2screenType === "Mobile"){
   $('.LanBgroupMOBIXX').show();
   }



   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx');
   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx');

   $('.VmHelloxx').hide();

   $('.LanBMOBIxx').removeClass('SmallerLanBMOBIxx');

  $('.LanBMOBIxx').removeClass('SmallerLanBMOBIxx'); 
  
  
  $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').hide('');
   $('.BottomLanXX').hide();
   $('.fin22MOBI').addClass('RoundFin');

   $('.BlankTapbarVM').hide();
});




$('.VmTapBar2').click(function(){

  $('.VmTapBar').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with NO Buttons just the User
  Tapbar= 'Bottom';

  $('.lan22').hide();
  $('.TopBotTap').show();

   $('.TapBarXX').addClass('ThinTapBarMOBIxx');
   $('.TapBarXX').removeClass('UserTapBarMOBIxx');

   $('.VmHelloxx').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIXX').hide();
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');

   
   $('.BottomLanXX').show();
   $('.fin22MOBI').removeClass('RoundFin');
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');
   $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').show('');
   $('.fin22MOBI').addClass('Fin22NoRadius');

   $('.BlankTapbarVM').hide();
   
});




$('.VmTapBar3').click(function(){

  $('.VmTapBar').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TopBotTap').hide();
  $('.lan22').show();

  Tapbar= 'Top';

   $('.TapBarXX').addClass('UserTapBarMOBIxx');
   $('.TapBarXX').removeClass('ThinTapBarMOBIxx');

   $('.VmHelloxx').show();
   $('.Menux4').hide();

   $('.LanBgroupMOBIXX').show();
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');

   
  
  $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');
  $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').hide('');
$('.BottomLanXX').hide();
$('.fin22MOBI').addClass('RoundFin');

 $('.BlankTapbarVM').hide();
});





$('.VmTapBar4').click(function(){

  $('.VmTapBar').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.lan22, .ThinTapBarMOBIxx').hide();
  $('.BlankTapbarVM').show();
  $('.BlankLogoVM').hide();

  if (VM2screenType === "Mobile"){

   $('.TapBarXX').addClass('ThinTapBarMOBIxx');
   $('.TapBarXX').removeClass('UserTapBarMOBIxx');

   $('.VmHelloxx').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIXX').hide();
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');

   
   $('.BottomLanXX').show();
   $('.fin22MOBI').removeClass('RoundFin');
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');
   $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').show('');
   $('.fin22MOBI').addClass('Fin22NoRadius');

  }



});

$('.VmTapBar5').click(function(){

  $('.VmTapBar').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.lan22, .ThinTapBarMOBIxx').hide();
  $('.BlankTapbarVM').show();
  $('.BlankLogoVM').show();

  if (VM2screenType === "Mobile"){

   $('.TapBarXX').addClass('ThinTapBarMOBIxx');
   $('.TapBarXX').removeClass('UserTapBarMOBIxx');

   $('.VmHelloxx').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIXX').hide();
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');

   
   $('.BottomLanXX').show();
   $('.fin22MOBI').removeClass('RoundFin');
   $('.LanBMOBIxx').addClass('SmallerLanBMOBIxx');
   $('.BottomLanXX > .LanBMOBIxx, .BottomLanXX > .GrLanBMOBIxx').show('');
   $('.fin22MOBI').addClass('Fin22NoRadius');

  }



});










