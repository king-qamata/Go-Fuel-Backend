

$(document).ready(function(){










$('.ATMMenux4, .Menux4, .TapMenux4').click(function(){

  $('.AccountsXX').toggleClass('AccountOverflowHidx4');

});










 $('.ServiceMenux4').click(function(){


    $('.serDropx4').show('fast').click(function(){
      $(this).hide('fast');
    });

      userInputx4='0.00';
         $('.qtyvalue2x4').attr('value', userInputx4);

         serviceValuex4 = "nole";

         $('.priBtnXX').removeClass('active');
 });


   

$('.HideTHx4, .serDropx4 > button, #Send4x24, .QuickPay4x4, #QuickPayx3, #CreditCx6, #PayBx6, #QuickPay2x6').click(function(){
  $('.TopHalf').hide();

});







$('.exit2Yx4').click(function(){



  console.log('Exit2yx4 was clicked and screenTypex4 = ' + screenTypex4);


if(screenTypex4 === "Mobilex4"){
  console.log('exitx4Y button was clicked');
    console.log('Exit2yx4 was clicked and screenTypex4 = ' + screenTypex4); 
       $('.goodbyeMOBIx4').fadeIn('fast');
       $('#receiptYesMOBIx4, #receiptNoMOBIx4').removeClass('active');
       $('.ServicePanelx4').hide();
       serviceValuex4 = '';
       userInputx4='0.00';
       $('.qtyvalue2x4').attr('value', userInputx4);

}else{
  
  console.log('exitx4Y button was clicked');
     console.log('Exit2yx4 was clicked and screenTypex4 = ' + screenTypex4);
       $('.goodbyex4').fadeIn('fast');
       $('#receiptYesx4, #receiptNox4').removeClass('active');
       $('.ServicePanelx4').hide();
       serviceValuex4 = '';
         userInputx4='0.00';
         $('.qtyvalue2x4').attr('value', userInputx4);

}





  $('.AllAccountsx4, .AllAccountsx24').show(); 

$('.DenominatedBillsx4').removeClass('active');


     $('.pyx4').hide();
     $('.PayButtonsx4 > label').removeClass('active');


$('.SelectSendOrRequestx4, .SelectBuyOrSellx4, .SelectChargeOrRefundx4, .Depositbillsx4, .DepositChecksx4').hide();

  $('#cheTsav2x4, #savTche2x4').hide();
  $('.confBack2Yx4, .MainTransferx5, .SendMoney222x4, .SendMoney333x4').hide();
  $('.submit2Yx4, .exit2Yx4').show(); 

$('.ServicePanelx4').fadeOut();

  $('.NumPadx4').hide();
  $('.numVx4').show();
  $('.Scan2Yx4').hide();

$('.finBx4, .priBtnXX').removeClass('active');

   $('#qtyvalueDenox4, #qtyvalueCardx4, #qtyvalueQPayx4').hide();

         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);

         $('.qtyvalue2x4').show();


         $('#DenoImput10Labelx4 > input').attr('value','0');
         $('#DenoImput20Labelx4 > input').attr('value','0');
         $('#DenoImput50Labelx4 > input').attr('value','0');
         $('#DenoImput100Labelx4 > input').attr('value', '0');

          DenoImput10x4='';
          DenoImput20x4='';
          DenoImput50x4='';
          DenoImput100x4='';


     $('.ExtraAcm2MOBIxx').show();
  
 






});
















$('#receiptYesMOBIx4').click(function(){
  

   serviceValuex4 = '';
   $('.goodbyeMOBIx4').fadeOut('');
   $('.priBtnXX').removeClass('active');
   userInputx4='0.00';
   $('.qtyvalue2x4').attr('value', userInputx4);

   $('.MainTransferx5, .SendMoney222x4, .SendMoney333x4').hide();
 
   $('.ui2x4').fadeOut('6000');
   $('.ui2x4, .AllAccountsx4, .AllAccountsx24').fadeIn('6000');




});




$('#receiptNoMOBIx4').click(function(){
  
 $('.goodbyeMOBIx4').fadeOut('');
   

});






$('.Networth, .NetworthMOBI').click(function(){

  $('.AllNetworthx4').fadeIn('').click(function(){
     $(this).hide();
  });

})


$('.Netx1').click(function(){
  $('.Networth').hide();
  $('.Netx2').show();

});


$('.Netx2').click(function(){
  $('.Networth').hide();
  $('.Netx3').show();

});



$('.Netx3').click(function(){
  $('.Networth').hide();
  $('.Netx4').show();

});



$('.Netx4').click(function(){
  $('.Networth').hide();
  $('.Netx5').show();

});



$('.Netx5').click(function(){
  $('.Networth').hide();
  $('.Netx6').show();

});



$('.Netx6').click(function(){
  $('.Networth').hide();
  $('.Netx7').show();

});



$('.Netx7').click(function(){
  $('.Networth').hide();
  $('.Netx8').show();

});



$('.Netx8').click(function(){
  $('.Networth').hide();
  $('.Netx9').show();

});




$('.Netx9').click(function(){
  $('.Networth').hide();
  $('.Netx10').show();

});



$('.Netx10').click(function(){
  $('.Networth').hide();
  $('.Netx1').show();

});






// ///////Show different models///////////


// $('.Model1x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.Serm').show('');
// });



// $('.Model2x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x2').show('');
// });




// $('.Model3x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x3').show('');
// });



// $('.Model4x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x4').show('');
// });



// $('.Model5x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x5').show('');
// });




// $('.Model6x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x6').show('');
// });




// $('.Model7x4').click(function(){

//   $('.Modelsx4, .Serm, serm2x2, serm2x3, .serm2x4').hide('');
//   $('.serm2x7').show('');
// });








/////////Service Values////////////
/////////Service Values////////////



$('.Withdraw4x4, #Withdraw4x1, #Withdraw4x2, #Withdraw4x3, #Withdraw4x4, #Withdraw4x5, #Withdraw4x6, #Withdraw4x7, #Withdraw4x24, #Withdraw4x25').click(function(){
   serviceValuex4 = 'Withdraw';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});


$('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx4, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx4, #ScanWithdrawx24, #ScanWithdrawx25').click(function(){
   serviceValuex4 = 'ScanWithdraw';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});



$('#Deposit4x1, #Deposit4x2, #Deposit4x3, .Deposit4x4, #Deposit4x4, #Deposit4x5, #Deposit4x6, #Deposit4x7, #Deposit4x24, #Deposit4x25').click(function(){
   serviceValuex4 = 'Deposit';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});



$('#Transfer4x1, #Transfer4x2, #Transfer4x3, .Transfer, #Transfer4x4, #Transfer4x5, #Transfer4x6, #Transfer4x7, #Transfer4x24, #Transfer4x25').click(function(){
   serviceValuex4 = 'Transfer';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});



$('#Sell4x1, #Sell4x2, #Sell4x3, #Sell4x4, #Sell4x5, #Sell4x6, #Sell4x7, #Trade4x5, #Trade4x4, #Trade4x24, #Trade4x25, .Trade4x4').click(function(){
   serviceValuex4 = 'Assets';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});



$('#Buy4x1, #Buy4x2, #Buy4x3, #Buy4x4, #Buy4x5, #Buy4x6, #Buy4x7, #Trade4x5, #Trade4x4, #Trade4x24, #Trade4x25, .Trade4x4').click(function(){
   serviceValuex4 = 'Assets';
   console.log('service value is: ' + serviceValuex4);
   userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);
});




$('.sm2x2').click(function(){

   $('.sm2x2').removeClass('SelectedSm2x2');
   $(this).addClass('SelectedSm2x2');

});




$('#Trade4x4, #Trade4x5, #Trade4x24, #Trade4x25, .Trade4x4').click(function(){

$('.submit2Yx4, .exit2Yx4, .SelectSendOrRequestx4').hide();
$('.SelectBuyOrSellx4').show();

});


/////////Service Values////////////
/////////Service Values////////////




// //////////////////////////////////// all inputs ////////////////////////////////////////////
// //////////////////////////////////// all inputs ////////////////////////////////////////////



AllInputsx4 = 0;










// //////////////////////////////////// all inputs ////////////////////////////////////////////
// //////////////////////////////////// all inputs ////////////////////////////////////////////








  $('#receiptYesx4, #receiptNox4').click(function(){
     console.log('Receipt Yes or NO was Clicked');


  $('.sendMoney11x4, .sendMoney2x4, .CreditCardsx4, .assistancex4, .Loanx4').hide();
             $('#billDenox4 ,#noBillDenox4').removeClass('active');

       
             $('.confBack2Yx4').hide();
             $('.billsx4').hide();
             $('.numVx4, #amountx4, .qtyvalue2x4').show();
             $('.submit2Yx4, .exit2Yx4').show();
             $('#wdraw1x4, #wdraw2x4, #transferx4, #trans2x4').removeClass('hili');

                  $('.goodbyex4').hide();
                     serviceValuex4='';
                     tofValuex4='waived';
                     userInputx4='0.00';
                  $('.qtyvalue2x4').attr('value', userInputx4);
       
                   $('#cheTsavx4, #cheTsav2x4').hide();
                   $('#savTche, #savTche2').hide();
                   $('#toSaving').hide();
                   $('#toChecking').hide();
                   $('.ui2x4').hide().fadeIn('10000');

      });


    


    $('.back24x4, .confirm24x4').click(function(){
      $('.confBack24x4').hide();





});   








$('.TapBx4').click(function(){

  $('.goodbyex4').fadeOut('fast');
});





// /////////Headers///////////////////


$('.Homex4, #ATM1Machinex4').click(function(){
 $('.ViewStatsx4, .OtherHeaderx4').hide();
});





$('.Financesx4').click(function(){
$('.HeaderPx4').hide();
$('.ViewStatsx4').show();



});



$('.atmNotix4').click(function(){
$('.HeaderPx4').hide();
$('.OtherHeaderx4, .Notificationsx4').show();



});



$('#atmSetx4').click(function(){
$('.HeaderPx4').hide();
$('.OtherHeaderx4, .Settingsx4').show();


});



// ///////////////////


datex4= '';

$('#CreditCx4, #PayBx4, #sendx4, #loanx4').click(function(){
$('.Schedulex4').show();
$('.Schedulex4 > #datepicker').attr('value', datex4);

});


$('#closeSer2Panelsx4, .Confirm2Yx4, .exit2Yx4').click(function(){

$('.ServicePanelx4').hide();
$('.TopHalf').show();
$('.Schedulex4 > #datepicker').attr('value', datex4);
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











tofValuex4 = "waived";

////////////////////////////////////////////////////////////



 

serviceValuex4='';
tofValuex4='waived';
billDenox4= false;


//stores user inputs






$('.NumPadx4').click(function(){

if(userInputx4 === '0.00'){

   userInputx4 = '';
   console.log('UserInput was cleared in order to accept new values');
}

});
















//////////////////////////////////////////////////////////////////////////







$('.QtyValueCoverx4').click(function(){
$('.NumPadx4').hide();
$('.numVx4').show();


});











////////////////////////////////////////////////////////////////////////////







var userInputx4='';





 $('.numVx4').click(function(){
   userInputx4 += $(this).attr("value");

   $('.qtyvalue2x4').attr('value', userInputx4);
    console.log('A numV was clicked');

 
    });






//backspace button
    $('#backSpacex4').click(function(){

    var getInputx4 = userInputx4;
    var lenx4 = getInputx4.length -1;
    var newInputx4 = getInputx4.substring(0, lenx4);

    userInputx4 = newInputx4;
    $('.qtyvalue2x4').attr('value', userInputx4);  
    console.log('New input is : ' + userInputx4);

});







// //////////////////////////////////////////////////////////////////////





//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amountx4, .qtyvalue2x4').click(function(){
  $('.numRx4, .numCCx4').hide();
  $('.numVx4').show();
});




















// ///////// BillDenomination Official////////////////////////
//////////////////////////////////////////////////////////////



$('#BILLDEx4, #ScanBILLDEx4').click(function(){

serviceValuex4 = 'Withdraw';
console.log("Service value x4 is = " + serviceValuex4);
console.log("Service value is = " + serviceValuex4);
console.log("tofvalue is = " + tofValuex4);



$('.BillDenominationWdrawx4').fadeIn('fast');



         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);



inputBillDenomi1x4=0;
inputBillDenomi2x4=0;
inputBillDenomi3x4=0;
inputBillDenomi4x4=0;




         $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);
         $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);
         $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);
         $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);

});










inputBillDenomi1x4=0;
inputBillDenomi2x4=0;
inputBillDenomi3x4=0;
inputBillDenomi4x4=0;
inputBillDenomi5x4=0;
inputBillDenomi6x4=0;
inputBillDenomi7x4=0;
inputBillDenomi8x4=0;
inputBillDenomi9x4=0;




         $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);
         $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);
         $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);
         $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);
         $('.inputBillDenomi5x4').attr('value', inputBillDenomi5x4);
         $('.inputBillDenomi6x4').attr('value', inputBillDenomi6x4);
           


 








// /////////////////////////////////
  SelectedBillDenomix4=""


  $('.BillDenomix4').click(function(){
    SelectedFriendx4 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedBillDenomix4);

});





$('.NumPadx4').click(function(){

if (inputBillDenomi1x4 === '0' || 0){
  inputBillDenomi1x4 = '';
}


if (inputBillDenomi2x4 === '0' || 0){
  inputBillDenomi2x4 = '';
}

if (inputBillDenomi3x4 === '0' || 0){
  inputBillDenomi3x4 = '';
}


if (inputBillDenomi4x4 === '0' || 0){
  inputBillDenomi4x4 = '';
}

if (inputBillDenomi5x4 === '0' || 0){
  inputBillDenomi5x4 = '';
}

if (inputBillDenomi6x4 === '0' || 0){
  inputBillDenomi6x4 = '';
}

if (inputBillDenomi7x4 === '0' || 0){
  inputBillDenomi7x4 = '';
}

if (inputBillDenomi8x4 === '0' || 0){
  inputBillDenomi8x4 = '';
}

if (inputBillDenomi9x4 === '0' || 0){
  inputBillDenomi9x4 = '';

}

});






inputBillDenomi1x4=0;
inputBillDenomi2x4=0;
inputBillDenomi3x4=0;
inputBillDenomi4x4=0;
inputBillDenomi5x4=0;
inputBillDenomi6x4=0;
inputBillDenomi7x4=0;
inputBillDenomi8x4=0;
inputBillDenomi9x4=0;










/////////////////////



$('.BillDenomi1x4').click(function(){


$('.EnterBillDenomi1x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi1x4 = 0;
 $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);


   $('#Mikex4 > span, .inputBillDenomi1x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi1x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi1x4').click(function(){

  if (inputBillDenomi1x4 === 0 ){
    inputBillDenomi1x4 = '';
  }
});

// ///////




 $('.numBillDenomi1x4').click(function(){

          inputBillDenomi1x4 += $(this).attr("value");
          // $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);


          $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi1x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi1x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi1x4').click(function(){

           var getInput = inputBillDenomi1x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi1x4 = newInput;
            $('.inputBillDenomi1x4').attr('value', inputBillDenomi1x4);
     
           console.log('New input is : ' + inputBillDenomi1x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////////



/////////////////////



$('.BillDenomi2x4').click(function(){


$('.EnterBillDenomi2x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi2x4 = 0;
 $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);


   $('#Mikex4 > span, .inputBillDenomi2x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi2x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi2x4').click(function(){

  if (inputBillDenomi2x4 === 0 ){
    inputBillDenomi2x4 = '';
  }
});

// ///////




 $('.numBillDenomi2x4').click(function(){

          inputBillDenomi2x4 += $(this).attr("value");
          // $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);


          $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi2x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi2x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi2x4').click(function(){

           var getInput = inputBillDenomi2x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi2x4 = newInput;
            $('.inputBillDenomi2x4').attr('value', inputBillDenomi2x4);
     
           console.log('New input is : ' + inputBillDenomi2x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////


/////////////////////



$('.BillDenomi3x4').click(function(){


$('.EnterBillDenomi3x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi3x4 = 0;
 $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);


   $('#Mikex4 > span, .inputBillDenomi3x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi3x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi3x4').click(function(){

  if (inputBillDenomi3x4 === 0 ){
    inputBillDenomi3x4 = '';
  }
});

// ///////




 $('.numBillDenomi3x4').click(function(){

          inputBillDenomi3x4 += $(this).attr("value");
          // $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);


          $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi3x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi3x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi3x4').click(function(){

           var getInput = inputBillDenomi3x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi3x4 = newInput;
            $('.inputBillDenomi3x4').attr('value', inputBillDenomi3x4);
     
           console.log('New input is : ' + inputBillDenomi3x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });




//////////////////



/////////////////////



$('.BillDenomi4x4').click(function(){


$('.EnterBillDenomi4x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi4x4 = 0;
 $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);


   $('#Mikex4 > span, .inputBillDenomi4x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi4x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi4x4').click(function(){

  if (inputBillDenomi4x4 === 0 ){
    inputBillDenomi4x4 = '';
  }
});

// ///////




 $('.numBillDenomi4x4').click(function(){

          inputBillDenomi4x4 += $(this).attr("value");
          // $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);


          $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi4x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi4x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi4x4').click(function(){

           var getInput = inputBillDenomi4x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi4x4 = newInput;
            $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);
     
           console.log('New input is : ' + inputBillDenomi4x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.BillDenomi5x4').click(function(){


$('.EnterBillDenomi5x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi5x4 = 0;
 $('.inputBillDenomi5x4').attr('value', inputBillDenomi5x4);


   $('#Mikex4 > span, .inputBillDenomi5x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi5x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi5x4').click(function(){

  if (inputBillDenomi5x4 === 0 ){
    inputBillDenomi5x4 = '';
  }
});

// ///////




 $('.numBillDenomi5x4').click(function(){

          inputBillDenomi5x4 += $(this).attr("value");
          // $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);


          $('.inputBillDenomi5x4').attr('value', inputBillDenomi5x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi5x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi5x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi5x4').click(function(){

           var getInput = inputBillDenomi5x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi5x4 = newInput;
            $('.inputBillDenomi5x4').attr('value', inputBillDenomi5x4);
     
           console.log('New input is : ' + inputBillDenomi5x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.BillDenomi6x4').click(function(){


$('.EnterBillDenomi6x4').show();


console.log('Mike x4 was selected');

 inputBillDenomi6x4 = 0;
 $('.inputBillDenomi6x4').attr('value', inputBillDenomi6x4);


   $('#Mikex4 > span, .inputBillDenomi6x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numBillDenomi6x4').show();




 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numBillDenomi6x4').click(function(){

  if (inputBillDenomi6x4 === 0 ){
    inputBillDenomi6x4 = '';
  }
});

// ///////




 $('.numBillDenomi6x4').click(function(){

          inputBillDenomi6x4 += $(this).attr("value");
          // $('.inputBillDenomi4x4').attr('value', inputBillDenomi4x4);


          $('.inputBillDenomi6x4').attr('value', inputBillDenomi6x4);

           console.log("current Friend 1 imput x4 number is :" + inputBillDenomi6x4);
           console.log('New Friend1 imput x4 is : ' + inputBillDenomi6x4);
           
 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceBillDenomi6x4').click(function(){

           var getInput = inputBillDenomi6x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputBillDenomi6x4 = newInput;
            $('.inputBillDenomi6x4').attr('value', inputBillDenomi6x4);
     
           console.log('New input is : ' + inputBillDenomi6x4)
            

 userInputx4 =  parseInt(inputBillDenomi1x4) + parseInt(inputBillDenomi2x4) + parseInt(inputBillDenomi3x4) + parseInt(inputBillDenomi4x4) + parseInt(inputBillDenomi5x4) + parseInt(inputBillDenomi6x4) +parseInt(inputBillDenomi7x4) + parseInt(inputBillDenomi8x4) + parseInt(inputBillDenomi9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////









///////////////   End Of Bill Denomination official /////////////////////////////////////////////////////////
///////////////   End Of Bill Denomination official /////////////////////////////////////////////////////////

















/////////// /Close Button for service pannels////////////////////




//

$('#closeSer2Panelsx4, .closeSer2Panelsx4').click(function(){

  $('.TopHalf').show();

  $('.AllAccountsx4, .AllAccountsx24').show(); 

$('.DenominatedBillsx4').removeClass('active');


     $('.pyx4').hide();
     $('.PayButtonsx4 > label').removeClass('active');


$('.SelectSendOrRequestx4, .SelectBuyOrSellx4, .SelectChargeOrRefundx4, .Depositbillsx4, .DepositChecksx4, .RetCashChecksx4').hide();

  $('#cheTsav2x4, #savTche2x4').hide();
  $('.confBack2Yx4').hide();
  $('.submit2Yx4, .exit2Yx4').show(); 

$('.ServicePanelx4').fadeOut();

  $('.NumPadx4').hide();
  $('.numVx4').show();
  $('.Scan2Yx4').hide();

$('.finBx4, .priBtnXX').removeClass('active');

   $('#qtyvalueDenox4, #qtyvalueCardx4, #qtyvalueQPayx4').hide();

         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);

         $('.qtyvalue2x4').show();


         $('#DenoImput10Labelx4 > input').attr('value','0');
         $('#DenoImput20Labelx4 > input').attr('value','0');
         $('#DenoImput50Labelx4 > input').attr('value','0');
         $('#DenoImput100Labelx4 > input').attr('value', '0');

          DenoImput10x4='';
          DenoImput20x4='';
          DenoImput50x4='';
          DenoImput100x4='';

          $('.AllInputsx4').css('color','lightgrey');


     $('.ExtraAcm2MOBIxx').show();
  
 
serviceValuex4 = "Nada";

AllInputsx4="0";
$(".AllInputsx4").attr('value', AllInputsx4);


});





$('.financialModelx4, .AtmFinModel').click(function(){

  $('.submit2Yx4, .exit2Yx4').show(); 
  $('.Scan2Yx4').hide();

});





// ////////////////////





$('#sendx, #sendx4').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2x4').fadeIn('fast');
  $('#cheTsav2x4, #savTche2x4').fadeOut();
 serviceValuex4 ='WireTransfer';
 tofValuex4 = "waived";
 console.log('tofValue is :' + tofValuex4);
 console.log('serviceValue is: ' + serviceValuex4);



});


//Send money from check savings

$('#payTicket').click(function(){
   $('#cheTsavx4').hide();
    $('#savTchex4').hide();
   serviceValuex4 =$(this).attr('value');
   $('#labelATMx4').text('Pay Bill & Tickets');
   $('#routingx4').attr('placeholder', 'Ticket / Bill Number');
 

 $('.sendMoney2x4').fadeIn('fast');
 serviceValuex4=$(this).attr('value');
 tofValuex4="send";
 console.log('tofValue is :' + tofValuex4);
 console.log('serviceValue is: ' + serviceValuex4);



});








$('#cash2x4, #wdraw1x4, #wdraw2x4, #checks2x4, #CreditCx4, #Loanx4, #Livex4, #QuickPayx4, #QuickPay4x4, .sendFromCheckingsx4, .QuickPay4x4, .QuickPayExpressx4').click(function(){
  
// $('.sm2x4, .serB').click(function(){
  $('#savTchex4, #cheTsavx4').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});




$('#wdraw1x4, #wdraw2x4').click(function(){
  
// $('.sm2x4, .serB').click(function(){
  $('#savTche2x4, #cheTsav2x4').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
  console.log('wdraw was clicked');
});






$('#checking2x4, #saving2x4').click(function(){
   tofValuex4= $(this).attr('value');
   console.log('tofValue is :' + tofValuex4);
   console.log('serviceValue is: ' + serviceValuex4);


});


   
  
  $('#Livex4').click(function(){
    $('#cheTsavx4').hide();
    $('#savTchex4').hide();

    $('.assistancex4').fadeIn('fast');

  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan/////////////////////////



// $('#Loanx4').click(function(){
//   serviceValuex4="Loan";
//   tofValuex4='waived';
//   console.log("#Loan has been clicked");
//   console.log("Service value is =" + serviceValuex4);
//    console.log("tofvalue is =" + tofValuex4);



//   $('.Loanx4').fadeIn('slow');

//   });


 $('.LoanGrantedx4').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////

 
  $('#Livex4').click(function(){
    $('#cheTsavx4x4').hide();
    $('#savTchex4x4').hide();

    $('.assistancex4').fadeIn('fast');

  });
 





/////////////////////////////////////////////





// ///////////Pay Credit cards///////////








  $('#CreditCx4, #CreditCx6').click(function(){

    serviceValuex4="CreditCards";

    $('#cheTsavx4').hide();
    $('#savTchex4').hide();
    // $('.qtyvalue2x4, #qtyvalueDenox4').hide();
    // $('#qtyvalueCardx4').show();
    $('.CreditCardsx4').fadeIn('fast');
    
         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);


    console.log("Service value x4 is = " + serviceValuex4);
    console.log("qtyvalue = Deno" );







serviceValuex4 = $(this).attr('value');
  tofValuex4 = 'waived';
  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);
  $('.CreditCardsx4').fadeIn('slow');



  Card1Imputx4= 0;
  Card2Imputx4= 0;
  Card3Imputx4= 0;
  Card4Imputx4= 0;





});





SelectedCardx4 = '';



$('.Cardx4').click(function(){
SelectedCardx4 = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCardx4);

$('.submit2Yx4, .exit2Yx4').show();

});




      $('#happyCardx4').attr('value', SelectedCardx4);
      $('#cardPaymentAmountx4').attr('value', userInputx4);







$('.CardStatementx4').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCardsx4').fadeIn('slow');
});




$('.Cardx4').dblclick(function(){

  $('.CreditCardsx4').fadeOut(1500);
  $('#CardNamex4').attr('value', SelectedCardx4);
$('.CardStatementx4').fadeIn('fast');


   });






 








// /////////////////////////////////
  var CardNumberx4=""


  $('.Cardx4').click(function(){
    CardNumberx4 = $(this).attr('value');
    console.log('Current Card x4 is : ' + CardNumberx4);




// DenoImputTotalx4 = DenoImput10x4 + DenoImput20x4 + DenoImput50x4 + DenoImput100x4;
console.log('Card total is ' + userInputx4);


$('.pyx4, .billsx4').hide();

});





/////////////////////



$('#card1x4').click(function(){

console.log('Card 1 x4 was selected');
 Card1Imputx4 = 0;
 $('#Card1ImputLabelx4 > input').attr('value', Card1Imputx4);

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

  
  


   $('#Card1Imputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numCard1x4').show();



  console.log(Card1Imputx4 + Card2Imputx4 + Card3Imputx4 + Card4Imputx4);



});


$('.numCard1x4').click(function(){

  if (Card1Imputx4 === 0 ){
    Card1Imputx4 = '';
  }
});



 $('.numCard1x4').click(function(){

          Card1Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#Card1ImputLabelx4 > input').attr('value', Card1Imputx4);

           console.log("current Card 1 imput x4 number is :" + Card1Imputx4);
           console.log('New Card 1 imput x4 is : ' + Card1Imputx4);
           
userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceCard1x4').click(function(){

           var getInput = Card1Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imputx4 = newInput;
            $('#Card1ImputLabelx4 > input').attr('value', Card1Imputx4);
     
           console.log('New input is : ' + Card1Imputx4);
            
userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);




       });









//////////////////



$('#card2x4').click(function(){

  console.log('Card2 x4 was selected');

 Card2Imputx4 = 0;
 $('#Card2ImputLabelx4 > input').attr('value', Card2Imputx4);
   

   $('#Card2Imputx4').css('color','green');


    $('.NumPadx4').hide();
   $('.numCard2x4').show();



  console.log(Card2Imputx4 + Card2Imputx4 + Card3Imputx4 + Card4Imputx4);


userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);


});




$('.numCard2x4').click(function(){

  if (Card2Imputx4 === 0 ){
    Card2Imputx4 = '';
  }
});






 $('.numCard2x4').click(function(){

          Card2Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#Card2ImputLabelx4 > input').attr('value', Card2Imputx4);

           console.log("current Card 1 imput x4 number is :" + Card2Imputx4);
           console.log('New Card 1 imput x4 is : ' + Card2Imputx4);
           

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpaceCard2x4').click(function(){

           var getInput = Card2Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imputx4 = newInput;
            $('#Card2ImputLabelx4 > input').attr('value', Card2Imputx4);
     
           console.log('New input is : ' + Card2Imputx4)
            
userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);




       });








// ///////////////




$('#card3x4').click(function(){
 Card3Imputx4 = 0;
 $('#Card3ImputLabelx4 > input').attr('value', Card3Imputx4);




  


   $('#Card3Imputx4').css('color','green');


    $('.NumPadx4').hide();
   $('.numCard3x4').show();


  console.log(Card3Imputx4 + Card3Imputx4 + Card3Imputx4 + Card4Imputx4);



userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);



});


// /////////


$('.numCard3x4').click(function(){

  if (Card3Imputx4 === 0 ){
    Card3Imputx4 = '';
  }
});


//////////




 $('.numCard3x4').click(function(){

          Card3Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#Card3ImputLabelx4 > input').attr('value', Card3Imputx4);

           console.log("current Card 1 imput x4 number is :" + Card3Imputx4);
           console.log('New Card 1 imput x4 is : ' + Card3Imputx4);
           

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpaceCard3x4').click(function(){

           var getInput = Card3Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imputx4 = newInput;
            $('#Card3ImputLabelx4 > input').attr('value', Card3Imputx4);
     
           console.log('New input is : ' + Card3Imputx4)
            

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);



       });








// //////////////////




$('#card4x4').click(function(){
 Card4Imputx4 = 0;
 $('#Card4ImputLabelx4 > input').attr('value', Card4Imputx4);






   $('#Card4Imputx4').css('color','green');


    $('.NumPadx4').hide();
   $('.numCard4x4').show();



  console.log(Card4Imputx4 + Card4Imputx4 + Card4Imputx4 + Card4Imputx4);

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);

});




// /////////


$('.numCard4x4').click(function(){

  if (Card4Imputx4 === 0 ){
    Card4Imputx4 = '';
  }
});


//////////




 $('.numCard4x4').click(function(){

          Card4Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#Card4ImputLabelx4 > input').attr('value', Card4Imputx4);

           console.log("current Card 1 imput x4 number is :" + Card4Imputx4);
           console.log('New Card 1 imput x4 is : ' + Card4Imputx4);
           
userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpaceCard4x4').click(function(){

           var getInput = Card4Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imputx4 = newInput;
            $('#Card4ImputLabelx4 > input').attr('value', Card4Imputx4);
     
           console.log('New input is : ' + Card4Imputx4)
            

userInputx4 = parseInt(Card1Imputx4) + parseInt(Card2Imputx4) + parseInt(Card3Imputx4) + parseInt(Card4Imputx4);

$('.qtyvalue2x4').attr('value', userInputx4);



       });


// });////End of Card Payment/////////////*********************************




















///////////////////Pay Your Bills/////////////






  $('#PayBx4, #PayBx6, .PayBills4x4').click(function(){

    serviceValuex4="PayYourBills";

    $('#cheTsavx4').hide();
    $('#savTchex4').hide();
    // $('.qtyvalue2x4, #qtyvalueDenox4').hide();
    // $('#qtyvaluePBillx4').show();
    $('.PayBillsx4').fadeIn('fast');
    
        
         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);


    console.log("Service value x4 is = " + serviceValuex4);
    console.log("qtyvalue = Deno" );







serviceValuex4 = $(this).attr('value');
  tofValuex4 = 'waived';
  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);
  $('.CreditPBillsx4').fadeIn('slow');



  PBill1Imputx4=0;
  PBill2Imputx4=0;
  PBill3Imputx4=0;
  PBill4Imputx4=0;
  PBill5Imputx4=0;
  PBill6Imputx4=0;
  PBill7Imputx4=0;
  PBill8Imputx4=0;
  PBill9Imputx4=0;
  PBill10Imputx4=0;
  PBill11Imputx4=0;
  PBill12Imputx4=0;





});








// /////////////////////////////////
  var SelectedBillx4=""



$('.PBillx4').click(function(){
    SelectedBillx4 = $(this).attr('value');
    console.log('Current Selected Bill x4 is : ' + SelectedBillx4);

$('.submit2Yx4, .exit2Yx4').show();


// DenoImputTotalx4 = DenoImput10x4 + DenoImput20x4 + DenoImput50x4 + DenoImput100x4;
console.log('PBill total is ' + userInputx4);


$('.PayButtonsx4 > label').removeClass('active');
$('.confBack2Yx4').hide();
$('.submit2Yx4, .exit2Yx4').show();


if(PbillType === "NoToggled"){
$('.pyx4').hide();
$('.PayButtonsx4 > label').removeClass('active');
}  

});





/////////////////////



$('.PBill1x4').click(function(){

console.log('PBill 1 x4 was selected');

 PBill1Imputx4 =  $(this).attr('value');
 $('#PBill1ImputLabelx4 > input').attr('value', PBill1Imputx4);

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

  
  


   $('#PBill1Imputx4, #PBill1ImputLabelx4').css('color','green');

if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
    $('.numPBill1x4').show();

}

  console.log(PBill1Imputx4 + PBill2Imputx4 + PBill3Imputx4 + PBill4Imputx4 + PBill5Imputx4);



});


// /////////


$('.numPBill1x4').click(function(){

  if (PBill1Imputx4 === 0 ){
    PBill1Imputx4 = '';
  }
});


//////////





 $('.numPBill1x4').click(function(){

          PBill1Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill1ImputLabelx4 > input').attr('value', PBill1Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill1Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill1Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpacePBill1x4').click(function(){

           var getInput = PBill1Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imputx4 = newInput;
            $('#PBill1ImputLabelx4 > input').attr('value', PBill1Imputx4);
     
           console.log('New input is : ' + PBill1Imputx4);

           console.log('back space was clicked' );
            
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);




       });









//////////////////



$('.PBill2x4').click(function(){

  console.log('PBill2 x4 was selected');

 PBill2Imputx4 =  $(this).attr('value');
 $('#PBill2ImputLabelx4 > input').attr('value', PBill2Imputx4);


   $('#PBill2Imputx4, #PBill2ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
  $('.NumPadx4').hide();
  $('.numPBill2x4').show();
}


  console.log(PBill2Imputx4 + PBill2Imputx4 + PBill3Imputx4 + PBill4Imputx4 + PBill5Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);


});




// /////////


$('.numPBill2x4').click(function(){

  if (PBill2Imputx4 === 0 ){
    PBill2Imputx4 = '';
  }
});


//////////





 $('.numPBill2x4').click(function(){

          PBill2Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill2ImputLabelx4 > input').attr('value', PBill2Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill2Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill2Imputx4);
           

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpacePBill2x4').click(function(){

           var getInput = PBill2Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imputx4 = newInput;
            $('#PBill2ImputLabelx4 > input').attr('value', PBill2Imputx4);
     
           console.log('New input is : ' + PBill2Imputx4)
            
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);




       });








// ///////////////




$('.PBill3x4').click(function(){

 PBill3Imputx4 =  $(this).attr('value');
 $('#PBill3ImputLabelx4 > input').attr('value', PBill3Imputx4);



  


   $('#PBill3Imputx4, #PBill3ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
 $('.NumPadx4').hide();
  $('.numPBill3x4').show();
}

  console.log(PBill3Imputx4 + PBill3Imputx4 + PBill3Imputx4 + PBill4Imputx4 + PBill5Imputx4);



userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



});



// /////////


$('.numPBill3x4').click(function(){

  if (PBill3Imputx4 === 0 ){
    PBill3Imputx4 = '';
  }
});


//////////




 $('.numPBill3x4').click(function(){

          PBill3Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill3ImputLabelx4 > input').attr('value', PBill3Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill3Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill3Imputx4);
           

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpacePBill3x4').click(function(){

           var getInput = PBill3Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imputx4 = newInput;
            $('#PBill3ImputLabelx4 > input').attr('value', PBill3Imputx4);
     
           console.log('New input is : ' + PBill3Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });








// //////////////////




$('.PBill4x4').click(function(){

 PBill4Imputx4 =  $(this).attr('value');
 $('#PBill4ImputLabelx4 > input').attr('value', PBill4Imputx4);





   $('#PBill4Imputx4, #PBill4ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
  $('.NumPadx4').hide();
  $('.numPBill4x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill5Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});



// /////////


$('.numPBill4x4').click(function(){

  if (PBill4Imputx4 === 0 ){
    PBill4Imputx4 = '';
  }
});


//////////





 $('.numPBill4x4').click(function(){

          PBill4Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill4ImputLabelx4 > input').attr('value', PBill4Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill4Imputx4 + PBill5Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill4Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill4x4').click(function(){

           var getInput = PBill4Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imputx4 = newInput;
            $('#PBill4ImputLabelx4 > input').attr('value', PBill4Imputx4);
     
           console.log('New input is : ' + PBill4Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });






$('.PBill5x4').click(function(){

 PBill5Imputx4 =  $(this).attr('value');
 $('#PBill5ImputLabelx4 > input').attr('value', PBill5Imputx4);





   $('#PBill5Imputx4, #PBill5ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
  $('.NumPadx4').hide();
  $('.numPBill5x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill5Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});


// /////////


$('.numPBill5x4').click(function(){

  if (PBill5Imputx4 === 0 ){
    PBill5Imputx4 = '';
  }
});


//////////





 $('.numPBill5x4').click(function(){

          PBill5Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill5ImputLabelx4 > input').attr('value', PBill5Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill5Imputx4 + PBill5Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill5Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill5x4').click(function(){

           var getInput = PBill5Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imputx4 = newInput;
            $('#PBill5ImputLabelx4 > input').attr('value', PBill5Imputx4);
     
           console.log('New input is : ' + PBill5Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });




// ///////////////////////////////////////////////////////////////////




$('.PBill6x4').click(function(){
 PBill6Imputx4 =  $(this).attr('value');
 $('#PBill6ImputLabelx4 > input').attr('value', PBill6Imputx4);






   $('#PBill6Imputx4, #PBill6ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill6x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});




// ////////////////////////////////////


$('.numPBill6x4').click(function(){

  if (PBill6Imputx4 === 0 ){
    PBill6Imputx4 = '';
  }
});


//////////




 $('.numPBill6x4').click(function(){

          PBill6Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill6ImputLabelx4 > input').attr('value', PBill6Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill6Imputx4 + PBill6Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill6Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill6x4').click(function(){

           var getInput = PBill6Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imputx4 = newInput;
            $('#PBill6ImputLabelx4 > input').attr('value', PBill6Imputx4);
     
           console.log('New input is : ' + PBill6Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });





















// ///////////////////////////////////////////////////////////////////




$('.PBill7x4').click(function(){
 PBill7Imputx4 =  $(this).attr('value');
 $('#PBill7ImputLabelx4 > input').attr('value', PBill7Imputx4);






   $('#PBill7Imputx4, #PBill7ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill7x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});

// ////////////////////////////////////






 $('.numPBill7x4').click(function(){

          PBill7Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill7ImputLabelx4 > input').attr('value', PBill7Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill7Imputx4 + PBill7Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill7Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill7x4').click(function(){

           var getInput = PBill7Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill7Imputx4 = newInput;
            $('#PBill7ImputLabelx4 > input').attr('value', PBill7Imputx4);
     
           console.log('New input is : ' + PBill7Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });





















// ///////////////////////////////////////////////////////////////////




$('.PBill8x4').click(function(){
 PBill8Imputx4 =  $(this).attr('value');
 $('#PBill8ImputLabelx4 > input').attr('value', PBill8Imputx4);






   $('#PBill8Imputx4, #PBill8ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill8x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});

// ////////////////////////////////////






 $('.numPBill8x4').click(function(){

          PBill8Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill8ImputLabelx4 > input').attr('value', PBill8Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill8Imputx4 + PBill8Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill8Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill8x4').click(function(){

           var getInput = PBill8Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill8Imputx4 = newInput;
            $('#PBill8ImputLabelx4 > input').attr('value', PBill8Imputx4);
     
           console.log('New input is : ' + PBill8Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });



















// ///////////////////////////////////////////////////////////////////




$('.PBill9x4').click(function(){
 PBill9Imputx4 =  $(this).attr('value');
 $('#PBill9ImputLabelx4 > input').attr('value', PBill9Imputx4);






   $('#PBill9Imputx4, #PBill9ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill9x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});
    



    // ////////////////////////////////////






 $('.numPBill9x4').click(function(){

          PBill9Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill9ImputLabelx4 > input').attr('value', PBill9Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill9Imputx4 + PBill9Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill9Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill9x4').click(function(){

           var getInput = PBill9Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill9Imputx4 = newInput;
            $('#PBill9ImputLabelx4 > input').attr('value', PBill9Imputx4);
     
           console.log('New input is : ' + PBill9Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });      









// ///////////////////////////////////////////////////////////////////




$('.PBill10x4').click(function(){
 PBill10Imputx4 =  $(this).attr('value');
 $('#PBill10ImputLabelx4 > input').attr('value', PBill10Imputx4);






   $('#PBill10Imputx4, #PBill10ImputLabelx4').css('color','green');

if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill10x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});
  
      // ////////////////////////////////////






 $('.numPBill10x4').click(function(){

          PBill10Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill10ImputLabelx4 > input').attr('value', PBill10Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill10Imputx4 + PBill10Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill10Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill10x4').click(function(){

           var getInput = PBill10Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill10Imputx4 = newInput;
            $('#PBill10ImputLabelx4 > input').attr('value', PBill10Imputx4);
     
           console.log('New input is : ' + PBill10Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });       










// ///////////////////////////////////////////////////////////////////




$('.PBill11x4').click(function(){
 PBill11Imputx4 =  $(this).attr('value');
 $('#PBill11ImputLabelx4 > input').attr('value', PBill11Imputx4);






   $('#PBill11Imputx4, #PBill11ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill11x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});

    // ////////////////////////////////////






 $('.numPBill11x4').click(function(){

          PBill11Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill11ImputLabelx4 > input').attr('value', PBill11Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill11Imputx4 + PBill11Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill11Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill11x4').click(function(){

           var getInput = PBill11Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill11Imputx4 = newInput;
            $('#PBill11ImputLabelx4 > input').attr('value', PBill11Imputx4);
     
           console.log('New input is : ' + PBill11Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });       














// ///////////////////////////////////////////////////////////////////




$('.PBill12x4').click(function(){
 PBill12Imputx4 =  $(this).attr('value');
 $('#PBill12ImputLabelx4 > input').attr('value', PBill12Imputx4);






   $('#PBill12Imputx4, #PBill12ImputLabelx4').css('color','green');


if(PbillType === "NoToggled"){
   $('.NumPadx4').hide();
   $('.numPBill12x4').show();
}


  console.log(PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill4Imputx4 + PBill6Imputx4);


userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);

});


// ////////////////////////////////////






 $('.numPBill12x4').click(function(){

          PBill12Imputx4 += $(this).attr("value");
          // $('#DenoImput10x4').attr('value', DenoImput10x4);


          $('#PBill12ImputLabelx4 > input').attr('value', PBill12Imputx4);

           console.log("current PBill 1 imput x4 number is :" + PBill12Imputx4 + PBill12Imputx4);
           console.log('New PBill 1 imput x4 is : ' + PBill12Imputx4);
           
userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



        
           });




       //backspace button
           $('#backSpacePBill12x4').click(function(){

           var getInput = PBill12Imputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill12Imputx4 = newInput;
            $('#PBill12ImputLabelx4 > input').attr('value', PBill12Imputx4);
     
           console.log('New input is : ' + PBill12Imputx4)
            

userInputx4 = parseInt(PBill2Imputx4) + parseInt(PBill3Imputx4) + parseInt(PBill4Imputx4) + parseInt(PBill5Imputx4) + parseInt(PBill6Imputx4) + parseInt(PBill7Imputx4) + parseInt(PBill8Imputx4) + parseInt(PBill9Imputx4) + parseInt(PBill10Imputx4) + parseInt(PBill11Imputx4) + parseInt(PBill12Imputx4);
$('.qtyvalue2x4').attr('value', userInputx4);



       });       




// });////End of PBill Payment/////////////*********************************






















///////////////////Merchant/////////////



////////////////Merchant x4///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchantx4').click(function(){

 console.log("Service value x4 is = " + serviceValuex4);

serviceValuex4='Merchant';
tofValuex4 = 'waived';

 $('.submit2Yx4, .exit2Yx4').hide();
 $('.SelectBuyOrSellx4').hide()

$('.Merchantx4').fadeIn('slow');
$('.SelectChargeOrRefundx4').show('');


    $('#cheTsavx4').hide();
    $('#savTchex4').hide();


  MerchantNamex4='';
  MerchantCardNUmberx4='';
  MerchantDateNUmberx4='';
  MerchantCVDx4='';
  MerchantZipCodex4='';







         $('.MerchantNameInputx4').attr('value', MerchantNamex4);
         $('.MerchantCardInputx4').attr('value', MerchantCardNUmberx4);
         $('.MerchantDateInputx4').attr('value', MerchantDateNUmberx4);
         $('.MerchantCVDInputx4').attr('value', MerchantCVDx4);
         $('.MerchantZipCodeInputx4').attr('value', MerchantZipCodex4);


 
userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);



    console.log("Service value x4 is = " + serviceValuex4);



  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);

});







$('.MerBorderBotx4').click(function(){

   $('.MerchantLabelx4').toggleClass('BorderBottomx4');

});





$('.WrtBorderBotx4').click(function(){

   $('.WrtLabelx4').toggleClass('BorderBottomx4');

});









// /////////////////////////////////
MerchantLabelx4="";

$('.MerchantLabelx4').click(function(){
MerchantLabelx4 = $(this).attr('value');
console.log("The selected MerchantLabelx4 is = " + MerchantLabelx4);

})








/////////////////////



$('.NameMerLabelx4').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabelx4').click(function(){




console.log('Merchant Name Label x4 was selected');

 MerchantCardNUmberx4 = "";
 $('.MerchantCardInputx4').attr('value', MerchantCardNUmberx4);


 $('.NumPadx4').hide();
 $('.numMCardx4').show();

});





 $('.numMCardx4').click(function(){

         MerchantCardNUmberx4+= $(this).attr("value");
          
          $('.MerchantCardInputx4').attr('value', MerchantCardNUmberx4);

           });



       //backspace button
           $('#backSpaceMCardx4').click(function(){

           var getInput = MerchantCardNUmberx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmberx4 = newInput;
            $('.MerchantCardInputx4').attr('value', MerchantCardNUmberx4);
     
           console.log('New input is : ' + MerchantCardNUmberx4);
            


       });




//////////////////




/////////////////////



$('.DateMerLabelx4').click(function(){




console.log('Merchant Name Label x4 was selected');

 MerchantDateNUmberx4 = "";
 $('.MerchantDateInputx4').attr('value', MerchantDateNUmberx4);


 $('.NumPadx4').hide();
 $('.numMDatex4').show();

});




 $('.numMDatex4').click(function(){

         MerchantDateNUmberx4+= $(this).attr("value");
          
          $('.MerchantDateInputx4').attr('value', MerchantDateNUmberx4);

           });



       //backspace button
           $('#backSpaceMDatex4').click(function(){

           var getInput = MerchantDateNUmberx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmberx4 = newInput;
            $('.MerchantDateInputx4').attr('value', MerchantDateNUmberx4);
     
           console.log('New input is : ' + MerchantDateNUmberx4);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabelx4').click(function(){




console.log('Merchant Name Label x4 was selected');

 MerchantCVDx4 = "";
 $('.MerchantCVDInputx4').attr('value', MerchantCVDx4);


 $('.NumPadx4').hide();
 $('.numCVDx4').show();

});




 $('.numCVDx4').click(function(){

          MerchantCVDx4+= $(this).attr("value");
          
          $('.MerchantCVDInputx4').attr('value', MerchantCVDx4);

           });



       //backspace button
           $('#backSpaceCVDx4').click(function(){

           var getInput = MerchantCVDx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVDx4 = newInput;
           $('.MerchantCVDInputx4').attr('value', MerchantCVDx4);
     
           console.log('New input is : ' + MerchantCVDx4);
            


});




//////////////////





/////////////////////



$('.ZipMerLabelx4').click(function(){




console.log('Merchant Name Label x4 was selected');

 MerchantZipCodex4 = "";
 $('.MerchantZipCodeInputx4').attr('value', MerchantZipCodex4);


 $('.NumPadx4').hide();
 $('.numMZipx4').show();
 
});




 $('.numMZipx4').click(function(){

         MerchantZipCodex4+= $(this).attr("value");
          
          $('.MerchantZipCodeInputx4').attr('value', MerchantZipCodex4);

           });



       //backspace button
           $('#backSpaceMZipx4').click(function(){

           var getInput = MerchantZipCodex4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCodex4 = newInput;
            $('.MerchantZipCodeInputx4').attr('value', MerchantZipCodex4);
     
           console.log('New input is : ' + MerchantZipCodex4);
            


});






///////////////////////




$('.SaveMerLabelx4').click(function(){
  console.log('Save customer button was clicked');
  $('.MerchantSaveCustomerInputx4').toggleClass('SelectedMerchantSaveCustomerInputx4');
});






////////////////end of Merchant x4////////////////////////////////
//////////////////////////////////////////////////////////////////





//////////////////////////////

$('.SwipeCardMerLabelx4').click(function(){

$('.MerchantImputx4').removeClass('SelectedMerchantLabel');
$('.MCardImputx4').removeClass('SelectedMerchantLabel');

  $('.MSwipex4').addClass('clickedSwipex4');
   $('.SwipeCardx4').fadeIn('fast');
  
})


$('.SwButtonx4').click(function(){
    $('.SwipeCardx4').fadeOut('fast');
    
});






/////////////////////////////////
/////////////////////////////////End of Merchant



////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChangex4').click(function(){

$('.feesx4').hide();

 console.log("Service value  is = " + serviceValue);

serviceValuex4='ChangePin';
tofValuex4 = 'waived';

$('.ChangePinx4 ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPinx4='';
  ConPinx4='';





         $('.EnterPinInputx4').attr('value', EntPinx4);
         $('.ConfirmPinInputx4').attr('value', ConPinx4);


 
userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);



    console.log("Service value  is = " + serviceValuex4);



  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);

});











// /////////////////////////////////
SelectedPinLabelx4="";

$('.ChangePinLx4').click(function(){
SelectedPinLabelx4 = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabelx4);

});





/////////////////////



$('.EnterPinLabelx4').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPinx4 = "";
 $('.EnterPinInputx4').attr('value', EntPinx4);


 $('.NumPadx4').hide();
 $('.numEntPinx4').show();


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPinx4').click(function(){

         EntPinx4+= $(this).attr("value");
          
          $('.EnterPinInputx4').attr('value', EntPinx4);


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPinx4').click(function(){

           var getInput = EntPinx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPinx4 = newInput;
            $('.EnterPinInputx4').attr('value', EntPinx4);
     
           console.log('New input is : ' + EntPinx4);


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabelx4').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPinx4 = "";
 $('.ConfirmPinInputx4').attr('value', ConPinx4);


 $('.NumPadx4').hide();
 $('.numConPinx4').show();


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPinx4').click(function(){

         ConPinx4+= $(this).attr("value");
          
          $('.ConfirmPinInputx4').attr('value', ConPinx4);


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPinx4').click(function(){

           var getInput = ConPinx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPinx4 = newInput;
            $('.ConfirmPinInputx4').attr('value', ConPinx4);
     
           console.log('New input is : ' + ConPinx4);


// ////Password Match Notification//////////

           if(EntPinx4 !== '' && EntPinx4 === ConPinx4){
            
            $('.MatchedPinNOx4').hide();
            $('.MatchedPinYesx4').fadeIn();

           }



           if(EntPinx4 !== '' && EntPinx4 !== ConPinx4){

            $('.MatchedPinYesx4').hide();
            $('.MatchedPinNOx4').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////









///////////////////Take Loan/////////////






  $('#Loanx4').click(function(){

    serviceValuex4="Loan";

    $('#cheTsavx4').hide();
    $('#savTchex4').hide();
    // $('.qtyvalue2x4, #qtyvalueDenox4').hide();
    // $('#qtyvalueTLoanx4').show();
    $('.PayLoansx4').fadeIn('fast');
    
         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);

});













/////////////////////////////////////////////////



$('.closeDepositx4').click(function(){
    console.log('Deposit panel was closed');
    $('.depositx4').fadeOut();
    console.log('Close deposit was clicked');
});







$('#billDenox4').click(function(){

  billDenox4= true;
  BillWdenox4 = false;

   if(billDenox4 === true){
  console.log(' Bill Deno is Activated ' + billDenox4);
}
$('.confBack2Yx4').hide();
$('.submit2Yx4, .exit2Yx4').show();


});


$('#noBillDenox4').click(function(){

  billDenox4= false;
  BillWdenox4 = false;

  if(billDenox4 === false){
  console.log(' Bill Deno is Activated ' + billDenox4);
}

  $('.confBack2Yx4').hide();
 $('.billsx4').hide();
$('#amountx4, .qtyvalue2x4, .LinearNumPadx4, .numVx4').show();
$('.submit2Yx4, .exit2Yx4').fadeIn();

  
});




$('.ui2x4').click(function(){
  if(serviceValuex4 !== 'withdraw'){

    billDenox4 === false;

    console.log('BillDenox4 was deactivated because Service value is not withdraw');

    $('#billDenox4').removeClass('active');
    $('#noBillDenox4').addClass('active');

// $('.submit2Yx4').click(function(){

//    $('#billsx4, .billsx4, #b10x4, #b20x4, #b50x4, #b100x4').hide();

// });
  }
});



/////////////////////////////////////////////////////////


$('#wdraw1x4, #wdraw2x4').click(function(){
serviceValuex4 = 'withdraw';

});

//////////////////////////////**********////////////////////////////////////////////////////

 

////////////////QuickPay///////////////////////////

$('#QuickPayx4, #QuickPay4x4, #QuickPay4x5, #QuickPay2x4, #Send4x24, #Send4x25, #QuickPay2x6, .QuickPay4x4, .QuickPayExpressx4').click(function(){

  $('.submit2Yx4, .exit2Yx4').hide();
  $('.SelectBuyOrSellx4').hide();
  $('.SelectSendOrRequestx4').fadeIn();
  


});




 $('#QuickPay2x4, #QuickPay4x4, #QuickPay4x5, #QuickPay3x4, #Send4x24, #Send4x25, #QuickPay2x6, .QuickPay4x4, #QuickPayx4').click(function(){
console.log("Service value x4 is = " + serviceValuex4);
$('.sendMoney11x4').fadeIn('');

 });



////////////////QuickPay///////////////////////////

$('#QuickPayx4, #QuickPay4x4, #QuickPay4x5, #QuickPay2x4, #Send4x24, #Send4x25, #QuickPay2x6, .QuickPay4x4, .QuickPayExpressx4').click(function(){

  $('.submit2Yx4, .exit2Yx4').hide();
  $('.SelectSendOrRequestx4').fadeIn();
  $('.SelectBuyOrSellx4').hide();

 console.log("Service value x4 is = " + serviceValuex4);

serviceValuex4='QuickPay';
tofValuex4 = 'waived';






    $('#cheTsavx4').hide();
    $('#savTchex4').hide();

$('.AllAccountsx4, .AllAccountsx24').hide();    



  MikeImputx4=0;
  JeffImputx4=0;
  MariaImputx4=0;
  JohnImputx4=0;


  LeahImputx4=0;
  PaulImputx4=0;
  JennyImputx4=0;
  GokuImputx4=0;



         $('#MikeImputx4').attr('value', MikeImputx4);
         $('#JeffImputx4').attr('value', JeffImputx4);
         $('#MariaImputx4').attr('value', MariaImputx4);
         $('#JohnImputx4').attr('value', JohnImputx4);


         $('#LeahImputx4').attr('value', LeahImputx4);
         $('#PaulImputx4').attr('value', PaulImputx4);
         $('#JennyImputx4').attr('value', JennyImputx4);
         $('#GokuImputx4').attr('value', GokuImputx4);

 
userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);





    console.log("Service value x4 is = " + serviceValuex4);
  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);

});






Friendx4="";

$('.friendsx4').click(function(){
Friendx4 = $(this).attr('value');
console.log("Friend is = " + Friendx4);

$('.SelectSendOrRequestx4').show();
$('.confBack2Yx4').hide();

});




      $('#happyFriendx4').attr('value', Friendx4);
      $('#quickPayAmountx4').attr('value', userInputx4);






   


  //      $('.retrievex4').click(function(){  
  //        $('.BillDenominationWdrawx4').fadeOut('fast');
  //        $('#qtyvalueDenox4').hide();
  //        userInputx4 ="";
  //        $('.qtyvalue2x4').show();
  //        $('.qtyvalue2x4').attr('value', "");

  //        $('#MikeImputx4').attr('value','');
  //        $('#JeffImputx4').attr('value','');
  //        $('#MariaImputx4').attr('value','');
  //        $('#JohnImputx4').attr('value', '');


  //        $('#LeahImputx4').attr('value','');
  //        $('#PaulImputx4').attr('value','');
  //        $('#JennyImputx4').attr('value','');
  //        $('#GokuImputx4').attr('value', '');


  // MikeImputx4='';
  // JeffImputx4='';
  // MariaImputx4='';
  // JohnImputx4='';


  // LeahImputx4='';
  // PaulImputx4='';
  // JennyImputx4='';
  // GokuImputx4='';



       // });
 









// /////////////////////////////////
  var SelectedFriendx4=""


  $('.friendsx4').click(function(){
    SelectedFriendx4 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriendx4);





});



$('.NumPadx4').click(function(){
// if (MikeImputx4 === '0' || 0){
//   MikeImputx4 = '';
// }

if (JeffImputx4 === '0' || 0){
  JeffImputx4 = '';
}

if (MariaImputx4 === '0' || 0){
  MariaImputx4 = '';
}

if (JohnImputx4 === '0' || 0){
  JohnImputx4 = '';
}

if (LeahImputx4 === '0' || 0){
  LeahImputx4= '';
}

if (PaulImputx4 === '0' || 0){
  PaulImputx4 = '';
}

if (JennyImputx4 === '0' || 0){
  JennyImputx4 = '';
}

if (GokuImputx4 === '0' || 0){
  GokuImputx4 = '';
}

});



/////////////////////



$('.Mikex4').click(function(){

      $('.FriendMemox4').hide();
$('.MikeMemox4').show().click(function(){
  $('.WriteMemox4, .MikeTTMemox4').fadeIn();
});


console.log('Mike x4 was selected');

 MikeImputx4 = 0;
 $('.MikeImputx4').attr('value', MikeImputx4);




   $('.Mikex4 > span, #MikeImputx4').css('color','green');


 $('.NumPadx4').hide();
   $('.numMikex4').show();




 userInputx4 =  parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numMikex4').click(function(){

  if (MikeImputx4 === 0 ){
    MikeImputx4 = '';
  }
});

// ///////




 $('.numMikex4').click(function(){

          MikeImputx4 += $(this).attr("value");
          // $('#MikeImputx4').attr('value', MikeImputx4);


          $('.MikeImputx4').attr('value', MikeImputx4);

           console.log("current Friend 1 imput x4 number is :" + MikeImputx4);
           console.log('New Friend1 imput x4 is : ' + MikeImputx4);
           
 userInputx4 =  parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceMikex4').click(function(){

           var getInput = MikeImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImputx4 = newInput;
            $('.MikeImputx4').attr('value', MikeImputx4);
     
           console.log('New input is : ' + MikeImputx4)
            

 userInputx4 =  parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);




});









//////////////////




/////////////////////



$('.Jeffx4').click(function(){

      $('.FriendMemox4').hide();
$('.JeffMemox4').show().click(function(){
  $('.WriteMemox4, .JeffTTMemox4').fadeIn();
});


console.log('Jeff x4 was selected');

 JeffImputx4 = 0;
 $('.JeffImputx4').attr('value', JeffImputx4);



  
  


   $('.Jeffx4 > span, #JeffImputx4').css('color','green');


 $('.NumPadx4').hide();
   $('.numJeffx4').show();


 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numJeffx4').click(function(){

  if (JeffImputx4 === 0 ){
    JeffImputx4 = '';
  }
});

// ///////






 $('.numJeffx4').click(function(){

          JeffImputx4 += $(this).attr("value");
          // $('#JeffImputx4').attr('value', JeffImputx4);


          $('.JeffImputx4').attr('value', JeffImputx4);

           console.log("current Friend 1 imput x4 number is :" + JeffImputx4);
           console.log('New Friend1 imput x4 is : ' + JeffImputx4);
           
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceJeffx4').click(function(){

           var getInput = JeffImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImputx4 = newInput;
            $('.JeffImputx4').attr('value', JeffImputx4);
     
           console.log('New input is : ' + JeffImputx4)
            
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


       });









//////////////////





/////////////////////



$('.Mariax4').click(function(){


      $('.FriendMemox4').hide();
$('.MariaMemox4').show().click(function(){
  $('.WriteMemox4, .MariaTTMemox4').fadeIn();
});


console.log('Maria x4 was selected');

MariaImputx4 = 0;
 $('.MariaImputx4').attr('value', MariaImputx4);
 


  
  


   $('#Mariax4 > span, #MariaImputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numMariax4').show();



 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);
});





///////////

$('.numMariax4').click(function(){

  if (MariaImputx4 === 0 ){
    MariaImputx4 = '';
  }
});

// ///////






 $('.numMariax4').click(function(){

          MariaImputx4 += $(this).attr("value");
          // $('#MariaImputx4').attr('value', MariaImputx4);


          $('.MariaImputx4').attr('value', MariaImputx4);

           console.log("current Friend 1 imput x4 number is :" + MariaImputx4);
           console.log('New Friend1 imput x4 is : ' + MariaImputx4);
           

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceMariax4').click(function(){

           var getInput = MariaImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImputx4 = newInput;
            $('.MariaImputx4').attr('value', MariaImputx4);
     
           console.log('New input is : ' + MariaImputx4)
            
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


       });









//////////////////




/////////////////////



$('.Johnx4').click(function(){

      $('.FriendMemox4').hide();
$('.JohnMemox4').show().click(function(){
  $('.WriteMemox4, .JohnTTMemox4').fadeIn();
});


console.log('John x4 was selected');

 JohnImputx4 = 0;
 $('.JohnImputx4').attr('value', JohnImputx4);



  
  


   $('.Johnx4 > span, #JohnImputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numJohnx4').show();


 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numJohnx4').click(function(){

  if (JohnImputx4 === 0 ){
    JohnImputx4 = '';
  }
});

// ///////









 $('.numJohnx4').click(function(){

          JohnImputx4 += $(this).attr("value");
          // $('#JohnImputx4').attr('value', JohnImputx4);


          $('.JohnImputx4').attr('value', JohnImputx4);

           console.log("current Friend 1 imput x4 number is :" + JohnImputx4);
           console.log('New Friend1 imput x4 is : ' + JohnImputx4);
           

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceJohnx4').click(function(){

           var getInput = JohnImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImputx4 = newInput;
            $('.JohnImputx4').attr('value', JohnImputx4);
     
           console.log('New input is : ' + JohnImputx4)
            

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


       });









//////////////////






/////////////////////



$('.Leahx4').click(function(){


      $('.FriendMemox4').hide();
$('.LeahMemox4').show().click(function(){
  $('.WriteMemox4, .LeahTTMemox4').fadeIn();
});


console.log('Leah x4 was selected');

LeahImputx4 = 0;
 $('.LeahImputx4').attr('value', LeahImputx4);
 


  
  


   $('#Leahx4 > span, #LeahImputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numLeahx4').show();



 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});




///////////

$('.numLeahx4').click(function(){

  if (LeahImputx4 === 0 ){
    LeahImputx4 = '';
  }
});

// ///////







 $('.numLeahx4').click(function(){

          LeahImputx4 += $(this).attr("value");
          // $('#LeahImputx4').attr('value', LeahImputx4);


          $('.LeahImputx4').attr('value', LeahImputx4);

           console.log("current Friend 1 imput x4 number is :" + LeahImputx4);
           console.log('New Friend1 imput x4 is : ' + LeahImputx4);
           
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpaceLeahx4').click(function(){

           var getInput = LeahImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImputx4 = newInput;
            $('.LeahImputx4').attr('value', LeahImputx4);
     
           console.log('New input is : ' + LeahImputx4)
            

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

       });









//////////////////





/////////////////////



$('.Paulx4').click(function(){


      $('.FriendMemox4').hide();
$('.PaulMemox4').show().click(function(){
  $('.WriteMemox4, .PaulTTMemox4').fadeIn();
});


console.log('Paul x4 was selected');

PaulImputx4 = 0;
 $('.PaulImputx4').attr('value', PaulImputx4);
 


  
  


   $('#Paulx4 > span, #PaulImputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numPaulx4').show();



 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);
});



///////////

$('.numPaulx4').click(function(){

  if (PaulImputx4 === 0 ){
    PaulImputx4 = '';
  }
});

// ///////






 $('.numPaulx4').click(function(){

          PaulImputx4 += $(this).attr("value");
          // $('#PaulImputx4').attr('value', PaulImputx4);


          $('.PaulImputx4').attr('value', PaulImputx4);

           console.log("current Friend 1 imput x4 number is :" + PaulImputx4);
           console.log('New Friend1 imput x4 is : ' + PaulImputx4);
           

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpacePaulx4').click(function(){

           var getInput = PaulImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImputx4 = newInput;
            $('.PaulImputx4').attr('value', PaulImputx4);
     
           console.log('New input is : ' + PaulImputx4)
            

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

       });









//////////////////





/////////////////////



$('.Jennyx4').click(function(){

      $('.FriendMemox4').hide();
$('.JennyMemox4').show().click(function(){
  $('.WriteMemox4, .JennyTTMemox4').fadeIn();
});


console.log('Jenny x4 was selected');

JennyImputx4 = 0;
 $('#JennyImputx4').attr('value', JennyImputx4);
 


  
  


   $('#Jennyx4 > span, #JennyImputx4').css('color','green');

   $('.NumPadx4').hide();
   $('.numJennyx4').show();



 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);
});




///////////

$('.numJennyx4').click(function(){

  if (JennyImputx4 === 0 ){
    JennyImputx4 = '';
  }
});

// ///////






 $('.numJennyx4').click(function(){

          JennyImputx4 += $(this).attr("value");
          // $('#JennyImputx4').attr('value', JennyImputx4);


          $('#JennyImputx4').attr('value', JennyImputx4);

           console.log("current Friend 1 imput x4 number is :" + JennyImputx4);
           console.log('New Friend1 imput x4 is : ' + JennyImputx4);
           

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceJennyx4').click(function(){

           var getInput = JennyImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImputx4 = newInput;
            $('.JennyImputx4').attr('value', JennyImputx4);
     
           console.log('New input is : ' + JennyImputx4)
            
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


       });









//////////////////





/////////////////////



$('.Gokux4').click(function(){

    $('.FriendMemox4').hide();
$('.GokuMemox4').show().click(function(){
  $('.WriteMemox4, .GokuTTMemox4').fadeIn();
});


console.log('Gokux4  was selected');

GokuImputx4 = 0;
 $('.GokuImputx4').attr('value', GokuImputx4);
 


  
  


   $('#Gokux4 > span, #GokuImputx4').css('color','green');


   $('.NumPadx4').hide();
   $('.numGokux4').show();



 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});




///////////

$('.numGokux4').click(function(){

  if (GokuImputx4 === 0 ){
    GokuImputx4 = '';
  }
});

// ///////



 $('.numGokux4').click(function(){

          GokuImputx4 += $(this).attr("value");
          // $('#Gokux4Imput').attr('value', Gokux4Imput);


          $('.GokuImputx4').attr('value', GokuImputx4);

           console.log("current Friend 1 imput  number is :" + GokuImputx4);
           console.log('New Friend1 imput  is : ' + GokuImputx4);
           
 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


        
           });




       //backspace button
           $('#backSpaceGokux4').click(function(){

           var getInput = GokuImputx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImputx4 = newInput;
            $('.GokuImputx4').attr('value', GokuImputx4);
     
           console.log('New input is : ' + GokuImputx4)
            

 userInputx4 = parseInt(MikeImputx4) + parseInt(JeffImputx4) + parseInt(MariaImputx4) + parseInt(JohnImputx4) + parseInt(LeahImputx4) + parseInt(PaulImputx4) + parseInt(JennyImputx4) + parseInt(GokuImputx4);
 $('.qtyvalue2x4').attr('value', userInputx4);


       });






//////////////////






$('#closeSer2Panelsx4, .SubmitMemox4, .Confirm2Yx4, .OperationEndedPanelx4, .ConfirmRemitx4').click(function(){


$('.WriteMemox4, .TMemox4, .FriendMemox4').fadeOut();

      userInputx4= "0.00";
      $(".qtyvalue2x4").attr('value', userInputx4);
      console.log('.confirm2Yx4userInputx4 =' + userInputx4);


});


// ////////Machine Horizontal//////////////////////

$('.ToggleFriendsMachineHorizx4').click(function(){

   $('.friendsx4').toggleClass('friendsMachineHorizx4');
   $('.SpecifySendReQAmountx4').toggleClass('SpecifySendReQAmountMachineHorizx4');
   $('.ContactNamex4').toggleClass('ContactNameMachineHorizx4');
   $('.MikeBx4').toggleClass('MikeBMachineHorizx4');
   $('.FriendMemox4 ').toggleClass('FriendMemoMachineHorizx4');

});

// ////////Machine Horizontal//////////////////////



$('.ToogleLSx4').click(function(){

   $(this).hide('');
   $('.ToogleLShowParrax4').show('');

  $('.friendsx4').toggleClass('friendsMOBIxLinearx4'); 
  $('.ContactNamex4').toggleClass('ContactNameLinearx4');
  $('.SpecifySendReQAmountx4').toggleClass('SpecifySendReQAmountLinearx4');
  $('.Mikex4').toggleClass('MikeLinearx4');
  $('.MikeBx4').toggleClass('MikeBLinearx4');
  $('.servicePanelParraBottomx4').toggleClass('servicePanelParraBottomLinearx4');
  $('.servicePanelParraBottomx4').hide('');
  $('.FriendMemoMOBIx4 ').toggleClass('FriendMemoMOBIxLinearx4');

  $('.friendsNoShowx4').toggleClass('friendsNoShowLinearx4');  


});


$('.ToogleLShowParrax4').click(function(){

   $(this).hide('');
   $('.ToogleLSx4').show('');

  $('.friendsx4').toggleClass('friendsMOBIxLinearx4'); 
  $('.ContactNamex4').toggleClass('ContactNameLinearx4');
  $('.SpecifySendReQAmountx4').toggleClass('SpecifySendReQAmountLinearx4');
  $('.Mikex4').toggleClass('MikeLinearx4');
  $('.MikeBx4').toggleClass('MikeBLinearx4');
  $('.servicePanelParraBottomx4').toggleClass('servicePanelParraBottomLinearx4');
  $('.FriendMemoMOBIx4 ').toggleClass('FriendMemoMOBIxLinearx4');

  $('.friendsNoShowx4').toggleClass('friendsNoShowLinearx4');  


  $('.servicePanelParraBottomx4').show('');


});




PbillType = "NoToggled";

$('.pbshape01x4').click(function(){
  
  PbillType = "Toggled";
  $(this).hide();
  $('.pbshape02x4').show()
  $('.PBillImputLabelx4').toggleClass('HidePbillInputx4');
  $('.NumPadx4').hide();
  $('.pyx4').show();

});




$('.pbshape02x4').click(function(){

  PbillType = "NoToggled";
  $(this).hide();
  $('.pbshape01x4').show()
  $('.PBillImputLabelx4').toggleClass('HidePbillInputx4');

  $('.pyx4').hide();
  $('.numVx4').show();

});








$('.PbillsRegularx4').click(function(){
  $(this).hide('');
  PbillType = "NoToggled";
  $('.pbshape2x4').show();
 $('.SelectBillPayx4').hide('');
 $('.PBRegularx4').show('');
 $('.pyx4').hide('');
 $('.numVx4').show('');
});


$('.PbillsLinearPlusx4').click(function(){
  $(this).hide('');
  PbillType = "NoToggled";
  $('.pbshape3x4').show();
 $('.SelectBillPayx4').hide('');
 $('.PBLinearPlusx4').show('');
  $('.pyx4').hide('');
  $('.numVx4').show('');
});


$('.PbillsDoublex4').click(function(){
  $(this).hide('');
  PbillType = "Toggled";
  $('.pbshape4x4').show();
 $('.SelectBillPayx4').hide('');
 $('.PBDoublex4').show('');
  $('.numVx4, .NumPadx4').hide('');
  $('.pyx4').show('');
});


$('.PbillsLinearx4').click(function(){
  $(this).hide('');
  PbillType = "Toggled";
  $('.pbshape5x4').show();
 $('.SelectBillPayx4').hide('');
 $('.PBLinix4').show('');
  $('.numVx4, .NumPadx4').hide('');
  $('.pyx4').show('');
});


$('.PbillsTripletsx4').click(function(){
  $(this).hide('');
  PbillType = "Toggled";
  $('.pbshape1x4').show();
 $('.SelectBillPayx4').hide('');
 $('.PBTripletsx4').show('');
  $('.numVx4, .NumPadx4').hide('');
  $('.pyx4').show('');
});












////////////////Wire Transfer x4///////////////////////////
///////////////////////////////////////////////////////////




$('#sendx4').click(function(){

 console.log("Service value x4 is = " + serviceValuex4);

serviceValuex4='WireTransfer';
tofValuex4 = 'waived';

  $('.submit2Yx4, .exit2Yx4').hide();
  $('.SelectSendOrRequestx4').fadeIn();
  $('.SelectBuyOrSellx4').hide();

$('.sendMoney2x4').fadeIn('slow');


    $('#cheTsavx4').hide();
    $('#savTchex4').hide();


  WrtNamex4='';
  WrtAccountNUmberx4='';
  WrtRoutingNUmberx4='';
  WrtTelephonex4='';
  WrtZipCodex4='';







         $('.WrtNameInputx4').attr('value', WrtNamex4);
         $('.WrtAccountInputx4').attr('value', WrtAccountNUmberx4);
         $('.WrtRoutingInputx4').attr('value', WrtRoutingNUmberx4);
         $('.WrtTelephoneInputx4').attr('value', WrtTelephonex4);
         $('.WrtZipCodeInputx4').attr('value', WrtZipCodex4);


 
userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);



    console.log("Service value x4 is = " + serviceValuex4);



  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);

});






















// /////////////////////////////////
WrtLabelx4="";

$('.WrtLabelx4').click(function(){
WrtLabelx4 = $(this).attr('value');
console.log("The selected WrtLabelx4 is = " + WrtLabelx4);

});








/////////////////////



$('.NameWrLabelx4').click(function(){

});




//////////////////








/////////////////////



$('.NoAccWrLabelx4').click(function(){




console.log('Wrt Name Label x4 was selected');

 WrtAccountNUmberx4 = "";
 $('.WrtAccountInputx4').attr('value', WrtAccountNUmberx4);


 $('.NumPadx4').hide();
 $('.numCCx4').show();

});




 $('.numCCx4').click(function(){

         WrtAccountNUmberx4+= $(this).attr("value");
          
          $('.WrtAccountInputx4').attr('value', WrtAccountNUmberx4);

           });



       //backspace button
           $('#backSpaceCCx4').click(function(){

           var getInput = WrtAccountNUmberx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmberx4 = newInput;
            $('.WrtAccountInputx4').attr('value', WrtAccountNUmberx4);
     
           console.log('New input is : ' + WrtAccountNUmberx4);
            


       });




//////////////////




/////////////////////



$('.NoRoutWrLabelx4').click(function(){




console.log('Wrt Name Label x4 was selected');

 WrtRoutingNUmberx4 = "";
 $('.WrtRoutingInputx4').attr('value', WrtRoutingNUmberx4);


 $('.NumPadx4').hide();
 $('.numRx4').show();

});




 $('.numRx4').click(function(){

         WrtRoutingNUmberx4+= $(this).attr("value");
          
          $('.WrtRoutingInputx4').attr('value', WrtRoutingNUmberx4);

           });



       //backspace button
           $('#backSpaceRx4').click(function(){

           var getInput = WrtRoutingNUmberx4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmberx4 = newInput;
            $('.WrtRoutingInputx4').attr('value', WrtRoutingNUmberx4);
     
           console.log('New input is : ' + WrtRoutingNUmberx4);
            


       });




//////////////////




/////////////////////



$('.NoPhoneWrLabelx4').click(function(){




console.log('Wrt Name Label x4 was selected');

 WrtTelephonex4 = "";
 $('.WrtTelephoneInputx4').attr('value', WrtTelephonex4);


 $('.NumPadx4').hide();
 $('.numSwTelx4').show();

});




 $('.numSwTelx4').click(function(){

          WrtTelephonex4+= $(this).attr("value");
          
          $('.WrtTelephoneInputx4').attr('value', WrtTelephonex4);

           });



       //backspace button
           $('#backSpaceSwTelx4').click(function(){

           var getInput = WrtTelephonex4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephonex4 = newInput;
           $('.WrtTelephoneInputx4').attr('value', WrtTelephonex4);
     
           console.log('New input is : ' + WrtTelephonex4);
            


});




//////////////////





/////////////////////



$('.NoZipWrLabelx4').click(function(){




console.log('Wrt Name Label x4 was selected');

 WrtZipCodex4 = "";
 $('.WrtZipCodeInputx4').attr('value', WrtZipCodex4);


 $('.NumPadx4').hide();
 $('.numSwZipx4').show();
 
});




 $('.numSwZipx4').click(function(){

         WrtZipCodex4+= $(this).attr("value");
          
          $('.WrtZipCodeInputx4').attr('value', WrtZipCodex4);

           });



       //backspace button
           $('#backSpaceSwZipx4').click(function(){

           var getInput = WrtZipCodex4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCodex4 = newInput;
            $('.WrtZipCodeInputx4').attr('value', WrtZipCodex4);
     
           console.log('New input is : ' + WrtZipCodex4);
            


});






////////////////end of Wire Transfer x4///////////////////////////
///////////////////////////////////////////////////////////






// /////////  Loans////////////////////////


$('#Loanx4').click(function(){

serviceValuex4 = 'Loan';

$('.TakeLoanx4').fadeIn();
$('.ToogleLoansToLinearx4').fadeIn();


$('.SelectOrx4').show();


         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);

});



$('.SelectSendOrRequestx4, .SelectOrx4').click(function(){

  $(this).hide();
  $('.confBack2Yx4').fadeIn();


});







inputLoan1x4=0;
inputLoan2x4=0;
inputLoan3x4=0;
inputLoan4x4=0;




         $('.inputLoan4x4').attr('value', inputLoan1x4);
         $('.inputLoan4x4').attr('value', inputLoan2x4);
         $('.inputLoan4x4').attr('value', inputLoan3x4);
         $('.inputLoan4x4').attr('value', inputLoan4x4);


 
userInputx4 = '0.00';
$('.qtyvalue2x4').attr('value', userInputx4);



console.log("Service value x4 is = " + serviceValuex4);



  console.log("Service value is = " + serviceValuex4);
  console.log("tofvalue is = " + tofValuex4);

});











$('.NumPadx4').click(function(){

if (inputLoan1x4 === '0' || 0){
  inputLoan1x4 = '';
}


if (inputLoan2x4 === '0' || 0){
  inputLoan2x4 = '';
}

if (inputLoan3x4 === '0' || 0){
  inputLoan3x4 = '';
}


if (inputLoan4x4 === '0' || 0){
  inputLoan4x4 = '';
}

});






inputLoan1x4=0;
inputLoan2x4=0;
inputLoan3x4=0;
inputLoan4x4=0;








/////////////////////



$('.Loan1x4').click(function(){


$('.EnterLoan1x4').show();


console.log('Mike x4 was selected');

 inputLoan1x4 = 0;
 $('.inputLoan1x4').attr('value', inputLoan1x4);


   $('#Mikex4 > span, .inputLoan1x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTLoan1x4').show();




 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTLoan1x4').click(function(){

  if (inputLoan1x4 === 0 ){
    inputLoan1x4 = '';
  }
});

// ///////




 $('.numTLoan1x4').click(function(){

          inputLoan1x4 += $(this).attr("value");
          // $('.inputLoan1x4').attr('value', inputLoan1x4);


          $('.inputLoan1x4').attr('value', inputLoan1x4);

           console.log("current Friend 1 imput x4 number is :" + inputLoan1x4);
           console.log('New Friend1 imput x4 is : ' + inputLoan1x4);
           
 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTLoan1x4').click(function(){

           var getInput = inputLoan1x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan1x4 = newInput;
            $('.inputLoan1x4').attr('value', inputLoan1x4);
     
           console.log('New input is : ' + inputLoan1x4)
            

 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////////



/////////////////////



$('.Loan2x4').click(function(){


$('.EnterLoan2x4').show();


console.log('Mike x4 was selected');

 inputLoan2x4 = 0;
 $('.inputLoan2x4').attr('value', inputLoan2x4);


   $('#Mikex4 > span, .inputLoan2x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTLoan2x4').show();




 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTLoan2x4').click(function(){

  if (inputLoan2x4 === 0 ){
    inputLoan2x4 = '';
  }
});

// ///////




 $('.numTLoan2x4').click(function(){

          inputLoan2x4 += $(this).attr("value");
          // $('.inputLoan2x4').attr('value', inputLoan2x4);


          $('.inputLoan2x4').attr('value', inputLoan2x4);

           console.log("current Friend 1 imput x4 number is :" + inputLoan2x4);
           console.log('New Friend1 imput x4 is : ' + inputLoan2x4);
           
 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTLoan2x4').click(function(){

           var getInput = inputLoan2x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan2x4 = newInput;
            $('.inputLoan2x4').attr('value', inputLoan2x4);
     
           console.log('New input is : ' + inputLoan2x4)
            

 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////


/////////////////////



$('.Loan3x4').click(function(){


$('.EnterLoan3x4').show();


console.log('Mike x4 was selected');

 inputLoan3x4 = 0;
 $('.inputLoan3x4').attr('value', inputLoan3x4);


   $('#Mikex4 > span, .inputLoan3x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTLoan3x4').show();




 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTLoan3x4').click(function(){

  if (inputLoan3x4 === 0 ){
    inputLoan3x4 = '';
  }
});

// ///////




 $('.numTLoan3x4').click(function(){

          inputLoan3x4 += $(this).attr("value");
          // $('.inputLoan3x4').attr('value', inputLoan3x4);


          $('.inputLoan3x4').attr('value', inputLoan3x4);

           console.log("current Friend 1 imput x4 number is :" + inputLoan3x4);
           console.log('New Friend1 imput x4 is : ' + inputLoan3x4);
           
 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTLoan3x4').click(function(){

           var getInput = inputLoan3x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan3x4 = newInput;
            $('.inputLoan3x4').attr('value', inputLoan3x4);
     
           console.log('New input is : ' + inputLoan3x4)
            

 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });




//////////////////



/////////////////////



$('.Loan4x4').click(function(){


$('.EnterLoan4x4').show();


console.log('Mike x4 was selected');

 inputLoan4x4 = 0;
 $('.inputLoan4x4').attr('value', inputLoan4x4);


   $('#Mikex4 > span, .inputLoan4x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTLoan4x4').show();




 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTLoan4x4').click(function(){

  if (inputLoan4x4 === 0 ){
    inputLoan4x4 = '';
  }
});

// ///////




 $('.numTLoan4x4').click(function(){

          inputLoan4x4 += $(this).attr("value");
          // $('.inputLoan4x4').attr('value', inputLoan4x4);


          $('.inputLoan4x4').attr('value', inputLoan4x4);

           console.log("current Friend 1 imput x4 number is :" + inputLoan4x4);
           console.log('New Friend1 imput x4 is : ' + inputLoan4x4);
           
 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTLoan4x4').click(function(){

           var getInput = inputLoan4x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputLoan4x4 = newInput;
            $('.inputLoan4x4').attr('value', inputLoan4x4);
     
           console.log('New input is : ' + inputLoan4x4)
            

 userInputx4 =  parseInt(inputLoan1x4) + parseInt(inputLoan2x4) + parseInt(inputLoan3x4) + parseInt(inputLoan4x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////
$('.ToogleLoansToLinearx4').click(function(){
$(this).hide();
$('.ToogleLoansToSquarex4').show();
});


$('.ToogleLoansToSquarex4').click(function(){
$(this).hide();
$('.ToogleLoansToLinearx4').show();
});



$('.ToogleLoansToLinearx4, .ToogleLoansToSquarex4').click(function(){

$('.Loanx4').toggleClass('LinearLoanx4');
$('.LoanNamex4').toggleClass('LinearLoanNamex4');
$('.LoanBadgeAndnamex4').toggleClass('LinearLoanBadgeAndnamex4');
$('.LoanAndAbrex4').toggleClass('LinearLoanAndAbrex4');
$('.MyCurrentPricex4').toggleClass('LinearMyCurrentPricex4');
$('.EnterLoanQtyx4').toggleClass('LinearEnterLoanQtyx4');


});










// /////////  Loans////////////////////////




// /////////Buy sell Assets////////////////////////


$('#BSassetsx4').click(function(){

serviceValuex4 = 'Assets';
console.log("Service value x4 is = " + serviceValuex4);
console.log("Service value is = " + serviceValuex4);
console.log("tofvalue is = " + tofValuex4);

$('.BuyAssetsx4').fadeIn();
// $('.ToogleAssetsToLinearx4').fadeIn();
$('.submit2Yx4, .exit2Yx4, .SelectSendOrRequestx4').hide();

$('.SelectBuyOrSellx4').show();

         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);



inputAsset1x4=0;
inputAsset2x4=0;
inputAsset3x4=0;
inputAsset4x4=0;




         $('.inputAsset4x4').attr('value', inputAsset1x4);
         $('.inputAsset4x4').attr('value', inputAsset2x4);
         $('.inputAsset4x4').attr('value', inputAsset3x4);
         $('.inputAsset4x4').attr('value', inputAsset4x4);

});



$('.SelectSendOrRequestx4, .SelectBuyOrSellx4, .SelectChargeOrRefundx4').click(function(){

  $(this).hide();
  $('.confBack2Yx4').fadeIn();


});







inputAsset1x4=0;
inputAsset2x4=0;
inputAsset3x4=0;
inputAsset4x4=0;
inputAsset5x4=0;
inputAsset6x4=0;
inputAsset7x4=0;
inputAsset8x4=0;
inputAsset9x4=0;




         $('.inputAsset1x4').attr('value', inputAsset1x4);
         $('.inputAsset2x4').attr('value', inputAsset2x4);
         $('.inputAsset3x4').attr('value', inputAsset3x4);
         $('.inputAsset4x4').attr('value', inputAsset4x4);
         $('.inputAsset5x4').attr('value', inputAsset5x4);
         $('.inputAsset6x4').attr('value', inputAsset6x4);
         $('.inputAsset7x4').attr('value', inputAsset7x4);
         $('.inputAsset8x4').attr('value', inputAsset8x4);
         $('.inputAsset9x4').attr('value', inputAsset9x4);         


 








// /////////////////////////////////
  SelectedAssetx4=""


$('.Assetx4').click(function(){
    SelectedFriendx4 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedAssetx4);

    $('.SelectBuyOrSellx4').show();
    $('.confBack2Yx4, .pyx4').hide();

});





$('.NumPadx4').click(function(){

if (inputAsset1x4 === '0' || 0){
  inputAsset1x4 = '';
}


if (inputAsset2x4 === '0' || 0){
  inputAsset2x4 = '';
}

if (inputAsset3x4 === '0' || 0){
  inputAsset3x4 = '';
}


if (inputAsset4x4 === '0' || 0){
  inputAsset4x4 = '';
}

if (inputAsset5x4 === '0' || 0){
  inputAsset5x4 = '';
}

if (inputAsset6x4 === '0' || 0){
  inputAsset6x4 = '';
}

if (inputAsset7x4 === '0' || 0){
  inputAsset7x4 = '';
}

if (inputAsset8x4 === '0' || 0){
  inputAsset8x4 = '';
}

if (inputAsset9x4 === '0' || 0){
  inputAsset9x4 = '';

}

});






inputAsset1x4=0;
inputAsset2x4=0;
inputAsset3x4=0;
inputAsset4x4=0;
inputAsset5x4=0;
inputAsset6x4=0;
inputAsset7x4=0;
inputAsset8x4=0;
inputAsset9x4=0;










/////////////////////



$('.Asset1x4').click(function(){


$('.EnterAsset1x4').show();


console.log('Mike x4 was selected');

 inputAsset1x4 = 0;
 $('.inputAsset1x4').attr('value', inputAsset1x4);


   $('#Mikex4 > span, .inputAsset1x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset1x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset1x4').click(function(){

  if (inputAsset1x4 === 0 ){
    inputAsset1x4 = '';
  }
});

// ///////




 $('.numAsset1x4').click(function(){

          inputAsset1x4 += $(this).attr("value");
          // $('.inputAsset1x4').attr('value', inputAsset1x4);


          $('.inputAsset1x4').attr('value', inputAsset1x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset1x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset1x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset1x4').click(function(){

           var getInput = inputAsset1x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset1x4 = newInput;
            $('.inputAsset1x4').attr('value', inputAsset1x4);
     
           console.log('New input is : ' + inputAsset1x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////////



/////////////////////



$('.Asset2x4').click(function(){


$('.EnterAsset2x4').show();


console.log('Mike x4 was selected');

 inputAsset2x4 = 0;
 $('.inputAsset2x4').attr('value', inputAsset2x4);


   $('#Mikex4 > span, .inputAsset2x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset2x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset2x4').click(function(){

  if (inputAsset2x4 === 0 ){
    inputAsset2x4 = '';
  }
});

// ///////




 $('.numAsset2x4').click(function(){

          inputAsset2x4 += $(this).attr("value");
          // $('.inputAsset2x4').attr('value', inputAsset2x4);


          $('.inputAsset2x4').attr('value', inputAsset2x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset2x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset2x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset2x4').click(function(){

           var getInput = inputAsset2x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset2x4 = newInput;
            $('.inputAsset2x4').attr('value', inputAsset2x4);
     
           console.log('New input is : ' + inputAsset2x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////


/////////////////////



$('.Asset3x4').click(function(){


$('.EnterAsset3x4').show();


console.log('Mike x4 was selected');

 inputAsset3x4 = 0;
 $('.inputAsset3x4').attr('value', inputAsset3x4);


   $('#Mikex4 > span, .inputAsset3x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset3x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset3x4').click(function(){

  if (inputAsset3x4 === 0 ){
    inputAsset3x4 = '';
  }
});

// ///////




 $('.numAsset3x4').click(function(){

          inputAsset3x4 += $(this).attr("value");
          // $('.inputAsset3x4').attr('value', inputAsset3x4);


          $('.inputAsset3x4').attr('value', inputAsset3x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset3x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset3x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset3x4').click(function(){

           var getInput = inputAsset3x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset3x4 = newInput;
            $('.inputAsset3x4').attr('value', inputAsset3x4);
     
           console.log('New input is : ' + inputAsset3x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });




//////////////////



/////////////////////



$('.Asset4x4').click(function(){


$('.EnterAsset4x4').show();


console.log('Mike x4 was selected');

 inputAsset4x4 = 0;
 $('.inputAsset4x4').attr('value', inputAsset4x4);


   $('#Mikex4 > span, .inputAsset4x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset4x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset4x4').click(function(){

  if (inputAsset4x4 === 0 ){
    inputAsset4x4 = '';
  }
});

// ///////




 $('.numAsset4x4').click(function(){

          inputAsset4x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset4x4').attr('value', inputAsset4x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset4x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset4x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset4x4').click(function(){

           var getInput = inputAsset4x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset4x4 = newInput;
            $('.inputAsset4x4').attr('value', inputAsset4x4);
     
           console.log('New input is : ' + inputAsset4x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Asset5x4').click(function(){


$('.EnterAsset5x4').show();


console.log('Mike x4 was selected');

 inputAsset5x4 = 0;
 $('.inputAsset5x4').attr('value', inputAsset5x4);


   $('#Mikex4 > span, .inputAsset5x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset5x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset5x4').click(function(){

  if (inputAsset5x4 === 0 ){
    inputAsset5x4 = '';
  }
});

// ///////




 $('.numAsset5x4').click(function(){

          inputAsset5x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset5x4').attr('value', inputAsset5x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset5x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset5x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset5x4').click(function(){

           var getInput = inputAsset5x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset5x4 = newInput;
            $('.inputAsset5x4').attr('value', inputAsset5x4);
     
           console.log('New input is : ' + inputAsset5x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Asset6x4').click(function(){


$('.EnterAsset6x4').show();


console.log('Mike x4 was selected');

 inputAsset6x4 = 0;
 $('.inputAsset6x4').attr('value', inputAsset6x4);


   $('#Mikex4 > span, .inputAsset6x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset6x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset6x4').click(function(){

  if (inputAsset6x4 === 0 ){
    inputAsset6x4 = '';
  }
});

// ///////




 $('.numAsset6x4').click(function(){

          inputAsset6x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset6x4').attr('value', inputAsset6x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset6x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset6x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset6x4').click(function(){

           var getInput = inputAsset6x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset6x4 = newInput;
            $('.inputAsset6x4').attr('value', inputAsset6x4);
     
           console.log('New input is : ' + inputAsset6x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////


/////////////////////



$('.Asset7x4').click(function(){


$('.EnterAsset7x4').show();


console.log('Mike x4 was selected');

 inputAsset7x4 = 0;
 $('.inputAsset7x4').attr('value', inputAsset7x4);


   $('#Mikex4 > span, .inputAsset7x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset7x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset7x4').click(function(){

  if (inputAsset7x4 === 0 ){
    inputAsset7x4 = '';
  }
});

// ///////




 $('.numAsset7x4').click(function(){

          inputAsset7x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset7x4').attr('value', inputAsset7x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset7x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset7x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset7x4').click(function(){

           var getInput = inputAsset7x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset7x4 = newInput;
            $('.inputAsset7x4').attr('value', inputAsset7x4);
     
           console.log('New input is : ' + inputAsset7x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Asset8x4').click(function(){


$('.EnterAsset8x4').show();


console.log('Mike x4 was selected');

 inputAsset8x4 = 0;
 $('.inputAsset8x4').attr('value', inputAsset8x4);


   $('#Mikex4 > span, .inputAsset8x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset8x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset8x4').click(function(){

  if (inputAsset8x4 === 0 ){
    inputAsset8x4 = '';
  }
});

// ///////




 $('.numAsset8x4').click(function(){

          inputAsset8x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset8x4').attr('value', inputAsset8x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset8x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset8x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset8x4').click(function(){

           var getInput = inputAsset8x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset8x4 = newInput;
            $('.inputAsset8x4').attr('value', inputAsset8x4);
     
           console.log('New input is : ' + inputAsset8x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////

/////////////////////



$('.Asset9x4').click(function(){


$('.EnterAsset9x4').show();


console.log('Mike x4 was selected');

 inputAsset9x4 = 0;
 $('.inputAsset9x4').attr('value', inputAsset9x4);


   $('#Mikex4 > span, .inputAsset9x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numAsset9x4').show();




 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numAsset9x4').click(function(){

  if (inputAsset9x4 === 0 ){
    inputAsset9x4 = '';
  }
});

// ///////




 $('.numAsset9x4').click(function(){

          inputAsset9x4 += $(this).attr("value");
          // $('.inputAsset4x4').attr('value', inputAsset4x4);


          $('.inputAsset9x4').attr('value', inputAsset9x4);

           console.log("current Friend 1 imput x4 number is :" + inputAsset9x4);
           console.log('New Friend1 imput x4 is : ' + inputAsset9x4);
           
 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceAsset9x4').click(function(){

           var getInput = inputAsset9x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputAsset9x4 = newInput;
            $('.inputAsset9x4').attr('value', inputAsset9x4);
     
           console.log('New input is : ' + inputAsset9x4)
            

 userInputx4 =  parseInt(inputAsset1x4) + parseInt(inputAsset2x4) + parseInt(inputAsset3x4) + parseInt(inputAsset4x4) + parseInt(inputAsset5x4) + parseInt(inputAsset6x4) +parseInt(inputAsset7x4) + parseInt(inputAsset8x4) + parseInt(inputAsset9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////





$('.ToogleAssetsToRectanglex4').click(function(){
    $(this).hide();
    $('.ToogleAssetsToLinearx4').show();
});


$('.ToogleAssetsToLinearx4').click(function(){
    $(this).hide();
    $('.ToogleAssetsToSquarex4').show();
});


$('.ToogleAssetsToSquarex4').click(function(){
    $(this).hide();
    $('.ToogleAssetsToMinix4').show();
});


$('.ToogleAssetsToMinix4').click(function(){
    $(this).hide();
    $('.ToogleAssetsToRectanglex4').show();
});




$('.ToogleAssetsToRectanglex4').click(function(){

$('.Assetx4').addClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').addClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').addClass('RectangledEnterAssetQtyMOBIx4');


$('.AssetMOBIx4').removeClass('MiniAssetMOBIx4 '); 
$('.AssetSymbolMOBIx4').removeClass('MiniAssetSymbolMOBIx4 '); 
$('.AssetNameMOBIx4').removeClass('MiniAssetNameMOBIx4');
$('.IhaveThisMuchMOBIx4').removeClass('MiniIhaveThisMuchMOBIx4');
$('.MyAssetinRealValMOBIx4').removeClass('MiniMyAssetinRealValMOBIx4');
$('.EnterAssetQtyMOBIx4').removeClass('MiniEnterAssetQtyMOBIx4');
$('.InputAssetQtyMOBIx4').removeClass('MiniInputAssetQtyMOBIx4');



});




$('.ToogleAssetsToLinearx4').click(function(){

$('.Assetx4').addClass('LinearAssetx4');
$('.AssetNamex4').addClass('LinearAssetNamex4');
$('.AssetBadgeAndnamex4').addClass('LinearAssetBadgeAndnamex4');
$('.AssetAndAbrex4').addClass('LinearAssetAndAbrex4');
$('.MyCurrentPricex4').addClass('LinearMyCurrentPricex4');
$('.EnterAssetQtyx4').addClass('LinearEnterAssetQtyx4');

$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');


});



$('.ToogleAssetsToSquarex4').click(function(){

$('.Assetx4').removeClass('LinearAssetx4');
$('.AssetNamex4').removeClass('LinearAssetNamex4');
$('.AssetBadgeAndnamex4').removeClass('LinearAssetBadgeAndnamex4');
$('.AssetAndAbrex4').removeClass('LinearAssetAndAbrex4');
$('.MyCurrentPricex4').removeClass('LinearMyCurrentPricex4');
$('.EnterAssetQtyx4').removeClass('LinearEnterAssetQtyx4');

$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');


});





$('.ToogleAssetsToMinix4').click(function(){

$('.AssetMOBIx4').addClass('MiniAssetMOBIx4 '); 
$('.AssetSymbolMOBIx4').addClass('MiniAssetSymbolMOBIx4 '); 
$('.AssetNameMOBIx4').addClass('MiniAssetNameMOBIx4');
$('.IhaveThisMuchMOBIx4').addClass('MiniIhaveThisMuchMOBIx4');
$('.MyAssetinRealValMOBIx4').addClass('MiniMyAssetinRealValMOBIx4');
$('.EnterAssetQtyMOBIx4').addClass('MiniEnterAssetQtyMOBIx4');
$('.InputAssetQtyMOBIx4').addClass('MiniInputAssetQtyMOBIx4');




$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');

$('.Assetx4').removeClass('LinearAssetx4');
$('.AssetNamex4').removeClass('LinearAssetNamex4');
$('.AssetBadgeAndnamex4').removeClass('LinearAssetBadgeAndnamex4');
$('.AssetAndAbrex4').removeClass('LinearAssetAndAbrex4');
$('.MyCurrentPricex4').removeClass('LinearMyCurrentPricex4');
$('.EnterAssetQtyx4').removeClass('LinearEnterAssetQtyx4');



});









// /////////Buy sell Assets////////////////////////







// /////////Make sell Transfers////////////////////////


$('#MTransferx4').click(function(){

serviceValuex4 = 'Transfer';
console.log("Service value x4 is = " + serviceValuex4);
console.log("Service value is = " + serviceValuex4);
console.log("tofvalue is = " + tofValuex4);

$('.MakeTransferx4').fadeIn();
// $('.ToogleTransfersToLinearx4').fadeIn();


$('.SelectMakeOrSellx4').show();

         userInputx4 ="0.00";
         $('.qtyvalue2x4').attr('value', userInputx4);



inputTransfer1x4=0;
inputTransfer2x4=0;
inputTransfer3x4=0;
inputTransfer4x4=0;




         $('.inputTransfer4x4').attr('value', inputTransfer1x4);
         $('.inputTransfer4x4').attr('value', inputTransfer2x4);
         $('.inputTransfer4x4').attr('value', inputTransfer3x4);
         $('.inputTransfer4x4').attr('value', inputTransfer4x4);

});



$('.SelectSendOrRequestx4, .SelectMakeOrSellx4').click(function(){

  $(this).hide();
  $('.confBack2Yx4').fadeIn();


});







inputTransfer1x4=0;
inputTransfer2x4=0;
inputTransfer3x4=0;
inputTransfer4x4=0;
inputTransfer5x4=0;
inputTransfer6x4=0;
inputTransfer7x4=0;
inputTransfer8x4=0;
inputTransfer9x4=0;




         $('.inputTransfer4x4').attr('value', inputTransfer1x4);
         $('.inputTransfer4x4').attr('value', inputTransfer2x4);
         $('.inputTransfer4x4').attr('value', inputTransfer3x4);
         $('.inputTransfer4x4').attr('value', inputTransfer4x4);
         $('.inputTransfer5x4').attr('value', inputTransfer5x4);
         $('.inputTransfer6x4').attr('value', inputTransfer6x4);
         $('.inputTransfer7x4').attr('value', inputTransfer7x4);
         $('.inputTransfer8x4').attr('value', inputTransfer8x4);
         $('.inputTransfer9x4').attr('value', inputTransfer9x4);         


 








// /////////////////////////////////
  SelectedTransferx4="";


  $('.Transferx4').click(function(){
    SelectedFriendx4 = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedTransferx4);

});





$('.NumPadx4').click(function(){

if (inputTransfer1x4 === '0' || 0){
  inputTransfer1x4 = '';
}


if (inputTransfer2x4 === '0' || 0){
  inputTransfer2x4 = '';
}

if (inputTransfer3x4 === '0' || 0){
  inputTransfer3x4 = '';
}


if (inputTransfer4x4 === '0' || 0){
  inputTransfer4x4 = '';
}

if (inputTransfer5x4 === '0' || 0){
  inputTransfer5x4 = '';
}

if (inputTransfer6x4 === '0' || 0){
  inputTransfer6x4 = '';
}

if (inputTransfer7x4 === '0' || 0){
  inputTransfer7x4 = '';
}

if (inputTransfer8x4 === '0' || 0){
  inputTransfer8x4 = '';
}

if (inputTransfer9x4 === '0' || 0){
  inputTransfer9x4 = '';

}

});






inputTransfer1x4=0;
inputTransfer2x4=0;
inputTransfer3x4=0;
inputTransfer4x4=0;
inputTransfer5x4=0;
inputTransfer6x4=0;
inputTransfer7x4=0;
inputTransfer8x4=0;
inputTransfer9x4=0;










/////////////////////



$('.Transfer1x4').click(function(){


$('.EnterTransfer1x4').show();


console.log('Mike x4 was selected');

 inputTransfer1x4 = 0;
 $('.inputTransfer1x4').attr('value', inputTransfer1x4);


   $('#Mikex4 > span, .inputTransfer1x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer1x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer1x4').click(function(){

  if (inputTransfer1x4 === 0 ){
    inputTransfer1x4 = '';
  }
});

// ///////




 $('.numTransfer1x4').click(function(){

          inputTransfer1x4 += $(this).attr("value");
          // $('.inputTransfer1x4').attr('value', inputTransfer1x4);


          $('.inputTransfer1x4').attr('value', inputTransfer1x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer1x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer1x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer1x4').click(function(){

           var getInput = inputTransfer1x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer1x4 = newInput;
            $('.inputTransfer1x4').attr('value', inputTransfer1x4);
     
           console.log('New input is : ' + inputTransfer1x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////////



/////////////////////



$('.Transfer2x4').click(function(){


$('.EnterTransfer2x4').show();


console.log('Mike x4 was selected');

 inputTransfer2x4 = 0;
 $('.inputTransfer2x4').attr('value', inputTransfer2x4);


   $('#Mikex4 > span, .inputTransfer2x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer2x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer2x4').click(function(){

  if (inputTransfer2x4 === 0 ){
    inputTransfer2x4 = '';
  }
});

// ///////




 $('.numTransfer2x4').click(function(){

          inputTransfer2x4 += $(this).attr("value");
          // $('.inputTransfer2x4').attr('value', inputTransfer2x4);


          $('.inputTransfer2x4').attr('value', inputTransfer2x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer2x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer2x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer2x4').click(function(){

           var getInput = inputTransfer2x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer2x4 = newInput;
            $('.inputTransfer2x4').attr('value', inputTransfer2x4);
     
           console.log('New input is : ' + inputTransfer2x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });


////////////////////////////////


/////////////////////



$('.Transfer3x4').click(function(){


$('.EnterTransfer3x4').show();


console.log('Mike x4 was selected');

 inputTransfer3x4 = 0;
 $('.inputTransfer3x4').attr('value', inputTransfer3x4);


   $('#Mikex4 > span, .inputTransfer3x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer3x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer3x4').click(function(){

  if (inputTransfer3x4 === 0 ){
    inputTransfer3x4 = '';
  }
});

// ///////




 $('.numTransfer3x4').click(function(){

          inputTransfer3x4 += $(this).attr("value");
          // $('.inputTransfer3x4').attr('value', inputTransfer3x4);


          $('.inputTransfer3x4').attr('value', inputTransfer3x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer3x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer3x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer3x4').click(function(){

           var getInput = inputTransfer3x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer3x4 = newInput;
            $('.inputTransfer3x4').attr('value', inputTransfer3x4);
     
           console.log('New input is : ' + inputTransfer3x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });




//////////////////



/////////////////////



$('.Transfer4x4').click(function(){


$('.EnterTransfer4x4').show();


console.log('Mike x4 was selected');

 inputTransfer4x4 = 0;
 $('.inputTransfer4x4').attr('value', inputTransfer4x4);


   $('#Mikex4 > span, .inputTransfer4x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer4x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer4x4').click(function(){

  if (inputTransfer4x4 === 0 ){
    inputTransfer4x4 = '';
  }
});

// ///////




 $('.numTransfer4x4').click(function(){

          inputTransfer4x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer4x4').attr('value', inputTransfer4x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer4x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer4x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer4x4').click(function(){

           var getInput = inputTransfer4x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer4x4 = newInput;
            $('.inputTransfer4x4').attr('value', inputTransfer4x4);
     
           console.log('New input is : ' + inputTransfer4x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Transfer5x4').click(function(){


$('.EnterTransfer5x4').show();


console.log('Mike x4 was selected');

 inputTransfer5x4 = 0;
 $('.inputTransfer5x4').attr('value', inputTransfer5x4);


   $('#Mikex4 > span, .inputTransfer5x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer5x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer5x4').click(function(){

  if (inputTransfer5x4 === 0 ){
    inputTransfer5x4 = '';
  }
});

// ///////




 $('.numTransfer5x4').click(function(){

          inputTransfer5x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer5x4').attr('value', inputTransfer5x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer5x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer5x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer5x4').click(function(){

           var getInput = inputTransfer5x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer5x4 = newInput;
            $('.inputTransfer5x4').attr('value', inputTransfer5x4);
     
           console.log('New input is : ' + inputTransfer5x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Transfer6x4').click(function(){


$('.EnterTransfer6x4').show();


console.log('Mike x4 was selected');

 inputTransfer6x4 = 0;
 $('.inputTransfer6x4').attr('value', inputTransfer6x4);


   $('#Mikex4 > span, .inputTransfer6x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer6x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer6x4').click(function(){

  if (inputTransfer6x4 === 0 ){
    inputTransfer6x4 = '';
  }
});

// ///////




 $('.numTransfer6x4').click(function(){

          inputTransfer6x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer6x4').attr('value', inputTransfer6x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer6x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer6x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer6x4').click(function(){

           var getInput = inputTransfer6x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer6x4 = newInput;
            $('.inputTransfer6x4').attr('value', inputTransfer6x4);
     
           console.log('New input is : ' + inputTransfer6x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////


/////////////////////



$('.Transfer7x4').click(function(){


$('.EnterTransfer7x4').show();


console.log('Mike x4 was selected');

 inputTransfer7x4 = 0;
 $('.inputTransfer7x4').attr('value', inputTransfer7x4);


   $('#Mikex4 > span, .inputTransfer7x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer7x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer7x4').click(function(){

  if (inputTransfer7x4 === 0 ){
    inputTransfer7x4 = '';
  }
});

// ///////




 $('.numTransfer7x4').click(function(){

          inputTransfer7x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer7x4').attr('value', inputTransfer7x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer7x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer7x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer7x4').click(function(){

           var getInput = inputTransfer7x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer7x4 = newInput;
            $('.inputTransfer7x4').attr('value', inputTransfer7x4);
     
           console.log('New input is : ' + inputTransfer7x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////



/////////////////////



$('.Transfer8x4').click(function(){


$('.EnterTransfer8x4').show();


console.log('Mike x4 was selected');

 inputTransfer8x4 = 0;
 $('.inputTransfer8x4').attr('value', inputTransfer8x4);


   $('#Mikex4 > span, .inputTransfer8x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer8x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer8x4').click(function(){

  if (inputTransfer8x4 === 0 ){
    inputTransfer8x4 = '';
  }
});

// ///////




 $('.numTransfer8x4').click(function(){

          inputTransfer8x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer8x4').attr('value', inputTransfer8x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer8x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer8x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer8x4').click(function(){

           var getInput = inputTransfer8x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer8x4 = newInput;
            $('.inputTransfer8x4').attr('value', inputTransfer8x4);
     
           console.log('New input is : ' + inputTransfer8x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////

/////////////////////



$('.Transfer9x4').click(function(){


$('.EnterTransfer9x4').show();


console.log('Mike x4 was selected');

 inputTransfer9x4 = 0;
 $('.inputTransfer9x4').attr('value', inputTransfer9x4);


   $('#Mikex4 > span, .inputTransfer9x4').css('color','green');


 $('.NumPadx4').hide();
 $('.numTransfer9x4').show();




 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

});



///////////

$('.numTransfer9x4').click(function(){

  if (inputTransfer9x4 === 0 ){
    inputTransfer9x4 = '';
  }
});

// ///////




 $('.numTransfer9x4').click(function(){

          inputTransfer9x4 += $(this).attr("value");
          // $('.inputTransfer4x4').attr('value', inputTransfer4x4);


          $('.inputTransfer9x4').attr('value', inputTransfer9x4);

           console.log("current Friend 1 imput x4 number is :" + inputTransfer9x4);
           console.log('New Friend1 imput x4 is : ' + inputTransfer9x4);
           
 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);

        
           });




       //backspace button
           $('#backSpaceTransfer9x4').click(function(){

           var getInput = inputTransfer9x4;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          inputTransfer9x4 = newInput;
            $('.inputTransfer9x4').attr('value', inputTransfer9x4);
     
           console.log('New input is : ' + inputTransfer9x4)
            

 userInputx4 =  parseInt(inputTransfer1x4) + parseInt(inputTransfer2x4) + parseInt(inputTransfer3x4) + parseInt(inputTransfer4x4) + parseInt(inputTransfer5x4) + parseInt(inputTransfer6x4) +parseInt(inputTransfer7x4) + parseInt(inputTransfer8x4) + parseInt(inputTransfer9x4);
 $('.qtyvalue2x4').attr('value', userInputx4);




       });

//////////////////





$('.ToogleTransferToSelectx4').click(function(){
    $(this).hide();
    $('.ToogleTransferToColumnx4').show();
});


$('.ToogleTransferToColumnx4').click(function(){
    $(this).hide();
    $('.ToogleTransferToSelectx4').show();
});







$('.ToogleTransferToSelectx4').click(function(){
       
   $('.SelectTransferFromx4, .SelectTransferTox4, .arrowTransferx4').hide();
   $('.TransFromx4, .TransTox4, .arrowTransx4').show();

});




$('.ToogleTransferToColumnx4').click(function(){

   $('.TransFromx4, .TransTox4, .arrowTransx4').hide();
   $('.SelectTransferFromx4, .SelectTransferTox4, .arrowTransferx4').show();
       
});



// ///////change Trans From Option ////////



$('.liTransFrom1x4').click(function(){
console.log("li From 1 was clicked");
   $('.TransferHideFromx4').hide();
   $('.TransferHideFrom1x4').show();
       
});



$('.liTransFrom2x4').click(function(){
console.log("li From 2 was clicked");
   $('.TransferHideFromx4').hide();
   $('.TransferHideFrom2x4').show();
       
});



$('.liTransFrom3x4').click(function(){
console.log("li From 3 was clicked");
   $('.TransferHideFromx4').hide();
   $('.TransferHideFrom3x4').show();
       
});




$('.liTransFrom4x4').click(function(){
console.log("li From 4 was clicked");
   $('.TransferHideFromx4').hide();
   $('.TransferHideFrom4x4').show();
       
});




$('.liTransFrom5x4').click(function(){
console.log("li From 5 was clicked");
   $('.TransferHideFromx4').hide();
   $('.TransferHideFrom5x4').show();
       
});






// ///////change Trans From Option ////////



// ///////change Trans To Option ////////



$('.liTransTo1x4').click(function(){
  console.log('Li To 1 was Clicked');
   $('.TransferHideTox4').hide();
   $('.TransferHideTo1x4').show();
       
});



$('.liTransTo2x4').click(function(){
  console.log('Li To 2 was Clicked');
   $('.TransferHideTox4').hide();
   $('.TransferHideTo2x4').show();
       
});



$('.liTransTo3x4').click(function(){
  console.log('Li To 3 was Clicked');
   $('.TransferHideTox4').hide();
   $('.TransferHideTo3x4').show();
       
});




$('.liTransTo4x4').click(function(){
  console.log('Li To 4 was Clicked');
   $('.TransferHideTox4').hide();
   $('.TransferHideTo4x4').show();
       
});




$('.liTransTo5x4').click(function(){
  console.log('Li To 5 was Clicked');
   $('.TransferHideTox4').hide();
   $('.TransferHideTo5x4').show();
       
});



// ///////change Trans To Option ////////












///////////////////////////////////////////////////
















userInput23x4="";

 $('.numVx4').click(function(){
   userInput23x4 += $(this).attr("value");

  
   $('.qtyvalue23x4').attr('value', userInput23x4);
    console.log("current forrouting number is :" + userInput23x4);
    console.log('New input 23 is : ' + userInput23x4);
    console.log('A numV was clicked');
 
    });






//backspace button
    $('#backSpacex4').click(function(){

    var getInputx4 = userInput23x4;
    var lenx4 = getInputx4.length -1;
    var newInputx4 = getInputx4.substring(0, lenx4);

 
    userInput23x4 = newInputx4;

     $('.qtyvalue23x4').attr('value', userInput23x4);
     
    console.log('New input is : ' + userInput23x4)




});







////////////////////Pay panel show/hide/////////////////////////////////



$('.Scan2Yx4').click(function(){

if(billDenox4 === true && serviceValuex4 === "ScanWithdraw"){


  $('.billsx4').fadeIn();
  $('.qtyvalue23x4').attr('value', userInput23x4);
  $('.amountInputx4, .NumPadx4').hide();
  console.log('userInputx4 =' + userInput23x4);
}

});







$('.submit2Yx4').click(function(){

console.log('serviceValuex4 = ' + serviceValuex4);
console.log('screenType2x4  = ' + screenType2x4);



if((screenType2x4 === "Mobile2x4") && (serviceValuex4 === "Withdraw")){
  $('.ScanMachinex4').fadeIn();

}else{


  $('.submit2Yx4, .exit2Yx4').hide();
  $('.confBack2Yx4').show();



if(billDenox4 === true && serviceValuex4 === "Withdraw"){

  
  $('.billsx4').fadeIn();
  $('.qtyvalue23x4').attr('value', userInput23x4);
  $('.amountInputx4, .NumPadx4').hide();
  console.log('userInputx4 =' + userInput23x4);


}

}


});



$('.submit2Yx4').click(function(){

  if(serviceValuex4 === 'PayBills'){
    $('.pyx4').fadeIn();
    $('.numVx4, .NumPadx4').hide();

  }

});



$('.submit2Yx4').click(function(){

  if(serviceValuex4 === 'QuickPay'){
    $('.pyx4').fadeIn();
    $('.numVx4, .NumPadx4').hide();

  }

});


$('.submit2Yx4').click(function(){

  if(serviceValuex4 === 'CreditCards'){
    $('.pyx4').fadeIn();
    $('.numVx4, .NumPadx4').hide();

  }

});



$('.submit2Yx4').click(function(){

  if(serviceValuex4 === 'WireTransfer'){
    $('.pyx4').fadeIn();
    $('.numVx4, .NumPadx4').hide();

  }

});








$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').click(function(){

 
    $('.pyx4').fadeIn();
    $('.numVx4, .NumPadx4').hide();



});







// /////////////// back2yx4 /////////////////

$('.back2Yx4').click(function(){

  $('.finBx4').removeClass('active');

if(billDenox4 === true){

$('.billsx4').hide();
$('.amountInputx4, .numVx4').show();

}

  if(serviceValuex4 === 'PayBills' || 'QuickPay' || 'CreditCards' || "Assets"){
       $('.pyx4').fadeOut();
       $('.pyx4 > label').removeClass('active');
       $('.numVx4').show();
       serviceValuex4 === 'PayBills';

}


if(serviceValuex4 === 'Assets'){

    $('.confBack2Yx4').hide();
    $('.SelectBuyOrSellx4').show();
    

}else if(serviceValuex4 === "QuickPay"){
     
     $('.confBack2Yx4').hide();
     $('.SelectSendOrRequestx4').show();

}else if(serviceValuex4 === "WireTransfer"){
     
     $('.confBack2Yx4').hide();
     $('.SelectSendOrRequestx4').show();
    
}else if(serviceValuex4 === "Merchant"){
     
     $('.confBack2Yx4').hide();
     $('.SelectChargeOrRefundx4').show();
   
}else if(serviceValuex4 === "Deposit"){
     

     $('.confBack2Yx4, .NumPadx4').hide();

     if(screenTypex4 === "Mobilex4"){
      $('#submit2Yx4, #exit2Yx4, .DepositChecksx4').show();

     }else if(screenTypex4 !== "Mobilex4"){
      
     $('#submit2Yx4, #exit2Yx4, .Depositbillsx4').show();
   
}

}else{

   $('.pyx4, .billsx4').hide();

  $('.confBack2Yx4, .NumPadx4').hide();
  $('.submit2Yx4, .exit2Yx4').show();
  $('.LinearNumPadx4, .numVx4').show();

}



});

/////////////////////////////////////////////////////



screenType3x4 = "Machine3x4",

$('#ATM1Machinex4').click(function(){

  screenType3x4 = 'Machine3x4';
  console.log('screenType3x4 = ' + screenType3x4);

});




$('#ATM1Mobilex4').click(function(){

   screenType3x4 = 'Mobile3x4';
   console.log('screenType3x4 = ' + screenType3x4);

;

});






 userInputx4= "";

$('.confirm2Yx4, .confirmScan2Yx4').click(function(){  

    $('.TopHalf').show();

    $('.ServicePanelx4,  .confBack2Yx4').hide();
    $('.SelectSendOrRequestx4, .SelectBuyOrSellx4, .SelectChargeOrRefundx4').hide();
    $('.submit2Yx4, .exit2Yx4').show();
    $("#inCheckSentx4, #inSavSentx4, #inCheckx4, #inSavx4, #loanAmountx4, #cardPaymentAmountx4, #quickPayAmountx4").attr("value", userInputx4);
    $("#happyCardx4").attr("value", SelectedCardx4);
    $('.depositMOBIx4 ').fadeOut();

   
      userInputx4= "0.00";
      userInput23x4 = '';
      
      $(".qtyvalue2x4").attr('value', userInputx4);
      console.log('.confirm2Yx4userInputx4 =' + userInputx4);


      $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4, #cheTsav2x24').hide();
      $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4, #savTche2x24').hide();


     $('.pyx4').hide();
     $('.PayButtonsx4 > label').removeClass('active');

     $('.NumPadx4, .billsx4, .Depositbillsx4, .DepositChecksx4').hide();
     $('.numVx4, .amountInputx4').show();

  $('.serB, .acm2x1, .sm2x3, .sm2x4, .sm2x5, .sm2x6, .sm2x7, .sm2x24, .sm2x25').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x4, .acm2x5, .acm2x6, .acm2x7, .acm2x24, .acm2x25').removeClass('active');



  $('.MainTransferx5, .SendMoney222x4, .InsertBillCheckx4, .SendMoney333x4').hide();
  $('.acm2ButtonsXX').show();

  $('.Scan2Yx4').hide();

  $('.finBx4').removeClass('active');



 
if(screenType3x4 === "Machine3x4" && serviceValuex4 === "Withdraw" && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);
     $('.retrievex4').fadeIn('');



}else if(screenType3x4 === "Mobile3x4" && serviceValuex4 === "Withdraw" && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);
     $('.ScanMachinex4').fadeIn('');



}else if(serviceValuex4 === "Deposit"){

     console.log('service value is: ' + serviceValuex4);
     $('.DepositCompletex4').fadeIn('');    
     

}else if(serviceValuex4 === 'Transfer' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);
     $('.tranToCheckingx4').fadeIn('');



}else if(serviceValuex4 === 'Assets' && userInputx4 !== ""){

      console.log('service value is: ' + serviceValuex4);
      $('.BuyThanksx4').fadeIn('');



}else if(serviceValuex4 === 'Assets' && userInputx4 !== ""){

      console.log('service value is: ' + serviceValuex4);
      $('.BuyThanksx4').fadeIn('');


}else if(serviceValuex4 === 'CryptoATM' && userInputx4 !== ""){

      console.log('service value is: ' + serviceValuex4);
      $('.BuyThanksx4').fadeIn('');



}else if(serviceValuex4 === 'Transfers' && userInputx4 !== ""){

      console.log('service value is: ' + serviceValuex4);
      $('.tranToCheckingx4').fadeIn('');


}else if(serviceValuex4 === 'Loan' &&  userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);
     $('.LoanGrantedx4').fadeIn('');         


}else if(serviceValuex4 === 'ScanATM' && userInputx4 !== ''){

     console.log("Service value is = " + serviceValuex4);          
     $('.retrievex4').fadeIn();


}else if(serviceValuex4 === 'Credit' && userInputx4 !== ""){
  
     console.log("Service value is = " + serviceValuex4);
     $('.CardPaymentx4').fadeIn('');    


}else if(serviceValuex4 === 'QuickPay' && userInputx4 !== ""){
   
     console.log("Service value is = " + serviceValuex4);      
     $('.QuickSentx4').fadeIn('slow');


}else if(serviceValuex4 === 'Merchant' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);   
     $('.MerchCardChargedx4').fadeIn('');


}else if(serviceValuex4 === 'WireTransfer' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);   
     $('.WrTransferSentx4').fadeIn('');


}else if(serviceValuex4 === 'PayBills' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);     
     $('.BillPaySentx4').fadeIn('');


}else if(serviceValuex4 === 'ChangePin' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);     
     $('.OkChangePinx4').fadeIn('');


}else if(serviceValuex4 === 'CreditCards' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);     
     $('.CardPaymentx4').fadeIn('');


 }else if(serviceValuex4 === 'BuyCurrency' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);     
     $('.RemitPaymentx4').fadeIn('');    



 }else if(serviceValuex4 === 'Remit' && userInputx4 !== ""){

     console.log('service value is: ' + serviceValuex4);     
     $('.RemitSentx4').fadeIn('');    



}else{

     $('.selectt').fadeIn('');
     console.log("Please select a service and an account for your transaction");
     console.log('service value is: ' + serviceValuex4);
     console.log('tof value is: ' + tofValuex4);

}



      userInputx4= "0.00";
      $(".qtyvalue2x4").attr('value', userInputx4);
      console.log('.confirm2Yx4userInputx4 =' + userInputx4);
    

    
});











//for deposits display the prompting pop-up as soon as the customer selects the saving or checking account

   $('#cash2x4, #withdraw2x4, #checks2x4').click(function(){
      $('#checking2x4, #saving2x4').removeClass('active');

      });



   $('#checking2x4, #saving2x4').click(function(){

     if (serviceValuex4 === $('#cash2x4').attr("value")){
      $('.depositCashx4').fadeIn('fast');

  


     }else if

     (serviceValuex4 === $('#checks2x4').attr("value")){
      $('.depositCheckx4').fadeIn('fast');

     }

   });


     









 $('.CardPaymentx4, .checkCashSentx4, .tranToSavingsx4, .tranToCheckingx4, .retrievex4, .GoodByex4, .LoanGrantedx4, .depositCashx4, .QuickSentx4').click(function(){
  $(this).fadeOut('fast');


});








///////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Confirm and go Back for the exit button


// $('#exit2, #exit2Y').click(function(){
//   console.log('exit2 button was clicked');
//   /* $('.confBack24').fadeIn('fast');

   

//     $('.confirm24').click(function(){*/
//        $('.goodbye').fadeIn('fast');
//        $('#receiptYes, #receiptNox4').removeClass('active');
//        $('#receiptYes, #receiptNox4').click(function(){

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














// $('#closeSendx4').click(function(){

//   console.log("#closeSend was clicked");
//   $('.sendMoney2x4').hide();
//   $('.numCCx4').hide();
//   $('.numRx4').hide();
//   $('.numVx4').show();

// })

// $('#closeSend2x4').click(function(){
//   $('.sendMoney3x4').hide();
// })




// $('#deposx4, #deposx42, #wdraw1x4, #wdraw2x4, #sendx, #sendx4').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });






$('.serB, .sm2x2, .sm2x3, .sm2x4, .sm2x5, .sm2x6, .sm2x7, .sm2x24, .sm2x25').click(function(){


   $('.Scan2Yx4').hide();
   $('.submit2Yx4').fadeIn();


});



$('.serB, .accXX, .ServiceBXX, .financialModelx4').click(function(){



   $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4').hide();
   $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4, .MainTransferx5, .SendMoney222x4, .SendMoney333x4').hide();

   $('.acm2ButtonsXX').show();

   $('#saving2, #saving33, #savingx4').removeClass('active');
   $('#checking2, #checking33, #checkingx4').removeClass('active');

   $('.TransferHideFromx4').removeClass('MainTransferHideFromx4');
   $('.TransferHideTox4').removeClass('MainTransferHideTox4');

   
  
   

   if(serviceValuex4 !== "Assets"){

     $('.SelectBuyOrSellx4, .SelectSendOrRequestx4').hide();
     $('.submit2Yx4, .exit2Yx4').show();

   }
  
});




// $('.AccXX').click(function(){

// if (serviceValuex4 === "ScanWithdraw" && screenTypex4 === "Mobilex4"){

//    $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4').hide();
//    $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4, .MainTransferx5').hide();

//    $('.acm2ButtonsXX').show();

//    $('#saving2, #saving33, #savingx4').removeClass('active');
//    $('#checking2, #checking33, #checkingx4').removeClass('active');

//    $('.TransferHideFromx4').removeClass('MainTransferHideFromx4');
//    $('.TransferHideTox4').removeClass('MainTransferHideTox4');

   
//    $('.SelectBuyOrSellx4, .SelectSendOrRequestx4').hide();
//    // $('.submit2Yx4').hide('');
  
//   }

// });





$('.AccXX').click(function(){

if (serviceValuex4 === "Withdraw" && screenTypex4 === "Mobilex4"){

   $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4').hide();
   $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4, .MainTransferx5, .SendMoney222x4, .SendMoney333x4').hide();

   $('.acm2ButtonsXX').show();

   $('#saving2, #saving33, #savingx4').removeClass('active');
   $('#checking2, #checking33, #checkingx4').removeClass('active');

   $('.TransferHideFromx4').removeClass('MainTransferHideFromx4');
   $('.TransferHideTox4').removeClass('MainTransferHideTox4');

   
   $('.SelectBuyOrSellx4, .SelectSendOrRequestx4').hide();
   // $('.submit2Yx4').hide('');
  
  }

});










// $('#ScanWithdrawx1, #ScanWithdrawx2, #ScanWithdrawx3, #ScanWithdrawx4, #ScanWithdrawx5, #ScanWithdrawx6, #ScanWithdrawx7, #ScanBILLDEx4, #ScanWithdrawx24, #ScanWithdrawx25').click(function(){


//   serviceValuex4="ScanWithdraw";
//   console.log('ScanWithdrawx4 clicked');
//   $('.Scan2Yx4').show();
//   $('.submit2Yx4').hide();

// });







   $('#transfer4x2, #transfer2').click(function(){   
     serviceValuex4 ='Transfer';
   });




$('#Transfer4x1, #Transfer4x2, #Transfer4x3, #Transfer4x4, #Transfer4x24').click(function(){

  $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4, .acm2ButtonsXX').hide();
  serviceValuex4 = "Transfer";
  tofValuex4 = "waived";
  $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4, #cheTsav2x5').show();
  console.log('servicevalue is : '+ serviceValuex4);
  $('#checking2, #checking33, #checkingx4').addClass('active');
  $('#saving2, #saving33, #savingx4').removeClass('active');

  $('.TransferHideFromx4').addClass('MainTransferHideFromx4');
  $('.TransferHideTox4').addClass('MainTransferHideTox4');



});


$('#Transfer4x1, #Transfer4x4, #Transfer4x5, #Transfer4x7, #Transfer4x24, #Transfer4x25, .Transfer').click(function(){


  $('.acm2ButtonsXX, .SendMoney222x4, .SendMoney333x4').hide();
  $('.MainTransferx5').show();



  // $('.AccounstDivx4').hide();
  // $('.AccountsXtransfer').show();





$('.TransferHideFromx4').addClass('MainTransferHideFromx4');
$('.TransferHideTox4').addClass('MainTransferHideTox4');

});









$('.QuickPayExpressx4').click(function(){

  $('.acm2ButtonsXX, .MainTransferx5, .SendMoney333x4').hide();
  $('.SendMoney222x4').show();

});




 $('.SendMoney222x4').dblclick(function(){
  $(this).hide();
  $('.SendMoney333x4').show();

 });


  $('.SendMoney333x4').dblclick(function(){
  $(this).hide();
  $('.SendMoney222x4').show();

 });













   $('#checking2, #transx4, #checking33, #checkingx4').click(function(){

    tofValuex4 = 'checking';
     if(serviceValuex4 === 'Transfer'){
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4').show('');
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4').hide();

          console.log('transfer from checking');
          console.log(serviceValuex4);
  

            }


    }); 





      
   $('#saving2, #trans2x4, #saving33, #savingx4, #transfer2').click(function(){
    tofValuex4 = 'savings';
      if(serviceValuex4 ==='Transfer'){

      
          $('#cheTsav, #cheTsav2x2, #cheTsav2x3, #cheTsav2x4').hide();
          $('#savTche, #savTche2x2, #savTche2x3, #savTche2x4').show();

          console.log('transfer from savings');
          console.log(serviceValuex4);
        
        }


      });





// $('.ScanWithdrawx4').click(function(){

//   serviceValuex4="Withdraw";
//   console.log('ScanWithdrawx4 clicked');

//     $('.submit2Yx4').hide();
//     $('.Scan2Yx4').fadeIn();

// });






// $('.Withdraw4x4').click(function(){

//   if (screenTypex4 = 'Mobilex4'){
//   console.log('ScanWithdrawx4 clicked');

//     $('.submit2Yx4').hide();
//     $('.Scan2Yx4').fadeIn();

// }else if (screenTypex4 = 'Machinex4'){
//   console.log('ScanWithdrawx4 clicked');

//     $('.submit2Yx4').show();
//     $('.Scan2Yx4').hide();


// }


// });



$('.Deposit4x4').click(function(){
  serviceValuex4 = 'Deposit'

});






$('.Deposit4x4, .Withdraw4x4, .QuickPay4x4, .Transfer, .ServiceMenux4').click(function(){

  $('.SelectBuyOrSellx4, .SelectSendOrRequestx4').hide();
  $('.submit2x4, .exit2Yx4').show();

});





$('.AccXX').click(function(){

  console.log('depositx4 button was clicked and screenTypex4 = ' + screenTypex4);

  if (serviceValuex4 === 'Deposit'){

      $('.TopHalf').hide();
     $('.AllAccountsx4, .AllAccountsx24, .NumPadx4').hide(); 
    $('#closeSer2Panelsx4, .depositx4, .RetCashChecksx4').fadeIn();

    // $('.NumPadx4').hide();
    // $('.Depositbillsx4').fadeIn();

    console.log('Depositx4 faddeIn');

    if (screenTypex4 === "Mobilex4"){

    $('.Depositbillsx4, .NumPadx4, .RetCashChecksx4').hide();
    $('.DepositChecksx4').show();
    
  }  
}


  

});




$('.SoloDepositXX').click(function(){

    $('.TopHalf').hide();
    $('.AllAccountsx4, .AllAccountsx24').hide(); 
    $('#closeSer2Panelsx4, .depositx4').fadeIn();

    $('.NumPadx4').hide();
    $('.Depositbillsx4').fadeIn();

    console.log('Depositx4 faddeIn');

    if (screenTypex4 === "Mobilex4"){

    $('.Depositbillsx4, .NumPadx4').hide();
    $('.DepositChecksx4').show();
    
  } 


});





$('#CashDepositx4').click(function(){

  $('.NumPadx4').hide();
  $('.DepositChecksx4, .ICheckx4').hide();
  $('.Depositbillsx4, .IBillsx4').fadeIn();

});



$('#CheckDepositx4').click(function(){
 
  $('.NumPadx4').hide();
  $('.Depositbillsx4, .IBillsx4').hide();
  $('.DepositChecksx4, .ICheckx4').fadeIn();

});




$('#Deposit4x2, #Deposit42, #Deposit4x6').click(function(){

  serviceValuex4 = 'Deposit'
  $('.depositx4').fadeIn();
  console.log('Depositx4 faddeIn');

});






// });


// $('.depositx4').click(function(){
//   $(this).fadeOut();
//    $('#closeSer2Panelsx4, .Depositbillsx4').hide();
//    $('.AllAccountsx4, .AllAccountsx24, .numVx4').show(); 
//   });



$('#deposx4, #deposx42, #transferx4, #sendx, #sendFromCheckingsx4, #sendx4, #trans2x4, #cash2, #withdraw2, #checks2, #transfer, #payticket, #Live').click(function(){
  $('.billsx4').hide();
  $('.numVx4, #amountx4, .qtyvalue2x4').show();
  $('.confBack2Yx4').hide();
  $('.submit2Yx4, .exit2Yx4').show();

  // if(serviceValuex4 !== "withdraw"){

  //  // $('.Confirm2Yx4').Show();
  // }



});

////////////////////////////////////////////

 $('lan2MOBIx4, .serB, .sm2x4, .lan2x4, #qty2x4, .fin2x4, #deposx4, #wdraw1x4, #checking33, #transferx4, #wdraw2x4, #trans2x4, #send, #trans2x4, #sendx4').click(function(){
      $('.serDropx4').hide();
  })




  console.log('Service menu was clicked');



$('.lan2x4, .qty2x4, .fin2x4').click(function(){

$('.serDropx4').hide();

});


 





$('.NumPadx4').click(function(){

// feeparsseInputx4 = Number(userInputx4);
// feeInputx4 = feeparsseInputx4 / 2;
feeInputx4 = "$3.50";

console.log('Fee input is =' + feeInputx4);
console.log('feeinput is typeof = ' + typeof('feeInputx4'));

   $('.feeInputx4').attr('value', feeInputx4);

});




$('#PinChangex4, .serBother, #ServiceMenu, .ServiceMenux4, #ServiceMenux3, #ServiceMenux4, #ServiceMenux5, #ServiceMenux6, #ServiceMenux7, .ServiceMenux24, .ServiceMenux25').click(function(){

  $('.feesx4').hide();

});




$('#closeSer2Panelsx4, .serDropx4 ').click(function(){

  $('.feesx4').show();



  
});







  $('#PinChangex4').click(function(){

     $('.feesx4').addClass('pinChangefeesx4');

  });


$('#closeSer2Panelsx4, .confirm2Yx4, OperationEndedPanelx4, .ConfirmRemitx4').click(function(){

$('.feesx4').removeClass('pinChangefeesx4');

});





BillWdenox4 = false;


$('#billWDenox4').click(function(){

 billDenox4 = false; 
 BillWdenox4 = true;

 console.log('Billwdenox4 =' + BillWdenox4);

     
});







$('.ServiceBXX').click(function(){

  
  $('.billsx4, .pyx4, .confBack2Yx4, .SpecifyWbillsx4, .NumPadx4').hide();
  $('.numVx4, .amountInputx4, .Get2Yx4, .Send2Yx4').show();


$('.AllInputsx4').css('color','lightgrey');
AllInputsx4= 0;
$(".AllInputsx4").attr('value', AllInputsx4);


});





$('.Withdraw4x4, .Withdraw4x24').click(function(){

  console.log('Billwdenox4 =' + BillWdenox4);

  if (BillWdenox4 === true){

     $('.numVx4').hide();
     $('.SpecifyWbillsx4').show();

  }

});












$('.sm2x6a, .sm2x6b').click(function(){

  serviceValuex4 = "CryptoATM";
});








///////////////////////////////////Submit2Yx4/////////////////////////////////////////////////////////////////////////



//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// $('#english2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);
//   $('#cash2x4').html ('<input  type="radio" name="itm">Deposit Cash').css('font-size', '22px');
//   $('#withdraw2x4').html('<input  type="radio" name="itm">Withdraw').css('font-size', '22px');
//   $('#checks2x4').html('<input  type="radio" name="itm">Deposit Checks').css('font-size', '22px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKING <br><span>Balance: -$2, 200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SAVINGS <br><span>Balance: $1, 500.00</span>');


//     ///////////////

//   $('#checking33').html('CHECKING<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('SAVINGS <br><span>Balance: $1,200.00</span>');


//   $('#deposx4, #deposx').html('<input type="radio" name="lan"> Deposit');
//   $('#wdraw1x4, #wdraw2x4x2').html('<input type="radio" name="lan"> Withdraw');
//   $('#transferx4, #trans2x4').html('<input type="radio" name="lan"> Transfer');
//   $('#sendx, #sendx4').text('Send Money');



//   //////////////
  
  
 
//   $('#amountx4').text('$');
//   $('.qtyvalue2x4').attr('value', userInputx4);


//     $('#submit2x4').html('SUBMIT');

//     $('#exit2x4').html('EXIT');


//     $('.submit2Yx4').html('SUBMIT');

//     $('.exit2Yx4').html('EXIT');

//   $('.confirm2x4').html('<h2><b>Confirm</b></h2>');
//   $('.back2x4').html('<h2><b>Back</b></h2>');

// $('.confirm2Yx4').html('<h2><b>Confirm</b></h2>');
//   $('.back2Yx4').html('<h2><b>Back</b></h2>');




//   $('#casdex4').html('<b> Please Insert your Cash Deposit</b>');

//   $('#casde2x4').html('<b> Please Insert your Deposit</b>');


//   $('#billsx4').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);

//   $('#retrx4').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

//   $('#chedex4').html('<b> Please Insert your Check Deposit now</b>');

//   $('#cancelx4').text('(Tap to Cancel)');
//   $('#cancel2x4').text('(Tap to Cancel)');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
//   $('#sfcaCancelx4').text('( Tap to Close)');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
//   $('#sfsaCancelx4').text('( Tap to Close)');



//     $('#gbyx4').html('<b>Good Bye</b>');
//     $('#nrepx4').text('Need a Receipt');
//     $('#receiptYesx4').text('YES');
//     $('#receiptNox4').text('NO');
//     $('#exBackx4').html('<b>Go Back</b>'); 


//      $('#stcx4').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
//      $('#stcXx4').text('( Tap to Close)');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
//    $('#ctsXx4').text('Tap to Close');


//      $('#oopsx4').html('<h1><b>Oops</b></h1>');



//   $('#machinex4').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

//   $('#limitx4').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');
// });




// $('#spanish2x4').click(function(){

//   userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);

// $('#cash2x4').html ('<input  type="radio" name="itm">Depositar Efectivo').css('font-size', '18px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm">Retirar').css('font-size', '18px');
//   $('#checks2x4').html('<input  type="radio" name="itm">Depositar Cheques').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">AHORROS <br><span>Balance: $1,500.00</span>');
  
//   ///////////////

//   $('#checking33').html('CHEQUES<br><span>Balance: -$2,200.00</span>');
//   $('#saving33').html('AHORROS <br><span>Balance: $1,200.00</span>');


//   $('#deposx4, #deposx42x4').html('<input type="radio" name="lan">Depositar');
//   $('#wdraw1x4, #wdraw2x4').html('<input type="radio" name="lan">Retirar');
//   $('#transferx4, #trans2x4').html('<input type="radio" name="lan">Transferir');
//   $('#sendx, #sendx4').text('Enviar Dinero');







//   //////////////
  



 
//   $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);

  
  

//   $('#submit2x4').html('SOMETER');

//   $('#exit2x4').html('SALIR');


//   $('.submit2Yx4').html('SOMETER');

//   $('.exit2Yx4').html('SALIR');

//   $('.confirm2x4').html('<h2><b>Confirmar</b></h2>');
//   $('.back2x4').html('<h2><b>Atras</b></h2>');

//   $('.confirm2Yx4').html('<h2><b>Confirmar</b></h2>');
//   $('.back2Yx4').html('<h2><b>Atras</b></h2>');


//   $('#casdex4').html('<b> Favor Inserte su Deposito en Efectivo Ahora</b>');

//   $('#casde2x4').html('<b> Favor Inserte su Deposito Ahora</b>');



 
//   $('#billsx4').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);


//  $('#retrx4').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

//  $('#chedex4').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

//  $('#cancelx4').text('(Toque para Cerrar)');
//  $('#cancel2x4').text('(Toque para Cancelar)');


// $('#sfcax4').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
// $('#sfcaCancelx4').text('( Toca para cerrar )');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
//   $('#sfsaCancelx4').text('( Toca para cerrar)');



//     $('#gbyx4').html('<b>Hasta Luego</b>');
//     $('#nrepx4').text('Necesita Recibo?');
//     $('#receiptYesx4').text('SI');
//     $('#receiptNox4').text('NO');
//     $('#exBackx4').html('<b>Volver Atras</b>'); 


//   $('#stcx4').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
//   $('#stcXx4').text('( Toca para cerrar)');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
//    $('#ctsXx4').text('Toca para cerrar');

//   $('#oopsx4').html('<h1><b>Ohoh</b></h1>'); 



//   $('#machinex4').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

//   $('#limitx4').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');


// console.log('A Language Button clicked');


//   });






// $('#chinesse2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);
// $('#cash2x4').html ('<input  type="radio" name="itm"> 存入現金').css('font-size', '24px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm">  刪除 ').css('font-size', '24px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> 存款檢查').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> 檢查 <br><span>天平: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> 儲蓄 <br><span>天平: $1,500.00</span>');



//     ///////////////

//   $('#checking33').html('檢查 <br><span>天平: $2,200.00</span>');
//   $('#saving33').html(' 儲蓄<br><span>天平: $1,200.00</span>');


//   $('#deposx4, #deposx42x4').html('<input type="radio" name="lan">存入現金');
//   $('#wdraw1x4, #wdraw2x4').html('<input type="radio" name="lan"> 刪除');
//   $('#transferx4, #trans2x4').html('<input type="radio" name="lan">刪除');
//   $('#sendx, #sendx4').text('刪現金');



//   //////////////


// console.log('A Language Button clicked');

  
 
//   $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);
  

//   $('#submit2x4').html('提交');

//   $('#exit2x4').html('取消');

//   $('.submit2Yx4').html('提交');

//   $('.exit2Yx4').html('取消');


//   $('.confirm2x4').html('<h2><b>確認</b></h2>');
//   $('.back2x4').html('<h2><b>返回</b></h2>');

//   $('.confirm2Yx4').html('<h2><b>確認</b></h2>');
//   $('.back2Yx4').html('<h2><b>返回</b></h2>');



//   $('#casdex4').html('<b> 請插入您的現金存款</b>');

//   $('#casde2x4').html('<b> 請插入您的現金存款</b>');


  
//   $('#billsx4').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);

//   $('#retrx4').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

//   $('#chedex4').html('<b> 租賃現在插入您的支票存款</b>');

//   $('#cancelx4').text('（點擊取消）');
//   $('#cancel2x4').text('（點擊取消）');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
//   $('#sfcaCancelx4').text('（點擊關閉）');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
//   $('#sfsaCancelx4').text('（點擊關閉）');



//     $('#gbyx4').html('<b>再見</b>');
//     $('#nrepx4').text('需要收據？');
//     $('#receiptYesx4').text('是的');
//     $('#receiptNox4').text('沒有');
//     $('#exBackx4').html('<b>回去</b>'); 


//      $('#stcx4').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
//      $('#stcXx4').text('（點擊關閉）');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
//    $('#ctsXx4').text('（點擊關閉）');


//      $('#oopsx4').html('<h1><b>哎呀</b></h1>');



//   $('#machinex4').html('<b> 本機只能發送賬單：</b></h2><br>'); 

//   $('#limitx4').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

//   });







// $('#russian2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);

// $('#cash2x4').html ('<input  type="radio" name="itm"> денежных средств').css('font-size', '16px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm"> Удалить').css('font-size', '16px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> проверяет депозит').css('font-size', '16px');


//  $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
//   $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


//    ///////////////

//   $('#checking33').html('Проверки <br><span>Баланс: $2,200.00</span>');
//   $('#saving33').html('Экономия<br><span>Баланс: $1,200.00</span>');


//   $('#deposx4, #deposx42').html('<input type="radio" name="lan">денежных');
//   $('#wdraw1x4, #wdraw2x4').html('<input type="radio" name="lan">Удалить');
//   $('#transferx4, #trans2x4').html('<input type="radio" name="lan">средств');
//   $('#sendx, #sendx4').text('денежных');

// console.log('A Language Button clicked');

//   //////////////
  
  
//   $('#amountx4').text('$');
//   $('.qtyvalue2x4').attr('value', userInputx4);



//   $('#submit2x4').html('Отправить');

//   $('#exit2x4').html('Отмена');

//   $('.submit2Yx4').html('Отправить');

//   $('.exit2Yx4').html('Отмена');



//   $('.confirm2x4').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2x4').html('<h2><b> Назад</b></h2>');

//   $('.confirm2Yx4').html('<h2><b> Подтвердить</b></h2>');
//   $('.back2Yx4').html('<h2><b> Назад</b></h2>');


//   $('#casdex4').html('<b> Пожалуйста, введите свой денежный депозит </b>');
//   $('#casde2x4').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
//   $('#billsx4').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);


//   $('#retrx4').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

//   $('#chedex4').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

//   $('#cancelx4').text('(Нажмите, чтобы отменить)');
//   $('#cancel2x4').text('(Нажмите, чтобы отменить)');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
//   $('#sfcaCancelx4').text('(Нажмите, чтобы закрыть)');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
//   $('#sfsaCancelx4').text('(Нажмите, чтобы закрыть)');



//     $('#gbyx4').html('<b> До свидания</b>');
//     $('#nrepx4').text('Нужна квитанция?');
//     $('#receiptYesx4').text(' ДА');
//     $('#receiptNox4').text(' НЕТ');
//     $('#exBackx4').html('<b>Вернуться</b>'); 



//      $('#stcx4').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
//      $('#stcXx4').text('(Нажмите, чтобы закрыть)');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
//    $('#ctsXx4').text('(Нажмите, чтобы закрыть)');


//      $('#oopsx4').html('<h1><b>К сожалению</b></h1>');



//   $('#machinex4').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

//   $('#limitx4').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




//   });





// $('#german2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);
// $('#cash2x4').html('<input  type="radio" name="itm"> Barhinterlage').css('font-size', '21px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm"> Remove ').css('font-size', '21px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> Kaution Schecks').css('font-size', '21px');

  

//   $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

//   $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);
  
  

//   $('#submit2x4').html(' Senden ');

//   $('#exit2x4').html(' Abbrechen ');

//   $('.submit2Yx4').html(' Senden ');

//   $('.exit2Yx4').html(' Abbrechen ');

//   $('.confirm2x4').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2x4').html('<h2><b> Zurück</b></h2>');


//   $('.confirm2Yx4').html('<h2><b> Bestätigen</b></h2>');
//   $('.back2Yx4').html('<h2><b> Zurück</b></h2>');




//   $('#casdex4').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
//   $('#casde2x4').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


//   $('#billsx4').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);

// $('#retrx4').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

//   $('#chedex4').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

//   $('#cancelx4').text('(Tippen Sie auf Abbrechen)');
//   $('#cancel2x4').text('(Tippen Sie auf Abbrechen)');

 


//  $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
//   $('#sfcaCancelx4').text('(Tippen Sie auf Schließen)');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
//   $('#sfsaCancelx4').text('(Tippen Sie auf Schließen)');



//     $('#gbyx4').html('<b> Auf Wiedersehen</b>');
//     $('#nrepx4').text('Benötigen Sie einen Beleg?');
//     $('#receiptYesx4').text(' JA');
//     $('#receiptNox4').text(' NEIN');
//     $('#exBackx4').html('<b>Zurück</b>'); 





//      $('#stcx4').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
//      $('#stcXx4').text('(Tippen Sie auf Schließen)');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
//    $('#ctsXx4').text('(Tippen Sie auf Schließen)');


//      $('#oopsx4').html('<h1><b> Hoppla</b></h1>');


//   $('#machinex4').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

//   $('#limitx4').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


// });




// $('#hindi2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);
// $('#cash2x4').html ('<input  type="radio" name="itm"> .जमा नकद. ').css('font-size', '24px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm"> ..निकालें.. ').css('font-size', '24px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> ..जमा चेकों.. ').css('font-size', '24px');

//   $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
//   $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);
  
  

//   $('#submit2x4').html(' जमा करें ');

//   $('#exit2x4').html(' रद्द ');

//   $('.submit2Yx4').html(' जमा करें ');

//   $('.exit2Yx4').html(' रद्द ');


//   $('.confirm2x4').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2x4').html('<h2><b> वापस</b></h2>');

//   $('.confirm2Yx4').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx4').html('<h2><b> वापस</b></h2>');




//   $('#casdex4').html('<b> कृपया अपना नकद जमा डालें</b>');
//   $('#casde2x4').html('<b> कृपया अपना नकद जमा डालें</b>');


//   $('#billsx4').text('');
//   $('#billsx4').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);

//   $('#retrx4').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

//   $('#chedex4').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



// $('#cancelx4').text('(रद्द करने के लिए टैप करें)');
//   $('#cancel2x4').text('(रद्द करने के लिए टैप करें)');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
//   $('#sfcaCancelx4').text('(बंद करने के लिए टैप करें)');

//   $('#sfsax4').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
//   $('#sfsaCancelx4').text('(बंद करने के लिए टैप करें)');




//     $('#gbyx4').html('<b>अच्छा अलविदा</b>');
//     $('#nrepx4').text('रसीद की आवश्यकता है?');
//     $('#receiptYesx4').text('हाँ');
//     $('#receiptNox4').text('नहीं');
//     $('#exBackx4').html('<b> वापस जाओ</b>'); 


//      $('#stcx4').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
//      $('#stcXx4').text('(बंद करने के लिए टैप करें)');

//    $('#ctsx4').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
//    $('#ctsXx4').text('(बंद करने के लिए टैप करें)');


//      $('#oopsx4').html('<h1><b> ओह्स</b></h1>');



//   $('#machinex4').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

//   $('#limitx4').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







//   });



// $('#french2x4').click(function(){
  
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);

// $('#cash2x4').html ('<input  type="radio" name="itm"> dépôt en espèces').css('font-size', '18px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm"> Supprimer ').css('font-size', '18px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> chèques de dépôt').css('font-size', '18px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

//    $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);
  
  

//   $('#submit2x4').html(' Soumettre ');

//   $('#exit2x4').html(' Annuler ');

//   $('.submit2Yx4').html(' Soumettre ');

//   $('.exit2Yx4').html(' Annuler ');


//   $('.confirm2x4').html('<h2><b> Confirmer</b></h2>');
//   $('.back2x4').html('<h2><b> Retour</b></h2>');

//   $('.confirm2Yx4').html('<h2><b>पुष्टि करें</b></h2>');
//   $('.back2Yx4').html('<h2><b> वापस</b></h2>');



//   $('#casdex4').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
//   $('#casde2x4').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

//   $('#billsx4').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);

//   $('#retrx4').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

//   $('#chedex4').html('<b>  location Insérez votre chèque de caution maintenant</b>');

//   $('#cancelx4').text('(Appuyer pour annuler)');
//   $('#cancel2x4').text('(Appuyer pour annuler)');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
//   $('#sfcaCancelx4').text('(Appuyez pour fermer)');


//   $('#sfsax4').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
//   $('#sfsaCancelx4').text('(Appuyez pour fermer)');



//     $('#gbyx4').html('<b> Au Revoir</b>');
//     $('#nrepx4').text("Besoin d'un reçu?");
//     $('#receiptYesx4').text(' OUI');
//     $('#receiptNox4').text(' NON');
//     $('#exBackx4').html('<b> Retour</b>'); 


//      $('#stcx4').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
//      $('#stcXx4').text('(Appuyer pour fermer)');



//    $('#ctsx4').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
//    $('#ctsXx4').text('(Appuyez pour fermer)');


//      $('#oopsx4').html('<h1><b> Oups</b></h1>');



//   $('#machinex4').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

//   $('#limitx4').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

//   });





// $('#arabic2x4').click(function(){
// userInputx4 = '0.00';
// $('.qtyvalue2x4').attr('value', userInputx4);
// $('#cash2x4').html ('<input  type="radio" name="itm"> ...يداع النقد....').css('font-size', '24px');

//   $('#withdraw2x4').html('<input  type="radio" name="itm"> .....إزالة....').css('font-size', '24px');
//   $('#checks2x4').html('<input  type="radio" name="itm"> ...يداع الشيكا.....').css('font-size', '24px');

  

//   $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
//   $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

//    $('#amountx4').text('$');
//    $('.qtyvalue2x4').attr('value', userInputx4);
  

//   $('#submit2x4').html(' إرسال ');
//   $('#exit2x4').html(' الغاء ');

//   $('.submit2Yx4').html(' إرسال ');
//   $('.exit2Yx4').html(' الغاء ');




//   $('.confirm2x4').html('<h2><b> تأكيد </b></h2>');
//   $('.back2x4').html('<h2><b> العودة</b></h2>');

//   $('.confirm2Yx4').html('<h2><b> تأكيد </b></h2>');
//   $('.back2Yx4').html('<h2><b> العودة</b></h2>');





//   $('#casdex4').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
//   $('#casde2x4').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


//   $('#billsx4').text(' ');
//   $('#billsx4').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
//   $('.qtyvalue2x4').attr('value', userInputx4);


//   $('#retrx4').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

//   $('#chedex4').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

//   $('#cancelx4').text('(الحنفية لإلغاء)');
//   $('#cancel2x4').text('(الحنفية لإلغاء)');

//   $('#sfcax4').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
//   $('#sfcaCancelx4').text('(انقر لإغلاق)');


// $('#sfsax4').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
//   $('#sfsaCancelx4').text('(انقر لإغلاق)');



//     $('#gbyx4').html('<b> وداعا</b>');
//     $('#nrepx4').text('تحتاج إلى استلام؟');
//     $('#receiptYesx4').text(' نعم');
//     $('#receiptNox4').text(' لا');
//     $('#exBackx4').html('<b> العودة</b>'); 


//      $('#stcx4').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
//      $('#stcXx4').text('(الحنفية لإغلاق)');



//    $('#ctsx4').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
//    $('#ctsXx4').text('(الحنفية لإغلاق)');


//      $('#oopsx4').html('<h1><b>عفوا</b></h1>');



//   $('#machinex4').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

//   $('#limitx4').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');

// console.log('A Language Button clicked');


//   });



$('.OperationEndedPanelx4').click(function(){
  
  $(this).fadeOut();
  userInputx4 = '';
  userInputx4 = '0.00';
  feeInputx4 = '$0.00';
  $('.qtyvalue2x4').attr('value', userInputx4);
  $('.feeInputx4').attr('value', feeInputx4);
  console.log('User input is = ' + userInputx4)
 
 $('#cheTsav2x4').hide();
 $('#savTche2x4').hide();

  $('#checking33').removeClass('active');
  $('#saving33').removeClass('active');
  $('#deposx4, #deposx42').removeClass('active');
  $('#wdraw1x4, #wdraw2x4').removeClass('active');
  $('.Transfer4x4, #transferx4, #trans2x4').removeClass('active');
  $('#sendx, #sendx4').removeClass('active');
  $('#ServiceMenux4, #ServiceMenux24, #ServiceMenux25').removeClass('active');

  $('.serB, .acm2x1, .sm2x3, .sm2x4, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x1, .acm2x2, .acm2x3, .acm2x4, .acm2x5, .acm2x6, .acm2x7').removeClass('active');

serviceValuex4 = '';   

     $('.pyx4').fadeOut();
     $('.PayButtonsx4 > label').removeClass('active');

      $('.ExtraAcm2MOBIxx').show();





$('.AllInputsx4').css('color','lightgrey');
AllInputsx4= 0;
$(".AllInputsx4").attr('value', AllInputsx4);




inputTransfer1x4=0;
inputTransfer2x4=0;
inputTransfer3x4=0;
inputTransfer4x4=0;
inputTransfer5x4=0;
inputTransfer6x4=0;
inputTransfer7x4=0;
inputTransfer8x4=0;
inputTransfer9x4=0;




       



});


$('.serB, .acm2x1, .sm2x3, .sm2x4, .sm2x5, .sm2x6, .sm2x7').click(function(){

 feeInputx4 = '$0.00';
 $('.feeInputx4').attr('value', feeInputx4);

});




$('#ScanBILLDEx4').click(function(){
   $('.BillDenominationWdrawx4').fadeIn();
});




$('.Scan2Yx4').click(function(){
$(this).hide();

$('.submit2Yx4, .exit2Yx4').hide();

// $('.submit2Yx4, .exit2Yx4, .NumPadx4').hide();
// $('.pyx4').fadeIn();


$('.ScanconfBack2Yx4').show();

// $('.ScanMachinex4').show();

});



// //// ScanBackx4

$('.Scanback2Yx4').click(function(){

  $('.ScanMachinex4, .ScanconfBack2Yx4, .pyx4, .NumPadx4').hide();
  $('.Scan2Yx4, .exit2Yx4, .numVx4').fadeIn();

$('.billsx4').hide();
$('.amountInputx4, .numVx4').show();
   
});



/////////ScanConfirmx4

$('.Scanconfirm2Yx4').click(function(){

  userInput23x4 = "";
  $('.qtyvalue23x4').attr('value', userInput23x4);

$('.billsx4').hide();
$('.amountInputx4, .numVx4').show();





  userInputx4 = '0.00';

  $('.qtyvalue2x4').attr('value', userInputx4);

  $('.serB, .acm2x1, .sm2x3, .sm2x4, .sm2x5, .sm2x6, .sm2x7').removeClass('active');
  $('.acm2x2, .acm2x3, .acm2x4, .acm2x5, .acm2x6, .acm2x7').removeClass('active');

  
  $('.ScanMachinex4, .ScanconfBack2Yx4, .pyx4, .ServicePanelx4, .NumPadx4').hide();
  $('.submit2Yx4, .exit2Yx4, .numVx4').show();

  $('.ScanMachinex4').fadeIn();

});




$('.ServiceBXX').click(function(){
   $('.SelectBuyOrSellx4').hide();
   $('.submit2Yx4, .exit2Yx4').show();  


});




$('.Trade4x4, #BSassetsx4').click(function(){
   $('.submit2Yx4, .exit2Yx4').hide();
   $('.SelectBuyOrSellx4').show();
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










$('.lock1x4').click(function(){
   $(this).hide();
   $('.Unlock1x4').show();   
});


$('.Unlock1x4').click(function(){
   $(this).hide();
   $('.lock1x4').show();
});

// //////////

$('.lock2x4').click(function(){
   $(this).hide();
   $('.Unlock2x4').show();   
});


$('.Unlock2x4').click(function(){
   $(this).hide();
   $('.lock2x4').show();
});

// /////////

$('.lock3x4').click(function(){
   $(this).hide();
   $('.Unlock3x4').show();   
});


$('.Unlock3x4').click(function(){
   $(this).hide();
   $('.lock3x4').show();
});

// ////////

$('.lock4x4').click(function(){
   $(this).hide();
   $('.Unlock4x4').show();   
});


$('.Unlock4x4').click(function(){
   $(this).hide();
   $('.lock4x4').show();
});



$('.friendsx4, .Cardx4').click(function(){
  $('.confBack2Yx4, .pyx4').hide('');
});


// //////////////////////Bill W //////////////////////////////
// //////////////////////Bill W //////////////////////////////




$('.bw5x4').click(function(){
$('.LessBillWx4, .MoreBillWx4').hide();
$('.LessBillW1x4, .MoreBillW1x4').show();
});



$('.bw10x4').click(function(){
$('.LessBillWx4, .MoreBillWx4').hide();
$('.LessBillW2x4, .MoreBillW2x4').show();
});


$('.bw20x4').click(function(){
$('.LessBillWx4, .MoreBillWx4').hide();
$('.LessBillW3x4, .MoreBillW3x4').show();
});


$('.bw50x4').click(function(){
$('.LessBillWx4, .MoreBillWx4').hide();
$('.LessBillW4x4, .MoreBillW4x4').show();
});



$('.bw100x4').click(function(){
$('.LessBillWx4, .MoreBillWx4').hide();
$('.LessBillW5x4, .MoreBillW5x4').show();
});





// ///////////////////////

BillwcInput1x4 = 0;
BillwcInput2x4 = 0;
BillwcInput3x4 = 0;
BillwcInput4x4 = 0;
BillwcInput5x4 = 0;

BillwTotalx4 = 0;
BillwTotal1x4 = 0; 
BillwTotal2x4 = 0; 
BillwTotal3x4 = 0; 
BillwTotal4x4 = 0;
BillwTotal5x4 = 0;   





$('.LessBillW1x4').click(function(){

console.log('LessBillW1x4 was clicked');

    if(BillwcInput1x4 === 0){
      BillwcInput1x4 = 0;
      $('.BillwcInput1x4').attr('value', BillwcInput1x4);

    }else{

    BillwcInput1x4 = BillwcInput1x4 - 1;
    $('.BillwcInput1x4').attr('value', BillwcInput1x4);

    }

   BillwTotal1x4 = BillwcInput1x4 * 5;
   console.log('BillwTotal1x4 =' + BillwTotal1x4);

   BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);

   
});

////////

$('.LessBillW2x4').click(function(){

console.log('LessBillW2x4 was clicked');

    if(BillwcInput2x4 === 0){
      BillwcInput2x4 = 0;
      $('.BillwcInput2x4').attr('value', BillwcInput2x4);

    }else{

    BillwcInput2x4 = BillwcInput1x4 - 1;
    $('.BillwcInput2x4').attr('value', BillwcInput2x4);

    }

   BillwTotal2x4 = BillwcInput2x4 * 10;
   console.log('BillwTotal2x4 =' + BillwTotal2x4);


BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);

   
});

//////


$('.LessBillW3x4').click(function(){

console.log('LessBillW3x4 was clicked');

    if(BillwcInput3x4 === 0){
      BillwcInput3x4 = 0;
      $('.BillwcInput3x4').attr('value', BillwcInput3x4);

    }else{

    BillwcInput3x4 = BillwcInput3x4 - 1;
    $('.BillwcInput3x4').attr('value', BillwcInput3x4);

    }

   BillwTotal3x4 = BillwcInput3x4 * 20;
   console.log('BillwTotal3x4 =' + BillwTotal3x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;   

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);

   
});
//////

$('.LessBillW4x4').click(function(){

console.log('LessBillW4x4 was clicked');

    if(BillwcInput4x4 === 0){
      BillwcInput4x4 = 0;
      $('.BillwcInput4x4').attr('value', BillwcInput4x4);

    }else{

    BillwcInput4x4 = BillwcInput4x4 - 1;
    $('.BillwcInput4x4').attr('value', BillwcInput4x4);

    }

   BillwTotal4x4 = BillwcInput4x4 * 50;
   console.log('BillwTotal4x4 =' + BillwTotal4x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);

   
});

////////

$('.LessBillW5x4').click(function(){

console.log('LessBillW5x4 was clicked');

    if(BillwcInput5x4 === 0){
      BillwcInput5x4 = 0;
      $('.BillwcInput5x4').attr('value', BillwcInput5x4);

    }else{

    BillwcInput5x4 = BillwcInput5x4 - 1;
    $('.BillwcInput5x4').attr('value', BillwcInput5x4);

    }

   BillwTotal5x4 = BillwcInput5x4 * 100;
   console.log('BillwTotal5x4 =' + BillwTotal5x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;   

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);

   
});






////////////////////////






$('.MoreBillW1x4').click(function(){

console.log('MoreBillW1x4 was clicked');
    

   BillwcInput1x4 = BillwcInput1x4 + 1;
   $('.BillwcInput1x4').attr('value', BillwcInput1x4);


   BillwTotal1x4 = BillwcInput1x4 * 5;
   console.log('BillwTotal1x4 =' + BillwTotal1x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);


   
});
/////////////

$('.MoreBillW2x4').click(function(){

console.log('MoreBillW2x4 was clicked');
    

   BillwcInput2x4 = BillwcInput2x4 + 1;
   $('.BillwcInput2x4').attr('value', BillwcInput2x4);


   BillwTotal2x4 = BillwcInput2x4 * 10;
   console.log('BillwTotal2x4 =' + BillwTotal2x4);


BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);


});

///////////


$('.MoreBillW3x4').click(function(){

console.log('MoreBillW3x4 was clicked');
    

   BillwcInput3x4 = BillwcInput3x4 + 1;
   $('.BillwcInput3x4').attr('value', BillwcInput3x4);


   BillwTotal3x4 = BillwcInput3x4 * 20;
   console.log('BillwTotal3x4 =' + BillwTotal3x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;   

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);


   
});

////////////


$('.MoreBillW4x4').click(function(){

console.log('MoreBillW4x4 was clicked');
    

   BillwcInput4x4 = BillwcInput4x4 + 1;
   $('.BillwcInput4x4').attr('value', BillwcInput4x4);


   BillwTotal4x4 = BillwcInput4x4 * 50;
   console.log('BillwTotal4x4 =' + BillwTotal4x4);


BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);


   
});

////////////


$('.MoreBillW5x4').click(function(){

console.log('MoreBillW5x4 was clicked');
    

   BillwcInput5x4 = BillwcInput5x4 + 1;
   $('.BillwcInput5x4').attr('value', BillwcInput5x4);


   BillwTotal5x4 = BillwcInput5x4 * 100;
   console.log('BillwTotal5x4 =' + BillwTotal5x4);

BillwTotalx4 =  BillwTotal1x4 + BillwTotal2x4 + BillwTotal3x4 + BillwTotal4x4 + BillwTotal5x4;   

   userInputx4= BillwTotalx4;
   $(".qtyvalue2x4").attr('value', userInputx4);


   
});



// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////






// ////////////////////////////////////////////////////


// $('.AccXX').click(function(){

// if (screenTypex4 === 'Machinex4'){
//  $('.Thecoverx4').children('button').hide();
//  $(this).children('.Thecoverx4').children('button')show();
// }

// };




$('.AccXX').click(function(){




if (screenType2x4 === 'Machine2x4'){
 $('.AccXX').children('button').hide();
 $(this).children('button').show();
}

if (screenType2x4 === 'Mobile2x4'){
 $('.AccXX').children('.Statsx5, .Statsx55, .Statsx57, .Statsx15, .Statsx17, .Statsx27, .Statsx3').hide();
 $(this).children('.Statsx5, .Statsx55, .Statsx57, .Statsx15, .Statsx17, .Statsx27, .Statsx3').show();
}

});


// /////////////////
$('.ServiceBXX, .Confirm2Yx4, .OperationEndedPanelx4, .serDropx4, .exit2Yx4, .HideTHx4, #closeSer2Panelsx4').click(function(){    

    if (screenType2x4 === 'Machine2x4'){
     $('.AccXX').children('button').hide();
     $('.AccMiniBsx4').fadeOut();
    }

     $('.AccXX').children('.Statsx5, .Statsx55, .Statsx57, .Statsx15, .Statsx3').hide();


});


// ////////////////


$('.AccMiniBsx4').click(function(){

  if(serviceValuex4 !== "Deposit"){
  $('.ViewStatsx4').fadeIn();
  }

});




$('.HideStatsx4').click(function(){
   $('.ViewStatsx4').fadeOut();
});


$('.HideTHx4').click(function(){
   $('.ViewStatsx4').hide();
});





$('.Remitx4').click(function(){

  serviceValuex4 = "Remit";

  $('.Remittancex4').fadeIn();

});








$('#ShowFlagsx4').click(function(){
   $('.MoneyIconsx4, .FlagIcons2x4').hide();
   $('.FlagIconsx4').show();
});



$('#HideFlagsx4').click(function(){
   $('.FlagIconsx4, .FlagIcons2x4').hide();
   $('.MoneyIconsx4').show();
});



$('#FixFlagsx4').click(function(){
   $('.FlagIconsx4, .MoneyIconsx4').hide();
   $('.FlagIcons2x4').show();
});






// ////////////Buy Sell /////////////////////////

BuyCurrencyx4 = "crypto";

$('.sm2x6c, .sm2x6d, .sm2x6e').click(function(){
  BuyCurrencyx4 = "crypto";
  console.log('BuyCurrencyx4 = ' + BuyCurrencyx4);
});


$('.BuyFiatx4').click(function(){
  BuyCurrencyx4 = "Fiat";
  console.log('BuyCurrencyx4 = ' + BuyCurrencyx4);
});





$('.Buy2Yx4, .Sell2Yx4').click(function(){
  console.log('BuyCurrencyx4 = ' + BuyCurrencyx4);


  if(BuyCurrencyx4 === "Fiat"){

  $('.RemitPaymentx4').fadeIn();

  }


  if(BuyCurrencyx4 === "crypto"){
    $('.BScoinsx4').fadeIn();

  }
  

});











$('.ConfirmRemitx4, .CancelConfirmRemitx4').click(function(){
  $('.BScoinsx4').hide();
});



$('.SendConfirmRemitx4').click(function(){

  





});




$('.AccModel11x4, .AccModel12x4, .AccModel13x4,.AccModel15x4, .AccModel14x4').click(function(){
  serviceValuex4 = "BuyCurrency";
});



// //////////////////////////////////////////////////////




$('.sm2x7d, .sm2x7e').click(function(){

serviceValuex4 = 'BuyCurrency';
  userInputx4 = '';
  userInputx4 =  $(this).attr('value');
  $('.qtyvalue2x4').attr('value', userInputx4);

  console.log('serviceValuex4 is =' + serviceValuex4);
  console.log('userinput is =' + userInputx4);

});




















// /////////////Remit Rate, exhange and due payments //////////////////////



 SendRemitTotalx4='';
 SendRemitTotal2x4 ='';
 SendRemitTotal3x4 ='';
 ExchangedTotalx4 = '';
 DueInForeignCurrencyx4 = '';



RemitRatesx4 = "";
RemitReceivex4 = "";
ExchangedTotal2x4 = "";
ExchangedTotal3x4 = "";
BeforeRemitRatesx4 = "";
OriginalSendRemitTotalx4 = "";





$('.finBx4').click(function(){

  SendRemitTotalx4 = "Your Order: " + "$" + $('.qtyvalue2x4').attr('value');
  $('.SendRemitTotalx4').attr('value', SendRemitTotalx4);
  console.log('Userinputx4 = ' + userInputx4);


  OriginalSendRemitTotalx4 = "$" + $('.qtyvalue2x4').attr('value');
  $('.OriginalSendRemitTotalx4').attr('value', OriginalSendRemitTotalx4);
  console.log('Userinputx4 = ' + userInputx4);



  ExchangedTotalx4 = SendRemitTotalx4;


  SendRemitTotal3x4 = "Total: " + "$" + $('.qtyvalue2x4').attr('value');

  $('.SendRemitTotal3x4').attr('value', SendRemitTotal3x4);


  $('.sm2x7d, .sm2x7e, .sm2x6d, .sm2x6c, .acm2x6c').removeClass('active');



  console.log('SendRemitTotalx4 = ' + SendRemitTotalx4);
  console.log('DueInForeignCurrencyx4 = ' + DueInForeignCurrencyx4);
  console.log('ExchangedTotalx4 = ' + ExchangedTotalx4);


});










$('.Send2Yx4').click(function(){

DefaultRemitRatesx4 = "1";
RemitRatesx4 = "1 USD = " + DefaultRemitRatesx4;

$('.RemitRatesx4').attr('value', RemitRatesx4 );
 console.log('RemitRatesx4 = ' + RemitRatesx4);

SendRemitTotal2x4 = $('.qtyvalue2x4').attr('value');
 

 DueInForeignCurrencyx4 = $(this).attr('value');
 ExchangedTotalx4 = "$" + parseFloat(SendRemitTotal2x4) *  parseFloat(DueInForeignCurrencyx4);



ExchangedTotal2x4 = parseFloat(DefaultRemitRatesx4) * parseFloat(SendRemitTotal2x4);

console.log('ExchangedTotal2x4 = ' + ExchangedTotal2x4);

RemitReceivex4 = "Receives = $" + ExchangedTotal2x4;
$('.RemitReceivex4').attr('value', RemitReceivex4);



  console.log('SendRemitTotalx4 = ' + SendRemitTotalx4);
  console.log('DueInForeignCurrencyx4 = ' + DueInForeignCurrencyx4);
  console.log('ExchangedTotalx4 = ' + ExchangedTotalx4);


});










$('.SendCountryx4').click(function(){

BeforeRemitRatesx4 = $(this).attr('value');
RemitRatesx4 = "1 USD = " + BeforeRemitRatesx4;

$('.RemitRatesx4').attr('value', RemitRatesx4 );
 console.log('RemitRatesx4 = ' + RemitRatesx4);


ExchangedTotal2x4 = parseFloat(BeforeRemitRatesx4) * parseFloat(SendRemitTotal2x4);

console.log('ExchangedTotal2x4 = ' + ExchangedTotal2x4);

RemitReceivex4 = "Receives = $" + ExchangedTotal2x4;
$('.RemitReceivex4').attr('value', RemitReceivex4);


});






$('.SendConfirmRemitx4').click(function(){

  // SendRemitTotalx4 = "$" + $('.qtyvalue2x4').attr('value');
  // $('.SendRemitTotalx4').attr('value', SendRemitTotalx4);
  // console.log('Userinputx4 = ' + userInputx4);

 




  // ExchangedTotalx4 = "$" + parseFloat(DefaultRemitRatesx4) * parseFloat(SendRemitTotal2x4);
 



  // $('.SendRemitTotal3x4').attr('value', ExchangedTotalx4);



  console.log('SendRemitTotalx4 = ' + SendRemitTotalx4);
  console.log('DueInForeignCurrencyx4 = ' + DueInForeignCurrencyx4);
  console.log('ExchangedTotalx4 = ' + ExchangedTotalx4);


});










$('.CurrencyTypex4').click(function(){


  SendRemitTotal2x4 = $('.qtyvalue2x4').attr('value');
 

  DueInForeignCurrencyx4 = $(this).attr('value');
  ExchangedTotalx4 = "Total: " + "$" + parseFloat(SendRemitTotal2x4) *  parseFloat(DueInForeignCurrencyx4);


  $('.SendRemitTotal3x4').attr('value', ExchangedTotalx4);


  console.log('SendRemitTotalx4 = ' + SendRemitTotalx4);
  console.log('DueInForeignCurrencyx4 = ' + DueInForeignCurrencyx4);
  console.log('ExchangedTotalx4 = ' + ExchangedTotalx4);


});






// //////////////////////////Remit Rate, exhange and due payments //////////////////////














// ////////////Get Send///////////////////////////////////


$('.Get2Yx4').click(function(){
   $('.RemitPaymentx4').fadeIn();
});


$('.Send2Yx4').click(function(){
$('.SendRemittancex4').fadeIn();
});




$('.ConfirmRemitx4').click(function(){
$('.SendRemittancex4, .RemitPaymentx4').hide();
});



$('.SendConfirmRemitx4').click(function(){
$('.RemitPaymentx4').fadeIn();
});



$('.confirm2Yx4, .back2Yx4').click(function(){

 $('.confBack2Yx4, .py2x4').hide();
 $('.Get2Yx4, .Send2Yx4, .numVx4, .LinearNumPadx4').show();
 

});




// ////////////Get Send///////////////////////////////////





$('.OperationEndedPanelx4, #closeSer2Panelsx4, .closeSer2Panelsx4, .confirm2Yx4, #exit2Yx4, .ServiceBXX').click(function(){

inputTransfer1x4=0;
inputTransfer2x4=0;
inputTransfer3x4=0;
inputTransfer4x4=0;
inputTransfer5x4=0;
inputTransfer6x4=0;
inputTransfer7x4=0;
inputTransfer8x4=0;
inputTransfer9x4=0;

inputBillDenomi1x4=0;
inputBillDenomi2x4=0;
inputBillDenomi3x4=0;
inputBillDenomi4x4=0;
inputBillDenomi5x4=0;
inputBillDenomi6x4=0;
inputBillDenomi7x4=0;
inputBillDenomi8x4=0;
inputBillDenomi9x4=0;


  PBill1Imputx4=0;
  PBill2Imputx4=0;
  PBill3Imputx4=0;
  PBill4Imputx4=0;
  PBill5Imputx4=0;
  PBill6Imputx4=0;
  PBill7Imputx4=0;
  PBill8Imputx4=0;
  PBill9Imputx4=0;
  PBill10Imputx4=0;
  PBill11Imputx4=0;
  PBill12Imputx4=0;


  Card1Imputx4= 0;
  Card2Imputx4= 0;
  Card3Imputx4= 0;
  Card4Imputx4= 0;


  MikeImputx4=0;
  JeffImputx4=0;
  MariaImputx4=0;
  JohnImputx4=0;
  LeahImputx4=0;
  PaulImputx4=0;
  JennyImputx4=0;
  GokuImputx4=0;

inputLoan1x4=0;
inputLoan2x4=0;
inputLoan3x4=0;
inputLoan4x4=0;



inputAsset1x4=0;
inputAsset2x4=0;
inputAsset3x4=0;
inputAsset4x4=0;
inputAsset5x4=0;
inputAsset6x4=0;
inputAsset7x4=0;
inputAsset8x4=0;
inputAsset9x4=0;


$('.RetCashChecksx4').hide('');

});




