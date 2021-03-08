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







  $('#total77A').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue77A= 1;
var itemValue77A=0;
var payMethod77A='none';
var total77A=0;
var totalMOBI77A=0;






//function to get itm value
function getItemValue()

{
 $('.itmV77A').on('click', function(){

    itemValue77A = $(this).attr('value');
    qtyValue77A= 1;
    total77A= itemValue77A;
    totalMOBI77A= itemValue77A;
   //  total2= itemValue * qtyValue;
    
    


 total77A= "$"+itemValue77A;
    //Testing
 
    console.log('item value is ' + itemValue77A+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue77A);
    console.log('Total is ' + total77A);

    

   //
 $('#total77A').attr('value', total77A);

 });

};
//functions to get quantity value


 $('#sub77A').on('click', function(){

    qtyValue77A = qtyValue77A - 1;
    $('#qtyvalue77A').attr('value', qtyValue77A);

      if(qtyValue77A <=20){
      
      $('#add77A').fadeIn('fast');

    }


    if(qtyValue77A === 0){
      qtyValue77A = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue77A+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply77A= qtyValue77A * itemValue77A;

   decimal77A=multiply77A.toFixed(2);
   
    total77A= decimal77A;
    totalMOBI77A= decimal77A;

  
  //testing
  total77A= "$" + total77A;
  console.log('total is ' + total77A);
  
 $('#total2').attr('value', total77A);

//
 });






 $('#add77A').on('click', function(){
    qtyValue77A = qtyValue77A + 1;
    $('#qtyvalue77A').attr('value', qtyValue77A);

    //Testing
    console.log('quantity value is ' + qtyValue77A+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue77A >=20){
    

    }

     if(qtyValue77A >=2){
      $('#sub77A').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply77A= qtyValue77A * itemValue77A;

   decimal77A=multiply77A.toFixed(2);
   
    total77A= decimal77A;
    totalMOBI77A= decimal77A;
    console.log("quantity value * item value: " + total77A);
  
  //testing
  total77A= "$" + total77A;
  console.log('total is ' + total77A);
  console.log("quantity value * item value: " + total77A);
  
 $('#total2').attr('value', total77A);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift77A').click(function(){

   $('.sendGiftVM77A, .closeGiftVM77A').fadeIn();

});




$('.confirmSendVM77A').click(function(){
    $('.sendGiftVM77A, .closeGiftVM77A').fadeOut();
    totalGiftVM77A = 0;
    $('#totalGiftVM77A').attr('value', totalGiftVM77A);

    
$('.friendsVM77A').removeClass('active');

MySelfVM77A = 0;
JeffVM77A = 0;
MariaVM77A = 0;
JohnVM77A = 0;
LeahVM77A = 0;
PaulVM77A = 0;
JennyVM77A = 0;
GokuVM77A = 0;



    $('.GiftSentVM77A').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM77A').click(function(){
    $('.sendGiftVM77A, .closeGiftVM77A').fadeOut();

    totalGiftVM77A = 0;
    $('#totalGiftVM77A').attr('value', totalGiftVM77A);

$('.friendsVM77A').removeClass('active');
MySelfVM77A = 0;
JeffVM77A = 0;
MariaVM77A = 0;
JohnVM77A = 0;
LeahVM77A = 0;
PaulVM77A = 0;
JennyVM77A = 0;
GokuVM77A = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM77A = 0;
JeffVM77A = 0;
MariaVM77A = 0;
JohnVM77A = 0;
LeahVM77A = 0;
PaulVM77A = 0;
JennyVM77A = 0;
GokuVM77A = 0;








$('#MySelfVM77A').click(function(){

  if (MySelfVM77A === 0){MySelfVM77A = 1;} else {MySelfVM77A=0;}

console.log(MySelfVM77A);
});






$('#JeffVM77A').click(function(){

  if (JeffVM77A === 0){JeffVM77A = 1;} else {JeffVM77A=0;}

console.log(JeffVM77A);
});


$('#MariaVM77A').click(function(){
  
  if (MariaVM77A === 0){MariaVM77A = 1;} else {MariaVM77A=0;}

console.log(MariaVM77A);
});


$('#JohnVM77A').click(function(){
  
  if (JohnVM77A === 0){JohnVM77A = 1;} else {JohnVM77A=0;}

console.log(JohnVM77A);
});


$('#LeahVM77A').click(function(){
  
  if (LeahVM77A === 0){LeahVM77A = 1;} else {LeahVM77A=0;}

console.log(LeahVM77A);
});


$('#PaulVM77A').click(function(){
  
  if (PaulVM77A === 0){PaulVM77A = 1;} else {PaulVM77A=0;}

console.log(PaulVM77A);
});



$('#JennyVM77A').click(function(){
  
  if (JennyVM77A === 0){JennyVM77A = 1;} else {JennyVM77A=0;}

console.log(JennyVM77A);
});


$('#GokuVM77A').click(function(){
  
  if (GokuVM77A === 0){GokuVM77A = 1;} else {GokuVM77A=0;}

console.log(GokuVM77A);
});















AllFriendsVM77A = JeffVM77A + MariaVM77A + JohnVM77A + LeahVM77A + PaulVM77A + JennyVM77A + GokuVM77A + MySelfVM77A; 




totalGiftVM77A = parseFloat(totalMOBI77A) * parseFloat(AllFriendsVM77A);


$('.friendsVM77A').click(function(){

AllFriendsVM77A = JeffVM77A + MariaVM77A + JohnVM77A + LeahVM77A + PaulVM77A + JennyVM77A + GokuVM77A + MySelfVM77A; 

totalGiftVM77A = parseFloat(totalMOBI77A) * parseFloat(AllFriendsVM77A);

 console.log("All friendsVM77A is =" + AllFriendsVM77A);
console.log("All friendsVM77A is =" + typeof('AllFriendsVM77A'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM77A);
console.log("The totalMOBI77A =" + totalMOBI77A);
console.log("The totalGiftVM77A =" + totalMOBI77A);
console.log("The totalGiftVM77A =" + typeof('totalMOBI77A'));

$('#totalGiftVM77A').attr('value', totalGiftVM77A);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI77 > label').click(function(){
payMethod77A = $(this).attr('value');
console.log(payMethod77A);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod77A = "none";
  itemValue77A = '';
  total77A = "$0.00";
  $('#total77A').attr('value', total77A);

  $('.itmV77A, .PayButtonsMOBI77 > label').removeClass('active');


$(this).fadeOut();
$('.qty77A').fadeOut();
qtyValue77A = 1;

});



$('.buy77AMOBI').click(function(){

 if(itemValue77A !=='0' && payMethod77A !=='none'){
$('.BuyNewVM77A').fadeIn();
}

});



$(' #Refill77A').click(function(){
if(itemValue77A !=='0' && payMethod77A !=='none'){
$('.RenewVM77A').fadeIn();
}
});


$('#CheckBalVM77A').click(function(){
  $('.CheckBalVM77A').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan77AMOBI, .selectmenu7A, .selectmenu7A2, #other77A').click(function(){
$('.qty77A').fadeOut();

});










$('.itmV77A').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue77A= 1;
$('#qtyvalue77A').attr('value', qtyValue77A);

$('.qty77A').fadeIn('fast');
// $('#sub77A').fadeIn('fast');
// $('#add77A').fadeIn('fast');
// $('#qtyvalue77A').fadeIn('fast');


});



$('#ride777A, #ride3077A, #ridebt77A').click(function() {

qtyvalue77A= 1;
$('#qtyvalue77A').attr('value', qtyValue77A);
// $('.qty77A').fadeOut('fast');
// $('#sub77A').hide();
// $('#add77A').hide();
// $('#qtyvalue77A').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan77A, #cbalance77A').click(function(){
$('#ride177A, #ride277A, #ride777A, #ride3077A, #ridebt77A, #cbalance77A').removeClass('active');
$('#credit77A, #cash77A, #debit77A, #other77A').removeClass('active');
// $('#sub77A').hide();
// $('#add77A').hide();
// $('#qtyvalue77A').hide();


$('#total77A').attr('value','$0.00');
});










//After selecting Payment method

$('#cash77A, #credit77A, #debit77A, #other77A').click(function(){
  payMethod77A= $(this).attr('value');
  console.log('Payment method is: ' + payMethod77A + 'and item value is: ' +itemValue77A);

});

//Hide these PopUps

$('.seOptions77A, .seItem77A, .pmethod77A').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy77A').click(function(){

  if(itemValue77A !=='0' && payMethod77A !=='none'){
   
      $('.check77A').hide();
       $('.thankRefill77A').hide();
       $('.thankBuy77A').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy77A').hide(); 
         });

        }

 });




$('#refill77A').click(function(){

   if(itemValue77A !=='0' && payMethod77A !=='none'){
   
      $('.check77A').hide();
      $('.thankBuy77A').hide();
        $('.thankRefill77A').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill77A').hide();


 });
}
});





/*

$('#buy77A').click(function(){

  if(itemValue77A =='0' && payMethod77A =='none'){
    $('.seOptions77A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77A !=='0' && payMethod77A =='none'){

      $('.pmethod77A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77A =='0' && payMethod77A !== 'none'){
       $('.seItem77A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check77A').hide();
       $('.thankRefill77A').hide();
       $('.thankBuy77A').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill77A').click(function(){

   if(itemValue77A =='0' && payMethod77A =='none'){
    $('.seOptions77A').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77A !=='0' && payMethod77A =='none'){

      $('.pmethod77A').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77A =='0' && payMethod77A !== 'none'){
       $('.seItem77A').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check77A').hide();
      $('.thankBuy77A').hide();
        $('.thankRefill77A').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy77A').click(function(){
  $('.check77A').hide();
$('.thankRefill77A').hide();
 $('.thankBuy77A').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill77A').click(function(){
   $('.check77A').hide();
  $('.thankBuy77A').hide();
    $('.thankRefill77A').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check77A').hide();
 });

});



*/



     

     

//firts UI
     $('#ride177A, #ride277A, #ride777A, #ride3077A, #ridebt77A, #cbalance77A').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel77A').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance77A').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3077A').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other77A').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py" >Cash');
    $('#credit77A').html('<input type="radio" name="py" >Credit');
    $('#debit77A').html('<input type="radio" name="py" >Debit');
    $('#otherp77A').html('<input type="radio" name="py" >Other');

    $('#buy77A').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill77A').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish77A').click(function(){
  $('#ride177A').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride277A').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride777A').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance77A').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3077A').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other77A').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash77A').html ('<input type="radio" name="py"> Efectivo');
    $('#credit77A').html('<input type="radio" name="py">Credito');
    $('#debit77A').html('<input type="radio" name="py" >Debito');
    $('#otherp77A').html('<input type="radio" name="py">Otros');

    $('#buy77A').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill77A').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance77A').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3077A').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other77A').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py"> 现金 ');
    $('#credit77A').html('<input type="radio" name="py"> 个学分 ');
    $('#debit77A').html(' <input type="radio" name="py">金 ');
    $('#otherp77A').html(' <input type="radio" name="py">宪章 ');

    $('#buy77A').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill77A').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance77A').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3077A').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other77A').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit77A').html('<input type="radio" name="py">кредитов');
    $('#debit77A').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp77A').html('<input type="radio" name="py">Другое');

    $('#buy77A').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill77A').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance77A').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3077A').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other77A').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py">Espèces');
    $('#credit77A').html('<input type="radio" name="py">Crédits');
    $('#debit77A').html('<input type="radio" name="py">DÉBIT');
    $('#otherp77A').html('<input type="radio" name="py">Autres');

  
    $('#buy77A').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill77A').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance77A').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3077A').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt77A').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other77A').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py">現金');
    $('#credit77A').html('<input type="radio" name="py">クレジット');
    $('#debit77A').html('<input type="radio" name="py">ゴールド');
    $('#otherp77A').html('<input type="radio" name="py">その他');


    $('#buy77A').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill77A').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance77A').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3077A').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other77A').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py">النقدية');
    $('#credit77A').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit77A').html('<input type="radio" name="py">الذهب');
    $('#otherp77A').html('<input type="radio" name="py">ادولة');


    $('#buy77A').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill77A').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian77A').click(function(){

  $('#ride177A').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride277A').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride777A').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance77A').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3077A').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other77A').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash77A').html ('<input type="radio" name="py">Contanti');
    $('#credit77A').html('<input type="radio" name="py">Crediti');
    $('#debit77A').html('<input type="radio" name="py">Diamanti');
    $('#otherp77A').html('<input type="radio" name="py">Altro');



    $('#buy77A').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill77A').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance77A').click(function(){
 $('.check77A').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride177A, #ride277A, #ride777A, #ride3077A, #ridebt77A, #cbalance77A').dblclick(function(){
    $('#panel77A').fadeIn('fast');
});

    $('#panel77A').click(function(){

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


$('#DARKui77Ax').click(function(){
    $('.ui77A').attr('class', 'ui77A');
    $('.ui77A').addClass(' DARKui77A');



      $('.lan77A').attr('class', 'lan77A');
      $('.lan77A').addClass('DARKlan77A');

         $('.lan77A > label, .lan77A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77A > label, .lan77A > button').addClass('Darklan77A > lan77A');
         $('#english1').addClass('active');
/////////////

      $('.itm77A').attr('class', 'itm77A');
      $('.itm77A').addClass('DARKitm77A');


           $('.itm77A > label, .itm77A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77A > label, .itm77A > button').addClass('itm77A > label');

////////////



      $('.qty77A').attr('class', 'qty77A');
                $('#sub77A').attr('class', 'btn btn-primary btn-lg sub77A');
                $('#add77A').attr('class', 'btn btn-primary btn-lg add77A');
                 $('#qtyvalue77A').attr('class', 'qtyvalue77A');





///////////

      $('.py77A').attr('class', 'py77A');
      $('.py77A').addClass('DARKpy77A');


           $('.py77A > label, .py77A > button').attr('class', 'btn btn-default btn-lg')
           $('.py77A > label, .py77A > button').addClass('DARKpy77A > label');

/////////////      

      $('.fin77A').attr('class', 'fin77A');
      $('.fin77A').addClass('DARKfin77A');


          $('.finB77A').attr('class', 'btn btn-default btn-lg finB77A');
          $('.finB77A').addClass('DARKfinB77A');


             $('#total77A').attr('class', 'total77A');
             $('#total77A').addClass('DARKtotal77A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77Ax').click(function(){
    $('.ui77A').attr('class', 'ui77A');
    



      $('.lan77A').attr('class', 'lan77A');
      

         $('.lan77A > label, .lan77A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77A').attr('class', 'itm77A');
      


           $('.itm77A > label, .itm77A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77A').attr('class', 'qty77A');
                $('#sub77A').attr('class', 'btn btn-primary btn-lg sub77A');
                $('#add77A').attr('class', 'btn btn-primary btn-lg add77A');
                $('#qtyvalue77A').attr('class', 'qtyvalue77A');





///////////

      $('.py77A').attr('class', 'py77A');
      


           $('.py77A > label, .py77A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77A').attr('class', 'fin77A');
     


          $('.finB77A').attr('class', 'btn btn-default btn-lg finB77A');
          


             $('#total77A').attr('class', 'total77A');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui77AMOBIx').click(function(){
    $('.ui77A').attr('class', 'ui77A');
    $('.ui77A').addClass(' DARKui77A');



      $('.lan77A').attr('class', 'lan77A');
      $('.lan77A').addClass('DARKlan77A');

         $('.lan77A > label, .lan77A > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77A > label, .lan77A > button').addClass('Darklan77A > lan77A');
         $('#english1').addClass('active');
/////////////

      $('.itm77A').attr('class', 'itm77A');
      $('.itm77A').addClass('DARKitm77A');


           $('.itm77A > label, .itm77A > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77A > label, .itm77A > button').addClass('itm77A > label');

////////////



      $('.qty77A').attr('class', 'qty77A');
                $('#sub77A').attr('class', 'btn btn-primary btn-lg sub77A');
                $('#add77A').attr('class', 'btn btn-primary btn-lg add77A');
                 $('#qtyvalue77A').attr('class', 'qtyvalue77A');





///////////

      $('.py77A').attr('class', 'py77A');
      $('.py77A').addClass('DARKpy77A');


           $('.py77A > label, .py77A > button').attr('class', 'btn btn-default btn-lg')
           $('.py77A > label, .py77A > button').addClass('DARKpy77A > label');

/////////////      

      $('.fin77A').attr('class', 'fin77A');
      $('.fin77A').addClass('DARKfin77A');


          $('.finB77A').attr('class', 'btn btn-default btn-lg finB77A');
          $('.finB77A').addClass('DARKfinB77A');


             $('#total77A').attr('class', 'total77A');
             $('#total77A').addClass('DARKtotal77A');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77AMOBIx').click(function(){
    $('.ui77A').attr('class', 'ui77A');
    



      $('.lan77A').attr('class', 'lan77A');
      

         $('.lan77A > label, .lan77A > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77A').attr('class', 'itm77A');
      


           $('.itm77A > label, .itm77A > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77A').attr('class', 'qty77A');
                $('#sub77A').attr('class', 'btn btn-primary btn-lg sub77A');
                $('#add77A').attr('class', 'btn btn-primary btn-lg add77A');
                $('#qtyvalue77A').attr('class', 'qtyvalue77A');





///////////

      $('.py77A').attr('class', 'py77A');
      


           $('.py77A > label, .py77A > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77A').attr('class', 'fin77A');
     


          $('.finB77A').attr('class', 'btn btn-default btn-lg finB77A');
          


             $('#total77A').attr('class', 'total77A');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI7AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui77A').addClass('ui77AMOBI uiXXMOBI');


$('.lan77A').addClass('lan77AMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77A').addClass('itm77AMOBI'); 
$('.itmV77A').addClass('itmV77AMOBI'); 



$('.DropItmMenu77A').addClass('DropItmMenu77AMOBI'); 



$('.qty77A').addClass('qty77AMOBI'); 

$('.sub77A').addClass('sub77AMOBI'); 





$('.add77A').addClass('add77AMOBI'); 



$('.qtyvalue77A').addClass('qtyvalue77AMOBI'); 



$('.py77A').addClass('py77AMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77A').addClass('fin77AMOBI'); 





$('#total77A').addClass('total77AMOBI'); 





$('#refill77A, #buy77A').hide();

$('.refill77AMOBI, .buy77AMOBI').show();


$('#ride4077A').hide();



$('#CheckBalVM77A').show();
$('#cbalance77A').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm7AMachinex, .UI7Abuttonsx > button').click(function(){



$('.ui77A').removeClass('ui77AMOBI uiXXMOBI');


$('.lan77A').removeClass('lan77AMOBI'); 


$('.Vm7LanB').show();
$('.Vm7LanBMOBI').hide();



$('.itm77A').removeClass('itm77AMOBI'); 
$('.itmV77A').removeClass('itmV77AMOBI'); 



$('.DropItmMenu77A').removeClass('DropItmMenu77AMOBI');



$('.qty77A').removeClass('qty77AMOBI'); 

$('.sub77A').removeClass('sub77AMOBI'); 




$('.add77A').removeClass('add77AMOBI'); 



$('.qtyvalue77A').removeClass('qtyvalue77AMOBI'); 



$('.py77A').removeClass('py77AMOBI');

$('.Paybuttons77').show(); 

$('.PayButtonsMOBI77').hide(); 



$('.fin77A').removeClass('fin77AMOBI'); 


$('#total77A').removeClass('total77AMOBI'); 



$('#refill77A, #buy77A').show();

$('.refill77AMOBI, .buy77AMOBI').hide();

$('#ride4077A').show();



$('#CheckBalVM77A').hide();
$('#cbalance77A').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui77A').addClass('ui77AMOBI uiXXMOBI');


$('.lan77A').addClass('lan77AMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77A').addClass('itm77AMOBI'); 
$('.itmV77A').addClass('itmV77AMOBI'); 





$('.qty77A').addClass('qty77AMOBI'); 

$('.sub77A').addClass('sub77AMOBI'); 





$('.add77A').addClass('add77AMOBI'); 



$('.qtyvalue77A').addClass('qtyvalue77AMOBI'); 



$('.py77A').addClass('py77AMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77A').addClass('fin77AMOBI'); 





$('#total77A').addClass('total77AMOBI'); 





$('#refill77A, #buy77A').hide();

$('.refill77AMOBI, .buy77AMOBI').show();


$('#ride4077A').hide();



$('#CheckBalVM77A').show();
$('#cbalance77A').hide();