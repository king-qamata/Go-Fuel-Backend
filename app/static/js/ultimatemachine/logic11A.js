$(document).ready(function(){




$('#Vm11AMaps').click(function(){
$('.ComingSoonVM11A').fadeIn();
$('.ComingSoonVM11A').removeClass('ComingSoonServStat');
$('.ComingSoonVM11A').addClass('ComingSoonMap');
$('.Mapinput11A').fadeIn();

});



$('#Vm11ASChange').click(function(){
$('.ComingSoonVM11A').fadeIn();
$('.ComingSoonVM11A').removeClass('ComingSoonMap');
$('.ComingSoonVM11A').addClass('ComingSoonServStat');
$('.Mapinput11A').fadeOut();
});



$('#Vm11ABuy, #Vm2Machine').click(function(){
$('.ComingSoonVM11A').fadeOut();
$('.Mapinput11A').fadeOut()
});



  $('#total11A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue11A= 0;
var itemValue11A=0;
var payMethod11A='none';
var total11A=0;
var totalMOBI11A=0;






//function to get itm value
function getItemValue11(){
 $('.itmV11A').on('click', function(){

    itemValue11A = $(this).attr('value');
    qtyValue11A=1;

    total11A= itemValue11A;
    totalMOBI11A= itemValue11A;


    


   //  total11A= itemValue * qtyValue;
    
  
 total11A= "$" + itemValue11A;
 $('#qtyvalue11A').attr('value', qtyValue11A);
    //Testing
 
    console.log('item value is ' + itemValue11A+ ' and it is type of '
      + typeof('itemValue11A')+ ' and qty is '+ qtyValue11A);
    console.log('Total is ' + total11A);

    

   //
 
 $('#total11A').attr('value', total11A);

 });

};





//functions to get quantity value
function subQtyValue()

{
 $('#sub11A').on('click', function(){

 
    qtyValue11A = qtyValue11A - 1;
    $('#qtyvalue11A').attr('value', qtyValue11A);

      if(qtyValue11A <=20){
      
      $('#add11A').fadeIn('fast');

    }


    if(qtyValue11A === 0){
      qtyValue11A = 1
     
   

    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue11A+ ' and it is type of '+ typeof('qtyValue11A'));
    
    //multiply item value per quantity

    multiply11A= qtyValue11A * itemValue11A;

   decimal11A=multiply11A.toFixed(2);
    total11A= decimal11A;
    totalMOBI11A= decimal11A;
  
  //testing
  total11A= "$" + total11A;
  console.log('total is ' + total11A);
  
 $('#total11A').attr('value', total11A);

//
 });

};


function addQtyValue()

{
 $('#add11A').on('click', function(){


     

 if(qtyValue11A <=20){

   
    qtyValue11A = qtyValue11A + 1;
    $('#qtyvalue11A').attr('value', qtyValue11A);

    //Testing
    console.log('quantity value is ' + qtyValue11A+ ' and it is type of '+ typeof('qtyValue2'));

    //if quantity value is >= 2 show button sub11A
}


     if(qtyValue11A >=20){
        qtyValue11A=20



    }

   
  
    //
   


    
    //multiply item value per quantity
      multiply11A= qtyValue11A * itemValue11A;

   decimal11A=multiply11A.toFixed(2);
    total11A= decimal11A;
    totalMOBI11A= decimal11A;
  
  //testing
  total11A= "$" + total11A;
  console.log('total is ' + total11A);
  
 $('#total11A').attr('value', total11A);

//
 });

};



//funtion to show hide quantity buttons















//Main
subQtyValue();
addQtyValue();
getItemValue11();

//setTotal();









 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift11A').click(function(){

   $('.sendGiftVM11A, .closeGiftVM11A').fadeIn();

});




$('.confirmSendVM11A').click(function(){
    $('.sendGiftVM11A, .closeGiftVM11A').fadeOut();
    totalGiftVM11A = 0;
    $('#totalGiftVM11A').attr('value', totalGiftVM11A);

    
$('.friendsVM11A').removeClass('active');

MySelfVM11A = 0;
JeffVM11A = 0;
MariaVM11A = 0;
JohnVM11A = 0;
LeahVM11A = 0;
PaulVM11A = 0;
JennyVM11A = 0;
GokuVM11A = 0;



    $('.GiftSentVM11A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM11A').click(function(){
    $('.sendGiftVM11A, .closeGiftVM11A').fadeOut();

    totalGiftVM11A = 0;
    $('#totalGiftVM11A').attr('value', totalGiftVM11A);

$('.friendsVM11A').removeClass('active');
MySelfVM11A = 0;
JeffVM11A = 0;
MariaVM11A = 0;
JohnVM11A = 0;
LeahVM11A = 0;
PaulVM11A = 0;
JennyVM11A = 0;
GokuVM11A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM11A = 0;
JeffVM11A = 0;
MariaVM11A = 0;
JohnVM11A = 0;
LeahVM11A = 0;
PaulVM11A = 0;
JennyVM11A = 0;
GokuVM11A = 0;




$('#MySelfVM11A').click(function(){

  if (MySelfVM11A === 0){MySelfVM11A = 1;} else {MySelfVM11A=0;}

console.log(MySelfVM11A);
});






$('#JeffVM11A').click(function(){

  if (JeffVM11A === 0){JeffVM11A = 1;} else {JeffVM11A=0;}

console.log(JeffVM11A);
});


$('#MariaVM11A').click(function(){
  
  if (MariaVM11A === 0){MariaVM11A = 1;} else {MariaVM11A=0;}

console.log(MariaVM11A);
});


$('#JohnVM11A').click(function(){
  
  if (JohnVM11A === 0){JohnVM11A = 1;} else {JohnVM11A=0;}

console.log(JohnVM11A);
});


$('#LeahVM11A').click(function(){
  
  if (LeahVM11A === 0){LeahVM11A = 1;} else {LeahVM11A=0;}

console.log(LeahVM11A);
});


$('#PaulVM11A').click(function(){
  
  if (PaulVM11A === 0){PaulVM11A = 1;} else {PaulVM11A=0;}

console.log(PaulVM11A);
});



$('#JennyVM11A').click(function(){
  
  if (JennyVM11A === 0){JennyVM11A = 1;} else {JennyVM11A=0;}

console.log(JennyVM11A);
});


$('#GokuVM11A').click(function(){
  
  if (GokuVM11A === 0){GokuVM11A = 1;} else {GokuVM11A=0;}

console.log(GokuVM11A);
});















AllFriendsVM11A = JeffVM11A + MariaVM11A + JohnVM11A + LeahVM11A + PaulVM11A + JennyVM11A + GokuVM11A + MySelfVM11A; 




totalGiftVM11A = parseFloat(totalMOBI11A) * parseFloat(AllFriendsVM11A);


$('.friendsVM11A').click(function(){

AllFriendsVM11A = JeffVM11A + MariaVM11A + JohnVM11A + LeahVM11A + PaulVM11A + JennyVM11A + GokuVM11A + MySelfVM11A; 

totalGiftVM11A = parseFloat(totalMOBI11A) * parseFloat(AllFriendsVM11A);

 console.log("All friendsVM11A is =" + AllFriendsVM11A);
console.log("All friendsVM11A is =" + typeof('AllFriendsVM11A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM11A);
console.log("The totalMOBI11A =" + totalMOBI11A);
console.log("The totalGiftVM11A =" + totalMOBI11A);
console.log("The totalGiftVM11A =" + typeof('totalMOBI11A'));

$('#totalGiftVM11A').attr('value', totalGiftVM11A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI11A > label').click(function(){
payMethod11A = $(this).attr('value');
console.log(payMethod11A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod11A = "none";
  itemValue11A = '';
  total11A = "$0.00";
  $('#total11A').attr('value', total11A);

  $('.itmV11A, .PayButtonsMOBI11A > label').removeClass('active');


$(this).fadeOut();
$('.qty11A').fadeOut();
qtyValue11A = 1;

});



$('.buy11AMOBI').click(function(){

 if(itemValue11A !=='0' && payMethod11A !=='none'){
$('.BuyNewVM11A').fadeIn();
}

});


$('.lan11A, lan11AMOBI').click(function(){

$('.itmV11A, .PayButtonsMOBI11A > label, .PayButtons11A > label').removeClass('active');
$('.qty11A').fadeOut();
total11A = "$0.00";
 $('#total11A').attr('value', total11A);

});



$('.itm11A').dblclick(function(){

  $('.qty11A').fadeOut();

$('.itmV11A, .PayButtonsMOBI11A > label, .PayButtons11A > label').removeClass('active');
$('.qty11A').fadeOut();
total11A = "$0.00";
 $('#total11A').attr('value', total11A);

});



$(' #Refill11A').click(function(){
if(itemValue11A !=='0' && payMethod11A !=='none'){
$('.RenewVM11A').fadeIn();
}
});


$('#CheckBalVM11A').click(function(){
  $('.CheckBalVM11A').fadeIn();
});




//////////////////////////////////////////////////////////



































// ^




//when any language is clicked all buttons become unchecked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
  $('.qty11A').fadeOut('fast');
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').attr('class','btn btn-default btn-lg');
$('#credit, #cash, #debit, #other').attr('class','btn btn-default btn-lg');

$('#total').attr('value','$0.00');
});


//When langauge clicked disabled buttons until an item is clicked
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){

// $('#sub11A').attr('class','disabled');
// $('#add11A').attr('class','disabled');

});


/*//When item clicked qtybutton values are activated
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').click(function(){
$('#sub11A').fadeIn('fast');
$('#add11A').fadeIn('fast');

});
*/





//After selecting Payment method

$('#cash, #credit, #debit, #other').click(function(){
  payMethod11A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod11A + 'and item value is: ' +itemValue11A);

});

//Hide these PopUps

$('.seOptions11A, .seItem11A, .pmethod11A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buy11A').click(function(){

  if(itemValue11A !=='0' && payMethod11A !=='none'){
  
       
       $('.check').hide();
       $('.thankRefill11A').hide();
       $('.thankBuy11A').fadeIn('fast');
       $('.TapBuy11A').click(function(){
          $('.thankBuy11A').hide(); 
         });

        }

 });




$('#refill11A').click(function(){

   if(itemValue11A !=='0' && payMethod11A !=='none'){
   
    
      $('.check').hide();
      $('.thankBuy11A').hide();
      $('.thankRefill11A').fadeIn('fast');
      $('.TapRefill11A').click(function(){
      $('.thankRefill11A').hide();


 });
}
});







/*
$('#buy').click(function(){

  if(itemValue11 =='0' && payMethod11A =='none'){
    $('.seOptions11A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod11A =='none'){

      $('.pmethod11A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod11A !== 'none'){
       $('.seItem11A').fadeIn('fast');
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

   if(itemValue11 =='0' && payMethod11A =='none'){
    $('.seOptions11A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue11 !=='0' && payMethod11A =='none'){

      $('.pmethod11A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue11 =='0' && payMethod11A !== 'none'){
       $('.seItem11A').fadeIn('fast');
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
 $('.check11A').fadeIn('fast').click(function(){
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
      $('#panel11A').fadeIn('fast');

      });

     $('#panel11A').click(function(){

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
$('#english, #spanish, #chinesse, #russian, #japanesse, #italian, #french, #saudi').click(function(){
$('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').removeClass('class','active');
$('#credit, #cash, #debit, #other').removeClass('class','active');
$('#btn1a, #btn2a, #btn3a, #btn4a, #btn5a, #btn6a, #btn7a, #btn8a, #btn9a, #btn10a, #morea, #btn15a, #btn20a, btn25a, btn30a').fadeIn('fast');
$('#qtyvalue11A').attr('value', '');

$('#total11A').attr('value','$0.00');
});



    
});




























VM11AscreenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + VM11AscreenType);

VM11AscreenType = 'Machine';

$('.UI11Abuttons').show();
$('.UI11AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM11AscreenType = 'Mobile';
$('.UI11Abuttons').hide();
$('.UI11AbuttonsMOBI').show();

console.log('buttons are ' + VM11AscreenType);

});


////////////////////////////////////


















////////////////////////DarK Color UI2///////////////////////////


$('#DARKui11A').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
    $('.ui11A').addClass(' DARKui11A');



      $('.lan11A').attr('class', 'lan11A');
      $('.lan11A').addClass('DARKlan');

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan11A > label, .lan11A > button').addClass('Darklan11A > lan11A');
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('DARKitm11A');


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A')
           $('.itmV11A').addClass('DARKitmV11A');

           $('.itm11ABackground').addClass('whiteitm11ABackground');
           $('.itm11ABackground').addClass('Darkitm11ABackground'); 

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('DARKqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg')
           // $('.qty11A > label, .qty11A > button').addClass('DARKqty11A > label');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');

///////////

      $('.py11A').attr('class', 'py11A');
      $('.py11A').addClass('DARKpy11A');


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
           $('.py11A > label, .py11A > button').addClass('DARKpy11A > label');

/////////////      

      $('.fin11A').attr('class', 'fin11A');
      $('.fin11A').addClass('DARKfin11A');


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
          // $('.finB11A').addClass('DARKfinB11A');


             $('#total11A').attr('class', 'total11A');
             $('#total11A').addClass('DARKtotal11A');


         


});







////////////////////////White Color UI2///////////////////////////


$('#WHITEui11A').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
   



      $('.lan11A').attr('class', 'lan11A');
      

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A');

      

////////////
      $('.qty11A').attr('class', 'qty11A');
     


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg');
                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');
     

///////////

      $('.py11A').attr('class', 'py11A');
     


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
    

/////////////      

      $('.fin11A').attr('class', 'fin11A');
    


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
    


             $('#total11A').attr('class', 'total11A');
    

});





////////////////////////BLACK Color UI2///////////////////////////


$('#BLACKui11A').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
    $('.ui11A').addClass(' DARKui11A');



      $('.lan11A').attr('class', 'lan11A');
      $('.lan11A').addClass('DARKlan');

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan11A > label, .lan11A > button').addClass('Darklan11A > lan11A');
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('BLACKitm11A');


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A')
           $('.itmV11A').addClass('BLACKitmV11A');

           $('.itm11ABackground').removeClass('whiteitm11ABackground');
           $('.itm11ABackground').addClass('Darkitm11ABackground');

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('DARKqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg')
           // $('.qty11A > label, .qty11A > button').addClass('DARKqty11A > label');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');

///////////

      $('.py11A').attr('class', 'py11A');
      $('.py11A').addClass('DARKpy11A');


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
           $('.py11A > label, .py11A > button').addClass('DARKpy11A > label');

/////////////      

      $('.fin11A').attr('class', 'fin11A');
      $('.fin11A').addClass('DARKfin11A');


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
          // $('.finB11A').addClass('DARKfinB11A');


             $('#total11A').attr('class', 'total11A');
             $('#total11A').addClass('DARKtotal11A');


         


});



////////////////////////PDQ UI///////////////////////////


$('#PDQui11A').click(function(){





/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('PDQitm11A');

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('PDQqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg qty11A');
           $('.qty11A > label, .qty11A > button').addClass('PDQqty11A > label');


           // $('#add11A').attr('class', 'btn btn-default btn-lg add11A');
           // $('#add11A').addClass('PDQadd11A');


           // $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
           // $('#sub11A').addClass('PDQsub11A');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');



           $('#qtyvalue11A').attr('class', 'qtyvalue11A');
           // $('#qtyvalue11A').addClass('PDQqtyvalue11A');





         });



///////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////DarK Color UI2///////////////////////////


$('#DARKui11AMOBI').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
    $('.ui11A').addClass(' DARKui11A');



      $('.lan11A').attr('class', 'lan11A');
      $('.lan11A').addClass('DARKlan');

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan11A > label, .lan11A > button').addClass('Darklan11A > lan11A');
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('DARKitm11A');


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A')
           $('.itmV11A').addClass('DARKitmV11A');

           $('.itm11ABackground').removeClass('whiteitm11ABackground');
           $('.itm11ABackground').addClass('Darkitm11ABackground');

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('DARKqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg')
           // $('.qty11A > label, .qty11A > button').addClass('DARKqty11A > label');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');

///////////

      $('.py11A').attr('class', 'py11A');
      $('.py11A').addClass('DARKpy11A');


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
           $('.py11A > label, .py11A > button').addClass('DARKpy11A > label');

/////////////      

      $('.fin11A').attr('class', 'fin11A');
      $('.fin11A').addClass('DARKfin11A');


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
          // $('.finB11A').addClass('DARKfinB11A');


             $('#total11A').attr('class', 'total11A');
             $('#total11A').addClass('DARKtotal11A');


         


});







////////////////////////White Color UI2///////////////////////////


$('#WHITEui11AMOBI').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
   



      $('.lan11A').attr('class', 'lan11A');
      

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A');

      

////////////
      $('.qty11A').attr('class', 'qty11A');
     


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg');
                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');
     

///////////

      $('.py11A').attr('class', 'py11A');
     


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
    

/////////////      

      $('.fin11A').attr('class', 'fin11A');
    


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
    


             $('#total11A').attr('class', 'total11A');
    

});





////////////////////////BLACK Color UI2///////////////////////////


$('#BLACKui11AMOBI').click(function(){
    $('.ui11A').attr('class', 'ui11A uiXX');
    $('.ui11A').addClass(' DARKui11A');



      $('.lan11A').attr('class', 'lan11A');
      $('.lan11A').addClass('DARKlan');

         $('.lan11A > label, .lan11A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan11A > label, .lan11A > button').addClass('Darklan11A > lan11A');
         $('#english1').addClass('active');
/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('BLACKitm11A');


           $('.itmV11A').attr('class', 'btn btn-default btn-lg itmV11A')
           $('.itmV11A').addClass('BLACKitm11A');

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('DARKqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg')
           // $('.qty11A > label, .qty11A > button').addClass('DARKqty11A > label');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');

///////////

      $('.py11A').attr('class', 'py11A');
      $('.py11A').addClass('DARKpy11A');


           $('.py11A > label, .py11A > button').attr('class', 'btn btn-default btn-lg')
           $('.py11A > label, .py11A > button').addClass('DARKpy11A > label');

/////////////      

      $('.fin11A').attr('class', 'fin11A');
      $('.fin11A').addClass('DARKfin11A');


          // $('.finB11A').attr('class', 'btn btn-default btn-lg finB11A');
          // $('.finB11A').addClass('DARKfinB11A');


             $('#total11A').attr('class', 'total11A');
             $('#total11A').addClass('DARKtotal11A');


         


});



////////////////////////PDQ UI///////////////////////////


$('#PDQui11AMOBI').click(function(){





/////////////

      $('.itm11A').attr('class', 'itm11A');
      $('.itm11A').addClass('PDQitm11A');

////////////
      $('.qty11A').attr('class', 'qty11A');
      $('.qty11A').addClass('PDQqty11A');


           $('.qty11A > label, .qty11A > button').attr('class', 'btn btn-default btn-lg qty11A');
           $('.qty11A > label, .qty11A > button').addClass('PDQqty11A > label');


           // $('#add11A').attr('class', 'btn btn-default btn-lg add11A');
           // $('#add11A').addClass('PDQadd11A');


           // $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
           // $('#sub11A').addClass('PDQsub11A');

                $('#sub11A').attr('class', 'btn btn-default btn-lg sub11A');
                $('#add11A').attr('class', 'btn btn-default btn-lg add11A');



           $('#qtyvalue11A').attr('class', 'qtyvalue11A');
           // $('#qtyvalue11A').addClass('PDQqtyvalue11A');





         });



// ////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////MOBI MoBI///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#VM2Mobile, .UI2buttonsMOBI > button').click(function(){

$('.itmV11A').css('border-radius', '25px');
  
$('.itm11AtoHorizontal').show();
$('.ui11A').addClass('ui11AMOBI uiXXMOBI');

$('.lan11A').addClass('lan11AMOBI');

$('.Vm11ALanB').hide();


$('.Vm11ALanBMOBI').show();


$('.itm11A').addClass('itm11AMOBI');
$('.itm11ABackground').addClass('itm11ABackgroundMOBI');


$('.DropItmMenu11A').addClass('DropItmMenu11AMOBI'); 


$('.itmV11A').addClass('itmV11AMOBI'); 

$('.itm11ACost').addClass('itm11ACostMOBI');

$('.itm11Atext').addClass('itm11AtextMOBI');

$('.BalanceV11A').show();

$('.qty11A').addClass('qty11AMOBI') 

$('.sub11A').addClass('sub11AMOBI');





$('.add11A').addClass('add11AMOBI');

$('.qtyvalue11A').addClass('qtyvalue11AMOBI');




$('.py11A').addClass('py11AMOBI');

$('.PayButtons11A').hide();


$('.PayButtonsMOBI11A').show();



$('.fin11A').addClass('fin11AMOBI');






$('.buy11A').hide();

$('.total11A').addClass('total11AMOBI'); 


$('.refill11A').hide();


$('.buy11AMOBI').show();


$('.refill11AMOBI').show();





$('#CheckBalVM11A').show();
$('#cbalance').hide();




});


// ///////Change itmv11A shape///////////

$('.itm11AtoLinear').click(function(){

  $('.itmV11AMOBI').addClass('LinearitmV11AMOBI');
  $('.itm11ACostMOBI').addClass('Linearitm11ACostMOBI');
  $('.itm11AtextMOBI').addClass('Linearitm11AtextMOBI');
  $('.BalanceV11A ').addClass('LinearBalanceV11A'); 

   $('.itmV11AMOBI').removeClass('HorizontalitmV11AMOBI');

});



$('.itm11AtoMiniSquare').click(function(){
  
  $('.itmV11AMOBI').removeClass('LinearitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('Linearitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('Linearitm11AtextMOBI');
  $('.BalanceV11A ').removeClass('LinearBalanceV11A');  
  $('.itmV11AMOBI').removeClass('HorizontalitmV11AMOBI');

  $('.itmV11AMOBI').addClass('MiniSquareitmV11AMOBI');
  $('.itm11ACostMOBI').addClass('MiniSquareitm11ACostMOBI');
  $('.itm11AtextMOBI').addClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').addClass('MiniSquareitm11APhoto');


});






$('.itm11AtoLinearPhoto').click(function(){
  
  $('.itmV11AMOBI').removeClass('MiniSquareitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('MiniSquareitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').removeClass('MiniSquareitm11APhoto');
  $('.BalanceV11A ').removeClass('LinearBalanceV11A');
  $('.itmV11AMOBI').removeClass('HorizontalitmV11AMOBI');

  $('.itmV11AMOBI').addClass('PhotoLinearitmV11AMOBI');
  $('.itm11APhoto').addClass('PhotoLinearitm11APhoto');

});





$('.itm11AtoRegular').click(function(){

   $('.itmV11AMOBI').removeClass('HorizontalitmV11AMOBI');
  
  $('.itmV11AMOBI').removeClass('PhotoLinearitmV11AMOBI');
  $('.itm11APhoto').removeClass('PhotoLinearitm11APhoto'); 
  $('.BalanceV11A ').removeClass('LinearBalanceV11A'); 

  $('.itmV11AMOBI').removeClass('MiniSquareitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('MiniSquareitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').removeClass('MiniSquareitm11APhoto');

  $('.itmV11AMOBI').removeClass('LinearitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('Linearitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('Linearitm11AtextMOBI'); 

  $('.itmV11AMOBI').removeClass('MiniSquareitmV11AMOBI');

});





$('.itm11AtoHorizontal').click(function(){

 $('.itmV11AMOBI').addClass('HorizontalitmV11AMOBI');
  
  $('.itmV11AMOBI').removeClass('PhotoLinearitmV11AMOBI');
  $('.itm11APhoto').removeClass('PhotoLinearitm11APhoto'); 
  $('.BalanceV11A ').removeClass('LinearBalanceV11A'); 

  $('.itmV11AMOBI').removeClass('MiniSquareitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('MiniSquareitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').removeClass('MiniSquareitm11APhoto');

  $('.itmV11AMOBI').removeClass('LinearitmV11AMOBI');
  $('.itm11ACostMOBI').removeClass('Linearitm11ACostMOBI');
  $('.itm11AtextMOBI').removeClass('Linearitm11AtextMOBI'); 

  $('.itmV11AMOBI').removeClass('MiniSquareitmV11AMOBI');

});







// ///////Change itmv11A shape///////////



$('.itm11AtoHorizontal').click(function(){

   $(this).hide();
   $('.itm11AtoLinear').show();

});

$('.itm11AtoLinear').click(function(){

   $(this).hide();
   $('.itm11AtoMiniSquare').show();

});
$('.itm11AtoMiniSquare').click(function(){

   $(this).hide();
   $('.itm11AtoLinearPhoto').show();

});
$('.itm11AtoLinearPhoto').click(function(){

   $(this).hide();
   $('.itm11AtoRegular').show();

});

$('.itm11AtoRegular').click(function(){

   $(this).hide();
   $('.itm11AtoHorizontal').show();

});




/////////////////////////////Machine Machine///////////////////////////////
/////////////////////////////////////////////////////////////////////






$('#VM2Machine, .UI2buttons > button').click(function(){

  $('.itmV11A').css('border-radius', '15px');


$('.Organizeitm11A').hide();  

$('.ui11A').removeClass('ui11AMOBI uiXXMOBI');

$('.lan11A').removeClass('lan11AMOBI');

$('.Vm11ALanB').show();


$('.Vm11ALanBMOBI').hide();

$('.itm11ABackground').removeClass('itm11ABackgroundMOBI'); 
$('.itm11A').removeClass('itm11AMOBI');
$('.itmV11A').removeClass('itmV11AMOBI'); 

$('.DropItmMenu11A').removeClass('DropItmMenu11AMOBI');


$('.itm11ACost').removeClass('itm11ACostMOBI');

$('.itm11Atext').removeClass('itm11AtextMOBI');

$('.BalanceV11A').hide();


$('.qty11A').removeClass('qty11AMOBI') 

$('.sub11A').removeClass('sub11AMOBI');





$('.add11A').removeClass('add11AMOBI');

$('.qtyvalue11A').removeClass('qtyvalue11AMOBI');




$('.py11A').removeClass('py11AMOBI');

$('.PayButtons11A').show();


$('.PayButtonsMOBI11A').hide();



$('.fin11A').removeClass('fin11AMOBI');






$('.buy11A').show();

$('.total11A').removeClass('total11AMOBI'); 


$('.refill11A').show();


$('.buy11AMOBI').hide();


$('.refill11AMOBI').hide();



$('#CheckBalVM11A').hide();
$('#cbalance11A').show();







  $('.itmV11A').removeClass('LinearitmV11AMOBI');
  $('.itm11ACost').removeClass('Linearitm11ACostMOBI');
  $('.itm11Atext').removeClass('Linearitm11AtextMOBI'); 

  $('.itmV11A').removeClass('MiniSquareitmV11AMOBI');
  $('.itm11ACost').removeClass('MiniSquareitm11ACostMOBI');
  $('.itm11Atext').removeClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').removeClass('MiniSquareitm11APhoto');
  $('.itmV11A').removeClass('PhotoLinearitmV11AMOBI');
  $('.itm11APhoto').removeClass('PhotoLinearitm11APhoto');  

  $('.itmV11A').removeClass('MiniSquareitmV11AMOBI');
  $('.itm11ACost').removeClass('MiniSquareitm11ACostMOBI');
  $('.itm11Atext').removeClass('MiniSquareitm11AtextMOBI');
  $('.itm11APhoto').removeClass('MiniSquareitm11APhoto');
  $('.itmV11A').removeClass('LinearitmV11AMOBI');
  $('.itm11ACost').removeClass('Linearitm11ACostMOBI');
  $('.itm11Atext').removeClass('Linearitm11AtextMOBI'); 
  $('.itmV11A').removeClass('MiniSquareitmV11AMOBI');






});






//////////////////////////// Automatic MOBI 11A ////////////////////////////////
//////////////////////////// Automatic MOBI 11A ////////////////////////////////

$('.itmV11A').css('border-radius', '25px');
  
$('.itm11AtoHorizontal').show();
$('.ui11A').addClass('ui11AMOBI uiXXMOBI');

$('.lan11A').addClass('lan11AMOBI');

$('.Vm11ALanB').hide();


$('.Vm11ALanBMOBI').show();


$('.itm11A').addClass('itm11AMOBI');
$('.itm11ABackground').addClass('itm11ABackgroundMOBI');


$('.DropItmMenu11A').addClass('DropItmMenu11AMOBI'); 


$('.itmV11A').addClass('itmV11AMOBI'); 

$('.itm11ACost').addClass('itm11ACostMOBI');

$('.itm11Atext').addClass('itm11AtextMOBI');

$('.BalanceV11A').show();

$('.qty11A').addClass('qty11AMOBI') 

$('.sub11A').addClass('sub11AMOBI');





$('.add11A').addClass('add11AMOBI');

$('.qtyvalue11A').addClass('qtyvalue11AMOBI');




$('.py11A').addClass('py11AMOBI');

$('.PayButtons11A').hide();


$('.PayButtonsMOBI11A').show();



$('.fin11A').addClass('fin11AMOBI');






$('.buy11A').hide();

$('.total11A').addClass('total11AMOBI'); 


$('.refill11A').hide();


$('.buy11AMOBI').show();


// $('.refill11AMOBI').show();





$('#CheckBalVM11A').show();
$('#cbalance11A').hide();





//////////////////////////// Automatic MOBI 11A ////////////////////////////////
//////////////////////////// Automatic MOBI 11A ////////////////////////////////










////////////////////////DarK Color UI2///////////////////////////


$('#NoDARKui22, #NoDARKui22MOBI').click(function(){

  console.log('ui color Dark');

uiColor = "Dark";
console.log('ui color = '+ uiColor);

    $('.ui22').removeClass('DARKui22 BLACKui22');
    $('.ui22').addClass(' DARKui22');



/////////////

      $('.itmXX').removeClass('BLACKitm22 DARKitm22');
      $('.itmXX').addClass('DARKitm22');


           $('.itmVxx').removeClass('DARKitmV22 BLACKitmV22');
           $('.SelectmenuXX').removeClass('DARKitmV22 BLACKitmV22');
           $('.SelectmenuXX').removeClass('DARKitmV22 BLACKitmV22');

           $('.itmVxx').addClass('DARKitmV22');
           $('.SelectmenuXX').addClass('DARKitmV22');
           $('.SelectmenuXX').addClass('DARKitmV22');


           $('.itm22Background').addClass('whiteitm22Background');
           $('.itm22Background').addClass('Darkitm22Background');



  $('.itmV33').removeClass('whiteLinear');
  $('.itmV33').addClass('BlackLinear'); 

  $('.TransportServiceLabel').removeClass('DarkTransportServiceLabel WhiteTransportServiceLabel BlackTransportServiceLabel');
  $('.TransportServiceLabel').addClass('DarkTransportServiceLabel');



////////////


///////////



/////////////      

      $('.fin22').removeClass('DARKfin22');
      $('.fin22').addClass('DARKfin22');


          // $('.finB22').attr('class', 'btn btn-default btn-lg finB22');
          // $('.finB22').addClass('DARKfinB22');



             $('.total2').addClass('DARKtotal2');


         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').removeClass('whiteLinear');
         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').addClass('BlackLinear');    


});







////////////////////////White Color UI2///////////////////////////


$('#NoNoWHITEui22, #NoNoWHITEui22MOBI').click(function(){


  console.log('ui color White');




uiColor = "White";
console.log('ui color = '+ uiColor);




     $('.ui22').removeClass('DARKui22 BLACKui22');
   



/////////////

       $('.itmXX').removeClass('BLACKitm22 DARKitm22');
      


           $('.itmVxx').removeClass('DARKitmV22 BLACKitmV22');
           $('.SelectmenuXX').removeClass('DARKitmV22 BLACKitmV22');

         
        


  $('.itmV33').removeClass('BlackLinear');
  $('.itmV33').addClass('whiteLinear');



      

////////////


  $('.TransportServiceLabel').removeClass('DarkTransportServiceLabel WhiteTransportServiceLabel BlackTransportServiceLabel');
  $('.TransportServiceLabel').addClass('WhiteTransportServiceLabel');

///////////


    

/////////////      

      $('.fin22').removeClass('DARKfin22');
    


          // $('.finB22').attr('class', 'btn btn-default btn-lg finB22');
    

             
             $('.total2').removeClass('DARKtotal2');
    
         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').removeClass('BlackLinear');
         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').addClass('whiteLinear');



         
});





////////////////////////BLACK Color UI2///////////////////////////


$('#NoNoNoBLACKui22, #NoNoNoBLACKui22MOBI').click(function(){



  console.log('ui color Black');


uiColor = "Dark";
console.log('ui color = '+ uiColor);




/////////////

      $('.itmXX').removeClass('BLACKitm22 DARKitm22');
      $('.itmXX').addClass('BLACKitm22');


           $('.itmVxx').removeClass('DARKitmV22 BLACKitmV22');
           $('.SelectmenuXX').removeClass('DARKitmV22 BLACKitmV22');
           



           $('.itmVxx').addClass('BLACKitmV22');
           $('.SelectmenuXX').addClass('BLACKitmV22');
          


           $('.itm22Background').removeClass('whiteitm22Background');
           $('.itm22Background').addClass('Darkitm22Background');



  $('.itmV33').removeClass('whiteLinear');
  $('.itmV33').addClass('BlackLinear');

////////////

  $('.TransportServiceLabel').removeClass('DarkTransportServiceLabel WhiteTransportServiceLabel BlackTransportServiceLabel');
  $('.TransportServiceLabel').addClass('BlackTransportServiceLabel');



/////////////    

      $('.fin22').removeClass('DARKfin22');
      $('.fin22').addClass('DARKfin22');


          // $('.finB22').attr('class', 'btn btn-default btn-lg finB22');
          // $('.finB22').addClass('DARKfinB22');



             $('.total2').addClass('DARKtotal2');


         
         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').removeClass('whiteLinear');
         $('.PhotoLinearitmV22MOBI, .LinearitmV22MOBI').addClass('BlackLinear');

});



////////////////////////PDQ UI///////////////////////////



// ////////////////////////////////////////////////////////////////////////////////////////////////////////

