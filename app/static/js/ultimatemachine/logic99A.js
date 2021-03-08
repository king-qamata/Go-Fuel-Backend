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


 



  $('#total99A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue99A= 1;
var itemValue99A=0;
var payMethod99A='none';
var total99A=0;
var totalMOBI99A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV99A').on('click', function(){

    itemValue99A = $(this).attr('value');
    qtyValue99A= 1;
    total99A= itemValue99A;
    totalMOBI99A= itemValue99A;
   //  total2= itemValue * qtyValue;
    
    


 total99A= "$"+itemValue99A;
    //Testing
 
    console.log('item value is ' + itemValue99A+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue99A);
    console.log('Total is ' + total99A);

    

   //
 $('#total99A').attr('value', total99A);

 });

};
//functions to get quantity value


 $('#sub99A').on('click', function(){

    qtyValue99A = qtyValue99A - 1;
    $('#qtyvalue99A').attr('value', qtyValue99A);

      if(qtyValue99A <=20){
      
      $('#add99A').fadeIn('fast');

    }


    if(qtyValue99A === 0){
      qtyValue99A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue99A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply99A= qtyValue99A * itemValue99A;

   decimal99A=multiply99A.toFixed(2);
   
    total99A= decimal99A;
    totalMOBI99A= decimal99A;

  
  //testing
  total99A= "$" + total99A;
  console.log('total is ' + total99A);
  
 $('#total99A').attr('value', total99A);

//
 });






 $('#add99A').on('click', function(){
    qtyValue99A = qtyValue99A + 1;
    $('#qtyvalue99A').attr('value', qtyValue99A);

    //Testing
    console.log('quantity value is ' + qtyValue99A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue99A >=20){
    

    }

     if(qtyValue99A >=2){
      $('#sub99A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply99A= qtyValue99A * itemValue99A;

   decimal99A=multiply99A.toFixed(2);
   
    total99A= decimal99A;
    totalMOBI99A= decimal99A;
    console.log("quantity value * item value: " + total99A);
  
  //testing
  total99A= "$" + total99A;
  console.log('total is ' + total99A);
  console.log("quantity value * item value: " + total99A);
  
 $('#total99A').attr('value', total99A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift99A').click(function(){

   $('.sendGiftVM99A, .closeGiftVM99A').fadeIn();

});




$('.confirmSendVM99A').click(function(){
    $('.sendGiftVM99A, .closeGiftVM99A').fadeOut();
    totalGiftVM99A = 0;
    $('#totalGiftVM99A').attr('value', totalGiftVM99A);

    
$('.friendsVM99A').removeClass('active');

MySelfVM99A = 0;
JeffVM99A = 0;
MariaVM99A = 0;
JohnVM99A = 0;
LeahVM99A = 0;
PaulVM99A = 0;
JennyVM99A = 0;
GokuVM99A = 0;



    $('.GiftSentVM99A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM99A').click(function(){
    $('.sendGiftVM99A, .closeGiftVM99A').fadeOut();

    totalGiftVM99A = 0;
    $('#totalGiftVM99A').attr('value', totalGiftVM99A);

$('.friendsVM99A').removeClass('active');
MySelfVM99A = 0;
JeffVM99A = 0;
MariaVM99A = 0;
JohnVM99A = 0;
LeahVM99A = 0;
PaulVM99A = 0;
JennyVM99A = 0;
GokuVM99A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM99A = 0;
JeffVM99A = 0;
MariaVM99A = 0;
JohnVM99A = 0;
LeahVM99A = 0;
PaulVM99A = 0;
JennyVM99A = 0;
GokuVM99A = 0;








$('#MySelfVM99A').click(function(){

  if (MySelfVM99A === 0){MySelfVM99A = 1;} else {MySelfVM99A=0;}

console.log(MySelfVM99A);
});






$('#JeffVM99A').click(function(){

  if (JeffVM99A === 0){JeffVM99A = 1;} else {JeffVM99A=0;}

console.log(JeffVM99A);
});


$('#MariaVM99A').click(function(){
  
  if (MariaVM99A === 0){MariaVM99A = 1;} else {MariaVM99A=0;}

console.log(MariaVM99A);
});


$('#JohnVM99A').click(function(){
  
  if (JohnVM99A === 0){JohnVM99A = 1;} else {JohnVM99A=0;}

console.log(JohnVM99A);
});


$('#LeahVM99A').click(function(){
  
  if (LeahVM99A === 0){LeahVM99A = 1;} else {LeahVM99A=0;}

console.log(LeahVM99A);
});


$('#PaulVM99A').click(function(){
  
  if (PaulVM99A === 0){PaulVM99A = 1;} else {PaulVM99A=0;}

console.log(PaulVM99A);
});



$('#JennyVM99A').click(function(){
  
  if (JennyVM99A === 0){JennyVM99A = 1;} else {JennyVM99A=0;}

console.log(JennyVM99A);
});


$('#GokuVM99A').click(function(){
  
  if (GokuVM99A === 0){GokuVM99A = 1;} else {GokuVM99A=0;}

console.log(GokuVM99A);
});















AllFriendsVM99A = JeffVM99A + MariaVM99A + JohnVM99A + LeahVM99A + PaulVM99A + JennyVM99A + GokuVM99A + MySelfVM99A; 




totalGiftVM99A = parseFloat(totalMOBI99A) * parseFloat(AllFriendsVM99A);


$('.friendsVM99A').click(function(){

AllFriendsVM99A = JeffVM99A + MariaVM99A + JohnVM99A + LeahVM99A + PaulVM99A + JennyVM99A + GokuVM99A + MySelfVM99A; 

totalGiftVM99A = parseFloat(totalMOBI99A) * parseFloat(AllFriendsVM99A);

 console.log("All friendsVM99A is =" + AllFriendsVM99A);
console.log("All friendsVM99A is =" + typeof('AllFriendsVM99A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM99A);
console.log("The totalMOBI99A =" + totalMOBI99A);
console.log("The totalGiftVM99A =" + totalMOBI99A);
console.log("The totalGiftVM99A =" + typeof('totalMOBI99A'));

$('#totalGiftVM99A').attr('value', totalGiftVM99A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI66 > label').click(function(){
payMethod99A = $(this).attr('value');
console.log(payMethod99A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod99A = "none";
  itemValue99A = '';
  total99A = "$0.00";
  $('#total99A').attr('value', total99A);

  $('.itmV99A, .PayButtonsMOBI66 > label').removeClass('active');


$(this).fadeOut();
$('.qty99A').fadeOut();
qtyValue99A = 1;

});



$('.buy99AMOBI').click(function(){

 if(itemValue99A !=='0' && payMethod99A !=='none'){
$('.BuyNewVM99A').fadeIn();
}

});



$(' #Refill99A').click(function(){
if(itemValue99A !=='0' && payMethod99A !=='none'){
$('.RenewVM99A').fadeIn();
}
});


$('#CheckBalVM99A').click(function(){
  $('.CheckBalVM99A').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan99AMOBI, .selectmenu9A, .selectmenu9A2, #other99A').click(function(){
$('.qty99A').fadeOut();

});










$('.itmV99A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue99A= 1;
$('#qtyvalue99A').attr('value', qtyValue99A);

$('.qty99A').fadeIn('fast');
// $('#sub99A').fadeIn('fast');
// $('#add99A').fadeIn('fast');
// $('#qtyvalue99A').fadeIn('fast');


});



$('#ride799A, #ride3099A, #ridebt99A').click(function() {

qtyvalue99A= 1;
$('#qtyvalue99A').attr('value', qtyValue99A);
// $('.qty99A').fadeOut('fast');
// $('#sub99A').hide();
// $('#add99A').hide();
// $('#qtyvalue99A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan99A, #cbalance99A').click(function(){
$('#ride199A, #ride299A, #ride799A, #ride3099A, #ridebt99A, #cbalance99A').removeClass('active');
$('#credit99A, #cash99A, #debit99A, #other99A').removeClass('active');
// $('#sub99A').hide();
// $('#add99A').hide();
// $('#qtyvalue99A').hide();


$('#total99A').attr('value','$0.00');
});










//After selecting Payment method

$('#cash99A, #credit99A, #debit99A, #other99A').click(function(){
  payMethod99A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod99A + 'and item value is: ' +itemValue99A);

});

//Hide these PopUps

$('.seOptions99A, .seItem99A, .pmethod99A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy99A').click(function(){

  if(itemValue99A !=='0' && payMethod99A !=='none'){
   
      $('.check99A').hide();
       $('.thankRefill99A').hide();
       $('.thankBuy99A').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy99A').hide(); 
         });

        }

 });




$('#refill99A').click(function(){

   if(itemValue99A !=='0' && payMethod99A !=='none'){
   
      $('.check99A').hide();
      $('.thankBuy99A').hide();
        $('.thankRefill99A').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill99A').hide();


 });
}
});





/*

$('#buy99A').click(function(){

  if(itemValue99A =='0' && payMethod99A =='none'){
    $('.seOptions99A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99A !=='0' && payMethod99A =='none'){

      $('.pmethod99A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99A =='0' && payMethod99A !== 'none'){
       $('.seItem99A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check99A').hide();
       $('.thankRefill99A').hide();
       $('.thankBuy99A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill99A').click(function(){

   if(itemValue99A =='0' && payMethod99A =='none'){
    $('.seOptions99A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue99A !=='0' && payMethod99A =='none'){

      $('.pmethod99A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue99A =='0' && payMethod99A !== 'none'){
       $('.seItem99A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check99A').hide();
      $('.thankBuy99A').hide();
        $('.thankRefill99A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy99A').click(function(){
  $('.check99A').hide();
$('.thankRefill99A').hide();
 $('.thankBuy99A').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill99A').click(function(){
   $('.check99A').hide();
  $('.thankBuy99A').hide();
    $('.thankRefill99A').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check99A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride199A, #ride299A, #ride799A, #ride3099A, #ridebt99A, #cbalance99A').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel99A').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance99A').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3099A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other99A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py" >Cash');
    $('#credit99A').html('<input type="radio" name="py" >Credit');
    $('#debit99A').html('<input type="radio" name="py" >Debit');
    $('#otherp99A').html('<input type="radio" name="py" >Other');

    $('#buy99A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill99A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish99A').click(function(){
  $('#ride199A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride299A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride799A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance99A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3099A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other99A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash99A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit99A').html('<input type="radio" name="py">Credito');
    $('#debit99A').html('<input type="radio" name="py" >Debito');
    $('#otherp99A').html('<input type="radio" name="py">Otros');

    $('#buy99A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill99A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance99A').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3099A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other99A').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit99A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit99A').html(' <input type="radio" name="py">金 ');
    $('#otherp99A').html(' <input type="radio" name="py">宪章 ');

    $('#buy99A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill99A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance99A').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3099A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other99A').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit99A').html('<input type="radio" name="py">кредитов');
    $('#debit99A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp99A').html('<input type="radio" name="py">Другое');

    $('#buy99A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill99A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance99A').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3099A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other99A').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py">Espèces');
    $('#credit99A').html('<input type="radio" name="py">Crédits');
    $('#debit99A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp99A').html('<input type="radio" name="py">Autres');

  
    $('#buy99A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill99A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance99A').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3099A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt99A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other99A').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py">現金');
    $('#credit99A').html('<input type="radio" name="py">クレジット');
    $('#debit99A').html('<input type="radio" name="py">ゴールド');
    $('#otherp99A').html('<input type="radio" name="py">その他');


    $('#buy99A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill99A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance99A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3099A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other99A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py">النقدية');
    $('#credit99A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit99A').html('<input type="radio" name="py">الذهب');
    $('#otherp99A').html('<input type="radio" name="py">ادولة');


    $('#buy99A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill99A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian99A').click(function(){

  $('#ride199A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride299A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride799A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance99A').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3099A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other99A').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash99A').html ('<input type="radio" name="py">Contanti');
    $('#credit99A').html('<input type="radio" name="py">Crediti');
    $('#debit99A').html('<input type="radio" name="py">Diamanti');
    $('#otherp99A').html('<input type="radio" name="py">Altro');



    $('#buy99A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill99A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance99A').click(function(){
 $('.check99A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride199A, #ride299A, #ride799A, #ride3099A, #ridebt99A, #cbalance99A').dblclick(function(){
    $('#panel99A').fadeIn('fast');
});

    $('#panel99A').click(function(){

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


$('#DARKui99Ax').click(function(){
    $('.ui99A').attr('class', 'ui99A uiXX');
    $('.ui99A').addClass(' DARKui99A');



      $('.lan99A').attr('class', 'lan99A');
      $('.lan99A').addClass('DARKlan99A');

         $('.lan99A > label, .lan99A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99A > label, .lan99A > button').addClass('Darklan99A > lan99A');
         $('#english1').addClass('active');
/////////////

      $('.itm99A').attr('class', 'itm99A');
      $('.itm99A').addClass('DARKitm99A');


           $('.itm99A > label, .itm99A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99A > label, .itm99A > button').addClass('itm99A > label');

////////////



      $('.qty99A').attr('class', 'qty99A');
                $('#sub99A').attr('class', 'btn btn-primary btn-lg sub99A');
                $('#add99A').attr('class', 'btn btn-primary btn-lg add99A');
                 $('#qtyvalue99A').attr('class', 'qtyvalue99A');





///////////

      $('.py99A').attr('class', 'py99A');
      $('.py99A').addClass('DARKpy99A');


           $('.py99A > label, .py99A > button').attr('class', 'btn btn-default btn-lg')
           $('.py99A > label, .py99A > button').addClass('DARKpy99A > label');

/////////////      

      $('.fin99A').attr('class', 'fin99A');
      $('.fin99A').addClass('DARKfin99A');


          $('.finB99A').attr('class', 'btn btn-default btn-lg finB99A');
          $('.finB99A').addClass('DARKfinB99A');


             $('#total99A').attr('class', 'total99A');
             $('#total99A').addClass('DARKtotal99A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99Ax').click(function(){
    $('.ui99A').attr('class', 'ui99A uiXX');
    



      $('.lan99A').attr('class', 'lan99A');
      

         $('.lan99A > label, .lan99A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99A').attr('class', 'itm99A');
      


           $('.itm99A > label, .itm99A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99A').attr('class', 'qty99A');
                $('#sub99A').attr('class', 'btn btn-primary btn-lg sub99A');
                $('#add99A').attr('class', 'btn btn-primary btn-lg add99A');
                $('#qtyvalue99A').attr('class', 'qtyvalue99A');





///////////

      $('.py99A').attr('class', 'py99A');
      


           $('.py99A > label, .py99A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99A').attr('class', 'fin99A');
     


          $('.finB99A').attr('class', 'btn btn-default btn-lg finB99A');
          


             $('#total99A').attr('class', 'total99A');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui99AMOBIx').click(function(){
    $('.ui99A').attr('class', 'ui99A uiXX');
    $('.ui99A').addClass(' DARKui99A');



      $('.lan99A').attr('class', 'lan99A');
      $('.lan99A').addClass('DARKlan99A');

         $('.lan99A > label, .lan99A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan99A > label, .lan99A > button').addClass('Darklan99A > lan99A');
         $('#english1').addClass('active');
/////////////

      $('.itm99A').attr('class', 'itm99A');
      $('.itm99A').addClass('DARKitm99A');


           $('.itm99A > label, .itm99A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm99A > label, .itm99A > button').addClass('itm99A > label');

////////////



      $('.qty99A').attr('class', 'qty99A');
                $('#sub99A').attr('class', 'btn btn-primary btn-lg sub99A');
                $('#add99A').attr('class', 'btn btn-primary btn-lg add99A');
                 $('#qtyvalue99A').attr('class', 'qtyvalue99A');





///////////

      $('.py99A').attr('class', 'py99A');
      $('.py99A').addClass('DARKpy99A');


           $('.py99A > label, .py99A > button').attr('class', 'btn btn-default btn-lg')
           $('.py99A > label, .py99A > button').addClass('DARKpy99A > label');

/////////////      

      $('.fin99A').attr('class', 'fin99A');
      $('.fin99A').addClass('DARKfin99A');


          $('.finB99A').attr('class', 'btn btn-default btn-lg finB99A');
          $('.finB99A').addClass('DARKfinB99A');


             $('#total99A').attr('class', 'total99A');
             $('#total99A').addClass('DARKtotal99A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui99AMOBIx').click(function(){
    $('.ui99A').attr('class', 'ui99A uiXX');
    



      $('.lan99A').attr('class', 'lan99A');
      

         $('.lan99A > label, .lan99A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm99A').attr('class', 'itm99A');
      


           $('.itm99A > label, .itm99A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty99A').attr('class', 'qty99A');
                $('#sub99A').attr('class', 'btn btn-primary btn-lg sub99A');
                $('#add99A').attr('class', 'btn btn-primary btn-lg add99A');
                $('#qtyvalue99A').attr('class', 'qtyvalue99A');





///////////

      $('.py99A').attr('class', 'py99A');
      


           $('.py99A > label, .py99A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin99A').attr('class', 'fin99A');
     


          $('.finB99A').attr('class', 'btn btn-default btn-lg finB99A');
          


             $('#total99A').attr('class', 'total99A');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI9AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui99A').addClass('ui99AMOBI uiXXMOBI');


$('.lan99A').addClass('lan99AMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99A').addClass('itm99AMOBI');
$('.itmV99A').addClass('itmV99AMOBI');


$('.DropItmMenu99A').addClass('DropItmMenu99AMOBI'); 





$('.qty99A').addClass('qty99AMOBI'); 

$('.sub99A').addClass('sub99AMOBI'); 





$('.add99A').addClass('add99AMOBI'); 



$('.qtyvalue99A').addClass('qtyvalue99AMOBI'); 



$('.py99A').addClass('py99AMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99A').addClass('fin99AMOBI'); 





$('#total99A').addClass('total99AMOBI'); 





$('#refill99A, #buy99A').hide();

$('.refill99AMOBI, .buy99AMOBI').show();


$('#ride4099A').hide();



$('#CheckBalVM99A').show();
$('#cbalance99A').hide();



});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm2Machine, .UI9Abuttonsx > button').click(function(){



$('.ui99A').removeClass('ui99AMOBI uiXXMOBI');


$('.lan99A').removeClass('lan99AMOBI'); 


$('.Vm6LanB').show();
$('.Vm6LanBMOBI').hide();



$('.itm99A').removeClass('itm99AMOBI'); 


$('.itmV99A').removeClass('itmV99AMOBI');

$('.DropItmMenu99A').removeClass('DropItmMenu99AMOBI'); 



$('.qty99A').removeClass('qty99AMOBI'); 

$('.sub99A').removeClass('sub99AMOBI'); 




$('.add99A').removeClass('add99AMOBI'); 



$('.qtyvalue99A').removeClass('qtyvalue99AMOBI'); 



$('.py99A').removeClass('py99AMOBI');

$('.Paybuttons66').show(); 

$('.PayButtonsMOBI66').hide(); 



$('.fin99A').removeClass('fin99AMOBI'); 


$('#total99A').removeClass('total99AMOBI'); 



$('#refill99A, #buy99A').show();

$('.refill99AMOBI, .buy99AMOBI').hide();

$('#ride4099A').show();



$('#CheckBalVM99A').hide();
$('#cbalance99A').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui99A').addClass('ui99AMOBI uiXXMOBI');


$('.lan99A').addClass('lan99AMOBI'); 


$('.Vm6LanB').hide();
$('.Vm6LanBMOBI').show();



$('.itm99A').addClass('itm99AMOBI');

$('.itmV99A').addClass('itmV99AMOBI'); 





$('.qty99A').addClass('qty99AMOBI'); 

$('.sub99A').addClass('sub99AMOBI'); 





$('.add99A').addClass('add99AMOBI'); 



$('.qtyvalue99A').addClass('qtyvalue99AMOBI'); 



$('.py99A').addClass('py99AMOBI');

$('.Paybuttons66').hide(); 

$('.PayButtonsMOBI66').show(); 



$('.fin99A').addClass('fin99AMOBI'); 





$('#total99A').addClass('total99AMOBI'); 





$('#refill99A, #buy99A').hide();

$('.refill99AMOBI, .buy99AMOBI').show();


$('#ride4099A').hide();



$('#CheckBalVM99A').show();
$('#cbalance99A').hide();