$(document).ready(function(){



$('#Vm10AMaps').click(function(){
$('.ComingSoonVM10A').fadeIn();
$('.ComingSoonVM10A').removeClass('ComingSoonServStat');
$('.ComingSoonVM10A').addClass('ComingSoonMap');
$('.Mapinput10A').fadeIn();

});



$('#Vm10ASChange').click(function(){
$('.ComingSoonVM10A').fadeIn();
$('.ComingSoonVM10A').removeClass('ComingSoonMap');
$('.ComingSoonVM10A').addClass('ComingSoonServStat');
$('.Mapinput10A').fadeOut();
});



$('#Vm10ABuy, #Vm2Machine').click(function(){
$('.ComingSoonVM10A').fadeOut();
$('.Mapinput10A').fadeOut()
});


 



  $('#total10A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue10A= 1;
var itemValue10A=0;
var payMethod10A='none';
var total10A=0;
var totalMOBI10A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV10A').on('click', function(){
    itemValue10A = $(this).attr('value');
    qtyValue10A= 1;
    total10A= itemValue10A;
    totalMOBI10A= itemValue10A;
   //  total2= itemValue * qtyValue;
    
    


 total10A= "$"+itemValue10A;
    //Testing
 
    console.log('item value is ' + itemValue10A+ ' and it is type of '
    	+ typeof('itemValue')+ ' and qty is '+ qtyValue10A);
    console.log('Total is ' + total10A);

    

   //
 $('#total10A').attr('value', total10A);

 });

};
//functions to get quantity value


 $('#sub10A').on('click', function(){

    qtyValue10A = qtyValue10A - 1;
    $('#qtyvalue10A').attr('value', qtyValue10A);

      if(qtyValue10A <=20){
      
      $('#add10A').fadeIn('fast');

    }


    if(qtyValue10A === 0){
      qtyValue10A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue10A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply10A= qtyValue10A * itemValue10A;

   decimal10A=multiply10A.toFixed(2);
   
    total10A= decimal10A;
    totalMOBI10A= decimal10A;

  
  //testing
  total10A= "$" + total10A;
  console.log('total is ' + total10A);
  
 $('#total2').attr('value', total10A);

//
 });






 $('#add10A').on('click', function(){
    qtyValue10A = qtyValue10A + 1;
    $('#qtyvalue10A').attr('value', qtyValue10A);

    //Testing
    console.log('quantity value is ' + qtyValue10A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue10A >=20){
    

    }

     if(qtyValue10A >=2){
      $('#sub10A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply10A= qtyValue10A * itemValue10A;

   decimal10A=multiply10A.toFixed(2);
   
    total10A= decimal10A;
    totalMOBI10A= decimal10A;
    console.log("quantity value * item value: " + total10A);
  
  //testing
  total10A= "$" + total10A;
  console.log('total is ' + total10A);
  console.log("quantity value * item value: " + total10A);
  
 $('#total2').attr('value', total10A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift10A').click(function(){

   $('.sendGiftVM10A, .closeGiftVM10A').fadeIn();

});




$('.confirmSendVM10A').click(function(){
    $('.sendGiftVM10A, .closeGiftVM10A').fadeOut();
    totalGiftVM10A = 0;
    $('#totalGiftVM10A').attr('value', totalGiftVM10A);

    
$('.friendsVM10A').removeClass('active');

MySelfVM10A = 0;
JeffVM10A = 0;
MariaVM10A = 0;
JohnVM10A = 0;
LeahVM10A = 0;
PaulVM10A = 0;
JennyVM10A = 0;
GokuVM10A = 0;



    $('.GiftSentVM10A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM10A').click(function(){
    $('.sendGiftVM10A, .closeGiftVM10A').fadeOut();

    totalGiftVM10A = 0;
    $('#totalGiftVM10A').attr('value', totalGiftVM10A);

$('.friendsVM10A').removeClass('active');
MySelfVM10A = 0;
JeffVM10A = 0;
MariaVM10A = 0;
JohnVM10A = 0;
LeahVM10A = 0;
PaulVM10A = 0;
JennyVM10A = 0;
GokuVM10A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM10A = 0;
JeffVM10A = 0;
MariaVM10A = 0;
JohnVM10A = 0;
LeahVM10A = 0;
PaulVM10A = 0;
JennyVM10A = 0;
GokuVM10A = 0;








$('#MySelfVM10A').click(function(){

  if (MySelfVM10A === 0){MySelfVM10A = 1;} else {MySelfVM10A=0;}

console.log(MySelfVM10A);
});






$('#JeffVM10A').click(function(){

  if (JeffVM10A === 0){JeffVM10A = 1;} else {JeffVM10A=0;}

console.log(JeffVM10A);
});


$('#MariaVM10A').click(function(){
  
  if (MariaVM10A === 0){MariaVM10A = 1;} else {MariaVM10A=0;}

console.log(MariaVM10A);
});


$('#JohnVM10A').click(function(){
  
  if (JohnVM10A === 0){JohnVM10A = 1;} else {JohnVM10A=0;}

console.log(JohnVM10A);
});


$('#LeahVM10A').click(function(){
  
  if (LeahVM10A === 0){LeahVM10A = 1;} else {LeahVM10A=0;}

console.log(LeahVM10A);
});


$('#PaulVM10A').click(function(){
  
  if (PaulVM10A === 0){PaulVM10A = 1;} else {PaulVM10A=0;}

console.log(PaulVM10A);
});



$('#JennyVM10A').click(function(){
  
  if (JennyVM10A === 0){JennyVM10A = 1;} else {JennyVM10A=0;}

console.log(JennyVM10A);
});


$('#GokuVM10A').click(function(){
  
  if (GokuVM10A === 0){GokuVM10A = 1;} else {GokuVM10A=0;}

console.log(GokuVM10A);
});















AllFriendsVM10A = JeffVM10A + MariaVM10A + JohnVM10A + LeahVM10A + PaulVM10A + JennyVM10A + GokuVM10A + MySelfVM10A; 




totalGiftVM10A = parseFloat(totalMOBI10A) * parseFloat(AllFriendsVM10A);


$('.friendsVM10A').click(function(){

AllFriendsVM10A = JeffVM10A + MariaVM10A + JohnVM10A + LeahVM10A + PaulVM10A + JennyVM10A + GokuVM10A + MySelfVM10A; 

totalGiftVM10A = parseFloat(totalMOBI10A) * parseFloat(AllFriendsVM10A);

 console.log("All friendsVM10A is =" + AllFriendsVM10A);
console.log("All friendsVM10A is =" + typeof('AllFriendsVM10A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM10A);
console.log("The totalMOBI10A =" + totalMOBI10A);
console.log("The totalGiftVM10A =" + totalMOBI10A);
console.log("The totalGiftVM10A =" + typeof('totalMOBI10A'));

$('#totalGiftVM10A').attr('value', totalGiftVM10A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI55 > label').click(function(){
payMethod10A = $(this).attr('value');
console.log(payMethod10A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod10A = "none";
  itemValue10A = '';
  total10A = "$0.00";
  $('#total10A').attr('value', total10A);

  $('.itmV10A, .PayButtonsMOBI55 > label').removeClass('active');


$(this).fadeOut();
$('.qty10A').fadeOut();
qtyValue10A = 1;

});



$('.buy10AMOBI').click(function(){

 if(itemValue10A !=='0' && payMethod10A !=='none'){
$('.BuyNewVM10A').fadeIn();
}

});



$(' #Refill10A').click(function(){
if(itemValue10A !=='0' && payMethod10A !=='none'){
$('.RenewVM10A').fadeIn();
}
});


$('#CheckBalVM10A').click(function(){
  $('.CheckBalVM10A').fadeIn();
});




//////////////////////////////////////////////////////////































$('#ride110A, #ride210A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue10A= 1;
$('#qtyvalue10A').attr('value', qtyValue10A);

$('.qty10A').fadeIn('fast');
// $('#sub10A').fadeIn('fast');
// $('#add10A').fadeIn('fast');
// $('#qtyvalue10A').fadeIn('fast');


});



$('#ride710A, #ride3010A, #ridebt10A').click(function() {

qtyvalue10A= 1;
$('#qtyvalue10A').attr('value', qtyValue10A);
$('.qty10A').fadeOut('fast');
// $('#sub10A').hide();
// $('#add10A').hide();
// $('#qtyvalue10A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan10A, #cbalance10A').click(function(){
$('#ride110A, #ride210A, #ride710A, #ride3010A, #ridebt10A, #cbalance10A').removeClass('active');
$('#credit10A, #cash10A, #debit10A, #other10A').removeClass('active');
// $('#sub10A').hide();
// $('#add10A').hide();
// $('#qtyvalue10A').hide();
$('.qty10A').fadeOut('fast');

$('#total10A').attr('value','$0.00');
});



$('.lan10A, .itm10A').dblclick(function(){

$('#ride110A, #ride210A, #ride710A, #ride3010A, #ridebt10A, #cbalance10A').removeClass('active');
$('#credit10A, #cash10A, #debit10A, #other10A').removeClass('active');
// $('#sub10A').hide();
// $('#add10A').hide();
// $('#qtyvalue10A').hide();
$('.qty10A').fadeOut('fast');
$('#total10A').attr('value','$0.00');

});










//After selecting Payment method

$('#cash10A, #credit10A, #debit10A, #other10A').click(function(){
  payMethod10A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod10A + 'and item value is: ' +itemValue10A);

});

//Hide these PopUps

$('.seOptions10A, .seItem10A, .pmethod10A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy10A').click(function(){

  if(itemValue10A !=='0' && payMethod10A !=='none'){
   
      $('.check10A').hide();
       $('.thankRefill10A').hide();
       $('.thankBuy10A').fadeIn('fast');

       $('.TapBuy10A').click(function(){
          $('.thankBuy10A').hide(); 
         });

        }

 });




$('#refill10A').click(function(){

   if(itemValue10A !=='0' && payMethod10A !=='none'){
   
      $('.check10A').hide();
      $('.thankBuy10A').hide();
        $('.thankRefill10A').fadeIn('fast');

        $('.TapRefill10A').click(function(){
       $('.thankRefill10A').hide();


 });
}
});





/*

$('#buy10A').click(function(){

  if(itemValue10A =='0' && payMethod10A =='none'){
    $('.seOptions10A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue10A !=='0' && payMethod10A =='none'){

      $('.pmethod10A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue10A =='0' && payMethod10A !== 'none'){
       $('.seItem10A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check10A').hide();
       $('.thankRefill10A').hide();
       $('.thankBuy10A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill10A').click(function(){

   if(itemValue10A =='0' && payMethod10A =='none'){
    $('.seOptions10A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue10A !=='0' && payMethod10A =='none'){

      $('.pmethod10A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue10A =='0' && payMethod10A !== 'none'){
       $('.seItem10A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check10A').hide();
      $('.thankBuy10A').hide();
        $('.thankRefill10A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy10A').click(function(){
	$('.check10A').hide();
$('.thankRefill10A').hide();
 $('.thankBuy10A').fadeIn('fast').click(function(){
 	$(this).hide();
 	

 });

});


$('#refill10A').click(function(){
	 $('.check10A').hide();
	$('.thankBuy10A').hide();
    $('.thankRefill10A').fadeIn('fast').click(function(){
 	$(this).hide();
 	$('.check10A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride110A, #ride210A, #ride710A, #ride3010A, #ridebt10A, #cbalance10A').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#panel10A').click(function(){

     	$(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

	$('#cbalance10A').html('<input  type="radio" name="itm">Check Balance');

	$('#ride3010A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
	
	$('#other10A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py" >Cash');
    $('#credit10A').html('<input type="radio" name="py" >Credit');
    $('#debit10A').html('<input type="radio" name="py" >Debit');
    $('#otherp10A').html('<input type="radio" name="py" >Other');

    $('#buy10A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill10A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish10A').click(function(){
  $('#ride110A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride210A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride710A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance10A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3010A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other10A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash10A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit10A').html('<input type="radio" name="py">Credito');
    $('#debit10A').html('<input type="radio" name="py" >Debito');
    $('#otherp10A').html('<input type="radio" name="py">Otros');

    $('#buy10A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill10A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

	$('#cbalance10A').html('<input  type="radio" name="itm">   查看  餘額 ');

	$('#ride3010A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
	
	$('#other10A').html('__其他 個項目__<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit10A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit10A').html(' <input type="radio" name="py">金 ');
    $('#otherp10A').html(' <input type="radio" name="py">宪章 ');

    $('#buy10A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill10A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

	$('#cbalance10A').html('<input  type="radio" name="itm">пунктов услуги');

	$('#ride3010A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
	
	$('#other10A').html('Другое пунктов/услуги<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit10A').html('<input type="radio" name="py">кредитов');
    $('#debit10A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp10A').html('<input type="radio" name="py">Другое');

    $('#buy10A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill10A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

	$('#cbalance10A').html('<input  type="radio" name="itm">Voir  Balance');

	$('#ride3010A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
	
	$('#other10A').html('Autres Produ/Servic<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py">Espèces');
    $('#credit10A').html('<input type="radio" name="py">Crédits');
    $('#debit10A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp10A').html('<input type="radio" name="py">Autres');

  
    $('#buy10A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill10A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


	$('#cbalance10A').html('<input  type="radio" name="itm">ビュー バランス');

	$('#ride3010A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
	$('#ridebt10A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
	$('#other10A').html('その他 の項目/サービ<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py">現金');
    $('#credit10A').html('<input type="radio" name="py">クレジット');
    $('#debit10A').html('<input type="radio" name="py">ゴールド');
    $('#otherp10A').html('<input type="radio" name="py">その他');


    $('#buy10A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill10A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


	$('#cbalance10A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride3010A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
	
  $('#other10A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py">النقدية');
    $('#credit10A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit10A').html('<input type="radio" name="py">الذهب');
    $('#otherp10A').html('<input type="radio" name="py">ادولة');


    $('#buy10A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill10A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian10A').click(function(){

	$('#ride110A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
	$('#ride210A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
	$('#ride710A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

	$('#cbalance10A').html('<input  type="radio" name="itm">Osservare Balance');

	$('#ride3010A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
	
	$('#other10A').html('Altro artic/serviz<span class="caret"></span>');
	
    $('#cash10A').html ('<input type="radio" name="py">Contanti');
    $('#credit10A').html('<input type="radio" name="py">Crediti');
    $('#debit10A').html('<input type="radio" name="py">Diamanti');
    $('#otherp10A').html('<input type="radio" name="py">Altro');



    $('#buy10A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill10A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance10A').click(function(){
 $('.check10A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride110A, #ride210A, #ride710A, #ride3010A, #ridebt10A, #cbalance10A').dblclick(function(){
    $('#panel10A').fadeIn('fast');
});

    $('#panel10A').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









VM10AscreenType = '';

///////////////////////////////////

$('#Vm2Machine, #Vm2Machine').click(function(){

  console.log('buttons are ' + VM10AscreenType);

VM10AscreenType = 'Machine';

$('.UI10Abuttons').show();
$('.UI10AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM10AscreenType = 'Mobile';
$('.UI10Abuttons').hide();
$('.UI10AbuttonsMOBI').show();

console.log('buttons are ' + VM10AscreenType);

});


////////////////////////////////////
















////////////////////////DarK Color UI3///////////////////////////


$('#DARKui10A').click(function(){
    $('.ui10A').attr('class', 'ui10A uiXX');
    $('.ui10A').addClass(' DARKui10A');



      $('.lan10A').attr('class', 'lan10A');
      $('.lan10A').addClass('DARKlan10A');

         $('.lan10A > label, .lan10A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan10A > label, .lan10A > button').addClass('Darklan10A > lan10A');
         $('#english1').addClass('active');
/////////////

      $('.itm10A').attr('class', 'itm10A');
      $('.itm10A').addClass('DARKitm10A');


           $('.itm10A > label, .itm10A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm10A > label, .itm10A > button').addClass('itm10A > label');

////////////



      $('.qty10A').attr('class', 'qty10A');
                $('#sub10A').attr('class', 'btn btn-primary btn-lg sub10A');
                $('#add10A').attr('class', 'btn btn-primary btn-lg add10A');
                 $('#qtyvalue10A').attr('class', 'qtyvalue10A');





///////////

      $('.py10A').attr('class', 'py10A');
      $('.py10A').addClass('DARKpy10A');


           $('.py10A > label, .py10A > button').attr('class', 'btn btn-default btn-lg')
           $('.py10A > label, .py10A > button').addClass('DARKpy10A > label');

/////////////      

      $('.fin10A').attr('class', 'fin10A');
      $('.fin10A').addClass('DARKfin10A');


          $('.finB10A').attr('class', 'btn btn-default btn-lg finB10A');
          $('.finB10A').addClass('DARKfinB10A');


             $('#total10A').attr('class', 'total10A');
             $('#total10A').addClass('DARKtotal10A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui10A').click(function(){
    $('.ui10A').attr('class', 'ui10A uiXX');
    



      $('.lan10A').attr('class', 'lan10A');
      

         $('.lan10A > label, .lan10A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm10A').attr('class', 'itm10A');
      


           $('.itm10A > label, .itm10A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty10A').attr('class', 'qty10A');
                $('#sub10A').attr('class', 'btn btn-primary btn-lg sub10A');
                $('#add10A').attr('class', 'btn btn-primary btn-lg add10A');
                $('#qtyvalue10A').attr('class', 'qtyvalue10A');





///////////

      $('.py10A').attr('class', 'py10A');
      


           $('.py10A > label, .py10A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin10A').attr('class', 'fin10A');
     


          $('.finB10A').attr('class', 'btn btn-default btn-lg finB10A');
          


             $('#total10A').attr('class', 'total10A');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui10AMOBI').click(function(){
    $('.ui10A').attr('class', 'ui10A uiXX');
    $('.ui10A').addClass(' DARKui10A');



      $('.lan10A').attr('class', 'lan10A');
      $('.lan10A').addClass('DARKlan10A');

         $('.lan10A > label, .lan10A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan10A > label, .lan10A > button').addClass('Darklan10A > lan10A');
         $('#english1').addClass('active');
/////////////

      $('.itm10A').attr('class', 'itm10A');
      $('.itm10A').addClass('DARKitm10A');


           $('.itm10A > label, .itm10A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm10A > label, .itm10A > button').addClass('itm10A > label');

////////////



      $('.qty10A').attr('class', 'qty10A');
                $('#sub10A').attr('class', 'btn btn-primary btn-lg sub10A');
                $('#add10A').attr('class', 'btn btn-primary btn-lg add10A');
                 $('#qtyvalue10A').attr('class', 'qtyvalue10A');





///////////

      $('.py10A').attr('class', 'py10A');
      $('.py10A').addClass('DARKpy10A');


           $('.py10A > label, .py10A > button').attr('class', 'btn btn-default btn-lg')
           $('.py10A > label, .py10A > button').addClass('DARKpy10A > label');

/////////////      

      $('.fin10A').attr('class', 'fin10A');
      $('.fin10A').addClass('DARKfin10A');


          $('.finB10A').attr('class', 'btn btn-default btn-lg finB10A');
          $('.finB10A').addClass('DARKfinB10A');


             $('#total10A').attr('class', 'total10A');
             $('#total10A').addClass('DARKtotal10A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui10AMOBI').click(function(){
    $('.ui10A').attr('class', 'ui10A uiXX');
    



      $('.lan10A').attr('class', 'lan10A');
      

         $('.lan10A > label, .lan10A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm10A').attr('class', 'itm10A');
      


           $('.itm10A > label, .itm10A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty10A').attr('class', 'qty10A');
                $('#sub10A').attr('class', 'btn btn-primary btn-lg sub10A');
                $('#add10A').attr('class', 'btn btn-primary btn-lg add10A');
                $('#qtyvalue10A').attr('class', 'qtyvalue10A');





///////////

      $('.py10A').attr('class', 'py10A');
      


           $('.py10A > label, .py10A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin10A').attr('class', 'fin10A');
     


          $('.finB10A').attr('class', 'btn btn-default btn-lg finB10A');
          


             $('#total10A').attr('class', 'total10A');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI10AbuttonsMOBI > button, .NoVmFinss, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui10A').addClass('ui10AMOBI uiXXMOBI');


$('.lan10A').addClass('lan10AMOBI'); 


$('.Vm10ALanB').hide();
$('.Vm10ALanBMOBI').show();


$('.itm10ABackground').addClass('itm10ABackgroundMOBI');

$('.itm10A').addClass('itm10AMOBI');
$('.itmV10A').addClass('itmV10AMOBI'); 





$('.BigFont10A').addClass('BigFont10AMOBI'); 
$('.SmallFont10A').addClass('SmallFont10AMOBI');
$('.ItemCost10A').addClass('ItemCost10AMOBI');

$('.BalanceV10A').show();

$('.OtherItems10A').addClass('OtherItems10AMOBI');

$('.DropItmMenu10A').addClass('DropItmMenu10AMOBI'); 



$('.qty10A').addClass('qty10AMOBI'); 

$('.sub10A').addClass('sub10AMOBI'); 





$('.add10A').addClass('add10AMOBI'); 



$('.qtyvalue10A').addClass('qtyvalue10AMOBI'); 



$('.py10A').addClass('py10AMOBI');

$('.PayButtons10A').hide(); 

$('.PayButtonsMOBI10A').show(); 



$('.fin10A').addClass('fin10AMOBI'); 





$('#total10A').addClass('total10AMOBI'); 





$('#refill10A, #buy10A').hide();

$('.refill10AMOBI, .buy10AMOBI').show();


$('#ride4010A').hide();



$('#CheckBalVM10A').show();
$('#cbalance10A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI10Abuttons > button').click(function(){



$('.ui10A').removeClass('ui10AMOBI uiXXMOBI');


$('.lan10A').removeClass('lan10AMOBI'); 


$('.Vm10ALanB').show();
$('.Vm10ALanBMOBI').hide();


$('.itm10ABackground').removeClass('itm10ABackgroundMOBI');
$('.itm10A').removeClass('itm10AMOBI'); 
$('.itmV10A').removeClass('itmV10AMOBI');

$('.OtherItems10A').removeClass('OtherItems10AMOBI');

$('.DropItmMenu10A').removeClass('DropItmMenu10AMOBI'); 

$('.qty10A').removeClass('qty10AMOBI'); 

$('.sub10A').removeClass('sub10AMOBI'); 




$('.add10A').removeClass('add10AMOBI');

$('.BigFont10A').removeClass('BigFont10AMOBI'); 
$('.SmallFont10A').removeClass('SmallFont10AMOBI');
$('.ItemCost10A').removeClass('ItemCost10AMOBI');

$('.BalanceV10A').hide();

$('.qtyvalue10A').removeClass('qtyvalue10AMOBI'); 



$('.py10A').removeClass('py10AMOBI');

$('.PayButtons10A').show(); 

$('.PayButtonsMOBI10A').hide(); 



$('.fin10A').removeClass('fin10AMOBI'); 


$('#total10A').removeClass('total10AMOBI'); 



$('#refill10A, #buy10A').show();

$('.refill10AMOBI, .buy10AMOBI').hide();

$('#ride4010A').show();



$('#CheckBalVM10A').hide();
$('#cbalance10A').show();




});


