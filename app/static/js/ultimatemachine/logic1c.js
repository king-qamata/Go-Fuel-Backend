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
var qtyValue1c= 0;
var itemValue1c=0;
var payMethod1c='none';
var total1c=0;
var totalMOBI2=0;






//function to get itm value

 $('.itmVxx').on('click', function(){

    itemValue1c = $(this).attr('value');
    qtyValue1c=1;
    $('.QtyValueXX').attr('value', qtyValue1c);
    total1c= itemValue1c;
    totalMOBI2= itemValue1c;


    


   //  total2= itemValue * qtyValue;
    
  
 total1c= "$" + itemValue1c;
 
    //Testing
 
    console.log('item value is ' + itemValue1c+ ' and it is type of '
      + typeof('itemValue2')+ ' and qty is '+ qtyValue1c);
    console.log('Total is ' + total1c);

    

   //
 
 $('.total2').attr('value', total1c);

 });







//functions to get quantity value

 $('.Sub1cXX').on('click', function(){
 console.log('Sub was clicked');
 
    qtyValue1c = qtyValue1c - 1;
    $('.QtyValueXX').attr('value', qtyValue1c);

      if(qtyValue1c <=20){
      
      $('#add1c').fadeIn('fast');

    }


    if(qtyValue1c === 0){
      qtyValue1c = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue1c+ ' and it is type of '+ typeof('qtyValue2'));
    
    //multiply item value per quantity

    multiply1c= qtyValue1c * itemValue1c;

   decimal1c=multiply1c.toFixed(2);
    total1c= decimal1c;
    totalMOBI2= decimal1c;
  
  //testing
  total1c= "$" + total1c;
  console.log('total is ' + total1c);
  
 $('.total2').attr('value', total1c);

//
 });





 $('.Add1cXX').click(function(){


console.log('Add was clicked');

 if(qtyValue1c <=20){

   
    qtyValue1c = qtyValue1c + 1;
    $('.QtyValueXX').attr('value', qtyValue1c);

    //Testing
    console.log('quantity value is ' + qtyValue1c+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub1c
}


     if(qtyValue1c >=20){
        qtyValue1c=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply1c= qtyValue1c * itemValue1c;

   decimal1c=multiply1c.toFixed(2);
    total1c= decimal1c;
    totalMOBI2= decimal1c;
  
  //testing
  total1c= "$" + total1c;
  console.log('total is ' + total1c);
  
 $('.total2').attr('value', total1c);

//
 });





//funtion to show hide quantity buttons


// ////////Linear qty buttons//////////////////


 $('.qtyV').click(function(){

   qtyValue1c = $(this).attr('value');
    //Testing
    console.log('quantity value is ' + qtyValue1c+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

   multiply1c= qtyValue1c * itemValue1c;

   decimal1c=multiply1c.toFixed(2);

  total1c= decimal1c;
  totalMOBI2= decimal1c;


    //if total len is less then 2 add .00 to total
  
   

  //testing
  total1c= "$" + total1c;
  console.log('total is ' + total1c);
  
 $('#total2').attr('value', total1c);

//

 });





// ////////Linear qty buttons//////////////////











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift1c, .NoGiftx').click(function(){

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
console.log("The totalMOBI1c =" + totalMOBI2);
console.log("The totalGiftVM2 =" + totalMOBI2);
console.log("The totalGiftVM2 =" + typeof('totalMOBI1c'));

$('#totalGiftVM2').attr('value', totalGiftVM2);



});




$('.friendVM21').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM21').fadeIn('');





});


$('.friendVM1c').click(function(){

   $('.MemoVM2, .FriendQtyButtonVM2').hide();
   $('.ExtraFriendVM1c').show();



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

    FriendQtyVM1c = 0;
    $('.FriendQtyVM1c').attr('value', FriendQtyVM1c);


 $('.SubVM1c').click(function(){

    FriendQtyVM1c = FriendQtyVM1c - 1;
    $('.FriendQtyVM1c').attr('value', FriendQtyVM1c);

  });


 $('.AddVM1c').click(function(){

    FriendQtyVM1c = FriendQtyVM1c + 1;
    $('.FriendQtyVM1c').attr('value', FriendQtyVM1c);

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

$('.PayButtonsMOBI1c > label').click(function(){
payMethod1c = $(this).attr('value');
console.log(payMethod1c);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod1c = "none";
  itemValue1c = '';
  total1c = "$0.00";
  $('.total2').attr('value', total1c);

  $('.itmV1c, .PayButtonsMOBI1c > label').removeClass('active');


$(this).fadeOut();
$('.qty1c').fadeOut();
qtyValue1c = 1;

});



$('.Nobuy2MOBI').click(function(){

 if(itemValue1c !=='0'){
$('.BuyNewVM2').fadeIn();
}

});


$('.lan1c, lan1cMOBI').click(function(){

$('.itmV1c, .PayButtonsMOBI1c > label, .PayButtons1c > label').removeClass('active');
$('.qty1c').fadeOut();
total1c = "$0.00";
 $('.total2').attr('value', total1c);

});



$('.itm2').dblclick(function(){

  $('.qty1c').fadeOut();

$('.itmV1c, .PayButtonsMOBI1c > label, .PayButtons1c > label').removeClass('active');
$('.qty1c').fadeOut();
total1c = "$0.00";
 $('.total2').attr('value', total1c);

});



$(' #Refill1c').click(function(){
if(itemValue1c !=='0' && payMethod1c !=='none'){
$('.RenewVM2').fadeIn();
}
});


$('#CheckBalVM2').click(function(){
  $('.CheckBalVM2').fadeIn();
});




//////////////////////////////////////////////////////////



























// $('.fix2').click(function() {
// //show these numbers when ride1 or ride2 are clicked
// $('.qty1c').fadeIn('fast');

// //change attribute of these numbers ride1 or ride2 are clicked

// });


// $('.unli2').click(function(){
// $('.qty1c').fadeOut('fast');
// });










// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty1c').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub1c').attr('class','disabled');
// $('#add1c').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub1c').fadeIn('fast');
$('#add1c').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod1c= $(this).attr('value');
  console.log('Payment method is: ' + payMethod1c + 'and item value is: ' +itemValue1c);

});

//Hide these PopUps

$('.seOptions1c, .seItem1c, .pmethod1c').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy2').click(function(){

  if(itemValue1c !=='0'){
  
       
       $('.check').hide();
       $('.thankRefill1c').hide();
       $('.thankBuy1c').fadeIn('fast');
       $('.TapBuy2').click(function(){
          $('.thankBuy1c').hide(); 
         });

        }

 });




$('#refill2').click(function(){

   if(itemValue1c !=='0'){
   
    
      $('.check').hide();
      $('.thankBuy1c').hide();
      $('.thankRefill1c').fadeIn('fast');
      $('.TapRefill2').click(function(){
      $('.thankRefill1c').hide();


 });
}
});







/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod1c =='none'){
    $('.seOptions1c').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1c =='none'){

      $('.pmethod1c').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1c !== 'none'){
       $('.seItem1c').fadeIn('fast');
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

   if(itemValue11 =='0' && payMethod1c =='none'){
    $('.seOptions1c').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod1c =='none'){

      $('.pmethod1c').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod1c !== 'none'){
       $('.seItem1c').fadeIn('fast');
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
 $('.check1c').fadeIn('fast').click(function(){
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
      $('#panel1c').fadeIn('fast');

      });

     $('#panel1c').click(function(){

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

$('.itmV1c').css('border-radius', '25px');
  
$('.itm1ctoHorizontal').show();
$('.ui1c').addClass('ui1cMOBI uiXXMOBI');

$('.TapBarXX').addClass('TapBarMOBIXX');

$('.Vm2LanB').hide();


if(Tapbar="Bottom"){
$('.Vm2LanBMOBI').hide();
} 


if(Tapbar="Top"){
$('.Vm2LanBMOBI').show();
} 


$('.itm1c').addClass('itm1cMOBI');
$('.itm1cBackground').addClass('itm1cBackgroundMOBI');


$('.DropItmMenu1c').addClass('DropItmMenu1cMOBI'); 


$('.itmV1c').addClass('itmV1cMOBI'); 

$('.itm1cCost').addClass('itm1cCostMOBI');

$('.itm1ctext').addClass('itm1ctextMOBI');

$('.BalanceV1c').show();

$('.qty1c').addClass('qty1cMOBI') 

$('.sub1c').addClass('sub1cMOBI');





$('.add1c').addClass('add1cMOBI');

$('.qtyvalue1c').addClass('qtyvalue1cMOBI');




$('.py2').addClass('py2MOBI');

$('.PayButtons1c').hide();


$('.PayButtonsMOBI1c').show();



$('.fin1c').addClass('fin1cMOBI');









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
$('.qtyvalue1cx2').addClass('qtyvalue1cMOBIx2');
$('.sub1cx2').addClass('sub1cMOBIx2');
$('.add1cx2').addClass('add1cMOBIx2');
$('.qtyVMx3').addClass('qtyVMMOBIx3');
$('.qtyV').addClass('qtyVMOBI');

});





LinearitmV1c = false;



// ///////Change itmv1c shape///////////

$('.itm1ctoLinear').click(function(){

  LinearitmV1c = true;

  $('.itmV1cMOBI').addClass('LinearitmV1cMOBI');
  $('.itm1cCostMOBI').addClass('Linearitm1cCostMOBI');
  $('.itm1ctextMOBI').addClass('Linearitm1ctextMOBI');
  $('.BalanceV1c ').addClass('LinearBalanceV1c'); 

   $('.itmV1cMOBI').removeClass('HorizontalitmV1cMOBI');


console.log('LinearitmV1c = '+ LinearitmV1c);



});





$('.itm1ctoMiniSquare').click(function(){

  LinearitmV1c = false;
  
  $('.itmV1cMOBI').removeClass('LinearitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('Linearitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('Linearitm1ctextMOBI');
  $('.BalanceV1c ').removeClass('LinearBalanceV1c');  
  $('.itmV1cMOBI').removeClass('HorizontalitmV1cMOBI');

  $('.itmV1cMOBI').addClass('MiniSquareitmV1cMOBI');
  $('.itm1cCostMOBI').addClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctextMOBI').addClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').addClass('MiniSquareitm1cPhoto');

  $('.itmV1cMOBI').removeClass('BlackLinear');
  $('.itmV1cMOBI').removeClass('whiteLinear');
console.log('LinearitmV1c = '+ LinearitmV1c);



});






$('.itm1ctoLinearPhoto').click(function(){

   LinearitmV1c = true;
  
  $('.itmV1cMOBI').removeClass('MiniSquareitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').removeClass('MiniSquareitm1cPhoto');
  $('.BalanceV1c ').removeClass('LinearBalanceV1c');
  $('.itmV1cMOBI').removeClass('HorizontalitmV1cMOBI');

  $('.itmV1cMOBI').addClass('PhotoLinearitmV1cMOBI');
  $('.itm1cPhoto').addClass('PhotoLinearitm1cPhoto');

console.log('LinearitmV1c = '+ LinearitmV1c);



});





$('.itm1ctoRegular').click(function(){

  LinearitmV1c = false;

  $('.itmV1cMOBI').removeClass('HorizontalitmV1cMOBI');
  
  $('.itmV1cMOBI').removeClass('PhotoLinearitmV1cMOBI');
  $('.itm1cPhoto').removeClass('PhotoLinearitm1cPhoto'); 
  $('.BalanceV1c ').removeClass('LinearBalanceV1c'); 

  $('.itmV1cMOBI').removeClass('MiniSquareitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').removeClass('MiniSquareitm1cPhoto');

  $('.itmV1cMOBI').removeClass('LinearitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('Linearitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('Linearitm1ctextMOBI'); 

  $('.itmV1cMOBI').removeClass('MiniSquareitmV1cMOBI');

  $('.itmV1cMOBI').removeClass('BlackLinear');
  $('.itmV1cMOBI').removeClass('whiteLinear');




console.log('LinearitmV1c = '+ LinearitmV1c);



});





$('.itm1ctoHorizontal').click(function(){

  LinearitmV1c = false;

  $('.itmV1cMOBI').addClass('HorizontalitmV1cMOBI');
  
  $('.itmV1cMOBI').removeClass('PhotoLinearitmV1cMOBI');
  $('.itm1cPhoto').removeClass('PhotoLinearitm1cPhoto'); 
  $('.BalanceV1c ').removeClass('LinearBalanceV1c'); 

  $('.itmV1cMOBI').removeClass('MiniSquareitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').removeClass('MiniSquareitm1cPhoto');

  $('.itmV1cMOBI').removeClass('LinearitmV1cMOBI');
  $('.itm1cCostMOBI').removeClass('Linearitm1cCostMOBI');
  $('.itm1ctextMOBI').removeClass('Linearitm1ctextMOBI'); 

  $('.itmV1cMOBI').removeClass('MiniSquareitmV1cMOBI');

  $('.itmV1cMOBI').removeClass('BlackLinear');
  $('.itmV1cMOBI').removeClass('whiteLinear');

console.log('LinearitmV1c = '+ LinearitmV1c);


});









// ///////Change itmv1c shape///////////



$('.itm1ctoHorizontal').click(function(){

   $(this).hide();
   $('.itm1ctoLinear').show();

});

$('.itm1ctoLinear').click(function(){

   $(this).hide();
   $('.itm1ctoMiniSquare').show();

});
$('.itm1ctoMiniSquare').click(function(){

   $(this).hide();
   $('.itm1ctoLinearPhoto').show();

});
$('.itm1ctoLinearPhoto').click(function(){

   $(this).hide();
   $('.itm1ctoRegular').show();

});

$('.itm1ctoRegular').click(function(){

   $(this).hide();
   $('.itm1ctoHorizontal').show();



});







$('.itm1ctoLinear, .itm1ctoLinearPhoto').click(function(){



if ((LinearitmV1c = true) && (uiColor = "White")){

  $('.itmV1cMOBI').removeClass('BlackLinear');
  $('.itmV1cMOBI').addClass('whiteLinear');


}else if((LinearitmV1c = true) && (uiColor = "Dark")){

  $('.itmV1cMOBI').removeClass('whiteLinear');
  $('.itmV1cMOBI').addClass('BlackLinear');

}

console.log('LinearitmV1c = '+ LinearitmV1c);
console.log('uiColor = '+ uiColor);


});







/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#Vm2Machine, .UI2buttons > button').click(function(){



  $('.itmV1c').css('border-radius', '20px');


$('.Organizeitm1c').hide();  

$('.ui1c').removeClass('ui1cMOBI uiXXMOBI');

$('.lan1c').removeClass('lan1cMOBI');

$('.Vm2LanB').show();


$('.Vm2LanBMOBI').hide();

$('.itm1cBackground').removeClass('itm1cBackgroundMOBI'); 
$('.itm1c').removeClass('itm1cMOBI');
$('.itmV1c').removeClass('itmV1cMOBI'); 

$('.DropItmMenu1c').removeClass('DropItmMenu1cMOBI');


$('.itm1cCost').removeClass('itm1cCostMOBI');

$('.itm1ctext').removeClass('itm1ctextMOBI');

$('.BalanceV1c').hide();


$('.qty1c').removeClass('qty1cMOBI') 

$('.sub1c').removeClass('sub1cMOBI');





$('.add1c').removeClass('add1cMOBI');

$('.qtyvalue1c').removeClass('qtyvalue1cMOBI');




$('.py2').removeClass('py2MOBI');

$('.PayButtons1c').show();


$('.PayButtonsMOBI1c').hide();



$('.fin1c').removeClass('fin1cMOBI');






$('.buy2').show();

$('.total2').removeClass('total2MOBI'); 


// $('.refill2').show();


// $('.Nobuy2MOBI').hide();


// $('.refill2MOBI').hide();



$('#CheckBalVM2, .MOBIshowVMs').hide();
$('#cbalance').show();







  $('.itmV1c').removeClass('LinearitmV1cMOBI');
  $('.itm1cCost').removeClass('Linearitm1cCostMOBI');
  $('.itm1ctext').removeClass('Linearitm1ctextMOBI'); 

  $('.itmV1c').removeClass('MiniSquareitmV1cMOBI');
  $('.itm1cCost').removeClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctext').removeClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').removeClass('MiniSquareitm1cPhoto');
  $('.itmV1c').removeClass('PhotoLinearitmV1cMOBI');
  $('.itm1cPhoto').removeClass('PhotoLinearitm1cPhoto');  

  $('.itmV1c').removeClass('MiniSquareitmV1cMOBI');
  $('.itm1cCost').removeClass('MiniSquareitm1cCostMOBI');
  $('.itm1ctext').removeClass('MiniSquareitm1ctextMOBI');
  $('.itm1cPhoto').removeClass('MiniSquareitm1cPhoto');
  $('.itmV1c').removeClass('LinearitmV1cMOBI');
  $('.itm1cCost').removeClass('Linearitm1cCostMOBI');
  $('.itm1ctext').removeClass('Linearitm1ctextMOBI'); 
  $('.itmV1c').removeClass('MiniSquareitmV1cMOBI');




$('.fin1c').hide('');
$('.fin1c1').show('');

 $('.fin1c').removeClass('Fin1cNoRadius RoundFin');

 $('.VmHelloxx').hide();


$('.BottomLanXX').hide();

   $('.TapBarXX').removeClass('ThinTapBarMOBIxx UserTapBarMOBIxx TapBarMOBIXX');


$('.TransportationModelx4').removeClass('FFTSelectedModelx4');
$('.TransportModel2x4').addClass('FFTSelectedModelx4');


  $('.AllHeadersVm, .NoAllFinModelsVm').hide();

  $('.TransportModel12x4').hide();

$('.VmMachineHide').hide();



$('.qtyVMx2').removeClass('qtyVMMOBIx2');
$('.qtyvalue1cx2').removeClass('qtyvalue1cMOBIx2');
$('.sub1cx2').removeClass('sub1cMOBIx2');
$('.add1cx2').removeClass('add1cMOBIx2');
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









