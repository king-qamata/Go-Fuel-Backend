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


 



  $('#total99b').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99b= 1;
var itemValue99b=0;
var payMethod99b='none';
var total99b=0;
var totalMOBI99b=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99b').on('click', function(){

    itemValue99b = $(this).attr('value');
    qtyValue99b= 1;
    total99b= itemValue99b;
    totalMOBI99b= itemValue99b;
   //  total2= itemValue * qtyValue;
    
    


 total99b= "$"+itemValue99b;
    //Testing
 
    console.log('item value is ' + itemValue99b+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99b);
    console.log('Total is ' + total99b);

    

   //
 $('#total99b').attr('value', total99b);

 });

};
//functions to get quantity value


 $('#sub99b').on('click', function(){

    qtyValue99b = qtyValue99b - 1;
    $('#qtyvalue99b').attr('value', qtyValue99b);

      if(qtyValue99b <=20){
      
      $('#add99b').fadeIn('fast');

    }


    if(qtyValue99b === 0){
      qtyValue99b = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99b+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99b= qtyValue99b * itemValue99b;

   decimal99b=multiply99b.toFixed(2);
   
    total99b= decimal99b;
    totalMOBI99b= decimal99b;

  
  //testing
  total99b= "$" + total99b;
  console.log('total is ' + total99b);
  
 $('#total99b').attr('value', total99b);

//
 });






 $('#add99b').on('click', function(){
    qtyValue99b = qtyValue99b + 1;
    $('#qtyvalue99b').attr('value', qtyValue99b);

    //Testing
    console.log('quantity value is ' + qtyValue99b+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99b >=20){
    

    }

     if(qtyValue99b >=2){
      $('#sub99b').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99b= qtyValue99b * itemValue99b;

   decimal99b=multiply99b.toFixed(2);
   
    total99b= decimal99b;
    totalMOBI99b= decimal99b;
    console.log("quantity value * item value: " + total99b);
  
  //testing
  total99b= "$" + total99b;
  console.log('total is ' + total99b);
  console.log("quantity value * item value: " + total99b);
  
 $('#total99b').attr('value', total99b);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99b').click(function(){

   $('.sendGiftVM99b, .closeGiftVM99b').fadeIn();

});




$('.confirmSendVM99b').click(function(){
    $('.sendGiftVM99b, .closeGiftVM99b').fadeOut();
    totalGiftVM99b = 0;
    $('#totalGiftVM99b').attr('value', totalGiftVM99b);

    
$('.friendsVM99b').removeClass('active');

MySelfVM99b = 0;
JeffVM99b = 0;
MariaVM99b = 0;
JohnVM99b = 0;
LeahVM99b = 0;
PaulVM99b = 0;
JennyVM99b = 0;
GokuVM99b = 0;



    $('.GiftSentVM99b').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99b').click(function(){
    $('.sendGiftVM99b, .closeGiftVM99b').fadeOut();

    totalGiftVM99b = 0;
    $('#totalGiftVM99b').attr('value', totalGiftVM99b);

$('.friendsVM99b').removeClass('active');
MySelfVM99b = 0;
JeffVM99b = 0;
MariaVM99b = 0;
JohnVM99b = 0;
LeahVM99b = 0;
PaulVM99b = 0;
JennyVM99b = 0;
GokuVM99b = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99b = 0;
JeffVM99b = 0;
MariaVM99b = 0;
JohnVM99b = 0;
LeahVM99b = 0;
PaulVM99b = 0;
JennyVM99b = 0;
GokuVM99b = 0;








$('#MySelfVM99b').click(function(){

  if (MySelfVM99b === 0){MySelfVM99b = 1;} else {MySelfVM99b=0;}

console.log(MySelfVM99b);
});






$('#JeffVM99b').click(function(){

  if (JeffVM99b === 0){JeffVM99b = 1;} else {JeffVM99b=0;}

console.log(JeffVM99b);
});


$('#MariaVM99b').click(function(){
  
  if (MariaVM99b === 0){MariaVM99b = 1;} else {MariaVM99b=0;}

console.log(MariaVM99b);
});


$('#JohnVM99b').click(function(){
  
  if (JohnVM99b === 0){JohnVM99b = 1;} else {JohnVM99b=0;}

console.log(JohnVM99b);
});


$('#LeahVM99b').click(function(){
  
  if (LeahVM99b === 0){LeahVM99b = 1;} else {LeahVM99b=0;}

console.log(LeahVM99b);
});


$('#PaulVM99b').click(function(){
  
  if (PaulVM99b === 0){PaulVM99b = 1;} else {PaulVM99b=0;}

console.log(PaulVM99b);
});



$('#JennyVM99b').click(function(){
  
  if (JennyVM99b === 0){JennyVM99b = 1;} else {JennyVM99b=0;}

console.log(JennyVM99b);
});


$('#GokuVM99b').click(function(){
  
  if (GokuVM99b === 0){GokuVM99b = 1;} else {GokuVM99b=0;}

console.log(GokuVM99b);
});















AllFriendsVM99b = JeffVM99b + MariaVM99b + JohnVM99b + LeahVM99b + PaulVM99b + JennyVM99b + GokuVM99b + MySelfVM99b; 




totalGiftVM99b = parseFloat(totalMOBI99b) * parseFloat(AllFriendsVM99b);


$('.friendsVM99b').click(function(){

AllFriendsVM99b = JeffVM99b + MariaVM99b + JohnVM99b + LeahVM99b + PaulVM99b + JennyVM99b + GokuVM99b + MySelfVM99b; 

totalGiftVM99b = parseFloat(totalMOBI99b) * parseFloat(AllFriendsVM99b);

 console.log("All friendsVM99b is =" + AllFriendsVM99b);
console.log("All friendsVM99b is =" + typeof('AllFriendsVM99b'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99b);
console.log("The totalMOBI99b =" + totalMOBI99b);
console.log("The totalGiftVM99b =" + totalMOBI99b);
console.log("The totalGiftVM99b =" + typeof('totalMOBI99b'));

$('#totalGiftVM99b').attr('value', totalGiftVM99b);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99b = $(this).attr('value');
console.log(payMethod99b);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99b = "none";
  itemValue99b = '';
  total99b = "$0.00";
  $('#total99b').attr('value', total99b);

  $('.itmV99b, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99b').fadeOut();
qtyValue99b = 1;

});



$('.buy99bMOBI').click(function(){

 if(itemValue99b !=='0' && payMethod99b !=='none'){
$('.BuyNewVM99b').fadeIn();
}

});



$(' #Refill99b').click(function(){
if(itemValue99b !=='0' && payMethod99b !=='none'){
$('.RenewVM99b').fadeIn();
}
});


$('#CheckBalVM99b').click(function(){
  $('.CheckBalVM99b').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99bMOBI, .selectmenu9A, .selectmenu9A2, #other99b').click(function(){
$('.qty99b').fadeOut();

});










$('.itmV99b').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99b= 1;
$('#qtyvalue99b').attr('value', qtyValue99b);

$('.qty99b').fadeIn('fast');
// $('#sub99b').fadeIn('fast');
// $('#add99b').fadeIn('fast');
// $('#qtyvalue99b').fadeIn('fast');


});



$('#ride799b, #ride3099b, #ridebt99b').click(function() {

qtyvalue99b= 1;
$('#qtyvalue99b').attr('value', qtyValue99b);
// $('.qty99b').fadeOut('fast');
// $('#sub99b').hide();
// $('#add99b').hide();
// $('#qtyvalue99b').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99b, #cbalance99b').click(function(){
$('#ride199b, #ride299b, #ride799b, #ride3099b, #ridebt99b, #cbalance99b').removeClass('active');
$('#credit99b, #cash99b, #debit99b, #other99b').removeClass('active');
// $('#sub99b').hide();
// $('#add99b').hide();
// $('#qtyvalue99b').hide();


$('#total99b').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99b, #credit99b, #debit99b, #other99b').click(function(){
  payMethod99b= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99b + 'and item value is: ' +itemValue99b);

});

//Hide these PopUps

$('.seOptions99b, .seItem99b, .pmethod99b').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99b').click(function(){

  if(itemValue99b !=='0' && payMethod99b !=='none'){
   
      $('.check99b').hide();
       $('.thankRefill99b').hide();
       $('.thankBuy99b').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99b').hide(); 
         });

        }

 });




$('#refill99b').click(function(){

   if(itemValue99b !=='0' && payMethod99b !=='none'){
   
      $('.check99b').hide();
      $('.thankBuy99b').hide();
        $('.thankRefill99b').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99b').hide();


 });
}
});





/*

$('#buy99b').click(function(){

  if(itemValue99b =='0' && payMethod99b =='none'){
    $('.seOptions99b').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99b !=='0' && payMethod99b =='none'){

      $('.pmethod99b').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99b =='0' && payMethod99b !== 'none'){
       $('.seItem99b').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99b').hide();
       $('.thankRefill99b').hide();
       $('.thankBuy99b').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99b').click(function(){

   if(itemValue99b =='0' && payMethod99b =='none'){
    $('.seOptions99b').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99b !=='0' && payMethod99b =='none'){

      $('.pmethod99b').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99b =='0' && payMethod99b !== 'none'){
       $('.seItem99b').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99b').hide();
      $('.thankBuy99b').hide();
        $('.thankRefill99b').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99b').click(function(){
  $('.check99b').hide();
$('.thankRefill99b').hide();
 $('.thankBuy99b').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99b').click(function(){
   $('.check99b').hide();
  $('.thankBuy99b').hide();
    $('.thankRefill99b').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99b').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199b, #ride299b, #ride799b, #ride3099b, #ridebt99b, #cbalance99b').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99b').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99b').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099b').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99b').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py" >Cash');
    $('#credit99b').html('<input type="radio" name="py" >Credit');
    $('#debit99b').html('<input type="radio" name="py" >Debit');
    $('#otherp99b').html('<input type="radio" name="py" >Other');

    $('#buy99b').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99b').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99b').click(function(){
  $('#ride199b').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299b').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799b').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99b').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099b').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99b').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99b').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99b').html('<input type="radio" name="py">Credito');
    $('#debit99b').html('<input type="radio" name="py" >Debito');
    $('#otherp99b').html('<input type="radio" name="py">Otros');

    $('#buy99b').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99b').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99b').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099b').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99b').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99b').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99b').html(' <input type="radio" name="py">金 ');
    $('#otherp99b').html(' <input type="radio" name="py">宪章 ');

    $('#buy99b').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99b').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99b').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099b').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99b').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99b').html('<input type="radio" name="py">кредитов');
    $('#debit99b').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99b').html('<input type="radio" name="py">Другое');

    $('#buy99b').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99b').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99b').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099b').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99b').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py">Espèces');
    $('#credit99b').html('<input type="radio" name="py">Crédits');
    $('#debit99b').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99b').html('<input type="radio" name="py">Autres');

  
    $('#buy99b').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99b').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99b').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099b').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99b').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99b').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py">現金');
    $('#credit99b').html('<input type="radio" name="py">クレジット');
    $('#debit99b').html('<input type="radio" name="py">ゴールド');
    $('#otherp99b').html('<input type="radio" name="py">その他');


    $('#buy99b').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99b').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99b').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099b').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99b').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py">النقدية');
    $('#credit99b').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99b').html('<input type="radio" name="py">الذهب');
    $('#otherp99b').html('<input type="radio" name="py">ادولة');


    $('#buy99b').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99b').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99b').click(function(){

  $('#ride199b').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299b').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799b').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99b').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099b').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99b').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99b').html ('<input type="radio" name="py">Contanti');
    $('#credit99b').html('<input type="radio" name="py">Crediti');
    $('#debit99b').html('<input type="radio" name="py">Diamanti');
    $('#otherp99b').html('<input type="radio" name="py">Altro');



    $('#buy99b').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99b').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99b').click(function(){
 $('.check99b').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199b, #ride299b, #ride799b, #ride3099b, #ridebt99b, #cbalance99b').dblclick(function(){
    $('#panel99b').fadeIn('fast');
});

    $('#panel99b').click(function(){

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


$('#DARKui99bx').click(function(){
    $('.ui99b').attr('class', 'ui99b uiXX');
    $('.ui99b').addClass(' DARKui99b');



      $('.lan99b').attr('class', 'lan99b');
      $('.lan99b').addClass('DARKlan99b');

         $('.lan99b > label, .lan99b > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99b > label, .lan99b > button').addClass('Darklan99b > lan99b');
         $('#english1').addClass('active');
/////////////

      $('.itm99b').attr('class', 'itm99b');
      $('.itm99b').addClass('DARKitm99b');


           $('.itm99b > label, .itm99b > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99b > label, .itm99b > button').addClass('itm99b > label');

////////////



      $('.qty99b').attr('class', 'qty99b');
                $('#sub99b').attr('class', 'btn btn-primary btn-lg sub99b');
                $('#add99b').attr('class', 'btn btn-primary btn-lg add99b');
                 $('#qtyvalue99b').attr('class', 'qtyvalue99b');





///////////

      $('.py99b').attr('class', 'py99b');
      $('.py99b').addClass('DARKpy99b');


           $('.py99b > label, .py99b > button').attr('class', 'btn btn-default btn-lg')
           $('.py99b > label, .py99b > button').addClass('DARKpy99b > label');

/////////////      

      $('.fin99b').attr('class', 'fin99b');
      $('.fin99b').addClass('DARKfin99b');


          $('.finB99b').attr('class', 'btn btn-default btn-lg finB99b');
          $('.finB99b').addClass('DARKfinB99b');


             $('#total99b').attr('class', 'total99b');
             $('#total99b').addClass('DARKtotal99b');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99bx').click(function(){
    $('.ui99b').attr('class', 'ui99b uiXX');
    



      $('.lan99b').attr('class', 'lan99b');
      

         $('.lan99b > label, .lan99b > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99b').attr('class', 'itm99b');
      


           $('.itm99b > label, .itm99b > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99b').attr('class', 'qty99b');
                $('#sub99b').attr('class', 'btn btn-primary btn-lg sub99b');
                $('#add99b').attr('class', 'btn btn-primary btn-lg add99b');
                $('#qtyvalue99b').attr('class', 'qtyvalue99b');





///////////

      $('.py99b').attr('class', 'py99b');
      


           $('.py99b > label, .py99b > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99b').attr('class', 'fin99b');
     


          $('.finB99b').attr('class', 'btn btn-default btn-lg finB99b');
          


             $('#total99b').attr('class', 'total99b');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99bMOBIx').click(function(){
    $('.ui99b').attr('class', 'ui99b uiXX');
    $('.ui99b').addClass(' DARKui99b');



      $('.lan99b').attr('class', 'lan99b');
      $('.lan99b').addClass('DARKlan99b');

         $('.lan99b > label, .lan99b > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99b > label, .lan99b > button').addClass('Darklan99b > lan99b');
         $('#english1').addClass('active');
/////////////

      $('.itm99b').attr('class', 'itm99b');
      $('.itm99b').addClass('DARKitm99b');


           $('.itm99b > label, .itm99b > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99b > label, .itm99b > button').addClass('itm99b > label');

////////////



      $('.qty99b').attr('class', 'qty99b');
                $('#sub99b').attr('class', 'btn btn-primary btn-lg sub99b');
                $('#add99b').attr('class', 'btn btn-primary btn-lg add99b');
                 $('#qtyvalue99b').attr('class', 'qtyvalue99b');





///////////

      $('.py99b').attr('class', 'py99b');
      $('.py99b').addClass('DARKpy99b');


           $('.py99b > label, .py99b > button').attr('class', 'btn btn-default btn-lg')
           $('.py99b > label, .py99b > button').addClass('DARKpy99b > label');

/////////////      

      $('.fin99b').attr('class', 'fin99b');
      $('.fin99b').addClass('DARKfin99b');


          $('.finB99b').attr('class', 'btn btn-default btn-lg finB99b');
          $('.finB99b').addClass('DARKfinB99b');


             $('#total99b').attr('class', 'total99b');
             $('#total99b').addClass('DARKtotal99b');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99bMOBIx').click(function(){
    $('.ui99b').attr('class', 'ui99b uiXX');
    



      $('.lan99b').attr('class', 'lan99b');
      

         $('.lan99b > label, .lan99b > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99b').attr('class', 'itm99b');
      


           $('.itm99b > label, .itm99b > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99b').attr('class', 'qty99b');
                $('#sub99b').attr('class', 'btn btn-primary btn-lg sub99b');
                $('#add99b').attr('class', 'btn btn-primary btn-lg add99b');
                $('#qtyvalue99b').attr('class', 'qtyvalue99b');





///////////

      $('.py99b').attr('class', 'py99b');
      


           $('.py99b > label, .py99b > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99b').attr('class', 'fin99b');
     


          $('.finB99b').attr('class', 'btn btn-default btn-lg finB99b');
          


             $('#total99b').attr('class', 'total99b');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4, .TransportModel9bx4').click(function(){




$('.ui99b').addClass('ui99bMOBI uiXXMOBI');


$('.lan99b').addClass('lan99bMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99b').addClass('itm99bMOBI');
$('.itmV99b').addClass('itmV99bMOBI');


$('.DropItmMenu99b').addClass('DropItmMenu99bMOBI'); 





$('.qty99b').addClass('qty99bMOBI'); 

$('.sub99b').addClass('sub99bMOBI'); 





$('.add99b').addClass('add99bMOBI'); 



$('.qtyvalue99b').addClass('qtyvalue99bMOBI'); 



$('.py99b').addClass('py99bMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99b').addClass('fin99bMOBI'); 





$('#total99b').addClass('total99bMOBI'); 





$('#refill99b, #buy99b').hide();

$('.refill99bMOBI, .buy99bMOBI').show();


$('#ride4099b').hide();



$('#CheckBalVM99b').show();
$('#cbalance99b').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99b').removeClass('ui99bMOBI uiXXMOBI');


$('.lan99b').removeClass('lan99bMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99b').removeClass('itm99bMOBI'); 


$('.itmV99b').removeClass('itmV99bMOBI');

$('.DropItmMenu99b').removeClass('DropItmMenu99bMOBI'); 



$('.qty99b').removeClass('qty99bMOBI'); 

$('.sub99b').removeClass('sub99bMOBI'); 




$('.add99b').removeClass('add99bMOBI'); 



$('.qtyvalue99b').removeClass('qtyvalue99bMOBI'); 



$('.py99b').removeClass('py99bMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99b').removeClass('fin99bMOBI'); 


$('#total99b').removeClass('total99bMOBI'); 



$('#refill99b, #buy99b').show();

$('.refill99bMOBI, .buy99bMOBI').hide();

$('#ride4099b').show();



$('#CheckBalVM99b').hide();
$('#cbalance99b').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99b').addClass('ui99bMOBI uiXXMOBI');


$('.lan99b').addClass('lan99bMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99b').addClass('itm99bMOBI');

$('.itmV99b').addClass('itmV99bMOBI'); 





$('.qty99b').addClass('qty99bMOBI'); 

$('.sub99b').addClass('sub99bMOBI'); 





$('.add99b').addClass('add99bMOBI'); 



$('.qtyvalue99b').addClass('qtyvalue99bMOBI'); 



$('.py99b').addClass('py99bMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99b').addClass('fin99bMOBI'); 





$('#total99b').addClass('total99bMOBI'); 





$('#refill99b, #buy99b').hide();

$('.refill99bMOBI, .buy99bMOBI').show();


$('#ride4099b').hide();



$('#CheckBalVM99b').show();
$('#cbalance99b').hide();