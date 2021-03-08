$(document).ready(function(){





$('#Vm8Maps').click(function(){
$('.ComingSoonVM8').fadeIn();
$('.ComingSoonVM8').removeClass('ComingSoonServStat88');
$('.ComingSoonVM8').addClass('ComingSoonMap88');
$('.Mapinput88').fadeIn();

});



$('#Vm8SChange').click(function(){
$('.ComingSoonVM8').fadeIn();
$('.ComingSoonVM8').removeClass('ComingSoonMap88');
$('.ComingSoonVM8').addClass('ComingSoonServStat88');
$('.Mapinput88').fadeOut();
});



$('#Vm8Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM8').fadeOut();
$('.Mapinput88').fadeOut()
});






$('#BusTr, #SubTr').click(function(){

$('.MetroNorth88').hide();
$('.Subway88').fadeIn();

});



$('#MetroTr, #LirrTr').click(function(){

$('.Subway88').hide();  
$('.MetroNorth88').fadeIn();

});






  $('#total88').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue88= 1;
var itemValue88=0;
var payMethod88='none';
var total88=0;
var totalMOBI8=0;






//function to get itm value
function getItemValue()

{
 $('.itmV88').on('click', function(){
    itemValue88 = $(this).attr('value');
    qtyValue88= 1;
    total88= itemValue88;
    totalMOBI8= itemValue88;
   //  total2= itemValue * qtyValue;
    
    


 total88= "$"+itemValue88;
    //Testing
 
    console.log('item value is ' + itemValue88+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue88);
    console.log('Total is ' + total88);

    

   //
 $('#total88').attr('value', total88);

 });

};
//functions to get quantity value


 $('#sub88').on('click', function(){

    qtyValue88 = qtyValue88 - 1;
    $('#qtyvalue88').attr('value', qtyValue88);

      if(qtyValue88 <=20){
      
      $('#add88').fadeIn('fast');

    }


    if(qtyValue88 === 0){
      qtyValue88 = 1
     
}

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue88+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply88= qtyValue88 * itemValue88;

   decimal88=multiply88.toFixed(2);
   
    total88= decimal88;
    totalMOBI8= decimal88;

  
  //testing
  total88= "$" + total88;
  console.log('total is ' + total88);
  
 $('#total2').attr('value', total88);

//
 });






 $('#add88').on('click', function(){
    qtyValue88 = qtyValue88 + 1;
    $('#qtyvalue88').attr('value', qtyValue88);

    //Testing
    console.log('quantity value is ' + qtyValue88+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue88 >=20){
      qtyValue88 = 20;

    }

  
  
    //
    
    //multiply item value per quantity
      multiply88= qtyValue88 * itemValue88;

   decimal88=multiply88.toFixed(2);
   
    total88= decimal88;
    totalMOBI8= decimal88;
    console.log("quantity value * item value: " + total88);
  
  //testing
  total88= "$" + total88;
  console.log('total is ' + total88);
  console.log("quantity value * item value: " + total88);
  
 $('#total2').attr('value', total88);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift88').click(function(){

   $('.sendGiftVM8, .closeGiftVM8').fadeIn();

});




$('.confirmSendVM8').click(function(){
    $('.sendGiftVM8, .closeGiftVM8').fadeOut();
    totalGiftVM8 = 0;
    $('#totalGiftVM8').attr('value', totalGiftVM8);

    
$('.friendsVM8').removeClass('active');

MySelfVM8 = 0;
JeffVM8 = 0;
MariaVM8 = 0;
JohnVM8 = 0;
LeahVM8 = 0;
PaulVM8 = 0;
JennyVM8 = 0;
GokuVM8 = 0;



    $('.GiftSentVM8').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM8').click(function(){
    $('.sendGiftVM8, .closeGiftVM8').fadeOut();

    totalGiftVM8 = 0;
    $('#totalGiftVM8').attr('value', totalGiftVM8);

$('.friendsVM8').removeClass('active');
MySelfVM8 = 0;
JeffVM8 = 0;
MariaVM8 = 0;
JohnVM8 = 0;
LeahVM8 = 0;
PaulVM8 = 0;
JennyVM8 = 0;
GokuVM8 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM8 = 0;
JeffVM8 = 0;
MariaVM8 = 0;
JohnVM8 = 0;
LeahVM8 = 0;
PaulVM8 = 0;
JennyVM8 = 0;
GokuVM8 = 0;






$('#MySelfVM8').click(function(){

  if (MySelfVM8 === 0){MySelfVM8 = 1;} else {MySelfVM8=0;}

console.log(MySelfVM8);
});






$('#JeffVM8').click(function(){

  if (JeffVM8 === 0){JeffVM8 = 1;} else {JeffVM8=0;}

console.log(JeffVM8);
});


$('#MariaVM8').click(function(){
  
  if (MariaVM8 === 0){MariaVM8 = 1;} else {MariaVM8=0;}

console.log(MariaVM8);
});


$('#JohnVM8').click(function(){
  
  if (JohnVM8 === 0){JohnVM8 = 1;} else {JohnVM8=0;}

console.log(JohnVM8);
});


$('#LeahVM8').click(function(){
  
  if (LeahVM8 === 0){LeahVM8 = 1;} else {LeahVM8=0;}

console.log(LeahVM8);
});


$('#PaulVM8').click(function(){
  
  if (PaulVM8 === 0){PaulVM8 = 1;} else {PaulVM8=0;}

console.log(PaulVM8);
});



$('#JennyVM8').click(function(){
  
  if (JennyVM8 === 0){JennyVM8 = 1;} else {JennyVM8=0;}

console.log(JennyVM8);
});


$('#GokuVM8').click(function(){
  
  if (GokuVM8 === 0){GokuVM8 = 1;} else {GokuVM8=0;}

console.log(GokuVM8);
});















AllFriendsVM8 = JeffVM8 + MariaVM8 + JohnVM8 + LeahVM8 + PaulVM8 + JennyVM8 + GokuVM8 + MySelfVM8; 




totalGiftVM8 = parseFloat(totalMOBI8) * parseFloat(AllFriendsVM8);


$('.friendsVM8').click(function(){

AllFriendsVM8 = JeffVM8 + MariaVM8 + JohnVM8 + LeahVM8 + PaulVM8 + JennyVM8 + GokuVM8 + MySelfVM8; 

totalGiftVM8 = parseFloat(totalMOBI8) * parseFloat(AllFriendsVM8);

 console.log("All friendsVM8 is =" + AllFriendsVM8);
console.log("All friendsVM8 is =" + typeof('AllFriendsVM8'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM8);
console.log("The totalMOBI3 =" + totalMOBI8);
console.log("The totalGiftVM8 =" + totalMOBI8);
console.log("The totalGiftVM8 =" + typeof('totalMOBI8'));

$('#totalGiftVM8').attr('value', totalGiftVM8);



});






///////////////////Send Gift to Friends//////////////////////////////////////////







///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI88 > label').click(function(){
payMethod88 = $(this).attr('value');
console.log(payMethod88);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod88 = "none";
  itemValue88 = '';
  total88 = "$0.00";
  $('#total88').attr('value', total88);

  $('.itmV88, .PayButtonsMOBI88 > label').removeClass('active');


$(this).fadeOut();
$('.qty88').fadeOut();
qtyValue88 = 1;

});



$('.buy88MOBI').click(function(){

 if(itemValue88 !=='0' && payMethod88 !=='none'){
$('.BuyNewVM8').fadeIn();
}

});



$(' #Refill88').click(function(){
if(itemValue88 !=='0' && payMethod88 !=='none'){
$('.RenewVM8').fadeIn();
}
});


$('#CheckBalVM8').click(function(){
  $('.CheckBalVM8').fadeIn();
});




//////////////////////////////////////////////////////////























$('#ride188, #ride288, #Addvalue88, .fix8').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue88= 1;
$('#qtyvalue88').attr('value', qtyValue88);

$('.qty88').fadeIn('fast');
$('.sub88').fadeIn('fast');
$('.add88').fadeIn('fast');
$('.qtyvalue88').fadeIn('fast');


});



$('#ride788, #ride3088, #ridebt88, .unli8').click(function() {

qtyvalue88= 1;
$('#qtyvalue88').attr('value', qtyValue88);
$('.qty88').fadeOut('fast');
// $('#sub88').hide();
// $('#add88').hide();
// $('#qtyvalue88').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan88, #cbalance88').click(function(){
$('#ride188, #ride288, #ride788, #ride3088, #ridebt88, #cbalance88').removeClass('active');
$('#credit88, #cash88, #debit88, #other88').removeClass('active');
// $('#sub88').hide();
// $('#add88').hide();
// $('#qtyvalue88').hide();
$('.qty88').fadeOut('fast');

$('#total88').attr('value','$0.00');
});


$('.itm88').dblclick(function(){
$('#ride188, #ride288, #ride788, #ride3088, #ridebt88, #cbalance88').removeClass('active');
$('#credit88, #cash88, #debit88, #other88').removeClass('active');
// $('#sub88').hide();
// $('#add88').hide();
// $('#qtyvalue88').hide();
$('.qty88').fadeOut('fast');

$('#total88').attr('value','$0.00');
});










//After selecting Payment method

$('#cash88, #credit88, #debit88, #other88').click(function(){
  payMethod88= $(this).attr('value');
  console.log('Payment method is: ' + payMethod88 + 'and item value is: ' +itemValue88);

});

//Hide these PopUps

$('.seOptions88, .seItem88, .pmethod88').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy88').click(function(){

  if(itemValue88 !=='0' && payMethod88 !=='none'){
   
      $('.check88').hide();
       $('.thankRefill88').hide();
       $('.thankBuy88').fadeIn('fast');

       $('.TapBuy8').click(function(){
          $('.thankBuy88').hide(); 
         });

        }

 });




$('#refill88').click(function(){

   if(itemValue88 !=='0' && payMethod88 !=='none'){
   
      $('.check88').hide();
      $('.thankBuy88').hide();
        $('.thankRefill88').fadeIn('fast');

        $('.TapRefill8').click(function(){
       $('.thankRefill88').hide();


 });
}
});





/*

$('#buy88').click(function(){

  if(itemValue88 =='0' && payMethod88 =='none'){
    $('.seOptions88').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue88 !=='0' && payMethod88 =='none'){

      $('.pmethod88').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue88 =='0' && payMethod88 !== 'none'){
       $('.seItem88').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check88').hide();
       $('.thankRefill88').hide();
       $('.thankBuy88').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill88').click(function(){

   if(itemValue88 =='0' && payMethod88 =='none'){
    $('.seOptions88').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue88 !=='0' && payMethod88 =='none'){

      $('.pmethod88').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue88 =='0' && payMethod88 !== 'none'){
       $('.seItem88').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check88').hide();
      $('.thankBuy88').hide();
        $('.thankRefill88').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy88').click(function(){
  $('.check88').hide();
$('.thankRefill88').hide();
 $('.thankBuy88').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill88').click(function(){
   $('.check88').hide();
  $('.thankBuy88').hide();
    $('.thankRefill88').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check88').hide();
 });

});



*/



     

     

//firts UI
     $('#ride188, #ride288, #ride788, #ride3088, #ridebt88, #cbalance88').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel88').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance88').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3088').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other88').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py" >Cash');
    $('#credit88').html('<input type="radio" name="py" >Credit');
    $('#debit88').html('<input type="radio" name="py" >Debit');
    $('#otherp88').html('<input type="radio" name="py" >Other');

    $('#buy88').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill88').html('Refill Your<br>Card').css('font-size', '20px');


      $('#PIC8').html('<h2 id="PIC8"><b> please Insert Your Card</b></h2>');
  
      $('#TC8').html('<p id="TC8"> ( Tap to Close )</p>');


    $('#TB8').html('<h2 id="TB1"><b> THANK YOU</b></h2>');
    $('#PMP8').html('<h2 id="PMP1"> <b>Please Make Your Payment</b></h2>');
    $('#NAR8').html('<p id="NAR1">Need a Receipt?</p>');
    $('#GB8').html('<p id="GB1"> <b >Go Back</b></p>');

     $('#Yes8').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No8').html('<input  type="radio" name="receiptR"> NO </label>');
     $('#Yes8b').html('<input  type="radio" name="receiptR"> YES </label>');
     $('#No8b').html('<input  type="radio" name="receiptR"> NO </label>');



  $('#TR8').html('<h2><b id="TR1"> THANK YOU</b></h2>');
  $('#PICMP8b').html('<h2><b id="PICMP1"> Please Insert your Card and Make your Payment</b></h2>');
  $('#NAR8b').html('<p id="NARb1">Need a Receipt?</p>');
  $('#GB8b').html('<p id="GB1b"> <b>Go Back</b></p>');


  });



$('#spanish88').click(function(){
  $('#ride188').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride288').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride788').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance88').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3088').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other88').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash88').html ('<input type="radio" name="py"> Efectivo');
    $('#credit88').html('<input type="radio" name="py">Credito');
    $('#debit88').html('<input type="radio" name="py" >Debito');
    $('#otherp88').html('<input type="radio" name="py">Otros');

    $('#buy88').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill88').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance88').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3088').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other88').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py"> 现金 ');
    $('#credit88').html('<input type="radio" name="py"> 个学分 ');
    $('#debit88').html(' <input type="radio" name="py">金 ');
    $('#otherp88').html(' <input type="radio" name="py">宪章 ');

    $('#buy88').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill88').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance88').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3088').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other88').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit88').html('<input type="radio" name="py">кредитов');
    $('#debit88').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp88').html('<input type="radio" name="py">Другое');

    $('#buy88').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill88').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance88').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3088').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other88').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py">Espèces');
    $('#credit88').html('<input type="radio" name="py">Crédits');
    $('#debit88').html('<input type="radio" name="py">DÉBIT');
    $('#otherp88').html('<input type="radio" name="py">Autres');

  
    $('#buy88').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill88').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance88').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3088').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt88').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other88').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py">現金');
    $('#credit88').html('<input type="radio" name="py">クレジット');
    $('#debit88').html('<input type="radio" name="py">ゴールド');
    $('#otherp88').html('<input type="radio" name="py">その他');


    $('#buy88').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill88').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance88').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3088').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other88').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py">النقدية');
    $('#credit88').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit88').html('<input type="radio" name="py">الذهب');
    $('#otherp88').html('<input type="radio" name="py">ادولة');


    $('#buy88').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill88').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian88').click(function(){

  $('#ride188').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride288').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride788').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance88').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3088').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other88').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash88').html ('<input type="radio" name="py">Contanti');
    $('#credit88').html('<input type="radio" name="py">Crediti');
    $('#debit88').html('<input type="radio" name="py">Diamanti');
    $('#otherp88').html('<input type="radio" name="py">Altro');



    $('#buy88').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill88').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance88').click(function(){
 $('.check88').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride188, #ride288, #ride788, #ride3088, #ridebt88, #cbalance88').dblclick(function(){
    $('#panel88').fadeIn('fast');
});

    $('#panel88').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  











VM8screenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + VM8screenType);

VM8screenType = 'Machine';

$('.UI8buttons').show();
$('.UI8buttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM8screenType = 'Mobile';
$('.UI8buttons').hide();
$('.UI8buttonsMOBI').show();

console.log('buttons are ' + VM8screenType);

});


////////////////////////////////////












////////////////////////DarK Color UI3///////////////////////////


$('#BLACKui88').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    $('.ui88').addClass(' DARKui88');



      $('.lan88').attr('class', 'lan88');
      $('.lan88').addClass('DARKlan88');

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         $('.lan88 > label, .lan88 > button').addClass('Darklan88 > lan88');
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      $('.itm88').addClass('DARKitm88');


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           $('.itm88 > label, .itm88 > button').addClass('itm88 > label');

////////////



      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                 $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      $('.py88').addClass('DARKpy88');


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           $('.py88 > label, .py88 > button').addClass('DARKpy88 > label');

/////////////      

      $('.fin88').attr('class', 'fin88');
      $('.fin88').addClass('DARKfin88');


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          // $('.finB88').addClass('DARKfinB88');


             $('#total88').attr('class', 'total88');
             $('#total88').addClass('DARKtotal88');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui88').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    



      $('.lan88').attr('class', 'lan88');
      

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin88').attr('class', 'fin88');
     


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          


             $('#total88').attr('class', 'total88');

});





// //////////////////////////////////////////////Black








////////////////////////DarK Color UI3///////////////////////////


$('#DARKui88').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    $('.ui88').addClass(' DARKui88');



      $('.lan88').attr('class', 'lan88');
      $('.lan88').addClass('DARKlan88');

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         $('.lan88 > label, .lan88 > button').addClass('Darklan88 > lan88');
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      $('.itm88').addClass('BLACKitm88');


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           $('.itm88 > label, .itm88 > button').addClass('itm88 > label');

////////////



      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                 $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      $('.py88').addClass('DARKpy88');


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           $('.py88 > label, .py88 > button').addClass('DARKpy88 > label');

/////////////      

      $('.fin88').attr('class', 'fin88');
      $('.fin88').addClass('DARKfin88');


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          // $('.finB88').addClass('DARKfinB88');


             $('#total88').attr('class', 'total88');
             $('#total88').addClass('DARKtotal88');


});


////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////DarK Color UI3///////////////////////////


$('#BLACKui88MOBI').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    $('.ui88').addClass(' DARKui88');



      $('.lan88').attr('class', 'lan88');
      $('.lan88').addClass('DARKlan88');

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         $('.lan88 > label, .lan88 > button').addClass('Darklan88 > lan88');
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      $('.itm88').addClass('DARKitm88');


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           $('.itm88 > label, .itm88 > button').addClass('itm88 > label');

////////////



      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                 $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      $('.py88').addClass('DARKpy88');


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           $('.py88 > label, .py88 > button').addClass('DARKpy88 > label');

/////////////      

      $('.fin88').attr('class', 'fin88');
      $('.fin88').addClass('DARKfin88');


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          // $('.finB88').addClass('DARKfinB88');


             $('#total88').attr('class', 'total88');
             $('#total88').addClass('DARKtotal88');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui88MOBI').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    



      $('.lan88').attr('class', 'lan88');
      

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin88').attr('class', 'fin88');
     


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          


             $('#total88').attr('class', 'total88');

});





// //////////////////////////////////////////////Black








////////////////////////DarK Color UI3///////////////////////////


$('#DARKui88MOBI').click(function(){
    $('.ui88').attr('class', 'ui88 uiXX');
    $('.ui88').addClass(' DARKui88');



      $('.lan88').attr('class', 'lan88');
      $('.lan88').addClass('DARKlan88');

         $('.lan88 > label, .lan88 > button').attr('class', 'btn btn-default btn-lg')
         $('.lan88 > label, .lan88 > button').addClass('Darklan88 > lan88');
         $('#english1').addClass('active');
/////////////

      $('.itm88').attr('class', 'itm88');
      $('.itm88').addClass('BLACKitm88');


           $('.itm88 > label, .itm88 > button').attr('class', 'btn btn-default btn-lg')
           $('.itm88 > label, .itm88 > button').addClass('itm88 > label');

////////////



      $('.qty88').attr('class', 'qty88');
                $('#sub88').attr('class', 'btn btn-primary btn-lg sub88');
                $('#add88').attr('class', 'btn btn-primary btn-lg add88');
                 $('#qtyvalue88').attr('class', 'qtyvalue88');





///////////

      $('.py88').attr('class', 'py88');
      $('.py88').addClass('DARKpy88');


           $('.py88 > label, .py88 > button').attr('class', 'btn btn-default btn-lg')
           $('.py88 > label, .py88 > button').addClass('DARKpy88 > label');

/////////////      

      $('.fin88').attr('class', 'fin88');
      $('.fin88').addClass('DARKfin88');


          // $('.finB88').attr('class', 'btn btn-default btn-lg finB88');
          // $('.finB88').addClass('DARKfinB88');


             $('#total88').attr('class', 'total88');
             $('#total88').addClass('DARKtotal88');


});





////////////////////////////////////////////////////////////////////////////////////////////////////////












 /*//////////////////////////////MOBI MOBI 88/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI8buttonsMOBI > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){






$('.ui88').addClass('ui88MOBI uiXXMOBI');
$('.lan88').addClass('lan88MOBI');


$('.Vm8LanB').hide();
$('.Vm8LanBMOBI').show();


$('.label1').addClass('label1MOBI'); 

$('.label18, .label28, .label38, .label48, .label58').addClass('labelMOBI8');


$('.selectmenu8').addClass('selectmenu8MOBI');
$('.selectmenu28').addClass('selectmenu28MOBI');
$('.selectmenu38').addClass('selectmenu38MOBI');

$('.Subway88').addClass('Subway88MOBI');
$('.MetroNorth88').addClass('MetroNorth88MOBI');


$('.itm88Background').addClass('itm88BackgroundMOBI');
$('.itm88').addClass('itm88MOBI');



$('.itm88toLinear').show();

$('.itmV88').addClass('itmV88MOBI');
$('.itmV88').css('border-radius', '30px');
$('.itm88Cost').addClass('itm88CostMOBI');
$('.itm88text').addClass('itm88textMOBI');

$('.BalanceV88').show();

$('.DropItmMenu88').addClass('DropItmMenuMOBI88');



$('.dropitm88').addClass('dropitm88MOBI');


$('#Addvalue88').show();

$('.qty88').addClass('qty88MOBI');

$('.sub88').addClass('sub88MOBI'); 

$('.add88').addClass('add88MOBI');

$('.selectmenu88').addClass('selectmenu88MOBI '); 
$('.selectmenu288').addClass('selectmenu288MOBI '); 

$('.MetroItms').addClass('MetroItmsMOBI ');


$('.qtyvalue88').addClass('qtyvalue88MOBI');








$('.py88').addClass('py88MOBI'); 


$('.PayButtons88').hide();


$('.PayButtonsMOBI88').show();




$('.fin88').addClass('fin88MOBI');
    

$('.total88').addClass('total88MOBI');





$('.refill88, .buy88').hide();


$('.buy88MOBI, .refill88MOBI').show();




$('#CheckBalVM8').show();
$('#cbalance88').hide();






});



/*//////////////////////////////Machine Machine 88/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Machine, .UI8buttons > button').click(function(){



$('.ui88').removeClass('ui88MOBI uiXXMOBI');
$('.lan88').removeClass('lan88MOBI');


$('.Vm8LanB').show();
$('.Vm8LanBMOBI').hide();


$('.Organizeitm88').hide();  

$('.label1').removeClass('label1MOBI'); 
$('.label18, .label28, .label38, .label48, .label58').removeClass('labelMOBI8');


$('.selectmenu8').removeClass('selectmenu8MOBI');
$('.selectmenu28').removeClass('selectmenu28MOBI');
$('.selectmenu38').removeClass('selectmenu38MOBI');


$('.Subway88').removeClass('Subway88MOBI');
$('.MetroNorth88').removeClass('MetroNorth88MOBI');

$('.itm88Background').removeClass('itm88BackgroundMOBI');
$('.itm88').removeClass('itm88MOBI');


$('.itmV88').css('border-radius', '15px');
$('.itmV88').removeClass('itmV88MOBI');
$('.itm88Cost').removeClass('itm88CostMOBI');
$('.itm88text').removeClass('itm88textMOBI');



$('.itmV88').removeClass('itmV88MOBI');

$('.BalanceV88').hide();


$('.dropitm88').removeClass('dropitm88MOBI');


$('#Addvalue88').hide();

$('.selectmenu88').removeClass('selectmenu88MOBI '); 
$('.selectmenu288').removeClass('selectmenu288MOBI ');

$('.MetroItms').removeClass('MetroItmsMOBI '); 

$('.qty88').removeClass('qty88MOBI');

$('.sub88').removeClass('sub88MOBI'); 

$('.add88').removeClass('add88MOBI');



$('.qtyvalue88').removeClass('qtyvalue88MOBI');








$('.py88').removeClass('py88MOBI'); 


$('.PayButtons88').show();


$('.PayButtonsMOBI88').hide();




$('.fin88').removeClass('fin88MOBI');
    

$('.total88').removeClass('total88MOBI');





$('.refill88, .buy88').show();


$('.buy88MOBI, .refill88MOBI').hide();



$('#CheckBalVM8').hide();
$('#cbalance88').show();










  $('.itmV88').removeClass('LinearitmV88MOBI');
  $('.itm88Cost').removeClass('Linearitm88CostMOBI');
  $('.itm88text').removeClass('Linearitm88textMOBI'); 

  $('.itmV88').removeClass('MiniSquareitmV88MOBI');
  $('.itm88Cost').removeClass('MiniSquareitm88CostMOBI');
  $('.itm88text').removeClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').removeClass('MiniSquareitm88Photo');
  $('.itmV88').removeClass('PhotoLinearitmV88MOBI');
  $('.itm88Photo').removeClass('PhotoLinearitm88Photo');  

  $('.itmV88').removeClass('MiniSquareitmV88MOBI');
  $('.itm88Cost').removeClass('MiniSquareitm88CostMOBI');
  $('.itm88text').removeClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').removeClass('MiniSquareitm88Photo');
  $('.itmV88').removeClass('LinearitmV88MOBI');
  $('.itm88Cost').removeClass('Linearitm88CostMOBI');
  $('.itm88text').removeClass('Linearitm88textMOBI'); 
  $('.itmV88').removeClass('MiniSquareitmV88MOBI');








});




// ///////Show different models///////////
// ///////Show different models///////////





// ///////Change itmv88 shape///////////

$('.itm88toLinear').click(function(){

  $('.itmV88MOBI').addClass('LinearitmV88MOBI');
  $('.itm88CostMOBI').addClass('Linearitm88CostMOBI');
  $('.itm88textMOBI').addClass('Linearitm88textMOBI');
  $('.BalanceV88 ').addClass('LinearBalanceV88'); 

   $('.itmV88MOBI').removeClass('HorizontalitmV88MOBI');

});



$('.itm88toMiniSquare').click(function(){
  
  $('.itmV88MOBI').removeClass('LinearitmV88MOBI');
  $('.itm88CostMOBI').removeClass('Linearitm88CostMOBI');
  $('.itm88textMOBI').removeClass('Linearitm88textMOBI');
  $('.BalanceV88 ').removeClass('LinearBalanceV88');  
  $('.itmV88MOBI').removeClass('HorizontalitmV88MOBI');

  $('.itmV88MOBI').addClass('MiniSquareitmV88MOBI');
  $('.itm88CostMOBI').addClass('MiniSquareitm88CostMOBI');
  $('.itm88textMOBI').addClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').addClass('MiniSquareitm88Photo');


});






$('.itm88toLinearPhoto').click(function(){
  
  $('.itmV88MOBI').removeClass('MiniSquareitmV88MOBI');
  $('.itm88CostMOBI').removeClass('MiniSquareitm88CostMOBI');
  $('.itm88textMOBI').removeClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').removeClass('MiniSquareitm88Photo');
  $('.BalanceV88 ').removeClass('LinearBalanceV88');
  $('.itmV88MOBI').removeClass('HorizontalitmV88MOBI');

  $('.itmV88MOBI').addClass('PhotoLinearitmV88MOBI');
  $('.itm88Photo').addClass('PhotoLinearitm88Photo');

});





$('.itm88toRegular').click(function(){

   $('.itmV88MOBI').removeClass('HorizontalitmV88MOBI');
  
  $('.itmV88MOBI').removeClass('PhotoLinearitmV88MOBI');
  $('.itm88Photo').removeClass('PhotoLinearitm88Photo'); 
  $('.BalanceV88 ').removeClass('LinearBalanceV88'); 

  $('.itmV88MOBI').removeClass('MiniSquareitmV88MOBI');
  $('.itm88CostMOBI').removeClass('MiniSquareitm88CostMOBI');
  $('.itm88textMOBI').removeClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').removeClass('MiniSquareitm88Photo');

  $('.itmV88MOBI').removeClass('LinearitmV88MOBI');
  $('.itm88CostMOBI').removeClass('Linearitm88CostMOBI');
  $('.itm88textMOBI').removeClass('Linearitm88textMOBI'); 

  $('.itmV88MOBI').removeClass('MiniSquareitmV88MOBI');

});





$('.itm88toHorizontal').click(function(){

 $('.itmV88MOBI').addClass('HorizontalitmV88MOBI');
  
  $('.itmV88MOBI').removeClass('PhotoLinearitmV88MOBI');
  $('.itm88Photo').removeClass('PhotoLinearitm88Photo'); 
  $('.BalanceV88 ').removeClass('LinearBalanceV88'); 

  $('.itmV88MOBI').removeClass('MiniSquareitmV88MOBI');
  $('.itm88CostMOBI').removeClass('MiniSquareitm88CostMOBI');
  $('.itm88textMOBI').removeClass('MiniSquareitm88textMOBI');
  $('.itm88Photo').removeClass('MiniSquareitm88Photo');

  $('.itmV88MOBI').removeClass('LinearitmV88MOBI');
  $('.itm88CostMOBI').removeClass('Linearitm88CostMOBI');
  $('.itm88textMOBI').removeClass('Linearitm88textMOBI'); 

  $('.itmV88MOBI').removeClass('MiniSquareitmV88MOBI');

});







// ///////Change itmv88 shape///////////





$('.itm88toLinear').click(function(){

   $(this).hide();
   $('.itm88toMiniSquare').show();

});
$('.itm88toMiniSquare').click(function(){

   $(this).hide();
   $('.itm88toLinearPhoto').show();

});
$('.itm88toLinearPhoto').click(function(){

   $(this).hide();
   $('.itm88toRegular').show();

});

$('.itm88toRegular').click(function(){

   $(this).hide();
   $('.itm88toLinear').show();

});






















