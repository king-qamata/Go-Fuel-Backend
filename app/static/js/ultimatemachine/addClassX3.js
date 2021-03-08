$(document).ready(function(){
 

screenTypex3 = '';

///////////////////////////////////

$('#ATM1Machinex3, #ATM1Machinex4').click(function(){

  console.log('buttonsx3 are ' + screenTypex3);

screenTypex3 = 'Machinex3';

$('.NoColorsx3').show();
$('.NoColorsMOBIx3').hide();


});




$('#ATM1Mobilex3, #ATM1Mobilex4').click(function(){

screenTypex3 = 'Mobilex3';


$('.NoColorsx3').hide();
$('.NoColorsMOBIx3').show();

console.log('buttonsx3 are ' + screenTypex3);
});


////////////////////////////////////


























// ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


$('#ATM1Mobilex3, #ATM1Mobilex4, .NoColorsMOBIx3 > button, .NoColorsMOBIx4 > label, .AtmFinModel').click(function(){


 $('.ui2x3').addClass('ui2MOBI uiXXMOBI');
   
      // $('.lan2').addClass('lan2MOBI');
      //    $('.langB').addClass('langBMOBI');
      //    $('.langBother').addClass('langBotherMOBI');

$('#english2x3').addClass('active');

$('.ServicePanelHeaderx3').addClass('ServicePanelHeaderMOBIx3');
$('.servicePanelParrax3').addClass('servicePanelParraMOBIx3');




        $('.lan2x3').hide();
         $('.lan2MOBIx3').show();
         $('.lan2MOBIx3').addClass('bluelan2');

         $('.lan2MOBIx3 > label, .lan2MOBI > button').addClass('langBotherMOBI');
         $('#english2x3').addClass('active');


      $('.serm2x3').addClass('serm2MOBIx3');
      $('.innerx3').addClass('innerx3 innerMOBIx3');

       $('.serDropx3').addClass('serDropMOBIx3');
       // $('.serDropx3 > button').addClass('serDropMOBIx3 > button');


      // $('.ser2').addClass('ser2MOBI');
      //    $('.serB').addClass('SerBMOBI');


      // $('#QuickPay2x3, #QuickPay3x3').show();
      // $('#wdraw1x3, #wdraw2x3').hide();



 $('.depositx3').addClass('depositMOBIx3');
 $('.DepositCCx3').hide();
 $('.DepositCx3').show();
 $('.CaptureDepositx3').show();
 $('.DepositButtonsx3').addClass('DepositButtonsMOBIx3');



 $('.sm3Buttons').addClass('sm3ButtonsMOBI');
      // $('.sm2x3').attr('class', 'btn btn-default btn-lg sm2x3');
      $('.sm2x3').addClass('sm2x3 sm2MOBIx3');


      // $('.acm2x3').attr('class', 'btn btn-default btn-lg acm2x3');
      $('.acm2x3').addClass('acm2x3 acm2MOBIx3');



       


      $('.tof2').addClass('tof2MOBIx3');
         $('.tofB').addClass('tofBMOBIx3');




      $('.qty2x3').addClass('qty2MOBIx3');
          $('.qtyvalue2x3').addClass('qtyvalue2x3 qtyvalue2MOBIx3');
          $('.amountx3').addClass('amountx3 amountMOBIx3');
            $('.QtyValueCoverx3').addClass('QtyValueCoverMOBIx3');
             $('.PayButtonsBx3').addClass('pyMOBIlabelx3');



      $('.backSpacex3').addClass('backSpaceMOBIx3');








      // $('.numV').addClass('NumV');
      $('.NumPadx3').addClass('numVMOBIx3');


      $('.fin2x3').addClass('fin2MOBIx3');






            $('.finBx3').addClass('finBMOBIx3');


          $('.confBack2Yx3').addClass('confBack2Yx3 confBack2YMOBIx3');


      $('.confirm2Yx3').addClass('confirm2YMOBIx3');
      $('.back2Yx3').addClass('back2YMOBIx3');


      $('.Schedulex3 ')



$('.ServicePanelx3').addClass('servicePanelsMOBIx3');
$('.ServicePanelx3').addClass('servicePanelsMOBIx3 > span');
$('.friendsx3, .DenominatedBillsx3, .Cardx3, .PBillx3, .TLoanx3').addClass('SerPanLabelsMOBIx3');

$('#closeSer2Panelsx3').addClass(' closeSer2PanelsMOBIx3');
$('.Schedulex3').addClass('ScheduleMOBIx3');

$('.Cardx3').addClass('CardMOBIx3');

$('.creditcCardsx3').addClass('CreditcCardsMOBIx3');

$('.Card1ImputLabelx3').addClass('Card1ImputLabelMOBIx3');
$('.Card2ImputLabelx3').addClass('Card2ImputLabelMOBIx3');
$('.Card3ImputLabelx3').addClass('Card3ImputLabelMOBIx3');
$('.Card4ImputLabelx3').addClass('Card4ImputLabelMOBIx3');

// $('.CardImputLabelx3').addClass('CardImputLabelMOBIx3');

$('.CardImputLabelx3 > input').addClass('CardImputMOBIx3');
$('.CardImputLabelx3 > input').css('width', '120px');





$('.billButtonsx3').addClass('billButtonsMOBIx3');
$('.DenominatedBillsx3').addClass('DenominatedBillsMOBIx3');

$('.DenoImput10Labelx3').addClass('DenoImput10LabelMOBIx3');
$('.DenoImput20Labelx3').addClass('DenoImput20LabelMOBIx3');
$('.DenoImput50Labelx3').addClass('DenoImput50LabelMOBIx3');
$('.DenoImput100Labelx3').addClass('DenoImput100LabelMOBIx3');


$('.denoImputLabelx3 > input').css('font-size', '44px');
$('.denoImputLabelx3 > input').css('width', '93px');


$('.friendsx3').addClass('friendsMOBIx3');
$('.friendImputx3').addClass('friendImputMOBIx3');
$('.friendsSpanx3').addClass('friendsSpanMOBIx3');
$('.SelectFriendx3').addClass('SelectFriendMOBIx3');
$('.SendReqx3').addClass('SendReqMOBIx3');
$('.FriendMemox3').addClass('FriendMemoMOBIx3');
$('.WriteMemox3').addClass('WriteMemoMOBIx3');



$('.PBillx3').addClass('PBillsMOBIx3');
$('.SelectBillPayx3').addClass('SelectBillPayMOBIx3');

$('.PBill1ImputLabelx3').addClass('PBill1ImputLabelMOBIx3');
$('.PBill2ImputLabelx3').addClass('PBill2ImputLabelMOBIx3');
$('.PBill3ImputLabelx3').addClass('PBill3ImputLabelMOBIx3');
$('.PBill4ImputLabelx3').addClass('PBill4ImputLabelMOBIx3');
$('.PBill5ImputLabelx3').addClass('PBill5ImputLabelMOBIx3');
$('.PBill6ImputLabelx3').addClass('PBill6ImputLabelMOBIx3');
$('.PBillImputx3').addClass('PBillImputMOBIx3');



$('.TakeLoanx3').addClass('TakeLoanMOBIx3');
$('.LoanParrax3').addClass('LoanParraMOBIx3');
$('.TLoanx3').addClass('TLoanMOBIx3');
$('.TLoanImputx3').addClass('TLoanImputMOBIx3');

$('.TLoan1ImputLabelx3').addClass('TLoan1ImputLabelMOBIx3');
$('.TLoan2ImputLabelx3').addClass('TLoan2ImputLabelMOBIx3');
$('.TLoan3ImputLabelx3').addClass('TLoan3ImputLabelMOBIx3');



$('.MerchantLabelsContx3').addClass('MerchantLabelsContMOBIx3');
$('.MerchantLabelx3').addClass('MerchantLabelMOBIx3');
$('.MerchantImputx3').addClass('MerchantImputMOBIx3');
$('.MSwipex3').addClass('MSwipeMOBIx3');
$('.MSwipeCoverx3').addClass('MSwipeCoverMOBIx3');


$('.sendAccountx3').addClass('sendAccountMOBIx3');
$('.sendRoutingx3').addClass('sendRoutingMOBIx3');
$('.WireTelephonex3').addClass('WireTelephoneMOBIx3');
$('.WireZipCodex3').addClass('WireZipCodeMOBIx3');
$('.SwipeCardx3').addClass('SwipeCardMOBIx3');


$('.SwAccCoverx3').addClass('SwAccCoverMOBIx3');
$('.SwRCoverx3').addClass('SwRCoverMOBIx3');
$('.SwTelCoverx3').addClass('SwTelCoverMOBIx3');
$('.SwZipCoverx3').addClass('SwZipCoverMOBIx3');


$('.wireSpanx3').addClass('wireSpanMOBIx3');


$('.LoanParrax3').addClass('LoanParraMOBIx3');

$('.cheTsav2x3').addClass('cheTsav2MOBIx3');
$('.savTche2x3').addClass('savTche2MOBIx3');


$('.OperationEndedPanelx3').addClass('OperationEndedPanelMOBIx3');




});






$('#ATM1Machinex3, #ATM1Machinex4, .NoColorsx3 > button, .NoColorsx4 > label').click(function(){


 $('.ui2x3').removeClass('ui2MOBI uiXXMOBI');
   
      // $('.lan2').removeClass('lan2MOBI');
      //    $('.langB').removeClass('langBMOBI');
      //    $('.langBother').removeClass('langBotherMOBI');



$('.ServicePanelHeaderx3').removeClass('ServicePanelHeaderMOBIx3');
$('.servicePanelParrax3').removeClass('servicePanelParraMOBIx3');




        $('.lan2x3').show();
         $('.lan2MOBIx3').hide();
         $('.lan2MOBIx3').removeClass('bluelan2');

         $('.lan2MOBIx3 > label, .lan2MOBI > button').removeClass('langBotherMOBI');
         


      $('.serm2x3').removeClass('serm2MOBIx3');
      $('.innerx3').removeClass('innerMOBIx3');

       $('.serDropx3').removeClass('serDropMOBIx3');
       $('.serDropx3 > button').removeClass('serDropMOBIx3 > button');


      $('#QuickPay2x3, #QuickPay3x3').hide();
      $('#wdraw1x3, #wdraw2x3').show();


 $('.depositx3').removeClass('depositMOBIx3');
 $('.DepositCCx3').show();
 $('.DepositCx3').hide();
 $('.CaptureDepositx3').hide();
 $('.DepositButtonsx3').removeClass('DepositButtonsMOBIx3');




      // $('.ser2').removeClass('ser2MOBI');
      //    $('.serB').removeClass('SerBMOBI');

      // $('.sm2x3').attr('class', 'btn btn-default btn-lg sm2x3');

      $('.sm3Buttons').removeClass('sm3ButtonsMOBI');
      $('.sm2x3').removeClass('sm2MOBIx3');


      // $('.acm2x3').attr('class', 'btn btn-default btn-lg acm2x3');
      $('.acm2x3').removeClass('acm2MOBIx3');

       


      $('.tof2').removeClass('tof2MOBIx3');
         $('.tofB').removeClass('tofBMOBIx3');




      $('.qty2x3').removeClass('qty2MOBIx3');
          $('.qtyvalue2x3').removeClass('qtyvalue2MOBIx3');
          $('.amountx3').removeClass('amountMOBIx3');
          $('.QtyValueCoverx3').removeClass('QtyValueCoverMOBIx3');
          $('.PayButtonsBx3').removeClass('pyMOBIlabelx3');


      $('.backSpacex3').removeClass('backSpaceMOBIx3');








      // $('.numV').removeClass('NumV');
      $('.NumPadx3').removeClass('numVMOBIx3');


      $('.fin2x3').removeClass('fin2MOBIx3');






            $('.finBx3').removeClass('finBMOBIx3');


          $('.confBack2Yx3').removeClass('confBack2YMOBIx3');


      $('.confirm2Yx3').removeClass('confirm2YMOBIx3');
      $('.back2Yx3').removeClass('back2YMOBIx3');



$('.ServicePanelx3').removeClass('servicePanelsMOBIx3');
$('.ServicePanelx3').removeClass('servicePanelsMOBIx3 > span');

$('#closeSer2Panelsx3').removeClass(' closeSer2PanelsMOBIx3');
$('.friendsx3, .DenominatedBillsx3, .Cardx3, .PBillx3, .TLoanx3').removeClass('SerPanLabelsMOBIx3');
$('.Schedulex3').removeClass('ScheduleMOBIx3');


$('.Cardx3').removeClass('CardMOBIx3');
$('.creditcCardsx3').removeClass('CreditcCardsMOBIx3');

$('.Card1ImputLabelx3').removeClass('Card1ImputLabelMOBIx3');
$('.Card2ImputLabelx3').removeClass('Card2ImputLabelMOBIx3');
$('.Card3ImputLabelx3').removeClass('Card3ImputLabelMOBIx3');
$('.Card4ImputLabelx3').removeClass('Card4ImputLabelMOBIx3');

// $('.CardImputLabelx3').removeClass('CardImputLabelMOBIx3');

$('.CardImputLabelx3 > input').removeClass('CardImputMOBIx3');
$('.CardImputLabelx3 > input').css('width', '80px');



$('.DenominatedBillsx3').removeClass('DenominatedBillsMOBIx3');

$('.billButtonsx3').removeClass('billButtonsMOBIx3');


$('.DenoImput10Labelx3').removeClass('DenoImput10LabelMOBIx3');
$('.DenoImput20Labelx3').removeClass('DenoImput20LabelMOBIx3');
$('.DenoImput50Labelx3').removeClass('DenoImput50LabelMOBIx3');
$('.DenoImput100Labelx3').removeClass('DenoImput100LabelMOBIx3');


$('.denoImputLabelx3 > input').css('font-size', '44px');
$('.denoImputLabelx3 > input').css('width', '93px');


$('.friendsx3').removeClass('friendsMOBIx3');
$('.friendImputx3').removeClass('friendImputMOBIx3');
$('.friendsSpanx3').removeClass('friendsSpanMOBIx3');
$('.SelectFriendx3').removeClass('SelectFriendMOBIx3');
$('.SendReqx3').removeClass('SendReqMOBIx3');
$('.FriendMemox3').removeClass('FriendMemoMOBIx3');
$('.WriteMemox3').removeClass('WriteMemoMOBIx3');



$('.PBillx3').removeClass('PBillsMOBIx3');
$('.SelectBillPayx3').removeClass('SelectBillPayMOBIx3');

$('.PBill1ImputLabelx3').removeClass('PBill1ImputLabelMOBIx3');
$('.PBill2ImputLabelx3').removeClass('PBill2ImputLabelMOBIx3');
$('.PBill3ImputLabelx3').removeClass('PBill3ImputLabelMOBIx3');
$('.PBill4ImputLabelx3').removeClass('PBill4ImputLabelMOBIx3');
$('.PBill5ImputLabelx3').removeClass('PBill5ImputLabelMOBIx3');
$('.PBill6ImputLabelx3').removeClass('PBill6ImputLabelMOBIx3');
$('.PBillImputx3').removeClass('PBillImputMOBIx3');



$('.TakeLoanx3').removeClass('TakeLoanMOBIx3');
$('.LoanParrax3').removeClass('LoanParraMOBIx3');
$('.TLoanx3').removeClass('TLoanMOBIx3');
$('.TLoanImputx3').removeClass('TLoanImputMOBIx3');

$('.TLoan1ImputLabelx3').removeClass('TLoan1ImputLabelMOBIx3');
$('.TLoan2ImputLabelx3').removeClass('TLoan2ImputLabelMOBIx3');
$('.TLoan3ImputLabelx3').removeClass('TLoan3ImputLabelMOBIx3');


$('.MerchantLabelsContx3').removeClass('MerchantLabelsContMOBIx3');
$('.MerchantLabelx3').removeClass('MerchantLabelMOBIx3');
$('.MerchantImputx3').removeClass('MerchantImputMOBIx3');
$('.MSwipex3').removeClass('MSwipeMOBIx3');
$('.SwipeCardx3').removeClass('SwipeCardMOBIx3');
$('.MSwipeCoverx3').removeClass('MSwipeCoverMOBIx3');







$('.sendAccountx3').removeClass('sendAccountMOBIx3');
$('.sendRoutingx3').removeClass('sendRoutingMOBIx3');
$('.WireTelephonex3').removeClass('WireTelephoneMOBIx3');
$('.WireZipCodex3').removeClass('WireZipCodeMOBIx3');


$('.SwAccCoverx3').removeClass('SwAccCoverMOBIx3');
$('.SwRCoverx3').removeClass('SwRCoverMOBIx3');
$('.SwTelCoverx3').removeClass('SwTelCoverMOBIx3');
$('.SwZipCoverx3').removeClass('SwZipCoverMOBIx3');





$('.wireSpanx3').removeClass('wireSpanMOBIx3');


$('.LoanParrax3').removeClass('LoanParraMOBIx3');

$('.cheTsav2x3').removeClass('cheTsav2MOBIx3');
$('.savTche2x3').removeClass('savTche2MOBIx3');


$('.OperationEndedPanelx3').removeClass('OperationEndedPanelMOBIx3');

});









});

