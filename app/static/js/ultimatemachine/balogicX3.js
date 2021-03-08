
$(document).ready(function(){




         userInputx3='0.00';
         $('#qtyvalue2x3').attr('value', userInputx3);




  $('#exit2Yx3').click(function(){
  console.log('exitx3Y button was clicked');
   
       $('.goodbyex3').fadeIn('fast');
       $('#receiptYesx3, #receiptNox3').removeClass('active');
       $('.ServicePanelx3, #closeSer2Panelsxxxxx3, .Schedulex3').hide();
       serviceValuex3 = '';
         userInputx3='0.00';
         $('#qtyvalue2x3').attr('value', userInputx3);



});




  $('#receiptYesx3, #receiptNox3').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x3, .sendMoney2x3, .CreditCardsx3, .assistancex3, .Loanx3').hide();
             $('#billDenox3 ,#noBillDenox3').removeClass('active');

       
             $('.confBack2Yx3').hide();
             $('#billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
             $('.numVx3, #amountx3, #qtyvalue2x3').show();
             $('#submit2Yx3, #exit2Yx3').show();
             $('#wdraw1x3, #wdraw2x3, #transferx3, #trans2x3').removeClass('hili');

                  $('.goodbyex3').hide();
                     serviceValuex3='';
                     tofValuex3='waived';
                     userInputx3='0.00';
                  $('#qtyvalue2x3').attr('value', userInputx3);
       
                   $('#cheTsavx3, #cheTsav2x3').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x3').hide().fadeIn('10000');

      });


    


    $('.back24x3, .confirm24x3').click(function(){
      $('.confBack24x3').hide();





});   








$('.TapBx3').click(function(){

  $('.goodbyex3').fadeOut('fast');
});





// /////////Headers///////////////////


$('#atmHomex3, #ATM1Machinex3').click(function(){

$('.OtherHeaderx3').hide();


});





$('#MyFinancesx3').click(function(){
$('.HeaderPx3').hide();
$('.OtherHeaderx3, .MyFinancesx3').show();



});



$('#atmNotix3').click(function(){
$('.HeaderPx3').hide();
$('.OtherHeaderx3, .Notificationsx3').show();



});



$('#atmSetx3').click(function(){
$('.HeaderPx3').hide();
$('.OtherHeaderx3, .Settingsx3').show();


});



// ///////////////////


datex3= '';

$('#CreditCx3, #PayBx3, #sendx3, #loanx3').click(function(){
$('.Schedulex3').show();
$('.Schedulex3 > #datepicker').attr('value', datex3);

});


$('#closeSer2Panelsxxxxx3, .Confirm2Yx3, .exit2Yx3').click(function(){

$('.Schedulex3, .ServicePanelx3, #closeSer2Panelsxxxxx3').hide();
$('.Schedulex3 > #datepicker').attr('value', datex3);
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











tofValuex3 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex3='';
tofValuex3='waived';
billDenox3= false;


//stores user inputs








$('.NumPadx3').click(function(){

if(userInputx3 === '0.00'){

   userInputx3 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});











// /////////Send Wire transfers///////////////



// ///////////////////////////////////////////













$('.QtyValueCoverx3').click(function(){
$('.NumPadx3').hide();
$('.numVx3').show();


});









////////////////////////////////////////////////////////////////////////////


var userInputx3='';





 $('.numVx3').click(function(){
   userInputx3 += $(this).attr("value");
   $('#qtyvalue2x3').attr('value', userInputx3);
    console.log("current forrouting number is :" + userInputx3);
    console.log('New input is : ' + userInputx3);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex3').click(function(){

    var getInputx3 = userInputx3;
    var lenx3 = getInputx3.length -1;
    var newInputx3 = getInputx3.substring(0, lenx3);

    userInputx3 = newInputx3;
     $('#qtyvalue2x3').attr('value', userInputx3);
     
    console.log('New input is : ' + userInputx3)




});


//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx3, #qtyvalue2x3').click(function(){
  $('.numRx3, .numCCx3').hide();
  $('.numVx3').show();
});















//Send money from check savings

// $('.sendFromSavingsx3, .sendFromCheckingsx3').click(function(){
//  // $('#labelATM').text('Send Money to:');
//  // $('#routing').attr('placeholder', 'Routing Number');
//  $('.sendMoney2x3').fadeIn('fast');
//   $('#cheTsav2x3, #savTche2x3').fadeOut();
//  serviceValuex3=$(this).attr('value');
//  tofValuex3="sendx3";
//  console.log('tofValue is :' + tofValuex3);
//  console.log('serviceValue is: ' + serviceValuex3);



// });





// ///////////Bill DenoMination Official x3///////////





  $('#BILLDEx3').click(function(){
    serviceValuex3="BillDex3"
    $('#cheTsavx3').hide();
    $('#savTchex3').hide();
 
    $('.BillDenominationWdrawx3').fadeIn('fast');
    
userInputx3 = '';


    console.log("Service value x3is = " + serviceValuex3);
    console.log("qtyvalue = Deno" );

   });



       $('.retrievex3').click(function(){  
         $('.BillDenominationWdrawx3').fadeOut('fast');
         $('#qtyvalueDenox3').hide();
         userInputx3 ="";
         $('#qtyvalue2x3').show();
         $('#qtyvalue2x3').attr('value', "");

         $('#DenoImput10x3').attr('value','');
         $('#DenoImput20x3').attr('value','');
         $('#DenoImput50x3').attr('value','');
         $('#DenoImput100x3').attr('value', '');


          DenoImput10x3
          DenoImput20x3
          DenoImput50x3
          DenoImput100x3


       });
 










// /////////////////////////////////
  var BillTypex3=""


  $('.DenominatedBillsx3').click(function(){
    BillTypex3 = $(this).attr('value');
    console.log('Bill Type Current Value is : ' + BillTypex3);




  // var userInputDeno='';


  // DenoImput10valuex3='';
  // DenoImput20valuex3='';
  // DenoImput50valuex3='';
  // DenoImput100valuex3='';



// DenoImputTotalx3 = DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3;
// console.log('Deno total is ' + DenoImputTotalx3);






});



  DenoImput10x3=0;
  DenoImput20x3=0;
  DenoImput50x3=0;
  DenoImput100x3=0;


  Deno10IValx3  = '';
  Deno20IValx3  = '';
  Deno50IValx3  = '';
  Deno100IValx3 = ''; 





$('.NumPadx3').click(function(){
if (DenoImput10x3 === '0' || 0){
  DenoImput10x3 = '';
}

if (DenoImput20x3 === '0' || 0){
  DenoImput20x3 = '';
}

if (DenoImput50x3 === '0' || 0){
  DenoImput50x3 = '';
}

if (DenoImput100x3 === '0' || 0){
  DenoImput100x3 = '';
}





});



/////////



$('#bill10x3').click(function(){


DenoImput10x3 = '0';
 $('#DenoImput10Labelx3 > input').attr('value', DenoImput10x3);
     


  console.log('The Selected DenoImput is : ' + BillTypex3);
  console.log('The Selected DenoImput is : ' + BillTypex3);


   $('#DenoImput10x3, #DenoImput10Labelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numDeno10x3').show();


  console.log('numDeno10 pad');
  console.log(DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3);


 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);



});




 $('.numDeno10x3').click(function(){

          DenoImput10x3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);
          Deno10IValx3 = parseInt(DenoImput10x3);

          $('#DenoImput10Labelx3 > input').attr('value', Deno10IValx3);

           console.log("current DenoImput10x3 number is :" + Deno10IValx3);
           console.log('New DenoImput10x3 is : ' + Deno10IValx3);
           console.log('A numV was clicked and it has change input 10 value');

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);

 // // Deno10IValx3 = parseInt(DenoImput10x3);
 // DenoTotalx3 = Deno10IValx3 + Deno20IValx3 + Deno50IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);
        
           });




       //backspace button
           $('#backSpaceDeno10x3').click(function(){

           var getInput = DenoImput10x3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput10x3 = newInput;
          Deno10IValx3 = parseInt(DenoImput10x3);

            $('#DenoImput10Labelx3 > input').attr('value', Deno10IValx3);
     
           console.log('New input is : ' +  Deno10IValx3)
            

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);

 // Deno10IValx3 = parseInt(DenoImput10x3);
 // DenoTotalx3 = Deno10IValx3 + Deno20IValx3 + Deno50IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);


       });




/////////


$('#bill20x3').click(function(){

DenoImput20x3 = '0';
 $('#DenoImput20Labelx3 > input').attr('value', DenoImput20x3);


  console.log('The Selected DenoImput is : ' + BillTypex3);
  console.log('The Selected DenoImput is : ' + BillTypex3);


   $('#DenoImput20x3, #DenoImput20Labelx3').css('color','green');


  $('.NumPadx3').hide();
   $('.numDeno20x3').show();
   console.log('numDeno20 pad');


  console.log('total is = '+ DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3);


 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);



});




 $('.numDeno20x3').click(function(){

          DenoImput20x3 += $(this).attr("value");
          $('#DenoImput20Labelx3 > input').attr('value', DenoImput20x3);
           console.log("current DenoImput20 number is :" + DenoImput20x3);
           console.log('New DenoImput20 is : ' + DenoImput20x3);
           console.log('A numV was clicked and it has change input 10 value');


 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);

 // Deno20IValx3 = parseInt(DenoImput20x3);
 // DenoTotalx3 = Deno20IValx3 + Deno10IValx3 + Deno50IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);

        
           });




       //backspace button
           $('#backSpaceDeno20x3').click(function(){

           var getInput = DenoImput20x3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput20x3 = newInput;
             $('#DenoImput20Labelx3 > input').attr('value', DenoImput20x3);
     
           console.log('New input is : ' + DenoImput20x3)
            DenoImput20valuex3 = DenoImput20x3 * BillTypex3;

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
  $('#qtyvalue2x3').attr('value', userInputx3);

 //  Deno20IValx3 = parseInt(DenoImput20x3);
 // DenoTotalx3 = Deno20IValx3 + Deno10IValx3 + Deno50IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);



       });




//////////



$('#bill50x3').click(function(){

DenoImput50x3 = '0';
 $('#DenoImput50Labelx3 > input').attr('value', DenoImput50x3);


  console.log('The Selected DenoImput is : ' + BillTypex3);
  console.log('The Selected DenoImput is : ' + BillTypex3);


   $('#DenoImput50x3, #DenoImput50Labelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numDeno50x3').show();
   console.log('numDeno50 pad');

     console.log(DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3);

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
$('#qtyvalue2x3').attr('value', userInputx3);





});




 $('.numDeno50x3').click(function(){

          DenoImput50x3 += $(this).attr("value");
           $('#DenoImput50Labelx3 > input').attr('value', DenoImput50x3);
           console.log("current DenoImput50x3 number is :" + DenoImput50x3);
           console.log('New DenoImput50x3 is : ' + DenoImput50x3);
           console.log('A numV was clicked and it has change input 10 value');


 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
 $('#qtyvalue2x3').attr('value', userInputx3);


 // Deno50IValx3 = parseInt(DenoImput50x3);
 // DenoTotalx3 = Deno50IValx3 + Deno20IValx3 + Deno10IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);


        
           });




       //backspace button
           $('#backSpaceDeno50x3').click(function(){

           var getInput = DenoImput50x3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput50x3 = newInput;
             $('#DenoImput50Labelx3 > input').attr('value', DenoImput50x3);
     
           console.log('New input is : ' + DenoImput50x3)
            DenoImput50valuex3 = DenoImput50x3 * BillTypex3;


 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
 $('#qtyvalue2x3').attr('value', userInputx3);


 // Deno50IValx3 = parseInt(DenoImput50x3);
 // DenoTotalx3 = Deno50IValx3 + Deno20IValx3 + Deno10IValx3 + Deno100IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);   

       });



///////////




$('#bill100x3').click(function(){

 DenoImput100x3 = '0';
 $('#DenoImput100Labelx3 > input').attr('value', DenoImput100x3);


  console.log('The Selected DenoImput is : ' + BillTypex3);
  console.log('The Selected DenoImput is : ' + BillTypex3);


   $('#DenoImput100x3, #DenoImput100Labelx3').css('color','green');


    $('.NumPadx3').hide();
   $('.numDeno100x3').show();
   console.log('numDeno100 pad');

     console.log(DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3);

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
 $('#qtyvalue2x3').attr('value', userInputx3);



});



 $('.numDeno100x3').click(function(){

          DenoImput100x3 += $(this).attr("value");
          $('#DenoImput100Labelx3 > input').attr('value', DenoImput100x3);
           console.log("current DenoImput100x3 number is :" + DenoImput100x3);
           console.log('New DenoImput100x3 is : ' + DenoImput100x3);
           console.log('A numV was clicked and it has change input 10 value');

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
 $('#qtyvalue2x3').attr('value', userInputx3);

 // Deno100IValx3 = parseInt(DenoImput100x3);
 // DenoTotalx3 = Deno100IValx3 + Deno20IValx3 + Deno50IValx3 + Deno10IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);

        
           });




       //backspace button
           $('#backSpaceDeno100x3').click(function(){

           var getInput = DenoImput100x3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput100x3 = newInput;
            $('#DenoImput100Labelx3 > input').attr('value', DenoImput100x3);
     
           console.log('New input is : ' + DenoImput100x3)
            DenoImput100valuex3 = DenoImput100x3 * BillTypex3;

 userInputx3 = parseInt(DenoImput10x3) + parseInt(DenoImput20x3) + parseInt(DenoImput50x3) + parseInt(DenoImput100x3);
 $('#qtyvalue2x3').attr('value', userInputx3);

 // Deno100IValx3 = parseInt(DenoImput100x3);
 // DenoTotalx3 = Deno100IValx3 + Deno20IValx3 + Deno50IValx3 + Deno10IValx3;
 //   $('#qtyvalue2x3').attr('value', DenoTotalx3);

       });





/////////

  console.log(DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3);




// $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn0').click(function(){

//      DenoImputTotalx3 = DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3;


//      console.log('DenoImputTotal is = ' + DenoImputTotalx3);

//      $('#qtyvalueDenox3').attr('value', DenoImputTotalx3);

// });





// $('.NumPadx3').click(function(){



//   Deno10IValx3 = parseInt(DenoImput10x3);
//   Deno20IValx3 = parseInt(DenoImput20x3);
//   Deno50IValx3 = parseInt(DenoImput50x3);
//   Deno100IValx3 = parseInt(DenoImput100x3);


//    console.log('deno 10 is = ' + Deno10IValx3 + ' and it is type of ' + typeof('Deno10IValx3'));
//    console.log('deno 20 is = ' + Deno20IValx3 + ' and it is type of ' + typeof('Deno20IValx3'));
//    console.log('deno 50 is = ' + Deno50IValx3 + ' and it is type of ' + typeof('Deno50IValx3'));
//    console.log('deno 100 is = ' + Deno100IValx3 + ' and it is type of ' + typeof('Deno100IValx3'));

//     console.log(Deno10IValx3 + Deno20IValx3 + Deno50IValx3 + Deno100IValx3);

//     DenoTotalx3 = Deno10IValx3 + Deno20IValx3 + Deno50IValx3 + Deno100IValx3;


// $('#qtyvalue2x3').attr('value', DenoTotalx3);


// });



// });////End of billtype click/////////////*********************************




































/////////// /Close Button for service pannels////////////////////

$('.serDropx3 > button, #QuickPay2x3, #QuickPay3x3').click(function(){

$('#closeSer2Panelsxxxxx3').fadeIn();

});


//

$('#closeSer2Panelsxxxxx3').click(function(){
$(this).fadeOut();


$('.DenominatedBillsx3').removeClass('active');


     $('.pyx3').hide();
     $('.PayButtonsx3 > label').removeClass('active');


  $('#cheTsav2x3, #savTche2x3').hide();
  $('.confBack2Yx3').hide();
  $('#submit2Yx3, #exit2Yx3').show(); 

$('.ServicePanelx3').fadeOut();

  $('.NumPadx3').hide();
  $('.numVx3').show();




   $('#qtyvalueDenox3, #qtyvalueCardx3, #qtyvalueQPayx3').hide();

         userInputx3 ="0.00";
         $('#qtyvalue2x3').attr('value', userInputx3);

         $('#qtyvalue2x3').show();


         $('#DenoImput10Labelx3 > input').attr('value','0');
         $('#DenoImput20Labelx3 > input').attr('value','0');
         $('#DenoImput50Labelx3 > input').attr('value','0');
         $('#DenoImput100Labelx3 > input').attr('value', '0');

          DenoImput10x3='';
          DenoImput20x3='';
          DenoImput50x3='';
          DenoImput100x3='';







});








// ////////////////////





$('#sendx, #sendx3').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x3').fadeIn('fast');
  $('#cheTsav2x3, #savTche2x3').fadeOut();
 serviceValuex3=$(this).attr('value');
 tofValuex3 = "waived";
 console.log('tofValue is :' + tofValuex3);
 console.log('serviceValue is: ' + serviceValuex3);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx3').hide();
    $('#savTchex3').hide();
   serviceValuex3 =$(this).attr('value');
   $('#labelATMx3').text('Pay Bill & Tickets');
   $('#routingx3').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x3').fadeIn('fast');
 serviceValuex3=$(this).attr('value');
 tofValuex3="send";
 console.log('tofValue is :' + tofValuex3);
 console.log('serviceValue is: ' + serviceValuex3);



});






//When secondary services button are clikced, primary service buttons become non-active if active
/*$('#transfer, .sendFromSavings, .sendFromCheckings').click(function(){
    
      $('#cash2, #withdraw2, #checks2').attr('class','btn btn-default btn-lg serB');

});
*/

$('#cash2x3, #wdraw1x3, #wdraw2x3, #checks2x3, #CreditCx3, #Loanx3, #Livex3, #QuickPayx3, .sendFromCheckingsx3').click(function(){
  
// $('.sm2x3, .serB').click(function(){
  $('#savTchex3, #cheTsavx3').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1x3, #wdraw2x3').click(function(){
  
// $('.sm2x3, .serB').click(function(){
  $('#savTche2x3, #cheTsav2x3').hide();
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



$('#checking2x3, #saving2x3').click(function(){
   tofValuex3= $(this).attr('value');
   console.log('tofValue is :' + tofValuex3);
   console.log('serviceValue is: ' + serviceValuex3);


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
   
  
  $('#Livex3').click(function(){
    $('#cheTsavx3').hide();
    $('#savTchex3').hide();

    $('.assistancex3').fadeIn('fast');
    // $('#closeSendLivex3').click(function(){  
    //      $('.assistancex3').fadeOut('fast');
    //    });
  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan//////////////////////////


// $('#closeSendLoanx3').click(function(){
//   console.log("#closeSendLoan was clicked");

//   $('.Loanx3').fadeOut('slow'); 

//  });



$('#Loanx3').click(function(){
  serviceValuex3="Loan";
  tofValuex3='waived';
  console.log("#Loan has been clicked");
  console.log("Service value is =" + serviceValuex3);
   console.log("tofvalue is =" + tofValuex3);



  $('.Loanx3').fadeIn('slow');

  });


 $('.LoanGrantedx3').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex3').click(function(){
    $('#cheTsavx3x3').hide();
    $('#savTchex3x3').hide();

    $('.assistancex3').fadeIn('fast');
    // $('#closeSendLivex3').click(function(){  
    //      $('.assistancex3').fadeOut('fast');
    //    });
  });
 



///////////////////Credit Cards/////////////



$('#CreditCx3').click(function(){

//   serviceValuex3 = $(this).attr('value');
//   tofValuex3 = 'waived';
//   console.log("Service value is = " + serviceValuex3);
//   console.log("tofvalue is = " + tofValuex3);
//   $('.CreditCardsx3').fadeIn('slow');

// });





// SelectedCardx3 = '';



// $('.Cardx3').click(function(){
// SelectedCardx3 = $(this).attr('value');
// console.log("Selected Cards is = " + SelectedCardx3);

// });




//       $('.CardPaymentx3').click(function(){

      
//       $('.CreditCardsx3').fadeIn('slow');
//       $(this).fadeOut('slow');
//       userInputx3 = '';
//       $('.Cardx3').removeClass('active');
// });


//       $('#happyCardx3').attr('value', SelectedCardx3);
//       $('#cardPaymentAmountx3').attr('value', userInputx3);







// $('.CardStatementx3').click(function(){
//   $(this).fadeOut(1500);
//   $('.CreditCardsx3').fadeIn('slow');
// });


// $('.Cardx3').dblclick(function(){

//   $('.CreditCardsx3').fadeOut(1500);
//   $('#CardNamex3').attr('value', SelectedCardx3);
// $('.CardStatementx3').fadeIn('fast');



});

/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx3').click(function(){

    serviceValuex3="CreditCards";

    $('#cheTsavx3').hide();
    $('#savTchex3').hide();
    // $('#qtyvalue2x3, #qtyvalueDenox3').hide();
    // $('#qtyvalueCardx3').show();
    $('.CreditCardsx3').fadeIn('fast');
    
userInputx3 = '';


    console.log("Service value x3 is = " + serviceValuex3);
    console.log("qtyvalue = Deno" );







serviceValuex3 = $(this).attr('value');
  tofValuex3 = 'waived';
  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);
  $('.CreditCardsx3').fadeIn('slow');



  Card1Imputx3= 0;
  Card2Imputx3= 0;
  Card3Imputx3= 0;
  Card4Imputx3= 0;





});





SelectedCardx3 = '';



$('.Cardx3').click(function(){
SelectedCardx3 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx3);

});




//       $('.CardPaymentx3').click(function(){

      
//       $('.CreditCardsx3').fadeIn('slow');
//       $(this).fadeOut('slow');
//       userInputx3 = '';
//       $('.Cardx3').removeClass('active');
// });


      $('#happyCardx3').attr('value', SelectedCardx3);
      $('#cardPaymentAmountx3').attr('value', userInputx3);







$('.CardStatementx3').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx3').fadeIn('slow');
});




$('.Cardx3').dblclick(function(){

  $('.CreditCardsx3').fadeOut(1500);
  $('#CardNamex3').attr('value', SelectedCardx3);
$('.CardStatementx3').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx3=""


  $('.Cardx3').click(function(){
    CardNumberx3 = $(this).attr('value');
    console.log('Current Card x3 is : ' + CardNumberx3);




// DenoImputTotalx3 = DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3;
console.log('Card total is ' + userInputx3);




});



  // Card1Imputx3='';
  // Card2Imputx3='';
  // Card3Imputx3='';
  // Card4Imputx3='';







/////////////////////



$('#card1x3').click(function(){

console.log('Card 1 x3 was selected');
 Card1Imputx3 = 0;
 $('#Card1ImputLabelx3 > input').attr('value', Card1Imputx3);

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

  
  


   $('#Card1Imputx3, #Card1ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numCard1x3').show();



  console.log(Card1Imputx3 + Card2Imputx3 + Card3Imputx3 + Card4Imputx3);



});


$('.numCard1x3').click(function(){

  if (Card1Imputx3 === 0 ){
    Card1Imputx3 = '';
  }
});



 $('.numCard1x3').click(function(){

          Card1Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#Card1ImputLabelx3 > input').attr('value', Card1Imputx3);

           console.log("current Card 1 imput x3 number is :" + Card1Imputx3);
           console.log('New Card 1 imput x3 is : ' + Card1Imputx3);
           
userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceCard1x3').click(function(){

           var getInput = Card1Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx3 = newInput;
            $('#Card1ImputLabelx3 > input').attr('value', Card1Imputx3);
     
           console.log('New input is : ' + Card1Imputx3);
            
userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);




       });









//////////////////



$('#card2x3').click(function(){

  console.log('Card2 x3 was selected');

 Card2Imputx3 = 0;
 $('#Card2ImputLabelx3 > input').attr('value', Card2Imputx3);
   

   $('#Card2Imputx3, #Card2ImputLabelx3').css('color','green');


    $('.NumPadx3').hide();
   $('.numCard2x3').show();



  console.log(Card2Imputx3 + Card2Imputx3 + Card3Imputx3 + Card4Imputx3);


userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);


});




$('.numCard2x3').click(function(){

  if (Card2Imputx3 === 0 ){
    Card2Imputx3 = '';
  }
});






 $('.numCard2x3').click(function(){

          Card2Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#Card2ImputLabelx3 > input').attr('value', Card2Imputx3);

           console.log("current Card 1 imput x3 number is :" + Card2Imputx3);
           console.log('New Card 1 imput x3 is : ' + Card2Imputx3);
           

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpaceCard2x3').click(function(){

           var getInput = Card2Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx3 = newInput;
            $('#Card2ImputLabelx3 > input').attr('value', Card2Imputx3);
     
           console.log('New input is : ' + Card2Imputx3)
            
userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);




       });








// ///////////////




$('#card3x3').click(function(){
 Card3Imputx3 = 0;
 $('#Card3ImputLabelx3 > input').attr('value', Card3Imputx3);




  


   $('#Card3Imputx3, #Card3ImputLabelx3').css('color','green');


    $('.NumPadx3').hide();
   $('.numCard3x3').show();


  console.log(Card3Imputx3 + Card3Imputx3 + Card3Imputx3 + Card4Imputx3);



userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);



});


// /////////


$('.numCard3x3').click(function(){

  if (Card3Imputx3 === 0 ){
    Card3Imputx3 = '';
  }
});


//////////




 $('.numCard3x3').click(function(){

          Card3Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#Card3ImputLabelx3 > input').attr('value', Card3Imputx3);

           console.log("current Card 1 imput x3 number is :" + Card3Imputx3);
           console.log('New Card 1 imput x3 is : ' + Card3Imputx3);
           

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpaceCard3x3').click(function(){

           var getInput = Card3Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx3 = newInput;
            $('#Card3ImputLabelx3 > input').attr('value', Card3Imputx3);
     
           console.log('New input is : ' + Card3Imputx3)
            

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);



       });








// //////////////////




$('#card4x3').click(function(){
 Card4Imputx3 = 0;
 $('#Card4ImputLabelx3 > input').attr('value', Card4Imputx3);






   $('#Card4Imputx3, #Card4ImputLabelx3').css('color','green');


    $('.NumPadx3').hide();
   $('.numCard4x3').show();



  console.log(Card4Imputx3 + Card4Imputx3 + Card4Imputx3 + Card4Imputx3);

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);

});




// /////////


$('.numCard4x3').click(function(){

  if (Card4Imputx3 === 0 ){
    Card4Imputx3 = '';
  }
});


//////////




 $('.numCard4x3').click(function(){

          Card4Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#Card4ImputLabelx3 > input').attr('value', Card4Imputx3);

           console.log("current Card 1 imput x3 number is :" + Card4Imputx3);
           console.log('New Card 1 imput x3 is : ' + Card4Imputx3);
           
userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);



        
           });




       //backspace button
           $('#backSpaceCard4x3').click(function(){

           var getInput = Card4Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx3 = newInput;
            $('#Card4ImputLabelx3 > input').attr('value', Card4Imputx3);
     
           console.log('New input is : ' + Card4Imputx3)
            

userInputx3 = parseInt(Card1Imputx3) + parseInt(Card2Imputx3) + parseInt(Card3Imputx3) + parseInt(Card4Imputx3);

$('#qtyvalue2x3').attr('value', userInputx3);



       });









// });////End of Card Payment/////////////*********************************








///////////////////Pay Your Bills/////////////






  $('#PayBx3').click(function(){

    serviceValuex3="PayYourBills";

    $('#cheTsavx3').hide();
    $('#savTchex3').hide();
    // $('#qtyvalue2x3, #qtyvalueDenox3').hide();
    // $('#qtyvaluePBillx3').show();
    $('.PayBillsx3').fadeIn('fast');
    
userInputx3 = '';


    console.log("Service value x3 is = " + serviceValuex3);
    console.log("qtyvalue = Deno" );







serviceValuex3 = $(this).attr('value');
  tofValuex3 = 'waived';
  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);
  $('.CreditPBillsx3').fadeIn('slow');



  PBill1Imputx3=0;
  PBill2Imputx3=0;
  PBill3Imputx3=0;
  PBill4Imputx3=0;
  PBill5Imputx3=0;
  PBill6Imputx3=0;





});





// SelectedBillx3 = '';



// $('.PBillx3').click(function(){
// SelectedBillx3 = $(this).attr('value');
// console.log("Selected PBills is = " + SelectedPBillx3);

// });



//       $('#happyPBillx3').attr('value', SelectedPBillx3);
//       $('#PBillPaymentAmountx3').attr('value', userInputx3);







// $('.PBillStatementx3').click(function(){
//   $(this).fadeOut(1500);
//   $('.CreditPBillsx3').fadeIn('slow');
// });




// $('.PBillx3').dblclick(function(){

//   $('.CreditPBillsx3').fadeOut(1500);
//   $('#PBillNamex3').attr('value', SelectedPBillx3);
// $('.PBillStatementx3').fadeIn('fast');


//    });














// /////////////////////////////////
  var SelectedBillx3=""


  $('.PBillx3').click(function(){
    SelectedBillx3 = $(this).attr('value');
    console.log('Current Selected Bill x3 is : ' + SelectedBillx3);




// DenoImputTotalx3 = DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3;
console.log('PBill total is ' + userInputx3);

$('.pyx3').hide();
$('.PayButtonsx3 > label').removeClass('active');
$('.confBack2Yx3').hide();
$('#submit2Yx3, #exit2Yx3').show();


});



  // PBill1Imputx3='';
  // PBill2Imputx3='';
  // PBill3Imputx3='';
  // PBill4Imputx3='';







/////////////////////



$('#PBill1x3').click(function(){

console.log('PBill 1 x3 was selected');

 PBill1Imputx3 =  $(this).attr('value');
 $('#PBill1ImputLabelx3 > input').attr('value', PBill1Imputx3);

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

  
  


   $('#PBill1Imputx3, #PBill1ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
    $('.numPBill1x3').show();



  console.log(PBill1Imputx3 + PBill2Imputx3 + PBill3Imputx3 + PBill4Imputx3 + PBill5Imputx3);



});


// /////////


$('.numPBill1x3').click(function(){

  if (PBill1Imputx3 === 0 ){
    PBill1Imputx3 = '';
  }
});


//////////





 $('.numPBill1x3').click(function(){

          PBill1Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill1ImputLabelx3 > input').attr('value', PBill1Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill1Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill1Imputx3);
           
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpacePBill1x3').click(function(){

           var getInput = PBill1Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx3 = newInput;
            $('#PBill1ImputLabelx3 > input').attr('value', PBill1Imputx3);
     
           console.log('New input is : ' + PBill1Imputx3);

           console.log('back space was clicked' );
            
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);




       });









//////////////////



$('#PBill2x3').click(function(){

  console.log('PBill2 x3 was selected');

 PBill2Imputx3 =  $(this).attr('value');
 $('#PBill2ImputLabelx3 > input').attr('value', PBill2Imputx3);


   $('#PBill2Imputx3, #PBill2ImputLabelx3').css('color','green');


  $('.NumPadx3').hide();
  $('.numPBill2x3').show();



  console.log(PBill2Imputx3 + PBill2Imputx3 + PBill3Imputx3 + PBill4Imputx3 + PBill5Imputx3);


userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);


});




// /////////


$('.numPBill2x3').click(function(){

  if (PBill2Imputx3 === 0 ){
    PBill2Imputx3 = '';
  }
});


//////////





 $('.numPBill2x3').click(function(){

          PBill2Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill2ImputLabelx3 > input').attr('value', PBill2Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill2Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill2Imputx3);
           

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpacePBill2x3').click(function(){

           var getInput = PBill2Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx3 = newInput;
            $('#PBill2ImputLabelx3 > input').attr('value', PBill2Imputx3);
     
           console.log('New input is : ' + PBill2Imputx3)
            
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);




       });








// ///////////////




$('#PBill3x3').click(function(){

 PBill3Imputx3 =  $(this).attr('value');
 $('#PBill3ImputLabelx3 > input').attr('value', PBill3Imputx3);



  


   $('#PBill3Imputx3, #PBill3ImputLabelx3').css('color','green');


 $('.NumPadx3').hide();
  $('.numPBill3x3').show();


  console.log(PBill3Imputx3 + PBill3Imputx3 + PBill3Imputx3 + PBill4Imputx3 + PBill5Imputx3);



userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



});



// /////////


$('.numPBill3x3').click(function(){

  if (PBill3Imputx3 === 0 ){
    PBill3Imputx3 = '';
  }
});


//////////




 $('.numPBill3x3').click(function(){

          PBill3Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill3ImputLabelx3 > input').attr('value', PBill3Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill3Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill3Imputx3);
           

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpacePBill3x3').click(function(){

           var getInput = PBill3Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx3 = newInput;
            $('#PBill3ImputLabelx3 > input').attr('value', PBill3Imputx3);
     
           console.log('New input is : ' + PBill3Imputx3)
            

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



       });








// //////////////////




$('#PBill4x3').click(function(){

 PBill4Imputx3 =  $(this).attr('value');
 $('#PBill4ImputLabelx3 > input').attr('value', PBill4Imputx3);





   $('#PBill4Imputx3, #PBill4ImputLabelx3').css('color','green');


  $('.NumPadx3').hide();

  $('.numPBill4x3').show();



  console.log(PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill5Imputx3);


userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

});



// /////////


$('.numPBill4x3').click(function(){

  if (PBill4Imputx3 === 0 ){
    PBill4Imputx3 = '';
  }
});


//////////





 $('.numPBill4x3').click(function(){

          PBill4Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill4ImputLabelx3 > input').attr('value', PBill4Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill4Imputx3 + PBill5Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill4Imputx3);
           
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



        
           });




       //backspace button
           $('#backSpacePBill4x3').click(function(){

           var getInput = PBill4Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx3 = newInput;
            $('#PBill4ImputLabelx3 > input').attr('value', PBill4Imputx3);
     
           console.log('New input is : ' + PBill4Imputx3)
            

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



       });






$('#PBill5x3').click(function(){

 PBill5Imputx3 =  $(this).attr('value');
 $('#PBill5ImputLabelx3 > input').attr('value', PBill5Imputx3);





   $('#PBill5Imputx3, #PBill5ImputLabelx3').css('color','green');


  $('.NumPadx3').hide();
  $('.numPBill5x3').show();



  console.log(PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill5Imputx3);


userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

});


// /////////


$('.numPBill5x3').click(function(){

  if (PBill5Imputx3 === 0 ){
    PBill5Imputx3 = '';
  }
});


//////////





 $('.numPBill5x3').click(function(){

          PBill5Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill5ImputLabelx3 > input').attr('value', PBill5Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill5Imputx3 + PBill5Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill5Imputx3);
           
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



        
           });




       //backspace button
           $('#backSpacePBill5x3').click(function(){

           var getInput = PBill5Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx3 = newInput;
            $('#PBill5ImputLabelx3 > input').attr('value', PBill5Imputx3);
     
           console.log('New input is : ' + PBill5Imputx3)
            

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



       });




// ///////////////////////////




$('#PBill6x3').click(function(){
 PBill6Imputx3 =  $(this).attr('value');
 $('#PBill6ImputLabelx3 > input').attr('value', PBill6Imputx3);






   $('#PBill6Imputx3, #PBill6ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numPBill6x3').show();



  console.log(PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill4Imputx3 + PBill6Imputx3);


userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

});




// /////////


$('.numPBill6x3').click(function(){

  if (PBill6Imputx3 === 0 ){
    PBill6Imputx3 = '';
  }
});


//////////




 $('.numPBill6x3').click(function(){

          PBill6Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#PBill6ImputLabelx3 > input').attr('value', PBill6Imputx3);

           console.log("current PBill 1 imput x3 number is :" + PBill6Imputx3 + PBill6Imputx3);
           console.log('New PBill 1 imput x3 is : ' + PBill6Imputx3);
           
userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



        
           });




       //backspace button
           $('#backSpacePBill6x3').click(function(){

           var getInput = PBill6Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx3 = newInput;
            $('#PBill6ImputLabelx3 > input').attr('value', PBill6Imputx3);
     
           console.log('New input is : ' + PBill6Imputx3)
            

userInputx3 = parseInt(PBill6Imputx3) + parseInt(PBill2Imputx3) + parseInt(PBill3Imputx3) + parseInt(PBill4Imputx3) + parseInt(PBill5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);



       });





// });////End of PBill Payment/////////////*********************************




///////////////////Merchant/////////////




////////////////Merchant x3///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx3').click(function(){

 console.log("Service value x3 is = " + serviceValuex3);

serviceValuex3='Merchant';
tofValuex3 = 'waived';

$('.Merchantx3').fadeIn('slow');


    $('#cheTsavx3').hide();
    $('#savTchex3').hide();


  MerchantNamex3='';
  MerchantCardNUmberx3='';
  MerchantDateNUmberx3='';
  MerchantCVDx3='';
  MerchantZipCodex3='';







         $('.MerchantNameInputx3').attr('value', MerchantNamex3);
         $('.MerchantCardInputx3').attr('value', MerchantCardNUmberx3);
         $('.MerchantDateInputx3').attr('value', MerchantDateNUmberx3);
         $('.MerchantCVDInputx3').attr('value', MerchantCVDx3);
         $('.MerchantZipCodeInputx3').attr('value', MerchantZipCodex3);


 
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);



    console.log("Service value x3 is = " + serviceValuex3);



  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);

});






















// /////////////////////////////////
MerchantLabelx3="";

$('.MerchantLabelx3').click(function(){
MerchantLabelx3 = $(this).attr('value');
console.log("The selected MerchantLabelx3 is = " + MerchantLabelx3);

})








/////////////////////



$('.NameMerLabelx3').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx3').click(function(){




console.log('Merchant Name Label x3 was selected');

 MerchantCardNUmberx3 = "";
 $('.MerchantCardInputx3').attr('value', MerchantCardNUmberx3);


 $('.NumPadx3').hide();
 $('.numMCardx3').show();

});





 $('.numMCardx3').click(function(){

         MerchantCardNUmberx3+= $(this).attr("value");
          
          $('.MerchantCardInputx3').attr('value', MerchantCardNUmberx3);

           });



       //backspace button
           $('#backSpaceMCardx3').click(function(){

           var getInput = MerchantCardNUmberx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx3 = newInput;
            $('.MerchantCardInputx3').attr('value', MerchantCardNUmberx3);
     
           console.log('New input is : ' + MerchantCardNUmberx3);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx3').click(function(){




console.log('Merchant Name Label x3 was selected');

 MerchantDateNUmberx3 = "";
 $('.MerchantDateInputx3').attr('value', MerchantDateNUmberx3);


 $('.NumPadx3').hide();
 $('.numMDatex3').show();

});




 $('.numMDatex3').click(function(){

         MerchantDateNUmberx3+= $(this).attr("value");
          
          $('.MerchantDateInputx3').attr('value', MerchantDateNUmberx3);

           });



       //backspace button
           $('#backSpaceMDatex3').click(function(){

           var getInput = MerchantDateNUmberx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx3 = newInput;
            $('.MerchantDateInputx3').attr('value', MerchantDateNUmberx3);
     
           console.log('New input is : ' + MerchantDateNUmberx3);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx3').click(function(){




console.log('Merchant Name Label x3 was selected');

 MerchantCVDx3 = "";
 $('.MerchantCVDInputx3').attr('value', MerchantCVDx3);


 $('.NumPadx3').hide();
 $('.numCVDx3').show();

});




 $('.numCVDx3').click(function(){

          MerchantCVDx3+= $(this).attr("value");
          
          $('.MerchantCVDInputx3').attr('value', MerchantCVDx3);

           });



       //backspace button
           $('#backSpaceCVDx3').click(function(){

           var getInput = MerchantCVDx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx3 = newInput;
           $('.MerchantCVDInputx3').attr('value', MerchantCVDx3);
     
           console.log('New input is : ' + MerchantCVDx3);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx3').click(function(){




console.log('Merchant Name Label x3 was selected');

 MerchantZipCodex3 = "";
 $('.MerchantZipCodeInputx3').attr('value', MerchantZipCodex3);


 $('.NumPadx3').hide();
 $('.numMZipx3').show();
 
});




 $('.numMZipx3').click(function(){

         MerchantZipCodex3+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx3').attr('value', MerchantZipCodex3);

           });



       //backspace button
           $('#backSpaceMZipx3').click(function(){

           var getInput = MerchantZipCodex3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex3 = newInput;
            $('.MerchantZipCodeInputx3').attr('value', MerchantZipCodex3);
     
           console.log('New input is : ' + MerchantZipCodex3);
            


});






////////////////end of Merchant x3///////////////////////////
///////////////////////////////////////////////////////////




//////////////////////////////

$('.MSwipeCoverx3').click(function(){

$('.MerchantImputx3').removeClass('SelectedMerchantLabel');
$('.MCardImputx3').removeClass('SelectedMerchantLabel');

  $('.MSwipex3').addClass('clickedSwipex3');
   $('.SwipeCardx3').fadeIn('fast');
   $('#closeSer2Panelsxxxxx3').hide();
})


$('.SwButtonx3').click(function(){
    $('.SwipeCardx3').fadeOut('fast');
    $('#closeSer2Panelsxxxxx3').show();
});






/////////////////////////////////
/////////////////////////////////End of Merchant



////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex3').click(function(){

$('#closeSer2Panelsxxxxx3').fadeIn();

 console.log("Service value  is = " + serviceValue);

serviceValuex3='ChangePin';
tofValuex3 = 'waived';

$('.ChangePinx3 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx3='';
  ConPinx3='';





         $('.EnterPinInputx3').attr('value', EntPinx3);
         $('.ConfirmPinInputx3').attr('value', ConPinx3);


 
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);



    console.log("Service value  is = " + serviceValuex3);



  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);

});











// /////////////////////////////////
SelectedPinLabelx3="";

$('.ChangePinLx3').click(function(){
SelectedPinLabelx3 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx3);

})





/////////////////////



$('.EnterPinLabelx3').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx3 = "";
 $('.EnterPinInputx3').attr('value', EntPinx3);


 $('.NumPadx3').hide();
 $('.numEntPinx3').show();


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx3').click(function(){

         EntPinx3+= $(this).attr("value");
          
          $('.EnterPinInputx3').attr('value', EntPinx3);


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx3').click(function(){

           var getInput = EntPinx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx3 = newInput;
            $('.EnterPinInputx3').attr('value', EntPinx3);
     
           console.log('New input is : ' + EntPinx3);


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx3').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx3 = "";
 $('.ConfirmPinInputx3').attr('value', ConPinx3);


 $('.NumPadx3').hide();
 $('.numConPinx3').show();


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx3').click(function(){

         ConPinx3+= $(this).attr("value");
          
          $('.ConfirmPinInputx3').attr('value', ConPinx3);


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx3').click(function(){

           var getInput = ConPinx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx3 = newInput;
            $('.ConfirmPinInputx3').attr('value', ConPinx3);
     
           console.log('New input is : ' + ConPinx3);


// ////Password Match Notification//////////

           if(EntPinx3 !== '' && EntPinx3 === ConPinx3){
            
            $('.MatchedPinNOx3').hide();
            $('.MatchedPinYesx3').fadeIn();

           }



           if(EntPinx3 !== '' && EntPinx3 !== ConPinx3){

            $('.MatchedPinYesx3').hide();
            $('.MatchedPinNOx3').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////







///////////////////Take Loan/////////////






  $('#Loanx3').click(function(){

    serviceValuex3="Loan";

    $('#cheTsavx3').hide();
    $('#savTchex3').hide();
    // $('#qtyvalue2x3, #qtyvalueDenox3').hide();
    // $('#qtyvalueTLoanx3').show();
    $('.PayLoansx3').fadeIn('fast');
    
userInputx3 = '';


    console.log("Service value x3 is = " + serviceValuex3);
    console.log("qtyvalue = Deno" );







serviceValuex3 = $(this).attr('value');
  tofValuex3 = 'waived';
  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);
  $('.CreditTLoansx3').fadeIn('slow');



  TLoan1Imputx3=0;
  TLoan2Imputx3=0;
  TLoan3Imputx3=0;
  TLoan4Imputx3=0;
  TLoan5Imputx3=0;





});












// /////////////////////////////////
  var SelectedLoanx3=""


  $('.TLoanx3').click(function(){
    SelectedLoanx3 = $(this).attr('value');
    console.log('Current Selected Loan x3 is : ' + SelectedLoanx3);




// DenoImputTotalx3 = DenoImput10x3 + DenoImput20x3 + DenoImput50x3 + DenoImput100x3;
console.log('TLoan total is ' + userInputx3);




});



  // TLoan1Imputx3='';
  // TLoan2Imputx3='';
  // TLoan3Imputx3='';
  // TLoan4Imputx3='';







/////////////////////



$('#TLoan1x3').click(function(){

console.log('TLoan 1 x3 was selected');


 TLoan1Imputx3 = 0;
 $('#TLoan1ImputLabelx3 > input').attr('value', TLoan1Imputx3);

userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

  
  


   $('#TLoan1Imputx3, #TLoan1ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numTLoan1x3').show();



  console.log(TLoan1Imputx3 + TLoan2Imputx3 + TLoan3Imputx3 + TLoan4Imputx3 + TLoan5Imputx3);



});



///////////

$('.numTLoan1x3').click(function(){

  if (TLoan1Imputx3 === 0 ){
    TLoan1Imputx3 = '';
  }
});

/////////






 $('.numTLoan1x3').click(function(){

          TLoan1Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#TLoan1ImputLabelx3 > input').attr('value', TLoan1Imputx3);

           console.log("current TLoan 1 imput x3 number is :" + TLoan1Imputx3);
           console.log('New TLoan 1 imput x3 is : ' + TLoan1Imputx3);
           
userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 
        
           });




       //backspace button
           $('#backSpaceTLoan1x3').click(function(){

           var getInput = TLoan1Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan1Imputx3 = newInput;
            $('#TLoan1ImputLabelx3 > input').attr('value', TLoan1Imputx3);
     
           console.log('New input is : ' + TLoan1Imputx3);

           console.log('back space was clicked' );
            
userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 


       });









//////////////////



$('#TLoan2x3').click(function(){

  console.log('TLoan2 x3 was selected');

 TLoan2Imputx3 = 0;
 $('#TLoan2ImputLabelx3 > input').attr('value', TLoan2Imputx3);


   $('#TLoan2Imputx3, #TLoan2ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numTLoan2x3').show();



  console.log(TLoan2Imputx3 + TLoan2Imputx3 + TLoan3Imputx3 + TLoan4Imputx3 + TLoan5Imputx3);


userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 
});




///////////

$('.numTLoan2x3').click(function(){

  if (TLoan2Imputx3 === 0 ){
    TLoan2Imputx3 = '';
  }
});

/////////





 $('.numTLoan2x3').click(function(){

          TLoan2Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#TLoan2ImputLabelx3 > input').attr('value', TLoan2Imputx3);

           console.log("current TLoan 1 imput x3 number is :" + TLoan2Imputx3);
           console.log('New TLoan 1 imput x3 is : ' + TLoan2Imputx3);
           

userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 
        
           });




       //backspace button
           $('#backSpaceTLoan2x3').click(function(){

           var getInput = TLoan2Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan2Imputx3 = newInput;
            $('#TLoan2ImputLabelx3 > input').attr('value', TLoan2Imputx3);
     
           console.log('New input is : ' + TLoan2Imputx3)
            
userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 


       });








// ///////////////




$('#TLoan3x3').click(function(){

 TLoan3Imputx3 = 0;
 $('#TLoan3ImputLabelx3 > input').attr('value', TLoan3Imputx3);




  


   $('#TLoan3Imputx3, #TLoan3ImputLabelx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numTLoan3x3').show();


  console.log(TLoan3Imputx3 + TLoan3Imputx3 + TLoan3Imputx3 + TLoan4Imputx3 + TLoan5Imputx3);



userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 

});




///////////

$('.numTLoan3x3').click(function(){

  if (TLoan3Imputx3 === 0 ){
    TLoan3Imputx3 = '';
  }
});

/////////





 $('.numTLoan3x3').click(function(){

          TLoan3Imputx3 += $(this).attr("value");
          // $('#DenoImput10x3').attr('value', DenoImput10x3);


          $('#TLoan3ImputLabelx3 > input').attr('value', TLoan3Imputx3);

           console.log("current TLoan 1 imput x3 number is :" + TLoan3Imputx3);
           console.log('New TLoan 1 imput x3 is : ' + TLoan3Imputx3);
           

userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 
        
           });




       //backspace button
           $('#backSpaceTLoan3x3').click(function(){

           var getInput = TLoan3Imputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan3Imputx3 = newInput;
            $('#TLoan3ImputLabelx3 > input').attr('value', TLoan3Imputx3);
     
           console.log('New input is : ' + TLoan3Imputx3)
            

userInputx3 = parseInt(TLoan1Imputx3) + parseInt(TLoan2Imputx3) + parseInt(TLoan3Imputx3) + parseInt(TLoan4Imputx3) + parseInt(TLoan5Imputx3);
$('#qtyvalue2x3').attr('value', userInputx3);

 

       });








// //////////////////





// });////End of TLoan Payment/////////////*********************************
















/////////////////////////////////////////////////



$('.closeDepositx3').click(function(){
  console.log('Deposit panel was closed');
    $('.depositx3').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox3').click(function(){
  billDenox3= true;

   if(billDenox3 === true){
  console.log(' Bill Deno is Activated ' + billDenox3);
}
$('.confBack2Yx3').hide();
$('#submit2Yx3, #exit2Yx3').show();


})


$('#noBillDenox3').click(function(){
  billDenox3= false;
  if(billDenox3 === false){
  console.log(' Bill Deno is Activated ' + billDenox3);
}

  $('.confBack2Yx3').hide();
 $('#billsx3, .billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
$('#amountx3, #qtyvalue2x3, .LinearNumPadx3, .numVx3').show();
$('#submit2Yx3, #exit2Yx3').fadeIn();

  
})




$('.ui2x3').click(function(){
  if(serviceValuex3 !== 'withdraw'){

    billDenox3 === false;

    console.log('BillDenox3 was deactivated because Service value is not withdraw');

    $('#billDenox3').removeClass('active');
    $('#noBillDenox3').addClass('active');

// $('#submit2Yx3').click(function(){

//    $('#billsx3, .billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();

// });
  }
})



/////////////////////////////////////////////////////////


$('#wdraw1x3, #wdraw2x3').click(function(){
serviceValuex3 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 









 $('#QuickPay2x3, #QuickPay3x3').click(function(){
console.log("Service value x3 is = " + serviceValuex3);
$('.sendMoney11x3').fadeIn('slow');

 });



////////////////QuickPay///////////////////////////

$('#QuickPayx3, #QuickPay2x3').click(function(){

 console.log("Service value x3 is = " + serviceValuex3);

serviceValuex3='QuickPay';
tofValuex3 = 'waived';

$('.sendMoney11x3').fadeIn('slow');




    $('#cheTsavx3').hide();
    $('#savTchex3').hide();
    // $('#qtyvalue2x3, #qtyvalueDenox3, #qtyvalueCardx3').hide();
    // $('#qtyvalueQPayx3').show();



  MikeImputx3=0;
  JeffImputx3=0;
  MariaImputx3=0;
  JohnImputx3=0;


  LeahImputx3=0;
  PaulImputx3=0;
  JennyImputx3=0;
  GokuImputx3=0;



         $('#MikeImputx3').attr('value', MikeImputx3);
         $('#JeffImputx3').attr('value', JeffImputx3);
         $('#MariaImputx3').attr('value', MariaImputx3);
         $('#JohnImputx3').attr('value', JohnImputx3);


         $('#LeahImputx3').attr('value', LeahImputx3);
         $('#PaulImputx3').attr('value', PaulImputx3);
         $('#JennyImputx3').attr('value', JennyImputx3);
         $('#GokuImputx3').attr('value', GokuImputx3);

 
userInputx3 = '';
$('#qtyvalue2x3').attr('value', userInputx3);





    console.log("Service value x3 is = " + serviceValuex3);







  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);

});

// $('#closeSendQuickPayx3').click(function(){
// $('.sendMoney11x3').fadeOut('slow');

// });



Friendx3="";

$('.friendsx3').click(function(){
Friendx3 = $(this).attr('value');
console.log("Friend is = " + Friendx3);



})

      $('#happyFriendx3').attr('value', Friendx3);
      $('#quickPayAmountx3').attr('value', userInputx3);






   


  //      $('.retrievex3').click(function(){  
  //        $('.BillDenominationWdrawx3').fadeOut('fast');
  //        $('#qtyvalueDenox3').hide();
  //        userInputx3 ="";
  //        $('#qtyvalue2x3').show();
  //        $('#qtyvalue2x3').attr('value', "");

  //        $('#MikeImputx3').attr('value','');
  //        $('#JeffImputx3').attr('value','');
  //        $('#MariaImputx3').attr('value','');
  //        $('#JohnImputx3').attr('value', '');


  //        $('#LeahImputx3').attr('value','');
  //        $('#PaulImputx3').attr('value','');
  //        $('#JennyImputx3').attr('value','');
  //        $('#GokuImputx3').attr('value', '');


  // MikeImputx3='';
  // JeffImputx3='';
  // MariaImputx3='';
  // JohnImputx3='';


  // LeahImputx3='';
  // PaulImputx3='';
  // JennyImputx3='';
  // GokuImputx3='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx3=""


  $('.friendsx3').click(function(){
    SelectedFriendx3 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx3);





});



$('.NumPadx3').click(function(){
// if (MikeImputx3 === '0' || 0){
//   MikeImputx3 = '';
// }

if (JeffImputx3 === '0' || 0){
  JeffImputx3 = '';
}

if (MariaImputx3 === '0' || 0){
  MariaImputx3 = '';
}

if (JohnImputx3 === '0' || 0){
  JohnImputx3 = '';
}

if (LeahImputx3 === '0' || 0){
  LeahImputx3= '';
}

if (PaulImputx3 === '0' || 0){
  PaulImputx3 = '';
}

if (JennyImputx3 === '0' || 0){
  JennyImputx3 = '';
}

if (GokuImputx3 === '0' || 0){
  GokuImputx3 = '';
}

});



/////////////////////



$('#Mikex3').click(function(){

      $('.FriendMemox3').hide();
$('.MikeMemox3').show().click(function(){
  $('.WriteMemox3, .MikeTTMemox3').fadeIn();
});


console.log('Mike x3 was selected');

 MikeImputx3 = 0;
 $('#MikeImputx3').attr('value', MikeImputx3);




   $('#Mikex3 > span, #MikeImputx3').css('color','green');


 $('.NumPadx3').hide();
   $('.numMikex3').show();




 userInputx3 =  parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

});



///////////

$('.numMikex3').click(function(){

  if (MikeImputx3 === 0 ){
    MikeImputx3 = '';
  }
});

// ///////




 $('.numMikex3').click(function(){

          MikeImputx3 += $(this).attr("value");
          // $('#MikeImputx3').attr('value', MikeImputx3);


          $('#MikeImputx3').attr('value', MikeImputx3);

           console.log("current Friend 1 imput x3 number is :" + MikeImputx3);
           console.log('New Friend1 imput x3 is : ' + MikeImputx3);
           
 userInputx3 =  parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceMikex3').click(function(){

           var getInput = MikeImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx3 = newInput;
            $('#MikeImputx3').attr('value', MikeImputx3);
     
           console.log('New input is : ' + MikeImputx3)
            

 userInputx3 =  parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);




       });









//////////////////




/////////////////////



$('#Jeffx3').click(function(){

      $('.FriendMemox3').hide();
$('.JeffMemox3').show().click(function(){
  $('.WriteMemox3, .JeffTTMemox3').fadeIn();
});


console.log('Jeff x3 was selected');

 JeffImputx3 = 0;
 $('#JeffImputx3').attr('value', JeffImputx3);



  
  


   $('#Jeffx3 > span, #JeffImputx3').css('color','green');


 $('.NumPadx3').hide();
   $('.numJeffx3').show();


 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

});



///////////

$('.numJeffx3').click(function(){

  if (JeffImputx3 === 0 ){
    JeffImputx3 = '';
  }
});

// ///////






 $('.numJeffx3').click(function(){

          JeffImputx3 += $(this).attr("value");
          // $('#JeffImputx3').attr('value', JeffImputx3);


          $('#JeffImputx3').attr('value', JeffImputx3);

           console.log("current Friend 1 imput x3 number is :" + JeffImputx3);
           console.log('New Friend1 imput x3 is : ' + JeffImputx3);
           
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceJeffx3').click(function(){

           var getInput = JeffImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx3 = newInput;
            $('#JeffImputx3').attr('value', JeffImputx3);
     
           console.log('New input is : ' + JeffImputx3)
            
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


       });









//////////////////





/////////////////////



$('#Mariax3').click(function(){


      $('.FriendMemox3').hide();
$('.MariaMemox3').show().click(function(){
  $('.WriteMemox3, .MariaTTMemox3').fadeIn();
});


console.log('Maria x3 was selected');

MariaImputx3 = 0;
 $('#MariaImputx3').attr('value', MariaImputx3);
 


  
  


   $('#Mariax3 > span, #MariaImputx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numMariax3').show();



 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);
});





///////////

$('.numMariax3').click(function(){

  if (MariaImputx3 === 0 ){
    MariaImputx3 = '';
  }
});

// ///////






 $('.numMariax3').click(function(){

          MariaImputx3 += $(this).attr("value");
          // $('#MariaImputx3').attr('value', MariaImputx3);


          $('#MariaImputx3').attr('value', MariaImputx3);

           console.log("current Friend 1 imput x3 number is :" + MariaImputx3);
           console.log('New Friend1 imput x3 is : ' + MariaImputx3);
           

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceMariax3').click(function(){

           var getInput = MariaImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx3 = newInput;
            $('#MariaImputx3').attr('value', MariaImputx3);
     
           console.log('New input is : ' + MariaImputx3)
            
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


       });









//////////////////




/////////////////////



$('#Johnx3').click(function(){

      $('.FriendMemox3').hide();
$('.JohnMemox3').show().click(function(){
  $('.WriteMemox3, .JohnTTMemox3').fadeIn();
});


console.log('John x3 was selected');

 JohnImputx3 = 0;
 $('#JohnImputx3').attr('value', JohnImputx3);



  
  


   $('#Johnx3 > span, #JohnImputx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numJohnx3').show();


 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

});



///////////

$('.numJohnx3').click(function(){

  if (JohnImputx3 === 0 ){
    JohnImputx3 = '';
  }
});

// ///////









 $('.numJohnx3').click(function(){

          JohnImputx3 += $(this).attr("value");
          // $('#JohnImputx3').attr('value', JohnImputx3);


          $('#JohnImputx3').attr('value', JohnImputx3);

           console.log("current Friend 1 imput x3 number is :" + JohnImputx3);
           console.log('New Friend1 imput x3 is : ' + JohnImputx3);
           

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceJohnx3').click(function(){

           var getInput = JohnImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx3 = newInput;
            $('#JohnImputx3').attr('value', JohnImputx3);
     
           console.log('New input is : ' + JohnImputx3)
            

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


       });









//////////////////






/////////////////////



$('#Leahx3').click(function(){


      $('.FriendMemox3').hide();
$('.LeahMemox3').show().click(function(){
  $('.WriteMemox3, .LeahTTMemox3').fadeIn();
});


console.log('Leah x3 was selected');

LeahImputx3 = 0;
 $('#LeahImputx3').attr('value', LeahImputx3);
 


  
  


   $('#Leahx3 > span, #LeahImputx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numLeahx3').show();



 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

});




///////////

$('.numLeahx3').click(function(){

  if (LeahImputx3 === 0 ){
    LeahImputx3 = '';
  }
});

// ///////







 $('.numLeahx3').click(function(){

          LeahImputx3 += $(this).attr("value");
          // $('#LeahImputx3').attr('value', LeahImputx3);


          $('#LeahImputx3').attr('value', LeahImputx3);

           console.log("current Friend 1 imput x3 number is :" + LeahImputx3);
           console.log('New Friend1 imput x3 is : ' + LeahImputx3);
           
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpaceLeahx3').click(function(){

           var getInput = LeahImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx3 = newInput;
            $('#LeahImputx3').attr('value', LeahImputx3);
     
           console.log('New input is : ' + LeahImputx3)
            

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

       });









//////////////////





/////////////////////



$('#Paulx3').click(function(){


      $('.FriendMemox3').hide();
$('.PaulMemox3').show().click(function(){
  $('.WriteMemox3, .PaulTTMemox3').fadeIn();
});


console.log('Paul x3 was selected');

PaulImputx3 = 0;
 $('#PaulImputx3').attr('value', PaulImputx3);
 


  
  


   $('#Paulx3 > span, #PaulImputx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numPaulx3').show();



 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);
});



///////////

$('.numPaulx3').click(function(){

  if (PaulImputx3 === 0 ){
    PaulImputx3 = '';
  }
});

// ///////






 $('.numPaulx3').click(function(){

          PaulImputx3 += $(this).attr("value");
          // $('#PaulImputx3').attr('value', PaulImputx3);


          $('#PaulImputx3').attr('value', PaulImputx3);

           console.log("current Friend 1 imput x3 number is :" + PaulImputx3);
           console.log('New Friend1 imput x3 is : ' + PaulImputx3);
           

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpacePaulx3').click(function(){

           var getInput = PaulImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx3 = newInput;
            $('#PaulImputx3').attr('value', PaulImputx3);
     
           console.log('New input is : ' + PaulImputx3)
            

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

       });









//////////////////





/////////////////////



$('#Jennyx3').click(function(){

      $('.FriendMemox3').hide();
$('.JennyMemox3').show().click(function(){
  $('.WriteMemox3, .JennyTTMemox3').fadeIn();
});


console.log('Jenny x3 was selected');

JennyImputx3 = 0;
 $('#JennyImputx3').attr('value', JennyImputx3);
 


  
  


   $('#Jennyx3 > span, #JennyImputx3').css('color','green');

   $('.NumPadx3').hide();
   $('.numJennyx3').show();



 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);
});




///////////

$('.numJennyx3').click(function(){

  if (JennyImputx3 === 0 ){
    JennyImputx3 = '';
  }
});

// ///////






 $('.numJennyx3').click(function(){

          JennyImputx3 += $(this).attr("value");
          // $('#JennyImputx3').attr('value', JennyImputx3);


          $('#JennyImputx3').attr('value', JennyImputx3);

           console.log("current Friend 1 imput x3 number is :" + JennyImputx3);
           console.log('New Friend1 imput x3 is : ' + JennyImputx3);
           

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

        
           });




       //backspace button
           $('#backSpaceJennyx3').click(function(){

           var getInput = JennyImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx3 = newInput;
            $('#JennyImputx3').attr('value', JennyImputx3);
     
           console.log('New input is : ' + JennyImputx3)
            
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


       });









//////////////////





/////////////////////



$('#Gokux3').click(function(){

    $('.FriendMemox3').hide();
$('.GokuMemox3').show().click(function(){
  $('.WriteMemox3, .GokuTTMemox3').fadeIn();
});


console.log('Gokux3  was selected');

GokuImputx3 = 0;
 $('#GokuImputx3').attr('value', GokuImputx3);
 


  
  


   $('#Gokux3 > span, #GokuImputx3').css('color','green');


   $('.NumPadx3').hide();
   $('.numGokux3').show();



 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);

});




///////////

$('.numGokux3').click(function(){

  if (GokuImputx3 === 0 ){
    GokuImputx3 = '';
  }
});

// ///////



 $('.numGokux3').click(function(){

          GokuImputx3 += $(this).attr("value");
          // $('#Gokux3Imput').attr('value', Gokux3Imput);


          $('#GokuImputx3').attr('value', GokuImputx3);

           console.log("current Friend 1 imput  number is :" + GokuImputx3);
           console.log('New Friend1 imput  is : ' + GokuImputx3);
           
 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


        
           });




       //backspace button
           $('#backSpaceGokux3').click(function(){

           var getInput = GokuImputx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx3 = newInput;
            $('#GokuImputx3').attr('value', GokuImputx3);
     
           console.log('New input is : ' + GokuImputx3)
            

 userInputx3 = parseInt(JeffImputx3) + parseInt(MariaImputx3) + parseInt(JohnImputx3) + parseInt(LeahImputx3) + parseInt(PaulImputx3) + parseInt(JennyImputx3) + parseInt(GokuImputx3);
 $('#qtyvalue2x3').attr('value', userInputx3);


       });




// ///////////////



////////////////Wire Transfer x3///////////////////////////
///////////////////////////////////////////////////////////




$('#senx3').click(function(){

 console.log("Service value x3 is = " + serviceValuex3);

serviceValuex3='WireTransfer';
tofValuex3 = 'waived';

$('.sendMoney2x3').fadeIn('slow');


    $('#cheTsavx3').hide();
    $('#savTchex3').hide();


  WrtNamex3='';
  WrtAccountNUmberx3='';
  WrtRoutingNUmberx3='';
  WrtTelephonex3='';
  WrtZipCodex3='';







         $('.WrtNameInputx3').attr('value', WrtNamex3);
         $('.WrtAccountInputx3').attr('value', WrtAccountNUmberx3);
         $('.WrtRoutingInputx3').attr('value', WrtRoutingNUmberx3);
         $('.WrtTelephoneInputx3').attr('value', WrtTelephonex3);
         $('.WrtZipCodeInputx3').attr('value', WrtZipCodex3);


 
userInputx3 = '';
$('#qtyvalue2x3').attr('value', userInputx3);



    console.log("Service value x3 is = " + serviceValuex3);



  console.log("Service value is = " + serviceValuex3);
  console.log("tofvalue is = " + tofValuex3);

});






















// /////////////////////////////////
WrtLabelx3="";

$('.WrtLabelx3').click(function(){
WrtLabelx3 = $(this).attr('value');
console.log("The selected WrtLabelx3 is = " + WrtLabelx3);

})








/////////////////////



$('.NameWrLabelx3').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabelx3').click(function(){




console.log('Wrt Name Label x3 was selected');

 WrtAccountNUmberx3 = "";
 $('.WrtAccountInputx3').attr('value', WrtAccountNUmberx3);


 $('.NumPadx3').hide();
 $('.numCCx3').show();

});




 $('.numCCx3').click(function(){

         WrtAccountNUmberx3+= $(this).attr("value");
          
          $('.WrtAccountInputx3').attr('value', WrtAccountNUmberx3);

           });



       //backspace button
           $('#backSpaceCCx3').click(function(){

           var getInput = WrtAccountNUmberx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx3 = newInput;
            $('.WrtAccountInputx3').attr('value', WrtAccountNUmberx3);
     
           console.log('New input is : ' + WrtAccountNUmberx3);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabelx3').click(function(){




console.log('Wrt Name Label x3 was selected');

 WrtRoutingNUmberx3 = "";
 $('.WrtRoutingInputx3').attr('value', WrtRoutingNUmberx3);


 $('.NumPadx3').hide();
 $('.numRx3').show();

});




 $('.numRx3').click(function(){

         WrtRoutingNUmberx3+= $(this).attr("value");
          
          $('.WrtRoutingInputx3').attr('value', WrtRoutingNUmberx3);

           });



       //backspace button
           $('#backSpaceRx3').click(function(){

           var getInput = WrtRoutingNUmberx3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx3 = newInput;
            $('.WrtRoutingInputx3').attr('value', WrtRoutingNUmberx3);
     
           console.log('New input is : ' + WrtRoutingNUmberx3);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabelx3').click(function(){




console.log('Wrt Name Label x3 was selected');

 WrtTelephonex3 = "";
 $('.WrtTelephoneInputx3').attr('value', WrtTelephonex3);


 $('.NumPadx3').hide();
 $('.numSwTelx3').show();

});




 $('.numSwTelx3').click(function(){

          WrtTelephonex3+= $(this).attr("value");
          
          $('.WrtTelephoneInputx3').attr('value', WrtTelephonex3);

           });



       //backspace button
           $('#backSpaceSwTelx3').click(function(){

           var getInput = WrtTelephonex3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex3 = newInput;
           $('.WrtTelephoneInputx3').attr('value', WrtTelephonex3);
     
           console.log('New input is : ' + WrtTelephonex3);
            


});




//////////////////





/////////////////////



$('.ZipWrLabelx3').click(function(){




console.log('Wrt Name Label x3 was selected');

 WrtZipCodex3 = "";
 $('.WrtZipCodeInputx3').attr('value', WrtZipCodex3);


 $('.NumPadx3').hide();
 $('.numSwZipx3').show();
 
});




 $('.numSwZipx3').click(function(){

         WrtZipCodex3+= $(this).attr("value");
          
          $('.WrtZipCodeInputx3').attr('value', WrtZipCodex3);

           });



       //backspace button
           $('#backSpaceSwZipx3').click(function(){

           var getInput = WrtZipCodex3;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex3 = newInput;
            $('.WrtZipCodeInputx3').attr('value', WrtZipCodex3);
     
           console.log('New input is : ' + WrtZipCodex3);
            


});






////////////////end of Wire Transfer x3///////////////////////////
///////////////////////////////////////////////////////////



//////////////////






$('#closeSer2Panelsxxxxx3, .SubmitMemox3, .Confirm2Yx3, .OperationEndedPanelx3').click(function(){

$('.WriteMemox3, .TMemox3, .FriendMemox3').fadeOut();

});


















///////////////////////////////////////////////////






$('#submit2Yx3').click(function(){


  console.log('Submit2Y button was clicked');
  console.log('tof is' + tofValuex3);
  console.log('service value is '+ serviceValuex3);

     


         if((serviceValuex3 === "withdraw") && (userInputx3 % 10 !== 0) && (userInputx3 % 20 !== 0) && (userInputx3 % 100 !== 0) && (userInputx3 % 50 !== 0)){
      $('.retrievex3').hide();
      $('.wrongAmountx3').fadeIn('fast').click(function(){
        $(this).hide();
            $('.confBack2Yx3').hide();
            $('#submit2Yx3, #exit2Yx3').show();
      });






    if((serviceValuex3 === "withdraw") && (userInputx3 > 1500 )){
      $('.retrievex3').hide();
      $('.wrongAmountx3').fadeIn('fast').click(function(){
        $(this).hide();
            $('.confBack2Yx3').hide();
            $('#submit2Yx3, #exit2Yx3').show();
      });
    }
    }






if(serviceValuex3 !== '' && userInputx3 !== ''){

  if(billDenox3 === false){

    console.log('Submit2Y button was clicked 2nd');

  $('#submit2Yx3, #exit2Yx3').hide();
  $('.confBack2Yx3').show();
  $('.confirm2Yx3').click(function(){

    userInputx3= '';
 $('#qtyvalue2x3').attr('value', userInputx3);


  $('.confBack2Yx3').hide();
  $('#submit2Yx3, #exit2Yx3').show();

   

  });



}






//   $('.back2Yx3').click(function(){
//   $('.confBack2Yx3').hide(); 
//   $('#billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
//   $('.numVx3, #amountx3, #qtyvalue2x3').show();
  

//   $('#submit2Yx3, #exit2Yx3').show();

// });





//////// /////Back2Y Button /////////////////



  $('.back2Yx3').click(function(){

  $('.confBack2Yx3').hide();
  $('#submit2Yx3, #exit2Yx3').show();
  $('.LinearNumPadx3').show();


});



////////////////////////////////////////////










}























if(billDenox3 === true){


    $('.confBack2Yx3').show('fast');
    $('#submit2Yx3, #exit2Yx3').hide();

    $('.confirm2Yx3').click(function(){
    $('.confBack2Yx3').hide();
    $('#submit2Yx3, #exit2Yx3').show();

    userInput= '';
 $('#qtyvalue2').attr('value', userInput);



   

  });

  $('.back2Yx3').click(function(){
  $('.confBack2Yx3').hide(); 
  $('#billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
  $('.numVx3, #amountx3, #qtyvalue2x3').show();
  

  $('#submit2Yx3, #exit2Yx3').show();

});


$('#deposx3, #deposx32').click(function(){
  serviceValuex3 = "dcash";
  tofValuex3 = "waived";
  console.log('current service value is ' + serviceValuex3)
  $('.depositx3').fadeIn();

  });






/////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////


if(serviceValuex3 ==='withdraw' && tofValuex3 !== '' && userInputx3 % 10 === 0){
    $('.confBack2Yx3').show('fast');
    $('#submit2Yx3, #exit2Yx3').hide();

    $('.LinearNumPadx3, #amountx3, #qtyvalue2x3, .numVx3').hide();  
    $(' .billsx3, #billsx3, #qtyvalue23x3').show('fast');
    $('#qtyvalue23x3').attr("value", userInputx3);


    $('#cash2x3, #checks2x3, #sendFromCheckingsx3, #transferx3, #transferx3, #trans2x3x3, #payTicketx3').click(function(){
    $('.LinearNumPadx3, #amountx3, #qtyvalue2x3, .numVx3').show();  
    $('.billsx3, #billsx3, #qtyvalue23x3, #b10x3, #b20x3, #50x3, #b100x3').hide();
    
    
  console.log('serviceValue is: ' + serviceValuex3);
  console.log('tof value is: ' + tofValuex3);



});


}


if(serviceValuex3 ==='withdraw' && tofValuex3 !== '' && userInputx3 % 10 === 0){
      $('.billsx3').fadeIn();
      console.log("Multiples are working perfectly");


    }

    if (userInputx3 % 10 === 0 && userInputx3 <= 200 && userInputx3 !== 10){$('#b10x3').fadeIn('fast')}
    if (userInputx3 % 10 === 0 && userInputx3 > 200){$('#b10x3').hide()}
    if (userInputx3 > 20 && userInputx3 % 10 === 0 && userInputx3 <= 1500){$('#b20x3').fadeIn('fast')}
    if (userInputx3 > 50 && userInputx3 % 10 === 0 && userInputx3 <= 1500){$('#b20x3, #b50x3').fadeIn('fast')}
    if (userInputx3 > 100 && userInputx3 % 10 === 0 && userInputx3 <= 1500){$('#b20x3, #b50x3, #b100x3').fadeIn('fast')}

    
    if (userInputx3 % 20 === 0 && userInputx3 <= 1500){$('#b20x3').fadeIn('fast')}
    if (userInputx3 > 50 && userInputx3 % 20 === 0 && userInputx3 <= 1500){$('#b50x3').fadeIn('fast')}
    if (userInputx3 > 100 && userInputx3 % 20 === 0 && userInputx3 <= 1500){$('#b50x3, #b100x3').fadeIn('fast')}


    if (userInputx3 % 50 === 0){$('#b50x3').fadeIn('fast')}
    if (userInputx3 > 100 && userInputx3 % 50 === 0 && userInputx3 <= 1500 ){$('#b100x3').fadeIn('fast')}
    if (userInputx3 % 100 === 0){$('#b20x3, #b50x3, #b100x3').fadeIn('fast')}




 $('.confirm2x3').click(function(){
     $('.confBack2Y').hide();
     $('#billsx3, .billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
     $('.LinearNumPadx3, #amountx3, #qtyvalue2x3, .numVx3').show();
     
    $('.sendMoney2x3').hide();
    $('#submit2Yx3, #exit2Yx3').show();

   
  });


  $('.back2x3').click(function(){

    $('.billsx3, #billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
    $('.LinearNumPadx3, #amountx3, #qtyvalue2x3, .numVx3').show();  
    $('.confBack2Yx3').hide();
    $('.sendMoney2x3').hide();
    $('#submit2Yx3, #exit2Yx3').show(); 


  });




}







 });






$('.billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();






////////////////////Pay panel show/hide/////////////////////////////////

$('#submit2Yx3').click(function(){

  if(serviceValuex3 === 'PayBills'){
    $('.pyx3').fadeIn();
    $('.numVx3, .NumPadx3').hide();

  }

});



$('#submit2Yx3').click(function(){

  if(serviceValuex3 === 'QuickPay'){
    $('.pyx3').fadeIn();
    $('.numVx3, .NumPadx3').hide();

  }

});


$('#submit2Yx3').click(function(){

  if(serviceValuex3 === 'CreditCards'){
    $('.pyx3').fadeIn();
    $('.numVx3, .NumPadx3').hide();

  }

});




$('.back2Yx3').click(function(){

  if(serviceValuex3 === 'PayBills' || 'QuickPay' || 'CreditCards'){
       $('.pyx3').fadeOut();
       $('.pyx3 > label').removeClass('active');
       $('.numVx3').show();
       serviceValuex3 === 'PayBills';

}


});

/////////////////////////////////////////////////////
















               // contionals to display cooresponding message panel
   $('.confirm2Yx3').click(function(){  

    $('.ServicePanelx3, #closeSer2Panelsxxxxx3, .Schedulex3').hide();
        $("#inCheckSentx3, #inSavSentx3, #inCheckx3, #inSavx3, #loanAmountx3, #cardPaymentAmountx3, #quickPayAmountx3").attr("value", userInputx3);
    $("#happyCardx3").attr("value", SelectedCardx3);

    userInputx3= "0.00";
    $("#qtyvalue2x3").attr('value', userInputx3);


     $('.pyx3').hide();
     $('.PayButtonsx3 > label').removeClass('active');


     $('.numVx3').fadeIn();

     if((serviceValuex3 === "withdraw") && (userInputx3 % 10 !== 0)){
      $('.wrongAmountx3').fadeIn('fast').click(function(){
        $(this).hide();
      });
        console.log("Multiples are working perfectly");
    }


    if((serviceValuex3 === 'withdraw') && (userInputx3 % 10 !== 0) && (userInputx3 % 20 !== 0) && (userInputx3 % 100 !== 0) && (userInputx3 % 50 !== 0)){
      $('.wrongAmountx3').fadeIn('fast').click(function(){
        $(this).hide();
      });

    }



   if(tofValuex3 !== '' && serviceValuex3 !== '' && userInputx3 !== ''){

 
   if(serviceValuex3 === $('#cash2x3').attr("value") ){
      $('.depositCashx3').fadeIn('fast');


    


    // }else if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 === 0)){
    //    $('.retrieve').fadeIn('fast').click(function(){
    //       $('#bills, #b10, #b20, #b50, #b100').hide();
    //       $('.numV, #amount, #qtyvalue2').show();

    //    })



    }else if((serviceValuex3 === "withdraw") && (userInputx3 % 10 === 0)){
       $('.retrievex3').fadeIn('fast').click(function(){
          $('#billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
          $('.LinearNumPadx3, .numVx3, #amountx3, #qtyvalue2x3').show();
          console.log('line 915 reached withdraw');

       })

  ////////////////////Loan

        }else if(serviceValuex3 === $('#Loanx3').attr('value') && tofValuex3=="waived" && userInputx3 <= 50000){

      $('.LoanGrantedx3').fadeIn('slow');   
      $('.Loanx3').fadeOut(3000);
      

      console.log('Loaaaannnnnnnnnnnnnnnnnnnn');




      ///////////////////




// /////// BillDeno//////////////

}else if((serviceValuex3 === 'BillDex3') && (userInputx3 !== '')){

console.log("Service value is = " + serviceValuex3);
           
         $('.retrievex3').fadeIn();
         $('.confBack2Yx3').hide();

           $('#submit2Yx3, #exit2Yx3').show();

            $('.NumPadx3').hide();
           $('.numVx3').show();


           
           $('.BillDenominationWdrawx3, #closeSer2Panelsxxxxx3').hide();




//////////////////Credit cards

        }else if(serviceValuex3 === $('#CreditCx3').attr('value') && tofValuex3=="waived" && userInputx3 !== ""){
  
     console.log("Service value is = " + serviceValuex3);
     console.log("tofvalue is = " + tofValuex3);



      $('.CardPaymentx3').fadeIn('slow');    
      $('.CreditCardsx3, #closeSer2Panelsxxxxx3').fadeOut(1000);




  $('.NumPadx3').hide();
  $('.numVx3').show();




      $('.CardPaymentx3').click(function(){

      $(this).fadeOut(1000);
      // $('.CreditCardsx3').fadein(slow);

      });



  ////////////////////////////
  //////////////////Quick Payx3////////////////////////


 }else if(serviceValuex3 === 'QuickPay' && tofValuex3=="waived" && userInputx3 !== ""){
      

$('#happyFriendx3').attr('value', Friendx3);

console.log("confirm2Y Friend Is = " + Friendx3);
$('.sendMoney11x3, #closeSer2Panelsxxxxx3').fadeOut('slow');


  $('.NumPadx3').hide();
  $('.numVx3').show();



$('.QuickSentx3').fadeIn('slow').click(function(){
  $(this).fadeOut("slow");
  // $('.sendMoney11x3').fadeIn('slow');
});



  ////////////////////////////////////////////

  ///////////////////Merchant/////////////////////////

 }else if(serviceValuex3 === 'Merchant' && tofValuex3=="waived" && userInputx3 !== ""){
      

$('.Merchantx3, #closeSer').hide();
$('.MerchCardChargedx3').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////



    ///////////////////Bill Payment/////////////////////////

 }else if(serviceValuex3 === 'PayBills' && tofValuex3=="waived" && userInputx3 !== ""){
      

$('.Merchantx3, #closeSer').hide();
$('.BillPaySentx3').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////

    
    }else if(serviceValuex3 === $('#checks2x3').attr("value")){
      $('.depositCheckx3').fadeIn('fast');




    }else if(serviceValuex3 === 'checkcashSent' && tofValuex3=="send"){
      $('.checkCashSentx3').fadeIn('fast');
      console.log('service value is: ' + serviceValuex3);
      console.log('tof value is: ' + tofValuex3);



    }else if(serviceValuex3 === "checkcashSent"){
      $('.checkCashSentx3').fadeIn('fast');
      console.log('service value is: ' + serviceValuex3);
      console.log('tof value is: ' + tofValuex3);



    }else if(serviceValuex3 === $('#payTicketx3').attr("value") && tofValuex3=="send"){
      $('.checkCashSent').fadeIn('fast');
      console.log('service value is: ' + serviceValuex3);
      console.log('tof value is: ' + tofValuex3);



    }else if(serviceValuex3 === 'transferx3' && tofValuex3 === "savings"){
      $('.tranToCheckingx3').fadeIn('fast');




    }else if(serviceValuex3 === 'transferx3' && tofValuex3 === "checking"){
      $('.tranToSavingsx3').fadeIn('fast');


      ////////////////////

        }else if(serviceValuex3 === $('#transferx3').attr("value") && tofValuex3=="waived"){
      $('.tranToSavingsx3').fadeIn('fast');
 


       }else if(serviceValuex3 === $('#trans2x3').attr("value") && tofValuex3=="waived"){
      $('.tranToCheckingx3').fadeIn('fast');


      ///////////////////

    }else{
      $('.selectt').fadeIn('fast');
      console.log("Please select a service and an account for your transaction");
      console.log('service value is: ' + serviceValuex3);
      console.log('tof value is: ' + tofValuex3);
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

   $('#cash2x3, #withdraw2x3, #checks2x3').click(function(){
      $('#checking2x3, #saving2x3').removeClass('active');

      });



   $('#checking2x3, #saving2x3').click(function(){

     if (serviceValuex3 === $('#cash2x3').attr("value")){
      $('.depositCashx3').fadeIn('fast');

  


     }else if

     (serviceValuex3 === $('#checks2x3').attr("value")){
      $('.depositCheckx3').fadeIn('fast');

     }

   });


     



//Tap to Close
//   $('.depositCheckx3, .depositCashx3, .retrievex3, .selectx3, .savCashSentx3, .checkCashSentx3, .tranToSavingsx3, .tranToCheckingx3').click(function(){
//   $(this).fadeOut('fast');
//   userInputx3= "";
//   $("#qtyvalue2x3").attr('value', userInputx3);

// });

 

 $('.CardPaymentx3, .checkCashSentx3, .tranToSavingsx3, .tranToCheckingx3, .retrievex3, .GoodByex3, .LoanGrantedx3, .depositCashx3, .QuickSentx3').click(function(){
  $(this).fadeOut('fast');


});








///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox3').removeClass('active');
//        $('#receiptYes, #receiptNox3').click(function(){

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


$('.checkinginfo2x3').click(function(){
  $(this).fadeOut('fast');
});


$('#checking33').dblclick(function(){
$('.checkinginfo2x3').fadeIn('fast');

});






$('.savinginfo2x3').click(function(){
  $(this).fadeOut('fast');
});


$('#saving33').dblclick(function(){
$('.savinginfo2x3').fadeIn('fast');

});


// $('#closeSendx3').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x3').hide();
//   $('.numCCx3').hide();
//   $('.numRx3').hide();
//   $('.numVx3').show();

// })

// $('#closeSend2x3').click(function(){
//   $('.sendMoney3x3').hide();
// })




// $('#deposx3, #deposx32, #wdraw1x3, #wdraw2x3, #sendx, #sendx3').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });




$('#transferx3').click(function(){
  serviceValuex3 = "transferx3";
  tofValuex3 = "waived";
  console.log('servicevalue is : '+ serviceValuex3);
  // $('#savTche2x3').hide();
  // $('#cheTsav2x3').fadeIn();



});


// $('#trans2x3').click(function(){
//   serviceValuex3 = "transfer2";
//   tofValuex3 = "waived";
//   console.log('servicevalue is : '+ serviceValuex3);
//   $('#cheTsav2x3').hide();
//   $('#savTche2x3').fadeIn();

// });



   $('#checking33').click(function(){
    tofValuex3 = 'checking';
     if(serviceValuex3 === 'transferx3'){
          $('#cheTsav2x3').fadeIn('fast');
          $('#savTche2x3').hide();
          $('#toSaving').fadeIn('fast');
          $('#toChecking').hide();
          console.log('transfer from checking');
          console.log(serviceValuex3);
  

            }

             if(serviceValuex3 ==='dcash'){
              $('.depositx3').fadeIn();
             }
         }); 


      
   $('#saving33').click(function(){
    tofValuex3 = 'savings';
      if(serviceValuex3 ==='transferx3'){

      
          $('#cheTsav2x3').hide();
          $('#savTche2x3').fadeIn('fast');
          $('#toSaving').hide();
          $('#toChecking').fadeIn('fast');
          console.log('transfer from savings');
          console.log(serviceValuex3);
        
        }

        if(serviceValuex3 ==='dcash'){
          $('.depositx3').fadeIn();
        }




      });






// $('#wdraw1x3, #wdraw2x3').click(function(){
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



$('#deposx3, #deposx32').click(function(){

  serviceValuex3 = "dcash";
  console.log('current service value is ' + serviceValuex3)
  // $('.depositx3').fadeIn();

   $('#cheTsav2x3, #savTche2x3').fadeOut();

});






// });






$('#deposx3, #deposx32, #transferx3, #sendx, #sendFromCheckingsx3, #sendx3, #trans2x3, #cash2, #withdraw2, #checks2, #checking2, #saving2, #transfer, #payticket, #Live').click(function(){
  $('#billsx3, #b10x3, #b20x3, #b50x3, #b100x3').hide();
  $('.numVx3, #amountx3, #qtyvalue2x3').show();
  $('.confBack2Yx3').hide();
  $('#submit2Yx3, #exit2Yx3').show();

  // if(serviceValuex3 !== "withdraw"){

  //  // $('.Confirm2Yx3').Show();
  // }



});

////////////////////////////////////////////

 $('.lan2x3, #qty2x3, .fin2x3, #deposx3, #wdraw1x3, #checking33, #transferx3, #wdraw2x3, #trans2x3, #send, #trans2x3, #sendx3').click(function(){
      $('.serDropx3').hide();
  })


$('#ServiceMenux3, .ServiceMenux4').click(function(){

  console.log('Service menu was clicked');

  $('.serDropx3').fadeIn('fast').click(function(){
    console.log('Serdrop is being displayed');
    $(this).hide();

   $('.lan2x3, .qty2x3, .fin2x3').click(function(){

$('.serDropx3').fadeOut();

});


  })
});




////////////////////////////////////////////
//  $('.closeDepositx3').click(function(){
//     $('.depositx3').fadeOut();
//     console.log('Close deposit was clicked');
// });


///////////////////////////////////Submit2Yx3/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

$('#english2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);
  $('#cash2x3').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
  $('#withdraw2x3').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
  $('#checks2x3').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


    ///////////////

  $('#checking33').html('CHECKING<br><span>Balance: -$2,200.00</span>');
  $('#saving33').html('SAVINGS <br><span>Balance: $1,200.00</span>');


  $('#deposx3, #deposx').html('<input type="radio" name="lan"> Deposit');
  $('#wdraw1x3, #wdraw2x3x2').html('<input type="radio" name="lan"> Withdraw');
  $('#transferx3, #trans2x3').html('<input type="radio" name="lan"> Transfer');
  $('#sendx, #sendx3').text('Send Money');



  //////////////
  
  
 
  $('#amountx3').text('$');
  $('#qtyvalue2x3').attr('value', userInputx3);


    $('#submit2x3').html('SUBMIT');

    $('#exit2x3').html('EXIT');


    $('#submit2Yx3').html('SUBMIT');

    $('#exit2Yx3').html('EXIT');

  $('.confirm2x3').html('<h2><b>Confirm</b></h2>');
  $('.back2x3').html('<h2><b>Back</b></h2>');

$('.confirm2Yx3').html('<h2><b>Confirm</b></h2>');
  $('.back2Yx3').html('<h2><b>Back</b></h2>');




  $('#casdex3').html('<b> Please Insert your Cash Deposit</b>');

  $('#casde2x3').html('<b> Please Insert your Deposit</b>');


  $('#billsx3').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);

  $('#retrx3').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

  $('#chedex3').html('<b> Please Insert your Check Deposit now</b>');

  $('#cancelx3').text('(Tap to Cancel)');
  $('#cancel2x3').text('(Tap to Cancel)');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
  $('#sfcaCancelx3').text('( Tap to Close)');

  $('#sfsax3').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
  $('#sfsaCancelx3').text('( Tap to Close)');



    $('#gbyx3').html('<b>Good Bye</b>');
    $('#nrepx3').text('Need a Receipt');
    $('#receiptYesx3').text('YES');
    $('#receiptNox3').text('NO');
    $('#exBackx3').html('<b>Go Back</b>'); 


     $('#stcx3').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
     $('#stcXx3').text('( Tap to Close)');

   $('#ctsx3').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
   $('#ctsXx3').text('Tap to Close');


     $('#oopsx3').html('<h1><b>Oops</b></h1>');



  $('#machinex3').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

  $('#limitx3').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


console.log('A Language Button clicked');
});




$('#spanish2x3').click(function(){

  userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);

$('#cash2x3').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

  $('#withdraw2x3').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
  $('#checks2x3').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
  ///////////////

  $('#checking33').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
  $('#saving33').html('AHORROS <br><span>Balance: $1,200.00</span>');


  $('#deposx3, #deposx32x3').html('<input type="radio" name="lan">Depositar');
  $('#wdraw1x3, #wdraw2x3').html('<input type="radio" name="lan">Retirar');
  $('#transferx3, #trans2x3').html('<input type="radio" name="lan">Transferir');
  $('#sendx, #sendx3').text('Enviar Dinero');







  //////////////
  



 
  $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);

  
  

  $('#submit2x3').html('SOMETER');

  $('#exit2x3').html('SALIR');


  $('#submit2Yx3').html('SOMETER');

  $('#exit2Yx3').html('SALIR');

  $('.confirm2x3').html('<h2><b>Confirmar</b></h2>');
  $('.back2x3').html('<h2><b>Atras</b></h2>');

  $('.confirm2Yx3').html('<h2><b>Confirmar</b></h2>');
  $('.back2Yx3').html('<h2><b>Atras</b></h2>');


  $('#casdex3').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

  $('#casde2x3').html('<b> Favor Inserte su Deposito Ahora</b>');



 
  $('#billsx3').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);


 $('#retrx3').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

 $('#chedex3').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

 $('#cancelx3').text('(Toque para Cerrar)');
 $('#cancel2x3').text('(Toque para Cancelar)');


$('#sfcax3').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
$('#sfcaCancelx3').text('( Toca para cerrar )');

  $('#sfsax3').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
  $('#sfsaCancelx3').text('( Toca para cerrar)');



    $('#gbyx3').html('<b>Hasta Luego</b>');
    $('#nrepx3').text('Necesita Recibo?');
    $('#receiptYesx3').text('SI');
    $('#receiptNox3').text('NO');
    $('#exBackx3').html('<b>Volver Atras</b>'); 


  $('#stcx3').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
  $('#stcXx3').text('( Toca para cerrar)');

   $('#ctsx3').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
   $('#ctsXx3').text('Toca para cerrar');

  $('#oopsx3').html('<h1><b>Ohoh</b></h1>'); 



  $('#machinex3').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

  $('#limitx3').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


console.log('A Language Button clicked');


  });






$('#chinesse2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);
$('#cash2x3').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

  $('#withdraw2x3').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
  $('#checks2x3').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

  $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



    ///////////////

  $('#checking33').html('檢查 <br><span>天平: $2,200.00</span>');
  $('#saving33').html(' 儲蓄<br><span>天平: $1,200.00</span>');


  $('#deposx3, #deposx32x3').html('<input type="radio" name="lan">存入現金');
  $('#wdraw1x3, #wdraw2x3').html('<input type="radio" name="lan"> 刪除');
  $('#transferx3, #trans2x3').html('<input type="radio" name="lan">刪除');
  $('#sendx, #sendx3').text('刪現金');



  //////////////


console.log('A Language Button clicked');

  
 
  $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);
  

  $('#submit2x3').html('提交');

  $('#exit2x3').html('取消');

  $('#submit2Yx3').html('提交');

  $('#exit2Yx3').html('取消');


  $('.confirm2x3').html('<h2><b>確認</b></h2>');
  $('.back2x3').html('<h2><b>返回</b></h2>');

  $('.confirm2Yx3').html('<h2><b>確認</b></h2>');
  $('.back2Yx3').html('<h2><b>返回</b></h2>');



  $('#casdex3').html('<b> 請插入您的現金存款</b>');

  $('#casde2x3').html('<b> 請插入您的現金存款</b>');


  
  $('#billsx3').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);

  $('#retrx3').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

  $('#chedex3').html('<b> 租賃現在插入您的支票存款</b>');

  $('#cancelx3').text('（點擊取消）');
  $('#cancel2x3').text('（點擊取消）');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
  $('#sfcaCancelx3').text('（點擊關閉）');

  $('#sfsax3').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
  $('#sfsaCancelx3').text('（點擊關閉）');



    $('#gbyx3').html('<b>再見</b>');
    $('#nrepx3').text('需要收據？');
    $('#receiptYesx3').text('是的');
    $('#receiptNox3').text('沒有');
    $('#exBackx3').html('<b>回去</b>'); 


     $('#stcx3').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
     $('#stcXx3').text('（點擊關閉）');

   $('#ctsx3').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
   $('#ctsXx3').text('（點擊關閉）');


     $('#oopsx3').html('<h1><b>哎呀</b></h1>');



  $('#machinex3').html('<b> 本機只能發送賬單：</b></h2><br>'); 

  $('#limitx3').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

  });







$('#russian2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);

$('#cash2x3').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

  $('#withdraw2x3').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
  $('#checks2x3').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


 $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
  $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


   ///////////////

  $('#checking33').html('Проверки <br><span>Баланс: $2,200.00</span>');
  $('#saving33').html('Экономия<br><span>Баланс: $1,200.00</span>');


  $('#deposx3, #deposx32').html('<input type="radio" name="lan">денежных');
  $('#wdraw1x3, #wdraw2x3').html('<input type="radio" name="lan">Удалить');
  $('#transferx3, #trans2x3').html('<input type="radio" name="lan">средств');
  $('#sendx, #sendx3').text('денежных');

console.log('A Language Button clicked');

  //////////////
  
  
  $('#amountx3').text('$');
  $('#qtyvalue2x3').attr('value', userInputx3);



  $('#submit2x3').html('Отправить');

  $('#exit2x3').html('Отмена');

  $('#submit2Yx3').html('Отправить');

  $('#exit2Yx3').html('Отмена');



  $('.confirm2x3').html('<h2><b> Подтвердить</b></h2>');
  $('.back2x3').html('<h2><b> Назад</b></h2>');

  $('.confirm2Yx3').html('<h2><b> Подтвердить</b></h2>');
  $('.back2Yx3').html('<h2><b> Назад</b></h2>');


  $('#casdex3').html('<b> Пожалуйста, введите свой денежный депозит </b>');
  $('#casde2x3').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
  $('#billsx3').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);


  $('#retrx3').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

  $('#chedex3').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

  $('#cancelx3').text('(Нажмите, чтобы отменить)');
  $('#cancel2x3').text('(Нажмите, чтобы отменить)');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
  $('#sfcaCancelx3').text('(Нажмите, чтобы закрыть)');

  $('#sfsax3').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
  $('#sfsaCancelx3').text('(Нажмите, чтобы закрыть)');



    $('#gbyx3').html('<b> До свидания</b>');
    $('#nrepx3').text('Нужна квитанция?');
    $('#receiptYesx3').text(' ДА');
    $('#receiptNox3').text(' НЕТ');
    $('#exBackx3').html('<b>Вернуться</b>'); 



     $('#stcx3').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
     $('#stcXx3').text('(Нажмите, чтобы закрыть)');

   $('#ctsx3').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
   $('#ctsXx3').text('(Нажмите, чтобы закрыть)');


     $('#oopsx3').html('<h1><b>К сожалению</b></h1>');



  $('#machinex3').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

  $('#limitx3').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




  });





$('#german2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);
$('#cash2x3').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

  $('#withdraw2x3').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
  $('#checks2x3').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

  $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

  $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);
  
  

  $('#submit2x3').html(' Senden ');

  $('#exit2x3').html(' Abbrechen ');

  $('#submit2Yx3').html(' Senden ');

  $('#exit2Yx3').html(' Abbrechen ');

  $('.confirm2x3').html('<h2><b> Bestätigen</b></h2>');
  $('.back2x3').html('<h2><b> Zurück</b></h2>');


  $('.confirm2Yx3').html('<h2><b> Bestätigen</b></h2>');
  $('.back2Yx3').html('<h2><b> Zurück</b></h2>');




  $('#casdex3').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
  $('#casde2x3').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


  $('#billsx3').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);

$('#retrx3').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

  $('#chedex3').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

  $('#cancelx3').text('(Tippen Sie auf Abbrechen)');
  $('#cancel2x3').text('(Tippen Sie auf Abbrechen)');

 


 $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
  $('#sfcaCancelx3').text('(Tippen Sie auf Schließen)');

  $('#sfsax3').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
  $('#sfsaCancelx3').text('(Tippen Sie auf Schließen)');



    $('#gbyx3').html('<b> Auf Wiedersehen</b>');
    $('#nrepx3').text('Benötigen Sie einen Beleg?');
    $('#receiptYesx3').text(' JA');
    $('#receiptNox3').text(' NEIN');
    $('#exBackx3').html('<b>Zurück</b>'); 





     $('#stcx3').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
     $('#stcXx3').text('(Tippen Sie auf Schließen)');

   $('#ctsx3').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
   $('#ctsXx3').text('(Tippen Sie auf Schließen)');


     $('#oopsx3').html('<h1><b> Hoppla</b></h1>');


  $('#machinex3').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

  $('#limitx3').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


});




$('#hindi2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);
$('#cash2x3').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

  $('#withdraw2x3').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
  $('#checks2x3').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

  $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
  $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);
  
  

  $('#submit2x3').html(' जमा करें ');

  $('#exit2x3').html(' रद्द ');

  $('#submit2Yx3').html(' जमा करें ');

  $('#exit2Yx3').html(' रद्द ');


  $('.confirm2x3').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2x3').html('<h2><b> वापस</b></h2>');

  $('.confirm2Yx3').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Yx3').html('<h2><b> वापस</b></h2>');




  $('#casdex3').html('<b> कृपया अपना नकद जमा डालें</b>');
  $('#casde2x3').html('<b> कृपया अपना नकद जमा डालें</b>');


  $('#billsx3').text('');
  $('#billsx3').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);

  $('#retrx3').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

  $('#chedex3').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



$('#cancelx3').text('(रद्द करने के लिए टैप करें)');
  $('#cancel2x3').text('(रद्द करने के लिए टैप करें)');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
  $('#sfcaCancelx3').text('(बंद करने के लिए टैप करें)');

  $('#sfsax3').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
  $('#sfsaCancelx3').text('(बंद करने के लिए टैप करें)');




    $('#gbyx3').html('<b>अच्छा अलविदा</b>');
    $('#nrepx3').text('रसीद की आवश्यकता है?');
    $('#receiptYesx3').text('हाँ');
    $('#receiptNox3').text('नहीं');
    $('#exBackx3').html('<b> वापस जाओ</b>'); 


     $('#stcx3').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
     $('#stcXx3').text('(बंद करने के लिए टैप करें)');

   $('#ctsx3').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
   $('#ctsXx3').text('(बंद करने के लिए टैप करें)');


     $('#oopsx3').html('<h1><b> ओह्स</b></h1>');



  $('#machinex3').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

  $('#limitx3').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







  });



$('#french2x3').click(function(){
  
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);

$('#cash2x3').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

  $('#withdraw2x3').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
  $('#checks2x3').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

  $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

   $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);
  
  

  $('#submit2x3').html(' Soumettre ');

  $('#exit2x3').html(' Annuler ');

  $('#submit2Yx3').html(' Soumettre ');

  $('#exit2Yx3').html(' Annuler ');


  $('.confirm2x3').html('<h2><b> Confirmer</b></h2>');
  $('.back2x3').html('<h2><b> Retour</b></h2>');

  $('.confirm2Yx3').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Yx3').html('<h2><b> वापस</b></h2>');



  $('#casdex3').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
  $('#casde2x3').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

  $('#billsx3').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);

  $('#retrx3').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

  $('#chedex3').html('<b>  location Insérez votre chèque de caution maintenant</b>');

  $('#cancelx3').text('(Appuyer pour annuler)');
  $('#cancel2x3').text('(Appuyer pour annuler)');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
  $('#sfcaCancelx3').text('(Appuyez pour fermer)');


  $('#sfsax3').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
  $('#sfsaCancelx3').text('(Appuyez pour fermer)');



    $('#gbyx3').html('<b> Au Revoir</b>');
    $('#nrepx3').text("Besoin d'un reçu?");
    $('#receiptYesx3').text(' OUI');
    $('#receiptNox3').text(' NON');
    $('#exBackx3').html('<b> Retour</b>'); 


     $('#stcx3').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
     $('#stcXx3').text('(Appuyer pour fermer)');



   $('#ctsx3').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
   $('#ctsXx3').text('(Appuyez pour fermer)');


     $('#oopsx3').html('<h1><b> Oups</b></h1>');



  $('#machinex3').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

  $('#limitx3').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

  });





$('#arabic2x3').click(function(){
userInputx3 = '0.00';
$('#qtyvalue2x3').attr('value', userInputx3);
$('#cash2x3').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

  $('#withdraw2x3').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
  $('#checks2x3').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

  $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

   $('#amountx3').text('$');
   $('#qtyvalue2x3').attr('value', userInputx3);
  

  $('#submit2x3').html(' إرسال ');
  $('#exit2x3').html(' الغاء ');

  $('#submit2Yx3').html(' إرسال ');
  $('#exit2Yx3').html(' الغاء ');




  $('.confirm2x3').html('<h2><b> تأكيد </b></h2>');
  $('.back2x3').html('<h2><b> العودة</b></h2>');

  $('.confirm2Yx3').html('<h2><b> تأكيد </b></h2>');
  $('.back2Yx3').html('<h2><b> العودة</b></h2>');





  $('#casdex3').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
  $('#casde2x3').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


  $('#billsx3').text(' ');
  $('#billsx3').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
  $('#qtyvalue2x3').attr('value', userInputx3);


  $('#retrx3').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

  $('#chedex3').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

  $('#cancelx3').text('(الحنفية لإلغاء)');
  $('#cancel2x3').text('(الحنفية لإلغاء)');

  $('#sfcax3').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
  $('#sfcaCancelx3').text('(انقر لإغلاق)');


$('#sfsax3').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
  $('#sfsaCancelx3').text('(انقر لإغلاق)');



    $('#gbyx3').html('<b> وداعا</b>');
    $('#nrepx3').text('تحتاج إلى استلام؟');
    $('#receiptYesx3').text(' نعم');
    $('#receiptNox3').text(' لا');
    $('#exBackx3').html('<b> العودة</b>'); 


     $('#stcx3').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
     $('#stcXx3').text('(الحنفية لإغلاق)');



   $('#ctsx3').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
   $('#ctsXx3').text('(الحنفية لإغلاق)');


     $('#oopsx3').html('<h1><b>عفوا</b></h1>');



  $('#machinex3').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

  $('#limitx3').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

console.log('A Language Button clicked');


  });



$('.OperationEndedPanelx3').click(function(){
  
  $(this).fadeOut();

  userInputx3 = '0.00';
  $('#qtyvalue2x3').attr('value', userInputx3);
 
 $('#cheTsav2x3').hide();
 $('#savTche2x3').hide();

  $('#checking33').removeClass('active');
  $('#saving33').removeClass('active');
  $('#deposx3, #deposx32').removeClass('active');
  $('#wdraw1x3, #wdraw2x3').removeClass('active');
  $('#transferx3, #trans2x3').removeClass('active');
  $('#sendx, #sendx3').removeClass('active');
  $('#ServiceMenux3').removeClass('active');

serviceValuex3 = '';   

     $('.pyx3').fadeOut();
     $('.PayButtonsx3 > label').removeClass('active');







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


