$(document).ready(function(){





$('#Vm7Maps').click(function(){
$('.ComingSoonVM7').fadeIn();
$('.ComingSoonVM7').removeClass('ComingSoonServStat');
$('.ComingSoonVM7').addClass('ComingSoonMap');
$('.Mapinput7').fadeIn();

});



$('#Vm7SChange').click(function(){
$('.ComingSoonVM7').fadeIn();
$('.ComingSoonVM7').removeClass('ComingSoonMap');
$('.ComingSoonVM7').addClass('ComingSoonServStat');
$('.Mapinput7').fadeOut();
});



$('#Vm7Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM7').fadeOut();
$('.Mapinput7').fadeOut()
});







  $('#total78A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue78A= 1;
var itemValue78A=0;
var payMethod78A='none';
var total78A=0;
var totalMOBI78A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV78A').on('click', function(){

    itemValue78A = $(this).attr('value');
    qtyValue78A= 1;
    total78A= itemValue78A;
    totalMOBI78A= itemValue78A;
   //  total2= itemValue * qtyValue;
    
    


 total78A= "$"+itemValue78A;
    //Testing
 
    console.log('item value is ' + itemValue78A+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue78A);
    console.log('Total is ' + total78A);

    

   //
 $('#total78A').attr('value', total78A);

 });

};
//functions to get quantity value


 $('#sub78A').on('click', function(){

    qtyValue78A = qtyValue78A - 1;
    $('#qtyvalue78A').attr('value', qtyValue78A);

      if(qtyValue78A <=20){
      
      $('#add78A').fadeIn('fast');

    }


    if(qtyValue78A === 0){
      qtyValue78A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue78A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply78A= qtyValue78A * itemValue78A;

   decimal78A=multiply78A.toFixed(2);
   
    total78A= decimal78A;
    totalMOBI78A= decimal78A;

  
  //testing
  total78A= "$" + total78A;
  console.log('total is ' + total78A);
  
 $('#total2').attr('value', total78A);

//
 });






 $('#add78A').on('click', function(){
    qtyValue78A = qtyValue78A + 1;
    $('#qtyvalue78A').attr('value', qtyValue78A);

    //Testing
    console.log('quantity value is ' + qtyValue78A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue78A >=20){
    

    }

     if(qtyValue78A >=2){
      $('#sub78A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply78A= qtyValue78A * itemValue78A;

   decimal78A=multiply78A.toFixed(2);
   
    total78A= decimal78A;
    totalMOBI78A= decimal78A;
    console.log("quantity value * item value: " + total78A);
  
  //testing
  total78A= "$" + total78A;
  console.log('total is ' + total78A);
  console.log("quantity value * item value: " + total78A);
  
 $('#total2').attr('value', total78A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift78A').click(function(){

   $('.sendGiftVM78A, .closeGiftVM78A').fadeIn();

});




$('.confirmSendVM78A').click(function(){
    $('.sendGiftVM78A, .closeGiftVM78A').fadeOut();
    totalGiftVM78A = 0;
    $('#totalGiftVM78A').attr('value', totalGiftVM78A);

    
$('.friendsVM78A').removeClass('active');

MySelfVM78A = 0;
JeffVM78A = 0;
MariaVM78A = 0;
JohnVM78A = 0;
LeahVM78A = 0;
PaulVM78A = 0;
JennyVM78A = 0;
GokuVM78A = 0;



    $('.GiftSentVM78A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM78A').click(function(){
    $('.sendGiftVM78A, .closeGiftVM78A').fadeOut();

    totalGiftVM78A = 0;
    $('#totalGiftVM78A').attr('value', totalGiftVM78A);

$('.friendsVM78A').removeClass('active');
MySelfVM78A = 0;
JeffVM78A = 0;
MariaVM78A = 0;
JohnVM78A = 0;
LeahVM78A = 0;
PaulVM78A = 0;
JennyVM78A = 0;
GokuVM78A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM78A = 0;
JeffVM78A = 0;
MariaVM78A = 0;
JohnVM78A = 0;
LeahVM78A = 0;
PaulVM78A = 0;
JennyVM78A = 0;
GokuVM78A = 0;








$('#MySelfVM78A').click(function(){

  if (MySelfVM78A === 0){MySelfVM78A = 1;} else {MySelfVM78A=0;}

console.log(MySelfVM78A);
});






$('#JeffVM78A').click(function(){

  if (JeffVM78A === 0){JeffVM78A = 1;} else {JeffVM78A=0;}

console.log(JeffVM78A);
});


$('#MariaVM78A').click(function(){
  
  if (MariaVM78A === 0){MariaVM78A = 1;} else {MariaVM78A=0;}

console.log(MariaVM78A);
});


$('#JohnVM78A').click(function(){
  
  if (JohnVM78A === 0){JohnVM78A = 1;} else {JohnVM78A=0;}

console.log(JohnVM78A);
});


$('#LeahVM78A').click(function(){
  
  if (LeahVM78A === 0){LeahVM78A = 1;} else {LeahVM78A=0;}

console.log(LeahVM78A);
});


$('#PaulVM78A').click(function(){
  
  if (PaulVM78A === 0){PaulVM78A = 1;} else {PaulVM78A=0;}

console.log(PaulVM78A);
});



$('#JennyVM78A').click(function(){
  
  if (JennyVM78A === 0){JennyVM78A = 1;} else {JennyVM78A=0;}

console.log(JennyVM78A);
});


$('#GokuVM78A').click(function(){
  
  if (GokuVM78A === 0){GokuVM78A = 1;} else {GokuVM78A=0;}

console.log(GokuVM78A);
});















AllFriendsVM78A = JeffVM78A + MariaVM78A + JohnVM78A + LeahVM78A + PaulVM78A + JennyVM78A + GokuVM78A + MySelfVM78A; 




totalGiftVM78A = parseFloat(totalMOBI78A) * parseFloat(AllFriendsVM78A);


$('.friendsVM78A').click(function(){

AllFriendsVM78A = JeffVM78A + MariaVM78A + JohnVM78A + LeahVM78A + PaulVM78A + JennyVM78A + GokuVM78A + MySelfVM78A; 

totalGiftVM78A = parseFloat(totalMOBI78A) * parseFloat(AllFriendsVM78A);

 console.log("All friendsVM78A is =" + AllFriendsVM78A);
console.log("All friendsVM78A is =" + typeof('AllFriendsVM78A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM78A);
console.log("The totalMOBI78A =" + totalMOBI78A);
console.log("The totalGiftVM78A =" + totalMOBI78A);
console.log("The totalGiftVM78A =" + typeof('totalMOBI78A'));

$('#totalGiftVM78A').attr('value', totalGiftVM78A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI77 > label').click(function(){
payMethod78A = $(this).attr('value');
console.log(payMethod78A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod78A = "none";
  itemValue78A = '';
  total78A = "$0.00";
  $('#total78A').attr('value', total78A);

  $('.itmV78A, .PayButtonsMOBI77 > label').removeClass('active');


$(this).fadeOut();
$('.qty78A').fadeOut();
qtyValue78A = 1;

});



$('.buy78AMOBI').click(function(){

 if(itemValue78A !=='0' && payMethod78A !=='none'){
$('.BuyNewVM78A').fadeIn();
}

});



$(' #Refill78A').click(function(){
if(itemValue78A !=='0' && payMethod78A !=='none'){
$('.RenewVM78A').fadeIn();
}
});


$('#CheckBalVM78A').click(function(){
  $('.CheckBalVM78A').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan78AMOBI, .selectmenu7A, .selectmenu7A2, #other78A').click(function(){
$('.qty78A').fadeOut();

});










$('.itmV78A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue78A= 1;
$('#qtyvalue78A').attr('value', qtyValue78A);

$('.qty78A').fadeIn('fast');
// $('#sub78A').fadeIn('fast');
// $('#add78A').fadeIn('fast');
// $('#qtyvalue78A').fadeIn('fast');


});



$('#ride778A, #ride3078A, #ridebt78A').click(function() {

qtyvalue78A= 1;
$('#qtyvalue78A').attr('value', qtyValue78A);
// $('.qty78A').fadeOut('fast');
// $('#sub78A').hide();
// $('#add78A').hide();
// $('#qtyvalue78A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan78A, #cbalance78A').click(function(){
$('#ride178A, #ride278A, #ride778A, #ride3078A, #ridebt78A, #cbalance78A').removeClass('active');
$('#credit78A, #cash78A, #debit78A, #other78A').removeClass('active');
// $('#sub78A').hide();
// $('#add78A').hide();
// $('#qtyvalue78A').hide();


$('#total78A').attr('value','$0.00');
});










//After selecting Payment method

$('#cash78A, #credit78A, #debit78A, #other78A').click(function(){
  payMethod78A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod78A + 'and item value is: ' +itemValue78A);

});

//Hide these PopUps

$('.seOptions78A, .seItem78A, .pmethod78A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy78A').click(function(){

  if(itemValue78A !=='0' && payMethod78A !=='none'){
   
      $('.check78A').hide();
       $('.thankRefill78A').hide();
       $('.thankBuy78A').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy78A').hide(); 
         });

        }

 });




$('#refill78A').click(function(){

   if(itemValue78A !=='0' && payMethod78A !=='none'){
   
      $('.check78A').hide();
      $('.thankBuy78A').hide();
        $('.thankRefill78A').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill78A').hide();


 });
}
});





/*

$('#buy78A').click(function(){

  if(itemValue78A =='0' && payMethod78A =='none'){
    $('.seOptions78A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue78A !=='0' && payMethod78A =='none'){

      $('.pmethod78A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue78A =='0' && payMethod78A !== 'none'){
       $('.seItem78A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check78A').hide();
       $('.thankRefill78A').hide();
       $('.thankBuy78A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill78A').click(function(){

   if(itemValue78A =='0' && payMethod78A =='none'){
    $('.seOptions78A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue78A !=='0' && payMethod78A =='none'){

      $('.pmethod78A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue78A =='0' && payMethod78A !== 'none'){
       $('.seItem78A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check78A').hide();
      $('.thankBuy78A').hide();
        $('.thankRefill78A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy78A').click(function(){
  $('.check78A').hide();
$('.thankRefill78A').hide();
 $('.thankBuy78A').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill78A').click(function(){
   $('.check78A').hide();
  $('.thankBuy78A').hide();
    $('.thankRefill78A').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check78A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride178A, #ride278A, #ride778A, #ride3078A, #ridebt78A, #cbalance78A').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel78A').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance78A').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3078A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other78A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py" >Cash');
    $('#credit78A').html('<input type="radio" name="py" >Credit');
    $('#debit78A').html('<input type="radio" name="py" >Debit');
    $('#otherp78A').html('<input type="radio" name="py" >Other');

    $('#buy78A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill78A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish78A').click(function(){
  $('#ride178A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride278A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride778A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance78A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3078A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other78A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash78A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit78A').html('<input type="radio" name="py">Credito');
    $('#debit78A').html('<input type="radio" name="py" >Debito');
    $('#otherp78A').html('<input type="radio" name="py">Otros');

    $('#buy78A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill78A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance78A').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3078A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other78A').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit78A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit78A').html(' <input type="radio" name="py">金 ');
    $('#otherp78A').html(' <input type="radio" name="py">宪章 ');

    $('#buy78A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill78A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance78A').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3078A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other78A').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit78A').html('<input type="radio" name="py">кредитов');
    $('#debit78A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp78A').html('<input type="radio" name="py">Другое');

    $('#buy78A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill78A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance78A').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3078A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other78A').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py">Espèces');
    $('#credit78A').html('<input type="radio" name="py">Crédits');
    $('#debit78A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp78A').html('<input type="radio" name="py">Autres');

  
    $('#buy78A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill78A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance78A').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3078A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt78A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other78A').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py">現金');
    $('#credit78A').html('<input type="radio" name="py">クレジット');
    $('#debit78A').html('<input type="radio" name="py">ゴールド');
    $('#otherp78A').html('<input type="radio" name="py">その他');


    $('#buy78A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill78A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance78A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3078A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other78A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py">النقدية');
    $('#credit78A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit78A').html('<input type="radio" name="py">الذهب');
    $('#otherp78A').html('<input type="radio" name="py">ادولة');


    $('#buy78A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill78A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian78A').click(function(){

  $('#ride178A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride278A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride778A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance78A').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3078A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other78A').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash78A').html ('<input type="radio" name="py">Contanti');
    $('#credit78A').html('<input type="radio" name="py">Crediti');
    $('#debit78A').html('<input type="radio" name="py">Diamanti');
    $('#otherp78A').html('<input type="radio" name="py">Altro');



    $('#buy78A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill78A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance78A').click(function(){
 $('.check78A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride178A, #ride278A, #ride778A, #ride3078A, #ridebt78A, #cbalance78A').dblclick(function(){
    $('#panel78A').fadeIn('fast');
});

    $('#panel78A').click(function(){

      $(this).fadeOut('fast');
     });


});





 

  









Vm7AscreenType = '';

///////////////////////////////////

$('#Vm7AMachinex').click(function(){

  console.log('buttons are ' + Vm7AscreenType);

Vm7AscreenType = 'Machine';

$('.UI5Abuttons').show();
$('.UI5AbuttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

Vm7AscreenType = 'Mobile';
$('.UI5Abuttons').hide();
$('.UI5AbuttonsMOBI').show();

console.log('buttons are ' + Vm7AscreenType);

});


////////////////////////////////////
















////////////////////////DarK Color UI3///////////////////////////


$('#DARKui78Ax').click(function(){
    $('.ui78A').attr('class', 'ui78A');
    $('.ui78A').addClass(' DARKui78A');



      $('.lan78A').attr('class', 'lan78A');
      $('.lan78A').addClass('DARKlan78A');

         $('.lan78A > label, .lan78A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan78A > label, .lan78A > button').addClass('Darklan78A > lan78A');
         $('#english1').addClass('active');
/////////////

      $('.itm78A').attr('class', 'itm78A');
      $('.itm78A').addClass('DARKitm78A');


           $('.itm78A > label, .itm78A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm78A > label, .itm78A > button').addClass('itm78A > label');

////////////



      $('.qty78A').attr('class', 'qty78A');
                $('#sub78A').attr('class', 'btn btn-primary btn-lg sub78A');
                $('#add78A').attr('class', 'btn btn-primary btn-lg add78A');
                 $('#qtyvalue78A').attr('class', 'qtyvalue78A');





///////////

      $('.py78A').attr('class', 'py78A');
      $('.py78A').addClass('DARKpy78A');


           $('.py78A > label, .py78A > button').attr('class', 'btn btn-default btn-lg')
           $('.py78A > label, .py78A > button').addClass('DARKpy78A > label');

/////////////      

      $('.fin78A').attr('class', 'fin78A');
      $('.fin78A').addClass('DARKfin78A');


          $('.finB78A').attr('class', 'btn btn-default btn-lg finB78A');
          $('.finB78A').addClass('DARKfinB78A');


             $('#total78A').attr('class', 'total78A');
             $('#total78A').addClass('DARKtotal78A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui78Ax').click(function(){
    $('.ui78A').attr('class', 'ui78A');
    



      $('.lan78A').attr('class', 'lan78A');
      

         $('.lan78A > label, .lan78A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm78A').attr('class', 'itm78A');
      


           $('.itm78A > label, .itm78A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty78A').attr('class', 'qty78A');
                $('#sub78A').attr('class', 'btn btn-primary btn-lg sub78A');
                $('#add78A').attr('class', 'btn btn-primary btn-lg add78A');
                $('#qtyvalue78A').attr('class', 'qtyvalue78A');





///////////

      $('.py78A').attr('class', 'py78A');
      


           $('.py78A > label, .py78A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin78A').attr('class', 'fin78A');
     


          $('.finB78A').attr('class', 'btn btn-default btn-lg finB78A');
          


             $('#total78A').attr('class', 'total78A');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui78AMOBIx').click(function(){
    $('.ui78A').attr('class', 'ui78A');
    $('.ui78A').addClass(' DARKui78A');



      $('.lan78A').attr('class', 'lan78A');
      $('.lan78A').addClass('DARKlan78A');

         $('.lan78A > label, .lan78A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan78A > label, .lan78A > button').addClass('Darklan78A > lan78A');
         $('#english1').addClass('active');
/////////////

      $('.itm78A').attr('class', 'itm78A');
      $('.itm78A').addClass('DARKitm78A');


           $('.itm78A > label, .itm78A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm78A > label, .itm78A > button').addClass('itm78A > label');

////////////



      $('.qty78A').attr('class', 'qty78A');
                $('#sub78A').attr('class', 'btn btn-primary btn-lg sub78A');
                $('#add78A').attr('class', 'btn btn-primary btn-lg add78A');
                 $('#qtyvalue78A').attr('class', 'qtyvalue78A');





///////////

      $('.py78A').attr('class', 'py78A');
      $('.py78A').addClass('DARKpy78A');


           $('.py78A > label, .py78A > button').attr('class', 'btn btn-default btn-lg')
           $('.py78A > label, .py78A > button').addClass('DARKpy78A > label');

/////////////      

      $('.fin78A').attr('class', 'fin78A');
      $('.fin78A').addClass('DARKfin78A');


          $('.finB78A').attr('class', 'btn btn-default btn-lg finB78A');
          $('.finB78A').addClass('DARKfinB78A');


             $('#total78A').attr('class', 'total78A');
             $('#total78A').addClass('DARKtotal78A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui78AMOBIx').click(function(){
    $('.ui78A').attr('class', 'ui78A');
    



      $('.lan78A').attr('class', 'lan78A');
      

         $('.lan78A > label, .lan78A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm78A').attr('class', 'itm78A');
      


           $('.itm78A > label, .itm78A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty78A').attr('class', 'qty78A');
                $('#sub78A').attr('class', 'btn btn-primary btn-lg sub78A');
                $('#add78A').attr('class', 'btn btn-primary btn-lg add78A');
                $('#qtyvalue78A').attr('class', 'qtyvalue78A');





///////////

      $('.py78A').attr('class', 'py78A');
      


           $('.py78A > label, .py78A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin78A').attr('class', 'fin78A');
     


          $('.finB78A').attr('class', 'btn btn-default btn-lg finB78A');
          


             $('#total78A').attr('class', 'total78A');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI7AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui78A').addClass('ui78AMOBI uiXXMOBI');


$('.lan78A').addClass('lan78AMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm78A').addClass('itm78AMOBI'); 
$('.itmV78A').addClass('itmV78AMOBI'); 



$('.DropItmMenu78A').addClass('DropItmMenu78AMOBI'); 



$('.qty78A').addClass('qty78AMOBI'); 

$('.sub78A').addClass('sub78AMOBI'); 





$('.add78A').addClass('add78AMOBI'); 



$('.qtyvalue78A').addClass('qtyvalue78AMOBI'); 



$('.py78A').addClass('py78AMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin78A').addClass('fin78AMOBI'); 





$('#total78A').addClass('total78AMOBI'); 





$('#refill78A, #buy78A').hide();

$('.refill78AMOBI, .buy78AMOBI').show();


$('#ride4078A').hide();



$('#CheckBalVM78A').show();
$('#cbalance78A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm7AMachinex, .UI7Abuttonsx > button').click(function(){



$('.ui78A').removeClass('ui78AMOBI uiXXMOBI');


$('.lan78A').removeClass('lan78AMOBI'); 


$('.Vm7LanB').show();
$('.Vm7LanBMOBI').hide();



$('.itm78A').removeClass('itm78AMOBI'); 
$('.itmV78A').removeClass('itmV78AMOBI'); 



$('.DropItmMenu78A').removeClass('DropItmMenu78AMOBI');



$('.qty78A').removeClass('qty78AMOBI'); 

$('.sub78A').removeClass('sub78AMOBI'); 




$('.add78A').removeClass('add78AMOBI'); 



$('.qtyvalue78A').removeClass('qtyvalue78AMOBI'); 



$('.py78A').removeClass('py78AMOBI');

$('.Paybuttons77').show(); 

$('.PayButtonsMOBI77').hide(); 



$('.fin78A').removeClass('fin78AMOBI'); 


$('#total78A').removeClass('total78AMOBI'); 



$('#refill78A, #buy78A').show();

$('.refill78AMOBI, .buy78AMOBI').hide();

$('#ride4078A').show();



$('#CheckBalVM78A').hide();
$('#cbalance78A').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui78A').addClass('ui78AMOBI uiXXMOBI');


$('.lan78A').addClass('lan78AMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm78A').addClass('itm78AMOBI'); 
$('.itmV78A').addClass('itmV78AMOBI'); 





$('.qty78A').addClass('qty78AMOBI'); 

$('.sub78A').addClass('sub78AMOBI'); 





$('.add78A').addClass('add78AMOBI'); 



$('.qtyvalue78A').addClass('qtyvalue78AMOBI'); 



$('.py78A').addClass('py78AMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin78A').addClass('fin78AMOBI'); 





$('#total78A').addClass('total78AMOBI'); 





$('#refill78A, #buy78A').hide();

$('.refill78AMOBI, .buy78AMOBI').show();


$('#ride4078A').hide();



$('#CheckBalVM78A').show();
$('#cbalance78A').hide();