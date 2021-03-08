$(document).ready(function(){





$('#Vm1Maps').click(function(){
$('.ComingSoonVM1').fadeIn();
$('.ComingSoonVM1').removeClass('ComingSoonServStat');
$('.ComingSoonVM1').addClass('ComingSoonMap');
$('.Mapinput').fadeIn();

});



$('#Vm1SChange').click(function(){
$('.ComingSoonVM1').fadeIn();
$('.ComingSoonVM1').removeClass('ComingSoonMap');
$('.ComingSoonVM1').addClass('ComingSoonServStat');
$('.Mapinput').fadeOut();
});



$('#Vm1Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM1').fadeOut();
$('.Mapinput').fadeOut()
});





  $('#total2').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue= 1;
var itemValue=0;
var payMethod='none';
var total=0;
var totalMOBI =0;






//function to get itm value




//funtion to set total

 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift11').click(function(){

   $('.sendGiftVM1, .closeGiftVM1').fadeIn();

});




$('.confirmSendVM1').click(function(){
    $('.sendGiftVM1, .closeGiftVM1').fadeOut();
    totalGiftVm1 = 0;
    $('#totalGiftVm1').attr('value', totalGiftVm1);

    
$('.friendsVM1').removeClass('active');

MySelfVm1 = 0;
JeffVm1 = 0;
MariaVm1 = 0;
JohnVm1 = 0;
LeahVm1 = 0;
PaulVm1 = 0;
JennyVm1 = 0;
GokuVm1 = 0;



    $('.GiftSentVM1').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM1').click(function(){
    $('.sendGiftVM1, .closeGiftVM1').fadeOut();

    totalGiftVm1 = 0;
    $('#totalGiftVm1').attr('value', totalGiftVm1);

$('.friendsVM1').removeClass('active');
MySelfVm1 = 0;
JeffVm1 = 0;
MariaVm1 = 0;
JohnVm1 = 0;
LeahVm1 = 0;
PaulVm1 = 0;
JennyVm1 = 0;
GokuVm1 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVm1 = 0;
JeffVm1 = 0;
MariaVm1 = 0;
JohnVm1 = 0;
LeahVm1 = 0;
PaulVm1 = 0;
JennyVm1 = 0;
GokuVm1 = 0;



$('#MySelfVM1').click(function(){

  if (MySelfVm1 === 0){MySelfVm1 = 1;} else {MySelfVm1=0;}

console.log(MySelfVm1);
});




$('#JeffVM1').click(function(){

  if (JeffVm1 === 0){JeffVm1 = 1;} else {JeffVm1=0;}

console.log(JeffVm1);
});


$('#MariaVM1').click(function(){
  
  if (MariaVm1 === 0){MariaVm1 = 1;} else {MariaVm1=0;}

console.log(MariaVm1);
});


$('#JohnVM1').click(function(){
  
  if (JohnVm1 === 0){JohnVm1 = 1;} else {JohnVm1=0;}

console.log(JohnVm1);
});


$('#LeahVM1').click(function(){
  
  if (LeahVm1 === 0){LeahVm1 = 1;} else {LeahVm1=0;}

console.log(LeahVm1);
});


$('#PaulVM1').click(function(){
  
  if (PaulVm1 === 0){PaulVm1 = 1;} else {PaulVm1=0;}

console.log(PaulVm1);
});



$('#JennyVM1').click(function(){
  
  if (JennyVm1 === 0){JennyVm1 = 1;} else {JennyVm1=0;}

console.log(JennyVm1);
});


$('#GokuVM1').click(function(){
  
  if (GokuVm1 === 0){GokuVm1 = 1;} else {GokuVm1=0;}

console.log(GokuVm1);
});















AllFriendsVm1 = JeffVm1 + MariaVm1 + JohnVm1 + LeahVm1 + PaulVm1 + JennyVm1 + GokuVm1 + MySelfVm1; 




totalGiftVm1 = parseFloat(totalMOBI) * parseFloat(AllFriendsVm1);


$('.friendsVM1').click(function(){

AllFriendsVm1 = JeffVm1 + MariaVm1 + JohnVm1 + LeahVm1 + PaulVm1 + JennyVm1 + GokuVm1 + MySelfVm1; 

totalGiftVm1 = parseFloat(totalMOBI) * parseFloat(AllFriendsVm1);

 console.log("All friendsVm1 is =" + AllFriendsVm1);
console.log("All friendsVm1 is =" + typeof('AllFriendsVm1'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVm1);
console.log("The totalMOBI =" + totalMOBI);
console.log("The totalGiftVm1 =" + totalMOBI);
console.log("The totalGiftVm1 =" + typeof('totalMOBI'));

$('#totalGiftVm1').attr('value', totalGiftVm1);



});









///////////////////Send Gift to Friends//////////////////////////////////////////


//////////////////////////////////////////////////////////

$('.PayButtonsMOBI > label').click(function(){
payMethod = $(this).attr('value');
console.log(payMethod);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod = "none";
  itemValue = '';
  total = "$0.00";
  $('#total2').attr('value', total);

  $('.itmV, .PayButtonsMOBI > label').removeClass('active');


$(this).fadeOut();
$('.qtyty').fadeOut();
qtyValue = 1;

});



$('.buyxMOBI').click(function(){

 if(itemValue !=='0' && payMethod !=='none'){
$('.BuyNewVM1').fadeIn();
}

});



$(' #Refill11').click(function(){
if(itemValue !=='0' && payMethod !=='none'){
$('.RenewVM1').fadeIn();
}
});


$('#CheckBalVM1').click(function(){
  $('.CheckBalVM1').fadeIn();
});




//////////////////////////////////////////////////////////


















$('#ride1x, #ride2x').click(function() {
$(".qtyty").fadeIn('fast');
});


$('.fix1').click(function() {
  //show these numbers when ride1 or ride2 are clicked
$('.qtyV').fadeIn('fast');
$('#btn1a').addClass('active');
//change attribute of these numbers ride1 or ride2 are clicked
$('.qtyV').removeClass('active');


});



$(".lan > label").click(function(){
$(".qtyty").fadeOut('fast');
});


$('.unli1').click(function() {

$(".qtyty").fadeOut('fast');
$('#btn1a').fadeIn('fast');
$('#btn2a, #btn3a, #btn4a, #btn5a, #btn6a, #btn7a, #btn8a, #btn9a, #btn10a, #morea, #btn15a, #btn20a, btn25a, btn30a').hide('fast');
$('#btn1a').addClass('active');
});



//when this extra buttons are clicked change the attribute of these buttons
$('#btn15a, #btn20a, #btn25a, #btn30a').click(function(){
$('.qtyV').removeClass('active');

});


// ^




//when any language is clicked all buttons become unchecked
$('#english1, #spanish1, #chinesse1, #russian1, #japanesse1, #italian1, #french1, #saudi1').click(function(){
$('#ride1x, #ride2x, #ride7x, #ride30x, #ridebtx, #cbalancex').attr('class','btn btn-default btn-lg');
$(".qtyty").fadeOut('fast');
$('#creditx, #cashx, #debitx, #otherx').attr('class','btn btn-default btn-lg');
$('#btn1a, #btn2a, #btn3a, #btn4a, #btn5a, #btn6a, #btn7a, #btn8a, #btn9a, #btn10a, #morea, #btn15a, #btn20a, btn25a, btn30a').fadeIn('fast');
$('#btn1a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn2a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn3a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn4a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn5a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn6a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn7a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn8a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn9a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn10a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn15a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn20a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn25a').attr('class','btn btn-default btn-lg qtyV').hide();
$('#btn30a').attr('class','btn btn-default btn-lg qtyV').hide();

$("#morea").hide();
$('#total2').attr('value','$0.00');

});


//When langauge clicked disabled buttons until an item is clicked
$('#english1, #spanish1, #chinesse1, #russian1, #japanesse1, #italian1, #french1, #saudi1').click(function(){

// $('#btn1a').attr('value','0');
// $('#btn2a').attr('value','0');
// $('#btn3a').attr('value','0');
// $('#btn4a').attr('value','0');
// $('#btn5a').attr('value','0');
// $('#btn6a').attr('value','0');
// $('#btn7a').attr('value','0');
// $('#btn8a').attr('value','0');
// $('#btn9a').attr('value','0');
// $('#btn10a').attr('value','0');
// $('#btn15a').attr('value','0');
// $('#btn20a').attr('value','0');

// $('#btn30a').attr('value','0');
});


//When item clicked qtybutton values are activated
$('#ride1x, #ride2x, #ride7x, #ride30x, #ridebtx, #cbalancex').click(function(){
$('#btn1a').attr('value','1');
$('#btn2a').attr('value','2');
$('#btn3a').attr('value','3');
$('#btn4a').attr('value','4');
$('#btn5a').attr('value','5');
$('#btn6a').attr('value','6');
$('#btn7a').attr('value','7');
$('#btn8a').attr('value','8');
$('#btn9a').attr('value','9');
$('#btn10a').attr('value','10');
$('#btn15a').attr('value','15');
$('#btn20a').attr('value','20');
$('#btn25a').attr('value','25');
$('#btn30a').attr('value','30');
});




$(".lan > label").click(function(){
$(".qtyty").fadeOut('fast');
});








//After selecting Payment method

$('#cashx, #creditx, #debitx, #otherx').click(function(){
  payMethod= $(this).attr('value');
  console.log('Payment method is: ' + payMethod + 'and item value is: ' +itemValue);

});

//Hide these PopUps

$('.seOptions, .seItem, .pmethod').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs


$('#buyx').click(function(){

  if(itemValue !=='0' && payMethod !=='none'){
    $('.check').hide();
    $('.thankRefill').hide();
$('.thankBuy').fadeIn('fast');

$('.TapBuy').click(function(){
    $('.thankBuy').hide(); 
          
       
         });

        }

 });




$('#refillx').click(function(){

   if(itemValue !=='0' && payMethod !=='none'){
$('.thankRefill').fadeIn('fast');
   $('.check').hide();
   $('.thankBuy').hide();

$('.TapRefill').click(function(){
       $('.thankRefill').hide();
       

      
});
 
}
});






/*
$('#buyx').click(function(){

  if(itemValue =='0' && payMethod =='none'){
    $('.seOptions').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue !=='0' && payMethod =='none'){

      $('.pmethod').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue =='0' && payMethod !== 'none'){
       $('.seItem').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       $('.thankBuy').fadeIn('fast').click(function(){
          $(this).hide(); 
          });
       $('.check').hide();
       $('.thankRefill').hide();
         

        }

 });




$('#refillx').click(function(){

   if(itemValue =='0' && payMethod =='none'){
    $('.seOptions').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue !=='0' && payMethod =='none'){

      $('.pmethod').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue =='0' && payMethod !== 'none'){
       $('.seItem').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

      $('.thankRefill').fadeIn('fast').click(function(){
       $(this).hide();
       });

	    $('.check').hide();
	    $('.thankBuy').hide();

 
}
});

*/





     

     

//firts UI
     $('#ride1, #ride2, #ride7, #ride30, #ridebt, #cbalance').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#panel').click(function(){

     	$(this).fadeOut('fast');
     });


//second UI info

    $('#ride1x, #ride2x, #ride7x, #ride30x, #ridebtx, #cbalancex').dblclick(function(){
    $('#panel2').fadeIn('fast');
});

    $('#panel2').click(function(){

     	$(this).fadeOut('fast');
     });








    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#englishNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1-Ride<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2-Rides<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">7-Day Unlimited<br><span>$31.50</span>');

	$('#cbalance').html('<input  type="radio" name="itm">Check<br>Balance');

	$('#ride30').html('<input  type="radio" name="itm">30-Days Unlimited<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">7-Days XBus Pass<br><span>$57.50</span>');
	$('#other').html('<input  type="radio" name="itm">Other<br>Items<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py" >Cash');
    $('#credit').html('<input type="radio" name="py" >Credit');
    $('#debit').html('<input type="radio" name="py" >Debit');
    $('#otherp').html('<input type="radio" name="py" >Other');

    $('#buy2').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill2').html('Refill Your<br>Card').css('font-size', '20px');



      $('#PIC2').html('<h2 id="PIC3"><b> Please insert your card</b></h2>');
  
      $('#TC2').html('<p id="TC3"> ( Tap to cancel )</p>');



    $('#TB2').html('<h2 id="TB1"><b> THANK YOU</b></h2>');
    $('#PMP2').html('<h2 id="PMP1"> <b>Please Make Your Payment</b></h2>');
    $('#NAR2').html('<p id="NAR1">Need a Receipt?</p>');
    $('#GB2').html('<p id="GB1"> <b >Go Back</b></p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR2').html('<h2><b id="TR1"> THANK YOU</b></h2>');
  $('#PICMP2').html('<h2><b id="PICMP1"> Please Insert your Card and Make your Payment</b></h2>');
  $('#NARb2').html('<p id="NARb1">Need a Receipt?</p>');
  $('#GB2b').html('<p id="GB1b"> <b>Go Back</b></p>');






	});



$('#spanishNo').click(function(){

  $('#ride1').html ('<input  type="radio" name="itm"> 1-viaje <br> <span> $2.75</span></label>');

  $('#ride2').html('<input  type="radio" name="itm"> 2-viajes <br> <span> $5.75</span></label>');

  $('#ride7').html('<input type="radio" name="itm">7-Dias Ilimitado<br><span>$31.50</span>');

  $('#cbalance').html('<input type="radio" name="itm">Ver<br>Balance');

  $('#ride30').html(' <input type="radio" name="itm">30-Dias Ilimitado<br><span>$102.50</span>');

  $('#ridebt').html('<input type="radio" name="itm">7-Dias Bus/Tren<br><span>$57.50</span></span>');
  $('#other').html('<input  type="radio" name="itm">Otros<br>Articulos<span class="caret"></span>');
  
  
    $('#cash').html ('<input type="radio" name="py"> Efectivo');
    $('#credit').html('<input type="radio" name="py" >Credito');
    $('#debit').html('<input type="radio" name="py" >Debito');
    $('#otherp').html('<input type="radio" name="py">Otros');

    $('#buy2').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill2').html('Recarga tu<br>Tarjeta').css('font-size', '20px');



      $('#PIC2').html('<h2 id="PIC3"><b> Favor Inserte Su Tarjeta</b></h2>');
  
      $('#TC2').html('<p id="TC3"> ( Tap para Cancelar )</p>');


     $('#TB2').html('<h2 id = "TB1"> <b> GRACIAS </ b> </ h2>');
    $('#PMP2').html('<h2 id = "PMP1"> <b> Haga su pago </ b> </ h2>');
    $('#NAR2').html('<p id = "NAR1"> ¿Necesita un recibo? </ p>');
    $('#GB2').html('<p id = "GB1"> <b> Volver atrás </ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> Si </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR2').html('<h2> <b id = "TR1"> GRACIAS </ b> </ h2>');
  $('#PICMP2').html('<h2> <b id = "PICMP1"> Inserte Su Tarjeta y Realice Su Pago </ b> </ h2>');
  $('#NARb2').html('<p id="NARb1">Nesecita Recibo?</p>');
  $('#GB2b').html('<p id = "GB1b"> <b> Volver atrás </ b> </ p>');




  });


$('#chinesseNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1 - 行程 <br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm"> 2 - 旅遊  <br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm"> 7-天无限 <br><span>$31.50</span>');

	$('#cbalance').html('<input  type="radio" name="itm">   查看 <br>  餘額  ');

	$('#ride30').html('<input  type="radio" name="itm"> 30 - 天无限 <br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm"> 7-天无限 巴士和火車 <br><span>$57.50</span>');
	$('#other').html(' 其他<br>個項目 <span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py"> 现金 ');
    $('#credit').html('<input type="radio" name="py"> 个学分 ');
    $('#debit').html(' <input type="radio" name="py">金 ');
    $('#otherp').html(' <input type="radio" name="py">宪章 ');

    $('#buy2').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill2').html('充值您 <br> 憲章').css('font-size', '20px');


      $('#PIC2').html('<h2 id =“PIC3”> <b>请插入您的卡片</ b> </ h2>');
  
      $('#TC2').html('<p id =“TC3”>（点击取消）</ p>');


    $('#TB2').html('<h2 id =“TB1”> <b>谢谢</ b> </ h2>');
    $('#PMP2').html('<h2 id =“PMP1”> <b>请付款</ b> </ h2>');
    $('#NAR2').html('<p id =“NAR1”>需要收据吗？</ p>');
    $('#GB2').html('<p id =“GB1”> <b>回去</ b> </ p></ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> 没有 </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> 没有 </label>');



  $('#TR2').html('<h2> <b id =“TR1”>谢谢</ b> </ h2>');
  $('#PICMP2').html('<h2> <b id =“PICMP1”>请插入您的卡并付款</ b> </ h2>');
  $('#NARb2').html('<p id =“NARb1”>需要收据？</ p>');
  $('#GB2b').html('<p id =“GB1b”> <b>返回</ b> </ p>');

	});


$('#russianNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1-поездка<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2-Путешествия<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">7-дневный<br><span>$31.50</span>');

	$('#cbalance').html('<input  type="radio" name="itm">пунктов<br>услуги');

	$('#ride30').html('<input  type="radio" name="itm">30-дневный<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">7-дневный <br><span>$57.50</span>');
	$('#other').html('Другое<br>пунктов<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit').html('<input type="radio" name="py">кредитов');
    $('#debit').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp').html('<input type="radio" name="py">Другое');

    $('#buy2').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill2').html('Перезарядка ваш<br>Устав').css('font-size', '15px');


      $('#PIC2').html('<h2 id = "PIC3"> <b> Вставьте свою карточку </ b> </ h2>');
  
      $('#TC2').html('<p id = "TC3"> (Нажмите, чтобы отменить) </ p>');

        $('#TB2').html('<h2 id = "TB1"> <b> СПАСИБО </ b> </ h2>');
    $('#PMP2').html('<h2 id = "PMP1"> <b> Сделайте свой платеж </ b> </ h2>');
    $('#NAR2').html('<p id = "NAR1"> Требуется получение? </ p>');
    $('#GB2').html('<p id = "GB1"> <b> Вернуться </ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> нет </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> нет </label>');



  $('#TR2').html('<h2> <b id = "TR1"> СПАСИБО </ b> </ h2>');
  $('#PICMP2').html('<h2> <b id = "PICMP1"> Вставьте свою карточку и сделайте платеж </ b> </ h2>');
  $('#NARb2').html('<p id = "NARb1"> Требуется получение? </ p>');
  $('#GB2b').html('<p id = "GB1b"> <b> Вернуться </ b> </ p>');
	});




$('#frenchNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1-Voyage<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2-Voyage<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">7-Jours Illimité<br><span>$31.50</span>');

	$('#cbalance').html('<input  type="radio" name="itm">Voir <br>Balance');

	$('#ride30').html('<input  type="radio" name="itm">30-Jours Illimités<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">7-Jours Bus et Train<br><span>$57.50</span>');
	$('#other').html('Autres<br>Product<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">Espèces');
    $('#credit').html('<input type="radio" name="py">Crédits');
    $('#debit').html('<input type="radio" name="py">DÉBIT');
    $('#otherp').html('<input type="radio" name="py">Autres');

  

    $('#buy2').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill2').html('Rechargez Votre<br>Charte').css('font-size', '15px');


      $('#PIC2').html('<h2 id = "PIC3"> <b> Veuillez insérer votre carte </ b> </ h2>');
  
      $('#TC2').html('<p id = "TC3"> (Appuyer pour annuler) </ p>');





      $('#TB2').html('<h2 id = "TB1"> <b> MERCI </ b> </ h2>');
    $('#PMP2').html('<h2 id = "PMP1"> <b> Veuillez effectuer votre paiement </ b> </ h2>');
    $('#NAR2').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
    $('#GB2').html('<p id = "GB1"> <b> Retour </ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No2').html('<input  type="radio" name="receiptR">Non</label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> Non </label>');



  $('#TR2').html('<p id = "NARb1"> Besoin d\'un reçu? </ p>');
  $('#PICMP2').html('<h2> <b id = "PICMP1"> Veuillez insérer votre carte et effectuer votre paiement </ b> </ h2>');
  $('#NARb2').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
  $('#GB2b').html('<p id = "GB1b"> <b> Retour </ b> </ p>');


     });




    $('#japanesseNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1 - 旅行<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2 - 旅行<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">7-日間無制限<br><span>$31.50</span>');


	$('#cbalance').html('<input  type="radio" name="itm">ビュー<br>バランス');

	$('#ride30').html('<input  type="radio" name="itm">30-日間無制限<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">7-日間 バスや電車<br><span>$57.50</span>');
	$('#other').html('その他<br>の項目/サービ<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">現金');
    $('#credit').html('<input type="radio" name="py">クレジット');
    $('#debit').html('<input type="radio" name="py">ゴールド');
    $('#otherp').html('<input type="radio" name="py">その他');


    $('#buy2').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill2').html('リチャージご<br>憲章').css('font-size', '20px');


      $('#PIC2').html('<h2 id = "PIC3"> <b>カードを挿入してください</ b> </ h2>');
  
      $('#TC2').html('<p id = "TC3">（タップしてキャンセル）</ p>');


     $('#TB2').html('<h2 id = "TB1"> <b>ありがとうございます</ b> </ h2>');
    $('#PMP2').html('<h2 id = "PMP1"> <b>お支払いをお願いいたします</ b> </ h2>');
    $('#NAR2').html('<p id = "NAR1">領収書が必要ですか？</ p>');
    $('#GB2').html('<p id = "GB1"> <b>戻る</ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> はい</label>');
     $('#No2').html('<input  type="radio" name="receiptR"> いいえ</label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> はい </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> いいえ </label>');



  $('#TR2').html('<h2> <b id = "TR1">ありがとうございます</ b> </ h2>');
  $('#PICMP2').html('<h2> <b id = "PICMP1">カードを挿入してお支払いしてください</ b> </ h2>');
  $('#NARb2').html('<p id = "NARb1">領収書が必要ですか？</ p>');
  $('#GB2b').html('<p id = "GB1b"> <b>戻る</ b> </ p>');

    

	});

   
 $('#saudiNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1 - رحلة<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2 - السفر<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود<br><span>$31.50</span>');


	$('#cbalance').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride30').html('<input  type="radio" name="itm">30 يوم غير محدود<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">لمدة 7 الحافلات والقطارات<br><span>$57.50</span>');
	$('#other').html('<input  type="radio" name="itm">دولة اخرى<br>البنود/خدمات<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">النقدية');
    $('#credit').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit').html('<input type="radio" name="py">الذهب');
    $('#otherp').html('<input type="radio" name="py">ادولة');


    $('#buy2').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill2').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


     $('#PIC2').html('<h2 إد = "PIC3"> <b> الرجاء إدخال بطاقتك </ b> </ h2>');
  
      $('#TC2').html('<p إد = "TC3"> (انقر للإلغاء) </ p>');






   $('#TB2').html('<h2 إد = "TB1"> <b> شكرا </ b> </ h2>');
    $('#PMP2').html('<h2 إد = "PMP1"> <b> يرجى إجراء الدفع </ b> </ h2>');
    $('#NAR2').html('<p إد = "NAR1"> هل تحتاج إلى استلام؟ </ p>');
    $('#GB2').html('<p إد = "GB1"> <b> رجوع </ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> لا </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> لا </label>');



  $('#TR2').html('<h2> <b إد = "TR1"> شكرا </ b> </ h2>');
  $('#PICMP2').html('<h2> <b إد = "PICMP1"> الرجاء إدخال بطاقتك وإجراء الدفع </ b> </ h2>');
  $('#NARb2').html('<p إد = "NARb1"> هل تحتاج إلى استلام؟ </ p>');
  $('#GB2b').html('<p إد = "GB1b"> <b> رجوع </ b> </ p>');


	});

 $('#italianNo').click(function(){

	$('#ride1').html ('<input  type="radio" name="itm">1-Viaggio<br><span>$2.75</span>');
	$('#ride2').html('<input  type="radio" name="itm">2-Viaggio<br><span>$5.75</span>');
	$('#ride7').html('<input  type="radio" name="itm">7-Giorni llimi<br><span>$31.50</span>');

	$('#cbalance').html('<input  type="radio" name="itm">Osserv<br>Balance');

	$('#ride30').html('<input  type="radio" name="itm">30-Giorni llimitato<br><span>$102.50</span>');
	$('#ridebt').html('<input  type="radio" name="itm">7-Giorni Bus/Treno<br><span>$57.50</span>');
	$('#other').html('Altro<br>artic<span class="caret"></span>');

    $('#cash').html ('<input type="radio" name="py">Contanti');
    $('#credit').html('<input type="radio" name="py">Crediti');
    $('#debit').html('<input type="radio" name="py">Diamanti');
    $('#otherp').html('<input type="radio" name="py">Altro');



    $('#buy2').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill2').html('Ricarica Tuo <br>Carta').css('font-size', '20px');




      $('#TB2').html('<h2 id = "TB1"> <b> GRAZIE </ b> </ h2>');
    $('#PMP2').html('<h2 id = "PMP1"> <b> Effettua il pagamento </ b> </ h2>');
    $('#NAR2').html('<p id = "NAR1"> Hai bisogno di una ricevuta? </ p>');
    $('#GB2').html('<p id = "GB1"> <b> Torna indietro </ b> </ p>');

     $('#Yes2').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No2').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes2b').html('<input  type="radio" name="receiptR"> Si </label>');
     $('#No2b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR2').html('<h2> <b id = "TR1"> GRAZIE </ b> </ h2>');
  $('#PICMP2').html('<h2> <b id = "PICMP1"> Inserisci la tua carta ed effettua il pagamento </ b> </ h2>');
  $('#NARb2').html('<p id = "NARb1"> Hai bisogno di una ricevuta? </ p>');
  $('#GB2b').html('<p id = "GB1b"> <b> Torna indietro </ b> </ p>');




      $('#PIC2').html('<h2 id = "PIC3"> <b> Inserisci la scheda </ b> </ h2>');
  
      $('#TC2').html('<p id = "TC3"> (Tocca per annullare) </ p>');



});









//second ui with linear keboard



$('#english1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1-Ride<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2-Rides<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-Day Unlimited<br><span>$31.50</span>');

	$('#cbalancex').html('<input  type="radio" name="itmx">Check<br>Balance');

	$('#ride30x').html('<input  type="radio" name="itmx">30-Days Unlimited<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">7-Days XBus Pass<br><span>$57.50</span>');
	$('#otherx').html('Other<br>Items<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >Cash');
    $('#creditx').html('<input type="radio" name="pyx" >Credit');
    $('#debitx').html('<input type="radio" name="pyx" >Debit');
    $('#otherpx').html('<input type="radio" name="pyx" >Other');

    $('#buyx').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refillx').html('Refill Your<br>Card').css('font-size', '18px');


      $('#PIC1').html('<h2 id="PIC3"><b> please Insert Your Card</b></h2>');
  
      $('#TC1').html('<p id="TC3"> ( Tap to Close )</p>');

    var itemValue=0;
    var payMethod='none';
    console.log('itemValue is :  ' +  itemValue + ' payment method is:  ' + payMethod);


    $('#TB1').html('<h2 id="TB1"><b> THANK YOU</b></h2>');
    $('#PMP1').html('<h2 id="PMP1"> <b>Please Make Your Payment</b></h2>');
    $('#NAR1').html('<p id="NAR1">Need a Receipt?</p>');
    $('#GB1').html('<p id="GB1"> <b >Go Back</b></p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR1').html('<h2><b id="TR1"> THANK YOU</b></h2>');
  $('#PICMP1').html('<h2><b id="PICMP1"> Please Insert your Card and Make your Payment</b></h2>');
  $('#NARb1').html('<p id="NARb1">Need a Receipt?</p>');
  $('#GB1b').html('<p id="GB1b"> <b>Go Back</b></p>');



});



$('#spanish1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1-Viaje<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2-Viajes<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-Dias Ilimitado<br><span>$31.50</span>');




	$('#cbalancex').html('<input  type="radio" name="itmx">Ver<br>Balance');

	$('#ride30x').html('<input  type="radio" name="itmx">30-Dias Ilimitado<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">7-Dias Bus/Tren<br><span>$57.50</span>');
	$('#otherx').html('Otros<br>Articulos<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >Efectivo');
    $('#creditx').html('<input type="radio" name="pyx" >Credito');
    $('#debitx').html('<input type="radio" name="pyx" >Debito');
    $('#otherpx').html('<input type="radio" name="pyx" >Otros');

    $('#buyx').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refillx').html('Recarga tu<br>Tarjeta').css('font-size', '18px');


    $('#PIC1').html('<h2 id="PIC3"><b> Favor Inserte Su Tarjeta</b></h2>');
  
    $('#TC1').html('<p id="TC3"> ( Tap para Cancelar )</p>');

    var itemValue=0;
    var payMethod='none';







    $('#TB1').html('<h2 id = "TB1"> <b> GRACIAS </ b> </ h2>');
    $('#PMP1').html('<h2 id = "PMP1"> <b> Haga su pago </ b> </ h2>');
    $('#NAR1').html('<p id = "NAR1"> ¿Necesita un recibo? </ p>');
    $('#GB1').html('<p id = "GB1"> <b> Volver atrás </ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR1').html('<h2> <b id = "TR1"> GRACIAS </ b> </ h2>');
  $('#PICMP1').html('<h2> <b id = "PICMP1"> Inserte Su Tarjeta y Realice Su Pago </ b> </ h2>');
  $('#NARb1').html('<p id="NARb1">Nesecita Recibo?</p>');
  $('#GB1b').html('<p id = "GB1b"> <b> Volver atrás </ b> </ p>');


});


$('#chinesse1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1 - 行程<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2 - 旅遊 <br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-天无限<br><span>$31.50</span>');

	$('#cbalancex').html('<input  type="radio" name="itmx">   查看 <br>  餘額  ');

	$('#ride30x').html('<input  type="radio" name="itmx"> 30 - 天无限 <br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx"> 7-天无限 巴士和火車 <br><span>$57.50</span>');
	$('#otherx').html('其他<br>個項目<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" > 现金 ');
    $('#creditx').html('<input type="radio" name="pyx" > 个学分 ');
    $('#debitx').html('<input type="radio" name="pyx" > 金 ');
    $('#otherpx').html('<input type="radio" name="pyx" > 宪章 ');

    $('#buyx').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refillx').html('充值您 <br> 憲章').css('font-size', '18px');

    var itemValue=0;
    var payMethod='none';


    $('#PIC1').html('<h2 id =“PIC3”> <b>请插入您的卡片</ b> </ h2>');
  
    $('#TC1').html('<p id =“TC3”>（点击取消）</ p>');




$('#TB1').html('<h2 id =“TB1”> <b>谢谢</ b> </ h2>');
    $('#PMP1').html('<h2 id =“PMP1”> <b>请付款</ b> </ h2>');
    $('#NAR1').html('<p id =“NAR1”>需要收据吗？</ p>');
    $('#GB1').html('<p id =“GB1”> <b>回去</ b> </ p></ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> 没有 </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> 没有 </label>');



  $('#TR1').html('<h2> <b id =“TR1”>谢谢</ b> </ h2>');
  $('#PICMP1').html('<h2> <b id =“PICMP1”>请插入您的卡并付款</ b> </ h2>');
  $('#NARb1').html('<p id =“NARb1”>需要收据？</ p>');
  $('#GB1b').html('<p id =“GB1b”> <b>返回</ b> </ p>');






});


$('#russian1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1-поездка<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2-Путешест<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-дневный<br><span>$31.50</span>');

	$('#cbalancex').html('<input  type="radio" name="itmx">пункт<br>услу');

	$('#ride30x').html('<input  type="radio" name="itmx">30-дневный<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">7-дневный <br><span>$57.50</span>');
	$('#otherx').html('Другое<br>пунктов<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >Наличный');
    $('#creditx').html('<input type="radio" name="pyx" >кредитов');
    $('#debitx').html('<input type="radio" name="pyx" >ДЕБЕТОВ');
    $('#otherpx').html('<input type="radio" name="pyx" >Другое');

    $('#buyx').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refillx').html('Перезарядка ваш<br>Устав').css('font-size', '15px').css('font-size', '15px');

    var itemValue=0;
    var payMethod='none';


      $('#PIC1').html('<h2 id = "PIC3"> <b> Вставьте свою карточку </ b> </ h2>');
  
      $('#TC1').html('<p id = "TC3"> (Нажмите, чтобы отменить) </ p>');



    $('#TB1').html('<h2 id = "TB1"> <b> СПАСИБО </ b> </ h2>');
    $('#PMP1').html('<h2 id = "PMP1"> <b> Сделайте свой платеж </ b> </ h2>');
    $('#NAR1').html('<p id = "NAR1"> Требуется получение? </ p>');
    $('#GB1').html('<p id = "GB1"> <b> Вернуться </ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> нет </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> нет </label>');



  $('#TR1').html('<h2> <b id = "TR1"> СПАСИБО </ b> </ h2>');
  $('#PICMP1').html('<h2> <b id = "PICMP1"> Вставьте свою карточку и сделайте платеж </ b> </ h2>');
  $('#NARb1').html('<p id = "NARb1"> Требуется получение? </ p>');
  $('#GB1b').html('<p id = "GB1b"> <b> Вернуться </ b> </ p>');

});




$('#french1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1-Voyage<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2-Voyage<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-JoursIllimité<br><span>$31.50</span>');

	$('#cbalancex').html('<input  type="radio" name="itmx">Voir <br>Balance');

	$('#ride30x').html('<input  type="radio" name="itmx">30-Jours Illimités<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">7-Jours Bus et Train<br><span>$57.50</span>');
	$('#otherx').html('Autres<br>Product<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >Espèces');
    $('#creditx').html('<input type="radio" name="pyx" >Crédits');
    $('#debitx').html('<input type="radio" name="pyx" >DÉBIT');
    $('#otherpx').html('<input type="radio" name="pyx" >Autres').css('font-size', '18px');



    $('#buyx').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refillx').html('Rechargez Votre<br>Charte').css('font-size', '15px');


      $('#PIC1').html('<h2 id = "PIC3"> <b> Veuillez insérer votre carte </ b> </ h2>');
  
      $('#TC1').html('<p id = "TC3"> (Appuyer pour annuler) </ p>');

    var itemValue=0;
    var payMethod='none';




    $('#TB1').html('<h2 id = "TB1"> <b> MERCI </ b> </ h2>');
    $('#PMP1').html('<h2 id = "PMP1"> <b> Veuillez effectuer votre paiement </ b> </ h2>');
    $('#NAR1').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
    $('#GB1').html('<p id = "GB1"> <b> Retour </ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No1').html('<input  type="radio" name="receiptR">Non</label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> Non </label>');



  $('#TR1').html('<p id = "NARb1"> Besoin d\'un reçu? </ p>');
  $('#PICMP1').html('<h2> <b id = "PICMP1"> Veuillez insérer votre carte et effectuer votre paiement </ b> </ h2>');
  $('#NARb1').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
  $('#GB1b').html('<p id = "GB1b"> <b> Retour </ b> </ p>');


 });




 $('#japanesse1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1 - 旅行<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2 - 旅行<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">7-日間無制限<br><span>$31.50</span>');


	$('#cbalancex').html('<input  type="radio" name="itmx">ビュー<br>バランス');

	$('#ride30x').html('<input  type="radio" name="itmx">30-日間無制限<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">7-日間 バスや電車<br><span>$57.50</span>');
	$('#otherx').html('その他<br>の項目/サービ<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >現金');
    $('#creditx').html('<input type="radio" name="pyx" >クレジット');
    $('#debitx').html('<input type="radio" name="pyx" >ゴールド');
    $('#otherpx').html('<input type="radio" name="pyx" >その他');


    $('#buyx').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refillx').html('リチャージご<br>憲章').css('font-size', '18px');


     $('#PIC1').html('<h2 id = "PIC3"> <b>カードを挿入してください</ b> </ h2>');
  
      $('#TC1').html('<p id = "TC3">（タップしてキャンセル）</ p>');


    var itemValue=0;
    var payMethod='none';







     $('#TB1').html('<h2 id = "TB1"> <b>ありがとうございます</ b> </ h2>');
    $('#PMP1').html('<h2 id = "PMP1"> <b>お支払いをお願いいたします</ b> </ h2>');
    $('#NAR1').html('<p id = "NAR1">領収書が必要ですか？</ p>');
    $('#GB1').html('<p id = "GB1"> <b>戻る</ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> はい</label>');
     $('#No1').html('<input  type="radio" name="receiptR"> いいえ</label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> はい </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> いいえ </label>');



  $('#TR1').html('<h2> <b id = "TR1">ありがとうございます</ b> </ h2>');
  $('#PICMP1').html('<h2> <b id = "PICMP1">カードを挿入してお支払いしてください</ b> </ h2>');
  $('#NARb1').html('<p id = "NARb1">領収書が必要ですか？</ p>');
  $('#GB1b').html('<p id = "GB1b"> <b>戻る</ b> </ p>');

    
});

   
$('#saudi1').click(function(){

	$('#ride1x').html ('<input  type="radio" name="itmx">1 - رحلة<br><span>$2.75</span>');
	$('#ride2x').html('<input  type="radio" name="itmx">2 - السفر<br><span>$5.75</span>');
	$('#ride7x').html('<input  type="radio" name="itmx">لمدة 7 أيام غير محدود<br><span>$31.50</span>');




	$('#cbalancex').html('<input  type="radio" name="itmx">عرض <br>الرصيد');

	$('#ride30x').html('<input  type="radio" name="itmx">30 يوم غير محدود<br><span>$102.50</span>');
	$('#ridebtx').html('<input  type="radio" name="itmx">لمدة 7 الحافلات والقطارات<br><span>$57.50</span>');
	$('#otherx').html('دولة اخرى<br>البنود/خدمات<span class="caret"></span>');
	
    $('#cashx').html ('<input type="radio" name="pyx" >النقدية');
    $('#creditx').html('<input type="radio" name="pyx" >ساعة معتمدة');
    $('#debitx').html('<input type="radio" name="pyx" >الذهب');
    $('#otherpx').html('<input type="radio" name="pyx" >ادولة');


    $('#buyx').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refillx').html('شحن الخاص بك<br>ميثاق').css('font-size', '18px');


      $('#PIC1').html('<h2 إد = "PIC3"> <b> الرجاء إدخال بطاقتك </ b> </ h2>');
  
      $('#TC1').html('<p إد = "TC3"> (انقر للإلغاء) </ p>');

     $('#TB1').html('<h2 إد = "TB1"> <b> شكرا </ b> </ h2>');
    $('#PMP1').html('<h2 إد = "PMP1"> <b> يرجى إجراء الدفع </ b> </ h2>');
    $('#NAR1').html('<p إد = "NAR1"> هل تحتاج إلى استلام؟ </ p>');
    $('#GB1').html('<p إد = "GB1"> <b> رجوع </ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> لا </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> لا </label>');



  $('#TR1').html('<h2> <b إد = "TR1"> شكرا </ b> </ h2>');
  $('#PICMP1').html('<h2> <b إد = "PICMP1"> الرجاء إدخال بطاقتك وإجراء الدفع </ b> </ h2>');
  $('#NARb1').html('<p إد = "NARb1"> هل تحتاج إلى استلام؟ </ p>');
  $('#GB1b').html('<p إد = "GB1b"> <b> رجوع </ b> </ p>');

    var itemValue=0;
    var payMethod='none';



});

$('#italian1').click(function(){

	   $('#ride1x').html ('<input  type="radio" name="itmx">1-Viaggio<br><span>$2.75</span>');
	   $('#ride2x').html('<input  type="radio" name="itmx">2-Viaggio<br><span>$5.75</span>');
	   $('#ride7x').html('<input  type="radio" name="itmx">7-Giorni llimit<br><span>$31.50</span>');

	   $('#cbalancex').html('<input  type="radio" name="itmx">Osserv<br>Balan');

	   $('#ride30x').html('<input  type="radio" name="itmx">30-Giorni llimitato<br><span>$102.50</span>');
	   $('#ridebtx').html('<input  type="radio" name="itmx">7-Giorni Bus/Treno<br><span>$57.50</span>');
	   $('#otherx').html('Altro<br>artic<span class="caret"></span>');
	
       $('#cashx').html ('<input type="radio" name="pyx" >Contanti');
       $('#creditx').html('<input type="radio" name="pyx" >Crediti');
       $('#debitx').html('<input type="radio" name="pyx" >Diamanti');
         


       $('#buyx').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

       $('#refillx').html('Ricarica Tuo <br>Carta').css('font-size', '18px');



      $('#PIC1').html('<h2 id = "PIC3"> <b> Inserisci la scheda </ b> </ h2>');
  
      $('#TC1').html('<p id = "TC3"> (Tocca per annullare) </ p>');


       var itemValue=0;
       var payMethod='none';








    $('#TB1').html('<h2 id = "TB1"> <b> GRAZIE </ b> </ h2>');
    $('#PMP1').html('<h2 id = "PMP1"> <b> Effettua il pagamento </ b> </ h2>');
    $('#NAR1').html('<p id = "NAR1"> Hai bisogno di una ricevuta? </ p>');
    $('#GB1').html('<p id = "GB1"> <b> Torna indietro </ b> </ p>');

     $('#Yes1').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No1').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes1b').html('<input  type="radio" name="receiptR"> Si </label>');
     $('#No1b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR1').html('<h2> <b id = "TR1"> GRAZIE </ b> </ h2>');
  $('#PICMP1').html('<h2> <b id = "PICMP1"> Inserisci la tua carta ed effettua il pagamento </ b> </ h2>');
  $('#NARb1').html('<p id = "NARb1"> Hai bisogno di una ricevuta? </ p>');
  $('#GB1b').html('<p id = "GB1b"> <b> Torna indietro </ b> </ p>');


    });
});














// ///////////////////////////////////////////////////////////////////////////////////////////////






VM1screenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + screenType);

VM1screenType = 'Machine';

$('.UIbuttons').show();
$('.UIbuttonsMOBI').hide();
$('.itmV').css('border-radius', '15px');


});




$('#Vm2Mobile').click(function(){

VM1screenType = 'Mobile';
$('.UIbuttons').hide();
$('.UIbuttonsMOBI').show();

console.log('buttons are ' + screenType);
$('.itmV').css('border-radius', '25px');
});


////////////////////////////////////
















//////////33333333333333333333333333333333333333333333333333333333333333333333333333////////////////////






////////////////////////////////MOBI MOBI ///////////////////
//////////////////////////////////////////////////////////////
 Vm1ScreenType ='';

$('#Vm2Mobile, .UIbuttonsMOBI > button, .NoVmFinss, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){

  $('.itmV').css('border-radius', '30px');

 Vm1ScreenType ='Mobile';

console.log('Screen Type is ' +  Vm1ScreenType);

$('.ui').addClass('uiMOBI uiXXMOBI');

$('.lan').addClass('lanMOBI');

$('.Vm1LanB').hide();
 

$('.Vm1LanBMOBI').show();

$('.itm').addClass('itmMOBI');
$('.itmV').addClass('itmVMOBI');

$('.itmBackground').addClass('itmBackgroundMOBI');

$('.DropItmMenu').addClass('DropItmMenuMOBI');
 


$('.qtyty').addClass('qtytyMOBI');


$('.py').addClass('pyMOBI');


$('.PayButtons').hide();


$('.PayButtonsMOBI').show();


$('.fin').addClass('finMOBI');


$('.totalx').addClass('totalxMOBI');


$('.buyx').hide();
$('.buyxMOBI').show();


$('.refillx').hide();
$('.refillxMOBI').show();


$('#ChekBalVM1, .BalanceV11').show();
$('#cbalancex').hide();




});



////////////////////////////////Machine Machine ///////////////////
//////////////////////////////////////////////////////////////
 Vm1ScreenType ='';

$('#Vm2Machine, .UIbuttons > button').click(function(){


$('.itmV').css('border-radius', '25px');

 Vm1ScreenType ='Machine';

console.log('Screen Type is ' +  Vm1ScreenType);

$('.ui').removeClass('uiMOBI uiXXMOBI');

$('.lan').removeClass('lanMOBI');

$('.Vm1LanB').show();
 

$('.Vm1LanBMOBI').hide();

$('.itm').removeClass('itmMOBI');
$('.itmV').removeClass('itmVMOBI');

$('.itmBackground').removeClass('itmBackgroundMOBI');

$('.DropItmMenu').removeClass('DropItmMenuMOBI');
 


$('.qtyty').removeClass('qtytyMOBI');


$('.py').removeClass('pyMOBI');


$('.PayButtons').show();


$('.PayButtonsMOBI').hide();


$('.fin').removeClass('finMOBI');


$('.totalx').removeClass('totalxMOBI');

$('.buyx').show();
$('.buyxMOBI').hide();


$('.refillx').show();
$('.refillxMOBI').hide();

$('#ChekBalVM1, .BalanceV11').hide();
$('#cbalancex').show();

});







