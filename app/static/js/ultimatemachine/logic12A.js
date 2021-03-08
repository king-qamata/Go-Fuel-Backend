$(document).ready(function(){



$('#Vm12AMaps').click(function(){
$('.ComingSoonVM12A').fadeIn();
$('.ComingSoonVM12A').removeClass('ComingSoonServStat');
$('.ComingSoonVM12A').addClass('ComingSoonMap');
$('.Mapinput12A').fadeIn();

});



$('#Vm12ASChange').click(function(){
$('.ComingSoonVM12A').fadeIn();
$('.ComingSoonVM12A').removeClass('ComingSoonMap');
$('.ComingSoonVM12A').addClass('ComingSoonServStat');
$('.Mapinput12A').fadeOut();
});



$('#Vm12ABuy, #Vm2Machine').click(function(){
$('.ComingSoonVM12A').fadeOut();
$('.Mapinput12A').fadeOut()
});


 



  $('#total12A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue12A= 1;
var itemValue12A=0;
var payMethod12A='none';
var total12A=0;
var totalMOBI12A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV12A').on('click', function(){
    itemValue12A = $(this).attr('value');
    qtyValue12A= 1;
    total12A= itemValue12A;
    totalMOBI12A= itemValue12A;
   //  total2= itemValue * qtyValue;
    
    


 total12A= "$"+itemValue12A;
    //Testing
 
    console.log('item value is ' + itemValue12A+ ' and it is type of '
    	+ typeof('itemValue')+ ' and qty is '+ qtyValue12A);
    console.log('Total is ' + total12A);

    

   //
 $('#total12A').attr('value', total12A);

 });

};
//functions to get quantity value


 $('#sub12A').on('click', function(){

    qtyValue12A = qtyValue12A - 1;
    $('#qtyvalue12A').attr('value', qtyValue12A);

      if(qtyValue12A <=20){
      
      $('#add12A').fadeIn('fast');

    }


    if(qtyValue12A === 0){
      qtyValue12A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue12A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply12A= qtyValue12A * itemValue12A;

   decimal12A=multiply12A.toFixed(2);
   
    total12A= decimal12A;
    totalMOBI12A= decimal12A;

  
  //testing
  total12A= "$" + total12A;
  console.log('total is ' + total12A);
  
 $('#total2').attr('value', total12A);

//
 });






 $('#add12A').on('click', function(){
    qtyValue12A = qtyValue12A + 1;
    $('#qtyvalue12A').attr('value', qtyValue12A);

    //Testing
    console.log('quantity value is ' + qtyValue12A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue12A >=20){
    

    }

     if(qtyValue12A >=2){
      $('#sub12A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply12A= qtyValue12A * itemValue12A;

   decimal12A=multiply12A.toFixed(2);
   
    total12A= decimal12A;
    totalMOBI12A= decimal12A;
    console.log("quantity value * item value: " + total12A);
  
  //testing
  total12A= "$" + total12A;
  console.log('total is ' + total12A);
  console.log("quantity value * item value: " + total12A);
  
 $('#total2').attr('value', total12A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift12A').click(function(){

   $('.sendGiftVM12A, .closeGiftVM12A').fadeIn();

});




$('.confirmSendVM12A').click(function(){
    $('.sendGiftVM12A, .closeGiftVM12A').fadeOut();
    totalGiftVM12A = 0;
    $('#totalGiftVM12A').attr('value', totalGiftVM12A);

    
$('.friendsVM12A').removeClass('active');

MySelfVM12A = 0;
JeffVM12A = 0;
MariaVM12A = 0;
JohnVM12A = 0;
LeahVM12A = 0;
PaulVM12A = 0;
JennyVM12A = 0;
GokuVM12A = 0;



    $('.GiftSentVM12A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM12A').click(function(){
    $('.sendGiftVM12A, .closeGiftVM12A').fadeOut();

    totalGiftVM12A = 0;
    $('#totalGiftVM12A').attr('value', totalGiftVM12A);

$('.friendsVM12A').removeClass('active');
MySelfVM12A = 0;
JeffVM12A = 0;
MariaVM12A = 0;
JohnVM12A = 0;
LeahVM12A = 0;
PaulVM12A = 0;
JennyVM12A = 0;
GokuVM12A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM12A = 0;
JeffVM12A = 0;
MariaVM12A = 0;
JohnVM12A = 0;
LeahVM12A = 0;
PaulVM12A = 0;
JennyVM12A = 0;
GokuVM12A = 0;








$('#MySelfVM12A').click(function(){

  if (MySelfVM12A === 0){MySelfVM12A = 1;} else {MySelfVM12A=0;}

console.log(MySelfVM12A);
});






$('#JeffVM12A').click(function(){

  if (JeffVM12A === 0){JeffVM12A = 1;} else {JeffVM12A=0;}

console.log(JeffVM12A);
});


$('#MariaVM12A').click(function(){
  
  if (MariaVM12A === 0){MariaVM12A = 1;} else {MariaVM12A=0;}

console.log(MariaVM12A);
});


$('#JohnVM12A').click(function(){
  
  if (JohnVM12A === 0){JohnVM12A = 1;} else {JohnVM12A=0;}

console.log(JohnVM12A);
});


$('#LeahVM12A').click(function(){
  
  if (LeahVM12A === 0){LeahVM12A = 1;} else {LeahVM12A=0;}

console.log(LeahVM12A);
});


$('#PaulVM12A').click(function(){
  
  if (PaulVM12A === 0){PaulVM12A = 1;} else {PaulVM12A=0;}

console.log(PaulVM12A);
});



$('#JennyVM12A').click(function(){
  
  if (JennyVM12A === 0){JennyVM12A = 1;} else {JennyVM12A=0;}

console.log(JennyVM12A);
});


$('#GokuVM12A').click(function(){
  
  if (GokuVM12A === 0){GokuVM12A = 1;} else {GokuVM12A=0;}

console.log(GokuVM12A);
});















AllFriendsVM12A = JeffVM12A + MariaVM12A + JohnVM12A + LeahVM12A + PaulVM12A + JennyVM12A + GokuVM12A + MySelfVM12A; 




totalGiftVM12A = parseFloat(totalMOBI12A) * parseFloat(AllFriendsVM12A);


$('.friendsVM12A').click(function(){

AllFriendsVM12A = JeffVM12A + MariaVM12A + JohnVM12A + LeahVM12A + PaulVM12A + JennyVM12A + GokuVM12A + MySelfVM12A; 

totalGiftVM12A = parseFloat(totalMOBI12A) * parseFloat(AllFriendsVM12A);

 console.log("All friendsVM12A is =" + AllFriendsVM12A);
console.log("All friendsVM12A is =" + typeof('AllFriendsVM12A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM12A);
console.log("The totalMOBI12A =" + totalMOBI12A);
console.log("The totalGiftVM12A =" + totalMOBI12A);
console.log("The totalGiftVM12A =" + typeof('totalMOBI12A'));

$('#totalGiftVM12A').attr('value', totalGiftVM12A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI55 > label').click(function(){
payMethod12A = $(this).attr('value');
console.log(payMethod12A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod12A = "none";
  itemValue12A = '';
  total12A = "$0.00";
  $('#total12A').attr('value', total12A);

  $('.itmV12A, .PayButtonsMOBI55 > label').removeClass('active');


$(this).fadeOut();
$('.qty12A').fadeOut();
qtyValue12A = 1;

});



$('.buy12AMOBI').click(function(){

 if(itemValue12A !=='0' && payMethod12A !=='none'){
$('.BuyNewVM12A').fadeIn();
}

});



$(' #Refill12A').click(function(){
if(itemValue12A !=='0' && payMethod12A !=='none'){
$('.RenewVM12A').fadeIn();
}
});


$('#CheckBalVM12A').click(function(){
  $('.CheckBalVM12A').fadeIn();
});




//////////////////////////////////////////////////////////































$('#ride112A, #ride212A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue12A= 1;
$('#qtyvalue12A').attr('value', qtyValue12A);

$('.qty12A').fadeIn('fast');
// $('#sub12A').fadeIn('fast');
// $('#add12A').fadeIn('fast');
// $('#qtyvalue12A').fadeIn('fast');


});



$('#ride712A, #ride3012A, #ridebt12A').click(function() {

qtyvalue12A= 1;
$('#qtyvalue12A').attr('value', qtyValue12A);
$('.qty12A').fadeOut('fast');
// $('#sub12A').hide();
// $('#add12A').hide();
// $('#qtyvalue12A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan12A, #cbalance12A').click(function(){
$('#ride112A, #ride212A, #ride712A, #ride3012A, #ridebt12A, #cbalance12A').removeClass('active');
$('#credit12A, #cash12A, #debit12A, #other12A').removeClass('active');
// $('#sub12A').hide();
// $('#add12A').hide();
// $('#qtyvalue12A').hide();
$('.qty12A').fadeOut('fast');

$('#total12A').attr('value','$0.00');
});



$('.lan12A, .itm12A').dblclick(function(){

$('#ride112A, #ride212A, #ride712A, #ride3012A, #ridebt12A, #cbalance12A').removeClass('active');
$('#credit12A, #cash12A, #debit12A, #other12A').removeClass('active');
// $('#sub12A').hide();
// $('#add12A').hide();
// $('#qtyvalue12A').hide();
$('.qty12A').fadeOut('fast');
$('#total12A').attr('value','$0.00');

});










//After selecting Payment method

$('#cash12A, #credit12A, #debit12A, #other12A').click(function(){
  payMethod12A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod12A + 'and item value is: ' +itemValue12A);

});

//Hide these PopUps

$('.seOptions12A, .seItem12A, .pmethod12A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy12A').click(function(){

  if(itemValue12A !=='0' && payMethod12A !=='none'){
   
      $('.check12A').hide();
       $('.thankRefill12A').hide();
       $('.thankBuy12A').fadeIn('fast');

       $('.TapBuy12A').click(function(){
          $('.thankBuy12A').hide(); 
         });

        }

 });




$('#refill12A').click(function(){

   if(itemValue12A !=='0' && payMethod12A !=='none'){
   
      $('.check12A').hide();
      $('.thankBuy12A').hide();
        $('.thankRefill12A').fadeIn('fast');

        $('.TapRefill12A').click(function(){
       $('.thankRefill12A').hide();


 });
}
});





/*

$('#buy12A').click(function(){

  if(itemValue12A =='0' && payMethod12A =='none'){
    $('.seOptions12A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue12A !=='0' && payMethod12A =='none'){

      $('.pmethod12A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue12A =='0' && payMethod12A !== 'none'){
       $('.seItem12A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check12A').hide();
       $('.thankRefill12A').hide();
       $('.thankBuy12A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill12A').click(function(){

   if(itemValue12A =='0' && payMethod12A =='none'){
    $('.seOptions12A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue12A !=='0' && payMethod12A =='none'){

      $('.pmethod12A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue12A =='0' && payMethod12A !== 'none'){
       $('.seItem12A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check12A').hide();
      $('.thankBuy12A').hide();
        $('.thankRefill12A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy12A').click(function(){
	$('.check12A').hide();
$('.thankRefill12A').hide();
 $('.thankBuy12A').fadeIn('fast').click(function(){
 	$(this).hide();
 	

 });

});


$('#refill12A').click(function(){
	 $('.check12A').hide();
	$('.thankBuy12A').hide();
    $('.thankRefill12A').fadeIn('fast').click(function(){
 	$(this).hide();
 	$('.check12A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride112A, #ride212A, #ride712A, #ride3012A, #ridebt12A, #cbalance12A').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#panel12A').click(function(){

     	$(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

	$('#cbalance12A').html('<input  type="radio" name="itm">Check Balance');

	$('#ride3012A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
	
	$('#other12A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py" >Cash');
    $('#credit12A').html('<input type="radio" name="py" >Credit');
    $('#debit12A').html('<input type="radio" name="py" >Debit');
    $('#otherp12A').html('<input type="radio" name="py" >Other');

    $('#buy12A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill12A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish12A').click(function(){
  $('#ride112A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride212A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride712A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance12A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3012A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other12A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash12A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit12A').html('<input type="radio" name="py">Credito');
    $('#debit12A').html('<input type="radio" name="py" >Debito');
    $('#otherp12A').html('<input type="radio" name="py">Otros');

    $('#buy12A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill12A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

	$('#cbalance12A').html('<input  type="radio" name="itm">   查看  餘額 ');

	$('#ride3012A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
	
	$('#other12A').html('__其他 個項目__<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit12A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit12A').html(' <input type="radio" name="py">金 ');
    $('#otherp12A').html(' <input type="radio" name="py">宪章 ');

    $('#buy12A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill12A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

	$('#cbalance12A').html('<input  type="radio" name="itm">пунктов услуги');

	$('#ride3012A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
	
	$('#other12A').html('Другое пунктов/услуги<span class="caret"></span>');
	
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit12A').html('<input type="radio" name="py">кредитов');
    $('#debit12A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp12A').html('<input type="radio" name="py">Другое');

    $('#buy12A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill12A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

	$('#cbalance12A').html('<input  type="radio" name="itm">Voir  Balance');

	$('#ride3012A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
	
	$('#other12A').html('Autres Produ/Servic<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py">Espèces');
    $('#credit12A').html('<input type="radio" name="py">Crédits');
    $('#debit12A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp12A').html('<input type="radio" name="py">Autres');

  
    $('#buy12A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill12A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


	$('#cbalance12A').html('<input  type="radio" name="itm">ビュー バランス');

	$('#ride3012A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
	$('#ridebt12A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
	$('#other12A').html('その他 の項目/サービ<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py">現金');
    $('#credit12A').html('<input type="radio" name="py">クレジット');
    $('#debit12A').html('<input type="radio" name="py">ゴールド');
    $('#otherp12A').html('<input type="radio" name="py">その他');


    $('#buy12A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill12A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


	$('#cbalance12A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride3012A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
	
  $('#other12A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py">النقدية');
    $('#credit12A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit12A').html('<input type="radio" name="py">الذهب');
    $('#otherp12A').html('<input type="radio" name="py">ادولة');


    $('#buy12A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill12A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian12A').click(function(){

	$('#ride112A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
	$('#ride212A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
	$('#ride712A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

	$('#cbalance12A').html('<input  type="radio" name="itm">Osservare Balance');

	$('#ride3012A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
	
	$('#other12A').html('Altro artic/serviz<span class="caret"></span>');
	
    $('#cash12A').html ('<input type="radio" name="py">Contanti');
    $('#credit12A').html('<input type="radio" name="py">Crediti');
    $('#debit12A').html('<input type="radio" name="py">Diamanti');
    $('#otherp12A').html('<input type="radio" name="py">Altro');



    $('#buy12A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill12A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance12A').click(function(){
 $('.check12A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride112A, #ride212A, #ride712A, #ride3012A, #ridebt12A, #cbalance12A').dblclick(function(){
    $('#panel12A').fadeIn('fast');
});

    $('#panel12A').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









VM12AscreenType = '';

///////////////////////////////////

$('#Vm2Machine, #Vm2Machine').click(function(){

  console.log('buttons are ' + VM12AscreenType);

VM12AscreenType = 'Machine';

$('.UI12Abuttons').show();
$('.UI12AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM12AscreenType = 'Mobile';
$('.UI12Abuttons').hide();
$('.UI12AbuttonsMOBI').show();

console.log('buttons are ' + VM12AscreenType);

});


////////////////////////////////////


























///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI12AbuttonsMOBI > button, .NoVmFinss, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui12A').addClass('ui12AMOBI uiXXMOBI');


$('.lan12A').addClass('lan12AMOBI'); 


$('.Vm12ALanB').hide();
$('.Vm12ALanBMOBI').show();


$('.itm12ABackground').addClass('itm12ABackgroundMOBI');

$('.itm12A').addClass('itm12AMOBI');
$('.itmV12A').addClass('itmV12AMOBI'); 





$('.BigFont12A').addClass('BigFont12AMOBI'); 
$('.SmallFont12A').addClass('SmallFont12AMOBI');
$('.ItemCost12A').addClass('ItemCost12AMOBI');

$('.BalanceV12A').show();

$('.OtherItems12A').addClass('OtherItems12AMOBI');

$('.DropItmMenu12A').addClass('DropItmMenu12AMOBI'); 



$('.qty12A').addClass('qty12AMOBI'); 

$('.sub12A').addClass('sub12AMOBI'); 





$('.add12A').addClass('add12AMOBI'); 



$('.qtyvalue12A').addClass('qtyvalue12AMOBI'); 



$('.py12A').addClass('py12AMOBI');

$('.PayButtons12A').hide(); 

$('.PayButtonsMOBI12A').show(); 



$('.fin12A').addClass('fin12AMOBI'); 





$('#total12A').addClass('total12AMOBI'); 





$('#refill12A, #buy12A').hide();

$('.refill12AMOBI, .buy12AMOBI').show();


$('#ride4012A').hide();



$('#CheckBalVM12A').show();
$('#cbalance12A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI12Abuttons > button').click(function(){



$('.ui12A').removeClass('ui12AMOBI uiXXMOBI');


$('.lan12A').removeClass('lan12AMOBI'); 


$('.Vm12ALanB').show();
$('.Vm12ALanBMOBI').hide();


$('.itm12ABackground').removeClass('itm12ABackgroundMOBI');
$('.itm12A').removeClass('itm12AMOBI'); 
$('.itmV12A').removeClass('itmV12AMOBI');

$('.OtherItems12A').removeClass('OtherItems12AMOBI');

$('.DropItmMenu12A').removeClass('DropItmMenu12AMOBI'); 

$('.qty12A').removeClass('qty12AMOBI'); 

$('.sub12A').removeClass('sub12AMOBI'); 




$('.add12A').removeClass('add12AMOBI');

$('.BigFont12A').removeClass('BigFont12AMOBI'); 
$('.SmallFont12A').removeClass('SmallFont12AMOBI');
$('.ItemCost12A').removeClass('ItemCost12AMOBI');

$('.BalanceV12A').hide();

$('.qtyvalue12A').removeClass('qtyvalue12AMOBI'); 



$('.py12A').removeClass('py12AMOBI');

$('.PayButtons12A').show(); 

$('.PayButtonsMOBI12A').hide(); 



$('.fin12A').removeClass('fin12AMOBI'); 


$('#total12A').removeClass('total12AMOBI'); 



$('#refill12A, #buy12A').show();

$('.refill12AMOBI, .buy12AMOBI').hide();

$('#ride4012A').show();



$('#CheckBalVM12A').hide();
$('#cbalance12A').show();




});


