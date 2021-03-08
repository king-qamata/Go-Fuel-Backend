$(document).ready(function(){



$('#Vm5Maps').click(function(){
$('.ComingSoonVM5').fadeIn();
$('.ComingSoonVM5').removeClass('ComingSoonServStat');
$('.ComingSoonVM5').addClass('ComingSoonMap');
$('.Mapinput5').fadeIn();

});



$('#Vm5SChange').click(function(){
$('.ComingSoonVM5').fadeIn();
$('.ComingSoonVM5').removeClass('ComingSoonMap');
$('.ComingSoonVM5').addClass('ComingSoonServStat');
$('.Mapinput5').fadeOut();
});



$('#Vm5Buy, #Vm5Machine').click(function(){
$('.ComingSoonVM5').fadeOut();
$('.Mapinput5').fadeOut()
});


 



  $('#total55A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue55A= 1;
var itemValue55A=0;
var payMethod55A='none';
var total55A=0;
var totalMOBI55A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV55A').on('click', function(){
    itemValue55A = $(this).attr('value');
    qtyValue55A= 1;
    total55A= itemValue55A;
    totalMOBI55A= itemValue55A;
   //  total2= itemValue * qtyValue;
    
    


 total55A= "$"+itemValue55A;
    //Testing
 
    console.log('item value is ' + itemValue55A+ ' and it is type of '
    	+ typeof('itemValue')+ ' and qty is '+ qtyValue55A);
    console.log('Total is ' + total55A);

    

   //
 $('#total55A').attr('value', total55A);

 });

};
//functions to get quantity value


 $('#sub55A').on('click', function(){

    qtyValue55A = qtyValue55A - 1;
    $('#qtyvalue55A').attr('value', qtyValue55A);

      if(qtyValue55A <=20){
      
      $('#add55A').fadeIn('fast');

    }


    if(qtyValue55A === 0){
      qtyValue55A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue55A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply55A= qtyValue55A * itemValue55A;

   decimal55A=multiply55A.toFixed(2);
   
    total55A= decimal55A;
    totalMOBI55A= decimal55A;

  
  //testing
  total55A= "$" + total55A;
  console.log('total is ' + total55A);
  
 $('#total2').attr('value', total55A);

//
 });






 $('#add55A').on('click', function(){
    qtyValue55A = qtyValue55A + 1;
    $('#qtyvalue55A').attr('value', qtyValue55A);

    //Testing
    console.log('quantity value is ' + qtyValue55A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue55A >=20){
    

    }

     if(qtyValue55A >=2){
      $('#sub55A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply55A= qtyValue55A * itemValue55A;

   decimal55A=multiply55A.toFixed(2);
   
    total55A= decimal55A;
    totalMOBI55A= decimal55A;
    console.log("quantity value * item value: " + total55A);
  
  //testing
  total55A= "$" + total55A;
  console.log('total is ' + total55A);
  console.log("quantity value * item value: " + total55A);
  
 $('#total2').attr('value', total55A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift55A').click(function(){

   $('.sendGiftVM55A, .closeGiftVM55A').fadeIn();

});




$('.confirmSendVM55A').click(function(){
    $('.sendGiftVM55A, .closeGiftVM55A').fadeOut();
    totalGiftVM55A = 0;
    $('#totalGiftVM55A').attr('value', totalGiftVM55A);

    
$('.friendsVM55A').removeClass('active');

MySelfVM55A = 0;
JeffVM55A = 0;
MariaVM55A = 0;
JohnVM55A = 0;
LeahVM55A = 0;
PaulVM55A = 0;
JennyVM55A = 0;
GokuVM55A = 0;



    $('.GiftSentVM55A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM55A').click(function(){
    $('.sendGiftVM55A, .closeGiftVM55A').fadeOut();

    totalGiftVM55A = 0;
    $('#totalGiftVM55A').attr('value', totalGiftVM55A);

$('.friendsVM55A').removeClass('active');
MySelfVM55A = 0;
JeffVM55A = 0;
MariaVM55A = 0;
JohnVM55A = 0;
LeahVM55A = 0;
PaulVM55A = 0;
JennyVM55A = 0;
GokuVM55A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM55A = 0;
JeffVM55A = 0;
MariaVM55A = 0;
JohnVM55A = 0;
LeahVM55A = 0;
PaulVM55A = 0;
JennyVM55A = 0;
GokuVM55A = 0;








$('#MySelfVM55A').click(function(){

  if (MySelfVM55A === 0){MySelfVM55A = 1;} else {MySelfVM55A=0;}

console.log(MySelfVM55A);
});






$('#JeffVM55A').click(function(){

  if (JeffVM55A === 0){JeffVM55A = 1;} else {JeffVM55A=0;}

console.log(JeffVM55A);
});


$('#MariaVM55A').click(function(){
  
  if (MariaVM55A === 0){MariaVM55A = 1;} else {MariaVM55A=0;}

console.log(MariaVM55A);
});


$('#JohnVM55A').click(function(){
  
  if (JohnVM55A === 0){JohnVM55A = 1;} else {JohnVM55A=0;}

console.log(JohnVM55A);
});


$('#LeahVM55A').click(function(){
  
  if (LeahVM55A === 0){LeahVM55A = 1;} else {LeahVM55A=0;}

console.log(LeahVM55A);
});


$('#PaulVM55A').click(function(){
  
  if (PaulVM55A === 0){PaulVM55A = 1;} else {PaulVM55A=0;}

console.log(PaulVM55A);
});



$('#JennyVM55A').click(function(){
  
  if (JennyVM55A === 0){JennyVM55A = 1;} else {JennyVM55A=0;}

console.log(JennyVM55A);
});


$('#GokuVM55A').click(function(){
  
  if (GokuVM55A === 0){GokuVM55A = 1;} else {GokuVM55A=0;}

console.log(GokuVM55A);
});















AllFriendsVM55A = JeffVM55A + MariaVM55A + JohnVM55A + LeahVM55A + PaulVM55A + JennyVM55A + GokuVM55A + MySelfVM55A; 




totalGiftVM55A = parseFloat(totalMOBI55A) * parseFloat(AllFriendsVM55A);


$('.friendsVM55A').click(function(){

AllFriendsVM55A = JeffVM55A + MariaVM55A + JohnVM55A + LeahVM55A + PaulVM55A + JennyVM55A + GokuVM55A + MySelfVM55A; 

totalGiftVM55A = parseFloat(totalMOBI55A) * parseFloat(AllFriendsVM55A);

 console.log("All friendsVM55A is =" + AllFriendsVM55A);
console.log("All friendsVM55A is =" + typeof('AllFriendsVM55A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM55A);
console.log("The totalMOBI55A =" + totalMOBI55A);
console.log("The totalGiftVM55A =" + totalMOBI55A);
console.log("The totalGiftVM55A =" + typeof('totalMOBI55A'));

$('#totalGiftVM55A').attr('value', totalGiftVM55A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI55 > label').click(function(){
payMethod55A = $(this).attr('value');
console.log(payMethod55A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod55A = "none";
  itemValue55A = '';
  total55A = "$0.00";
  $('#total55A').attr('value', total55A);

  $('.itmV55A, .PayButtonsMOBI55 > label').removeClass('active');


$(this).fadeOut();
$('.qty55A').fadeOut();
qtyValue55A = 1;

});



$('.buy55AMOBI').click(function(){

 if(itemValue55A !=='0' && payMethod55A !=='none'){
$('.BuyNewVM55A').fadeIn();
}

});



$(' #Refill55A').click(function(){
if(itemValue55A !=='0' && payMethod55A !=='none'){
$('.RenewVM55A').fadeIn();
}
});


$('#CheckBalVM55A').click(function(){
  $('.CheckBalVM55A').fadeIn();
});




//////////////////////////////////////////////////////////































$('#ride155A, #ride255A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue55A= 1;
$('#qtyvalue55A').attr('value', qtyValue55A);

$('.qty55A').fadeIn('fast');
// $('#sub55A').fadeIn('fast');
// $('#add55A').fadeIn('fast');
// $('#qtyvalue55A').fadeIn('fast');


});



$('#ride755A, #ride3055A, #ridebt55A').click(function() {

qtyvalue55A= 1;
$('#qtyvalue55A').attr('value', qtyValue55A);
$('.qty55A').fadeOut('fast');
// $('#sub55A').hide();
// $('#add55A').hide();
// $('#qtyvalue55A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan55A, #cbalance55A').click(function(){
$('#ride155A, #ride255A, #ride755A, #ride3055A, #ridebt55A, #cbalance55A').removeClass('active');
$('#credit55A, #cash55A, #debit55A, #other55A').removeClass('active');
// $('#sub55A').hide();
// $('#add55A').hide();
// $('#qtyvalue55A').hide();
$('.qty55A').fadeOut('fast');

$('#total55A').attr('value','$0.00');
});










//After selecting Payment method

$('#cash55A, #credit55A, #debit55A, #other55A').click(function(){
  payMethod55A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod55A + 'and item value is: ' +itemValue55A);

});

//Hide these PopUps

$('.seOptions55A, .seItem55A, .pmethod55A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy55A').click(function(){

  if(itemValue55A !=='0' && payMethod55A !=='none'){
   
      $('.check55A').hide();
       $('.thankRefill55A').hide();
       $('.thankBuy55A').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy55A').hide(); 
         });

        }

 });




$('#refill55A').click(function(){

   if(itemValue55A !=='0' && payMethod55A !=='none'){
   
      $('.check55A').hide();
      $('.thankBuy55A').hide();
        $('.thankRefill55A').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill55A').hide();


 });
}
});





/*

$('#buy55A').click(function(){

  if(itemValue55A =='0' && payMethod55A =='none'){
    $('.seOptions55A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue55A !=='0' && payMethod55A =='none'){

      $('.pmethod55A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue55A =='0' && payMethod55A !== 'none'){
       $('.seItem55A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check55A').hide();
       $('.thankRefill55A').hide();
       $('.thankBuy55A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill55A').click(function(){

   if(itemValue55A =='0' && payMethod55A =='none'){
    $('.seOptions55A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue55A !=='0' && payMethod55A =='none'){

      $('.pmethod55A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue55A =='0' && payMethod55A !== 'none'){
       $('.seItem55A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check55A').hide();
      $('.thankBuy55A').hide();
        $('.thankRefill55A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy55A').click(function(){
	$('.check55A').hide();
$('.thankRefill55A').hide();
 $('.thankBuy55A').fadeIn('fast').click(function(){
 	$(this).hide();
 	

 });

});


$('#refill55A').click(function(){
	 $('.check55A').hide();
	$('.thankBuy55A').hide();
    $('.thankRefill55A').fadeIn('fast').click(function(){
 	$(this).hide();
 	$('.check55A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride155A, #ride255A, #ride755A, #ride3055A, #ridebt55A, #cbalance55A').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#panel55A').click(function(){

     	$(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

	$('#cbalance55A').html('<input  type="radio" name="itm">Check Balance');

	$('#ride3055A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
	
	$('#other55A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py" >Cash');
    $('#credit55A').html('<input type="radio" name="py" >Credit');
    $('#debit55A').html('<input type="radio" name="py" >Debit');
    $('#otherp55A').html('<input type="radio" name="py" >Other');

    $('#buy55A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill55A').html('Refill Your<br>Card').css('font-size', '20px');


      $('#PIC3').html('<h2 id="PIC3"><b> please Insert Your Card</b></h2>');
  
      $('#TC3').html('<p id="TC3"> ( Tap to Close )</p>');


    $('#TB3').html('<h2 id="TB1"><b> THANK YOU</b></h2>');
    $('#PMP3').html('<h2 id="PMP1"> <b>Please Make Your Payment</b></h2>');
    $('#NAR3').html('<p id="NAR1">Need a Receipt?</p>');
    $('#GB3').html('<p id="GB1"> <b >Go Back</b></p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR3').html('<h2><b id="TR1"> THANK YOU</b></h2>');
  $('#PICMP3b').html('<h2><b id="PICMP1"> Please Insert your Card and Make your Payment</b></h2>');
  $('#NAR3b').html('<p id="NARb1">Need a Receipt?</p>');
  $('#GB3b').html('<p id="GB1b"> <b>Go Back</b></p>');


	});



$('#spanish55A').click(function(){
  $('#ride155A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride255A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride755A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance55A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3055A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other55A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash55A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit55A').html('<input type="radio" name="py">Credito');
    $('#debit55A').html('<input type="radio" name="py" >Debito');
    $('#otherp55A').html('<input type="radio" name="py">Otros');

    $('#buy55A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill55A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


      $('#PIC3').html('<h2 id="PIC3"><b> Favor Inserte Su Tarjeta</b></h2>');
  
      $('#TC3').html('<p id="TC3"> ( Tap para Cancelar )</p>');




     $('#TB3').html('<h2 id = "TB1"> <b> GRACIAS </ b> </ h2>');
    $('#PMP3').html('<h2 id = "PMP1"> <b> Haga su pago </ b> </ h2>');
    $('#NAR3').html('<p id = "NAR1"> ¿Necesita un recibo? </ p>');
    $('#GB3').html('<p id = "GB1"> <b> Volver atrás </ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> Si </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR3').html('<h2> <b id = "TR1"> GRACIAS </ b> </ h2>');
  $('#PICMP3b').html('<h2> <b id = "PICMP1"> Inserte Su Tarjeta y Realice Su Pago </ b> </ h2>');
  $('#NAR3b').html('<p id="NARb1">Nesecita Recibo?</p>');
  $('#GB3b').html('<p id = "GB1b"> <b> Volver atrás </ b> </ p>');

  });


$('#chinesse55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

	$('#cbalance55A').html('<input  type="radio" name="itm">   查看  餘額 ');

	$('#ride3055A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
	
	$('#other55A').html('__其他 個項目__<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit55A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit55A').html(' <input type="radio" name="py">金 ');
    $('#otherp55A').html(' <input type="radio" name="py">宪章 ');

    $('#buy55A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill55A').html('充值您 <br> 憲章').css('font-size', '20px');



 

      $('#PIC3').html('<h2 id =“PIC3”> <b>请插入您的卡片</ b> </ h2>');
  
      $('#TC3').html('<p id =“TC3”>（点击取消）</ p>');



     $('#TB3').html('<h2 id =“TB1”> <b>谢谢</ b> </ h2>');
    $('#PMP3').html('<h2 id =“PMP1”> <b>请付款</ b> </ h2>');
    $('#NAR3').html('<p id =“NAR1”>需要收据吗？</ p>');
    $('#GB3').html('<p id =“GB1”> <b>回去</ b> </ p></ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> 没有 </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> 是 </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> 没有 </label>');



  $('#TR3').html('<h2> <b id =“TR1”>谢谢</ b> </ h2>');
  $('#PICMP3b').html('<h2> <b id =“PICMP1”>请插入您的卡并付款</ b> </ h2>');
  $('#NAR3b').html('<p id =“NARb1”>需要收据？</ p>');
  $('#GB3b').html('<p id =“GB1b”> <b>返回</ b> </ p>');

	});


$('#russian55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

	$('#cbalance55A').html('<input  type="radio" name="itm">пунктов услуги');

	$('#ride3055A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
	
	$('#other55A').html('Другое пунктов/услуги<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit55A').html('<input type="radio" name="py">кредитов');
    $('#debit55A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp55A').html('<input type="radio" name="py">Другое');

    $('#buy55A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill55A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
      $('#PIC3').html('<h2 id = "PIC3"> <b> Вставьте свою карточку </ b> </ h2>');
  
      $('#TC3').html('<p id = "TC3"> (Нажмите, чтобы отменить) </ p>');


     $('#TB3').html('<h2 id = "TB1"> <b> СПАСИБО </ b> </ h2>');
    $('#PMP3').html('<h2 id = "PMP1"> <b> Сделайте свой платеж </ b> </ h2>');
    $('#NAR3').html('<p id = "NAR1"> Требуется получение? </ p>');
    $('#GB3').html('<p id = "GB1"> <b> Вернуться </ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> нет </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> да </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> нет </label>');



  $('#TR3').html('<h2> <b id = "TR1"> СПАСИБО </ b> </ h2>');
  $('#PICMP3b').html('<h2> <b id = "PICMP1"> Вставьте свою карточку и сделайте платеж </ b> </ h2>');
  $('#NAR3b').html('<p id = "NARb1"> Требуется получение? </ p>');
  $('#GB3b').html('<p id = "GB1b"> <b> Вернуться </ b> </ p>');

	});




$('#french55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

	$('#cbalance55A').html('<input  type="radio" name="itm">Voir  Balance');

	$('#ride3055A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
	
	$('#other55A').html('Autres Produ/Servic<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py">Espèces');
    $('#credit55A').html('<input type="radio" name="py">Crédits');
    $('#debit55A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp55A').html('<input type="radio" name="py">Autres');

  
    $('#buy55A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill55A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

      $('#PIC3').html('<h2 id = "PIC3"> <b> Veuillez insérer votre carte </ b> </ h2>');
  
      $('#TC3').html('<p id = "TC3"> (Appuyer pour annuler) </ p>');

$('#TB3').html('<h2 id = "TB1"> <b> MERCI </ b> </ h2>');
    $('#PMP3').html('<h2 id = "PMP1"> <b> Veuillez effectuer votre paiement </ b> </ h2>');
    $('#NAR3').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
    $('#GB3').html('<p id = "GB1"> <b> Retour </ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No3').html('<input  type="radio" name="receiptR">Non</label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> Oui </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> Non </label>');



  $('#TR3').html('<p id = "NARb1"> Besoin d\'un reçu? </ p>');
  $('#PICMP3b').html('<h2> <b id = "PICMP1"> Veuillez insérer votre carte et effectuer votre paiement </ b> </ h2>');
  $('#NAR3b').html('<p id = "NAR1"> Besoin d\'un reçu? </ p>');
  $('#GB3b').html('<p id = "GB1b"> <b> Retour </ b> </ p>');


     });




    $('#japanesse55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


	$('#cbalance55A').html('<input  type="radio" name="itm">ビュー バランス');

	$('#ride3055A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
	$('#ridebt55A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
	$('#other55A').html('その他 の項目/サービ<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py">現金');
    $('#credit55A').html('<input type="radio" name="py">クレジット');
    $('#debit55A').html('<input type="radio" name="py">ゴールド');
    $('#otherp55A').html('<input type="radio" name="py">その他');


    $('#buy55A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill55A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
      $('#PIC3').html('<h2 id = "PIC3"> <b>カードを挿入してください</ b> </ h2>');
  
      $('#TC3').html('<p id = "TC3">（タップしてキャンセル）</ p>');



     $('#TB3').html('<h2 id = "TB1"> <b>ありがとうございます</ b> </ h2>');
    $('#PMP3').html('<h2 id = "PMP1"> <b>お支払いをお願いいたします</ b> </ h2>');
    $('#NAR3').html('<p id = "NAR1">領収書が必要ですか？</ p>');
    $('#GB3').html('<p id = "GB1"> <b>戻る</ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> はい</label>');
     $('#No3').html('<input  type="radio" name="receiptR"> いいえ</label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> はい </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> いいえ </label>');



  $('#TR3').html('<h2> <b id = "TR1">ありがとうございます</ b> </ h2>');
  $('#PICMP3b').html('<h2> <b id = "PICMP1">カードを挿入してお支払いしてください</ b> </ h2>');
  $('#NAR3b').html('<p id = "NARb1">領収書が必要ですか？</ p>');
  $('#GB3b').html('<p id = "GB1b"> <b>戻る</ b> </ p>');

    

	});

   
 $('#saudi55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


	$('#cbalance55A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride3055A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
	
  $('#other55A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py">النقدية');
    $('#credit55A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit55A').html('<input type="radio" name="py">الذهب');
    $('#otherp55A').html('<input type="radio" name="py">ادولة');


    $('#buy55A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill55A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


      $('#PIC3').html('<h2 إد = "PIC3"> <b> الرجاء إدخال بطاقتك </ b> </ h2>');
  
      $('#TC3').html('<p إد = "TC3"> (انقر للإلغاء) </ p>');


    $('#TB3').html('<h2 إد = "TB1"> <b> شكرا </ b> </ h2>');
    $('#PMP3').html('<h2 إد = "PMP1"> <b> يرجى إجراء الدفع </ b> </ h2>');
    $('#NAR3').html('<p إد = "NAR1"> هل تحتاج إلى استلام؟ </ p>');
    $('#GB3').html('<p إد = "GB1"> <b> رجوع </ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> لا </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> نعم فعلا </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> لا </label>');



  $('#TR3').html('<h2> <b إد = "TR1"> شكرا </ b> </ h2>');
  $('#PICMP3b').html('<h2> <b إد = "PICMP1"> الرجاء إدخال بطاقتك وإجراء الدفع </ b> </ h2>');
  $('#NAR3b').html('<p إد = "NARb1"> هل تحتاج إلى استلام؟ </ p>');
  $('#GB3b').html('<p إد = "GB1b"> <b> رجوع </ b> </ p>');

	});

 $('#italian55A').click(function(){

	$('#ride155A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
	$('#ride255A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
	$('#ride755A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

	$('#cbalance55A').html('<input  type="radio" name="itm">Osservare Balance');

	$('#ride3055A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
	
	$('#other55A').html('Altro artic/serviz<span class="caret"></span>');
	
    $('#cash55A').html ('<input type="radio" name="py">Contanti');
    $('#credit55A').html('<input type="radio" name="py">Crediti');
    $('#debit55A').html('<input type="radio" name="py">Diamanti');
    $('#otherp55A').html('<input type="radio" name="py">Altro');



    $('#buy55A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill55A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



      $('#PIC3').html('<h2 id = "PIC3"> <b> Inserisci la scheda </ b> </ h2>');
  
      $('#TC3').html('<p id = "TC3"> (Tocca per annullare) </ p>');
    
 


      $('#TB3').html('<h2 id = "TB1"> <b> GRAZIE </ b> </ h2>');
    $('#PMP3').html('<h2 id = "PMP1"> <b> Effettua il pagamento </ b> </ h2>');
    $('#NAR3').html('<p id = "NAR1"> Hai bisogno di una ricevuta? </ p>');
    $('#GB3').html('<p id = "GB1"> <b> Torna indietro </ b> </ p>');

     $('#Yes3').html('<input  type="radio" name="receiptR"> Sí </label>');
     $('#No3').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes3b').html('<input  type="radio" name="receiptR"> Si </label>');
     $('#No3b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR3').html('<h2> <b id = "TR1"> GRAZIE </ b> </ h2>');
  $('#PICMP3b').html('<h2> <b id = "PICMP1"> Inserisci la tua carta ed effettua il pagamento </ b> </ h2>');
  $('#NAR3b').html('<p id = "NARb1"> Hai bisogno di una ricevuta? </ p>');
  $('#GB3b').html('<p id = "GB1b"> <b> Torna indietro </ b> </ p>');



});










$('#cbalance55A').click(function(){
 $('.check55A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride155A, #ride255A, #ride755A, #ride3055A, #ridebt55A, #cbalance55A').dblclick(function(){
    $('#panel55A').fadeIn('fast');
});

    $('#panel55A').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









VM5AscreenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + VM5AscreenType);

VM5AscreenType = 'Machine';

$('.UI5Abuttons').show();
$('.UI5AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM5AscreenType = 'Mobile';
$('.UI5Abuttons').hide();
$('.UI5AbuttonsMOBI').show();

console.log('buttons are ' + VM5AscreenType);

});


////////////////////////////////////

















///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI5AbuttonsMOBI > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui55A').addClass('ui55AMOBI uiXXMOBI');


$('.lan55A').addClass('lan55AMOBI'); 


$('.Vm5LanB').hide();
$('.Vm5LanBMOBI').show();



$('.itm55A').addClass('itm55AMOBI');

$('.itmV55A').addClass('itmV55AMOBI'); 

$('.DropItmMenu55A').addClass('DropItmMenu55AMOBI'); 



$('.qty55A').addClass('qty55AMOBI'); 

$('.sub55A').addClass('sub55AMOBI'); 





$('.add55A').addClass('add55AMOBI'); 



$('.qtyvalue55A').addClass('qtyvalue55AMOBI'); 



$('.py55A').addClass('py55AMOBI');

$('.PayButtons55').hide(); 

$('.PayButtonsMOBI55').show(); 



$('.fin55A').addClass('fin55AMOBI'); 





$('#total55A').addClass('total55AMOBI'); 





$('#refill55A, #buy55A').hide();

$('.refill55AMOBI, .buy55AMOBI').show();


$('#ride4055A').hide();



$('#CheckBalVM55A').show();
$('#cbalance55A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI5Abuttons > button').click(function(){



$('.ui55A').removeClass('ui55AMOBI uiXXMOBI');


$('.lan55A').removeClass('lan55AMOBI'); 


$('.Vm5LanB').show();
$('.Vm5LanBMOBI').hide();



$('.itm55A').removeClass('itm55AMOBI');

$('.itmV55A').removeClass('itmV55AMOBI');  

$('.DropItmMenu55A').removeClass('DropItmMenu55AMOBI'); 

$('.qty55A').removeClass('qty55AMOBI'); 

$('.sub55A').removeClass('sub55AMOBI'); 




$('.add55A').removeClass('add55AMOBI'); 



$('.qtyvalue55A').removeClass('qtyvalue55AMOBI'); 



$('.py55A').removeClass('py55AMOBI');

$('.PayButtons55').show(); 

$('.PayButtonsMOBI55').hide(); 



$('.fin55A').removeClass('fin55AMOBI'); 


$('#total55A').removeClass('total55AMOBI'); 



$('#refill55A, #buy55A').show();

$('.refill55AMOBI, .buy55AMOBI').hide();

$('#ride4055A').show();



$('#CheckBalVM55A').hide();
$('#cbalance55A').show();




});


