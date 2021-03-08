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


 



  $('#total99C').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99C= 1;
var itemValue99C=0;
var payMethod99C='none';
var total99C=0;
var totalMOBI99C=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99C').on('click', function(){

    itemValue99C = $(this).attr('value');
    qtyValue99C= 1;
    total99C= itemValue99C;
    totalMOBI99C= itemValue99C;
   //  total2= itemValue * qtyValue;
    
    


 total99C= "$"+itemValue99C;
    //Testing
 
    console.log('item value is ' + itemValue99C+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99C);
    console.log('Total is ' + total99C);

    

   //
 $('#total99C').attr('value', total99C);

 });

};
//functions to get quantity value


 $('#sub99C').on('click', function(){

    qtyValue99C = qtyValue99C - 1;
    $('#qtyvalue99C').attr('value', qtyValue99C);

      if(qtyValue99C <=20){
      
      $('#add99C').fadeIn('fast');

    }


    if(qtyValue99C === 0){
      qtyValue99C = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99C+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99C= qtyValue99C * itemValue99C;

   decimal99C=multiply99C.toFixed(2);
   
    total99C= decimal99C;
    totalMOBI99C= decimal99C;

  
  //testing
  total99C= "$" + total99C;
  console.log('total is ' + total99C);
  
 $('#total99C').attr('value', total99C);

//
 });






 $('#add99C').on('click', function(){
    qtyValue99C = qtyValue99C + 1;
    $('#qtyvalue99C').attr('value', qtyValue99C);

    //Testing
    console.log('quantity value is ' + qtyValue99C+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99C >=20){
    

    }

     if(qtyValue99C >=2){
      $('#sub99C').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99C= qtyValue99C * itemValue99C;

   decimal99C=multiply99C.toFixed(2);
   
    total99C= decimal99C;
    totalMOBI99C= decimal99C;
    console.log("quantity value * item value: " + total99C);
  
  //testing
  total99C= "$" + total99C;
  console.log('total is ' + total99C);
  console.log("quantity value * item value: " + total99C);
  
 $('#total99C').attr('value', total99C);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99C').click(function(){

   $('.sendGiftVM99C, .closeGiftVM99C').fadeIn();

});




$('.confirmSendVM99C').click(function(){
    $('.sendGiftVM99C, .closeGiftVM99C').fadeOut();
    totalGiftVM99C = 0;
    $('#totalGiftVM99C').attr('value', totalGiftVM99C);

    
$('.friendsVM99C').removeClass('active');

MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;



    $('.GiftSentVM99C').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99C').click(function(){
    $('.sendGiftVM99C, .closeGiftVM99C').fadeOut();

    totalGiftVM99C = 0;
    $('#totalGiftVM99C').attr('value', totalGiftVM99C);

$('.friendsVM99C').removeClass('active');
MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;








$('#MySelfVM99C').click(function(){

  if (MySelfVM99C === 0){MySelfVM99C = 1;} else {MySelfVM99C=0;}

console.log(MySelfVM99C);
});






$('#JeffVM99C').click(function(){

  if (JeffVM99C === 0){JeffVM99C = 1;} else {JeffVM99C=0;}

console.log(JeffVM99C);
});


$('#MariaVM99C').click(function(){
  
  if (MariaVM99C === 0){MariaVM99C = 1;} else {MariaVM99C=0;}

console.log(MariaVM99C);
});


$('#JohnVM99C').click(function(){
  
  if (JohnVM99C === 0){JohnVM99C = 1;} else {JohnVM99C=0;}

console.log(JohnVM99C);
});


$('#LeahVM99C').click(function(){
  
  if (LeahVM99C === 0){LeahVM99C = 1;} else {LeahVM99C=0;}

console.log(LeahVM99C);
});


$('#PaulVM99C').click(function(){
  
  if (PaulVM99C === 0){PaulVM99C = 1;} else {PaulVM99C=0;}

console.log(PaulVM99C);
});



$('#JennyVM99C').click(function(){
  
  if (JennyVM99C === 0){JennyVM99C = 1;} else {JennyVM99C=0;}

console.log(JennyVM99C);
});


$('#GokuVM99C').click(function(){
  
  if (GokuVM99C === 0){GokuVM99C = 1;} else {GokuVM99C=0;}

console.log(GokuVM99C);
});















AllFriendsVM99C = JeffVM99C + MariaVM99C + JohnVM99C + LeahVM99C + PaulVM99C + JennyVM99C + GokuVM99C + MySelfVM99C; 




totalGiftVM99C = parseFloat(totalMOBI99C) * parseFloat(AllFriendsVM99C);


$('.friendsVM99C').click(function(){

AllFriendsVM99C = JeffVM99C + MariaVM99C + JohnVM99C + LeahVM99C + PaulVM99C + JennyVM99C + GokuVM99C + MySelfVM99C; 

totalGiftVM99C = parseFloat(totalMOBI99C) * parseFloat(AllFriendsVM99C);

 console.log("All friendsVM99C is =" + AllFriendsVM99C);
console.log("All friendsVM99C is =" + typeof('AllFriendsVM99C'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99C);
console.log("The totalMOBI99C =" + totalMOBI99C);
console.log("The totalGiftVM99C =" + totalMOBI99C);
console.log("The totalGiftVM99C =" + typeof('totalMOBI99C'));

$('#totalGiftVM99C').attr('value', totalGiftVM99C);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99C = $(this).attr('value');
console.log(payMethod99C);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99C = "none";
  itemValue99C = '';
  total99C = "$0.00";
  $('#total99C').attr('value', total99C);

  $('.itmV99C, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99C').fadeOut();
qtyValue99C = 1;

});



$('.buy99CMOBI').click(function(){

 if(itemValue99C !=='0' && payMethod99C !=='none'){
$('.BuyNewVM99C').fadeIn();
}

});



$(' #Refill99C').click(function(){
if(itemValue99C !=='0' && payMethod99C !=='none'){
$('.RenewVM99C').fadeIn();
}
});


$('#CheckBalVM99C').click(function(){
  $('.CheckBalVM99C').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99CMOBI, .selectmenu9A, .selectmenu9A2, #other99C').click(function(){
$('.qty99C').fadeOut();

});










$('.itmV99C').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99C= 1;
$('#qtyvalue99C').attr('value', qtyValue99C);

$('.qty99C').fadeIn('fast');
// $('#sub99C').fadeIn('fast');
// $('#add99C').fadeIn('fast');
// $('#qtyvalue99C').fadeIn('fast');


});



$('#ride799C, #ride3099C, #ridebt99C').click(function() {

qtyvalue99C= 1;
$('#qtyvalue99C').attr('value', qtyValue99C);
// $('.qty99C').fadeOut('fast');
// $('#sub99C').hide();
// $('#add99C').hide();
// $('#qtyvalue99C').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99C, #cbalance99C').click(function(){
$('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').removeClass('active');
$('#credit99C, #cash99C, #debit99C, #other99C').removeClass('active');
// $('#sub99C').hide();
// $('#add99C').hide();
// $('#qtyvalue99C').hide();


$('#total99C').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99C, #credit99C, #debit99C, #other99C').click(function(){
  payMethod99C= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99C + 'and item value is: ' +itemValue99C);

});

//Hide these PopUps

$('.seOptions99C, .seItem99C, .pmethod99C').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99C').click(function(){

  if(itemValue99C !=='0' && payMethod99C !=='none'){
   
      $('.check99C').hide();
       $('.thankRefill99C').hide();
       $('.thankBuy99C').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99C').hide(); 
         });

        }

 });




$('#refill99C').click(function(){

   if(itemValue99C !=='0' && payMethod99C !=='none'){
   
      $('.check99C').hide();
      $('.thankBuy99C').hide();
        $('.thankRefill99C').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99C').hide();


 });
}
});





/*

$('#buy99C').click(function(){

  if(itemValue99C =='0' && payMethod99C =='none'){
    $('.seOptions99C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99C !=='0' && payMethod99C =='none'){

      $('.pmethod99C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99C =='0' && payMethod99C !== 'none'){
       $('.seItem99C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99C').hide();
       $('.thankRefill99C').hide();
       $('.thankBuy99C').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99C').click(function(){

   if(itemValue99C =='0' && payMethod99C =='none'){
    $('.seOptions99C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99C !=='0' && payMethod99C =='none'){

      $('.pmethod99C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99C =='0' && payMethod99C !== 'none'){
       $('.seItem99C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99C').hide();
      $('.thankBuy99C').hide();
        $('.thankRefill99C').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99C').click(function(){
  $('.check99C').hide();
$('.thankRefill99C').hide();
 $('.thankBuy99C').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99C').click(function(){
   $('.check99C').hide();
  $('.thankBuy99C').hide();
    $('.thankRefill99C').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99C').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99C').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99C').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py" >Cash');
    $('#credit99C').html('<input type="radio" name="py" >Credit');
    $('#debit99C').html('<input type="radio" name="py" >Debit');
    $('#otherp99C').html('<input type="radio" name="py" >Other');

    $('#buy99C').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99C').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99C').click(function(){
  $('#ride199C').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299C').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799C').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99C').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099C').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99C').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99C').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99C').html('<input type="radio" name="py">Credito');
    $('#debit99C').html('<input type="radio" name="py" >Debito');
    $('#otherp99C').html('<input type="radio" name="py">Otros');

    $('#buy99C').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99C').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099C').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99C').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99C').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99C').html(' <input type="radio" name="py">金 ');
    $('#otherp99C').html(' <input type="radio" name="py">宪章 ');

    $('#buy99C').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99C').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099C').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99C').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99C').html('<input type="radio" name="py">кредитов');
    $('#debit99C').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99C').html('<input type="radio" name="py">Другое');

    $('#buy99C').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99C').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99C').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">Espèces');
    $('#credit99C').html('<input type="radio" name="py">Crédits');
    $('#debit99C').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99C').html('<input type="radio" name="py">Autres');

  
    $('#buy99C').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99C').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99C').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099C').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99C').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99C').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">現金');
    $('#credit99C').html('<input type="radio" name="py">クレジット');
    $('#debit99C').html('<input type="radio" name="py">ゴールド');
    $('#otherp99C').html('<input type="radio" name="py">その他');


    $('#buy99C').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99C').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99C').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099C').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99C').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">النقدية');
    $('#credit99C').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99C').html('<input type="radio" name="py">الذهب');
    $('#otherp99C').html('<input type="radio" name="py">ادولة');


    $('#buy99C').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99C').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99C').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">Contanti');
    $('#credit99C').html('<input type="radio" name="py">Crediti');
    $('#debit99C').html('<input type="radio" name="py">Diamanti');
    $('#otherp99C').html('<input type="radio" name="py">Altro');



    $('#buy99C').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99C').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99C').click(function(){
 $('.check99C').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').dblclick(function(){
    $('#panel99C').fadeIn('fast');
});

    $('#panel99C').click(function(){

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


$('#DARKui99Cx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    $('.ui99C').addClass(' DARKui99C');



      $('.lan99C').attr('class', 'lan99C');
      $('.lan99C').addClass('DARKlan99C');

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99C > label, .lan99C > button').addClass('Darklan99C > lan99C');
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      $('.itm99C').addClass('DARKitm99C');


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99C > label, .itm99C > button').addClass('itm99C > label');

////////////



      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                 $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      $('.py99C').addClass('DARKpy99C');


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           $('.py99C > label, .py99C > button').addClass('DARKpy99C > label');

/////////////      

      $('.fin99C').attr('class', 'fin99C');
      $('.fin99C').addClass('DARKfin99C');


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          $('.finB99C').addClass('DARKfinB99C');


             $('#total99C').attr('class', 'total99C');
             $('#total99C').addClass('DARKtotal99C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99Cx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    



      $('.lan99C').attr('class', 'lan99C');
      

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99C').attr('class', 'fin99C');
     


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          


             $('#total99C').attr('class', 'total99C');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99CMOBIx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    $('.ui99C').addClass(' DARKui99C');



      $('.lan99C').attr('class', 'lan99C');
      $('.lan99C').addClass('DARKlan99C');

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99C > label, .lan99C > button').addClass('Darklan99C > lan99C');
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      $('.itm99C').addClass('DARKitm99C');


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99C > label, .itm99C > button').addClass('itm99C > label');

////////////



      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                 $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      $('.py99C').addClass('DARKpy99C');


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           $('.py99C > label, .py99C > button').addClass('DARKpy99C > label');

/////////////      

      $('.fin99C').attr('class', 'fin99C');
      $('.fin99C').addClass('DARKfin99C');


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          $('.finB99C').addClass('DARKfinB99C');


             $('#total99C').attr('class', 'total99C');
             $('#total99C').addClass('DARKtotal99C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99CMOBIx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    



      $('.lan99C').attr('class', 'lan99C');
      

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99C').attr('class', 'fin99C');
     


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          


             $('#total99C').attr('class', 'total99C');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui99C').addClass('ui99CMOBI uiXXMOBI');


$('.lan99C').addClass('lan99CMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99C').addClass('itm99CMOBI');
$('.itmV99C').addClass('itmV99CMOBI');


$('.DropItmMenu99C').addClass('DropItmMenu99CMOBI'); 





$('.qty99C').addClass('qty99CMOBI'); 

$('.sub99C').addClass('sub99CMOBI'); 





$('.add99C').addClass('add99CMOBI'); 



$('.qtyvalue99C').addClass('qtyvalue99CMOBI'); 



$('.py99C').addClass('py99CMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99C').addClass('fin99CMOBI'); 





$('#total99C').addClass('total99CMOBI'); 





$('#refill99C, #buy99C').hide();

$('.refill99CMOBI, .buy99CMOBI').show();


$('#ride4099C').hide();



$('#CheckBalVM99C').show();
$('#cbalance99C').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99C').removeClass('ui99CMOBI uiXXMOBI');


$('.lan99C').removeClass('lan99CMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99C').removeClass('itm99CMOBI'); 


$('.itmV99C').removeClass('itmV99CMOBI');

$('.DropItmMenu99C').removeClass('DropItmMenu99CMOBI'); 



$('.qty99C').removeClass('qty99CMOBI'); 

$('.sub99C').removeClass('sub99CMOBI'); 




$('.add99C').removeClass('add99CMOBI'); 



$('.qtyvalue99C').removeClass('qtyvalue99CMOBI'); 



$('.py99C').removeClass('py99CMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99C').removeClass('fin99CMOBI'); 


$('#total99C').removeClass('total99CMOBI'); 



$('#refill99C, #buy99C').show();

$('.refill99CMOBI, .buy99CMOBI').hide();

$('#ride4099C').show();



$('#CheckBalVM99C').hide();
$('#cbalance99C').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99C').addClass('ui99CMOBI uiXXMOBI');


$('.lan99C').addClass('lan99CMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99C').addClass('itm99CMOBI');

$('.itmV99C').addClass('itmV99CMOBI'); 





$('.qty99C').addClass('qty99CMOBI'); 

$('.sub99C').addClass('sub99CMOBI'); 





$('.add99C').addClass('add99CMOBI'); 



$('.qtyvalue99C').addClass('qtyvalue99CMOBI'); 



$('.py99C').addClass('py99CMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99C').addClass('fin99CMOBI'); 





$('#total99C').addClass('total99CMOBI'); 





$('#refill99C, #buy99C').hide();

$('.refill99CMOBI, .buy99CMOBI').show();


$('#ride4099C').hide();



$('#CheckBalVM99C').show();
$('#cbalance99C').hide();$(document).ready(function(){





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


 



  $('#total99C').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99C= 1;
var itemValue99C=0;
var payMethod99C='none';
var total99C=0;
var totalMOBI99C=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99C').on('click', function(){

    itemValue99C = $(this).attr('value');
    qtyValue99C= 1;
    total99C= itemValue99C;
    totalMOBI99C= itemValue99C;
   //  total2= itemValue * qtyValue;
    
    


 total99C= "$"+itemValue99C;
    //Testing
 
    console.log('item value is ' + itemValue99C+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99C);
    console.log('Total is ' + total99C);

    

   //
 $('#total99C').attr('value', total99C);

 });

};
//functions to get quantity value


 $('#sub99C').on('click', function(){

    qtyValue99C = qtyValue99C - 1;
    $('#qtyvalue99C').attr('value', qtyValue99C);

      if(qtyValue99C <=20){
      
      $('#add99C').fadeIn('fast');

    }


    if(qtyValue99C === 0){
      qtyValue99C = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99C+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99C= qtyValue99C * itemValue99C;

   decimal99C=multiply99C.toFixed(2);
   
    total99C= decimal99C;
    totalMOBI99C= decimal99C;

  
  //testing
  total99C= "$" + total99C;
  console.log('total is ' + total99C);
  
 $('#total99C').attr('value', total99C);

//
 });






 $('#add99C').on('click', function(){
    qtyValue99C = qtyValue99C + 1;
    $('#qtyvalue99C').attr('value', qtyValue99C);

    //Testing
    console.log('quantity value is ' + qtyValue99C+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99C >=20){
    

    }

     if(qtyValue99C >=2){
      $('#sub99C').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99C= qtyValue99C * itemValue99C;

   decimal99C=multiply99C.toFixed(2);
   
    total99C= decimal99C;
    totalMOBI99C= decimal99C;
    console.log("quantity value * item value: " + total99C);
  
  //testing
  total99C= "$" + total99C;
  console.log('total is ' + total99C);
  console.log("quantity value * item value: " + total99C);
  
 $('#total99C').attr('value', total99C);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99C').click(function(){

   $('.sendGiftVM99C, .closeGiftVM99C').fadeIn();

});




$('.confirmSendVM99C').click(function(){
    $('.sendGiftVM99C, .closeGiftVM99C').fadeOut();
    totalGiftVM99C = 0;
    $('#totalGiftVM99C').attr('value', totalGiftVM99C);

    
$('.friendsVM99C').removeClass('active');

MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;



    $('.GiftSentVM99C').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99C').click(function(){
    $('.sendGiftVM99C, .closeGiftVM99C').fadeOut();

    totalGiftVM99C = 0;
    $('#totalGiftVM99C').attr('value', totalGiftVM99C);

$('.friendsVM99C').removeClass('active');
MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99C = 0;
JeffVM99C = 0;
MariaVM99C = 0;
JohnVM99C = 0;
LeahVM99C = 0;
PaulVM99C = 0;
JennyVM99C = 0;
GokuVM99C = 0;








$('#MySelfVM99C').click(function(){

  if (MySelfVM99C === 0){MySelfVM99C = 1;} else {MySelfVM99C=0;}

console.log(MySelfVM99C);
});






$('#JeffVM99C').click(function(){

  if (JeffVM99C === 0){JeffVM99C = 1;} else {JeffVM99C=0;}

console.log(JeffVM99C);
});


$('#MariaVM99C').click(function(){
  
  if (MariaVM99C === 0){MariaVM99C = 1;} else {MariaVM99C=0;}

console.log(MariaVM99C);
});


$('#JohnVM99C').click(function(){
  
  if (JohnVM99C === 0){JohnVM99C = 1;} else {JohnVM99C=0;}

console.log(JohnVM99C);
});


$('#LeahVM99C').click(function(){
  
  if (LeahVM99C === 0){LeahVM99C = 1;} else {LeahVM99C=0;}

console.log(LeahVM99C);
});


$('#PaulVM99C').click(function(){
  
  if (PaulVM99C === 0){PaulVM99C = 1;} else {PaulVM99C=0;}

console.log(PaulVM99C);
});



$('#JennyVM99C').click(function(){
  
  if (JennyVM99C === 0){JennyVM99C = 1;} else {JennyVM99C=0;}

console.log(JennyVM99C);
});


$('#GokuVM99C').click(function(){
  
  if (GokuVM99C === 0){GokuVM99C = 1;} else {GokuVM99C=0;}

console.log(GokuVM99C);
});















AllFriendsVM99C = JeffVM99C + MariaVM99C + JohnVM99C + LeahVM99C + PaulVM99C + JennyVM99C + GokuVM99C + MySelfVM99C; 




totalGiftVM99C = parseFloat(totalMOBI99C) * parseFloat(AllFriendsVM99C);


$('.friendsVM99C').click(function(){

AllFriendsVM99C = JeffVM99C + MariaVM99C + JohnVM99C + LeahVM99C + PaulVM99C + JennyVM99C + GokuVM99C + MySelfVM99C; 

totalGiftVM99C = parseFloat(totalMOBI99C) * parseFloat(AllFriendsVM99C);

 console.log("All friendsVM99C is =" + AllFriendsVM99C);
console.log("All friendsVM99C is =" + typeof('AllFriendsVM99C'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99C);
console.log("The totalMOBI99C =" + totalMOBI99C);
console.log("The totalGiftVM99C =" + totalMOBI99C);
console.log("The totalGiftVM99C =" + typeof('totalMOBI99C'));

$('#totalGiftVM99C').attr('value', totalGiftVM99C);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99C = $(this).attr('value');
console.log(payMethod99C);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99C = "none";
  itemValue99C = '';
  total99C = "$0.00";
  $('#total99C').attr('value', total99C);

  $('.itmV99C, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99C').fadeOut();
qtyValue99C = 1;

});



$('.buy99CMOBI').click(function(){

 if(itemValue99C !=='0' && payMethod99C !=='none'){
$('.BuyNewVM99C').fadeIn();
}

});



$(' #Refill99C').click(function(){
if(itemValue99C !=='0' && payMethod99C !=='none'){
$('.RenewVM99C').fadeIn();
}
});


$('#CheckBalVM99C').click(function(){
  $('.CheckBalVM99C').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99CMOBI, .selectmenu9A, .selectmenu9A2, #other99C').click(function(){
$('.qty99C').fadeOut();

});










$('.itmV99C').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99C= 1;
$('#qtyvalue99C').attr('value', qtyValue99C);

$('.qty99C').fadeIn('fast');
// $('#sub99C').fadeIn('fast');
// $('#add99C').fadeIn('fast');
// $('#qtyvalue99C').fadeIn('fast');


});



$('#ride799C, #ride3099C, #ridebt99C').click(function() {

qtyvalue99C= 1;
$('#qtyvalue99C').attr('value', qtyValue99C);
// $('.qty99C').fadeOut('fast');
// $('#sub99C').hide();
// $('#add99C').hide();
// $('#qtyvalue99C').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99C, #cbalance99C').click(function(){
$('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').removeClass('active');
$('#credit99C, #cash99C, #debit99C, #other99C').removeClass('active');
// $('#sub99C').hide();
// $('#add99C').hide();
// $('#qtyvalue99C').hide();


$('#total99C').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99C, #credit99C, #debit99C, #other99C').click(function(){
  payMethod99C= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99C + 'and item value is: ' +itemValue99C);

});

//Hide these PopUps

$('.seOptions99C, .seItem99C, .pmethod99C').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99C').click(function(){

  if(itemValue99C !=='0' && payMethod99C !=='none'){
   
      $('.check99C').hide();
       $('.thankRefill99C').hide();
       $('.thankBuy99C').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99C').hide(); 
         });

        }

 });




$('#refill99C').click(function(){

   if(itemValue99C !=='0' && payMethod99C !=='none'){
   
      $('.check99C').hide();
      $('.thankBuy99C').hide();
        $('.thankRefill99C').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99C').hide();


 });
}
});





/*

$('#buy99C').click(function(){

  if(itemValue99C =='0' && payMethod99C =='none'){
    $('.seOptions99C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99C !=='0' && payMethod99C =='none'){

      $('.pmethod99C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99C =='0' && payMethod99C !== 'none'){
       $('.seItem99C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99C').hide();
       $('.thankRefill99C').hide();
       $('.thankBuy99C').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99C').click(function(){

   if(itemValue99C =='0' && payMethod99C =='none'){
    $('.seOptions99C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99C !=='0' && payMethod99C =='none'){

      $('.pmethod99C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99C =='0' && payMethod99C !== 'none'){
       $('.seItem99C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99C').hide();
      $('.thankBuy99C').hide();
        $('.thankRefill99C').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99C').click(function(){
  $('.check99C').hide();
$('.thankRefill99C').hide();
 $('.thankBuy99C').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99C').click(function(){
   $('.check99C').hide();
  $('.thankBuy99C').hide();
    $('.thankRefill99C').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99C').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99C').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99C').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py" >Cash');
    $('#credit99C').html('<input type="radio" name="py" >Credit');
    $('#debit99C').html('<input type="radio" name="py" >Debit');
    $('#otherp99C').html('<input type="radio" name="py" >Other');

    $('#buy99C').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99C').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99C').click(function(){
  $('#ride199C').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299C').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799C').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99C').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099C').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99C').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99C').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99C').html('<input type="radio" name="py">Credito');
    $('#debit99C').html('<input type="radio" name="py" >Debito');
    $('#otherp99C').html('<input type="radio" name="py">Otros');

    $('#buy99C').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99C').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099C').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99C').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99C').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99C').html(' <input type="radio" name="py">金 ');
    $('#otherp99C').html(' <input type="radio" name="py">宪章 ');

    $('#buy99C').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99C').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099C').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99C').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99C').html('<input type="radio" name="py">кредитов');
    $('#debit99C').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99C').html('<input type="radio" name="py">Другое');

    $('#buy99C').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99C').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99C').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">Espèces');
    $('#credit99C').html('<input type="radio" name="py">Crédits');
    $('#debit99C').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99C').html('<input type="radio" name="py">Autres');

  
    $('#buy99C').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99C').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99C').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099C').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99C').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99C').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">現金');
    $('#credit99C').html('<input type="radio" name="py">クレジット');
    $('#debit99C').html('<input type="radio" name="py">ゴールド');
    $('#otherp99C').html('<input type="radio" name="py">その他');


    $('#buy99C').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99C').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99C').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099C').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99C').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">النقدية');
    $('#credit99C').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99C').html('<input type="radio" name="py">الذهب');
    $('#otherp99C').html('<input type="radio" name="py">ادولة');


    $('#buy99C').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99C').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99C').click(function(){

  $('#ride199C').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299C').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799C').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99C').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099C').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99C').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99C').html ('<input type="radio" name="py">Contanti');
    $('#credit99C').html('<input type="radio" name="py">Crediti');
    $('#debit99C').html('<input type="radio" name="py">Diamanti');
    $('#otherp99C').html('<input type="radio" name="py">Altro');



    $('#buy99C').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99C').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99C').click(function(){
 $('.check99C').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199C, #ride299C, #ride799C, #ride3099C, #ridebt99C, #cbalance99C').dblclick(function(){
    $('#panel99C').fadeIn('fast');
});

    $('#panel99C').click(function(){

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


$('#DARKui99Cx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    $('.ui99C').addClass(' DARKui99C');



      $('.lan99C').attr('class', 'lan99C');
      $('.lan99C').addClass('DARKlan99C');

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99C > label, .lan99C > button').addClass('Darklan99C > lan99C');
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      $('.itm99C').addClass('DARKitm99C');


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99C > label, .itm99C > button').addClass('itm99C > label');

////////////



      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                 $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      $('.py99C').addClass('DARKpy99C');


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           $('.py99C > label, .py99C > button').addClass('DARKpy99C > label');

/////////////      

      $('.fin99C').attr('class', 'fin99C');
      $('.fin99C').addClass('DARKfin99C');


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          $('.finB99C').addClass('DARKfinB99C');


             $('#total99C').attr('class', 'total99C');
             $('#total99C').addClass('DARKtotal99C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99Cx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    



      $('.lan99C').attr('class', 'lan99C');
      

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99C').attr('class', 'fin99C');
     


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          


             $('#total99C').attr('class', 'total99C');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99CMOBIx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    $('.ui99C').addClass(' DARKui99C');



      $('.lan99C').attr('class', 'lan99C');
      $('.lan99C').addClass('DARKlan99C');

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99C > label, .lan99C > button').addClass('Darklan99C > lan99C');
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      $('.itm99C').addClass('DARKitm99C');


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99C > label, .itm99C > button').addClass('itm99C > label');

////////////



      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                 $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      $('.py99C').addClass('DARKpy99C');


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           $('.py99C > label, .py99C > button').addClass('DARKpy99C > label');

/////////////      

      $('.fin99C').attr('class', 'fin99C');
      $('.fin99C').addClass('DARKfin99C');


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          $('.finB99C').addClass('DARKfinB99C');


             $('#total99C').attr('class', 'total99C');
             $('#total99C').addClass('DARKtotal99C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99CMOBIx').click(function(){
    $('.ui99C').attr('class', 'ui99C uiXX');
    



      $('.lan99C').attr('class', 'lan99C');
      

         $('.lan99C > label, .lan99C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99C').attr('class', 'itm99C');
      


           $('.itm99C > label, .itm99C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99C').attr('class', 'qty99C');
                $('#sub99C').attr('class', 'btn btn-primary btn-lg sub99C');
                $('#add99C').attr('class', 'btn btn-primary btn-lg add99C');
                $('#qtyvalue99C').attr('class', 'qtyvalue99C');





///////////

      $('.py99C').attr('class', 'py99C');
      


           $('.py99C > label, .py99C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99C').attr('class', 'fin99C');
     


          $('.finB99C').attr('class', 'btn btn-default btn-lg finB99C');
          


             $('#total99C').attr('class', 'total99C');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4, .NoVmFins').click(function(){




$('.ui99C').addClass('ui99CMOBI uiXXMOBI');


$('.lan99C').addClass('lan99CMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99C').addClass('itm99CMOBI');
$('.itmV99C').addClass('itmV99CMOBI');


$('.DropItmMenu99C').addClass('DropItmMenu99CMOBI'); 





$('.qty99C').addClass('qty99CMOBI'); 

$('.sub99C').addClass('sub99CMOBI'); 





$('.add99C').addClass('add99CMOBI'); 



$('.qtyvalue99C').addClass('qtyvalue99CMOBI'); 



$('.py99C').addClass('py99CMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99C').addClass('fin99CMOBI'); 





$('#total99C').addClass('total99CMOBI'); 





$('#refill99C, #buy99C').hide();

$('.refill99CMOBI, .buy99CMOBI').show();


$('#ride4099C').hide();



$('#CheckBalVM99C').show();
$('#cbalance99C').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99C').removeClass('ui99CMOBI uiXXMOBI');


$('.lan99C').removeClass('lan99CMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99C').removeClass('itm99CMOBI'); 


$('.itmV99C').removeClass('itmV99CMOBI');

$('.DropItmMenu99C').removeClass('DropItmMenu99CMOBI'); 



$('.qty99C').removeClass('qty99CMOBI'); 

$('.sub99C').removeClass('sub99CMOBI'); 




$('.add99C').removeClass('add99CMOBI'); 



$('.qtyvalue99C').removeClass('qtyvalue99CMOBI'); 



$('.py99C').removeClass('py99CMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99C').removeClass('fin99CMOBI'); 


$('#total99C').removeClass('total99CMOBI'); 



$('#refill99C, #buy99C').show();

$('.refill99CMOBI, .buy99CMOBI').hide();

$('#ride4099C').show();



$('#CheckBalVM99C').hide();
$('#cbalance99C').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99C').addClass('ui99CMOBI uiXXMOBI');


$('.lan99C').addClass('lan99CMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99C').addClass('itm99CMOBI');

$('.itmV99C').addClass('itmV99CMOBI'); 





$('.qty99C').addClass('qty99CMOBI'); 

$('.sub99C').addClass('sub99CMOBI'); 





$('.add99C').addClass('add99CMOBI'); 



$('.qtyvalue99C').addClass('qtyvalue99CMOBI'); 



$('.py99C').addClass('py99CMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99C').addClass('fin99CMOBI'); 





$('#total99C').addClass('total99CMOBI'); 





$('#refill99C, #buy99C').hide();

$('.refill99CMOBI, .buy99CMOBI').show();


$('#ride4099C').hide();



$('#CheckBalVM99C').show();
$('#cbalance99C').hide();