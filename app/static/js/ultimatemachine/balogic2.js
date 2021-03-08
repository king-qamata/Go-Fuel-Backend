


// void webBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e){
//   webBrowser1.Document.Body.Style = "overflow:hidden";
// }




$(document).ready(function(){




$('.navbar-collapse').click(function(){

  $(this).removeClass('collapse in');
  $(this).addClass('collapse');
  
});
  

// ///////Show different ATM models///////////
// ///////Show different ATM models///////////


$('.Model1x4').click(function(){

  $('.Modelsx4').hide('');
  $('.Serm').show('');
});



$('.Model2x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x2').show('');
});




$('.Model3x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x3').show('');
});



$('.Model4x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x4').show('');
});



$('.Model5x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x5').show('');
});




$('.Model6x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x6').show('');
});




$('.Model7x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x7').show('');
});


$('.Model24x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x24').show('');
});


$('.Model25x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x25').show('');
});


$('.Model27x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x27').show('');
});


$('.Model28x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x28').show('');
});


$('.Model29x4').click(function(){

  $('.Modelsx4').hide('');
  $('.serm2x29').show('');
});

// ///////Show different models///////////



var prevScrollpos = window.pageYOffset;
window.onScroll = function () {

   var currentScrollPos = window.PageYOffset;

   if (prevScroll > currentScrollpos){

    documennt.getElementById("mainNav").style.top = "0";
    }else{

      document.getElementById('mainNav').style.top = "-50px";
    }

prevScrollpos = currentScrollPos;

   }




  

  userInput = "0.00";
  $('#qtyvalue2').attr('value', userInput);



  ///////// 

    $("#sdatm1").click(function(){
      $(this).hide();
      $('#hdatm1').fadeIn();
    $(".atm1Details").toggle('slow');
    console.log('button atm1 show details was clicked');
  });

  $("#hdatm1").click(function(){
     $(this).hide();
      $('#sdatm1').fadeIn();
    $(".atm1Details").toggle('slow');
    console.log('button atm1 Hide details was clicked');
  });

  ////////////






// /////////Headers///////////////////


$('#atmHome, #ATM1Machine').click(function(){

$('.OtherHeader').hide();


});





$('#MyFinances').click(function(){
$('.HeaderP').hide();
$('.OtherHeader, .MyFinances').show();



});



$('#atmNoti').click(function(){
$('.HeaderP').hide();
$('.OtherHeader, .Notifications').show();



});



$('#atmSet').click(function(){
$('.HeaderP').hide();
$('.OtherHeader, .Settings').show();


});



// ///////////////////


















// ///////////////////
date= '';

$('#CreditC, #PayB, #send, #loan').click(function(){
$('.Schedule').show();
$('.Schedule > #datepicker').attr('value', date);

});


$('#closeSer2Panelsxxxx, .Confirm2Y, .exit2Y').click(function(){

$('.Schedule, .ServicePanel, #closeSer2Panelsxxxx').hide();
$('.Schedule > #datepicker').attr('value', date);

     
     $('.numV').fadeIn();
});






  ///////// 

    $("#sdatm2").click(function(){
      $(this).hide();
      $('#hdatm2').fadeIn();
    $(".atm2Details").toggle('slow');
    console.log('button atm2 show details was clicked');
  });

  $("#hdatm2").click(function(){
     $(this).hide();
      $('#sdatm2').fadeIn();
    $(".atm2Details").toggle('slow');
    console.log('button atm2 Hide details was clicked');
  });

  ////////////
    ///////// 

    $("#sdvm1").click(function(){
      $(this).hide();
      $('#hdvm1').fadeIn();
    $(".vm1Details").toggle('slow');
    console.log('button vm1 show details was clicked');

  });

  $("#hdvm1").click(function(){
     $(this).hide();
      $('#sdvm1').fadeIn();
    $(".vm1Details").toggle('slow');
    console.log('button vm2 Hide details was clicked');
  });

  ////////////
  ////////////
    ///////// 

    $("#sdvm2").click(function(){
      $(this).hide();
      $('#hdvm2').fadeIn();
    $(".vm2Details").toggle('slow');
    console.log('button vm2 show details was clicked');
  });

  $("#hdvm2").click(function(){
     $(this).hide();
      $('#sdvm2').fadeIn();
    $(".vm2Details").toggle('slow');
console.log('button vm2 Hide details was clicked');
  });

  ////////////
  ////////////
    ///////// 

    $("#sdvm3").click(function(){
      $(this).hide();
      $('#hdvm3').fadeIn();
    $(".vm3Details").toggle('slow');
    console.log('button vm3 show details was clicked');
  });

  $("#hdvm3").click(function(){
     $(this).hide();
      $('#sdvm3').fadeIn();
    $(".vm3Details").toggle('slow');
    console.log('button vm3 Hide details was clicked');
  });

  ////////////
   ////////////
    ///////// 

    $("#sdvm4").click(function(){
      $(this).hide();
      $('#hdvm4').fadeIn();
    $(".vm4Details").toggle('slow');
    console.log('button vm4 show details was clicked');
  });

  $("#hdvm4").click(function(){
     $(this).hide();
      $('#sdvm4').fadeIn();
    $(".vm4Details").toggle('slow');
    console.log('button vm4 Hide details was clicked');
  });

  ////////////



////////////////////////////////////////////////////////////
atmModel1 = true;

$('#atM2').click(function(){
  atmModel1 = false;
  tofValue = "waived";

  console.log('tof value was waived');
  console.log('Is this ATM model 1? '+ atmModel1);
  $('.ser2, .tof2').hide();
  $('.serm2').show();

  $('#billDeno').html("<input type='radio' name='lan'>Model <b>2</b> With <br> Bills Denomination");

  $('#noBillDeno').html("<input type='radio' name='lan'>Model <b>2</b>  Without <br> Bills Denomination");

});


$('#atM1').click(function(){
  atmModel1 = true;
  console.log('Is this ATM model 1? '+ atmModel1);
  $('.serm2').hide();
  $('.ser2, .tof2').show();

  $('#billDeno').html("<input type='radio' name='lan'>Model <b>1</b> With <br> Bills Denomination");

  $('#noBillDeno').html("<input type='radio' name='lan'>Model <b>1</b>  Without <br> Bills Denomination");
});

//////////////////////////////////////////////







// // if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 !== 0))

//   if ( $('#Spp1, #Spp2, #Spp3, #Spp4, #Spp5').attr("value") === false){
//     $(this).click(function(){
//      $(this).attr('value', true);
//      $(this).text("Hide Details")
// });

// };



//   if ( $('#Spp1, #Spp2, #Spp3, #Spp4, #Spp5').attr('value') === true) {
//     $(this).click(function(){
//      $(this).attr('value', false);
//      $(this).text("Show Details")
// });

// };


 
 



 

serviceValue='';
tofValue='';
billDeno= false;


//stores user inputs





$('.NumPad').click(function(){

if(userInput === '0.00'){

   userInput = '';
   console.log('UserInput was cleared in order to accept new values');
}

});



// /////////Send Wire transfers///////////////


// //////////////////////////////




$('.QtyValueCover').click(function(){
$('.NumPad').hide();
$('.numV').show();


});













////////////////////////////////////////////////////////////////////////////


var userInput='';




 $('.numV').click(function(){
   userInput += $(this).attr("value");
   $('#qtyvalue2').attr('value', userInput);
    console.log("current forrouting number is :" + userInput);
    console.log('New input is : ' + userInput);
    console.log('A numV was clicked');
 
    });





//backspace button
    $('#backSpace').click(function(){

    var getInput = userInput;
    var len = getInput.length -1;
    var newInput = getInput.substring(0, len);

    userInput = newInput;
     $('#qtyvalue2').attr('value', userInput);
     
    console.log('New input is : ' + userInput)

    });





// ////////////////////////////////////////////////////////////


//Hide routing and account numbers to display qty ammount numbers
/*$('.qty2, #qtyvalue2').click(function(){
  $('numR, numCC').hide();
  $('numV').show();

});
*/



$('#amount, #qtyvalue2').click(function(){
   $('.NumPad').hide();
  $('.numV').show();
});








/////////TofMini show my Assets/////////////////

$('.AllAccounts').click(function(){

$('.TofMini').fadeIn();

});


/////////TofMini show my Assets/////////////////








/////////// /Close Button for service pannels////////////////////

$('.serDrop > li, #QuickPay2, .AllAccounts').click(function(){

$('#closeSer2Panelsxxxx').fadeIn();


});



//





$('#closeSer2Panelsxxxx').click(function(){
$(this).fadeOut();


  $('.confBack2Y').hide();
  $('#submit2Y, #exit2Y').show(); 

$('.serB').removeClass('active');
$('.tofB').removeClass('active');

$('.ServicePanel, .TofMini').fadeOut();

$('.pyx1').hide();
$('.PayButtonsx1 > label').removeClass('active');

  
  $('.NumPad').hide();
  $('.numV').show();



userInput= '';
userInput = "0.00";
$('#qtyvalue2').attr('value', userInput);


       
         $('#qtyvalue2').show();
        

          DenoImput10=0;
          DenoImput20=0;
          DenoImput50=0;
          DenoImput100=0;

         $('#DenoImput10').attr('value', DenoImput10);
         $('#DenoImput20').attr('value', DenoImput20);
         $('#DenoImput50').attr('value', DenoImput50);
         $('#DenoImput100').attr('value', DenoImput100);

});








// ////////////////////















//Send money from check savings

$('.sendFromSavings, .sendFromCheckings').click(function(){
 // $('#labelATM').text('Send Money to:');
 // $('#routing').attr('placeholder', 'Routing Number');
 $('.sendMoney2').fadeIn('fast');
  $('#cheTsav2, #savTche2').fadeOut();
 serviceValue=$(this).attr('value');
 tofValue="send";
 console.log('tofValue is :' + tofValue);
 console.log('serviceValue is: ' + serviceValue);



});





// $('#sendx, #sendx2').click(function(){
//  // $('#labelATM').text('Send Money to:');
//  // $('#routing').attr('placeholder', 'Routing Number');
//  $('.sendMoney2').fadeIn('fast');
//   $('#cheTsav2, #savTche2').fadeOut();
//  serviceValue=$(this).attr('value');
//  tofValue = "waived";
//  console.log('tofValue is :' + tofValue);
//  console.log('serviceValue is: ' + serviceValue);



// });









//When secondary services button are clikced, primary service buttons become non-active if active
/*$('#transfer, .sendFromSavings, .sendFromCheckings').click(function(){
    
      $('#cash2, #withdraw2, #checks2').attr('class','btn btn-default btn-lg serB');

});
*/

$('#cash2, #withdraw2, #wdraw1, #wdraw2, #checks2, #sendx2, #CreditC, #Loan, #Live, #QuickPay, .sendFromCheckings').click(function(){
  $('#savTche, #cheTsav').hide();
  $('#toSaving').hide();
  $('#toChecking').hide();
});



 $('.sendFromSavings, .sendFromCheckings, #transfer').click(function(){
    
     $('.serB').removeClass('active');

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



$('#checking2, #saving2').click(function(){
   tofValue= $(this).attr('value');
   console.log('tofValue is :' + tofValue);
   console.log('serviceValue is: ' + serviceValue);


});

//If the transfer service is requested a arrow appears for their corresponding accounts






$('#transfer, .transfer').click(function(){
   $('#checking2').addClass('active');
   $('#saving2').removeClass('active')
   $('#savTche').hide();
   $('#cheTsav').fadeIn('fast');
   $('#toSaving').fadeIn('fast');

   tofValue=$('#checking2').attr('value');
     console.log('tofValue is :' + tofValue);
     console.log('serviceValue is: ' + serviceValue);


 });



   
   $('#checking2').click(function(){
     if(serviceValue ==$('#transfer').attr("value")){
          $('#cheTsav').fadeIn('fast');
          $('#savTche').hide();
          $('#toSaving').fadeIn('fast');
          $('#toChecking').hide();
          console.log('tofValue is :' + tofValue);
          console.log('serviceValue is :' + serviceValue);

            }
         }); 


      
   $('#saving2').click(function(){
      if(serviceValue==$('#transfer').attr("value") && tofValue== $("#saving2").attr('value')){

      
          $('#cheTsav').hide();
          $('#savTche').fadeIn('fast');
          $('#toSaving').hide();
          $('#toChecking').fadeIn('fast');
          console.log('tofValue is :' + tofValue);
          console.log('serviceValue is :' + serviceValue);
        }

      });
   
  
  $('#Live').click(function(){
    $('#cheTsav').hide();
    $('#savTche').hide();

    $('.assistance').fadeIn('fast');
    $('#closeSendLive').click(function(){  
         $('.assistance').fadeOut('fast');
       });
  });
 






/////////////////////////////////////////////////////////////////////////////////


//////////////////////Loan//////////////////////////





///////////////////Take Loan/////////////






  $('#Loan').click(function(){

    serviceValue="Loan";

    $('#cheTsav').hide();
    $('#savTche').hide();
    // $('#qtyvalue2, #qtyvalueDeno').hide();
    // $('#qtyvalueTLoan').show();
    $('.Loan').fadeIn('fast');
    
userInput = '';


    console.log("Service value  is = " + serviceValue);
    console.log("qtyvalue = Deno" );







serviceValue = $(this).attr('value');
  tofValue = 'waived';
  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);
  $('.CreditTLoans').fadeIn('slow');



  TLoan1Imput=0;
  TLoan2Imput=0;
  TLoan3Imput=0;
  TLoan4Imput=0;
  TLoan5Imput=0;





});












// /////////////////////////////////
  var SelectedLoan=""


  $('.TLoan').click(function(){
    SelectedLoan = $(this).attr('value');
    console.log('Current Selected Loan  is : ' + SelectedLoan);




// DenoImputTotal = DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100;
console.log('TLoan total is ' + userInput);




});



  // TLoan1Imput='';
  // TLoan2Imput='';
  // TLoan3Imput='';
  // TLoan4Imput='';







/////////////////////



$('#TLoan1').click(function(){

console.log('TLoan 1  was selected');


 TLoan1Imput = 0;
 $('#TLoan1ImputLabel > input').attr('value', TLoan1Imput);

userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

  
  


   $('#TLoan1Imput, #TLoan1ImputLabel').css('color','green');


   $('.NumPad').hide();
   $('.numTLoan1').show();



  console.log(TLoan1Imput + TLoan2Imput + TLoan3Imput + TLoan4Imput + TLoan5Imput);



});



///////////

$('.numTLoan1').click(function(){

  if (TLoan1Imput === 0 ){
    TLoan1Imput = '';
  }
});

/////////






 $('.numTLoan1').click(function(){

          TLoan1Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#TLoan1ImputLabel > input').attr('value', TLoan1Imput);

           console.log("current TLoan 1 imput  number is :" + TLoan1Imput);
           console.log('New TLoan 1 imput  is : ' + TLoan1Imput);
           
userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 
        
           });




       //backspace button
           $('#backSpaceTLoan1').click(function(){

           var getInput = TLoan1Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan1Imput = newInput;
            $('#TLoan1ImputLabel > input').attr('value', TLoan1Imput);
     
           console.log('New input is : ' + TLoan1Imput);

           console.log('back space was clicked' );
            
userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 


       });









//////////////////



$('#TLoan2').click(function(){

  console.log('TLoan2  was selected');

 TLoan2Imput = 0;
 $('#TLoan2ImputLabel > input').attr('value', TLoan2Imput);


   $('#TLoan2Imput, #TLoan2ImputLabel').css('color','green');


   $('.NumPad').hide();
   $('.numTLoan2').show();



  console.log(TLoan2Imput + TLoan2Imput + TLoan3Imput + TLoan4Imput + TLoan5Imput);


userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 
});




///////////

$('.numTLoan2').click(function(){

  if (TLoan2Imput === 0 ){
    TLoan2Imput = '';
  }
});

/////////





 $('.numTLoan2').click(function(){

          TLoan2Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#TLoan2ImputLabel > input').attr('value', TLoan2Imput);

           console.log("current TLoan 1 imput  number is :" + TLoan2Imput);
           console.log('New TLoan 1 imput  is : ' + TLoan2Imput);
           

userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 
        
           });




       //backspace button
           $('#backSpaceTLoan2').click(function(){

           var getInput = TLoan2Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan2Imput = newInput;
            $('#TLoan2ImputLabel > input').attr('value', TLoan2Imput);
     
           console.log('New input is : ' + TLoan2Imput)
            
userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 


       });








// ///////////////




$('#TLoan3').click(function(){

 TLoan3Imput = 0;
 $('#TLoan3ImputLabel > input').attr('value', TLoan3Imput);




  


   $('#TLoan3Imput, #TLoan3ImputLabel').css('color','green');


   $('.NumPad').hide();
   $('.numTLoan3').show();


  console.log(TLoan3Imput + TLoan3Imput + TLoan3Imput + TLoan4Imput + TLoan5Imput);



userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 

});




///////////

$('.numTLoan3').click(function(){

  if (TLoan3Imput === 0 ){
    TLoan3Imput = '';
  }
});

/////////





 $('.numTLoan3').click(function(){

          TLoan3Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#TLoan3ImputLabel > input').attr('value', TLoan3Imput);

           console.log("current TLoan 1 imput  number is :" + TLoan3Imput);
           console.log('New TLoan 1 imput  is : ' + TLoan3Imput);
           

userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 
        
           });




       //backspace button
           $('#backSpaceTLoan3').click(function(){

           var getInput = TLoan3Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          TLoan3Imput = newInput;
            $('#TLoan3ImputLabel > input').attr('value', TLoan3Imput);
     
           console.log('New input is : ' + TLoan3Imput)
            

userInput = parseInt(TLoan1Imput) + parseInt(TLoan2Imput) + parseInt(TLoan3Imput) + parseInt(TLoan4Imput) + parseInt(TLoan5Imput);
$('#qtyvalue2').attr('value', userInput);

 

       });








// //////////////////





// });////End of TLoan Payment/////////////*********************************






 $('.LoanGranted').click(function(){
    $(this).fadeOut('slow');

});

/////////////////////////////////////////////


///////////////////Credit Cards/////////////



$('#CreditC').click(function(){

  serviceValue = $(this).attr('value');
  tofValue = 'waived';
  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);
  $('.CreditCards').fadeIn('slow');

});




$('#closeSendCard').click(function(){
$('.CreditCards').fadeOut('slow');

});




SelectedCard = '';



$('.Card').click(function(){
SelectedCard = $(this).attr('value');
console.log("Selected Cards is = " + SelectedCard);

});




      $('.CardPayment').click(function(){

      
      $('.CreditCards').fadeIn('slow');
      $(this).fadeOut('slow');
      $('.Card').removeClass('active');
});


      $('#happyCard').attr('value', SelectedCard);
      $('#cardPaymentAmount').attr('value', userInput);







$('.CardStatement').click(function(){
  $(this).fadeOut(1500);
  $('.CreditCards').fadeIn('slow');
});


$('.Card').dblclick(function(){

  $('.CreditCards').fadeOut(1500);
  $('#CardName').attr('value', SelectedCard);
$('.CardStatement').fadeIn('fast');



});


////////////////QuickPay///////////////////////////



////////////////QuickPay///////////////////////////

$('#QuickPay, #QuickPay2').click(function(){

 console.log("Service value  is = " + serviceValue);

serviceValue='QuickPay';
tofValue = 'waived';

$('.sendMoney11').fadeIn('slow');




    $('#cheTsav').hide();
    $('#savTche').hide();
    // $('#qtyvalue2, #qtyvalueDeno, #qtyvalueCard').hide();
    // $('#qtyvalueQPay').show();



  MikeImput=0;
  JeffImput=0;
  MariaImput=0;
  JohnImput=0;


  LeahImput=0;
  PaulImput=0;
  JennyImput=0;
  GokuImput=0;



         $('#MikeImput').attr('value', MikeImput);
         $('#JeffImput').attr('value', JeffImput);
         $('#MariaImput').attr('value', MariaImput);
         $('#JohnImput').attr('value', JohnImput);


         $('#LeahImput').attr('value', LeahImput);
         $('#PaulImput').attr('value', PaulImput);
         $('#JennyImput').attr('value', JennyImput);
         $('#GokuImput').attr('value', GokuImput);

 
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);





    console.log("Service value  is = " + serviceValue);







  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);

});

// $('#closeSendQuickPay').click(function(){
// $('.sendMoney11').fadeOut('slow');

// });



Friend="";

$('.friends').click(function(){
Friend = $(this).attr('value');
console.log("Friend is = " + Friend);



})

      $('#happyFriend').attr('value', Friend);
      $('#quickPayAmount').attr('value', userInput);






   


  //      $('.retrieve').click(function(){  
  //        $('.BillDenominationWdraw').fadeOut('fast');
  //        $('#qtyvalueDeno').hide();
  //        userInput ="";
  //        $('#qtyvalue2').show();
  //        $('#qtyvalue2').attr('value', "");

  //        $('#MikeImput').attr('value','');
  //        $('#JeffImput').attr('value','');
  //        $('#MariaImput').attr('value','');
  //        $('#JohnImput').attr('value', '');


  //        $('#LeahImput').attr('value','');
  //        $('#PaulImput').attr('value','');
  //        $('#JennyImput').attr('value','');
  //        $('#GokuImput').attr('value', '');


  // MikeImput='';
  // JeffImput='';
  // MariaImput='';
  // JohnImput='';


  // LeahImput='';
  // PaulImput='';
  // JennyImput='';
  // GokuImput='';



       // });
 









// /////////////////////////////////
  var SelectedFriend=""


  $('.friends').click(function(){
    SelectedFriend = $(this).attr('value');
    console.log('The selected Friend is : ' + SelectedFriend);





});



$('.NumPad').click(function(){
// if (MikeImput === '0' || 0){MikeImput
//   MikeImput = '';
// }

if (JeffImput === '0' || 0){
  JeffImput = '';
}

if (MariaImput === '0' || 0){
  MariaImput = '';
}

if (JohnImput === '0' || 0){
  JohnImput = '';
}

if (LeahImput === '0' || 0){
  LeahImput= '';
}

if (PaulImput === '0' || 0){
  PaulImput = '';
}

if (JennyImput === '0' || 0){
  JennyImput = '';
}

if (GokuImput === '0' || 0){
  GokuImput = '';
}

});



/////////////////////



$('#Mike').click(function(){


        $('.FriendMemo').hide();
$('.MikeMemo').show().click(function(){
  $('.WriteMemo, .MikeTTMemo').fadeIn();
});


console.log('Mike  was selected');

 MikeImput = 0;
 $('#MikeImput').attr('value', MikeImput);




   $('#Mike > span, #MikeImput').css('color','green');


 $('.NumPad').hide();
   $('.numMike').show();




 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

});




///////////

$('.numMike').click(function(){

  if (MikeImput === 0 ){
    MikeImput = '';
  }
});

/////////





 $('.numMike').click(function(){

          MikeImput += $(this).attr("value");
          // $('#MikeImput').attr('value', MikeImput);


          $('#MikeImput').attr('value', MikeImput);

           console.log("current Friend 1 imput  number is :" + MikeImput);
           console.log('New Friend1 imput  is : ' + MikeImput);
           
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceMike').click(function(){

           var getInput = MikeImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MikeImput = newInput;
            $('#MikeImput').attr('value', MikeImput);
     
           console.log('New input is : ' + MikeImput)
            

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);




       });









//////////////////




/////////////////////



$('#Jeff').click(function(){


        $('.FriendMemo').hide();
$('.JeffMemo').show().click(function(){
  $('.WriteMemo, .JeffTTMemo').fadeIn();
});


console.log('Jeff  was selected');

 JeffImput = 0;
 $('#JeffImput').attr('value', JeffImput);



  
  


   $('#Jeff > span, #JeffImput').css('color','green');


 $('.NumPad').hide();
   $('.numJeff').show();


 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

});



///////////

$('.numJeff').click(function(){

  if (JeffImput === 0 ){
    JeffImput = '';
  }
});

/////////






 $('.numJeff').click(function(){

          JeffImput += $(this).attr("value");
          // $('#JeffImput').attr('value', JeffImput);


          $('#JeffImput').attr('value', JeffImput);

           console.log("current Friend 1 imput  number is :" + JeffImput);
           console.log('New Friend1 imput  is : ' + JeffImput);
           
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceJeff').click(function(){

           var getInput = JeffImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JeffImput = newInput;
            $('#JeffImput').attr('value', JeffImput);
     
           console.log('New input is : ' + JeffImput)
            
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


       });









//////////////////





/////////////////////



$('#Maria').click(function(){


        $('.FriendMemo').hide();
$('.MariaMemo').show().click(function(){
  $('.WriteMemo, .MariaTTMemo').fadeIn();
});


console.log('Maria  was selected');

MariaImput = 0;
 $('#MariaImput').attr('value', MariaImput);
 


  
  


   $('#Maria > span, #MariaImput').css('color','green');


   $('.NumPad').hide();
   $('.numMaria').show();



 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);
});




///////////

$('.numMaria').click(function(){

  if (MariaImput === 0 ){
    MariaImput = '';
  }
});

/////////






 $('.numMaria').click(function(){

          MariaImput += $(this).attr("value");
          // $('#MariaImput').attr('value', MariaImput);


          $('#MariaImput').attr('value', MariaImput);

           console.log("current Friend 1 imput  number is :" + MariaImput);
           console.log('New Friend1 imput  is : ' + MariaImput);
           

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceMaria').click(function(){

           var getInput = MariaImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MariaImput = newInput;
            $('#MariaImput').attr('value', MariaImput);
     
           console.log('New input is : ' + MariaImput)
            
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


       });









//////////////////




/////////////////////



$('#John').click(function(){


$('.FriendMemo').hide();
$('.JohnMemo').show().click(function(){
  $('.WriteMemo, .JohnTTMemo').fadeIn();
});


console.log('John  was selected');

 JohnImput = 0;
 $('#JohnImput').attr('value', JohnImput);



  
  


   $('#John > span, #JohnImput').css('color','green');


   $('.NumPad').hide();
   $('.numJohn').show();


 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

});



///////////

$('.numJohn').click(function(){

  if (JohnImput === 0 ){
    JohnImput = '';
  }
});

/////////






 $('.numJohn').click(function(){

          JohnImput += $(this).attr("value");
          // $('#JohnImput').attr('value', JohnImput);


          $('#JohnImput').attr('value', JohnImput);

           console.log("current Friend 1 imput  number is :" + JohnImput);
           console.log('New Friend1 imput  is : ' + JohnImput);
           

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceJohn').click(function(){

           var getInput = JohnImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JohnImput = newInput;
            $('#JohnImput').attr('value', JohnImput);
     
           console.log('New input is : ' + JohnImput)
            

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


       });









//////////////////






/////////////////////



$('#Leah').click(function(){


        $('.FriendMemo').hide();
$('.LeahMemo').show().click(function(){
  $('.WriteMemo, .LeahTTMemo').fadeIn();
});


console.log('Leah  was selected');

LeahImput = 0;
 $('#LeahImput').attr('value', LeahImput);
 


  
  


   $('#Leah > span, #LeahImput').css('color','green');


   $('.NumPad').hide();
   $('.numLeah').show();



 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

});




///////////

$('.numLeah').click(function(){

  if (LeahImput === 0 ){
    LeahImput = '';
  }
});

/////////





 $('.numLeah').click(function(){

          LeahImput += $(this).attr("value");
          // $('#LeahImput').attr('value', LeahImput);


          $('#LeahImput').attr('value', LeahImput);

           console.log("current Friend 1 imput  number is :" + LeahImput);
           console.log('New Friend1 imput  is : ' + LeahImput);
           
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


        
           });




       //backspace button
           $('#backSpaceLeah').click(function(){

           var getInput = LeahImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          LeahImput = newInput;
            $('#LeahImput').attr('value', LeahImput);
     
           console.log('New input is : ' + LeahImput)
            

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

       });









//////////////////





/////////////////////



$('#Paul').click(function(){


          $('.FriendMemo').hide();
$('.PaulMemo').show().click(function(){
  $('.WriteMemo, .PaulTTMemo').fadeIn();
});




console.log('Paul  was selected');

PaulImput = 0;
 $('#PaulImput').attr('value', PaulImput);
 


  
  


   $('#Paul > span, #PaulImput').css('color','green');


   $('.NumPad').hide();
   $('.numPaul').show();



 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);
});


///////////

$('.numPaul').click(function(){

  if (PaulImput === 0 ){
    PaulImput = '';
  }
});

/////////


 $('.numPaul').click(function(){

          PaulImput += $(this).attr("value");
          // $('#PaulImput').attr('value', PaulImput);


          $('#PaulImput').attr('value', PaulImput);

           console.log("current Friend 1 imput  number is :" + PaulImput);
           console.log('New Friend1 imput  is : ' + PaulImput);
           

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpacePaul').click(function(){

           var getInput = PaulImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PaulImput = newInput;
            $('#PaulImput').attr('value', PaulImput);
     
           console.log('New input is : ' + PaulImput)
            

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

       });









//////////////////





/////////////////////



$('#Jenny').click(function(){



        $('.FriendMemo').hide();
$('.JennyMemo').show().click(function(){
  $('.WriteMemo, .JennyTTMemo').fadeIn();
});


console.log('Jenny  was selected');

JennyImput = 0;
 $('#JennyImput').attr('value', JennyImput);
 


  
  


   $('#Jenny > span, #JennyImput').css('color','green');

   $('.NumPad').hide();
   $('.numJenny').show();



 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);
});



// ////////
$('.numJenny').click(function(){

  if (JennyImput === 0 ){
    JennyImput = '';
  }
});
////////////


 $('.numJenny').click(function(){

          JennyImput += $(this).attr("value");
          // $('#JennyImput').attr('value', JennyImput);


          $('#JennyImput').attr('value', JennyImput);

           console.log("current Friend 1 imput  number is :" + JennyImput);
           console.log('New Friend1 imput  is : ' + JennyImput);
           

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceJenny').click(function(){

           var getInput = JennyImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          JennyImput = newInput;
            $('#JennyImput').attr('value', JennyImput);
     
           console.log('New input is : ' + JennyImput)
            
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


       });









//////////////////





/////////////////////



$('#Goku').click(function(){


        $('.FriendMemo').hide();
$('.GokuMemo').show().click(function(){
  $('.WriteMemo, .GokuTTMemo').fadeIn();
});


console.log('Goku  was selected');

GokuImput = 0;
 $('#GokuImput').attr('value', GokuImput);
 


  
  


   $('#Goku > span, #GokuImput').css('color','green');


   $('.NumPad').hide();
   $('.numGoku').show();



 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);

});

$('.numGoku').click(function(){

  if (GokuImput === 0 ){
    GokuImput = '';
  }
});


 $('.numGoku').click(function(){

          GokuImput += $(this).attr("value");
          // $('#GokuImput').attr('value', GokuImput);


          $('#GokuImput').attr('value', GokuImput);

           console.log("current Friend 1 imput  number is :" + GokuImput);
           console.log('New Friend1 imput  is : ' + GokuImput);
           
 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


        
           });




       //backspace button
           $('#backSpaceGoku').click(function(){

           var getInput = GokuImput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          GokuImput = newInput;
            $('#GokuImput').attr('value', GokuImput);
     
           console.log('New input is : ' + GokuImput)
            

 userInput = parseInt(JeffImput) + parseInt(MariaImput) + parseInt(JohnImput) + parseInt(LeahImput) + parseInt(PaulImput) + parseInt(JennyImput) + parseInt(GokuImput);
 $('#qtyvalue2').attr('value', userInput);


       });






//////////////////


////////////////Wire Transfer ///////////////////////////
///////////////////////////////////////////////////////////




$('#sen').click(function(){

 console.log("Service value  is = " + serviceValue);

serviceValue='WireTransfer';
tofValue = 'waived';

$('.sendMoney2').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  WrtName='';
  WrtAccountNUmber='';
  WrtRoutingNUmber='';
  WrtTelephone='';
  WrtZipCode='';







         $('.WrtNameInput').attr('value', WrtName);
         $('.WrtAccountInput').attr('value', WrtAccountNUmber);
         $('.WrtRoutingInput').attr('value', WrtRoutingNUmber);
         $('.WrtTelephoneInput').attr('value', WrtTelephone);
         $('.WrtZipCodeInput').attr('value', WrtZipCode);


 
userInput = '';
$('#qtyvalue2').attr('value', userInput);



    console.log("Service value  is = " + serviceValue);



  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);

});






















// /////////////////////////////////
WrtLabel="";

$('.WrtLabel').click(function(){
WrtLabel = $(this).attr('value');
console.log("The selected WrtLabel is = " + WrtLabel);

})








/////////////////////



$('.NameWrLabel').click(function(){

});




//////////////////








/////////////////////



$('.AccWrLabel').click(function(){




console.log('Wrt Name Label  was selected');

 WrtAccountNUmber = "";
 $('.WrtAccountInput').attr('value', WrtAccountNUmber);


 $('.NumPad').hide();
 $('.numCC').show();

});




 $('.numCC').click(function(){

         WrtAccountNUmber+= $(this).attr("value");
          
          $('.WrtAccountInput').attr('value', WrtAccountNUmber);

           });



       //backspace button
           $('#backSpaceCC').click(function(){

           var getInput = WrtAccountNUmber;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtAccountNUmber = newInput;
            $('.WrtAccountInput').attr('value', WrtAccountNUmber);
     
           console.log('New input is : ' + WrtAccountNUmber);
            


       });




//////////////////




/////////////////////



$('.RoutWrLabel').click(function(){




console.log('Wrt Name Label  was selected');

 WrtRoutingNUmber = "";
 $('.WrtRoutingInput').attr('value', WrtRoutingNUmber);


 $('.NumPad').hide();
 $('.numR').show();

});




 $('.numR').click(function(){

         WrtRoutingNUmber+= $(this).attr("value");
          
          $('.WrtRoutingInput').attr('value', WrtRoutingNUmber);

           });



       //backspace button
           $('#backSpaceR').click(function(){

           var getInput = WrtRoutingNUmber;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtRoutingNUmber = newInput;
            $('.WrtRoutingInput').attr('value', WrtRoutingNUmber);
     
           console.log('New input is : ' + WrtRoutingNUmber);
            


       });




//////////////////




/////////////////////



$('.PhoneWrLabel').click(function(){




console.log('Wrt Name Label  was selected');

 WrtTelephone = "";
 $('.WrtTelephoneInput').attr('value', WrtTelephone);


 $('.NumPad').hide();
 $('.numSwTel').show();

});




 $('.numSwTel').click(function(){

          WrtTelephone+= $(this).attr("value");
          
          $('.WrtTelephoneInput').attr('value', WrtTelephone);

           });



       //backspace button
           $('#backSpaceSwTel').click(function(){

           var getInput = WrtTelephone;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           WrtTelephone = newInput;
           $('.WrtTelephoneInput').attr('value', WrtTelephone);
     
           console.log('New input is : ' + WrtTelephone);
            


});




//////////////////





/////////////////////



$('.ZipWrLabel').click(function(){




console.log('Wrt Name Label  was selected');

 WrtZipCode = "";
 $('.WrtZipCodeInput').attr('value', WrtZipCode);


 $('.NumPad').hide();
 $('.numSwZip').show();
 
});




 $('.numSwZip').click(function(){

         WrtZipCode+= $(this).attr("value");
          
          $('.WrtZipCodeInput').attr('value', WrtZipCode);

           });



       //backspace button
           $('#backSpaceSwZip').click(function(){

           var getInput = WrtZipCode;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          WrtZipCode = newInput;
            $('.WrtZipCodeInput').attr('value', WrtZipCode);
     
           console.log('New input is : ' + WrtZipCode);
            


});






////////////////end of Wire Transfer ///////////////////////////
///////////////////////////////////////////////////////////







$('#closeSer2Panelsxxxx, .SubmitMemo, .Confirm2Y, .OperationEndedPanel').click(function(){

$('.WriteMemo, .TMemo, .FriendMemo').fadeOut();

 userInput = '0.00';
 $('#qtyvalue2').attr('value', userInput);

});











///////////////////////////////////////////////////








///////////////////////////////////////////////////


// ///////////Bill DenoMination Official ///////////





  $('#BILLDE').click(function(){
    serviceValue="BillDe";
    tofValue = 'waived';
    
    $('#cheTsav').hide();
    $('#savTche').hide();
 
    $('.BillDenominationWdraw').fadeIn('fast');
    
userInput = '';
          DenoImput10 = 0;
          DenoImput20 = 0;
          DenoImput50 = 0;
          DenoImput100 = 0;

    console.log("Service value is = " + serviceValue);
    console.log("qtyvalue = Deno" );

   });



       $('.retrieve').click(function(){  
         $('.BillDenominationWdraw').fadeOut('fast');
         $('#qtyvalueDeno').hide();
         userInput ="";
         $('#qtyvalue2').show();
         $('#qtyvalue2').attr('value', "");


          DenoImput10 = 0;
          DenoImput20 = 0;
          DenoImput50 = 0;
          DenoImput100 = 0;


         $('#DenoImput10').attr('value', DenoImput10);
         $('#DenoImput20').attr('value', DenoImput20);
         $('#DenoImput50').attr('value', DenoImput50);
         $('#DenoImput100').attr('value', DenoImput100);


    


       });
 










// /////////////////////////////////
  var BillType=""


  $('.DenominatedBills').click(function(){
    BillType = $(this).attr('value');
    console.log('Bill Type Current Value is : ' + BillType);




  // var userInputDeno='';


  // DenoImput10value='';
  // DenoImput20value='';
  // DenoImput50value='';
  // DenoImput100value='';



// DenoImputTotal = DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100;
// console.log('Deno total is ' + DenoImputTotal);






});



  DenoImput10=0;
  DenoImput20=0;
  DenoImput50=0;
  DenoImput100=0;


  Deno10IVal  = '';
  Deno20IVal  = '';
  Deno50IVal  = '';
  Deno100IVal = ''; 





$('.NumPad').click(function(){

  

if (DenoImput10 === '0' || 0){
  DenoImput10 = '';
}

if (DenoImput20 === '0' || 0){
  DenoImput20 = '';
}

if (DenoImput50 === '0' || 0){
  DenoImput50 = '';
}

if (DenoImput100 === '0' || 0){
  DenoImput100 = '';
}



});



/////////



$('#bill10').click(function(){


DenoImput10 = '0';
 $('#DenoImput10Label > input').attr('value', DenoImput10);
     


  console.log('The Selected DenoImput is : ' + BillType);
  console.log('The Selected DenoImput is : ' + BillType);


   $('#DenoImput10, #DenoImput10Label').css('color','green');


   $('.NumPad').hide();
   $('.numDeno10').show();


  console.log('numDeno10 pad');
  console.log(DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100);


 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);



});




 $('.numDeno10').click(function(){

          DenoImput10 += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);
          Deno10IVal = parseInt(DenoImput10);

          $('#DenoImput10Label > input').attr('value', Deno10IVal);

           console.log("current DenoImput10 number is :" + Deno10IVal);
           console.log('New DenoImput10 is : ' + Deno10IVal);
           console.log('A numV was clicked and it has change input 10 value');

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);

 // // Deno10IVal = parseInt(DenoImput10);
 // DenoTotal = Deno10IVal + Deno20IVal + Deno50IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);
        
           });




       //backspace button
           $('#backSpaceDeno10').click(function(){

           var getInput = DenoImput10;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput10 = newInput;
          Deno10IVal = parseInt(DenoImput10);

            $('#DenoImput10Label > input').attr('value', Deno10IVal);
     
           console.log('New input is : ' +  Deno10IVal)
            

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);

 // Deno10IVal = parseInt(DenoImput10);
 // DenoTotal = Deno10IVal + Deno20IVal + Deno50IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);


       });




/////////


$('#bill20').click(function(){

DenoImput20 = '0';
 $('#DenoImput20Label > input').attr('value', DenoImput20);


  console.log('The Selected DenoImput is : ' + BillType);
  console.log('The Selected DenoImput is : ' + BillType);


   $('#DenoImput20, #DenoImput20Label').css('color','green');


  $('.NumPad').hide();
   $('.numDeno20').show();
   console.log('numDeno20 pad');


  console.log('total is = '+ DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100);


 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);



});




 $('.numDeno20').click(function(){

          DenoImput20 += $(this).attr("value");
          $('#DenoImput20Label > input').attr('value', DenoImput20);
           console.log("current DenoImput20 number is :" + DenoImput20);
           console.log('New DenoImput20 is : ' + DenoImput20);
           console.log('A numV was clicked and it has change input 10 value');


 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);

 // Deno20IVal = parseInt(DenoImput20);
 // DenoTotal = Deno20IVal + Deno10IVal + Deno50IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);

        
           });




       //backspace button
           $('#backSpaceDeno20').click(function(){

           var getInput = DenoImput20;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput20 = newInput;
             $('#DenoImput20Label > input').attr('value', DenoImput20);
     
           console.log('New input is : ' + DenoImput20)
            DenoImput20value = DenoImput20 * BillType;

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
  $('#qtyvalue2').attr('value', userInput);

 //  Deno20IVal = parseInt(DenoImput20);
 // DenoTotal = Deno20IVal + Deno10IVal + Deno50IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);



       });




//////////



$('#bill50').click(function(){

DenoImput50 = '0';
 $('#DenoImput50Label > input').attr('value', DenoImput50);


  console.log('The Selected DenoImput is : ' + BillType);
  console.log('The Selected DenoImput is : ' + BillType);


   $('#DenoImput50, #DenoImput50Label').css('color','green');


   $('.NumPad').hide();
   $('.numDeno50').show();
   console.log('numDeno50 pad');

     console.log(DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100);

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
$('#qtyvalue2').attr('value', userInput);





});




 $('.numDeno50').click(function(){

          DenoImput50 += $(this).attr("value");
           $('#DenoImput50Label > input').attr('value', DenoImput50);
           console.log("current DenoImput50 number is :" + DenoImput50);
           console.log('New DenoImput50 is : ' + DenoImput50);
           console.log('A numV was clicked and it has change input 10 value');


 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
 $('#qtyvalue2').attr('value', userInput);


 // Deno50IVal = parseInt(DenoImput50);
 // DenoTotal = Deno50IVal + Deno20IVal + Deno10IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);


        
           });




       //backspace button
           $('#backSpaceDeno50').click(function(){

           var getInput = DenoImput50;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput50 = newInput;
             $('#DenoImput50Label > input').attr('value', DenoImput50);
     
           console.log('New input is : ' + DenoImput50)
            DenoImput50value = DenoImput50 * BillType;


 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
 $('#qtyvalue2').attr('value', userInput);


 // Deno50IVal = parseInt(DenoImput50);
 // DenoTotal = Deno50IVal + Deno20IVal + Deno10IVal + Deno100IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);   

       });



///////////




$('#bill100').click(function(){

 DenoImput100 = '0';
 $('#DenoImput100Label > input').attr('value', DenoImput100);


  console.log('The Selected DenoImput is : ' + BillType);
  console.log('The Selected DenoImput is : ' + BillType);


   $('#DenoImput100, #DenoImput100Label').css('color','green');


    $('.NumPad').hide();
   $('.numDeno100').show();
   console.log('numDeno100 pad');

     console.log(DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100);

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
 $('#qtyvalue2').attr('value', userInput);



});



 $('.numDeno100').click(function(){

          DenoImput100 += $(this).attr("value");
          $('#DenoImput100Label > input').attr('value', DenoImput100);
           console.log("current DenoImput100 number is :" + DenoImput100);
           console.log('New DenoImput100 is : ' + DenoImput100);
           console.log('A numV was clicked and it has change input 10 value');

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
 $('#qtyvalue2').attr('value', userInput);

 // Deno100IVal = parseInt(DenoImput100);
 // DenoTotal = Deno100IVal + Deno20IVal + Deno50IVal + Deno10IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);

        
           });




       //backspace button
           $('#backSpaceDeno100').click(function(){

           var getInput = DenoImput100;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          DenoImput100 = newInput;
            $('#DenoImput100Label > input').attr('value', DenoImput100);
     
           console.log('New input is : ' + DenoImput100)
            DenoImput100value = DenoImput100 * BillType;

 userInput = parseInt(DenoImput10) + parseInt(DenoImput20) + parseInt(DenoImput50) + parseInt(DenoImput100);
 $('#qtyvalue2').attr('value', userInput);

 // Deno100IVal = parseInt(DenoImput100);
 // DenoTotal = Deno100IVal + Deno20IVal + Deno50IVal + Deno10IVal;
 //   $('#qtyvalue2').attr('value', DenoTotal);

       });





/////////

  console.log(DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100);




// $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn0').click(function(){

//      DenoImputTotal = DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100;


//      console.log('DenoImputTotal is = ' + DenoImputTotal);

//      $('#qtyvalueDeno').attr('value', DenoImputTotal);

// });





// $('.NumPad').click(function(){



//   Deno10IVal = parseInt(DenoImput10);
//   Deno20IVal = parseInt(DenoImput20);
//   Deno50IVal = parseInt(DenoImput50);
//   Deno100IVal = parseInt(DenoImput100);


//    console.log('deno 10 is = ' + Deno10IVal + ' and it is type of ' + typeof('Deno10IVal'));
//    console.log('deno 20 is = ' + Deno20IVal + ' and it is type of ' + typeof('Deno20IVal'));
//    console.log('deno 50 is = ' + Deno50IVal + ' and it is type of ' + typeof('Deno50IVal'));
//    console.log('deno 100 is = ' + Deno100IVal + ' and it is type of ' + typeof('Deno100IVal'));

//     console.log(Deno10IVal + Deno20IVal + Deno50IVal + Deno100IVal);

//     DenoTotal = Deno10IVal + Deno20IVal + Deno50IVal + Deno100IVal;


// $('#qtyvalue2').attr('value', DenoTotal);


// });



// });////End of billtype click/////////////*********************************




///////////////////Pay Your Bills/////////////






  $('#PayB').click(function(){

    serviceValue="PayYourBills";

    $('#cheTsav').hide();
    $('#savTche').hide();
    // $('#qtyvalue2, #qtyvalueDeno').hide();
    // $('#qtyvaluePBill').show();
    $('.PayBills').fadeIn('fast');
    
userInput = '';


    console.log("Service value  is = " + serviceValue);
    console.log("qtyvalue = Deno" );







serviceValue = $(this).attr('value');
  tofValue = 'waived';
  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);
  $('.CreditPBills').fadeIn('slow');



  PBill1Imput=0;
  PBill2Imput=0;
  PBill3Imput=0;
  PBill4Imput=0;
  PBill5Imput=0;
  PBill6Imput=0;





});





// SelectedBill = '';



// $('.PBill').click(function(){
// SelectedBill = $(this).attr('value');
// console.log("Selected PBills is = " + SelectedPBill);

// });



//       $('#happyPBill').attr('value', SelectedPBill);
//       $('#PBillPaymentAmount').attr('value', userInput);







// $('.PBillStatement').click(function(){
//   $(this).fadeOut(1500);
//   $('.CreditPBills').fadeIn('slow');
// });




// $('.PBill').dblclick(function(){

//   $('.CreditPBills').fadeOut(1500);
//   $('#PBillName').attr('value', SelectedPBill);
// $('.PBillStatement').fadeIn('fast');


//    });














// /////////////////////////////////
  var SelectedBill=""


  $('.PBill').click(function(){
    SelectedBill = $(this).attr('value');
    console.log('Current Selected Bill  is : ' + SelectedBill);




// DenoImputTotal = DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100;
console.log('PBill total is ' + userInput);

$('.pyx1').hide();
$('.PayButtonsx1 > label').removeClass('active');
$('.confBack2Y').hide();
$('#submit2Y, #exit2Y').show();

});



  // PBill1Imput='';
  // PBill2Imput='';
  // PBill3Imput='';
  // PBill4Imput='';







/////////////////////



$('#PBill1').click(function(){

console.log('PBill 1  was selected');

 PBill1Imput = 0;
 $('#PBill1ImputLabel > input').attr('value', PBill1Imput);

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);

  
  


   $('#PBill1Imput, #PBill1ImputLabel').css('color','green');


   $('.NumPad').hide();
    $('.numPBill1').show();



  console.log(PBill1Imput + PBill2Imput + PBill3Imput + PBill4Imput + PBill5Imput);



});


// /////////


$('.numPBill1').click(function(){

  if (PBill1Imput === 0 ){
    PBill1Imput = '';
  }
});


//////////





 $('.numPBill1').click(function(){

          PBill1Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill1ImputLabel > input').attr('value', PBill1Imput);

           console.log("current PBill 1 imput  number is :" + PBill1Imput);
           console.log('New PBill 1 imput  is : ' + PBill1Imput);
           
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpacePBill1').click(function(){

           var getInput = PBill1Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill1Imput = newInput;
            $('#PBill1ImputLabel > input').attr('value', PBill1Imput);
     
           console.log('New input is : ' + PBill1Imput);

           console.log('back space was clicked' );
            
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);




       });









//////////////////



$('#PBill2').click(function(){

  console.log('PBill2  was selected');

 
 PBill2Imput =  $(this).attr('value');
 $('#PBill2ImputLabel > input').attr('value', PBill2Imput);


   $('#PBill2Imput, #PBill2ImputLabel').css('color','green');


  $('.NumPad').hide();
  $('.numPBill2').show();



  console.log(PBill2Imput + PBill2Imput + PBill3Imput + PBill4Imput + PBill5Imput);


userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);




});




// /////////


$('.numPBill2').click(function(){

  if (PBill2Imput === 0 ){
    PBill2Imput = '';
  }
});


//////////





 $('.numPBill2').click(function(){



          PBill2Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill2ImputLabel > input').attr('value', PBill2Imput);

           console.log("current PBill 1 imput  number is :" + PBill2Imput);
           console.log('New PBill 1 imput  is : ' + PBill2Imput);
 
           

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);


        
           });




       //backspace button
           $('#backSpacePBill2').click(function(){

           var getInput = PBill2Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill2Imput = newInput;
            $('#PBill2ImputLabel > input').attr('value', PBill2Imput);
     
           console.log('New input is : ' + PBill2Imput)
            
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);




       });








// ///////////////




$('#PBill3').click(function(){

 PBill3Imput =  $(this).attr('value');
 $('#PBill3ImputLabel > input').attr('value', PBill3Imput);



  


   $('#PBill3Imput, #PBill3ImputLabel').css('color','green');


 $('.NumPad').hide();
  $('.numPBill3').show();


  console.log(PBill3Imput + PBill3Imput + PBill3Imput + PBill4Imput + PBill5Imput);



userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



});



// /////////


$('.numPBill3').click(function(){

  if (PBill3Imput === 0 ){
    PBill3Imput = '';
  }
});


//////////




 $('.numPBill3').click(function(){

          PBill3Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill3ImputLabel > input').attr('value', PBill3Imput);

           console.log("current PBill 1 imput  number is :" + PBill3Imput);
           console.log('New PBill 1 imput  is : ' + PBill3Imput);
           

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);


        
           });




       //backspace button
           $('#backSpacePBill3').click(function(){

           var getInput = PBill3Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill3Imput = newInput;
            $('#PBill3ImputLabel > input').attr('value', PBill3Imput);
     
           console.log('New input is : ' + PBill3Imput)
            

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



       });








// //////////////////




$('#PBill4').click(function(){

 PBill4Imput =  $(this).attr('value');
 $('#PBill4ImputLabel > input').attr('value', PBill4Imput);





   $('#PBill4Imput, #PBill4ImputLabel').css('color','green');


  $('.NumPad').hide();

  $('.numPBill4').show();



  console.log(PBill4Imput + PBill4Imput + PBill4Imput + PBill4Imput + PBill5Imput);


userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);

});



// /////////


$('.numPBill4').click(function(){

  if (PBill4Imput === 0 ){
    PBill4Imput = '';
  }
});


//////////





 $('.numPBill4').click(function(){

          PBill4Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill4ImputLabel > input').attr('value', PBill4Imput);

           console.log("current PBill 1 imput  number is :" + PBill4Imput + PBill5Imput);
           console.log('New PBill 1 imput  is : ' + PBill4Imput);
           
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



        
           });




       //backspace button
           $('#backSpacePBill4').click(function(){

           var getInput = PBill4Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill4Imput = newInput;
            $('#PBill4ImputLabel > input').attr('value', PBill4Imput);
     
           console.log('New input is : ' + PBill4Imput)
            

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



       });






$('#PBill5').click(function(){

 PBill5Imput =  $(this).attr('value');
 $('#PBill5ImputLabel > input').attr('value', PBill5Imput);





   $('#PBill5Imput, #PBill5ImputLabel').css('color','green');


  $('.NumPad').hide();
  $('.numPBill5').show();



  console.log(PBill4Imput + PBill4Imput + PBill4Imput + PBill4Imput + PBill5Imput);


userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);

});


// /////////


$('.numPBill5').click(function(){

  if (PBill5Imput === 0 ){
    PBill5Imput = '';
  }
});


//////////





 $('.numPBill5').click(function(){

          PBill5Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill5ImputLabel > input').attr('value', PBill5Imput);

           console.log("current PBill 1 imput  number is :" + PBill5Imput + PBill5Imput);
           console.log('New PBill 1 imput  is : ' + PBill5Imput);
           
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



        
           });




       //backspace button
           $('#backSpacePBill5').click(function(){

           var getInput = PBill5Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill5Imput = newInput;
            $('#PBill5ImputLabel > input').attr('value', PBill5Imput);
     
           console.log('New input is : ' + PBill5Imput)
            

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



       });




// ///////////////////////////




$('#PBill6').click(function(){
 PBill6Imput =  $(this).attr('value');
 $('#PBill6ImputLabel > input').attr('value', PBill6Imput);






   $('#PBill6Imput, #PBill6ImputLabel').css('color','green');


   $('.NumPad').hide();
   $('.numPBill6').show();



  console.log(PBill4Imput + PBill4Imput + PBill4Imput + PBill4Imput + PBill6Imput);


userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);

});




// /////////


$('.numPBill6').click(function(){

  if (PBill6Imput === 0 ){
    PBill6Imput = '';
  }
});


//////////




 $('.numPBill6').click(function(){

          PBill6Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#PBill6ImputLabel > input').attr('value', PBill6Imput);

           console.log("current PBill 1 imput  number is :" + PBill6Imput + PBill6Imput);
           console.log('New PBill 1 imput  is : ' + PBill6Imput);
           
userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



        
           });




       //backspace button
           $('#backSpacePBill6').click(function(){

           var getInput = PBill6Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          PBill6Imput = newInput;
            $('#PBill6ImputLabel > input').attr('value', PBill6Imput);
     
           console.log('New input is : ' + PBill6Imput)
            

userInput = parseInt(PBill6Imput) + parseInt(PBill2Imput) + parseInt(PBill3Imput) + parseInt(PBill4Imput) + parseInt(PBill5Imput);
$('#qtyvalue2').attr('value', userInput);



       });





// });////End of PBill Payment/////////////*********************************






///////////////////Merchant/////////////




////////////////Merchant ///////////////////////////
///////////////////////////////////////////////////////////





$('#Merchant').click(function(){

 console.log("Service value  is = " + serviceValue);

serviceValue='Merchant';
tofValue = 'waived';

$('.Merchant').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  MerchantName='';
  MerchantCardNUmber='';
  MerchantDateNUmber='';
  MerchantCVD='';
  MerchantZipCode='';







         $('.MerchantNameInput').attr('value', MerchantName);
         $('.MerchantCardInput').attr('value', MerchantCardNUmber);
         $('.MerchantDateInput').attr('value', MerchantDateNUmber);
         $('.MerchantCVDInput').attr('value', MerchantCVD);
         $('.MerchantZipCodeInput').attr('value', MerchantZipCode);


 
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);



    console.log("Service value  is = " + serviceValue);



  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);

});






















// /////////////////////////////////
MerchantLabel="";

$('.MerchantLabel').click(function(){
MerchantLabel = $(this).attr('value');
console.log("The selected MerchantLabel is = " + MerchantLabel);

})








/////////////////////



$('.NameMerLabel').click(function(){

});




//////////////////








/////////////////////



$('.CardMerLabel').click(function(){




console.log('Merchant Name Label  was selected');

 MerchantCardNUmber = "";
 $('.MerchantCardInput').attr('value', MerchantCardNUmber);


 $('.NumPad').hide();
 $('.numMCard').show();

});





 $('.numMCard').click(function(){

         MerchantCardNUmber+= $(this).attr("value");
          
          $('.MerchantCardInput').attr('value', MerchantCardNUmber);

           });



       //backspace button
           $('#backSpaceMCard').click(function(){

           var getInput = MerchantCardNUmber;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantCardNUmber = newInput;
            $('.MerchantCardInput').attr('value', MerchantCardNUmber);
     
           console.log('New input is : ' + MerchantCardNUmber);
            


       });




//////////////////




/////////////////////



$('.DateMerLabel').click(function(){




console.log('Merchant Name Label  was selected');

 MerchantDateNUmber = "";
 $('.MerchantDateInput').attr('value', MerchantDateNUmber);


 $('.NumPad').hide();
 $('.numMDate').show();

});




 $('.numMDate').click(function(){

         MerchantDateNUmber+= $(this).attr("value");
          
          $('.MerchantDateInput').attr('value', MerchantDateNUmber);

           });



       //backspace button
           $('#backSpaceMDate').click(function(){

           var getInput = MerchantDateNUmber;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantDateNUmber = newInput;
            $('.MerchantDateInput').attr('value', MerchantDateNUmber);
     
           console.log('New input is : ' + MerchantDateNUmber);
            


       });




//////////////////




/////////////////////



$('.CVDMerLabel').click(function(){




console.log('Merchant Name Label  was selected');

 MerchantCVD = "";
 $('.MerchantCVDInput').attr('value', MerchantCVD);


 $('.NumPad').hide();
 $('.numCVD').show();

});




 $('.numCVD').click(function(){

          MerchantCVD+= $(this).attr("value");
          
          $('.MerchantCVDInput').attr('value', MerchantCVD);

           });



       //backspace button
           $('#backSpaceCVD').click(function(){

           var getInput = MerchantCVD;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

           MerchantCVD = newInput;
           $('.MerchantCVDInput').attr('value', MerchantCVD);
     
           console.log('New input is : ' + MerchantCVD);
            


});




//////////////////





/////////////////////



$('.ZipMerLabel').click(function(){




console.log('Merchant Name Label  was selected');

 MerchantZipCode = "";
 $('.MerchantZipCodeInput').attr('value', MerchantZipCode);


 $('.NumPad').hide();
 $('.numMZip').show();
 
});




 $('.numMZip').click(function(){

         MerchantZipCode+= $(this).attr("value");
          
          $('.MerchantZipCodeInput').attr('value', MerchantZipCode);

           });



       //backspace button
           $('#backSpaceMZip').click(function(){

           var getInput = MerchantZipCode;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          MerchantZipCode = newInput;
            $('.MerchantZipCodeInput').attr('value', MerchantZipCode);
     
           console.log('New input is : ' + MerchantZipCode);
            


});






////////////////end of Merchant ///////////////////////////
///////////////////////////////////////////////////////////





//////////////////////////////

$('.MSwipeCover').click(function(){

$('.MerchantImput').removeClass('SelectedMerchantLabel');
$('.MCardImput').removeClass('SelectedMerchantLabel');

  $('.MSwipe').addClass('clickedSwipe');
   $('.SwipeCard').fadeIn('fast');
   $('#closeSer2Panelsxxxx').hide();
   $('.SwButton').show();
})


$('.SwButton').click(function(){
    $('.SwipeCard').fadeOut('fast');
    $('#closeSer2Panelsxxxx').show();
});






/////////////////////////////////
/////////////////////////////////End of Merchant





////////////////ChangePin ///////////////////////////
///////////////////////////////////////////////////////////





$('#PinChange').click(function(){

$('#closeSer2Panelsxxxx').fadeIn();

 console.log("Service value  is = " + serviceValue);

serviceValue='ChangePin';
tofValue = 'waived';

$('.ChangePin ').fadeIn('slow');


    $('#cheTsav').hide();
    $('#savTche').hide();


  EntPin='';
  ConPin='';





         $('.EnterPinInput').attr('value', EntPin);
         $('.ConfirmPinInput').attr('value', ConPin);


 
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);



    console.log("Service value  is = " + serviceValue);



  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);

});











// /////////////////////////////////
SelectedPinLabel="";

$('.ChangePinL').click(function(){
SelectedPinLabel = $(this).attr('value');
console.log("The selected ChangePinLabel is = " + SelectedPinLabel);

})





/////////////////////



$('.EnterPinLabel').click(function(){




console.log('ChangePin Name Label  was selected');

 EntPin = "";
 $('.EnterPinInput').attr('value', EntPin);


 $('.NumPad').hide();
 $('.numEntPin').show();


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////



});





 $('.numEntPin').click(function(){

         EntPin+= $(this).attr("value");
          
          $('.EnterPinInput').attr('value', EntPin);


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceEntPin').click(function(){

           var getInput = EntPin;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          EntPin = newInput;
            $('.EnterPinInput').attr('value', EntPin);
     
           console.log('New input is : ' + EntPin);


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });




//////////////////




/////////////////////



$('.ConfirmPinLabel').click(function(){




console.log('ChangePin Name Label  was selected');

 ConPin = "";
 $('.ConfirmPinInput').attr('value', ConPin);


 $('.NumPad').hide();
 $('.numConPin').show();


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////



});




 $('.numConPin').click(function(){

         ConPin+= $(this).attr("value");
          
          $('.ConfirmPinInput').attr('value', ConPin);


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////



           });



       //backspace button
           $('#backSpaceConPin').click(function(){

           var getInput = ConPin;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          ConPin = newInput;
            $('.ConfirmPinInput').attr('value', ConPin);
     
           console.log('New input is : ' + ConPin);


// ////Password Match Notification//////////

           if(EntPin !== '' && EntPin === ConPin){
            
            $('.MatchedPinNO').hide();
            $('.MatchedPinYes').fadeIn();

           }



           if(EntPin !== '' && EntPin !== ConPin){

            $('.MatchedPinYes').hide();
            $('.MatchedPinNO').fadeIn();

           }



 // ////Password Match Notification//////////


            


       });









//////////////////


////////////////end of ChangePin ///////////////////////////
///////////////////////////////////////////////////////////



















///////////////////////////////////////////





$('#cash2, #withdraw2, #wdraw1, #wdraw2, #checks2, .sendFromSavings, .sendFromCheckings, #transfer, #payTicket').click(function(){
  serviceValue = $(this).attr('value');
   $('#cheTsav2, #savTche2').fadeOut();
 
    console.log('serviceValue is: ' + serviceValue);



});








$('#checking2, #saving2').click(function(){
  tofValue=$(this).attr('value');
  console.log('the tof value is: ' + tofValue);
})


$('#qtyvalue23').hide();


//confirm and go back for the Submit button

// $('#submit2').click(function(){ 

//     $('.confBack2').show('fast');
//     $('#submit2, #exit2').hide();
//    });  




///////////////////////Wrong Amount///////////////



if (serviceValue === ('withdraw') && (userInput > 1500)){


$('.wrongAmount').fadeIn('fast').click(function(){
        $(this).fadeout('slow');
});

}





///////////////////////////////
//////////////////////Bill Deno//////////////////////////////////////////////////

$('#billDeno').click(function(){
  billDeno= true;

   if(billDeno === true){
  console.log(' Bill Deno is Activated ' + billDeno);
}
$('.confBack2Y').hide();
$('#submit2Y, #exit2Y').show();


})


$('#noBillDeno').click(function(){
  billDeno= false;
  if(billDeno === false){
  console.log(' Bill Deno is Activated ' + billDeno);
}


  $('.confBack2Y').hide();
 $('#bills, .bills, #b10, #b20, #b50, #b100').hide();
$('.LinearNumPad, #amount, #qtyvalue2, .numV').show();
$('#submit2Y, #exit2Y').fadeIn();

})




$('.ui2').click(function(){
  if(serviceValue !== 'withdraw'){

    billDeno === false;

    console.log('BillDeno was deactivated because Service value is not withdraw');

    $('#billDeno').removeClass('active');
    $('#noBillDeno').addClass('active');

  }
})


//////////////////////////////**********////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////PANELS///////////////////////////////////////////


/////////////Retrieve///////

       // $('.retrieve').click(function(){  

       //  $('.LinearNumPad, .numV').show();
       //  $('.numR, .numCC, .numDeno10, .numDeno20, .numDeno50, .numDeno100, .bills').hide();
       //  $('.BillDenominationWdraw, #closeSer2Panelsxxxx').fadeOut('fast');

       //   $('#qtyvalueDeno').hide();
       //   userInput ="";
       //   $('#qtyvalue2').attr('value', '0.00');
       //   $('#qtyvalue2').show();
       //   $('#qtyvalue2').attr('value', "");

       //   $('#DenoImput10').attr('value',0);
       //   $('#DenoImput20').attr('value',0);
       //   $('#DenoImput50').attr('value',0);
       //   $('#DenoImput100').attr('value', 0);


       //    DenoImput10 = 0;
       //    DenoImput20 = 0;
       //    DenoImput50 = 0;
       //    DenoImput100 = 0;


       // }); //////////////



/////////Quick Sent//////

$('.QuickSent').click(function(){ 

  $('.NumPad').hide();
  $('#qtyvalueDeno, #qtyvalueCard, #qtyvalueQPay, .sendMoney11, #closeSer2Panelsxxxx').hide();


  $('#qtyvalue2').show();         
  $('.numV').show();

  userInput ="";



});  //////End of QuickPay






/////////Quick Sent//////

$('.CardPayment').click(function(){ 

  $('.NumPad').hide();
  $('#qtyvalueDeno, #qtyvalueCard, #qtyvalueQPay, .CreditCards, #closeSer2Panelsxxxx').hide();


  $('#qtyvalue2').show();         
  $('.numV').show();





});  //////End of QuickPay







////////////////////////////////////////////////////////////////////////////////
///////////////////////////////End of PANELS////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
//////////////////////////////SUBMIT BUTTON/////////////////////////////////////



$('#submit2Y').click(function(){

if (serviceValue !== '' && tofValue !== '' && userInput !== ''){
            $('#submit2Y, #exit2Y').hide();
            $('.confBack2Y').show();

}










if(serviceValue !== '' && userInput !== ''){

  if(billDeno === false){

  $('#submit2Y, #exit2Y').hide();
  $('.confBack2Y').show();
  $('.confirm2Y').click(function(){
    userInput= '';
 $('#qtyvalue2').attr('value', userInput);


  $('.confBack2Y').hide();
  $('#submit2Y, #exit2Y').show();

   

  });


//////// /////Back2Y Button /////////////////



  $('.back2Y').click(function(){

    console.log('servicevalue =' + serviceValue);

    if(serviceValue === 'BillDe'){

  
  // $('#qtyvalue2').hide();
  // $('#qtyvalueDeno').show();
  $('.confBack2Y').hide();
  $('#submit2Y, #exit2Y').show(); 


  }else if(serviceValue !== 'BillDe'){


console.log('servicevalue =' + serviceValue);

  $('.confBack2Y').hide(); 
  $('#bills, #b10, #b20, #b50, #b100').hide();
  $('.LinearNumPad, .numV, #amount, #qtyvalue2').show();
  

  $('#submit2Y, #exit2Y').show();

  }


});



////////////////////////////////////////////



$('#exit2Y').click(function(){
  $('.goodbye').fadeIn();

});

}




if(billDeno === true){

    $('.confBack2Y').show('fast');
    $('#submit2Y, #exit2Y').hide();

    $('.confirm2Y').click(function(){
    $('.confBack2Y').hide();
    $('#submit2Y, #exit2Y').show();

   userInput= '';
 $('#qtyvalue2').attr('value', userInput);



  });

  $('.back2Y').click(function(){
  $('.confBack2Y').hide(); 
  $('#bills, #b10, #b20, #b50, #b100').hide();
  $('.LinearNumPad, .numV, #amount, #qtyvalue2').show();
  

  $('#submit2Y, #exit2Y').show();

});


$('#depos, #depos2').click(function(){
  serviceValue = "dcash";
  tofValue = "waived";
  console.log('current service value is ' + serviceValue)
  $('.deposit').fadeIn().click(function(){
    $(this).fadeOut();

  });

});




/////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////


if(serviceValue ==='withdraw' && tofValue !== '' && userInput % 10 === 0){
    $('.confBack2Y').show('fast');
    $('#submit2Y, #exit2Y').hide();

    $('.LinearNumPad, #amount, #qtyvalue2, .numV').hide();  
    $('.bills, #bills, #qtyvalue23').show('fast');
    $('#qtyvalue23').attr("value", userInput);


    $('#cash2, #checks2, #sendFromCheckings, #transfer, #trans, #trans2, #payTicket').click(function(){
    $('.LinearNumPad, #amount, #qtyvalue2, .numV').show();  
    $('.bills, #bills, #qtyvalue23, #b10, #b20, #50, #b100').hide();
    
    
  console.log('serviceValue is: ' + serviceValue);



});


}


/////////////



if(serviceValue ==='withdraw' && tofValue !== '' && userInput % 10 === 0){
      $('.bills').fadeIn();
      console.log("Multiples are working perfectly");


    }

    if (userInput % 10 === 0 && userInput <= 200 && userInput !== 10){$('#b10').fadeIn('fast')}
    if (userInput % 10 === 0 && userInput > 200){$('#b10').hide()}
    if (userInput > 20 && userInput % 10 === 0 && userInput <= 1500){$('#b20').fadeIn('fast')}
    if (userInput > 50 && userInput % 10 === 0 && userInput <= 1500){$('#b20, #b50').fadeIn('fast')}
    if (userInput > 100 && userInput % 10 === 0 && userInput <= 1500){$('#b20, #b50, #b100').fadeIn('fast')}

    
    if (userInput % 20 === 0 && userInput <= 1500){$('#b20').fadeIn('fast')}
    if (userInput > 50 && userInput % 20 === 0 && userInput <= 1500){$('#b50').fadeIn('fast')}
    if (userInput > 100 && userInput % 20 === 0 && userInput <= 1500){$('#b50, #b100').fadeIn('fast')}


    if (userInput % 50 === 0){$('#b50').fadeIn('fast')}
    if (userInput > 100 && userInput % 50 === 0 && userInput <= 1500 ){$('#b100').fadeIn('fast')}
    if (userInput % 100 === 0){$('#b20, #b50, #b100').fadeIn('fast')}




 // $('.confirm2').click(function(){
 //     $('.confBack2Y').hide();
 //     $('#bills, .bills, #b10, #b20, #b50, #b100').hide();
 //     $('#amount, #qtyvalue2, .numV').show();
     
 //    $('.sendMoney2').hide();
 //    $('#submit2Y, #exit2Y').show();

   
 //  });


 //  $('.back2').click(function(){

 //    $('.bills, #bills, #b10, #b20, #b50, #b100').hide();
 //    $('#amount, #qtyvalue2, .numV').show();  
 //    $('.confBack2Y').hide();
 //    $('.sendMoney2').hide();
 //    $('#submit2Y, #exit2Y').show(); 


 //  });




}///bill deno end

}


 });


////////////////////////







$('.bills, #b10, #b20, #b50, #b100').hide();




////////////////////Pay panel show/hide/////////////////////////////////

$('#submit2Y').click(function(){

  if(serviceValue === 'PayBills'){
    $('.pyx1').fadeIn();
    $('.numV, .NumPad').hide();

  }

});



$('#submit2Y').click(function(){

  if(serviceValue === 'QuickPay'){
    $('.pyx1').fadeIn();
    $('.numV, .NumPad').hide();

  }

});


$('#submit2Y').click(function(){

  if(serviceValue === 'CreditCards'){
    $('.pyx1').fadeIn();
    $('.numV, .NumPad').hide();

  }

});




$('.back2Y').click(function(){

  if(serviceValue === 'PayBills' || 'QuickPay' || 'CreditCards'){
       $('.pyx1').fadeOut();
       $('.pyx1 > label').removeClass('active');
       $('.numV').show();
       serviceValue === 'PayBills';

}


});

/////////////////////////////////////////////////////



               // contionals to display cooresponding message panel

   $('.confirm2Y').click(function(){ 


 $('.ServicePanel, #closeSer2Panelsxxxx, .Schedule').hide();
    $("#inCheckSent, #inSavSent, #inCheck, #inSav, #loanAmount, #cardPaymentAmount, #quickPayAmount").attr("value", userInput);

    $("#happyCard").attr("value", SelectedCard);
    $('.NumPad').hide();
    $('.numV').show();

      $('.savTche2, .cheTsav2').fadeOut();


  userInput = "0.00";
  $('#qtyvalue2').attr('value', userInput);

     $('.pyx1').hide();
     $('.PayButtonsx1 > label').removeClass('active');


/////Wrong amount

     if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 !== 0)){
      $('.wrongAmount').fadeIn('fast').click(function(){
        $(this).hide();
      });
        console.log("Multiples are working perfectly");
    }


    if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 !== 0) && (userInput % 20 !== 0) && (userInput % 100 !== 0) && (userInput % 50 !== 0)){
      $('.wrongAmount').fadeIn('fast').click(function(){
        $(this).hide();
      });

    } ///end of wrong amount




//////////// The Main Services


   if(tofValue !== '' && serviceValue !== '' && userInput !== ''){

 
   if(serviceValue === $('#cash2').attr("value") ){
      $('.depositCash').fadeIn('fast');
      $('.closeDeposit').show();


    


    // }else if(serviceValue === $('#withdraw2').attr("value") && (userInput % 10 === 0)){
    //    $('.retrieve').fadeIn('fast').click(function(){
    //       $('#bills, #b10, #b20, #b50, #b100').hide();
    //       $('.numV, #amount, #qtyvalue2').show();

    //    })



    }else if((serviceValue === "withdraw") && (userInput % 10 === 0)){
       $('.retrieve').fadeIn('fast').click(function(){
          $('#bills, #b10, #b20, #b50, #b100').hide();
          $('.numV, #amount, #qtyvalue2').show();

       })




           }else if((serviceValue === "BillDe") && (tofValue=="waived") && (userInput % 10 === 0)){
       $('.retrieve').fadeIn('fast');
  

     

      ////////////////////Loan

        }else if(serviceValue === $('#Loan').attr('value') && tofValue=="waived" && userInput <= 50000){

      $('.LoanGranted').fadeIn('slow');   
      $('.Loan').fadeOut(3000);
      

      console.log('Loaaaannnnnnnnnnnnnnnnnnnn');




      ///////////////////


// /////// BillDeno//////////////

}else if((serviceValue === 'BillDe') && (tofValue === 'waived') && (userInput !== '')){

console.log("Service value is = " + serviceValue);
           
               $('.retrieve').fadeIn().click(function(){

               });
               
               $('.confBack2Y').hide();

                 $('#submit2Y, #exit2Y').show();
                 $('.numV').show();
                 $('.numR, .numCC, .numDeno10, .numDeno20, .numDeno50, .numDeno100').hide();

                userInput= "";
                $("#qtyvalue2").attr('value', userInput);

                 $('.BillDenominationWdraw, #closeSer2Panelsxxxx').hide();



////////////////////////Credit cards

        }else if(serviceValue === $('#CreditC').attr('value') && tofValue=="waived" && userInput !== ""){


  
  console.log("Service value is = " + serviceValue);
  console.log("tofvalue is = " + tofValue);



      $('.CardPayment').fadeIn('slow');    
      $('.CreditCards, #closeSer2Panelsxxxx').fadeOut(1000);


      $('.numCard1, .numCard4, .numCard2, .numCard3').hide();
      $('.numV').show();




      $('.CardPayment').click(function(){
      $(this).fadeOut(1000);
    

      });



  //////////////////
  //////////////////Quick Pay////////////////////////
 }else if(serviceValue === $('#QuickPay, #QuickPay2').attr('value') && tofValue=="waived" && userInput !== ""){
      

$('#happyFriend').attr('value', Friend);
$('.sendMoney11, #closeSer2Panelsxxxx').fadeOut('slow');



$('.QuickSent').fadeIn('slow').click(function(){
  $(this).fadeOut("slow");
  
  

});

 ///////////////////Merchant/////////////////////////

 }else if(serviceValue === 'Merchant' && tofValue=="waived" && userInput !== ""){
      

$('.Merchant, #closeSer').hide();
$('.MerchCardCharged').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////



    ///////////////////Bill Payment/////////////////////////

 }else if(serviceValue === 'PayBills' && tofValue=="waived" && userInput !== ""){
      

$('.Merchant, #closeSer').hide();
$('.BillPaySent').fadeIn('slow');
console.log('Card was Charged');




  ////////////////////////////////////////////



  //////////////////

  }else if(serviceValue === $('#checks2').attr("value")){
      $('.depositCheck').fadeIn('fast');

 


    }else if(serviceValue === $('#sendFromCheckings').attr("value") && tofValue=="send"){
      $('.checkCashSent').fadeIn('fast');
      console.log('service value is: ' + serviceValue);
      console.log('tof value is: ' + tofValue);

 

    }else if(serviceValue === "checkcashSent"){
      $('.checkCashSent').fadeIn('fast');
      console.log('service value is: ' + serviceValue);
      console.log('tof value is: ' + tofValue);

   
      


    }else if(serviceValue === $('#payTicket').attr("value") && tofValue=="send"){
      $('.checkCashSent').fadeIn('fast');
      console.log('service value is: ' + serviceValue);
      console.log('tof value is: ' + tofValue);





    }else if(serviceValue === $('#transfer').attr("value") && tofValue=="saving"){
      $('.tranToChecking').fadeIn('fast');




    }else if(serviceValue === $('#transfer').attr("value") && tofValue=="checking"){
      $('.tranToSavings').fadeIn('fast');



      ////////////////////

      }else if(serviceValue === $('#trans').attr("value") && tofValue=="waived"){
      $('.tranToSavings').fadeIn('fast');




       }else if(serviceValue === $('#trans2').attr("value") && tofValue=="waived"){
      $('.tranToChecking').fadeIn('fast');




      ///////////////////



    }else{
      $('.selectt').fadeIn('fast');
      console.log("Please select a service and an account for your transaction");
      console.log('service value is: ' + serviceValue);
      console.log('tof value is: ' + tofValue);


    }
    
  }


        userInput= "0.00";
      $("#qtyvalue2").attr('value', userInput);

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

   $('#cash2, #withdraw2, #checks2').click(function(){
      $('#checking2, #saving2').removeClass('active');

      });



   $('#checking2, #saving2').click(function(){

     if (serviceValue === $('#cash2').attr("value")){
      $('.depositCash').fadeIn('fast');
      $('.closeDeposit').show();
  


     }else if

     (serviceValue === $('#checks2').attr("value")){
      $('.depositCheck').fadeIn('fast');

     }

   });


     



/////////

 $('.OperationEndedPanel, .DepositButtons').click(function(){

  serviceValue = '';
  tofValue = '';
  $('#cash2, #withdraw2, #QuickPay2, #transfer, #checking2, #saving2').removeClass('active');
   $('#savTche, #cheTsav').hide();
   $('.LinearNumPad, .numV, #amount, #qtyvalue2').show();
  userInput = "0.00";
  $('#qtyvalue2').attr('value', userInput);
  $(this).fadeOut('fast');


     $('.pyx1').fadeOut();
     $('.PayButtonsx1 > label').removeClass('active');


});




//Tap to Close
  $('.quickSent, .wrongAmount,.CardPayment, .LoanGranted').click(function(){
  $(this).fadeOut('fast');


})



$('.closeDeposit').click(function(){
  $('.depositCash').fadeOut('slow');
   $('.closeDeposit').show();

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////













// ///////////Pay Credit cards///////////








  $('#CreditC').click(function(){
    serviceValue="CreditCards";

    $('#cheTsav').hide();
    $('#savTche').hide();
    // $('#qtyvalue2, #qtyvalueDeno').hide();
    // $('#qtyvalueCard').show();
    $('.CreditCards').fadeIn('fast');

    
// userInput = '';
userInput = '0.00';


    console.log("Service value  is = " + serviceValue);
    console.log("qtyvalue = Deno" );

   });


 









// /////////////////////////////////
  var CardNumber=""


  $('.Card').click(function(){
    CardNumber = $(this).attr('value');
    console.log('Current Card  is : ' + CardNumber);




// userInput = DenoImput10 + DenoImput20 + DenoImput50 + DenoImput100;
console.log('Card total is ' + userInput);




});



  Card1Imput=0;
  Card2Imput=0;
  Card3Imput=0;
  Card4Imput=0;







/////////////////////



$('#card1').click(function(){

console.log('Card 1  was selected');

 Card1Imput = 0;
 $('#Card1ImputLabel > input').attr('value', Card1Imput);


  
  


   $('#Card1Imput, #Card1ImputLabel').css('color','green');


   $('.numV, .numR, .numCC, .numCard4, .numCard2, .numCard3').hide();
     $('numV, numR, .numCC, numCard4, numCard2, numCard3').hide();
   $('.numCard1').show();





  console.log(Card1Imput + Card2Imput + Card3Imput + Card4Imput);

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
$('#qtyvalue2').attr('value', userInput);


});


// /////////


$('.numCard1').click(function(){

  if (Card1Imput === 0 ){
    Card1Imput = '';
  }
});


//////////




 $('.numCard1').click(function(){

          Card1Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#Card1ImputLabel > input').attr('value', Card1Imput);

           console.log("current Card 1 imput  number is :" + Card1Imput);
           console.log('New Card 1 imput  is : ' + Card1Imput);
           

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);
        
           });




       //backspace button
           $('#backSpaceCard1').click(function(){

           var getInput = Card1Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card1Imput = newInput;
            $('#Card1ImputLabel > input').attr('value', Card1Imput);
     
           console.log('New input is : ' + Card1Imput)
            
userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);



       });









//////////////////



$('#card2').click(function(){

  console.log('Card2  was selected');

 Card2Imput = 0;
 $('#Card2ImputLabel > input').attr('value', Card2Imput);


 
  


   $('#Card2Imput, #Card2ImputLabel').css('color','green');


   $('.numV, .numR, .numCC, .numCard4, .numCard1, .numCard3').hide();
   $('.numCard2').show();



  console.log(Card2Imput + Card2Imput + Card3Imput + Card4Imput);

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
$('#qtyvalue2').attr('value', userInput);

});



// /////////


$('.numCard2').click(function(){

  if (Card2Imput === 0 ){
    Card2Imput = '';
  }
});


//////////



 $('.numCard2').click(function(){

          Card2Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#Card2ImputLabel > input').attr('value', Card2Imput);

           console.log("current Card 1 imput  number is :" + Card2Imput);
           console.log('New Card 1 imput  is : ' + Card2Imput);
           

 userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceCard2').click(function(){

           var getInput = Card2Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card2Imput = newInput;
            $('#Card2ImputLabel > input').attr('value', Card2Imput);
     
           console.log('New input is : ' + Card2Imput)
            
userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);



       });








// ///////////////




$('#card3').click(function(){
 Card3Imput = 0;
 $('#Card3ImputLabel > input').attr('value', Card3Imput);




  


   $('#Card3Imput, #Card3ImputLabel').css('color','green');


   $('.numV, .numR, .numCC, .numCard4, .numCard1, .numCard2').hide();
   $('.numCard3').show();



  console.log(Card3Imput + Card3Imput + Card3Imput + Card4Imput);

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
$('#qtyvalue2').attr('value', userInput);

});



// /////////


$('.numCard3').click(function(){

  if (Card3Imput === 0 ){
    Card3Imput = '';
  }
});


//////////






 $('.numCard3').click(function(){

          Card3Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#Card3ImputLabel > input').attr('value', Card3Imput);

           console.log("current Card 1 imput  number is :" + Card3Imput);
           console.log('New Card 1 imput  is : ' + Card3Imput);
           

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceCard3').click(function(){

           var getInput = Card3Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card3Imput = newInput;
            $('#Card3ImputLabel > input').attr('value', Card3Imput);
     
           console.log('New input is : ' + Card3Imput)
            

 userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);


       });








// //////////////////




$('#card4').click(function(){
Card4Imput = 0;
 $('#Card4ImputLabel > input').attr('value', Card4Imput);
 





   $('#Card4Imput, #Card4ImputLabel').css('color','green');


   $('.numV, .numR, .numCC, .numCard2, .numCard1, .numCard3').hide();
   $('.numCard4').show();



  console.log(Card4Imput + Card4Imput + Card4Imput + Card4Imput);

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
$('#qtyvalue2').attr('value', userInput);

});



// /////////


$('.numCard4').click(function(){

  if (Card4Imput === 0 ){
    Card4Imput = '';
  }
});


//////////






 $('.numCard4').click(function(){

          Card4Imput += $(this).attr("value");
          // $('#DenoImput10').attr('value', DenoImput10);


          $('#Card4ImputLabel > input').attr('value', Card4Imput);

           console.log("current Card 1 imput  number is :" + Card4Imput);
           console.log('New Card 1 imput  is : ' + Card4Imput);
           

userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);

        
           });




       //backspace button
           $('#backSpaceCard4').click(function(){

           var getInput = Card4Imput;
           var len = getInput.length -1;
           var newInput = getInput.substring(0, len);

          Card4Imput = newInput;
            $('#Card4ImputLabel > input').attr('value', Card4Imput);
     
           console.log('New input is : ' + Card4Imput)
            
 userInput = parseInt(Card1Imput) + parseInt(Card2Imput) + parseInt(Card3Imput) + parseInt(Card4Imput);
 $('#qtyvalue2').attr('value', userInput);



       });









// });////End of Card Payment/////////////*********************************































$('#closeSend1').click(function(){
  console.log("#closeSend was clicked");

  $('.sendMoney2').hide();
  $('.numCC').hide();
  $('.numR').hide();
  $('.numV').show();

});




//////////////////////////////////////////////////


$('#closeSend2').click(function(){
  $('.sendMoney3').hide();
})




// $('#depos, #depos2, #wdraw1, #wdraw2, #sendx, #sendx2').click(function(){
//   $('#cheTsav2, #savTche2').fadeOut();
  
// });




$('#trans').click(function(){
  serviceValue = "transfer1";
  tofValue = "waived";
  console.log('servicevalue is : '+ serviceValue);
  $('#savTche2').hide();
  $('#cheTsav2').fadeIn();



});


$('#trans2').click(function(){
  serviceValue = "transfer2";
  tofValue = "waived";
  console.log('servicevalue is : '+ serviceValue);
  $('#cheTsav2').hide();
  $('#savTche2').fadeIn();

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

  serviceValue = "dcash";
  console.log('current service value is ' + serviceValue)
  $('.deposit').fadeIn().click(function(){
    $(this).fadeOut();
  });
   $('#cheTsav2, #savTche2').fadeOut();

});






// });


$('#trans, #trans2, #wdraw1, #wdraw2').click(function(){
   $('#trans, #trans2, #wdraw1, #wdraw2').removeClass('hili');
  $(this).addClass('hili');
 
});


$('#depos, #depos2, #sendx, #sendx2').click(function(){
   $('#trans, #trans2, #wdraw1, #wdraw2').removeClass('hili');

});




$('#depos, #depos2, #trans, #sendx, #sendFromCheckings, #sendx2, #trans2, #cash2, #withdraw2, #checks2, #checking2, #saving2, #transfer, #payticket, #Live').click(function(){
  $('#bills, #b10, #b20, #b50, #b100').hide();
  $('.numV, #amount, #qtyvalue2').show();
  $('.confBack2Y').hide();
  $('#submit2Y, #exit2Y').show();

  if(serviceValue !== "withdraw"){

  
  }



});




$('#exit2, #exit2Y').click(function(){
  console.log('exit2 button was clicked');
  /* $('.confBack24').fadeIn('fast');

   

    $('.confirm24').click(function(){*/
  $('.ServicePanel, .closeSer2Panelsxxxx').fadeOut('2500');


       $('.goodbye').fadeIn('fast');
       $('#receiptYes, #receiptNo').removeClass('active');


       $('.ServicePanel, #closeSer2Panelsxxxx, .Schedule').hide();
       serviceValue = '';
       userInput='0.00';
       $('#qtyvalue2').attr('value', userInput);




       
       $('#receiptYes, #receiptNo').click(function(){

        $('#cash2, #transfer, #withdraw2, #checks2, #checking2, #saving2, #billDeno ,#noBillDeno').removeClass('active');
    $('.sendMoney11, .sendMoney2, .CreditCards, .assistance, .Loan').hide();
       
    $('.confBack2Y').hide();
  $('#bills, #b10, #b20, #b50, #b100').hide();
  $('.numV, #amount, #qtyvalue2').show();
  $('#submit2Y, #exit2Y').show();
  $('#wdraw1, #wdraw2, #trans, #trans2').removeClass('hili');
 

       $('.goodbye').hide();
          serviceValue='';
          tofValue='waived';
       
        $('#cheTsav, #cheTsav2').hide();
        $('#savTche, #savTche2').hide();
        $('#toSaving,').hide();



        $('#toSaving,').hide();

        $('#toChecking').hide();
        $('.ui2').hide().fadeIn('10000');

        
       $('.ServicePanel, #closeSer2Panelsxxxx, .Schedule').hide();
       serviceValue = '';
       userInput='0.00';
       $('#qtyvalue2').attr('value', userInput);



      });


    
  /* });*/

    $('.back24, .confirm24').click(function(){
      $('.confBack24').hide();





});   

}); 






$('.TapB').click(function(){

  $('.goodbye').fadeOut('fast');
});







//Languagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


$('#english2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
	$('#cash2').html ('<input  type="radio" name="itm">Deposit');
	$('#withdraw2').html('<input  type="radio" name="itm">Withdraw');
	$('#transfer').html('<input  type="radio" name="itm">Transfer');

	

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
	
	
 
  $('#amount').text('$');
  $('#qtyvalue2').attr('value', userInput);


    $('#submit2').html('SUBMIT');

    $('#exit2').html('EXIT');


    $('#submit2Y').html('SUBMIT');

    $('#exit2Y').html('EXIT');

  $('.confirm2').html('<h2><b>Confirm</b></h2>');
  $('.back2').html('<h2><b>Back</b></h2>');

$('.confirm2Y').html('<h2><b>Confirm</b></h2>');
  $('.back2Y').html('<h2><b>Back</b></h2>');




  $('#casde').html('<b> Please Insert your</b>');

  $('#CashDeposit').html(' Cash');
  $('#CheckDeposit').html('Checks');



  $('#casde2').html('<b> Please Insert your Deposit</b>');


  $('#bills').html('<p id="bills"> I need  $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> in bills of:</p>');
  $('#qtyvalue2').attr('value', userInput);

  $('#retr').html('<h2 id="retr"><b> Please Retrieve your Cash Withdrawal</b></h2>');

  $('#chede').html('<b> Please Insert your Check Deposit now</b>');


  $('#cancel').text('(Tap to Cancel)');
  $('#cancel2').text('(Tap to Cancel)');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> were sent from Checking Account</b></h2>');
  $('#sfcaCancel').text('( Tap to Close)');

  $('#sfsa').html('<b>$<input id="inCheckSent"> <br> were sent from Savings Account</b></h2>');
  $('#sfsaCancel').text('( Tap to Close)');



    $('#gby').html('<b>Good Bye</b>');
    $('#nrep').text('Need a Receipt');
    $('#receiptYes').text('YES');
    $('#receiptNo').text('NO');
    $('#exBack').html('<b>Go Back</b>'); 


     $('#stc').html('<b>$<input id="inCheck">  <br>Were Transfered from Saving to Checking</b></h2>');
     $('stcX').text('( Tap to Close)');

   $('#cts').html('<b> $<input id="inSav"> <br>Were Transfered from Checking to Savings</b></h2>');
   $('#ctsX').text('Tap to Close');


     $('#oops').html('<h1><b>Oops</b></h1>');



  $('#machine').html('<b> This Machine can only dispatch bills Of: </b></h2><br>'); 

  $('#limit').html('<b>$10: limited to $200 <br> $20: limited to $1500 <br>$50: limited to $1500 <br>$100: limited to $1500</b></p><br><p> </p>');

});




$('#spanish2').click(function(){

  userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);

$('#cash2').html ('<input  type="radio" name="itm">Depositar');

  $('#withdraw2').html('<input  type="radio" name="itm">Retirar');
  $('#transfer').html('<input  type="radio" name="itm">Transferir');

  

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
  



 
  $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);

  
  

  $('#submit2').html('SOMETER');

  $('#exit2').html('SALIR');


  $('#submit2Y').html('SOMETER');

  $('#exit2Y').html('SALIR');

  $('.confirm2').html('<h2><b>Confirmar</b></h2>');
  $('.back2').html('<h2><b>Atras</b></h2>');

  $('.confirm2Y').html('<h2><b>Confirmar</b></h2>');
  $('.back2Y').html('<h2><b>Atras</b></h2>');


  $('#casde').html('<b> Favor Inserte Su</b>');


  $('#casde2').html('<b> Favor Inserte su Deposito Ahora</b>');

  $('#CashDeposit').html(' Efectivo');
  $('#CheckDeposit').html(' Cheques');



 
  $('#bills').html('<p id="bills"> Necesito $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> en billetes de:</p>');
  $('#qtyvalue2').attr('value', userInput);


 $('#retr').html('<h2 id="retr"><b> Favor tome su Dinero Retirado</b></h2>');

 $('#chede').html('<b> Favor Inserte su Deposito en Cheques Ahora</b>');

 $('#cancel').text('(Toque para Cerrar)');
 $('#cancel2').text('(Toque para Cancelar)');


$('#sfca').html('<b>$<input id="inCheckSent"><br>Fueron enviados de su Cuenta de Cheques</b></h2>');
$('#sfcaCancel').text('( Toca para cerrar )');

  $('#sfsa').html('<b>$<input id="inCheckSent"><br>Fueron Enviados de su Cuenta de Ahorros</b></h2>');
  $('#sfsaCancel').text('( Toca para cerrar)');



    $('#gby').html('<b>Hasta Luego</b>');
    $('#nrep').text('Necesita Recibo?');
    $('#receiptYes').text('SI');
    $('#receiptNo').text('NO');
    $('#exBack').html('<b>Volver Atras</b>'); 


  $('#stc').html('<b>$<input id="inCheck">  <br>Fueron Transferido de la cuenta Ahorros a la Cuenta Cheques</b></h2>');
  $('stcX').text('( Toca para cerrar)');

   $('#cts').html('<b> $<input id="inSav"> <br>Fueron Transferido de la Cuenta Cheques a la Cuenta Ahorros</b></h2>');
   $('#ctsX').text('Toca para cerrar');

  $('#oops').html('<h1><b>Ohoh</b></h1>'); 



  $('#machine').html('<b> Este Cajero solo despacha billetes de: </b></h2><br>'); 

  $('#limit').html('<b>$10: limitado hasta $200 <br> $20: limitado hasta  $1500 <br>$50: limitado hasta  $1500 <br>$100: limitado hasta  $1500</b></p><br><p> </p>');





  });






$('#chinesse2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
$('#cash2').html ('<input  type="radio" name="itm"> 存入現金');

  $('#withdraw2').html('<input  type="radio" name="itm">  刪除 ');
  $('#transfer').html('<input  type="radio" name="itm"> 刪除');

  

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




  
 
  $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);
  

  $('#submit2').html('提交');

  $('#exit2').html('取消');

  $('#submit2Y').html('提交');

  $('#exit2Y').html('取消');


  $('.confirm2').html('<h2><b>確認</b></h2>');
  $('.back2').html('<h2><b>返回</b></h2>');

  $('.confirm2Y').html('<h2><b>確認</b></h2>');
  $('.back2Y').html('<h2><b>返回</b></h2>');



  $('#casde').html('<b> 請插入您的現金存款</b>');

    $('#CashDeposit').html('Cash');
    $('#CheckDeposit').html('Checks');




  $('#casde2').html('<b> 請插入您的現金存款</b>');


  
  $('#bills').html('<p id="bills"> 我需 $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> 要賬單：</p>');
  $('#qtyvalue2').attr('value', userInput);

  $('#retr').html('<h2 id="retr"><b> 請檢索您的現金提取</b></h2>');

  $('#chede').html('<b> 租賃現在插入您的支票存款</b>');

  $('#cancel').text('（點擊取消）');
  $('#cancel2').text('（點擊取消）');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> 從支票帳戶發送</b></h2>');
  $('#sfcaCancel').text('（點擊關閉）');

  $('#sfsa').html('<b>$<input id="inCheckSent"> <br>是從儲蓄帳戶發出的</b></h2>');
  $('#sfsaCancel').text('（點擊關閉）');



    $('#gby').html('<b>再見</b>');
    $('#nrep').text('需要收據？');
    $('#receiptYes').text('是的');
    $('#receiptNo').text('沒有');
    $('#exBack').html('<b>回去</b>'); 


     $('#stc').html('<b>$<input id="inCheck">  <br>八）從儲蓄轉為支票</b></h2>');
     $('stcX').text('（點擊關閉）');

   $('#cts').html('<b> $<input id="inSav"> <br>從檢查轉為儲蓄</b></h2>');
   $('#ctsX').text('（點擊關閉）');


     $('#oops').html('<h1><b>哎呀</b></h1>');



  $('#machine').html('<b> 本機只能發送賬單：</b></h2><br>'); 

  $('#limit').html('<b>$10美元：限於 $200美元<br> $20美元：限於1500美元<br> $50美元：限於$1500美元<br>$100美元：限於$1500美元</b></p><br><p> </p>');

  });







$('#russian2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);

$('#cash2').html ('<input  type="radio" name="itm"> денежных');

  $('#withdraw2').html('<input  type="radio" name="itm"> Удалить');
  $('#transfer').html('<input  type="radio" name="itm"> средств');


 $('#checking2').html('<input  type="radio" name="itm"> Проверки <br><span> Баланс: -$2,200.00</span>')
  $('#saving2').html('<input  type="radio" name="itm"> Экономия <br><span> Баланс: $1,500.00</span>');


   ///////////////

  $('#checking22').html('Проверки <br><span>Баланс: $2,200.00</span>');
  $('#saving22').html('Экономия<br><span>Баланс: $1,200.00</span>');


  $('#depos, #depos2').text('денежных');
  $('#wdraw1, #wdraw2').text('Удалить');
  $('#trans, #trans2').text('средств');
  $('#sendx, #sendx2').text('денежных');



  //////////////
  
  
  $('#amount').text('$');
  $('#qtyvalue2').attr('value', userInput);



  $('#submit2').html('Отправить');

  $('#exit2').html('Отмена');

  $('#submit2Y').html('Отправить');

  $('#exit2Y').html('Отмена');



  $('.confirm2').html('<h2><b> Подтвердить</b></h2>');
  $('.back2').html('<h2><b> Назад</b></h2>');

  $('.confirm2Y').html('<h2><b> Подтвердить</b></h2>');
  $('.back2Y').html('<h2><b> Назад</b></h2>');


  $('#casde').html('<b> Пожалуйста, введите свой денежный депозит </b>');
    $('#CashDeposit').html('Cash');
    $('#CheckDeposit').html('Checks');





  $('#casde2').html('<b> Пожалуйста, введите свой денежный депозит </b>');


  
  $('#bills').html('<p id="bills"> Мне $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> нужны счета:</p>');
  $('#qtyvalue2').attr('value', userInput);


  $('#retr').html('<h2 id="retr"><b> Пожалуйста, верните снятие наличных денег </b></h2>');

  $('#chede').html('<b> аренда Вставьте свой депозит на депозит сейчас </b>');

  $('#cancel').text('(Нажмите, чтобы отменить)');
  $('#cancel2').text('(Нажмите, чтобы отменить)');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> были отправлены с учетной записи проверки </b></h2>');
  $('#sfcaCancel').text('(Нажмите, чтобы закрыть)');

  $('#sfsa').html('<b>$<input id="inCheckSent"> <br> были отправлены с Сберегательного счета </b></h2>');
  $('#sfsaCancel').text('(Нажмите, чтобы закрыть)');



    $('#gby').html('<b> До свидания</b>');
    $('#nrep').text('Нужна квитанция?');
    $('#receiptYes').text(' ДА');
    $('#receiptNo').text(' НЕТ');
    $('#exBack').html('<b>Вернуться</b>'); 



     $('#stc').html('<b>$<input id="inCheck">  <br> были перенесены с сохранения на проверку</b></h2>');
     $('stcX').text('(Нажмите, чтобы закрыть)');

   $('#cts').html('<b> $<input id="inSav"> <br> были перенесены с проверки на сбережения</b></h2>');
   $('#ctsX').text('(Нажмите, чтобы закрыть)');


     $('#oops').html('<h1><b>К сожалению</b></h1>');



  $('#machine').html('<b> Этот аппарат может отправлять только счета: </b></h2><br>'); 

  $('#limit').html('<b>$10: ограничено до :$200<br> $20: ограничено до :$1500 <br>  $50: ограничено до :$1500 <br>$100: ограничено до :$1500</b></p><br><p> </p>');




  });





$('#german2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
$('#cash2').html ('<input  type="radio" name="itm"> Barhinterlage');

  $('#withdraw2').html('<input  type="radio" name="itm"> Remove ');
  $('#transfer').html('<input  type="radio" name="itm"> Transfer');

  

  $('#checking2').html('<input  type="radio" name="itm">CHECKS<br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm">SPAR <br><span>Balance: $1,500.00</span>');




  

  $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);
  
  

  $('#submit2').html(' Senden ');

  $('#exit2').html(' Abbrechen ');

  $('#submit2Y').html(' Senden ');

  $('#exit2Y').html(' Abbrechen ');

  $('.confirm2').html('<h2><b> Bestätigen</b></h2>');
  $('.back2').html('<h2><b> Zurück</b></h2>');


  $('.confirm2Y').html('<h2><b> Bestätigen</b></h2>');
  $('.back2Y').html('<h2><b> Zurück</b></h2>');




  $('#casde').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');
  $('#casde2').html('<b> Bitte geben Sie Ihre Bareinzahlung ein</b>');


  $('#bills').html('<p id="bills"> Ich brauche $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> Rechnungen von:</p>');
  $('#qtyvalue2').attr('value', userInput);

$('#retr').html('<h2 id="retr"><b> Bitte holen Sie Ihren Bargeldabzug zurück </b></h2>');

  $('#chede').html('<b> Lease Geben Sie jetzt Ihre Scheckeinzahlung ein</b>');

  $('#cancel').text('(Tippen Sie auf Abbrechen)');
  $('#cancel2').text('(Tippen Sie auf Abbrechen)');

 


 $('#sfca').html('<b>$<input id="inCheckSent"> <br> wurden von Checking Account gesendet</b></h2>');
  $('#sfcaCancel').text('(Tippen Sie auf Schließen)');

  $('#sfsa').html('<b>$<input id="inCheckSent"> <br> wurden von Sparkonto gesendet </b></h2>');
  $('#sfsaCancel').text('(Tippen Sie auf Schließen)');



    $('#gby').html('<b> Auf Wiedersehen</b>');
    $('#nrep').text('Benötigen Sie einen Beleg?');
    $('#receiptYes').text(' JA');
    $('#receiptNo').text(' NEIN');
    $('#exBack').html('<b>Zurück</b>'); 





     $('#stc').html('<b>$<input id="inCheck">  <br> Wurden von Sichern zu Prüfen übertragen</b></h2>');
     $('stcX').text('(Tippen Sie auf Schließen)');

   $('#cts').html('<b> $<input id="inSav"> <br> Wurden von der Prüfung zu Einsparungen übertragen</b></h2>');
   $('#ctsX').text('(Tippen Sie auf Schließen)');


     $('#oops').html('<h1><b> Hoppla</b></h1>');


  $('#machine').html('<b> Diese Maschine kann nur Rechnungen versenden von: </b></h2><br>'); 

  $('#limit').html('<b>$ 10: begrenzt auf $ 200<br> $20: begrenzt auf $1500 <br>$50: begrenzt auf $1500 <br> $100: begrenzt auf  $1500</b></p><br><p> </p>');


});




$('#hindi2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
$('#cash2').html ('<input  type="radio" name="itm"> जमा ');

  $('#withdraw2').html('<input  type="radio" name="itm"> निकालें ');
  $('#transfer').html('<input  type="radio" name="itm"> Transfer');

  $('#checking2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> .......चेकों....... <br><span> ...शेष...: $1,500.00</span>');
  
  
  $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);
  
  

  $('#submit2').html(' जमा करें ');

  $('#exit2').html(' रद्द ');

  $('#submit2Y').html(' जमा करें ');

  $('#exit2Y').html(' रद्द ');


  $('.confirm2').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2').html('<h2><b> वापस</b></h2>');

  $('.confirm2Y').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Y').html('<h2><b> वापस</b></h2>');




  $('#casde').html('<b> कृपया अपना नकद जमा डालें</b>');
  $('#casde2').html('<b> कृपया अपना नकद जमा डालें</b>');


  $('#bills').text('');
  $('#bills').html('<p id="bills"> मुझे बिल की $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled>  आवश्यकता है:</p>');
  $('#qtyvalue2').attr('value', userInput);

  $('#retr').html('<h2 id="retr"><b> कृपया अपने नकद निकासी को पुनः प्राप्त करें</b></h2>');

  $('#chede').html('<b>पट्टा अपनी चेक जमा अब डालें</b>');



$('#cancel').text('(रद्द करने के लिए टैप करें)');
  $('#cancel2').text('(रद्द करने के लिए टैप करें)');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> को चेकिंग अकाउंट से भेजा गया था</b></h2>');
  $('#sfcaCancel').text('(बंद करने के लिए टैप करें)');

  $('#sfsa').html('<b>$<input id="inCheckSent"> <br> को बचत खाते से भेजा गया था</b></h2>');
  $('#sfsaCancel').text('(बंद करने के लिए टैप करें)');




    $('#gby').html('<b>अच्छा अलविदा</b>');
    $('#nrep').text('रसीद की आवश्यकता है?');
    $('#receiptYes').text('हाँ');
    $('#receiptNo').text('नहीं');
    $('#exBack').html('<b> वापस जाओ</b>'); 


     $('#stc').html('<b>$<input id="inCheck">  <br>सेविंग से जांच करने के लिए हस्तांतरित किया गया था</b></h2>');
     $('stcX').text('(बंद करने के लिए टैप करें)');

   $('#cts').html('<b> $<input id="inSav"> <br>बचत करने के लिए जाँच से हस्तांतरित किया गया</b></h2>');
   $('#ctsX').text('(बंद करने के लिए टैप करें)');


     $('#oops').html('<h1><b> ओह्स</b></h1>');



  $('#machine').html('<b> यह मशीन केवल बिल भेज सकती है: </b></h2><br>'); 

  $('#limit').html('<b>$10: सीमित $200<br> $20: सीमित $1500<br>$50: सीमित $1500 <br>$100: सीमित $1500</b></p><br><p> </p>');







  });



$('#french2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
$('#cash2').html ('<input  type="radio" name="itm"> dépôt');

  $('#withdraw2').html('<input  type="radio" name="itm"> Supprimer ');
  $('#trasnfer').html('<input  type="radio" name="itm"> Transfer');

  

  $('#checking2').html('<input  type="radio" name="itm"> Contrôles <br><span>Balance: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> économies <br><span>Balance: $1,500.00</span>');
  
  

   $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);
  
  

  $('#submit2').html(' Soumettre ');

  $('#exit2').html(' Annuler ');

  $('#submit2Y').html(' Soumettre ');

  $('#exit2Y').html(' Annuler ');


  $('.confirm2').html('<h2><b> Confirmer</b></h2>');
  $('.back2').html('<h2><b> Retour</b></h2>');

  $('.confirm2Y').html('<h2><b>पुष्टि करें</b></h2>');
  $('.back2Y').html('<h2><b> वापस</b></h2>');



  $('#casde').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");
  $('#casde2').html("<b> S'il vous plaît Insérer votre dépôt en espèces</b>");


  

  $('#bills').html('<p id="bills"> J\'ai beso$<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> de projets de loi:</p>');
  $('#qtyvalue2').attr('value', userInput);

  $('#retr').html("<h2 id='retr'><b> S'il vous plaît récupérer votre retrait d'argent</b></h2>");

  $('#chede').html('<b>  location Insérez votre chèque de caution maintenant</b>');

  $('#cancel').text('(Appuyer pour annuler)');
  $('#cancel2').text('(Appuyer pour annuler)');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> ont été envoyés à partir du compte checking </b></h2>');
  $('#sfcaCancel').text('(Appuyez pour fermer)');


  $('#sfsa').html("<b>$<input id='inCheckSent'> <br> ont été envoyés à partir du compte d'épargne </b></h2>");
  $('#sfsaCancel').text('(Appuyez pour fermer)');



    $('#gby').html('<b> Au Revoir</b>');
    $('#nrep').text("Besoin d'un reçu?");
    $('#receiptYes').text(' OUI');
    $('#receiptNo').text(' NON');
    $('#exBack').html('<b> Retour</b>'); 


     $('#stc').html("<b>$<input id='inCheck'>  <br> ont été transférés de l'enregistrement à la vérification</b></h2>");
     $('stcX').text('(Appuyer pour fermer)');



   $('#cts').html("<b> $<input id='inSav'> <br> ont été transférés de la vérification à l'épargne</b></h2>");
   $('#ctsX').text('(Appuyez pour fermer)');


     $('#oops').html('<h1><b> Oups</b></h1>');



  $('#machine').html('<b> Cette machine peut seulement expédier des factures de: </b></h2><br>'); 

  $('#limit').html('<b>10 $: limité à 200 $ <br> 20 $: limité à 1500 $  <br>50 $: limité à 1500 $ <br>100 $: limité à 1500 $ </b></p><br><p> </p>');

  });





$('#arabic2').click(function(){
userInput = '0.00';
$('#qtyvalue2').attr('value', userInput);
$('#cash2').html ('<input  type="radio" name="itm"> يداع ');

  $('#withdraw2').html('<input  type="radio" name="itm"> .....إزالة....');
  $('#transfer').html('<input  type="radio" name="itm"> Transfer');

  

  $('#checking2').html('<input  type="radio" name="itm"> ....الادخار.... <br><span> الرصيد: -$2,200.00</span>');
  $('#saving2').html('<input  type="radio" name="itm"> ....الشيكات....<br><span> الرصيد: $1,500.00</span>');
  
  

   $('#amount').text('$');
   $('#qtyvalue2').attr('value', userInput);
  

  $('#submit2').html(' إرسال ');
  $('#exit2').html(' الغاء ');

  $('#submit2Y').html(' إرسال ');
  $('#exit2Y').html(' الغاء ');




  $('.confirm2').html('<h2><b> تأكيد </b></h2>');
  $('.back2').html('<h2><b> العودة</b></h2>');

  $('.confirm2Y').html('<h2><b> تأكيد </b></h2>');
  $('.back2Y').html('<h2><b> العودة</b></h2>');





  $('#casde').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');
  $('#casde2').html('<b> يرجى إدراج الإيداع النقدي الخاص بك </b>');


  $('#bills').text(' ');
  $('#bills').html('<p id="bills"> أحتاج $<input id="qtyvalue23" class="qtyvalue23" name="qtyvalue23" type="text" value="" disabled> إلى فواتير</p>');
  $('#qtyvalue2').attr('value', userInput);


  $('#retr').html('<h2 id="retr"><b> يرجى استرداد السحب النقدي الخاص بك </b></h2>');

  $('#chede').html('<b> عقد إدراج إيداع الخاص بك إيداع الآن </b>');

  $('#cancel').text('(الحنفية لإلغاء)');
  $('#cancel2').text('(الحنفية لإلغاء)');

  $('#sfca').html('<b>$<input id="inCheckSent"> <br> تم إرسالها من فحص الحساب </b></h2>');
  $('#sfcaCancel').text('(انقر لإغلاق)');


$('#sfsa').html('<b>$<input id="inCheckSent"> <br>  من حساب التوفير</b></h2>');
  $('#sfsaCancel').text('(انقر لإغلاق)');



    $('#gby').html('<b> وداعا</b>');
    $('#nrep').text('تحتاج إلى استلام؟');
    $('#receiptYes').text(' نعم');
    $('#receiptNo').text(' لا');
    $('#exBack').html('<b> العودة</b>'); 


     $('#stc').html('<b>$<input id="inCheck">  <br>تم نقلها من الادخار لفحص</b></h2>');
     $('stcX').text('(الحنفية لإغلاق)');



   $('#cts').html('<b> $<input id="inSav"> <br>  تم تحويلها من التدقيق إلى الادخار</b></h2>');
   $('#ctsX').text('(الحنفية لإغلاق)');


     $('#oops').html('<h1><b>عفوا</b></h1>');



  $('#machine').html('<b>  هذا الجهاز يمكن فقط إرسال فواتير من: </b></h2><br>'); 

  $('#limit').html('<b> $10 دولارات: تقتصر على $200 دولار <br> $20 دولارات: تقتصر على 1500 دولار<br>50 دولارات: تقتصر على 1500 دولار<br>$100 دولارات: تقتصر على $1500 دولار</b></p><br><p> </p>');




  });





});



 $('.CaptureDeposit').click(function(){
 $('.CaptureDeposit').show();
});
 
 $('.DepositButtonsMOBI').click(function(){
 $('.CaptureDeposit').show();
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






