

$(document).ready(function(){

InnerRightypex8 === "CarMobile";
screenTypex8 = "Machinex8";

 $('.ServiceMenux8').click(function(){


    $('.serDropx8').show('fast').click(function(){
      $(this).hide('fast');
    });

      userInputx8='0.00';
         $('#qtyvalue2x8').attr('value', userInputx8);
 });


   




  $('#exit2Yx8').click(function(){
  console.log('exitx8Y button was clicked');
   
       $('.goodbyex8').fadeIn('fast');
       $('#receiptYesx8, #receiptNox8').removeClass('active');
       $('.ServicePanelx8').hide();
       serviceValuex8 = '';
         userInputx8='0.00';
         $('#qtyvalue2x8').attr('value', userInputx8);



});


// ///////Show different models///////////


// $('.Model1x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.Serm').show('');
// });



// $('.Model2x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x2').show('');
// });




// $('.Model3x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x8').show('');
// });



// $('.Model5x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x8').click(function(){

//   $('.Modelsx8, .Serm, serm2x2, serm2x3, .serm2x8').hide('');
//   $('.serm2x7').show('');
// });



   $('.lan2x8, .innerRightx8, .innerLeftx8').hide();
   $('.BlankTapbarx8 , .LanBgroupMOBIx8, .innerRight3x8').show();
   InnerRightypex8 = "GasPump";




/////////Service Values////////////
/////////Service Values////////////





$('#Deposit4x1, #Deposit4x2, #Deposit4x3, #Deposit4x8, #Deposit4x5, #Deposit4x6, #Deposit4x7').click(function(){
   serviceValuex8 = 'Deposit';
   console.log('service value is: ' + serviceValuex8);
   userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);
});



$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x8, #Transfer4x5, #Transfer4x6, #Transfer4x7').click(function(){
   serviceValuex8 = 'Transfer';
   console.log('service value is: ' + serviceValuex8);
   userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);
});



$('#Sell4x1, #Sell4x2, #Sell4x3, #Sell4x8, #Sell4x5, #Sell4x6, #Sell4x7').click(function(){
   serviceValuex8 = 'Fuels';
   console.log('service value is: ' + serviceValuex8);
   userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);
});



$('#Buy4x1, #Buy4x2, #Buy4x3, #Buy4x8, #Buy4x5, #Buy4x6, #Buy4x7').click(function(){
   serviceValuex8 = 'Fuels';
   console.log('service value is: ' + serviceValuex8);
   userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);
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

$('.Model1x8').click(function(){

  $('.SermCompletex8, #SubmitGasOrderx8').hide('');
  $('.SermSimplex8, .ScanPumpOnex8').show('');
  serm = "Simple";
});



$('.Model2x8').click(function(){

  $('.SermSimplex8, .ScanPumpOnex8').hide('');
  $('.SermCompletex8, #SubmitGasOrderx8').show('');
  serm = "Complete";
});








$('.GasStationsx8').click(function(){

$('.MotherSermx8, .QtyFinx8, .GasBuyNotificationsx8').hide();
$('.GasStationMapx8').fadeIn();
    console.log('Serm = ' + serm);

});


////Buy gas

$('.BuyGasx8').click(function(){

$('.GasStationMapx8, .GasBuyNotificationsx8').hide();
$('.MotherSermx8, .QtyFinx8').show();

  if (serm === 'Simple'){
  $('.SermCompletex8').hide();
  $('.SermSimplex8').show();
  }
  if (serm === "Complete"){
  $('.SermSimplex8').hide();
  $('.SermCompletex8').show();
  }

    console.log('Serm = ' + serm)
});




////notifications

$('.GasNotix8').click(function(){

$('.GasStationMapx8, .MotherSermx8, .QtyFinx8').hide();
$('.GasBuyNotificationsx8').show();
    console.log('Serm = ' + serm);

});









// $('.Model3x8').click(function(){

//   $('.Modelsx8').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x8').click(function(){

//   $('.Modelsx8').hide('');
//   $('.serm2x8').show('');
// });



// $('.Model5x8').click(function(){

//   $('.Modelsx8').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x8').click(function(){

//   $('.Modelsx8').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x8').click(function(){

//   $('.Modelsx8').hide('');
//   $('.serm2x7').show('');
// });



// ///////Show different models///////////


  $('#receiptYesx8, #receiptNox8').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x8, .sendMoney2x8, .CreditCardsx8, .assistancex8, .Loanx8').hide();
             $('#billDenox8 ,#noBillDenox8').removeClass('active');

       
             $('.confBack2Yx8').hide();
             $('.billsx8').hide();
             $('.numVx8, #amountx8, #qtyvalue2x8').show();
             $('#submit2Yx8, #exit2Yx8').show();
             $('#wdraw1x8, #wdraw2x8, #transferx8, #trans2x8').removeClass('hili');

                  $('.goodbyex8').hide();
                     serviceValuex8='';
                     tofValuex8='waived';
                     userInputx8='0.00';
                  $('#qtyvalue2x8').attr('value', userInputx8);
       
                   $('#cheTsavx8, #cheTsav2x8').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x8').hide().fadeIn('10000');

      });


    


    $('.back24x8, .confirm24x8').click(function(){
      $('.confBack24x8').hide();





});   








$('.TapBx8').click(function(){

  $('.goodbyex8').fadeOut('fast');
});





// /////////Headers///////////////////


$('#atmHomex8, #ATM1Machinex8').click(function(){

$('.OtherHeaderx8').hide();


});





$('#MyFinancesx8').click(function(){
$('.HeaderPx8').hide();
$('.OtherHeaderx8, .MyFinancesx8').show();



});



$('.atmNotix8').click(function(){
$('.HeaderPx8').hide();
$('.OtherHeaderx8, .Notificationsx8').show();



});



$('#atmSetx8').click(function(){
$('.HeaderPx8').hide();
$('.OtherHeaderx8, .Settingsx8').show();


});



// ///////////////////


datex8= '';

$('#CreditCx8, #PayBx8, #sendx8, #loanx8').click(function(){
$('.Schedulex8').show();
$('.Schedulex8 > #datepicker').attr('value', datex8);

});


$('#closeSer2Panelsx8, .Confirm2Yx8, .exit2Yx8').click(function(){

$('.ServicePanelx8').hide();
$('.TopHalfx8').show();

$('.Schedulex8 > #datepicker').attr('value', datex8);
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











tofValuex8 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex8='';
tofValuex8='waived';
billDenox8= false;


//stores user inputs






$('.NumPadx8').click(function(){

if(userInputx8 === '0.00'){

   userInputx8 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});


$('.NumPadx8').click(function(){

if(userInputx8 === '0'){

   userInputx8 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});




















//////////////////////////////////////////////////////////////////////////







$('.QtyValueCoverx8').click(function(){
$('.NumPadx8').hide();
$('.numVx8').show();


});











////////////////////////////////////////////////////////////////////////////







var userInputx8='';





 $('.numVx8').click(function(){
   userInputx8 += $(this).attr("value");

   $('#qtyvalue2x8, .qtyvalueGasx8').attr('value', userInputx8);
    console.log('A numV was clicked');

 
    });






//backspace button
    $('#backSpacex8').click(function(){

    var getInputx8 = userInputx8;
    var lenx8 = getInputx8.length -1;
    var newInputx8 = getInputx8.substring(0, lenx8);

    userInputx8 = newInputx8;
    $('#qtyvalue2x8, .qtyvalueGasx8').attr('value', userInputx8);  
    console.log('New input is : ' + userInputx8);

});







// //////////////////////////////////////////////////////////////////////





//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx8, #qtyvalue2x8').click(function(){
  $('.numRx8, .numCCx8').hide();
  $('.numVx8').show();
});




















// ///////////Bill DenoMination Official x8///////////
///////////////////Pay Your Bills/////////////






  $('#BILLDEx8').click(function(){

    serviceValuex8="Withdraw";

    $('#cheTsavx8').hide();
    $('#savTchex8').hide();
    // $('#qtyvalue2x8, #qtyvalueDenox8').hide();
    // $('#qtyvalueBillDenomix8').show();
    $('.BillDenominationWdrawx8').fadeIn('fast');
    
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);

    console.log("Service value x8 is = " + serviceValuex8);
    console.log("qtyvalue = Deno" );







  tofValuex8 = 'waived';
  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);
  $('.CreditBillDenomisx8').fadeIn('slow');



  BillDenomi1Imputx8=0;
  BillDenomi2Imputx8=0;
  BillDenomi3Imputx8=0;
  BillDenomi4Imputx8=0;
  BillDenomi5Imputx8=0;
  BillDenomi6Imputx8=0;





});








// /////////////////////////////////
  var SelectedBillx8=""


  $('.BillDenomix8').click(function(){
    SelectedBillx8 = $(this).attr('value');
    console.log('Current Selected Bill x8 is : ' + SelectedBillx8);




// DenoImputTotalx8 = DenoImput10x8 + DenoImput20x8 + DenoImput50x8 + DenoImput100x8;
console.log('BillDenomi total is ' + userInputx8);

$('.pyx8').hide();
$('.PayButtonsx8 > label').removeClass('active');
$('.confBack2Yx8').hide();
$('#submit2Yx8, #exit2Yx8').show();


});



  // BillDenomi1Imputx8='';
  // BillDenomi2Imputx8='';
  // BillDenomi3Imputx8='';
  // BillDenomi4Imputx8='';







/////////////////////



$('#BillDenomi1x8').click(function(){

console.log('BillDenomi 1 x8 was selected');

 BillDenomi1Imputx8 = 0;
 $('#BillDenomi1ImputLabelx8 > input').attr('value', BillDenomi1Imputx8);

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

  
  


   $('#BillDenomi1Imputx8, #BillDenomi1ImputLabelx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numBillDenomi1x8').show();



  console.log(BillDenomi1Imputx8 + BillDenomi2Imputx8 + BillDenomi3Imputx8 + BillDenomi4Imputx8 + BillDenomi5Imputx8);



});


// /////////


$('.numBillDenomi1x8').click(function(){

  if (BillDenomi1Imputx8 === 0 ){
    BillDenomi1Imputx8 = '';
  }
});


//////////





 $('.numBillDenomi1x8').click(function(){

          BillDenomi1Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi1ImputLabelx8 > input').attr('value', BillDenomi1Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi1Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi1Imputx8);
           
userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceBillDenomi1x8').click(function(){

           var getInput = BillDenomi1Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi1Imputx8 = newInput;
            $('#BillDenomi1ImputLabelx8 > input').attr('value', BillDenomi1Imputx8);
     
           console.log('New input is : ' + BillDenomi1Imputx8);

           console.log('back space was clicked' );
            
userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);




       });









//////////////////

// ///////////////




$('#BillDenomi2x8').click(function(){

 BillDenomi2Imputx8 =  0;
 $('#BillDenomi2ImputLabelx8 > input').attr('value', BillDenomi2Imputx8);



  


   $('#BillDenomi2Imputx8, #BillDenomi2ImputLabelx8').css('color','green');


 $('.NumPadx8').hide();
  $('.numBillDenomi2x8').show();


  console.log(BillDenomi2Imputx8 + BillDenomi2Imputx8 + BillDenomi2Imputx8 + BillDenomi4Imputx8 + BillDenomi5Imputx8);



userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



});



// /////////


$('.numBillDenomi2x8').click(function(){

  if (BillDenomi2Imputx8 === 0 ){
    BillDenomi2Imputx8 = '';
  }
});


//////////




 $('.numBillDenomi2x8').click(function(){

          BillDenomi2Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi2ImputLabelx8 > input').attr('value', BillDenomi2Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi2Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi2Imputx8);
           

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceBillDenomi2x8').click(function(){

           var getInput = BillDenomi2Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi2Imputx8 = newInput;
            $('#BillDenomi2ImputLabelx8 > input').attr('value', BillDenomi2Imputx8);
     
           console.log('New input is : ' + BillDenomi2Imputx8)
            

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });








// //////////////////






// ///////////////




$('#BillDenomi3x8').click(function(){

 BillDenomi3Imputx8 =  0;
 $('#BillDenomi3ImputLabelx8 > input').attr('value', BillDenomi3Imputx8);



  


   $('#BillDenomi3Imputx8, #BillDenomi3ImputLabelx8').css('color','green');


 $('.NumPadx8').hide();
  $('.numBillDenomi3x8').show();


  console.log(BillDenomi3Imputx8 + BillDenomi3Imputx8 + BillDenomi3Imputx8 + BillDenomi4Imputx8 + BillDenomi5Imputx8);



userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



});



// /////////


$('.numBillDenomi3x8').click(function(){

  if (BillDenomi3Imputx8 === 0 ){
    BillDenomi3Imputx8 = '';
  }
});


//////////




 $('.numBillDenomi3x8').click(function(){

          BillDenomi3Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi3ImputLabelx8 > input').attr('value', BillDenomi3Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi3Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi3Imputx8);
           

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceBillDenomi3x8').click(function(){

           var getInput = BillDenomi3Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi3Imputx8 = newInput;
            $('#BillDenomi3ImputLabelx8 > input').attr('value', BillDenomi3Imputx8);
     
           console.log('New input is : ' + BillDenomi3Imputx8)
            

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });








// //////////////////




$('#BillDenomi4x8').click(function(){

 BillDenomi4Imputx8 = 0;
 $('#BillDenomi4ImputLabelx8 > input').attr('value', BillDenomi4Imputx8);





   $('#BillDenomi4Imputx8, #BillDenomi4ImputLabelx8').css('color','green');


  $('.NumPadx8').hide();

  $('.numBillDenomi4x8').show();



  console.log(BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi5Imputx8);


userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});



// /////////


$('.numBillDenomi4x8').click(function(){

  if (BillDenomi4Imputx8 === 0 ){
    BillDenomi4Imputx8 = '';
  }
});


//////////





 $('.numBillDenomi4x8').click(function(){

          BillDenomi4Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi4ImputLabelx8 > input').attr('value', BillDenomi4Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi4Imputx8 + BillDenomi5Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi4Imputx8);
           
userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpaceBillDenomi4x8').click(function(){

           var getInput = BillDenomi4Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi4Imputx8 = newInput;
            $('#BillDenomi4ImputLabelx8 > input').attr('value', BillDenomi4Imputx8);
     
           console.log('New input is : ' + BillDenomi4Imputx8);
            

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });






$('#BillDenomi5x8').click(function(){

 BillDenomi5Imputx8 =  0;
 $('#BillDenomi5ImputLabelx8 > input').attr('value', BillDenomi5Imputx8);





   $('#BillDenomi5Imputx8, #BillDenomi5ImputLabelx8').css('color','green');


  $('.NumPadx8').hide();
  $('.numBillDenomi5x8').show();



  console.log(BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi5Imputx8);


userInputx8 = userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});


// /////////


$('.numBillDenomi5x8').click(function(){

  if (BillDenomi5Imputx8 === 0 ){
    BillDenomi5Imputx8 = '';
  }
});


//////////





 $('.numBillDenomi5x8').click(function(){

          BillDenomi5Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi5ImputLabelx8 > input').attr('value', BillDenomi5Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi5Imputx8 + BillDenomi5Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi5Imputx8);
           
userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpaceBillDenomi5x8').click(function(){

           var getInput = BillDenomi5Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi5Imputx8 = newInput;
            $('#BillDenomi5ImputLabelx8 > input').attr('value', BillDenomi5Imputx8);
     
           console.log('New input is : ' + BillDenomi5Imputx8)
            

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });




// ///////////////////////////




$('#BillDenomi6x8').click(function(){
 BillDenomi6Imputx8 =  0;
 $('#BillDenomi6ImputLabelx8 > input').attr('value', BillDenomi6Imputx8);






   $('#BillDenomi6Imputx8, #BillDenomi6ImputLabelx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numBillDenomi6x8').show();



  console.log(BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi4Imputx8 + BillDenomi6Imputx8);


userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});




// /////////


$('.numBillDenomi6x8').click(function(){

  if (BillDenomi6Imputx8 === 0 ){
    BillDenomi6Imputx8 = '';
  }
});


//////////




 $('.numBillDenomi6x8').click(function(){

          BillDenomi6Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#BillDenomi6ImputLabelx8 > input').attr('value', BillDenomi6Imputx8);

           console.log("current BillDenomi 1 imput x8 number is :" + BillDenomi6Imputx8 + BillDenomi6Imputx8);
           console.log('New BillDenomi 1 imput x8 is : ' + BillDenomi6Imputx8);
           
userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpaceBillDenomi6x8').click(function(){

           var getInput = BillDenomi6Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          BillDenomi6Imputx8 = newInput;
            $('#BillDenomi6ImputLabelx8 > input').attr('value', BillDenomi6Imputx8);
     
           console.log('New input is : ' + BillDenomi6Imputx8)
            

userInputx8 = parseInt(BillDenomi1Imputx8)+ parseInt(BillDenomi6Imputx8) + parseInt(BillDenomi2Imputx8) + parseInt(BillDenomi3Imputx8) + parseInt(BillDenomi4Imputx8) + parseInt(BillDenomi5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });





// });////End of BillDenomi Payment/////////////*********************************



// });////End of billtype click/////////////*********************************













/////////// /Close Button for service pannels////////////////////




//

$('#closeSer2Panelsx8, .closeSer2Panelsx8').click(function(){



$('.DenominatedBillsx8').removeClass('active');


     $('.pyx8').hide();
     $('.PayButtonsx8 > label').removeClass('active');

$('.ScanOrGiftx8, .SelectBuyOrSellx8').hide();

  $('#cheTsav2x8, #savTche2x8').hide();
  $('.confBack2Yx8').hide();
  $('#submit2Yx8, #exit2Yx8').show(); 

$('.ServicePanelx8').fadeOut();

  $('.NumPadx8').hide();
  $('.numVx8').show();





   $('#qtyvalueDenox8, #qtyvalueCardx8, #qtyvalueQPayx8').hide();

         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);

         $('#qtyvalue2x8').show();


         $('#DenoImput10Labelx8 > input').attr('value','0');
         $('#DenoImput20Labelx8 > input').attr('value','0');
         $('#DenoImput50Labelx8 > input').attr('value','0');
         $('#DenoImput100Labelx8 > input').attr('value', '0');



          DenoImput10x8='';
          DenoImput20x8='';
          DenoImput50x8='';
          DenoImput100x8='';


  $('.friendsSpanx8, .friendImputx8').css('color','whitesmoke');


  $('.SelectSendOrRequestx8').hide();
  $('#SubmitGasOrderx8').show();



  
 $('.FinBBBx8').show();

 

});








// ////////////////////





$('#sendx, #sendx8').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x8').fadeIn('fast');
  $('#cheTsav2x8, #savTche2x8').fadeOut();
 serviceValuex8 ='WireTransfer';
 tofValuex8 = "waived";
 console.log('tofValue is :' + tofValuex8);
 console.log('serviceValue is: ' + serviceValuex8);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx8').hide();
    $('#savTchex8').hide();
   serviceValuex8 =$(this).attr('value');
   $('#labelATMx8').text('Pay Bill & Tickets');
   $('#routingx8').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x8').fadeIn('fast');
 serviceValuex8=$(this).attr('value');
 tofValuex8="send";
 console.log('tofValue is :' + tofValuex8);
 console.log('serviceValue is: ' + serviceValuex8);



});








$('#cash2x8, #wdraw1x8, #wdraw2x8, #checks2x8, #CreditCx8, #Loanx8, #Livex8, #QuickPayx8, .sendFromCheckingsx8').click(function(){
  
// $('.sm2x8, .serB').click(function(){
  $('#savTchex8, #cheTsavx8').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1x8, #wdraw2x8').click(function(){
  
// $('.sm2x8, .serB').click(function(){
  $('#savTche2x8, #cheTsav2x8').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
  console.log('wdraw was clicked');
});






$('#checking2x8, #saving2x8').click(function(){
   tofValuex8= $(this).attr('value');
   console.log('tofValue is :' + tofValuex8);
   console.log('serviceValue is: ' + serviceValuex8);


});


   
  
  $('#Livex8').click(function(){
    $('#cheTsavx8').hide();
    $('#savTchex8').hide();

    $('.assistancex8').fadeIn('fast');

  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan/////////////////////////



// $('#Loanx8').click(function(){
//   serviceValuex8="Loan";
//   tofValuex8='waived';
//   console.log("#Loan has been clicked");
//   console.log("Service value is =" + serviceValuex8);
//    console.log("tofvalue is =" + tofValuex8);



//   $('.Loanx8').fadeIn('slow');

//   });


 $('.LoanGrantedx8').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex8').click(function(){
    $('#cheTsavx8x8').hide();
    $('#savTchex8x8').hide();

    $('.assistancex8').fadeIn('fast');

  });
 





/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx8').click(function(){

    serviceValuex8="CreditCards";

    $('#cheTsavx8').hide();
    $('#savTchex8').hide();
    // $('#qtyvalue2x8, #qtyvalueDenox8').hide();
    // $('#qtyvalueCardx8').show();
    $('.CreditCardsx8').fadeIn('fast');
    
         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);


    console.log("Service value x8 is = " + serviceValuex8);
    console.log("qtyvalue = Deno" );







serviceValuex8 = $(this).attr('value');
  tofValuex8 = 'waived';
  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);
  $('.CreditCardsx8').fadeIn('slow');



  Card1Imputx8= 0;
  Card2Imputx8= 0;
  Card3Imputx8= 0;
  Card4Imputx8= 0;





});





SelectedCardx8 = '';



$('.Cardx8').click(function(){
SelectedCardx8 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx8);

});




      $('#happyCardx8').attr('value', SelectedCardx8);
      $('#cardPaymentAmountx8').attr('value', userInputx8);







$('.CardStatementx8').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx8').fadeIn('slow');
});




$('.Cardx8').dblclick(function(){

  $('.CreditCardsx8').fadeOut(1500);
  $('#CardNamex8').attr('value', SelectedCardx8);
$('.CardStatementx8').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx8=""


  $('.Cardx8').click(function(){
    CardNumberx8 = $(this).attr('value');
    console.log('Current Card x8 is : ' + CardNumberx8);




// DenoImputTotalx8 = DenoImput10x8 + DenoImput20x8 + DenoImput50x8 + DenoImput100x8;
console.log('Card total is ' + userInputx8);




});





/////////////////////



$('#card1x8').click(function(){

console.log('Card 1 x8 was selected');
 Card1Imputx8 = 0;
 $('#Card1ImputLabelx8 > input').attr('value', Card1Imputx8);

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

  
  


   $('#Card1Imputx8, #Card1ImputLabelx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numCard1x8').show();



  console.log(Card1Imputx8 + Card2Imputx8 + Card3Imputx8 + Card4Imputx8);



});


$('.numCard1x8').click(function(){

  if (Card1Imputx8 === 0 ){
    Card1Imputx8 = '';
  }
});



 $('.numCard1x8').click(function(){

          Card1Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#Card1ImputLabelx8 > input').attr('value', Card1Imputx8);

           console.log("current Card 1 imput x8 number is :" + Card1Imputx8);
           console.log('New Card 1 imput x8 is : ' + Card1Imputx8);
           
userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceCard1x8').click(function(){

           var getInput = Card1Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx8 = newInput;
            $('#Card1ImputLabelx8 > input').attr('value', Card1Imputx8);
     
           console.log('New input is : ' + Card1Imputx8);
            
userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);




       });









//////////////////



$('#card2x8').click(function(){

  console.log('Card2 x8 was selected');

 Card2Imputx8 = 0;
 $('#Card2ImputLabelx8 > input').attr('value', Card2Imputx8);
   

   $('#Card2Imputx8, #Card2ImputLabelx8').css('color','green');


    $('.NumPadx8').hide();
   $('.numCard2x8').show();



  console.log(Card2Imputx8 + Card2Imputx8 + Card3Imputx8 + Card4Imputx8);


userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);


});




$('.numCard2x8').click(function(){

  if (Card2Imputx8 === 0 ){
    Card2Imputx8 = '';
  }
});






 $('.numCard2x8').click(function(){

          Card2Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#Card2ImputLabelx8 > input').attr('value', Card2Imputx8);

           console.log("current Card 1 imput x8 number is :" + Card2Imputx8);
           console.log('New Card 1 imput x8 is : ' + Card2Imputx8);
           

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceCard2x8').click(function(){

           var getInput = Card2Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx8 = newInput;
            $('#Card2ImputLabelx8 > input').attr('value', Card2Imputx8);
     
           console.log('New input is : ' + Card2Imputx8)
            
userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);




       });








// ///////////////




$('#card3x8').click(function(){
 Card3Imputx8 = 0;
 $('#Card3ImputLabelx8 > input').attr('value', Card3Imputx8);




  


   $('#Card3Imputx8, #Card3ImputLabelx8').css('color','green');


    $('.NumPadx8').hide();
   $('.numCard3x8').show();


  console.log(Card3Imputx8 + Card3Imputx8 + Card3Imputx8 + Card4Imputx8);



userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);



});


// /////////


$('.numCard3x8').click(function(){

  if (Card3Imputx8 === 0 ){
    Card3Imputx8 = '';
  }
});


//////////




 $('.numCard3x8').click(function(){

          Card3Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#Card3ImputLabelx8 > input').attr('value', Card3Imputx8);

           console.log("current Card 1 imput x8 number is :" + Card3Imputx8);
           console.log('New Card 1 imput x8 is : ' + Card3Imputx8);
           

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceCard3x8').click(function(){

           var getInput = Card3Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx8 = newInput;
            $('#Card3ImputLabelx8 > input').attr('value', Card3Imputx8);
     
           console.log('New input is : ' + Card3Imputx8)
            

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);



       });








// //////////////////




$('#card4x8').click(function(){
 Card4Imputx8 = 0;
 $('#Card4ImputLabelx8 > input').attr('value', Card4Imputx8);






   $('#Card4Imputx8, #Card4ImputLabelx8').css('color','green');


    $('.NumPadx8').hide();
   $('.numCard4x8').show();



  console.log(Card4Imputx8 + Card4Imputx8 + Card4Imputx8 + Card4Imputx8);

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);

});




// /////////


$('.numCard4x8').click(function(){

  if (Card4Imputx8 === 0 ){
    Card4Imputx8 = '';
  }
});


//////////




 $('.numCard4x8').click(function(){

          Card4Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#Card4ImputLabelx8 > input').attr('value', Card4Imputx8);

           console.log("current Card 1 imput x8 number is :" + Card4Imputx8);
           console.log('New Card 1 imput x8 is : ' + Card4Imputx8);
           
userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpaceCard4x8').click(function(){

           var getInput = Card4Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx8 = newInput;
            $('#Card4ImputLabelx8 > input').attr('value', Card4Imputx8);
     
           console.log('New input is : ' + Card4Imputx8)
            

userInputx8 = parseInt(Card1Imputx8) + parseInt(Card2Imputx8) + parseInt(Card3Imputx8) + parseInt(Card4Imputx8);

$('#qtyvalue2x8').attr('value', userInputx8);



       });









// });////End of Card Payment/////////////*********************************








///////////////////Pay Your Bills/////////////






  $('#PayBx8').click(function(){

    serviceValuex8="PayYourBills";

    $('#cheTsavx8').hide();
    $('#savTchex8').hide();
    // $('#qtyvalue2x8, #qtyvalueDenox8').hide();
    // $('#qtyvaluePBillx8').show();
    $('.PayBillsx8').fadeIn('fast');
    
        
         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);


    console.log("Service value x8 is = " + serviceValuex8);
    console.log("qtyvalue = Deno" );







serviceValuex8 = $(this).attr('value');
  tofValuex8 = 'waived';
  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);
  $('.CreditPBillsx8').fadeIn('slow');



  PBill1Imputx8=0;
  PBill2Imputx8=0;
  PBill3Imputx8=0;
  PBill4Imputx8=0;
  PBill5Imputx8=0;
  PBill6Imputx8=0;





});








// /////////////////////////////////
  var SelectedBillx8=""


  $('.PBillx8').click(function(){
    SelectedBillx8 = $(this).attr('value');
    console.log('Current Selected Bill x8 is : ' + SelectedBillx8);




// DenoImputTotalx8 = DenoImput10x8 + DenoImput20x8 + DenoImput50x8 + DenoImput100x8;
console.log('PBill total is ' + userInputx8);

$('.pyx8').hide();
$('.PayButtonsx8 > label').removeClass('active');
$('.confBack2Yx8').hide();
$('#submit2Yx8, #exit2Yx8').show();


});





/////////////////////



$('#PBill1x8').click(function(){

console.log('PBill 1 x8 was selected');

 PBill1Imputx8 =  $(this).attr('value');
 $('#PBill1ImputLabelx8 > input').attr('value', PBill1Imputx8);

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

  
  


   $('#PBill1Imputx8, #PBill1ImputLabelx8').css('color','green');


   $('.NumPadx8').hide();
    $('.numPBill1x8').show();



  console.log(PBill1Imputx8 + PBill2Imputx8 + PBill3Imputx8 + PBill4Imputx8 + PBill5Imputx8);



});


// /////////


$('.numPBill1x8').click(function(){

  if (PBill1Imputx8 === 0 ){
    PBill1Imputx8 = '';
  }
});


//////////





 $('.numPBill1x8').click(function(){

          PBill1Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill1ImputLabelx8 > input').attr('value', PBill1Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill1Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill1Imputx8);
           
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpacePBill1x8').click(function(){

           var getInput = PBill1Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx8 = newInput;
            $('#PBill1ImputLabelx8 > input').attr('value', PBill1Imputx8);
     
           console.log('New input is : ' + PBill1Imputx8);

           console.log('back space was clicked' );
            
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);




       });









//////////////////



$('#PBill2x8').click(function(){

  console.log('PBill2 x8 was selected');

 PBill2Imputx8 =  $(this).attr('value');
 $('#PBill2ImputLabelx8 > input').attr('value', PBill2Imputx8);


   $('#PBill2Imputx8, #PBill2ImputLabelx8').css('color','green');


  $('.NumPadx8').hide();
  $('.numPBill2x8').show();



  console.log(PBill2Imputx8 + PBill2Imputx8 + PBill3Imputx8 + PBill4Imputx8 + PBill5Imputx8);


userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);


});




// /////////


$('.numPBill2x8').click(function(){

  if (PBill2Imputx8 === 0 ){
    PBill2Imputx8 = '';
  }
});


//////////





 $('.numPBill2x8').click(function(){

          PBill2Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill2ImputLabelx8 > input').attr('value', PBill2Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill2Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill2Imputx8);
           

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpacePBill2x8').click(function(){

           var getInput = PBill2Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx8 = newInput;
            $('#PBill2ImputLabelx8 > input').attr('value', PBill2Imputx8);
     
           console.log('New input is : ' + PBill2Imputx8)
            
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);




       });








// ///////////////




$('#PBill3x8').click(function(){

 PBill3Imputx8 =  $(this).attr('value');
 $('#PBill3ImputLabelx8 > input').attr('value', PBill3Imputx8);



  


   $('#PBill3Imputx8, #PBill3ImputLabelx8').css('color','green');


 $('.NumPadx8').hide();
  $('.numPBill3x8').show();


  console.log(PBill3Imputx8 + PBill3Imputx8 + PBill3Imputx8 + PBill4Imputx8 + PBill5Imputx8);



userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



});



// /////////


$('.numPBill3x8').click(function(){

  if (PBill3Imputx8 === 0 ){
    PBill3Imputx8 = '';
  }
});


//////////




 $('.numPBill3x8').click(function(){

          PBill3Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill3ImputLabelx8 > input').attr('value', PBill3Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill3Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill3Imputx8);
           

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpacePBill3x8').click(function(){

           var getInput = PBill3Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx8 = newInput;
            $('#PBill3ImputLabelx8 > input').attr('value', PBill3Imputx8);
     
           console.log('New input is : ' + PBill3Imputx8)
            

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });








// //////////////////




$('#PBill4x8').click(function(){

 PBill4Imputx8 =  $(this).attr('value');
 $('#PBill4ImputLabelx8 > input').attr('value', PBill4Imputx8);





   $('#PBill4Imputx8, #PBill4ImputLabelx8').css('color','green');


  $('.NumPadx8').hide();

  $('.numPBill4x8').show();



  console.log(PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill5Imputx8);


userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});



// /////////


$('.numPBill4x8').click(function(){

  if (PBill4Imputx8 === 0 ){
    PBill4Imputx8 = '';
  }
});


//////////





 $('.numPBill4x8').click(function(){

          PBill4Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill4ImputLabelx8 > input').attr('value', PBill4Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill4Imputx8 + PBill5Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill4Imputx8);
           
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpacePBill4x8').click(function(){

           var getInput = PBill4Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx8 = newInput;
            $('#PBill4ImputLabelx8 > input').attr('value', PBill4Imputx8);
     
           console.log('New input is : ' + PBill4Imputx8)
            

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });






$('#PBill5x8').click(function(){

 PBill5Imputx8 =  $(this).attr('value');
 $('#PBill5ImputLabelx8 > input').attr('value', PBill5Imputx8);





   $('#PBill5Imputx8, #PBill5ImputLabelx8').css('color','green');


  $('.NumPadx8').hide();
  $('.numPBill5x8').show();



  console.log(PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill5Imputx8);


userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});


// /////////


$('.numPBill5x8').click(function(){

  if (PBill5Imputx8 === 0 ){
    PBill5Imputx8 = '';
  }
});


//////////





 $('.numPBill5x8').click(function(){

          PBill5Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill5ImputLabelx8 > input').attr('value', PBill5Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill5Imputx8 + PBill5Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill5Imputx8);
           
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpacePBill5x8').click(function(){

           var getInput = PBill5Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx8 = newInput;
            $('#PBill5ImputLabelx8 > input').attr('value', PBill5Imputx8);
     
           console.log('New input is : ' + PBill5Imputx8)
            

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });




// ///////////////////////////




$('#PBill6x8').click(function(){
 PBill6Imputx8 =  $(this).attr('value');
 $('#PBill6ImputLabelx8 > input').attr('value', PBill6Imputx8);






   $('#PBill6Imputx8, #PBill6ImputLabelx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numPBill6x8').show();



  console.log(PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill4Imputx8 + PBill6Imputx8);


userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);

});




// /////////


$('.numPBill6x8').click(function(){

  if (PBill6Imputx8 === 0 ){
    PBill6Imputx8 = '';
  }
});


//////////




 $('.numPBill6x8').click(function(){

          PBill6Imputx8 += $(this).attr("value");
          // $('#DenoImput10x8').attr('value', DenoImput10x8);


          $('#PBill6ImputLabelx8 > input').attr('value', PBill6Imputx8);

           console.log("current PBill 1 imput x8 number is :" + PBill6Imputx8 + PBill6Imputx8);
           console.log('New PBill 1 imput x8 is : ' + PBill6Imputx8);
           
userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



        
           });




       //backspace button
           $('#backSpacePBill6x8').click(function(){

           var getInput = PBill6Imputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx8 = newInput;
            $('#PBill6ImputLabelx8 > input').attr('value', PBill6Imputx8);
     
           console.log('New input is : ' + PBill6Imputx8)
            

userInputx8 = parseInt(PBill6Imputx8) + parseInt(PBill2Imputx8) + parseInt(PBill3Imputx8) + parseInt(PBill4Imputx8) + parseInt(PBill5Imputx8);
$('#qtyvalue2x8').attr('value', userInputx8);



       });





// });////End of PBill Payment/////////////*********************************




///////////////////Merchant/////////////



////////////////Merchant x8///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx8').click(function(){

 console.log("Service value x8 is = " + serviceValuex8);

serviceValuex8='Merchant';
tofValuex8 = 'waived';

$('.Merchantx8').fadeIn('slow');


    $('#cheTsavx8').hide();
    $('#savTchex8').hide();


  MerchantNamex8='';
  MerchantCardNUmberx8='';
  MerchantDateNUmberx8='';
  MerchantCVDx8='';
  MerchantZipCodex8='';







         $('.MerchantNameInputx8').attr('value', MerchantNamex8);
         $('.MerchantCardInputx8').attr('value', MerchantCardNUmberx8);
         $('.MerchantDateInputx8').attr('value', MerchantDateNUmberx8);
         $('.MerchantCVDInputx8').attr('value', MerchantCVDx8);
         $('.MerchantZipCodeInputx8').attr('value', MerchantZipCodex8);


 
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);



    console.log("Service value x8 is = " + serviceValuex8);



  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);

});






















// /////////////////////////////////
MerchantLabelx8="";

$('.MerchantLabelx8').click(function(){
MerchantLabelx8 = $(this).attr('value');
console.log("The selected MerchantLabelx8 is = " + MerchantLabelx8);

})








/////////////////////



$('.NameMerLabelx8').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx8').click(function(){




console.log('Merchant Name Label x8 was selected');

 MerchantCardNUmberx8 = "";
 $('.MerchantCardInputx8').attr('value', MerchantCardNUmberx8);


 $('.NumPadx8').hide();
 $('.numMCardx8').show();

});





 $('.numMCardx8').click(function(){

         MerchantCardNUmberx8+= $(this).attr("value");
          
          $('.MerchantCardInputx8').attr('value', MerchantCardNUmberx8);

           });



       //backspace button
           $('#backSpaceMCardx8').click(function(){

           var getInput = MerchantCardNUmberx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx8 = newInput;
            $('.MerchantCardInputx8').attr('value', MerchantCardNUmberx8);
     
           console.log('New input is : ' + MerchantCardNUmberx8);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx8').click(function(){




console.log('Merchant Name Label x8 was selected');

 MerchantDateNUmberx8 = "";
 $('.MerchantDateInputx8').attr('value', MerchantDateNUmberx8);


 $('.NumPadx8').hide();
 $('.numMDatex8').show();

});




 $('.numMDatex8').click(function(){

         MerchantDateNUmberx8+= $(this).attr("value");
          
          $('.MerchantDateInputx8').attr('value', MerchantDateNUmberx8);

           });



       //backspace button
           $('#backSpaceMDatex8').click(function(){

           var getInput = MerchantDateNUmberx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx8 = newInput;
            $('.MerchantDateInputx8').attr('value', MerchantDateNUmberx8);
     
           console.log('New input is : ' + MerchantDateNUmberx8);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx8').click(function(){




console.log('Merchant Name Label x8 was selected');

 MerchantCVDx8 = "";
 $('.MerchantCVDInputx8').attr('value', MerchantCVDx8);


 $('.NumPadx8').hide();
 $('.numCVDx8').show();

});




 $('.numCVDx8').click(function(){

          MerchantCVDx8+= $(this).attr("value");
          
          $('.MerchantCVDInputx8').attr('value', MerchantCVDx8);

           });



       //backspace button
           $('#backSpaceCVDx8').click(function(){

           var getInput = MerchantCVDx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx8 = newInput;
           $('.MerchantCVDInputx8').attr('value', MerchantCVDx8);
     
           console.log('New input is : ' + MerchantCVDx8);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx8').click(function(){




console.log('Merchant Name Label x8 was selected');

 MerchantZipCodex8 = "";
 $('.MerchantZipCodeInputx8').attr('value', MerchantZipCodex8);


 $('.NumPadx8').hide();
 $('.numMZipx8').show();
 
});




 $('.numMZipx8').click(function(){

         MerchantZipCodex8+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx8').attr('value', MerchantZipCodex8);

           });



       //backspace button
           $('#backSpaceMZipx8').click(function(){

           var getInput = MerchantZipCodex8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex8 = newInput;
            $('.MerchantZipCodeInputx8').attr('value', MerchantZipCodex8);
     
           console.log('New input is : ' + MerchantZipCodex8);
            


});






////////////////end of Merchant x8///////////////////////////
///////////////////////////////////////////////////////////





//////////////////////////////

$('.SwipeCardMerLabelx8').click(function(){

$('.MerchantImputx8').removeClass('SelectedMerchantLabel');
$('.MCardImputx8').removeClass('SelectedMerchantLabel');

  $('.MSwipex8').addClass('clickedSwipex8');
   $('.SwipeCardx8').fadeIn('fast');
  
})


$('.SwButtonx8').click(function(){
    $('.SwipeCardx8').fadeOut('fast');
    
});






/////////////////////////////////
/////////////////////////////////End of Merchant



////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex8').click(function(){

$('.feesx8').hide();

 console.log("Service value  is = " + serviceValue);

serviceValuex8='ChangePin';
tofValuex8 = 'waived';

$('.ChangePinx8 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx8='';
  ConPinx8='';





         $('.EnterPinInputx8').attr('value', EntPinx8);
         $('.ConfirmPinInputx8').attr('value', ConPinx8);


 
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);



    console.log("Service value  is = " + serviceValuex8);



  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);

});











// /////////////////////////////////
SelectedPinLabelx8="";

$('.ChangePinLx8').click(function(){
SelectedPinLabelx8 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx8);

});





/////////////////////



$('.EnterPinLabelx8').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx8 = "";
 $('.EnterPinInputx8').attr('value', EntPinx8);


 $('.NumPadx8').hide();
 $('.numEntPinx8').show();


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx8').click(function(){

         EntPinx8+= $(this).attr("value");
          
          $('.EnterPinInputx8').attr('value', EntPinx8);


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx8').click(function(){

           var getInput = EntPinx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx8 = newInput;
            $('.EnterPinInputx8').attr('value', EntPinx8);
     
           console.log('New input is : ' + EntPinx8);


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx8').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx8 = "";
 $('.ConfirmPinInputx8').attr('value', ConPinx8);


 $('.NumPadx8').hide();
 $('.numConPinx8').show();


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx8').click(function(){

         ConPinx8+= $(this).attr("value");
          
          $('.ConfirmPinInputx8').attr('value', ConPinx8);


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx8').click(function(){

           var getInput = ConPinx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx8 = newInput;
            $('.ConfirmPinInputx8').attr('value', ConPinx8);
     
           console.log('New input is : ' + ConPinx8);


// ////Password Match Notification//////////

           if(EntPinx8 !== '' && EntPinx8 === ConPinx8){
            
            $('.MatchedPinNOx8').hide();
            $('.MatchedPinYesx8').fadeIn();

           }



           if(EntPinx8 !== '' && EntPinx8 !== ConPinx8){

            $('.MatchedPinYesx8').hide();
            $('.MatchedPinNOx8').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////



// /////////Buy sell Fuels////////////////////////


$('#BSFuelsx8').click(function(){

serviceValuex8 = 'Fuels';
console.log("Service value x8 is = " + serviceValuex8);
console.log("Service value is = " + serviceValuex8);
console.log("tofvalue is = " + tofValuex8);

$('.BuyFuelsx8').fadeIn();
// $('.ToogleFuelsToLinearx8').fadeIn();
$('#submit2Yx8, #exit2Yx8, .ScanOrGiftx8').hide();

$('.SelectBuyOrSellx8').show();

         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);



inputFuel1x8=0;
inputFuel2x8=0;
inputFuel3x8=0;
inputFuel4x8=0;




         $('.inputFuel4x8').attr('value', inputFuel1x8);
         $('.inputFuel4x8').attr('value', inputFuel2x8);
         $('.inputFuel4x8').attr('value', inputFuel3x8);
         $('.inputFuel4x8').attr('value', inputFuel4x8);

});



$('.ScanOrGiftx8, .SelectBuyOrSellx8').click(function(){

  $(this).hide();
  $('.confBack2Yx8').fadeIn();


});







inputFuel1x8=0;
inputFuel2x8=0;
inputFuel3x8=0;
inputFuel4x8=0;
inputFuel5x8=0;
inputFuel6x8=0;
inputFuel7x8=0;
inputFuel8x8=0;
inputFuel9x8=0;




         $('.inputFuel4x8').attr('value', inputFuel1x8);
         $('.inputFuel4x8').attr('value', inputFuel2x8);
         $('.inputFuel4x8').attr('value', inputFuel3x8);
         $('.inputFuel4x8').attr('value', inputFuel4x8);
         $('.inputFuel5x8').attr('value', inputFuel5x8);
         $('.inputFuel6x8').attr('value', inputFuel6x8);
         $('.inputFuel7x8').attr('value', inputFuel7x8);
         $('.inputFuel8x8').attr('value', inputFuel8x8);
         $('.inputFuel9x8').attr('value', inputFuel9x8);         


 








// /////////////////////////////////
  SelectedFuelx8=""


  $('.Fuelx8').click(function(){
    serviceValuex8 = "Fuels";
    SelectedFriendx8 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFuelx8);

inputFuel1x8=0;
inputFuel2x8=0;
inputFuel3x8=0;
inputFuel4x8=0;
inputFuel5x8=0;
inputFuel6x8=0;
inputFuel7x8=0;
inputFuel8x8=0;
inputFuel9x8=0;


 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




});





$('.NumPadx8').click(function(){

if (inputFuel1x8 === '0' || 0){
  inputFuel1x8 = '';
}


if (inputFuel2x8 === '0' || 0){
  inputFuel2x8 = '';
}

if (inputFuel3x8 === '0' || 0){
  inputFuel3x8 = '';
}


if (inputFuel4x8 === '0' || 0){
  inputFuel4x8 = '';
}

if (inputFuel5x8 === '0' || 0){
  inputFuel5x8 = '';
}

if (inputFuel6x8 === '0' || 0){
  inputFuel6x8 = '';
}

if (inputFuel7x8 === '0' || 0){
  inputFuel7x8 = '';
}

if (inputFuel8x8 === '0' || 0){
  inputFuel8x8 = '';
}

if (inputFuel9x8 === '0' || 0){
  inputFuel9x8 = '';

}

});






inputFuel1x8=0;
inputFuel2x8=0;
inputFuel3x8=0;
inputFuel4x8=0;
inputFuel5x8=0;
inputFuel6x8=0;
inputFuel7x8=0;
inputFuel8x8=0;
inputFuel9x8=0;










/////////////////////



$('.Fuel1x8').click(function(){


$('.EnterFuel1x8').show();


console.log('Mike x8 was selected');

 inputFuel1x8 = 0;
 $('.inputFuel1x8').attr('value', inputFuel1x8);


   $('#Mikex8 > span, .inputFuel1x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel1x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

});



///////////

$('.numFuel1x8').click(function(){

  if (inputFuel1x8 === 0 ){
    inputFuel1x8 = '';
  }
});

// ///////




 $('.numFuel1x8').click(function(){

          inputFuel1x8 += $(this).attr("value");
          // $('.inputFuel1x8').attr('value', inputFuel1x8);


          $('.inputFuel1x8').attr('value', inputFuel1x8);
           $('#qtyvalueGasx8').attr('value', inputFuel1x8);
           $('.MaxUserAmountx8').attr('value', '$' + userInputx8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel1x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel1x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel1x8').click(function(){

           var getInput = inputFuel1x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel1x8 = newInput;
            $('.inputFuel1x8').attr('value', inputFuel1x8);
             $('#qtyvalueGasx8').attr('value', inputFuel1x8);
             $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
             $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);
     
           console.log('New input is : ' + inputFuel1x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);




       });


////////////////////////////////////



/////////////////////



$('.Fuel2x8').click(function(){


$('.EnterFuel2x8').show();


console.log('Mike x8 was selected');

 inputFuel2x8 = 0;
 $('.inputFuel2x8').attr('value', inputFuel2x8);


   $('#Mikex8 > span, .inputFuel2x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel2x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

});



///////////

$('.numFuel2x8').click(function(){

  if (inputFuel2x8 === 0 ){
    inputFuel2x8 = '';
  }
});

// ///////




 $('.numFuel2x8').click(function(){

          inputFuel2x8 += $(this).attr("value");
          // $('.inputFuel2x8').attr('value', inputFuel2x8);


          $('.inputFuel2x8').attr('value', inputFuel2x8);
           $('#qtyvalueGasx8').attr('value', inputFuel2x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel2x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel2x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel2x8').click(function(){

           var getInput = inputFuel2x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel2x8 = newInput;
            $('.inputFuel2x8').attr('value', inputFuel2x8);
             $('#qtyvalueGasx8').attr('value', inputFuel2x8);
     
           console.log('New input is : ' + inputFuel2x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
  $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);




       });


////////////////////////////////


/////////////////////



$('.Fuel3x8').click(function(){


$('.EnterFuel3x8').show();


console.log('Mike x8 was selected');

 inputFuel3x8 = 0;
 $('.inputFuel3x8').attr('value', inputFuel3x8);


   $('#Mikex8 > span, .inputFuel3x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel3x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

});



///////////

$('.numFuel3x8').click(function(){

  if (inputFuel3x8 === 0 ){
    inputFuel3x8 = '';
  }
});

// ///////




 $('.numFuel3x8').click(function(){

          inputFuel3x8 += $(this).attr("value");
          // $('.inputFuel3x8').attr('value', inputFuel3x8);


          $('.inputFuel3x8').attr('value', inputFuel3x8);
           $('#qtyvalueGasx8').attr('value', inputFuel3x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel3x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel3x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel3x8').click(function(){

           var getInput = inputFuel3x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel3x8 = newInput;
            $('.inputFuel3x8').attr('value', inputFuel3x8);
             $('#qtyvalueGasx8').attr('value', inputFuel3x8);
     
           console.log('New input is : ' + inputFuel3x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);




       });




//////////////////



/////////////////////



$('.Fuel4x8').click(function(){


$('.EnterFuel4x8').show();


console.log('Mike x8 was selected');

 inputFuel4x8 = 0;
 $('.inputFuel4x8').attr('value', inputFuel4x8);


   $('#Mikex8 > span, .inputFuel4x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel4x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

});



///////////

$('.numFuel4x8').click(function(){

  if (inputFuel4x8 === 0 ){
    inputFuel4x8 = '';
  }
});

// ///////




 $('.numFuel4x8').click(function(){

          inputFuel4x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel4x8').attr('value', inputFuel4x8);
           $('#qtyvalueGasx8').attr('value', inputFuel4x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel4x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel4x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel4x8').click(function(){

           var getInput = inputFuel4x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel4x8 = newInput;
            $('.inputFuel4x8').attr('value', inputFuel4x8);
             $('#qtyvalueGasx8').attr('value', inputFuel4x8);
     
           console.log('New input is : ' + inputFuel4x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);
 $('.MaxUserAmountx8').attr('value', '$' + userInputx8);
 $('.GasProgressnumericvaluex8').attr('value', "$" + userInputx8);




       });

//////////////////



/////////////////////



$('.Fuel5x8').click(function(){


$('.EnterFuel5x8').show();


console.log('Mike x8 was selected');

 inputFuel5x8 = 0;
 $('.inputFuel5x8').attr('value', inputFuel5x8);


   $('#Mikex8 > span, .inputFuel5x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel5x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numFuel5x8').click(function(){

  if (inputFuel5x8 === 0 ){
    inputFuel5x8 = '';
  }
});

// ///////




 $('.numFuel5x8').click(function(){

          inputFuel5x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel5x8').attr('value', inputFuel5x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel5x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel5x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel5x8').click(function(){

           var getInput = inputFuel5x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel5x8 = newInput;
            $('.inputFuel5x8').attr('value', inputFuel5x8);
     
           console.log('New input is : ' + inputFuel5x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////



/////////////////////



$('.Fuel6x8').click(function(){


$('.EnterFuel6x8').show();


console.log('Mike x8 was selected');

 inputFuel6x8 = 0;
 $('.inputFuel6x8').attr('value', inputFuel6x8);


   $('#Mikex8 > span, .inputFuel6x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel6x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numFuel6x8').click(function(){

  if (inputFuel6x8 === 0 ){
    inputFuel6x8 = '';
  }
});

// ///////




 $('.numFuel6x8').click(function(){

          inputFuel6x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel6x8').attr('value', inputFuel6x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel6x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel6x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel6x8').click(function(){

           var getInput = inputFuel6x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel6x8 = newInput;
            $('.inputFuel6x8').attr('value', inputFuel6x8);
     
           console.log('New input is : ' + inputFuel6x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////


/////////////////////



$('.Fuel7x8').click(function(){


$('.EnterFuel7x8').show();


console.log('Mike x8 was selected');

 inputFuel7x8 = 0;
 $('.inputFuel7x8').attr('value', inputFuel7x8);


   $('#Mikex8 > span, .inputFuel7x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel7x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numFuel7x8').click(function(){

  if (inputFuel7x8 === 0 ){
    inputFuel7x8 = '';
  }
});

// ///////




 $('.numFuel7x8').click(function(){

          inputFuel7x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel7x8').attr('value', inputFuel7x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel7x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel7x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel7x8').click(function(){

           var getInput = inputFuel7x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel7x8 = newInput;
            $('.inputFuel7x8').attr('value', inputFuel7x8);
     
           console.log('New input is : ' + inputFuel7x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////



/////////////////////



$('.Fuel8x8').click(function(){


$('.EnterFuel8x8').show();


console.log('Mike x8 was selected');

 inputFuel8x8 = 0;
 $('.inputFuel8x8').attr('value', inputFuel8x8);


   $('#Mikex8 > span, .inputFuel8x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel8x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numFuel8x8').click(function(){

  if (inputFuel8x8 === 0 ){
    inputFuel8x8 = '';
  }
});

// ///////




 $('.numFuel8x8').click(function(){

          inputFuel8x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel8x8').attr('value', inputFuel8x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel8x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel8x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel8x8').click(function(){

           var getInput = inputFuel8x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel8x8 = newInput;
            $('.inputFuel8x8').attr('value', inputFuel8x8);
     
           console.log('New input is : ' + inputFuel8x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////

/////////////////////



$('.Fuel9x8').click(function(){


$('.EnterFuel9x8').show();


console.log('Mike x8 was selected');

 inputFuel9x8 = 0;
 $('.inputFuel9x8').attr('value', inputFuel9x8);


   $('#Mikex8 > span, .inputFuel9x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numFuel9x8').show();




 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numFuel9x8').click(function(){

  if (inputFuel9x8 === 0 ){
    inputFuel9x8 = '';
  }
});

// ///////




 $('.numFuel9x8').click(function(){

          inputFuel9x8 += $(this).attr("value");
          // $('.inputFuel4x8').attr('value', inputFuel4x8);


          $('.inputFuel9x8').attr('value', inputFuel9x8);

           console.log("current Friend 1 imput x8 number is :" + inputFuel9x8);
           console.log('New Friend1 imput x8 is : ' + inputFuel9x8);
           
 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceFuel9x8').click(function(){

           var getInput = inputFuel9x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputFuel9x8 = newInput;
            $('.inputFuel9x8').attr('value', inputFuel9x8);
     
           console.log('New input is : ' + inputFuel9x8)
            

 userInputx8 =  parseInt(inputFuel1x8) + parseInt(inputFuel2x8) + parseInt(inputFuel3x8) + parseInt(inputFuel4x8) + parseInt(inputFuel5x8) + parseInt(inputFuel6x8) +parseInt(inputFuel7x8) + parseInt(inputFuel8x8) + parseInt(inputFuel9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////

















///////////////////Take Loan/////////////






  $('#Loanx8').click(function(){

    serviceValuex8="Loan";

    $('#cheTsavx8').hide();
    $('#savTchex8').hide();
    // $('#qtyvalue2x8, #qtyvalueDenox8').hide();
    // $('#qtyvalueTLoanx8').show();
    $('.PayLoansx8').fadeIn('fast');
    
         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);

});













/////////////////////////////////////////////////



$('.closeDepositx8').click(function(){
  console.log('Deposit panel was closed');
    $('.depositx8').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox8').click(function(){
  billDenox8= true;

   if(billDenox8 === true){
  console.log(' Bill Deno is Activated ' + billDenox8);
}
$('.confBack2Yx8').hide();
$('#submit2Yx8, #exit2Yx8').show();


});


$('#noBillDenox8').click(function(){
  billDenox8= false;
  if(billDenox8 === false){
  console.log(' Bill Deno is Activated ' + billDenox8);
}

  $('.confBack2Yx8').hide();
 $('.billsx8').hide();
$('#amountx8, #qtyvalue2x8, .LinearNumPadx8, .numVx8').show();
$('#submit2Yx8, #exit2Yx8').fadeIn();

  
});




$('.ui2x8').click(function(){
  if(serviceValuex8 !== 'withdraw'){

    billDenox8 === false;

    console.log('BillDenox8 was deactivated because Service value is not withdraw');

    $('#billDenox8').removeClass('active');
    $('#noBillDenox8').addClass('active');

// $('#submit2Yx8').click(function(){

//    $('#billsx8, .billsx8, #b10x8, #b20x8, #b50x8, #b100x8').hide();

// });
  }
});



/////////////////////////////////////////////////////////


$('#wdraw1x8, #wdraw2x8').click(function(){
serviceValuex8 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 

////////////////QuickPay///////////////////////////

$('#QuickPayx8, #QuickPay2x8').click(function(){

  $('#submit2Yx8, #exit2Yx8').hide();
  $('.ScanOrGiftx8').fadeIn();
  $('.SelectBuyOrSellx8').hide();


});




 $('#QuickPay2x8, #QuickPay3x8').click(function(){
console.log("Service value x8 is = " + serviceValuex8);
$('.sendMoney11x8').fadeIn('');


 });



////////////////QuickPay///////////////////////////

$('.GiftGasx8, #GiftGas2x8, .GiftFuelx8').click(function(){

 
$('.TopHalfx8').hide();

  $('.ScanPumpOnex8, #SubmitGasOrderx8, .FinBBBx8').hide();
  $('.SelectSendOrRequestx8').fadeIn();

    $('.UseGasInputx8').hide(); 
    $('.amountx8').show();


 console.log("Service value x8 is = " + serviceValuex8);
 console.log("Service value x8 is = " + serviceValuex8);

serviceValuex8='QuickPay';
tofValuex8 = 'waived';

$('.sendMoney11x8').fadeIn('');




    $('#cheTsavx8').hide();
    $('#savTchex8').hide();



  MikeImputx8=0;
  JeffImputx8=0;
  MariaImputx8=0;
  JohnImputx8=0;


  LeahImputx8=0;
  PaulImputx8=0;
  JennyImputx8=0;
  GokuImputx8=0;



         $('#MikeImputx8').attr('value', MikeImputx8);
         $('#JeffImputx8').attr('value', JeffImputx8);
         $('#MariaImputx8').attr('value', MariaImputx8);
         $('#JohnImputx8').attr('value', JohnImputx8);


         $('#LeahImputx8').attr('value', LeahImputx8);
         $('#PaulImputx8').attr('value', PaulImputx8);
         $('#JennyImputx8').attr('value', JennyImputx8);
         $('#GokuImputx8').attr('value', GokuImputx8);

 
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);





    console.log("Service value x8 is = " + serviceValuex8);
  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);

});






Friendx8="";

$('.friendsx8').click(function(){
Friendx8 = $(this).attr('value');
console.log("Friend is = " + Friendx8);


$('.SelectSendOrRequestx8').show();
$('.confBack2Yx8, .pyx8, .payMOBIx8').hide();



});

      $('#happyFriendx8').attr('value', Friendx8);
      $('#quickPayAmountx8').attr('value', userInputx8);






   


  //      $('.retrievex8').click(function(){  
  //        $('.BillDenominationWdrawx8').fadeOut('fast');
  //        $('#qtyvalueDenox8').hide();
  //        userInputx8 ="";
  //        $('#qtyvalue2x8').show();
  //        $('#qtyvalue2x8').attr('value', "");

  //        $('#MikeImputx8').attr('value','');
  //        $('#JeffImputx8').attr('value','');
  //        $('#MariaImputx8').attr('value','');
  //        $('#JohnImputx8').attr('value', '');


  //        $('#LeahImputx8').attr('value','');
  //        $('#PaulImputx8').attr('value','');
  //        $('#JennyImputx8').attr('value','');
  //        $('#GokuImputx8').attr('value', '');


  // MikeImputx8='';
  // JeffImputx8='';
  // MariaImputx8='';
  // JohnImputx8='';


  // LeahImputx8='';
  // PaulImputx8='';
  // JennyImputx8='';
  // GokuImputx8='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx8=""


  $('.friendsx8').click(function(){
    SelectedFriendx8 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx8);





});



$('.NumPadx8').click(function(){
if (MikeImputx8 === '0' || 0){
  MikeImputx8 = '';
}

if (JeffImputx8 === '0' || 0){
  JeffImputx8 = '';
}

if (MariaImputx8 === '0' || 0){
  MariaImputx8 = '';
}

if (JohnImputx8 === '0' || 0){
  JohnImputx8 = '';
}

if (LeahImputx8 === '0' || 0){
  LeahImputx8= '';
}

if (PaulImputx8 === '0' || 0){
  PaulImputx8 = '';
}

if (JennyImputx8 === '0' || 0){
  JennyImputx8 = '';
}

if (GokuImputx8 === '0' || 0){
  GokuImputx8 = '';
}

});



/////////////////////



$('#Mikex8').click(function(){

      $('.FriendMemox8').hide();
$('.MikeMemox8').show().click(function(){
  $('.WriteMemox8, .MikeTTMemox8').fadeIn();
});


console.log('Mike x8 was selected');

 MikeImputx8 = 0;
 $('#MikeImputx8').attr('value', MikeImputx8);




   $('#Mikex8 > span, #MikeImputx8').css('color','green');


 $('.NumPadx8').hide();
   $('.numMikex8').show();




 userInputx8 =  parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numMikex8').click(function(){

  if (MikeImputx8 === 0 ){
    MikeImputx8 = '';
  }
});

// ///////




 $('.numMikex8').click(function(){

          MikeImputx8 += $(this).attr("value");
          // $('#MikeImputx8').attr('value', MikeImputx8);


          $('#MikeImputx8').attr('value', MikeImputx8);

           console.log("current Friend 1 imput x8 number is :" + MikeImputx8);
           console.log('New Friend1 imput x8 is : ' + MikeImputx8);
           
 userInputx8 =  parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceMikex8').click(function(){

           var getInput = MikeImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx8 = newInput;
            $('#MikeImputx8').attr('value', MikeImputx8);
     
           console.log('New input is : ' + MikeImputx8)
            

 userInputx8 =  parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });









//////////////////




/////////////////////



$('#Jeffx8').click(function(){

      $('.FriendMemox8').hide();
$('.JeffMemox8').show().click(function(){
  $('.WriteMemox8, .JeffTTMemox8').fadeIn();
});


console.log('Jeff x8 was selected');

 JeffImputx8 = 0;
 $('#JeffImputx8').attr('value', JeffImputx8);



  
  


   $('#Jeffx8 > span, #JeffImputx8').css('color','green');


 $('.NumPadx8').hide();
   $('.numJeffx8').show();


 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numJeffx8').click(function(){

  if (JeffImputx8 === 0 ){
    JeffImputx8 = '';
  }
});

// ///////






 $('.numJeffx8').click(function(){

          JeffImputx8 += $(this).attr("value");
          // $('#JeffImputx8').attr('value', JeffImputx8);


          $('#JeffImputx8').attr('value', JeffImputx8);

           console.log("current Friend 1 imput x8 number is :" + JeffImputx8);
           console.log('New Friend1 imput x8 is : ' + JeffImputx8);
           
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceJeffx8').click(function(){

           var getInput = JeffImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx8 = newInput;
            $('#JeffImputx8').attr('value', JeffImputx8);
     
           console.log('New input is : ' + JeffImputx8)
            
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


       });









//////////////////





/////////////////////



$('#Mariax8').click(function(){


      $('.FriendMemox8').hide();
$('.MariaMemox8').show().click(function(){
  $('.WriteMemox8, .MariaTTMemox8').fadeIn();
});


console.log('Maria x8 was selected');

MariaImputx8 = 0;
 $('#MariaImputx8').attr('value', MariaImputx8);
 


  
  


   $('#Mariax8 > span, #MariaImputx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numMariax8').show();



 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);
});





///////////

$('.numMariax8').click(function(){

  if (MariaImputx8 === 0 ){
    MariaImputx8 = '';
  }
});

// ///////






 $('.numMariax8').click(function(){

          MariaImputx8 += $(this).attr("value");
          // $('#MariaImputx8').attr('value', MariaImputx8);


          $('#MariaImputx8').attr('value', MariaImputx8);

           console.log("current Friend 1 imput x8 number is :" + MariaImputx8);
           console.log('New Friend1 imput x8 is : ' + MariaImputx8);
           

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceMariax8').click(function(){

           var getInput = MariaImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx8 = newInput;
            $('#MariaImputx8').attr('value', MariaImputx8);
     
           console.log('New input is : ' + MariaImputx8)
            
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


       });









//////////////////




/////////////////////



$('#Johnx8').click(function(){

      $('.FriendMemox8').hide();
$('.JohnMemox8').show().click(function(){
  $('.WriteMemox8, .JohnTTMemox8').fadeIn();
});


console.log('John x8 was selected');

 JohnImputx8 = 0;
 $('#JohnImputx8').attr('value', JohnImputx8);



  
  


   $('#Johnx8 > span, #JohnImputx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numJohnx8').show();


 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numJohnx8').click(function(){

  if (JohnImputx8 === 0 ){
    JohnImputx8 = '';
  }
});

// ///////









 $('.numJohnx8').click(function(){

          JohnImputx8 += $(this).attr("value");
          // $('#JohnImputx8').attr('value', JohnImputx8);


          $('#JohnImputx8').attr('value', JohnImputx8);

           console.log("current Friend 1 imput x8 number is :" + JohnImputx8);
           console.log('New Friend1 imput x8 is : ' + JohnImputx8);
           

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceJohnx8').click(function(){

           var getInput = JohnImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx8 = newInput;
            $('#JohnImputx8').attr('value', JohnImputx8);
     
           console.log('New input is : ' + JohnImputx8)
            

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


       });









//////////////////






/////////////////////



$('#Leahx8').click(function(){


      $('.FriendMemox8').hide();
$('.LeahMemox8').show().click(function(){
  $('.WriteMemox8, .LeahTTMemox8').fadeIn();
});


console.log('Leah x8 was selected');

LeahImputx8 = 0;
 $('#LeahImputx8').attr('value', LeahImputx8);
 


  
  


   $('#Leahx8 > span, #LeahImputx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numLeahx8').show();



 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});




///////////

$('.numLeahx8').click(function(){

  if (LeahImputx8 === 0 ){
    LeahImputx8 = '';
  }
});

// ///////







 $('.numLeahx8').click(function(){

          LeahImputx8 += $(this).attr("value");
          // $('#LeahImputx8').attr('value', LeahImputx8);


          $('#LeahImputx8').attr('value', LeahImputx8);

           console.log("current Friend 1 imput x8 number is :" + LeahImputx8);
           console.log('New Friend1 imput x8 is : ' + LeahImputx8);
           
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceLeahx8').click(function(){

           var getInput = LeahImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx8 = newInput;
            $('#LeahImputx8').attr('value', LeahImputx8);
     
           console.log('New input is : ' + LeahImputx8)
            

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

       });









//////////////////





/////////////////////



$('#Paulx8').click(function(){


      $('.FriendMemox8').hide();
$('.PaulMemox8').show().click(function(){
  $('.WriteMemox8, .PaulTTMemox8').fadeIn();
});


console.log('Paul x8 was selected');

PaulImputx8 = 0;
 $('#PaulImputx8').attr('value', PaulImputx8);
 


  
  


   $('#Paulx8 > span, #PaulImputx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numPaulx8').show();



 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);
});



///////////

$('.numPaulx8').click(function(){

  if (PaulImputx8 === 0 ){
    PaulImputx8 = '';
  }
});

// ///////






 $('.numPaulx8').click(function(){

          PaulImputx8 += $(this).attr("value");
          // $('#PaulImputx8').attr('value', PaulImputx8);


          $('#PaulImputx8').attr('value', PaulImputx8);

           console.log("current Friend 1 imput x8 number is :" + PaulImputx8);
           console.log('New Friend1 imput x8 is : ' + PaulImputx8);
           

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpacePaulx8').click(function(){

           var getInput = PaulImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx8 = newInput;
            $('#PaulImputx8').attr('value', PaulImputx8);
     
           console.log('New input is : ' + PaulImputx8)
            

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

       });









//////////////////





/////////////////////



$('#Jennyx8').click(function(){

      $('.FriendMemox8').hide();
$('.JennyMemox8').show().click(function(){
  $('.WriteMemox8, .JennyTTMemox8').fadeIn();
});


console.log('Jenny x8 was selected');

JennyImputx8 = 0;
 $('#JennyImputx8').attr('value', JennyImputx8);
 


  
  


   $('#Jennyx8 > span, #JennyImputx8').css('color','green');

   $('.NumPadx8').hide();
   $('.numJennyx8').show();



 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);
});




///////////

$('.numJennyx8').click(function(){

  if (JennyImputx8 === 0 ){
    JennyImputx8 = '';
  }
});

// ///////






 $('.numJennyx8').click(function(){

          JennyImputx8 += $(this).attr("value");
          // $('#JennyImputx8').attr('value', JennyImputx8);


          $('#JennyImputx8').attr('value', JennyImputx8);

           console.log("current Friend 1 imput x8 number is :" + JennyImputx8);
           console.log('New Friend1 imput x8 is : ' + JennyImputx8);
           

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceJennyx8').click(function(){

           var getInput = JennyImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx8 = newInput;
            $('#JennyImputx8').attr('value', JennyImputx8);
     
           console.log('New input is : ' + JennyImputx8)
            
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


       });









//////////////////





/////////////////////



$('#Gokux8').click(function(){

    $('.FriendMemox8').hide();
$('.GokuMemox8').show().click(function(){
  $('.WriteMemox8, .GokuTTMemox8').fadeIn();
});


console.log('Gokux8  was selected');

GokuImputx8 = 0;
 $('#GokuImputx8').attr('value', GokuImputx8);
 


  
  


   $('#Gokux8 > span, #GokuImputx8').css('color','green');


   $('.NumPadx8').hide();
   $('.numGokux8').show();



 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});




///////////

$('.numGokux8').click(function(){

  if (GokuImputx8 === 0 ){
    GokuImputx8 = '';
  }
});

// ///////



 $('.numGokux8').click(function(){

          GokuImputx8 += $(this).attr("value");
          // $('#Gokux8Imput').attr('value', Gokux8Imput);


          $('#GokuImputx8').attr('value', GokuImputx8);

           console.log("current Friend 1 imput  number is :" + GokuImputx8);
           console.log('New Friend1 imput  is : ' + GokuImputx8);
           
 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


        
           });




       //backspace button
           $('#backSpaceGokux8').click(function(){

           var getInput = GokuImputx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx8 = newInput;
            $('#GokuImputx8').attr('value', GokuImputx8);
     
           console.log('New input is : ' + GokuImputx8)
            

 userInputx8 = parseInt(MikeImputx8) + parseInt(JeffImputx8) + parseInt(MariaImputx8) + parseInt(JohnImputx8) + parseInt(LeahImputx8) + parseInt(PaulImputx8) + parseInt(JennyImputx8) + parseInt(GokuImputx8);
 $('#qtyvalue2x8').attr('value', userInputx8);


       });






//////////////////






$('#closeSer2Panelsx8, .SubmitMemox8, .Confirm2Yx8, .OperationEndedPanelx8').click(function(){

$('.WriteMemox8, .TMemox8, .FriendMemox8').fadeOut();

      userInputx8= "0.00";
      $("#qtyvalue2x8").attr('value', userInputx8);
      console.log('.confirm2Yx8userInputx8 =' + userInputx8);


});




// ///////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////




 
///////////////////Send Gift to Friends//////////////////////////////////////////





// $('.GiftX').click(function(){

//    $('.sendGiftGasx8, .closeGiftGasx8').fadeIn();

// });




$('.confirmSendGasx8').click(function(){
    $('.sendGiftGasx8, .closeGiftGasx8').fadeOut();
    totalGiftGasx8 = 0;
    $('#totalGiftGasx8').attr('value', totalGiftGasx8);

    
$('.friendsGasx8').removeClass('active');

MySelfGasx8 = 0;
JeffGasx8 = 0;
MariaGasx8 = 0;
JohnGasx8 = 0;
LeahGasx8 = 0;
PaulGasx8 = 0;
JennyGasx8 = 0;
GokuGasx8 = 0;



    $('.GiftSentGasx8').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftGasx8').click(function(){
    $('.sendGiftGasx8, .closeGiftGasx8').fadeOut();

    totalGiftGasx8 = 0;
    $('#totalGiftGasx8').attr('value', totalGiftGasx8);

$('.friendsGasx8').removeClass('active');
MySelfGasx8 = 0;
JeffGasx8 = 0;
MariaGasx8 = 0;
JohnGasx8 = 0;
LeahGasx8 = 0;
PaulGasx8 = 0;
JennyGasx8 = 0;
GokuGasx8 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfGasx8 = 0;
JeffGasx8 = 0;
MariaGasx8 = 0;
JohnGasx8 = 0;
LeahGasx8 = 0;
PaulGasx8 = 0;
JennyGasx8 = 0;
GokuGasx8 = 0;




$('#MySelfGasx8').click(function(){

  if (MySelfGasx8 === 0){MySelfGasx8 = 1;} else {MySelfGasx8=0;}

console.log(MySelfGasx8);
});






$('#JeffGasx8').click(function(){

  if (JeffGasx8 === 0){JeffGasx8 = 1;} else {JeffGasx8=0;}

console.log(JeffGasx8);
});


$('#MariaGasx8').click(function(){
  
  if (MariaGasx8 === 0){MariaGasx8 = 1;} else {MariaGasx8=0;}

console.log(MariaGasx8);
});


$('#JohnGasx8').click(function(){
  
  if (JohnGasx8 === 0){JohnGasx8 = 1;} else {JohnGasx8=0;}

console.log(JohnGasx8);
});


$('#LeahGasx8').click(function(){
  
  if (LeahGasx8 === 0){LeahGasx8 = 1;} else {LeahGasx8=0;}

console.log(LeahGasx8);
});


$('#PaulGasx8').click(function(){
  
  if (PaulGasx8 === 0){PaulGasx8 = 1;} else {PaulGasx8=0;}

console.log(PaulGasx8);
});



$('#JennyGasx8').click(function(){
  
  if (JennyGasx8 === 0){JennyGasx8 = 1;} else {JennyGasx8=0;}

console.log(JennyGasx8);
});


$('#GokuGasx8').click(function(){
  
  if (GokuGasx8 === 0){GokuGasx8 = 1;} else {GokuGasx8=0;}

console.log(GokuGasx8);
});















AllFriendsGasx8 = JeffGasx8 + MariaGasx8 + JohnGasx8 + LeahGasx8 + PaulGasx8 + JennyGasx8 + GokuGasx8 + MySelfGasx8; 




totalGiftGasx8 = parseFloat(userInputx8) * parseFloat(AllFriendsGasx8);


$('.friendsGasx8').click(function(){

AllFriendsGasx8 = JeffGasx8 + MariaGasx8 + JohnGasx8 + LeahGasx8 + PaulGasx8 + JennyGasx8 + GokuGasx8 + MySelfGasx8; 

totalGiftGasx8 = parseFloat(userInputx8) * parseFloat(AllFriendsGasx8);

 console.log("All friendsGasx8 is =" + AllFriendsGasx8);
console.log("All friendsGasx8 is =" + typeof('AllFriendsGasx8'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftGasx8);
console.log("The userInputx82 =" + userInputx8);
console.log("The totalGiftGasx8 =" + userInputx8);
console.log("The totalGiftGasx8 =" + typeof('userInputx82'));

$('#totalGiftGasx8').attr('value', totalGiftGasx8);



});






///////////////////Send Gift to Friends//////////////////////////////////////////









// ///////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////







////////////////Wire Transfer x8///////////////////////////
///////////////////////////////////////////////////////////




$('#senx8').click(function(){

 console.log("Service value x8 is = " + serviceValuex8);

serviceValuex8='WireTransfer';
tofValuex8 = 'waived';

$('.sendMoney2x8').fadeIn('slow');


    $('#cheTsavx8').hide();
    $('#savTchex8').hide();


  WrtNamex8='';
  WrtAccountNUmberx8='';
  WrtRoutingNUmberx8='';
  WrtTelephonex8='';
  WrtZipCodex8='';







         $('.WrtNameInputx8').attr('value', WrtNamex8);
         $('.WrtAccountInputx8').attr('value', WrtAccountNUmberx8);
         $('.WrtRoutingInputx8').attr('value', WrtRoutingNUmberx8);
         $('.WrtTelephoneInputx8').attr('value', WrtTelephonex8);
         $('.WrtZipCodeInputx8').attr('value', WrtZipCodex8);


 
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);



    console.log("Service value x8 is = " + serviceValuex8);



  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);

});






















// /////////////////////////////////
WrtLabelx8="";

$('.WrtLabelx8').click(function(){
WrtLabelx8 = $(this).attr('value');
console.log("The selected WrtLabelx8 is = " + WrtLabelx8);

});








/////////////////////



$('.NameWrLabelx8').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabelx8').click(function(){




console.log('Wrt Name Label x8 was selected');

 WrtAccountNUmberx8 = "";
 $('.WrtAccountInputx8').attr('value', WrtAccountNUmberx8);


 $('.NumPadx8').hide();
 $('.numCCx8').show();

});




 $('.numCCx8').click(function(){

         WrtAccountNUmberx8+= $(this).attr("value");
          
          $('.WrtAccountInputx8').attr('value', WrtAccountNUmberx8);

           });



       //backspace button
           $('#backSpaceCCx8').click(function(){

           var getInput = WrtAccountNUmberx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx8 = newInput;
            $('.WrtAccountInputx8').attr('value', WrtAccountNUmberx8);
     
           console.log('New input is : ' + WrtAccountNUmberx8);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabelx8').click(function(){




console.log('Wrt Name Label x8 was selected');

 WrtRoutingNUmberx8 = "";
 $('.WrtRoutingInputx8').attr('value', WrtRoutingNUmberx8);


 $('.NumPadx8').hide();
 $('.numRx8').show();

});




 $('.numRx8').click(function(){

         WrtRoutingNUmberx8+= $(this).attr("value");
          
          $('.WrtRoutingInputx8').attr('value', WrtRoutingNUmberx8);

           });



       //backspace button
           $('#backSpaceRx8').click(function(){

           var getInput = WrtRoutingNUmberx8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx8 = newInput;
            $('.WrtRoutingInputx8').attr('value', WrtRoutingNUmberx8);
     
           console.log('New input is : ' + WrtRoutingNUmberx8);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabelx8').click(function(){




console.log('Wrt Name Label x8 was selected');

 WrtTelephonex8 = "";
 $('.WrtTelephoneInputx8').attr('value', WrtTelephonex8);


 $('.NumPadx8').hide();
 $('.numSwTelx8').show();

});




 $('.numSwTelx8').click(function(){

          WrtTelephonex8+= $(this).attr("value");
          
          $('.WrtTelephoneInputx8').attr('value', WrtTelephonex8);

           });



       //backspace button
           $('#backSpaceSwTelx8').click(function(){

           var getInput = WrtTelephonex8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex8 = newInput;
           $('.WrtTelephoneInputx8').attr('value', WrtTelephonex8);
     
           console.log('New input is : ' + WrtTelephonex8);
            


});




//////////////////





/////////////////////



$('.ZipWrLabelx8').click(function(){




console.log('Wrt Name Label x8 was selected');

 WrtZipCodex8 = "";
 $('.WrtZipCodeInputx8').attr('value', WrtZipCodex8);


 $('.NumPadx8').hide();
 $('.numSwZipx8').show();
 
});




 $('.numSwZipx8').click(function(){

         WrtZipCodex8+= $(this).attr("value");
          
          $('.WrtZipCodeInputx8').attr('value', WrtZipCodex8);

           });



       //backspace button
           $('#backSpaceSwZipx8').click(function(){

           var getInput = WrtZipCodex8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex8 = newInput;
            $('.WrtZipCodeInputx8').attr('value', WrtZipCodex8);
     
           console.log('New input is : ' + WrtZipCodex8);
            


});






////////////////end of Wire Transfer x8///////////////////////////
///////////////////////////////////////////////////////////






// /////////  Loans////////////////////////


$('#Loanx8').click(function(){

serviceValuex8 = 'Loan';

$('.TakeLoanx8').fadeIn();
$('.ToogleLoansToLinearx8').fadeIn();


$('.SelectOrx8').show();


         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);

});



$('.ScanOrGiftx8, .SelectOrx8').click(function(){

  $(this).hide();
  $('.confBack2Yx8').fadeIn();


});







inputLoan1x8=0;
inputLoan2x8=0;
inputLoan3x8=0;
inputLoan4x8=0;




         $('.inputLoan4x8').attr('value', inputLoan1x8);
         $('.inputLoan4x8').attr('value', inputLoan2x8);
         $('.inputLoan4x8').attr('value', inputLoan3x8);
         $('.inputLoan4x8').attr('value', inputLoan4x8);


 
userInputx8 = '0.00';
$('#qtyvalue2x8').attr('value', userInputx8);



console.log("Service value x8 is = " + serviceValuex8);



  console.log("Service value is = " + serviceValuex8);
  console.log("tofvalue is = " + tofValuex8);

});











$('.NumPadx8').click(function(){

if (inputLoan1x8 === '0' || 0){
  inputLoan1x8 = '';
}


if (inputLoan2x8 === '0' || 0){
  inputLoan2x8 = '';
}

if (inputLoan3x8 === '0' || 0){
  inputLoan3x8 = '';
}


if (inputLoan4x8 === '0' || 0){
  inputLoan4x8 = '';
}

});






inputLoan1x8=0;
inputLoan2x8=0;
inputLoan3x8=0;
inputLoan4x8=0;








/////////////////////



$('.Loan1x8').click(function(){


$('.EnterLoan1x8').show();


console.log('Mike x8 was selected');

 inputLoan1x8 = 0;
 $('.inputLoan1x8').attr('value', inputLoan1x8);


   $('#Mikex8 > span, .inputLoan1x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTLoan1x8').show();




 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTLoan1x8').click(function(){

  if (inputLoan1x8 === 0 ){
    inputLoan1x8 = '';
  }
});

// ///////




 $('.numTLoan1x8').click(function(){

          inputLoan1x8 += $(this).attr("value");
          // $('.inputLoan1x8').attr('value', inputLoan1x8);


          $('.inputLoan1x8').attr('value', inputLoan1x8);

           console.log("current Friend 1 imput x8 number is :" + inputLoan1x8);
           console.log('New Friend1 imput x8 is : ' + inputLoan1x8);
           
 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTLoan1x8').click(function(){

           var getInput = inputLoan1x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan1x8 = newInput;
            $('.inputLoan1x8').attr('value', inputLoan1x8);
     
           console.log('New input is : ' + inputLoan1x8)
            

 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });


////////////////////////////////////



/////////////////////



$('.Loan2x8').click(function(){


$('.EnterLoan2x8').show();


console.log('Mike x8 was selected');

 inputLoan2x8 = 0;
 $('.inputLoan2x8').attr('value', inputLoan2x8);


   $('#Mikex8 > span, .inputLoan2x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTLoan2x8').show();




 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTLoan2x8').click(function(){

  if (inputLoan2x8 === 0 ){
    inputLoan2x8 = '';
  }
});

// ///////




 $('.numTLoan2x8').click(function(){

          inputLoan2x8 += $(this).attr("value");
          // $('.inputLoan2x8').attr('value', inputLoan2x8);


          $('.inputLoan2x8').attr('value', inputLoan2x8);

           console.log("current Friend 1 imput x8 number is :" + inputLoan2x8);
           console.log('New Friend1 imput x8 is : ' + inputLoan2x8);
           
 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTLoan2x8').click(function(){

           var getInput = inputLoan2x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan2x8 = newInput;
            $('.inputLoan2x8').attr('value', inputLoan2x8);
     
           console.log('New input is : ' + inputLoan2x8)
            

 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });


////////////////////////////////


/////////////////////



$('.Loan3x8').click(function(){


$('.EnterLoan3x8').show();


console.log('Mike x8 was selected');

 inputLoan3x8 = 0;
 $('.inputLoan3x8').attr('value', inputLoan3x8);


   $('#Mikex8 > span, .inputLoan3x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTLoan3x8').show();




 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTLoan3x8').click(function(){

  if (inputLoan3x8 === 0 ){
    inputLoan3x8 = '';
  }
});

// ///////




 $('.numTLoan3x8').click(function(){

          inputLoan3x8 += $(this).attr("value");
          // $('.inputLoan3x8').attr('value', inputLoan3x8);


          $('.inputLoan3x8').attr('value', inputLoan3x8);

           console.log("current Friend 1 imput x8 number is :" + inputLoan3x8);
           console.log('New Friend1 imput x8 is : ' + inputLoan3x8);
           
 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTLoan3x8').click(function(){

           var getInput = inputLoan3x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan3x8 = newInput;
            $('.inputLoan3x8').attr('value', inputLoan3x8);
     
           console.log('New input is : ' + inputLoan3x8)
            

 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });




//////////////////



/////////////////////



$('.Loan4x8').click(function(){


$('.EnterLoan4x8').show();


console.log('Mike x8 was selected');

 inputLoan4x8 = 0;
 $('.inputLoan4x8').attr('value', inputLoan4x8);


   $('#Mikex8 > span, .inputLoan4x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTLoan4x8').show();




 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTLoan4x8').click(function(){

  if (inputLoan4x8 === 0 ){
    inputLoan4x8 = '';
  }
});

// ///////




 $('.numTLoan4x8').click(function(){

          inputLoan4x8 += $(this).attr("value");
          // $('.inputLoan4x8').attr('value', inputLoan4x8);


          $('.inputLoan4x8').attr('value', inputLoan4x8);

           console.log("current Friend 1 imput x8 number is :" + inputLoan4x8);
           console.log('New Friend1 imput x8 is : ' + inputLoan4x8);
           
 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTLoan4x8').click(function(){

           var getInput = inputLoan4x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan4x8 = newInput;
            $('.inputLoan4x8').attr('value', inputLoan4x8);
     
           console.log('New input is : ' + inputLoan4x8)
            

 userInputx8 =  parseInt(inputLoan1x8) + parseInt(inputLoan2x8) + parseInt(inputLoan3x8) + parseInt(inputLoan4x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////
$('.ToogleLoansToLinearx8').click(function(){
$(this).hide();
$('.ToogleLoansToSquarex8').show();
});


$('.ToogleLoansToSquarex8').click(function(){
$(this).hide();
$('.ToogleLoansToLinearx8').show();
});






$('.ToogleLoansToLinearx8, .ToogleLoansToSquarex8').click(function(){

$('.Loanx8').toggleClass('LinearLoanx8');
$('.LoanNamex8').toggleClass('LinearLoanNamex8');
$('.LoanBadgeAndnamex8').toggleClass('LinearLoanBadgeAndnamex8');
$('.LoanAndAbrex8').toggleClass('LinearLoanAndAbrex8');
$('.MyCurrentPricex8').toggleClass('LinearMyCurrentPricex8');
$('.EnterLoanQtyx8').toggleClass('LinearEnterLoanQtyx8');


});










// /////////  Loans////////////////////////






//////////////////





$('.ToogleFuelsToRectanglex8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToLinearx8').show();
});


$('.ToogleFuelsToLinearx8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToSquarex8').show();
});


$('.ToogleFuelsToSquarex8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToMinix8').show();
});


$('.ToogleFuelsToMinix8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToTinyx8').show();
});


$('.ToogleFuelsToTinyx8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToHorix8').show();
});


$('.ToogleFuelsToHorix8').click(function(){
    $(this).hide();
    $('.ToogleFuelsToRectanglex8').show();
});







$('.Toggfuelx8').click(function(){

// $('.ToogleFuelsToRectanglex8').click(function(){

$('.Fuelx8').removeClass('MiniFuelMOBIx8 '); 
$('.FuelSymbolx8').removeClass('MiniFuelSymbolMOBIx8 '); 
$('.FuelNamex8').removeClass('MiniFuelNameMOBIx8');
$('.IhaveThisMuchx8').removeClass('MiniIhaveThisMuchMOBIx8');
$('.MyFuelinRealValx8').removeClass('MiniMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('MiniEnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').removeClass('MiniInputFuelQtyMOBIx8');
$('.SelectFuelsx8').addClass('MiniSelectFuelsMOBIx8');
$('.GiftGasx8').removeClass('MiniGiftGasx8');
$('.UseGasx8').removeClass('MiniUseGasx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');


// $('.ToogleFuelsToLinearx8').click(function(){


$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');
$('.GiftGasMOBIx8').removeClass('.RedtangledGiftGasMOBIx8 '); 
$('.UseGasx8').removeClass('RectangledUseGasx8'); 
$('.GiftGasx8').removeClass('RectangledGiftGasx8');
$('.innerRightMOBIx8').removeClass('RectangledinnerRightMOBIx8');
$('.IhaveThisMuchx8').removeClass('RectangledIhaveThisMuchMOBIx8');
$('.Galx8').removeClass('RectangledGalMOBIx8');
$('.SelectFuelsMOBIx8').removeClass('MiniSelectFuelsMOBIx8');
$('.FuelSymbolMOBIx8').removeClass('RectangledFuelSymbolMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');





// $('.ToogleFuelsToSquarex8').click(function(){

$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').removeClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').removeClass('LinearUseGasx8');
$('.GiftGasx8').removeClass('LinearGiftGasx8')

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');







// $('.ToogleFuelsToMinix8').click(function(){

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');




$('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
$('.Fuelx8').removeClass('FuelMOBIx8');
$('.FuelSymbolx8').removeClass('FuelSymbolMOBIx8');
$('.FuelNamex8').removeClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').removeClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').removeClass('CurrentPriceMOBIx8');
$('.MyFuelinRealValx8').removeClass('MyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('EnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').removeClass('InputFuelQtyMOBIx8');
$('.totalFuelsheaderx8').removeClass('totalFuelsheaderMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').removeClass('ScanOrBuyOrGiftGasx8');
$('.SearchFuelsx8').removeClass('SearchFuelsMOBIx8');
$('.Galx8').removeClass('GalMOBIx8');


// $('.Thecoverx8').css('padding-top','125px');


$('.SelectFuelsx8').removeClass('RectangledSelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('MiniSelectFuelsMOBIx8');



$('.innerRightMOBIx8').removeClass('TinyinnerRightx8');
$('.SelectFuelsx8').removeClass('TinySelectFuelsx8');

$('.Fuelx8').removeClass('TinyFuelx8');
$('.FuelSymbolx8').removeClass('TinyFuelSymbolx8');
$('.MyFuelinRealValx8').removeClass('TinyMyFuelinRealValx8');

$('.EnterFuelQtyx8').removeClass('TinyEnterFuelQtyx8');
$('.GiftGasMOBIx8').removeClass('TinyGiftGasx8');

$('.IhaveThisMuchMOBIx8').removeClass('TinyIhaveThisMuchx8');
$('.GalMOBIx8').removeClass('TinyGalx8');
$('.FuelSymbolMOBIx8').removeClass('TinyFuelSymbolx8');

$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
 $('.FuelNamex8').removeClass('TinyFuelNamex8');





    $('.innerRightMOBIx8').removeClass('HoriinnerRightx8');
    $('.SelectFuelsx8').removeClass('HoriSelectFuelsx8');

    $('.Fuelx8').removeClass('HoriFuelx8');
    $('.MyFuelinRealValx8').removeClass('HoriMyFuelinRealValx8');

    $('.EnterFuelQtyx8').removeClass('HoriEnterFuelQtyx8');
    $('.GiftGasMOBIx8').removeClass('HoriGiftGasx8');

    $('.IhaveThisMuchx8').removeClass('HoriIhaveThisMuchx8');
    $('.Galx8').removeClass('HoriGalx8');
    $('.FuelSymbolx8').removeClass('HoriFuelSymbolx8');
    $('.FuelNamex8').removeClass('HoriFuelNamex8');

    $('.FuelCreditx8').removeClass('HoriFuelCreditx8');



$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');
$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');




});

























$('.ToogleFuelsToRectanglex8').click(function(){

$('.SelectFuelsx8').addClass('RectangledSelectFuelsMOBIx8');

$('.Fuelx8').addClass('RectangledFuelMOBIx8');
$('.FuelNamex8').addClass('FuelNameMOBIx8');
$('.MyFuelinRealValx8').addClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').addClass('RectangledEnterFuelQtyMOBIx8');
$('.GiftGasMOBIx8').addClass('RedtangledGiftGasMOBIx8 '); 
$('.UseGasx8').addClass('RectangledUseGasx8'); 
$('.GiftGasx8').addClass('RectangledGiftGasx8');
$('.innerRightMOBIx8').addClass('RectangledinnerRightMOBIx8');
$('.IhaveThisMuchMOBIx8').addClass('IhaveThisMuchMOBIx8');
$('.GalMOBIx8').addClass('RectangledGalMOBIx8');
$('.FuelSymbolMOBIx8').addClass('RectangledFuelSymbolMOBIx8');


$('.FuelSymbolx8').addClass('FuelSymbolMOBIx8');
$('.FuelNamex8').addClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').addClass('RectangledIhaveThisMuchMOBIx8');
$('.CurrentPricex8').addClass('CurrentPriceMOBIx8');

$('.FuelCreditx8').addClass('RectangledFuelCreditx8');





$('.Thecoverx8').css('padding-top','157px');

});




$('.ToogleFuelsToLinearx8').click(function(){

$('.SelectFuelsx8').addClass('SelectFuelsMOBIx8');

$('.Fuelx8').addClass('LinearFuelx8');
$('.FuelNamex8').addClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').addClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').addClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').addClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').addClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').addClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').addClass('LinearUseGasx8');
$('.GiftGasx8').addClass('LinearGiftGasx8');
$('.IhaveThisMuchx8').addClass('IhaveThisMuchMOBIx8');
$('.Galx8').addClass('GalMOBIx8');


$('.FuelSymbolx8').addClass('FuelSymbolMOBIx8');
$('.FuelNamex8').addClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').addClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').addClass('CurrentPriceMOBIx8');

$('.FuelCreditx8').addClass('LinearFuelCreditx8');


$('.Thecoverx8').css('padding-top','10px');

});











$('.ToogleFuelsToSquarex8').click(function(){


$('.SelectFuelsx8').addClass('SelectFuelsMOBIx8');
$('.Fuelx8').addClass('FuelMOBIx8');
$('.FuelSymbolx8').addClass('FuelSymbolMOBIx8');
$('.FuelNamex8').addClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').addClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').addClass('CurrentPriceMOBIx8');
$('.MyFuelinRealValx8').addClass('MyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').addClass('EnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').addClass('InputFuelQtyMOBIx8');
$('.totalFuelsheaderx8').addClass('totalFuelsheaderMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').addClass('ScanOrBuyOrGiftGasx8');
$('.SearchFuelsx8').addClass('SearchFuelsMOBIx8');
$('.Galx8').addClass('GalMOBIx8');



$('.Thecoverx8').css('padding-top','157px');

});










$('.ToogleFuelsToMinix8').click(function(){

  $('.SelectFuelsx8').addClass('MiniSelectFuelsMOBIx8');

$('.Fuelx8').addClass('MiniFuelMOBIx8 '); 
$('.FuelSymbolx8').addClass('MiniFuelSymbolMOBIx8 '); 
$('.FuelNamex8').addClass('MiniFuelNameMOBIx8');
$('.IhaveThisMuchx8').addClass('MiniIhaveThisMuchMOBIx8');
$('.MyFuelinRealValx8').addClass('MiniMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').addClass('MiniEnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').addClass('MiniInputFuelQtyMOBIx8');
$('.SelectFuelsx8').addClass('MiniSelectFuelsMOBIx8');
$('.GiftGasx8').addClass('MiniGiftGasx8');
$('.UseGasx8').addClass('MiniUseGasx8');


$('.FuelCreditx8').addClass('MiniFuelCreditx8');



$('.Thecoverx8').css('padding-top','125px');

});












$('.ToogleFuelsToTinyx8').click(function(){


    $('.innerRightMOBIx8').addClass('TinyinnerRightx8');
    $('.SelectFuelsx8').addClass('TinySelectFuelsx8');

    $('.Fuelx8').addClass('TinyFuelx8');
    $('.MyFuelinRealValx8').addClass('TinyMyFuelinRealValx8');

    $('.EnterFuelQtyx8').addClass('TinyEnterFuelQtyx8');
    $('.GiftGasMOBIx8').addClass('TinyGiftGasx8');

    $('.IhaveThisMuchMOBIx8').addClass('TinyIhaveThisMuchx8');
    $('.GalMOBIx8').addClass('TinyGalx8');
    $('.FuelSymbolx8').addClass('TinyFuelSymbolx8');
    $('.FuelNamex8').addClass('TinyFuelNamex8');

    $('.FuelCreditx8').addClass('TinyFuelCreditx8');








});





$('.ToogleFuelsToHorix8').click(function(){


    $('.innerRightMOBIx8').addClass('HoriinnerRightx8');
    $('.SelectFuelsx8').addClass('HoriSelectFuelsx8');

    $('.Fuelx8').addClass('HoriFuelx8');
    $('.MyFuelinRealValx8').addClass('HoriMyFuelinRealValx8');

    $('.EnterFuelQtyx8').addClass('HoriEnterFuelQtyx8');
    $('.GiftGasMOBIx8').addClass('HoriGiftGasx8');

    $('.IhaveThisMuchx8').addClass('HoriIhaveThisMuchx8');
    $('.Galx8').addClass('HoriGalx8');
    $('.FuelSymbolx8').addClass('HoriFuelSymbolx8');
    $('.FuelNamex8').addClass('HoriFuelNamex8');

    $('.FuelCreditx8').addClass('HoriFuelCreditx8');


});





$('.ToogleFuelsToMinix8').click(function(){

  $('.Fuel2x8').addClass('MiniFuelMOBI2x8'); 
  $('.Fuel2x8').removeClass('LinearFuel2x8');
  $('.Fuel2x8').removeClass('RectangledFuelMOBI2x8');

});



$('.ToogleFuelsToSquarex8').click(function(){

  $('.Fuel2x8').removeClass('MiniFuelMOBI2x8'); 
  $('.Fuel2x8').removeClass('LinearFuel2x8');
  $('.Fuel2x8').removeClass('RectangledFuelMOBI2x8');

});




$('.ToogleFuelsToLinearx8').click(function(){

  $('.Fuel2x8').removeClass('MiniFuelMOBI2x8'); 
  $('.Fuel2x8').addClass('LinearFuel2x8');
  $('.Fuel2x8').removeClass('RectangledFuelMOBI2x8');

});




$('.ToogleFuelsToRectanglex8').click(function(){

  $('.Fuel2x8').removeClass('MiniFuelMOBI2x8'); 
  $('.Fuel2x8').removeClass('LinearFuel2x8');
  $('.Fuel2x8').addClass('RectangledFuelMOBI2x8');

});
















$('#ATM1Machinex8').click(function(){


$('.FuelMOBIx8').removeClass('MiniFuelMOBIx8 '); 
$('.FuelSymbolMOBIx8').removeClass('MiniFuelSymbolMOBIx8 '); 
$('.FuelNameMOBIx8').removeClass('MiniFuelNameMOBIx8');
$('.IhaveThisMuchMOBIx8').removeClass('MiniIhaveThisMuchMOBIx8');
$('.MyFuelinRealValMOBIx8').removeClass('MiniMyFuelinRealValMOBIx8');
$('.EnterFuelQtyMOBIx8').removeClass('MiniEnterFuelQtyMOBIx8');
$('.InputFuelQtyMOBIx8').removeClass('MiniInputFuelQtyMOBIx8');
$('.SelectFuelsMOBIx8').addClass('MiniSelectFuelsMOBIx8');
$('.GiftGasx8').removeClass('MiniGiftGasx8');
$('.UseGasx8').removeClass('MiniUseGasx8');
$('.Fuelx8').addClass('LinearFuelx8');
$('.FuelNamex8').addClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').addClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').addClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').addClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').addClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').addClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').addClass('LinearUseGasx8');
$('.GiftGasx8').addClass('LinearGiftGasx8');
$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');
$('.GiftGasMOBIx8').removeClass('.RedtangledGiftGasMOBIx8 '); 
$('.UseGasx8').removeClass('RectangledUseGasx8'); 
$('.GiftGasx8').removeClass('RectangledGiftGasx8');
$('.innerRightMOBIx8').removeClass('RectangledinnerRightMOBIx8');
$('.IhaveThisMuchMOBIx8').removeClass('RectangledIhaveThisMuchMOBIx8');
$('.GalMOBIx8').removeClass('RectangledGalMOBIx8');
$('.SelectFuelsMOBIx8').removeClass('MiniSelectFuelsMOBIx8');
$('.FuelSymbolMOBIx8').removeClass('RectangledFuelSymbolMOBIx8');
$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').removeClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').removeClass('LinearUseGasx8');
$('.GiftGasx8').removeClass('LinearGiftGasx8')

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');
$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');

$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');

$('.Thecoverx8').css('padding-top','158px');


});







// /////////Buy sell Fuels////////////////////////







// /////////Make sell Transfers////////////////////////


$('#MTransferx8').click(function(){

serviceValuex8 = 'Transfers';
console.log("Service value x8 is = " + serviceValuex8);
console.log("Service value is = " + serviceValuex8);
console.log("tofvalue is = " + tofValuex8);

$('.MakeTransferx8').fadeIn();
// $('.ToogleTransfersToLinearx8').fadeIn();


$('.SelectMakeOrSellx8').show();

         userInputx8 ="0.00";
         $('#qtyvalue2x8').attr('value', userInputx8);



inputTransfer1x8=0;
inputTransfer2x8=0;
inputTransfer3x8=0;
inputTransfer4x8=0;




         $('.inputTransfer4x8').attr('value', inputTransfer1x8);
         $('.inputTransfer4x8').attr('value', inputTransfer2x8);
         $('.inputTransfer4x8').attr('value', inputTransfer3x8);
         $('.inputTransfer4x8').attr('value', inputTransfer4x8);

});



$('.ScanOrGiftx8, .SelectMakeOrSellx8').click(function(){

  $(this).hide();
  $('.confBack2Yx8').fadeIn();


});







inputTransfer1x8=0;
inputTransfer2x8=0;
inputTransfer3x8=0;
inputTransfer4x8=0;
inputTransfer5x8=0;
inputTransfer6x8=0;
inputTransfer7x8=0;
inputTransfer8x8=0;
inputTransfer9x8=0;




         $('.inputTransfer4x8').attr('value', inputTransfer1x8);
         $('.inputTransfer4x8').attr('value', inputTransfer2x8);
         $('.inputTransfer4x8').attr('value', inputTransfer3x8);
         $('.inputTransfer4x8').attr('value', inputTransfer4x8);
         $('.inputTransfer5x8').attr('value', inputTransfer5x8);
         $('.inputTransfer6x8').attr('value', inputTransfer6x8);
         $('.inputTransfer7x8').attr('value', inputTransfer7x8);
         $('.inputTransfer8x8').attr('value', inputTransfer8x8);
         $('.inputTransfer9x8').attr('value', inputTransfer9x8);         


 








// /////////////////////////////////
  SelectedTransferx8="";


  $('.Transferx8').click(function(){
    SelectedFriendx8 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedTransferx8);

});





$('.NumPadx8').click(function(){

if (inputTransfer1x8 === '0' || 0){
  inputTransfer1x8 = '';
}


if (inputTransfer2x8 === '0' || 0){
  inputTransfer2x8 = '';
}

if (inputTransfer3x8 === '0' || 0){
  inputTransfer3x8 = '';
}


if (inputTransfer4x8 === '0' || 0){
  inputTransfer4x8 = '';
}

if (inputTransfer5x8 === '0' || 0){
  inputTransfer5x8 = '';
}

if (inputTransfer6x8 === '0' || 0){
  inputTransfer6x8 = '';
}

if (inputTransfer7x8 === '0' || 0){
  inputTransfer7x8 = '';
}

if (inputTransfer8x8 === '0' || 0){
  inputTransfer8x8 = '';
}

if (inputTransfer9x8 === '0' || 0){
  inputTransfer9x8 = '';

}

});






inputTransfer1x8=0;
inputTransfer2x8=0;
inputTransfer3x8=0;
inputTransfer4x8=0;
inputTransfer5x8=0;
inputTransfer6x8=0;
inputTransfer7x8=0;
inputTransfer8x8=0;
inputTransfer9x8=0;










/////////////////////



$('.Transfer1x8').click(function(){


$('.EnterTransfer1x8').show();


console.log('Mike x8 was selected');

 inputTransfer1x8 = 0;
 $('.inputTransfer1x8').attr('value', inputTransfer1x8);


   $('#Mikex8 > span, .inputTransfer1x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer1x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer1x8').click(function(){

  if (inputTransfer1x8 === 0 ){
    inputTransfer1x8 = '';
  }
});

// ///////




 $('.numTransfer1x8').click(function(){

          inputTransfer1x8 += $(this).attr("value");
          // $('.inputTransfer1x8').attr('value', inputTransfer1x8);


          $('.inputTransfer1x8').attr('value', inputTransfer1x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer1x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer1x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer1x8').click(function(){

           var getInput = inputTransfer1x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer1x8 = newInput;
            $('.inputTransfer1x8').attr('value', inputTransfer1x8);
     
           console.log('New input is : ' + inputTransfer1x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });


////////////////////////////////////



/////////////////////



$('.Transfer2x8').click(function(){


$('.EnterTransfer2x8').show();


console.log('Mike x8 was selected');

 inputTransfer2x8 = 0;
 $('.inputTransfer2x8').attr('value', inputTransfer2x8);


   $('#Mikex8 > span, .inputTransfer2x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer2x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer2x8').click(function(){

  if (inputTransfer2x8 === 0 ){
    inputTransfer2x8 = '';
  }
});

// ///////




 $('.numTransfer2x8').click(function(){

          inputTransfer2x8 += $(this).attr("value");
          // $('.inputTransfer2x8').attr('value', inputTransfer2x8);


          $('.inputTransfer2x8').attr('value', inputTransfer2x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer2x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer2x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer2x8').click(function(){

           var getInput = inputTransfer2x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer2x8 = newInput;
            $('.inputTransfer2x8').attr('value', inputTransfer2x8);
     
           console.log('New input is : ' + inputTransfer2x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });


////////////////////////////////


/////////////////////



$('.Transfer3x8').click(function(){


$('.EnterTransfer3x8').show();


console.log('Mike x8 was selected');

 inputTransfer3x8 = 0;
 $('.inputTransfer3x8').attr('value', inputTransfer3x8);


   $('#Mikex8 > span, .inputTransfer3x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer3x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer3x8').click(function(){

  if (inputTransfer3x8 === 0 ){
    inputTransfer3x8 = '';
  }
});

// ///////




 $('.numTransfer3x8').click(function(){

          inputTransfer3x8 += $(this).attr("value");
          // $('.inputTransfer3x8').attr('value', inputTransfer3x8);


          $('.inputTransfer3x8').attr('value', inputTransfer3x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer3x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer3x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer3x8').click(function(){

           var getInput = inputTransfer3x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer3x8 = newInput;
            $('.inputTransfer3x8').attr('value', inputTransfer3x8);
     
           console.log('New input is : ' + inputTransfer3x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });




//////////////////



/////////////////////



$('.Transfer4x8').click(function(){


$('.EnterTransfer4x8').show();


console.log('Mike x8 was selected');

 inputTransfer4x8 = 0;
 $('.inputTransfer4x8').attr('value', inputTransfer4x8);


   $('#Mikex8 > span, .inputTransfer4x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer4x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer4x8').click(function(){

  if (inputTransfer4x8 === 0 ){
    inputTransfer4x8 = '';
  }
});

// ///////




 $('.numTransfer4x8').click(function(){

          inputTransfer4x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer4x8').attr('value', inputTransfer4x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer4x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer4x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer4x8').click(function(){

           var getInput = inputTransfer4x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer4x8 = newInput;
            $('.inputTransfer4x8').attr('value', inputTransfer4x8);
     
           console.log('New input is : ' + inputTransfer4x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////



/////////////////////



$('.Transfer5x8').click(function(){


$('.EnterTransfer5x8').show();


console.log('Mike x8 was selected');

 inputTransfer5x8 = 0;
 $('.inputTransfer5x8').attr('value', inputTransfer5x8);


   $('#Mikex8 > span, .inputTransfer5x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer5x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer5x8').click(function(){

  if (inputTransfer5x8 === 0 ){
    inputTransfer5x8 = '';
  }
});

// ///////




 $('.numTransfer5x8').click(function(){

          inputTransfer5x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer5x8').attr('value', inputTransfer5x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer5x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer5x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer5x8').click(function(){

           var getInput = inputTransfer5x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer5x8 = newInput;
            $('.inputTransfer5x8').attr('value', inputTransfer5x8);
     
           console.log('New input is : ' + inputTransfer5x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////



/////////////////////



$('.Transfer6x8').click(function(){


$('.EnterTransfer6x8').show();


console.log('Mike x8 was selected');

 inputTransfer6x8 = 0;
 $('.inputTransfer6x8').attr('value', inputTransfer6x8);


   $('#Mikex8 > span, .inputTransfer6x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer6x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer6x8').click(function(){

  if (inputTransfer6x8 === 0 ){
    inputTransfer6x8 = '';
  }
});

// ///////




 $('.numTransfer6x8').click(function(){

          inputTransfer6x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer6x8').attr('value', inputTransfer6x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer6x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer6x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer6x8').click(function(){

           var getInput = inputTransfer6x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer6x8 = newInput;
            $('.inputTransfer6x8').attr('value', inputTransfer6x8);
     
           console.log('New input is : ' + inputTransfer6x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////


/////////////////////



$('.Transfer7x8').click(function(){


$('.EnterTransfer7x8').show();


console.log('Mike x8 was selected');

 inputTransfer7x8 = 0;
 $('.inputTransfer7x8').attr('value', inputTransfer7x8);


   $('#Mikex8 > span, .inputTransfer7x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer7x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer7x8').click(function(){

  if (inputTransfer7x8 === 0 ){
    inputTransfer7x8 = '';
  }
});

// ///////




 $('.numTransfer7x8').click(function(){

          inputTransfer7x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer7x8').attr('value', inputTransfer7x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer7x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer7x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer7x8').click(function(){

           var getInput = inputTransfer7x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer7x8 = newInput;
            $('.inputTransfer7x8').attr('value', inputTransfer7x8);
     
           console.log('New input is : ' + inputTransfer7x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////



/////////////////////



$('.Transfer8x8').click(function(){


$('.EnterTransfer8x8').show();


console.log('Mike x8 was selected');

 inputTransfer8x8 = 0;
 $('.inputTransfer8x8').attr('value', inputTransfer8x8);


   $('#Mikex8 > span, .inputTransfer8x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer8x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer8x8').click(function(){

  if (inputTransfer8x8 === 0 ){
    inputTransfer8x8 = '';
  }
});

// ///////




 $('.numTransfer8x8').click(function(){

          inputTransfer8x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer8x8').attr('value', inputTransfer8x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer8x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer8x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer8x8').click(function(){

           var getInput = inputTransfer8x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer8x8 = newInput;
            $('.inputTransfer8x8').attr('value', inputTransfer8x8);
     
           console.log('New input is : ' + inputTransfer8x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////

/////////////////////



$('.Transfer9x8').click(function(){


$('.EnterTransfer9x8').show();


console.log('Mike x8 was selected');

 inputTransfer9x8 = 0;
 $('.inputTransfer9x8').attr('value', inputTransfer9x8);


   $('#Mikex8 > span, .inputTransfer9x8').css('color','green');


 $('.NumPadx8').hide();
 $('.numTransfer9x8').show();




 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

});



///////////

$('.numTransfer9x8').click(function(){

  if (inputTransfer9x8 === 0 ){
    inputTransfer9x8 = '';
  }
});

// ///////




 $('.numTransfer9x8').click(function(){

          inputTransfer9x8 += $(this).attr("value");
          // $('.inputTransfer4x8').attr('value', inputTransfer4x8);


          $('.inputTransfer9x8').attr('value', inputTransfer9x8);

           console.log("current Friend 1 imput x8 number is :" + inputTransfer9x8);
           console.log('New Friend1 imput x8 is : ' + inputTransfer9x8);
           
 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);

        
           });




       //backspace button
           $('#backSpaceTransfer9x8').click(function(){

           var getInput = inputTransfer9x8;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer9x8 = newInput;
            $('.inputTransfer9x8').attr('value', inputTransfer9x8);
     
           console.log('New input is : ' + inputTransfer9x8)
            

 userInputx8 =  parseInt(inputTransfer1x8) + parseInt(inputTransfer2x8) + parseInt(inputTransfer3x8) + parseInt(inputTransfer4x8) + parseInt(inputTransfer5x8) + parseInt(inputTransfer6x8) +parseInt(inputTransfer7x8) + parseInt(inputTransfer8x8) + parseInt(inputTransfer9x8);
 $('#qtyvalue2x8').attr('value', userInputx8);




       });

//////////////////





$('.ToogleTransferToSelectx8').click(function(){
    $(this).hide();
    $('.ToogleTransferToColumnx8').show();
});


$('.ToogleTransferToColumnx8').click(function(){
    $(this).hide();
    $('.ToogleTransferToSelectx8').show();
});







$('.ToogleTransferToSelectx8').click(function(){
       
   $('.SelectTransferFromx8, .SelectTransferTox8, .arrowTransferx8').hide();
   $('.TransFromx8, .TransTox8, .arrowTransx8').show();

});




$('.ToogleTransferToColumnx8').click(function(){

   $('.TransFromx8, .TransTox8, .arrowTransx8').hide();
   $('.SelectTransferFromx8, .SelectTransferTox8, .arrowTransferx8').show();
       
});



// ///////change Trans From Option ////////



$('.liTransFrom1x8').click(function(){
console.log("li From 1 was clicked");
   $('.TransferHideFromx8').hide();
   $('.TransferHideFrom1x8').show();
       
});



$('.liTransFrom2x8').click(function(){
console.log("li From 2 was clicked");
   $('.TransferHideFromx8').hide();
   $('.TransferHideFrom2x8').show();
       
});



$('.liTransFrom3x8').click(function(){
console.log("li From 3 was clicked");
   $('.TransferHideFromx8').hide();
   $('.TransferHideFrom3x8').show();
       
});




$('.liTransFrom4x8').click(function(){
console.log("li From 4 was clicked");
   $('.TransferHideFromx8').hide();
   $('.TransferHideFrom4x8').show();
       
});




$('.liTransFrom5x8').click(function(){
console.log("li From 5 was clicked");
   $('.TransferHideFromx8').hide();
   $('.TransferHideFrom5x8').show();
       
});






// ///////change Trans From Option ////////



// ///////change Trans To Option ////////



$('.liTransTo1x8').click(function(){
  console.log('Li To 1 was Clicked');
   $('.TransferHideTox8').hide();
   $('.TransferHideTo1x8').show();
       
});



$('.liTransTo2x8').click(function(){
  console.log('Li To 2 was Clicked');
   $('.TransferHideTox8').hide();
   $('.TransferHideTo2x8').show();
       
});



$('.liTransTo3x8').click(function(){
  console.log('Li To 3 was Clicked');
   $('.TransferHideTox8').hide();
   $('.TransferHideTo3x8').show();
       
});




$('.liTransTo4x8').click(function(){
  console.log('Li To 4 was Clicked');
   $('.TransferHideTox8').hide();
   $('.TransferHideTo4x8').show();
       
});




$('.liTransTo5x8').click(function(){
  console.log('Li To 5 was Clicked');
   $('.TransferHideTox8').hide();
   $('.TransferHideTo5x8').show();
       
});



// ///////change Trans To Option ////////












///////////////////////////////////////////////////
















userInput23x8="";

 $('.numVx8').click(function(){
   userInput23x8 += $(this).attr("value");

  
   $('.qtyvalue23x8').attr('value', userInput23x8);
    console.log("current forrouting number is :" + userInput23x8);
    console.log('New input is : ' + userInput23x8);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex8').click(function(){

    var getInputx8 = userInput23x8;
    var lenx8 = getInputx8.length -1;
    var newInputx8 = getInputx8.substring(0, lenx8);

 
    userInput23x8 = newInputx8;

     $('.qtyvalue23x8').attr('value', userInput23x8);
     
    console.log('New input is : ' + userInput23x8)




});







////////////////////Pay panel show/hide/////////////////////////////////


$('#submit2Yx8').click(function(){

  $('#submit2Yx8, #exit2Yx8').hide();
  $('.confBack2Yx8').show();

if(billDenox8 === true){

  userInput23x8 = '';

  $('.billsx8').fadeIn();
  $('.qtyvalue23x8').attr('value', userInput23x8);
  $('.amountInputx8, .NumPadx8').hide();
  console.log('userInputx8 =' + userInput23x8);


}


});







$('#submit2Yx8').click(function(){

  if(serviceValuex8 === 'QuickPay'){
    $('.pyx8').fadeIn();
    $('.numVx8, .NumPadx8').hide();

  }

});


$('#submit2Yx8').click(function(){

  if(serviceValuex8 === 'CreditCards'){
    $('.pyx8').fadeIn();
    $('.numVx8, .NumPadx8').hide();

  }

});



$('#submit2Yx8').click(function(){

  if(serviceValuex8 === 'WireTransfer'){
    $('.pyx8').fadeIn();
    $('.numVx8, .NumPadx8').hide();

  }

});








$('.SelectBuyOrSellx8, .ScanOrGiftx8').click(function(){

 
    $('.pyx8').fadeIn();
    $('.numVx8, .NumPadx8').hide();



});







// /////////////// back2yx8 /////////////////

$('.back2Yx8').click(function(){

if(billDenox8 === true){

$('.billsx8').hide();
$('.amountInputx8, .numVx8').show();

}

  if(serviceValuex8 === 'PayBills' || 'QuickPay' || 'CreditCards' || "Fuels"){
       $('.pyx8').fadeOut();
       $('.pyx8 > label').removeClass('active');
       $('.numVx8').show();
       serviceValuex8 === 'PayBills';

}


if(serviceValuex8 === 'Fuels'){

    $('.confBack2Yx8').hide();
    $('.SelectBuyOrSellx8').show();
    

}else if(serviceValuex8 === "QuickPay"){
     
     $('.confBack2Yx8').hide();
     $('.ScanOrGiftx8').show();
     

}else{



  $('.confBack2Yx8, .NumPadx8').hide();


  $('.FinBBBx8').show();
  $('.LinearNumPadx8, .numVx8').show();

}



});

/////////////////////////////////////////////////////


screenType2x8 = "Machine2x8",

$('#ATM1Machinex8').click(function(){

  screenType2x8 = 'Machine2x8';
  console.log('screenType2x8 = ' + screenType2x8);

});




$('#ATM1Mobilex8').click(function(){

   screenType2x8 = 'Mobile2x8';
   console.log('screenType2x8 = ' + screenType2x8);

;

});




 userInputx8= "";

$('.confirm2Yx8, .Scanconfirm2Yx8').click(function(){ 

   
    $('.ServicePanelx8,  .confBack2Yx8').hide();
    $('.TopHalfx8').show();
      $('#submit2Yx8, #exit2Yx8, .FinBBBx8').show();
    $("#inCheckSentx8, #inSavSentx8, #inCheckx8, #inSavx8, #loanAmountx8, #cardPaymentAmountx8, #quickPayAmountx8").attr("value", userInputx8);
    $("#happyCardx8").attr("value", SelectedCardx8);

   
      userInputx8= "0.00";
      $("#qtyvalue2x8").attr('value', userInputx8);
      console.log('.confirm2Yx8userInputx8 =' + userInputx8);

      console.log('screenTypex8 = ' + screenTypex8);
      console.log('screenType2x8 = ' + screenType2x8);


      $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x8').hide();
      $('#savTche, #savTche2x2, #savTche2x3, #savTche2x8').hide();


     $('.pyx8').hide();
     $('.PayButtonsx8 > label').removeClass('active');

     $('.NumPadx8, .billsx8').hide();
     $('.numVx8, .amountInputx8').show();

  $('.serB, .tofB, .sm2x3, .sm2x8, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x8, .acm2x5, .acm2x6, .acm2x7').removeClass('active');



  $('.NoMainTransferx5').hide();
  $('.acm2Buttonsx5, .acm2Buttonsx7').show();



 
if(serviceValuex8 === "Withdraw" && userInputx8 !== ""){

     console.log('service value is: ' + serviceValuex8);
     $('.retrievex8').fadeIn('');



}else if(serviceValuex8 === 'QuickPay' && userInputx8 !== ""){
   
     console.log("Service value is = " + serviceValuex8);      
     $('.QuickSentx8').fadeIn('slow');



}else if(serviceValuex8 === 'Fuels' && screenType2x8 === "Mobile2x8" && userInputx8 !== ""){

      console.log('service value is: ' + serviceValuex8);
      $('.GasPurchasedx8').fadeIn('');



}else if(serviceValuex8 === 'Fuels' && screenType2x8 === "Machine2x8" && userInputx8 !== "" && InnerRightypex8 === "CarMobile"){

      console.log('service value is: ' + serviceValuex8);
      $('.GasPurchasedCarx8').fadeIn('');


}else if(serviceValuex8 === 'Fuels' && screenType2x8 === "Machine2x8" && userInputx8 !== "" && InnerRightypex8 === "GasPump"){

      console.log('service value is: ' + serviceValuex8);
      $('.GasPurchasedPumpx8').fadeIn('');




}else if(serviceValuex8 === 'ScanATM' && userInputx8 !== ''){

     console.log("Service value is = " + serviceValuex8);          
     $('.retrievex8').fadeIn();



}else if(serviceValuex8 === 'Credit' && userInputx8 !== ""){
  
     console.log("Service value is = " + serviceValuex8);
     $('.CardPaymentx8').fadeIn('');    




}else{

     $('.selectt').fadeIn('');
     console.log("Please select a service and an account for your transaction");
     console.log('service value is: ' + serviceValuex8);
     console.log('tof value is: ' + tofValuex8);

}



      userInputx8= "0.00";
      $("#qtyvalue2x8").attr('value', userInputx8);
      console.log('.confirm2Yx8userInputx8 =' + userInputx8);
    

    
});











//for deposits display the prompting pop-up as soon as the customer selects the saving or checking account

   $('#cash2x8, #withdraw2x8, #checks2x8').click(function(){
      $('#checking2x8, #saving2x8').removeClass('active');

      });



   $('#checking2x8, #saving2x8').click(function(){

     if (serviceValuex8 === $('#cash2x8').attr("value")){
      $('.depositCashx8').fadeIn('fast');

  


     }else if

     (serviceValuex8 === $('#checks2x8').attr("value")){
      $('.depositCheckx8').fadeIn('fast');

     }

   });


     









 $('.CardPaymentx8, .checkCashSentx8, .tranToSavingsx8, .tranToCheckingx8, .retrievex8, .GoodByex8, .LoanGrantedx8, .depositCashx8, .QuickSentx8').click(function(){
  $(this).fadeOut('fast');


});








///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox8').removeClass('active');
//        $('#receiptYes, #receiptNox8').click(function(){

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


$('.checkinginfo2x8').click(function(){
  $(this).fadeOut('fast');
});


$('#checking33').dblclick(function(){
$('.checkinginfo2x8').fadeIn('fast');

});






$('.savinginfo2x8').click(function(){
  $(this).fadeOut('fast');
});


$('#saving33').dblclick(function(){
$('.savinginfo2x8').fadeIn('fast');

});


// $('#closeSendx8').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x8').hide();
//   $('.numCCx8').hide();
//   $('.numRx8').hide();
//   $('.numVx8').show();

// })

// $('#closeSend2x8').click(function(){
//   $('.sendMoney3x8').hide();
// })




// $('#deposx8, #deposx82, #wdraw1x8, #wdraw2x8, #sendx, #sendx8').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });






$('.serB, .sm2x2, .sm2x3, .sm2x8, .sm2x5, .sm2x6, .sm2x7').click(function(){


   $('#Scan2Yx8').hide();
   $('#submit2Yx8').fadeIn();


});



$('.serB, .sm2x2, .tofB, .sm2x3, .sm2x8, .sm2x5, .sm2x6, .sm2x7, .financialModelx8').click(function(){





   $('#savTche, #savTche2x2, #savTche2x3, #savTche2x8').hide();
   $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x8, .NoMainTransferx5').hide();

   $('.acm2Buttonsx5, .acm2Buttonsx7').show();

   $('#saving2, #saving33, #savingx8').removeClass('active');
   $('#checking2, #checking33, #checkingx8').removeClass('active');

   $('.TransferHideFromx8').removeClass('MainTransferHideFromx8');
   $('.TransferHideTox8').removeClass('MainTransferHideTox8');
  
});







$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx8, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx8').click(function(){


  serviceValuex8="Withdraw";
  console.log('ScanWithdrawx8 clicked');
  $('#Scan2Yx8').show();
  $('#submit2Yx8').hide();

});







   $('#transfer4x2, #transfer2').click(function(){   
     serviceValuex8 ='Transfer';
   });




$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x8').click(function(){

  $('#savTche, #savTche2x2, #savTche2x3, #savTche2x8, .acm2Buttonsx5, .acm2Buttonsx7, .NoMainTransferx5').hide();
  serviceValuex8 = "Transfer";
  tofValuex8 = "waived";
  $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x8, #cheTsav2x5').fadeIn();
  console.log('servicevalue is : '+ serviceValuex8);
  $('#checking2, #checking33, #checkingx8').addClass('active');
  $('#saving2, #saving33, #savingx8').removeClass('active');

  $('.TransferHideFromx8').addClass('MainTransferHideFromx8');
  $('.TransferHideTox8').addClass('MainTransferHideTox8');



});


$('#Transfer4x5, #Transfer4x7').click(function(){

  $('.acm2Buttonsx5, .acm2Buttonsx7').hide();
  $('.NoMainTransferx5').show();


$('.TransferHideFromx8').addClass('MainTransferHideFromx8');
$('.TransferHideTox8').addClass('MainTransferHideTox8');

});







   $('#checking2, #transx8, #checking33, #checkingx8').click(function(){

    tofValuex8 = 'checking';
     if(serviceValuex8 === 'Transfer'){
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x8').fadeIn('');
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x8').hide();

          console.log('transfer from checking');
          console.log(serviceValuex8);
  

            }


    }); 





      
   $('#saving2, #trans2x8, #saving33, #savingx8, #transfer2').click(function(){
    tofValuex8 = 'savings';
      if(serviceValuex8 ==='Transfer'){

      
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x8').hide();
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x8').fadeIn();

          console.log('transfer from savings');
          console.log(serviceValuex8);
        
        }


      });





// $('.ScanWithdrawx8').click(function(){

//   serviceValuex8="Withdraw";
//   console.log('ScanWithdrawx8 clicked');

//     $('#submit2Yx8').hide();
//     $('#Scan2Yx8').fadeIn();

// });






// $('.Withdraw4x8').click(function(){

//   if (screenTypex8 = 'Mobilex8'){
//   console.log('ScanWithdrawx8 clicked');

//     $('#submit2Yx8').hide();
//     $('#Scan2Yx8').fadeIn();

// }else if (screenTypex8 = 'Machinex8'){
//   console.log('ScanWithdrawx8 clicked');

//     $('#submit2Yx8').show();
//     $('#Scan2Yx8').hide();


// }


// });







$('.tofB, .acm2x3, .acm2x8, .acm2x5, .acm2x6, .acm2x7').click(function(){

  if (serviceValuex8 === 'Deposit'){

    $('.depositx8').fadeIn();
    console.log('Depositx8 faddeIn');
  }

});







$('#Deposit4x2, #Deposit42').click(function(){

  serviceValuex8 = 'Deposit'
  $('.depositx8').fadeIn();
  console.log('Depositx8 faddeIn');

});






// });


$('.depositx8').click(function(){
  $(this).fadeOut();
  });



$('#deposx8, #deposx82, #transferx8, #sendx, #sendFromCheckingsx8, #sendx8, #trans2x8, #cash2, #withdraw2, #checks2, #transfer, #payticket, #Live').click(function(){
  $('.billsx8').hide();
  $('.numVx8, #amountx8, #qtyvalue2x8').show();
  $('.confBack2Yx8').hide();
  $('#submit2Yx8, #exit2Yx8').show();

  // if(serviceValuex8 !== "withdraw"){

  //  // $('.Confirm2Yx8').Show();
  // }



});

////////////////////////////////////////////

 $('.lan2x8, #qty2x8, .fin2x8, #deposx8, #wdraw1x8, #checking33, #transferx8, #wdraw2x8, #trans2x8, #send, #trans2x8, #sendx8').click(function(){
      $('.serDropx8').hide();
  })




  console.log('Service menu was clicked');



$('.lan2x8, .qty2x8, .fin2x8').click(function(){

$('.serDropx8').hide();

});


 





$('.NumPadx8').click(function(){

// feeparsseInputx8 = Number(userInputx8);
// feeInputx8 = feeparsseInputx8 / 2;
feeInputx8 = "15.5";

console.log('Fee input is =' + feeInputx8);
console.log('feeinput is typeof = ' + typeof('feeInputx8'));

   $('.feeInputx8').attr('value', feeInputx8);

});




$('#PinChangex8, #ServiceMenux8').click(function(){

  $('.feesx8').hide();

});




$('#closeSer2Panelsx8, .serDropx8 ').click(function(){

  $('.feesx8').show();



  
});







  $('#PinChangex8').click(function(){

     $('.feesx8').addClass('pinChangefeesx8');

  });


$('#closeSer2Panelsx8, .confirm2Yx8, OperationEndedPanelx8').click(function(){

$('.feesx8').removeClass('pinChangefeesx8');

});











///////////////////////////////////Submit2Yx8/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// $('#english2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);
//   $('#cash2x8').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
//   $('#withdraw2x8').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
//   $('#checks2x8').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


//     ///////////////

//   $('#checking33').html('CHECKING<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('SAVINGS <br><span>Balance: $1,200.00</span>');


//   $('#deposx8, #deposx').html('<input type="radio" name="lan"> Deposit');
//   $('#wdraw1x8, #wdraw2x8x2').html('<input type="radio" name="lan"> Withdraw');
//   $('#transferx8, #trans2x8').html('<input type="radio" name="lan"> Transfer');
//   $('#sendx, #sendx8').text('Send Money');



//   //////////////
  
  
 
//   $('#amountx8').text('$');
//   $('#qtyvalue2x8').attr('value', userInputx8);


//     $('#submit2x8').html('SUBMIT');

//     $('#exit2x8').html('EXIT');


//     $('#submit2Yx8').html('SUBMIT');

//     $('#exit2Yx8').html('EXIT');

//   $('.confirm2x8').html('<h2><b>Confirm</b></h2>');
//   $('.back2x8').html('<h2><b>Back</b></h2>');

// $('.confirm2Yx8').html('<h2><b>Confirm</b></h2>');
//   $('.back2Yx8').html('<h2><b>Back</b></h2>');




//   $('#casdex8').html('<b> Please Insert your Cash Deposit</b>');

//   $('#casde2x8').html('<b> Please Insert your Deposit</b>');


//   $('#billsx8').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);

//   $('#retrx8').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

//   $('#chedex8').html('<b> Please Insert your Check Deposit now</b>');

//   $('#cancelx8').text('(Tap to Cancel)');
//   $('#cancel2x8').text('(Tap to Cancel)');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
//   $('#sfcaCancelx8').text('( Tap to Close)');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
//   $('#sfsaCancelx8').text('( Tap to Close)');



//     $('#gbyx8').html('<b>Good Bye</b>');
//     $('#nrepx8').text('Need a Receipt');
//     $('#receiptYesx8').text('YES');
//     $('#receiptNox8').text('NO');
//     $('#exBackx8').html('<b>Go Back</b>'); 


//      $('#stcx8').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
//      $('#stcXx8').text('( Tap to Close)');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
//    $('#ctsXx8').text('Tap to Close');


//      $('#oopsx8').html('<h1><b>Oops</b></h1>');



//   $('#machinex8').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

//   $('#limitx8').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');
// });




// $('#spanish2x8').click(function(){

//   userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);

// $('#cash2x8').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
//   $('#checks2x8').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
//   ///////////////

//   $('#checking33').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('AHORROS <br><span>Balance: $1,200.00</span>');


//   $('#deposx8, #deposx82x8').html('<input type="radio" name="lan">Depositar');
//   $('#wdraw1x8, #wdraw2x8').html('<input type="radio" name="lan">Retirar');
//   $('#transferx8, #trans2x8').html('<input type="radio" name="lan">Transferir');
//   $('#sendx, #sendx8').text('Enviar Dinero');







//   //////////////
  



 
//   $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);

  
  

//   $('#submit2x8').html('SOMETER');

//   $('#exit2x8').html('SALIR');


//   $('#submit2Yx8').html('SOMETER');

//   $('#exit2Yx8').html('SALIR');

//   $('.confirm2x8').html('<h2><b>Confirmar</b></h2>');
//   $('.back2x8').html('<h2><b>Atras</b></h2>');

//   $('.confirm2Yx8').html('<h2><b>Confirmar</b></h2>');
//   $('.back2Yx8').html('<h2><b>Atras</b></h2>');


//   $('#casdex8').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

//   $('#casde2x8').html('<b> Favor Inserte su Deposito Ahora</b>');



 
//   $('#billsx8').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);


//  $('#retrx8').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

//  $('#chedex8').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

//  $('#cancelx8').text('(Toque para Cerrar)');
//  $('#cancel2x8').text('(Toque para Cancelar)');


// $('#sfcax8').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
// $('#sfcaCancelx8').text('( Toca para cerrar )');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
//   $('#sfsaCancelx8').text('( Toca para cerrar)');



//     $('#gbyx8').html('<b>Hasta Luego</b>');
//     $('#nrepx8').text('Necesita Recibo?');
//     $('#receiptYesx8').text('SI');
//     $('#receiptNox8').text('NO');
//     $('#exBackx8').html('<b>Volver Atras</b>'); 


//   $('#stcx8').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
//   $('#stcXx8').text('( Toca para cerrar)');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
//    $('#ctsXx8').text('Toca para cerrar');

//   $('#oopsx8').html('<h1><b>Ohoh</b></h1>'); 



//   $('#machinex8').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

//   $('#limitx8').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');


//   });






// $('#chinesse2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);
// $('#cash2x8').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



//     ///////////////

//   $('#checking33').html('檢查 <br><span>天平: $2,200.00</span>');
//   $('#saving33').html(' 儲蓄<br><span>天平: $1,200.00</span>');


//   $('#deposx8, #deposx82x8').html('<input type="radio" name="lan">存入現金');
//   $('#wdraw1x8, #wdraw2x8').html('<input type="radio" name="lan"> 刪除');
//   $('#transferx8, #trans2x8').html('<input type="radio" name="lan">刪除');
//   $('#sendx, #sendx8').text('刪現金');



//   //////////////


// console.log('A Language Button clicked');

  
 
//   $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);
  

//   $('#submit2x8').html('提交');

//   $('#exit2x8').html('取消');

//   $('#submit2Yx8').html('提交');

//   $('#exit2Yx8').html('取消');


//   $('.confirm2x8').html('<h2><b>確認</b></h2>');
//   $('.back2x8').html('<h2><b>返回</b></h2>');

//   $('.confirm2Yx8').html('<h2><b>確認</b></h2>');
//   $('.back2Yx8').html('<h2><b>返回</b></h2>');



//   $('#casdex8').html('<b> 請插入您的現金存款</b>');

//   $('#casde2x8').html('<b> 請插入您的現金存款</b>');


  
//   $('#billsx8').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);

//   $('#retrx8').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

//   $('#chedex8').html('<b> 租賃現在插入您的支票存款</b>');

//   $('#cancelx8').text('（點擊取消）');
//   $('#cancel2x8').text('（點擊取消）');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
//   $('#sfcaCancelx8').text('（點擊關閉）');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
//   $('#sfsaCancelx8').text('（點擊關閉）');



//     $('#gbyx8').html('<b>再見</b>');
//     $('#nrepx8').text('需要收據？');
//     $('#receiptYesx8').text('是的');
//     $('#receiptNox8').text('沒有');
//     $('#exBackx8').html('<b>回去</b>'); 


//      $('#stcx8').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
//      $('#stcXx8').text('（點擊關閉）');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
//    $('#ctsXx8').text('（點擊關閉）');


//      $('#oopsx8').html('<h1><b>哎呀</b></h1>');



//   $('#machinex8').html('<b> 本機只能發送賬單：</b></h2><br>'); 

//   $('#limitx8').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

//   });







// $('#russian2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);

// $('#cash2x8').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


//  $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
//   $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


//    ///////////////

//   $('#checking33').html('Проверки <br><span>Баланс: $2,200.00</span>');
//   $('#saving33').html('Экономия<br><span>Баланс: $1,200.00</span>');


//   $('#deposx8, #deposx82').html('<input type="radio" name="lan">денежных');
//   $('#wdraw1x8, #wdraw2x8').html('<input type="radio" name="lan">Удалить');
//   $('#transferx8, #trans2x8').html('<input type="radio" name="lan">средств');
//   $('#sendx, #sendx8').text('денежных');

// console.log('A Language Button clicked');

//   //////////////
  
  
//   $('#amountx8').text('$');
//   $('#qtyvalue2x8').attr('value', userInputx8);



//   $('#submit2x8').html('Отправить');

//   $('#exit2x8').html('Отмена');

//   $('#submit2Yx8').html('Отправить');

//   $('#exit2Yx8').html('Отмена');



//   $('.confirm2x8').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2x8').html('<h2><b> Назад</b></h2>');

//   $('.confirm2Yx8').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2Yx8').html('<h2><b> Назад</b></h2>');


//   $('#casdex8').html('<b> Пожалуйста, введите свой денежный депозит </b>');
//   $('#casde2x8').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
//   $('#billsx8').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);


//   $('#retrx8').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

//   $('#chedex8').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

//   $('#cancelx8').text('(Нажмите, чтобы отменить)');
//   $('#cancel2x8').text('(Нажмите, чтобы отменить)');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
//   $('#sfcaCancelx8').text('(Нажмите, чтобы закрыть)');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
//   $('#sfsaCancelx8').text('(Нажмите, чтобы закрыть)');



//     $('#gbyx8').html('<b> До свидания</b>');
//     $('#nrepx8').text('Нужна квитанция?');
//     $('#receiptYesx8').text(' ДА');
//     $('#receiptNox8').text(' НЕТ');
//     $('#exBackx8').html('<b>Вернуться</b>'); 



//      $('#stcx8').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
//      $('#stcXx8').text('(Нажмите, чтобы закрыть)');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
//    $('#ctsXx8').text('(Нажмите, чтобы закрыть)');


//      $('#oopsx8').html('<h1><b>К сожалению</b></h1>');



//   $('#machinex8').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

//   $('#limitx8').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




//   });





// $('#german2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);
// $('#cash2x8').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

//   $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);
  
  

//   $('#submit2x8').html(' Senden ');

//   $('#exit2x8').html(' Abbrechen ');

//   $('#submit2Yx8').html(' Senden ');

//   $('#exit2Yx8').html(' Abbrechen ');

//   $('.confirm2x8').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2x8').html('<h2><b> Zurück</b></h2>');


//   $('.confirm2Yx8').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2Yx8').html('<h2><b> Zurück</b></h2>');




//   $('#casdex8').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
//   $('#casde2x8').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


//   $('#billsx8').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);

// $('#retrx8').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

//   $('#chedex8').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

//   $('#cancelx8').text('(Tippen Sie auf Abbrechen)');
//   $('#cancel2x8').text('(Tippen Sie auf Abbrechen)');

 


//  $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
//   $('#sfcaCancelx8').text('(Tippen Sie auf Schließen)');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
//   $('#sfsaCancelx8').text('(Tippen Sie auf Schließen)');



//     $('#gbyx8').html('<b> Auf Wiedersehen</b>');
//     $('#nrepx8').text('Benötigen Sie einen Beleg?');
//     $('#receiptYesx8').text(' JA');
//     $('#receiptNox8').text(' NEIN');
//     $('#exBackx8').html('<b>Zurück</b>'); 





//      $('#stcx8').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
//      $('#stcXx8').text('(Tippen Sie auf Schließen)');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
//    $('#ctsXx8').text('(Tippen Sie auf Schließen)');


//      $('#oopsx8').html('<h1><b> Hoppla</b></h1>');


//   $('#machinex8').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

//   $('#limitx8').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


// });




// $('#hindi2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);
// $('#cash2x8').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

//   $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
//   $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);
  
  

//   $('#submit2x8').html(' जमा करें ');

//   $('#exit2x8').html(' रद्द ');

//   $('#submit2Yx8').html(' जमा करें ');

//   $('#exit2Yx8').html(' रद्द ');


//   $('.confirm2x8').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2x8').html('<h2><b> वापस</b></h2>');

//   $('.confirm2Yx8').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx8').html('<h2><b> वापस</b></h2>');




//   $('#casdex8').html('<b> कृपया अपना नकद जमा डालें</b>');
//   $('#casde2x8').html('<b> कृपया अपना नकद जमा डालें</b>');


//   $('#billsx8').text('');
//   $('#billsx8').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);

//   $('#retrx8').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

//   $('#chedex8').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



// $('#cancelx8').text('(रद्द करने के लिए टैप करें)');
//   $('#cancel2x8').text('(रद्द करने के लिए टैप करें)');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
//   $('#sfcaCancelx8').text('(बंद करने के लिए टैप करें)');

//   $('#sfsax8').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
//   $('#sfsaCancelx8').text('(बंद करने के लिए टैप करें)');




//     $('#gbyx8').html('<b>अच्छा अलविदा</b>');
//     $('#nrepx8').text('रसीद की आवश्यकता है?');
//     $('#receiptYesx8').text('हाँ');
//     $('#receiptNox8').text('नहीं');
//     $('#exBackx8').html('<b> वापस जाओ</b>'); 


//      $('#stcx8').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
//      $('#stcXx8').text('(बंद करने के लिए टैप करें)');

//    $('#ctsx8').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
//    $('#ctsXx8').text('(बंद करने के लिए टैप करें)');


//      $('#oopsx8').html('<h1><b> ओह्स</b></h1>');



//   $('#machinex8').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

//   $('#limitx8').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







//   });



// $('#french2x8').click(function(){
  
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);

// $('#cash2x8').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

//    $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);
  
  

//   $('#submit2x8').html(' Soumettre ');

//   $('#exit2x8').html(' Annuler ');

//   $('#submit2Yx8').html(' Soumettre ');

//   $('#exit2Yx8').html(' Annuler ');


//   $('.confirm2x8').html('<h2><b> Confirmer</b></h2>');
//   $('.back2x8').html('<h2><b> Retour</b></h2>');

//   $('.confirm2Yx8').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx8').html('<h2><b> वापस</b></h2>');



//   $('#casdex8').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
//   $('#casde2x8').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

//   $('#billsx8').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);

//   $('#retrx8').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

//   $('#chedex8').html('<b>  location Insérez votre chèque de caution maintenant</b>');

//   $('#cancelx8').text('(Appuyer pour annuler)');
//   $('#cancel2x8').text('(Appuyer pour annuler)');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
//   $('#sfcaCancelx8').text('(Appuyez pour fermer)');


//   $('#sfsax8').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
//   $('#sfsaCancelx8').text('(Appuyez pour fermer)');



//     $('#gbyx8').html('<b> Au Revoir</b>');
//     $('#nrepx8').text("Besoin d'un reçu?");
//     $('#receiptYesx8').text(' OUI');
//     $('#receiptNox8').text(' NON');
//     $('#exBackx8').html('<b> Retour</b>'); 


//      $('#stcx8').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
//      $('#stcXx8').text('(Appuyer pour fermer)');



//    $('#ctsx8').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
//    $('#ctsXx8').text('(Appuyez pour fermer)');


//      $('#oopsx8').html('<h1><b> Oups</b></h1>');



//   $('#machinex8').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

//   $('#limitx8').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

//   });





// $('#arabic2x8').click(function(){
// userInputx8 = '0.00';
// $('#qtyvalue2x8').attr('value', userInputx8);
// $('#cash2x8').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

//   $('#withdraw2x8').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
//   $('#checks2x8').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

//    $('#amountx8').text('$');
//    $('#qtyvalue2x8').attr('value', userInputx8);
  

//   $('#submit2x8').html(' إرسال ');
//   $('#exit2x8').html(' الغاء ');

//   $('#submit2Yx8').html(' إرسال ');
//   $('#exit2Yx8').html(' الغاء ');




//   $('.confirm2x8').html('<h2><b> تأكيد </b></h2>');
//   $('.back2x8').html('<h2><b> العودة</b></h2>');

//   $('.confirm2Yx8').html('<h2><b> تأكيد </b></h2>');
//   $('.back2Yx8').html('<h2><b> العودة</b></h2>');





//   $('#casdex8').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
//   $('#casde2x8').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


//   $('#billsx8').text(' ');
//   $('#billsx8').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
//   $('#qtyvalue2x8').attr('value', userInputx8);


//   $('#retrx8').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

//   $('#chedex8').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

//   $('#cancelx8').text('(الحنفية لإلغاء)');
//   $('#cancel2x8').text('(الحنفية لإلغاء)');

//   $('#sfcax8').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
//   $('#sfcaCancelx8').text('(انقر لإغلاق)');


// $('#sfsax8').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
//   $('#sfsaCancelx8').text('(انقر لإغلاق)');



//     $('#gbyx8').html('<b> وداعا</b>');
//     $('#nrepx8').text('تحتاج إلى استلام؟');
//     $('#receiptYesx8').text(' نعم');
//     $('#receiptNox8').text(' لا');
//     $('#exBackx8').html('<b> العودة</b>'); 


//      $('#stcx8').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
//      $('#stcXx8').text('(الحنفية لإغلاق)');



//    $('#ctsx8').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
//    $('#ctsXx8').text('(الحنفية لإغلاق)');


//      $('#oopsx8').html('<h1><b>عفوا</b></h1>');



//   $('#machinex8').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

//   $('#limitx8').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

// console.log('A Language Button clicked');


//   });



$('.OperationEndedPanelx8').click(function(){
  
  $(this).fadeOut();
  userInputx8 = '';
  userInputx8 = '0.00';
  $('#qtyvalue2x8').attr('value', userInputx8);

  console.log('User input is = ' + userInputx8)
 
 $('#cheTsav2x8').hide();
 $('#savTche2x8').hide();

  $('.Fuelx8').removeClass('active');


  $('.serB, .tofB, .sm2x3, .sm2x8, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.tofB, .acm2x2, .acm2x3, .acm2x8, .acm2x5, .acm2x6, .acm2x7').removeClass('active');

  serviceValuex8 = "Fuels";  

     $('.pyx8').fadeOut();
     $('.PayButtonsx8 > label').removeClass('active');

  $('.SelectSendOrRequestx8, .confBack2Yx8').hide();
  $('#SubmitGasOrderx8').show();




$('#submit2Yx8, #exit2Yx8, .FinBBBx8').show();
$('.numVx8, .amountInputx8').show();



});




$('#ScanBILLDEx8, #Scan2Yx8').click(function(){



$('.ScanMachinex8').show().click(function(){
  $(this).hide();
});


});


$('#BSFuelsx8').click(function(){
   $('#submit2Yx8').hide();
});




$('.Fuel1x8').click(function(){

  $('.GiftGasx8').hide();
  $('.GiftGas1x8').show();
  $('.UseGasx8').hide();
  $('.UseGas1x8').show();

 });

$('.Fuel2x8').click(function(){

  $('.GiftGasx8').hide();
  $('.GiftGas2x8').show();
  $('.UseGasx8').hide();
  $('.UseGas2x8').show();

 });

$('.Fuel3x8').click(function(){

  $('.GiftGasx8').hide();
  $('.GiftGas3x8').show();
  $('.UseGasx8').hide();
  $('.UseGas3x8').show();

 });

$('.Fuel4x8').click(function(){

  $('.GiftGasx8').hide();
  $('.GiftGas4x8').show();
  $('.UseGasx8').hide();
  $('.UseGas4x8').show();


 });






$('.UseGas1x8').click(function(){

 $('.UseGasx8').removeClass('SelectedUseGasx8');
 $(this).addClass('SelectedUseGasx8');
 $('#qtyvalueGasx8').attr('value', inputFuel1x8);

});


$('.UseGas2x8').click(function(){
  
 $('.UseGasx8').removeClass('SelectedUseGasx8');
 $(this).addClass('SelectedUseGasx8');
 $('#qtyvalueGasx8').attr('value', inputFuel2x8);

});

$('.UseGas3x8').click(function(){

 $('.UseGasx8').removeClass('SelectedUseGasx8');
 $(this).addClass('SelectedUseGasx8');
 $('#qtyvalueGasx8').attr('value', inputFuel3x8);

});


$('.UseGas4x8').click(function(){

 $('.UseGasx8').removeClass('SelectedUseGasx8');
 $(this).addClass('SelectedUseGasx8');
 $('#qtyvalueGasx8').attr('value', inputFuel4x8);
 
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


 serviceValuex8 = "BuyGas";

 $('.UseGasx8').click(function(){
   serviceValuex8 = "UseGas";

});


$('.Fuelx8').click(function(){ 
   if (serviceValuex8 === "UseGas"){

   console.log('ServiceValue is = ' + serviceValuex8);

   $('#SubmitGasOrderx8, .amountx8, .EnterFuelQtyx8').hide();
   // $('.UseGasInputx8, .ScanPumpOnex8').show();
 


  }else if (serviceValuex8 === "BuyGas"){

  console.log('ServiceValue is = ' + serviceValuex8);


  // userInputx8 = '0.00';
  // $('#qtyvalue2x8').attr('value', userInputx8);
  console.log('userInput is = ' + userInputx8);

}

    $('.ScanconfBack2Yx8, .pyx8').hide(); 

});










$('.StationLocationx8, .Scanconfirm2Yx8, .lan2MOBIx8').click(function(){

  serviceValuex8 = "BuyGas";
  console.log('ServiceValue is = ' + serviceValuex8);

   userInputx8 = '0.00';
   $('#qtyvalue2x8').attr('value', userInputx8);

   $('.amountx8').show();
   $('.UseGasInputx8').hide();

   $('.EnterFuelQtyx8').hide();
   // $('#SubmitGasOrderx8').show();
   // $('.ScanPumpOnex8').hide();


     $('#SubmitGasOrderx8').hide();
     $('.FinBBBx8').show();


});





$('#SubmitGasOrderx8').click(function(){


    $(this).hide();
    $('.ScanconfBack2Yx8').show()
    $('.numVx8, .NumPadx8').hide();
    $('.pyx8').fadeIn();
  
    });


$('#SubmitGasOrderx8').click(function(){

if (screenTypex8 === "Machinex8"){

    $(this).hide();
    $('.ScanconfBack2Yx8').show()
    $('.numVx8, .NumPadx8').hide();
    $('.pyx8').hide();
    $('.pyGasx8').fadeIn();
     }

    });


$('#SubmitGasOrderx8').click(function(){

if (screenTypex8 === "Mobilex8"){

    $(this).hide();
    $('.ScanconfBack2Yx8').show()
    $('.numVx8, .NumPadx8').hide();
    $('.pyGasx8').hide();
    $('.pyx8').faddeIn();
    
     }

    });


screenTypex8 = "Machinex8";























InnerRightypex8 = "CarMobile";









$('.ScanPumpOnex8').click(function(){

if(InnerRightypex8 === "CarMobile"){
  $('.pyGasx8').hide();
  $('.payMOBIx8').show();
}

if(InnerRightypex8 === "GasPump"){
  $('.payMOBIx8').hide();
  $('.pyGasx8, .confBack2Yx8confirm2Yx8').hide();
  $('.GasPurchasedPumpx8').fadeIn('');
}







if(screenTypex8 === "Machinex8"){

    $(this).hide();
    $('.confBack2Yx8').show();
    
    $('.FinBBBx8, .numVx8, .NumPadx8').hide();
}





if(screenTypex8 === "Mobilex8"){

    $(this).hide();
    $('.confBack2Yx8').show();
     $('.ScanMachinex8').show();

    $('.FinBBBx8, .numVx8, .NumPadx8').hide();
}


});








$('.confirm2Yx8').click(function(){


    console.log('ServiceValue is = ' + serviceValuex8);

      $('.NumPadx8, .confBack2Yx8, .ScanMachinex8, .pyx8, .GiftGasx8, .UseGasx8').hide();
      $('.numVx8').show();
     

      $('.Fuelx8').removeClass('active');
      $('.UseGasx8').removeClass('SelectedUseGasx8');



     // $('#SubmitGasOrderx8, .GasPurchasedx8').show();

     $('.FinBBBx8').show();


    inputFuel1x8 = 0;
    inputFuel2x8 = 0;
    inputFuel3x8 = 0;
    inputFuel4x8 = 0;
    


});


$('.Fuelx8').click(function(){

   serviceValuex8 = "Fuels";
   screenTypex8 = "Machinex8";
   console.log('ServiceValue is = ' + serviceValuex8);
    // $('.ScanPumpOnex8, .Giftx8 ').show();
});



$('.FuelMOBIx8').click(function(){

   serviceValuex8 = "Fuels";
   screenTypex8 = "Mobilex8";
   console.log('ServiceValue is = ' + serviceValuex8);
    $('.ScanPumpOnex8, .Giftx8 ').show();
});


$('.back2Yx8').click(function(){


console.log('Scanback was clicked was clicked');

    if(serviceValuex8 === "QuickPay"){
     $('.ConfBack2Yx8, .ScanMachinex8').hide();
     $('.ScanPumpOnex8, .Giftx8').hide();
     $('.SelectSendOrRequestx8').show();
    }

    else{

      $('.NumPadx8, .pyx8, .ConfBack2Yx8').hide();
      $('.numVx8').show();
  
      $('.ScanPumpOnex8, .Giftx8 ').show();
      $('.SelectSendOrRequestx8').hide();
    }
    
});





// /////////////Tap bar Models/////////////////



// $('.Model1x4').click(function(){
//   console.log('Model1x4 was clicked');
//   $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
//   $(this).addClass('FFTSelectedModelx4');
// });




// /////////////Tap bar Models/////////////////







$('.Model1x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model2x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model3x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model4x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model5x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4')
});

$('.Model6x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model7x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model24x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model25x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});


$('.Model27x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});











$('.TransportModel1x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel1x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel2x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel2x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel3x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel3x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel4x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel4x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel5x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel5x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel6x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel6x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel7x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel7x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel8x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel8x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel9x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel9x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel10x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel10x4').addClass('FFTSelectedModelx4');
});

$('.TransportModel11x4').click(function(){
  $('.TransportationModelx4').removeClass('FFTSelectedModelx4');
  $('.TransportModel11x4').addClass('FFTSelectedModelx4');
});















$('.Model1x8').click(function(){
  $('.FuelModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4 ');
});

$('.Model2x8').click(function(){
  $('.FuelModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});







// ////////////////////////////////////


$('.TapBarGas1x8').click(function(){

//Tap bar at the top with regular buttons and no user


  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Regular';

   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');



   $('.Hellox8').hide();

   $('.LanBgroupMOBIx8').show();
   $('.langBx8').show();

  $('.UserNet2x8').hide();
  $('.UserNetx8').hide();

   $('.lan2MOBIx8').addClass('lan2MobileTop');


  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2MOBIx8').addClass('RoundFinx8');
   $('.fin2x8').removeClass('Fin2NoRadiusx8');

   $('.servicePanelsMOBIx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.BlankTapbarx8').hide();




   if(screenType2x8 === "Mobile2x8"){
     $('.lan2MOBIx8').show();
     $('.lan2x8, .Bottomlan2MOBIx8').hide();
   }

   if(screenType2x8 === "Machine2x8"){
     $('.lan2x8, .LanBgroupx8').show();
     $('.lan2MOBIx8').hide();

   }

});




$('.TapBarGas2x8').click(function(){
//Tap bar at the top with NO Buttons just the User

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Bottom';

   $('.lan2MOBIx8').show();
   $('.UserNet2x8, .UserNetx8').hide();

   $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('UserTapbarMOBIx8');

   $('.Hellox8').show();
   $('.Menux8').show();
   $('.LanBgroupMOBIx8, .LanBgroupx8').hide();

   $('.lan2MOBIx8').removeClass('lan2MobileTop');

   
   $('.Bottomlan2MOBIx8').show();
   $('.fin2x8, .fin2MOBIx8').removeClass('RoundFinx8');
  
   $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').show('');
   $('.fin2x8, .fin2MOBIx8').addClass('Fin2NoRadiusx8');

   $('.servicePanelsMOBIx8').addClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').addClass('TapBar2MainTransferMOBIx5');


    $('.lan2x8').show();

    if(screenType2x8 === "Machine2x8"){
     // $('.lan2x8').hide();
     $('.lan2MOBIx8').hide();
     $('.Bottomlan2MOBIx8').show();

   }
    if(screenType2x8 === "Mobile2x8"){
     $('.lan2x8').hide();
   }

   $('.BlankTapbarx8').hide();


    
});




$('.TapBarGas3x8').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Top';

   $('.lan2x8, .lan2MOBIx8').addClass('UserTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8');

   $('.Hellox8').show();
   $('.Menux8').hide();

   $('.LanBgroupMOBIx8').hide();

   $('.lan2MOBIx8').removeClass('lan2MobileTop');


  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
$('.Bottomlan2MOBIx8').hide();


$('.fin2x8, .fin2MOBIx8').addClass('RoundFinx8');

   $('.servicePanelsMOBIx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.lan2x8').show();
   $('.UserNetx8').hide();

   $('.BlankTapbarx8').hide();

});



$('.TapBarFinTech3').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Top';

   // $('.lan2x8').hide('');
   // $('.lan2MOBIx8').show('');


   // $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarx8MOBIx8 UserTapbarx8MOBIx8');
  
 $('.UserNetx8').hide();
 $('.UserNet2x8').hide();

   $('.Hellox8').show();
   $('.LanBgroupMOBIx8').hide();



   // $('.lan2x8, .lan2MOBIx8').addClass('lan2MobileTop');

  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2x8').removeClass('Fin2NoRadiusx8 RoundFinx8');


  $('.fin2MOBIx8').addClass('RoundFinx8');

   $('.ServicePanelx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.lan2x8').show();
   $('.UserNetx8').hide();

   $('.BlankTapbarx8').hide();

});







$('.TapBarGas4x8').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Top';

  $('.Hellox8').hide();
  $('.LanBgroupx8').hide();
  $('.UserNet2x8').hide();
  $('.UserNetx8').show();

   $('.lan2x8').removeClass('ThinTapbarx8MOBIx8 UserTapbarx8MOBIx8');
   $('.lan2x8').removeClass('ThinTapbarx8MOBIx8 UserTapbarx8MOBIx8');

   // $('.Hellox8').hide();
   // $('.LanBgroupMOBIx8').show();

   $('.lan2MOBIx8').addClass('lan2MobileTop');

   // $('.LanBgroupx8, .LanBgroupMOBIx8').show();



  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2x8').removeClass('Fin2NoRadiusx8 RoundFinx8');


  $('.fin2MOBIx8').addClass('RoundFinx8');
   $('.ServicePanelx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.lan2x8').show();

    if(screenType2x8 === "Machine2x8"){
     // $('.lan2x8').hide();
     
   }



   $('.BlankTapbarx8').hide();

   
});







$('.TapBarGas5x8').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx8= 'Top';

  $('.Hellox8').hide();
  $('.LanBgroupx8').hide();
  $('.UserNetx8').hide();
  $('.UserNet2x8').show();

   $('.lan2x8').removeClass('ThinTapbarx8MOBIx8 UserTapbarx8MOBIx8');
   $('.lan2x8').removeClass('ThinTapbarx8MOBIx8 UserTapbarx8MOBIx8');

   // $('.Hellox8').hide();
   // $('.LanBgroupMOBIx8').show();

   $('.lan2MOBIx8').addClass('lan2MobileTop');

   // $('.LanBgroupx8, .LanBgroupMOBIx8').show();



  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2x8').removeClass('Fin2NoRadiusx8 RoundFinx8');


  $('.fin2MOBIx8').addClass('RoundFinx8');
   $('.ServicePanelx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.BlankTapbarx8').hide();
});




$('.TapBarGas6x8').click(function(){

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.lan2x8, .lan2MOBIx8').hide();
  $('.BlankTapbarx8, .Bottomlan2MOBIx8').show();
  $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');


   if(screenType2x8 === "Mobile2x8"){

  Tapbarx8= 'Bottom';

   $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('UserTapbarMOBIx8');

   $('.Hellox8').show();
   $('.Menux8').show();
   $('.LanBgroupMOBIx8, .LanBgroupx8').hide();

   $('.lan2MOBIx8').removeClass('lan2MobileTop');

   
   $('.Bottomlan2MOBIx8').show();
   $('.fin2x8, .fin2MOBIx8').removeClass('RoundFinx8');
  
   $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').show('');
   $('.fin2x8, .fin2MOBIx8').addClass('Fin2NoRadiusx8');

   $('.servicePanelsMOBIx8').addClass('TapBar2servicePanelsMOBIx8');


   }
   $('.fin2x8, .fin2MOBIx8').addClass('Fin2NoRadiusx8');
});



$('.TapBarGas7x8').click(function(){

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.lan2x8, .lan2MOBIx8').hide();
  $('.BlankTapbarx8').show();
  $('.BlankLogox8').hide();
  $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');

  $('.fin2x8, .fin2MOBIx8').removeClass('Fin2NoRadiusx8');


   if(screenType2x8 === "Mobile2x8"){

  Tapbarx8= 'Bottom';

   $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('UserTapbarMOBIx8');

   $('.Hellox8').show();
   $('.Menux8').show();
   $('.LanBgroupMOBIx8, .LanBgroupx8').hide();

   $('.lan2MOBIx8').removeClass('lan2MobileTop');

   
   
   // $('.fin2x8, .fin2MOBIx8').addClass('RoundFinx8');
  
   // $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').show('');
   $('.fin2x8, .fin2MOBIx8').addClass('Fin2NoRadiusx8');
   $('.fin2x8, .fin2MOBIx8').removeClass('RoundFinx8');
   $('.Bottomlan2MOBIx8').show();

   }
  

});



$('.TapBarGas8x8').click(function(){

  $('.TapBarGas').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.lan2x8, .lan2MOBIx8').hide();
  $('.BlankTapbarx8').show();
  $('.BlankLogox8').show();

  $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');

  $('.fin2x8, .fin2MOBIx8').removeClass('RoundFinx8 Fin2NoRadiusx8');

   if(screenType2x8 === "Mobile2x8"){

  Tapbarx8= 'Bottom';

   $('.lan2x8, .lan2MOBIx8').addClass('ThinTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('UserTapbarMOBIx8');

   $('.Hellox8').show();
   $('.Menux8').show();
   $('.LanBgroupMOBIx8, .LanBgroupx8').hide();

   $('.lan2MOBIx8').removeClass('lan2MobileTop');

   
   
   // $('.fin2x8, .fin2MOBIx8').addClass('RoundFinx8');
  
   // $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').show('');

   $('.fin2x8, .fin2MOBIx8').addClass('Fin2NoRadiusx8');
   $('.fin2x8, .fin2MOBIx8').removeClass('RoundFinx8');
   $('.Bottomlan2MOBIx8').show();



   }


   

});








// ////////////////////////////////////



$('.GasModel1x8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


  $('.innerRightx8').removeClass('TinyinnerRightMOBIx8');


   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight1x8, .innerLeft1x8').show();


    InnerRightypex8 = "CarMobile";
    console.log('InnerRightypex8 = ' + InnerRightypex8);
});



$('.GasModel1ax8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.innerRightx8').removeClass('TinyinnerRightMOBIx8');


   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight1ax8, .innerLeft1x8').show();


    InnerRightypex8 = "CarMobile";
    console.log('InnerRightypex8 = ' + InnerRightypex8);
});




$('.GasModel15x8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


  $('.innerRightx8').removeClass('TinyinnerRightMOBIx8');



   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight1x8, .innerLeft2x8').show();
    InnerRightypex8 = "CarMobile";
    console.log('InnerRightypex8 = ' + InnerRightypex8);
});







$('.GasModel25x8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


  $('.innerRightx8').removeClass('TinyinnerRightMOBIx8');



   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight1ax8, .innerLeft2x8').show();
    InnerRightypex8 = "CarMobile";
    console.log('InnerRightypex8 = ' + InnerRightypex8);
});







$('.GasModel3x8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


  $('.innerRightx8').removeClass('TinyinnerRightMOBIx8');


   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight3x8').show();
   InnerRightypex8 = "GasPump";
   console.log('InnerRightypex8 = ' + InnerRightypex8);

});




$('.GasModel4x8').click(function(){
  $('.GasModelx8').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.innerRightx8').removeClass('TinyinnerRightMOBIx8');

   $('.innerRightx8, .innerLeftx8').hide();
   $('.innerRight2x8').show();
   InnerRightypex8 = "GasPump";
   console.log('InnerRightypex8 = ' + InnerRightypex8);


});






//////////////////////////////////////////////









$('.GiftFuelx8').click(function(){
    $('.sendMoney11x8').show();
    $('.confBack2Yx8, .pyx8, .payMOBIx8').hide();
});



$('.SelectSendOrRequestx8').click(function(){


     $(this).hide();
     $('.NumPadx8').hide();
     $('.confBack2Yx8, .pyx8').show();



     if (screenTypex8 = "Machinex8"){
        $('.payMOBIx8').hide();
        $('.pyGasx8').show();
     }


     if(screenTypex8="Mobilex8"){
        $('.pyGasx8').hide();
        $('.payMOBIx8').show();
     }


});





$('.Scanback2Yx8').click(function(){

$('.ScanconfBack2Yx8, .pyx8, .NumPadx8').hide();
$('.pyx8 > label').removeClass('active');


  $('.FinBBBx8').show();
  $('.LinearNumPadx8, .numVx8').show();

});



$('.back2Yx8').click(function(){

$('.confBack2Yx8, .pyx8, .NumPadx8').hide();
$('.pyx8 > label').removeClass('active');


  // $('.SelectSendOrRequestx8').show();
  $('.LinearNumPadx8, .numVx8').show();

});



$('.confirm2Yx8').click(function(){

     $('.FinBBBx8').show();

});







$('.Giftx8').click(function(){

  if(screenType2x8 === "Machine2x8"){
    $('.SendFuelx8').fadeIn();
  }

  if(screenType2x8 === "Mobile2x8"){
    $('.closeGiftGasx8, .sendGiftGasx8 ').fadeIn();
  }

});




 SendGasTotalx8='';

$('.fin2x8').click(function(){

  SendGasTotalx8 = "$" + $('#qtyvalue2x8').attr('value');
  $('.SendGasTotalx8').attr('value', SendGasTotalx8);
  console.log('Userinputx8 = ' + userInputx8)

});





$('.CancelConfirmGasx8').click(function(){
   $('.SendFuelx8').hide();
});



$('.SendConfirmGasx8').click(function(){
  $('.SendFuelx8').hide();
  $('.SendGasPaymentx8').show();

});





// $('.Fuelx8').click(function(){

//     userInputx8 = "";

//     $('gas')

// });

screenTypex8 = "Machinex8";




$('.innerLeftx8, .lan2x8, .confirm2Yx8, .lan2MOBIx8, .qty2x8').click(function(){

   $('.FuelCreditx8').show();
   $('.Thecoverx8 > .GiftFuelx8').hide();

});




$('.Fuelx8').click(function(){

 $('.FuelCreditx8').show();
 $('.Thecoverx8 > .GiftFuelx8').hide();

 $(this).children('.FuelCreditx8').hide();
 $(this).children('.Thecoverx8').children('.GiftFuelx8').show();


});



// $('.Thecoverx8').click(function(){

//    console.log('Thecoverx8 was clicked');

//  $('.Thecoverx8 > .GiftFuelx8').hide();
//  $(this).children('.GiftFuelx8').show();


// });








$('.GasPurchasedPumpx8').click(function(){

  $('.GasReceiptx8').removeClass('active');

$('.GasPumpProgressBarx8').show();

$('.ProgressBarx8').animate({
  width:'200px',
  width:'300px',
  width:'450px',
  })(30000);


});





$('.GasReceiptx8').click(function(){

$('.GasPumpProgressBarx8').hide();
$('.ProgressBarx8').animate({
  width:'5px',
});


$('.MaxUserAmountx8, .GasProgressnumericvaluex8').attr('value', 0);
$('.GasReceiptx8').removeClass('active');

});


