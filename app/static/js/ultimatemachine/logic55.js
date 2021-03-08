$(document).ready(function(){





$('#Vm6Maps').click(function(){
$('.ComingSoonVM6').fadeIn();
$('.ComingSoonVM6').removeClass('ComingSoonServStat');
$('.ComingSoonVM6').addClass('ComingSoonMap');
$('.Mapinput6').fadeIn();

});



$('#Vm6SChange').click(function(){
$('.ComingSoonVM6').fadeIn();
$('.ComingSoonVM6').removeClass('ComingSoonMap');
$('.ComingSoonVM6').addClass('ComingSoonServStat');
$('.Mapinput6').fadeOut();
});



$('#Vm6Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM6').fadeOut();
$('.Mapinput6').fadeOut()
});


 



  $('#total66A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue66A= 1;
var itemValue66A=0;
var payMethod66A='none';
var total66A=0;
var totalMOBI66A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV66A').on('click', function(){

    itemValue66A = $(this).attr('value');
    qtyValue66A= 1;
    total66A= itemValue66A;
    totalMOBI66A= itemValue66A;
   //  total2= itemValue * qtyValue;
    
    


 total66A= "$"+itemValue66A;
    //Testing
 
    console.log('item value is ' + itemValue66A+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue66A);
    console.log('Total is ' + total66A);

    

   //
 $('#total66A').attr('value', total66A);

 });

};
//functions to get quantity value


 $('#sub66A').on('click', function(){

    qtyValue66A = qtyValue66A - 1;
    $('#qtyvalue66A').attr('value', qtyValue66A);

      if(qtyValue66A <=20){
      
      $('#add66A').fadeIn('fast');

    }


    if(qtyValue66A === 0){
      qtyValue66A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue66A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply66A= qtyValue66A * itemValue66A;

   decimal66A=multiply66A.toFixed(2);
   
    total66A= decimal66A;
    totalMOBI66A= decimal66A;

  
  //testing
  total66A= "$" + total66A;
  console.log('total is ' + total66A);
  
 $('#total2').attr('value', total66A);

//
 });






 $('#add66A').on('click', function(){
    qtyValue66A = qtyValue66A + 1;
    $('#qtyvalue66A').attr('value', qtyValue66A);

    //Testing
    console.log('quantity value is ' + qtyValue66A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue66A >=20){
    

    }

     if(qtyValue66A >=2){
      $('#sub66A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply66A= qtyValue66A * itemValue66A;

   decimal66A=multiply66A.toFixed(2);
   
    total66A= decimal66A;
    totalMOBI66A= decimal66A;
    console.log("quantity value * item value: " + total66A);
  
  //testing
  total66A= "$" + total66A;
  console.log('total is ' + total66A);
  console.log("quantity value * item value: " + total66A);
  
 $('#total2').attr('value', total66A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift66A').click(function(){

   $('.sendGiftVM66A, .closeGiftVM66A').fadeIn();

});




$('.confirmSendVM66A').click(function(){
    $('.sendGiftVM66A, .closeGiftVM66A').fadeOut();
    totalGiftVM66A = 0;
    $('#totalGiftVM66A').attr('value', totalGiftVM66A);

    
$('.friendsVM66A').removeClass('active');

MySelfVM66A = 0;
JeffVM66A = 0;
MariaVM66A = 0;
JohnVM66A = 0;
LeahVM66A = 0;
PaulVM66A = 0;
JennyVM66A = 0;
GokuVM66A = 0;



    $('.GiftSentVM66A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM66A').click(function(){
    $('.sendGiftVM66A, .closeGiftVM66A').fadeOut();

    totalGiftVM66A = 0;
    $('#totalGiftVM66A').attr('value', totalGiftVM66A);

$('.friendsVM66A').removeClass('active');
MySelfVM66A = 0;
JeffVM66A = 0;
MariaVM66A = 0;
JohnVM66A = 0;
LeahVM66A = 0;
PaulVM66A = 0;
JennyVM66A = 0;
GokuVM66A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM66A = 0;
JeffVM66A = 0;
MariaVM66A = 0;
JohnVM66A = 0;
LeahVM66A = 0;
PaulVM66A = 0;
JennyVM66A = 0;
GokuVM66A = 0;








$('#MySelfVM66A').click(function(){

  if (MySelfVM66A === 0){MySelfVM66A = 1;} else {MySelfVM66A=0;}

console.log(MySelfVM66A);
});






$('#JeffVM66A').click(function(){

  if (JeffVM66A === 0){JeffVM66A = 1;} else {JeffVM66A=0;}

console.log(JeffVM66A);
});


$('#MariaVM66A').click(function(){
  
  if (MariaVM66A === 0){MariaVM66A = 1;} else {MariaVM66A=0;}

console.log(MariaVM66A);
});


$('#JohnVM66A').click(function(){
  
  if (JohnVM66A === 0){JohnVM66A = 1;} else {JohnVM66A=0;}

console.log(JohnVM66A);
});


$('#LeahVM66A').click(function(){
  
  if (LeahVM66A === 0){LeahVM66A = 1;} else {LeahVM66A=0;}

console.log(LeahVM66A);
});


$('#PaulVM66A').click(function(){
  
  if (PaulVM66A === 0){PaulVM66A = 1;} else {PaulVM66A=0;}

console.log(PaulVM66A);
});



$('#JennyVM66A').click(function(){
  
  if (JennyVM66A === 0){JennyVM66A = 1;} else {JennyVM66A=0;}

console.log(JennyVM66A);
});


$('#GokuVM66A').click(function(){
  
  if (GokuVM66A === 0){GokuVM66A = 1;} else {GokuVM66A=0;}

console.log(GokuVM66A);
});















AllFriendsVM66A = JeffVM66A + MariaVM66A + JohnVM66A + LeahVM66A + PaulVM66A + JennyVM66A + GokuVM66A + MySelfVM66A; 




totalGiftVM66A = parseFloat(totalMOBI66A) * parseFloat(AllFriendsVM66A);


$('.friendsVM66A').click(function(){

AllFriendsVM66A = JeffVM66A + MariaVM66A + JohnVM66A + LeahVM66A + PaulVM66A + JennyVM66A + GokuVM66A + MySelfVM66A; 

totalGiftVM66A = parseFloat(totalMOBI66A) * parseFloat(AllFriendsVM66A);

 console.log("All friendsVM66A is =" + AllFriendsVM66A);
console.log("All friendsVM66A is =" + typeof('AllFriendsVM66A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM66A);
console.log("The totalMOBI66A =" + totalMOBI66A);
console.log("The totalGiftVM66A =" + totalMOBI66A);
console.log("The totalGiftVM66A =" + typeof('totalMOBI66A'));

$('#totalGiftVM66A').attr('value', totalGiftVM66A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod66A = $(this).attr('value');
console.log(payMethod66A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod66A = "none";
  itemValue66A = '';
  total66A = "$0.00";
  $('#total66A').attr('value', total66A);

  $('.itmV66A, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty66A').fadeOut();
qtyValue66A = 1;

});



$('.buy66AMOBI').click(function(){

 if(itemValue66A !=='0' && payMethod66A !=='none'){
$('.BuyNewVM66A').fadeIn();
}

});



$(' #Refill66A').click(function(){
if(itemValue66A !=='0' && payMethod66A !=='none'){
$('.RenewVM66A').fadeIn();
}
});


$('#CheckBalVM66A').click(function(){
  $('.CheckBalVM66A').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan66AMOBI, .selectmenu6A, .selectmenu6A2, #other66A').click(function(){
$('.qty66A').fadeOut();

});










$('.itmV66A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue66A= 1;
$('#qtyvalue66A').attr('value', qtyValue66A);

$('.qty66A').fadeIn('fast');
// $('#sub66A').fadeIn('fast');
// $('#add66A').fadeIn('fast');
// $('#qtyvalue66A').fadeIn('fast');


});



$('#ride766A, #ride3066A, #ridebt66A').click(function() {

qtyvalue66A= 1;
$('#qtyvalue66A').attr('value', qtyValue66A);
// $('.qty66A').fadeOut('fast');
// $('#sub66A').hide();
// $('#add66A').hide();
// $('#qtyvalue66A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan66A, #cbalance66A').click(function(){
$('#ride166A, #ride266A, #ride766A, #ride3066A, #ridebt66A, #cbalance66A').removeClass('active');
$('#credit66A, #cash66A, #debit66A, #other66A').removeClass('active');
// $('#sub66A').hide();
// $('#add66A').hide();
// $('#qtyvalue66A').hide();


$('#total66A').attr('value','$0.00');
});










//After selecting Payment method

$('#cash66A, #credit66A, #debit66A, #other66A').click(function(){
  payMethod66A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod66A + 'and item value is: ' +itemValue66A);

});

//Hide these PopUps

$('.seOptions66A, .seItem66A, .pmethod66A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy66A').click(function(){

  if(itemValue66A !=='0' && payMethod66A !=='none'){
   
      $('.check66A').hide();
       $('.thankRefill66A').hide();
       $('.thankBuy66A').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy66A').hide(); 
         });

        }

 });




$('#refill66A').click(function(){

   if(itemValue66A !=='0' && payMethod66A !=='none'){
   
      $('.check66A').hide();
      $('.thankBuy66A').hide();
        $('.thankRefill66A').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill66A').hide();


 });
}
});





/*

$('#buy66A').click(function(){

  if(itemValue66A =='0' && payMethod66A =='none'){
    $('.seOptions66A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue66A !=='0' && payMethod66A =='none'){

      $('.pmethod66A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue66A =='0' && payMethod66A !== 'none'){
       $('.seItem66A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check66A').hide();
       $('.thankRefill66A').hide();
       $('.thankBuy66A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill66A').click(function(){

   if(itemValue66A =='0' && payMethod66A =='none'){
    $('.seOptions66A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue66A !=='0' && payMethod66A =='none'){

      $('.pmethod66A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue66A =='0' && payMethod66A !== 'none'){
       $('.seItem66A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check66A').hide();
      $('.thankBuy66A').hide();
        $('.thankRefill66A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy66A').click(function(){
  $('.check66A').hide();
$('.thankRefill66A').hide();
 $('.thankBuy66A').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill66A').click(function(){
   $('.check66A').hide();
  $('.thankBuy66A').hide();
    $('.thankRefill66A').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check66A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride166A, #ride266A, #ride766A, #ride3066A, #ridebt66A, #cbalance66A').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel66A').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance66A').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3066A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other66A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py" >Cash');
    $('#credit66A').html('<input type="radio" name="py" >Credit');
    $('#debit66A').html('<input type="radio" name="py" >Debit');
    $('#otherp66A').html('<input type="radio" name="py" >Other');

    $('#buy66A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill66A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish66A').click(function(){
  $('#ride166A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride266A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride766A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance66A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3066A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other66A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash66A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit66A').html('<input type="radio" name="py">Credito');
    $('#debit66A').html('<input type="radio" name="py" >Debito');
    $('#otherp66A').html('<input type="radio" name="py">Otros');

    $('#buy66A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill66A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance66A').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3066A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other66A').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit66A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit66A').html(' <input type="radio" name="py">金 ');
    $('#otherp66A').html(' <input type="radio" name="py">宪章 ');

    $('#buy66A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill66A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance66A').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3066A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other66A').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit66A').html('<input type="radio" name="py">кредитов');
    $('#debit66A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp66A').html('<input type="radio" name="py">Другое');

    $('#buy66A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill66A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance66A').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3066A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other66A').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py">Espèces');
    $('#credit66A').html('<input type="radio" name="py">Crédits');
    $('#debit66A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp66A').html('<input type="radio" name="py">Autres');

  
    $('#buy66A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill66A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance66A').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3066A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt66A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other66A').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py">現金');
    $('#credit66A').html('<input type="radio" name="py">クレジット');
    $('#debit66A').html('<input type="radio" name="py">ゴールド');
    $('#otherp66A').html('<input type="radio" name="py">その他');


    $('#buy66A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill66A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance66A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3066A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other66A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py">النقدية');
    $('#credit66A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit66A').html('<input type="radio" name="py">الذهب');
    $('#otherp66A').html('<input type="radio" name="py">ادولة');


    $('#buy66A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill66A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian66A').click(function(){

  $('#ride166A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride266A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride766A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance66A').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3066A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other66A').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash66A').html ('<input type="radio" name="py">Contanti');
    $('#credit66A').html('<input type="radio" name="py">Crediti');
    $('#debit66A').html('<input type="radio" name="py">Diamanti');
    $('#otherp66A').html('<input type="radio" name="py">Altro');



    $('#buy66A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill66A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance66A').click(function(){
 $('.check66A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride166A, #ride266A, #ride766A, #ride3066A, #ridebt66A, #cbalance66A').dblclick(function(){
    $('#panel66A').fadeIn('fast');
});

    $('#panel66A').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









Vm6AscreenType = '';

///////////////////////////////////

$('#Vm6AMachinex').click(function(){

  console.log('buttons are ' + Vm6AscreenType);

Vm6AscreenType = 'Machine';

$('.UI5Abuttons').show();
$('.UI5AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

Vm6AscreenType = 'Mobile';
$('.UI5Abuttons').hide();
$('.UI5AbuttonsMOBI').show();

console.log('buttons are ' + Vm6AscreenType);

});


////////////////////////////////////
















////////////////////////DarK Color UI3///////////////////////////


$('#DARKui66Ax').click(function(){
    $('.ui66A').attr('class', 'ui66A');
    $('.ui66A').addClass(' DARKui66A');



      $('.lan66A').attr('class', 'lan66A');
      $('.lan66A').addClass('DARKlan66A');

         $('.lan66A > label, .lan66A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan66A > label, .lan66A > button').addClass('Darklan66A > lan66A');
         $('#english1').addClass('active');
/////////////

      $('.itm66A').attr('class', 'itm66A');
      $('.itm66A').addClass('DARKitm66A');


           $('.itm66A > label, .itm66A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm66A > label, .itm66A > button').addClass('itm66A > label');

////////////



      $('.qty66A').attr('class', 'qty66A');
                $('#sub66A').attr('class', 'btn btn-primary btn-lg sub66A');
                $('#add66A').attr('class', 'btn btn-primary btn-lg add66A');
                 $('#qtyvalue66A').attr('class', 'qtyvalue66A');





///////////

      $('.py66A').attr('class', 'py66A');
      $('.py66A').addClass('DARKpy66A');


           $('.py66A > label, .py66A > button').attr('class', 'btn btn-default btn-lg')
           $('.py66A > label, .py66A > button').addClass('DARKpy66A > label');

/////////////      

      $('.fin66A').attr('class', 'fin66A');
      $('.fin66A').addClass('DARKfin66A');


          $('.finB66A').attr('class', 'btn btn-default btn-lg finB66A');
          $('.finB66A').addClass('DARKfinB66A');


             $('#total66A').attr('class', 'total66A');
             $('#total66A').addClass('DARKtotal66A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui66Ax').click(function(){
    $('.ui66A').attr('class', 'ui66A');
    



      $('.lan66A').attr('class', 'lan66A');
      

         $('.lan66A > label, .lan66A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm66A').attr('class', 'itm66A');
      


           $('.itm66A > label, .itm66A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty66A').attr('class', 'qty66A');
                $('#sub66A').attr('class', 'btn btn-primary btn-lg sub66A');
                $('#add66A').attr('class', 'btn btn-primary btn-lg add66A');
                $('#qtyvalue66A').attr('class', 'qtyvalue66A');





///////////

      $('.py66A').attr('class', 'py66A');
      


           $('.py66A > label, .py66A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin66A').attr('class', 'fin66A');
     


          $('.finB66A').attr('class', 'btn btn-default btn-lg finB66A');
          


             $('#total66A').attr('class', 'total66A');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui66AMOBIx').click(function(){
    $('.ui66A').attr('class', 'ui66A');
    $('.ui66A').addClass(' DARKui66A');



      $('.lan66A').attr('class', 'lan66A');
      $('.lan66A').addClass('DARKlan66A');

         $('.lan66A > label, .lan66A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan66A > label, .lan66A > button').addClass('Darklan66A > lan66A');
         $('#english1').addClass('active');
/////////////

      $('.itm66A').attr('class', 'itm66A');
      $('.itm66A').addClass('DARKitm66A');


           $('.itm66A > label, .itm66A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm66A > label, .itm66A > button').addClass('itm66A > label');

////////////



      $('.qty66A').attr('class', 'qty66A');
                $('#sub66A').attr('class', 'btn btn-primary btn-lg sub66A');
                $('#add66A').attr('class', 'btn btn-primary btn-lg add66A');
                 $('#qtyvalue66A').attr('class', 'qtyvalue66A');





///////////

      $('.py66A').attr('class', 'py66A');
      $('.py66A').addClass('DARKpy66A');


           $('.py66A > label, .py66A > button').attr('class', 'btn btn-default btn-lg')
           $('.py66A > label, .py66A > button').addClass('DARKpy66A > label');

/////////////      

      $('.fin66A').attr('class', 'fin66A');
      $('.fin66A').addClass('DARKfin66A');


          $('.finB66A').attr('class', 'btn btn-default btn-lg finB66A');
          $('.finB66A').addClass('DARKfinB66A');


             $('#total66A').attr('class', 'total66A');
             $('#total66A').addClass('DARKtotal66A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui66AMOBIx').click(function(){
    $('.ui66A').attr('class', 'ui66A');
    



      $('.lan66A').attr('class', 'lan66A');
      

         $('.lan66A > label, .lan66A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm66A').attr('class', 'itm66A');
      


           $('.itm66A > label, .itm66A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty66A').attr('class', 'qty66A');
                $('#sub66A').attr('class', 'btn btn-primary btn-lg sub66A');
                $('#add66A').attr('class', 'btn btn-primary btn-lg add66A');
                $('#qtyvalue66A').attr('class', 'qtyvalue66A');





///////////

      $('.py66A').attr('class', 'py66A');
      


           $('.py66A > label, .py66A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin66A').attr('class', 'fin66A');
     


          $('.finB66A').attr('class', 'btn btn-default btn-lg finB66A');
          


             $('#total66A').attr('class', 'total66A');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI6AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui66A').addClass('ui66AMOBI uiXXMOBI');


$('.lan66A').addClass('lan66AMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm66A').addClass('itm66AMOBI');

$('.DropItmMenu66A').addClass('DropItmMenu66AMOBI'); 





$('.qty66A').addClass('qty66AMOBI'); 

$('.sub66A').addClass('sub66AMOBI'); 





$('.add66A').addClass('add66AMOBI');

$('.itmV66A').addClass('itmV66AMOBI');  



$('.qtyvalue66A').addClass('qtyvalue66AMOBI'); 



$('.py66A').addClass('py66AMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin66A').addClass('fin66AMOBI'); 





$('#total66A').addClass('total66AMOBI'); 





$('#refill66A, #buy66A').hide();

$('.refill66AMOBI, .buy66AMOBI').show();


$('#ride4066A').hide();



$('#CheckBalVM66A').show();
$('#cbalance66A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm6AMachinex, .UI6Abuttonsx > button').click(function(){



$('.ui66A').removeClass('ui66AMOBI uiXXMOBI');


$('.lan66A').removeClass('lan66AMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm66A').removeClass('itm66AMOBI'); 

$('.itmV66A').removeClass('itmV66AMOBI'); 

$('.DropItmMenu66A').removeClass('DropItmMenu66AMOBI'); 



$('.qty66A').removeClass('qty66AMOBI'); 

$('.sub66A').removeClass('sub66AMOBI'); 




$('.add66A').removeClass('add66AMOBI'); 



$('.qtyvalue66A').removeClass('qtyvalue66AMOBI'); 



$('.py66A').removeClass('py66AMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin66A').removeClass('fin66AMOBI'); 


$('#total66A').removeClass('total66AMOBI'); 



$('#refill66A, #buy66A').show();

$('.refill66AMOBI, .buy66AMOBI').hide();

$('#ride4066A').show();



$('#CheckBalVM66A').hide();
$('#cbalance66A').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui66A').addClass('ui66AMOBI uiXXMOBI');


$('.lan66A').addClass('lan66AMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm66A').addClass('itm66AMOBI');

$('.itmV66A').addClass('itmV66AMOBI');  





$('.qty66A').addClass('qty66AMOBI'); 

$('.sub66A').addClass('sub66AMOBI'); 





$('.add66A').addClass('add66AMOBI'); 



$('.qtyvalue66A').addClass('qtyvalue66AMOBI'); 



$('.py66A').addClass('py66AMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin66A').addClass('fin66AMOBI'); 





$('#total66A').addClass('total66AMOBI'); 





$('#refill66A, #buy66A').hide();

$('.refill66AMOBI, .buy66AMOBI').show();


$('#ride4066A').hide();



$('#CheckBalVM66A').show();
$('#cbalance66A').hide();