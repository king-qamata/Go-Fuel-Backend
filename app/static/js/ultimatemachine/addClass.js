$(document).ready(function(){
 

screenType = '';

///////////////////////////////////

$('#ATM1Machine, #ATM1Machinex4').click(function(){

  console.log('buttons are ' + screenType);

screenType = 'Machine';

$('.NoColors').show();
$('.NoColorsMOBI').hide();


});




$('#ATM1Mobile, #ATM1Mobilex4').click(function(){

screenType = 'Mobile';
$('.NoColors').hide();
$('.NoColorsMOBI').show();

console.log('buttons are ' + screenType);
});


////////////////////////////////////













////////////////////////////////////////////////




////////////////////////////////////////////

// //////////////////


$('#ATM1Mobile, #ATM1Mobilex4, .NoColorsMOBI > button, .NoColorsMOBIx4 > label, .NoAtmFinModel').click(function(){

  screenType = 'Mobile';
  console.log('ScreeType is ' + screenType);


 $('.ui2').addClass('ui2MOBI uiXXMOBI');
   
      // $('.lan2').addClass('lan2MOBI');
      //    $('.langB').addClass('langBMOBI');
      //    $('.langBother').addClass('langBotherMOBI');

$('#english2').addClass('active');


$('.ServicePanelHeader').addClass('ServicePanelHeaderMOBI');
$('.servicePanelParra').addClass('servicePanelParraMOBI');






        $('.lan2').hide();
         $('.lan2MOBI').show();
         $('.lan2MOBI').addClass('bluelan2');
         $('.lan2MOBI > label, .lan2MOBI > button').addClass('langBotherMOBI');
         $('#english').addClass('active');

      $('.Serm').addClass('SermMOBI');


$('.Networth').addClass('NetworthMOBI');
$('.TotalNet').addClass('TotalNetMOBI');
$('.NetworthBal').addClass('NetworthBalMOBI');
$('.CashCreditAsset').addClass('CashCreditAssetMOBI');
$('.CashCreditAssetBal').addClass('CashCreditAssetBalMOBI');

      $('.ser2').addClass('ser2MOBI');
         $('.serB').addClass('SerBMOBI');






 $('.DepositCC').hide();
 $('.DepositC').show();
 $('.depositCash').addClass('depositMOBI');
 $('.CaptureDeposit').show();
 $('.DepositButtons').addClass('DepositButtonsMOBI');
 $('.closeDeposit').show();




         $('.serBother').addClass('serBotherMOBI');


         $('.serDrop').addClass('serDropMOBI');
         $('.serDrop > button').addClass('serDropMOBI > button');


      $('.tof2').addClass('tof2MOBI');
         $('.acm2x1').addClass('acm2MOBIx1');
          $('.acm2x1').css('border-radius', '40px');




      $('.qty2').addClass('qty2MOBI');
          $('.qtyvalue2').addClass('qtyvalue2MOBI');
          $('.amount').addClass('amountMOBI');
            $('.QtyValueCover').addClass('QtyValueCoverMOBI');


    $('.PayButtonsBx1').addClass('pyMOBIlabelx1');


      $('.backSpace').addClass('backSpaceMOBI');








      // $('.numV').addClass('NumV');
      $('.NumPad').addClass('numVMOBI');

      $('.fin2').addClass('fin2MOBI')






            $('.finB').addClass('finBMOBI');
                 
             $('.confBack2Y').addClass('confBack2Y confBack2YMOBI');

      $('.confirm2Y').addClass('confirm2YMOBI');
      $('.back2Y').addClass('back2YMOBI');

$('.Merchant, .PayBills, .BillDenominationWdraw, .sendMoney11, .sendMoney2, .Loan, .CreditCards, .assistance').addClass('servicePanelsMOBI');
$('.Merchant, .PayBills, .BillDenominationWdraw, .sendMoney11, .sendMoney2, .Loan, .CreditCards, .assistance').addClass('servicePanelsMOBI > span');

$(' #closeSer2Panels').addClass('closeSer2PanelsMOBI');
$('.friends, .DenominatedBills, .Card, .PBill, .TLoan').addClass('SerPanLabelsMOBI');
$('.Schedule').addClass('ScheduleMOBI');

$('.Card').addClass('CardMOBI');

$('.creditcCards').addClass('CreditcCardsMOBI');

// $('.Card1ImputLabel').addClass('Card1ImputLabelMOBI');
// $('.Card2ImputLabel').addClass('Card2ImputLabelMOBI');
// $('.Card3ImputLabel').addClass('Card3ImputLabelMOBI');
// $('.Card4ImputLabel').addClass('Card4ImputLabelMOBI');

$('.CardImputLabel').addClass('CardImputLabelMOBI');

$('.CardImputLabel > input').addClass('CardImputMOBI');
$('.CardImputLabel > input').css('width', '120px');


// $('.DenominatedBills').addClass('DenominatedBillsMOBI');


$('.billButtons').addClass('billButtonsMOBI');
$('.DenominatedBills').addClass('DenominatedBillsMOBI');

$('.DenoImput10Label').addClass('DenoImput10LabelMOBI');
$('.DenoImput20Label').addClass('DenoImput20LabelMOBI');
$('.DenoImput50Label').addClass('DenoImput50LabelMOBI');
$('.DenoImput100Label').addClass('DenoImput100LabelMOBI');


$('.denoImputLabel > input').css('font-size', '44px');
$('.denoImputLabel > input').css('width', '93px');



$('.friends').addClass('friendsMOBI');
$('.friendImput').addClass('friendImputMOBI');
// $('.friendsMOBI > span').css('right', '23px');
$('.friendsSpan').addClass('friendsSpanMOBI');

$('.SelectFriend').addClass('SelectFriendMOBI');
$('.SendReq').addClass('SendReqMOBI');
$('.FriendMemo').addClass('FriendMemoMOBI');
$('.WriteMemo').addClass('WriteMemoMOBI');

$('.PBill').addClass('PBillsMOBI');
$('.SelectBillPay').addClass('SelectBillPayMOBI');

$('.PBill1ImputLabel').addClass('PBill1ImputLabelMOBI');
$('.PBill2ImputLabel').addClass('PBill2ImputLabelMOBI');
$('.PBill3ImputLabel').addClass('PBill3ImputLabelMOBI');
$('.PBill4ImputLabel').addClass('PBill4ImputLabelMOBI');
$('.PBill5ImputLabel').addClass('PBill5ImputLabelMOBI');
$('.PBill6ImputLabel').addClass('PBill6ImputLabelMOBI');
$('.PBillImput').addClass('PBillImputMOBI');




$('.TakeLoan').addClass('TakeLoanMOBI');
$('.LoanParra').addClass('LoanParraMOBI');
$('.TLoan').addClass('TLoanMOBI');
$('.TLoanImput').addClass('TLoanImputMOBI');

$('.TLoan1ImputLabel').addClass('TLoan1ImputLabelMOBI');
$('.TLoan2ImputLabel').addClass('TLoan2ImputLabelMOBI');
$('.TLoan3ImputLabel').addClass('TLoan3ImputLabelMOBI');




$('.MerchantLabelsCont').addClass('MerchantLabelsContMOBI');
$('.MerchantLabel').addClass('MerchantLabelMOBI');
$('.MerchantImput').addClass('MerchantImputMOBI');
$('.MSwipe').addClass('MSwipeMOBI');
$('.SwipeCard').addClass('SwipeCardMOBI');
$('.MSwipeCover').addClass('MSwipeCoverMOBI');




$('.sendAccount').addClass('sendAccountMOBI');
$('.sendRouting').addClass('sendRoutingMOBI');
$('.WireTelephone').addClass('WireTelephoneMOBI');
$('.WireZipCode').addClass('WireZipCodeMOBI');


$('.SwAccCover').addClass('SwAccCoverMOBI');
$('.SwRCover').addClass('SwRCoverMOBI');
$('.SwTelCover').addClass('SwTelCoverMOBI');
$('.SwZipCover').addClass('SwZipCoverMOBI');




$('.wireSpan').addClass('wireSpanMOBI');


$('.LoanParra').addClass('LoanParraMOBI');


$('.cheTsav').addClass('cheTsavMOBI');
$('.savTche').addClass('savTcheMOBI');


$('.OperationEndedPanel').addClass('OperationEndedPanelMOBI');

});







/////////////////ATM Machine/////////////////////






$('#ATM1Machine, #ATM1Machinex4, .NoColors > button, .NoColorsx4 > label').click(function(){

  screenType = 'Machine';


 console.log('ScreeType is ' + screenType);

 $('.ui2').removeClass('ui2MOBI uiXXMOBI');
   
      // $('.lan2').removeClass('lan2MOBI');
      //    $('.langB').removeClass('langBMOBI');
      //    $('.langBother').removeClass('langBotherMOBI');



$('.ServicePanelHeader').removeClass('ServicePanelHeaderMOBI');
$('.servicePanelParra').removeClass('servicePanelParraMOBI');





        $('.lan2').show();
         $('.lan2MOBI').hide();
         $('.lan2MOBI').addClass('bluelan2');
         $('.lan2MOBI > label, .lan2MOBI > button').addClass('langBotherMOBI');
         $('#english').removeClass('active');

      $('.Serm').removeClass('SermMOBI');

      $('.ser2').removeClass('ser2MOBI');
         $('.serB').removeClass('SerBMOBI');



$('.Networth').removeClass('NetworthMOBI');
$('.TotalNet').removeClass('TotalNetMOBI');
$('.NetworthBal').removeClass('NetworthBalMOBI');
$('.CashCreditAsset').removeClass('CashCreditAssetMOBI');
$('.CashCreditAssetBal').removeClass('CashCreditAssetBalMOBI');



 
 $('.depositCash').removeClass('depositMOBI');
 $('.DepositCC').show();
 $('.DepositC').hide();
 $('.CaptureDeposit').hide();
 $('.DepositButtons').removeClass('DepositButtonsMOBI');
 $('.closeDeposit').show();





      // $('.sm2').attr('class', 'btn btn-default btn-lg sm2MOBI');
      // $('.sm2').removeClass('Sm2MOBI');


      // $('.acm2').attr('class', 'btn btn-default btn-lg acm2MOBI');
      // $('.acm2').removeClass('Acm2MOBI');

         $('.serBother').removeClass('serBotherMOBI');

         $('.serDrop').removeClass('serDropMOBI');
         $('.serDrop > button').removeClass('serDropMOBI > button');


      $('.tof2').removeClass('tof2MOBI');
         $('.acm2x1').removeClass('acm2MOBIx1');

         $('.acm2x1').css('border-radius', '30px');




      $('.qty2').removeClass('qty2MOBI');
          $('.qtyvalue2').removeClass('qtyvalue2MOBI');
          $('.amount').removeClass('amountMOBI');
          $('.QtyValueCover').removeClass('QtyValueCoverMOBI');

          $('.PayButtonsBx1').removeClass('pyMOBIlabelx1');

      $('.backSpace').removeClass('backSpaceMOBI');
     








      // $('.numV').removeClass('NumV');
      $('.NumPad').removeClass('numVMOBI');

      $('.fin2').removeClass('fin2MOBI')






            $('.finB').removeClass('finBMOBI');
                 
             $('.confBack2Y').removeClass('confBack2YMOBI');

      $('.confirm2Y').removeClass('confirm2YMOBI');
      $('.back2Y').removeClass('back2YMOBI');

$('.Merchant, .PayBills, .BillDenominationWdraw, .sendMoney11, .sendMoney2, .Loan, .CreditCards, .assistance').removeClass('servicePanelsMOBI');
$('.Merchant, .PayBills, .BillDenominationWdraw, .sendMoney11, .sendMoney2, .Loan, .CreditCards, .assistance').removeClass('servicePanelsMOBI > span');

$('#closeSer2Panels').removeClass('closeSer2PanelsMOBI');
$('.friends, .DenominatedBills, .Card, .PBill, .TLoan').removeClass('SerPanLabelsMOBI');
$('.Schedule').removeClass('ScheduleMOBI');


$('.Card').removeClass('CardMOBI');
$('.creditcCards').removeClass('CreditcCardsMOBI');

// $('.Card1ImputLabel').removeClass('Card1ImputLabelMOBI');
// $('.Card2ImputLabel').removeClass('Card2ImputLabelMOBI');
// $('.Card3ImputLabel').removeClass('Card3ImputLabelMOBI');
// $('.Card4ImputLabel').removeClass('Card4ImputLabelMOBI');

$('.CardImputLabel').removeClass('CardImputLabelMOBI');

$('.CardImputLabel > input').removeClass('CardImputMOBI');
$('.CardImputLabel > input').css('width', '70px');


// $('.DenominatedBills').removeClass('DenominatedBillsMOBI');


$('.billButtons').removeClass('billButtonsMOBI');
$('.DenominatedBills').removeClass('DenominatedBillsMOBI');

$('.DenoImput10Label').removeClass('DenoImput10LabelMOBI');
$('.DenoImput20Label').removeClass('DenoImput20LabelMOBI');
$('.DenoImput50Label').removeClass('DenoImput50LabelMOBI');
$('.DenoImput100Label').removeClass('DenoImput100LabelMOBI');


$('.denoImputLabel > input').css('font-size', '30px');
$('.denoImputLabel > input').css('width', '70px');


$('.friends').removeClass('friendsMOBI');
$('.friendImput').removeClass('friendImputMOBI');
// $('.friendsMOBI > span').css('right', '14px');
$('.friendsSpan').removeClass('friendsSpanMOBI');
$('.SelectFriend').removeClass('SelectFriendMOBI');
$('.SendReq').removeClass('SendReqMOBI');
$('.FriendMemo').removeClass('FriendMemoMOBI');
$('.WriteMemo').removeClass('WriteMemoMOBI');



$('.PBill').removeClass('PBillsMOBI');
$('.SelectBillPay').removeClass('SelectBillPayMOBI');

$('.PBill1ImputLabel').removeClass('PBill1ImputLabelMOBI');
$('.PBill2ImputLabel').removeClass('PBill2ImputLabelMOBI');
$('.PBill3ImputLabel').removeClass('PBill3ImputLabelMOBI');
$('.PBill4ImputLabel').removeClass('PBill4ImputLabelMOBI');
$('.PBill5ImputLabel').removeClass('PBill5ImputLabelMOBI');
$('.PBill6ImputLabel').removeClass('PBill6ImputLabelMOBI');
$('.PBillImput').removeClass('PBillImputMOBI');



$('.TakeLoan').removeClass('TakeLoanMOBI');
$('.LoanParra').removeClass('LoanParraMOBI');
$('.TLoan').removeClass('TLoanMOBI');
$('.TLoanImput').removeClass('TLoanImputMOBI');

$('.TLoan1ImputLabel').removeClass('TLoan1ImputLabelMOBI');
$('.TLoan2ImputLabel').removeClass('TLoan2ImputLabelMOBI');
$('.TLoan3ImputLabel').removeClass('TLoan3ImputLabelMOBI');




$('.MerchantLabelsCont').removeClass('MerchantLabelsContMOBI');
$('.MerchantLabel').removeClass('MerchantLabelMOBI');
$('.MerchantImput').removeClass('MerchantImputMOBI');
$('.MSwipe').removeClass('MSwipeMOBI');
$('.SwipeCard').removeClass('SwipeCardMOBI');
$('.MSwipeCover').removeClass('MSwipeCoverMOBI');




$('.sendAccount').removeClass('sendAccountMOBI');
$('.sendRouting').removeClass('sendRoutingMOBI');
$('.WireTelephone').removeClass('WireTelephoneMOBI');
$('.WireZipCode').removeClass('WireZipCodeMOBI');

$('.wireSpan').removeClass('wireSpanMOBI');


$('.SwAccCover').removeClass('SwAccCoverMOBI');
$('.SwRCover').removeClass('SwRCoverMOBI');
$('.SwTelCover').removeClass('SwTelCoverMOBI');
$('.SwZipCover').removeClass('SwZipCoverMOBI');




$('.LoanParra').removeClass('LoanParraMOBI');


$('.cheTsav').removeClass('cheTsavMOBI');
$('.savTche').removeClass('savTcheMOBI');

$('.OperationEndedPanel').removeClass('OperationEndedPanelMOBI');

});












 $('.CaptureDeposit').click(function(){
 $('.CaptureDeposit').show();
});
 



});


///////////White & Dark Letters

$('#DarkBlueMOBI, #blue1MOBI, #redMOBI, #navyBlueMOBI, #navyBlue, #red4MOBI, #blue22MOBI, #blue2MOBI, #banresMOBI, #green2MOBI, #lightBlue2MOBI, #yellowMOBI, #DarkBlue, #blue1, #red, #red4, #blue22, #blue2, #banres, #green2, #lightBlue2, #yellow').click(function(){

$('.CoinLettersKPT1, .CurrentCoinCostInUSKPT1').addClass('BlackedLettersKPT1');

});



$('#priBlueMOBI, #lightBlueMOBI, #lightBlue, #red3MOBI, #orangeMOBI, #red2MOBI, #greenMOBI, #priBlue, #red3, #orange, #red2, #green').click(function(){

$('.CoinLettersKPT1, .CurrentCoinCostInUSKPT1').removeClass('BlackedLettersKPT1');

});
///////////White & Dark Letters