$(document).ready(function(){





$('#Vm4Maps').click(function(){
$('.ComingSoonVM4').fadeIn();
$('.ComingSoonVM4').removeClass('ComingSoonServStat');
$('.ComingSoonVM4').addClass('ComingSoonMap');
$('.Mapinput4').fadeIn();

});



$('#Vm4SChange').click(function(){
$('.ComingSoonVM4').fadeIn();
$('.ComingSoonVM4').removeClass('ComingSoonMap');
$('.ComingSoonVM4').addClass('ComingSoonServStat');
$('.Mapinput4').fadeOut();
});



$('#Vm4Buy, #Vm2Machine').click(function(){
$('.ComingSoonVM4').fadeOut();
$('.Mapinput4').fadeOut()
});







$('#sub44').fadeIn('fast');
$('#add44').fadeIn('fast');
$('#qtyvalue44').fadeIn('fast');
 
  $('#total44').attr('value','$0.00');


//Variables for item value, quantity value and total value
var qtyValue44= 0;
var itemValue44=0;
var payMethod44='none';
var total44=0;
var totalMOBI4=0;







//function to get itm value
function getItemValue()

{
 $('.itmV44').on('click', function(){
    $('#sub44').fadeIn('fast');
    $('#qtyvalue44').fadeIn('fast');
    $('#add44').fadeIn('fast');
    $('#qtyvalue44').attr('value', 1);
    qtyValue44= 1;
    itemValue44 = $(this).attr('value');
    
    total44= itemValue44;
    totalMOBI4= itemValue44;
   //  total2= itemValue * qtyValue;

   $('.unli').click(function(){

  $('#sub44').fadeOut('fast');
  $('#add44').fadeOut('fast');


})
    
    


 total44= "$"+itemValue44;
    //Testing
 
    console.log('item value is ' + itemValue44+ ' and it is type of '
    	+ typeof('itemValue')+ ' and qty is '+ qtyValue44);
    console.log('Total is ' + total44);

    

   //
 $('#total44').attr('value', total44);

 });

};


// $('.desti, .desti2').click(function(){
//   $(this).attr('value', 1);
// });



// if($('.desti').attr("value") && $('.desti2').attr("value") === 0){
//    $('.itmV44').fadeOut('fast');

// }else{

//   if($('.desti').attr("value") && $('.desti2').attr("value") === 1){

//     ($('.itmV44').fadeIn('fast');
//   }


// }


//functions to get quantity value


 $('#sub44').on('click', function(){
    qtyValue44 = qtyValue44 - 1;
    $('#qtyvalue44').attr('value', qtyValue44);

      if(qtyValue44 <=20){
      $('#add44').fadeIn('fast');


    }
    if(qtyValue44 === 1){
      $(this).fadeOut('fast');
      qtyvalue44=1;
      $('#qtyvalue44').attr('value', qtyvalue44)
    }

     if(qtyValue44 < 1){
      $(this).fadeOut('fast');
      qtyvalue44=1;
      $('#qtyvalue44').attr('value', qtyvalue44)
    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue44+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply44= qtyValue44 * itemValue44;

   decimal44=multiply44.toFixed(2);
   
    total44= decimal44;
    totalMOBI4= decimal44;

  
  //testing
  total44= "$" + total44;
  console.log('total is ' + total44);
  
 $('#total44').attr('value', total44);

//
 });






 $('#add44').on('click', function(){
    qtyValue44 = qtyValue44 + 1;
    $('#qtyvalue44').attr('value', qtyValue44);

    //Testing
    console.log('quantity value is ' + qtyValue44+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue44 >=20){
      $('#add44').fadeOut('fast');

    }

     if(qtyValue44 >=2){
      $('#sub44').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply44= qtyValue44 * itemValue44;

   decimal44=multiply44.toFixed(2);
   
    total44= decimal44;
    totalMOBI4= decimal44;
    console.log("quantity value * item value: " + total44);
  
  //testing
  total44= "$" + total44;
  console.log('total is ' + total44);
  console.log("quantity value * item value: " + total44);
  
 $('#total44').attr('value', total44);


//
 });


/////bbbbbbbbbbbb//////////////////////////////////////////////////////////////////////////////////////////////////////

qtyValue44b = 0;
$('#sub44b').on('click', function(){
    qtyValue44b = qtyValue44b - 1;
    $('#qtyvalue44b').attr('value', qtyValue44b);

      if(qtyValue44b <=20){
      $('#add44b').fadeIn('fast');


    }
    if(qtyValue44b === 1){
      $(this).fadeOut('fast');
      qtyvalue44b=1;
      $('#qtyvalue44b').attr('value', qtyvalue44b)
    }

     if(qtyValue44b < 1){
      $(this).fadeOut('fast');
      qtyvalue44b=1;
      $('#qtyvalue44b').attr('value', qtyvalue44b)
    }

   
      
    


    //Testing
    console.log('quantity value is ' + qtyValue44b+ ' and it is type of '+ typeof('qtyValue'));
    
    //multiply item value per quantity

      multiply44b= qtyValue44b * itemValue44;

   decimal44=multiply44.toFixed(2);
   
    total44= decimal44;
    totalMOBI4= decimal44;

  
  //testing
  total44= "$" + total44;
  console.log('total is ' + total44);
  
 $('#total44').attr('value', total44);

//
 });






 $('#add44b').on('click', function(){
    qtyValue44b = qtyValue44b + 1;
    $('#qtyvalue44b').attr('value', qtyValue44b);

    //Testing
    console.log('quantity value is ' + qtyValue44b+ ' and it is type of '+ typeof('qtyValue'));

    //if quantity value is >= 2 show button sub1

     if(qtyValue44b >=20){
      $('#add44b').fadeOut('fast');

    }

     if(qtyValue44b >=2){
      $('#sub44b').fadeIn('fast');
    }
  
    //
    
    //multiply item value per quantity
      multiply44b= qtyValue44b * itemValue44;

   decimal44b=multiply44b.toFixed(2);
   
    total44= decimal44;
    totalMOBI4= decimal44;
    console.log("quantity value * item value: " + total44);
  
  //testing
  total44= "$" + total44;
  console.log('total is ' + total44);
  console.log("quantity value * item value: " + total44);
  
 $('#total44').attr('value', total44);


//
 });




/////bbbbbbbbbbb/////////////////////////////////////////////////////////////////////////////////////////////////////

//funtion to set total
 


//Main

getItemValue();
//setTotal();











 
///////////////////Send Gift to Friends//////////////////////////////////////////





$('#Gift44').click(function(){

   $('.sendGiftVM4, .closeGiftVM4').fadeIn();

});




$('.confirmSendVM4').click(function(){
    $('.sendGiftVM4, .closeGiftVM4').fadeOut();
    totalGiftVM4 = 0;
    $('#totalGiftVM4').attr('value', totalGiftVM4);

    
$('.friendsVM4').removeClass('active');

MySelfVM4 = 0;
JeffVM4 = 0;
MariaVM4 = 0;
JohnVM4 = 0;
LeahVM4 = 0;
PaulVM4 = 0;
JennyVM4 = 0;
GokuVM4 = 0;



    $('.GiftSentVM4').fadeIn().click(function(){
      $(this).fadeOut();
    });
});







$('.closeGiftVM4').click(function(){
    $('.sendGiftVM4, .closeGiftVM4').fadeOut();

    totalGiftVM4 = 0;
    $('#totalGiftVM4').attr('value', totalGiftVM4);

$('.friendsVM4').removeClass('active');
MySelfVM4 = 0;
JeffVM4 = 0;
MariaVM4 = 0;
JohnVM4 = 0;
LeahVM4 = 0;
PaulVM4 = 0;
JennyVM4 = 0;
GokuVM4 = 0;

});




$('.OperationEndedPanelVMall').click(function(){
      $(this).fadeOut();
    });










MySelfVM4 = 0;
JeffVM4 = 0;
MariaVM4 = 0;
JohnVM4 = 0;
LeahVM4 = 0;
PaulVM4 = 0;
JennyVM4 = 0;
GokuVM4 = 0;






$('#MySelfVM4').click(function(){

  if (MySelfVM4 === 0){MySelfVM4 = 1;} else {MySelfVM4=0;}

console.log(MySelfVM4);
});






$('#JeffVM4').click(function(){

  if (JeffVM4 === 0){JeffVM4 = 1;} else {JeffVM4=0;}

console.log(JeffVM4);
});


$('#MariaVM4').click(function(){
  
  if (MariaVM4 === 0){MariaVM4 = 1;} else {MariaVM4=0;}

console.log(MariaVM4);
});


$('#JohnVM4').click(function(){
  
  if (JohnVM4 === 0){JohnVM4 = 1;} else {JohnVM4=0;}

console.log(JohnVM4);
});


$('#LeahVM4').click(function(){
  
  if (LeahVM4 === 0){LeahVM4 = 1;} else {LeahVM4=0;}

console.log(LeahVM4);
});


$('#PaulVM4').click(function(){
  
  if (PaulVM4 === 0){PaulVM4 = 1;} else {PaulVM4=0;}

console.log(PaulVM4);
});



$('#JennyVM4').click(function(){
  
  if (JennyVM4 === 0){JennyVM4 = 1;} else {JennyVM4=0;}

console.log(JennyVM4);
});


$('#GokuVM4').click(function(){
  
  if (GokuVM4 === 0){GokuVM4 = 1;} else {GokuVM4=0;}

console.log(GokuVM4);
});















AllFriendsVM4 = JeffVM4 + MariaVM4 + JohnVM4 + LeahVM4 + PaulVM4 + JennyVM4 + GokuVM4 + MySelfVM4; 




totalGiftVM4 = parseFloat(totalMOBI4) * parseFloat(AllFriendsVM4);


$('.friendsVM4').click(function(){

AllFriendsVM4 = JeffVM4 + MariaVM4 + JohnVM4 + LeahVM4 + PaulVM4 + JennyVM4 + GokuVM4 + MySelfVM4; 

totalGiftVM4 = parseFloat(totalMOBI4) * parseFloat(AllFriendsVM4);

 console.log("All friendsVM4 is =" + AllFriendsVM4);
console.log("All friendsVM4 is =" + typeof('AllFriendsVM4'));



console.log("The total of Item cost bythe selected friends  =" + totalGiftVM4);
console.log("The totalMOBI4 =" + totalMOBI4);
console.log("The totalGiftVM4 =" + totalMOBI4);
console.log("The totalGiftVM4 =" + typeof('totalMOBI4'));

$('#totalGiftVM4').attr('value', totalGiftVM4);



});






///////////////////Send Gift to Friends//////////////////////////////////////////





///////////////////Send Gift to Friends//////////////////////////////////////////



//////////////////////////////////////////////////////////

$('.PayButtonsMOBI44 > label').click(function(){
payMethod44 = $(this).attr('value');
console.log(payMethod44);

});




$('.OperationEndedPanelVMall').click(function(){
  payMethod44 = "none";
  itemValue44 = '';
  total44 = "$0.00";
  $('#total44').attr('value', total44);

  $('.itmV44, .PayButtonsMOBI44 > label').removeClass('active');


$(this).fadeOut();
$('.qty44').fadeOut();
qtyValue44 = 1;

});



$('.buy44MOBI').click(function(){

 if(itemValue44 !=='0' && payMethod44 !=='none'){
$('.BuyNewVM4').fadeIn();
}

});



$(' #Refill44').click(function(){
if(itemValue44 !=='0' && payMethod44 !=='none'){
$('.RenewVM4').fadeIn();
}
});


$('#CheckBalVM4').click(function(){
  $('.CheckBalVM4').fadeIn();
});




//////////////////////////////////////////////////////////

























$('#ride144, #ride244').click(function() {
//show these numbers when ride1 or ride2 are clicked
qtyvalue44= 1;
$('#qtyvalue44').attr('value', qtyValue44);


$('#sub44').fadeIn('fast');
$('#add44').fadeIn('fast');
$('#qtyvalue44').fadeIn('fast');


});



$('#ride744, #ride3044, #ridebt44').click(function() {

qtyvalue44= 1;
$('#qtyvalue44').attr('value', qtyValue44);
// $('#sub44').hide();
// $('#add44').hide();
$('#qtyvalue44').hide();
});






// ^




//when any language is clicked all buttons become unchecked
$('#english44, #spanish44, #chinesse44, #russian44, #japanesse44, #italian44, #french44, #saudi44').click(function(){
$('#ride144, #ride244, #ride744, #ride3044, #ridebt44, #cbalance44').attr('class','btn btn-default btn-lg');
$('#credit44, #cash44, #debit44, #other44').attr('class','btn btn-default btn-lg');
// $('#sub44').hide();
// $('#add44').hide();
// $('#qtyvalue44').hide();


$('#total44').attr('value','$0.00');
});










//After selecting Payment method

$('#cash44, #credit44, #debit44, #other44').click(function(){
  payMethod44= $(this).attr('value');
  console.log('Payment method is: ' + payMethod44 + 'and item value is: ' +itemValue44);

});

//Hide these PopUps

$('.seOptions44, .seItem44, .pmethod44').click(function(){
  $(this).fadeOut('fast');
})


//THANK YOU for BUYING DIVs




$('#buy44').click(function(){

  if(itemValue44!=='0' && payMethod44 !=='none'){
   
      $('.check44').hide();
       $('.thankRefill44').hide();
       $('.thankBuy44').fadeIn('fast');

       $('.TapBuy44').click(function(){
          $('.thankBuy44').hide(); 
         });

        }

 });




$('#refill44').click(function(){

   if(itemValue44 !=='0' && payMethod44 !=='none'){
   
      $('.check44').hide();
      $('.thankBuy44').hide();
        $('.thankRefill44').fadeIn('fast');

        $('.TapRefill44').click(function(){
       $('.thankRefill44').hide();


 });
}
});





/*

$('#buy33').click(function(){

  if(itemValue33 =='0' && payMethod33 =='none'){
    $('.seOptions33').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue33 !=='0' && payMethod33 =='none'){

      $('.pmethod33').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue33 =='0' && payMethod33 !== 'none'){
       $('.seItem33').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{
       
       $('.check33').hide();
       $('.thankRefill33').hide();
       $('.thankBuy33').fadeIn('fast').click(function(){
          $(this).hide(); 
         });

        }

 });




$('#refill33').click(function(){

   if(itemValue33 =='0' && payMethod33 =='none'){
    $('.seOptions33').fadeIn('fast');
    console.log('there is no item or payment method selected');

     }else if  (itemValue33 !=='0' && payMethod33 =='none'){

      $('.pmethod33').fadeIn('fast');
    console.log('customer needs to select a PAYMENT METHOD');


      }else if (itemValue33 =='0' && payMethod33 !== 'none'){
       $('.seItem33').fadeIn('fast');
       console.log('customer needs to select an ITEM');

      } else{

    
      $('.check33').hide();
      $('.thankBuy33').hide();
        $('.thankRefill33').fadeIn('fast').click(function(){
       $(this).hide();


 });
}
});





*/


















/*

//THANK YOU for BUYING DIVs

$('#buy33').click(function(){
	$('.check33').hide();
$('.thankRefill33').hide();
 $('.thankBuy33').fadeIn('fast').click(function(){
 	$(this).hide();
 	

 });

});


$('#refill33').click(function(){
	 $('.check33').hide();
	$('.thankBuy33').hide();
    $('.thankRefill33').fadeIn('fast').click(function(){
 	$(this).hide();
 	$('.check33').hide();
 });

});



*/



     

     

//firts UI
     $('#ride44, #ride44, #ride44, #ride344, #rideb44, #cbalanc44').dblclick(function(){
      $('#panel').fadeIn('fast');

     	});

     $('#pane44').click(function(){

     	$(this).fadeOut('fast');
     });



$( "#spinner" ).spinner();

    
///languagesssssssssssssssssssssssssssssssssssssssssssssssssss
  

   
$('#english44').click(function(){

	$('#ride44').html ('<input  type="radio" name="itm">1-Ride<b>$2.75</b>');
	$('#ride44').html('<input  type="radio" name="itm">2-Rides<b>$5.75</b>');
	$('#ride44').html('<input  type="radio" name="itm">7-Day Unlimited<b>$31.50</b>');

	$('#cbalance44').html('<input  type="radio" name="itm">Ver Balance');

	$('#ride3044').html('<input  type="radio" name="itm">30-Days Unlimited<b>$102.50</b>');
	
	$('#other44').html('<input  type="radio" name="itm">Other Items/Services<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py" >Cash');
    $('#credit44').html('<input type="radio" name="py" >Credit');
    $('#debit44').html('<input type="radio" name="py" >Debit');
    $('#otherp44').html('<input type="radio" name="py" >Other');

    $('#buy44').html('Buy New<br>Card<br><span>$1.00 extra</span>');

    $('#refill44').html('Refill Your<br>Card').css('font-size', '20px');


	});



$('#spanish44').click(function(){
  $('#ride144').html ('<input  type="radio" name="itm"> 1-viaje <b> $2.75</span></b>');

  $('#ride244').html('<input  type="radio" name="itm"> 2-viajes <b> $5.75</span></b>');

  $('#ride744').html('<input type="radio" name="itm">7-Dias Ilimitado <b>$31.50</b>');

  $('#cbalance44').html('<input type="radio" name="itm">Ver Balance');

  $('#ride3044').html('<input type="radio" name="itm">30-Dias Ilimitado<b>$102.50</b>');



  $('#other44').html('<input  type="radio" name="itm">Otros articulos<span class="caret"></span>');
  
    $('#cash44').html ('<input type="radio" name="py"> Efectivo');
    $('#credit44').html('<input type="radio" name="py">Credito');
    $('#debit44').html('<input type="radio" name="py" >Debito');
    $('#otherp44').html('<input type="radio" name="py">Otros');

    $('#buy44').html('Comprar Nueva <br>Tarjeta<br><span>$1.00 extra</span>');

    $('#refill44').html('Recarga tu<br>Tarjeta').css('font-size', '20px');

  });


$('#chinesse44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">_1 - 行程_ <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">_2 - 旅遊_  <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">_7-天无限 <b>$31.50</b>');

	$('#cbalance44').html('<input  type="radio" name="itm">   查看  餘額 ');

	$('#ride3044').html('<input  type="radio" name="itm"> 30 - 天无限  <b>$102.50</b>');
	
	$('#other44').html('__其他 個項目__<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py"> 现金 ');
    $('#credit44').html('<input type="radio" name="py"> 个学分 ');
    $('#debit44').html(' <input type="radio" name="py">金 ');
    $('#otherp44').html(' <input type="radio" name="py">宪章 ');

    $('#buy44').html('买新 <br> 憲章<br><span>$1.00 额外</span>');

    $('#refill44').html('充值您 <br> 憲章').css('font-size', '20px');

	});


$('#russian44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">1-поездка <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">2-Путешествия <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">7-дневный <b>$31.50</b>');

	$('#cbalance44').html('<input  type="radio" name="itm">пунктов услуги');

	$('#ride3044').html('<input  type="radio" name="itm">30-дневный <b>$102.50</b>');
	
	$('#other44').html('Другое пунктов/услуги<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py">Наличный');
    $('#credit44').html('<input type="radio" name="py">кредитов');
    $('#debit44').html('<input type="radio" name="py">ДЕБЕТОВ');
    $('#otherp44').html('<input type="radio" name="py">Другое');

    $('#buy44').html('Купить new <br>Устав<br><span>$1.00 Экстра</span>');

    $('#refill44').html('Перезарядка ваш<br>Устав').css('font-size', '15px');

	});




$('#french44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">1-Voyage <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">2-Voyage <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">7-Jours Illimité <b>$31.50</b>');

	$('#cbalance44').html('<input  type="radio" name="itm">Voir  Balance');

	$('#ride3044').html('<input  type="radio" name="itm">30-Jours Illimités <b>$102.50</b>');
	
	$('#other44').html('Autres Produ/Servic<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py">Espèces');
    $('#credit44').html('<input type="radio" name="py">Crédits');
    $('#debit44').html('<input type="radio" name="py">DÉBIT');
    $('#otherp44').html('<input type="radio" name="py">Autres');

  



    $('#buy44').html('Acheter Neuf<br> Charte <br><span>$1.00 Extra</span>');
    

    $('#refill44').html('Rechargez Votre<br>Charte').css('font-size', '15px');
     });




    $('#japanesse44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">1 - 旅行 <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">2 - 旅行 <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">7-日間無制限 <b>$31.50</b>');


	$('#cbalance44').html('<input  type="radio" name="itm">ビュー バランス');

	$('#ride3044').html('<input  type="radio" name="itm">30-日間無制限 <b>$102.50</b>');
	$('#ridebt44').html('<input  type="radio" name="itm">7-日間 バスや電車 <b>$57.50</b>');
	$('#other44').html('その他 の項目/サービ<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py">現金');
    $('#credit44').html('<input type="radio" name="py">クレジット');
    $('#debit44').html('<input type="radio" name="py">ゴールド');
    $('#otherp44').html('<input type="radio" name="py">その他');


    $('#buy44').html('買う新しい <br>憲章<br><span>$1.00 エクストラ</span>');

    $('#refill44').html('リチャージご<br>憲章').css('font-size', '20px');

    

	});

   
 $('#saudi44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">1 - رحلة <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">2 - السفر <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">لمدة 7 أيام غير محدود <b>$31.50</b>');


	$('#cbalance44').html('<input  type="radio" name="itm">عرض <br>الرصيد');

	$('#ride3044').html('<input  type="radio" name="itm">30 يوم غير محدود <b>$102.50</b>');
	
  $('#other44').html('<input  type="radio" name="itm">دولة اخرى البنود/خدمات<span class="caret"></span>');
	
    $('#cash44').html ('<input type="radio" name="py">النقدية');
    $('#credit44').html('<input type="radio" name="py">ساعة معتمدة');
    $('#debit44').html('<input type="radio" name="py">الذهب');
    $('#otherp44').html('<input type="radio" name="py">ادولة');


    $('#buy44').html('يبيع جديد<br>ميثاق<br><span>$1.00 إضافي</span>');

    $('#refill44').html('شحن الخاص بك<br>ميثاق').css('font-size', '20px');

	});

 $('#italian44').click(function(){

	$('#ride144').html ('<input  type="radio" name="itm">1-Viaggio <b>$2.75</b>');
	$('#ride244').html('<input  type="radio" name="itm">2-Viaggio <b>$5.75</b>');
	$('#ride744').html('<input  type="radio" name="itm">7-Giorni llimitato <b>$31.50</b>');

	$('#cbalance44').html('<input  type="radio" name="itm">Osservare Balance');

	$('#ride3044').html('<input  type="radio" name="itm">30-Giorni llimitato <b>$102.50</b>');
	
	$('#other44').html('Altro artic/serviz<span class="caret"></span>');
	
    $('#cash344').html ('<input type="radio" name="py">Contanti');
    $('#credit44').html('<input type="radio" name="py">Crediti');
    $('#debit44').html('<input type="radio" name="py">Diamanti');
    $('#otherp44').html('<input type="radio" name="py">Altro');



    $('#buy44').html('Acquista Nuovo<br>Carta<br><span>$1.00 extra</span>');

    $('#refill44').html('Ricarica Tuo <br>Carta').css('font-size', '20px');



});










$('#cbalance44').click(function(){
 $('.check44').fadeIn('fast').click(function(){
  $(this).fadeOut('fast')});


});


     




//second UI info

    $('#ride144, #ride244, #ride744, #ride3044, #ridebt44, #cbalance44').dblclick(function(){
    $('#panel44').fadeIn('fast');
});

    $('#panel44').click(function(){

      $(this).fadeOut('fast');
     });


});








// /////////////////



























VM4screenType = '';

///////////////////////////////////

$('#Vm2Machine').click(function(){

  console.log('buttons are ' + VM4screenType);

VM4screenType = 'Machine';

$('.UI4buttons').show();
$('.UI4buttonsMOBI').hide();


});




$('#Vm2Mobile').click(function(){

VM4screenType = 'Mobile';
$('.UI4buttons').hide();
$('.UI4buttonsMOBI').show();

console.log('buttons are ' + VM4screenType);

});


////////////////////////////////////





















////////////////////////DarK Color UI4///////////////////////////


$('#DARKui44').click(function(){
    $('.ui44').attr('class', 'ui44 uiXX');
    $('.ui44').addClass(' DARKui44');



      $('.lan44').attr('class', 'lan44');
      $('.lan44').addClass('DARKlan44');

         $('.lan44 > label, .lan44 > button').attr('class', 'btn btn-default btn-lg');
         $('.lan44 > label, .lan44 > button').addClass('Darklan44 > lan44');
         $('#english1').addClass('active');




/////////////

      $('.itm44').attr('class', 'itm44');
      $('.itm44').addClass('DARKitm44');


           $('.selectmenu').attr('class', 'selectmenu');
           $('.selectmenu').addClass('DARKselectmenu');


           $('#selectmenu2').attr('class', 'selectmenu2')
           $('#selectmenu2').addClass('DARKselectmenu2');


           $('.selectmenu3').attr('class', 'selectmenu3')
           $('.selectmenu3').addClass('DARKselectmenu3');




////////////


      $('.quantity44').attr('class', 'quantity44');
      $('.quantity44').addClass('DARKquantity44');



           $('#sub44').attr('class', 'btn btn-default btn-lg sub44');
           $('#sub44').addClass('DARKsub44');


           $('#add44').attr('class', 'btn btn-default btn-lg add44');
           $('#add44').addClass('DARKadd44');


           $('#qtyvalue44').attr('class', 'qtyValue44');
           $('#qtyvalue44').addClass('DARKqtyValue44');




///////////

      $('.py44').attr('class', 'py44');
      $('.py44').addClass('DARKpy44');


           $('.py44 > label, .py44 > button').attr('class', 'btn btn-default btn-lg');
           $('.py44 > label, .py44 > button').addClass('DARKpy44 > label');

/////////////  




      $('.fin44').attr('class', 'fin44');
      $('.fin44').addClass('DARKfin44');


          $('.finB44').attr('class', 'btn btn-default btn-lg finB44');
          $('.finB44').addClass('DARKfinB44');


             $('#total44').attr('class', 'total44');
             $('#total44').addClass('DARKtotal44');


});





////////////////////////White Color UI4///////////////////////////


$('#WHITEui44').click(function(){
    $('.ui44').attr('class', 'ui44 uiXX');
   



      $('.lan44').attr('class', 'lan44');
   

         $('.lan33 > label, .lan33 > button').attr('class', 'btn btn-default btn-lg')
   
         $('#english1').addClass('active');
/////////////

      $('.itm44').attr('class', 'itm44');
  


           $('.selectmenu').attr('class', 'selectmenu');
  


           $('#selectmenu2').attr('class', 'selectmenu2');
  


////////////


      $('.quantity44').attr('class', 'quantity44');




           $('#sub44').attr('class', 'btn btn-default btn-lg sub44');
 


           $('#add44').attr('class', 'btn btn-default btn-lg add44');



           $('#qtyvalue44').attr('class', 'qtyValue44');





///////////

      $('.py44').attr('class', 'py44');



           $('.py44 > label, .py44 > button').attr('class', 'btn btn-default btn-lg');


/////////////      

      $('.fin44').attr('class', 'fin44');



          $('.finB44').attr('class', 'btn btn-default btn-lg finB44');



             $('#total44').attr('class', 'total44');



 



});




////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////DarK Color UI4///////////////////////////


$('#DARKui44MOBI').click(function(){
    $('.ui44').attr('class', 'ui44 uiXX');
    $('.ui44').addClass(' DARKui44');



      $('.lan44').attr('class', 'lan44');
      $('.lan44').addClass('DARKlan44');

         $('.lan44 > label, .lan44 > button').attr('class', 'btn btn-default btn-lg');
         $('.lan44 > label, .lan44 > button').addClass('Darklan44 > lan44');
         $('#english1').addClass('active');




/////////////

      $('.itm44').attr('class', 'itm44');
      $('.itm44').addClass('DARKitm44');


           $('.selectmenu').attr('class', 'selectmenu');
           $('.selectmenu').addClass('DARKselectmenu');


           $('#selectmenu2').attr('class', 'selectmenu2')
           $('#selectmenu2').addClass('DARKselectmenu2');

           $('.selectmenu3').attr('class', 'selectmenu3')
           $('.selectmenu3').addClass('DARKselectmenu3');




////////////


      $('.quantity44').attr('class', 'quantity44');
      $('.quantity44').addClass('DARKquantity44');



           $('#sub44').attr('class', 'btn btn-default btn-lg sub44');
           $('#sub44').addClass('DARKsub44');


           $('#add44').attr('class', 'btn btn-default btn-lg add44');
           $('#add44').addClass('DARKadd44');


           $('#qtyvalue44').attr('class', 'qtyValue44');
           $('#qtyvalue44').addClass('DARKqtyValue44');




///////////

      $('.py44').attr('class', 'py44');
      $('.py44').addClass('DARKpy44');


           $('.py44 > label, .py44 > button').attr('class', 'btn btn-default btn-lg');
           $('.py44 > label, .py44 > button').addClass('DARKpy44 > label');

/////////////  




      $('.fin44').attr('class', 'fin44');
      $('.fin44').addClass('DARKfin44');


          $('.finB44').attr('class', 'btn btn-default btn-lg finB44');
          $('.finB44').addClass('DARKfinB44');


             $('#total44').attr('class', 'total44');
             $('#total44').addClass('DARKtotal44');


});





////////////////////////White Color UI4///////////////////////////


$('#WHITEui44MOBI').click(function(){
    $('.ui44').attr('class', 'ui44 uiXX');
   



      $('.lan44').attr('class', 'lan44');
   

         $('.lan33 > label, .lan33 > button').attr('class', 'btn btn-default btn-lg')
   
         $('#english1').addClass('active');
/////////////

      $('.itm44').attr('class', 'itm44');
  


           $('.selectmenu').attr('class', 'selectmenu');
  


           $('#selectmenu2').attr('class', 'selectmenu2');

           $('.selectmenu3').attr('class', 'selectmenu3');
  


////////////


      $('.quantity44').attr('class', 'quantity44');




           $('#sub44').attr('class', 'btn btn-default btn-lg sub44');
 


           $('#add44').attr('class', 'btn btn-default btn-lg add44');



           $('#qtyvalue44').attr('class', 'qtyValue44');





///////////

      $('.py44').attr('class', 'py44');



           $('.py44 > label, .py44 > button').attr('class', 'btn btn-default btn-lg');


/////////////      

      $('.fin44').attr('class', 'fin44');



          $('.finB44').attr('class', 'btn btn-default btn-lg finB44');



             $('#total44').attr('class', 'total44');



 



});






////////////////////////////////////////////////////////////////////////////////////////////










/*//////////////////////////////MOBI MOBI 44/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Mobile, .UI4buttonsMOBI > button, .TransportModel6x4, .TransportModel7x4, .TransportModel9x4').click(function(){


$('.ui44').addClass('ui44MOBI uiXXMOBI');


$('.lan44').addClass('lan44MOBI');



$('.Vm4LanB').hide();


$('.Vm4LanBMOBI').show();



$('.itm44').addClass('itm44MOBI');
$('.itm44Background').addClass('itm44BackgroundMOBI');


$('.label1').addClass('label1MOBI'); 

$('.label1, .label2, .label3, .label4, .label5').addClass('labelMOBI');


$('.selectmenu').addClass('selectmenuMOBI');
$('.selectmenu2').addClass('selectmenu2MOBI');
$('.selectmenu3').addClass('selectmenu3MOBI');



$('.itm44').addClass('itm44MOBI');
$('.DropItmMenu44').addClass('DropItmMenu44MOBI');





$('.qty44').addClass('qty44MOBI');




$('.sub44').addClass('sub44MOBI');



$('.add44').addClass('add44MOBI');


$('.qtyvalue44').addClass('qtyvalue44MOBI');

$('.py44').addClass('py44MOBI'); 


$('.PayButtons44').hide(); 


$('.PayButtonsMOBI44').show(); 





$('.fin44').addClass('fin44MOBI');
    

$('.refill44, .buy44').hide();

$('.refill44MOBI, .buy44MOBI').show();



$('.total44').addClass('total44MOBI');

$('#refill44, #buy44').hide();





$('#CheckBalVM4').show();



});

 

  
/*//////////////////////////////Machine Machine 44/////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////*/



$('#Vm2Machine, .UI4buttons > button').click(function(){


$('.ui44').removeClass('ui44MOBI uiXXMOBI');


$('.lan44').removeClass('lan44MOBI');



$('.Vm4LanB').show();


$('.Vm4LanBMOBI').hide();



$('.itm44').removeClass('itm44MOBI');
$('.itm44Background').removeClass('itm44BackgroundMOBI');


$('.label1').removeClass('label1MOBI'); 
$('.label1, .label2, .label3, .label4, .label5').removeClass('labelMOBI');


$('.selectmenu').removeClass('selectmenuMOBI');
$('.selectmenu2').removeClass('selectmenu2MOBI');
$('.selectmenu3').removeClass('selectmenu3MOBI');



$('.itm22Background').removeClass('itm22BackgroundMOBI');
$('.itm44').removeClass('itm44MOBI');


$('.DropItmMenu44').removeClass('DropItmMenu44MOBI');





$('.qty44').removeClass('qty44MOBI');




$('.sub44').removeClass('sub44MOBI');



$('.add44').removeClass('add44MOBI');


$('.qtyvalue44').removeClass('qtyvalue44MOBI');

$('.py44').removeClass('py44MOBI'); 


$('.PayButtons44').show(); 


$('.PayButtonsMOBI44').hide(); 





$('.fin44').removeClass('fin44MOBI');
    

$('#refill44, #buy44').show();

$('.refill44MOBI, .buy44MOBI').hide();



$('.total44').removeClass('total44MOBI');

$('.refill44, .buy44').show();


$('#CheckBalVM3').hide();






});




