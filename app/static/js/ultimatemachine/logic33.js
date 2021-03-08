$(document).ready(function(){





$('#Vm3Maps').click(function(){
$('.ComingSoonVM3').fadeIn();
$('.ComingSoonVM3').removeClass('ComingSoonServStat');
$('.ComingSoonVM3').addClass('ComingSoonMap');
$('.Mapinput3').fadeIn();

});



$('#Vm3SChange').click(function(){
$('.ComingSoonVM3').fadeIn();
$('.ComingSoonVM3').removeClass('ComingSoonMap');
$('.ComingSoonVM3').addClass('ComingSoonServStat');
$('.Mapinput3').fadeOut();
});



$('#Vm3Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM3').fadeOut();
$('.Mapinput3').fadeOut()
});





  $('#total33').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue33= 1;
var itemValue33=0;
var payMethod33='none';
var total33=0;
var totalMOBI3=0;






//function to get itm value
function getItemValue()

{
 $('.itmV33').on('click', function(){
    itemValue33 = $(this).attr('value');
    qtyValue33= 1;
    total33= itemValue33;
    totalMOBI3= itemValue33;
   //  total2= itemValue * qtyValue;
    
    


 total33= "$"+itemValue33;
    //Testing
 
    console.log('item value is ' + itemValue33+ ' and it is type of '
    	+ typeof('itemValue')+ ' and qty is '+ qtyValue33);
    console.log('Total is ' + total33);

    

   //
 $('#total33').attr('value', total33);

 });

};
//functions to get quantity value


 $('#sub33').on('click', function(){

    qtyValue33 = qtyValue33 - 1;
    $('#qtyvalue33').attr('value', qtyValue33);

      if(qtyValue33 <=20){
      
      $('#add33').fadeIn('fast');

    }


    if(qtyValue33 === 0){
      qtyValue33 = 1
     
}

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue33+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply33= qtyValue33 * itemValue33;

   decimal33=multiply33.toFixed(2);
   
    total33= decimal33;
    totalMOBI3= decimal33;

  
  //testing
  total33= "$" + total33;
  console.log('total is ' + total33);
  
 $('#total2').attr('value', total33);

//
 });






 $('#add33').on('click', function(){
    qtyValue33 = qtyValue33 + 1;
    $('#qtyvalue33').attr('value', qtyValue33);

    //Testing
    console.log('quantity value is ' + qtyValue33+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue33 >=20){
      qtyValue33 = 20;

    }

  
  
    //
    
    //multiply item value per quantity
      multiply33= qtyValue33 * itemValue33;

   decimal33=multiply33.toFixed(2);
   
    total33= decimal33;
    totalMOBI3= decimal33;
    console.log("quantity value * item value: " + total33);
  
  //testing
  total33= "$" + total33;
  console.log('total is ' + total33);
  console.log("quantity value * item value: " + total33);
  
 $('#total2').attr('value', total33);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift33').click(function(){

   $('.sendGiftVM3, .closeGiftVM3').fadeIn();

});




$('.confirmSendVM3').click(function(){
    $('.sendGiftVM3, .closeGiftVM3').fadeOut();
    totalGiftVM3 = 0;
    $('#totalGiftVM3').attr('value', totalGiftVM3);

    
$('.friendsVM3').removeClass('active');

MySelfVM3 = 0;
JeffVM3 = 0;
MariaVM3 = 0;
JohnVM3 = 0;
LeahVM3 = 0;
PaulVM3 = 0;
JennyVM3 = 0;
GokuVM3 = 0;



    $('.GiftSentVM3').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM3').click(function(){
    $('.sendGiftVM3, .closeGiftVM3').fadeOut();

    totalGiftVM3 = 0;
    $('#totalGiftVM3').attr('value', totalGiftVM3);

$('.friendsVM3').removeClass('active');
MySelfVM3 = 0;
JeffVM3 = 0;
MariaVM3 = 0;
JohnVM3 = 0;
LeahVM3 = 0;
PaulVM3 = 0;
JennyVM3 = 0;
GokuVM3 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM3 = 0;
JeffVM3 = 0;
MariaVM3 = 0;
JohnVM3 = 0;
LeahVM3 = 0;
PaulVM3 = 0;
JennyVM3 = 0;
GokuVM3 = 0;






$('#MySelfVM3').click(function(){

  if (MySelfVM3 === 0){MySelfVM3 = 1;} else {MySelfVM3=0;}

console.log(MySelfVM3);
});






$('#JeffVM3').click(function(){

  if (JeffVM3 === 0){JeffVM3 = 1;} else {JeffVM3=0;}

console.log(JeffVM3);
});


$('#MariaVM3').click(function(){
  
  if (MariaVM3 === 0){MariaVM3 = 1;} else {MariaVM3=0;}

console.log(MariaVM3);
});


$('#JohnVM3').click(function(){
  
  if (JohnVM3 === 0){JohnVM3 = 1;} else {JohnVM3=0;}

console.log(JohnVM3);
});


$('#LeahVM3').click(function(){
  
  if (LeahVM3 === 0){LeahVM3 = 1;} else {LeahVM3=0;}

console.log(LeahVM3);
});


$('#PaulVM3').click(function(){
  
  if (PaulVM3 === 0){PaulVM3 = 1;} else {PaulVM3=0;}

console.log(PaulVM3);
});



$('#JennyVM3').click(function(){
  
  if (JennyVM3 === 0){JennyVM3 = 1;} else {JennyVM3=0;}

console.log(JennyVM3);
});


$('#GokuVM3').click(function(){
  
  if (GokuVM3 === 0){GokuVM3 = 1;} else {GokuVM3=0;}

console.log(GokuVM3);
});















AllFriendsVM3 = JeffVM3 + MariaVM3 + JohnVM3 + LeahVM3 + PaulVM3 + JennyVM3 + GokuVM3 + MySelfVM3; 




totalGiftVM3 = parseFloat(totalMOBI3) * parseFloat(AllFriendsVM3);


$('.friendsVM3').click(function(){

AllFriendsVM3 = JeffVM3 + MariaVM3 + JohnVM3 + LeahVM3 + PaulVM3 + JennyVM3 + GokuVM3 + MySelfVM3; 

totalGiftVM3 = parseFloat(totalMOBI3) * parseFloat(AllFriendsVM3);

 console.log("All friendsVM3 is =" + AllFriendsVM3);
console.log("All friendsVM3 is =" + typeof('AllFriendsVM3'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM3);
console.log("The totalMOBI3 =" + totalMOBI3);
console.log("The totalGiftVM3 =" + totalMOBI3);
console.log("The totalGiftVM3 =" + typeof('totalMOBI3'));

$('#totalGiftVM3').attr('value', totalGiftVM3);



});






///////////////////Send Gift to Friends//////////////////////////////////////////







///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI33 > label').click(function(){
payMethod33 = $(this).attr('value');
console.log(payMethod33);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod33 = "none";
  itemValue33 = '';
  total33 = "$0.00";
  $('#total33').attr('value', total33);

  $('.itmV33, .PayButtonsMOBI33 > label').removeClass('active');


$(this).fadeOut();
$('.qty33').fadeOut();
qtyValue33 = 1;

});



$('.buy33MOBI').click(function(){

 if(itemValue33 !=='0' && payMethod33 !=='none'){
$('.BuyNewVM3').fadeIn();
}

});



$(' #Refill33').click(function(){
if(itemValue33 !=='0' && payMethod33 !=='none'){
$('.RenewVM3').fadeIn();
}
});


$('#CheckBalVM3').click(function(){
  $('.CheckBalVM3').fadeIn();
});




//////////////////////////////////////////////////////////























$('#ride133, #ride233, #Addvalue33').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue33= 1;
$('#qtyvalue33').attr('value', qtyValue33);

$('.qty33').fadeIn('fast');
$('.sub33').fadeIn('fast');
$('.add33').fadeIn('fast');
$('.qtyvalue33').fadeIn('fast');


});



$('#ride733, #ride3033, #ridebt33').click(function() {

qtyvalue33= 1;
$('#qtyvalue33').attr('value', qtyValue33);
$('.qty33').fadeOut('fast');
// $('#sub33').hide();
// $('#add33').hide();
// $('#qtyvalue33').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan33, #cbalance33').click(function(){
$('#ride133, #ride233, #ride733, #ride3033, #ridebt33, #cbalance33').removeClass('active');
$('#credit33, #cash33, #debit33, #other33').removeClass('active');
// $('#sub33').hide();
// $('#add33').hide();
// $('#qtyvalue33').hide();
$('.qty33').fadeOut('fast');

$('#total33').attr('value','$0.00');
});










//After selecting Payment method

$('#cash33, #credit33, #debit33, #other33').click(function(){
  payMethod33= $(this).attr('value');
  console.log('Payment method is: ' + payMethod33 + 'and item value is: ' +itemValue33);

});

//Hide these PopUps

$('.seOptions33, .seItem33, .pmethod33').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy33').click(function(){

  if(itemValue33 !=='0' && payMethod33 !=='none'){
   
      $('.check33').hide();
       $('.thankRefill33').hide();
       $('.thankBuy33').fadeIn('fast');

       $('.TapBuy3').click(function(){
          $('.thankBuy33').hide(); 
         });

        }

 });




$('#refill33').click(function(){

   if(itemValue33 !=='0' && payMethod33 !=='none'){
   
      $('.check33').hide();
      $('.thankBuy33').hide();
        $('.thankRefill33').fadeIn('fast');

        $('.TapRefill3').click(function(){
       $('.thankRefill33').hide();


 });
}
});





/*

$('#buy33').click(function(){

  if(itemValue33 =='0' && payMethod33 =='none'){
    $('.seOptions33').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue33 !=='0' && payMethod33 =='none'){

      $('.pmethod33').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue33 =='0' && payMethod33 !== 'none'){
       $('.seItem33').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check33').hide();
       $('.thankRefill33').hide();
       $('.thankBuy33').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill33').click(function(){

   if(itemValue33 =='0' && payMethod33 =='none'){
    $('.seOptions33').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue33 !=='0' && payMethod33 =='none'){

      $('.pmethod33').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue33 =='0' && payMethod33 !== 'none'){
       $('.seItem33').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check33').hide();
      $('.thankBuy33').hide();
        $('.thankRefill33').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy33').click(function(){
	$('.check33').hide();
$('.thankRefill33').hide();
 $('.thankBuy33').fadeIn('fast').click(function(){
 	$(this).hide();
 	

 });

});


$('#refill33').click(function(){
	 $('.check33').hide();
	$('.thankBuy33').hide();
    $('.thankRefill33').fadeIn('fast').click(function(){
 	$(this).hide();
 	$('.check33').hide();
 });

});



*/



     

     

//firts UI
     $('#ride133, #ride233, #ride733, #ride3033, #ridebt33, #cbalance33').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#panel33').click(function(){

     	$(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

	$('#cbalance33').html('<input  type="radio" name="itm">Check Balance');

	$('#ride3033').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
	
	$('#other33').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py" >Cash');
    $('#credit33').html('<input type="radio" name="py" >Credit');
    $('#debit33').html('<input type="radio" name="py" >Debit');
    $('#otherp33').html('<input type="radio" name="py" >Other');

    $('#buy33').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill33').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish33').click(function(){
  $('#ride133').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride233').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride733').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance33').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3033').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other33').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash33').html ('<input type="radio" name="py"> Efectivo');
    $('#credit33').html('<input type="radio" name="py">Credito');
    $('#debit33').html('<input type="radio" name="py" >Debito');
    $('#otherp33').html('<input type="radio" name="py">Otros');

    $('#buy33').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill33').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

	$('#cbalance33').html('<input  type="radio" name="itm">   查看  餘額 ');

	$('#ride3033').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
	
	$('#other33').html('__其他 個項目__<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py"> 现金 ');
    $('#credit33').html('<input type="radio" name="py"> 个学分 ');
    $('#debit33').html(' <input type="radio" name="py">金 ');
    $('#otherp33').html(' <input type="radio" name="py">宪章 ');

    $('#buy33').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill33').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

	$('#cbalance33').html('<input  type="radio" name="itm">пунктов услуги');

	$('#ride3033').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
	
	$('#other33').html('Другое пунктов/услуги<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py">Наличный');
    $('#credit33').html('<input type="radio" name="py">кредитов');
    $('#debit33').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp33').html('<input type="radio" name="py">Другое');

    $('#buy33').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill33').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

	$('#cbalance33').html('<input  type="radio" name="itm">Voir  Balance');

	$('#ride3033').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
	
	$('#other33').html('Autres Produ/Servic<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py">Espèces');
    $('#credit33').html('<input type="radio" name="py">Crédits');
    $('#debit33').html('<input type="radio" name="py">DÉBIT');
    $('#otherp33').html('<input type="radio" name="py">Autres');

  
    $('#buy33').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill33').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


	$('#cbalance33').html('<input  type="radio" name="itm">ビュー バランス');

	$('#ride3033').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
	$('#ridebt33').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
	$('#other33').html('その他 の項目/サービ<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py">現金');
    $('#credit33').html('<input type="radio" name="py">クレジット');
    $('#debit33').html('<input type="radio" name="py">ゴールド');
    $('#otherp33').html('<input type="radio" name="py">その他');


    $('#buy33').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill33').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


	$('#cbalance33').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride3033').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
	
  $('#other33').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py">النقدية');
    $('#credit33').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit33').html('<input type="radio" name="py">الذهب');
    $('#otherp33').html('<input type="radio" name="py">ادولة');


    $('#buy33').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill33').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian33').click(function(){

	$('#ride133').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
	$('#ride233').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
	$('#ride733').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

	$('#cbalance33').html('<input  type="radio" name="itm">Osservare Balance');

	$('#ride3033').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
	
	$('#other33').html('Altro artic/serviz<span class="caret"></span>');
	
    $('#cash33').html ('<input type="radio" name="py">Contanti');
    $('#credit33').html('<input type="radio" name="py">Crediti');
    $('#debit33').html('<input type="radio" name="py">Diamanti');
    $('#otherp33').html('<input type="radio" name="py">Altro');



    $('#buy33').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill33').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance33').click(function(){
 $('.check33').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride133, #ride233, #ride733, #ride3033, #ridebt33, #cbalance33').dblclick(function(){
    $('#panel33').fadeIn('fast');
});

    $('#panel33').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  











VM3screenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + VM3screenType);

VM3screenType = 'Machine';

$('.UI3buttons').show();
$('.UI3buttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM3screenType = 'Mobile';
$('.UI3buttons').hide();
$('.UI3buttonsMOBI').show();

console.log('buttons are ' + VM3screenType);

});


////////////////////////////////////















////////////////////////////////////////////////////////////////////////////////////////////////////////












 /*//////////////////////////////MOBI MOBI 33/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI3buttonsMOBI > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){






$('.ui33').addClass('ui33MOBI uiXXMOBI');
$('.lan33').addClass('lan33MOBI');


$('.Vm3LanB').hide();
$('.Vm3LanBMOBI').show();




$('.itm33').addClass('itm33MOBI');
$('.itm33Background').addClass('itm33BackgroundMOBI');

$('.itmV33').addClass('itmV33MOBI');

$('#ride3xbus').show();



$('.dropitm33').addClass('dropitm33MOBI');

$('.DropItmMenu33').addClass('DropItmMenu33MOBI');



$('#Addvalue33').show();

$('.qty33').addClass('qty33MOBI');

$('.sub33').addClass('sub33MOBI'); 

$('.add33').addClass('add33MOBI');



$('.qtyvalue33').addClass('qtyvalue33MOBI');








$('.py33').addClass('py33MOBI'); 


$('.PayButtons33').hide();


$('.PayButtonsMOBI33').show();




$('.fin33').addClass('fin33MOBI');
    

$('.total33').addClass('total33MOBI');





$('.refill33, .buy33').hide();


$('.buy33MOBI, .refill33MOBI').show();




$('#CheckBalVM3').show();
$('#cbalance33').hide();






});



/*//////////////////////////////Machine Machine 33/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Machine, .UI3buttons > button').click(function(){



$('.ui33').removeClass('ui33MOBI uiXXMOBI');
$('.lan33').removeClass('lan33MOBI');


$('.Vm3LanB').show();
$('.Vm3LanBMOBI').hide();




$('.itm33').removeClass('itm33MOBI');
$('.itm33Background').removeClass('itm33BackgroundMOBI');
$('.itmV33').removeClass('itmV33MOBI');

$('#ride3xbus').hide();



$('.dropitm33').removeClass('dropitm33MOBI');
$('.DropItmMenu33').removeClass('DropItmMenu33MOBI');


$('#Addvalue33').hide();

$('.qty33').removeClass('qty33MOBI');

$('.sub33').removeClass('sub33MOBI'); 

$('.add33').removeClass('add33MOBI');



$('.qtyvalue33').removeClass('qtyvalue33MOBI');








$('.py33').removeClass('py33MOBI'); 


$('.PayButtons33').show();


$('.PayButtonsMOBI33').hide();




$('.fin33').removeClass('fin33MOBI');
    

$('.total33').removeClass('total33MOBI');





$('.refill33, .buy33').show();


$('.buy33MOBI, .refill33MOBI').hide();



$('#CheckBalVM3').hide();
$('#cbalance33').show();






});
