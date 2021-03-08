

$(document).ready(function(){




 $('.ServiceMenux9').click(function(){


    $('.serDropx9').show('fast').click(function(){
      $(this).hide('fast');
    });

      userInputx9='0.00';
         $('#qtyvalue2x9').attr('value', userInputx9);
 });


   




  $('#exit2Yx9').click(function(){
  console.log('exitx9Y button was clicked');
   
       $('.goodbyex9').fadeIn('fast');
       $('#receiptYesx9, #receiptNox9').removeClass('active');
       $('.ServicePanelx9').hide();
       serviceValuex9 = '';
         userInputx9='0.00';
         $('#qtyvalue2x9').attr('value', userInputx9);



});


// ///////Show different models///////////


// $('.Model1x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.Serm').show('');
// });



// $('.Model2x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x2').show('');
// });




// $('.Model3x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x9').show('');
// });



// $('.Model5x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x9').click(function(){

//   $('.Modelsx9, .Serm, serm2x2, serm2x3, .serm2x9').hide('');
//   $('.serm2x7').show('');
// });








/////////Service Values////////////
/////////Service Values////////////



$('#Withdraw4x1, #Withdraw4x2, #Withdraw4x3, #Withdraw4x9, #Withdraw4x5, #Withdraw4x6, #Withdraw4x7').click(function(){
   serviceValuex9 = 'Withdraw';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});


$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx9, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx9').click(function(){
   serviceValuex9 = 'Withdraw';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});



$('#Deposit4x1, #Deposit4x2, #Deposit4x3, #Deposit4x9, #Deposit4x5, #Deposit4x6, #Deposit4x7').click(function(){
   serviceValuex9 = 'Deposit';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});



$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x9, #Transfer4x5, #Transfer4x6, #Transfer4x7').click(function(){
   serviceValuex9 = 'Transfer';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});



$('#Sell4x1, #Sell4x2, #Sell4x3, #Sell4x9, #Sell4x5, #Sell4x6, #Sell4x7').click(function(){
   serviceValuex9 = 'Fuels';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});



$('#Buy4x1, #Buy4x2, #Buy4x3, #Buy4x9, #Buy4x5, #Buy4x6, #Buy4x7').click(function(){
   serviceValuex9 = 'Fuels';
   console.log('service value is: ' + serviceValuex9);
   userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);
});




$('.sm2x2').click(function(){

   $('.sm2x2').removeClass('SelectedSm2x2');
   $(this).addClass('SelectedSm2x2');

});


/////////Service Values////////////
/////////Service Values////////////











// ///////Show different models///////////
// ///////Show different models///////////





serm = "Simple";

$('.Model1x9').click(function(){

  $('.SermCompletex9, #SubmitGasOrderx9').hide('');
  $('.SermSimplex9, #ScanPumpOnex9').show('');
  serm = "Simple";
});



$('.Model2x9').click(function(){

  $('.SermSimplex9, #ScanPumpOnex9').hide('');
  $('.SermCompletex9, #SubmitGasOrderx9').show('');
  serm = "Complete";
});








$('#GasStationsx9').click(function(){

$('.SermSimplex9, .SermCompletex9, .qty2x9, .fin2x9, .GasBuyNotificationsx9').hide();
$('.GasStationMapx9').fadeIn();
    console.log('Serm = ' + serm);

});


////Buy gas

$('#BuyGasx9').click(function(){

$('.GasStationMapx9, .GasBuyNotificationsx9').hide();
$('.SermSimplex9, .qty2x9, .fin2x9').show();

  if (serm === 'Simple'){
  $('.SermCompletex9').hide();
  $('.SermSimplex9').show();
  }
  if (serm === "Complete"){
  $('.SermSimplex9').hide();
  $('.SermCompletex9').show();
  }

    console.log('Serm = ' + serm)
});




////notifications

$('#GasNotix9').click(function(){

$('.GasStationMapx9, .SermSimplex9, .SermCompletex9, .qty2x9, .fin2x9').hide();
$('.GasBuyNotificationsx9').show();
    console.log('Serm = ' + serm);

});









// $('.Model3x9').click(function(){

//   $('.Modelsx9').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x9').click(function(){

//   $('.Modelsx9').hide('');
//   $('.serm2x9').show('');
// });



// $('.Model5x9').click(function(){

//   $('.Modelsx9').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x9').click(function(){

//   $('.Modelsx9').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x9').click(function(){

//   $('.Modelsx9').hide('');
//   $('.serm2x7').show('');
// });



// ///////Show different models///////////


  $('#receiptYesx9, #receiptNox9').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x9, .sendMoney2x9, .CreditCardsx9, .assistancex9, .Loanx9').hide();
             $('#billDenox9 ,#noBillDenox9').removeClass('active');

       
             $('.confBack2Yx9').hide();
             $('.billsx9').hide();
             $('.numVx9, #amountx9, #qtyvalue2x9').show();
             $('#submit2Yx9, #exit2Yx9').show();
             $('#wdraw1x9, #wdraw2x9, #transferx9, #trans2x9').removeClass('hili');

                  $('.goodbyex9').hide();
                     serviceValuex9='';
                     tofValuex9='waived';
                     userInputx9='0.00';
                  $('#qtyvalue2x9').attr('value', userInputx9);
       
                   $('#cheTsavx9, #cheTsav2x9').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x9').hide().fadeIn('10000');

      });


    


    $('.back24x9, .confirm24x9').click(function(){
      $('.confBack24x9').hide();





});   








$('.TapBx9').click(function(){

  $('.goodbyex9').fadeOut('fast');
});





// /////////Headers///////////////////


$('#atmHomex9, #ATM1Machinex9').click(function(){

$('.OtherHeaderx9').hide();


});





$('#MyFinancesx9').click(function(){
$('.HeaderPx9').hide();
$('.OtherHeaderx9, .MyFinancesx9').show();



});



$('#atmNotix9').click(function(){
$('.HeaderPx9').hide();
$('.OtherHeaderx9, .Notificationsx9').show();



});



$('#atmSetx9').click(function(){
$('.HeaderPx9').hide();
$('.OtherHeaderx9, .Settingsx9').show();


});



// ///////////////////


datex9= '';

$('#CreditCx9, #PayBx9, #sendx9, #loanx9').click(function(){
$('.Schedulex9').show();
$('.Schedulex9 > #datepicker').attr('value', datex9);

});


$('#closeSer2Panelsx9, .Confirm2Yx9, .exit2Yx9').click(function(){

$('.ServicePanelx9').hide();
$('.Schedulex9 > #datepicker').attr('value', datex9);
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











tofValuex9 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex9='';
tofValuex9='waived';
billDenox9= false;


//stores user inputs






$('.NumPadx9').click(function(){

if(userInputx9 === '0.00'){

   userInputx9 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});


$('.NumPadx9').click(function(){

if(userInputx9 === '0'){

   userInputx9 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});




















//////////////////////////////////////////////////////////////////////////







$('.QtyValueCoverx9').click(function(){
$('.NumPadx9').hide();
$('.numVx9').show();


});











////////////////////////////////////////////////////////////////////////////







var userInputx9='';





 $('.numVx9').click(function(){
   userInputx9 += $(this).attr("value");

   $('#qtyvalue2x9, .qtyvalueGasx9').attr('value', userInputx9);
    console.log('A numV was clicked');

 
    });






//backspace button
    $('#backSpacex9').click(function(){

    var getInputx9 = userInputx9;
    var lenx9 = getInputx9.length -1;
    var newInputx9 = getInputx9.substring(0, lenx9);

    userInputx9 = newInputx9;
    $('#qtyvalue2x9, .qtyvalueGasx9').attr('value', userInputx9);  
    console.log('New input is : ' + userInputx9);

});







// //////////////////////////////////////////////////////////////////////





//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx9, #qtyvalue2x9').click(function(){
  $('.numRx9, .numCCx9').hide();
  $('.numVx9').show();
});




















// ///////////Bill DenoMination Official x9///////////
///////////////////Pay Your Bills/////////////






  $('#BILLDEx9').click(function(){

    serviceValuex9="Withdraw";

    $('#cheTsavx9').hide();
    $('#savTchex9').hide();
    // $('#qtyvalue2x9, #qtyvalueDenox9').hide();
    // $('#qtyvalueBillDenomix9').show();
    $('.BillDenominationWdrawx9').fadeIn('fast');
    
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);

    console.log("Service value x9 is = " + serviceValuex9);
    console.log("qtyvalue = Deno" );







  tofValuex9 = 'waived';
  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);
  $('.CreditBillDenomisx9').fadeIn('slow');



  BillDenomi1Imputx9=0;
  BillDenomi2Imputx9=0;
  BillDenomi3Imputx9=0;
  BillDenomi4Imputx9=0;
  BillDenomi5Imputx9=0;
  BillDenomi6Imputx9=0;





});








// /////////////////////////////////
  var SelectedBillx9=""


  $('.BillDenomix9').click(function(){
    SelectedBillx9 = $(this).attr('value');
    console.log('Current Selected Bill x9 is : ' + SelectedBillx9);




// DenoImputTotalx9 = DenoImput10x9 + DenoImput20x9 + DenoImput50x9 + DenoImput100x9;
console.log('BillDenomi total is ' + userInputx9);

$('.pyx9').hide();
$('.PayButtonsx9 > label').removeClass('active');
$('.confBack2Yx9').hide();
$('#submit2Yx9, #exit2Yx9').show();


});



  // BillDenomi1Imputx9='';
  // BillDenomi2Imputx9='';
  // BillDenomi3Imputx9='';
  // BillDenomi4Imputx9='';







/////////////////////



$('#BillDenomi1x9').click(function(){

console.log('BillDenomi 1 x9 was selected');

 BillDenomi1Imputx9 = 0;
 $('#BillDenomi1ImputLabelx9 > input').attr('value', BillDenomi1Imputx9);

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

  
  


   $('#BillDenomi1Imputx9, #BillDenomi1ImputLabelx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numBillDenomi1x9').show();



  console.log(BillDenomi1Imputx9 + BillDenomi2Imputx9 + BillDenomi3Imputx9 + BillDenomi4Imputx9 + BillDenomi5Imputx9);



});


// /////////


$('.numBillDenomi1x9').click(function(){

  if (BillDenomi1Imputx9 === 0 ){
    BillDenomi1Imputx9 = '';
  }
});


//////////





 $('.numBillDenomi1x9').click(function(){

          BillDenomi1Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi1ImputLabelx9 > input').attr('value', BillDenomi1Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi1Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi1Imputx9);
           
userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceBillDenomi1x9').click(function(){

           var getInput = BillDenomi1Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi1Imputx9 = newInput;
            $('#BillDenomi1ImputLabelx9 > input').attr('value', BillDenomi1Imputx9);
     
           console.log('New input is : ' + BillDenomi1Imputx9);

           console.log('back space was clicked' );
            
userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);




       });









//////////////////

// ///////////////




$('#BillDenomi2x9').click(function(){

 BillDenomi2Imputx9 =  0;
 $('#BillDenomi2ImputLabelx9 > input').attr('value', BillDenomi2Imputx9);



  


   $('#BillDenomi2Imputx9, #BillDenomi2ImputLabelx9').css('color','green');


 $('.NumPadx9').hide();
  $('.numBillDenomi2x9').show();


  console.log(BillDenomi2Imputx9 + BillDenomi2Imputx9 + BillDenomi2Imputx9 + BillDenomi4Imputx9 + BillDenomi5Imputx9);



userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



});



// /////////


$('.numBillDenomi2x9').click(function(){

  if (BillDenomi2Imputx9 === 0 ){
    BillDenomi2Imputx9 = '';
  }
});


//////////




 $('.numBillDenomi2x9').click(function(){

          BillDenomi2Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi2ImputLabelx9 > input').attr('value', BillDenomi2Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi2Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi2Imputx9);
           

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceBillDenomi2x9').click(function(){

           var getInput = BillDenomi2Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi2Imputx9 = newInput;
            $('#BillDenomi2ImputLabelx9 > input').attr('value', BillDenomi2Imputx9);
     
           console.log('New input is : ' + BillDenomi2Imputx9)
            

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });








// //////////////////






// ///////////////




$('#BillDenomi3x9').click(function(){

 BillDenomi3Imputx9 =  0;
 $('#BillDenomi3ImputLabelx9 > input').attr('value', BillDenomi3Imputx9);



  


   $('#BillDenomi3Imputx9, #BillDenomi3ImputLabelx9').css('color','green');


 $('.NumPadx9').hide();
  $('.numBillDenomi3x9').show();


  console.log(BillDenomi3Imputx9 + BillDenomi3Imputx9 + BillDenomi3Imputx9 + BillDenomi4Imputx9 + BillDenomi5Imputx9);



userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



});



// /////////


$('.numBillDenomi3x9').click(function(){

  if (BillDenomi3Imputx9 === 0 ){
    BillDenomi3Imputx9 = '';
  }
});


//////////




 $('.numBillDenomi3x9').click(function(){

          BillDenomi3Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi3ImputLabelx9 > input').attr('value', BillDenomi3Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi3Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi3Imputx9);
           

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceBillDenomi3x9').click(function(){

           var getInput = BillDenomi3Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi3Imputx9 = newInput;
            $('#BillDenomi3ImputLabelx9 > input').attr('value', BillDenomi3Imputx9);
     
           console.log('New input is : ' + BillDenomi3Imputx9)
            

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });








// //////////////////




$('#BillDenomi4x9').click(function(){

 BillDenomi4Imputx9 = 0;
 $('#BillDenomi4ImputLabelx9 > input').attr('value', BillDenomi4Imputx9);





   $('#BillDenomi4Imputx9, #BillDenomi4ImputLabelx9').css('color','green');


  $('.NumPadx9').hide();

  $('.numBillDenomi4x9').show();



  console.log(BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi5Imputx9);


userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});



// /////////


$('.numBillDenomi4x9').click(function(){

  if (BillDenomi4Imputx9 === 0 ){
    BillDenomi4Imputx9 = '';
  }
});


//////////





 $('.numBillDenomi4x9').click(function(){

          BillDenomi4Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi4ImputLabelx9 > input').attr('value', BillDenomi4Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi4Imputx9 + BillDenomi5Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi4Imputx9);
           
userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpaceBillDenomi4x9').click(function(){

           var getInput = BillDenomi4Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi4Imputx9 = newInput;
            $('#BillDenomi4ImputLabelx9 > input').attr('value', BillDenomi4Imputx9);
     
           console.log('New input is : ' + BillDenomi4Imputx9);
            

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });






$('#BillDenomi5x9').click(function(){

 BillDenomi5Imputx9 =  0;
 $('#BillDenomi5ImputLabelx9 > input').attr('value', BillDenomi5Imputx9);





   $('#BillDenomi5Imputx9, #BillDenomi5ImputLabelx9').css('color','green');


  $('.NumPadx9').hide();
  $('.numBillDenomi5x9').show();



  console.log(BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi5Imputx9);


userInputx9 = userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});


// /////////


$('.numBillDenomi5x9').click(function(){

  if (BillDenomi5Imputx9 === 0 ){
    BillDenomi5Imputx9 = '';
  }
});


//////////





 $('.numBillDenomi5x9').click(function(){

          BillDenomi5Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi5ImputLabelx9 > input').attr('value', BillDenomi5Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi5Imputx9 + BillDenomi5Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi5Imputx9);
           
userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpaceBillDenomi5x9').click(function(){

           var getInput = BillDenomi5Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi5Imputx9 = newInput;
            $('#BillDenomi5ImputLabelx9 > input').attr('value', BillDenomi5Imputx9);
     
           console.log('New input is : ' + BillDenomi5Imputx9)
            

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });




// ///////////////////////////




$('#BillDenomi6x9').click(function(){
 BillDenomi6Imputx9 =  0;
 $('#BillDenomi6ImputLabelx9 > input').attr('value', BillDenomi6Imputx9);






   $('#BillDenomi6Imputx9, #BillDenomi6ImputLabelx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numBillDenomi6x9').show();



  console.log(BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi4Imputx9 + BillDenomi6Imputx9);


userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});




// /////////


$('.numBillDenomi6x9').click(function(){

  if (BillDenomi6Imputx9 === 0 ){
    BillDenomi6Imputx9 = '';
  }
});


//////////




 $('.numBillDenomi6x9').click(function(){

          BillDenomi6Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#BillDenomi6ImputLabelx9 > input').attr('value', BillDenomi6Imputx9);

           console.log("current BillDenomi 1 imput x9 number is :" + BillDenomi6Imputx9 + BillDenomi6Imputx9);
           console.log('New BillDenomi 1 imput x9 is : ' + BillDenomi6Imputx9);
           
userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpaceBillDenomi6x9').click(function(){

           var getInput = BillDenomi6Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi6Imputx9 = newInput;
            $('#BillDenomi6ImputLabelx9 > input').attr('value', BillDenomi6Imputx9);
     
           console.log('New input is : ' + BillDenomi6Imputx9)
            

userInputx9 = parseInt(BillDenomi1Imputx9)+ parseInt(BillDenomi6Imputx9) + parseInt(BillDenomi2Imputx9) + parseInt(BillDenomi3Imputx9) + parseInt(BillDenomi4Imputx9) + parseInt(BillDenomi5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });





// });////End of BillDenomi Payment/////////////*********************************



// });////End of billtype click/////////////*********************************









/////////// /Close Button for service pannels////////////////////




//

$('#closeSer2Panelsx9, .closeSer2Panelsx9').click(function(){

$('.DenominatedBillsx9').removeClass('active');


     $('.pyx9').hide();
     $('.PayButtonsx9 > label').removeClass('active');

$('.ScanOrGiftx9, .SelectBuyOrSellx9').hide();

  $('#cheTsav2x9, #savTche2x9').hide();
  $('.confBack2Yx9').hide();
  $('#submit2Yx9, #exit2Yx9').show(); 

$('.ServicePanelx9').fadeOut();

  $('.NumPadx9').hide();
  $('.numVx9').show();




   $('#qtyvalueDenox9, #qtyvalueCardx9, #qtyvalueQPayx9').hide();

         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);

         $('#qtyvalue2x9').show();


         $('#DenoImput10Labelx9 > input').attr('value','0');
         $('#DenoImput20Labelx9 > input').attr('value','0');
         $('#DenoImput50Labelx9 > input').attr('value','0');
         $('#DenoImput100Labelx9 > input').attr('value', '0');

          DenoImput10x9='';
          DenoImput20x9='';
          DenoImput50x9='';
          DenoImput100x9='';

  $('.SelectSendOrRequestx9').hide();
  $('#SubmitGasOrderx9').show();



  
 



});








// ////////////////////





$('#sendx, #sendx9').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x9').fadeIn('fast');
  $('#cheTsav2x9, #savTche2x9').fadeOut();
 serviceValuex9 ='WireTransfer';
 tofValuex9 = "waived";
 console.log('tofValue is :' + tofValuex9);
 console.log('serviceValue is: ' + serviceValuex9);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx9').hide();
    $('#savTchex9').hide();
   serviceValuex9 =$(this).attr('value');
   $('#labelATMx9').text('Pay Bill & Tickets');
   $('#routingx9').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x9').fadeIn('fast');
 serviceValuex9=$(this).attr('value');
 tofValuex9="send";
 console.log('tofValue is :' + tofValuex9);
 console.log('serviceValue is: ' + serviceValuex9);



});








$('#cash2x9, #wdraw1x9, #wdraw2x9, #checks2x9, #CreditCx9, #Loanx9, #Livex9, #QuickPayx9, .sendFromCheckingsx9').click(function(){
  
// $('.sm2x9, .serB').click(function(){
  $('#savTchex9, #cheTsavx9').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1x9, #wdraw2x9').click(function(){
  
// $('.sm2x9, .serB').click(function(){
  $('#savTche2x9, #cheTsav2x9').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
  console.log('wdraw was clicked');
});






$('#checking2x9, #saving2x9').click(function(){
   tofValuex9= $(this).attr('value');
   console.log('tofValue is :' + tofValuex9);
   console.log('serviceValue is: ' + serviceValuex9);


});


   
  
  $('#Livex9').click(function(){
    $('#cheTsavx9').hide();
    $('#savTchex9').hide();

    $('.assistancex9').fadeIn('fast');

  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan/////////////////////////



// $('#Loanx9').click(function(){
//   serviceValuex9="Loan";
//   tofValuex9='waived';
//   console.log("#Loan has been clicked");
//   console.log("Service value is =" + serviceValuex9);
//    console.log("tofvalue is =" + tofValuex9);



//   $('.Loanx9').fadeIn('slow');

//   });


 $('.LoanGrantedx9').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex9').click(function(){
    $('#cheTsavx9x9').hide();
    $('#savTchex9x9').hide();

    $('.assistancex9').fadeIn('fast');

  });
 





/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx9').click(function(){

    serviceValuex9="CreditCards";

    $('#cheTsavx9').hide();
    $('#savTchex9').hide();
    // $('#qtyvalue2x9, #qtyvalueDenox9').hide();
    // $('#qtyvalueCardx9').show();
    $('.CreditCardsx9').fadeIn('fast');
    
         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);


    console.log("Service value x9 is = " + serviceValuex9);
    console.log("qtyvalue = Deno" );







serviceValuex9 = $(this).attr('value');
  tofValuex9 = 'waived';
  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);
  $('.CreditCardsx9').fadeIn('slow');



  Card1Imputx9= 0;
  Card2Imputx9= 0;
  Card3Imputx9= 0;
  Card4Imputx9= 0;





});





SelectedCardx9 = '';



$('.Cardx9').click(function(){
SelectedCardx9 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx9);

});




      $('#happyCardx9').attr('value', SelectedCardx9);
      $('#cardPaymentAmountx9').attr('value', userInputx9);







$('.CardStatementx9').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx9').fadeIn('slow');
});




$('.Cardx9').dblclick(function(){

  $('.CreditCardsx9').fadeOut(1500);
  $('#CardNamex9').attr('value', SelectedCardx9);
$('.CardStatementx9').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx9=""


  $('.Cardx9').click(function(){
    CardNumberx9 = $(this).attr('value');
    console.log('Current Card x9 is : ' + CardNumberx9);




// DenoImputTotalx9 = DenoImput10x9 + DenoImput20x9 + DenoImput50x9 + DenoImput100x9;
console.log('Card total is ' + userInputx9);




});





/////////////////////



$('#card1x9').click(function(){

console.log('Card 1 x9 was selected');
 Card1Imputx9 = 0;
 $('#Card1ImputLabelx9 > input').attr('value', Card1Imputx9);

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

  
  


   $('#Card1Imputx9, #Card1ImputLabelx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numCard1x9').show();



  console.log(Card1Imputx9 + Card2Imputx9 + Card3Imputx9 + Card4Imputx9);



});


$('.numCard1x9').click(function(){

  if (Card1Imputx9 === 0 ){
    Card1Imputx9 = '';
  }
});



 $('.numCard1x9').click(function(){

          Card1Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#Card1ImputLabelx9 > input').attr('value', Card1Imputx9);

           console.log("current Card 1 imput x9 number is :" + Card1Imputx9);
           console.log('New Card 1 imput x9 is : ' + Card1Imputx9);
           
userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceCard1x9').click(function(){

           var getInput = Card1Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx9 = newInput;
            $('#Card1ImputLabelx9 > input').attr('value', Card1Imputx9);
     
           console.log('New input is : ' + Card1Imputx9);
            
userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);




       });









//////////////////



$('#card2x9').click(function(){

  console.log('Card2 x9 was selected');

 Card2Imputx9 = 0;
 $('#Card2ImputLabelx9 > input').attr('value', Card2Imputx9);
   

   $('#Card2Imputx9, #Card2ImputLabelx9').css('color','green');


    $('.NumPadx9').hide();
   $('.numCard2x9').show();



  console.log(Card2Imputx9 + Card2Imputx9 + Card3Imputx9 + Card4Imputx9);


userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);


});




$('.numCard2x9').click(function(){

  if (Card2Imputx9 === 0 ){
    Card2Imputx9 = '';
  }
});






 $('.numCard2x9').click(function(){

          Card2Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#Card2ImputLabelx9 > input').attr('value', Card2Imputx9);

           console.log("current Card 1 imput x9 number is :" + Card2Imputx9);
           console.log('New Card 1 imput x9 is : ' + Card2Imputx9);
           

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceCard2x9').click(function(){

           var getInput = Card2Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx9 = newInput;
            $('#Card2ImputLabelx9 > input').attr('value', Card2Imputx9);
     
           console.log('New input is : ' + Card2Imputx9)
            
userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);




       });








// ///////////////




$('#card3x9').click(function(){
 Card3Imputx9 = 0;
 $('#Card3ImputLabelx9 > input').attr('value', Card3Imputx9);




  


   $('#Card3Imputx9, #Card3ImputLabelx9').css('color','green');


    $('.NumPadx9').hide();
   $('.numCard3x9').show();


  console.log(Card3Imputx9 + Card3Imputx9 + Card3Imputx9 + Card4Imputx9);



userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);



});


// /////////


$('.numCard3x9').click(function(){

  if (Card3Imputx9 === 0 ){
    Card3Imputx9 = '';
  }
});


//////////




 $('.numCard3x9').click(function(){

          Card3Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#Card3ImputLabelx9 > input').attr('value', Card3Imputx9);

           console.log("current Card 1 imput x9 number is :" + Card3Imputx9);
           console.log('New Card 1 imput x9 is : ' + Card3Imputx9);
           

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceCard3x9').click(function(){

           var getInput = Card3Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx9 = newInput;
            $('#Card3ImputLabelx9 > input').attr('value', Card3Imputx9);
     
           console.log('New input is : ' + Card3Imputx9)
            

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);



       });








// //////////////////




$('#card4x9').click(function(){
 Card4Imputx9 = 0;
 $('#Card4ImputLabelx9 > input').attr('value', Card4Imputx9);






   $('#Card4Imputx9, #Card4ImputLabelx9').css('color','green');


    $('.NumPadx9').hide();
   $('.numCard4x9').show();



  console.log(Card4Imputx9 + Card4Imputx9 + Card4Imputx9 + Card4Imputx9);

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);

});




// /////////


$('.numCard4x9').click(function(){

  if (Card4Imputx9 === 0 ){
    Card4Imputx9 = '';
  }
});


//////////




 $('.numCard4x9').click(function(){

          Card4Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#Card4ImputLabelx9 > input').attr('value', Card4Imputx9);

           console.log("current Card 1 imput x9 number is :" + Card4Imputx9);
           console.log('New Card 1 imput x9 is : ' + Card4Imputx9);
           
userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpaceCard4x9').click(function(){

           var getInput = Card4Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx9 = newInput;
            $('#Card4ImputLabelx9 > input').attr('value', Card4Imputx9);
     
           console.log('New input is : ' + Card4Imputx9)
            

userInputx9 = parseInt(Card1Imputx9) + parseInt(Card2Imputx9) + parseInt(Card3Imputx9) + parseInt(Card4Imputx9);

$('#qtyvalue2x9').attr('value', userInputx9);



       });









// });////End of Card Payment/////////////*********************************








///////////////////Pay Your Bills/////////////






  $('#PayBx9').click(function(){

    serviceValuex9="PayYourBills";

    $('#cheTsavx9').hide();
    $('#savTchex9').hide();
    // $('#qtyvalue2x9, #qtyvalueDenox9').hide();
    // $('#qtyvaluePBillx9').show();
    $('.PayBillsx9').fadeIn('fast');
    
        
         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);


    console.log("Service value x9 is = " + serviceValuex9);
    console.log("qtyvalue = Deno" );







serviceValuex9 = $(this).attr('value');
  tofValuex9 = 'waived';
  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);
  $('.CreditPBillsx9').fadeIn('slow');



  PBill1Imputx9=0;
  PBill2Imputx9=0;
  PBill3Imputx9=0;
  PBill4Imputx9=0;
  PBill5Imputx9=0;
  PBill6Imputx9=0;





});








// /////////////////////////////////
  var SelectedBillx9=""


  $('.PBillx9').click(function(){
    SelectedBillx9 = $(this).attr('value');
    console.log('Current Selected Bill x9 is : ' + SelectedBillx9);




// DenoImputTotalx9 = DenoImput10x9 + DenoImput20x9 + DenoImput50x9 + DenoImput100x9;
console.log('PBill total is ' + userInputx9);

$('.pyx9').hide();
$('.PayButtonsx9 > label').removeClass('active');
$('.confBack2Yx9').hide();
$('#submit2Yx9, #exit2Yx9').show();


});





/////////////////////



$('#PBill1x9').click(function(){

console.log('PBill 1 x9 was selected');

 PBill1Imputx9 =  $(this).attr('value');
 $('#PBill1ImputLabelx9 > input').attr('value', PBill1Imputx9);

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

  
  


   $('#PBill1Imputx9, #PBill1ImputLabelx9').css('color','green');


   $('.NumPadx9').hide();
    $('.numPBill1x9').show();



  console.log(PBill1Imputx9 + PBill2Imputx9 + PBill3Imputx9 + PBill4Imputx9 + PBill5Imputx9);



});


// /////////


$('.numPBill1x9').click(function(){

  if (PBill1Imputx9 === 0 ){
    PBill1Imputx9 = '';
  }
});


//////////





 $('.numPBill1x9').click(function(){

          PBill1Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill1ImputLabelx9 > input').attr('value', PBill1Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill1Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill1Imputx9);
           
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpacePBill1x9').click(function(){

           var getInput = PBill1Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx9 = newInput;
            $('#PBill1ImputLabelx9 > input').attr('value', PBill1Imputx9);
     
           console.log('New input is : ' + PBill1Imputx9);

           console.log('back space was clicked' );
            
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);




       });









//////////////////



$('#PBill2x9').click(function(){

  console.log('PBill2 x9 was selected');

 PBill2Imputx9 =  $(this).attr('value');
 $('#PBill2ImputLabelx9 > input').attr('value', PBill2Imputx9);


   $('#PBill2Imputx9, #PBill2ImputLabelx9').css('color','green');


  $('.NumPadx9').hide();
  $('.numPBill2x9').show();



  console.log(PBill2Imputx9 + PBill2Imputx9 + PBill3Imputx9 + PBill4Imputx9 + PBill5Imputx9);


userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);


});




// /////////


$('.numPBill2x9').click(function(){

  if (PBill2Imputx9 === 0 ){
    PBill2Imputx9 = '';
  }
});


//////////





 $('.numPBill2x9').click(function(){

          PBill2Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill2ImputLabelx9 > input').attr('value', PBill2Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill2Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill2Imputx9);
           

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpacePBill2x9').click(function(){

           var getInput = PBill2Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx9 = newInput;
            $('#PBill2ImputLabelx9 > input').attr('value', PBill2Imputx9);
     
           console.log('New input is : ' + PBill2Imputx9)
            
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);




       });








// ///////////////




$('#PBill3x9').click(function(){

 PBill3Imputx9 =  $(this).attr('value');
 $('#PBill3ImputLabelx9 > input').attr('value', PBill3Imputx9);



  


   $('#PBill3Imputx9, #PBill3ImputLabelx9').css('color','green');


 $('.NumPadx9').hide();
  $('.numPBill3x9').show();


  console.log(PBill3Imputx9 + PBill3Imputx9 + PBill3Imputx9 + PBill4Imputx9 + PBill5Imputx9);



userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



});



// /////////


$('.numPBill3x9').click(function(){

  if (PBill3Imputx9 === 0 ){
    PBill3Imputx9 = '';
  }
});


//////////




 $('.numPBill3x9').click(function(){

          PBill3Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill3ImputLabelx9 > input').attr('value', PBill3Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill3Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill3Imputx9);
           

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpacePBill3x9').click(function(){

           var getInput = PBill3Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx9 = newInput;
            $('#PBill3ImputLabelx9 > input').attr('value', PBill3Imputx9);
     
           console.log('New input is : ' + PBill3Imputx9)
            

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });








// //////////////////




$('#PBill4x9').click(function(){

 PBill4Imputx9 =  $(this).attr('value');
 $('#PBill4ImputLabelx9 > input').attr('value', PBill4Imputx9);





   $('#PBill4Imputx9, #PBill4ImputLabelx9').css('color','green');


  $('.NumPadx9').hide();

  $('.numPBill4x9').show();



  console.log(PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill5Imputx9);


userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});



// /////////


$('.numPBill4x9').click(function(){

  if (PBill4Imputx9 === 0 ){
    PBill4Imputx9 = '';
  }
});


//////////





 $('.numPBill4x9').click(function(){

          PBill4Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill4ImputLabelx9 > input').attr('value', PBill4Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill4Imputx9 + PBill5Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill4Imputx9);
           
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpacePBill4x9').click(function(){

           var getInput = PBill4Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx9 = newInput;
            $('#PBill4ImputLabelx9 > input').attr('value', PBill4Imputx9);
     
           console.log('New input is : ' + PBill4Imputx9)
            

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });






$('#PBill5x9').click(function(){

 PBill5Imputx9 =  $(this).attr('value');
 $('#PBill5ImputLabelx9 > input').attr('value', PBill5Imputx9);





   $('#PBill5Imputx9, #PBill5ImputLabelx9').css('color','green');


  $('.NumPadx9').hide();
  $('.numPBill5x9').show();



  console.log(PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill5Imputx9);


userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});


// /////////


$('.numPBill5x9').click(function(){

  if (PBill5Imputx9 === 0 ){
    PBill5Imputx9 = '';
  }
});


//////////





 $('.numPBill5x9').click(function(){

          PBill5Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill5ImputLabelx9 > input').attr('value', PBill5Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill5Imputx9 + PBill5Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill5Imputx9);
           
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpacePBill5x9').click(function(){

           var getInput = PBill5Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx9 = newInput;
            $('#PBill5ImputLabelx9 > input').attr('value', PBill5Imputx9);
     
           console.log('New input is : ' + PBill5Imputx9)
            

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });




// ///////////////////////////




$('#PBill6x9').click(function(){
 PBill6Imputx9 =  $(this).attr('value');
 $('#PBill6ImputLabelx9 > input').attr('value', PBill6Imputx9);






   $('#PBill6Imputx9, #PBill6ImputLabelx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numPBill6x9').show();



  console.log(PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill4Imputx9 + PBill6Imputx9);


userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);

});




// /////////


$('.numPBill6x9').click(function(){

  if (PBill6Imputx9 === 0 ){
    PBill6Imputx9 = '';
  }
});


//////////




 $('.numPBill6x9').click(function(){

          PBill6Imputx9 += $(this).attr("value");
          // $('#DenoImput10x9').attr('value', DenoImput10x9);


          $('#PBill6ImputLabelx9 > input').attr('value', PBill6Imputx9);

           console.log("current PBill 1 imput x9 number is :" + PBill6Imputx9 + PBill6Imputx9);
           console.log('New PBill 1 imput x9 is : ' + PBill6Imputx9);
           
userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



        
           });




       //backspace button
           $('#backSpacePBill6x9').click(function(){

           var getInput = PBill6Imputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx9 = newInput;
            $('#PBill6ImputLabelx9 > input').attr('value', PBill6Imputx9);
     
           console.log('New input is : ' + PBill6Imputx9)
            

userInputx9 = parseInt(PBill6Imputx9) + parseInt(PBill2Imputx9) + parseInt(PBill3Imputx9) + parseInt(PBill4Imputx9) + parseInt(PBill5Imputx9);
$('#qtyvalue2x9').attr('value', userInputx9);



       });





// });////End of PBill Payment/////////////*********************************




///////////////////Merchant/////////////



////////////////Merchant x9///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx9').click(function(){

 console.log("Service value x9 is = " + serviceValuex9);

serviceValuex9='Merchant';
tofValuex9 = 'waived';

$('.Merchantx9').fadeIn('slow');


    $('#cheTsavx9').hide();
    $('#savTchex9').hide();


  MerchantNamex9='';
  MerchantCardNUmberx9='';
  MerchantDateNUmberx9='';
  MerchantCVDx9='';
  MerchantZipCodex9='';







         $('.MerchantNameInputx9').attr('value', MerchantNamex9);
         $('.MerchantCardInputx9').attr('value', MerchantCardNUmberx9);
         $('.MerchantDateInputx9').attr('value', MerchantDateNUmberx9);
         $('.MerchantCVDInputx9').attr('value', MerchantCVDx9);
         $('.MerchantZipCodeInputx9').attr('value', MerchantZipCodex9);


 
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);



    console.log("Service value x9 is = " + serviceValuex9);



  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);

});






















// /////////////////////////////////
MerchantLabelx9="";

$('.MerchantLabelx9').click(function(){
MerchantLabelx9 = $(this).attr('value');
console.log("The selected MerchantLabelx9 is = " + MerchantLabelx9);

})








/////////////////////



$('.NameMerLabelx9').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx9').click(function(){




console.log('Merchant Name Label x9 was selected');

 MerchantCardNUmberx9 = "";
 $('.MerchantCardInputx9').attr('value', MerchantCardNUmberx9);


 $('.NumPadx9').hide();
 $('.numMCardx9').show();

});





 $('.numMCardx9').click(function(){

         MerchantCardNUmberx9+= $(this).attr("value");
          
          $('.MerchantCardInputx9').attr('value', MerchantCardNUmberx9);

           });



       //backspace button
           $('#backSpaceMCardx9').click(function(){

           var getInput = MerchantCardNUmberx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx9 = newInput;
            $('.MerchantCardInputx9').attr('value', MerchantCardNUmberx9);
     
           console.log('New input is : ' + MerchantCardNUmberx9);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx9').click(function(){




console.log('Merchant Name Label x9 was selected');

 MerchantDateNUmberx9 = "";
 $('.MerchantDateInputx9').attr('value', MerchantDateNUmberx9);


 $('.NumPadx9').hide();
 $('.numMDatex9').show();

});




 $('.numMDatex9').click(function(){

         MerchantDateNUmberx9+= $(this).attr("value");
          
          $('.MerchantDateInputx9').attr('value', MerchantDateNUmberx9);

           });



       //backspace button
           $('#backSpaceMDatex9').click(function(){

           var getInput = MerchantDateNUmberx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx9 = newInput;
            $('.MerchantDateInputx9').attr('value', MerchantDateNUmberx9);
     
           console.log('New input is : ' + MerchantDateNUmberx9);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx9').click(function(){




console.log('Merchant Name Label x9 was selected');

 MerchantCVDx9 = "";
 $('.MerchantCVDInputx9').attr('value', MerchantCVDx9);


 $('.NumPadx9').hide();
 $('.numCVDx9').show();

});




 $('.numCVDx9').click(function(){

          MerchantCVDx9+= $(this).attr("value");
          
          $('.MerchantCVDInputx9').attr('value', MerchantCVDx9);

           });



       //backspace button
           $('#backSpaceCVDx9').click(function(){

           var getInput = MerchantCVDx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx9 = newInput;
           $('.MerchantCVDInputx9').attr('value', MerchantCVDx9);
     
           console.log('New input is : ' + MerchantCVDx9);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx9').click(function(){




console.log('Merchant Name Label x9 was selected');

 MerchantZipCodex9 = "";
 $('.MerchantZipCodeInputx9').attr('value', MerchantZipCodex9);


 $('.NumPadx9').hide();
 $('.numMZipx9').show();
 
});




 $('.numMZipx9').click(function(){

         MerchantZipCodex9+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx9').attr('value', MerchantZipCodex9);

           });



       //backspace button
           $('#backSpaceMZipx9').click(function(){

           var getInput = MerchantZipCodex9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex9 = newInput;
            $('.MerchantZipCodeInputx9').attr('value', MerchantZipCodex9);
     
           console.log('New input is : ' + MerchantZipCodex9);
            


});






////////////////end of Merchant x9///////////////////////////
///////////////////////////////////////////////////////////





//////////////////////////////

$('.SwipeCardMerLabelx9').click(function(){

$('.MerchantImputx9').removeClass('SelectedMerchantLabel');
$('.MCardImputx9').removeClass('SelectedMerchantLabel');

  $('.MSwipex9').addClass('clickedSwipex9');
   $('.SwipeCardx9').fadeIn('fast');
  
})


$('.SwButtonx9').click(function(){
    $('.SwipeCardx9').fadeOut('fast');
    
});






/////////////////////////////////
/////////////////////////////////End of Merchant



////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex9').click(function(){

$('.feesx9').hide();

 console.log("Service value  is = " + serviceValue);

serviceValuex9='ChangePin';
tofValuex9 = 'waived';

$('.ChangePinx9 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx9='';
  ConPinx9='';





         $('.EnterPinInputx9').attr('value', EntPinx9);
         $('.ConfirmPinInputx9').attr('value', ConPinx9);


 
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);



    console.log("Service value  is = " + serviceValuex9);



  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);

});











// /////////////////////////////////
SelectedPinLabelx9="";

$('.ChangePinLx9').click(function(){
SelectedPinLabelx9 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx9);

});





/////////////////////



$('.EnterPinLabelx9').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx9 = "";
 $('.EnterPinInputx9').attr('value', EntPinx9);


 $('.NumPadx9').hide();
 $('.numEntPinx9').show();


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx9').click(function(){

         EntPinx9+= $(this).attr("value");
          
          $('.EnterPinInputx9').attr('value', EntPinx9);


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx9').click(function(){

           var getInput = EntPinx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx9 = newInput;
            $('.EnterPinInputx9').attr('value', EntPinx9);
     
           console.log('New input is : ' + EntPinx9);


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx9').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx9 = "";
 $('.ConfirmPinInputx9').attr('value', ConPinx9);


 $('.NumPadx9').hide();
 $('.numConPinx9').show();


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx9').click(function(){

         ConPinx9+= $(this).attr("value");
          
          $('.ConfirmPinInputx9').attr('value', ConPinx9);


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx9').click(function(){

           var getInput = ConPinx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx9 = newInput;
            $('.ConfirmPinInputx9').attr('value', ConPinx9);
     
           console.log('New input is : ' + ConPinx9);


// ////Password Match Notification//////////

           if(EntPinx9 !== '' && EntPinx9 === ConPinx9){
            
            $('.MatchedPinNOx9').hide();
            $('.MatchedPinYesx9').fadeIn();

           }



           if(EntPinx9 !== '' && EntPinx9 !== ConPinx9){

            $('.MatchedPinYesx9').hide();
            $('.MatchedPinNOx9').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////









///////////////////Take Loan/////////////






  $('#Loanx9').click(function(){

    serviceValuex9="Loan";

    $('#cheTsavx9').hide();
    $('#savTchex9').hide();
    // $('#qtyvalue2x9, #qtyvalueDenox9').hide();
    // $('#qtyvalueTLoanx9').show();
    $('.PayLoansx9').fadeIn('fast');
    
         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);

});













/////////////////////////////////////////////////



$('.closeDepositx9').click(function(){
  console.log('Deposit panel was closed');
    $('.depositx9').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox9').click(function(){
  billDenox9= true;

   if(billDenox9 === true){
  console.log(' Bill Deno is Activated ' + billDenox9);
}
$('.confBack2Yx9').hide();
$('#submit2Yx9, #exit2Yx9').show();


});


$('#noBillDenox9').click(function(){
  billDenox9= false;
  if(billDenox9 === false){
  console.log(' Bill Deno is Activated ' + billDenox9);
}

  $('.confBack2Yx9').hide();
 $('.billsx9').hide();
$('#amountx9, #qtyvalue2x9, .LinearNumPadx9, .numVx9').show();
$('#submit2Yx9, #exit2Yx9').fadeIn();

  
});




$('.ui2x9').click(function(){
  if(serviceValuex9 !== 'withdraw'){

    billDenox9 === false;

    console.log('BillDenox9 was deactivated because Service value is not withdraw');

    $('#billDenox9').removeClass('active');
    $('#noBillDenox9').addClass('active');

// $('#submit2Yx9').click(function(){

//    $('#billsx9, .billsx9, #b10x9, #b20x9, #b50x9, #b100x9').hide();

// });
  }
});



/////////////////////////////////////////////////////////


$('#wdraw1x9, #wdraw2x9').click(function(){
serviceValuex9 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 

////////////////QuickPay///////////////////////////

$('#QuickPayx9, #QuickPay2x9').click(function(){

  $('#submit2Yx9, #exit2Yx9').hide();
  $('.ScanOrGiftx9').fadeIn();
  $('.SelectBuyOrSellx9').hide();


});




 $('#QuickPay2x9, #QuickPay3x9').click(function(){
console.log("Service value x9 is = " + serviceValuex9);
$('.sendMoney11x9').fadeIn('');


 });



////////////////QuickPay///////////////////////////

$('.GiftGasx9, #GiftGas2x9').click(function(){

 
  $('#ScanPumpOnex9, #SubmitGasOrderx9').hide();
  $('.SelectSendOrRequestx9').fadeIn();

    $('.UseGasInputx9').hide(); 
    $('.amountx9').show();


 console.log("Service value x9 is = " + serviceValuex9);

serviceValuex9='QuickPay';
tofValuex9 = 'waived';

$('.sendMoney11x9').fadeIn('');




    $('#cheTsavx9').hide();
    $('#savTchex9').hide();



  MikeImputx9=0;
  JeffImputx9=0;
  MariaImputx9=0;
  JohnImputx9=0;


  LeahImputx9=0;
  PaulImputx9=0;
  JennyImputx9=0;
  GokuImputx9=0;



         $('#MikeImputx9').attr('value', MikeImputx9);
         $('#JeffImputx9').attr('value', JeffImputx9);
         $('#MariaImputx9').attr('value', MariaImputx9);
         $('#JohnImputx9').attr('value', JohnImputx9);


         $('#LeahImputx9').attr('value', LeahImputx9);
         $('#PaulImputx9').attr('value', PaulImputx9);
         $('#JennyImputx9').attr('value', JennyImputx9);
         $('#GokuImputx9').attr('value', GokuImputx9);

 
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);





    console.log("Service value x9 is = " + serviceValuex9);
  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);

});






Friendx9="";

$('.friendsx9').click(function(){
Friendx9 = $(this).attr('value');
console.log("Friend is = " + Friendx9);



});

      $('#happyFriendx9').attr('value', Friendx9);
      $('#quickPayAmountx9').attr('value', userInputx9);






   


  //      $('.retrievex9').click(function(){  
  //        $('.BillDenominationWdrawx9').fadeOut('fast');
  //        $('#qtyvalueDenox9').hide();
  //        userInputx9 ="";
  //        $('#qtyvalue2x9').show();
  //        $('#qtyvalue2x9').attr('value', "");

  //        $('#MikeImputx9').attr('value','');
  //        $('#JeffImputx9').attr('value','');
  //        $('#MariaImputx9').attr('value','');
  //        $('#JohnImputx9').attr('value', '');


  //        $('#LeahImputx9').attr('value','');
  //        $('#PaulImputx9').attr('value','');
  //        $('#JennyImputx9').attr('value','');
  //        $('#GokuImputx9').attr('value', '');


  // MikeImputx9='';
  // JeffImputx9='';
  // MariaImputx9='';
  // JohnImputx9='';


  // LeahImputx9='';
  // PaulImputx9='';
  // JennyImputx9='';
  // GokuImputx9='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx9=""


  $('.friendsx9').click(function(){
    SelectedFriendx9 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx9);





});



$('.NumPadx9').click(function(){
// if (MikeImputx9 === '0' || 0){
//   MikeImputx9 = '';
// }

if (JeffImputx9 === '0' || 0){
  JeffImputx9 = '';
}

if (MariaImputx9 === '0' || 0){
  MariaImputx9 = '';
}

if (JohnImputx9 === '0' || 0){
  JohnImputx9 = '';
}

if (LeahImputx9 === '0' || 0){
  LeahImputx9= '';
}

if (PaulImputx9 === '0' || 0){
  PaulImputx9 = '';
}

if (JennyImputx9 === '0' || 0){
  JennyImputx9 = '';
}

if (GokuImputx9 === '0' || 0){
  GokuImputx9 = '';
}

});



/////////////////////



$('#Mikex9').click(function(){

      $('.FriendMemox9').hide();
$('.MikeMemox9').show().click(function(){
  $('.WriteMemox9, .MikeTTMemox9').fadeIn();
});


console.log('Mike x9 was selected');

 MikeImputx9 = 0;
 $('#MikeImputx9').attr('value', MikeImputx9);




   $('#Mikex9 > span, #MikeImputx9').css('color','green');


 $('.NumPadx9').hide();
   $('.numMikex9').show();




 userInputx9 =  parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numMikex9').click(function(){

  if (MikeImputx9 === 0 ){
    MikeImputx9 = '';
  }
});

// ///////




 $('.numMikex9').click(function(){

          MikeImputx9 += $(this).attr("value");
          // $('#MikeImputx9').attr('value', MikeImputx9);


          $('#MikeImputx9').attr('value', MikeImputx9);

           console.log("current Friend 1 imput x9 number is :" + MikeImputx9);
           console.log('New Friend1 imput x9 is : ' + MikeImputx9);
           
 userInputx9 =  parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceMikex9').click(function(){

           var getInput = MikeImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx9 = newInput;
            $('#MikeImputx9').attr('value', MikeImputx9);
     
           console.log('New input is : ' + MikeImputx9)
            

 userInputx9 =  parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });









//////////////////




/////////////////////



$('#Jeffx9').click(function(){

      $('.FriendMemox9').hide();
$('.JeffMemox9').show().click(function(){
  $('.WriteMemox9, .JeffTTMemox9').fadeIn();
});


console.log('Jeff x9 was selected');

 JeffImputx9 = 0;
 $('#JeffImputx9').attr('value', JeffImputx9);



  
  


   $('#Jeffx9 > span, #JeffImputx9').css('color','green');


 $('.NumPadx9').hide();
   $('.numJeffx9').show();


 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numJeffx9').click(function(){

  if (JeffImputx9 === 0 ){
    JeffImputx9 = '';
  }
});

// ///////






 $('.numJeffx9').click(function(){

          JeffImputx9 += $(this).attr("value");
          // $('#JeffImputx9').attr('value', JeffImputx9);


          $('#JeffImputx9').attr('value', JeffImputx9);

           console.log("current Friend 1 imput x9 number is :" + JeffImputx9);
           console.log('New Friend1 imput x9 is : ' + JeffImputx9);
           
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceJeffx9').click(function(){

           var getInput = JeffImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx9 = newInput;
            $('#JeffImputx9').attr('value', JeffImputx9);
     
           console.log('New input is : ' + JeffImputx9)
            
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


       });









//////////////////





/////////////////////



$('#Mariax9').click(function(){


      $('.FriendMemox9').hide();
$('.MariaMemox9').show().click(function(){
  $('.WriteMemox9, .MariaTTMemox9').fadeIn();
});


console.log('Maria x9 was selected');

MariaImputx9 = 0;
 $('#MariaImputx9').attr('value', MariaImputx9);
 


  
  


   $('#Mariax9 > span, #MariaImputx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numMariax9').show();



 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);
});





///////////

$('.numMariax9').click(function(){

  if (MariaImputx9 === 0 ){
    MariaImputx9 = '';
  }
});

// ///////






 $('.numMariax9').click(function(){

          MariaImputx9 += $(this).attr("value");
          // $('#MariaImputx9').attr('value', MariaImputx9);


          $('#MariaImputx9').attr('value', MariaImputx9);

           console.log("current Friend 1 imput x9 number is :" + MariaImputx9);
           console.log('New Friend1 imput x9 is : ' + MariaImputx9);
           

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceMariax9').click(function(){

           var getInput = MariaImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx9 = newInput;
            $('#MariaImputx9').attr('value', MariaImputx9);
     
           console.log('New input is : ' + MariaImputx9)
            
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


       });









//////////////////




/////////////////////



$('#Johnx9').click(function(){

      $('.FriendMemox9').hide();
$('.JohnMemox9').show().click(function(){
  $('.WriteMemox9, .JohnTTMemox9').fadeIn();
});


console.log('John x9 was selected');

 JohnImputx9 = 0;
 $('#JohnImputx9').attr('value', JohnImputx9);



  
  


   $('#Johnx9 > span, #JohnImputx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numJohnx9').show();


 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numJohnx9').click(function(){

  if (JohnImputx9 === 0 ){
    JohnImputx9 = '';
  }
});

// ///////









 $('.numJohnx9').click(function(){

          JohnImputx9 += $(this).attr("value");
          // $('#JohnImputx9').attr('value', JohnImputx9);


          $('#JohnImputx9').attr('value', JohnImputx9);

           console.log("current Friend 1 imput x9 number is :" + JohnImputx9);
           console.log('New Friend1 imput x9 is : ' + JohnImputx9);
           

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceJohnx9').click(function(){

           var getInput = JohnImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx9 = newInput;
            $('#JohnImputx9').attr('value', JohnImputx9);
     
           console.log('New input is : ' + JohnImputx9)
            

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


       });









//////////////////






/////////////////////



$('#Leahx9').click(function(){


      $('.FriendMemox9').hide();
$('.LeahMemox9').show().click(function(){
  $('.WriteMemox9, .LeahTTMemox9').fadeIn();
});


console.log('Leah x9 was selected');

LeahImputx9 = 0;
 $('#LeahImputx9').attr('value', LeahImputx9);
 


  
  


   $('#Leahx9 > span, #LeahImputx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numLeahx9').show();



 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});




///////////

$('.numLeahx9').click(function(){

  if (LeahImputx9 === 0 ){
    LeahImputx9 = '';
  }
});

// ///////







 $('.numLeahx9').click(function(){

          LeahImputx9 += $(this).attr("value");
          // $('#LeahImputx9').attr('value', LeahImputx9);


          $('#LeahImputx9').attr('value', LeahImputx9);

           console.log("current Friend 1 imput x9 number is :" + LeahImputx9);
           console.log('New Friend1 imput x9 is : ' + LeahImputx9);
           
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceLeahx9').click(function(){

           var getInput = LeahImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx9 = newInput;
            $('#LeahImputx9').attr('value', LeahImputx9);
     
           console.log('New input is : ' + LeahImputx9)
            

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

       });









//////////////////





/////////////////////



$('#Paulx9').click(function(){


      $('.FriendMemox9').hide();
$('.PaulMemox9').show().click(function(){
  $('.WriteMemox9, .PaulTTMemox9').fadeIn();
});


console.log('Paul x9 was selected');

PaulImputx9 = 0;
 $('#PaulImputx9').attr('value', PaulImputx9);
 


  
  


   $('#Paulx9 > span, #PaulImputx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numPaulx9').show();



 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);
});



///////////

$('.numPaulx9').click(function(){

  if (PaulImputx9 === 0 ){
    PaulImputx9 = '';
  }
});

// ///////






 $('.numPaulx9').click(function(){

          PaulImputx9 += $(this).attr("value");
          // $('#PaulImputx9').attr('value', PaulImputx9);


          $('#PaulImputx9').attr('value', PaulImputx9);

           console.log("current Friend 1 imput x9 number is :" + PaulImputx9);
           console.log('New Friend1 imput x9 is : ' + PaulImputx9);
           

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpacePaulx9').click(function(){

           var getInput = PaulImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx9 = newInput;
            $('#PaulImputx9').attr('value', PaulImputx9);
     
           console.log('New input is : ' + PaulImputx9)
            

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

       });









//////////////////





/////////////////////



$('#Jennyx9').click(function(){

      $('.FriendMemox9').hide();
$('.JennyMemox9').show().click(function(){
  $('.WriteMemox9, .JennyTTMemox9').fadeIn();
});


console.log('Jenny x9 was selected');

JennyImputx9 = 0;
 $('#JennyImputx9').attr('value', JennyImputx9);
 


  
  


   $('#Jennyx9 > span, #JennyImputx9').css('color','green');

   $('.NumPadx9').hide();
   $('.numJennyx9').show();



 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);
});




///////////

$('.numJennyx9').click(function(){

  if (JennyImputx9 === 0 ){
    JennyImputx9 = '';
  }
});

// ///////






 $('.numJennyx9').click(function(){

          JennyImputx9 += $(this).attr("value");
          // $('#JennyImputx9').attr('value', JennyImputx9);


          $('#JennyImputx9').attr('value', JennyImputx9);

           console.log("current Friend 1 imput x9 number is :" + JennyImputx9);
           console.log('New Friend1 imput x9 is : ' + JennyImputx9);
           

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceJennyx9').click(function(){

           var getInput = JennyImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx9 = newInput;
            $('#JennyImputx9').attr('value', JennyImputx9);
     
           console.log('New input is : ' + JennyImputx9)
            
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


       });









//////////////////





/////////////////////



$('#Gokux9').click(function(){

    $('.FriendMemox9').hide();
$('.GokuMemox9').show().click(function(){
  $('.WriteMemox9, .GokuTTMemox9').fadeIn();
});


console.log('Gokux9  was selected');

GokuImputx9 = 0;
 $('#GokuImputx9').attr('value', GokuImputx9);
 


  
  


   $('#Gokux9 > span, #GokuImputx9').css('color','green');


   $('.NumPadx9').hide();
   $('.numGokux9').show();



 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});




///////////

$('.numGokux9').click(function(){

  if (GokuImputx9 === 0 ){
    GokuImputx9 = '';
  }
});

// ///////



 $('.numGokux9').click(function(){

          GokuImputx9 += $(this).attr("value");
          // $('#Gokux9Imput').attr('value', Gokux9Imput);


          $('#GokuImputx9').attr('value', GokuImputx9);

           console.log("current Friend 1 imput  number is :" + GokuImputx9);
           console.log('New Friend1 imput  is : ' + GokuImputx9);
           
 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


        
           });




       //backspace button
           $('#backSpaceGokux9').click(function(){

           var getInput = GokuImputx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx9 = newInput;
            $('#GokuImputx9').attr('value', GokuImputx9);
     
           console.log('New input is : ' + GokuImputx9)
            

 userInputx9 = parseInt(JeffImputx9) + parseInt(MariaImputx9) + parseInt(JohnImputx9) + parseInt(LeahImputx9) + parseInt(PaulImputx9) + parseInt(JennyImputx9) + parseInt(GokuImputx9);
 $('#qtyvalue2x9').attr('value', userInputx9);


       });






//////////////////






$('#closeSer2Panelsx9, .SubmitMemox9, .Confirm2Yx9, .OperationEndedPanelx9').click(function(){

$('.WriteMemox9, .TMemox9, .FriendMemox9').fadeOut();

      userInputx9= "0.00";
      $("#qtyvalue2x9").attr('value', userInputx9);
      console.log('.confirm2Yx9userInputx9 =' + userInputx9);


});
















////////////////Wire Transfer x9///////////////////////////
///////////////////////////////////////////////////////////




$('#senx9').click(function(){

 console.log("Service value x9 is = " + serviceValuex9);

serviceValuex9='WireTransfer';
tofValuex9 = 'waived';

$('.sendMoney2x9').fadeIn('slow');


    $('#cheTsavx9').hide();
    $('#savTchex9').hide();


  WrtNamex9='';
  WrtAccountNUmberx9='';
  WrtRoutingNUmberx9='';
  WrtTelephonex9='';
  WrtZipCodex9='';







         $('.WrtNameInputx9').attr('value', WrtNamex9);
         $('.WrtAccountInputx9').attr('value', WrtAccountNUmberx9);
         $('.WrtRoutingInputx9').attr('value', WrtRoutingNUmberx9);
         $('.WrtTelephoneInputx9').attr('value', WrtTelephonex9);
         $('.WrtZipCodeInputx9').attr('value', WrtZipCodex9);


 
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);



    console.log("Service value x9 is = " + serviceValuex9);



  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);

});






















// /////////////////////////////////
WrtLabelx9="";

$('.WrtLabelx9').click(function(){
WrtLabelx9 = $(this).attr('value');
console.log("The selected WrtLabelx9 is = " + WrtLabelx9);

});








/////////////////////



$('.NameWrLabelx9').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabelx9').click(function(){




console.log('Wrt Name Label x9 was selected');

 WrtAccountNUmberx9 = "";
 $('.WrtAccountInputx9').attr('value', WrtAccountNUmberx9);


 $('.NumPadx9').hide();
 $('.numCCx9').show();

});




 $('.numCCx9').click(function(){

         WrtAccountNUmberx9+= $(this).attr("value");
          
          $('.WrtAccountInputx9').attr('value', WrtAccountNUmberx9);

           });



       //backspace button
           $('#backSpaceCCx9').click(function(){

           var getInput = WrtAccountNUmberx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx9 = newInput;
            $('.WrtAccountInputx9').attr('value', WrtAccountNUmberx9);
     
           console.log('New input is : ' + WrtAccountNUmberx9);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabelx9').click(function(){




console.log('Wrt Name Label x9 was selected');

 WrtRoutingNUmberx9 = "";
 $('.WrtRoutingInputx9').attr('value', WrtRoutingNUmberx9);


 $('.NumPadx9').hide();
 $('.numRx9').show();

});




 $('.numRx9').click(function(){

         WrtRoutingNUmberx9+= $(this).attr("value");
          
          $('.WrtRoutingInputx9').attr('value', WrtRoutingNUmberx9);

           });



       //backspace button
           $('#backSpaceRx9').click(function(){

           var getInput = WrtRoutingNUmberx9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx9 = newInput;
            $('.WrtRoutingInputx9').attr('value', WrtRoutingNUmberx9);
     
           console.log('New input is : ' + WrtRoutingNUmberx9);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabelx9').click(function(){




console.log('Wrt Name Label x9 was selected');

 WrtTelephonex9 = "";
 $('.WrtTelephoneInputx9').attr('value', WrtTelephonex9);


 $('.NumPadx9').hide();
 $('.numSwTelx9').show();

});




 $('.numSwTelx9').click(function(){

          WrtTelephonex9+= $(this).attr("value");
          
          $('.WrtTelephoneInputx9').attr('value', WrtTelephonex9);

           });



       //backspace button
           $('#backSpaceSwTelx9').click(function(){

           var getInput = WrtTelephonex9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex9 = newInput;
           $('.WrtTelephoneInputx9').attr('value', WrtTelephonex9);
     
           console.log('New input is : ' + WrtTelephonex9);
            


});




//////////////////





/////////////////////



$('.ZipWrLabelx9').click(function(){




console.log('Wrt Name Label x9 was selected');

 WrtZipCodex9 = "";
 $('.WrtZipCodeInputx9').attr('value', WrtZipCodex9);


 $('.NumPadx9').hide();
 $('.numSwZipx9').show();
 
});




 $('.numSwZipx9').click(function(){

         WrtZipCodex9+= $(this).attr("value");
          
          $('.WrtZipCodeInputx9').attr('value', WrtZipCodex9);

           });



       //backspace button
           $('#backSpaceSwZipx9').click(function(){

           var getInput = WrtZipCodex9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex9 = newInput;
            $('.WrtZipCodeInputx9').attr('value', WrtZipCodex9);
     
           console.log('New input is : ' + WrtZipCodex9);
            


});






////////////////end of Wire Transfer x9///////////////////////////
///////////////////////////////////////////////////////////






// /////////  Loans////////////////////////


$('#Loanx9').click(function(){

serviceValuex9 = 'Loan';

$('.TakeLoanx9').fadeIn();
$('.ToogleLoansToLinearx9').fadeIn();


$('.SelectOrx9').show();


         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);

});



$('.ScanOrGiftx9, .SelectOrx9').click(function(){

  $(this).hide();
  $('.confBack2Yx9').fadeIn();


});







inputLoan1x9=0;
inputLoan2x9=0;
inputLoan3x9=0;
inputLoan4x9=0;




         $('.inputLoan4x9').attr('value', inputLoan1x9);
         $('.inputLoan4x9').attr('value', inputLoan2x9);
         $('.inputLoan4x9').attr('value', inputLoan3x9);
         $('.inputLoan4x9').attr('value', inputLoan4x9);


 
userInputx9 = '0.00';
$('#qtyvalue2x9').attr('value', userInputx9);



console.log("Service value x9 is = " + serviceValuex9);



  console.log("Service value is = " + serviceValuex9);
  console.log("tofvalue is = " + tofValuex9);

});











$('.NumPadx9').click(function(){

if (inputLoan1x9 === '0' || 0){
  inputLoan1x9 = '';
}


if (inputLoan2x9 === '0' || 0){
  inputLoan2x9 = '';
}

if (inputLoan3x9 === '0' || 0){
  inputLoan3x9 = '';
}


if (inputLoan4x9 === '0' || 0){
  inputLoan4x9 = '';
}

});






inputLoan1x9=0;
inputLoan2x9=0;
inputLoan3x9=0;
inputLoan4x9=0;








/////////////////////



$('.Loan1x9').click(function(){


$('.EnterLoan1x9').show();


console.log('Mike x9 was selected');

 inputLoan1x9 = 0;
 $('.inputLoan1x9').attr('value', inputLoan1x9);


   $('#Mikex9 > span, .inputLoan1x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTLoan1x9').show();




 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTLoan1x9').click(function(){

  if (inputLoan1x9 === 0 ){
    inputLoan1x9 = '';
  }
});

// ///////




 $('.numTLoan1x9').click(function(){

          inputLoan1x9 += $(this).attr("value");
          // $('.inputLoan1x9').attr('value', inputLoan1x9);


          $('.inputLoan1x9').attr('value', inputLoan1x9);

           console.log("current Friend 1 imput x9 number is :" + inputLoan1x9);
           console.log('New Friend1 imput x9 is : ' + inputLoan1x9);
           
 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTLoan1x9').click(function(){

           var getInput = inputLoan1x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan1x9 = newInput;
            $('.inputLoan1x9').attr('value', inputLoan1x9);
     
           console.log('New input is : ' + inputLoan1x9)
            

 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////////



/////////////////////



$('.Loan2x9').click(function(){


$('.EnterLoan2x9').show();


console.log('Mike x9 was selected');

 inputLoan2x9 = 0;
 $('.inputLoan2x9').attr('value', inputLoan2x9);


   $('#Mikex9 > span, .inputLoan2x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTLoan2x9').show();




 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTLoan2x9').click(function(){

  if (inputLoan2x9 === 0 ){
    inputLoan2x9 = '';
  }
});

// ///////




 $('.numTLoan2x9').click(function(){

          inputLoan2x9 += $(this).attr("value");
          // $('.inputLoan2x9').attr('value', inputLoan2x9);


          $('.inputLoan2x9').attr('value', inputLoan2x9);

           console.log("current Friend 1 imput x9 number is :" + inputLoan2x9);
           console.log('New Friend1 imput x9 is : ' + inputLoan2x9);
           
 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTLoan2x9').click(function(){

           var getInput = inputLoan2x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan2x9 = newInput;
            $('.inputLoan2x9').attr('value', inputLoan2x9);
     
           console.log('New input is : ' + inputLoan2x9)
            

 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////


/////////////////////



$('.Loan3x9').click(function(){


$('.EnterLoan3x9').show();


console.log('Mike x9 was selected');

 inputLoan3x9 = 0;
 $('.inputLoan3x9').attr('value', inputLoan3x9);


   $('#Mikex9 > span, .inputLoan3x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTLoan3x9').show();




 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTLoan3x9').click(function(){

  if (inputLoan3x9 === 0 ){
    inputLoan3x9 = '';
  }
});

// ///////




 $('.numTLoan3x9').click(function(){

          inputLoan3x9 += $(this).attr("value");
          // $('.inputLoan3x9').attr('value', inputLoan3x9);


          $('.inputLoan3x9').attr('value', inputLoan3x9);

           console.log("current Friend 1 imput x9 number is :" + inputLoan3x9);
           console.log('New Friend1 imput x9 is : ' + inputLoan3x9);
           
 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTLoan3x9').click(function(){

           var getInput = inputLoan3x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan3x9 = newInput;
            $('.inputLoan3x9').attr('value', inputLoan3x9);
     
           console.log('New input is : ' + inputLoan3x9)
            

 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });




//////////////////



/////////////////////



$('.Loan4x9').click(function(){


$('.EnterLoan4x9').show();


console.log('Mike x9 was selected');

 inputLoan4x9 = 0;
 $('.inputLoan4x9').attr('value', inputLoan4x9);


   $('#Mikex9 > span, .inputLoan4x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTLoan4x9').show();




 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTLoan4x9').click(function(){

  if (inputLoan4x9 === 0 ){
    inputLoan4x9 = '';
  }
});

// ///////




 $('.numTLoan4x9').click(function(){

          inputLoan4x9 += $(this).attr("value");
          // $('.inputLoan4x9').attr('value', inputLoan4x9);


          $('.inputLoan4x9').attr('value', inputLoan4x9);

           console.log("current Friend 1 imput x9 number is :" + inputLoan4x9);
           console.log('New Friend1 imput x9 is : ' + inputLoan4x9);
           
 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTLoan4x9').click(function(){

           var getInput = inputLoan4x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan4x9 = newInput;
            $('.inputLoan4x9').attr('value', inputLoan4x9);
     
           console.log('New input is : ' + inputLoan4x9)
            

 userInputx9 =  parseInt(inputLoan1x9) + parseInt(inputLoan2x9) + parseInt(inputLoan3x9) + parseInt(inputLoan4x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////
$('.ToogleLoansToLinearx9').click(function(){
$(this).hide();
$('.ToogleLoansToSquarex9').show();
});


$('.ToogleLoansToSquarex9').click(function(){
$(this).hide();
$('.ToogleLoansToLinearx9').show();
});



$('.ToogleLoansToLinearx9, .ToogleLoansToSquarex9').click(function(){

$('.Loanx9').toggleClass('LinearLoanx9');
$('.LoanNamex9').toggleClass('LinearLoanNamex9');
$('.LoanBadgeAndnamex9').toggleClass('LinearLoanBadgeAndnamex9');
$('.LoanAndAbrex9').toggleClass('LinearLoanAndAbrex9');
$('.MyCurrentPricex9').toggleClass('LinearMyCurrentPricex9');
$('.EnterLoanQtyx9').toggleClass('LinearEnterLoanQtyx9');


});










// /////////  Loans////////////////////////




// /////////Buy sell Fuels////////////////////////


$('#BSFuelsx9').click(function(){

serviceValuex9 = 'Fuels';
console.log("Service value x9 is = " + serviceValuex9);
console.log("Service value is = " + serviceValuex9);
console.log("tofvalue is = " + tofValuex9);

$('.BuyFuelsx9').fadeIn();
// $('.ToogleFuelsToLinearx9').fadeIn();
$('#submit2Yx9, #exit2Yx9, .ScanOrGiftx9').hide();

$('.SelectBuyOrSellx9').show();

         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);



inputFuel1x9=0;
inputFuel2x9=0;
inputFuel3x9=0;
inputFuel4x9=0;




         $('.inputFuel4x9').attr('value', inputFuel1x9);
         $('.inputFuel4x9').attr('value', inputFuel2x9);
         $('.inputFuel4x9').attr('value', inputFuel3x9);
         $('.inputFuel4x9').attr('value', inputFuel4x9);

});



$('.ScanOrGiftx9, .SelectBuyOrSellx9').click(function(){

  $(this).hide();
  $('.confBack2Yx9').fadeIn();


});







inputFuel1x9=0;
inputFuel2x9=0;
inputFuel3x9=0;
inputFuel4x9=0;
inputFuel5x9=0;
inputFuel6x9=0;
inputFuel7x9=0;
inputFuel8x9=0;
inputFuel9x9=0;




         $('.inputFuel4x9').attr('value', inputFuel1x9);
         $('.inputFuel4x9').attr('value', inputFuel2x9);
         $('.inputFuel4x9').attr('value', inputFuel3x9);
         $('.inputFuel4x9').attr('value', inputFuel4x9);
         $('.inputFuel5x9').attr('value', inputFuel5x9);
         $('.inputFuel6x9').attr('value', inputFuel6x9);
         $('.inputFuel7x9').attr('value', inputFuel7x9);
         $('.inputFuel8x9').attr('value', inputFuel8x9);
         $('.inputFuel9x9').attr('value', inputFuel9x9);         


 








// /////////////////////////////////
  SelectedFuelx9=""


  $('.Fuelx9').click(function(){
    SelectedFriendx9 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFuelx9);

});





$('.NumPadx9').click(function(){

if (inputFuel1x9 === '0' || 0){
  inputFuel1x9 = '';
}


if (inputFuel2x9 === '0' || 0){
  inputFuel2x9 = '';
}

if (inputFuel3x9 === '0' || 0){
  inputFuel3x9 = '';
}


if (inputFuel4x9 === '0' || 0){
  inputFuel4x9 = '';
}

if (inputFuel5x9 === '0' || 0){
  inputFuel5x9 = '';
}

if (inputFuel6x9 === '0' || 0){
  inputFuel6x9 = '';
}

if (inputFuel7x9 === '0' || 0){
  inputFuel7x9 = '';
}

if (inputFuel8x9 === '0' || 0){
  inputFuel8x9 = '';
}

if (inputFuel9x9 === '0' || 0){
  inputFuel9x9 = '';

}

});






inputFuel1x9=0;
inputFuel2x9=0;
inputFuel3x9=0;
inputFuel4x9=0;
inputFuel5x9=0;
inputFuel6x9=0;
inputFuel7x9=0;
inputFuel8x9=0;
inputFuel9x9=0;










/////////////////////



$('.Fuel1x9').click(function(){


$('.EnterFuel1x9').show();


console.log('Mike x9 was selected');

 inputFuel1x9 = 0;
 $('.inputFuel1x9').attr('value', inputFuel1x9);


   $('#Mikex9 > span, .inputFuel1x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel1x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel1x9').click(function(){

  if (inputFuel1x9 === 0 ){
    inputFuel1x9 = '';
  }
});

// ///////




 $('.numFuel1x9').click(function(){

          inputFuel1x9 += $(this).attr("value");
          // $('.inputFuel1x9').attr('value', inputFuel1x9);


          $('.inputFuel1x9').attr('value', inputFuel1x9);
           $('#qtyvalueGasx9').attr('value', inputFuel1x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel1x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel1x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel1x9').click(function(){

           var getInput = inputFuel1x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel1x9 = newInput;
            $('.inputFuel1x9').attr('value', inputFuel1x9);
             $('#qtyvalueGasx9').attr('value', inputFuel1x9);
     
           console.log('New input is : ' + inputFuel1x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////////



/////////////////////



$('.Fuel2x9').click(function(){


$('.EnterFuel2x9').show();


console.log('Mike x9 was selected');

 inputFuel2x9 = 0;
 $('.inputFuel2x9').attr('value', inputFuel2x9);


   $('#Mikex9 > span, .inputFuel2x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel2x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel2x9').click(function(){

  if (inputFuel2x9 === 0 ){
    inputFuel2x9 = '';
  }
});

// ///////




 $('.numFuel2x9').click(function(){

          inputFuel2x9 += $(this).attr("value");
          // $('.inputFuel2x9').attr('value', inputFuel2x9);


          $('.inputFuel2x9').attr('value', inputFuel2x9);
           $('#qtyvalueGasx9').attr('value', inputFuel2x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel2x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel2x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel2x9').click(function(){

           var getInput = inputFuel2x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel2x9 = newInput;
            $('.inputFuel2x9').attr('value', inputFuel2x9);
             $('#qtyvalueGasx9').attr('value', inputFuel2x9);
     
           console.log('New input is : ' + inputFuel2x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////


/////////////////////



$('.Fuel3x9').click(function(){


$('.EnterFuel3x9').show();


console.log('Mike x9 was selected');

 inputFuel3x9 = 0;
 $('.inputFuel3x9').attr('value', inputFuel3x9);


   $('#Mikex9 > span, .inputFuel3x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel3x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel3x9').click(function(){

  if (inputFuel3x9 === 0 ){
    inputFuel3x9 = '';
  }
});

// ///////




 $('.numFuel3x9').click(function(){

          inputFuel3x9 += $(this).attr("value");
          // $('.inputFuel3x9').attr('value', inputFuel3x9);


          $('.inputFuel3x9').attr('value', inputFuel3x9);
           $('#qtyvalueGasx9').attr('value', inputFuel3x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel3x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel3x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel3x9').click(function(){

           var getInput = inputFuel3x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel3x9 = newInput;
            $('.inputFuel3x9').attr('value', inputFuel3x9);
             $('#qtyvalueGasx9').attr('value', inputFuel3x9);
     
           console.log('New input is : ' + inputFuel3x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });




//////////////////



/////////////////////



$('.Fuel4x9').click(function(){


$('.EnterFuel4x9').show();


console.log('Mike x9 was selected');

 inputFuel4x9 = 0;
 $('.inputFuel4x9').attr('value', inputFuel4x9);


   $('#Mikex9 > span, .inputFuel4x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel4x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel4x9').click(function(){

  if (inputFuel4x9 === 0 ){
    inputFuel4x9 = '';
  }
});

// ///////




 $('.numFuel4x9').click(function(){

          inputFuel4x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel4x9').attr('value', inputFuel4x9);
           $('#qtyvalueGasx9').attr('value', inputFuel4x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel4x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel4x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel4x9').click(function(){

           var getInput = inputFuel4x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel4x9 = newInput;
            $('.inputFuel4x9').attr('value', inputFuel4x9);
             $('#qtyvalueGasx9').attr('value', inputFuel4x9);
     
           console.log('New input is : ' + inputFuel4x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Fuel5x9').click(function(){


$('.EnterFuel5x9').show();


console.log('Mike x9 was selected');

 inputFuel5x9 = 0;
 $('.inputFuel5x9').attr('value', inputFuel5x9);


   $('#Mikex9 > span, .inputFuel5x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel5x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel5x9').click(function(){

  if (inputFuel5x9 === 0 ){
    inputFuel5x9 = '';
  }
});

// ///////




 $('.numFuel5x9').click(function(){

          inputFuel5x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel5x9').attr('value', inputFuel5x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel5x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel5x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel5x9').click(function(){

           var getInput = inputFuel5x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel5x9 = newInput;
            $('.inputFuel5x9').attr('value', inputFuel5x9);
     
           console.log('New input is : ' + inputFuel5x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Fuel6x9').click(function(){


$('.EnterFuel6x9').show();


console.log('Mike x9 was selected');

 inputFuel6x9 = 0;
 $('.inputFuel6x9').attr('value', inputFuel6x9);


   $('#Mikex9 > span, .inputFuel6x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel6x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel6x9').click(function(){

  if (inputFuel6x9 === 0 ){
    inputFuel6x9 = '';
  }
});

// ///////




 $('.numFuel6x9').click(function(){

          inputFuel6x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel6x9').attr('value', inputFuel6x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel6x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel6x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel6x9').click(function(){

           var getInput = inputFuel6x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel6x9 = newInput;
            $('.inputFuel6x9').attr('value', inputFuel6x9);
     
           console.log('New input is : ' + inputFuel6x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////


/////////////////////



$('.Fuel7x9').click(function(){


$('.EnterFuel7x9').show();


console.log('Mike x9 was selected');

 inputFuel7x9 = 0;
 $('.inputFuel7x9').attr('value', inputFuel7x9);


   $('#Mikex9 > span, .inputFuel7x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel7x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel7x9').click(function(){

  if (inputFuel7x9 === 0 ){
    inputFuel7x9 = '';
  }
});

// ///////




 $('.numFuel7x9').click(function(){

          inputFuel7x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel7x9').attr('value', inputFuel7x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel7x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel7x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel7x9').click(function(){

           var getInput = inputFuel7x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel7x9 = newInput;
            $('.inputFuel7x9').attr('value', inputFuel7x9);
     
           console.log('New input is : ' + inputFuel7x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Fuel8x9').click(function(){


$('.EnterFuel8x9').show();


console.log('Mike x9 was selected');

 inputFuel8x9 = 0;
 $('.inputFuel8x9').attr('value', inputFuel8x9);


   $('#Mikex9 > span, .inputFuel8x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel8x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel8x9').click(function(){

  if (inputFuel8x9 === 0 ){
    inputFuel8x9 = '';
  }
});

// ///////




 $('.numFuel8x9').click(function(){

          inputFuel8x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel8x9').attr('value', inputFuel8x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel8x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel8x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel8x9').click(function(){

           var getInput = inputFuel8x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel8x9 = newInput;
            $('.inputFuel8x9').attr('value', inputFuel8x9);
     
           console.log('New input is : ' + inputFuel8x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////

/////////////////////



$('.Fuel9x9').click(function(){


$('.EnterFuel9x9').show();


console.log('Mike x9 was selected');

 inputFuel9x9 = 0;
 $('.inputFuel9x9').attr('value', inputFuel9x9);


   $('#Mikex9 > span, .inputFuel9x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numFuel9x9').show();




 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numFuel9x9').click(function(){

  if (inputFuel9x9 === 0 ){
    inputFuel9x9 = '';
  }
});

// ///////




 $('.numFuel9x9').click(function(){

          inputFuel9x9 += $(this).attr("value");
          // $('.inputFuel4x9').attr('value', inputFuel4x9);


          $('.inputFuel9x9').attr('value', inputFuel9x9);

           console.log("current Friend 1 imput x9 number is :" + inputFuel9x9);
           console.log('New Friend1 imput x9 is : ' + inputFuel9x9);
           
 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceFuel9x9').click(function(){

           var getInput = inputFuel9x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel9x9 = newInput;
            $('.inputFuel9x9').attr('value', inputFuel9x9);
     
           console.log('New input is : ' + inputFuel9x9)
            

 userInputx9 =  parseInt(inputFuel1x9) + parseInt(inputFuel2x9) + parseInt(inputFuel3x9) + parseInt(inputFuel4x9) + parseInt(inputFuel5x9) + parseInt(inputFuel6x9) +parseInt(inputFuel7x9) + parseInt(inputFuel8x9) + parseInt(inputFuel9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////





$('.ToogleFuelsToRectanglex9').click(function(){
    $(this).hide();
    $('.ToogleFuelsToLinearx9').show();
});


$('.ToogleFuelsToLinearx9').click(function(){
    $(this).hide();
    $('.ToogleFuelsToSquarex9').show();
});


$('.ToogleFuelsToSquarex9').click(function(){
    $(this).hide();
    $('.ToogleFuelsToMinix9').show();
});


$('.ToogleFuelsToMinix9').click(function(){
    $(this).hide();
    $('.ToogleFuelsToRectanglex9').show();
});






$('.ToogleFuelsToRectanglex9').click(function(){

$('.Fuelx9').addClass('RectangledFuelMOBIx9');
$('.MyFuelinRealValx9').addClass('RectangledMyFuelinRealValMOBIx9');
$('.EnterFuelQtyx9').addClass('RectangledEnterFuelQtyMOBIx9');
$('.GiftGasMOBIx9').addClass('RedtangledGiftGasMOBIx9 '); 
$('.UseGasx9').addClass('RectangledUseGasx9'); 
$('.GiftGasx9').addClass('RectangledGiftGasx9');
$('.innerRightMOBIx9').addClass('RectangledinnerRightMOBIx9');
$('.IhaveThisMuchMOBIx9').addClass('RectangledIhaveThisMuchMOBIx9');
$('.GalMOBIx9').addClass('RectangledGalMOBIx9');
$('.FuelSymbolMOBIx9').addClass('RectangledFuelSymbolMOBIx9');


$('.FuelMOBIx9').removeClass('MiniFuelMOBIx9 '); 
$('.FuelSymbolMOBIx9').removeClass('MiniFuelSymbolMOBIx9 '); 
$('.FuelNameMOBIx9').removeClass('MiniFuelNameMOBIx9');
$('.IhaveThisMuchMOBIx9').removeClass('MiniIhaveThisMuchMOBIx9');
$('.MyFuelinRealValMOBIx9').removeClass('MiniMyFuelinRealValMOBIx9');
$('.EnterFuelQtyMOBIx9').removeClass('MiniEnterFuelQtyMOBIx9');
$('.InputFuelQtyMOBIx9').removeClass('MiniInputFuelQtyMOBIx9');
$('.SelectFuelsMOBIx9').addClass('MiniSelectFuelsMOBIx9');
$('.GiftGasx9').removeClass('MiniGiftGasx9');
$('.UseGasx9').removeClass('MiniUseGasx9');
$('.SelectFuelsMOBIx9').removeClass('MiniSelectFuelsMOBIx9');



});




$('.ToogleFuelsToLinearx9').click(function(){

$('.Fuelx9').addClass('LinearFuelx9');
$('.FuelNamex9').addClass('LinearFuelNamex9');
$('.FuelBadgeAndnamex9').addClass('LinearFuelBadgeAndnamex9');
$('.FuelAndAbrex9').addClass('LinearFuelAndAbrex9');
$('.MyCurrentPricex9').addClass('LinearMyCurrentPricex9');
$('.EnterFuelQtyx9').addClass('LinearEnterFuelQtyx9');
$('.SelectFuelsMOBIx9').addClass('LinearSelectFuelsMOBIx9');
$('.UseGasx9').addClass('LinearUseGasx9');
$('.GiftGasx9').addClass('LinearGiftGasx9');
$('.Fuelx9').removeClass('RectangledFuelMOBIx9');
$('.MyFuelinRealValx9').removeClass('RectangledMyFuelinRealValMOBIx9');
$('.EnterFuelQtyx9').removeClass('RectangledEnterFuelQtyMOBIx9');
$('.GiftGasMOBIx9').removeClass('.RedtangledGiftGasMOBIx9 '); 
$('.UseGasx9').removeClass('RectangledUseGasx9'); 
$('.GiftGasx9').removeClass('RectangledGiftGasx9');
$('.innerRightMOBIx9').removeClass('RectangledinnerRightMOBIx9');
$('.IhaveThisMuchMOBIx9').removeClass('RectangledIhaveThisMuchMOBIx9');
$('.GalMOBIx9').removeClass('RectangledGalMOBIx9');
$('.SelectFuelsMOBIx9').removeClass('MiniSelectFuelsMOBIx9');
$('.FuelSymbolMOBIx9').removeClass('RectangledFuelSymbolMOBIx9');



});



$('.ToogleFuelsToSquarex9').click(function(){

$('.Fuelx9').removeClass('LinearFuelx9');
$('.FuelNamex9').removeClass('LinearFuelNamex9');
$('.FuelBadgeAndnamex9').removeClass('LinearFuelBadgeAndnamex9');
$('.FuelAndAbrex9').removeClass('LinearFuelAndAbrex9');
$('.MyCurrentPricex9').removeClass('LinearMyCurrentPricex9');
$('.EnterFuelQtyx9').removeClass('LinearEnterFuelQtyx9');
$('.SelectFuelsMOBIx9').removeClass('LinearSelectFuelsMOBIx9');
$('.UseGasx9').removeClass('LinearUseGasx9');
$('.GiftGasx9').removeClass('LinearGiftGasx9')

$('.Fuelx9').removeClass('RectangledFuelMOBIx9');
$('.MyFuelinRealValx9').removeClass('RectangledMyFuelinRealValMOBIx9');
$('.EnterFuelQtyx9').removeClass('RectangledEnterFuelQtyMOBIx9');


});





$('.ToogleFuelsToMinix9').click(function(){

$('.FuelMOBIx9').addClass('MiniFuelMOBIx9 '); 
$('.FuelSymbolMOBIx9').addClass('MiniFuelSymbolMOBIx9 '); 
$('.FuelNameMOBIx9').addClass('MiniFuelNameMOBIx9');
$('.IhaveThisMuchMOBIx9').addClass('MiniIhaveThisMuchMOBIx9');
$('.MyFuelinRealValMOBIx9').addClass('MiniMyFuelinRealValMOBIx9');
$('.EnterFuelQtyMOBIx9').addClass('MiniEnterFuelQtyMOBIx9');
$('.InputFuelQtyMOBIx9').addClass('MiniInputFuelQtyMOBIx9');
$('.SelectFuelsMOBIx9').addClass('MiniSelectFuelsMOBIx9');
$('.GiftGasx9').addClass('MiniGiftGasx9');
$('.UseGasx9').addClass('MiniUseGasx9');




$('.Fuelx9').removeClass('RectangledFuelMOBIx9');
$('.MyFuelinRealValx9').removeClass('RectangledMyFuelinRealValMOBIx9');
$('.EnterFuelQtyx9').removeClass('RectangledEnterFuelQtyMOBIx9');

$('.Fuelx9').removeClass('LinearFuelx9');
$('.FuelNamex9').removeClass('LinearFuelNamex9');
$('.FuelBadgeAndnamex9').removeClass('LinearFuelBadgeAndnamex9');
$('.FuelAndAbrex9').removeClass('LinearFuelAndAbrex9');
$('.MyCurrentPricex9').removeClass('LinearMyCurrentPricex9');
$('.EnterFuelQtyx9').removeClass('LinearEnterFuelQtyx9');



});
















// /////////Buy sell Fuels////////////////////////







// /////////Make sell Transfers////////////////////////


$('#MTransferx9').click(function(){

serviceValuex9 = 'Transfers';
console.log("Service value x9 is = " + serviceValuex9);
console.log("Service value is = " + serviceValuex9);
console.log("tofvalue is = " + tofValuex9);

$('.MakeTransferx9').fadeIn();
// $('.ToogleTransfersToLinearx9').fadeIn();


$('.SelectMakeOrSellx9').show();

         userInputx9 ="0.00";
         $('#qtyvalue2x9').attr('value', userInputx9);



inputTransfer1x9=0;
inputTransfer2x9=0;
inputTransfer3x9=0;
inputTransfer4x9=0;




         $('.inputTransfer4x9').attr('value', inputTransfer1x9);
         $('.inputTransfer4x9').attr('value', inputTransfer2x9);
         $('.inputTransfer4x9').attr('value', inputTransfer3x9);
         $('.inputTransfer4x9').attr('value', inputTransfer4x9);

});



$('.ScanOrGiftx9, .SelectMakeOrSellx9').click(function(){

  $(this).hide();
  $('.confBack2Yx9').fadeIn();


});







inputTransfer1x9=0;
inputTransfer2x9=0;
inputTransfer3x9=0;
inputTransfer4x9=0;
inputTransfer5x9=0;
inputTransfer6x9=0;
inputTransfer7x9=0;
inputTransfer8x9=0;
inputTransfer9x9=0;




         $('.inputTransfer4x9').attr('value', inputTransfer1x9);
         $('.inputTransfer4x9').attr('value', inputTransfer2x9);
         $('.inputTransfer4x9').attr('value', inputTransfer3x9);
         $('.inputTransfer4x9').attr('value', inputTransfer4x9);
         $('.inputTransfer5x9').attr('value', inputTransfer5x9);
         $('.inputTransfer6x9').attr('value', inputTransfer6x9);
         $('.inputTransfer7x9').attr('value', inputTransfer7x9);
         $('.inputTransfer8x9').attr('value', inputTransfer8x9);
         $('.inputTransfer9x9').attr('value', inputTransfer9x9);         


 








// /////////////////////////////////
  SelectedTransferx9="";


  $('.Transferx9').click(function(){
    SelectedFriendx9 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedTransferx9);

});





$('.NumPadx9').click(function(){

if (inputTransfer1x9 === '0' || 0){
  inputTransfer1x9 = '';
}


if (inputTransfer2x9 === '0' || 0){
  inputTransfer2x9 = '';
}

if (inputTransfer3x9 === '0' || 0){
  inputTransfer3x9 = '';
}


if (inputTransfer4x9 === '0' || 0){
  inputTransfer4x9 = '';
}

if (inputTransfer5x9 === '0' || 0){
  inputTransfer5x9 = '';
}

if (inputTransfer6x9 === '0' || 0){
  inputTransfer6x9 = '';
}

if (inputTransfer7x9 === '0' || 0){
  inputTransfer7x9 = '';
}

if (inputTransfer8x9 === '0' || 0){
  inputTransfer8x9 = '';
}

if (inputTransfer9x9 === '0' || 0){
  inputTransfer9x9 = '';

}

});






inputTransfer1x9=0;
inputTransfer2x9=0;
inputTransfer3x9=0;
inputTransfer4x9=0;
inputTransfer5x9=0;
inputTransfer6x9=0;
inputTransfer7x9=0;
inputTransfer8x9=0;
inputTransfer9x9=0;










/////////////////////



$('.Transfer1x9').click(function(){


$('.EnterTransfer1x9').show();


console.log('Mike x9 was selected');

 inputTransfer1x9 = 0;
 $('.inputTransfer1x9').attr('value', inputTransfer1x9);


   $('#Mikex9 > span, .inputTransfer1x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer1x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer1x9').click(function(){

  if (inputTransfer1x9 === 0 ){
    inputTransfer1x9 = '';
  }
});

// ///////




 $('.numTransfer1x9').click(function(){

          inputTransfer1x9 += $(this).attr("value");
          // $('.inputTransfer1x9').attr('value', inputTransfer1x9);


          $('.inputTransfer1x9').attr('value', inputTransfer1x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer1x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer1x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer1x9').click(function(){

           var getInput = inputTransfer1x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer1x9 = newInput;
            $('.inputTransfer1x9').attr('value', inputTransfer1x9);
     
           console.log('New input is : ' + inputTransfer1x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////////



/////////////////////



$('.Transfer2x9').click(function(){


$('.EnterTransfer2x9').show();


console.log('Mike x9 was selected');

 inputTransfer2x9 = 0;
 $('.inputTransfer2x9').attr('value', inputTransfer2x9);


   $('#Mikex9 > span, .inputTransfer2x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer2x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer2x9').click(function(){

  if (inputTransfer2x9 === 0 ){
    inputTransfer2x9 = '';
  }
});

// ///////




 $('.numTransfer2x9').click(function(){

          inputTransfer2x9 += $(this).attr("value");
          // $('.inputTransfer2x9').attr('value', inputTransfer2x9);


          $('.inputTransfer2x9').attr('value', inputTransfer2x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer2x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer2x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer2x9').click(function(){

           var getInput = inputTransfer2x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer2x9 = newInput;
            $('.inputTransfer2x9').attr('value', inputTransfer2x9);
     
           console.log('New input is : ' + inputTransfer2x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });


////////////////////////////////


/////////////////////



$('.Transfer3x9').click(function(){


$('.EnterTransfer3x9').show();


console.log('Mike x9 was selected');

 inputTransfer3x9 = 0;
 $('.inputTransfer3x9').attr('value', inputTransfer3x9);


   $('#Mikex9 > span, .inputTransfer3x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer3x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer3x9').click(function(){

  if (inputTransfer3x9 === 0 ){
    inputTransfer3x9 = '';
  }
});

// ///////




 $('.numTransfer3x9').click(function(){

          inputTransfer3x9 += $(this).attr("value");
          // $('.inputTransfer3x9').attr('value', inputTransfer3x9);


          $('.inputTransfer3x9').attr('value', inputTransfer3x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer3x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer3x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer3x9').click(function(){

           var getInput = inputTransfer3x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer3x9 = newInput;
            $('.inputTransfer3x9').attr('value', inputTransfer3x9);
     
           console.log('New input is : ' + inputTransfer3x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });




//////////////////



/////////////////////



$('.Transfer4x9').click(function(){


$('.EnterTransfer4x9').show();


console.log('Mike x9 was selected');

 inputTransfer4x9 = 0;
 $('.inputTransfer4x9').attr('value', inputTransfer4x9);


   $('#Mikex9 > span, .inputTransfer4x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer4x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer4x9').click(function(){

  if (inputTransfer4x9 === 0 ){
    inputTransfer4x9 = '';
  }
});

// ///////




 $('.numTransfer4x9').click(function(){

          inputTransfer4x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer4x9').attr('value', inputTransfer4x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer4x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer4x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer4x9').click(function(){

           var getInput = inputTransfer4x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer4x9 = newInput;
            $('.inputTransfer4x9').attr('value', inputTransfer4x9);
     
           console.log('New input is : ' + inputTransfer4x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Transfer5x9').click(function(){


$('.EnterTransfer5x9').show();


console.log('Mike x9 was selected');

 inputTransfer5x9 = 0;
 $('.inputTransfer5x9').attr('value', inputTransfer5x9);


   $('#Mikex9 > span, .inputTransfer5x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer5x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer5x9').click(function(){

  if (inputTransfer5x9 === 0 ){
    inputTransfer5x9 = '';
  }
});

// ///////




 $('.numTransfer5x9').click(function(){

          inputTransfer5x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer5x9').attr('value', inputTransfer5x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer5x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer5x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer5x9').click(function(){

           var getInput = inputTransfer5x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer5x9 = newInput;
            $('.inputTransfer5x9').attr('value', inputTransfer5x9);
     
           console.log('New input is : ' + inputTransfer5x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Transfer6x9').click(function(){


$('.EnterTransfer6x9').show();


console.log('Mike x9 was selected');

 inputTransfer6x9 = 0;
 $('.inputTransfer6x9').attr('value', inputTransfer6x9);


   $('#Mikex9 > span, .inputTransfer6x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer6x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer6x9').click(function(){

  if (inputTransfer6x9 === 0 ){
    inputTransfer6x9 = '';
  }
});

// ///////




 $('.numTransfer6x9').click(function(){

          inputTransfer6x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer6x9').attr('value', inputTransfer6x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer6x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer6x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer6x9').click(function(){

           var getInput = inputTransfer6x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer6x9 = newInput;
            $('.inputTransfer6x9').attr('value', inputTransfer6x9);
     
           console.log('New input is : ' + inputTransfer6x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////


/////////////////////



$('.Transfer7x9').click(function(){


$('.EnterTransfer7x9').show();


console.log('Mike x9 was selected');

 inputTransfer7x9 = 0;
 $('.inputTransfer7x9').attr('value', inputTransfer7x9);


   $('#Mikex9 > span, .inputTransfer7x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer7x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer7x9').click(function(){

  if (inputTransfer7x9 === 0 ){
    inputTransfer7x9 = '';
  }
});

// ///////




 $('.numTransfer7x9').click(function(){

          inputTransfer7x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer7x9').attr('value', inputTransfer7x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer7x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer7x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer7x9').click(function(){

           var getInput = inputTransfer7x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer7x9 = newInput;
            $('.inputTransfer7x9').attr('value', inputTransfer7x9);
     
           console.log('New input is : ' + inputTransfer7x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////



/////////////////////



$('.Transfer8x9').click(function(){


$('.EnterTransfer8x9').show();


console.log('Mike x9 was selected');

 inputTransfer8x9 = 0;
 $('.inputTransfer8x9').attr('value', inputTransfer8x9);


   $('#Mikex9 > span, .inputTransfer8x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer8x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer8x9').click(function(){

  if (inputTransfer8x9 === 0 ){
    inputTransfer8x9 = '';
  }
});

// ///////




 $('.numTransfer8x9').click(function(){

          inputTransfer8x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer8x9').attr('value', inputTransfer8x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer8x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer8x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer8x9').click(function(){

           var getInput = inputTransfer8x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer8x9 = newInput;
            $('.inputTransfer8x9').attr('value', inputTransfer8x9);
     
           console.log('New input is : ' + inputTransfer8x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////

/////////////////////



$('.Transfer9x9').click(function(){


$('.EnterTransfer9x9').show();


console.log('Mike x9 was selected');

 inputTransfer9x9 = 0;
 $('.inputTransfer9x9').attr('value', inputTransfer9x9);


   $('#Mikex9 > span, .inputTransfer9x9').css('color','green');


 $('.NumPadx9').hide();
 $('.numTransfer9x9').show();




 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

});



///////////

$('.numTransfer9x9').click(function(){

  if (inputTransfer9x9 === 0 ){
    inputTransfer9x9 = '';
  }
});

// ///////




 $('.numTransfer9x9').click(function(){

          inputTransfer9x9 += $(this).attr("value");
          // $('.inputTransfer4x9').attr('value', inputTransfer4x9);


          $('.inputTransfer9x9').attr('value', inputTransfer9x9);

           console.log("current Friend 1 imput x9 number is :" + inputTransfer9x9);
           console.log('New Friend1 imput x9 is : ' + inputTransfer9x9);
           
 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);

        
           });




       //backspace button
           $('#backSpaceTransfer9x9').click(function(){

           var getInput = inputTransfer9x9;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer9x9 = newInput;
            $('.inputTransfer9x9').attr('value', inputTransfer9x9);
     
           console.log('New input is : ' + inputTransfer9x9)
            

 userInputx9 =  parseInt(inputTransfer1x9) + parseInt(inputTransfer2x9) + parseInt(inputTransfer3x9) + parseInt(inputTransfer4x9) + parseInt(inputTransfer5x9) + parseInt(inputTransfer6x9) +parseInt(inputTransfer7x9) + parseInt(inputTransfer8x9) + parseInt(inputTransfer9x9);
 $('#qtyvalue2x9').attr('value', userInputx9);




       });

//////////////////





$('.ToogleTransferToSelectx9').click(function(){
    $(this).hide();
    $('.ToogleTransferToColumnx9').show();
});


$('.ToogleTransferToColumnx9').click(function(){
    $(this).hide();
    $('.ToogleTransferToSelectx9').show();
});







$('.ToogleTransferToSelectx9').click(function(){
       
   $('.SelectTransferFromx9, .SelectTransferTox9, .arrowTransferx9').hide();
   $('.TransFromx9, .TransTox9, .arrowTransx9').show();

});




$('.ToogleTransferToColumnx9').click(function(){

   $('.TransFromx9, .TransTox9, .arrowTransx9').hide();
   $('.SelectTransferFromx9, .SelectTransferTox9, .arrowTransferx9').show();
       
});



// ///////change Trans From Option ////////



$('.liTransFrom1x9').click(function(){
console.log("li From 1 was clicked");
   $('.TransferHideFromx9').hide();
   $('.TransferHideFrom1x9').show();
       
});



$('.liTransFrom2x9').click(function(){
console.log("li From 2 was clicked");
   $('.TransferHideFromx9').hide();
   $('.TransferHideFrom2x9').show();
       
});



$('.liTransFrom3x9').click(function(){
console.log("li From 3 was clicked");
   $('.TransferHideFromx9').hide();
   $('.TransferHideFrom3x9').show();
       
});




$('.liTransFrom4x9').click(function(){
console.log("li From 4 was clicked");
   $('.TransferHideFromx9').hide();
   $('.TransferHideFrom4x9').show();
       
});




$('.liTransFrom5x9').click(function(){
console.log("li From 5 was clicked");
   $('.TransferHideFromx9').hide();
   $('.TransferHideFrom5x9').show();
       
});






// ///////change Trans From Option ////////



// ///////change Trans To Option ////////



$('.liTransTo1x9').click(function(){
  console.log('Li To 1 was Clicked');
   $('.TransferHideTox9').hide();
   $('.TransferHideTo1x9').show();
       
});



$('.liTransTo2x9').click(function(){
  console.log('Li To 2 was Clicked');
   $('.TransferHideTox9').hide();
   $('.TransferHideTo2x9').show();
       
});



$('.liTransTo3x9').click(function(){
  console.log('Li To 3 was Clicked');
   $('.TransferHideTox9').hide();
   $('.TransferHideTo3x9').show();
       
});




$('.liTransTo4x9').click(function(){
  console.log('Li To 4 was Clicked');
   $('.TransferHideTox9').hide();
   $('.TransferHideTo4x9').show();
       
});




$('.liTransTo5x9').click(function(){
  console.log('Li To 5 was Clicked');
   $('.TransferHideTox9').hide();
   $('.TransferHideTo5x9').show();
       
});



// ///////change Trans To Option ////////












///////////////////////////////////////////////////
















userInput23x9="";

 $('.numVx9').click(function(){
   userInput23x9 += $(this).attr("value");

  
   $('.qtyvalue23x9').attr('value', userInput23x9);
    console.log("current forrouting number is :" + userInput23x9);
    console.log('New input is : ' + userInput23x9);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex9').click(function(){

    var getInputx9 = userInput23x9;
    var lenx9 = getInputx9.length -1;
    var newInputx9 = getInputx9.substring(0, lenx9);

 
    userInput23x9 = newInputx9;

     $('.qtyvalue23x9').attr('value', userInput23x9);
     
    console.log('New input is : ' + userInput23x9)




});







////////////////////Pay panel show/hide/////////////////////////////////


$('#submit2Yx9').click(function(){

  $('#submit2Yx9, #exit2Yx9').hide();
  $('.confBack2Yx9').show();

if(billDenox9 === true){

  userInput23x9 = '';

  $('.billsx9').fadeIn();
  $('.qtyvalue23x9').attr('value', userInput23x9);
  $('.amountInputx9, .NumPadx9').hide();
  console.log('userInputx9 =' + userInput23x9);


}


});







$('#submit2Yx9').click(function(){

  if(serviceValuex9 === 'QuickPay'){
    $('.pyx9').fadeIn();
    $('.numVx9, .NumPadx9').hide();

  }

});


$('#submit2Yx9').click(function(){

  if(serviceValuex9 === 'CreditCards'){
    $('.pyx9').fadeIn();
    $('.numVx9, .NumPadx9').hide();

  }

});



$('#submit2Yx9').click(function(){

  if(serviceValuex9 === 'WireTransfer'){
    $('.pyx9').fadeIn();
    $('.numVx9, .NumPadx9').hide();

  }

});








$('.SelectBuyOrSellx9, .ScanOrGiftx9').click(function(){

 
    $('.pyx9').fadeIn();
    $('.numVx9, .NumPadx9').hide();



});







// /////////////// back2yx9 /////////////////

$('.back2Yx9').click(function(){

if(billDenox9 === true){

$('.billsx9').hide();
$('.amountInputx9, .numVx9').show();

}

  if(serviceValuex9 === 'PayBills' || 'QuickPay' || 'CreditCards' || "Fuels"){
       $('.pyx9').fadeOut();
       $('.pyx9 > label').removeClass('active');
       $('.numVx9').show();
       serviceValuex9 === 'PayBills';

}


if(serviceValuex9 === 'Fuels'){

    $('.confBack2Yx9').hide();
    $('.SelectBuyOrSellx9').show();
    

}else if(serviceValuex9 === "QuickPay"){
     
     $('.confBack2Yx9').hide();
     $('.ScanOrGiftx9').show();
     

}else{



  $('.confBack2Yx9').hide();
  $('#submit2Yx9, #exit2Yx9').show();
  $('.LinearNumPadx9').show();

}



});

/////////////////////////////////////////////////////






 userInputx9= "";

$('.confirm2Yx9').click(function(){  

    $('.ServicePanelx9,  .confBack2Yx9').hide();
    $('#submit2Yx9, #exit2Yx9').show();
    $("#inCheckSentx9, #inSavSentx9, #inCheckx9, #inSavx9, #loanAmountx9, #cardPaymentAmountx9, #quickPayAmountx9").attr("value", userInputx9);
    $("#happyCardx9").attr("value", SelectedCardx9);

   
      userInputx9= "0.00";
      $("#qtyvalue2x9").attr('value', userInputx9);
      console.log('.confirm2Yx9userInputx9 =' + userInputx9);


      $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x9').hide();
      $('#savTche, #savTche2x2, #savTche2x3, #savTche2x9').hide();


     $('.pyx9').hide();
     $('.PayButtonsx9 > label').removeClass('active');

     $('.NumPadx9, .billsx9').hide();
     $('.numVx9, .amountInputx9').show();

  $('.serB, .tofB, .sm2x3, .sm2x9, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x9, .acm2x5, .acm2x6, .acm2x7').removeClass('active');



  $('.MainTransferx5').hide();
  $('.acm2Buttonsx5, .acm2Buttonsx7').show();



 
if(serviceValuex9 === "Withdraw" && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);
     $('.retrievex9').fadeIn('');

}else if(serviceValuex9 === 'Transfer' && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);
     $('.tranToCheckingx9').fadeIn('');



}else if(serviceValuex9 === 'Fuels' && userInputx9 !== ""){

      console.log('service value is: ' + serviceValuex9);
      $('.BuyThanksx9').fadeIn('');



}else if(serviceValuex9 === 'Fuels' && userInputx9 !== ""){

      console.log('service value is: ' + serviceValuex9);
      $('.BuyThanksx9').fadeIn('');


}else if(serviceValuex9 === 'Transfer' && userInputx9 !== ""){

      console.log('service value is: ' + serviceValuex9);
      $('.tranToCheckingx9').fadeIn('');


}else if(serviceValuex9 === 'Loan' &&  userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);
     $('.LoanGrantedx9').fadeIn('');         


}else if(serviceValuex9 === 'ScanATM' && userInputx9 !== ''){

     console.log("Service value is = " + serviceValuex9);          
     $('.retrievex9').fadeIn();


}else if(serviceValuex9 === 'Credit' && userInputx9 !== ""){
  
     console.log("Service value is = " + serviceValuex9);
     $('.CardPaymentx9').fadeIn('');    


}else if(serviceValuex9 === 'QuickPay' && userInputx9 !== ""){
   
     console.log("Service value is = " + serviceValuex9);      
     $('.QuickSentx9').fadeIn('slow');


}else if(serviceValuex9 === 'Merchant' && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);   
     $('.MerchCardChargedx9').fadeIn('');


}else if(serviceValuex9 === 'WireTransfer' && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);   
     $('.WrTransferSentx9').fadeIn('');


}else if(serviceValuex9 === 'PayBills' && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);     
     $('.BillPaySentx9').fadeIn('');


}else if(serviceValuex9 === 'ChangePin' && userInputx9 !== ""){

     console.log('service value is: ' + serviceValuex9);     
     $('.OkChangePinx9').fadeIn('');



}else{

     $('.selectt').fadeIn('');
     console.log("Please select a service and an account for your transaction");
     console.log('service value is: ' + serviceValuex9);
     console.log('tof value is: ' + tofValuex9);

}



      userInputx9= "0.00";
      $("#qtyvalue2x9").attr('value', userInputx9);
      console.log('.confirm2Yx9userInputx9 =' + userInputx9);
    

    
});











//for deposits display the prompting pop-up as soon as the customer selects the saving or checking account

   $('#cash2x9, #withdraw2x9, #checks2x9').click(function(){
      $('#checking2x9, #saving2x9').removeClass('active');

      });



   $('#checking2x9, #saving2x9').click(function(){

     if (serviceValuex9 === $('#cash2x9').attr("value")){
      $('.depositCashx9').fadeIn('fast');

  


     }else if

     (serviceValuex9 === $('#checks2x9').attr("value")){
      $('.depositCheckx9').fadeIn('fast');

     }

   });


     









 $('.CardPaymentx9, .checkCashSentx9, .tranToSavingsx9, .tranToCheckingx9, .retrievex9, .GoodByex9, .LoanGrantedx9, .depositCashx9, .QuickSentx9').click(function(){
  $(this).fadeOut('fast');


});








///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox9').removeClass('active');
//        $('#receiptYes, #receiptNox9').click(function(){

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


$('.checkinginfo2x9').click(function(){
  $(this).fadeOut('fast');
});


$('#checking33').dblclick(function(){
$('.checkinginfo2x9').fadeIn('fast');

});






$('.savinginfo2x9').click(function(){
  $(this).fadeOut('fast');
});


$('#saving33').dblclick(function(){
$('.savinginfo2x9').fadeIn('fast');

});


// $('#closeSendx9').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x9').hide();
//   $('.numCCx9').hide();
//   $('.numRx9').hide();
//   $('.numVx9').show();

// })

// $('#closeSend2x9').click(function(){
//   $('.sendMoney3x9').hide();
// })




// $('#deposx9, #deposx92, #wdraw1x9, #wdraw2x9, #sendx, #sendx9').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });






$('.serB, .sm2x2, .sm2x3, .sm2x9, .sm2x5, .sm2x6, .sm2x7').click(function(){


   $('#Scan2Yx9').hide();
   $('#submit2Yx9').fadeIn();


});



$('.serB, .sm2x2, .tofB, .sm2x3, .sm2x9, .sm2x5, .sm2x6, .sm2x7, .financialModelx9').click(function(){





   $('#savTche, #savTche2x2, #savTche2x3, #savTche2x9').hide();
   $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x9, .MainTransferx5').hide();

   $('.acm2Buttonsx5, .acm2Buttonsx7').show();

   $('#saving2, #saving33, #savingx9').removeClass('active');
   $('#checking2, #checking33, #checkingx9').removeClass('active');

   $('.TransferHideFromx9').removeClass('MainTransferHideFromx9');
   $('.TransferHideTox9').removeClass('MainTransferHideTox9');
  
});






$('#Withdraw4x1, #Withdraw4x2, #Withdraw4x3, #Withdraw4x9, #Withdraw4x5, #Withdraw4x6, #Withdraw4x7, #BILLDEx9').click(function(){

  serviceValuex9="Withdraw";
  console.log('4Withdrawx9 clicked');
  $('#Scan2Yx9').hide();
  $('#submit2Yx9').show();




});



$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx9, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx9').click(function(){


  serviceValuex9="Withdraw";
  console.log('ScanWithdrawx9 clicked');
  $('#Scan2Yx9').show();
  $('#submit2Yx9').hide();

});







   $('#transfer4x2, #transfer2').click(function(){   
     serviceValuex9 ='Transfer';
   });




$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x9').click(function(){

  $('#savTche, #savTche2x2, #savTche2x3, #savTche2x9, .acm2Buttonsx5, .acm2Buttonsx7, .MainTransferx5').hide();
  serviceValuex9 = "Transfer";
  tofValuex9 = "waived";
  $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x9, #cheTsav2x5').fadeIn();
  console.log('servicevalue is : '+ serviceValuex9);
  $('#checking2, #checking33, #checkingx9').addClass('active');
  $('#saving2, #saving33, #savingx9').removeClass('active');

  $('.TransferHideFromx9').addClass('MainTransferHideFromx9');
  $('.TransferHideTox9').addClass('MainTransferHideTox9');



});


$('#Transfer4x5, #Transfer4x7').click(function(){

  $('.acm2Buttonsx5, .acm2Buttonsx7').hide();
  $('.MainTransferx5').show();


$('.TransferHideFromx9').addClass('MainTransferHideFromx9');
$('.TransferHideTox9').addClass('MainTransferHideTox9');

});







   $('#checking2, #transx9, #checking33, #checkingx9').click(function(){

    tofValuex9 = 'checking';
     if(serviceValuex9 === 'Transfer'){
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x9').fadeIn('');
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x9').hide();

          console.log('transfer from checking');
          console.log(serviceValuex9);
  

            }


    }); 





      
   $('#saving2, #trans2x9, #saving33, #savingx9, #transfer2').click(function(){
    tofValuex9 = 'savings';
      if(serviceValuex9 ==='Transfer'){

      
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x9').hide();
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x9').fadeIn();

          console.log('transfer from savings');
          console.log(serviceValuex9);
        
        }


      });





// $('.ScanWithdrawx9').click(function(){

//   serviceValuex9="Withdraw";
//   console.log('ScanWithdrawx9 clicked');

//     $('#submit2Yx9').hide();
//     $('#Scan2Yx9').fadeIn();

// });






// $('.Withdraw4x9').click(function(){

//   if (screenTypex9 = 'Mobilex9'){
//   console.log('ScanWithdrawx9 clicked');

//     $('#submit2Yx9').hide();
//     $('#Scan2Yx9').fadeIn();

// }else if (screenTypex9 = 'Machinex9'){
//   console.log('ScanWithdrawx9 clicked');

//     $('#submit2Yx9').show();
//     $('#Scan2Yx9').hide();


// }


// });







$('.tofB, .acm2x3, .acm2x9, .acm2x5, .acm2x6, .acm2x7').click(function(){

  if (serviceValuex9 === 'Deposit'){

    $('.depositx9').fadeIn();
    console.log('Depositx9 faddeIn');
  }

});







$('#Deposit4x2, #Deposit42').click(function(){

  serviceValuex9 = 'Deposit'
  $('.depositx9').fadeIn();
  console.log('Depositx9 faddeIn');

});






// });


$('.depositx9').click(function(){
  $(this).fadeOut();
  });



$('#deposx9, #deposx92, #transferx9, #sendx, #sendFromCheckingsx9, #sendx9, #trans2x9, #cash2, #withdraw2, #checks2, #transfer, #payticket, #Live').click(function(){
  $('.billsx9').hide();
  $('.numVx9, #amountx9, #qtyvalue2x9').show();
  $('.confBack2Yx9').hide();
  $('#submit2Yx9, #exit2Yx9').show();

  // if(serviceValuex9 !== "withdraw"){

  //  // $('.Confirm2Yx9').Show();
  // }



});

////////////////////////////////////////////

 $('.lan2x9, #qty2x9, .fin2x9, #deposx9, #wdraw1x9, #checking33, #transferx9, #wdraw2x9, #trans2x9, #send, #trans2x9, #sendx9').click(function(){
      $('.serDropx9').hide();
  })




  console.log('Service menu was clicked');



$('.lan2x9, .qty2x9, .fin2x9').click(function(){

$('.serDropx9').hide();

});


 





$('.NumPadx9').click(function(){

// feeparsseInputx9 = Number(userInputx9);
// feeInputx9 = feeparsseInputx9 / 2;
feeInputx9 = "15.5";

console.log('Fee input is =' + feeInputx9);
console.log('feeinput is typeof = ' + typeof('feeInputx9'));

   $('.feeInputx9').attr('value', feeInputx9);

});




$('#PinChangex9, .serBother, #ServiceMenu, .ServiceMenux9, #ServiceMenux3, #ServiceMenux9, #ServiceMenux5, #ServiceMenux6, #ServiceMenux7').click(function(){

  $('.feesx9').hide();

});




$('#closeSer2Panelsx9, .serDropx9 ').click(function(){

  $('.feesx9').show();



  
});







  $('#PinChangex9').click(function(){

     $('.feesx9').addClass('pinChangefeesx9');

  });


$('#closeSer2Panelsx9, .confirm2Yx9, OperationEndedPanelx9').click(function(){

$('.feesx9').removeClass('pinChangefeesx9');

});











///////////////////////////////////Submit2Yx9/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// $('#english2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);
//   $('#cash2x9').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
//   $('#withdraw2x9').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
//   $('#checks2x9').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


//     ///////////////

//   $('#checking33').html('CHECKING<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('SAVINGS <br><span>Balance: $1,200.00</span>');


//   $('#deposx9, #deposx').html('<input type="radio" name="lan"> Deposit');
//   $('#wdraw1x9, #wdraw2x9x2').html('<input type="radio" name="lan"> Withdraw');
//   $('#transferx9, #trans2x9').html('<input type="radio" name="lan"> Transfer');
//   $('#sendx, #sendx9').text('Send Money');



//   //////////////
  
  
 
//   $('#amountx9').text('$');
//   $('#qtyvalue2x9').attr('value', userInputx9);


//     $('#submit2x9').html('SUBMIT');

//     $('#exit2x9').html('EXIT');


//     $('#submit2Yx9').html('SUBMIT');

//     $('#exit2Yx9').html('EXIT');

//   $('.confirm2x9').html('<h2><b>Confirm</b></h2>');
//   $('.back2x9').html('<h2><b>Back</b></h2>');

// $('.confirm2Yx9').html('<h2><b>Confirm</b></h2>');
//   $('.back2Yx9').html('<h2><b>Back</b></h2>');




//   $('#casdex9').html('<b> Please Insert your Cash Deposit</b>');

//   $('#casde2x9').html('<b> Please Insert your Deposit</b>');


//   $('#billsx9').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);

//   $('#retrx9').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

//   $('#chedex9').html('<b> Please Insert your Check Deposit now</b>');

//   $('#cancelx9').text('(Tap to Cancel)');
//   $('#cancel2x9').text('(Tap to Cancel)');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
//   $('#sfcaCancelx9').text('( Tap to Close)');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
//   $('#sfsaCancelx9').text('( Tap to Close)');



//     $('#gbyx9').html('<b>Good Bye</b>');
//     $('#nrepx9').text('Need a Receipt');
//     $('#receiptYesx9').text('YES');
//     $('#receiptNox9').text('NO');
//     $('#exBackx9').html('<b>Go Back</b>'); 


//      $('#stcx9').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
//      $('#stcXx9').text('( Tap to Close)');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
//    $('#ctsXx9').text('Tap to Close');


//      $('#oopsx9').html('<h1><b>Oops</b></h1>');



//   $('#machinex9').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

//   $('#limitx9').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');
// });




// $('#spanish2x9').click(function(){

//   userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);

// $('#cash2x9').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
//   $('#checks2x9').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
//   ///////////////

//   $('#checking33').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('AHORROS <br><span>Balance: $1,200.00</span>');


//   $('#deposx9, #deposx92x9').html('<input type="radio" name="lan">Depositar');
//   $('#wdraw1x9, #wdraw2x9').html('<input type="radio" name="lan">Retirar');
//   $('#transferx9, #trans2x9').html('<input type="radio" name="lan">Transferir');
//   $('#sendx, #sendx9').text('Enviar Dinero');







//   //////////////
  



 
//   $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);

  
  

//   $('#submit2x9').html('SOMETER');

//   $('#exit2x9').html('SALIR');


//   $('#submit2Yx9').html('SOMETER');

//   $('#exit2Yx9').html('SALIR');

//   $('.confirm2x9').html('<h2><b>Confirmar</b></h2>');
//   $('.back2x9').html('<h2><b>Atras</b></h2>');

//   $('.confirm2Yx9').html('<h2><b>Confirmar</b></h2>');
//   $('.back2Yx9').html('<h2><b>Atras</b></h2>');


//   $('#casdex9').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

//   $('#casde2x9').html('<b> Favor Inserte su Deposito Ahora</b>');



 
//   $('#billsx9').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);


//  $('#retrx9').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

//  $('#chedex9').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

//  $('#cancelx9').text('(Toque para Cerrar)');
//  $('#cancel2x9').text('(Toque para Cancelar)');


// $('#sfcax9').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
// $('#sfcaCancelx9').text('( Toca para cerrar )');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
//   $('#sfsaCancelx9').text('( Toca para cerrar)');



//     $('#gbyx9').html('<b>Hasta Luego</b>');
//     $('#nrepx9').text('Necesita Recibo?');
//     $('#receiptYesx9').text('SI');
//     $('#receiptNox9').text('NO');
//     $('#exBackx9').html('<b>Volver Atras</b>'); 


//   $('#stcx9').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
//   $('#stcXx9').text('( Toca para cerrar)');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
//    $('#ctsXx9').text('Toca para cerrar');

//   $('#oopsx9').html('<h1><b>Ohoh</b></h1>'); 



//   $('#machinex9').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

//   $('#limitx9').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');


//   });






// $('#chinesse2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);
// $('#cash2x9').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



//     ///////////////

//   $('#checking33').html('檢查 <br><span>天平: $2,200.00</span>');
//   $('#saving33').html(' 儲蓄<br><span>天平: $1,200.00</span>');


//   $('#deposx9, #deposx92x9').html('<input type="radio" name="lan">存入現金');
//   $('#wdraw1x9, #wdraw2x9').html('<input type="radio" name="lan"> 刪除');
//   $('#transferx9, #trans2x9').html('<input type="radio" name="lan">刪除');
//   $('#sendx, #sendx9').text('刪現金');



//   //////////////


// console.log('A Language Button clicked');

  
 
//   $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);
  

//   $('#submit2x9').html('提交');

//   $('#exit2x9').html('取消');

//   $('#submit2Yx9').html('提交');

//   $('#exit2Yx9').html('取消');


//   $('.confirm2x9').html('<h2><b>確認</b></h2>');
//   $('.back2x9').html('<h2><b>返回</b></h2>');

//   $('.confirm2Yx9').html('<h2><b>確認</b></h2>');
//   $('.back2Yx9').html('<h2><b>返回</b></h2>');



//   $('#casdex9').html('<b> 請插入您的現金存款</b>');

//   $('#casde2x9').html('<b> 請插入您的現金存款</b>');


  
//   $('#billsx9').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);

//   $('#retrx9').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

//   $('#chedex9').html('<b> 租賃現在插入您的支票存款</b>');

//   $('#cancelx9').text('（點擊取消）');
//   $('#cancel2x9').text('（點擊取消）');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
//   $('#sfcaCancelx9').text('（點擊關閉）');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
//   $('#sfsaCancelx9').text('（點擊關閉）');



//     $('#gbyx9').html('<b>再見</b>');
//     $('#nrepx9').text('需要收據？');
//     $('#receiptYesx9').text('是的');
//     $('#receiptNox9').text('沒有');
//     $('#exBackx9').html('<b>回去</b>'); 


//      $('#stcx9').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
//      $('#stcXx9').text('（點擊關閉）');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
//    $('#ctsXx9').text('（點擊關閉）');


//      $('#oopsx9').html('<h1><b>哎呀</b></h1>');



//   $('#machinex9').html('<b> 本機只能發送賬單：</b></h2><br>'); 

//   $('#limitx9').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

//   });







// $('#russian2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);

// $('#cash2x9').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


//  $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
//   $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


//    ///////////////

//   $('#checking33').html('Проверки <br><span>Баланс: $2,200.00</span>');
//   $('#saving33').html('Экономия<br><span>Баланс: $1,200.00</span>');


//   $('#deposx9, #deposx92').html('<input type="radio" name="lan">денежных');
//   $('#wdraw1x9, #wdraw2x9').html('<input type="radio" name="lan">Удалить');
//   $('#transferx9, #trans2x9').html('<input type="radio" name="lan">средств');
//   $('#sendx, #sendx9').text('денежных');

// console.log('A Language Button clicked');

//   //////////////
  
  
//   $('#amountx9').text('$');
//   $('#qtyvalue2x9').attr('value', userInputx9);



//   $('#submit2x9').html('Отправить');

//   $('#exit2x9').html('Отмена');

//   $('#submit2Yx9').html('Отправить');

//   $('#exit2Yx9').html('Отмена');



//   $('.confirm2x9').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2x9').html('<h2><b> Назад</b></h2>');

//   $('.confirm2Yx9').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2Yx9').html('<h2><b> Назад</b></h2>');


//   $('#casdex9').html('<b> Пожалуйста, введите свой денежный депозит </b>');
//   $('#casde2x9').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
//   $('#billsx9').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);


//   $('#retrx9').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

//   $('#chedex9').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

//   $('#cancelx9').text('(Нажмите, чтобы отменить)');
//   $('#cancel2x9').text('(Нажмите, чтобы отменить)');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
//   $('#sfcaCancelx9').text('(Нажмите, чтобы закрыть)');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
//   $('#sfsaCancelx9').text('(Нажмите, чтобы закрыть)');



//     $('#gbyx9').html('<b> До свидания</b>');
//     $('#nrepx9').text('Нужна квитанция?');
//     $('#receiptYesx9').text(' ДА');
//     $('#receiptNox9').text(' НЕТ');
//     $('#exBackx9').html('<b>Вернуться</b>'); 



//      $('#stcx9').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
//      $('#stcXx9').text('(Нажмите, чтобы закрыть)');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
//    $('#ctsXx9').text('(Нажмите, чтобы закрыть)');


//      $('#oopsx9').html('<h1><b>К сожалению</b></h1>');



//   $('#machinex9').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

//   $('#limitx9').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




//   });





// $('#german2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);
// $('#cash2x9').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

//   $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);
  
  

//   $('#submit2x9').html(' Senden ');

//   $('#exit2x9').html(' Abbrechen ');

//   $('#submit2Yx9').html(' Senden ');

//   $('#exit2Yx9').html(' Abbrechen ');

//   $('.confirm2x9').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2x9').html('<h2><b> Zurück</b></h2>');


//   $('.confirm2Yx9').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2Yx9').html('<h2><b> Zurück</b></h2>');




//   $('#casdex9').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
//   $('#casde2x9').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


//   $('#billsx9').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);

// $('#retrx9').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

//   $('#chedex9').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

//   $('#cancelx9').text('(Tippen Sie auf Abbrechen)');
//   $('#cancel2x9').text('(Tippen Sie auf Abbrechen)');

 


//  $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
//   $('#sfcaCancelx9').text('(Tippen Sie auf Schließen)');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
//   $('#sfsaCancelx9').text('(Tippen Sie auf Schließen)');



//     $('#gbyx9').html('<b> Auf Wiedersehen</b>');
//     $('#nrepx9').text('Benötigen Sie einen Beleg?');
//     $('#receiptYesx9').text(' JA');
//     $('#receiptNox9').text(' NEIN');
//     $('#exBackx9').html('<b>Zurück</b>'); 





//      $('#stcx9').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
//      $('#stcXx9').text('(Tippen Sie auf Schließen)');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
//    $('#ctsXx9').text('(Tippen Sie auf Schließen)');


//      $('#oopsx9').html('<h1><b> Hoppla</b></h1>');


//   $('#machinex9').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

//   $('#limitx9').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


// });




// $('#hindi2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);
// $('#cash2x9').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

//   $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
//   $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);
  
  

//   $('#submit2x9').html(' जमा करें ');

//   $('#exit2x9').html(' रद्द ');

//   $('#submit2Yx9').html(' जमा करें ');

//   $('#exit2Yx9').html(' रद्द ');


//   $('.confirm2x9').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2x9').html('<h2><b> वापस</b></h2>');

//   $('.confirm2Yx9').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx9').html('<h2><b> वापस</b></h2>');




//   $('#casdex9').html('<b> कृपया अपना नकद जमा डालें</b>');
//   $('#casde2x9').html('<b> कृपया अपना नकद जमा डालें</b>');


//   $('#billsx9').text('');
//   $('#billsx9').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);

//   $('#retrx9').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

//   $('#chedex9').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



// $('#cancelx9').text('(रद्द करने के लिए टैप करें)');
//   $('#cancel2x9').text('(रद्द करने के लिए टैप करें)');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
//   $('#sfcaCancelx9').text('(बंद करने के लिए टैप करें)');

//   $('#sfsax9').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
//   $('#sfsaCancelx9').text('(बंद करने के लिए टैप करें)');




//     $('#gbyx9').html('<b>अच्छा अलविदा</b>');
//     $('#nrepx9').text('रसीद की आवश्यकता है?');
//     $('#receiptYesx9').text('हाँ');
//     $('#receiptNox9').text('नहीं');
//     $('#exBackx9').html('<b> वापस जाओ</b>'); 


//      $('#stcx9').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
//      $('#stcXx9').text('(बंद करने के लिए टैप करें)');

//    $('#ctsx9').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
//    $('#ctsXx9').text('(बंद करने के लिए टैप करें)');


//      $('#oopsx9').html('<h1><b> ओह्स</b></h1>');



//   $('#machinex9').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

//   $('#limitx9').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







//   });



// $('#french2x9').click(function(){
  
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);

// $('#cash2x9').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

//    $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);
  
  

//   $('#submit2x9').html(' Soumettre ');

//   $('#exit2x9').html(' Annuler ');

//   $('#submit2Yx9').html(' Soumettre ');

//   $('#exit2Yx9').html(' Annuler ');


//   $('.confirm2x9').html('<h2><b> Confirmer</b></h2>');
//   $('.back2x9').html('<h2><b> Retour</b></h2>');

//   $('.confirm2Yx9').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx9').html('<h2><b> वापस</b></h2>');



//   $('#casdex9').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
//   $('#casde2x9').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

//   $('#billsx9').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);

//   $('#retrx9').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

//   $('#chedex9').html('<b>  location Insérez votre chèque de caution maintenant</b>');

//   $('#cancelx9').text('(Appuyer pour annuler)');
//   $('#cancel2x9').text('(Appuyer pour annuler)');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
//   $('#sfcaCancelx9').text('(Appuyez pour fermer)');


//   $('#sfsax9').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
//   $('#sfsaCancelx9').text('(Appuyez pour fermer)');



//     $('#gbyx9').html('<b> Au Revoir</b>');
//     $('#nrepx9').text("Besoin d'un reçu?");
//     $('#receiptYesx9').text(' OUI');
//     $('#receiptNox9').text(' NON');
//     $('#exBackx9').html('<b> Retour</b>'); 


//      $('#stcx9').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
//      $('#stcXx9').text('(Appuyer pour fermer)');



//    $('#ctsx9').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
//    $('#ctsXx9').text('(Appuyez pour fermer)');


//      $('#oopsx9').html('<h1><b> Oups</b></h1>');



//   $('#machinex9').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

//   $('#limitx9').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

//   });





// $('#arabic2x9').click(function(){
// userInputx9 = '0.00';
// $('#qtyvalue2x9').attr('value', userInputx9);
// $('#cash2x9').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

//   $('#withdraw2x9').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
//   $('#checks2x9').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

//    $('#amountx9').text('$');
//    $('#qtyvalue2x9').attr('value', userInputx9);
  

//   $('#submit2x9').html(' إرسال ');
//   $('#exit2x9').html(' الغاء ');

//   $('#submit2Yx9').html(' إرسال ');
//   $('#exit2Yx9').html(' الغاء ');




//   $('.confirm2x9').html('<h2><b> تأكيد </b></h2>');
//   $('.back2x9').html('<h2><b> العودة</b></h2>');

//   $('.confirm2Yx9').html('<h2><b> تأكيد </b></h2>');
//   $('.back2Yx9').html('<h2><b> العودة</b></h2>');





//   $('#casdex9').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
//   $('#casde2x9').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


//   $('#billsx9').text(' ');
//   $('#billsx9').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
//   $('#qtyvalue2x9').attr('value', userInputx9);


//   $('#retrx9').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

//   $('#chedex9').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

//   $('#cancelx9').text('(الحنفية لإلغاء)');
//   $('#cancel2x9').text('(الحنفية لإلغاء)');

//   $('#sfcax9').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
//   $('#sfcaCancelx9').text('(انقر لإغلاق)');


// $('#sfsax9').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
//   $('#sfsaCancelx9').text('(انقر لإغلاق)');



//     $('#gbyx9').html('<b> وداعا</b>');
//     $('#nrepx9').text('تحتاج إلى استلام؟');
//     $('#receiptYesx9').text(' نعم');
//     $('#receiptNox9').text(' لا');
//     $('#exBackx9').html('<b> العودة</b>'); 


//      $('#stcx9').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
//      $('#stcXx9').text('(الحنفية لإغلاق)');



//    $('#ctsx9').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
//    $('#ctsXx9').text('(الحنفية لإغلاق)');


//      $('#oopsx9').html('<h1><b>عفوا</b></h1>');



//   $('#machinex9').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

//   $('#limitx9').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

// console.log('A Language Button clicked');


//   });



$('.OperationEndedPanelx9').click(function(){
  
  $(this).fadeOut();
  userInputx9 = '';
  userInputx9 = '0.00';
  $('#qtyvalue2x9').attr('value', userInputx9);

  console.log('User input is = ' + userInputx9)
 
 $('#cheTsav2x9').hide();
 $('#savTche2x9').hide();

  $('#checking33').removeClass('active');
  $('#saving33').removeClass('active');
  $('#deposx9, #deposx92').removeClass('active');
  $('#wdraw1x9, #wdraw2x9').removeClass('active');
  $('#transferx9, #trans2x9').removeClass('active');
  $('#sendx, #sendx9').removeClass('active');
  $('#ServiceMenux9').removeClass('active');

  $('.serB, .tofB, .sm2x3, .sm2x9, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.tofB, .acm2x2, .acm2x3, .acm2x9, .acm2x5, .acm2x6, .acm2x7').removeClass('active');

serviceValuex9 = '';   

     $('.pyx9').fadeOut();
     $('.PayButtonsx9 > label').removeClass('active');

  $('.SelectSendOrRequestx9').hide();
  $('#SubmitGasOrderx9').show();








});




$('#ScanBILLDEx9, #Scan2Yx9').click(function(){



$('.ScanMachinex9').show().click(function(){
  $(this).hide();
});


});


$('#BSFuelsx9').click(function(){
   $('#submit2Yx9').hide();
});




$('.Fuel1x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas1x9').show();
  $('.UseGasx9').hide();
  $('.UseGas1x9').show();

 });

$('.Fuel2x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas2x9').show();
  $('.UseGasx9').hide();
  $('.UseGas2x9').show();

 });

$('.Fuel3x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas3x9').show();
  $('.UseGasx9').hide();
  $('.UseGas3x9').show();

 });

$('.Fuel4x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas4x9').show();
  $('.UseGasx9').hide();
  $('.UseGas4x9').show();


 });

$('.Fuel5x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas5x9').show();
  $('.UseGasx9').hide();
  $('.UseGas5x9').show();


 });

$('.Fuel6x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas6x9').show();
  $('.UseGasx9').hide();
  $('.UseGas6x9').show();


 });

$('.Fuel7x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas7x9').show();
  $('.UseGasx9').hide();
  $('.UseGas7x9').show();


 });

$('.Fuel8x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas8x9').show();
  $('.UseGasx9').hide();
  $('.UseGas8x9').show();


 });

$('.Fuel9x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas9x9').show();
  $('.UseGasx9').hide();
  $('.UseGas9x9').show();


 });

$('.Fuel10x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas10x9').show();
  $('.UseGasx9').hide();
  $('.UseGas10x9').show();


 });


$('.Fuel11x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas11x9').show();
  $('.UseGasx9').hide();
  $('.UseGas11x9').show();


 });


$('.Fuel12x9').click(function(){

  $('.GiftGasx9').hide();
  $('.GiftGas12x9').show();
  $('.UseGasx9').hide();
  $('.UseGas12x9').show();


 });






$('.UseGas1x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel1x9);

});


$('.UseGas2x9').click(function(){
  
 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel2x9);

});

$('.UseGas3x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel3x9);

});


$('.UseGas4x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel4x9);
 
});

$('.UseGas5x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel5x9);
 
});

$('.UseGas6x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel6x9);
 
});

$('.UseGas7x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel7x9);
 
});

$('.UseGas8x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel8x9);
 
});

$('.UseGas9x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel9x9);
 
});

$('.UseGas10x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel10x9);
 
});

$('.UseGas11x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel11x9);
 
});

$('.UseGas12x9').click(function(){

 $('.UseGasx9').removeClass('SelectedUseGasx9');
 $(this).addClass('SelectedUseGasx9');
 $('#qtyvalueGasx9').attr('value', inputFuel12x9);
 
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


 serviceValuex9 = "BuyGas";

 $('.UseGasx9').click(function(){
   serviceValuex9 = "UseGas";

});


$('.Fuelx9').click(function(){ 
   if (serviceValuex9 === "UseGas"){

   console.log('ServiceValue is = ' + serviceValuex9);

   $('#SubmitGasOrderx9, .amountx9, .EnterFuelQtyx9').hide();
   $('.UseGasInputx9, #ScanPumpOnex9').show();
 


  }else if (serviceValuex9 === "BuyGas"){

  console.log('ServiceValue is = ' + serviceValuex9);


  // userInputx9 = '0.00';
  // $('#qtyvalue2x9').attr('value', userInputx9);
  console.log('userInput is = ' + userInputx9);

}

    $('.ScanconfBack2Yx9, .pyx9').hide(); 

});










$('.StationLocationx9, .Scanconfirm2Yx9, .lan2MOBIx9').click(function(){
  serviceValuex9 = "BuyGas";
  console.log('ServiceValue is = ' + serviceValuex9);

   userInputx9 = '0.00';
   $('#qtyvalue2x9').attr('value', userInputx9);

   $('.amountx9').show();
   $('.UseGasInputx9').hide();

   $('.EnterFuelQtyx9').hide();
   $('#SubmitGasOrderx9').show();
   $('#ScanPumpOnex9').hide();


});





$('#SubmitGasOrderx9').click(function(){


    $(this).hide();
    $('.ScanconfBack2Yx9').show()
    $('.numVx9, .NumPadx9').hide();
    $('.pyx9').fadeIn();
   

    });



$('#ScanPumpOnex9').click(function(){


    $(this).hide();
    $('.ScanconfBack2Yx9').show();
     $('.ScanMachinex9').show();

    // $('.numVx9, .NumPadx9').hide();
    // $('.pyx9').fadeIn();
    

});








$('.Scanconfirm2Yx9').click(function(){


    console.log('ServiceValue is = ' + serviceValuex9);

      $('.NumPadx9, .ScanconfBack2Yx9, .ScanMachinex9, .pyx9, .GiftGasx9, .UseGasx9').hide();
      $('.numVx9').show();
     

      $('.Fuelx9').removeClass('active');
      $('.UseGasx9').removeClass('SelectedUseGasx9');



     $('#SubmitGasOrderx9, .GasPurchasedx9').show();




    inputFuel1x9 = 0;
    inputFuel2x9 = 0;
    inputFuel3x9 = 0;
    inputFuel4x9 = 0;
    


});








$('.Scanback2Yx9').click(function(){

console.log('Scanback was clicked was clicked');

    if(serviceValuex9 === "UseGas"){
     $('.ScanconfBack2Yx9, .ScanMachinex9').hide();
     $('#ScanPumpOnex9').show();
    }

    if(serviceValuex9 === "BuyGas"){
      $('.NumPadx9, .pyx9, .ScanconfBack2Yx9').hide();
      $('.numVx9').show();
      $('#SubmitGasOrderx9').show();
    }
    
});
























































// /////////////////////////////////////////////////////////////////










////////////////////////////

$('.TransportationModelx4').click(function(){

    $('.qty22, .qty33, .qty88, .qty99A').hide();

    $('.PayButtonsMOBI22 > label, .PayButtons22> label').removeClass('active');

    $('.itmV, .itmV22, .itmV33, .itmV44, .itmV55, .itmV55A, .itmV66A, .itmV77A, .itmV88, .itm99A, .itmV10A').removeClass('active');

    total22= "$0.00";
    $('.total2').attr('value', total22);

});




// //////////////////////////



































$('.Model1x9').click(function(){
  $('.FuelModelx9').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4 ');
});

$('.Model2x9').click(function(){
  $('.FuelModelx9').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});


















$('#SelDrinkx9').click(function(){
  $('.SelectFuelsx9').hide();
  $('.SelectDrinksx9').show();
});
$('#SelBoCarex9').click(function(){
  $('.SelectFuelsx9').hide();
  $('.SelectBodyCarex9').show();
});
$('#SelDeterx9').click(function(){
  $('.SelectFuelsx9').hide();
  $('.SelectDetergentx9').show();
});
$('#SelGasFuex9').click(function(){
  $('.SelectFuelsx9').hide();
  $('.SelectGasFuex9').show();
});




$('#Transfer4x1').click(function(){


  $('.MainTransferx5').show();

});





$('.GiftFuelx8').click(function(){
   $('.ScanPumpOnex8').hide();
});



// $(this).children('button').show().fadeOut(5000);