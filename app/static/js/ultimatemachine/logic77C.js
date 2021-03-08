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







  $('#total77C').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue77C= 1;
var itemValue77C=0;
var payMethod77C='none';
var total77C=0;
var totalMOBI77C=0;






//function to get itm value
function getItemValue()

{
 $('.itmV77C').on('click', function(){

    itemValue77C = $(this).attr('value');
    qtyValue77C= 1;
    total77C= itemValue77C;
    totalMOBI77C= itemValue77C;
   //  total2= itemValue * qtyValue;
    
    


 total77C= "$"+itemValue77C;
    //Testing
 
    console.log('item value is ' + itemValue77C+ ' and it is type of '
      + typeof('itemValue')+ ' and qty is '+ qtyValue77C);
    console.log('Total is ' + total77C);

    

   //
 $('#total77C').attr('value', total77C);

 });

};
//functions to get quantity value


 $('#sub77C').on('click', function(){

    qtyValue77C = qtyValue77C - 1;
    $('#qtyvalue77C').attr('value', qtyValue77C);

      if(qtyValue77C <=20){
      
      $('#add77C').fadeIn('fast');

    }


    if(qtyValue77C === 0){
      qtyValue77C = 1
     
   }


   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue77C+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply77C= qtyValue77C * itemValue77C;

   decimal77C=multiply77C.toFixed(2);
   
    total77C= decimal77C;
    totalMOBI77C= decimal77C;

  
  //testing
  total77C= "$" + total77C;
  console.log('total is ' + total77C);
  
 $('#total2').attr('value', total77C);

//
 });






 $('#add77C').on('click', function(){
    qtyValue77C = qtyValue77C + 1;
    $('#qtyvalue77C').attr('value', qtyValue77C);

    //Testing
    console.log('quantity value is ' + qtyValue77C+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue77C >=20){
    

    }

     if(qtyValue77C >=2){
      $('#sub77C').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply77C= qtyValue77C * itemValue77C;

   decimal77C=multiply77C.toFixed(2);
   
    total77C= decimal77C;
    totalMOBI77C= decimal77C;
    console.log("quantity value * item value: " + total77C);
  
  //testing
  total77C= "$" + total77C;
  console.log('total is ' + total77C);
  console.log("quantity value * item value: " + total77C);
  
 $('#total2').attr('value', total77C);


//
 });




//funtion to set total
 


//Main

getItemValue();
//setTotal();














 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift77C').click(function(){

   $('.sendGiftVM77C, .closeGiftVM77C').fadeIn();

});




$('.confirmSendVM77C').click(function(){
    $('.sendGiftVM77C, .closeGiftVM77C').fadeOut();
    totalGiftVM77C = 0;
    $('#totalGiftVM77C').attr('value', totalGiftVM77C);

    
$('.friendsVM77C').removeClass('active');

MySelfVM77C = 0;
JeffVM77C = 0;
MariaVM77C = 0;
JohnVM77C = 0;
LeahVM77C = 0;
PaulVM77C = 0;
JennyVM77C = 0;
GokuVM77C = 0;



    $('.GiftSentVM77C').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM77C').click(function(){
    $('.sendGiftVM77C, .closeGiftVM77C').fadeOut();

    totalGiftVM77C = 0;
    $('#totalGiftVM77C').attr('value', totalGiftVM77C);

$('.friendsVM77C').removeClass('active');
MySelfVM77C = 0;
JeffVM77C = 0;
MariaVM77C = 0;
JohnVM77C = 0;
LeahVM77C = 0;
PaulVM77C = 0;
JennyVM77C = 0;
GokuVM77C = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM77C = 0;
JeffVM77C = 0;
MariaVM77C = 0;
JohnVM77C = 0;
LeahVM77C = 0;
PaulVM77C = 0;
JennyVM77C = 0;
GokuVM77C = 0;








$('#MySelfVM77C').click(function(){

  if (MySelfVM77C === 0){MySelfVM77C = 1;} else {MySelfVM77C=0;}

console.log(MySelfVM77C);
});






$('#JeffVM77C').click(function(){

  if (JeffVM77C === 0){JeffVM77C = 1;} else {JeffVM77C=0;}

console.log(JeffVM77C);
});


$('#MariaVM77C').click(function(){
  
  if (MariaVM77C === 0){MariaVM77C = 1;} else {MariaVM77C=0;}

console.log(MariaVM77C);
});


$('#JohnVM77C').click(function(){
  
  if (JohnVM77C === 0){JohnVM77C = 1;} else {JohnVM77C=0;}

console.log(JohnVM77C);
});


$('#LeahVM77C').click(function(){
  
  if (LeahVM77C === 0){LeahVM77C = 1;} else {LeahVM77C=0;}

console.log(LeahVM77C);
});


$('#PaulVM77C').click(function(){
  
  if (PaulVM77C === 0){PaulVM77C = 1;} else {PaulVM77C=0;}

console.log(PaulVM77C);
});



$('#JennyVM77C').click(function(){
  
  if (JennyVM77C === 0){JennyVM77C = 1;} else {JennyVM77C=0;}

console.log(JennyVM77C);
});


$('#GokuVM77C').click(function(){
  
  if (GokuVM77C === 0){GokuVM77C = 1;} else {GokuVM77C=0;}

console.log(GokuVM77C);
});















AllFriendsVM77C = JeffVM77C + MariaVM77C + JohnVM77C + LeahVM77C + PaulVM77C + JennyVM77C + GokuVM77C + MySelfVM77C; 




totalGiftVM77C = parseFloat(totalMOBI77C) * parseFloat(AllFriendsVM77C);


$('.friendsVM77C').click(function(){

AllFriendsVM77C = JeffVM77C + MariaVM77C + JohnVM77C + LeahVM77C + PaulVM77C + JennyVM77C + GokuVM77C + MySelfVM77C; 

totalGiftVM77C = parseFloat(totalMOBI77C) * parseFloat(AllFriendsVM77C);

 console.log("All friendsVM77C is =" + AllFriendsVM77C);
console.log("All friendsVM77C is =" + typeof('AllFriendsVM77C'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM77C);
console.log("The totalMOBI77C =" + totalMOBI77C);
console.log("The totalGiftVM77C =" + totalMOBI77C);
console.log("The totalGiftVM77C =" + typeof('totalMOBI77C'));

$('#totalGiftVM77C').attr('value', totalGiftVM77C);



});






///////////////////Send Gift to Friends//////////////////////////////////////////






///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI77 > label').click(function(){
payMethod77C = $(this).attr('value');
console.log(payMethod77C);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod77C = "none";
  itemValue77C = '';
  total77C = "$0.00";
  $('#total77C').attr('value', total77C);

  $('.itmV77C, .PayButtonsMOBI77 > label').removeClass('active');


$(this).fadeOut();
$('.qty77C').fadeOut();
qtyValue77C = 1;

});



$('.buy77CMOBI').click(function(){

 if(itemValue77C !=='0' && payMethod77C !=='none'){
$('.BuyNewVM77C').fadeIn();
}

});



$(' #Refill77C').click(function(){
if(itemValue77C !=='0' && payMethod77C !=='none'){
$('.RenewVM77C').fadeIn();
}
});


$('#CheckBalVM77C').click(function(){
  $('.CheckBalVM77C').fadeIn();
});




//////////////////////////////////////////////////////////




















$('.lan77CMOBI, .selectmenu7A, .selectmenu7A2, #other77C').click(function(){
$('.qty77C').fadeOut();

});










$('.itmV77C').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue77C= 1;
$('#qtyvalue77C').attr('value', qtyValue77C);

$('.qty77C').fadeIn('fast');
// $('#sub77C').fadeIn('fast');
// $('#add77C').fadeIn('fast');
// $('#qtyvalue77C').fadeIn('fast');


});



$('#ride777C, #ride3077C, #ridebt77C').click(function() {

qtyvalue77C= 1;
$('#qtyvalue77C').attr('value', qtyValue77C);
// $('.qty77C').fadeOut('fast');
// $('#sub77C').hide();
// $('#add77C').hide();
// $('#qtyvalue77C').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('.lan77C, #cbalance77C').click(function(){
$('#ride177C, #ride277C, #ride777C, #ride3077C, #ridebt77C, #cbalance77C').removeClass('active');
$('#credit77C, #cash77C, #debit77C, #other77C').removeClass('active');
// $('#sub77C').hide();
// $('#add77C').hide();
// $('#qtyvalue77C').hide();


$('#total77C').attr('value','$0.00');
});










//After selecting Payment method

$('#cash77C, #credit77C, #debit77C, #other77C').click(function(){
  payMethod77C= $(this).attr('value');
  console.log('Payment method is: ' + payMethod77C + 'and item value is: ' +itemValue77C);

});

//Hide these PopUps

$('.seOptions77C, .seItem77C, .pmethod77C').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy77C').click(function(){

  if(itemValue77C !=='0' && payMethod77C !=='none'){
   
      $('.check77C').hide();
       $('.thankRefill77C').hide();
       $('.thankBuy77C').fadeIn('fast');

       $('.TapBuy5A').click(function(){
          $('.thankBuy77C').hide(); 
         });

        }

 });




$('#refill77C').click(function(){

   if(itemValue77C !=='0' && payMethod77C !=='none'){
   
      $('.check77C').hide();
      $('.thankBuy77C').hide();
        $('.thankRefill77C').fadeIn('fast');

        $('.TapRefill5A').click(function(){
       $('.thankRefill77C').hide();


 });
}
});





/*

$('#buy77C').click(function(){

  if(itemValue77C =='0' && payMethod77C =='none'){
    $('.seOptions77C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77C !=='0' && payMethod77C =='none'){

      $('.pmethod77C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77C =='0' && payMethod77C !== 'none'){
       $('.seItem77C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check77C').hide();
       $('.thankRefill77C').hide();
       $('.thankBuy77C').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill77C').click(function(){

   if(itemValue77C =='0' && payMethod77C =='none'){
    $('.seOptions77C').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue77C !=='0' && payMethod77C =='none'){

      $('.pmethod77C').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue77C =='0' && payMethod77C !== 'none'){
       $('.seItem77C').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check77C').hide();
      $('.thankBuy77C').hide();
        $('.thankRefill77C').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy77C').click(function(){
  $('.check77C').hide();
$('.thankRefill77C').hide();
 $('.thankBuy77C').fadeIn('fast').click(function(){
  $(this).hide();
  

 });

});


$('#refill77C').click(function(){
   $('.check77C').hide();
  $('.thankBuy77C').hide();
    $('.thankRefill77C').fadeIn('fast').click(function(){
  $(this).hide();
  $('.check77C').hide();
 });

});



*/



     

     

//firts UI
     $('#ride177C, #ride277C, #ride777C, #ride3077C, #ridebt77C, #cbalance77C').dblclick(function(){
      $('#panel').fadeIn('fast');

      });

     $('#panel77C').click(function(){

      $(this).fadeOut('fast');
     });





    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

  $('#cbalance77C').html('<input  type="radio" name="itm">Check Balance');

  $('#ride3077C').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
  
  $('#other77C').html('<input  type="radio" name="itm">Other Items<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py" >Cash');
    $('#credit77C').html('<input type="radio" name="py" >Credit');
    $('#debit77C').html('<input type="radio" name="py" >Debit');
    $('#otherp77C').html('<input type="radio" name="py" >Other');

    $('#buy77C').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill77C').html('Refill Your<br>Card').css('font-size', '20px');


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



$('#spanish77C').click(function(){
  $('#ride177C').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride277C').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride777C').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance77C').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3077C').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');

 $('#other77C').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');

  
  
    $('#cash77C').html ('<input type="radio" name="py"> Efectivo');
    $('#credit77C').html('<input type="radio" name="py">Credito');
    $('#debit77C').html('<input type="radio" name="py" >Debito');
    $('#otherp77C').html('<input type="radio" name="py">Otros');

    $('#buy77C').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill77C').html('Recarga tu<br>Tarjeta').css('font-size', '20px');


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


$('#chinesse77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

  $('#cbalance77C').html('<input  type="radio" name="itm">   查看  餘額 ');

  $('#ride3077C').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
  
  $('#other77C').html('__其他 個項目__<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py"> 现金 ');
    $('#credit77C').html('<input type="radio" name="py"> 个学分 ');
    $('#debit77C').html(' <input type="radio" name="py">金 ');
    $('#otherp77C').html(' <input type="radio" name="py">宪章 ');

    $('#buy77C').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill77C').html('充值您 <br> 憲章').css('font-size', '20px');



 

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


$('#russian77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

  $('#cbalance77C').html('<input  type="radio" name="itm">пунктов услуги');

  $('#ride3077C').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
  
  $('#other77C').html('Другое пунктов/услуги<span class="caret"></span>');
  
    $('#cash').html ('<input type="radio" name="py">Наличный');
    $('#credit77C').html('<input type="radio" name="py">кредитов');
    $('#debit77C').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp77C').html('<input type="radio" name="py">Другое');

    $('#buy77C').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill77C').html('Перезарядка ваш<br>Устав').css('font-size', '15px');




  
   
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




$('#french77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

  $('#cbalance77C').html('<input  type="radio" name="itm">Voir  Balance');

  $('#ride3077C').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
  
  $('#other77C').html('Autres Produ/Servic<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py">Espèces');
    $('#credit77C').html('<input type="radio" name="py">Crédits');
    $('#debit77C').html('<input type="radio" name="py">DÉBIT');
    $('#otherp77C').html('<input type="radio" name="py">Autres');

  
    $('#buy77C').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill77C').html('Rechargez Votre<br>Charte').css('font-size', '15px');


    
   
 

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




    $('#japanesse77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


  $('#cbalance77C').html('<input  type="radio" name="itm">ビュー バランス');

  $('#ride3077C').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
  $('#ridebt77C').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
  $('#other77C').html('その他 の項目/サービ<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py">現金');
    $('#credit77C').html('<input type="radio" name="py">クレジット');
    $('#debit77C').html('<input type="radio" name="py">ゴールド');
    $('#otherp77C').html('<input type="radio" name="py">その他');


    $('#buy77C').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill77C').html('リチャージご<br>憲章').css('font-size', '20px');



   
   
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

   
 $('#saudi77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


  $('#cbalance77C').html('<input  type="radio" name="itm">عرض <br>الرصيد');

  $('#ride3077C').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
  
  $('#other77C').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py">النقدية');
    $('#credit77C').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit77C').html('<input type="radio" name="py">الذهب');
    $('#otherp77C').html('<input type="radio" name="py">ادولة');


    $('#buy77C').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill77C').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');


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

 $('#italian77C').click(function(){

  $('#ride177C').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
  $('#ride277C').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
  $('#ride777C').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

  $('#cbalance77C').html('<input  type="radio" name="itm">Osservare Balance');

  $('#ride3077C').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
  
  $('#other77C').html('Altro artic/serviz<span class="caret"></span>');
  
    $('#cash77C').html ('<input type="radio" name="py">Contanti');
    $('#credit77C').html('<input type="radio" name="py">Crediti');
    $('#debit77C').html('<input type="radio" name="py">Diamanti');
    $('#otherp77C').html('<input type="radio" name="py">Altro');



    $('#buy77C').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill77C').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



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










$('#cbalance77C').click(function(){
 $('.check77C').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride177C, #ride277C, #ride777C, #ride3077C, #ridebt77C, #cbalance77C').dblclick(function(){
    $('#panel77C').fadeIn('fast');
});

    $('#panel77C').click(function(){

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


$('#DARKui77Cx').click(function(){
    $('.ui77C').attr('class', 'ui77C');
    $('.ui77C').addClass(' DARKui77C');



      $('.lan77C').attr('class', 'lan77C');
      $('.lan77C').addClass('DARKlan77C');

         $('.lan77C > label, .lan77C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77C > label, .lan77C > button').addClass('Darklan77C > lan77C');
         $('#english1').addClass('active');
/////////////

      $('.itm77C').attr('class', 'itm77C');
      $('.itm77C').addClass('DARKitm77C');


           $('.itm77C > label, .itm77C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77C > label, .itm77C > button').addClass('itm77C > label');

////////////



      $('.qty77C').attr('class', 'qty77C');
                $('#sub77C').attr('class', 'btn btn-primary btn-lg sub77C');
                $('#add77C').attr('class', 'btn btn-primary btn-lg add77C');
                 $('#qtyvalue77C').attr('class', 'qtyvalue77C');





///////////

      $('.py77C').attr('class', 'py77C');
      $('.py77C').addClass('DARKpy77C');


           $('.py77C > label, .py77C > button').attr('class', 'btn btn-default btn-lg')
           $('.py77C > label, .py77C > button').addClass('DARKpy77C > label');

/////////////      

      $('.fin77C').attr('class', 'fin77C');
      $('.fin77C').addClass('DARKfin77C');


          $('.finB77C').attr('class', 'btn btn-default btn-lg finB77C');
          $('.finB77C').addClass('DARKfinB77C');


             $('#total77C').attr('class', 'total77C');
             $('#total77C').addClass('DARKtotal77C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77Cx').click(function(){
    $('.ui77C').attr('class', 'ui77C');
    



      $('.lan77C').attr('class', 'lan77C');
      

         $('.lan77C > label, .lan77C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77C').attr('class', 'itm77C');
      


           $('.itm77C > label, .itm77C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77C').attr('class', 'qty77C');
                $('#sub77C').attr('class', 'btn btn-primary btn-lg sub77C');
                $('#add77C').attr('class', 'btn btn-primary btn-lg add77C');
                $('#qtyvalue77C').attr('class', 'qtyvalue77C');





///////////

      $('.py77C').attr('class', 'py77C');
      


           $('.py77C > label, .py77C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77C').attr('class', 'fin77C');
     


          $('.finB77C').attr('class', 'btn btn-default btn-lg finB77C');
          


             $('#total77C').attr('class', 'total77C');

});




///////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////DarK Color UI3///////////////////////////


$('#DARKui77CMOBIx').click(function(){
    $('.ui77C').attr('class', 'ui77C');
    $('.ui77C').addClass(' DARKui77C');



      $('.lan77C').attr('class', 'lan77C');
      $('.lan77C').addClass('DARKlan77C');

         $('.lan77C > label, .lan77C > button').attr('class', 'btn btn-default btn-lg')
         $('.lan77C > label, .lan77C > button').addClass('Darklan77C > lan77C');
         $('#english1').addClass('active');
/////////////

      $('.itm77C').attr('class', 'itm77C');
      $('.itm77C').addClass('DARKitm77C');


           $('.itm77C > label, .itm77C > button').attr('class', 'btn btn-default btn-lg')
           $('.itm77C > label, .itm77C > button').addClass('itm77C > label');

////////////



      $('.qty77C').attr('class', 'qty77C');
                $('#sub77C').attr('class', 'btn btn-primary btn-lg sub77C');
                $('#add77C').attr('class', 'btn btn-primary btn-lg add77C');
                 $('#qtyvalue77C').attr('class', 'qtyvalue77C');





///////////

      $('.py77C').attr('class', 'py77C');
      $('.py77C').addClass('DARKpy77C');


           $('.py77C > label, .py77C > button').attr('class', 'btn btn-default btn-lg')
           $('.py77C > label, .py77C > button').addClass('DARKpy77C > label');

/////////////      

      $('.fin77C').attr('class', 'fin77C');
      $('.fin77C').addClass('DARKfin77C');


          $('.finB77C').attr('class', 'btn btn-default btn-lg finB77C');
          $('.finB77C').addClass('DARKfinB77C');


             $('#total77C').attr('class', 'total77C');
             $('#total77C').addClass('DARKtotal77C');


});





////////////////////////White UI3///////////////////////////


$('#WHITEui77CMOBIx').click(function(){
    $('.ui77C').attr('class', 'ui77C');
    



      $('.lan77C').attr('class', 'lan77C');
      

         $('.lan77C > label, .lan77C > button').attr('class', 'btn btn-default btn-lg')
         
         $('#english1').addClass('active');
/////////////

      $('.itm77C').attr('class', 'itm77C');
      


           $('.itm77C > label, .itm77C > button').attr('class', 'btn btn-default btn-lg')
           

////////////


      $('.qty77C').attr('class', 'qty77C');
                $('#sub77C').attr('class', 'btn btn-primary btn-lg sub77C');
                $('#add77C').attr('class', 'btn btn-primary btn-lg add77C');
                $('#qtyvalue77C').attr('class', 'qtyvalue77C');





///////////

      $('.py77C').attr('class', 'py77C');
      


           $('.py77C > label, .py77C > button').attr('class', 'btn btn-default btn-lg')
           

/////////////      

      $('.fin77C').attr('class', 'fin77C');
     


          $('.finB77C').attr('class', 'btn btn-default btn-lg finB77C');
          


             $('#total77C').attr('class', 'total77C');

});










///////////////////////////////////////////////////////////////////////////////////////////////////







/*//////////////////////////////MOBI MOBI 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI7AbuttonsMOBIx > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){




$('.ui77C').addClass('ui77CMOBI uiXXMOBI');


$('.lan77C').addClass('lan77CMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77C').addClass('itm77CMOBI'); 
$('.itmV77C').addClass('itmV77CMOBI'); 



$('.DropItmMenu77C').addClass('DropItmMenu77CMOBI'); 



$('.qty77C').addClass('qty77CMOBI'); 

$('.sub77C').addClass('sub77CMOBI'); 





$('.add77C').addClass('add77CMOBI'); 



$('.qtyvalue77C').addClass('qtyvalue77CMOBI'); 



$('.py77C').addClass('py77CMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77C').addClass('fin77CMOBI'); 





$('#total77C').addClass('total77CMOBI'); 





$('#refill77C, #buy77C').hide();

$('.refill77CMOBI, .buy77CMOBI').show();


$('#ride4077C').hide();



$('#CheckBalVM77C').show();
$('#cbalance77C').hide();


});






/*//////////////////////////////Machine Machine 55/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/





$('#Vm7AMachinex, .UI7Abuttonsx > button').click(function(){



$('.ui77C').removeClass('ui77CMOBI uiXXMOBI');


$('.lan77C').removeClass('lan77CMOBI'); 


$('.Vm7LanB').show();
$('.Vm7LanBMOBI').hide();



$('.itm77C').removeClass('itm77CMOBI'); 
$('.itmV77C').removeClass('itmV77CMOBI'); 



$('.DropItmMenu77C').removeClass('DropItmMenu77CMOBI');



$('.qty77C').removeClass('qty77CMOBI'); 

$('.sub77C').removeClass('sub77CMOBI'); 




$('.add77C').removeClass('add77CMOBI'); 



$('.qtyvalue77C').removeClass('qtyvalue77CMOBI'); 



$('.py77C').removeClass('py77CMOBI');

$('.Paybuttons77').show(); 

$('.PayButtonsMOBI77').hide(); 



$('.fin77C').removeClass('fin77CMOBI'); 


$('#total77C').removeClass('total77CMOBI'); 



$('#refill77C, #buy77C').show();

$('.refill77CMOBI, .buy77CMOBI').hide();

$('#ride4077C').show();



$('#CheckBalVM77C').hide();
$('#cbalance77C').show();




});






// ////////////////Automatic MOBI Load//////////////

$('.ui77C').addClass('ui77CMOBI uiXXMOBI');


$('.lan77C').addClass('lan77CMOBI'); 


$('.Vm7LanB').hide();
$('.Vm7LanBMOBI').show();



$('.itm77C').addClass('itm77CMOBI'); 
$('.itmV77C').addClass('itmV77CMOBI'); 





$('.qty77C').addClass('qty77CMOBI'); 

$('.sub77C').addClass('sub77CMOBI'); 





$('.add77C').addClass('add77CMOBI'); 



$('.qtyvalue77C').addClass('qtyvalue77CMOBI'); 



$('.py77C').addClass('py77CMOBI');

$('.Paybuttons77').hide(); 

$('.PayButtonsMOBI77').show(); 



$('.fin77C').addClass('fin77CMOBI'); 





$('#total77C').addClass('total77CMOBI'); 





$('#refill77C, #buy77C').hide();

$('.refill77CMOBI, .buy77CMOBI').show();


$('#ride4077C').hide();



$('#CheckBalVM77C').show();
$('#cbalance77C').hide();