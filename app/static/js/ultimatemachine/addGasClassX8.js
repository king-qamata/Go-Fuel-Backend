$(document).ready(function(){
 



screenTypex8 = '';

///////////////////////////////////

$('#ATM1Machinex8').click(function(){

  console.log('buttonsx8 are ' + screenTypex8);

screenTypex8 = 'Machinex8';


$('.BlankTapbarx8').hide();

});




$('#ATM1Mobilex8').click(function(){

screenTypex8 = 'Mobilex8';




console.log('buttonsx8 are ' + screenTypex8);


$('.BlankTapbarx8').hide();
InnerRightypex8 = "CarMobile";

});


// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////


GasBackGphoto = false;



// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////

$('.ColorsMOBIx8 > label, .Colorsx8 > label').click(function(){




// //////////////////////////////////////////

   GasBackGphoto = false;

   if(GasBackGphoto === true && screenTypex8 === 'Mobile2x8'){

     $('.numVMOBIx4').css('border-width', '2px');
     console.log("GasBackGphoto 2px is + = " + GasBackGphoto);
  
   }



   if(GasBackGphoto === false && screenTypex8 === 'Mobile2x8'){

     $('.numVMOBIx4').css('border-width', '4px');
     console.log("GasBackGphoto is 4px + = " + GasBackGphoto);
  
   }

// //////////////////////////////////////////





       $('.ui2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.ui2x8').removeClass('redui2x8 blueui2x8 blue3ui2x8 blue1ui2x8 redui2x8 red2ui2x8');
       $('.ui2x8').removeClass('red3ui2x8 red4ui2x8 blue22ui2x8 blue2ui2x8 orangeui2x8');
       $('.ui2x8').removeClass('navyui2x8 banresui2x8 ponceui2x8 greenui2x8 green2ui2x8');
       $('.ui2x8').removeClass('liBlueui2x8 yellowui2x8 liBlue2ui2x8 MedBlueui2x8 Blackui2x8');
       $('.ui2x8').removeClass('Dribui2x8 Robinui2x8 Robin2ui2x8 Binanceui2x8 Coinbaseui2x8');
       $('.ui2x8').removeClass('BPwhiteui2x8 MOBIwhiteui2x8 TXwhiteui2x8 TXBlackui2x8 SHwhiteui2x8 SHYellowui2x8');
       $('.ui2x8').removeClass('Citgoui2x8 Citgo2ui2x8 Aramcoui2x8 Aramco2ui2x8 Gast4ui2x8 Gas5ui2x8');


      
       $('.BlankLogox8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.BlankLogox8').removeClass('redBlankLogox8 blueBlankLogox8 blue3BlankLogox8 blue1BlankLogox8 redBlankLogox8 red2BlankLogox8');
       $('.BlankLogox8').removeClass('red3BlankLogox8 red4BlankLogox8 blue22BlankLogox8 blue2BlankLogox8 orangeBlankLogox8');
       $('.BlankLogox8').removeClass('navyBlankLogox8 banresBlankLogox8 ponceBlankLogox8 greenBlankLogox8 green2BlankLogox8');
       $('.BlankLogox8').removeClass('liBlueBlankLogox8 yellowBlankLogox8 liBlue2BlankLogox8 MedBlueBlankLogox8 BlackBlankLogox8');
       $('.BlankLogox8').removeClass('DribBlankLogox8 RobinBlankLogox8 Robin2BlankLogox8 BinanceBlankLogox8 CoinbaseBlankLogox8');
       $('.BlankLogox8').removeClass('BPwhiteBlankLogox8 MOBIwhiteBlankLogox8 TXwhiteBlankLogox8 TXBlackBlankLogox8 SHwhiteBlankLogox8 SHYellowBlankLogox8');
       $('.BlankLogox8').removeClass('CitgoBlankLogox8 Citgo2BlankLogox8 AramcoBlankLogox8 Aramco2BlankLogox8 Gast4BlankLogox8 Gas5BlankLogox8');


       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('redlan2x8 bluelan2x8 blue3lan2x8 blue1lan2x8 redlan2x8 red2lan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('red3lan2x8 red4lan2x8 blue22lan2x8 blue2lan2x8 orangelan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('navylan2x8 banreslan2x8 poncelan2x8 greenlan2x8 green2lan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('liBluelan2x8 yellowlan2x8 liBlue2lan2x8 MedBluelan2x8 Blacklan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('Driblan2x8 Robinlan2x8 Robin2lan2x8 Binancelan2x8 Coinbaselan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('BPwhitelan2x8 MOBIwhitelan2x8 TXwhitelan2x8 TXBlacklan2x8 SHwhitelan2x8 SHYellowlan2x8');
       $('.lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8, .Bottomlan2MOBIx8').removeClass('Citgolan2x8 Citgo2lan2x8 Aramcolan2x8 Aramco2lan2x8 Gast4lan2x8 Gas5lan2x8');


       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('redLangBx8 blueLangBx8 blue3LangBx8 blue1LangBx8 redLangBx8 red2LangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('red3LangBx8 red4LangBx8 blue22LangBx8 blue2LangBx8 orangeLangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('navyLangBx8 banresLangBx8 ponceLangBx8 greenLangBx8 green2LangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('liBlueLangBx8 yellowLangBx8 liBlue2LangBx8 MedBlueLangBx8 BlackLangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('DribLangBx8 RobinLangBx8 Robin2LangBx8 BinanceLangBx8 CoinbaseLangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('BPwhiteLangBx8 MOBIwhiteLangBx8 TXwhiteLangBx8 TXBlackLangBx8 SHwhiteLangBx8 SHYellowLangBx8');
       $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').removeClass('CitgoLangBx8 Citgo2LangBx8 AramcoLangBx8 Aramco2LangBx8 Gast4LangBx8 Gas5LangBx8');


       $('.serm2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.serm2x8').removeClass('redserm2x8 blueserm2x8 blue3serm2x8 blue1serm2x8 redserm2x8 red2serm2x8');
       $('.serm2x8').removeClass('red3serm2x8 red4serm2x8 blue22serm2x8 blue2serm2x8 orangeserm2x8');
       $('.serm2x8').removeClass('navyserm2x8 banresserm2x8 ponceserm2x8 greenserm2x8 green2serm2x8');
       $('.serm2x8').removeClass('liBlueserm2x8 yellowserm2x8 liBlue2serm2x8 MedBlueserm2x8 Blackserm2x8');
       $('.serm2x8').removeClass('Dribserm2x8 Robinserm2x8 Robin2serm2x8 Binanceserm2x8 Coinbaseserm2x8');
       $('.serm2x8').removeClass('BPwhiteserm2x8 MOBIwhiteserm2x8 TXwhiteserm2x8 TXBlackserm2x8 SHwhiteserm2x8 SHYellowserm2x8');
       $('.serm2x8').removeClass('Citgoserm2x8 Citgo2serm2x8 Aramcoserm2x8 Aramco2serm2x8 Gast4serm2x8 Gas5serm2x8');



       $('.InnerX8, .fin2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.InnerX8, .fin2x8').removeClass('redInnerx8 blueInnerx8 blue3Innerx8 blue1Innerx8 redInnerx8 red2Innerx8');
       $('.InnerX8, .fin2x8').removeClass('red3Innerx8 red4Innerx8 blue22Innerx8 blue2Innerx8 orangeInnerx8');
       $('.InnerX8, .fin2x8').removeClass('navyInnerx8 banresInnerx8 ponceInnerx8 greenInnerx8 green2Innerx8');
       $('.InnerX8, .fin2x8').removeClass('liBlueInnerx8 yellowInnerx8 liBlue2Innerx8 MedBlueInnerx8 BlackInnerx8');
       $('.InnerX8, .fin2x8').removeClass('DribInnerx8 RobinInnerx8 Robin2Innerx8 BinanceInnerx8 CoinbaseInnerx8');
       $('.InnerX8, .fin2x8').removeClass('BPwhiteInnerx8 MOBIwhiteInnerx8 TXwhiteInnerx8 TXBlackInnerx8 SHwhiteInnerx8 SHYellowInnerx8');
       $('.InnerX8, .fin2x8').removeClass('CitgoInnerx8 Citgo2Innerx8 AramcoInnerx8 Aramco2Innerx8 Gast4Innerx8 Gas5Innerx8');



       $('.GaspriBtnXX').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.GaspriBtnXX').removeClass('redAcm2x8 blueAcm2x8 blue3Acm2x8 blue1Acm2x8 redAcm2x8 red2Acm2x8');
       $('.GaspriBtnXX').removeClass('red3Acm2x8 red4Acm2x8 blue22Acm2x8 blue2Acm2x8 orangeAcm2x8');
       $('.GaspriBtnXX').removeClass('navyAcm2x8 banresAcm2x8 ponceAcm2x8 greenAcm2x8 green2Acm2x8');
       $('.GaspriBtnXX').removeClass('liBlueAcm2x8 yellowAcm2x8 liBlue2Acm2x8 MedBlueAcm2x8 BlackAcm2x8');
       $('.GaspriBtnXX').removeClass('DribAcm2x8 RobinAcm2x8 Robin2Acm2x8 BinanceAcm2x8 CoinbaseAcm2x8');
       $('.GaspriBtnXX').removeClass('BPwhiteAcm2x8 MOBIwhiteAcm2x8 TXwhiteAcm2x8 TXBlackAcm2x8 SHwhiteAcm2x8 SHYellowAcm2x8');
       $('.GaspriBtnXX').removeClass('CitgoAcm2x8 Citgo2Acm2x8 AramcoAcm2x8 Aramco2Acm2x8 Gast4Acm2x8 Gas5Acm2x8');




       $('.NumPadx8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.NumPadx8').removeClass('redNumColorsx8 blueNumColorsx8 blue3NumColorsx8 blue1NumColorsx8 redNumColorsx8 red2NumColorsx8');
       $('.NumPadx8').removeClass('red3NumColorsx8 red4NumColorsx8 blue22NumColorsx8 blue2NumColorsx8 orangeNumColorsx8');
       $('.NumPadx8').removeClass('navyNumColorsx8 banresNumColorsx8 ponceNumColorsx8 greenNumColorsx8 green2NumColorsx8');
       $('.NumPadx8').removeClass('liBlueNumColorsx8 yellowNumColorsx8 yellowNumColorsx8 BlackNumColorsx8');
       $('.NumPadx8').removeClass('DribNumColorsx8 RobinNumColorsx8 Robin2NumColorsx8 BinanceNumColorsx8 CoinbaseNumColorsx8');
       $('.NumPadx8').removeClass('BPwhiteNumColorsx8 MOBIwhiteNumColorsx8 TXwhiteNumColorsx8 TXBlackNumColorsx8 SHwhiteNumColorsx8 SHYellowNumColorsx8');
       $('.NumPadx8').removeClass('CitgoNumColorsx8 Citgo2NumColorsx8 AramcoNumColorsx8 Aramco2NumColorsx8 Gast4NumColorsx8 Gas5NumColorsx8');


       
       $('.qty2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.qty2x8').removeClass('redQty2x8 blueQty2x8 blue3Qty2x8 blue1Qty2x8 redQty2x8 red2Qty2x8');
       $('.qty2x8').removeClass('red3Qty2x8 red4Qty2x8 blue22Qty2x8 blue2Qty2x8 orangeQty2x8');
       $('.qty2x8').removeClass('navyQty2x8 banresQty2x8 ponceQty2x8 greenQty2x8 green2Qty2x8');
       $('.qty2x8').removeClass('liBlueQty2x8 yellowQty2x8 liBlue2Qty2x8 MedBlueQty2x8 BlackQty2x8');
       $('.qty2x8').removeClass('DribQty2x8 RobinQty2x8 Robin2Qty2x8 BinanceQty2x8 CoinbaseQty2x8');
       $('.qty2x8').removeClass('BPwhiteQty2x8 MOBIwhiteQty2x8 TXwhiteQty2x8 TXBlackQty2x8 SHwhiteQty2x8 SHYellowQty2x8');
       $('.qty2x8').removeClass('CitgoQty2x8 Citgo2Qty2x8 AramcoQty2x8 Aramco2Qty2x8 Gast4Qty2x8 Gas5Qty2x8');




       $('.amountx8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.amountx8').removeClass('redAmountx8 blueAmountx8 blue3Amountx8 blue1Amountx8 redAmountx8 red2Amountx8');
       $('.amountx8').removeClass('red3Amountx8 red4Amountx8 blue22Amountx8 blue2Amountx8 orangeAmountx8');
       $('.amountx8').removeClass('navyAmountx8 banresAmountx8 ponceAmountx8 greenAmountx8 green2Amountx8');
       $('.amountx8').removeClass('liBlueAmountx8 yellowAmountx8 liBlue2Amountx8 MedBlueAmountx8 BlackAmountx8');
       $('.amountx8').removeClass('DribAmountx8 RobinAmountx8 Robin2Amountx8 BinanceAmountx8 CoinbaseAmountx8');
       $('.amountx8').removeClass('BPwhiteAmountx8 MOBIwhiteAmountx8 TXwhiteAmountx8 TXBlackAmountx8 SHwhiteAmountx8 SHYellowAmountx8');
       $('.amountx8').removeClass('CitgoAmountx8 Citgo2Amountx8 AramcoAmountx8 Aramco2Amountx8 Gast4Amountx8 Gas5Amountx8');




       $('.qtyvalue2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.qtyvalue2x8').removeClass('redQtyvalue2x8 blueQtyvalue2x8 blue3Qtyvalue2x8 blue1Qtyvalue2x8 redQtyvalue2x8 red2Qtyvalue2x8');
       $('.qtyvalue2x8').removeClass('red3Qtyvalue2x8 red4Qtyvalue2x8 blue22Qtyvalue2x8 blue2Qtyvalue2x8 orangeQtyvalue2x8');
       $('.qtyvalue2x8').removeClass('navyQtyvalue2x8 banresQtyvalue2x8 ponceQtyvalue2x8 greenQtyvalue2x8 green2Qtyvalue2x8');
       $('.qtyvalue2x8').removeClass('liBlueQtyvalue2x8 yellowQtyvalue2x8 liBlue2Qtyvalue2x8 MedBlueQtyvalue2x8 BlackQtyvalue2x8');
       $('.qtyvalue2x8').removeClass('DribQtyvalue2x8 RobinQtyvalue2x8 Robin2Qtyvalue2x8 BinanceQtyvalue2x8 CoinbaseQtyvalue2x8');
       $('.qtyvalue2x8').removeClass('BPwhiteQtyvalue2x8 MOBIwhiteQtyvalue2x8 TXwhiteQtyvalue2x8 TXBlackQtyvalue2x8 SHwhiteQtyvalue2x8 SHYellowQtyvalue2x8');
       $('.qtyvalue2x8').removeClass('CitgoQtyvalue2x8 Citgo2Qtyvalue2x8 AramcoQtyvalue2x8 Aramco2Qtyvalue2x8 Gast4Qtyvalue2x8 Gas5Qtyvalue2x8');



       $('.fin2x8').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.fin2x8').removeClass('redFin2x8 blueFin2x8 blue3Fin2x8 blue1Fin2x8 redFin2x8 red2Fin2x8');
       $('.fin2x8').removeClass('red3Fin2x8 red4Fin2x8 blue22Fin2x8 blue2Fin2x8 orangeFin2x8');
       $('.fin2x8').removeClass('navyFin2x8 banresFin2x8 ponceFin2x8 greenFin2x8 green2Fin2x8');
       $('.fin2x8').removeClass('liBlueFin2x8 yellowFin2x8 liBlue2Fin2x8 MedBlueFin2x8 BlackFin2x8');
       $('.fin2x8').removeClass('DribFin2x8 RobinFin2x8 Robin2Fin2x8 BinanceFin2x8 CoinbaseFin2x8');
       $('.fin2x8').removeClass('BPwhiteFin2x8 MOBIwhiteFin2x8 TXwhiteFin2x8 TXBlackFin2x8 SHwhiteFin2x8 SHYellowFin2x8');
       $('.fin2x8').removeClass('CitgoFin2x8 Citgo2Fin2x8 AramcoFin2x8 Aramco2Fin2x8 Gast4Fin2x8 Gas5Fin2x8');




       $('.finBx8').removeClass('redFinBx8 blueFinBx8 blue3FinBx8 blue1FinBx8 redFinBx8 red2FinBx8');
       $('.finBx8').removeClass('red3FinBx8 red4FinBx8 blue22FinBx8 blue2FinBx8 orangeFinBx8');
       $('.finBx8').removeClass('navyFinBx8 banresFinBx8 ponceFinBx8 greenFinBx8 green2FinBx8');
       $('.finBx8').removeClass('liBlueFinBx8 liBlue2FinBx8 yellowFinBx8 MedBlueFinBx8 BlackFinBx8');
       $('.finBx8').removeClass('DribFinBx8 RobinFinBx8 Robin2FinBx8 BinanceFinBx8 CoinbaseFinBx8');
       $('.finBx8').removeClass('BPwhiteFinBx8 MOBIwhiteFinBx8 TXwhiteFinBx8 TXBlackFinBx8 SHwhiteFinBx8 SHYellowFinBx8');
       $('.finBx8').removeClass('CitgoFinBx8 Citgo2FinBx8 AramcoFinBx8 Aramco2FinBx8 Gast4FinBx8 Gas5FinBx8');




$('#english2x8').addClass('btn-default');





});





























////////////////////////////////////





screenTypex8 = "Machinex8";


 $('.ui2x8').addClass('blueui2x8 ui2x8 uiXX');

 $('.fin2x8').removeClass('RoundFinx8');



$('.ScanPumpOnex8').show();


      
  
  $('.TapBarGas').removeClass('FFTSelectedModelx8');
  $(this).addClass('FFTSelectedModelx8');

  Tapbarx8= 'Regular';

   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');

   $('.Hellox8').hide();
   $('.LanBgroupMOBIx8').show();

   $('.lan2MOBIx8').addClass('lan2MobileTop');
 

  $('.Bottomlan2MOBIx8 > .HelloRambox8, .CCAx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2x8, .fin2MOBIx8').addClass('RoundFinx8');

   $('.servicePanelsMOBIx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5');


$('.fin2x8').removeClass('RoundFinx8');


$('.AllFinModelsGas').show('');


$('.fin2x8').hide();

$('.HoriButtonFin2ax8').show();



// //////////////////////////////////////////////////////////


  $('.GasFinModel, .TapBarGas, .GasModelx8').removeClass('FFTSelectedModelx4');
  $('.GasFinModel1b, .TapBarGas1x8, .GasModel3x8').addClass('FFTSelectedModelx4');




  Tapbarx8= 'Regular';

   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');



   $('.Hellox8').hide();

   $('.LanBgroupMOBIx8').show();
   $('.langBx8').show();

  $('.UserNet2x8').hide();
  $('.UserNetx8').hide();

   $('.lan2MOBIx8').addClass('lan2MobileTop');


  $('.Bottomlan2MOBIx8 > .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2MOBIx8').addClass('RoundFinx8');
   $('.fin2x8').removeClass('Fin2NoRadiusx8');

   $('.servicePanelsMOBIx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5');

   $('.BlankTapbarx8').hide();




   if(screenType2x8 === "Mobile2x8"){
     $('.lan2MOBIx8').show();
     $('.lan2x8, .Bottomlan2MOBIx8').hide();
   }

   if(screenType2x8 === "Machine2x8"){
     $('.lan2x8').show();
     $('.lan2MOBIx8').hide();

   }


// //////////////////////////////////////////////////////////


// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////



 
    $('.ui2x8').addClass('TXBlackui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('TXBlackBlankLogox8');





      // $('.lan2x8').removeClass('redlan2x8 liTXBlacklan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 TXBlack2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('TXBlacklan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('TXBlackLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('TXBlackLangBotherx8');



$('.serm2x8').addClass('TXBlackserm2x8');


      
      $('.InnerX8').addClass('TXBlackInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('TXBlackSm2x8');



      $('.GaspriBtnXX').addClass('btn-default TXBlackAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('TXBlackAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('TXBlackSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('TXBlackSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('TXBlackSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('TXBlackTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('TXBlacktofBx8x8');

        
        $('.qty2x8').addClass('TXBlackQty2x8');



             $('.qtyvalue2x8').addClass('TXBlackQtyvalue2x8');
             $('.amountx8').addClass('TXBlackAmountx8');
        
            




       $('.NumPadx8').addClass('TXBlackNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('TXBlackFin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       










// //////////////////////////////////////////////////////////////////////

$('.jumbo2').click(function(){

// $('.uiXX, .ui2x8, .ui22').addClass('UiPat');
// $('.langBx4, .LanBxx, .langBx8').addClass('LangBPat');
// $('.lan2MOBIx4, .lan2x4, .lan22, .lan2x8, .lan2MOBIx8, .Bottomlan2MOBIx8').addClass('Lan2Pat');
// $('.InnerX, .itmXX, .InnerX8').addClass('InnerPat');
// $('.priBtnXX, .itmVxx, .GaspriBtnXX').addClass('itmPat');
// $('.HelloPhotox4, .HelloPhotox8, .HelloPhoto').addClass('PhotoPat');
// $('.QtyValueXX, .MenuGasx8, .HelloNameGasx8, .HelloNamex4, .langBx4, .LanBxx, .langBx8, .Menux4, .Menux8, .AccValuesx4, .AccPerformancex4, .itm22Cost, .SpecFontsCost, .IhaveThisMuchx8, .Galx8, .total2, .finB22span').addClass('NamePat');
// $('.LanBMOBIxx, .langBMOBIx4, .langBMOBIx8, .IhaveThisMuchx8, .Galx8, .buy2 > span, .RegSpecFonts, .TransferIhaveThisMuchx4, .cheTsav2x5, .MainTransferx5').css('color', 'black');
// $('.feesx4, .feesx8').addClass('FeesPat');
// $('.qty2x4, .py2, .qty2x8').addClass('QtyPat');
// $('.PayButMOBIxx, .qty22, .NumPadx8, .NumPadx4, .PayButxx, .finB22, .Sub22XX, .Add22XX, .BillDenomiImputLabelx4, .AccMiniBsx4, .MainTransSelectFromx4, .MainTransSelectTox4, .Transferx4, .Networthx6').addClass('numVPat');
// $('.fin2x4, .finX, .fin2x8').addClass('fin2Pat');





// // if (screenType2x8 === "Machine2x8"){

// // $('.NumPadx8').css('width', '55px');
// // }






// if(screenType2x4 === "Mobile2x4"){
//    $('.numVMOBIx4, .numVMOBIx8').css('width', '60.58px');
//  }






// if(screenType2x8 === "Mobile2x8"){
//    $('.NumPadx8, .numVMOBIx4, .numVMOBIx8').css('width', '60.58px');

//  }





});





// //////////////////////////////////////////////////////////////////////




// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////






/*  Pri Blue color*/



   $('#priBluex8, #priBlueMOBIx8').click(function(){
    
    $('.ui2x8').addClass('blueui2x8 ui2x8 uiXX');


      $('.BlankLogox8').addClass('priBlueBlankLogox8');

      $('.lan2x8, .lan2MOBIx8').addClass('bluelan2x8');


         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('blueLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('blueLangBotherx8');



$('.serm2x8').addClass('blueserm2x8');

      
      $('.InnerX8').addClass('blueInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('blueSm2x8');



      $('.GaspriBtnXX').addClass('btn-default blueAcm2x8');

      $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('blueAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('blueSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('blueSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('blueSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('blueTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('bluetofBx8x8');

        
        $('.qty2x8').addClass('blueQty2x8');


             $('.qtyvalue2x8').addClass('blueQtyvalue2x8');
             $('.amountx8').addClass('blueAmountx8');
        
            


       $('.NumPadx8').addClass('blueNumColorsx8 btn-primary');



       
       $('.fin2x8').addClass('blueFin2x8');




if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


 





});

















                                                /* Blue Color */



   $('#blue1x8, #blue1MOBIx8').click(function(){
    
    $('.ui2x8').addClass('blue1ui2x8 ui2x8 uiXX');


    $('.BlankLogox8').addClass('blue1BlankLogox8');

      $('.lan2x8, .lan2MOBIx8').addClass('blue1lan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('blue1LangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('blue1LangBotherx8');



$('.serm2x8').addClass('blue1serm2x8');


      
      $('.InnerX8').addClass('blue1Innerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('blue1Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default blue1Acm2x8');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('blue1Acm2x8');
      $('.IhaveThisMuchx8, .Galx8').removeClass('RedMuchandGalx8'); 

        $('.IhaveThisMuchx8, .Galx8').css('color', '#cf0f00'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('blue1Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('blue1SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('blue1SerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('blue1Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('blue1tofBx8x8');

        
        $('.qty2x8').addClass('blue1Qty2x8');

             $('.qtyvalue2x8').addClass('blue1Qtyvalue2x8');
             $('.amountx8').addClass('blue1Amountx8');




       $('.NumPadx8').addClass('blue1NumColorsx8 btn-primary');

           



       
       $('.fin2x8').addClass('blue1Fin2x8')


            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 



$('#english2x8, #spanish2, #chinesse2', '#russian2x8', '#german2x8', '#hindi2', '#french2', '#arabic2').click(function(){
$('#qtyvalue2x8').attr('class', 'blue1Qtyvalue2x8');


});


});







/*  Dark Blue color*/



   $('#DarkBluex8, #DarkBlueMOBIx8').click(function(){
    
    $('.ui2x8').addClass('blueui2x8 ui2x8 uiXX');


      // $('.lan2x8').removeClass('redlan2x8 liBluelan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 blue2lan2x8');

          $('.BlankLogox8').addClass('DarkblueBlankLogox8');

      $('.lan2x8, .lan2MOBIx8').addClass('blue3lan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('blueLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('blueLangBotherx8');



$('.serm2x8').addClass('blue3serm2x8');


      
      $('.InnerX8').addClass('blue3Innerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('blue3Sm2x8');



      $('.GaspriBtnXX').addClass('btn-danger blue3Acm2x8');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('blue3Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', '#d21001;');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('blueSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('blueSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('blueSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('blueTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('bluetofBx8x8');

        
        $('.qty2x8').addClass('blue3Qty2x8');



             $('.qtyvalue2x8').addClass('blueQtyvalue2x8');
             $('.amountx8').addClass('blueAmountx8');
        
            




       $('.NumPadx8').addClass('blue3NumColorsx8 btn-danger');

         

       
       $('.fin2x8').addClass('blue3Fin2x8');


       if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


            


});









// //////////////////////////////////////////////////////
$('#redx8, #redMOBIx8').click(function(){
   
   $('.ui2x8').addClass('redui2x8 ui2x8 uiXX');


    $('.BlankLogox8').addClass('redBlankLogox8');

        $('.lan2x8, .lan2MOBIx8').addClass('redlan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('redLangBx8');
            $('#english2x8').addClass('active');


            
            $('.langBotherx8').addClass('redLangBotherx8');



$('.serm2x8').addClass('redserm2x8');

      
      $('.InnerX8').addClass('redInnerx8');



      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('redSm2x8');



      $('.GaspriBtnXX').addClass('btn-default redAcm2x8');

      $('.IhaveThisMuchx8, .Galx8').css('color', 'crimson');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('redAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').addClass('RedMuchandGalx8'); 






        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('redSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-danger btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('redSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-danger dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('redSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('redTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-danger btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('redtofBx8x8');

        
        $('.qty2x8').addClass('redQty2x8');


             $('.qtyvalue2x8').addClass('redQtyvalue2x8');
             $('.amountx8').addClass('redAmountx8');

           


       $('.NumPadx8').addClass('redNumColorsx8 btn-danger');

         

        
        $('.fin2x8').addClass('redFin2x8');

            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 



   $('#english2x8').click(function(){

      $('#qtyvalue2x8').attr('class', 'blue1Qtyvalue2x8');
 
   });





  


});


//////////   Red 2 ui2x8 uiXX ////////////////////////////////

$('#red2x8, #red2MOBIx8').click(function(){

    
    $('.ui2x8').addClass('red22ui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('red2BlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('red2lan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('red2LangBx8');
            $('#english2x8').addClass('active');


            
            $('.langBotherx8').addClass('red2LangBotherx8');

            
            
            $('.serm2x8').addClass('red2serm2x8');


      
      $('.InnerX8').addClass('red2Innerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('red2Sm2x8');




      $('.GaspriBtnXX').addClass('btn-default red2Acm2x8');

       $('.IhaveThisMuchx8, .Galx8').css('color', 'crimson');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('red2Acm2x8');

         $('.SerBx8').attr('class', 'btn btn-danger btn-lg SerBx8');
         $('.SerBx8').addClass('red2Acm2x8');
            $('.tofBx8').attr('class', 'btn btn-danger btn-lg tofBx8');
            $('.tofBx8').addClass('red2Acm2x8');


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('red2Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-danger btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('red2SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-danger dropdown-toggle btn-lg SerBx8other');
            $('.SerBx8otherx8').addClass('red2SerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('red2Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-danger btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('red2tofBx8x8');



         $('.SerBx8').attr('class', 'btn btn-danger btn-lg SerBx8');
         $('.SerBx8').addClass('red2Acm2x8');
         $('.tofBx8').attr('class', 'btn btn-danger btn-lg tofBx8');
         $('.tofBx8').addClass('red2Acm2x8');
         $('.SerBx8other').attr('class', 'btn btn-danger dropdown-toggle btn-lg SerBx8other');
         $('.SerBx8other').addClass('red2Acm2x8'); 



        
        $('.qty2x8').addClass('red2Qty2x8');

             $('.qtyvalue2x8').addClass('red2Qtyvalue2x8');
             $('.amountx8').addClass('red2Amountx8');

           



       $('.NumPadx8').addClass('red2NumColorsx8 btn-danger');

         

        
        $('.fin2x8').addClass('red2Fin2x8');

            
if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


 


});







//////////   Red 3 ui2x8 uiXX ////////////////////////////////

$('#red3x8, #red3MOBIx8').click(function(){

      $('.BlankLogox8').addClass('red3BlankLogox8');

    
    $('.ui2x8').addClass('red22ui2x8 ui2x8 uiXX');


        $('.lan2x8, .lan2MOBIx8').addClass('red2lan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('red3LangBx8');
            $('#english2x8').addClass('active');


            
            $('.langBotherx8').addClass('red3LangBotherx8');

            
            
            $('.serm2x8').addClass('red3serm2x8');

      
      $('.InnerX8').addClass('red3Innerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('red3Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default red3Acm2x8');

       $('.IhaveThisMuchx8, .Galx8').css('color', 'crimson');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('red3Acm2x8');
      $('.Fuelx8').addClass('redAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').addClass('RedMuchandGalx8'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('red2Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-danger btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('red2SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-danger dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('red2SerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('red2Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-danger btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('red2tofBx8x8');

        
        $('.qty2x8').addClass('red2Qty2x8');

             $('.qtyvalue2x8').addClass('red3Qtyvalue2x8');
             $('.amountx8').addClass('red3Amountx8');

           



       $('.NumPadx8').addClass('red3NumColorsx8 btn-danger');

         

        
        $('.fin2x8').addClass('red3Fin2x8');

            
if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


 

});

////////////////////////////////


//////////   Red 4 ui2x8 uiXX ////////////////////////////////

$('#red4x8, #red4MOBIx8').click(function(){

    
    $('.ui2x8').addClass('red22ui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('red4BlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('red2lan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('red4LangBx8');
            $('#english2x8').addClass('active');


            
            $('.langBotherx8').addClass('red4LangBotherx8');

            
            
            $('.serm2x8').addClass('red4serm2x8');

      
      $('.InnerX8').addClass('red4Innerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('red4Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default red4Acm2x8');

       $('.IhaveThisMuchx8, .Galx8').css('color', 'crimson');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('red4Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').addClass('RedMuchandGalx8'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('red2Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-danger btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('red2SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-danger dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('red2SerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('red2Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-danger btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('red2tofBx8x8');

        
        $('.qty2x8').addClass('red2Qty2x8');

             $('.qtyvalue2x8').addClass('red4Qtyvalue2x8');
             $('.amountx8').addClass('red4Amountx8');

           



       $('.NumPadx8').addClass('red4NumColorsx8 btn-danger');

         

        
        $('.fin2x8').addClass('red4Fin2x8');


if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 

});










//////////////////////          Light Blue color




$('#lightBlue2x8, #lightBlue2MOBIx8').click(function(){
    
    $('.ui2x8').addClass('MedBlueui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('MedBlueBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('MedBluelan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('MedBlueLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('MedBlueLangBotherx8');



$('.serm2x8').addClass('MedBlueserm2x8');

      
      $('.InnerX8').addClass('MedBlueInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('MedBlueSm2x8');



      $('.GaspriBtnXX').addClass('btn-default MedBlueAcm2x8');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('MedBlueAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('MedBlueSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('MedBlueSerBx8x8');


            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('MedBlueSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('MedBlueTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('MedBluetofBx8x8');

        
        $('.qty2x8').addClass('MedBlueQty2x8');

             $('.qtyvalue2x8').addClass('MedBlueQtyvalue2x8');
             $('.amountx8').addClass('MedBlueAmountx8');

           


       $('.NumPadx8').addClass('blueNumColorsx8 btn-primary');  

         


        
        $('.fin2x8').addClass('MedBlueFin2x8');

            


 if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}









});







//////////////////////          White Blue color




$('#lightBluex8, #lightBlueMOBIx8').click(function(){
    
    $('.ui2x8').addClass('liBlueui2x8 ui2x8 uiXX');


        $('.BlankLogox8').addClass('lightBlueBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('liBluelan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('liBlueLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('liBlueLangBotherx8');



$('.serm2x8').addClass('liBlueserm2x8');


      
      $('.InnerX8').addClass('liBlueInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('liBlue2Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default liBlue2Acm2x8');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('liBlue2Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('liBlueSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('liBlueSerBx8x8');


            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('liBlueSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('liBlueTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('liBluetofBx8x8');

        
        $('.qty2x8').addClass('liBlueQty2x8');

             $('.qtyvalue2x8').addClass('liBlueQtyvalue2x8');
             $('.amountx8').addClass('liBlueAmountx8');

           


       $('.NumPadx8').addClass('liBlueNumColorsx8 btn-primary');

         


        
        $('.fin2x8').addClass('liBlue2Fin2x8');

            


 if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}








});








//////////////////////          Navy color




$('#navyBluex8, #navyBlueMOBIx8').click(function(){
   
   $('.ui2x8').addClass('navyui2x8 ui2x8 uiXX');

       $('.BlankLogox8').addClass('navyBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('navylan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('navyLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('navyLangBotherx8');



$('.serm2x8').addClass('navyserm2x8');


      
      $('.InnerX8').addClass('navyInnerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('navySm2x8');



      $('.GaspriBtnXX').addClass('btn-default navyAcm2x8');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('navyAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('navySer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('navySerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('navySerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('navyTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('navytofBx8x8');

        
        $('.qty2x8').addClass('navyQty2x8');

             $('.qtyvalue2x8').addClass('navyQtyvalue2x8');
             $('.amountx8').addClass('navyAmountx8');

           


       $('.NumPadx8').addClass('navyNumColorsx8 btn-primary');

         

        
        $('.fin2x8').addClass('navyFin2x8')

            


 if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


  




});






//////////////////////          Navy color




$('#navy2Bluex8, #navy2BlueMOBIx8').click(function(){
   
   $('.ui2x8').addClass('navy2ui2x8 ui2x8 uiXX');

       $('.BlankLogox8').addClass('navyBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('navylan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('navyLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('navyLangBotherx8');





$('.serm2x8').addClass('navyserm2x8');


      
      $('.InnerX8').addClass('navyInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('navySm2x8');



      $('.GaspriBtnXX').addClass('btn-default navyAcm2x8');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('navyAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 




        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('navySer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('navySerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('navySerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('navyTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('navytofBx8x8');

        
        $('.qty2x8').addClass('navyQty2x8');


             $('.qtyvalue2x8').addClass('navyQtyvalue2x8');
             $('.amountx8').addClass('navyAmountx8');

           



       $('.NumPadx8').addClass('navyNumColorsx8 btn-primary');

         


        
        $('.fin2x8').addClass('navyFin2x8')

            


 

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

  




});







//////////////////////          green Color




$('#greenx8, #greenMOBIx8').click(function(){

    
    $('.ui2x8').addClass('greenui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('greenBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('greenlan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('greenLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('greenLangBotherx8');



$('.serm2x8').addClass('greenserm2x8');


      
      $('.InnerX8').addClass('greenInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('greenSm2x8');



      $('.GaspriBtnXX').addClass('btn-default greenAcm2x8');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('greenAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('greenSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('greenSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('greenSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('greenTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('greentofBx8x8');

        
        $('.qty2x8').addClass('greenQty2x8');

             $('.qtyvalue2x8').addClass('greenQtyvalue2x8');
             $('.amountx8').addClass('greenAmountx8');

           



       $('.NumPadx8').addClass('greenNumColorsx8 btn-success');

         


        
        $('.fin2x8').addClass('greenFin2x8')

            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 



});











//////////////////////          light green Color




$('#green2x8, #green2MOBIx8').click(function(){

    
    $('.ui2x8').addClass('greenui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('green2BlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('greenlan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('greenLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('greenLangBotherx8');



$('.serm2x8').addClass('green2serm2x8');


      
      $('.InnerX8').addClass('green2Innerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('green2Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default green2Acm2x8');

      $('.IhaveThisMuchx8, .Galx8').css('color', 'rgb(18, 56, 21)');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('green2Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('greenSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('greenSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('greenSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('greenTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('greentofBx8x8');

        
        $('.qty2x8').addClass('greenQty2x8');

             $('.qtyvalue2x8').addClass('greenQtyvalue2x8');
             $('.amountx8').addClass('greenAmountx8');

           



       $('.NumPadx8').addClass('greenNumColorsx8 btn-success');

         

        
        $('.fin2x8').addClass('green2Fin2x8')

            
if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


 




});











//////////////////////          Orange Color




$('#orangex8, #orangeMOBIx8').click(function(){

    
    $('.ui2x8').addClass('orangeui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('orangeBlankLogox8');


         $('.lan2x8, .lan2MOBIx8').addClass('orangelan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('orangeLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('orangeLangBotherx8');




$('.serm2x8').addClass('orangeserm2x8');


      
      $('.InnerX8').addClass('orangeInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('orangeSm2x8');



      $('.GaspriBtnXX').addClass('btn-default orangeAcm2x8');

      $('.IhaveThisMuchx8, .Galx8').css('color', '#d21001');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('orangeAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('orangeSer2x8');

            $('.SerBx8').attr('class', 'btn btn-default btn-lg SerBx8');
            $('.SerBx8').addClass('orangeSm2x8');

            $('.SerBx8other').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8other');
            $('.SerBx8other').addClass('orangeSm2x8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('orangeTof2x8');

            $('.tofBx8').attr('class', 'btn btn-default btn-lg tofBx8');
            $('.tofBx8').addClass('orangeSm2x8');

        
        $('.qty2x8').addClass('orangeQty2x8');

             $('.qtyvalue2x8').addClass('orangeQtyvalue2x8');
             $('.amountx8').addClass('orangeAmountx8');

           



       $('.NumPadx8').addClass('orangeNumColorsx8 btn-warning');

         


        
        $('.fin2x8').addClass('orangeFin2x8')

            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 


  


});






//////////////////////          BanResColor




$('#banresx8, #banresMOBIx8').click(function(){

    
    $('.ui2x8').addClass('banresui2x8 ui2x8 uiXX');


        $('.BlankLogox8').addClass('banresBlankLogox8');


         $('.lan2x8, .lan2MOBIx8').addClass('banreslan2x8');


            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('banresLangBx8');
            $('#english2x8').addClass('active');




$('.serm2x8').addClass('banresserm2x8');


      
      $('.InnerX8').addClass('banresInnerx8');



      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('banresSm2x8');



      $('.GaspriBtnXX').addClass('btn-default banresAcm2x8');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('banresAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('banresSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-success btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('banresSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-success dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('banresSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('banresTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-success btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('banrestofBx8x8');

        
        $('.qty2x8').addClass('banresQty2x8');

             $('.qtyvalue2x8').addClass('banresQtyvalue2x8');
             $('.amountx8').addClass('banresAmountx8');

           


       $('.NumPadx8').addClass('banresNumColorsx8 btn-primary');

         

        
        $('.fin2x8').addClass('banresFin2x8')

            

 if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}




  


});


/////////////////////////Ponce/////////////////////////


$('#poncex8, #ponceMOBIx8').click(function(){

    
    $('.ui2x8').addClass('ponceui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('ponceBlankLogox8');


         $('.lan2x8, .lan2MOBIx8').addClass('poncelan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('ponceLangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('ponceLangBotherx8');




$('.serm2x8').addClass('ponceserm2x8');

      
      $('.InnerX8').addClass('ponceInnerx8');

      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('ponceSm2x8');



      $('.GaspriBtnXX').addClass('btn-default ponceAcm2x8');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('ponceAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('ponceSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('ponceSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-success dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('ponceSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('ponceTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('poncetofBx8x8');

        
        $('.qty2x8').addClass('ponceQty2x8');

             $('.qtyvalue2x8').addClass('ponceQtyvalue2x8');
             $('.amountx8').addClass('ponceAmountx8');

           



       $('.NumPadx8').addClass('ponceNumColorsx8 btn-default');

         

        
        $('.fin2x8').addClass('ponceFin2x8')

            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 


  


});









//////////////////////          Blue 2 Color









$('#blue2x8, #blue2MOBIx8').click(function(){

    
    $('.ui2x8').addClass('blue2ui2x8 ui2x8 uiXX');


        $('.BlankLogox8').addClass('blue2BlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('blue2lan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('blue2LangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('blue2LangBotherx8');



$('.serm2x8').addClass('blue2serm2x8');

      
      $('.InnerX8').addClass('blue2Innerx8');


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('blue2Ser2x8');

            $('.SerBx8').attr('class', 'btn btn-default btn-lg SerBx8');
            $('.SerBx8').addClass('blue2Acm2x8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('blue2Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default blue2Acm2x8');


      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('blue2Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 


            $('.SerBx8other').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8other');
            $('.SerBx8other').addClass('blue2Acm2x8');



        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('blue2Tof2x8');

            $('.tofBx8').attr('class', 'btn btn-default btn-lg tofBx8');
            $('.tofBx8').addClass('blue2Acm2x8');

        
        $('.qty2x8').addClass('blue2Qty2x8');

             $('.qtyvalue2x8').addClass('blue2Qtyvalue2x8');
             $('.amountx8').addClass('blue2Amountx8');

           


       $('.NumPadx8').addClass('blue2NumColorsx8 btn-primary');

         


        
        $('.fin2x8').addClass('blue2Fin2x8');


            
if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}


 



});





///////////////////Citi white///////////////////////////////////////////
               
$('#blue22x8, #blue22MOBIx8').click(function(){

    
    $('.ui2x8').addClass('blue22ui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('blue22BlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('blue22lan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('blue22LangBx8');
            $('#english2x8').addClass('active');

            
            $('.langBotherx8').addClass('blue22LangBotherx8');



$('.serm2x8').addClass('blue22serm2x8');


      
      $('.InnerX8').addClass('blue22Innerx8');


        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('blue22Ser2x8');

            $('.SerBx8').attr('class', 'btn btn-default btn-lg SerBx8');
            $('.SerBx8').addClass('blue22Acm2x8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('blue22Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default blue22Acm2x8');

       $('.IhaveThisMuchx8, .Galx8').css('color', 'rgb(239, 239, 239)');

      $('.Fuelx8').removeClass('blueAcm2x8 blueAcm2x8 blue1Acm2x8 blue3Acm2x8 redAcm2x8 red2Acm2x8 red3Acm2x8 red4Acm2x8 MedBlueAcm2x8');
      $('.Fuelx8').removeClass('liBlue2Acm2x8 navyAcm2x8 navyAcm2x8 greenAcm2x8 green2Acm2x8');
      $('.Fuelx8').removeClass('blue22Acm2x8 yellowAcm2x8 orangeAcm2x8 banresAcm2x8 ponceAcm2x8 blue2Acm2x8');
       
      $('.Fuelx8').addClass('blue22Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 


            $('.SerBx8other').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8other');
            $('.SerBx8other').addClass('blue22Acm2x8');



        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('blue22Tof2x8');

            $('.tofBx8').attr('class', 'btn btn-default btn-lg tofBx8');
            $('.tofBx8').addClass('blue22Acm2x8');

        
        $('.qty2x8').addClass('blue22Qty2x8');

             $('.qtyvalue2x8').addClass('blue22Qtyvalue2x8');
             $('.amountx8').addClass('blue22Amountx8');

           

       $('.NumPadx8').addClass('blue22NumColorsx8 btn-primary');

         


        
        $('.fin2x8').addClass('blue22Fin2x8')

            

if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}

 



  


});





/////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////




$('#yellowx8, #yellowMOBIx8').click(function(){

    
    $('.ui2x8').addClass('yellowui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('yellowBlankLogox8');


        $('.lan2x8, .lan2MOBIx8').addClass('yellowlan2x8');

            
            $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('yellowLangBx8');
            $('#english2x8').addClass('active');


            
            $('.langBotherx8').addClass('yellowLangBotherx8');



$('.serm2x8').addClass('yellowserm2x8');

      
      $('.InnerX8').addClass('yellowInnerx8');


$('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
$('.sm2x8').addClass('yellowSm2x8');



$('.GaspriBtnXX').addClass('btn-default yellowAcm2x8 ');



       
      $('.Fuelx8').addClass('yellowAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('yellowSer2x8');
        $('.ser2x8Other').addClass('dropdown-toggle');

            $('.SerBx8x8').attr('class', 'btn btn-warning btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('yellowSerBx8x8');




        $('.SerBx8otherx8').attr('class', 'btn btn-warning dropdown-toggle btn-lg SerBx8otherx8');
        $('.SerBx8otherx8').addClass('yellowSerBx8otherx8');

        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('yellowTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-warning btn-lg checking2 tofBx8x8');
            $('.tofBx8x8').addClass('yellowtofBx8x8');

        
        $('.qty2x8').addClass('yellowQty2x8');

             $('.qtyvalue2x8').addClass('yellowQtyvalue2x8');
             $('.amountx8').addClass('yellowAmountx8');

           
    

       $('.NumPadx8').addClass('yellowNumColorsx8 btn-warning');

         
        
        $('.fin2x8').addClass('yellowFin2x8')



        if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
  

});






   
///////////////////// BPwhite ////////////////////////////////////////////
///////////////////// BPwhite ////////////////////////////////////////////



   $('#BPwhitex8, #BPwhiteMOBIx8').click(function(){
    
    $('.ui2x8').addClass('BPwhiteui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('BPwhiteBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liBPwhitelan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 BPwhite2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('BPwhitelan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('BPwhiteLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('BPwhiteLangBotherx8');



$('.serm2x8').addClass('BPwhiteserm2x8');


      
      $('.InnerX8').addClass('BPwhiteInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('BPwhiteSm2x8');



      $('.GaspriBtnXX').addClass('btn-default BPwhiteAcm2x8 btn-default');

 $('.IhaveThisMuchx8, .Galx8').css('color', 'white'); 
       
      $('.Fuelx8').addClass('BPwhiteAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

    



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('BPwhiteSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('BPwhiteSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('BPwhiteSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('BPwhiteTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('BPwhitetofBx8x8');

        
        $('.qty2x8').addClass('BPwhiteQty2x8');



             $('.qtyvalue2x8').addClass('BPwhiteQtyvalue2x8');
             $('.amountx8').addClass('BPwhiteAmountx8');
        
            




       $('.NumPadx8').addClass('BPwhiteNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('BPwhiteFin2x8')



     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       


});



///////////////////// BPwhite ////////////////////////////////////////////
///////////////////// BPwhite ////////////////////////////////////////////


   
///////////////////// MOBIwhite ////////////////////////////////////////////
///////////////////// MOBIwhite ////////////////////////////////////////////

   $('#MOBIwhitex8, #MOBIwhiteMOBIx8').click(function(){
    
    $('.ui2x8').addClass('MOBIwhiteui2x8 ui2x8 uiXX');



      // $('.lan2x8').removeClass('redlan2x8 liMOBIwhitelan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 MOBIwhite2lan2x8');

      $('.BlankLogox8').addClass('MOBIwhiteBlankLogox8');

      $('.lan2x8, .lan2MOBIx8').addClass('MOBIwhitelan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('MOBIwhiteLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('MOBIwhiteLangBotherx8');



$('.serm2x8').addClass('MOBIwhiteserm2x8');


      
      $('.InnerX8').addClass('MOBIwhiteInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('MOBIwhiteSm2x8');



      $('.GaspriBtnXX').addClass('btn-default MOBIwhiteAcm2x8 btn-danger');


       
      $('.Fuelx8').addClass('MOBIwhiteAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('MOBIwhiteSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('MOBIwhiteSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('MOBIwhiteSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('MOBIwhiteTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('MOBIwhitetofBx8x8');

        
        $('.qty2x8').addClass('MOBIwhiteQty2x8');



             $('.qtyvalue2x8').addClass('MOBIwhiteQtyvalue2x8');
             $('.amountx8').addClass('MOBIwhiteAmountx8');
        
            




       $('.NumPadx8').addClass('MOBIwhiteNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('MOBIwhiteFin2x8')



       if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
     


});



///////////////////// MOBIwhite ////////////////////////////////////////////
///////////////////// MOBIwhite ////////////////////////////////////////////



   
///////////////////// SHwhite ////////////////////////////////////////////
///////////////////// SHwhite ////////////////////////////////////////////

   $('#SHwhitex8, #SHwhiteMOBIx8').click(function(){
    
    $('.ui2x8').addClass('SHwhiteui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('SHwhiteBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liSHwhitelan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 SHwhite2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('SHwhitelan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('SHwhiteLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('SHwhiteLangBotherx8');



$('.serm2x8').addClass('SHwhiteserm2x8');


      
      $('.InnerX8').addClass('SHwhiteInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('SHwhiteSm2x8');



      $('.GaspriBtnXX').addClass('btn-default SHwhiteAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('SHwhiteAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'white');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('SHwhiteSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('SHwhiteSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('SHwhiteSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('SHwhiteTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('SHwhitetofBx8x8');

        
        $('.qty2x8').addClass('SHwhiteQty2x8');



             $('.qtyvalue2x8').addClass('SHwhiteQtyvalue2x8');
             $('.amountx8').addClass('SHwhiteAmountx8');
        
            




       $('.NumPadx8').addClass('SHwhiteNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('SHwhiteFin2x8')



     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       


});



///////////////////// SHwhite ////////////////////////////////////////////
///////////////////// SHwhite ////////////////////////////////////////////




   
///////////////////// SHYellow ////////////////////////////////////////////
///////////////////// SHYellow ////////////////////////////////////////////

   $('#SHYellowx8, #SHYellowMOBIx8').click(function(){
    
    $('.ui2x8').addClass('SHYellowui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('SHYellowBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liSHYellowlan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 SHYellow2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('SHYellowlan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('SHYellowLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('SHYellowLangBotherx8');



$('.serm2x8').addClass('SHYellowserm2x8');


      
      $('.InnerX8').addClass('SHYellowInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('SHYellowSm2x8');



      $('.GaspriBtnXX').addClass('btn-default SHYellowAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('SHYellowAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'white');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('SHYellowSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('SHYellowSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('SHYellowSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('SHYellowTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('SHYellowtofBx8x8');

        
        $('.qty2x8').addClass('SHYellowQty2x8');



             $('.qtyvalue2x8').addClass('SHYellowQtyvalue2x8');
             $('.amountx8').addClass('SHYellowAmountx8');
        
            




       $('.NumPadx8').addClass('SHYellowNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('SHYellowFin2x8')



     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       


});



///////////////////// SHYellow ////////////////////////////////////////////
///////////////////// SHYellow ////////////////////////////////////////////


   
///////////////////// TXwhite ////////////////////////////////////////////
///////////////////// TXwhite ////////////////////////////////////////////

   $('#TXwhitex8, #TXwhiteMOBIx8').click(function(){
    
    $('.ui2x8').addClass('TXwhiteui2x8 ui2x8 uiXX');



      // $('.lan2x8').removeClass('redlan2x8 liTXwhitelan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 TXwhite2lan2x8');

          $('.BlankLogox8').addClass('TXwhiteBlankLogox8');

      $('.lan2x8, .lan2MOBIx8').addClass('TXwhitelan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('TXwhiteLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('TXwhiteLangBotherx8');



$('.serm2x8').addClass('TXwhiteserm2x8');


      
      $('.InnerX8').addClass('TXwhiteInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('TXwhiteSm2x8');



      $('.GaspriBtnXX').addClass('btn-default TXwhiteAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('TXwhiteAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('TXwhiteSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('TXwhiteSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('TXwhiteSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('TXwhiteTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('TXwhitetofBx8x8');

        
        $('.qty2x8').addClass('TXwhiteQty2x8');



             $('.qtyvalue2x8').addClass('TXwhiteQtyvalue2x8');
             $('.amountx8').addClass('TXwhiteAmountx8');
        
            




       $('.NumPadx8').addClass('TXwhiteNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('TXwhiteFin2x8')



     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       


});



///////////////////// TXwhite ////////////////////////////////////////////
///////////////////// TXwhite ////////////////////////////////////////////


   
///////////////////// TXBlack ////////////////////////////////////////////
///////////////////// TXBlack ////////////////////////////////////////////

   $('#TXBlackx8, #TXBlackMOBIx8').click(function(){
    
    $('.ui2x8').addClass('TXBlackui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('TXBlackBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liTXBlacklan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 TXBlack2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('TXBlacklan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('TXBlackLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('TXBlackLangBotherx8');



$('.serm2x8').addClass('TXBlackserm2x8');


      
      $('.InnerX8').addClass('TXBlackInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('TXBlackSm2x8');



      $('.GaspriBtnXX').addClass('btn-default TXBlackAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('TXBlackAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('TXBlackSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('TXBlackSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('TXBlackSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('TXBlackTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('TXBlacktofBx8x8');

        
        $('.qty2x8').addClass('TXBlackQty2x8');



             $('.qtyvalue2x8').addClass('TXBlackQtyvalue2x8');
             $('.amountx8').addClass('TXBlackAmountx8');
        
            




       $('.NumPadx8').addClass('TXBlackNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('TXBlackFin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       



});



///////////////////// TXBlack ////////////////////////////////////////////
///////////////////// TXBlack ////////////////////////////////////////////





   
///////////////////// Citgo ////////////////////////////////////////////
///////////////////// Citgo ////////////////////////////////////////////

   $('#Citgox8, #CitgoMOBIx8').click(function(){
    
    $('.ui2x8').addClass('Citgoui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('CitgoBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liCitgolan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 Citgo2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('Citgolan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('CitgoLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('CitgoLangBotherx8');



$('.serm2x8').addClass('Citgoserm2x8');


      
      $('.InnerX8').addClass('CitgoInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('CitgoSm2x8');



      $('.GaspriBtnXX').addClass('btn-default CitgoAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('CitgoAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('CitgoSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('CitgoSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('CitgoSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('CitgoTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('CitgotofBx8x8');

        
        $('.qty2x8').addClass('CitgoQty2x8');



             $('.qtyvalue2x8').addClass('CitgoQtyvalue2x8');
             $('.amountx8').addClass('CitgoAmountx8');
        
            




       $('.NumPadx8').addClass('CitgoNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('CitgoFin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       



});



///////////////////// Citgo ////////////////////////////////////////////
///////////////////// Citgo ////////////////////////////////////////////







   
///////////////////// Citgo2 ////////////////////////////////////////////
///////////////////// Citgo2 ////////////////////////////////////////////

   $('#Citgo2x8, #Citgo2MOBIx8').click(function(){
    
    $('.ui2x8').addClass('Citgo2ui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('Citgo2BlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liCitgo2lan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 Citgo22lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('Citgo2lan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('Citgo2LangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('Citgo2LangBotherx8');



$('.serm2x8').addClass('Citgo2serm2x8');


      
      $('.InnerX8').addClass('Citgo2Innerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('Citgo2Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default Citgo2Acm2x8 btn-default');


       
      $('.Fuelx8').addClass('Citgo2Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('Citgo2Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('Citgo2SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('Citgo2SerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('Citgo2Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('Citgo2tofBx8x8');

        
        $('.qty2x8').addClass('Citgo2Qty2x8');



             $('.qtyvalue2x8').addClass('Citgo2Qtyvalue2x8');
             $('.amountx8').addClass('Citgo2Amountx8');
        
            




       $('.NumPadx8').addClass('Citgo2NumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('Citgo2Fin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       



});



///////////////////// Citgo2 ////////////////////////////////////////////
///////////////////// Citgo2 ////////////////////////////////////////////





   
///////////////////// Aramco ////////////////////////////////////////////
///////////////////// Aramco ////////////////////////////////////////////

   $('#Aramcox8, #AramcoMOBIx8').click(function(){
    
    $('.ui2x8').addClass('Aramcoui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('AramcoBlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liAramcolan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 Aramco2lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('Aramcolan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('AramcoLangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('AramcoLangBotherx8');



$('.serm2x8').addClass('Aramcoserm2x8');


      
      $('.InnerX8').addClass('AramcoInnerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('AramcoSm2x8');



      $('.GaspriBtnXX').addClass('btn-default AramcoAcm2x8 btn-default');


       
      $('.Fuelx8').addClass('AramcoAcm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'wheat');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('AramcoSer2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('AramcoSerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('AramcoSerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('AramcoTof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('AramcotofBx8x8');

        
        $('.qty2x8').addClass('AramcoQty2x8');



             $('.qtyvalue2x8').addClass('AramcoQtyvalue2x8');
             $('.amountx8').addClass('AramcoAmountx8');
        
            




       $('.NumPadx8').addClass('AramcoNumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('AramcoFin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       



});



///////////////////// Aramco ////////////////////////////////////////////
///////////////////// Aramco ////////////////////////////////////////////






   
///////////////////// Aramco2 ////////////////////////////////////////////
///////////////////// Aramco2 ////////////////////////////////////////////

   $('#Aramco2x8, #Aramco2MOBIx8').click(function(){


    GasBackGphoto = true;

    
    $('.ui2x8').addClass('Aramco2ui2x8 ui2x8 uiXX');

        $('.BlankLogox8').addClass('Aramco2BlankLogox8');


      // $('.lan2x8').removeClass('redlan2x8 liAramco2lan2x8 navylan2x8 yellowlan2x8');
      // $('.lan2x8').removeClass('greenlan2x8 orangelan2x8 banreslan2x8 Aramco22lan2x8');

      $('.lan2x8, .lan2MOBIx8').addClass('Aramco2lan2x8');

         
         $('.Menux8, .MenuGasx8, .HelloNameGasx8, .HelloRambox8, .CCAx8, .langBx8, .langBMOBIx8').addClass('Aramco2LangBx8');
         $('#english2x8').addClass('active');

          
          $('.langBotherx8').addClass('Aramco2LangBotherx8');



$('.serm2x8').addClass('Aramco2serm2x8');


      
      $('.InnerX8').addClass('Aramco2Innerx8');


      $('.sm2x8').attr('class', 'btn btn-default btn-lg sm2x8');
      $('.sm2x8').addClass('Aramco2Sm2x8');



      $('.GaspriBtnXX').addClass('btn-default Aramco2Acm2x8 btn-default');


       
      $('.Fuelx8').addClass('Aramco2Acm2x8');
      $('.IhaveThisMuchMOBIx8, .Galx8').removeClass('RedMuchandGalx8'); 

       $('.IhaveThisMuchx8, .Galx8').css('color', 'rgb(255, 0, 0)');



        $('.ser2x8').attr('class', 'ser2x8');
        $('.ser2x8').addClass('Aramco2Ser2x8');

            $('.SerBx8x8').attr('class', 'btn btn-default btn-lg SerBx8x8');
            $('.SerBx8x8').addClass('Aramco2SerBx8x8');

            $('.SerBx8otherx8').attr('class', 'btn btn-default dropdown-toggle btn-lg SerBx8otherx8');
            $('.SerBx8otherx8').addClass('Aramco2SerBx8otherx8');
        
        $('.tof2x8').attr('class', 'tof2x8');
        $('.tof2x8').addClass('Aramco2Tof2x8');

            $('.tofBx8x8').attr('class', 'btn btn-default btn-lg tofBx8x8');
            $('.tofBx8x8').addClass('Aramco2tofBx8x8');

        
        $('.qty2x8').addClass('Aramco2Qty2x8');



             $('.qtyvalue2x8').addClass('Aramco2Qtyvalue2x8');
             $('.amountx8').addClass('Aramco2Amountx8');
        
            




       $('.NumPadx8').addClass('Aramco2NumColorsx8 btn-primary');

         

       
       $('.fin2x8').addClass('Aramco2Fin2x8')

     

     if (screenTypex8 === "Mobilex8"){
  $('.amountx8').addClass('amountMOBIx8'); $('.qtyvalue2x8').addClass('qtyvalue2MOBIx8');
}
       



});



///////////////////// Aramco2 ////////////////////////////////////////////
///////////////////// Aramco2 ////////////////////////////////////////////
























// ////////////////     MOBI       ////////////////////////////////
// ////////////////////////////////////////////////////////////////







// ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////







///////////////////Default MOBI X8//////////////////////



$('#ATM1Mobilex8').click(function(){

screenTypex8 = 'Mobilex8';

 $('.ui2x8').addClass('ui2MOBIx8 uiXXMOBI');


   
      // $('.lan2').addClass('lan2MOBI');
      //    $('.langB').addClass('langBMOBI');
      //    $('.langBother').addClass('langBotherMOBI');

$('#atmHomex8').addClass('active');

$('.ServicePanelHeaderx8').addClass('ServicePanelHeaderMOBIx8');
$('.servicePanelParrax8').addClass('servicePanelParraMOBIx8');




        $('.lan2x8').hide();
         $('.lan2MOBIx8').show();
         $('.lan2MOBIx8').addClass('bluelan2');

         $('.lan2MOBIx8 > label, .lan2MOBI > button').addClass('langBotherMOBI');
         $('#english2x8').addClass('active');


      $('.serm2x8').addClass('serm2MOBIx8');
      $('.innerx8').addClass('innerx8 innerMOBIx8');

      $('.SerBx8other').addClass('SerBx8otherMOBI');
       $('.serDropx8').addClass('serDropMOBIx8');
       // $('.serDropx8 > button').addClass('serDropMOBIx8 > button');


      // $('.ser2').addClass('ser2MOBI');
      //    $('.SerBx8').addClass('SerBx8MOBI');


$('.acm2x5, .acm2x7').css('border-radius', '30px');



 $('.depositx8').addClass('depositMOBIx8');
 $('.DepositCCx8').hide();
 $('.DepositCx8').show();
 $('.CaptureDepositx8').show();
 $('.DepositButtonsx8').addClass('DepositButtonsMOBIx8');




$('.sm3Buttons').addClass('sm3ButtonsMOBI');
$('.noButtons').addClass('noButtonsMOBI');
$('.noButtons').addClass('noButtonsMOBI');
$('.noButtons').addClass('noButtonsMOBI');
$('.sm2x8').addClass('sm2MOBIx8');






$('.innerRightx8').addClass('innerRightMOBIx8');
$('.innerLeftx8').addClass('innerLeftMOBIx8');
// $('.GaspriBtnXX').addClass('btn-default acm2MOBIx8');

       


$('.MyGascreditInputx8').addClass('MyGascreditInputMOBIx8');
$('.StationLocationx8').addClass('StationLocationMOBIx8');
$('.SearchFuelsx8').addClass('SearchFuelsMOBIx8');





$('.feesx8').addClass('feesMOBIx8');
$('.feeInputx8').addClass('feeInputMOBIx8');


      $('.qty2x8').addClass('qty2MOBIx8');
          $('.qtyvalue2x8').addClass('qtyvalue2x8 qtyvalue2MOBIx8');
          $('.amountx8').addClass('amountx8 amountMOBIx8');
            $('.QtyValueCoverx8').addClass('QtyValueCoverMOBIx8');
             $('.PayButtonsBx8').addClass('pyMOBIlabelx8');



      $('.backSpacex8').addClass('backSpaceMOBIx8');








      // $('.numV').addClass('NumV');
      $('.NumPadx8').addClass('numVMOBIx8');


      $('.fin2x8').addClass('fin2MOBIx8');






            $('.finBx8').addClass('finBMOBIx8');


          $('.confBack2Yx8').addClass('confBack2Yx8 confBack2YMOBIx8');
          $('.ScanconfBack2Yx8').addClass('ScanconfBack2Yx8 ScanconfBack2YMOBIx8');


      $('.confirm2Yx8, .Scanconfirm2Yx8').addClass('confirm2YMOBIx8');
      $('.back2Yx8, .Scanback2Yx8').addClass('back2YMOBIx8');

$('.addBillx8').addClass('addBillMOBIx8');
$('.schedule2x8').addClass('schedule2MOBIx8');     
$('.closeSer2Panelsx8 ').addClass('closeSer2PanelsMOBIx8');


$('.ServicePanelx8').addClass('servicePanelsMOBIx8');
$('.friendsx8, .DenominatedBillsx8, .Cardx8, .PBillx8, .TLoanx8').addClass('SerPanLabelsMOBIx8');

$('#closeSer2Panelsx8').addClass(' closeSer2PanelsMOBIx8');
$('.Schedulex8').addClass('ScheduleMOBIx8');






////quick send
$('.SearchScanContactLabelInvoicex8').show('');
$('.servicePanelParratopx8').hide('');
$('.servicePanelParraBottomx8').show('');
$('.friendsx8').addClass('friendsMOBIx8');
$('.friendImputx8').addClass('friendImputMOBIx8');
$('.friendsSpanx8').addClass('friendsSpanMOBIx8');
$('.SelectFriendx8').addClass('SelectFriendMOBIx8');
$('.SendReqx8').addClass('SendReqMOBIx8');
$('.FriendMemox8').addClass('FriendMemoMOBIx8');
$('.WriteMemox8').addClass('WriteMemoMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').addClass('ScanOrBuyOrGiftGasx8');
$('.ContactNameVamountx8').addClass('ContactNameVamountMOBIx8');
$('.MikeBx8').addClass('MikeBMOBIx8');

$('.SelectSendOrRequestx8').addClass('SelectSendOrRequestMOBIx8');
$('.GiftFuelx8').addClass('GiftFuelMOBIx8');



$('.ToogleFuelsToRectanglex8').show('');
$('.SelectFuelsx8').addClass('SelectFuelsMOBIx8');
$('.Fuelx8').addClass('FuelMOBIx8');
$('.FuelSymbolx8').addClass('FuelSymbolMOBIx8');
$('.FuelNamex8').addClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').addClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').addClass('CurrentPriceMOBIx8');
$('.MyFuelinRealValx8').addClass('MyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').addClass('EnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').addClass('InputFuelQtyMOBIx8');
$('.totalFuelsheaderx8').addClass('totalFuelsheaderMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').addClass('ScanOrBuyOrGiftGasx8');
$('.SearchFuelsx8').addClass('SearchFuelsMOBIx8');






$('.ToogleTransferToSelectx8').show('');
$('.ToogleTransferToSelectx8, .ToogleTransferToColumnx8').addClass('ToogleTransferToColumnMOBIx8');
$('.SelectTransfersx8').addClass('SelectTransfersMOBIx8');
$('.Transferx8').addClass('TransferMOBIx8');
$('.TransferSymbolx8').addClass('TransferSymbolMOBIx8');
$('.TransferNamex8').addClass('TransferNameMOBIx8');
$('.IhaveThisMuchx8').addClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').addClass('CurrentPriceMOBIx8');
$('.MyTransferinRealValx8').addClass('MyTransferinRealValMOBIx8');
$('.EnterTransferQtyx8').addClass('EnterTransferQtyMOBIx8');
$('.InputTransferQtyx8').addClass('InputTransferQtyMOBIx8');
$('.totalTransfersheaderx8').addClass('totalTransfersheaderMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').addClass('ScanOrBuyOrGiftGasx8');
$('.SearchTransferx8').addClass('SearchTransfersMOBIx8');
$('.Thecoverlix8').addClass('ThecoverliMOBIx8');










$('.LoanParrax8').addClass('LoanParraMOBIx8');

$('.cheTsav2x8').addClass('cheTsav2MOBIx8');
$('.savTche2x8').addClass('savTche2MOBIx8');


$('.OperationEndedPanelx8').addClass('OperationEndedPanelMOBIx8');


$('.Galx8').addClass('GalMOBIx8');

$('.ScanPumpOnex8').show();
$('#SubmitGasOrderx8').hide();





  $('.TapBarGas').removeClass('FFTSelectedModelx8');
  $(this).addClass('FFTSelectedModelx8');

  Tapbarx8= 'Regular';

   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');
   $('.lan2x8, .lan2MOBIx8').removeClass('ThinTapbarMOBIx8 UserTapbarMOBIx8');

   $('.Hellox8').hide();
   $('.LanBgroupMOBIx8').show();

   $('.lan2MOBIx8').addClass('lan2MobileTop');
 

  $('.Bottomlan2MOBIx8 > .HelloRambox8, .CCAx8, .langBx8, .Bottomlan2MOBIx8 > .GrLanBMOBIx8').hide('');
   $('.Bottomlan2MOBIx8').hide();
   $('.fin2x8, .fin2MOBIx8').addClass('RoundFinx8');

   $('.servicePanelsMOBIx8').removeClass('TapBar2servicePanelsMOBIx8');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5');



$('.AllFinModelsGas').show('');


   $('.innerRightx8, .innerLeftx8, .GasModel3x8, .GasModel4x8, .GasModel1x8, .GasModel1ax8').hide();
   $('.innerRight1x8, .innerLeft2x8, .GasModel15x8, .GasModel25x8').show();



// $('.GiftFuelx8').show();
$('.MGiftFuelx8').show();







$('.numpadLeftx8').hide();
$('.numpadRightx8').hide();

$('.numpadLeftMOBIx8').show();
$('.numpadRightMOBIx8').show();
$('.numpadLargex8').show();


$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');


$('.MerLabelNamex8').addClass('MerLabelNameMOBIx8');


$('.payIconx8').addClass('payIconMOBIx8');
$('.PayButtonsBx8').addClass('PayButtonsBMOBIx8');

$('.BlankTapbarx8').addClass('BlankTapbarMOBIx8');
$('.BlankLogox8 ').addClass('BlankLogoMOBIx8 ');

$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8, .TapBarGas6x8').hide();

$('.FuelCreditx8').addClass('FuelCreditMOBIx8');
$('.Fuel2x8').addClass('FuelMOBI2x8');


$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');


$('.HoriButtonFin2ax8').addClass('HoriButtonFin2aMOBIx8');
$('.HorizontalFin2aB').addClass('HorizontalFin2aBMOBI');
$('.HoriButtonFinx8').addClass('HoriButtonFinMOBIx8');
$('.HorizontalFinB').addClass('HorizontalFinBMOBI');





$('.Fuelx8').removeClass('MiniFuelMOBIx8 '); 
$('.FuelSymbolx8').removeClass('MiniFuelSymbolMOBIx8 '); 
$('.FuelNamex8').removeClass('MiniFuelNameMOBIx8');
$('.IhaveThisMuchx8').removeClass('MiniIhaveThisMuchMOBIx8');
$('.MyFuelinRealValx8').removeClass('MiniMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('MiniEnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').removeClass('MiniInputFuelQtyMOBIx8');
$('.SelectFuelsx8').addClass('MiniSelectFuelsMOBIx8');
$('.GiftGasx8').removeClass('MiniGiftGasx8');
$('.UseGasx8').removeClass('MiniUseGasx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');


// $('.ToogleFuelsToLinearx8').click(function(){


$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');
$('.GiftGasMOBIx8').removeClass('.RedtangledGiftGasMOBIx8 '); 
$('.UseGasx8').removeClass('RectangledUseGasx8'); 
$('.GiftGasx8').removeClass('RectangledGiftGasx8');
$('.innerRightMOBIx8').removeClass('RectangledinnerRightMOBIx8');
$('.IhaveThisMuchx8').removeClass('RectangledIhaveThisMuchMOBIx8');
$('.Galx8').removeClass('RectangledGalMOBIx8');
$('.SelectFuelsMOBIx8').removeClass('MiniSelectFuelsMOBIx8');
$('.FuelSymbolMOBIx8').removeClass('RectangledFuelSymbolMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');





// $('.ToogleFuelsToSquarex8').click(function(){

$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').removeClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').removeClass('LinearUseGasx8');
$('.GiftGasx8').removeClass('LinearGiftGasx8')

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');







// $('.ToogleFuelsToMinix8').click(function(){

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');




// $('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
// $('.Fuelx8').removeClass('FuelMOBIx8');
// $('.FuelSymbolx8').removeClass('FuelSymbolMOBIx8');
// $('.FuelNamex8').removeClass('FuelNameMOBIx8');
// $('.IhaveThisMuchx8').removeClass('IhaveThisMuchMOBIx8');
// $('.CurrentPricex8').removeClass('CurrentPriceMOBIx8');
// $('.MyFuelinRealValx8').removeClass('MyFuelinRealValMOBIx8');
// $('.EnterFuelQtyx8').removeClass('EnterFuelQtyMOBIx8');
// $('.InputFuelQtyx8').removeClass('InputFuelQtyMOBIx8');
// $('.totalFuelsheaderx8').removeClass('totalFuelsheaderMOBIx8');
// $('.SelectBuyOrSellx8, .ScanOrGiftx8').removeClass('ScanOrBuyOrGiftGasx8');
// $('.SearchFuelsx8').removeClass('SearchFuelsMOBIx8');
// $('.Galx8').removeClass('GalMOBIx8');


// $('.Thecoverx8').css('padding-top','125px');


$('.SelectFuelsx8').removeClass('RectangledSelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('MiniSelectFuelsMOBIx8');



$('.innerRightMOBIx8').removeClass('TinyinnerRightx8');
$('.SelectFuelsx8').removeClass('TinySelectFuelsx8');

$('.Fuelx8').removeClass('TinyFuelx8');
$('.FuelSymbolx8').removeClass('TinyFuelSymbolx8');
$('.MyFuelinRealValx8').removeClass('TinyMyFuelinRealValx8');

$('.EnterFuelQtyx8').removeClass('TinyEnterFuelQtyx8');
$('.GiftGasMOBIx8').removeClass('TinyGiftGasx8');

$('.IhaveThisMuchMOBIx8').removeClass('TinyIhaveThisMuchx8');
$('.GalMOBIx8').removeClass('TinyGalx8');
$('.FuelSymbolMOBIx8').removeClass('TinyFuelSymbolx8');

$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
 $('.FuelNamex8').removeClass('TinyFuelNamex8');





    $('.innerRightMOBIx8').removeClass('HoriinnerRightx8');
    $('.SelectFuelsx8').removeClass('HoriSelectFuelsx8');

    $('.Fuelx8').removeClass('HoriFuelx8');
    $('.MyFuelinRealValx8').removeClass('HoriMyFuelinRealValx8');

    $('.EnterFuelQtyx8').removeClass('HoriEnterFuelQtyx8');
    $('.GiftGasMOBIx8').removeClass('HoriGiftGasx8');

    $('.IhaveThisMuchx8').removeClass('HoriIhaveThisMuchx8');
    $('.Galx8').removeClass('HoriGalx8');
    $('.FuelSymbolx8').removeClass('HoriFuelSymbolx8');
    $('.FuelNamex8').removeClass('HoriFuelNamex8');

    $('.FuelCreditx8').removeClass('HoriFuelCreditx8');



$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');
$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');





});





// //////////////////////  End of Mobile ///////////////////////// 
// //////////////////////  End of Mobile ///////////////////////// 












$('#ATM1Machinex8').click(function(){

  InnerRightypex8 = 'GasPump';









  screenTypex8 = 'Machinex8';

    $('#submit2Yx8').fadeIn();
    $('#Scan2Yx8').hide();

 


 $('.ui2x8').removeClass('ui2MOBIx8 uiXXMOBI');
   
      // $('.lan2').removeClass('lan2MOBI');
      //    $('.langB').removeClass('langBMOBI');
      //    $('.langBother').removeClass('langBotherMOBI');



$('.ServicePanelHeaderx8').removeClass('ServicePanelHeaderMOBIx8');
$('.servicePanelParrax8').removeClass('servicePanelParraMOBIx8');




        $('.lan2x8').show();
         $('.lan2MOBIx8').hide();
         $('.lan2MOBIx8').removeClass('bluelan2');

         $('.lan2MOBIx8 > label, .lan2MOBI > button').removeClass('langBotherMOBI');
         


      $('.serm2x8').removeClass('serm2MOBIx8');
      $('.innerx8').removeClass('innerMOBIx8');




$('.innerRightx8').removeClass('innerRightMOBIx8');
$('.innerLeftx8').removeClass('innerLeftMOBIx8');




       



$('.feesx8').removeClass('feesMOBIx8');
$('.feeInputx8').removeClass('feeInputMOBIx8');

      $('.qty2x8').removeClass('qty2MOBIx8');
          $('.qtyvalue2x8').removeClass('qtyvalue2MOBIx8');
          $('.amountx8').removeClass('amountMOBIx8');
          $('.QtyValueCoverx8').removeClass('QtyValueCoverMOBIx8');
          $('.PayButtonsBx8').removeClass('pyMOBIlabelx8');


      $('.backSpacex8').removeClass('backSpaceMOBIx8');








      // $('.numV').removeClass('NumV');
      $('.NumPadx8').removeClass('numVMOBIx8');


      $('.fin2x8').removeClass('fin2MOBIx8');






            $('.finBx8').removeClass('finBMOBIx8');


          $('.confBack2Yx8').removeClass('confBack2YMOBIx8');
          $('.ScanconfBack2Yx8').removeClass('ScanconfBack2YMOBIx8');


      $('.confirm2Yx8, .Scanconfirm2Yx8').removeClass('confirm2YMOBIx8');
      $('.back2Yx8, .Scanback2Yx8').removeClass('back2YMOBIx8');



$('.ServicePanelx8').removeClass('servicePanelsMOBIx8');

$('#closeSer2Panelsx8').removeClass(' closeSer2PanelsMOBIx8');
$('.friendsx8, .DenominatedBillsx8, .Cardx8, .PBillx8, .TLoanx8').removeClass('SerPanLabelsMOBIx8');


$('.addBillx8').removeClass('addBillMOBIx8');
$('.schedule2x8').removeClass('schedule2MOBIx8');     
$('.closeSer2Panelsx8 ').removeClass('closeSer2PanelsMOBIx8');





$('.SearchScanContactLabelInvoicex8').hide('');
$('.servicePanelParratopx8').show('');
$('.servicePanelParraBottomx8').hide('');

$('.friendsx8').removeClass('friendsMOBIx8');
$('.friendImputx8').removeClass('friendImputMOBIx8');
$('.friendsSpanx8').removeClass('friendsSpanMOBIx8');
$('.SelectFriendx8').removeClass('SelectFriendMOBIx8');
$('.SendReqx8').removeClass('SendReqMOBIx8');
$('.FriendMemox8').removeClass('FriendMemoMOBIx8');
$('.WriteMemox8').removeClass('WriteMemoMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').removeClass('ScanOrBuyOrGiftGasx8');
$('.ContactNameVamountx8').removeClass('ContactNameVamountMOBIx8');
$('.MikeBx8').removeClass('MikeBMOBIx8');

$('.SelectSendOrRequestx8').removeClass('SelectSendOrRequestMOBIx8');

$('.GiftFuelx8').removeClass('GiftFuelMOBIx8');



$('.MyGascreditInputx8').removeClass('MyGascreditInputMOBIx8');
$('.StationLocationx8').removeClass('StationLocationMOBIx8');
$('.SearchFuelsx8').removeClass('SearchFuelsMOBIx8');





$('.ToogleFuelsToLinearx8, .ToogleFuelsToSquarex8, .ToogleFuelsToRectanglex8, .ToogleFuelsToMinix8').hide();
$('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
$('.Fuelx8').removeClass('FuelMOBIx8');
$('.FuelSymbolx8').removeClass('FuelSymbolMOBIx8');
$('.FuelNamex8').removeClass('FuelNameMOBIx8');
$('.IhaveThisMuchx8').removeClass('IhaveThisMuchMOBIx8');
$('.CurrentPricex8').removeClass('CurrentPriceMOBIx8');
$('.MyFuelinRealValx8').removeClass('MyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('EnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').removeClass('InputFuelQtyMOBIx8');
$('.totalFuelsheaderx8').removeClass('totalFuelsheaderMOBIx8');
$('.SelectBuyOrSellx8, .ScanOrGiftx8').removeClass('ScanOrBuyOrGiftGasx8');
$('.SearchFuelsx8').removeClass('SearchFuelsMOBIx8');


$('.OperationEndedPanelx8').removeClass('OperationEndedPanelMOBIx8');


$('.Galx8').removeClass('GalMOBIx8');

$('.ScanPumpOnex8').show();
$('#SubmitGasOrderx8').show();

$('.fin2x8').removeClass('RoundFinx8');





$('.AllItemsx8').show();


// $('.GiftFuelx8').hide();
$('.MGiftFuelx8').show();



$('.numpadLeftMOBIx8').hide();
$('.numpadRightMOBIx8').hide();
$('.numpadLargex8').hide();

$('.numpadLeftx8').show();
$('.numpadRightx8').show();


$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');




$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');





if (serviceValuex8 === "QuickPay" || "Assets"){
  $('.submit2Yx8').hide();
}






   $('.innerRightx8, .innerLeft2x8, .GasModel15x8, .GasModel25x8').hide();
   $('.innerRight1x8, .innerLeft1x8, .GasModel1x8, .GasModel1ax8, .GasModel3x8, .GasModel4x8').show();


$('.MerLabelNamex8').removeClass('MerLabelNameMOBIx8');



$('.payIconx8').removeClass('payIconMOBIx8');
$('.PayButtonsBx8').removeClass('PayButtonsBMOBIx8');

$('.BlankTapbarx8').removeClass('BlankTapbarMOBIx8');
$('.BlankLogox8 ').removeClass('BlankLogoMOBIx8 ');


$('.FuelCreditx8').removeClass('FuelCreditMOBIx8');

$('.Fuel2x8').removeClass('FuelMOBI2x8 LinearFuel2x8 RectangledFuelMOBI2x8 MiniFuelMOBI2x8');


$('.HoriButtonFin2ax8').removeClass('HoriButtonFin2aMOBIx8');
$('.HorizontalFin2aB').removeClass('HorizontalFin2aBMOBI');
$('.HoriButtonFinx8').removeClass('HoriButtonFinMOBIx8');
$('.HorizontalFinB').removeClass('HorizontalFinBMOBI');



$('.innerLeftx8, .innerRightx8').hide();
$('.innerRight3x8').show();









$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');


$('.MerLabelNamex8').addClass('MerLabelNameMOBIx8');






$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8, .TapBarGas6x8').hide();




$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');


$('.Fuelx8').removeClass('MiniFuelMOBIx8 '); 
$('.FuelSymbolx8').removeClass('MiniFuelSymbolMOBIx8 '); 
$('.FuelNamex8').removeClass('MiniFuelNameMOBIx8');
$('.IhaveThisMuchx8').removeClass('MiniIhaveThisMuchMOBIx8');
$('.MyFuelinRealValx8').removeClass('MiniMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('MiniEnterFuelQtyMOBIx8');
$('.InputFuelQtyx8').removeClass('MiniInputFuelQtyMOBIx8');
$('.SelectFuelsx8').addClass('MiniSelectFuelsMOBIx8');
$('.GiftGasx8').removeClass('MiniGiftGasx8');
$('.UseGasx8').removeClass('MiniUseGasx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');


// $('.ToogleFuelsToLinearx8').click(function(){


$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');
$('.GiftGasMOBIx8').removeClass('.RedtangledGiftGasMOBIx8 '); 
$('.UseGasx8').removeClass('RectangledUseGasx8'); 
$('.GiftGasx8').removeClass('RectangledGiftGasx8');
$('.innerRightMOBIx8').removeClass('RectangledinnerRightMOBIx8');
$('.IhaveThisMuchx8').removeClass('RectangledIhaveThisMuchMOBIx8');
$('.Galx8').removeClass('RectangledGalMOBIx8');
$('.SelectFuelsMOBIx8').removeClass('MiniSelectFuelsMOBIx8');
$('.FuelSymbolMOBIx8').removeClass('RectangledFuelSymbolMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');





// $('.ToogleFuelsToSquarex8').click(function(){

$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');
$('.SelectFuelsMOBIx8').removeClass('LinearSelectFuelsMOBIx8');
$('.UseGasx8').removeClass('LinearUseGasx8');
$('.GiftGasx8').removeClass('LinearGiftGasx8')

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');







// $('.ToogleFuelsToMinix8').click(function(){

$('.Fuelx8').removeClass('RectangledFuelMOBIx8');
$('.MyFuelinRealValx8').removeClass('RectangledMyFuelinRealValMOBIx8');
$('.EnterFuelQtyx8').removeClass('RectangledEnterFuelQtyMOBIx8');


$('.Fuelx8').removeClass('LinearFuelx8');
$('.FuelNamex8').removeClass('LinearFuelNamex8');
$('.FuelBadgeAndnamex8').removeClass('LinearFuelBadgeAndnamex8');
$('.FuelAndAbrex8').removeClass('LinearFuelAndAbrex8');
$('.MyCurrentPricex8').removeClass('LinearMyCurrentPricex8');
$('.EnterFuelQtyx8').removeClass('LinearEnterFuelQtyx8');


$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');




// $('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
// $('.Fuelx8').removeClass('FuelMOBIx8');
// $('.FuelSymbolx8').removeClass('FuelSymbolMOBIx8');
// $('.FuelNamex8').removeClass('FuelNameMOBIx8');
// $('.IhaveThisMuchx8').removeClass('IhaveThisMuchMOBIx8');
// $('.CurrentPricex8').removeClass('CurrentPriceMOBIx8');
// $('.MyFuelinRealValx8').removeClass('MyFuelinRealValMOBIx8');
// $('.EnterFuelQtyx8').removeClass('EnterFuelQtyMOBIx8');
// $('.InputFuelQtyx8').removeClass('InputFuelQtyMOBIx8');
// $('.totalFuelsheaderx8').removeClass('totalFuelsheaderMOBIx8');
// $('.SelectBuyOrSellx8, .ScanOrGiftx8').removeClass('ScanOrBuyOrGiftGasx8');
// $('.SearchFuelsx8').removeClass('SearchFuelsMOBIx8');
// $('.Galx8').removeClass('GalMOBIx8');


// $('.Thecoverx8').css('padding-top','125px');


$('.SelectFuelsx8').removeClass('RectangledSelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('SelectFuelsMOBIx8');
$('.SelectFuelsx8').removeClass('MiniSelectFuelsMOBIx8');



$('.innerRightMOBIx8').removeClass('TinyinnerRightx8');
$('.SelectFuelsx8').removeClass('TinySelectFuelsx8');

$('.Fuelx8').removeClass('TinyFuelx8');
$('.FuelSymbolx8').removeClass('TinyFuelSymbolx8');
$('.MyFuelinRealValx8').removeClass('TinyMyFuelinRealValx8');

$('.EnterFuelQtyx8').removeClass('TinyEnterFuelQtyx8');
$('.GiftGasMOBIx8').removeClass('TinyGiftGasx8');

$('.IhaveThisMuchMOBIx8').removeClass('TinyIhaveThisMuchx8');
$('.GalMOBIx8').removeClass('TinyGalx8');
$('.FuelSymbolMOBIx8').removeClass('TinyFuelSymbolx8');

$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
 $('.FuelNamex8').removeClass('TinyFuelNamex8');





    $('.innerRightMOBIx8').removeClass('HoriinnerRightx8');
    $('.SelectFuelsx8').removeClass('HoriSelectFuelsx8');

    $('.Fuelx8').removeClass('HoriFuelx8');
    $('.MyFuelinRealValx8').removeClass('HoriMyFuelinRealValx8');

    $('.EnterFuelQtyx8').removeClass('HoriEnterFuelQtyx8');
    $('.GiftGasMOBIx8').removeClass('HoriGiftGasx8');

    $('.IhaveThisMuchx8').removeClass('HoriIhaveThisMuchx8');
    $('.Galx8').removeClass('HoriGalx8');
    $('.FuelSymbolx8').removeClass('HoriFuelSymbolx8');
    $('.FuelNamex8').removeClass('HoriFuelNamex8');

    $('.FuelCreditx8').removeClass('HoriFuelCreditx8');



$('.FuelCreditx8').removeClass('SquareFuelCreditx8');
$('.FuelCreditx8').removeClass('MiniFuelCreditx8');
$('.FuelCreditx8').removeClass('LinearFuelCreditx8');
$('.FuelCreditx8').removeClass('TinyFuelCreditx8');
$('.FuelCreditx8').removeClass('RectangledFuelCreditx8');






$('.FuelCreditx8').removeClass('FuelCreditMOBIx8');
$('.payIconx8').removeClass('payIconMOBIx8');
$('.PayButtonsBx8').removeClass('PayButtonsBMOBIx8');



$('.langBx8').show();



});













$('.NOnumpadLeftx8, .ToogleFuelsToSquarex8, .ToogleFuelsToLinearx8, .ToogleFuelsToRectanglex8, .ToogleFuelsToMinix8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');



$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');



$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8').show();

$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8, .TapBarGas6x8').show();







});






$('.numpadLeftx8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');





$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');

$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');

$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');



$('.qty2x8 ').addClass('LeftShiftedqty2x8');
$('.amountx8').addClass('LeftShiftedamountx8');
$('.amountInputx8').addClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').addClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').addClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').addClass('LeftShiftedbackSpacex8');
$('.feesx8').addClass('LeftShiftedfeesx8');
$('.numPeriodx8').addClass('LeftShiftednumPeriodx8');
$('.qty2x8').addClass('LeftShiftedqty2x8');




});




$('.numpadLeftMOBIx8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');

$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');



$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');




$('.amountx8').addClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').addClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').addClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').addClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').addClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').addClass('LeftShiftedfeesMOBIx8');
$('.numPeriodx8').addClass('LeftShiftednumPeriodx8');
$('.qty2x8').addClass('LeftShiftedqty2MOBIx8');
});






});


// /////////////////////////

// //////////////NumPad Right /////////////


$('.numpadRightx8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');





$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');



$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');




$('.qty2x8 ').addClass('RightShiftedqty2x8');
$('.amountx8').addClass('RightShiftedamountx8');
$('.amountInputx8').addClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').addClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').addClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').addClass('RightShiftedbackSpacex8');
$('.feesx8').addClass('RightShiftedfeesx8');
$('.numPeriodx8').addClass('RightShiftednumPeriodx8');
$('.qty2x8').addClass('RightShiftedqty2x8');



});




$('.numpadRightMOBIx8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');

$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');



$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');




$('.amountx8').addClass('RightshiftedamountMOBIx8');
$('.amountInputx8').addClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').addClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').addClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').addClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').addClass('RightShiftedfeesMOBIx8');
$('.numPeriodx8').addClass('RightShiftednumPeriodx8');

$('.qty2x8').addClass('RightShiftedqty2MOBIx8');
});





// //////////////NumPad Right /////////////

/////////////////NumPad Large////////////


$('.numpadLargex8, .ToogleFuelsToHorix8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');


$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');
$('.numPeriodx8').removeClass('RightShiftednumPeriodx8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');


$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');




$('.qty2x8').addClass('qty2MOBIxLargex8');
$('.NumPadx8').addClass('NumPadMOBIxLargex8');
$('.backSpacex8').addClass('backSpaceMOBIxLargex8');





});





/////////////////NumPad Large////////////

// ////////////numPad Huge////////////////

$('.numpadHugex8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');


$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8').show();

$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8, .TapBarGas6x8').show();


$('.qty2x8').removeClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').removeClass('backSpacexExtraHugex8');

$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');


$('.qty2x8').addClass('qty2MOBIxHugex8');
$('.NumPadx8').addClass('NumPadMOBIxHugex8');
$('.backSpacex8').addClass('backSpacexHugex8');




});




// ////////////numPad Huge////////////////



// ////////////numPad Extra Huge////////////////

$('.numpadExtraHugex8, .ToogleFuelsToTinyx8').click(function(){

$('.NumPadModelx8').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');

$('.qty2x8 ').removeClass('LeftShiftedqty2x8');
$('.amountx8').removeClass('LeftShiftedamountx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpacex8');
$('.feesx8').removeClass('LeftShiftedfeesx8');
$('.numPeriodx8').removeClass('LeftShiftednumPeriodx8');



$('.amountx8').removeClass('LeftshiftedamountMOBIx8');
$('.amountInputx8').removeClass('LeftShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('LeftShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('LeftShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('LeftShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('LeftShiftedfeesMOBIx8');


$('.qty2x8 ').removeClass('RightShiftedqty2x8');
$('.amountx8').removeClass('RightShiftedamountx8');
$('.amountInputx8').removeClass('RightShiftedamountInputx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2x8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadx8');
$('.backSpacex8').removeClass('RightShiftedbackSpacex8');
$('.feesx8').removeClass('RightShiftedfeesx8');


$('.amountx8').removeClass('RightshiftedamountMOBIx8');
$('.amountInputx8').removeClass('RightShiftedamountInputMOBIx8'); 
$('.qtyvalue2x8').removeClass('RightShiftedqtyvalue2MOBIx8');
$('.LinearNumPadx8').removeClass('RightShiftedLinearNumPadMOBIx8');
$('.backSpacex8').removeClass('RightShiftedbackSpaceMOBIx8');
$('.feesx8').removeClass('RightShiftedfeesMOBIx8');

$('.qty2x8').removeClass('qty2MOBIxLargex8');
$('.NumPadx8').removeClass('NumPadMOBIxLargex8');
$('.backSpacex8').removeClass('backSpaceMOBIxLargex8');


$('.qty2x8').removeClass('LeftShiftedqty2x8');
$('.qty2x8').removeClass('LeftShiftedqty2MOBIx8');
$('.qty2x8').removeClass('RightShiftedqty2x8');
$('.qty2x8').removeClass('RightShiftedqty2MOBIx8');

$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8').show();
$('.TapBarGas3x8, .TapBarGas4x8, .TapBarGas5x8, .TapBarGas6x8').show();



$('.qty2x8').removeClass('qty2MOBIxHugex8');
$('.NumPadx8').removeClass('NumPadMOBIxHugex8');
$('.backSpacex8').removeClass('backSpacexHugex8');


$('.qty2x8').addClass('qty2MOBIxExtraHugex8');
$('.NumPadx8').addClass('NumPadMOBIxExtraHugex8');
$('.backSpacex8').addClass('backSpacexExtraHugex8');


});




// ////////////numPad Extra Huge////////////////





// //////////////////////////////////////////



$('.GasFinModel1').click(function(){
$('.GasFinModel').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');
  console.log('Fin model button clicked')

  $('.fin2x8').hide('');
  $('.OneButtonFinx8').show('');

});


$('.GasFinModel1b').click(function(){
$('.GasFinModel').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');
  console.log('Fin model button clicked')

  $('.fin2x8').hide('');
  $('.HoriButtonFin2ax8').show('');

});





$('.GasFinModel2').click(function(){
$('.GasFinModel').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');
  console.log('Fin model button clicked')

  $('.fin2x8').hide('');
  $('.TwoButtonFinx8').show('');

});





$('.GasFinModel3').click(function(){
$('.GasFinModel').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');
  console.log('Fin model button clicked')

  $('.fin2x8').hide('');
  $('.HoriButtonFinx8').show('');

});







$('.GasFinModel4').click(function(){
$('.GasFinModel').removeClass('FFTSelectedModelx4');
$(this).addClass('FFTSelectedModelx4');
  console.log('Fin model button clicked')

  $('.fin2x8').hide('');
  $('.GasFin4x8').show('');

});


// ////////////////////////////////////////////



















