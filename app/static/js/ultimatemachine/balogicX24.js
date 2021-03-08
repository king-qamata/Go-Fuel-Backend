

$(document).ready(function(){




 $('.ServiceMenux28').click(function(){


    $('.serDropx28').show('fast').click(function(){
      $(this).hide('fast');
    });

      userInputx28='0.00';
         $('#qtyvalue2x28').attr('value', userInputx28);
 });


   




  $('#exit2Yx28').click(function(){
  console.log('exitx28Y button was clicked');
   
       $('.goodbyex28').fadeIn('fast');
       $('#receiptYesx28, #receiptNox28').removeClass('active');
       $('.ServicePanelx28').hide();
       serviceValuex28 = '';
         userInputx28='0.00';
         $('#qtyvalue2x28').attr('value', userInputx28);



});


// ///////Show different models///////////


// $('.Model1x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.Serm').show('');
// });



// $('.Model2x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x2').show('');
// });




// $('.Model3x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x28').show('');
// });



// $('.Model5x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x28').click(function(){

//   $('.Modelsx28, .Serm, serm2x2, serm2x3, .serm2x28').hide('');
//   $('.serm2x7').show('');
// });








/////////Service Values////////////
/////////Service Values////////////



$('#Withdraw4x1, #Withdraw4x2, #Withdraw4x3, #Withdraw4x28, #Withdraw4x5, #Withdraw4x6, #Withdraw4x7').click(function(){
   serviceValuex28 = 'Withdraw';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});


$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx28, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx28').click(function(){
   serviceValuex28 = 'Withdraw';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});



$('#Deposit4x1, #Deposit4x2, #Deposit4x3, #Deposit4x28, #Deposit4x5, #Deposit4x6, #Deposit4x7').click(function(){
   serviceValuex28 = 'Deposit';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});



$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x28, #Transfer4x5, #Transfer4x6, #Transfer4x7').click(function(){
   serviceValuex28 = 'Transfer';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});



$('#Sell4x1, #Sell4x2, #Sell4x3, #Sell4x28, #Sell4x5, #Sell4x6, #Sell4x7').click(function(){
   serviceValuex28 = 'Assets';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});



$('#Buy4x1, #Buy4x2, #Buy4x3, #Buy4x28, #Buy4x5, #Buy4x6, #Buy4x7').click(function(){
   serviceValuex28 = 'Assets';
   console.log('service value is: ' + serviceValuex28);
   userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);
});




$('.sm2x2').click(function(){

   $('.sm2x2').removeClass('SelectedSm2x2');
   $(this).addClass('SelectedSm2x2');

});


/////////Service Values////////////
/////////Service Values////////////



















  $('#receiptYesx28, #receiptNox28').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x28, .sendMoney2x28, .CreditCardsx28, .assistancex28, .Loanx28').hide();
             $('#billDenox28 ,#noBillDenox28').removeClass('active');

       
             $('.confBack2Yx28').hide();
             $('.billsx28').hide();
             $('.numVx28, #amountx28, #qtyvalue2x28').show();
             $('#submit2Yx28, #exit2Yx28').show();
             $('#wdraw1x28, #wdraw2x28, #transferx28, #trans2x28').removeClass('hili');

                  $('.goodbyex28').hide();
                     serviceValuex28='';
                     tofValuex28='waived';
                     userInputx28='0.00';
                  $('#qtyvalue2x28').attr('value', userInputx28);
       
                   $('#cheTsavx28, #cheTsav2x28').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x28').hide().fadeIn('10000');

      });


    


    $('.back24x28, .confirm24x28').click(function(){
      $('.confBack24x28').hide();





});   








$('.TapBx28').click(function(){

  $('.goodbyex28').fadeOut('fast');
});





// /////////Headers///////////////////


$('#atmHomex28, #ATM1Machinex28').click(function(){

$('.OtherHeaderx28').hide();


});





$('#MyFinancesx28').click(function(){
$('.HeaderPx28').hide();
$('.OtherHeaderx28, .MyFinancesx28').show();



});



$('#atmNotix28').click(function(){
$('.HeaderPx28').hide();
$('.OtherHeaderx28, .Notificationsx28').show();



});



$('#atmSetx28').click(function(){
$('.HeaderPx28').hide();
$('.OtherHeaderx28, .Settingsx28').show();


});



// ///////////////////


datex28= '';

$('#CreditCx28, #PayBx28, #sendx28, #loanx28').click(function(){
$('.Schedulex28').show();
$('.Schedulex28 > #datepicker').attr('value', datex28);

});


$('#closeSer2Panelsx28, .Confirm2Yx28, .exit2Yx28').click(function(){

$('.ServicePanelx28').hide();
$('.Schedulex28 > #datepicker').attr('value', datex28);
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











tofValuex28 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex28='';
tofValuex28='waived';
billDenox28= false;


//stores user inputs






$('.NumPadx28').click(function(){

if(userInputx28 === '0.00'){

   userInputx28 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});
















//////////////////////////////////////////////////////////////////////////







$('.QtyValueCoverx28').click(function(){
$('.NumPadx28').hide();
$('.numVx28').show();


});











////////////////////////////////////////////////////////////////////////////







var userInputx28='';





 $('.numVx28').click(function(){
   userInputx28 += $(this).attr("value");

   $('#qtyvalue2x28').attr('value', userInputx28);
    console.log('A numV was clicked');

 
    });






//backspace button
    $('#backSpacex28').click(function(){

    var getInputx28 = userInputx28;
    var lenx28 = getInputx28.length -1;
    var newInputx28 = getInputx28.substring(0, lenx28);

    userInputx28 = newInputx28;
    $('#qtyvalue2x28').attr('value', userInputx28);  
    console.log('New input is : ' + userInputx28);

});







// //////////////////////////////////////////////////////////////////////





//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx28, #qtyvalue2x28').click(function(){
  $('.numRx28, .numCCx28').hide();
  $('.numVx28').show();
});




















// ///////// BillDenomination Official////////////////////////
//////////////////////////////////////////////////////////////



$('#BILLDEx28, #ScanBILLDEx28').click(function(){

serviceValuex28 = 'Withdraw';
console.log("Service value x28 is = " + serviceValuex28);
console.log("Service value is = " + serviceValuex28);
console.log("tofvalue is = " + tofValuex28);



$('.BillDenominationWdrawx28').fadeIn('fast');



         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);



inputBillDenomi1x28=0;
inputBillDenomi2x28=0;
inputBillDenomi3x28=0;
inputBillDenomi4x28=0;




         $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);
         $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);
         $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);
         $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);

});










inputBillDenomi1x28=0;
inputBillDenomi2x28=0;
inputBillDenomi3x28=0;
inputBillDenomi4x28=0;
inputBillDenomi5x28=0;
inputBillDenomi6x28=0;
inputBillDenomi7x28=0;
inputBillDenomi8x28=0;
inputBillDenomi9x28=0;




         $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);
         $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);
         $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);
         $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);
         $('#inputBillDenomi5x28').attr('value', inputBillDenomi5x28);
         $('#inputBillDenomi6x28').attr('value', inputBillDenomi6x28);
           


 








// /////////////////////////////////
  SelectedBillDenomix28=""


  $('.BillDenomix28').click(function(){
    SelectedFriendx28 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedBillDenomix28);

});





$('.NumPadx28').click(function(){

if (inputBillDenomi1x28 === '0' || 0){
  inputBillDenomi1x28 = '';
}


if (inputBillDenomi2x28 === '0' || 0){
  inputBillDenomi2x28 = '';
}

if (inputBillDenomi3x28 === '0' || 0){
  inputBillDenomi3x28 = '';
}


if (inputBillDenomi4x28 === '0' || 0){
  inputBillDenomi4x28 = '';
}

if (inputBillDenomi5x28 === '0' || 0){
  inputBillDenomi5x28 = '';
}

if (inputBillDenomi6x28 === '0' || 0){
  inputBillDenomi6x28 = '';
}

if (inputBillDenomi7x28 === '0' || 0){
  inputBillDenomi7x28 = '';
}

if (inputBillDenomi8x28 === '0' || 0){
  inputBillDenomi8x28 = '';
}

if (inputBillDenomi9x28 === '0' || 0){
  inputBillDenomi9x28 = '';

}

});






inputBillDenomi1x28=0;
inputBillDenomi2x28=0;
inputBillDenomi3x28=0;
inputBillDenomi4x28=0;
inputBillDenomi5x28=0;
inputBillDenomi6x28=0;
inputBillDenomi7x28=0;
inputBillDenomi8x28=0;
inputBillDenomi9x28=0;










/////////////////////



$('.BillDenomi1x28').click(function(){


$('.EnterBillDenomi1x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi1x28 = 0;
 $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);


   $('#Mikex28 > span, #inputBillDenomi1x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi1x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi1x28').click(function(){

  if (inputBillDenomi1x28 === 0 ){
    inputBillDenomi1x28 = '';
  }
});

// ///////




 $('.numBillDenomi1x28').click(function(){

          inputBillDenomi1x28 += $(this).attr("value");
          // $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);


          $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi1x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi1x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi1x28').click(function(){

           var getInput = inputBillDenomi1x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi1x28 = newInput;
            $('#inputBillDenomi1x28').attr('value', inputBillDenomi1x28);
     
           console.log('New input is : ' + inputBillDenomi1x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////////



/////////////////////



$('.BillDenomi2x28').click(function(){


$('.EnterBillDenomi2x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi2x28 = 0;
 $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);


   $('#Mikex28 > span, #inputBillDenomi2x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi2x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi2x28').click(function(){

  if (inputBillDenomi2x28 === 0 ){
    inputBillDenomi2x28 = '';
  }
});

// ///////




 $('.numBillDenomi2x28').click(function(){

          inputBillDenomi2x28 += $(this).attr("value");
          // $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);


          $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi2x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi2x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi2x28').click(function(){

           var getInput = inputBillDenomi2x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi2x28 = newInput;
            $('#inputBillDenomi2x28').attr('value', inputBillDenomi2x28);
     
           console.log('New input is : ' + inputBillDenomi2x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////


/////////////////////



$('.BillDenomi3x28').click(function(){


$('.EnterBillDenomi3x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi3x28 = 0;
 $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);


   $('#Mikex28 > span, #inputBillDenomi3x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi3x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi3x28').click(function(){

  if (inputBillDenomi3x28 === 0 ){
    inputBillDenomi3x28 = '';
  }
});

// ///////




 $('.numBillDenomi3x28').click(function(){

          inputBillDenomi3x28 += $(this).attr("value");
          // $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);


          $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi3x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi3x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi3x28').click(function(){

           var getInput = inputBillDenomi3x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi3x28 = newInput;
            $('#inputBillDenomi3x28').attr('value', inputBillDenomi3x28);
     
           console.log('New input is : ' + inputBillDenomi3x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });




//////////////////



/////////////////////



$('.BillDenomi4x28').click(function(){


$('.EnterBillDenomi4x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi4x28 = 0;
 $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);


   $('#Mikex28 > span, #inputBillDenomi4x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi4x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi4x28').click(function(){

  if (inputBillDenomi4x28 === 0 ){
    inputBillDenomi4x28 = '';
  }
});

// ///////




 $('.numBillDenomi4x28').click(function(){

          inputBillDenomi4x28 += $(this).attr("value");
          // $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);


          $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi4x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi4x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi4x28').click(function(){

           var getInput = inputBillDenomi4x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi4x28 = newInput;
            $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);
     
           console.log('New input is : ' + inputBillDenomi4x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.BillDenomi5x28').click(function(){


$('.EnterBillDenomi5x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi5x28 = 0;
 $('#inputBillDenomi5x28').attr('value', inputBillDenomi5x28);


   $('#Mikex28 > span, #inputBillDenomi5x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi5x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi5x28').click(function(){

  if (inputBillDenomi5x28 === 0 ){
    inputBillDenomi5x28 = '';
  }
});

// ///////




 $('.numBillDenomi5x28').click(function(){

          inputBillDenomi5x28 += $(this).attr("value");
          // $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);


          $('#inputBillDenomi5x28').attr('value', inputBillDenomi5x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi5x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi5x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi5x28').click(function(){

           var getInput = inputBillDenomi5x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi5x28 = newInput;
            $('#inputBillDenomi5x28').attr('value', inputBillDenomi5x28);
     
           console.log('New input is : ' + inputBillDenomi5x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.BillDenomi6x28').click(function(){


$('.EnterBillDenomi6x28').show();


console.log('Mike x28 was selected');

 inputBillDenomi6x28 = 0;
 $('#inputBillDenomi6x28').attr('value', inputBillDenomi6x28);


   $('#Mikex28 > span, #inputBillDenomi6x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numBillDenomi6x28').show();




 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numBillDenomi6x28').click(function(){

  if (inputBillDenomi6x28 === 0 ){
    inputBillDenomi6x28 = '';
  }
});

// ///////




 $('.numBillDenomi6x28').click(function(){

          inputBillDenomi6x28 += $(this).attr("value");
          // $('#inputBillDenomi4x28').attr('value', inputBillDenomi4x28);


          $('#inputBillDenomi6x28').attr('value', inputBillDenomi6x28);

           console.log("current Friend 1 imput x28 number is :" + inputBillDenomi6x28);
           console.log('New Friend1 imput x28 is : ' + inputBillDenomi6x28);
           
 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceBillDenomi6x28').click(function(){

           var getInput = inputBillDenomi6x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi6x28 = newInput;
            $('#inputBillDenomi6x28').attr('value', inputBillDenomi6x28);
     
           console.log('New input is : ' + inputBillDenomi6x28)
            

 userInputx28 =  parseInt(inputBillDenomi1x28) + parseInt(inputBillDenomi2x28) + parseInt(inputBillDenomi3x28) + parseInt(inputBillDenomi4x28) + parseInt(inputBillDenomi5x28) + parseInt(inputBillDenomi6x28) +parseInt(inputBillDenomi7x28) + parseInt(inputBillDenomi8x28) + parseInt(inputBillDenomi9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////









///////////////   End Of Bill Denomination official /////////////////////////////////////////////////////////
///////////////   End Of Bill Denomination official /////////////////////////////////////////////////////////

















/////////// /Close Button for service pannels////////////////////




//

$('#closeSer2Panelsx28, .closeSer2Panelsx28').click(function(){

$('.DenominatedBillsx28').removeClass('active');


     $('.pyx28').hide();
     $('.PayButtonsx28 > label').removeClass('active');

$('.SelectSendOrRequestx28, .SelectBuyOrSellx28').hide();

  $('#cheTsav2x28, #savTche2x28').hide();
  $('.confBack2Yx28').hide();
  $('#submit2Yx28, #exit2Yx28').show(); 

$('.ServicePanelx28').fadeOut();

  $('.NumPadx28').hide();
  $('.numVx28').show();
  $('#Scan2Yx28').hide();

$('.finBx28').removeClass('active');

   $('#qtyvalueDenox28, #qtyvalueCardx28, #qtyvalueQPayx28').hide();

         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);

         $('#qtyvalue2x28').show();


         $('#DenoImput10Labelx28 > input').attr('value','0');
         $('#DenoImput20Labelx28 > input').attr('value','0');
         $('#DenoImput50Labelx28 > input').attr('value','0');
         $('#DenoImput100Labelx28 > input').attr('value', '0');

          DenoImput10x28='';
          DenoImput20x28='';
          DenoImput50x28='';
          DenoImput100x28='';



  
 



});








// ////////////////////





$('#sendx, #sendx28').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x28').fadeIn('fast');
  $('#cheTsav2x28, #savTche2x28').fadeOut();
 serviceValuex28 ='WireTransfer';
 tofValuex28 = "waived";
 console.log('tofValue is :' + tofValuex28);
 console.log('serviceValue is: ' + serviceValuex28);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx28').hide();
    $('#savTchex28').hide();
   serviceValuex28 =$(this).attr('value');
   $('#labelATMx28').text('Pay Bill & Tickets');
   $('#routingx28').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x28').fadeIn('fast');
 serviceValuex28=$(this).attr('value');
 tofValuex28="send";
 console.log('tofValue is :' + tofValuex28);
 console.log('serviceValue is: ' + serviceValuex28);



});








$('#cash2x28, #wdraw1x28, #wdraw2x28, #checks2x28, #CreditCx28, #Loanx28, #Livex28, #QuickPayx28, .sendFromCheckingsx28').click(function(){
  
// $('.sm2x28, .serB').click(function(){
  $('#savTchex28, #cheTsavx28').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1x28, #wdraw2x28').click(function(){
  
// $('.sm2x28, .serB').click(function(){
  $('#savTche2x28, #cheTsav2x28').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
  console.log('wdraw was clicked');
});






$('#checking2x28, #saving2x28').click(function(){
   tofValuex28= $(this).attr('value');
   console.log('tofValue is :' + tofValuex28);
   console.log('serviceValue is: ' + serviceValuex28);


});


   
  
  $('#Livex28').click(function(){
    $('#cheTsavx28').hide();
    $('#savTchex28').hide();

    $('.assistancex28').fadeIn('fast');

  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan/////////////////////////



// $('#Loanx28').click(function(){
//   serviceValuex28="Loan";
//   tofValuex28='waived';
//   console.log("#Loan has been clicked");
//   console.log("Service value is =" + serviceValuex28);
//    console.log("tofvalue is =" + tofValuex28);



//   $('.Loanx28').fadeIn('slow');

//   });


 $('.LoanGrantedx28').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex28').click(function(){
    $('#cheTsavx28x28').hide();
    $('#savTchex28x28').hide();

    $('.assistancex28').fadeIn('fast');

  });
 





/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx28').click(function(){

    serviceValuex28="CreditCards";

    $('#cheTsavx28').hide();
    $('#savTchex28').hide();
    // $('#qtyvalue2x28, #qtyvalueDenox28').hide();
    // $('#qtyvalueCardx28').show();
    $('.CreditCardsx28').fadeIn('fast');
    
         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);


    console.log("Service value x28 is = " + serviceValuex28);
    console.log("qtyvalue = Deno" );







serviceValuex28 = $(this).attr('value');
  tofValuex28 = 'waived';
  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);
  $('.CreditCardsx28').fadeIn('slow');



  Card1Imputx28= 0;
  Card2Imputx28= 0;
  Card3Imputx28= 0;
  Card4Imputx28= 0;





});





SelectedCardx28 = '';



$('.Cardx28').click(function(){
SelectedCardx28 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx28);

});




      $('#happyCardx28').attr('value', SelectedCardx28);
      $('#cardPaymentAmountx28').attr('value', userInputx28);







$('.CardStatementx28').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx28').fadeIn('slow');
});




$('.Cardx28').dblclick(function(){

  $('.CreditCardsx28').fadeOut(1500);
  $('#CardNamex28').attr('value', SelectedCardx28);
$('.CardStatementx28').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx28=""


  $('.Cardx28').click(function(){
    CardNumberx28 = $(this).attr('value');
    console.log('Current Card x28 is : ' + CardNumberx28);




// DenoImputTotalx28 = DenoImput10x28 + DenoImput20x28 + DenoImput50x28 + DenoImput100x28;
console.log('Card total is ' + userInputx28);


$('.pyx28, .billsx28').hide();

});





/////////////////////



$('#card1x28').click(function(){

console.log('Card 1 x28 was selected');
 Card1Imputx28 = 0;
 $('#Card1ImputLabelx28 > input').attr('value', Card1Imputx28);

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

  
  


   $('#Card1Imputx28, #Card1ImputLabelx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numCard1x28').show();



  console.log(Card1Imputx28 + Card2Imputx28 + Card3Imputx28 + Card4Imputx28);



});


$('.numCard1x28').click(function(){

  if (Card1Imputx28 === 0 ){
    Card1Imputx28 = '';
  }
});



 $('.numCard1x28').click(function(){

          Card1Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#Card1ImputLabelx28 > input').attr('value', Card1Imputx28);

           console.log("current Card 1 imput x28 number is :" + Card1Imputx28);
           console.log('New Card 1 imput x28 is : ' + Card1Imputx28);
           
userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceCard1x28').click(function(){

           var getInput = Card1Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx28 = newInput;
            $('#Card1ImputLabelx28 > input').attr('value', Card1Imputx28);
     
           console.log('New input is : ' + Card1Imputx28);
            
userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);




       });









//////////////////



$('#card2x28').click(function(){

  console.log('Card2 x28 was selected');

 Card2Imputx28 = 0;
 $('#Card2ImputLabelx28 > input').attr('value', Card2Imputx28);
   

   $('#Card2Imputx28, #Card2ImputLabelx28').css('color','green');


    $('.NumPadx28').hide();
   $('.numCard2x28').show();



  console.log(Card2Imputx28 + Card2Imputx28 + Card3Imputx28 + Card4Imputx28);


userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);


});




$('.numCard2x28').click(function(){

  if (Card2Imputx28 === 0 ){
    Card2Imputx28 = '';
  }
});






 $('.numCard2x28').click(function(){

          Card2Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#Card2ImputLabelx28 > input').attr('value', Card2Imputx28);

           console.log("current Card 1 imput x28 number is :" + Card2Imputx28);
           console.log('New Card 1 imput x28 is : ' + Card2Imputx28);
           

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpaceCard2x28').click(function(){

           var getInput = Card2Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx28 = newInput;
            $('#Card2ImputLabelx28 > input').attr('value', Card2Imputx28);
     
           console.log('New input is : ' + Card2Imputx28)
            
userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);




       });








// ///////////////




$('#card3x28').click(function(){
 Card3Imputx28 = 0;
 $('#Card3ImputLabelx28 > input').attr('value', Card3Imputx28);




  


   $('#Card3Imputx28, #Card3ImputLabelx28').css('color','green');


    $('.NumPadx28').hide();
   $('.numCard3x28').show();


  console.log(Card3Imputx28 + Card3Imputx28 + Card3Imputx28 + Card4Imputx28);



userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);



});


// /////////


$('.numCard3x28').click(function(){

  if (Card3Imputx28 === 0 ){
    Card3Imputx28 = '';
  }
});


//////////




 $('.numCard3x28').click(function(){

          Card3Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#Card3ImputLabelx28 > input').attr('value', Card3Imputx28);

           console.log("current Card 1 imput x28 number is :" + Card3Imputx28);
           console.log('New Card 1 imput x28 is : ' + Card3Imputx28);
           

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpaceCard3x28').click(function(){

           var getInput = Card3Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx28 = newInput;
            $('#Card3ImputLabelx28 > input').attr('value', Card3Imputx28);
     
           console.log('New input is : ' + Card3Imputx28)
            

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);



       });








// //////////////////




$('#card4x28').click(function(){
 Card4Imputx28 = 0;
 $('#Card4ImputLabelx28 > input').attr('value', Card4Imputx28);






   $('#Card4Imputx28, #Card4ImputLabelx28').css('color','green');


    $('.NumPadx28').hide();
   $('.numCard4x28').show();



  console.log(Card4Imputx28 + Card4Imputx28 + Card4Imputx28 + Card4Imputx28);

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);

});




// /////////


$('.numCard4x28').click(function(){

  if (Card4Imputx28 === 0 ){
    Card4Imputx28 = '';
  }
});


//////////




 $('.numCard4x28').click(function(){

          Card4Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#Card4ImputLabelx28 > input').attr('value', Card4Imputx28);

           console.log("current Card 1 imput x28 number is :" + Card4Imputx28);
           console.log('New Card 1 imput x28 is : ' + Card4Imputx28);
           
userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);



        
           });




       //backspace button
           $('#backSpaceCard4x28').click(function(){

           var getInput = Card4Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx28 = newInput;
            $('#Card4ImputLabelx28 > input').attr('value', Card4Imputx28);
     
           console.log('New input is : ' + Card4Imputx28)
            

userInputx28 = parseInt(Card1Imputx28) + parseInt(Card2Imputx28) + parseInt(Card3Imputx28) + parseInt(Card4Imputx28);

$('#qtyvalue2x28').attr('value', userInputx28);



       });









// });////End of Card Payment/////////////*********************************








///////////////////Pay Your Bills/////////////






  $('#PayBx28').click(function(){

    serviceValuex28="PayYourBills";

    $('#cheTsavx28').hide();
    $('#savTchex28').hide();
    // $('#qtyvalue2x28, #qtyvalueDenox28').hide();
    // $('#qtyvaluePBillx28').show();
    $('.PayBillsx28').fadeIn('fast');
    
        
         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);


    console.log("Service value x28 is = " + serviceValuex28);
    console.log("qtyvalue = Deno" );







serviceValuex28 = $(this).attr('value');
  tofValuex28 = 'waived';
  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);
  $('.CreditPBillsx28').fadeIn('slow');



  PBill1Imputx28=0;
  PBill2Imputx28=0;
  PBill3Imputx28=0;
  PBill4Imputx28=0;
  PBill5Imputx28=0;
  PBill6Imputx28=0;





});








// /////////////////////////////////
  var SelectedBillx28=""


  $('.PBillx28').click(function(){
    SelectedBillx28 = $(this).attr('value');
    console.log('Current Selected Bill x28 is : ' + SelectedBillx28);




// DenoImputTotalx28 = DenoImput10x28 + DenoImput20x28 + DenoImput50x28 + DenoImput100x28;
console.log('PBill total is ' + userInputx28);

$('.pyx28').hide();
$('.PayButtonsx28 > label').removeClass('active');
$('.confBack2Yx28').hide();
$('#submit2Yx28, #exit2Yx28').show();


});





/////////////////////



$('#PBill1x28').click(function(){

console.log('PBill 1 x28 was selected');

 PBill1Imputx28 =  $(this).attr('value');
 $('#PBill1ImputLabelx28 > input').attr('value', PBill1Imputx28);

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

  
  


   $('#PBill1Imputx28, #PBill1ImputLabelx28').css('color','green');


   $('.NumPadx28').hide();
    $('.numPBill1x28').show();



  console.log(PBill1Imputx28 + PBill2Imputx28 + PBill3Imputx28 + PBill4Imputx28 + PBill5Imputx28);



});


// /////////


$('.numPBill1x28').click(function(){

  if (PBill1Imputx28 === 0 ){
    PBill1Imputx28 = '';
  }
});


//////////





 $('.numPBill1x28').click(function(){

          PBill1Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill1ImputLabelx28 > input').attr('value', PBill1Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill1Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill1Imputx28);
           
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpacePBill1x28').click(function(){

           var getInput = PBill1Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx28 = newInput;
            $('#PBill1ImputLabelx28 > input').attr('value', PBill1Imputx28);
     
           console.log('New input is : ' + PBill1Imputx28);

           console.log('back space was clicked' );
            
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);




       });









//////////////////



$('#PBill2x28').click(function(){

  console.log('PBill2 x28 was selected');

 PBill2Imputx28 =  $(this).attr('value');
 $('#PBill2ImputLabelx28 > input').attr('value', PBill2Imputx28);


   $('#PBill2Imputx28, #PBill2ImputLabelx28').css('color','green');


  $('.NumPadx28').hide();
  $('.numPBill2x28').show();



  console.log(PBill2Imputx28 + PBill2Imputx28 + PBill3Imputx28 + PBill4Imputx28 + PBill5Imputx28);


userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);


});




// /////////


$('.numPBill2x28').click(function(){

  if (PBill2Imputx28 === 0 ){
    PBill2Imputx28 = '';
  }
});


//////////





 $('.numPBill2x28').click(function(){

          PBill2Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill2ImputLabelx28 > input').attr('value', PBill2Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill2Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill2Imputx28);
           

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpacePBill2x28').click(function(){

           var getInput = PBill2Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx28 = newInput;
            $('#PBill2ImputLabelx28 > input').attr('value', PBill2Imputx28);
     
           console.log('New input is : ' + PBill2Imputx28)
            
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);




       });








// ///////////////




$('#PBill3x28').click(function(){

 PBill3Imputx28 =  $(this).attr('value');
 $('#PBill3ImputLabelx28 > input').attr('value', PBill3Imputx28);



  


   $('#PBill3Imputx28, #PBill3ImputLabelx28').css('color','green');


 $('.NumPadx28').hide();
  $('.numPBill3x28').show();


  console.log(PBill3Imputx28 + PBill3Imputx28 + PBill3Imputx28 + PBill4Imputx28 + PBill5Imputx28);



userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



});



// /////////


$('.numPBill3x28').click(function(){

  if (PBill3Imputx28 === 0 ){
    PBill3Imputx28 = '';
  }
});


//////////




 $('.numPBill3x28').click(function(){

          PBill3Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill3ImputLabelx28 > input').attr('value', PBill3Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill3Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill3Imputx28);
           

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpacePBill3x28').click(function(){

           var getInput = PBill3Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx28 = newInput;
            $('#PBill3ImputLabelx28 > input').attr('value', PBill3Imputx28);
     
           console.log('New input is : ' + PBill3Imputx28)
            

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



       });








// //////////////////




$('#PBill4x28').click(function(){

 PBill4Imputx28 =  $(this).attr('value');
 $('#PBill4ImputLabelx28 > input').attr('value', PBill4Imputx28);





   $('#PBill4Imputx28, #PBill4ImputLabelx28').css('color','green');


  $('.NumPadx28').hide();

  $('.numPBill4x28').show();



  console.log(PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill5Imputx28);


userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

});



// /////////


$('.numPBill4x28').click(function(){

  if (PBill4Imputx28 === 0 ){
    PBill4Imputx28 = '';
  }
});


//////////





 $('.numPBill4x28').click(function(){

          PBill4Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill4ImputLabelx28 > input').attr('value', PBill4Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill4Imputx28 + PBill5Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill4Imputx28);
           
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



        
           });




       //backspace button
           $('#backSpacePBill4x28').click(function(){

           var getInput = PBill4Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx28 = newInput;
            $('#PBill4ImputLabelx28 > input').attr('value', PBill4Imputx28);
     
           console.log('New input is : ' + PBill4Imputx28)
            

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



       });






$('#PBill5x28').click(function(){

 PBill5Imputx28 =  $(this).attr('value');
 $('#PBill5ImputLabelx28 > input').attr('value', PBill5Imputx28);





   $('#PBill5Imputx28, #PBill5ImputLabelx28').css('color','green');


  $('.NumPadx28').hide();
  $('.numPBill5x28').show();



  console.log(PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill5Imputx28);


userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

});


// /////////


$('.numPBill5x28').click(function(){

  if (PBill5Imputx28 === 0 ){
    PBill5Imputx28 = '';
  }
});


//////////





 $('.numPBill5x28').click(function(){

          PBill5Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill5ImputLabelx28 > input').attr('value', PBill5Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill5Imputx28 + PBill5Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill5Imputx28);
           
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



        
           });




       //backspace button
           $('#backSpacePBill5x28').click(function(){

           var getInput = PBill5Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx28 = newInput;
            $('#PBill5ImputLabelx28 > input').attr('value', PBill5Imputx28);
     
           console.log('New input is : ' + PBill5Imputx28)
            

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



       });




// ///////////////////////////




$('#PBill6x28').click(function(){
 PBill6Imputx28 =  $(this).attr('value');
 $('#PBill6ImputLabelx28 > input').attr('value', PBill6Imputx28);






   $('#PBill6Imputx28, #PBill6ImputLabelx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numPBill6x28').show();



  console.log(PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill4Imputx28 + PBill6Imputx28);


userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);

});




// /////////


$('.numPBill6x28').click(function(){

  if (PBill6Imputx28 === 0 ){
    PBill6Imputx28 = '';
  }
});


//////////




 $('.numPBill6x28').click(function(){

          PBill6Imputx28 += $(this).attr("value");
          // $('#DenoImput10x28').attr('value', DenoImput10x28);


          $('#PBill6ImputLabelx28 > input').attr('value', PBill6Imputx28);

           console.log("current PBill 1 imput x28 number is :" + PBill6Imputx28 + PBill6Imputx28);
           console.log('New PBill 1 imput x28 is : ' + PBill6Imputx28);
           
userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



        
           });




       //backspace button
           $('#backSpacePBill6x28').click(function(){

           var getInput = PBill6Imputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx28 = newInput;
            $('#PBill6ImputLabelx28 > input').attr('value', PBill6Imputx28);
     
           console.log('New input is : ' + PBill6Imputx28)
            

userInputx28 = parseInt(PBill6Imputx28) + parseInt(PBill2Imputx28) + parseInt(PBill3Imputx28) + parseInt(PBill4Imputx28) + parseInt(PBill5Imputx28);
$('#qtyvalue2x28').attr('value', userInputx28);



       });





// });////End of PBill Payment/////////////*********************************




///////////////////Merchant/////////////



////////////////Merchant x28///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx28').click(function(){

 console.log("Service value x28 is = " + serviceValuex28);

serviceValuex28='Merchant';
tofValuex28 = 'waived';

$('.Merchantx28').fadeIn('slow');


    $('#cheTsavx28').hide();
    $('#savTchex28').hide();


  MerchantNamex28='';
  MerchantCardNUmberx28='';
  MerchantDateNUmberx28='';
  MerchantCVDx28='';
  MerchantZipCodex28='';







         $('.MerchantNameInputx28').attr('value', MerchantNamex28);
         $('.MerchantCardInputx28').attr('value', MerchantCardNUmberx28);
         $('.MerchantDateInputx28').attr('value', MerchantDateNUmberx28);
         $('.MerchantCVDInputx28').attr('value', MerchantCVDx28);
         $('.MerchantZipCodeInputx28').attr('value', MerchantZipCodex28);


 
userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);



    console.log("Service value x28 is = " + serviceValuex28);



  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);

});






















// /////////////////////////////////
MerchantLabelx28="";

$('.MerchantLabelx28').click(function(){
MerchantLabelx28 = $(this).attr('value');
console.log("The selected MerchantLabelx28 is = " + MerchantLabelx28);

})








/////////////////////



$('.NameMerLabelx28').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx28').click(function(){




console.log('Merchant Name Label x28 was selected');

 MerchantCardNUmberx28 = "";
 $('.MerchantCardInputx28').attr('value', MerchantCardNUmberx28);


 $('.NumPadx28').hide();
 $('.numMCardx28').show();

});





 $('.numMCardx28').click(function(){

         MerchantCardNUmberx28+= $(this).attr("value");
          
          $('.MerchantCardInputx28').attr('value', MerchantCardNUmberx28);

           });



       //backspace button
           $('#backSpaceMCardx28').click(function(){

           var getInput = MerchantCardNUmberx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx28 = newInput;
            $('.MerchantCardInputx28').attr('value', MerchantCardNUmberx28);
     
           console.log('New input is : ' + MerchantCardNUmberx28);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx28').click(function(){




console.log('Merchant Name Label x28 was selected');

 MerchantDateNUmberx28 = "";
 $('.MerchantDateInputx28').attr('value', MerchantDateNUmberx28);


 $('.NumPadx28').hide();
 $('.numMDatex28').show();

});




 $('.numMDatex28').click(function(){

         MerchantDateNUmberx28+= $(this).attr("value");
          
          $('.MerchantDateInputx28').attr('value', MerchantDateNUmberx28);

           });



       //backspace button
           $('#backSpaceMDatex28').click(function(){

           var getInput = MerchantDateNUmberx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx28 = newInput;
            $('.MerchantDateInputx28').attr('value', MerchantDateNUmberx28);
     
           console.log('New input is : ' + MerchantDateNUmberx28);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx28').click(function(){




console.log('Merchant Name Label x28 was selected');

 MerchantCVDx28 = "";
 $('.MerchantCVDInputx28').attr('value', MerchantCVDx28);


 $('.NumPadx28').hide();
 $('.numCVDx28').show();

});




 $('.numCVDx28').click(function(){

          MerchantCVDx28+= $(this).attr("value");
          
          $('.MerchantCVDInputx28').attr('value', MerchantCVDx28);

           });



       //backspace button
           $('#backSpaceCVDx28').click(function(){

           var getInput = MerchantCVDx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx28 = newInput;
           $('.MerchantCVDInputx28').attr('value', MerchantCVDx28);
     
           console.log('New input is : ' + MerchantCVDx28);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx28').click(function(){




console.log('Merchant Name Label x28 was selected');

 MerchantZipCodex28 = "";
 $('.MerchantZipCodeInputx28').attr('value', MerchantZipCodex28);


 $('.NumPadx28').hide();
 $('.numMZipx28').show();
 
});




 $('.numMZipx28').click(function(){

         MerchantZipCodex28+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx28').attr('value', MerchantZipCodex28);

           });



       //backspace button
           $('#backSpaceMZipx28').click(function(){

           var getInput = MerchantZipCodex28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex28 = newInput;
            $('.MerchantZipCodeInputx28').attr('value', MerchantZipCodex28);
     
           console.log('New input is : ' + MerchantZipCodex28);
            


});






////////////////end of Merchant x28///////////////////////////
///////////////////////////////////////////////////////////





//////////////////////////////

$('.SwipeCardMerLabelx28').click(function(){

$('.MerchantImputx28').removeClass('SelectedMerchantLabel');
$('.MCardImputx28').removeClass('SelectedMerchantLabel');

  $('.MSwipex28').addClass('clickedSwipex28');
   $('.SwipeCardx28').fadeIn('fast');
  
})


$('.SwButtonx28').click(function(){
    $('.SwipeCardx28').fadeOut('fast');
    
});






/////////////////////////////////
/////////////////////////////////End of Merchant



////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex28').click(function(){

$('.feesx28').hide();

 console.log("Service value  is = " + serviceValue);

serviceValuex28='ChangePin';
tofValuex28 = 'waived';

$('.ChangePinx28 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx28='';
  ConPinx28='';





         $('.EnterPinInputx28').attr('value', EntPinx28);
         $('.ConfirmPinInputx28').attr('value', ConPinx28);


 
userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);



    console.log("Service value  is = " + serviceValuex28);



  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);

});











// /////////////////////////////////
SelectedPinLabelx28="";

$('.ChangePinLx28').click(function(){
SelectedPinLabelx28 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx28);

});





/////////////////////



$('.EnterPinLabelx28').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx28 = "";
 $('.EnterPinInputx28').attr('value', EntPinx28);


 $('.NumPadx28').hide();
 $('.numEntPinx28').show();


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx28').click(function(){

         EntPinx28+= $(this).attr("value");
          
          $('.EnterPinInputx28').attr('value', EntPinx28);


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx28').click(function(){

           var getInput = EntPinx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx28 = newInput;
            $('.EnterPinInputx28').attr('value', EntPinx28);
     
           console.log('New input is : ' + EntPinx28);


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx28').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx28 = "";
 $('.ConfirmPinInputx28').attr('value', ConPinx28);


 $('.NumPadx28').hide();
 $('.numConPinx28').show();


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx28').click(function(){

         ConPinx28+= $(this).attr("value");
          
          $('.ConfirmPinInputx28').attr('value', ConPinx28);


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx28').click(function(){

           var getInput = ConPinx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx28 = newInput;
            $('.ConfirmPinInputx28').attr('value', ConPinx28);
     
           console.log('New input is : ' + ConPinx28);


// ////Password Match Notification//////////

           if(EntPinx28 !== '' && EntPinx28 === ConPinx28){
            
            $('.MatchedPinNOx28').hide();
            $('.MatchedPinYesx28').fadeIn();

           }



           if(EntPinx28 !== '' && EntPinx28 !== ConPinx28){

            $('.MatchedPinYesx28').hide();
            $('.MatchedPinNOx28').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////









///////////////////Take Loan/////////////






  $('#Loanx28').click(function(){

    serviceValuex28="Loan";

    $('#cheTsavx28').hide();
    $('#savTchex28').hide();
    // $('#qtyvalue2x28, #qtyvalueDenox28').hide();
    // $('#qtyvalueTLoanx28').show();
    $('.PayLoansx28').fadeIn('fast');
    
         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);

});













/////////////////////////////////////////////////



$('.closeDepositx28').click(function(){
  console.log('Deposit panel was closed');
    $('.depositx28').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox28').click(function(){
  billDenox28= true;

   if(billDenox28 === true){
  console.log(' Bill Deno is Activated ' + billDenox28);
}
$('.confBack2Yx28').hide();
$('#submit2Yx28, #exit2Yx28').show();


});


$('#noBillDenox28').click(function(){
  billDenox28= false;
  if(billDenox28 === false){
  console.log(' Bill Deno is Activated ' + billDenox28);
}

  $('.confBack2Yx28').hide();
 $('.billsx28').hide();
$('#amountx28, #qtyvalue2x28, .LinearNumPadx28, .numVx28').show();
$('#submit2Yx28, #exit2Yx28').fadeIn();

  
});




$('.ui2x28').click(function(){
  if(serviceValuex28 !== 'withdraw'){

    billDenox28 === false;

    console.log('BillDenox28 was deactivated because Service value is not withdraw');

    $('#billDenox28').removeClass('active');
    $('#noBillDenox28').addClass('active');

// $('#submit2Yx28').click(function(){

//    $('#billsx28, .billsx28, #b10x28, #b20x28, #b50x28, #b100x28').hide();

// });
  }
});



/////////////////////////////////////////////////////////


$('#wdraw1x28, #wdraw2x28').click(function(){
serviceValuex28 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 

////////////////QuickPay///////////////////////////

$('#QuickPayx28, #QuickPay2x28').click(function(){

  $('#submit2Yx28, #exit2Yx28').hide();
  $('.SelectSendOrRequestx28').fadeIn();
  $('.SelectBuyOrSellx28').hide();


});




 $('#QuickPay2x28, #QuickPay3x28').click(function(){
console.log("Service value x28 is = " + serviceValuex28);
$('.sendMoney11x28').fadeIn('');


 });



////////////////QuickPay///////////////////////////

$('#QuickPayx28, #QuickPay2x28').click(function(){

  $('#submit2Yx28, #exit2Yx28').hide();
  $('.SelectSendOrRequestx28').fadeIn();
  $('.SelectBuyOrSellx28').hide();

 console.log("Service value x28 is = " + serviceValuex28);

serviceValuex28='QuickPay';
tofValuex28 = 'waived';

$('.sendMoney11x28').fadeIn('');




    $('#cheTsavx28').hide();
    $('#savTchex28').hide();



  MikeImputx28=0;
  JeffImputx28=0;
  MariaImputx28=0;
  JohnImputx28=0;


  LeahImputx28=0;
  PaulImputx28=0;
  JennyImputx28=0;
  GokuImputx28=0;



         $('#MikeImputx28').attr('value', MikeImputx28);
         $('#JeffImputx28').attr('value', JeffImputx28);
         $('#MariaImputx28').attr('value', MariaImputx28);
         $('#JohnImputx28').attr('value', JohnImputx28);


         $('#LeahImputx28').attr('value', LeahImputx28);
         $('#PaulImputx28').attr('value', PaulImputx28);
         $('#JennyImputx28').attr('value', JennyImputx28);
         $('#GokuImputx28').attr('value', GokuImputx28);

 
userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);





    console.log("Service value x28 is = " + serviceValuex28);
  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);

});






Friendx28="";

$('.friendsx28').click(function(){
Friendx28 = $(this).attr('value');
console.log("Friend is = " + Friendx28);



});

      $('#happyFriendx28').attr('value', Friendx28);
      $('#quickPayAmountx28').attr('value', userInputx28);






   


  //      $('.retrievex28').click(function(){  
  //        $('.BillDenominationWdrawx28').fadeOut('fast');
  //        $('#qtyvalueDenox28').hide();
  //        userInputx28 ="";
  //        $('#qtyvalue2x28').show();
  //        $('#qtyvalue2x28').attr('value', "");

  //        $('#MikeImputx28').attr('value','');
  //        $('#JeffImputx28').attr('value','');
  //        $('#MariaImputx28').attr('value','');
  //        $('#JohnImputx28').attr('value', '');


  //        $('#LeahImputx28').attr('value','');
  //        $('#PaulImputx28').attr('value','');
  //        $('#JennyImputx28').attr('value','');
  //        $('#GokuImputx28').attr('value', '');


  // MikeImputx28='';
  // JeffImputx28='';
  // MariaImputx28='';
  // JohnImputx28='';


  // LeahImputx28='';
  // PaulImputx28='';
  // JennyImputx28='';
  // GokuImputx28='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx28=""


  $('.friendsx28').click(function(){
    SelectedFriendx28 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx28);





});



$('.NumPadx28').click(function(){
// if (MikeImputx28 === '0' || 0){
//   MikeImputx28 = '';
// }

if (JeffImputx28 === '0' || 0){
  JeffImputx28 = '';
}

if (MariaImputx28 === '0' || 0){
  MariaImputx28 = '';
}

if (JohnImputx28 === '0' || 0){
  JohnImputx28 = '';
}

if (LeahImputx28 === '0' || 0){
  LeahImputx28= '';
}

if (PaulImputx28 === '0' || 0){
  PaulImputx28 = '';
}

if (JennyImputx28 === '0' || 0){
  JennyImputx28 = '';
}

if (GokuImputx28 === '0' || 0){
  GokuImputx28 = '';
}

});



/////////////////////



$('#Mikex28').click(function(){

      $('.FriendMemox28').hide();
$('.MikeMemox28').show().click(function(){
  $('.WriteMemox28, .MikeTTMemox28').fadeIn();
});


console.log('Mike x28 was selected');

 MikeImputx28 = 0;
 $('#MikeImputx28').attr('value', MikeImputx28);




   $('#Mikex28 > span, #MikeImputx28').css('color','green');


 $('.NumPadx28').hide();
   $('.numMikex28').show();




 userInputx28 =  parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numMikex28').click(function(){

  if (MikeImputx28 === 0 ){
    MikeImputx28 = '';
  }
});

// ///////




 $('.numMikex28').click(function(){

          MikeImputx28 += $(this).attr("value");
          // $('#MikeImputx28').attr('value', MikeImputx28);


          $('#MikeImputx28').attr('value', MikeImputx28);

           console.log("current Friend 1 imput x28 number is :" + MikeImputx28);
           console.log('New Friend1 imput x28 is : ' + MikeImputx28);
           
 userInputx28 =  parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceMikex28').click(function(){

           var getInput = MikeImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx28 = newInput;
            $('#MikeImputx28').attr('value', MikeImputx28);
     
           console.log('New input is : ' + MikeImputx28)
            

 userInputx28 =  parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });









//////////////////




/////////////////////



$('#Jeffx28').click(function(){

      $('.FriendMemox28').hide();
$('.JeffMemox28').show().click(function(){
  $('.WriteMemox28, .JeffTTMemox28').fadeIn();
});


console.log('Jeff x28 was selected');

 JeffImputx28 = 0;
 $('#JeffImputx28').attr('value', JeffImputx28);



  
  


   $('#Jeffx28 > span, #JeffImputx28').css('color','green');


 $('.NumPadx28').hide();
   $('.numJeffx28').show();


 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numJeffx28').click(function(){

  if (JeffImputx28 === 0 ){
    JeffImputx28 = '';
  }
});

// ///////






 $('.numJeffx28').click(function(){

          JeffImputx28 += $(this).attr("value");
          // $('#JeffImputx28').attr('value', JeffImputx28);


          $('#JeffImputx28').attr('value', JeffImputx28);

           console.log("current Friend 1 imput x28 number is :" + JeffImputx28);
           console.log('New Friend1 imput x28 is : ' + JeffImputx28);
           
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceJeffx28').click(function(){

           var getInput = JeffImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx28 = newInput;
            $('#JeffImputx28').attr('value', JeffImputx28);
     
           console.log('New input is : ' + JeffImputx28)
            
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


       });









//////////////////





/////////////////////



$('#Mariax28').click(function(){


      $('.FriendMemox28').hide();
$('.MariaMemox28').show().click(function(){
  $('.WriteMemox28, .MariaTTMemox28').fadeIn();
});


console.log('Maria x28 was selected');

MariaImputx28 = 0;
 $('#MariaImputx28').attr('value', MariaImputx28);
 


  
  


   $('#Mariax28 > span, #MariaImputx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numMariax28').show();



 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);
});





///////////

$('.numMariax28').click(function(){

  if (MariaImputx28 === 0 ){
    MariaImputx28 = '';
  }
});

// ///////






 $('.numMariax28').click(function(){

          MariaImputx28 += $(this).attr("value");
          // $('#MariaImputx28').attr('value', MariaImputx28);


          $('#MariaImputx28').attr('value', MariaImputx28);

           console.log("current Friend 1 imput x28 number is :" + MariaImputx28);
           console.log('New Friend1 imput x28 is : ' + MariaImputx28);
           

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceMariax28').click(function(){

           var getInput = MariaImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx28 = newInput;
            $('#MariaImputx28').attr('value', MariaImputx28);
     
           console.log('New input is : ' + MariaImputx28)
            
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


       });









//////////////////




/////////////////////



$('#Johnx28').click(function(){

      $('.FriendMemox28').hide();
$('.JohnMemox28').show().click(function(){
  $('.WriteMemox28, .JohnTTMemox28').fadeIn();
});


console.log('John x28 was selected');

 JohnImputx28 = 0;
 $('#JohnImputx28').attr('value', JohnImputx28);



  
  


   $('#Johnx28 > span, #JohnImputx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numJohnx28').show();


 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numJohnx28').click(function(){

  if (JohnImputx28 === 0 ){
    JohnImputx28 = '';
  }
});

// ///////









 $('.numJohnx28').click(function(){

          JohnImputx28 += $(this).attr("value");
          // $('#JohnImputx28').attr('value', JohnImputx28);


          $('#JohnImputx28').attr('value', JohnImputx28);

           console.log("current Friend 1 imput x28 number is :" + JohnImputx28);
           console.log('New Friend1 imput x28 is : ' + JohnImputx28);
           

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceJohnx28').click(function(){

           var getInput = JohnImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx28 = newInput;
            $('#JohnImputx28').attr('value', JohnImputx28);
     
           console.log('New input is : ' + JohnImputx28)
            

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


       });









//////////////////






/////////////////////



$('#Leahx28').click(function(){


      $('.FriendMemox28').hide();
$('.LeahMemox28').show().click(function(){
  $('.WriteMemox28, .LeahTTMemox28').fadeIn();
});


console.log('Leah x28 was selected');

LeahImputx28 = 0;
 $('#LeahImputx28').attr('value', LeahImputx28);
 


  
  


   $('#Leahx28 > span, #LeahImputx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numLeahx28').show();



 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});




///////////

$('.numLeahx28').click(function(){

  if (LeahImputx28 === 0 ){
    LeahImputx28 = '';
  }
});

// ///////







 $('.numLeahx28').click(function(){

          LeahImputx28 += $(this).attr("value");
          // $('#LeahImputx28').attr('value', LeahImputx28);


          $('#LeahImputx28').attr('value', LeahImputx28);

           console.log("current Friend 1 imput x28 number is :" + LeahImputx28);
           console.log('New Friend1 imput x28 is : ' + LeahImputx28);
           
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpaceLeahx28').click(function(){

           var getInput = LeahImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx28 = newInput;
            $('#LeahImputx28').attr('value', LeahImputx28);
     
           console.log('New input is : ' + LeahImputx28)
            

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

       });









//////////////////





/////////////////////



$('#Paulx28').click(function(){


      $('.FriendMemox28').hide();
$('.PaulMemox28').show().click(function(){
  $('.WriteMemox28, .PaulTTMemox28').fadeIn();
});


console.log('Paul x28 was selected');

PaulImputx28 = 0;
 $('#PaulImputx28').attr('value', PaulImputx28);
 


  
  


   $('#Paulx28 > span, #PaulImputx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numPaulx28').show();



 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);
});



///////////

$('.numPaulx28').click(function(){

  if (PaulImputx28 === 0 ){
    PaulImputx28 = '';
  }
});

// ///////






 $('.numPaulx28').click(function(){

          PaulImputx28 += $(this).attr("value");
          // $('#PaulImputx28').attr('value', PaulImputx28);


          $('#PaulImputx28').attr('value', PaulImputx28);

           console.log("current Friend 1 imput x28 number is :" + PaulImputx28);
           console.log('New Friend1 imput x28 is : ' + PaulImputx28);
           

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpacePaulx28').click(function(){

           var getInput = PaulImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx28 = newInput;
            $('#PaulImputx28').attr('value', PaulImputx28);
     
           console.log('New input is : ' + PaulImputx28)
            

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

       });









//////////////////





/////////////////////



$('#Jennyx28').click(function(){

      $('.FriendMemox28').hide();
$('.JennyMemox28').show().click(function(){
  $('.WriteMemox28, .JennyTTMemox28').fadeIn();
});


console.log('Jenny x28 was selected');

JennyImputx28 = 0;
 $('#JennyImputx28').attr('value', JennyImputx28);
 


  
  


   $('#Jennyx28 > span, #JennyImputx28').css('color','green');

   $('.NumPadx28').hide();
   $('.numJennyx28').show();



 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);
});




///////////

$('.numJennyx28').click(function(){

  if (JennyImputx28 === 0 ){
    JennyImputx28 = '';
  }
});

// ///////






 $('.numJennyx28').click(function(){

          JennyImputx28 += $(this).attr("value");
          // $('#JennyImputx28').attr('value', JennyImputx28);


          $('#JennyImputx28').attr('value', JennyImputx28);

           console.log("current Friend 1 imput x28 number is :" + JennyImputx28);
           console.log('New Friend1 imput x28 is : ' + JennyImputx28);
           

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceJennyx28').click(function(){

           var getInput = JennyImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx28 = newInput;
            $('#JennyImputx28').attr('value', JennyImputx28);
     
           console.log('New input is : ' + JennyImputx28)
            
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


       });









//////////////////





/////////////////////



$('#Gokux28').click(function(){

    $('.FriendMemox28').hide();
$('.GokuMemox28').show().click(function(){
  $('.WriteMemox28, .GokuTTMemox28').fadeIn();
});


console.log('Gokux28  was selected');

GokuImputx28 = 0;
 $('#GokuImputx28').attr('value', GokuImputx28);
 


  
  


   $('#Gokux28 > span, #GokuImputx28').css('color','green');


   $('.NumPadx28').hide();
   $('.numGokux28').show();



 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});




///////////

$('.numGokux28').click(function(){

  if (GokuImputx28 === 0 ){
    GokuImputx28 = '';
  }
});

// ///////



 $('.numGokux28').click(function(){

          GokuImputx28 += $(this).attr("value");
          // $('#Gokux28Imput').attr('value', Gokux28Imput);


          $('#GokuImputx28').attr('value', GokuImputx28);

           console.log("current Friend 1 imput  number is :" + GokuImputx28);
           console.log('New Friend1 imput  is : ' + GokuImputx28);
           
 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


        
           });




       //backspace button
           $('#backSpaceGokux28').click(function(){

           var getInput = GokuImputx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx28 = newInput;
            $('#GokuImputx28').attr('value', GokuImputx28);
     
           console.log('New input is : ' + GokuImputx28)
            

 userInputx28 = parseInt(JeffImputx28) + parseInt(MariaImputx28) + parseInt(JohnImputx28) + parseInt(LeahImputx28) + parseInt(PaulImputx28) + parseInt(JennyImputx28) + parseInt(GokuImputx28);
 $('#qtyvalue2x28').attr('value', userInputx28);


       });






//////////////////






$('#closeSer2Panelsx28, .SubmitMemox28, .Confirm2Yx28, .OperationEndedPanelx28').click(function(){

$('.WriteMemox28, .TMemox28, .FriendMemox28').fadeOut();

      userInputx28= "0.00";
      $("#qtyvalue2x28").attr('value', userInputx28);
      console.log('.confirm2Yx28userInputx28 =' + userInputx28);


});
















////////////////Wire Transfer x28///////////////////////////
///////////////////////////////////////////////////////////




$('#sendx28').click(function(){

 console.log("Service value x28 is = " + serviceValuex28);

serviceValuex28='WireTransfer';
tofValuex28 = 'waived';

  $('#submit2Yx28, #exit2Yx28').hide();
  $('.SelectSendOrRequestx28').fadeIn();
  $('.SelectBuyOrSellx28').hide();

$('.sendMoney2x28').fadeIn('slow');


    $('#cheTsavx28').hide();
    $('#savTchex28').hide();


  WrtNamex28='';
  WrtAccountNUmberx28='';
  WrtRoutingNUmberx28='';
  WrtTelephonex28='';
  WrtZipCodex28='';







         $('.WrtNameInputx28').attr('value', WrtNamex28);
         $('.WrtAccountInputx28').attr('value', WrtAccountNUmberx28);
         $('.WrtRoutingInputx28').attr('value', WrtRoutingNUmberx28);
         $('.WrtTelephoneInputx28').attr('value', WrtTelephonex28);
         $('.WrtZipCodeInputx28').attr('value', WrtZipCodex28);


 
userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);



    console.log("Service value x28 is = " + serviceValuex28);



  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);

});






















// /////////////////////////////////
WrtLabelx28="";

$('.WrtLabelx28').click(function(){
WrtLabelx28 = $(this).attr('value');
console.log("The selected WrtLabelx28 is = " + WrtLabelx28);

});








/////////////////////



$('.NameWrLabelx28').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabelx28').click(function(){




console.log('Wrt Name Label x28 was selected');

 WrtAccountNUmberx28 = "";
 $('.WrtAccountInputx28').attr('value', WrtAccountNUmberx28);


 $('.NumPadx28').hide();
 $('.numCCx28').show();

});




 $('.numCCx28').click(function(){

         WrtAccountNUmberx28+= $(this).attr("value");
          
          $('.WrtAccountInputx28').attr('value', WrtAccountNUmberx28);

           });



       //backspace button
           $('#backSpaceCCx28').click(function(){

           var getInput = WrtAccountNUmberx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx28 = newInput;
            $('.WrtAccountInputx28').attr('value', WrtAccountNUmberx28);
     
           console.log('New input is : ' + WrtAccountNUmberx28);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabelx28').click(function(){




console.log('Wrt Name Label x28 was selected');

 WrtRoutingNUmberx28 = "";
 $('.WrtRoutingInputx28').attr('value', WrtRoutingNUmberx28);


 $('.NumPadx28').hide();
 $('.numRx28').show();

});




 $('.numRx28').click(function(){

         WrtRoutingNUmberx28+= $(this).attr("value");
          
          $('.WrtRoutingInputx28').attr('value', WrtRoutingNUmberx28);

           });



       //backspace button
           $('#backSpaceRx28').click(function(){

           var getInput = WrtRoutingNUmberx28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx28 = newInput;
            $('.WrtRoutingInputx28').attr('value', WrtRoutingNUmberx28);
     
           console.log('New input is : ' + WrtRoutingNUmberx28);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabelx28').click(function(){




console.log('Wrt Name Label x28 was selected');

 WrtTelephonex28 = "";
 $('.WrtTelephoneInputx28').attr('value', WrtTelephonex28);


 $('.NumPadx28').hide();
 $('.numSwTelx28').show();

});




 $('.numSwTelx28').click(function(){

          WrtTelephonex28+= $(this).attr("value");
          
          $('.WrtTelephoneInputx28').attr('value', WrtTelephonex28);

           });



       //backspace button
           $('#backSpaceSwTelx28').click(function(){

           var getInput = WrtTelephonex28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex28 = newInput;
           $('.WrtTelephoneInputx28').attr('value', WrtTelephonex28);
     
           console.log('New input is : ' + WrtTelephonex28);
            


});




//////////////////





/////////////////////



$('.ZipWrLabelx28').click(function(){




console.log('Wrt Name Label x28 was selected');

 WrtZipCodex28 = "";
 $('.WrtZipCodeInputx28').attr('value', WrtZipCodex28);


 $('.NumPadx28').hide();
 $('.numSwZipx28').show();
 
});




 $('.numSwZipx28').click(function(){

         WrtZipCodex28+= $(this).attr("value");
          
          $('.WrtZipCodeInputx28').attr('value', WrtZipCodex28);

           });



       //backspace button
           $('#backSpaceSwZipx28').click(function(){

           var getInput = WrtZipCodex28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex28 = newInput;
            $('.WrtZipCodeInputx28').attr('value', WrtZipCodex28);
     
           console.log('New input is : ' + WrtZipCodex28);
            


});






////////////////end of Wire Transfer x28///////////////////////////
///////////////////////////////////////////////////////////






// /////////  Loans////////////////////////


$('#Loanx28').click(function(){

serviceValuex28 = 'Loan';

$('.TakeLoanx28').fadeIn();
$('.ToogleLoansToLinearx28').fadeIn();


$('.SelectOrx28').show();


         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);

});



$('.SelectSendOrRequestx28, .SelectOrx28').click(function(){

  $(this).hide();
  $('.confBack2Yx28').fadeIn();


});







inputLoan1x28=0;
inputLoan2x28=0;
inputLoan3x28=0;
inputLoan4x28=0;




         $('.inputLoan4x28').attr('value', inputLoan1x28);
         $('.inputLoan4x28').attr('value', inputLoan2x28);
         $('.inputLoan4x28').attr('value', inputLoan3x28);
         $('.inputLoan4x28').attr('value', inputLoan4x28);


 
userInputx28 = '0.00';
$('#qtyvalue2x28').attr('value', userInputx28);



console.log("Service value x28 is = " + serviceValuex28);



  console.log("Service value is = " + serviceValuex28);
  console.log("tofvalue is = " + tofValuex28);

});











$('.NumPadx28').click(function(){

if (inputLoan1x28 === '0' || 0){
  inputLoan1x28 = '';
}


if (inputLoan2x28 === '0' || 0){
  inputLoan2x28 = '';
}

if (inputLoan3x28 === '0' || 0){
  inputLoan3x28 = '';
}


if (inputLoan4x28 === '0' || 0){
  inputLoan4x28 = '';
}

});






inputLoan1x28=0;
inputLoan2x28=0;
inputLoan3x28=0;
inputLoan4x28=0;








/////////////////////



$('.Loan1x28').click(function(){


$('.EnterLoan1x28').show();


console.log('Mike x28 was selected');

 inputLoan1x28 = 0;
 $('.inputLoan1x28').attr('value', inputLoan1x28);


   $('#Mikex28 > span, .inputLoan1x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTLoan1x28').show();




 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTLoan1x28').click(function(){

  if (inputLoan1x28 === 0 ){
    inputLoan1x28 = '';
  }
});

// ///////




 $('.numTLoan1x28').click(function(){

          inputLoan1x28 += $(this).attr("value");
          // $('.inputLoan1x28').attr('value', inputLoan1x28);


          $('.inputLoan1x28').attr('value', inputLoan1x28);

           console.log("current Friend 1 imput x28 number is :" + inputLoan1x28);
           console.log('New Friend1 imput x28 is : ' + inputLoan1x28);
           
 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTLoan1x28').click(function(){

           var getInput = inputLoan1x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan1x28 = newInput;
            $('.inputLoan1x28').attr('value', inputLoan1x28);
     
           console.log('New input is : ' + inputLoan1x28)
            

 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////////



/////////////////////



$('.Loan2x28').click(function(){


$('.EnterLoan2x28').show();


console.log('Mike x28 was selected');

 inputLoan2x28 = 0;
 $('.inputLoan2x28').attr('value', inputLoan2x28);


   $('#Mikex28 > span, .inputLoan2x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTLoan2x28').show();




 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTLoan2x28').click(function(){

  if (inputLoan2x28 === 0 ){
    inputLoan2x28 = '';
  }
});

// ///////




 $('.numTLoan2x28').click(function(){

          inputLoan2x28 += $(this).attr("value");
          // $('.inputLoan2x28').attr('value', inputLoan2x28);


          $('.inputLoan2x28').attr('value', inputLoan2x28);

           console.log("current Friend 1 imput x28 number is :" + inputLoan2x28);
           console.log('New Friend1 imput x28 is : ' + inputLoan2x28);
           
 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTLoan2x28').click(function(){

           var getInput = inputLoan2x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan2x28 = newInput;
            $('.inputLoan2x28').attr('value', inputLoan2x28);
     
           console.log('New input is : ' + inputLoan2x28)
            

 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////


/////////////////////



$('.Loan3x28').click(function(){


$('.EnterLoan3x28').show();


console.log('Mike x28 was selected');

 inputLoan3x28 = 0;
 $('.inputLoan3x28').attr('value', inputLoan3x28);


   $('#Mikex28 > span, .inputLoan3x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTLoan3x28').show();




 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTLoan3x28').click(function(){

  if (inputLoan3x28 === 0 ){
    inputLoan3x28 = '';
  }
});

// ///////




 $('.numTLoan3x28').click(function(){

          inputLoan3x28 += $(this).attr("value");
          // $('.inputLoan3x28').attr('value', inputLoan3x28);


          $('.inputLoan3x28').attr('value', inputLoan3x28);

           console.log("current Friend 1 imput x28 number is :" + inputLoan3x28);
           console.log('New Friend1 imput x28 is : ' + inputLoan3x28);
           
 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTLoan3x28').click(function(){

           var getInput = inputLoan3x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan3x28 = newInput;
            $('.inputLoan3x28').attr('value', inputLoan3x28);
     
           console.log('New input is : ' + inputLoan3x28)
            

 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });




//////////////////



/////////////////////



$('.Loan4x28').click(function(){


$('.EnterLoan4x28').show();


console.log('Mike x28 was selected');

 inputLoan4x28 = 0;
 $('.inputLoan4x28').attr('value', inputLoan4x28);


   $('#Mikex28 > span, .inputLoan4x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTLoan4x28').show();




 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTLoan4x28').click(function(){

  if (inputLoan4x28 === 0 ){
    inputLoan4x28 = '';
  }
});

// ///////




 $('.numTLoan4x28').click(function(){

          inputLoan4x28 += $(this).attr("value");
          // $('.inputLoan4x28').attr('value', inputLoan4x28);


          $('.inputLoan4x28').attr('value', inputLoan4x28);

           console.log("current Friend 1 imput x28 number is :" + inputLoan4x28);
           console.log('New Friend1 imput x28 is : ' + inputLoan4x28);
           
 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTLoan4x28').click(function(){

           var getInput = inputLoan4x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan4x28 = newInput;
            $('.inputLoan4x28').attr('value', inputLoan4x28);
     
           console.log('New input is : ' + inputLoan4x28)
            

 userInputx28 =  parseInt(inputLoan1x28) + parseInt(inputLoan2x28) + parseInt(inputLoan3x28) + parseInt(inputLoan4x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////
$('.ToogleLoansToLinearx28').click(function(){
$(this).hide();
$('.ToogleLoansToSquarex28').show();
});


$('.ToogleLoansToSquarex28').click(function(){
$(this).hide();
$('.ToogleLoansToLinearx28').show();
});



$('.ToogleLoansToLinearx28, .ToogleLoansToSquarex28').click(function(){

$('.Loanx28').toggleClass('LinearLoanx28');
$('.LoanNamex28').toggleClass('LinearLoanNamex28');
$('.LoanBadgeAndnamex28').toggleClass('LinearLoanBadgeAndnamex28');
$('.LoanAndAbrex28').toggleClass('LinearLoanAndAbrex28');
$('.MyCurrentPricex28').toggleClass('LinearMyCurrentPricex28');
$('.EnterLoanQtyx28').toggleClass('LinearEnterLoanQtyx28');


});










// /////////  Loans////////////////////////




// /////////Buy sell Assets////////////////////////


$('#BSassetsx28').click(function(){

serviceValuex28 = 'Assets';
console.log("Service value x28 is = " + serviceValuex28);
console.log("Service value is = " + serviceValuex28);
console.log("tofvalue is = " + tofValuex28);

$('.BuyAssetsx28').fadeIn();
// $('.ToogleAssetsToLinearx28').fadeIn();
$('#submit2Yx28, #exit2Yx28, .SelectSendOrRequestx28').hide();

$('.SelectBuyOrSellx28').show();

         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);



inputAsset1x28=0;
inputAsset2x28=0;
inputAsset3x28=0;
inputAsset4x28=0;




         $('.inputAsset4x28').attr('value', inputAsset1x28);
         $('.inputAsset4x28').attr('value', inputAsset2x28);
         $('.inputAsset4x28').attr('value', inputAsset3x28);
         $('.inputAsset4x28').attr('value', inputAsset4x28);

});



$('.SelectSendOrRequestx28, .SelectBuyOrSellx28').click(function(){

  $(this).hide();
  $('.confBack2Yx28').fadeIn();


});







inputAsset1x28=0;
inputAsset2x28=0;
inputAsset3x28=0;
inputAsset4x28=0;
inputAsset5x28=0;
inputAsset6x28=0;
inputAsset7x28=0;
inputAsset8x28=0;
inputAsset9x28=0;




         $('.inputAsset4x28').attr('value', inputAsset1x28);
         $('.inputAsset4x28').attr('value', inputAsset2x28);
         $('.inputAsset4x28').attr('value', inputAsset3x28);
         $('.inputAsset4x28').attr('value', inputAsset4x28);
         $('.inputAsset5x28').attr('value', inputAsset5x28);
         $('.inputAsset6x28').attr('value', inputAsset6x28);
         $('.inputAsset7x28').attr('value', inputAsset7x28);
         $('.inputAsset8x28').attr('value', inputAsset8x28);
         $('.inputAsset9x28').attr('value', inputAsset9x28);         


 








// /////////////////////////////////
  SelectedAssetx28=""


  $('.Assetx28').click(function(){
    SelectedFriendx28 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedAssetx28);

});





$('.NumPadx28').click(function(){

if (inputAsset1x28 === '0' || 0){
  inputAsset1x28 = '';
}


if (inputAsset2x28 === '0' || 0){
  inputAsset2x28 = '';
}

if (inputAsset3x28 === '0' || 0){
  inputAsset3x28 = '';
}


if (inputAsset4x28 === '0' || 0){
  inputAsset4x28 = '';
}

if (inputAsset5x28 === '0' || 0){
  inputAsset5x28 = '';
}

if (inputAsset6x28 === '0' || 0){
  inputAsset6x28 = '';
}

if (inputAsset7x28 === '0' || 0){
  inputAsset7x28 = '';
}

if (inputAsset8x28 === '0' || 0){
  inputAsset8x28 = '';
}

if (inputAsset9x28 === '0' || 0){
  inputAsset9x28 = '';

}

});






inputAsset1x28=0;
inputAsset2x28=0;
inputAsset3x28=0;
inputAsset4x28=0;
inputAsset5x28=0;
inputAsset6x28=0;
inputAsset7x28=0;
inputAsset8x28=0;
inputAsset9x28=0;










/////////////////////



$('.Asset1x28').click(function(){


$('.EnterAsset1x28').show();


console.log('Mike x28 was selected');

 inputAsset1x28 = 0;
 $('.inputAsset1x28').attr('value', inputAsset1x28);


   $('#Mikex28 > span, .inputAsset1x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset1x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset1x28').click(function(){

  if (inputAsset1x28 === 0 ){
    inputAsset1x28 = '';
  }
});

// ///////




 $('.numAsset1x28').click(function(){

          inputAsset1x28 += $(this).attr("value");
          // $('.inputAsset1x28').attr('value', inputAsset1x28);


          $('.inputAsset1x28').attr('value', inputAsset1x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset1x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset1x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset1x28').click(function(){

           var getInput = inputAsset1x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset1x28 = newInput;
            $('.inputAsset1x28').attr('value', inputAsset1x28);
     
           console.log('New input is : ' + inputAsset1x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////////



/////////////////////



$('.Asset2x28').click(function(){


$('.EnterAsset2x28').show();


console.log('Mike x28 was selected');

 inputAsset2x28 = 0;
 $('.inputAsset2x28').attr('value', inputAsset2x28);


   $('#Mikex28 > span, .inputAsset2x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset2x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset2x28').click(function(){

  if (inputAsset2x28 === 0 ){
    inputAsset2x28 = '';
  }
});

// ///////




 $('.numAsset2x28').click(function(){

          inputAsset2x28 += $(this).attr("value");
          // $('.inputAsset2x28').attr('value', inputAsset2x28);


          $('.inputAsset2x28').attr('value', inputAsset2x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset2x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset2x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset2x28').click(function(){

           var getInput = inputAsset2x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset2x28 = newInput;
            $('.inputAsset2x28').attr('value', inputAsset2x28);
     
           console.log('New input is : ' + inputAsset2x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////


/////////////////////



$('.Asset3x28').click(function(){


$('.EnterAsset3x28').show();


console.log('Mike x28 was selected');

 inputAsset3x28 = 0;
 $('.inputAsset3x28').attr('value', inputAsset3x28);


   $('#Mikex28 > span, .inputAsset3x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset3x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset3x28').click(function(){

  if (inputAsset3x28 === 0 ){
    inputAsset3x28 = '';
  }
});

// ///////




 $('.numAsset3x28').click(function(){

          inputAsset3x28 += $(this).attr("value");
          // $('.inputAsset3x28').attr('value', inputAsset3x28);


          $('.inputAsset3x28').attr('value', inputAsset3x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset3x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset3x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset3x28').click(function(){

           var getInput = inputAsset3x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset3x28 = newInput;
            $('.inputAsset3x28').attr('value', inputAsset3x28);
     
           console.log('New input is : ' + inputAsset3x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });




//////////////////



/////////////////////



$('.Asset4x28').click(function(){


$('.EnterAsset4x28').show();


console.log('Mike x28 was selected');

 inputAsset4x28 = 0;
 $('.inputAsset4x28').attr('value', inputAsset4x28);


   $('#Mikex28 > span, .inputAsset4x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset4x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset4x28').click(function(){

  if (inputAsset4x28 === 0 ){
    inputAsset4x28 = '';
  }
});

// ///////




 $('.numAsset4x28').click(function(){

          inputAsset4x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset4x28').attr('value', inputAsset4x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset4x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset4x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset4x28').click(function(){

           var getInput = inputAsset4x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset4x28 = newInput;
            $('.inputAsset4x28').attr('value', inputAsset4x28);
     
           console.log('New input is : ' + inputAsset4x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Asset5x28').click(function(){


$('.EnterAsset5x28').show();


console.log('Mike x28 was selected');

 inputAsset5x28 = 0;
 $('.inputAsset5x28').attr('value', inputAsset5x28);


   $('#Mikex28 > span, .inputAsset5x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset5x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset5x28').click(function(){

  if (inputAsset5x28 === 0 ){
    inputAsset5x28 = '';
  }
});

// ///////




 $('.numAsset5x28').click(function(){

          inputAsset5x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset5x28').attr('value', inputAsset5x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset5x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset5x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset5x28').click(function(){

           var getInput = inputAsset5x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset5x28 = newInput;
            $('.inputAsset5x28').attr('value', inputAsset5x28);
     
           console.log('New input is : ' + inputAsset5x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Asset6x28').click(function(){


$('.EnterAsset6x28').show();


console.log('Mike x28 was selected');

 inputAsset6x28 = 0;
 $('.inputAsset6x28').attr('value', inputAsset6x28);


   $('#Mikex28 > span, .inputAsset6x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset6x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset6x28').click(function(){

  if (inputAsset6x28 === 0 ){
    inputAsset6x28 = '';
  }
});

// ///////




 $('.numAsset6x28').click(function(){

          inputAsset6x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset6x28').attr('value', inputAsset6x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset6x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset6x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset6x28').click(function(){

           var getInput = inputAsset6x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset6x28 = newInput;
            $('.inputAsset6x28').attr('value', inputAsset6x28);
     
           console.log('New input is : ' + inputAsset6x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////


/////////////////////



$('.Asset7x28').click(function(){


$('.EnterAsset7x28').show();


console.log('Mike x28 was selected');

 inputAsset7x28 = 0;
 $('.inputAsset7x28').attr('value', inputAsset7x28);


   $('#Mikex28 > span, .inputAsset7x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset7x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset7x28').click(function(){

  if (inputAsset7x28 === 0 ){
    inputAsset7x28 = '';
  }
});

// ///////




 $('.numAsset7x28').click(function(){

          inputAsset7x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset7x28').attr('value', inputAsset7x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset7x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset7x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset7x28').click(function(){

           var getInput = inputAsset7x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset7x28 = newInput;
            $('.inputAsset7x28').attr('value', inputAsset7x28);
     
           console.log('New input is : ' + inputAsset7x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Asset8x28').click(function(){


$('.EnterAsset8x28').show();


console.log('Mike x28 was selected');

 inputAsset8x28 = 0;
 $('.inputAsset8x28').attr('value', inputAsset8x28);


   $('#Mikex28 > span, .inputAsset8x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset8x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset8x28').click(function(){

  if (inputAsset8x28 === 0 ){
    inputAsset8x28 = '';
  }
});

// ///////




 $('.numAsset8x28').click(function(){

          inputAsset8x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset8x28').attr('value', inputAsset8x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset8x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset8x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset8x28').click(function(){

           var getInput = inputAsset8x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset8x28 = newInput;
            $('.inputAsset8x28').attr('value', inputAsset8x28);
     
           console.log('New input is : ' + inputAsset8x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////

/////////////////////



$('.Asset9x28').click(function(){


$('.EnterAsset9x28').show();


console.log('Mike x28 was selected');

 inputAsset9x28 = 0;
 $('.inputAsset9x28').attr('value', inputAsset9x28);


   $('#Mikex28 > span, .inputAsset9x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numAsset9x28').show();




 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numAsset9x28').click(function(){

  if (inputAsset9x28 === 0 ){
    inputAsset9x28 = '';
  }
});

// ///////




 $('.numAsset9x28').click(function(){

          inputAsset9x28 += $(this).attr("value");
          // $('.inputAsset4x28').attr('value', inputAsset4x28);


          $('.inputAsset9x28').attr('value', inputAsset9x28);

           console.log("current Friend 1 imput x28 number is :" + inputAsset9x28);
           console.log('New Friend1 imput x28 is : ' + inputAsset9x28);
           
 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceAsset9x28').click(function(){

           var getInput = inputAsset9x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset9x28 = newInput;
            $('.inputAsset9x28').attr('value', inputAsset9x28);
     
           console.log('New input is : ' + inputAsset9x28)
            

 userInputx28 =  parseInt(inputAsset1x28) + parseInt(inputAsset2x28) + parseInt(inputAsset3x28) + parseInt(inputAsset4x28) + parseInt(inputAsset5x28) + parseInt(inputAsset6x28) +parseInt(inputAsset7x28) + parseInt(inputAsset8x28) + parseInt(inputAsset9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////





$('.ToogleAssetsToRectanglex28').click(function(){
    $(this).hide();
    $('.ToogleAssetsToLinearx28').show();
});


$('.ToogleAssetsToLinearx28').click(function(){
    $(this).hide();
    $('.ToogleAssetsToSquarex28').show();
});


$('.ToogleAssetsToSquarex28').click(function(){
    $(this).hide();
    $('.ToogleAssetsToMinix28').show();
});


$('.ToogleAssetsToMinix28').click(function(){
    $(this).hide();
    $('.ToogleAssetsToRectanglex28').show();
});




$('.ToogleAssetsToRectanglex28').click(function(){

$('.Assetx28').addClass('RectangledAssetMOBIx28');
$('.MyAssetinRealValx28').addClass('RectangledMyAssetinRealValMOBIx28');
$('.EnterAssetQtyx28').addClass('RectangledEnterAssetQtyMOBIx28');


$('.AssetMOBIx28').removeClass('MiniAssetMOBIx28 '); 
$('.AssetSymbolMOBIx28').removeClass('MiniAssetSymbolMOBIx28 '); 
$('.AssetNameMOBIx28').removeClass('MiniAssetNameMOBIx28');
$('.IhaveThisMuchMOBIx28').removeClass('MiniIhaveThisMuchMOBIx28');
$('.MyAssetinRealValMOBIx28').removeClass('MiniMyAssetinRealValMOBIx28');
$('.EnterAssetQtyMOBIx28').removeClass('MiniEnterAssetQtyMOBIx28');
$('.InputAssetQtyMOBIx28').removeClass('MiniInputAssetQtyMOBIx28');



});




$('.ToogleAssetsToLinearx28').click(function(){

$('.Assetx28').addClass('LinearAssetx28');
$('.AssetNamex28').addClass('LinearAssetNamex28');
$('.AssetBadgeAndnamex28').addClass('LinearAssetBadgeAndnamex28');
$('.AssetAndAbrex28').addClass('LinearAssetAndAbrex28');
$('.MyCurrentPricex28').addClass('LinearMyCurrentPricex28');
$('.EnterAssetQtyx28').addClass('LinearEnterAssetQtyx28');

$('.Assetx28').removeClass('RectangledAssetMOBIx28');
$('.MyAssetinRealValx28').removeClass('RectangledMyAssetinRealValMOBIx28');
$('.EnterAssetQtyx28').removeClass('RectangledEnterAssetQtyMOBIx28');


});



$('.ToogleAssetsToSquarex28').click(function(){

$('.Assetx28').removeClass('LinearAssetx28');
$('.AssetNamex28').removeClass('LinearAssetNamex28');
$('.AssetBadgeAndnamex28').removeClass('LinearAssetBadgeAndnamex28');
$('.AssetAndAbrex28').removeClass('LinearAssetAndAbrex28');
$('.MyCurrentPricex28').removeClass('LinearMyCurrentPricex28');
$('.EnterAssetQtyx28').removeClass('LinearEnterAssetQtyx28');

$('.Assetx28').removeClass('RectangledAssetMOBIx28');
$('.MyAssetinRealValx28').removeClass('RectangledMyAssetinRealValMOBIx28');
$('.EnterAssetQtyx28').removeClass('RectangledEnterAssetQtyMOBIx28');


});





$('.ToogleAssetsToMinix28').click(function(){

$('.AssetMOBIx28').addClass('MiniAssetMOBIx28 '); 
$('.AssetSymbolMOBIx28').addClass('MiniAssetSymbolMOBIx28 '); 
$('.AssetNameMOBIx28').addClass('MiniAssetNameMOBIx28');
$('.IhaveThisMuchMOBIx28').addClass('MiniIhaveThisMuchMOBIx28');
$('.MyAssetinRealValMOBIx28').addClass('MiniMyAssetinRealValMOBIx28');
$('.EnterAssetQtyMOBIx28').addClass('MiniEnterAssetQtyMOBIx28');
$('.InputAssetQtyMOBIx28').addClass('MiniInputAssetQtyMOBIx28');




$('.Assetx28').removeClass('RectangledAssetMOBIx28');
$('.MyAssetinRealValx28').removeClass('RectangledMyAssetinRealValMOBIx28');
$('.EnterAssetQtyx28').removeClass('RectangledEnterAssetQtyMOBIx28');

$('.Assetx28').removeClass('LinearAssetx28');
$('.AssetNamex28').removeClass('LinearAssetNamex28');
$('.AssetBadgeAndnamex28').removeClass('LinearAssetBadgeAndnamex28');
$('.AssetAndAbrex28').removeClass('LinearAssetAndAbrex28');
$('.MyCurrentPricex28').removeClass('LinearMyCurrentPricex28');
$('.EnterAssetQtyx28').removeClass('LinearEnterAssetQtyx28');



});









// /////////Buy sell Assets////////////////////////







// /////////Make sell Transfers////////////////////////


$('#MTransferx28').click(function(){

serviceValuex28 = 'Transfer';
console.log("Service value x28 is = " + serviceValuex28);
console.log("Service value is = " + serviceValuex28);
console.log("tofvalue is = " + tofValuex28);

$('.MakeTransferx28').fadeIn();
// $('.ToogleTransfersToLinearx28').fadeIn();


$('.SelectMakeOrSellx28').show();

         userInputx28 ="0.00";
         $('#qtyvalue2x28').attr('value', userInputx28);



inputTransfer1x28=0;
inputTransfer2x28=0;
inputTransfer3x28=0;
inputTransfer4x28=0;




         $('.inputTransfer4x28').attr('value', inputTransfer1x28);
         $('.inputTransfer4x28').attr('value', inputTransfer2x28);
         $('.inputTransfer4x28').attr('value', inputTransfer3x28);
         $('.inputTransfer4x28').attr('value', inputTransfer4x28);

});



$('.SelectSendOrRequestx28, .SelectMakeOrSellx28').click(function(){

  $(this).hide();
  $('.confBack2Yx28').fadeIn();


});







inputTransfer1x28=0;
inputTransfer2x28=0;
inputTransfer3x28=0;
inputTransfer4x28=0;
inputTransfer5x28=0;
inputTransfer6x28=0;
inputTransfer7x28=0;
inputTransfer8x28=0;
inputTransfer9x28=0;




         $('.inputTransfer4x28').attr('value', inputTransfer1x28);
         $('.inputTransfer4x28').attr('value', inputTransfer2x28);
         $('.inputTransfer4x28').attr('value', inputTransfer3x28);
         $('.inputTransfer4x28').attr('value', inputTransfer4x28);
         $('.inputTransfer5x28').attr('value', inputTransfer5x28);
         $('.inputTransfer6x28').attr('value', inputTransfer6x28);
         $('.inputTransfer7x28').attr('value', inputTransfer7x28);
         $('.inputTransfer8x28').attr('value', inputTransfer8x28);
         $('.inputTransfer9x28').attr('value', inputTransfer9x28);         


 








// /////////////////////////////////
  SelectedTransferx28="";


  $('.Transferx28').click(function(){
    SelectedFriendx28 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedTransferx28);

});





$('.NumPadx28').click(function(){

if (inputTransfer1x28 === '0' || 0){
  inputTransfer1x28 = '';
}


if (inputTransfer2x28 === '0' || 0){
  inputTransfer2x28 = '';
}

if (inputTransfer3x28 === '0' || 0){
  inputTransfer3x28 = '';
}


if (inputTransfer4x28 === '0' || 0){
  inputTransfer4x28 = '';
}

if (inputTransfer5x28 === '0' || 0){
  inputTransfer5x28 = '';
}

if (inputTransfer6x28 === '0' || 0){
  inputTransfer6x28 = '';
}

if (inputTransfer7x28 === '0' || 0){
  inputTransfer7x28 = '';
}

if (inputTransfer8x28 === '0' || 0){
  inputTransfer8x28 = '';
}

if (inputTransfer9x28 === '0' || 0){
  inputTransfer9x28 = '';

}

});






inputTransfer1x28=0;
inputTransfer2x28=0;
inputTransfer3x28=0;
inputTransfer4x28=0;
inputTransfer5x28=0;
inputTransfer6x28=0;
inputTransfer7x28=0;
inputTransfer8x28=0;
inputTransfer9x28=0;










/////////////////////



$('.Transfer1x28').click(function(){


$('.EnterTransfer1x28').show();


console.log('Mike x28 was selected');

 inputTransfer1x28 = 0;
 $('.inputTransfer1x28').attr('value', inputTransfer1x28);


   $('#Mikex28 > span, .inputTransfer1x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer1x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer1x28').click(function(){

  if (inputTransfer1x28 === 0 ){
    inputTransfer1x28 = '';
  }
});

// ///////




 $('.numTransfer1x28').click(function(){

          inputTransfer1x28 += $(this).attr("value");
          // $('.inputTransfer1x28').attr('value', inputTransfer1x28);


          $('.inputTransfer1x28').attr('value', inputTransfer1x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer1x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer1x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer1x28').click(function(){

           var getInput = inputTransfer1x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer1x28 = newInput;
            $('.inputTransfer1x28').attr('value', inputTransfer1x28);
     
           console.log('New input is : ' + inputTransfer1x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////////



/////////////////////



$('.Transfer2x28').click(function(){


$('.EnterTransfer2x28').show();


console.log('Mike x28 was selected');

 inputTransfer2x28 = 0;
 $('.inputTransfer2x28').attr('value', inputTransfer2x28);


   $('#Mikex28 > span, .inputTransfer2x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer2x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer2x28').click(function(){

  if (inputTransfer2x28 === 0 ){
    inputTransfer2x28 = '';
  }
});

// ///////




 $('.numTransfer2x28').click(function(){

          inputTransfer2x28 += $(this).attr("value");
          // $('.inputTransfer2x28').attr('value', inputTransfer2x28);


          $('.inputTransfer2x28').attr('value', inputTransfer2x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer2x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer2x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer2x28').click(function(){

           var getInput = inputTransfer2x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer2x28 = newInput;
            $('.inputTransfer2x28').attr('value', inputTransfer2x28);
     
           console.log('New input is : ' + inputTransfer2x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });


////////////////////////////////


/////////////////////



$('.Transfer3x28').click(function(){


$('.EnterTransfer3x28').show();


console.log('Mike x28 was selected');

 inputTransfer3x28 = 0;
 $('.inputTransfer3x28').attr('value', inputTransfer3x28);


   $('#Mikex28 > span, .inputTransfer3x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer3x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer3x28').click(function(){

  if (inputTransfer3x28 === 0 ){
    inputTransfer3x28 = '';
  }
});

// ///////




 $('.numTransfer3x28').click(function(){

          inputTransfer3x28 += $(this).attr("value");
          // $('.inputTransfer3x28').attr('value', inputTransfer3x28);


          $('.inputTransfer3x28').attr('value', inputTransfer3x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer3x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer3x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer3x28').click(function(){

           var getInput = inputTransfer3x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer3x28 = newInput;
            $('.inputTransfer3x28').attr('value', inputTransfer3x28);
     
           console.log('New input is : ' + inputTransfer3x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });




//////////////////



/////////////////////



$('.Transfer4x28').click(function(){


$('.EnterTransfer4x28').show();


console.log('Mike x28 was selected');

 inputTransfer4x28 = 0;
 $('.inputTransfer4x28').attr('value', inputTransfer4x28);


   $('#Mikex28 > span, .inputTransfer4x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer4x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer4x28').click(function(){

  if (inputTransfer4x28 === 0 ){
    inputTransfer4x28 = '';
  }
});

// ///////




 $('.numTransfer4x28').click(function(){

          inputTransfer4x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer4x28').attr('value', inputTransfer4x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer4x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer4x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer4x28').click(function(){

           var getInput = inputTransfer4x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer4x28 = newInput;
            $('.inputTransfer4x28').attr('value', inputTransfer4x28);
     
           console.log('New input is : ' + inputTransfer4x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Transfer5x28').click(function(){


$('.EnterTransfer5x28').show();


console.log('Mike x28 was selected');

 inputTransfer5x28 = 0;
 $('.inputTransfer5x28').attr('value', inputTransfer5x28);


   $('#Mikex28 > span, .inputTransfer5x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer5x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer5x28').click(function(){

  if (inputTransfer5x28 === 0 ){
    inputTransfer5x28 = '';
  }
});

// ///////




 $('.numTransfer5x28').click(function(){

          inputTransfer5x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer5x28').attr('value', inputTransfer5x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer5x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer5x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer5x28').click(function(){

           var getInput = inputTransfer5x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer5x28 = newInput;
            $('.inputTransfer5x28').attr('value', inputTransfer5x28);
     
           console.log('New input is : ' + inputTransfer5x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Transfer6x28').click(function(){


$('.EnterTransfer6x28').show();


console.log('Mike x28 was selected');

 inputTransfer6x28 = 0;
 $('.inputTransfer6x28').attr('value', inputTransfer6x28);


   $('#Mikex28 > span, .inputTransfer6x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer6x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer6x28').click(function(){

  if (inputTransfer6x28 === 0 ){
    inputTransfer6x28 = '';
  }
});

// ///////




 $('.numTransfer6x28').click(function(){

          inputTransfer6x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer6x28').attr('value', inputTransfer6x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer6x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer6x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer6x28').click(function(){

           var getInput = inputTransfer6x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer6x28 = newInput;
            $('.inputTransfer6x28').attr('value', inputTransfer6x28);
     
           console.log('New input is : ' + inputTransfer6x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////


/////////////////////



$('.Transfer7x28').click(function(){


$('.EnterTransfer7x28').show();


console.log('Mike x28 was selected');

 inputTransfer7x28 = 0;
 $('.inputTransfer7x28').attr('value', inputTransfer7x28);


   $('#Mikex28 > span, .inputTransfer7x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer7x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer7x28').click(function(){

  if (inputTransfer7x28 === 0 ){
    inputTransfer7x28 = '';
  }
});

// ///////




 $('.numTransfer7x28').click(function(){

          inputTransfer7x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer7x28').attr('value', inputTransfer7x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer7x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer7x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer7x28').click(function(){

           var getInput = inputTransfer7x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer7x28 = newInput;
            $('.inputTransfer7x28').attr('value', inputTransfer7x28);
     
           console.log('New input is : ' + inputTransfer7x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////



/////////////////////



$('.Transfer8x28').click(function(){


$('.EnterTransfer8x28').show();


console.log('Mike x28 was selected');

 inputTransfer8x28 = 0;
 $('.inputTransfer8x28').attr('value', inputTransfer8x28);


   $('#Mikex28 > span, .inputTransfer8x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer8x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer8x28').click(function(){

  if (inputTransfer8x28 === 0 ){
    inputTransfer8x28 = '';
  }
});

// ///////




 $('.numTransfer8x28').click(function(){

          inputTransfer8x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer8x28').attr('value', inputTransfer8x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer8x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer8x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer8x28').click(function(){

           var getInput = inputTransfer8x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer8x28 = newInput;
            $('.inputTransfer8x28').attr('value', inputTransfer8x28);
     
           console.log('New input is : ' + inputTransfer8x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////

/////////////////////



$('.Transfer9x28').click(function(){


$('.EnterTransfer9x28').show();


console.log('Mike x28 was selected');

 inputTransfer9x28 = 0;
 $('.inputTransfer9x28').attr('value', inputTransfer9x28);


   $('#Mikex28 > span, .inputTransfer9x28').css('color','green');


 $('.NumPadx28').hide();
 $('.numTransfer9x28').show();




 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

});



///////////

$('.numTransfer9x28').click(function(){

  if (inputTransfer9x28 === 0 ){
    inputTransfer9x28 = '';
  }
});

// ///////




 $('.numTransfer9x28').click(function(){

          inputTransfer9x28 += $(this).attr("value");
          // $('.inputTransfer4x28').attr('value', inputTransfer4x28);


          $('.inputTransfer9x28').attr('value', inputTransfer9x28);

           console.log("current Friend 1 imput x28 number is :" + inputTransfer9x28);
           console.log('New Friend1 imput x28 is : ' + inputTransfer9x28);
           
 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);

        
           });




       //backspace button
           $('#backSpaceTransfer9x28').click(function(){

           var getInput = inputTransfer9x28;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer9x28 = newInput;
            $('.inputTransfer9x28').attr('value', inputTransfer9x28);
     
           console.log('New input is : ' + inputTransfer9x28)
            

 userInputx28 =  parseInt(inputTransfer1x28) + parseInt(inputTransfer2x28) + parseInt(inputTransfer3x28) + parseInt(inputTransfer4x28) + parseInt(inputTransfer5x28) + parseInt(inputTransfer6x28) +parseInt(inputTransfer7x28) + parseInt(inputTransfer8x28) + parseInt(inputTransfer9x28);
 $('#qtyvalue2x28').attr('value', userInputx28);




       });

//////////////////





$('.ToogleTransferToSelectx28').click(function(){
    $(this).hide();
    $('.ToogleTransferToColumnx28').show();
});


$('.ToogleTransferToColumnx28').click(function(){
    $(this).hide();
    $('.ToogleTransferToSelectx28').show();
});







$('.ToogleTransferToSelectx28').click(function(){
       
   $('.SelectTransferFromx28, .SelectTransferTox28, .arrowTransferx28').hide();
   $('.TransFromx28, .TransTox28, .arrowTransx28').show();

});




$('.ToogleTransferToColumnx28').click(function(){

   $('.TransFromx28, .TransTox28, .arrowTransx28').hide();
   $('.SelectTransferFromx28, .SelectTransferTox28, .arrowTransferx28').show();
       
});



// ///////change Trans From Option ////////



$('.liTransFrom1x28').click(function(){
console.log("li From 1 was clicked");
   $('.TransferHideFromx28').hide();
   $('.TransferHideFrom1x28').show();
       
});



$('.liTransFrom2x28').click(function(){
console.log("li From 2 was clicked");
   $('.TransferHideFromx28').hide();
   $('.TransferHideFrom2x28').show();
       
});



$('.liTransFrom3x28').click(function(){
console.log("li From 3 was clicked");
   $('.TransferHideFromx28').hide();
   $('.TransferHideFrom3x28').show();
       
});




$('.liTransFrom4x28').click(function(){
console.log("li From 4 was clicked");
   $('.TransferHideFromx28').hide();
   $('.TransferHideFrom4x28').show();
       
});




$('.liTransFrom5x28').click(function(){
console.log("li From 5 was clicked");
   $('.TransferHideFromx28').hide();
   $('.TransferHideFrom5x28').show();
       
});






// ///////change Trans From Option ////////



// ///////change Trans To Option ////////



$('.liTransTo1x28').click(function(){
  console.log('Li To 1 was Clicked');
   $('.TransferHideTox28').hide();
   $('.TransferHideTo1x28').show();
       
});



$('.liTransTo2x28').click(function(){
  console.log('Li To 2 was Clicked');
   $('.TransferHideTox28').hide();
   $('.TransferHideTo2x28').show();
       
});



$('.liTransTo3x28').click(function(){
  console.log('Li To 3 was Clicked');
   $('.TransferHideTox28').hide();
   $('.TransferHideTo3x28').show();
       
});




$('.liTransTo4x28').click(function(){
  console.log('Li To 4 was Clicked');
   $('.TransferHideTox28').hide();
   $('.TransferHideTo4x28').show();
       
});




$('.liTransTo5x28').click(function(){
  console.log('Li To 5 was Clicked');
   $('.TransferHideTox28').hide();
   $('.TransferHideTo5x28').show();
       
});



// ///////change Trans To Option ////////












///////////////////////////////////////////////////
















userInput23x28="";

 $('.numVx28').click(function(){
   userInput23x28 += $(this).attr("value");

  
   $('.qtyvalue23x28').attr('value', userInput23x28);
    console.log("current forrouting number is :" + userInput23x28);
    console.log('New input 23 is : ' + userInput23x28);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex28').click(function(){

    var getInputx28 = userInput23x28;
    var lenx28 = getInputx28.length -1;
    var newInputx28 = getInputx28.substring(0, lenx28);

 
    userInput23x28 = newInputx28;

     $('.qtyvalue23x28').attr('value', userInput23x28);
     
    console.log('New input is : ' + userInput23x28)




});







////////////////////Pay panel show/hide/////////////////////////////////


$('#submit2Yx28').click(function(){

  $('#submit2Yx28, #exit2Yx28').hide();
  $('.confBack2Yx28').show();

if(billDenox28 === true){

  

  $('.billsx28').fadeIn();
  $('.qtyvalue23x28').attr('value', userInput23x28);
  $('.amountInputx28, .NumPadx28').hide();
  console.log('userInputx28 =' + userInput23x28);


}


});



$('#submit2Yx28').click(function(){

  if(serviceValuex28 === 'PayBills'){
    $('.pyx28').fadeIn();
    $('.numVx28, .NumPadx28').hide();

  }

});



$('#submit2Yx28').click(function(){

  if(serviceValuex28 === 'QuickPay'){
    $('.pyx28').fadeIn();
    $('.numVx28, .NumPadx28').hide();

  }

});


$('#submit2Yx28').click(function(){

  if(serviceValuex28 === 'CreditCards'){
    $('.pyx28').fadeIn();
    $('.numVx28, .NumPadx28').hide();

  }

});



$('#submit2Yx28').click(function(){

  if(serviceValuex28 === 'WireTransfer'){
    $('.pyx28').fadeIn();
    $('.numVx28, .NumPadx28').hide();

  }

});








$('.SelectBuyOrSellx28, .SelectSendOrRequestx28').click(function(){

 
    $('.pyx28').fadeIn();
    $('.numVx28, .NumPadx28').hide();



});







// /////////////// back2yx28 /////////////////

$('.back2Yx28').click(function(){

  $('.finBx28').removeClass('active');

if(billDenox28 === true){

$('.billsx28').hide();
$('.amountInputx28, .numVx28').show();

}

  if(serviceValuex28 === 'PayBills' || 'QuickPay' || 'CreditCards' || "Assets"){
       $('.pyx28').fadeOut();
       $('.pyx28 > label').removeClass('active');
       $('.numVx28').show();
       serviceValuex28 === 'PayBills';

}


if(serviceValuex28 === 'Assets'){

    $('.confBack2Yx28').hide();
    $('.SelectBuyOrSellx28').show();
    

}else if(serviceValuex28 === "QuickPay"){
     
     $('.confBack2Yx28').hide();
     $('.SelectSendOrRequestx28').show();

}else if(serviceValuex28 === "WireTransfer"){
     
     $('.confBack2Yx28').hide();
     $('.SelectSendOrRequestx28').show();
          

}else{

   $('.pyx28, .billsx28').hide();

  $('.confBack2Yx28, .NumPadx28').hide();
  $('#submit2Yx28, #exit2Yx28').show();
  $('.LinearNumPadx28, .numVx28').show();

}



});

/////////////////////////////////////////////////////






 userInputx28= "";

$('.confirm2Yx28').click(function(){  

    $('.ServicePanelx28,  .confBack2Yx28').hide();
    $('#submit2Yx28, #exit2Yx28').show();
    $("#inCheckSentx28, #inSavSentx28, #inCheckx28, #inSavx28, #loanAmountx28, #cardPaymentAmountx28, #quickPayAmountx28").attr("value", userInputx28);
    $("#happyCardx28").attr("value", SelectedCardx28);
    $('.depositMOBIx28 ').fadeOut();

   
      userInputx28= "0.00";
      userInput23x28 = '';
      
      $("#qtyvalue2x28").attr('value', userInputx28);
      console.log('.confirm2Yx28userInputx28 =' + userInputx28);


      $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x28').hide();
      $('#savTche, #savTche2x2, #savTche2x3, #savTche2x28').hide();


     $('.pyx28').hide();
     $('.PayButtonsx28 > label').removeClass('active');

     $('.NumPadx28, .billsx28').hide();
     $('.numVx28, .amountInputx28').show();

  $('.serB, .tofB, .sm2x3, .sm2x28, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x28, .acm2x5, .acm2x6, .acm2x7').removeClass('active');



  $('.MainTransferx5').hide();
  $('.acm2Buttonsx1, .acm2Buttonsx5, .acm2Buttonsx7').show();

  $('#Scan2Yx28').hide();

  $('.finBx28').removeClass('active');



 
if(serviceValuex28 === "Withdraw" && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);
     $('.retrievex28').fadeIn('');

}else if(serviceValuex28 === 'Transfer' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);
     $('.tranToCheckingx28').fadeIn('');



}else if(serviceValuex28 === 'Assets' && userInputx28 !== ""){

      console.log('service value is: ' + serviceValuex28);
      $('.BuyThanksx28').fadeIn('');



}else if(serviceValuex28 === 'Assets' && userInputx28 !== ""){

      console.log('service value is: ' + serviceValuex28);
      $('.BuyThanksx28').fadeIn('');


}else if(serviceValuex28 === 'Transfers' && userInputx28 !== ""){

      console.log('service value is: ' + serviceValuex28);
      $('.tranToCheckingx28').fadeIn('');


}else if(serviceValuex28 === 'Loan' &&  userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);
     $('.LoanGrantedx28').fadeIn('');         


}else if(serviceValuex28 === 'ScanATM' && userInputx28 !== ''){

     console.log("Service value is = " + serviceValuex28);          
     $('.retrievex28').fadeIn();


}else if(serviceValuex28 === 'Credit' && userInputx28 !== ""){
  
     console.log("Service value is = " + serviceValuex28);
     $('.CardPaymentx28').fadeIn('');    


}else if(serviceValuex28 === 'QuickPay' && userInputx28 !== ""){
   
     console.log("Service value is = " + serviceValuex28);      
     $('.QuickSentx28').fadeIn('slow');


}else if(serviceValuex28 === 'Merchant' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);   
     $('.MerchCardChargedx28').fadeIn('');


}else if(serviceValuex28 === 'WireTransfer' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);   
     $('.WrTransferSentx28').fadeIn('');


}else if(serviceValuex28 === 'PayBills' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);     
     $('.BillPaySentx28').fadeIn('');


}else if(serviceValuex28 === 'ChangePin' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);     
     $('.OkChangePinx28').fadeIn('');


}else if(serviceValuex28 === 'CreditCards' && userInputx28 !== ""){

     console.log('service value is: ' + serviceValuex28);     
     $('.CardPaymentx28').fadeIn('');

}else{

     $('.selectt').fadeIn('');
     console.log("Please select a service and an account for your transaction");
     console.log('service value is: ' + serviceValuex28);
     console.log('tof value is: ' + tofValuex28);

}



      userInputx28= "0.00";
      $("#qtyvalue2x28").attr('value', userInputx28);
      console.log('.confirm2Yx28userInputx28 =' + userInputx28);
    

    
});











//for deposits display the prompting pop-up as soon as the customer selects the saving or checking account

   $('#cash2x28, #withdraw2x28, #checks2x28').click(function(){
      $('#checking2x28, #saving2x28').removeClass('active');

      });



   $('#checking2x28, #saving2x28').click(function(){

     if (serviceValuex28 === $('#cash2x28').attr("value")){
      $('.depositCashx28').fadeIn('fast');

  


     }else if

     (serviceValuex28 === $('#checks2x28').attr("value")){
      $('.depositCheckx28').fadeIn('fast');

     }

   });


     









 $('.CardPaymentx28, .checkCashSentx28, .tranToSavingsx28, .tranToCheckingx28, .retrievex28, .GoodByex28, .LoanGrantedx28, .depositCashx28, .QuickSentx28').click(function(){
  $(this).fadeOut('fast');


});








///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox28').removeClass('active');
//        $('#receiptYes, #receiptNox28').click(function(){

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




// $('#closeSendx28').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x28').hide();
//   $('.numCCx28').hide();
//   $('.numRx28').hide();
//   $('.numVx28').show();

// })

// $('#closeSend2x28').click(function(){
//   $('.sendMoney3x28').hide();
// })




// $('#deposx28, #deposx282, #wdraw1x28, #wdraw2x28, #sendx, #sendx28').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });






$('.serB, .sm2x2, .sm2x3, .sm2x28, .sm2x5, .sm2x6, .sm2x7').click(function(){


   $('#Scan2Yx28').hide();
   $('#submit2Yx28').fadeIn();


});



$('.serB, .sm2x2, .tofB, .sm2x3, .sm2x28, .sm2x5, .sm2x6, .sm2x7, .financialModelx28').click(function(){





   $('#savTche, #savTche2x2, #savTche2x3, #savTche2x28').hide();
   $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x28, .MainTransferx5').hide();

   $('.acm2Buttonsx5, .acm2Buttonsx7').show();

   $('#saving2, #saving33, #savingx28').removeClass('active');
   $('#checking2, #checking33, #checkingx28').removeClass('active');

   $('.TransferHideFromx28').removeClass('MainTransferHideFromx28');
   $('.TransferHideTox28').removeClass('MainTransferHideTox28');
  
});






$('#Withdraw4x1, #Withdraw4x2, #Withdraw4x3, #Withdraw4x28, #Withdraw4x5, #Withdraw4x6, #Withdraw4x7, #BILLDEx28').click(function(){

  serviceValuex28="Withdraw";
  console.log('4Withdrawx28 clicked');
  $('#Scan2Yx28').hide();
  $('#submit2Yx28').show();




});



$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx28, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx28').click(function(){


  serviceValuex28="Withdraw";
  console.log('ScanWithdrawx28 clicked');
  $('#Scan2Yx28').show();
  $('#submit2Yx28').hide();

});







   $('#transfer4x2, #transfer2').click(function(){   
     serviceValuex28 ='Transfer';
   });




$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x28').click(function(){

  $('#savTche, #savTche2x2, #savTche2x3, #savTche2x28, .acm2Buttonsx1, .acm2Buttonsx5, .acm2Buttonsx7, .MainTransferx5').hide();
  serviceValuex28 = "Transfer";
  tofValuex28 = "waived";
  $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x28, #cheTsav2x5').show();
  console.log('servicevalue is : '+ serviceValuex28);
  $('#checking2, #checking33, #checkingx28').addClass('active');
  $('#saving2, #saving33, #savingx28').removeClass('active');

  $('.TransferHideFromx28').addClass('MainTransferHideFromx28');
  $('.TransferHideTox28').addClass('MainTransferHideTox28');



});


$('#Transfer4x1, #Transfer4x5, #Transfer4x7, #Transfer4x28').click(function(){

  $('.acm2Buttonsx1, .acm2Buttonsx5, .acm2Buttonsx7').hide();
  $('.MainTransferx5').show();


$('.TransferHideFromx28').addClass('MainTransferHideFromx28');
$('.TransferHideTox28').addClass('MainTransferHideTox28');

});







   $('#checking2, #transx28, #checking33, #checkingx28').click(function(){

    tofValuex28 = 'checking';
     if(serviceValuex28 === 'Transfer'){
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x28').show('');
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x28').hide();

          console.log('transfer from checking');
          console.log(serviceValuex28);
  

            }


    }); 





      
   $('#saving2, #trans2x28, #saving33, #savingx28, #transfer2').click(function(){
    tofValuex28 = 'savings';
      if(serviceValuex28 ==='Transfer'){

      
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x28').hide();
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x28').show();

          console.log('transfer from savings');
          console.log(serviceValuex28);
        
        }


      });





// $('.ScanWithdrawx28').click(function(){

//   serviceValuex28="Withdraw";
//   console.log('ScanWithdrawx28 clicked');

//     $('#submit2Yx28').hide();
//     $('#Scan2Yx28').fadeIn();

// });






// $('.Withdraw4x28').click(function(){

//   if (screenTypex28 = 'Mobilex28'){
//   console.log('ScanWithdrawx28 clicked');

//     $('#submit2Yx28').hide();
//     $('#Scan2Yx28').fadeIn();

// }else if (screenTypex28 = 'Machinex28'){
//   console.log('ScanWithdrawx28 clicked');

//     $('#submit2Yx28').show();
//     $('#Scan2Yx28').hide();


// }


// });







$('.tofB, .acm2x3, .acm2x28, .acm2x5, .acm2x6, .acm2x7').click(function(){

  if (serviceValuex28 === 'Deposit'){

    $('.depositx28').fadeIn();
    console.log('Depositx28 faddeIn');
  }

});







$('#Deposit4x2, #Deposit42').click(function(){

  serviceValuex28 = 'Deposit'
  $('.depositx28').fadeIn();
  console.log('Depositx28 faddeIn');

});






// });


$('.depositx28').click(function(){
  $(this).fadeOut();
  });



$('#deposx28, #deposx282, #transferx28, #sendx, #sendFromCheckingsx28, #sendx28, #trans2x28, #cash2, #withdraw2, #checks2, #transfer, #payticket, #Live').click(function(){
  $('.billsx28').hide();
  $('.numVx28, #amountx28, #qtyvalue2x28').show();
  $('.confBack2Yx28').hide();
  $('#submit2Yx28, #exit2Yx28').show();

  // if(serviceValuex28 !== "withdraw"){

  //  // $('.Confirm2Yx28').Show();
  // }



});

////////////////////////////////////////////

 $('.lan2x28, #qty2x28, .fin2x28, #deposx28, #wdraw1x28, #checking33, #transferx28, #wdraw2x28, #trans2x28, #send, #trans2x28, #sendx28').click(function(){
      $('.serDropx28').hide();
  })




  console.log('Service menu was clicked');



$('.lan2x28, .qty2x28, .fin2x28').click(function(){

$('.serDropx28').hide();

});


 





$('.NumPadx28').click(function(){

// feeparsseInputx28 = Number(userInputx28);
// feeInputx28 = feeparsseInputx28 / 2;
feeInputx28 = "$3.12";

console.log('Fee input is =' + feeInputx28);
console.log('feeinput is typeof = ' + typeof('feeInputx28'));

   $('.feeInputx28').attr('value', feeInputx28);

});




$('#PinChangex28, .serBother, #ServiceMenu, .ServiceMenux28, #ServiceMenux3, #ServiceMenux28, #ServiceMenux5, #ServiceMenux6, #ServiceMenux7').click(function(){

  $('.feesx28').hide();

});




$('#closeSer2Panelsx28, .serDropx28 ').click(function(){

  $('.feesx28').show();



  
});







  $('#PinChangex28').click(function(){

     $('.feesx28').addClass('pinChangefeesx28');

  });


$('#closeSer2Panelsx28, .confirm2Yx28, OperationEndedPanelx28').click(function(){

$('.feesx28').removeClass('pinChangefeesx28');

});











///////////////////////////////////Submit2Yx28/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// $('#english2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);
//   $('#cash2x28').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
//   $('#withdraw2x28').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
//   $('#checks2x28').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


//     ///////////////

//   $('#checking33').html('CHECKING<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('SAVINGS <br><span>Balance: $1,200.00</span>');


//   $('#deposx28, #deposx').html('<input type="radio" name="lan"> Deposit');
//   $('#wdraw1x28, #wdraw2x28x2').html('<input type="radio" name="lan"> Withdraw');
//   $('#transferx28, #trans2x28').html('<input type="radio" name="lan"> Transfer');
//   $('#sendx, #sendx28').text('Send Money');



//   //////////////
  
  
 
//   $('#amountx28').text('$');
//   $('#qtyvalue2x28').attr('value', userInputx28);


//     $('#submit2x28').html('SUBMIT');

//     $('#exit2x28').html('EXIT');


//     $('#submit2Yx28').html('SUBMIT');

//     $('#exit2Yx28').html('EXIT');

//   $('.confirm2x28').html('<h2><b>Confirm</b></h2>');
//   $('.back2x28').html('<h2><b>Back</b></h2>');

// $('.confirm2Yx28').html('<h2><b>Confirm</b></h2>');
//   $('.back2Yx28').html('<h2><b>Back</b></h2>');




//   $('#casdex28').html('<b> Please Insert your Cash Deposit</b>');

//   $('#casde2x28').html('<b> Please Insert your Deposit</b>');


//   $('#billsx28').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);

//   $('#retrx28').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

//   $('#chedex28').html('<b> Please Insert your Check Deposit now</b>');

//   $('#cancelx28').text('(Tap to Cancel)');
//   $('#cancel2x28').text('(Tap to Cancel)');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
//   $('#sfcaCancelx28').text('( Tap to Close)');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
//   $('#sfsaCancelx28').text('( Tap to Close)');



//     $('#gbyx28').html('<b>Good Bye</b>');
//     $('#nrepx28').text('Need a Receipt');
//     $('#receiptYesx28').text('YES');
//     $('#receiptNox28').text('NO');
//     $('#exBackx28').html('<b>Go Back</b>'); 


//      $('#stcx28').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
//      $('#stcXx28').text('( Tap to Close)');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
//    $('#ctsXx28').text('Tap to Close');


//      $('#oopsx28').html('<h1><b>Oops</b></h1>');



//   $('#machinex28').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

//   $('#limitx28').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');
// });




// $('#spanish2x28').click(function(){

//   userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);

// $('#cash2x28').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
//   $('#checks2x28').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
//   ///////////////

//   $('#checking33').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('AHORROS <br><span>Balance: $1,200.00</span>');


//   $('#deposx28, #deposx282x28').html('<input type="radio" name="lan">Depositar');
//   $('#wdraw1x28, #wdraw2x28').html('<input type="radio" name="lan">Retirar');
//   $('#transferx28, #trans2x28').html('<input type="radio" name="lan">Transferir');
//   $('#sendx, #sendx28').text('Enviar Dinero');







//   //////////////
  



 
//   $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);

  
  

//   $('#submit2x28').html('SOMETER');

//   $('#exit2x28').html('SALIR');


//   $('#submit2Yx28').html('SOMETER');

//   $('#exit2Yx28').html('SALIR');

//   $('.confirm2x28').html('<h2><b>Confirmar</b></h2>');
//   $('.back2x28').html('<h2><b>Atras</b></h2>');

//   $('.confirm2Yx28').html('<h2><b>Confirmar</b></h2>');
//   $('.back2Yx28').html('<h2><b>Atras</b></h2>');


//   $('#casdex28').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

//   $('#casde2x28').html('<b> Favor Inserte su Deposito Ahora</b>');



 
//   $('#billsx28').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);


//  $('#retrx28').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

//  $('#chedex28').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

//  $('#cancelx28').text('(Toque para Cerrar)');
//  $('#cancel2x28').text('(Toque para Cancelar)');


// $('#sfcax28').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
// $('#sfcaCancelx28').text('( Toca para cerrar )');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
//   $('#sfsaCancelx28').text('( Toca para cerrar)');



//     $('#gbyx28').html('<b>Hasta Luego</b>');
//     $('#nrepx28').text('Necesita Recibo?');
//     $('#receiptYesx28').text('SI');
//     $('#receiptNox28').text('NO');
//     $('#exBackx28').html('<b>Volver Atras</b>'); 


//   $('#stcx28').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
//   $('#stcXx28').text('( Toca para cerrar)');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
//    $('#ctsXx28').text('Toca para cerrar');

//   $('#oopsx28').html('<h1><b>Ohoh</b></h1>'); 



//   $('#machinex28').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

//   $('#limitx28').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');


//   });






// $('#chinesse2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);
// $('#cash2x28').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



//     ///////////////

//   $('#checking33').html('檢查 <br><span>天平: $2,200.00</span>');
//   $('#saving33').html(' 儲蓄<br><span>天平: $1,200.00</span>');


//   $('#deposx28, #deposx282x28').html('<input type="radio" name="lan">存入現金');
//   $('#wdraw1x28, #wdraw2x28').html('<input type="radio" name="lan"> 刪除');
//   $('#transferx28, #trans2x28').html('<input type="radio" name="lan">刪除');
//   $('#sendx, #sendx28').text('刪現金');



//   //////////////


// console.log('A Language Button clicked');

  
 
//   $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);
  

//   $('#submit2x28').html('提交');

//   $('#exit2x28').html('取消');

//   $('#submit2Yx28').html('提交');

//   $('#exit2Yx28').html('取消');


//   $('.confirm2x28').html('<h2><b>確認</b></h2>');
//   $('.back2x28').html('<h2><b>返回</b></h2>');

//   $('.confirm2Yx28').html('<h2><b>確認</b></h2>');
//   $('.back2Yx28').html('<h2><b>返回</b></h2>');



//   $('#casdex28').html('<b> 請插入您的現金存款</b>');

//   $('#casde2x28').html('<b> 請插入您的現金存款</b>');


  
//   $('#billsx28').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);

//   $('#retrx28').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

//   $('#chedex28').html('<b> 租賃現在插入您的支票存款</b>');

//   $('#cancelx28').text('（點擊取消）');
//   $('#cancel2x28').text('（點擊取消）');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
//   $('#sfcaCancelx28').text('（點擊關閉）');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
//   $('#sfsaCancelx28').text('（點擊關閉）');



//     $('#gbyx28').html('<b>再見</b>');
//     $('#nrepx28').text('需要收據？');
//     $('#receiptYesx28').text('是的');
//     $('#receiptNox28').text('沒有');
//     $('#exBackx28').html('<b>回去</b>'); 


//      $('#stcx28').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
//      $('#stcXx28').text('（點擊關閉）');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
//    $('#ctsXx28').text('（點擊關閉）');


//      $('#oopsx28').html('<h1><b>哎呀</b></h1>');



//   $('#machinex28').html('<b> 本機只能發送賬單：</b></h2><br>'); 

//   $('#limitx28').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

//   });







// $('#russian2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);

// $('#cash2x28').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


//  $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
//   $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


//    ///////////////

//   $('#checking33').html('Проверки <br><span>Баланс: $2,200.00</span>');
//   $('#saving33').html('Экономия<br><span>Баланс: $1,200.00</span>');


//   $('#deposx28, #deposx282').html('<input type="radio" name="lan">денежных');
//   $('#wdraw1x28, #wdraw2x28').html('<input type="radio" name="lan">Удалить');
//   $('#transferx28, #trans2x28').html('<input type="radio" name="lan">средств');
//   $('#sendx, #sendx28').text('денежных');

// console.log('A Language Button clicked');

//   //////////////
  
  
//   $('#amountx28').text('$');
//   $('#qtyvalue2x28').attr('value', userInputx28);



//   $('#submit2x28').html('Отправить');

//   $('#exit2x28').html('Отмена');

//   $('#submit2Yx28').html('Отправить');

//   $('#exit2Yx28').html('Отмена');



//   $('.confirm2x28').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2x28').html('<h2><b> Назад</b></h2>');

//   $('.confirm2Yx28').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2Yx28').html('<h2><b> Назад</b></h2>');


//   $('#casdex28').html('<b> Пожалуйста, введите свой денежный депозит </b>');
//   $('#casde2x28').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
//   $('#billsx28').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);


//   $('#retrx28').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

//   $('#chedex28').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

//   $('#cancelx28').text('(Нажмите, чтобы отменить)');
//   $('#cancel2x28').text('(Нажмите, чтобы отменить)');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
//   $('#sfcaCancelx28').text('(Нажмите, чтобы закрыть)');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
//   $('#sfsaCancelx28').text('(Нажмите, чтобы закрыть)');



//     $('#gbyx28').html('<b> До свидания</b>');
//     $('#nrepx28').text('Нужна квитанция?');
//     $('#receiptYesx28').text(' ДА');
//     $('#receiptNox28').text(' НЕТ');
//     $('#exBackx28').html('<b>Вернуться</b>'); 



//      $('#stcx28').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
//      $('#stcXx28').text('(Нажмите, чтобы закрыть)');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
//    $('#ctsXx28').text('(Нажмите, чтобы закрыть)');


//      $('#oopsx28').html('<h1><b>К сожалению</b></h1>');



//   $('#machinex28').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

//   $('#limitx28').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




//   });





// $('#german2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);
// $('#cash2x28').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

//   $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);
  
  

//   $('#submit2x28').html(' Senden ');

//   $('#exit2x28').html(' Abbrechen ');

//   $('#submit2Yx28').html(' Senden ');

//   $('#exit2Yx28').html(' Abbrechen ');

//   $('.confirm2x28').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2x28').html('<h2><b> Zurück</b></h2>');


//   $('.confirm2Yx28').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2Yx28').html('<h2><b> Zurück</b></h2>');




//   $('#casdex28').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
//   $('#casde2x28').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


//   $('#billsx28').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);

// $('#retrx28').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

//   $('#chedex28').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

//   $('#cancelx28').text('(Tippen Sie auf Abbrechen)');
//   $('#cancel2x28').text('(Tippen Sie auf Abbrechen)');

 


//  $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
//   $('#sfcaCancelx28').text('(Tippen Sie auf Schließen)');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
//   $('#sfsaCancelx28').text('(Tippen Sie auf Schließen)');



//     $('#gbyx28').html('<b> Auf Wiedersehen</b>');
//     $('#nrepx28').text('Benötigen Sie einen Beleg?');
//     $('#receiptYesx28').text(' JA');
//     $('#receiptNox28').text(' NEIN');
//     $('#exBackx28').html('<b>Zurück</b>'); 





//      $('#stcx28').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
//      $('#stcXx28').text('(Tippen Sie auf Schließen)');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
//    $('#ctsXx28').text('(Tippen Sie auf Schließen)');


//      $('#oopsx28').html('<h1><b> Hoppla</b></h1>');


//   $('#machinex28').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

//   $('#limitx28').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


// });




// $('#hindi2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);
// $('#cash2x28').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

//   $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
//   $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);
  
  

//   $('#submit2x28').html(' जमा करें ');

//   $('#exit2x28').html(' रद्द ');

//   $('#submit2Yx28').html(' जमा करें ');

//   $('#exit2Yx28').html(' रद्द ');


//   $('.confirm2x28').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2x28').html('<h2><b> वापस</b></h2>');

//   $('.confirm2Yx28').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx28').html('<h2><b> वापस</b></h2>');




//   $('#casdex28').html('<b> कृपया अपना नकद जमा डालें</b>');
//   $('#casde2x28').html('<b> कृपया अपना नकद जमा डालें</b>');


//   $('#billsx28').text('');
//   $('#billsx28').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);

//   $('#retrx28').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

//   $('#chedex28').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



// $('#cancelx28').text('(रद्द करने के लिए टैप करें)');
//   $('#cancel2x28').text('(रद्द करने के लिए टैप करें)');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
//   $('#sfcaCancelx28').text('(बंद करने के लिए टैप करें)');

//   $('#sfsax28').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
//   $('#sfsaCancelx28').text('(बंद करने के लिए टैप करें)');




//     $('#gbyx28').html('<b>अच्छा अलविदा</b>');
//     $('#nrepx28').text('रसीद की आवश्यकता है?');
//     $('#receiptYesx28').text('हाँ');
//     $('#receiptNox28').text('नहीं');
//     $('#exBackx28').html('<b> वापस जाओ</b>'); 


//      $('#stcx28').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
//      $('#stcXx28').text('(बंद करने के लिए टैप करें)');

//    $('#ctsx28').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
//    $('#ctsXx28').text('(बंद करने के लिए टैप करें)');


//      $('#oopsx28').html('<h1><b> ओह्स</b></h1>');



//   $('#machinex28').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

//   $('#limitx28').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







//   });



// $('#french2x28').click(function(){
  
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);

// $('#cash2x28').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

//    $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);
  
  

//   $('#submit2x28').html(' Soumettre ');

//   $('#exit2x28').html(' Annuler ');

//   $('#submit2Yx28').html(' Soumettre ');

//   $('#exit2Yx28').html(' Annuler ');


//   $('.confirm2x28').html('<h2><b> Confirmer</b></h2>');
//   $('.back2x28').html('<h2><b> Retour</b></h2>');

//   $('.confirm2Yx28').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx28').html('<h2><b> वापस</b></h2>');



//   $('#casdex28').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
//   $('#casde2x28').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

//   $('#billsx28').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);

//   $('#retrx28').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

//   $('#chedex28').html('<b>  location Insérez votre chèque de caution maintenant</b>');

//   $('#cancelx28').text('(Appuyer pour annuler)');
//   $('#cancel2x28').text('(Appuyer pour annuler)');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
//   $('#sfcaCancelx28').text('(Appuyez pour fermer)');


//   $('#sfsax28').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
//   $('#sfsaCancelx28').text('(Appuyez pour fermer)');



//     $('#gbyx28').html('<b> Au Revoir</b>');
//     $('#nrepx28').text("Besoin d'un reçu?");
//     $('#receiptYesx28').text(' OUI');
//     $('#receiptNox28').text(' NON');
//     $('#exBackx28').html('<b> Retour</b>'); 


//      $('#stcx28').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
//      $('#stcXx28').text('(Appuyer pour fermer)');



//    $('#ctsx28').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
//    $('#ctsXx28').text('(Appuyez pour fermer)');


//      $('#oopsx28').html('<h1><b> Oups</b></h1>');



//   $('#machinex28').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

//   $('#limitx28').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

//   });





// $('#arabic2x28').click(function(){
// userInputx28 = '0.00';
// $('#qtyvalue2x28').attr('value', userInputx28);
// $('#cash2x28').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

//   $('#withdraw2x28').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
//   $('#checks2x28').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

//    $('#amountx28').text('$');
//    $('#qtyvalue2x28').attr('value', userInputx28);
  

//   $('#submit2x28').html(' إرسال ');
//   $('#exit2x28').html(' الغاء ');

//   $('#submit2Yx28').html(' إرسال ');
//   $('#exit2Yx28').html(' الغاء ');




//   $('.confirm2x28').html('<h2><b> تأكيد </b></h2>');
//   $('.back2x28').html('<h2><b> العودة</b></h2>');

//   $('.confirm2Yx28').html('<h2><b> تأكيد </b></h2>');
//   $('.back2Yx28').html('<h2><b> العودة</b></h2>');





//   $('#casdex28').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
//   $('#casde2x28').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


//   $('#billsx28').text(' ');
//   $('#billsx28').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
//   $('#qtyvalue2x28').attr('value', userInputx28);


//   $('#retrx28').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

//   $('#chedex28').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

//   $('#cancelx28').text('(الحنفية لإلغاء)');
//   $('#cancel2x28').text('(الحنفية لإلغاء)');

//   $('#sfcax28').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
//   $('#sfcaCancelx28').text('(انقر لإغلاق)');


// $('#sfsax28').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
//   $('#sfsaCancelx28').text('(انقر لإغلاق)');



//     $('#gbyx28').html('<b> وداعا</b>');
//     $('#nrepx28').text('تحتاج إلى استلام؟');
//     $('#receiptYesx28').text(' نعم');
//     $('#receiptNox28').text(' لا');
//     $('#exBackx28').html('<b> العودة</b>'); 


//      $('#stcx28').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
//      $('#stcXx28').text('(الحنفية لإغلاق)');



//    $('#ctsx28').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
//    $('#ctsXx28').text('(الحنفية لإغلاق)');


//      $('#oopsx28').html('<h1><b>عفوا</b></h1>');



//   $('#machinex28').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

//   $('#limitx28').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

// console.log('A Language Button clicked');


//   });



$('.OperationEndedPanelx28').click(function(){
  
  $(this).fadeOut();
  userInputx28 = '';
  userInputx28 = '0.00';
  $('#qtyvalue2x28').attr('value', userInputx28);

  console.log('User input is = ' + userInputx28)
 
 $('#cheTsav2x28').hide();
 $('#savTche2x28').hide();

  $('#checking33').removeClass('active');
  $('#saving33').removeClass('active');
  $('#deposx28, #deposx282').removeClass('active');
  $('#wdraw1x28, #wdraw2x28').removeClass('active');
  $('#transferx28, #trans2x28').removeClass('active');
  $('#sendx, #sendx28').removeClass('active');
  $('#ServiceMenux28').removeClass('active');

  $('.serB, .tofB, .sm2x3, .sm2x28, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.tofB, .acm2x2, .acm2x3, .acm2x28, .acm2x5, .acm2x6, .acm2x7').removeClass('active');

serviceValuex28 = '';   

     $('.pyx28').fadeOut();
     $('.PayButtonsx28 > label').removeClass('active');







});


$('#ScanBILLDEx28').click(function(){
   $('.BillDenominationWdrawx28').fadeIn();
});




$('#Scan2Yx28').click(function(){
$(this).hide();

$('#submit2Yx28, #exit2Yx28, .NumPadx28').hide();
$('.pyx28').fadeIn();

$('.ScanconfBack2Yx28').show();

$('.ScanMachinex28').show();

});




$('.Scanback2Yx28').click(function(){

  $('.ScanMachinex28, .ScanconfBack2Yx28, .pyx28').hide();
  $('#Scan2Yx28, #exit2Yx28, .numVx28').fadeIn();
   
});


$('.Scanconfirm2Yx28').click(function(){

  userInputx28 = '0.00';
  $('#qtyvalue2x28').attr('value', userInputx28);

  $('.serB, .tofB, .sm2x3, .sm2x28, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x28, .acm2x5, .acm2x6, .acm2x7').removeClass('active');


  $('.ScanMachinex28, .ScanconfBack2Yx28, .pyx28, .ServicePanelx28').hide();
  $('#submit2Yx28, #exit2Yx28, .numVx28').show();

  $('.retrievex28').fadeIn();

});









$('#BSassetsx28').click(function(){
   $('#submit2Yx28').hide();
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


