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



$('#Vm6Buy, #Vm6Machine').click(function(){
$('.ComingSoonVM6').fadeOut();
$('.Mapinput6').fadeOut()
});


 



  $('#total99d').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99d= 1;
var itemValue99d=0;
var payMethod99d='none';
var total99d=0;
var totalMOBI99d=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99d').on('click', function(){

    itemValue99d = $(this).attr('value');
    qtyValue99d= 1;
    total99d= itemValue99d;
    totalMOBI99d= itemValue99d;
   //  total2= itemValue * qtyValue;
    
    


 total99d= "$"+itemValue99d;
    //Testing
 
    console.log('item value is ' + itemValue99d+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99d);
    console.log('Total is ' + total99d);

    

   //
 $('#total99d').attr('value', total99d);

 });

};
//functions to get quantity value


 $('#sub99d').on('click', function(){

    qtyValue99d = qtyValue99d - 1;
    $('#qtyvalue99d').attr('value', qtyValue99d);

      if(qtyValue99d <=20){
      
      $('#add99d').fadeIn('fast');

    }


    if(qtyValue99d === 0){
      qtyValue99d = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99d+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99d= qtyValue99d * itemValue99d;

   decimal99d=multiply99d.toFixed(2);
   
    total99d= decimal99d;
    totalMOBI99d= decimal99d;

  
  //testing
  total99d= "$" + total99d;
  console.log('total is ' + total99d);
  
 $('#total99d').attr('value', total99d);

//
 });






 $('#add99d').on('click', function(){
    qtyValue99d = qtyValue99d + 1;
    $('#qtyvalue99d').attr('value', qtyValue99d);

    //Testing
    console.log('quantity value is ' + qtyValue99d+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99d >=20){
    

    }

     if(qtyValue99d >=2){
      $('#sub99d').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99d= qtyValue99d * itemValue99d;

   decimal99d=multiply99d.toFixed(2);
   
    total99d= decimal99d;
    totalMOBI99d= decimal99d;
    console.log("quantity value * item value: " + total99d);
  
  //testing
  total99d= "$" + total99d;
  console.log('total is ' + total99d);
  console.log("quantity value * item value: " + total99d);
  
 $('#total99d').attr('value', total99d);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99d').click(function(){

   $('.sendGiftVM99d, .closeGiftVM99d').fadeIn();

});




$('.confirmSendVM99d').click(function(){
    $('.sendGiftVM99d, .closeGiftVM99d').fadeOut();
    totalGiftVM99d = 0;
    $('#totalGiftVM99d').attr('value', totalGiftVM99d);

    
$('.friendsVM99d').removeClass('active');

MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;



    $('.GiftSentVM99d').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99d').click(function(){
    $('.sendGiftVM99d, .closeGiftVM99d').fadeOut();

    totalGiftVM99d = 0;
    $('#totalGiftVM99d').attr('value', totalGiftVM99d);

$('.friendsVM99d').removeClass('active');
MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;








$('#MySelfVM99d').click(function(){

  if (MySelfVM99d === 0){MySelfVM99d = 1;} else {MySelfVM99d=0;}

console.log(MySelfVM99d);
});






$('#JeffVM99d').click(function(){

  if (JeffVM99d === 0){JeffVM99d = 1;} else {JeffVM99d=0;}

console.log(JeffVM99d);
});


$('#MariaVM99d').click(function(){
  
  if (MariaVM99d === 0){MariaVM99d = 1;} else {MariaVM99d=0;}

console.log(MariaVM99d);
});


$('#JohnVM99d').click(function(){
  
  if (JohnVM99d === 0){JohnVM99d = 1;} else {JohnVM99d=0;}

console.log(JohnVM99d);
});


$('#LeahVM99d').click(function(){
  
  if (LeahVM99d === 0){LeahVM99d = 1;} else {LeahVM99d=0;}

console.log(LeahVM99d);
});


$('#PaulVM99d').click(function(){
  
  if (PaulVM99d === 0){PaulVM99d = 1;} else {PaulVM99d=0;}

console.log(PaulVM99d);
});



$('#JennyVM99d').click(function(){
  
  if (JennyVM99d === 0){JennyVM99d = 1;} else {JennyVM99d=0;}

console.log(JennyVM99d);
});


$('#GokuVM99d').click(function(){
  
  if (GokuVM99d === 0){GokuVM99d = 1;} else {GokuVM99d=0;}

console.log(GokuVM99d);
});















AllFriendsVM99d = JeffVM99d + MariaVM99d + JohnVM99d + LeahVM99d + PaulVM99d + JennyVM99d + GokuVM99d + MySelfVM99d; 




totalGiftVM99d = parseFloat(totalMOBI99d) * parseFloat(AllFriendsVM99d);


$('.friendsVM99d').click(function(){

AllFriendsVM99d = JeffVM99d + MariaVM99d + JohnVM99d + LeahVM99d + PaulVM99d + JennyVM99d + GokuVM99d + MySelfVM99d; 

totalGiftVM99d = parseFloat(totalMOBI99d) * parseFloat(AllFriendsVM99d);

 console.log("All friendsVM99d is =" + AllFriendsVM99d);
console.log("All friendsVM99d is =" + typeof('AllFriendsVM99d'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99d);
console.log("The totalMOBI99d =" + totalMOBI99d);
console.log("The totalGiftVM99d =" + totalMOBI99d);
console.log("The totalGiftVM99d =" + typeof('totalMOBI99d'));

$('#totalGiftVM99d').attr('value', totalGiftVM99d);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99d = $(this).attr('value');
console.log(payMethod99d);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99d = "none";
  itemValue99d = '';
  total99d = "$0.00";
  $('#total99d').attr('value', total99d);

  $('.itmV99d, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99d').fadeOut();
qtyValue99d = 1;

});



$('.buy99dMOBI').click(function(){

 if(itemValue99d !=='0' && payMethod99d !=='none'){
$('.BuyNewVM99d').fadeIn();
}

});



$(' #Refill99d').click(function(){
if(itemValue99d !=='0' && payMethod99d !=='none'){
$('.RenewVM99d').fadeIn();
}
});


$('#CheckBalVM99d').click(function(){
  $('.CheckBalVM99d').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99dMOBI, .selectmenu9A, .selectmenu9A2, #other99d').click(function(){
$('.qty99d').fadeOut();

});










$('.itmV99d').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99d= 1;
$('#qtyvalue99d').attr('value', qtyValue99d);

$('.qty99d').fadeIn('fast');
// $('#sub99d').fadeIn('fast');
// $('#add99d').fadeIn('fast');
// $('#qtyvalue99d').fadeIn('fast');


});



$('#ride799d, #ride3099d, #ridebt99d').click(function() {

qtyvalue99d= 1;
$('#qtyvalue99d').attr('value', qtyValue99d);
// $('.qty99d').fadeOut('fast');
// $('#sub99d').hide();
// $('#add99d').hide();
// $('#qtyvalue99d').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99d, #cbalance99d').click(function(){
$('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').removeClass('active');
$('#credit99d, #cash99d, #debit99d, #other99d').removeClass('active');
// $('#sub99d').hide();
// $('#add99d').hide();
// $('#qtyvalue99d').hide();


$('#total99d').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99d, #credit99d, #debit99d, #other99d').click(function(){
  payMethod99d= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99d + 'and item value is: ' +itemValue99d);

});

//Hide these PopUps

$('.seOptions99d, .seItem99d, .pmethod99d').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99d').click(function(){

  if(itemValue99d !=='0' && payMethod99d !=='none'){
   
      $('.check99d').hide();
       $('.thankRefill99d').hide();
       $('.thankBuy99d').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99d').hide(); 
         });

        }

 });




$('#refill99d').click(function(){

   if(itemValue99d !=='0' && payMethod99d !=='none'){
   
      $('.check99d').hide();
      $('.thankBuy99d').hide();
        $('.thankRefill99d').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99d').hide();


 });
}
});





/*

$('#buy99d').click(function(){

  if(itemValue99d =='0' && payMethod99d =='none'){
    $('.seOptions99d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99d !=='0' && payMethod99d =='none'){

      $('.pmethod99d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99d =='0' && payMethod99d !== 'none'){
       $('.seItem99d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99d').hide();
       $('.thankRefill99d').hide();
       $('.thankBuy99d').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99d').click(function(){

   if(itemValue99d =='0' && payMethod99d =='none'){
    $('.seOptions99d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99d !=='0' && payMethod99d =='none'){

      $('.pmethod99d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99d =='0' && payMethod99d !== 'none'){
       $('.seItem99d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99d').hide();
      $('.thankBuy99d').hide();
        $('.thankRefill99d').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99d').click(function(){
  $('.check99d').hide();
$('.thankRefill99d').hide();
 $('.thankBuy99d').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99d').click(function(){
   $('.check99d').hide();
  $('.thankBuy99d').hide();
    $('.thankRefill99d').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99d').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99d').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99d').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py" >Cash');
    $('#credit99d').html('<input type="radio" name="py" >Credit');
    $('#debit99d').html('<input type="radio" name="py" >Debit');
    $('#otherp99d').html('<input type="radio" name="py" >Other');

    $('#buy99d').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99d').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99d').click(function(){
  $('#ride199d').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299d').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799d').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99d').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099d').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99d').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99d').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99d').html('<input type="radio" name="py">Credito');
    $('#debit99d').html('<input type="radio" name="py" >Debito');
    $('#otherp99d').html('<input type="radio" name="py">Otros');

    $('#buy99d').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99d').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099d').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99d').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99d').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99d').html(' <input type="radio" name="py">金 ');
    $('#otherp99d').html(' <input type="radio" name="py">宪章 ');

    $('#buy99d').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99d').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099d').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99d').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99d').html('<input type="radio" name="py">кредитов');
    $('#debit99d').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99d').html('<input type="radio" name="py">Другое');

    $('#buy99d').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99d').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99d').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">Espèces');
    $('#credit99d').html('<input type="radio" name="py">Crédits');
    $('#debit99d').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99d').html('<input type="radio" name="py">Autres');

  
    $('#buy99d').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99d').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99d').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099d').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99d').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99d').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">現金');
    $('#credit99d').html('<input type="radio" name="py">クレジット');
    $('#debit99d').html('<input type="radio" name="py">ゴールド');
    $('#otherp99d').html('<input type="radio" name="py">その他');


    $('#buy99d').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99d').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99d').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099d').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99d').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">النقدية');
    $('#credit99d').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99d').html('<input type="radio" name="py">الذهب');
    $('#otherp99d').html('<input type="radio" name="py">ادولة');


    $('#buy99d').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99d').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99d').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">Contanti');
    $('#credit99d').html('<input type="radio" name="py">Crediti');
    $('#debit99d').html('<input type="radio" name="py">Diamanti');
    $('#otherp99d').html('<input type="radio" name="py">Altro');



    $('#buy99d').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99d').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99d').click(function(){
 $('.check99d').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').dblclick(function(){
    $('#panel99d').fadeIn('fast');
});

    $('#panel99d').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









Vm9AscreenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + Vm9AscreenType);

Vm9AscreenType = 'Machine';

$('.UI5Abuttons').show();
$('.UI5AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

Vm9AscreenType = 'Mobile';
$('.UI5Abuttons').hide();
$('.UI5AbuttonsMOBI').show();

console.log('buttons are ' + Vm9AscreenType);

});


////////////////////////////////////
















////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99dx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    $('.ui99d').addClass(' DARKui99d');



      $('.lan99d').attr('class', 'lan99d');
      $('.lan99d').addClass('DARKlan99d');

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99d > label, .lan99d > button').addClass('Darklan99d > lan99d');
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      $('.itm99d').addClass('DARKitm99d');


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99d > label, .itm99d > button').addClass('itm99d > label');

////////////



      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                 $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      $('.py99d').addClass('DARKpy99d');


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           $('.py99d > label, .py99d > button').addClass('DARKpy99d > label');

/////////////      

      $('.fin99d').attr('class', 'fin99d');
      $('.fin99d').addClass('DARKfin99d');


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          $('.finB99d').addClass('DARKfinB99d');


             $('#total99d').attr('class', 'total99d');
             $('#total99d').addClass('DARKtotal99d');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99dx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    



      $('.lan99d').attr('class', 'lan99d');
      

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99d').attr('class', 'fin99d');
     


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          


             $('#total99d').attr('class', 'total99d');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99dMOBIx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    $('.ui99d').addClass(' DARKui99d');



      $('.lan99d').attr('class', 'lan99d');
      $('.lan99d').addClass('DARKlan99d');

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99d > label, .lan99d > button').addClass('Darklan99d > lan99d');
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      $('.itm99d').addClass('DARKitm99d');


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99d > label, .itm99d > button').addClass('itm99d > label');

////////////



      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                 $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      $('.py99d').addClass('DARKpy99d');


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           $('.py99d > label, .py99d > button').addClass('DARKpy99d > label');

/////////////      

      $('.fin99d').attr('class', 'fin99d');
      $('.fin99d').addClass('DARKfin99d');


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          $('.finB99d').addClass('DARKfinB99d');


             $('#total99d').attr('class', 'total99d');
             $('#total99d').addClass('DARKtotal99d');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99dMOBIx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    



      $('.lan99d').attr('class', 'lan99d');
      

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99d').attr('class', 'fin99d');
     


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          


             $('#total99d').attr('class', 'total99d');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui99d').addClass('ui99dMOBI uiXXMOBI');


$('.lan99d').addClass('lan99dMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99d').addClass('itm99dMOBI');
$('.itmV99d').addClass('itmV99dMOBI');


$('.DropItmMenu99d').addClass('DropItmMenu99dMOBI'); 





$('.qty99d').addClass('qty99dMOBI'); 

$('.sub99d').addClass('sub99dMOBI'); 





$('.add99d').addClass('add99dMOBI'); 



$('.qtyvalue99d').addClass('qtyvalue99dMOBI'); 



$('.py99d').addClass('py99dMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99d').addClass('fin99dMOBI'); 





$('#total99d').addClass('total99dMOBI'); 





$('#refill99d, #buy99d').hide();

$('.refill99dMOBI, .buy99dMOBI').show();


$('#ride4099d').hide();



$('#CheckBalVM99d').show();
$('#cbalance99d').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99d').removeClass('ui99dMOBI uiXXMOBI');


$('.lan99d').removeClass('lan99dMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99d').removeClass('itm99dMOBI'); 


$('.itmV99d').removeClass('itmV99dMOBI');

$('.DropItmMenu99d').removeClass('DropItmMenu99dMOBI'); 



$('.qty99d').removeClass('qty99dMOBI'); 

$('.sub99d').removeClass('sub99dMOBI'); 




$('.add99d').removeClass('add99dMOBI'); 



$('.qtyvalue99d').removeClass('qtyvalue99dMOBI'); 



$('.py99d').removeClass('py99dMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99d').removeClass('fin99dMOBI'); 


$('#total99d').removeClass('total99dMOBI'); 



$('#refill99d, #buy99d').show();

$('.refill99dMOBI, .buy99dMOBI').hide();

$('#ride4099d').show();



$('#CheckBalVM99d').hide();
$('#cbalance99d').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99d').addClass('ui99dMOBI uiXXMOBI');


$('.lan99d').addClass('lan99dMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99d').addClass('itm99dMOBI');

$('.itmV99d').addClass('itmV99dMOBI'); 





$('.qty99d').addClass('qty99dMOBI'); 

$('.sub99d').addClass('sub99dMOBI'); 





$('.add99d').addClass('add99dMOBI'); 



$('.qtyvalue99d').addClass('qtyvalue99dMOBI'); 



$('.py99d').addClass('py99dMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99d').addClass('fin99dMOBI'); 





$('#total99d').addClass('total99dMOBI'); 





$('#refill99d, #buy99d').hide();

$('.refill99dMOBI, .buy99dMOBI').show();


$('#ride4099d').hide();



$('#CheckBalVM99d').show();
$('#cbalance99d').hide();$(document).ready(function(){





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



$('#Vm6Buy, #Vm6Machine').click(function(){
$('.ComingSoonVM6').fadeOut();
$('.Mapinput6').fadeOut()
});


 



  $('#total99d').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99d= 1;
var itemValue99d=0;
var payMethod99d='none';
var total99d=0;
var totalMOBI99d=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99d').on('click', function(){

    itemValue99d = $(this).attr('value');
    qtyValue99d= 1;
    total99d= itemValue99d;
    totalMOBI99d= itemValue99d;
   //  total2= itemValue * qtyValue;
    
    


 total99d= "$"+itemValue99d;
    //Testing
 
    console.log('item value is ' + itemValue99d+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99d);
    console.log('Total is ' + total99d);

    

   //
 $('#total99d').attr('value', total99d);

 });

};
//functions to get quantity value


 $('#sub99d').on('click', function(){

    qtyValue99d = qtyValue99d - 1;
    $('#qtyvalue99d').attr('value', qtyValue99d);

      if(qtyValue99d <=20){
      
      $('#add99d').fadeIn('fast');

    }


    if(qtyValue99d === 0){
      qtyValue99d = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99d+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99d= qtyValue99d * itemValue99d;

   decimal99d=multiply99d.toFixed(2);
   
    total99d= decimal99d;
    totalMOBI99d= decimal99d;

  
  //testing
  total99d= "$" + total99d;
  console.log('total is ' + total99d);
  
 $('#total99d').attr('value', total99d);

//
 });






 $('#add99d').on('click', function(){
    qtyValue99d = qtyValue99d + 1;
    $('#qtyvalue99d').attr('value', qtyValue99d);

    //Testing
    console.log('quantity value is ' + qtyValue99d+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99d >=20){
    

    }

     if(qtyValue99d >=2){
      $('#sub99d').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99d= qtyValue99d * itemValue99d;

   decimal99d=multiply99d.toFixed(2);
   
    total99d= decimal99d;
    totalMOBI99d= decimal99d;
    console.log("quantity value * item value: " + total99d);
  
  //testing
  total99d= "$" + total99d;
  console.log('total is ' + total99d);
  console.log("quantity value * item value: " + total99d);
  
 $('#total99d').attr('value', total99d);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99d').click(function(){

   $('.sendGiftVM99d, .closeGiftVM99d').fadeIn();

});




$('.confirmSendVM99d').click(function(){
    $('.sendGiftVM99d, .closeGiftVM99d').fadeOut();
    totalGiftVM99d = 0;
    $('#totalGiftVM99d').attr('value', totalGiftVM99d);

    
$('.friendsVM99d').removeClass('active');

MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;



    $('.GiftSentVM99d').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99d').click(function(){
    $('.sendGiftVM99d, .closeGiftVM99d').fadeOut();

    totalGiftVM99d = 0;
    $('#totalGiftVM99d').attr('value', totalGiftVM99d);

$('.friendsVM99d').removeClass('active');
MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99d = 0;
JeffVM99d = 0;
MariaVM99d = 0;
JohnVM99d = 0;
LeahVM99d = 0;
PaulVM99d = 0;
JennyVM99d = 0;
GokuVM99d = 0;








$('#MySelfVM99d').click(function(){

  if (MySelfVM99d === 0){MySelfVM99d = 1;} else {MySelfVM99d=0;}

console.log(MySelfVM99d);
});






$('#JeffVM99d').click(function(){

  if (JeffVM99d === 0){JeffVM99d = 1;} else {JeffVM99d=0;}

console.log(JeffVM99d);
});


$('#MariaVM99d').click(function(){
  
  if (MariaVM99d === 0){MariaVM99d = 1;} else {MariaVM99d=0;}

console.log(MariaVM99d);
});


$('#JohnVM99d').click(function(){
  
  if (JohnVM99d === 0){JohnVM99d = 1;} else {JohnVM99d=0;}

console.log(JohnVM99d);
});


$('#LeahVM99d').click(function(){
  
  if (LeahVM99d === 0){LeahVM99d = 1;} else {LeahVM99d=0;}

console.log(LeahVM99d);
});


$('#PaulVM99d').click(function(){
  
  if (PaulVM99d === 0){PaulVM99d = 1;} else {PaulVM99d=0;}

console.log(PaulVM99d);
});



$('#JennyVM99d').click(function(){
  
  if (JennyVM99d === 0){JennyVM99d = 1;} else {JennyVM99d=0;}

console.log(JennyVM99d);
});


$('#GokuVM99d').click(function(){
  
  if (GokuVM99d === 0){GokuVM99d = 1;} else {GokuVM99d=0;}

console.log(GokuVM99d);
});















AllFriendsVM99d = JeffVM99d + MariaVM99d + JohnVM99d + LeahVM99d + PaulVM99d + JennyVM99d + GokuVM99d + MySelfVM99d; 




totalGiftVM99d = parseFloat(totalMOBI99d) * parseFloat(AllFriendsVM99d);


$('.friendsVM99d').click(function(){

AllFriendsVM99d = JeffVM99d + MariaVM99d + JohnVM99d + LeahVM99d + PaulVM99d + JennyVM99d + GokuVM99d + MySelfVM99d; 

totalGiftVM99d = parseFloat(totalMOBI99d) * parseFloat(AllFriendsVM99d);

 console.log("All friendsVM99d is =" + AllFriendsVM99d);
console.log("All friendsVM99d is =" + typeof('AllFriendsVM99d'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99d);
console.log("The totalMOBI99d =" + totalMOBI99d);
console.log("The totalGiftVM99d =" + totalMOBI99d);
console.log("The totalGiftVM99d =" + typeof('totalMOBI99d'));

$('#totalGiftVM99d').attr('value', totalGiftVM99d);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99d = $(this).attr('value');
console.log(payMethod99d);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99d = "none";
  itemValue99d = '';
  total99d = "$0.00";
  $('#total99d').attr('value', total99d);

  $('.itmV99d, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99d').fadeOut();
qtyValue99d = 1;

});



$('.buy99dMOBI').click(function(){

 if(itemValue99d !=='0' && payMethod99d !=='none'){
$('.BuyNewVM99d').fadeIn();
}

});



$(' #Refill99d').click(function(){
if(itemValue99d !=='0' && payMethod99d !=='none'){
$('.RenewVM99d').fadeIn();
}
});


$('#CheckBalVM99d').click(function(){
  $('.CheckBalVM99d').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99dMOBI, .selectmenu9A, .selectmenu9A2, #other99d').click(function(){
$('.qty99d').fadeOut();

});










$('.itmV99d').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99d= 1;
$('#qtyvalue99d').attr('value', qtyValue99d);

$('.qty99d').fadeIn('fast');
// $('#sub99d').fadeIn('fast');
// $('#add99d').fadeIn('fast');
// $('#qtyvalue99d').fadeIn('fast');


});



$('#ride799d, #ride3099d, #ridebt99d').click(function() {

qtyvalue99d= 1;
$('#qtyvalue99d').attr('value', qtyValue99d);
// $('.qty99d').fadeOut('fast');
// $('#sub99d').hide();
// $('#add99d').hide();
// $('#qtyvalue99d').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99d, #cbalance99d').click(function(){
$('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').removeClass('active');
$('#credit99d, #cash99d, #debit99d, #other99d').removeClass('active');
// $('#sub99d').hide();
// $('#add99d').hide();
// $('#qtyvalue99d').hide();


$('#total99d').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99d, #credit99d, #debit99d, #other99d').click(function(){
  payMethod99d= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99d + 'and item value is: ' +itemValue99d);

});

//Hide these PopUps

$('.seOptions99d, .seItem99d, .pmethod99d').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99d').click(function(){

  if(itemValue99d !=='0' && payMethod99d !=='none'){
   
      $('.check99d').hide();
       $('.thankRefill99d').hide();
       $('.thankBuy99d').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99d').hide(); 
         });

        }

 });




$('#refill99d').click(function(){

   if(itemValue99d !=='0' && payMethod99d !=='none'){
   
      $('.check99d').hide();
      $('.thankBuy99d').hide();
        $('.thankRefill99d').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99d').hide();


 });
}
});





/*

$('#buy99d').click(function(){

  if(itemValue99d =='0' && payMethod99d =='none'){
    $('.seOptions99d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99d !=='0' && payMethod99d =='none'){

      $('.pmethod99d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99d =='0' && payMethod99d !== 'none'){
       $('.seItem99d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99d').hide();
       $('.thankRefill99d').hide();
       $('.thankBuy99d').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99d').click(function(){

   if(itemValue99d =='0' && payMethod99d =='none'){
    $('.seOptions99d').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99d !=='0' && payMethod99d =='none'){

      $('.pmethod99d').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99d =='0' && payMethod99d !== 'none'){
       $('.seItem99d').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99d').hide();
      $('.thankBuy99d').hide();
        $('.thankRefill99d').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99d').click(function(){
  $('.check99d').hide();
$('.thankRefill99d').hide();
 $('.thankBuy99d').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99d').click(function(){
   $('.check99d').hide();
  $('.thankBuy99d').hide();
    $('.thankRefill99d').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99d').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99d').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99d').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py" >Cash');
    $('#credit99d').html('<input type="radio" name="py" >Credit');
    $('#debit99d').html('<input type="radio" name="py" >Debit');
    $('#otherp99d').html('<input type="radio" name="py" >Other');

    $('#buy99d').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99d').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99d').click(function(){
  $('#ride199d').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299d').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799d').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99d').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099d').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99d').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99d').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99d').html('<input type="radio" name="py">Credito');
    $('#debit99d').html('<input type="radio" name="py" >Debito');
    $('#otherp99d').html('<input type="radio" name="py">Otros');

    $('#buy99d').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99d').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099d').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99d').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99d').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99d').html(' <input type="radio" name="py">金 ');
    $('#otherp99d').html(' <input type="radio" name="py">宪章 ');

    $('#buy99d').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99d').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099d').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99d').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99d').html('<input type="radio" name="py">кредитов');
    $('#debit99d').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99d').html('<input type="radio" name="py">Другое');

    $('#buy99d').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99d').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99d').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">Espèces');
    $('#credit99d').html('<input type="radio" name="py">Crédits');
    $('#debit99d').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99d').html('<input type="radio" name="py">Autres');

  
    $('#buy99d').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99d').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99d').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099d').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99d').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99d').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">現金');
    $('#credit99d').html('<input type="radio" name="py">クレジット');
    $('#debit99d').html('<input type="radio" name="py">ゴールド');
    $('#otherp99d').html('<input type="radio" name="py">その他');


    $('#buy99d').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99d').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99d').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099d').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99d').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">النقدية');
    $('#credit99d').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99d').html('<input type="radio" name="py">الذهب');
    $('#otherp99d').html('<input type="radio" name="py">ادولة');


    $('#buy99d').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99d').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99d').click(function(){

  $('#ride199d').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299d').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799d').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99d').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099d').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99d').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99d').html ('<input type="radio" name="py">Contanti');
    $('#credit99d').html('<input type="radio" name="py">Crediti');
    $('#debit99d').html('<input type="radio" name="py">Diamanti');
    $('#otherp99d').html('<input type="radio" name="py">Altro');



    $('#buy99d').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99d').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99d').click(function(){
 $('.check99d').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199d, #ride299d, #ride799d, #ride3099d, #ridebt99d, #cbalance99d').dblclick(function(){
    $('#panel99d').fadeIn('fast');
});

    $('#panel99d').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









Vm9AscreenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + Vm9AscreenType);

Vm9AscreenType = 'Machine';

$('.UI5Abuttons').show();
$('.UI5AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

Vm9AscreenType = 'Mobile';
$('.UI5Abuttons').hide();
$('.UI5AbuttonsMOBI').show();

console.log('buttons are ' + Vm9AscreenType);

});


////////////////////////////////////
















////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99dx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    $('.ui99d').addClass(' DARKui99d');



      $('.lan99d').attr('class', 'lan99d');
      $('.lan99d').addClass('DARKlan99d');

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99d > label, .lan99d > button').addClass('Darklan99d > lan99d');
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      $('.itm99d').addClass('DARKitm99d');


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99d > label, .itm99d > button').addClass('itm99d > label');

////////////



      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                 $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      $('.py99d').addClass('DARKpy99d');


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           $('.py99d > label, .py99d > button').addClass('DARKpy99d > label');

/////////////      

      $('.fin99d').attr('class', 'fin99d');
      $('.fin99d').addClass('DARKfin99d');


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          $('.finB99d').addClass('DARKfinB99d');


             $('#total99d').attr('class', 'total99d');
             $('#total99d').addClass('DARKtotal99d');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99dx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    



      $('.lan99d').attr('class', 'lan99d');
      

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99d').attr('class', 'fin99d');
     


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          


             $('#total99d').attr('class', 'total99d');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99dMOBIx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    $('.ui99d').addClass(' DARKui99d');



      $('.lan99d').attr('class', 'lan99d');
      $('.lan99d').addClass('DARKlan99d');

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99d > label, .lan99d > button').addClass('Darklan99d > lan99d');
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      $('.itm99d').addClass('DARKitm99d');


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99d > label, .itm99d > button').addClass('itm99d > label');

////////////



      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                 $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      $('.py99d').addClass('DARKpy99d');


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           $('.py99d > label, .py99d > button').addClass('DARKpy99d > label');

/////////////      

      $('.fin99d').attr('class', 'fin99d');
      $('.fin99d').addClass('DARKfin99d');


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          $('.finB99d').addClass('DARKfinB99d');


             $('#total99d').attr('class', 'total99d');
             $('#total99d').addClass('DARKtotal99d');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99dMOBIx').click(function(){
    $('.ui99d').attr('class', 'ui99d uiXX');
    



      $('.lan99d').attr('class', 'lan99d');
      

         $('.lan99d > label, .lan99d > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99d').attr('class', 'itm99d');
      


           $('.itm99d > label, .itm99d > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99d').attr('class', 'qty99d');
                $('#sub99d').attr('class', 'btn btn-primary btn-lg sub99d');
                $('#add99d').attr('class', 'btn btn-primary btn-lg add99d');
                $('#qtyvalue99d').attr('class', 'qtyvalue99d');





///////////

      $('.py99d').attr('class', 'py99d');
      


           $('.py99d > label, .py99d > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99d').attr('class', 'fin99d');
     


          $('.finB99d').attr('class', 'btn btn-default btn-lg finB99d');
          


             $('#total99d').attr('class', 'total99d');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4, .VmFins').click(function(){




$('.ui99d').addClass('ui99dMOBI uiXXMOBI');


$('.lan99d').addClass('lan99dMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99d').addClass('itm99dMOBI');
$('.itmV99d').addClass('itmV99dMOBI');


$('.DropItmMenu99d').addClass('DropItmMenu99dMOBI'); 





$('.qty99d').addClass('qty99dMOBI'); 

$('.sub99d').addClass('sub99dMOBI'); 





$('.add99d').addClass('add99dMOBI'); 



$('.qtyvalue99d').addClass('qtyvalue99dMOBI'); 



$('.py99d').addClass('py99dMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99d').addClass('fin99dMOBI'); 





$('#total99d').addClass('total99dMOBI'); 





$('#refill99d, #buy99d').hide();

$('.refill99dMOBI, .buy99dMOBI').show();


$('#ride4099d').hide();



$('#CheckBalVM99d').show();
$('#cbalance99d').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99d').removeClass('ui99dMOBI uiXXMOBI');


$('.lan99d').removeClass('lan99dMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99d').removeClass('itm99dMOBI'); 


$('.itmV99d').removeClass('itmV99dMOBI');

$('.DropItmMenu99d').removeClass('DropItmMenu99dMOBI'); 



$('.qty99d').removeClass('qty99dMOBI'); 

$('.sub99d').removeClass('sub99dMOBI'); 




$('.add99d').removeClass('add99dMOBI'); 



$('.qtyvalue99d').removeClass('qtyvalue99dMOBI'); 



$('.py99d').removeClass('py99dMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99d').removeClass('fin99dMOBI'); 


$('#total99d').removeClass('total99dMOBI'); 



$('#refill99d, #buy99d').show();

$('.refill99dMOBI, .buy99dMOBI').hide();

$('#ride4099d').show();



$('#CheckBalVM99d').hide();
$('#cbalance99d').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99d').addClass('ui99dMOBI uiXXMOBI');


$('.lan99d').addClass('lan99dMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99d').addClass('itm99dMOBI');

$('.itmV99d').addClass('itmV99dMOBI'); 





$('.qty99d').addClass('qty99dMOBI'); 

$('.sub99d').addClass('sub99dMOBI'); 





$('.add99d').addClass('add99dMOBI'); 



$('.qtyvalue99d').addClass('qtyvalue99dMOBI'); 



$('.py99d').addClass('py99dMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99d').addClass('fin99dMOBI'); 





$('#total99d').addClass('total99dMOBI'); 





$('#refill99d, #buy99d').hide();

$('.refill99dMOBI, .buy99dMOBI').show();


$('#ride4099d').hide();



$('#CheckBalVM99d').show();
$('#cbalance99d').hide();