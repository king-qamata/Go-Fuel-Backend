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







  $('#total77B').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue77B= 1;
var itemValue77B=0;
var payMethod77B='none';
var total77B=0;
var totalMOBI77B=0;






//function to get itm value
function getItemValue()

{
 $('.itmV77B').on('click', function(){

    itemValue77B = $(this).attr('value');
    qtyValue77B= 1;
    total77B= itemValue77B;
    totalMOBI77B= itemValue77B;
   //  total2= itemValue * qtyValue;
    
    


 total77B= "$"+itemValue77B;
    //Testing
 
    console.log('item value is ' + itemValue77B+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue77B);
    console.log('Total is ' + total77B);

    

   //
 $('#total77B').attr('value', total77B);

 });

};
//functions to get quantity value


 $('#sub77B').on('click', function(){

    qtyValue77B = qtyValue77B - 1;
    $('#qtyvalue77B').attr('value', qtyValue77B);

      if(qtyValue77B <=20){
      
      $('#add77B').fadeIn('fast');

    }


    if(qtyValue77B === 0){
      qtyValue77B = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue77B+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply77B= qtyValue77B * itemValue77B;

   decimal77B=multiply77B.toFixed(2);
   
    total77B= decimal77B;
    totalMOBI77B= decimal77B;

  
  //testing
  total77B= "$" + total77B;
  console.log('total is ' + total77B);
  
 $('#total2').attr('value', total77B);

//
 });






 $('#add77B').on('click', function(){
    qtyValue77B = qtyValue77B + 1;
    $('#qtyvalue77B').attr('value', qtyValue77B);

    //Testing
    console.log('quantity value is ' + qtyValue77B+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue77B >=20){
    

    }

     if(qtyValue77B >=2){
      $('#sub77B').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply77B= qtyValue77B * itemValue77B;

   decimal77B=multiply77B.toFixed(2);
   
    total77B= decimal77B;
    totalMOBI77B= decimal77B;
    console.log("quantity value * item value: " + total77B);
  
  //testing
  total77B= "$" + total77B;
  console.log('total is ' + total77B);
  console.log("quantity value * item value: " + total77B);
  
 $('#total2').attr('value', total77B);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift77B').click(function(){

   $('.sendGiftVM77B, .closeGiftVM77B').fadeIn();

});




$('.confirmSendVM77B').click(function(){
    $('.sendGiftVM77B, .closeGiftVM77B').fadeOut();
    totalGiftVM77B = 0;
    $('#totalGiftVM77B').attr('value', totalGiftVM77B);

    
$('.friendsVM77B').removeClass('active');

MySelfVM77B = 0;
JeffVM77B = 0;
MariaVM77B = 0;
JohnVM77B = 0;
LeahVM77B = 0;
PaulVM77B = 0;
JennyVM77B = 0;
GokuVM77B = 0;



    $('.GiftSentVM77B').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM77B').click(function(){
    $('.sendGiftVM77B, .closeGiftVM77B').fadeOut();

    totalGiftVM77B = 0;
    $('#totalGiftVM77B').attr('value', totalGiftVM77B);

$('.friendsVM77B').removeClass('active');
MySelfVM77B = 0;
JeffVM77B = 0;
MariaVM77B = 0;
JohnVM77B = 0;
LeahVM77B = 0;
PaulVM77B = 0;
JennyVM77B = 0;
GokuVM77B = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM77B = 0;
JeffVM77B = 0;
MariaVM77B = 0;
JohnVM77B = 0;
LeahVM77B = 0;
PaulVM77B = 0;
JennyVM77B = 0;
GokuVM77B = 0;








$('#MySelfVM77B').click(function(){

  if (MySelfVM77B === 0){MySelfVM77B = 1;} else {MySelfVM77B=0;}

console.log(MySelfVM77B);
});






$('#JeffVM77B').click(function(){

  if (JeffVM77B === 0){JeffVM77B = 1;} else {JeffVM77B=0;}

console.log(JeffVM77B);
});


$('#MariaVM77B').click(function(){
  
  if (MariaVM77B === 0){MariaVM77B = 1;} else {MariaVM77B=0;}

console.log(MariaVM77B);
});


$('#JohnVM77B').click(function(){
  
  if (JohnVM77B === 0){JohnVM77B = 1;} else {JohnVM77B=0;}

console.log(JohnVM77B);
});


$('#LeahVM77B').click(function(){
  
  if (LeahVM77B === 0){LeahVM77B = 1;} else {LeahVM77B=0;}

console.log(LeahVM77B);
});


$('#PaulVM77B').click(function(){
  
  if (PaulVM77B === 0){PaulVM77B = 1;} else {PaulVM77B=0;}

console.log(PaulVM77B);
});



$('#JennyVM77B').click(function(){
  
  if (JennyVM77B === 0){JennyVM77B = 1;} else {JennyVM77B=0;}

console.log(JennyVM77B);
});


$('#GokuVM77B').click(function(){
  
  if (GokuVM77B === 0){GokuVM77B = 1;} else {GokuVM77B=0;}

console.log(GokuVM77B);
});















AllFriendsVM77B = JeffVM77B + MariaVM77B + JohnVM77B + LeahVM77B + PaulVM77B + JennyVM77B + GokuVM77B + MySelfVM77B; 




totalGiftVM77B = parseFloat(totalMOBI77B) * parseFloat(AllFriendsVM77B);


$('.friendsVM77B').click(function(){

AllFriendsVM77B = JeffVM77B + MariaVM77B + JohnVM77B + LeahVM77B + PaulVM77B + JennyVM77B + GokuVM77B + MySelfVM77B; 

totalGiftVM77B = parseFloat(totalMOBI77B) * parseFloat(AllFriendsVM77B);

 console.log("All friendsVM77B is =" + AllFriendsVM77B);
console.log("All friendsVM77B is =" + typeof('AllFriendsVM77B'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM77B);
console.log("The totalMOBI77B =" + totalMOBI77B);
console.log("The totalGiftVM77B =" + totalMOBI77B);
console.log("The totalGiftVM77B =" + typeof('totalMOBI77B'));

$('#totalGiftVM77B').attr('value', totalGiftVM77B);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI77 > label').click(function(){
payMethod77B = $(this).attr('value');
console.log(payMethod77B);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod77B = "none";
  itemValue77B = '';
  total77B = "$0.00";
  $('#total77B').attr('value', total77B);

  $('.itmV77B, .PayButtonsMOBI77 > label').removeClass('active');


$(this).fadeOut();
$('.qty77B').fadeOut();
qtyValue77B = 1;

});



$('.buy77BMOBI').click(function(){

 if(itemValue77B !=='0' && payMethod77B !=='none'){
$('.BuyNewVM77B').fadeIn();
}

});



$(' #Refill77B').click(function(){
if(itemValue77B !=='0' && payMethod77B !=='none'){
$('.RenewVM77B').fadeIn();
}
});


$('#CheckBalVM77B').click(function(){
  $('.CheckBalVM77B').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan77BMOBI, .selectmenu7A, .selectmenu7A2, #other77B').click(function(){
$('.qty77B').fadeOut();

});










$('.itmV77B').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue77B= 1;
$('#qtyvalue77B').attr('value', qtyValue77B);

$('.qty77B').fadeIn('fast');
// $('#sub77B').fadeIn('fast');
// $('#add77B').fadeIn('fast');
// $('#qtyvalue77B').fadeIn('fast');


});



$('#ride777B, #ride3077B, #ridebt77B').click(function() {

qtyvalue77B= 1;
$('#qtyvalue77B').attr('value', qtyValue77B);
// $('.qty77B').fadeOut('fast');
// $('#sub77B').hide();
// $('#add77B').hide();
// $('#qtyvalue77B').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan77B, #cbalance77B').click(function(){
$('#ride177B, #ride277B, #ride777B, #ride3077B, #ridebt77B, #cbalance77B').removeClass('active');
$('#credit77B, #cash77B, #debit77B, #other77B').removeClass('active');
// $('#sub77B').hide();
// $('#add77B').hide();
// $('#qtyvalue77B').hide();


$('#total77B').attr('value','$0.00');
});










//After selecting Payment method

$('#cash77B, #credit77B, #debit77B, #other77B').click(function(){
  payMethod77B= $(this).attr('value');
  console.log('Payment method is: ' + payMethod77B + 'and item value is: ' +itemValue77B);

});

//Hide these PopUps

$('.seOptions77B, .seItem77B, .pmethod77B').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy77B').click(function(){

  if(itemValue77B !=='0' && payMethod77B !=='none'){
   
      $('.check77B').hide();
       $('.thankRefill77B').hide();
       $('.thankBuy77B').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy77B').hide(); 
         });

        }

 });




$('#refill77B').click(function(){

   if(itemValue77B !=='0' && payMethod77B !=='none'){
   
      $('.check77B').hide();
      $('.thankBuy77B').hide();
        $('.thankRefill77B').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill77B').hide();


 });
}
});





/*

$('#buy77B').click(function(){

  if(itemValue77B =='0' && payMethod77B =='none'){
    $('.seOptions77B').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77B !=='0' && payMethod77B =='none'){

      $('.pmethod77B').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77B =='0' && payMethod77B !== 'none'){
       $('.seItem77B').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check77B').hide();
       $('.thankRefill77B').hide();
       $('.thankBuy77B').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill77B').click(function(){

   if(itemValue77B =='0' && payMethod77B =='none'){
    $('.seOptions77B').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77B !=='0' && payMethod77B =='none'){

      $('.pmethod77B').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77B =='0' && payMethod77B !== 'none'){
       $('.seItem77B').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check77B').hide();
      $('.thankBuy77B').hide();
        $('.thankRefill77B').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy77B').click(function(){
  $('.check77B').hide();
$('.thankRefill77B').hide();
 $('.thankBuy77B').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill77B').click(function(){
   $('.check77B').hide();
  $('.thankBuy77B').hide();
    $('.thankRefill77B').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check77B').hide();
 });

});



*/



     

     

//firts UI
     $('#ride177B, #ride277B, #ride777B, #ride3077B, #ridebt77B, #cbalance77B').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel77B').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance77B').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3077B').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other77B').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py" >Cash');
    $('#credit77B').html('<input type="radio" name="py" >Credit');
    $('#debit77B').html('<input type="radio" name="py" >Debit');
    $('#otherp77B').html('<input type="radio" name="py" >Other');

    $('#buy77B').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill77B').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish77B').click(function(){
  $('#ride177B').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride277B').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride777B').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance77B').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3077B').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other77B').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash77B').html ('<input type="radio" name="py"> Efectivo');
    $('#credit77B').html('<input type="radio" name="py">Credito');
    $('#debit77B').html('<input type="radio" name="py" >Debito');
    $('#otherp77B').html('<input type="radio" name="py">Otros');

    $('#buy77B').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill77B').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance77B').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3077B').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other77B').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py"> 现金 ');
    $('#credit77B').html('<input type="radio" name="py"> 个学分 ');
    $('#debit77B').html(' <input type="radio" name="py">金 ');
    $('#otherp77B').html(' <input type="radio" name="py">宪章 ');

    $('#buy77B').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill77B').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance77B').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3077B').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other77B').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit77B').html('<input type="radio" name="py">кредитов');
    $('#debit77B').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp77B').html('<input type="radio" name="py">Другое');

    $('#buy77B').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill77B').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance77B').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3077B').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other77B').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py">Espèces');
    $('#credit77B').html('<input type="radio" name="py">Crédits');
    $('#debit77B').html('<input type="radio" name="py">DÉBIT');
    $('#otherp77B').html('<input type="radio" name="py">Autres');

  
    $('#buy77B').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill77B').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance77B').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3077B').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt77B').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other77B').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py">現金');
    $('#credit77B').html('<input type="radio" name="py">クレジット');
    $('#debit77B').html('<input type="radio" name="py">ゴールド');
    $('#otherp77B').html('<input type="radio" name="py">その他');


    $('#buy77B').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill77B').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance77B').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3077B').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other77B').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py">النقدية');
    $('#credit77B').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit77B').html('<input type="radio" name="py">الذهب');
    $('#otherp77B').html('<input type="radio" name="py">ادولة');


    $('#buy77B').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill77B').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian77B').click(function(){

  $('#ride177B').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride277B').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride777B').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance77B').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3077B').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other77B').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash77B').html ('<input type="radio" name="py">Contanti');
    $('#credit77B').html('<input type="radio" name="py">Crediti');
    $('#debit77B').html('<input type="radio" name="py">Diamanti');
    $('#otherp77B').html('<input type="radio" name="py">Altro');



    $('#buy77B').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill77B').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance77B').click(function(){
 $('.check77B').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride177B, #ride277B, #ride777B, #ride3077B, #ridebt77B, #cbalance77B').dblclick(function(){
    $('#panel77B').fadeIn('fast');
});

    $('#panel77B').click(function(){

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


$('#DARKui77Bx').click(function(){
    $('.ui77B').attr('class', 'ui77B');
    $('.ui77B').addClass(' DARKui77B');



      $('.lan77B').attr('class', 'lan77B');
      $('.lan77B').addClass('DARKlan77B');

         $('.lan77B > label, .lan77B > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77B > label, .lan77B > button').addClass('Darklan77B > lan77B');
         $('#english1').addClass('active');
/////////////

      $('.itm77B').attr('class', 'itm77B');
      $('.itm77B').addClass('DARKitm77B');


           $('.itm77B > label, .itm77B > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77B > label, .itm77B > button').addClass('itm77B > label');

////////////



      $('.qty77B').attr('class', 'qty77B');
                $('#sub77B').attr('class', 'btn btn-primary btn-lg sub77B');
                $('#add77B').attr('class', 'btn btn-primary btn-lg add77B');
                 $('#qtyvalue77B').attr('class', 'qtyvalue77B');





///////////

      $('.py77B').attr('class', 'py77B');
      $('.py77B').addClass('DARKpy77B');


           $('.py77B > label, .py77B > button').attr('class', 'btn btn-default btn-lg')
           $('.py77B > label, .py77B > button').addClass('DARKpy77B > label');

/////////////      

      $('.fin77B').attr('class', 'fin77B');
      $('.fin77B').addClass('DARKfin77B');


          $('.finB77B').attr('class', 'btn btn-default btn-lg finB77B');
          $('.finB77B').addClass('DARKfinB77B');


             $('#total77B').attr('class', 'total77B');
             $('#total77B').addClass('DARKtotal77B');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77Bx').click(function(){
    $('.ui77B').attr('class', 'ui77B');
    



      $('.lan77B').attr('class', 'lan77B');
      

         $('.lan77B > label, .lan77B > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77B').attr('class', 'itm77B');
      


           $('.itm77B > label, .itm77B > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77B').attr('class', 'qty77B');
                $('#sub77B').attr('class', 'btn btn-primary btn-lg sub77B');
                $('#add77B').attr('class', 'btn btn-primary btn-lg add77B');
                $('#qtyvalue77B').attr('class', 'qtyvalue77B');





///////////

      $('.py77B').attr('class', 'py77B');
      


           $('.py77B > label, .py77B > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77B').attr('class', 'fin77B');
     


          $('.finB77B').attr('class', 'btn btn-default btn-lg finB77B');
          


             $('#total77B').attr('class', 'total77B');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui77BMOBIx').click(function(){
    $('.ui77B').attr('class', 'ui77B');
    $('.ui77B').addClass(' DARKui77B');



      $('.lan77B').attr('class', 'lan77B');
      $('.lan77B').addClass('DARKlan77B');

         $('.lan77B > label, .lan77B > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77B > label, .lan77B > button').addClass('Darklan77B > lan77B');
         $('#english1').addClass('active');
/////////////

      $('.itm77B').attr('class', 'itm77B');
      $('.itm77B').addClass('DARKitm77B');


           $('.itm77B > label, .itm77B > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77B > label, .itm77B > button').addClass('itm77B > label');

////////////



      $('.qty77B').attr('class', 'qty77B');
                $('#sub77B').attr('class', 'btn btn-primary btn-lg sub77B');
                $('#add77B').attr('class', 'btn btn-primary btn-lg add77B');
                 $('#qtyvalue77B').attr('class', 'qtyvalue77B');





///////////

      $('.py77B').attr('class', 'py77B');
      $('.py77B').addClass('DARKpy77B');


           $('.py77B > label, .py77B > button').attr('class', 'btn btn-default btn-lg')
           $('.py77B > label, .py77B > button').addClass('DARKpy77B > label');

/////////////      

      $('.fin77B').attr('class', 'fin77B');
      $('.fin77B').addClass('DARKfin77B');


          $('.finB77B').attr('class', 'btn btn-default btn-lg finB77B');
          $('.finB77B').addClass('DARKfinB77B');


             $('#total77B').attr('class', 'total77B');
             $('#total77B').addClass('DARKtotal77B');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77BMOBIx').click(function(){
    $('.ui77B').attr('class', 'ui77B');
    



      $('.lan77B').attr('class', 'lan77B');
      

         $('.lan77B > label, .lan77B > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77B').attr('class', 'itm77B');
      


           $('.itm77B > label, .itm77B > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77B').attr('class', 'qty77B');
                $('#sub77B').attr('class', 'btn btn-primary btn-lg sub77B');
                $('#add77B').attr('class', 'btn btn-primary btn-lg add77B');
                $('#qtyvalue77B').attr('class', 'qtyvalue77B');





///////////

      $('.py77B').attr('class', 'py77B');
      


           $('.py77B > label, .py77B > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77B').attr('class', 'fin77B');
     


          $('.finB77B').attr('class', 'btn btn-default btn-lg finB77B');
          


             $('#total77B').attr('class', 'total77B');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI7AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7Bx4, .TransportModel9x4').click(function(){




$('.ui77B').addClass('ui77BMOBI uiXXMOBI');


$('.lan77B').addClass('lan77BMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77B').addClass('itm77BMOBI'); 
$('.itmV77B').addClass('itmV77BMOBI'); 



$('.DropItmMenu77B').addClass('DropItmMenu77BMOBI'); 



$('.qty77B').addClass('qty77BMOBI'); 

$('.sub77B').addClass('sub77BMOBI'); 





$('.add77B').addClass('add77BMOBI'); 



$('.qtyvalue77B').addClass('qtyvalue77BMOBI'); 



$('.py77B').addClass('py77BMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77B').addClass('fin77BMOBI'); 





$('#total77B').addClass('total77BMOBI'); 





$('#refill77B, #buy77B').hide();

$('.refill77BMOBI, .buy77BMOBI').show();


$('#ride4077B').hide();



$('#CheckBalVM77B').show();
$('#cbalance77B').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm7AMachinex, .UI7Abuttonsx > button').click(function(){



$('.ui77B').removeClass('ui77BMOBI uiXXMOBI');


$('.lan77B').removeClass('lan77BMOBI'); 


$('.Vm7LanB').show();
$('.Vm7LanBMOBI').hide();



$('.itm77B').removeClass('itm77BMOBI'); 
$('.itmV77B').removeClass('itmV77BMOBI'); 



$('.DropItmMenu77B').removeClass('DropItmMenu77BMOBI');



$('.qty77B').removeClass('qty77BMOBI'); 

$('.sub77B').removeClass('sub77BMOBI'); 




$('.add77B').removeClass('add77BMOBI'); 



$('.qtyvalue77B').removeClass('qtyvalue77BMOBI'); 



$('.py77B').removeClass('py77BMOBI');

$('.Paybuttons77').show(); 

$('.PayButtonsMOBI77').hide(); 



$('.fin77B').removeClass('fin77BMOBI'); 


$('#total77B').removeClass('total77BMOBI'); 



$('#refill77B, #buy77B').show();

$('.refill77BMOBI, .buy77BMOBI').hide();

$('#ride4077B').show();



$('#CheckBalVM77B').hide();
$('#cbalance77B').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui77B').addClass('ui77BMOBI uiXXMOBI');


$('.lan77B').addClass('lan77BMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77B').addClass('itm77BMOBI'); 
$('.itmV77B').addClass('itmV77BMOBI'); 





$('.qty77B').addClass('qty77BMOBI'); 

$('.sub77B').addClass('sub77BMOBI'); 





$('.add77B').addClass('add77BMOBI'); 



$('.qtyvalue77B').addClass('qtyvalue77BMOBI'); 



$('.py77B').addClass('py77BMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77B').addClass('fin77BMOBI'); 





$('#total77B').addClass('total77BMOBI'); 





$('#refill77B, #buy77B').hide();

$('.refill77BMOBI, .buy77BMOBI').show();


$('#ride4077B').hide();



$('#CheckBalVM77B').show();
$('#cbalance77B').hide();