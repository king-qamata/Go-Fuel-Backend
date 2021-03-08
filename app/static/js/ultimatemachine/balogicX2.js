
$(document).ready(function(){




 
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);




  $('#exit2Yx2').click(function(){
  console.log('exitx2Y button was clicked');

       $('.goodbyex2').fadeIn('fast');
       $('#receiptYesx2, #receiptNox2').removeClass('active');

       $('.ServicePanelx2, #closeSer2Panelsxxxxx2, .Schedulex2').hide();
       serviceValuex2 = '';
         userInputx2='0.00';
         $('#qtyvalue2x2').attr('value', userInputx2);
});




  $('#receiptYesx2, #receiptNox2').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x2, .sendMoney2x2, .CreditCardsx2, .assistancex2, .Loanx2').hide();
             $('#billDenox2 ,#noBillDenox2').removeClass('active');

       
             $('.confBack2Yx2').hide();
             $('#billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
             $('.numVx2, #amountx2, #qtyvalue2x2').show();
             $('#submit2Yx2, #exit2Yx2').show();
             $('#wdraw1, #wdraw2, #trans, #trans2').removeClass('hili');

                  $('.goodbyex2').hide();
                     serviceValuex2='';
                     tofValuex2='waived';
               
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);



       
                   $('#cheTsavx2, #cheTsav2x2').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x2').hide().fadeIn('10000');

      });


    


    $('.back24x2, .confirm24x2').click(function(){
      $('.confBack24x2').hide();





});   








$('.TapBx2').click(function(){

  $('.goodbyex2').fadeOut('fast');
});





// /////////Headers///////////////////


$('#atmHomex2, #ATM1Machinex2').click(function(){

$('.OtherHeaderx2').hide();


});





$('#MyFinancesx2').click(function(){
$('.HeaderPx2').hide();
$('.OtherHeaderx2, .MyFinancesx2').show();



});



$('#atmNotix2').click(function(){
$('.HeaderPx2').hide();
$('.OtherHeaderx2, .Notificationsx2').show();



});



$('#atmSetx2').click(function(){
$('.HeaderPx2').hide();
$('.OtherHeaderx2, .Settingsx2').show();


});



// ///////////////////


datex2= '';

$('#CreditCx2, #PayBx2, #sendx2, #loanx2').click(function(){
$('.Schedulex2').show();
$('.Schedulex2 > #datepicker').attr('value', datex2);

});


$('#closeSer2Panelsxxxxx2, .Confirm2Yx2, .exit2Yx2').click(function(){

$('.Schedulex2, .ServicePanelx2, #closeSer2Panelsxxxxx2').hide();
$('.Schedulex2 > #datepicker').attr('value', datex2);

     $('.pyx2').hide();
     $('.PayButtonsx2 > label').removeClass('active');
});


  ///////////////////////////////////////////////////////// 

    $("#Spp9").click(function(){
      $(this).hide();
      $('#Hpp9').fadeIn();
    $(".history").toggle('slow');
  });



    $("#Spp1").click(function(){
      $(this).hide();
      $('#Hpp1').fadeIn();
    $(".pp1").toggle('slow');
  });


  $("#Spp2").click(function(){
     $(this).hide();
      $('#Hpp2').fadeIn();
    $(".pp2").toggle('slow');
  });

  $("#Spp3").click(function(){
     $(this).hide();
      $('#Hpp3').fadeIn();
    $(".pp3").toggle('slow');
  });

   $("#Spp4").click(function(){
     $(this).hide();
      $('#Hpp4').fadeIn();
    $(".pp4").toggle('slow');
  });

   $("#Spp5").click(function(){
     $(this).hide();
      $('#Hpp5').fadeIn();
    $(".pp5").toggle('slow');
  });

      $("#Spp6").click(function(){
     $(this).hide();
      $('#Hpp6').fadeIn();
    $(".pp6").toggle('slow');
  });









  $("#Hpp9").click(function(){
     $(this).hide();
      $('#Spp9').fadeIn();
    $(".history").toggle('slow');
  });



  $("#Hpp1").click(function(){
     $(this).hide();
      $('#Spp1').fadeIn();
    $(".pp1").toggle('slow');
  });


  $("#Hpp2").click(function(){
     $(this).hide();
      $('#Spp2').fadeIn();
    $(".pp2").toggle('slow');
  });

  $("#Hpp3").click(function(){
     $(this).hide();
      $('#Spp3').fadeIn();
    $(".pp3").toggle('slow');
  });

   $("#Hpp4").click(function(){
     $(this).hide();
      $('#Spp4').fadeIn();
    $(".pp4").toggle('slow');
  });

   $("#Hpp5").click(function(){
     $(this).hide();
      $('#Spp5').fadeIn();
    $(".pp5").toggle('slow');
      });

       $("#Hpp6").click(function(){
     $(this).hide();
      $('#Spp6').fadeIn();
    $(".pp6").toggle('slow');
  });











tofValuex2 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex2='';
tofValuex2='waived';
billDenox2= false;


//stores user inputs






$('.NumPadx2').click(function(){

if(userInputx2 === '0.00'){

   userInputx2 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});







// /////////Send Wire transfers///////////////

// //////////////////////////////





$('.QtyValueCoverx2').click(function(){
$('.NumPadx2').hide();
$('.numVx2').show();


});









////////////////////////////////////////////////////////////////////////////


var userInputx2='';





 $('.numVx2').click(function(){
   userInputx2 += $(this).attr("value");
   $('#qtyvalue2x2').attr('value', userInputx2);
    console.log("current forrouting number is :" + userInputx2);
    console.log('New input is : ' + userInputx2);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex2').click(function(){

    var getInputx2 = userInputx2;
    var lenx2 = getInputx2.length -1;
    var newInputx2 = getInputx2.substring(0, lenx2);

    userInputx2 = newInputx2;
     $('#qtyvalue2x2').attr('value', userInputx2);
     
    console.log('New input is : ' + userInputx2)




});


//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx2, #qtyvalue2x2').click(function(){
  $('.numRx2, .numCCx2').hide();
  $('.numVx2').show();
});















//Send money from check savings

// $('.sendFromSavingsx2, .sendFromCheckingsx2').click(function(){
//  // $('#labelATM').text('Send Money to:');
//  // $('#routing').attr('placeholder', 'Routing Number');
//  $('.sendMoney2x2').fadeIn('fast');
//   $('#cheTsav2x2, #savTche2x2').fadeOut();
//  serviceValuex2=$(this).attr('value');
//  tofValuex2="sendx2";
//  console.log('tofValue is :' + tofValuex2);
//  console.log('serviceValue is: ' + serviceValuex2);



// });





// ///////////Bill DenoMination Official x2///////////





  $('#BILLDEx2').click(function(){
    serviceValuex2="BillDex2"
    $('#cheTsavx2').hide();
    $('#savTchex2').hide();
 
    $('.BillDenominationWdrawx2').fadeIn('fast');
    
userInputx2 = '';


    console.log("Service value x2is = " + serviceValuex2);
    console.log("qtyvalue = Deno" );

   });



       $('.retrievex2').click(function(){  
         $('.BillDenominationWdrawx2').fadeOut('fast');
         $('#qtyvalueDenox2').hide();
         userInputx2 ="";
         $('#qtyvalue2x2').show();
         $('#qtyvalue2x2').attr('value', "");

         $('#DenoImput10x2').attr('value','');
         $('#DenoImput20x2').attr('value','');
         $('#DenoImput50x2').attr('value','');
         $('#DenoImput100x2').attr('value', '');


          DenoImput10x2
          DenoImput20x2
          DenoImput50x2
          DenoImput100x2


       });
 










// /////////////////////////////////
  var BillTypex2=""


  $('.DenominatedBillsx2').click(function(){
    BillTypex2 = $(this).attr('value');
    console.log('Bill Type Current Value is : ' + BillTypex2);




  // var userInputDeno='';


  // DenoImput10valuex2='';
  // DenoImput20valuex2='';
  // DenoImput50valuex2='';
  // DenoImput100valuex2='';



// DenoImputTotalx2 = DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2;
// console.log('Deno total is ' + DenoImputTotalx2);






});



  DenoImput10x2=0;
  DenoImput20x2=0;
  DenoImput50x2=0;
  DenoImput100x2=0;


  Deno10IValx2  = '';
  Deno20IValx2  = '';
  Deno50IValx2  = '';
  Deno100IValx2 = ''; 





$('.NumPadx2').click(function(){
if (DenoImput10x2 === '0' || 0){
  DenoImput10x2 = '';
}

if (DenoImput20x2 === '0' || 0){
  DenoImput20x2 = '';
}

if (DenoImput50x2 === '0' || 0){
  DenoImput50x2 = '';
}

if (DenoImput100x2 === '0' || 0){
  DenoImput100x2 = '';
}





});



/////////



$('#bill10x2').click(function(){


DenoImput10x2 = '0';
 $('#DenoImput10Labelx2 > input').attr('value', DenoImput10x2);
     


  console.log('The Selected DenoImput is : ' + BillTypex2);
  console.log('The Selected DenoImput is : ' + BillTypex2);


   $('#DenoImput10x2, #DenoImput10Labelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numDeno10x2').show();


  console.log('numDeno10 pad');
  console.log(DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2);


 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);



});




 $('.numDeno10x2').click(function(){

          DenoImput10x2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);
          Deno10IValx2 = parseInt(DenoImput10x2);

          $('#DenoImput10Labelx2 > input').attr('value', Deno10IValx2);

           console.log("current DenoImput10x2 number is :" + Deno10IValx2);
           console.log('New DenoImput10x2 is : ' + Deno10IValx2);
           console.log('A numV was clicked and it has change input 10 value');

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);

 // // Deno10IValx2 = parseInt(DenoImput10x2);
 // DenoTotalx2 = Deno10IValx2 + Deno20IValx2 + Deno50IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);
        
           });




       //backspace button
           $('#backSpaceDeno10x2').click(function(){

           var getInput = DenoImput10x2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput10x2 = newInput;
          Deno10IValx2 = parseInt(DenoImput10x2);

            $('#DenoImput10Labelx2 > input').attr('value', Deno10IValx2);
     
           console.log('New input is : ' +  Deno10IValx2)
            

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);

 // Deno10IValx2 = parseInt(DenoImput10x2);
 // DenoTotalx2 = Deno10IValx2 + Deno20IValx2 + Deno50IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);


       });




/////////


$('#bill20x2').click(function(){

DenoImput20x2 = '0';
 $('#DenoImput20Labelx2 > input').attr('value', DenoImput20x2);


  console.log('The Selected DenoImput is : ' + BillTypex2);
  console.log('The Selected DenoImput is : ' + BillTypex2);


   $('#DenoImput20x2, #DenoImput20Labelx2').css('color','green');


  $('.NumPadx2').hide();
   $('.numDeno20x2').show();
   console.log('numDeno20 pad');


  console.log('total is = '+ DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2);


 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);



});




 $('.numDeno20x2').click(function(){

          DenoImput20x2 += $(this).attr("value");
          $('#DenoImput20Labelx2 > input').attr('value', DenoImput20x2);
           console.log("current DenoImput20 number is :" + DenoImput20x2);
           console.log('New DenoImput20 is : ' + DenoImput20x2);
           console.log('A numV was clicked and it has change input 10 value');


 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);

 // Deno20IValx2 = parseInt(DenoImput20x2);
 // DenoTotalx2 = Deno20IValx2 + Deno10IValx2 + Deno50IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);

        
           });




       //backspace button
           $('#backSpaceDeno20x2').click(function(){

           var getInput = DenoImput20x2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput20x2 = newInput;
             $('#DenoImput20Labelx2 > input').attr('value', DenoImput20x2);
     
           console.log('New input is : ' + DenoImput20x2)
            DenoImput20valuex2 = DenoImput20x2 * BillTypex2;

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
  $('#qtyvalue2x2').attr('value', userInputx2);

 //  Deno20IValx2 = parseInt(DenoImput20x2);
 // DenoTotalx2 = Deno20IValx2 + Deno10IValx2 + Deno50IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);



       });




//////////



$('#bill50x2').click(function(){

DenoImput50x2 = '0';
 $('#DenoImput50Labelx2 > input').attr('value', DenoImput50x2);


  console.log('The Selected DenoImput is : ' + BillTypex2);
  console.log('The Selected DenoImput is : ' + BillTypex2);


   $('#DenoImput50x2, #DenoImput50Labelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numDeno50x2').show();
   console.log('numDeno50 pad');

     console.log(DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2);

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
$('#qtyvalue2x2').attr('value', userInputx2);





});




 $('.numDeno50x2').click(function(){

          DenoImput50x2 += $(this).attr("value");
           $('#DenoImput50Labelx2 > input').attr('value', DenoImput50x2);
           console.log("current DenoImput50x2 number is :" + DenoImput50x2);
           console.log('New DenoImput50x2 is : ' + DenoImput50x2);
           console.log('A numV was clicked and it has change input 10 value');


 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
 $('#qtyvalue2x2').attr('value', userInputx2);


 // Deno50IValx2 = parseInt(DenoImput50x2);
 // DenoTotalx2 = Deno50IValx2 + Deno20IValx2 + Deno10IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);


        
           });




       //backspace button
           $('#backSpaceDeno50x2').click(function(){

           var getInput = DenoImput50x2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput50x2 = newInput;
             $('#DenoImput50Labelx2 > input').attr('value', DenoImput50x2);
     
           console.log('New input is : ' + DenoImput50x2)
            DenoImput50valuex2 = DenoImput50x2 * BillTypex2;


 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
 $('#qtyvalue2x2').attr('value', userInputx2);


 // Deno50IValx2 = parseInt(DenoImput50x2);
 // DenoTotalx2 = Deno50IValx2 + Deno20IValx2 + Deno10IValx2 + Deno100IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);   

       });



///////////




$('#bill100x2').click(function(){

 DenoImput100x2 = '0';
 $('#DenoImput100Labelx2 > input').attr('value', DenoImput100x2);


  console.log('The Selected DenoImput is : ' + BillTypex2);
  console.log('The Selected DenoImput is : ' + BillTypex2);


   $('#DenoImput100x2, #DenoImput100Labelx2').css('color','green');


    $('.NumPadx2').hide();
   $('.numDeno100x2').show();
   console.log('numDeno100 pad');

     console.log(DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2);

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
 $('#qtyvalue2x2').attr('value', userInputx2);



});



 $('.numDeno100x2').click(function(){

          DenoImput100x2 += $(this).attr("value");
          $('#DenoImput100Labelx2 > input').attr('value', DenoImput100x2);
           console.log("current DenoImput100x2 number is :" + DenoImput100x2);
           console.log('New DenoImput100x2 is : ' + DenoImput100x2);
           console.log('A numV was clicked and it has change input 10 value');

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
 $('#qtyvalue2x2').attr('value', userInputx2);

 // Deno100IValx2 = parseInt(DenoImput100x2);
 // DenoTotalx2 = Deno100IValx2 + Deno20IValx2 + Deno50IValx2 + Deno10IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);

        
           });




       //backspace button
           $('#backSpaceDeno100x2').click(function(){

           var getInput = DenoImput100x2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput100x2 = newInput;
            $('#DenoImput100Labelx2 > input').attr('value', DenoImput100x2);
     
           console.log('New input is : ' + DenoImput100x2)
            DenoImput100valuex2 = DenoImput100x2 * BillTypex2;

 userInputx2 = parseInt(DenoImput10x2) + parseInt(DenoImput20x2) + parseInt(DenoImput50x2) + parseInt(DenoImput100x2);
 $('#qtyvalue2x2').attr('value', userInputx2);

 // Deno100IValx2 = parseInt(DenoImput100x2);
 // DenoTotalx2 = Deno100IValx2 + Deno20IValx2 + Deno50IValx2 + Deno10IValx2;
 //   $('#qtyvalue2x2').attr('value', DenoTotalx2);

       });





/////////

  console.log(DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2);




// $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn0').click(function(){

//      DenoImputTotalx2 = DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2;


//      console.log('DenoImputTotal is = ' + DenoImputTotalx2);

//      $('#qtyvalueDenox2').attr('value', DenoImputTotalx2);

// });





// $('.NumPadx2').click(function(){



//   Deno10IValx2 = parseInt(DenoImput10x2);
//   Deno20IValx2 = parseInt(DenoImput20x2);
//   Deno50IValx2 = parseInt(DenoImput50x2);
//   Deno100IValx2 = parseInt(DenoImput100x2);


//    console.log('deno 10 is = ' + Deno10IValx2 + ' and it is type of ' + typeof('Deno10IValx2'));
//    console.log('deno 20 is = ' + Deno20IValx2 + ' and it is type of ' + typeof('Deno20IValx2'));
//    console.log('deno 50 is = ' + Deno50IValx2 + ' and it is type of ' + typeof('Deno50IValx2'));
//    console.log('deno 100 is = ' + Deno100IValx2 + ' and it is type of ' + typeof('Deno100IValx2'));

//     console.log(Deno10IValx2 + Deno20IValx2 + Deno50IValx2 + Deno100IValx2);

//     DenoTotalx2 = Deno10IValx2 + Deno20IValx2 + Deno50IValx2 + Deno100IValx2;


// $('#qtyvalue2x2').attr('value', DenoTotalx2);


// });



// });////End of billtype click/////////////*********************************




































/////////// /Close Button for service pannels////////////////////

$('.serDropx2 > button, #QuickPay2X2, #QuickPay3X2').click(function(){

   $('#closeSer2Panelsxxxxx2').fadeIn();

});


//

$('#closeSer2Panelsxxxxx2').click(function(){
$(this).fadeOut();


$('.DenominatedBillsx2').removeClass('active');


  $('#cheTsav2x2, #savTche2x2').hide();
  $('.confBack2Yx2').hide();
  $('#submit2Yx2, #exit2Yx2').show(); 

$('.ServicePanelx2').fadeOut();

  $('.NumPadx2').hide();
  $('.numVx2').show();

userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);


     $('.pyx2').hide();
     $('.PayButtonsx2 > label').removeClass('active');




   $('#qtyvalueDenox2, #qtyvalueCardx2, #qtyvalueQPayx2').hide();
         $('#qtyvalue2x2').show();
        



         $('#DenoImput10Labelx2 > input').attr('value','0');
         $('#DenoImput20Labelx2 > input').attr('value','0');
         $('#DenoImput50Labelx2 > input').attr('value','0');
         $('#DenoImput100Labelx2 > input').attr('value', '0');

          DenoImput10x2='';
          DenoImput20x2='';
          DenoImput50x2='';
          DenoImput100x2='';







});








// ////////////////////





$('#sendx, #sendx2').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x2').fadeIn('fast');
  $('#cheTsav2x2, #savTche2x2').fadeOut();
 serviceValuex2=$(this).attr('value');
 tofValuex2 = "waived";
 console.log('tofValue is :' + tofValuex2);
 console.log('serviceValue is: ' + serviceValuex2);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx2').hide();
    $('#savTchex2').hide();
   serviceValuex2 =$(this).attr('value');
   $('#labelATMx2').text('Pay Bill & Tickets');
   $('#routingx2').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x2').fadeIn('fast');
 serviceValuex2=$(this).attr('value');
 tofValuex2="send";
 console.log('tofValue is :' + tofValuex2);
 console.log('serviceValue is: ' + serviceValuex2);



});






//When secondary services button are clikced, primary service buttons become non-active if active
/*$('#transfer, .sendFromSavings, .sendFromCheckings').click(function(){
    
      $('#cash2, #withdraw2, #checks2').attr('class','btn btn-default btn-lg serB');

});
*/

$('#cash2x2, #wdraw1, #wdraw2, #checks2x2, #CreditCx2, #Loanx2, #Livex2, #QuickPayx2, .sendFromCheckingsx2').click(function(){
  
// $('.sm2X2, .serB').click(function(){
  $('#savTchex2, #cheTsavx2').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1, #wdraw2').click(function(){
  
// $('.sm2X2, .serB').click(function(){
  $('#savTche2x2, #cheTsav2x2').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
  console.log('wdraw was clicked');
});


//Pressing Transfer buttons makes Account buttons active
/*
$('#ttsavings').click(function(){
  $('#saving2').attr('class','btn btn-default btn-lg active');
  $('#checking2').attr('class','btn btn-default btn-lg');
  $('#cheTsav').fadeIn('fast');
   $('#savTche').hide();
  tofValue= $('#saving2').attr('value');
  console.log('tofValue is :' + tofValue);

})

$('#ttchecking').click(function(){
  
  $('#saving2').attr('class','btn btn-default btn-lg');
  $('#checking2').attr('class','btn btn-default btn-lg active');
  


    $('#savTche').fadeIn('fast');
  $('#cheTsav').hide();
  tofValue= $('#checking2').attr('value');
  console.log('tofValue is :' + tofValue);

})


*/



$('#checking2x2, #saving2x2').click(function(){
   tofValuex2= $(this).attr('value');
   console.log('tofValue is :' + tofValuex2);
   console.log('serviceValue is: ' + serviceValuex2);


});

//If the transfer service is requested a arrow appears for their corresponding accounts



// $('#transfer').click(function(){
//    $('#checking2').addClass('active');
//    $('#saving2').removeClass('active')
//    $('#savTche').hide();
//    $('#cheTsav').fadeIn('fast');
//    $('#toSaving').fadeIn('fast');

//    tofValue=$('#checking2').attr('value');
//      console.log('tofValue is :' + tofValue);
//      console.log('serviceValue is: ' + serviceValue);


//  });
   
//    $('#checking2').click(function(){
//      if(serviceValue ==$('#transfer').attr("value")){
//           $('#cheTsav').fadeIn('fast');
//           $('#savTche').hide();
//           $('#toSaving').fadeIn('fast');
//           $('#toChecking').hide();
//           console.log('tofValue is :' + tofValue);
//           console.log('serviceValue is :' + serviceValue);

//             }
//          }); 


      
//    $('#saving2').click(function(){
//       if(serviceValue==$('#transfer').attr("value") && tofValue== $("#saving2").attr('value')){

      
//           $('#cheTsav').hide();
//           $('#savTche').fadeIn('fast');
//           $('#toSaving').hide();
//           $('#toChecking').fadeIn('fast');
//           console.log('tofValue is :' + tofValue);
//           console.log('serviceValue is :' + serviceValue);
//         }

//       });
   
  
  $('#Livex2').click(function(){
    $('#cheTsavx2').hide();
    $('#savTchex2').hide();

    $('.assistancex2').fadeIn('fast');
    // $('#closeSendLivex2').click(function(){  
    //      $('.assistancex2').fadeOut('fast');
    //    });
  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan//////////////////////////


// $('#closeSendLoanx2').click(function(){
//   console.log("#closeSendLoan was clicked");

//   $('.Loanx2').fadeOut('slow'); 

//  });



$('#Loanx2').click(function(){
  serviceValuex2="Loan";
  tofValuex2='waived';
  console.log("#Loan has been clicked");
  console.log("Service value is =" + serviceValuex2);
   console.log("tofvalue is =" + tofValuex2);



  $('.Loanx2').fadeIn('slow');

  });


 $('.LoanGrantedx2').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex2').click(function(){
    $('#cheTsavx2x2').hide();
    $('#savTchex2x2').hide();

    $('.assistancex2').fadeIn('fast');
    // $('#closeSendLivex2').click(function(){  
    //      $('.assistancex2').fadeOut('fast');
    //    });
  });
 



///////////////////Credit Cards/////////////



$('#CreditCx2').click(function(){

//   serviceValuex2 = $(this).attr('value');
//   tofValuex2 = 'waived';
//   console.log("Service value is = " + serviceValuex2);
//   console.log("tofvalue is = " + tofValuex2);
//   $('.CreditCardsx2').fadeIn('slow');

// });





// SelectedCardx2 = '';



// $('.Cardx2').click(function(){
// SelectedCardx2 = $(this).attr('value');
// console.log("Selected Cards is = " + SelectedCardx2);

// });




//       $('.CardPaymentx2').click(function(){

      
//       $('.CreditCardsx2').fadeIn('slow');
//       $(this).fadeOut('slow');
//       userInputx2 = '';
//       $('.Cardx2').removeClass('active');
// });


//       $('#happyCardx2').attr('value', SelectedCardx2);
//       $('#cardPaymentAmountx2').attr('value', userInputx2);







// $('.CardStatementx2').click(function(){
//   $(this).fadeOut(1500);
//   $('.CreditCardsx2').fadeIn('slow');
// });


// $('.Cardx2').dblclick(function(){

//   $('.CreditCardsx2').fadeOut(1500);
//   $('#CardNamex2').attr('value', SelectedCardx2);
// $('.CardStatementx2').fadeIn('fast');



});

/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx2').click(function(){

    serviceValuex2="CreditCards";

    $('#cheTsavx2').hide();
    $('#savTchex2').hide();
    // $('#qtyvalue2x2, #qtyvalueDenox2').hide();
    // $('#qtyvalueCardx2').show();
    $('.CreditCardsx2').fadeIn('fast');
    
userInputx2 = '';


    console.log("Service value x2 is = " + serviceValuex2);
    console.log("qtyvalue = Deno" );







serviceValuex2 = $(this).attr('value');
  tofValuex2 = 'waived';
  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);
  $('.CreditCardsx2').fadeIn('slow');



  Card1Imputx2= 0;
  Card2Imputx2= 0;
  Card3Imputx2= 0;
  Card4Imputx2= 0;





});





SelectedCardx2 = '';



$('.Cardx2').click(function(){
SelectedCardx2 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx2);

});




//       $('.CardPaymentx2').click(function(){

      
//       $('.CreditCardsx2').fadeIn('slow');
//       $(this).fadeOut('slow');
//       userInputx2 = '';
//       $('.Cardx2').removeClass('active');
// });


      $('#happyCardx2').attr('value', SelectedCardx2);
      $('#cardPaymentAmountx2').attr('value', userInputx2);







$('.CardStatementx2').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx2').fadeIn('slow');
});




$('.Cardx2').dblclick(function(){

  $('.CreditCardsx2').fadeOut(1500);
  $('#CardNamex2').attr('value', SelectedCardx2);
$('.CardStatementx2').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx2=""


  $('.Cardx2').click(function(){
    CardNumberx2 = $(this).attr('value');
    console.log('Current Card x2 is : ' + CardNumberx2);




// DenoImputTotalx2 = DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2;
console.log('Card total is ' + userInputx2);




});



  // Card1Imputx2='';
  // Card2Imputx2='';
  // Card3Imputx2='';
  // Card4Imputx2='';







/////////////////////



$('#card1x2').click(function(){

console.log('Card 1 x2 was selected');
 Card1Imputx2 = 0;
 $('#Card1ImputLabelx2 > input').attr('value', Card1Imputx2);

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

  
  


   $('#Card1Imputx2, #Card1ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numCard1x2').show();



  console.log(Card1Imputx2 + Card2Imputx2 + Card3Imputx2 + Card4Imputx2);



});


$('.numCard1x2').click(function(){

  if (Card1Imputx2 === 0 ){
    Card1Imputx2 = '';
  }
});



 $('.numCard1x2').click(function(){

          Card1Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#Card1ImputLabelx2 > input').attr('value', Card1Imputx2);

           console.log("current Card 1 imput x2 number is :" + Card1Imputx2);
           console.log('New Card 1 imput x2 is : ' + Card1Imputx2);
           
userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceCard1x2').click(function(){

           var getInput = Card1Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx2 = newInput;
            $('#Card1ImputLabelx2 > input').attr('value', Card1Imputx2);
     
           console.log('New input is : ' + Card1Imputx2);
            
userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);




       });









//////////////////



$('#card2x2').click(function(){

  console.log('Card2 x2 was selected');

 Card2Imputx2 = 0;
 $('#Card2ImputLabelx2 > input').attr('value', Card2Imputx2);
   

   $('#Card2Imputx2, #Card2ImputLabelx2').css('color','green');


    $('.NumPadx2').hide();
   $('.numCard2x2').show();



  console.log(Card2Imputx2 + Card2Imputx2 + Card3Imputx2 + Card4Imputx2);


userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);


});




$('.numCard2x2').click(function(){

  if (Card2Imputx2 === 0 ){
    Card2Imputx2 = '';
  }
});






 $('.numCard2x2').click(function(){

          Card2Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#Card2ImputLabelx2 > input').attr('value', Card2Imputx2);

           console.log("current Card 1 imput x2 number is :" + Card2Imputx2);
           console.log('New Card 1 imput x2 is : ' + Card2Imputx2);
           

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpaceCard2x2').click(function(){

           var getInput = Card2Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx2 = newInput;
            $('#Card2ImputLabelx2 > input').attr('value', Card2Imputx2);
     
           console.log('New input is : ' + Card2Imputx2)
            
userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);




       });








// ///////////////




$('#card3x2').click(function(){
 Card3Imputx2 = 0;
 $('#Card3ImputLabelx2 > input').attr('value', Card3Imputx2);




  


   $('#Card3Imputx2, #Card3ImputLabelx2').css('color','green');


    $('.NumPadx2').hide();
   $('.numCard3x2').show();


  console.log(Card3Imputx2 + Card3Imputx2 + Card3Imputx2 + Card4Imputx2);



userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);



});


// /////////


$('.numCard3x2').click(function(){

  if (Card3Imputx2 === 0 ){
    Card3Imputx2 = '';
  }
});


//////////




 $('.numCard3x2').click(function(){

          Card3Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#Card3ImputLabelx2 > input').attr('value', Card3Imputx2);

           console.log("current Card 1 imput x2 number is :" + Card3Imputx2);
           console.log('New Card 1 imput x2 is : ' + Card3Imputx2);
           

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpaceCard3x2').click(function(){

           var getInput = Card3Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx2 = newInput;
            $('#Card3ImputLabelx2 > input').attr('value', Card3Imputx2);
     
           console.log('New input is : ' + Card3Imputx2)
            

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);



       });








// //////////////////




$('#card4x2').click(function(){
 Card4Imputx2 = 0;
 $('#Card4ImputLabelx2 > input').attr('value', Card4Imputx2);






   $('#Card4Imputx2, #Card4ImputLabelx2').css('color','green');


    $('.NumPadx2').hide();
   $('.numCard4x2').show();



  console.log(Card4Imputx2 + Card4Imputx2 + Card4Imputx2 + Card4Imputx2);

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);

});




// /////////


$('.numCard4x2').click(function(){

  if (Card4Imputx2 === 0 ){
    Card4Imputx2 = '';
  }
});


//////////




 $('.numCard4x2').click(function(){

          Card4Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#Card4ImputLabelx2 > input').attr('value', Card4Imputx2);

           console.log("current Card 1 imput x2 number is :" + Card4Imputx2);
           console.log('New Card 1 imput x2 is : ' + Card4Imputx2);
           
userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);



        
           });




       //backspace button
           $('#backSpaceCard4x2').click(function(){

           var getInput = Card4Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx2 = newInput;
            $('#Card4ImputLabelx2 > input').attr('value', Card4Imputx2);
     
           console.log('New input is : ' + Card4Imputx2)
            

userInputx2 = parseInt(Card1Imputx2) + parseInt(Card2Imputx2) + parseInt(Card3Imputx2) + parseInt(Card4Imputx2);

$('#qtyvalue2x2').attr('value', userInputx2);



       });









// });////End of Card Payment/////////////*********************************








///////////////////Pay Your Bills/////////////






  $('#PayBx2').click(function(){

    serviceValuex2="PayYourBills";

    $('#cheTsavx2').hide();
    $('#savTchex2').hide();
    // $('#qtyvalue2x2, #qtyvalueDenox2').hide();
    // $('#qtyvaluePBillx2').show();
    $('.PayBillsx2').fadeIn('fast');
    
userInputx2 = '';


    console.log("Service value x2 is = " + serviceValuex2);
    console.log("qtyvalue = Deno" );







serviceValuex2 = $(this).attr('value');
  tofValuex2 = 'waived';
  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);
  $('.CreditPBillsx2').fadeIn('slow');



  PBill1Imputx2=0;
  PBill2Imputx2=0;
  PBill3Imputx2=0;
  PBill4Imputx2=0;
  PBill5Imputx2=0;
  PBill6Imputx2=0;





});





// SelectedBillx2 = '';



// $('.PBillx2').click(function(){
// SelectedBillx2 = $(this).attr('value');
// console.log("Selected PBills is = " + SelectedPBillx2);

// });



//       $('#happyPBillx2').attr('value', SelectedPBillx2);
//       $('#PBillPaymentAmountx2').attr('value', userInputx2);







// $('.PBillStatementx2').click(function(){
//   $(this).fadeOut(1500);
//   $('.CreditPBillsx2').fadeIn('slow');
// });




// $('.PBillx2').dblclick(function(){

//   $('.CreditPBillsx2').fadeOut(1500);
//   $('#PBillNamex2').attr('value', SelectedPBillx2);
// $('.PBillStatementx2').fadeIn('fast');


//    });














// /////////////////////////////////
  var SelectedBillx2=""


  $('.PBillx2').click(function(){
    SelectedBillx2 = $(this).attr('value');
    console.log('Current Selected Bill x2 is : ' + SelectedBillx2);




// DenoImputTotalx2 = DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2;
console.log('PBill total is ' + userInputx2);

$('.pyx2').hide();
$('.PayButtonsx2 > label').removeClass('active');
$('.confBack2Yx2').hide();
$('#submit2Yx2, #exit2Yx2').show();

});



  // PBill1Imputx2='';
  // PBill2Imputx2='';
  // PBill3Imputx2='';
  // PBill4Imputx2='';







/////////////////////



$('#PBill1x2').click(function(){

console.log('PBill 1 x2 was selected');

 PBill1Imputx2 =  $(this).attr('value');
 $('#PBill1ImputLabelx2 > input').attr('value', PBill1Imputx2);

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

  
  


   $('#PBill1Imputx2, #PBill1ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
    $('.numPBill1x2').show();



  console.log(PBill1Imputx2 + PBill2Imputx2 + PBill3Imputx2 + PBill4Imputx2 + PBill5Imputx2);



});


// /////////


$('.numPBill1x2').click(function(){

  if (PBill1Imputx2 === 0 ){
    PBill1Imputx2 = '';
  }
});


//////////





 $('.numPBill1x2').click(function(){

          PBill1Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill1ImputLabelx2 > input').attr('value', PBill1Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill1Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill1Imputx2);
           
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpacePBill1x2').click(function(){

           var getInput = PBill1Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx2 = newInput;
            $('#PBill1ImputLabelx2 > input').attr('value', PBill1Imputx2);
     
           console.log('New input is : ' + PBill1Imputx2);

           console.log('back space was clicked' );
            
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);




       });









//////////////////



$('#PBill2x2').click(function(){

  console.log('PBill2 x2 was selected');

 PBill2Imputx2 =  $(this).attr('value');
 $('#PBill2ImputLabelx2 > input').attr('value', PBill2Imputx2);


   $('#PBill2Imputx2, #PBill2ImputLabelx2').css('color','green');


  $('.NumPadx2').hide();
  $('.numPBill2x2').show();



  console.log(PBill2Imputx2 + PBill2Imputx2 + PBill3Imputx2 + PBill4Imputx2 + PBill5Imputx2);


userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);


});




// /////////


$('.numPBill2x2').click(function(){

  if (PBill2Imputx2 === 0 ){
    PBill2Imputx2 = '';
  }
});


//////////





 $('.numPBill2x2').click(function(){

          PBill2Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill2ImputLabelx2 > input').attr('value', PBill2Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill2Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill2Imputx2);
           

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpacePBill2x2').click(function(){

           var getInput = PBill2Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx2 = newInput;
            $('#PBill2ImputLabelx2 > input').attr('value', PBill2Imputx2);
     
           console.log('New input is : ' + PBill2Imputx2)
            
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);




       });








// ///////////////




$('#PBill3x2').click(function(){

 PBill3Imputx2 =  $(this).attr('value');
 $('#PBill3ImputLabelx2 > input').attr('value', PBill3Imputx2);



  


   $('#PBill3Imputx2, #PBill3ImputLabelx2').css('color','green');


 $('.NumPadx2').hide();
  $('.numPBill3x2').show();


  console.log(PBill3Imputx2 + PBill3Imputx2 + PBill3Imputx2 + PBill4Imputx2 + PBill5Imputx2);



userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



});



// /////////


$('.numPBill3x2').click(function(){

  if (PBill3Imputx2 === 0 ){
    PBill3Imputx2 = '';
  }
});


//////////




 $('.numPBill3x2').click(function(){

          PBill3Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill3ImputLabelx2 > input').attr('value', PBill3Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill3Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill3Imputx2);
           

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpacePBill3x2').click(function(){

           var getInput = PBill3Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx2 = newInput;
            $('#PBill3ImputLabelx2 > input').attr('value', PBill3Imputx2);
     
           console.log('New input is : ' + PBill3Imputx2)
            

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



       });








// //////////////////




$('#PBill4x2').click(function(){

 PBill4Imputx2 =  $(this).attr('value');
 $('#PBill4ImputLabelx2 > input').attr('value', PBill4Imputx2);





   $('#PBill4Imputx2, #PBill4ImputLabelx2').css('color','green');


  $('.NumPadx2').hide();

  $('.numPBill4x2').show();



  console.log(PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill5Imputx2);


userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

});



// /////////


$('.numPBill4x2').click(function(){

  if (PBill4Imputx2 === 0 ){
    PBill4Imputx2 = '';
  }
});


//////////





 $('.numPBill4x2').click(function(){

          PBill4Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill4ImputLabelx2 > input').attr('value', PBill4Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill4Imputx2 + PBill5Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill4Imputx2);
           
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



        
           });




       //backspace button
           $('#backSpacePBill4x2').click(function(){

           var getInput = PBill4Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx2 = newInput;
            $('#PBill4ImputLabelx2 > input').attr('value', PBill4Imputx2);
     
           console.log('New input is : ' + PBill4Imputx2)
            

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



       });






$('#PBill5x2').click(function(){

 PBill5Imputx2 =  $(this).attr('value');
 $('#PBill5ImputLabelx2 > input').attr('value', PBill5Imputx2);





   $('#PBill5Imputx2, #PBill5ImputLabelx2').css('color','green');


  $('.NumPadx2').hide();
  $('.numPBill5x2').show();



  console.log(PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill5Imputx2);


userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

});


// /////////


$('.numPBill5x2').click(function(){

  if (PBill5Imputx2 === 0 ){
    PBill5Imputx2 = '';
  }
});


//////////





 $('.numPBill5x2').click(function(){

          PBill5Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill5ImputLabelx2 > input').attr('value', PBill5Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill5Imputx2 + PBill5Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill5Imputx2);
           
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



        
           });




       //backspace button
           $('#backSpacePBill5x2').click(function(){

           var getInput = PBill5Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx2 = newInput;
            $('#PBill5ImputLabelx2 > input').attr('value', PBill5Imputx2);
     
           console.log('New input is : ' + PBill5Imputx2)
            

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



       });




// ///////////////////////////




$('#PBill6x2').click(function(){
 PBill6Imputx2 =  $(this).attr('value');
 $('#PBill6ImputLabelx2 > input').attr('value', PBill6Imputx2);






   $('#PBill6Imputx2, #PBill6ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numPBill6x2').show();



  console.log(PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill4Imputx2 + PBill6Imputx2);


userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

});




// /////////


$('.numPBill6x2').click(function(){

  if (PBill6Imputx2 === 0 ){
    PBill6Imputx2 = '';
  }
});


//////////




 $('.numPBill6x2').click(function(){

          PBill6Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#PBill6ImputLabelx2 > input').attr('value', PBill6Imputx2);

           console.log("current PBill 1 imput x2 number is :" + PBill6Imputx2 + PBill6Imputx2);
           console.log('New PBill 1 imput x2 is : ' + PBill6Imputx2);
           
userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



        
           });




       //backspace button
           $('#backSpacePBill6x2').click(function(){

           var getInput = PBill6Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx2 = newInput;
            $('#PBill6ImputLabelx2 > input').attr('value', PBill6Imputx2);
     
           console.log('New input is : ' + PBill6Imputx2)
            

userInputx2 = parseInt(PBill6Imputx2) + parseInt(PBill2Imputx2) + parseInt(PBill3Imputx2) + parseInt(PBill4Imputx2) + parseInt(PBill5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);



       });





// });////End of PBill Payment/////////////*********************************




///////////////////Merchant/////////////



////////////////Merchant x2///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx2').click(function(){

 console.log("Service value x2 is = " + serviceValuex2);

serviceValuex2='Merchant';
tofValuex2 = 'waived';

$('.Merchantx2').fadeIn('slow');


    $('#cheTsavx2').hide();
    $('#savTchex2').hide();


  MerchantNamex2='';
  MerchantCardNUmberx2='';
  MerchantDateNUmberx2='';
  MerchantCVDx2='';
  MerchantZipCodex2='';







         $('.MerchantNameInputx2').attr('value', MerchantNamex2);
         $('.MerchantCardInputx2').attr('value', MerchantCardNUmberx2);
         $('.MerchantDateInputx2').attr('value', MerchantDateNUmberx2);
         $('.MerchantCVDInputx2').attr('value', MerchantCVDx2);
         $('.MerchantZipCodeInputx2').attr('value', MerchantZipCodex2);


 
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);



    console.log("Service value x2 is = " + serviceValuex2);



  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);

});






















// /////////////////////////////////
MerchantLabelx2="";

$('.MerchantLabelx2').click(function(){
MerchantLabelx2 = $(this).attr('value');
console.log("The selected MerchantLabelx2 is = " + MerchantLabelx2);

})








/////////////////////



$('.NameMerLabelx2').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx2').click(function(){




console.log('Merchant Name Label x2 was selected');

 MerchantCardNUmberx2 = "";
 $('.MerchantCardInputx2').attr('value', MerchantCardNUmberx2);


 $('.NumPadx2').hide();
 $('.numMCardx2').show();

});




 $('.numMCardx2').click(function(){

         MerchantCardNUmberx2+= $(this).attr("value");
          
          $('.MerchantCardInputx2').attr('value', MerchantCardNUmberx2);

           });



       //backspace button
           $('#backSpaceMCardx2').click(function(){

           var getInput = MerchantCardNUmberx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx2 = newInput;
            $('.MerchantCardInputx2').attr('value', MerchantCardNUmberx2);
     
           console.log('New input is : ' + MerchantCardNUmberx2);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx2').click(function(){




console.log('Merchant Name Label x2 was selected');

 MerchantDateNUmberx2 = "";
 $('.MerchantDateInputx2').attr('value', MerchantDateNUmberx2);


 $('.NumPadx2').hide();
 $('.numMDatex2').show();

});




 $('.numMDatex2').click(function(){

         MerchantDateNUmberx2+= $(this).attr("value");
          
          $('.MerchantDateInputx2').attr('value', MerchantDateNUmberx2);

           });



       //backspace button
           $('#backSpaceMDatex2').click(function(){

           var getInput = MerchantDateNUmberx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx2 = newInput;
            $('.MerchantDateInputx2').attr('value', MerchantDateNUmberx2);
     
           console.log('New input is : ' + MerchantDateNUmberx2);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx2').click(function(){




console.log('Merchant Name Label x2 was selected');

 MerchantCVDx2 = "";
 $('.MerchantCVDInputx2').attr('value', MerchantCVDx2);


 $('.NumPadx2').hide();
 $('.numCVDx2').show();

});




 $('.numCVDx2').click(function(){

          MerchantCVDx2+= $(this).attr("value");
          
          $('.MerchantCVDInputx2').attr('value', MerchantCVDx2);

           });



       //backspace button
           $('#backSpaceCVDx2').click(function(){

           var getInput = MerchantCVDx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx2 = newInput;
           $('.MerchantCVDInputx2').attr('value', MerchantCVDx2);
     
           console.log('New input is : ' + MerchantCVDx2);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx2').click(function(){




console.log('Merchant Name Label x2 was selected');

 MerchantZipCodex2 = "";
 $('.MerchantZipCodeInputx2').attr('value', MerchantZipCodex2);


 $('.NumPadx2').hide();
 $('.numMZipx2').show();
 
});




 $('.numMZipx2').click(function(){

         MerchantZipCodex2+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx2').attr('value', MerchantZipCodex2);

           });



       //backspace button
           $('#backSpaceMZipx2').click(function(){

           var getInput = MerchantZipCodex2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex2 = newInput;
            $('.MerchantZipCodeInputx2').attr('value', MerchantZipCodex2);
     
           console.log('New input is : ' + MerchantZipCodex2);
            


});






////////////////end of Merchant x2///////////////////////////
///////////////////////////////////////////////////////////





//////////////////////////////

$('.MSwipeCoverx2').click(function(){

$('.MerchantImputx2').removeClass('SelectedMerchantLabel');
$('.MCardImputx2').removeClass('SelectedMerchantLabel');

  $('.MSwipex2').addClass('clickedSwipex2');
   $('.SwipeCardx2').fadeIn('fast');
   $('#closeSer2Panelsxxxxx2').hide();
})


$('.SwButtonx2').click(function(){
    $('.SwipeCardx2').fadeOut('fast');
    $('#closeSer2Panelsxxxxx2').show();
});






/////////////////////////////////
/////////////////////////////////End of Merchant




////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex2').click(function(){

$('#closeSer2Panelsxxxxx2').fadeIn();

 console.log("Service value  is = " + serviceValue);

serviceValuex2='ChangePin';
tofValuex2 = 'waived';

$('.ChangePinx2 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx2='';
  ConPinx2='';





         $('.EnterPinInputx2').attr('value', EntPinx2);
         $('.ConfirmPinInputx2').attr('value', ConPinx2);


 
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);



    console.log("Service value  is = " + serviceValuex2);



  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);

});











// /////////////////////////////////
SelectedPinLabelx2="";

$('.ChangePinLx2').click(function(){
SelectedPinLabelx2 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx2);

})





/////////////////////



$('.EnterPinLabelx2').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx2 = "";
 $('.EnterPinInputx2').attr('value', EntPinx2);


 $('.NumPadx2').hide();
 $('.numEntPinx2').show();


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx2').click(function(){

         EntPinx2+= $(this).attr("value");
          
          $('.EnterPinInputx2').attr('value', EntPinx2);


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx2').click(function(){

           var getInput = EntPinx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx2 = newInput;
            $('.EnterPinInputx2').attr('value', EntPinx2);
     
           console.log('New input is : ' + EntPinx2);


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx2').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx2 = "";
 $('.ConfirmPinInputx2').attr('value', ConPinx2);


 $('.NumPadx2').hide();
 $('.numConPinx2').show();


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx2').click(function(){

         ConPinx2+= $(this).attr("value");
          
          $('.ConfirmPinInputx2').attr('value', ConPinx2);


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx2').click(function(){

           var getInput = ConPinx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx2 = newInput;
            $('.ConfirmPinInputx2').attr('value', ConPinx2);
     
           console.log('New input is : ' + ConPinx2);


// ////Password Match Notification//////////

           if(EntPinx2 !== '' && EntPinx2 === ConPinx2){
            
            $('.MatchedPinNOx2').hide();
            $('.MatchedPinYesx2').fadeIn();

           }



           if(EntPinx2 !== '' && EntPinx2 !== ConPinx2){

            $('.MatchedPinYesx2').hide();
            $('.MatchedPinNOx2').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////






///////////////////Take Loan/////////////






  $('#Loanx2').click(function(){

    serviceValuex2="Loan";

    $('#cheTsavx2').hide();
    $('#savTchex2').hide();
    // $('#qtyvalue2x2, #qtyvalueDenox2').hide();
    // $('#qtyvalueTLoanx2').show();
    $('.PayLoansx2').fadeIn('fast');
    
userInputx2 = '';


    console.log("Service value x2 is = " + serviceValuex2);
    console.log("qtyvalue = Deno" );







serviceValuex2 = $(this).attr('value');
  tofValuex2 = 'waived';
  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);
  $('.CreditTLoansx2').fadeIn('slow');



  TLoan1Imputx2=0;
  TLoan2Imputx2=0;
  TLoan3Imputx2=0;
  TLoan4Imputx2=0;
  TLoan5Imputx2=0;





});












// /////////////////////////////////
  var SelectedLoanx2=""


  $('.TLoanx2').click(function(){
    SelectedLoanx2 = $(this).attr('value');
    console.log('Current Selected Loan x2 is : ' + SelectedLoanx2);




// DenoImputTotalx2 = DenoImput10x2 + DenoImput20x2 + DenoImput50x2 + DenoImput100x2;
console.log('TLoan total is ' + userInputx2);




});



  // TLoan1Imputx2='';
  // TLoan2Imputx2='';
  // TLoan3Imputx2='';
  // TLoan4Imputx2='';







/////////////////////



$('#TLoan1x2').click(function(){

console.log('TLoan 1 x2 was selected');


 TLoan1Imputx2 = 0;
 $('#TLoan1ImputLabelx2 > input').attr('value', TLoan1Imputx2);

userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

  
  


   $('#TLoan1Imputx2, #TLoan1ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numTLoan1x2').show();



  console.log(TLoan1Imputx2 + TLoan2Imputx2 + TLoan3Imputx2 + TLoan4Imputx2 + TLoan5Imputx2);



});



///////////

$('.numTLoan1x2').click(function(){

  if (TLoan1Imputx2 === 0 ){
    TLoan1Imputx2 = '';
  }
});

/////////






 $('.numTLoan1x2').click(function(){

          TLoan1Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#TLoan1ImputLabelx2 > input').attr('value', TLoan1Imputx2);

           console.log("current TLoan 1 imput x2 number is :" + TLoan1Imputx2);
           console.log('New TLoan 1 imput x2 is : ' + TLoan1Imputx2);
           
userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 
        
           });




       //backspace button
           $('#backSpaceTLoan1x2').click(function(){

           var getInput = TLoan1Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan1Imputx2 = newInput;
            $('#TLoan1ImputLabelx2 > input').attr('value', TLoan1Imputx2);
     
           console.log('New input is : ' + TLoan1Imputx2);

           console.log('back space was clicked' );
            
userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 


       });









//////////////////



$('#TLoan2x2').click(function(){

  console.log('TLoan2 x2 was selected');

 TLoan2Imputx2 = 0;
 $('#TLoan2ImputLabelx2 > input').attr('value', TLoan2Imputx2);


   $('#TLoan2Imputx2, #TLoan2ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numTLoan2x2').show();



  console.log(TLoan2Imputx2 + TLoan2Imputx2 + TLoan3Imputx2 + TLoan4Imputx2 + TLoan5Imputx2);


userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 
});




///////////

$('.numTLoan2x2').click(function(){

  if (TLoan2Imputx2 === 0 ){
    TLoan2Imputx2 = '';
  }
});

/////////





 $('.numTLoan2x2').click(function(){

          TLoan2Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#TLoan2ImputLabelx2 > input').attr('value', TLoan2Imputx2);

           console.log("current TLoan 1 imput x2 number is :" + TLoan2Imputx2);
           console.log('New TLoan 1 imput x2 is : ' + TLoan2Imputx2);
           

userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 
        
           });




       //backspace button
           $('#backSpaceTLoan2x2').click(function(){

           var getInput = TLoan2Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan2Imputx2 = newInput;
            $('#TLoan2ImputLabelx2 > input').attr('value', TLoan2Imputx2);
     
           console.log('New input is : ' + TLoan2Imputx2)
            
userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 


       });








// ///////////////




$('#TLoan3x2').click(function(){

 TLoan3Imputx2 = 0;
 $('#TLoan3ImputLabelx2 > input').attr('value', TLoan3Imputx2);




  


   $('#TLoan3Imputx2, #TLoan3ImputLabelx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numTLoan3x2').show();


  console.log(TLoan3Imputx2 + TLoan3Imputx2 + TLoan3Imputx2 + TLoan4Imputx2 + TLoan5Imputx2);



userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 

});




///////////

$('.numTLoan3x2').click(function(){

  if (TLoan3Imputx2 === 0 ){
    TLoan3Imputx2 = '';
  }
});

/////////





 $('.numTLoan3x2').click(function(){

          TLoan3Imputx2 += $(this).attr("value");
          // $('#DenoImput10x2').attr('value', DenoImput10x2);


          $('#TLoan3ImputLabelx2 > input').attr('value', TLoan3Imputx2);

           console.log("current TLoan 1 imput x2 number is :" + TLoan3Imputx2);
           console.log('New TLoan 1 imput x2 is : ' + TLoan3Imputx2);
           

userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 
        
           });




       //backspace button
           $('#backSpaceTLoan3x2').click(function(){

           var getInput = TLoan3Imputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan3Imputx2 = newInput;
            $('#TLoan3ImputLabelx2 > input').attr('value', TLoan3Imputx2);
     
           console.log('New input is : ' + TLoan3Imputx2)
            

userInputx2 = parseInt(TLoan1Imputx2) + parseInt(TLoan2Imputx2) + parseInt(TLoan3Imputx2) + parseInt(TLoan4Imputx2) + parseInt(TLoan5Imputx2);
$('#qtyvalue2x2').attr('value', userInputx2);

 

       });








// //////////////////





// });////End of TLoan Payment/////////////*********************************
















/////////////////////////////////////////////////



$('.closeDepositx2').click(function(){
  console.log('Deposit panel was closed');
    $('.depositx2').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox2').click(function(){
  billDenox2= true;

   if(billDenox2 === true){
  console.log(' Bill Deno is Activated ' + billDenox2);
}
$('.confBack2Yx2').hide();
$('#submit2Yx2, #exit2Yx2').show();


})


$('#noBillDenox2').click(function(){
  billDenox2= false;
  if(billDenox2 === false){
  console.log(' Bill Deno is Activated ' + billDenox2);
}

  $('.confBack2Yx2').hide();
 $('#billsx2, .billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
$('#amountx2, #qtyvalue2x2, .LinearNumPadx2, .numVx2').show();
$('#submit2Yx2, #exit2Yx2').fadeIn();

  
})



$('.ui2x2').click(function(){
  if(serviceValuex2 !== 'withdraw'){

    billDenox2 === false;

    console.log('BillDenox2 was deactivated because Service value is not withdraw');

    $('#billDenox2').removeClass('active');
    $('#noBillDenox2').addClass('active');
    $('#billsx2, .billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();

  }
})







/////////////////////////////////////////////////////////


$('#wdraw1, #wdraw2').click(function(){
serviceValuex2 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 









 $('#QuickPay2X2, #QuickPay3X2').click(function(){
console.log("Service value x2 is = " + serviceValuex2);
$('.sendMoney11x2').fadeIn('slow');

 });



////////////////QuickPay///////////////////////////

$('#QuickPayx2, #QuickPay2X2').click(function(){

 console.log("Service value x2 is = " + serviceValuex2);

serviceValuex2='QuickPay';
tofValuex2 = 'waived';

$('.sendMoney11x2').fadeIn('slow');




    $('#cheTsavx2').hide();
    $('#savTchex2').hide();
    // $('#qtyvalue2x2, #qtyvalueDenox2, #qtyvalueCardx2').hide();
    // $('#qtyvalueQPayx2').show();



  MikeImputx2=0;
  JeffImputx2=0;
  MariaImputx2=0;
  JohnImputx2=0;


  LeahImputx2=0;
  PaulImputx2=0;
  JennyImputx2=0;
  GokuImputx2=0;



         $('#MikeImputx2').attr('value', MikeImputx2);
         $('#JeffImputx2').attr('value', JeffImputx2);
         $('#MariaImputx2').attr('value', MariaImputx2);
         $('#JohnImputx2').attr('value', JohnImputx2);


         $('#LeahImputx2').attr('value', LeahImputx2);
         $('#PaulImputx2').attr('value', PaulImputx2);
         $('#JennyImputx2').attr('value', JennyImputx2);
         $('#GokuImputx2').attr('value', GokuImputx2);

 
userInputx2 = '';
$('#qtyvalue2x2').attr('value', userInputx2);





    console.log("Service value x2 is = " + serviceValuex2);







  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);

});

// $('#closeSendQuickPayx2').click(function(){
// $('.sendMoney11x2').fadeOut('slow');

// });



Friendx2="";

$('.friendsx2').click(function(){
Friendx2 = $(this).attr('value');
console.log("Friend is = " + Friendx2);



})

      $('#happyFriendx2').attr('value', Friendx2);
      $('#quickPayAmountx2').attr('value', userInputx2);






   


  //      $('.retrievex2').click(function(){  
  //        $('.BillDenominationWdrawx2').fadeOut('fast');
  //        $('#qtyvalueDenox2').hide();
  //        userInputx2 ="";
  //        $('#qtyvalue2x2').show();
  //        $('#qtyvalue2x2').attr('value', "");

  //        $('#MikeImputx2').attr('value','');
  //        $('#JeffImputx2').attr('value','');
  //        $('#MariaImputx2').attr('value','');
  //        $('#JohnImputx2').attr('value', '');


  //        $('#LeahImputx2').attr('value','');
  //        $('#PaulImputx2').attr('value','');
  //        $('#JennyImputx2').attr('value','');
  //        $('#GokuImputx2').attr('value', '');


  // MikeImputx2='';
  // JeffImputx2='';
  // MariaImputx2='';
  // JohnImputx2='';


  // LeahImputx2='';
  // PaulImputx2='';
  // JennyImputx2='';
  // GokuImputx2='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx2=""


  $('.friendsx2').click(function(){
    SelectedFriendx2 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx2);





});



$('.NumPadx2').click(function(){
// if (MikeImputx2 === '0' || 0){
//   MikeImputx2 = '';
// }

if (JeffImputx2 === '0' || 0){
  JeffImputx2 = '';
}

if (MariaImputx2 === '0' || 0){
  MariaImputx2 = '';
}

if (JohnImputx2 === '0' || 0){
  JohnImputx2 = '';
}

if (LeahImputx2 === '0' || 0){
  LeahImputx2= '';
}

if (PaulImputx2 === '0' || 0){
  PaulImputx2 = '';
}

if (JennyImputx2 === '0' || 0){
  JennyImputx2 = '';
}

if (GokuImputx2 === '0' || 0){
  GokuImputx2 = '';
}

});



/////////////////////



$('#Mikex2').click(function(){

console.log('Mike x2 was selected');

 MikeImputx2 = 0;
 $('#MikeImputx2').attr('value', MikeImputx2);




   $('#Mikex2 > span, #MikeImputx2').css('color','green');


 $('.NumPadx2').hide();
   $('.numMikex2').show();




 userInputx2 =  parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

});



///////////

$('.numMikex2').click(function(){

  if (MikeImputx2 === 0 ){
    MikeImputx2 = '';
  }
});

// ///////




 $('.numMikex2').click(function(){

          MikeImputx2 += $(this).attr("value");
          // $('#MikeImputx2').attr('value', MikeImputx2);


          $('#MikeImputx2').attr('value', MikeImputx2);

           console.log("current Friend 1 imput x2 number is :" + MikeImputx2);
           console.log('New Friend1 imput x2 is : ' + MikeImputx2);
           
 userInputx2 =  parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceMikex2').click(function(){

           var getInput = MikeImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx2 = newInput;
            $('#MikeImputx2').attr('value', MikeImputx2);
     
           console.log('New input is : ' + MikeImputx2)
            

 userInputx2 =  parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);




       });









//////////////////




/////////////////////



$('#Jeffx2').click(function(){

console.log('Jeff x2 was selected');


$('.FriendMemox2').hide();
$('.JeffMemox2').show().click(function(){
  $('.WriteMemox2, .JeffTTMemox2').fadeIn();
});


 JeffImputx2 = 0;
 $('#JeffImputx2').attr('value', JeffImputx2);



  
  


   $('#Jeffx2 > span, #JeffImputx2').css('color','green');


 $('.NumPadx2').hide();
   $('.numJeffx2').show();


 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

});



///////////

$('.numJeffx2').click(function(){

  if (JeffImputx2 === 0 ){
    JeffImputx2 = '';
  }
});

// ///////






 $('.numJeffx2').click(function(){

          JeffImputx2 += $(this).attr("value");
          // $('#JeffImputx2').attr('value', JeffImputx2);


          $('#JeffImputx2').attr('value', JeffImputx2);

           console.log("current Friend 1 imput x2 number is :" + JeffImputx2);
           console.log('New Friend1 imput x2 is : ' + JeffImputx2);
           
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceJeffx2').click(function(){

           var getInput = JeffImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx2 = newInput;
            $('#JeffImputx2').attr('value', JeffImputx2);
     
           console.log('New input is : ' + JeffImputx2)
            
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


       });









//////////////////





/////////////////////



$('#Mariax2').click(function(){

console.log('Maria x2 was selected');



$('.FriendMemox2').hide();
$('.MariaMemox2').show().click(function(){
  $('.WriteMemox2, .MariaTTMemox2').fadeIn();
});


MariaImputx2 = 0;
 $('#MariaImputx2').attr('value', MariaImputx2);
 


  
  


   $('#Mariax2 > span, #MariaImputx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numMariax2').show();



 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);
});





///////////

$('.numMariax2').click(function(){

  if (MariaImputx2 === 0 ){
    MariaImputx2 = '';
  }
});

// ///////






 $('.numMariax2').click(function(){

          MariaImputx2 += $(this).attr("value");
          // $('#MariaImputx2').attr('value', MariaImputx2);


          $('#MariaImputx2').attr('value', MariaImputx2);

           console.log("current Friend 1 imput x2 number is :" + MariaImputx2);
           console.log('New Friend1 imput x2 is : ' + MariaImputx2);
           

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceMariax2').click(function(){

           var getInput = MariaImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx2 = newInput;
            $('#MariaImputx2').attr('value', MariaImputx2);
     
           console.log('New input is : ' + MariaImputx2)
            
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


       });









//////////////////




/////////////////////



$('#Johnx2').click(function(){


  $('.FriendMemox2').hide();
$('.JohnMemox2').show().click(function(){
  $('.WriteMemox2, .JohnTTMemox2').fadeIn();
});


console.log('John x2 was selected');

 JohnImputx2 = 0;
 $('#JohnImputx2').attr('value', JohnImputx2);



  
  


   $('#Johnx2 > span, #JohnImputx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numJohnx2').show();


 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

});



///////////

$('.numJohnx2').click(function(){

  if (JohnImputx2 === 0 ){
    JohnImputx2 = '';
  }
});

// ///////









 $('.numJohnx2').click(function(){

          JohnImputx2 += $(this).attr("value");
          // $('#JohnImputx2').attr('value', JohnImputx2);


          $('#JohnImputx2').attr('value', JohnImputx2);

           console.log("current Friend 1 imput x2 number is :" + JohnImputx2);
           console.log('New Friend1 imput x2 is : ' + JohnImputx2);
           

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceJohnx2').click(function(){

           var getInput = JohnImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx2 = newInput;
            $('#JohnImputx2').attr('value', JohnImputx2);
     
           console.log('New input is : ' + JohnImputx2)
            

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


       });









//////////////////






/////////////////////



$('#Leahx2').click(function(){


  $('.FriendMemox2').hide();
$('.LeahMemox2').show().click(function(){
  $('.WriteMemox2, .LeahTTMemox2').fadeIn();
});


console.log('Leah x2 was selected');

LeahImputx2 = 0;
 $('#LeahImputx2').attr('value', LeahImputx2);
 


  
  


   $('#Leahx2 > span, #LeahImputx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numLeahx2').show();



 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

});




///////////

$('.numLeahx2').click(function(){

  if (LeahImputx2 === 0 ){
    LeahImputx2 = '';
  }
});

// ///////







 $('.numLeahx2').click(function(){

          LeahImputx2 += $(this).attr("value");
          // $('#LeahImputx2').attr('value', LeahImputx2);


          $('#LeahImputx2').attr('value', LeahImputx2);

           console.log("current Friend 1 imput x2 number is :" + LeahImputx2);
           console.log('New Friend1 imput x2 is : ' + LeahImputx2);
           
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpaceLeahx2').click(function(){

           var getInput = LeahImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx2 = newInput;
            $('#LeahImputx2').attr('value', LeahImputx2);
     
           console.log('New input is : ' + LeahImputx2)
            

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

       });









//////////////////





/////////////////////



$('#Paulx2').click(function(){


  $('.FriendMemox2').hide();
$('.PaulMemox2').show().click(function(){
  $('.WriteMemox2, .PaulTTMemox2').fadeIn();
});


console.log('Paul x2 was selected');

PaulImputx2 = 0;
 $('#PaulImputx2').attr('value', PaulImputx2);
 


  
  


   $('#Paulx2 > span, #PaulImputx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numPaulx2').show();



 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);
});



///////////

$('.numPaulx2').click(function(){

  if (PaulImputx2 === 0 ){
    PaulImputx2 = '';
  }
});

// ///////






 $('.numPaulx2').click(function(){

          PaulImputx2 += $(this).attr("value");
          // $('#PaulImputx2').attr('value', PaulImputx2);


          $('#PaulImputx2').attr('value', PaulImputx2);

           console.log("current Friend 1 imput x2 number is :" + PaulImputx2);
           console.log('New Friend1 imput x2 is : ' + PaulImputx2);
           

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpacePaulx2').click(function(){

           var getInput = PaulImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx2 = newInput;
            $('#PaulImputx2').attr('value', PaulImputx2);
     
           console.log('New input is : ' + PaulImputx2)
            

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

       });









//////////////////





/////////////////////



$('#Jennyx2').click(function(){



  $('.FriendMemox2').hide();
$('.JennyMemox2').show().click(function(){
  $('.WriteMemox2, .JennyTTMemox2').fadeIn();
});


console.log('Jenny x2 was selected');

JennyImputx2 = 0;
 $('#JennyImputx2').attr('value', JennyImputx2);
 


  
  


   $('#Jennyx2 > span, #JennyImputx2').css('color','green');

   $('.NumPadx2').hide();
   $('.numJennyx2').show();



 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);
});




///////////

$('.numJennyx2').click(function(){

  if (JennyImputx2 === 0 ){
    JennyImputx2 = '';
  }
});

// ///////






 $('.numJennyx2').click(function(){

          JennyImputx2 += $(this).attr("value");
          // $('#JennyImputx2').attr('value', JennyImputx2);


          $('#JennyImputx2').attr('value', JennyImputx2);

           console.log("current Friend 1 imput x2 number is :" + JennyImputx2);
           console.log('New Friend1 imput x2 is : ' + JennyImputx2);
           

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

        
           });




       //backspace button
           $('#backSpaceJennyx2').click(function(){

           var getInput = JennyImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx2 = newInput;
            $('#JennyImputx2').attr('value', JennyImputx2);
     
           console.log('New input is : ' + JennyImputx2)
            
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


       });









//////////////////





/////////////////////



$('#Gokux2').click(function(){


  $('.FriendMemox2').hide();
$('.GokuMemox2').show().click(function(){
  $('.WriteMemox2, .GokuTTMemox2').fadeIn();
});


console.log('Gokux2  was selected');

GokuImputx2 = 0;
 $('#GokuImputx2').attr('value', GokuImputx2);
 


  
  


   $('#Gokux2 > span, #GokuImputx2').css('color','green');


   $('.NumPadx2').hide();
   $('.numGokux2').show();



 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);

});




///////////

$('.numGokux2').click(function(){

  if (GokuImputx2 === 0 ){
    GokuImputx2 = '';
  }
});

// ///////



 $('.numGokux2').click(function(){

          GokuImputx2 += $(this).attr("value");
          // $('#Gokux2Imput').attr('value', Gokux2Imput);


          $('#GokuImputx2').attr('value', GokuImputx2);

           console.log("current Friend 1 imput  number is :" + GokuImputx2);
           console.log('New Friend1 imput  is : ' + GokuImputx2);
           
 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


        
           });




       //backspace button
           $('#backSpaceGokux2').click(function(){

           var getInput = GokuImputx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx2 = newInput;
            $('#GokuImputx2').attr('value', GokuImputx2);
     
           console.log('New input is : ' + GokuImputx2)
            

 userInputx2 = parseInt(JeffImputx2) + parseInt(MariaImputx2) + parseInt(JohnImputx2) + parseInt(LeahImputx2) + parseInt(PaulImputx2) + parseInt(JennyImputx2) + parseInt(GokuImputx2);
 $('#qtyvalue2x2').attr('value', userInputx2);


       });






//////////////////




$('#closeSer2Panelsxxxxx2, .SubmitMemox2, .Confirm2Yx2, .OperationEndedPanelx2').click(function(){

$('.WriteMemox2, .TMemox2, .FriendMemox2').fadeOut();

});




////////////////Wire Transfer x2///////////////////////////
///////////////////////////////////////////////////////////




$('#senx2').click(function(){

 console.log("Service value x2 is = " + serviceValuex2);

serviceValuex2='WireTransfer';
tofValuex2 = 'waived';

$('.sendMoney2x2').fadeIn('slow');


    $('#cheTsavx2').hide();
    $('#savTchex2').hide();


  WrtNamex2='';
  WrtAccountNUmberx2='';
  WrtRoutingNUmberx2='';
  WrtTelephonex2='';
  WrtZipCodex2='';







         $('.WrtNameInputx2').attr('value', WrtNamex2);
         $('.WrtAccountInputx2').attr('value', WrtAccountNUmberx2);
         $('.WrtRoutingInputx2').attr('value', WrtRoutingNUmberx2);
         $('.WrtTelephoneInputx2').attr('value', WrtTelephonex2);
         $('.WrtZipCodeInputx2').attr('value', WrtZipCodex2);


 
userInputx2 = '';
$('#qtyvalue2x2').attr('value', userInputx2);



    console.log("Service value x2 is = " + serviceValuex2);



  console.log("Service value is = " + serviceValuex2);
  console.log("tofvalue is = " + tofValuex2);

});






















// /////////////////////////////////
WrtLabelx2="";

$('.WrtLabelx2').click(function(){
WrtLabelx2 = $(this).attr('value');
console.log("The selected WrtLabelx2 is = " + WrtLabelx2);

})








/////////////////////



$('.NameWrLabelx2').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabelx2').click(function(){




console.log('Wrt Name Label x2 was selected');

 WrtAccountNUmberx2 = "";
 $('.WrtAccountInputx2').attr('value', WrtAccountNUmberx2);


 $('.NumPadx2').hide();
 $('.numCCx2').show();

});




 $('.numCCx2').click(function(){

         WrtAccountNUmberx2+= $(this).attr("value");
          
          $('.WrtAccountInputx2').attr('value', WrtAccountNUmberx2);

           });



       //backspace button
           $('#backSpaceCCx2').click(function(){

           var getInput = WrtAccountNUmberx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx2 = newInput;
            $('.WrtAccountInputx2').attr('value', WrtAccountNUmberx2);
     
           console.log('New input is : ' + WrtAccountNUmberx2);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabelx2').click(function(){




console.log('Wrt Name Label x2 was selected');

 WrtRoutingNUmberx2 = "";
 $('.WrtRoutingInputx2').attr('value', WrtRoutingNUmberx2);


 $('.NumPadx2').hide();
 $('.numRx2').show();

});




 $('.numRx2').click(function(){

         WrtRoutingNUmberx2+= $(this).attr("value");
          
          $('.WrtRoutingInputx2').attr('value', WrtRoutingNUmberx2);

           });



       //backspace button
           $('#backSpaceRx2').click(function(){

           var getInput = WrtRoutingNUmberx2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx2 = newInput;
            $('.WrtRoutingInputx2').attr('value', WrtRoutingNUmberx2);
     
           console.log('New input is : ' + WrtRoutingNUmberx2);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabelx2').click(function(){




console.log('Wrt Name Label x2 was selected');

 WrtTelephonex2 = "";
 $('.WrtTelephoneInputx2').attr('value', WrtTelephonex2);


 $('.NumPadx2').hide();
 $('.numSwTelx2').show();

});




 $('.numSwTelx2').click(function(){

          WrtTelephonex2+= $(this).attr("value");
          
          $('.WrtTelephoneInputx2').attr('value', WrtTelephonex2);

           });



       //backspace button
           $('#backSpaceSwTelx2').click(function(){

           var getInput = WrtTelephonex2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex2 = newInput;
           $('.WrtTelephoneInputx2').attr('value', WrtTelephonex2);
     
           console.log('New input is : ' + WrtTelephonex2);
            


});




//////////////////





/////////////////////



$('.ZipWrLabelx2').click(function(){




console.log('Wrt Name Label x2 was selected');

 WrtZipCodex2 = "";
 $('.WrtZipCodeInputx2').attr('value', WrtZipCodex2);


 $('.NumPadx2').hide();
 $('.numSwZipx2').show();
 
});




 $('.numSwZipx2').click(function(){

         WrtZipCodex2+= $(this).attr("value");
          
          $('.WrtZipCodeInputx2').attr('value', WrtZipCodex2);

           });



       //backspace button
           $('#backSpaceSwZipx2').click(function(){

           var getInput = WrtZipCodex2;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex2 = newInput;
            $('.WrtZipCodeInputx2').attr('value', WrtZipCodex2);
     
           console.log('New input is : ' + WrtZipCodex2);
            


});






////////////////end of Wire Transfer x2///////////////////////////
///////////////////////////////////////////////////////////








///////////////////////////////////////////////////






$('#submit2Yx2').click(function(){


  console.log('Submit2Y button was clicked');
  console.log('tof is' + tofValuex2);
  console.log('service value is '+ serviceValuex2);

     


         if((serviceValuex2 === "withdraw") && (userInputx2 % 10 !== 0) && (userInputx2 % 20 !== 0) && (userInputx2 % 100 !== 0) && (userInputx2 % 50 !== 0)){
      $('.retrievex2').hide();
      $('.wrongAmountx2').fadeIn('fast').click(function(){
        $(this).hide();
            $('.confBack2Yx2').hide();
            $('#submit2Yx2, #exit2Yx2').show();
      });






    if((serviceValuex2 === "withdraw") && (userInputx2 > 1500 )){
      $('.retrievex2').hide();
      $('.wrongAmountx2').fadeIn('fast').click(function(){
        $(this).hide();
            $('.confBack2Yx2').hide();
            $('#submit2Yx2, #exit2Yx2').show();
      });
    }
    }






if(serviceValuex2 !== '' && userInputx2 !== ''){

  if(billDenox2 === false){

    console.log('Submit2Y button was clicked 2nd');

  $('#submit2Yx2, #exit2Yx2').hide();
  $('.confBack2Yx2').show();
  $('.confirm2Yx2').click(function(){

    userInputx2= '';
 $('#qtyvalue2x2').attr('value', userInputx2);


  $('.confBack2Yx2').hide();
  $('#submit2Yx2, #exit2Yx2').show();

   

  });



}






//   $('.back2Yx2').click(function(){
//   $('.confBack2Yx2').hide(); 
//   $('#billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
//   $('.numVx2, #amountx2, #qtyvalue2x2').show();
  

//   $('#submit2Yx2, #exit2Yx2').show();

// });





//////// /////Back2Y Button /////////////////



  $('.back2Yx2').click(function(){

  $('.confBack2Yx2').hide();
  $('#submit2Yx2, #exit2Yx2').show();
  $('.LinearNumPadx2').show();


});



////////////////////////////////////////////










}























if(billDenox2 === true){


    $('.confBack2Yx2').show('fast');
    $('#submit2Yx2, #exit2Yx2').hide();

    $('.confirm2Yx2').click(function(){
    $('.confBack2Yx2').hide();
    $('#submit2Yx2, #exit2Yx2').show();

    userInput= '';
 $('#qtyvalue2').attr('value', userInput);



   

  });

  $('.back2Yx2').click(function(){
  $('.confBack2Yx2').hide(); 
  $('#billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
  $('.numVx2, #amountx2, #qtyvalue2x2').show();
  

  $('#submit2Yx2, #exit2Yx2').show();

});


$('#depos, #depos2').click(function(){
  serviceValuex2 = "dcash";
  tofValuex2 = "waived";
  console.log('current service value is ' + serviceValuex2)
  $('.depositx2').fadeIn();

  });






/////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////


if(serviceValuex2 ==='withdraw' && tofValuex2 !== '' && userInputx2 % 10 === 0){
    $('.confBack2Yx2').show('fast');
    $('#submit2Yx2, #exit2Yx2').hide();

    $('.LinearNumPadx2, #amountx2, #qtyvalue2x2, .numVx2').hide();  
    $(' .billsx2, #billsx2, #qtyvalue23x2').show('fast');
    $('#qtyvalue23x2').attr("value", userInputx2);


    $('#cash2x2, #checks2x2, #sendFromCheckingsx2, #transferx2, #transx2, #trans2x2, #payTicketx2').click(function(){
    $('.LinearNumPadx2, #amountx2, #qtyvalue2x2, .numVx2').show();  
    $('.billsx2, #billsx2, #qtyvalue23x2, #b10x2, #b20x2, #50x2, #b100x2').hide();
    
    
  console.log('serviceValue is: ' + serviceValuex2);
  console.log('tof value is: ' + tofValuex2);



});


}


if(serviceValuex2 ==='withdraw' && tofValuex2 !== '' && userInputx2 % 10 === 0){
      $('.billsx2').fadeIn();
      console.log("Multiples are working perfectly");


    }

    if (userInputx2 % 10 === 0 && userInputx2 <= 200 && userInputx2 !== 10){$('#b10x2').fadeIn('fast')}
    if (userInputx2 % 10 === 0 && userInputx2 > 200){$('#b10x2').hide()}
    if (userInputx2 > 20 && userInputx2 % 10 === 0 && userInputx2 <= 1500){$('#b20x2').fadeIn('fast')}
    if (userInputx2 > 50 && userInputx2 % 10 === 0 && userInputx2 <= 1500){$('#b20x2, #b50x2').fadeIn('fast')}
    if (userInputx2 > 100 && userInputx2 % 10 === 0 && userInputx2 <= 1500){$('#b20x2, #b50x2, #b100x2').fadeIn('fast')}

    
    if (userInputx2 % 20 === 0 && userInputx2 <= 1500){$('#b20x2').fadeIn('fast')}
    if (userInputx2 > 50 && userInputx2 % 20 === 0 && userInputx2 <= 1500){$('#b50x2').fadeIn('fast')}
    if (userInputx2 > 100 && userInputx2 % 20 === 0 && userInputx2 <= 1500){$('#b50x2, #b100x2').fadeIn('fast')}


    if (userInputx2 % 50 === 0){$('#b50x2').fadeIn('fast')}
    if (userInputx2 > 100 && userInputx2 % 50 === 0 && userInputx2 <= 1500 ){$('#b100x2').fadeIn('fast')}
    if (userInputx2 % 100 === 0){$('#b20x2, #b50x2, #b100x2').fadeIn('fast')}




 $('.confirm2x2').click(function(){
     $('.confBack2Y').hide();
     $('#billsx2, .billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
     $('.LinearNumPadx2, #amountx2, #qtyvalue2x2, .numVx2').show();
     
    $('.sendMoney2x2').hide();
    $('#submit2Yx2, #exit2Yx2').show();

   
  });


  $('.back2x2').click(function(){

    $('.billsx2, #billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
    $('.LinearNumPadx2, #amountx2, #qtyvalue2x2, .numVx2').show();  
    $('.confBack2Yx2').hide();
    $('.sendMoney2x2').hide();
    $('#submit2Yx2, #exit2Yx2').show(); 


  });




}







 });






$('.billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();




////////////////////Pay panel show/hide/////////////////////////////////

$('#submit2Yx2').click(function(){

  if(serviceValuex2 === 'PayBills'){
    $('.pyx2').fadeIn();
    $('.numVx2, .NumPadx2').hide();

  }

});



$('#submit2Yx2').click(function(){

  if(serviceValuex2 === 'QuickPay'){
    $('.pyx2').fadeIn();
    $('.numVx2, .NumPadx2').hide();

  }

});




$('#submit2Yx2').click(function(){

  if(serviceValuex2 === 'CreditCards'){
    $('.pyx2').fadeIn();
    $('.numVx2, .NumPadx2').hide();

  }

});



$('#submit2Y').click(function(){

  if(serviceValue === 'CreditCards'){
    $('.pyx1').fadeIn();
    $('.numV, .NumPad').hide();

  }

});




$('.back2Yx2').click(function(){

  if(serviceValuex2 === 'PayBills' || 'QuickPay' || 'CreditCards'){
       $('.pyx2').fadeOut();
       $('.pyx2 > label').removeClass('active');
       $('.numVx2').show();
       serviceValuex2 === 'PayBills';

}


});

/////////////////////////////////////////////////////














               // contionals to display cooresponding message panel
   $('.confirm2Yx2').click(function(){  

    $('.ServicePanelx2, #closeSer2Panelsxxxxx2, .Schedulex2').hide();
        $("#inCheckSentx2, #inSavSentx2, #inCheckx2, #inSavx2, #loanAmountx2, #cardPaymentAmountx2, #quickPayAmountx2").attr("value", userInputx2);
    $("#happyCardx2").attr("value", SelectedCardx2);



userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);

     $('.pyx2').hide();
     $('.PayButtonsx2 > label').removeClass('active');


$('.numVx2').fadeIn();



     if((serviceValuex2 === "withdraw") && (userInputx2 % 10 !== 0)){
      $('.wrongAmountx2').fadeIn('fast').click(function(){
        $(this).hide();
      });
        console.log("Multiples are working perfectly");
    }


    if((serviceValuex2 === 'withdraw') && (userInputx2 % 10 !== 0) && (userInputx2 % 20 !== 0) && (userInputx2 % 100 !== 0) && (userInputx2 % 50 !== 0)){
      $('.wrongAmountx2').fadeIn('fast').click(function(){
        $(this).hide();
      });

    }



   if(tofValuex2 !== '' && serviceValuex2 !== '' && userInputx2 !== ''){

 
   if(serviceValuex2 === $('#cash2x2').attr("value") ){
      $('.depositCashx2').fadeIn('fast');


    


    // }else if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 === 0)){
    //    $('.retrieve').fadeIn('fast').click(function(){
    //       $('#bills, #b10, #b20, #b50, #b100').hide();
    //       $('.numV, #amount, #qtyvalue2').show();

    //    })



    }else if((serviceValuex2 === "withdraw") && (userInputx2 % 10 === 0)){
       $('.retrievex2').fadeIn('fast').click(function(){
          $('#billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
          $('.LinearNumPadx2, .numVx2, #amountx2, #qtyvalue2x2').show();
          console.log('line 915 reached withdraw');

       })

  ////////////////////Loan

        }else if(serviceValuex2 === $('#Loanx2').attr('value') && tofValuex2=="waived" && userInputx2 <= 50000){

      $('.LoanGrantedx2').fadeIn('slow');   
      $('.Loanx2').fadeOut(3000);
      

      console.log('Loaaaannnnnnnnnnnnnnnnnnnn');




      ///////////////////




// /////// BillDeno//////////////

}else if((serviceValuex2 === 'BillDex2') && (userInputx2 !== '')){

console.log("Service value is = " + serviceValuex2);
           
         $('.retrievex2').fadeIn();
         $('.confBack2Yx2').hide();

           $('#submit2Yx2, #exit2Yx2').show();

            $('.NumPadx2').hide();
           $('.numVx2').show();

        
           
           $('.BillDenominationWdrawx2, #closeSer2Panelsxxxxx2').hide();




//////////////////Credit cards

        }else if(serviceValuex2 === $('#CreditCx2').attr('value') && tofValuex2=="waived" && userInputx2 !== ""){
  
     console.log("Service value is = " + serviceValuex2);
     console.log("tofvalue is = " + tofValuex2);



      $('.CardPaymentx2').fadeIn('slow');    
      $('.CreditCardsx2, #closeSer2Panelsxxxxx2').fadeOut(1000);




  $('.NumPadx2').hide();
  $('.numVx2').show();




      $('.CardPaymentx2').click(function(){

      $(this).fadeOut(1000);
      // $('.CreditCardsx2').fadein(slow);

      });



  ////////////////////////////
  //////////////////Quick Payx2////////////////////////


 }else if(serviceValuex2 === 'QuickPay' && tofValuex2=="waived" && userInputx2 !== ""){
      

$('#happyFriendx2').attr('value', Friendx2);

console.log("confirm2Y Friend Is = " + Friendx2);
$('.sendMoney11x2, #closeSer2Panelsxxxxx2').fadeOut('slow');


  $('.NumPadx2').hide();
  $('.numVx2').show();



$('.QuickSentx2').fadeIn('slow').click(function(){
  $(this).fadeOut("slow");
  // $('.sendMoney11x2').fadeIn('slow');
});



  ////////////////////////////////////////////

  ///////////////////Merchant/////////////////////////

 }else if(serviceValuex2 === 'Merchant' && tofValuex2=="waived" && userInputx2 !== ""){
      

$('.Merchantx2, #closeSer').hide();
$('.MerchCardChargedx2').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////



    ///////////////////Bill Payment/////////////////////////

 }else if(serviceValuex2 === 'PayBills' && tofValuex2=="waived" && userInputx2 !== ""){
      

$('.Merchantx2, #closeSer').hide();
$('.BillPaySentx2').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////

    
    }else if(serviceValuex2 === $('#checks2x2').attr("value")){
      $('.depositCheckx2').fadeIn('fast');




    }else if(serviceValuex2 === 'checkcashSent' && tofValuex2=="send"){
      $('.checkCashSentx2').fadeIn('fast');
      console.log('service value is: ' + serviceValuex2);
      console.log('tof value is: ' + tofValuex2);


    }else if(serviceValuex2 === "checkcashSent"){
      $('.checkCashSentx2').fadeIn('fast');
      console.log('service value is: ' + serviceValuex2);
      console.log('tof value is: ' + tofValuex2);



    }else if(serviceValuex2 === $('#payTicketx2').attr("value") && tofValuex2=="send"){
      $('.checkCashSent').fadeIn('fast');
      console.log('service value is: ' + serviceValuex2);
      console.log('tof value is: ' + tofValuex2);



    }else if(serviceValuex2 === $('#transferx2').attr("value") && tofValuex2=="saving"){
      $('.tranToCheckingx2').fadeIn('fast');




    }else if(serviceValuex2 === $('#transferx2').attr("value") && tofValuex2=="checking"){
      $('.tranToSavingsx2').fadeIn('fast');


      ////////////////////

        }else if(serviceValuex2 === $('#trans').attr("value") && tofValuex2=="waived"){
      $('.tranToSavingsx2').fadeIn('fast');



       }else if(serviceValuex2 === $('#trans2').attr("value") && tofValuex2=="waived"){
      $('.tranToCheckingx2').fadeIn('fast');


      ///////////////////

    }else{
      $('.selectt').fadeIn('fast');
      console.log("Please select a service and an account for your transaction");
      console.log('service value is: ' + serviceValuex2);
      console.log('tof value is: ' + tofValuex2);
    }
    
  }

    });
///////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//////////////////////////////

//    $('#submit2Y').click(function(){  



//         if((serviceValue === "withdraw2") && (userInput > 1500 )){
//       $('.retrieve').hide();
//       $('.wrongAmount').fadeIn('fast').click(function(){
//         $(this).hide();
//       });
//     }

     
//          if((serviceValue === "withdraw") && (userInput % 10 !== 0) && (userInput % 20 !== 0) && (userInput % 100 !== 0) && (userInput % 50 !== 0)){
//       $('.retrieve').hide();
//       $('.wrongAmount').fadeIn('fast').click(function(){
//         $(this).hide();
//       });

//     }







// });


///////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//////////////////////////////







//for deposits display the prompting pop-up as soon as the customer selects the saving or checking account

   $('#cash2x2, #withdraw2x2, #checks2x2').click(function(){
      $('#checking2x2, #saving2x2').removeClass('active');

      });



   $('#checking2x2, #saving2x2').click(function(){

     if (serviceValuex2 === $('#cash2x2').attr("value")){
      $('.depositCashx2').fadeIn('fast');

  


     }else if

     (serviceValuex2 === $('#checks2x2').attr("value")){
      $('.depositCheckx2').fadeIn('fast');

     }

   });


     



//Tap to Close
//   $('.depositCheckx2, .depositCashx2, .retrievex2, .selectx2, .savCashSentx2, .checkCashSentx2, .tranToSavingsx2, .tranToCheckingx2').click(function(){
//   $(this).fadeOut('fast');
//   userInputx2= "";
//   $("#qtyvalue2x2").attr('value', userInputx2);

// });

 

 $('.CardPaymentx2, .checkCashSentx2, .tranToSavingsx2, .tranToCheckingx2, .retrievex2, .GoodByex2, .LoanGrantedx2, .depositCashx2, .QuickSentx2').click(function(){
  $(this).fadeOut('fast');


});





//Tap to Close
  $('.quickSentx2, .wrongAmountx2,.CardPaymentx2, .LoanGrantedx2').click(function(){
  $(this).fadeOut('fast');


})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox2').removeClass('active');
//        $('#receiptYes, #receiptNox2').click(function(){

//         $('#cash2, #withdraw2, #checks2, #checking2, #saving2, #billDeno ,#noBillDeno').removeClass('active');

       
//        $('.confBack2Y').hide();
//   $('#bills, #b10, #b20, #b50, #b100').hide();
//   $('.numV, #amount, #qtyvalue2').show();
//   $('#submit2Y, #exit2Y').show();

//        $('.goodbye').hide();
//           serviceValue='';
//           tofValue='waived';
//           userInput='';
//        $('#qtyvalue2').attr('value', userInput);
       
//         $('#cheTsav').hide();
//         $('#savTche').hide();
//         $('#toSaving').hide();
//         $('#toChecking').hide();
//         $('.ui2').hide().fadeIn('10000');



//       });


    
//   /* });*/

//     $('.back24, .confirm24').click(function(){
//       $('.confBack24').hide();





// });   

// }); 






// $('.TapB').click(function(){

//   $('.goodbye').fadeOut('fast');
// });



//////////////////////////////////////////////////////////////////////////////////////


   /*$('.confirm24').click(function(){
      $('.back24, .confirm24').hide();     
      $('.depositCash').hide();
      $('.retrieve').hide();
      $('.depositCheck').hide();
      $('.savCashSent').hide();
      $('.checkCashSent').hide();
      $('.select').hide();
      $('.sendMoney2').hide();
      $('.goodbye').fadeIn('fast').click(function(){
        $(this).hide();
      
*/

     
 




  /*

  $('.confirm2').fadeIn('fast').click(function(){
    routingValue ='';
    accountValue = '';
    userInput = '';
   $('#routing').attr('value', '');
    $('#account').attr('value', '');
    $('#qtyvalue2').attr('value', '');
    $('#checking2').attr('class','btn btn-default btn-lg');
    $('#saving2').attr('class','btn btn-default btn-lg');
    $('#cash2').attr('class','btn btn-default btn-lg');
    $('#withdraw2').attr('class','btn btn-default btn-lg');
    $('#checks2').attr('class','btn btn-default btn-lg');


    $(this).hide();
    $('.sendMoney2').hide();
    $('.back2').hide();
  });

   $('.back2').fadeIn('fast').click(function(){
    $(this).hide();
    $('.confirm2').hide();
  });
  
  






//////////////////////////////////////////////////////////////////////






});
*/







   /*
    $('#routing').attr('value', '');
    $('#account').attr('value', '');
    $('#qtyvalue2').attr('value', '');
    $('#checking2').attr('class','btn btn-default btn-lg');
    $('#saving2').attr('class','btn btn-default btn-lg');
    $('#cash2').attr('class','btn btn-default btn-lg');
    $('#withdraw2').attr('class','btn btn-default btn-lg');
    $('#checks2').attr('class','btn btn-default btn-lg');
    $('#routing').attr('value', '');
    $('#account').attr('value', '');
    $('#qtyvalue2').attr('value', '');

    routingValue ='';
    accountValue = '';
    userInput = '';
    serviceValue= '';

    */





//^


$('.checkinginfo2x2').click(function(){
  $(this).fadeOut('fast');
});


$('#checking22').dblclick(function(){
$('.checkinginfo2x2').fadeIn('fast');

});






$('.savinginfo2x2').click(function(){
  $(this).fadeOut('fast');
});


$('#saving22').dblclick(function(){
$('.savinginfo2x2').fadeIn('fast');

});


// $('#closeSendx2').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x2').hide();
//   $('.numCCx2').hide();
//   $('.numRx2').hide();
//   $('.numVx2').show();

// })

// $('#closeSend2x2').click(function(){
//   $('.sendMoney3x2').hide();
// })




// $('#depos, #depos2, #wdraw1, #wdraw2, #sendx, #sendx2').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });




$('#trans').click(function(){
  serviceValuex2 = "transfer1";
  tofValuex2 = "waived";
  console.log('servicevalue is : '+ serviceValuex2);
  $('#savTche2x2').hide();
  $('#cheTsav2x2').fadeIn();



});


$('#trans2').click(function(){
  serviceValuex2 = "transfer2";
  tofValuex2 = "waived";
  console.log('servicevalue is : '+ serviceValuex2);
  $('#cheTsav2x2').hide();
  $('#savTche2x2').fadeIn();

});








// $('#wdraw1, #wdraw2').click(function(){
//   serviceValue = "withdraw";
//   console.log('current service value is ' + serviceValue);

//    $('.confirm2Y').click(function(){  

//     if(userInput % 10 === 0){
//       $('.retrieve').fadeIn();

//     }


//     if(userInput > 1500 ){
//       $('.retrieve').hide();
//       $('.wrongAmount').fadeIn('fast').click(function(){
//         $(this).hide();
//       });
//     }

//     if((userInput % 10 !== 0) && (userInput % 20 !== 0) && (userInput % 100 !== 0) && (userInput % 50 !== 0)){
//       $('.retrieve').hide();
//       $('.wrongAmount').fadeIn('fast').click(function(){
//         $(this).hide();
//       });

//     }

// })

  

// });



$('#depos, #depos2').click(function(){

  serviceValuex2 = "dcash";
  console.log('current service value is ' + serviceValuex2)
  $('.depositx2').fadeIn();

   $('#cheTsav2x2, #savTche2x2').fadeOut();

});






// });


$('#trans, #trans2, #wdraw1, #wdraw2').click(function(){
   $('#trans, #trans2, #wdraw1, #wdraw2').removeClass('hili');
  $(this).addClass('hili');
 
});


$('#depos, #depos2, #sendx, #sendx2').click(function(){
   $('#trans, #trans2, #wdraw1, #wdraw2').removeClass('hili');

});




$('#depos, #depos2, #trans, #sendx, #sendFromCheckingsx2, #sendx2, #trans2, #cash2, #withdraw2, #checks2, #checking2, #saving2, #transfer, #payticket, #Live').click(function(){
  $('#billsx2, #b10x2, #b20x2, #b50x2, #b100x2').hide();
  $('.numVx2, #amountx2, #qtyvalue2x2').show();
  $('.confBack2Yx2').hide();
  $('#submit2Yx2, #exit2Yx2').show();

  // if(serviceValuex2 !== "withdraw"){

  //  // $('.Confirm2Yx2').Show();
  // }



});

////////////////////////////////////////////

 $('.lan2x2, #qty2x2, .fin2x2, #depos, #wdraw1, #checking22, #trans, #wdraw2, #trans2, #send, #trans2, #sendx2').click(function(){
      $('.serDropx2').hide();
  })


$('#ServiceMenu').click(function(){

  console.log('Service menu was clicked');

  $('.serDropx2').fadeIn('fast').click(function(){
    console.log('Serdrop is being displayed');
    $(this).hide();

   $('.lan2x2, .qty2x2, .fin2x2').click(function(){

$('.serDropx2').fadeOut();

});


  })
});




////////////////////////////////////////////
//  $('.closeDepositx2').click(function(){
//     $('.depositx2').fadeOut();
//     console.log('Close deposit was clicked');
// });


///////////////////////////////////Submit2Yx2/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

$('#english2x2').click(function(){

  userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);

  $('#cash2x2').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
  $('#withdraw2x2').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
  $('#checks2x2').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>')
  $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


    ///////////////

  $('#checking22').html('CHECKING<br><span>Balance: -$2,200.00</span>');
  $('#saving22').html('SAVINGS <br><span>Balance: $1,200.00</span>');


  $('#depos, #depos2').text('Deposit');
  $('#wdraw1, #wdraw2').text('Withdraw');
  $('#trans, #trans2').text('Transfer');
  $('#sendx, #sendx2').text('Send Money');



  //////////////
  
  
 
  $('#amountx2').text('$');
  $('#qtyvalue2x2').attr('value', userInputx2);


    $('#submit2x2').html('SUBMIT');

    $('#exit2x2').html('EXIT');


    $('#submit2Yx2').html('SUBMIT');

    $('#exit2Yx2').html('EXIT');

  $('.confirm2x2').html('<h2><b>Confirm</b></h2>');
  $('.back2x2').html('<h2><b>Back</b></h2>');

$('.confirm2Yx2').html('<h2><b>Confirm</b></h2>');
  $('.back2Yx2').html('<h2><b>Back</b></h2>');




  $('#casdex2').html('<b> Please Insert your Cash Deposit</b>');

  $('#casde2x2').html('<b> Please Insert your Deposit</b>');


  $('#billsx2').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);

  $('#retrx2').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

  $('#chedex2').html('<b> Please Insert your Check Deposit now</b>');

  $('#cancelx2').text('(Tap to Cancel)');
  $('#cancel2x2').text('(Tap to Cancel)');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
  $('#sfcaCancelx2').text('( Tap to Close)');

  $('#sfsax2').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
  $('#sfsaCancelx2').text('( Tap to Close)');



    $('#gbyx2').html('<b>Good Bye</b>');
    $('#nrepx2').text('Need a Receipt');
    $('#receiptYesx2').text('YES');
    $('#receiptNox2').text('NO');
    $('#exBackx2').html('<b>Go Back</b>'); 


     $('#stcx2').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
     $('#stcXx2').text('( Tap to Close)');

   $('#ctsx2').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
   $('#ctsXx2').text('Tap to Close');


     $('#oopsx2').html('<h1><b>Oops</b></h1>');



  $('#machinex2').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

  $('#limitx2').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


console.log('A Language Button clicked');
});




$('#spanish2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
  

$('#cash2x2').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

  $('#withdraw2x2').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
  $('#checks2x2').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
  ///////////////

  $('#checking22').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
  $('#saving22').html('AHORROS <br><span>Balance: $1,200.00</span>');


  $('#depos, #depos2').text('Depositar');
  $('#wdraw1, #wdraw2').text('Retirar');
  $('#trans, #trans2').text('Transferir');
  $('#sendx, #sendx2').text('Enviar Dinero');







  //////////////
  



 
  $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);

  
  

  $('#submit2x2').html('SOMETER');

  $('#exit2x2').html('SALIR');


  $('#submit2Yx2').html('SOMETER');

  $('#exit2Yx2').html('SALIR');

  $('.confirm2x2').html('<h2><b>Confirmar</b></h2>');
  $('.back2x2').html('<h2><b>Atras</b></h2>');

  $('.confirm2Yx2').html('<h2><b>Confirmar</b></h2>');
  $('.back2Yx2').html('<h2><b>Atras</b></h2>');


  $('#casdex2').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

  $('#casde2x2').html('<b> Favor Inserte su Deposito Ahora</b>');



 
  $('#billsx2').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);


 $('#retrx2').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

 $('#chedex2').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

 $('#cancelx2').text('(Toque para Cerrar)');
 $('#cancel2x2').text('(Toque para Cancelar)');


$('#sfcax2').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
$('#sfcaCancelx2').text('( Toca para cerrar )');

  $('#sfsax2').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
  $('#sfsaCancelx2').text('( Toca para cerrar)');



    $('#gbyx2').html('<b>Hasta Luego</b>');
    $('#nrepx2').text('Necesita Recibo?');
    $('#receiptYesx2').text('SI');
    $('#receiptNox2').text('NO');
    $('#exBackx2').html('<b>Volver Atras</b>'); 


  $('#stcx2').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
  $('#stcXx2').text('( Toca para cerrar)');

   $('#ctsx2').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
   $('#ctsXx2').text('Toca para cerrar');

  $('#oopsx2').html('<h1><b>Ohoh</b></h1>'); 



  $('#machinex2').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

  $('#limitx2').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


console.log('A Language Button clicked');


  });






$('#chinesse2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
$('#cash2x2').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

  $('#withdraw2x2').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
  $('#checks2x2').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

  $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



    ///////////////

  $('#checking22').html('檢查 <br><span>天平: $2,200.00</span>');
  $('#saving22').html(' 儲蓄<br><span>天平: $1,200.00</span>');


  $('#depos, #depos2').text('存入現金');
  $('#wdraw1, #wdraw2').text(' 刪除');
  $('#trans, #trans2').text('刪除');
  $('#sendx, #sendx2').text('刪現金');



  //////////////


console.log('A Language Button clicked');

  
 
  $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);
  

  $('#submit2x2').html('提交');

  $('#exit2x2').html('取消');

  $('#submit2Yx2').html('提交');

  $('#exit2Yx2').html('取消');


  $('.confirm2x2').html('<h2><b>確認</b></h2>');
  $('.back2x2').html('<h2><b>返回</b></h2>');

  $('.confirm2Yx2').html('<h2><b>確認</b></h2>');
  $('.back2Yx2').html('<h2><b>返回</b></h2>');



  $('#casdex2').html('<b> 請插入您的現金存款</b>');

  $('#casde2x2').html('<b> 請插入您的現金存款</b>');


  
  $('#billsx2').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);

  $('#retrx2').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

  $('#chedex2').html('<b> 租賃現在插入您的支票存款</b>');

  $('#cancelx2').text('（點擊取消）');
  $('#cancel2x2').text('（點擊取消）');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
  $('#sfcaCancelx2').text('（點擊關閉）');

  $('#sfsax2').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
  $('#sfsaCancelx2').text('（點擊關閉）');



    $('#gbyx2').html('<b>再見</b>');
    $('#nrepx2').text('需要收據？');
    $('#receiptYesx2').text('是的');
    $('#receiptNox2').text('沒有');
    $('#exBackx2').html('<b>回去</b>'); 


     $('#stcx2').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
     $('#stcXx2').text('（點擊關閉）');

   $('#ctsx2').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
   $('#ctsXx2').text('（點擊關閉）');


     $('#oopsx2').html('<h1><b>哎呀</b></h1>');



  $('#machinex2').html('<b> 本機只能發送賬單：</b></h2><br>'); 

  $('#limitx2').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

  });







$('#russian2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);

$('#cash2x2').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

  $('#withdraw2x2').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
  $('#checks2x2').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


 $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
  $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


   ///////////////

  $('#checking22').html('Проверки <br><span>Баланс: $2,200.00</span>');
  $('#saving22').html('Экономия<br><span>Баланс: $1,200.00</span>');


  $('#depos, #depos2').text('денежных');
  $('#wdraw1, #wdraw2').text('Удалить');
  $('#trans, #trans2').text('средств');
  $('#sendx, #sendx2').text('денежных');

console.log('A Language Button clicked');

  //////////////
  
  
  $('#amountx2').text('$');
  $('#qtyvalue2x2').attr('value', userInputx2);



  $('#submit2x2').html('Отправить');

  $('#exit2x2').html('Отмена');

  $('#submit2Yx2').html('Отправить');

  $('#exit2Yx2').html('Отмена');



  $('.confirm2x2').html('<h2><b> Подтвердить</b></h2>');
  $('.back2x2').html('<h2><b> Назад</b></h2>');

  $('.confirm2Yx2').html('<h2><b> Подтвердить</b></h2>');
  $('.back2Yx2').html('<h2><b> Назад</b></h2>');


  $('#casdex2').html('<b> Пожалуйста, введите свой денежный депозит </b>');
  $('#casde2x2').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
  $('#billsx2').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);


  $('#retrx2').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

  $('#chedex2').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

  $('#cancelx2').text('(Нажмите, чтобы отменить)');
  $('#cancel2x2').text('(Нажмите, чтобы отменить)');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
  $('#sfcaCancelx2').text('(Нажмите, чтобы закрыть)');

  $('#sfsax2').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
  $('#sfsaCancelx2').text('(Нажмите, чтобы закрыть)');



    $('#gbyx2').html('<b> До свидания</b>');
    $('#nrepx2').text('Нужна квитанция?');
    $('#receiptYesx2').text(' ДА');
    $('#receiptNox2').text(' НЕТ');
    $('#exBackx2').html('<b>Вернуться</b>'); 



     $('#stcx2').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
     $('#stcXx2').text('(Нажмите, чтобы закрыть)');

   $('#ctsx2').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
   $('#ctsXx2').text('(Нажмите, чтобы закрыть)');


     $('#oopsx2').html('<h1><b>К сожалению</b></h1>');



  $('#machinex2').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

  $('#limitx2').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




  });





$('#german2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
$('#cash2x2').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

  $('#withdraw2x2').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
  $('#checks2x2').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

  $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);
  
  

  $('#submit2x2').html(' Senden ');

  $('#exit2x2').html(' Abbrechen ');

  $('#submit2Yx2').html(' Senden ');

  $('#exit2Yx2').html(' Abbrechen ');

  $('.confirm2x2').html('<h2><b> Bestätigen</b></h2>');
  $('.back2x2').html('<h2><b> Zurück</b></h2>');


  $('.confirm2Yx2').html('<h2><b> Bestätigen</b></h2>');
  $('.back2Yx2').html('<h2><b> Zurück</b></h2>');




  $('#casdex2').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
  $('#casde2x2').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


  $('#billsx2').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);

$('#retrx2').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

  $('#chedex2').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

  $('#cancelx2').text('(Tippen Sie auf Abbrechen)');
  $('#cancel2x2').text('(Tippen Sie auf Abbrechen)');

 


 $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
  $('#sfcaCancelx2').text('(Tippen Sie auf Schließen)');

  $('#sfsax2').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
  $('#sfsaCancelx2').text('(Tippen Sie auf Schließen)');



    $('#gbyx2').html('<b> Auf Wiedersehen</b>');
    $('#nrepx2').text('Benötigen Sie einen Beleg?');
    $('#receiptYesx2').text(' JA');
    $('#receiptNox2').text(' NEIN');
    $('#exBackx2').html('<b>Zurück</b>'); 





     $('#stcx2').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
     $('#stcXx2').text('(Tippen Sie auf Schließen)');

   $('#ctsx2').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
   $('#ctsXx2').text('(Tippen Sie auf Schließen)');


     $('#oopsx2').html('<h1><b> Hoppla</b></h1>');


  $('#machinex2').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

  $('#limitx2').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


});




$('#hindi2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
$('#cash2x2').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

  $('#withdraw2x2').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
  $('#checks2x2').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

  $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
  $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);
  
  

  $('#submit2x2').html(' जमा करें ');

  $('#exit2x2').html(' रद्द ');

  $('#submit2Yx2').html(' जमा करें ');

  $('#exit2Yx2').html(' रद्द ');


  $('.confirm2x2').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2x2').html('<h2><b> वापस</b></h2>');

  $('.confirm2Yx2').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Yx2').html('<h2><b> वापस</b></h2>');




  $('#casdex2').html('<b> कृपया अपना नकद जमा डालें</b>');
  $('#casde2x2').html('<b> कृपया अपना नकद जमा डालें</b>');


  $('#billsx2').text('');
  $('#billsx2').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);

  $('#retrx2').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

  $('#chedex2').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



$('#cancelx2').text('(रद्द करने के लिए टैप करें)');
  $('#cancel2x2').text('(रद्द करने के लिए टैप करें)');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
  $('#sfcaCancelx2').text('(बंद करने के लिए टैप करें)');

  $('#sfsax2').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
  $('#sfsaCancelx2').text('(बंद करने के लिए टैप करें)');




    $('#gbyx2').html('<b>अच्छा अलविदा</b>');
    $('#nrepx2').text('रसीद की आवश्यकता है?');
    $('#receiptYesx2').text('हाँ');
    $('#receiptNox2').text('नहीं');
    $('#exBackx2').html('<b> वापस जाओ</b>'); 


     $('#stcx2').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
     $('#stcXx2').text('(बंद करने के लिए टैप करें)');

   $('#ctsx2').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
   $('#ctsXx2').text('(बंद करने के लिए टैप करें)');


     $('#oopsx2').html('<h1><b> ओह्स</b></h1>');



  $('#machinex2').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

  $('#limitx2').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







  });



$('#french2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
$('#cash2x2').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

  $('#withdraw2x2').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
  $('#checks2x2').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

  $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

   $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);
  
  

  $('#submit2x2').html(' Soumettre ');

  $('#exit2x2').html(' Annuler ');

  $('#submit2Yx2').html(' Soumettre ');

  $('#exit2Yx2').html(' Annuler ');


  $('.confirm2x2').html('<h2><b> Confirmer</b></h2>');
  $('.back2x2').html('<h2><b> Retour</b></h2>');

  $('.confirm2Yx2').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Yx2').html('<h2><b> वापस</b></h2>');



  $('#casdex2').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
  $('#casde2x2').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

  $('#billsx2').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);

  $('#retrx2').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

  $('#chedex2').html('<b>  location Insérez votre chèque de caution maintenant</b>');

  $('#cancelx2').text('(Appuyer pour annuler)');
  $('#cancel2x2').text('(Appuyer pour annuler)');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
  $('#sfcaCancelx2').text('(Appuyez pour fermer)');


  $('#sfsax2').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
  $('#sfsaCancelx2').text('(Appuyez pour fermer)');



    $('#gbyx2').html('<b> Au Revoir</b>');
    $('#nrepx2').text("Besoin d'un reçu?");
    $('#receiptYesx2').text(' OUI');
    $('#receiptNox2').text(' NON');
    $('#exBackx2').html('<b> Retour</b>'); 


     $('#stcx2').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
     $('#stcXx2').text('(Appuyer pour fermer)');



   $('#ctsx2').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
   $('#ctsXx2').text('(Appuyez pour fermer)');


     $('#oopsx2').html('<h1><b> Oups</b></h1>');



  $('#machinex2').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

  $('#limitx2').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

  });





$('#arabic2x2').click(function(){
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);
$('#cash2x2').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

  $('#withdraw2x2').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
  $('#checks2x2').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

  $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

   $('#amountx2').text('$');
   $('#qtyvalue2x2').attr('value', userInputx2);
  

  $('#submit2x2').html(' إرسال ');
  $('#exit2x2').html(' الغاء ');

  $('#submit2Yx2').html(' إرسال ');
  $('#exit2Yx2').html(' الغاء ');




  $('.confirm2x2').html('<h2><b> تأكيد </b></h2>');
  $('.back2x2').html('<h2><b> العودة</b></h2>');

  $('.confirm2Yx2').html('<h2><b> تأكيد </b></h2>');
  $('.back2Yx2').html('<h2><b> العودة</b></h2>');





  $('#casdex2').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
  $('#casde2x2').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


  $('#billsx2').text(' ');
  $('#billsx2').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
  $('#qtyvalue2x2').attr('value', userInputx2);


  $('#retrx2').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

  $('#chedex2').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

  $('#cancelx2').text('(الحنفية لإلغاء)');
  $('#cancel2x2').text('(الحنفية لإلغاء)');

  $('#sfcax2').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
  $('#sfcaCancelx2').text('(انقر لإغلاق)');


$('#sfsax2').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
  $('#sfsaCancelx2').text('(انقر لإغلاق)');



    $('#gbyx2').html('<b> وداعا</b>');
    $('#nrepx2').text('تحتاج إلى استلام؟');
    $('#receiptYesx2').text(' نعم');
    $('#receiptNox2').text(' لا');
    $('#exBackx2').html('<b> العودة</b>'); 


     $('#stcx2').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
     $('#stcXx2').text('(الحنفية لإغلاق)');



   $('#ctsx2').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
   $('#ctsXx2').text('(الحنفية لإغلاق)');


     $('#oopsx2').html('<h1><b>عفوا</b></h1>');



  $('#machinex2').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

  $('#limitx2').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

console.log('A Language Button clicked');


  });



$('.OperationEndedPanelx2').click(function(){
  
  $(this).fadeOut();
userInputx2 = '0.00';
$('#qtyvalue2x2').attr('value', userInputx2);

$('#wdraw1, #wdraw2, #trans1, #trans2').removeClass('active');
$('#wdraw1, #wdraw2, #trans1, #trans2').removeClass('hili');

$('#cheTsav2x2, #savTche2x2').hide();

serviceValuex2 = '';   

     $('.pyx2').fadeOut();
     $('.PayButtonsx2 > label').removeClass('active');


});


});







/*
var box = document.getElementById('qtyvalue');

function addtoscreen(x){
box.value+=x;

if (x ==='c'){box.value=' '}
}

function Backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0, len);
  box.value=newNum;
}



*/


