$(document).ready(function(){
 

screenTypex4 = '';

FinBackGphoto = false;





$('.ColorsMOBIx4 > label, .Colorsx4 > label').click(function(){





// //////////////////////////////////////////

   FinBackGphoto = false;

   if(FinBackGphoto === true && screenTypex8 === 'Mobile2x8'){

     $('.numVMOBIx4').css('border-width', '2px');
     console.log("FinBackGphoto 2px is + = " + FinBackGphoto);
  
   }



   if(FinBackGphoto === false && screenTypex8 === 'Mobile2x8'){

     $('.numVMOBIx4').css('border-width', '4px');
     console.log("FinBackGphoto is 4px + = " + FinBackGphoto);
  
   }

// //////////////////////////////////////////






       $('.ui2x4').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.ui2x4').removeClass('redui2x4 blueui2x4 blue3ui2x4 blue1ui2x4 redui2x4 red2ui2x4');
       $('.ui2x4').removeClass('red3ui2x4 red4ui2x4 blue22ui2x4 blue2ui2x4 orangeui2x4');
       $('.ui2x4').removeClass('navyui2x4 banresui2x4 Banres2ui2x4 ponceui2x4  greenui2x4 green2ui2x4');
       $('.ui2x4').removeClass('liBlueui2x4 yellowui2x4 liBlue2ui2x4 MedBlueui2x4 Blackui2x4');
       $('.ui2x4').removeClass('Dribui2x4 Drib2ui2x4 Robinui2x4 Robin2ui2x4 Robin3ui2x4 Binanceui2x4 Coinbaseui2x4');
       $('.ui2x4').removeClass('Chaseui2x4 Boamerui2x4 Green3ui2x4 Paypalui2x4 Barclayui2x4 Coinbase2ui2x4 Whiteui2x4 Banres3ui2x4');
       $('.ui2x4').removeClass('Ria1ui2x4 Ria2ui2x4 Westunui2x4 Sofi1ui2x4 Sofi2ui2x4 Cblueui2x4 Ponce1ui2x4 Ponce2ui2x4');
       $('.ui2x4').removeClass('Chase2ui2x4 Boamer2ui2x4 Citiui2x4 Banre1ui2x4 Banre4ui2x4 Green4ui2x4 Barclay2ui2x4 Drib3ui2x4 Robin4ui2x4');
       $('.ui2x4').removeClass('Chase3ui2x4 Binance2ui2x4 Coinbase3ui2x4 Westun2ui2x4 Citi2ui2x4 Citi3ui2x4 Ria3ui2x4 China2ui2x4');
       $('.ui2x4').removeClass('Bank0ui2x4 Bank1ui2x4 Bank2ui2x4 Bank3ui2x4 Bank4ui2x4 Bank5ui2x4 Bank6ui2x4 Bank7ui2x4');
      

       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('redlan2x4 bluelan2x4 blue3lan2x4 blue1lan2x4 redlan2x4 red2lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('red3lan2x4 red4lan2x4 blue22lan2x4 blue2lan2x4 orangelan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('navylan2x4 banreslan2x4 Banres2lan2x4 poncelan2x4  greenlan2x4 green2lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('liBluelan2x4 yellowlan2x4 liBlue2lan2x4 MedBluelan2x4 Blacklan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Driblan2x4 Drib2lan2x4 Robinlan2x4 Robin2lan2x4 Robin3lan2x4 Binancelan2x4 Coinbaselan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Chaselan2x4 Boamerlan2x4 Green3lan2x4 Paypallan2x4 Barclaylan2x4 Coinbase2lan2x4 Whitelan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Banres3lan2x4 Ria1lan2x4 Ria2lan2x4 Westunlan2x4 Sofi1lan2x4 Sofi2lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Cbluelan2x4 Ponce1lan2x4 Ponce2lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Chase2lan2x4 Boamer2lan2x4 Citilan2x4 Banre1lan2x4 Banre4lan2x4 Green4lan2x4 Barclay2lan2x4 Drib3lan2x4 Robin4lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Chase3lan2x4 Binance2lan2x4 Coinbase3lan2x4 Westun2lan2x4 Citi2lan2x4 Citi3lan2x4 Ria3lan2x4 China2lan2x4');
       $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').removeClass('Bank0lan2x4 Bank1lan2x4 Bank2lan2x4 Bank3lan2x4 Bank4lan2x4 Bank5lan2x4 Bank6lan2x4 Bank7lan2x4');

       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('redLangBx4 blueLangBx4 blue3LangBx4 blue1LangBx4 redLangBx4 red2LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('red3LangBx4 red4LangBx4 blue22LangBx4 blue2LangBx4 orangeLangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('navyLangBx4 banresLangBx4 Banres2LangBx4 ponceLangBx4  greenLangBx4 green2LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('liBlueLangBx4 yellowLangBx4 liBlue2LangBx4 MedBlueLangBx4 BlackLangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('DribLangBx4 Drib2LangBx4 RobinLangBx4 Robin2LangBx4 Robin3LangBx4 BinanceLangBx4 CoinbaseLangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('ChaseLangBx4 BoamerLangBx4 Green3LangBx4 PaypalLangBx4 BarclayLangBx4 Coinbase2LangBx4 WhiteLangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('Banres3LangBx4 Ria1LangBx4 Ria2LangBx4 WestunLangBx4 Sofi1LangBx4 Sofi2LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('CblueLangBx4 Ponce1LangBx4 Ponce2LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('Chase2LangBx4 Boamer2LangBx4 CitiLangBx4 Banre1LangBx4 Banre4LangBx4 Green4LangBx4 Barclay2LangBx4 Drib3LangBx4 Robin4LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('Chase3LangBx4 Binance2LangBx4 Coinbase3LangBx4 Westun2LangBx4 Citi2LangBx4 Citi3LangBx4 Ria3LangBx4 China2LangBx4');
       $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').removeClass('Bank0LangBx4 Bank1LangBx4 Bank2LangBx4 Bank3LangBx4 Bank4LangBx4 Bank5LangBx4 Bank6LangBx4 Bank7LangBx4');

       $('.SermXX').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.SermXX').removeClass('redserm2x4 blueserm2x4 blue3serm2x4 blue1serm2x4 redserm2x4 red2serm2x4');
       $('.SermXX').removeClass('red3serm2x4 red4serm2x4 blue22serm2x4 blue2serm2x4 orangeserm2x4');
       $('.SermXX').removeClass('navyserm2x4 banresserm2x4 Banres2serm2x4 ponceserm2x4  greenserm2x4 green2serm2x4');
       $('.SermXX').removeClass('liBlueserm2x4 yellowserm2x4 liBlue2serm2x4 MedBlueserm2x4 Blackserm2x4');
       $('.SermXX').removeClass('Dribserm2x4 Drib2serm2x4 Robinserm2x4 Robin2serm2x4 Robin3serm2x4 Binanceserm2x4 Coinbaseserm2x4');
       $('.SermXX').removeClass('Chaseserm2x4 Boamerserm2x4 Green3serm2x4 Paypalserm2x4 Barclayserm2x4 Coinbase2serm2x4 Whiteserm2x4');
       $('.SermXX').removeClass('Banres3serm2x4 Ria1serm2x4 Ria2serm2x4 Westunserm2x4 Sofi1serm2x4 Sofi2serm2x4');
       $('.SermXX').removeClass('Cblueserm2x4 Ponce1serm2x4 Ponce2serm2x4');
       $('.SermXX').removeClass('Chase2serm2x4 Boamer2serm2x4 Citiserm2x4 Banre1serm2x4 Banre4serm2x4 Green4serm2x4 Barclay2serm2x4 Drib3serm2x4 Robin4serm2x4');
       $('.SermXX').removeClass('Chase3serm2x4 Binance2serm2x4 Coinbase3serm2x4 Westun2serm2x4 Citi2serm2x4 Citi3serm2x4 Ria3serm2x4 China2serm2x4');
       $('.SermXX').removeClass('Bank0serm2x4 Bank1serm2x4 Bank2serm2x4 Bank3serm2x4 Bank4serm2x4 Bank5serm2x4 Bank6serm2x4 Bank7serm2x4');



       $('.BlankLogox4').removeClass('redBlankLogox4 blueBlankLogox4 blue3BlankLogox4 blue1BlankLogox4 redBlankLogox4 red2BlankLogox4');
       $('.BlankLogox4').removeClass('red3BlankLogox4 red4BlankLogox4 blue22BlankLogox4 blue2BlankLogox4 orangeBlankLogox4');
       $('.BlankLogox4').removeClass('navyBlankLogox4 banresBlankLogox4 Banres2BlankLogox4 ponceBlankLogox4 greenBlankLogox4 green2BlankLogox4');
       $('.BlankLogox4').removeClass('liBlueBlankLogox4 yellowBlankLogox4 liBlue2BlankLogox4 MedBlueBlankLogox4 BlackBlankLogox4');
       $('.BlankLogox4').removeClass('DribBlankLogox4 Drib2BlankLogox4 RobinBlankLogox4 Robin2BlankLogox4 Robin3BlankLogox4 BinanceBlankLogox4 CoinbaseBlankLogox4');
       $('.BlankLogox4').removeClass('ChaseBlankLogox4 BoamerBlankLogox4 Green3BlankLogox4 PaypalBlankLogox4 BarclayBlankLogox4 Coinbase2BlankLogox4 WhiteBlankLogox4');
       $('.BlankLogox4').removeClass('Banres3BlankLogox4 Ria1BlankLogox4 Ria2BlankLogox4 WestunBlankLogox4 Sofi1BlankLogox4 Sofi2BlankLogox4');
       $('.BlankLogox4').removeClass('CblueBlankLogox4 Ponce1BlankLogox4 Ponce2BlankLogox4');
       $('.BlankLogox4').removeClass('Chase2BlankLogox4 Boamer2BlankLogox4 CitiBlankLogox4 Banre1BlankLogox4 Banre4BlankLogox4 Green4BlankLogox4 Barclay2BlankLogox4 Drib3BlankLogox4 Robin4BlankLogox4');
       $('.BlankLogox4').removeClass('Chase3BlankLogox4 Binance2BlankLogox4 Coinbase3BlankLogox4 Westun2BlankLogox4 Citi2BlankLogox4 Citi3BlankLogox4 Ria3BlankLogox4 China2BlankLogox4');
       $('.BlankLogox4').removeClass('Bank0BlankLogox4 Bank1BlankLogox4 Bank2BlankLogox4 Bank3BlankLogox4 Bank4BlankLogox4 Bank5BlankLogox4 Bank6BlankLogox4 Bank7BlankLogox4');

       $('.InnerX, .fin2x4').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.InnerX, .fin2x4').removeClass('redInnerx4 blueInnerx4 blue3Innerx4 blue1Innerx4 redInnerx4 red2Innerx4');
       $('.InnerX, .fin2x4').removeClass('red3Innerx4 red4Innerx4 blue22Innerx4 blue2Innerx4 orangeInnerx4');
       $('.InnerX, .fin2x4').removeClass('navyInnerx4 banresInnerx4 Banres2Innerx4 ponceInnerx4  greenInnerx4 green2Innerx4');
       $('.InnerX, .fin2x4').removeClass('liBlueInnerx4 yellowInnerx4 liBlue2Innerx4 MedBlueInnerx4 BlackInnerx4');
       $('.InnerX, .fin2x4').removeClass('DribInnerx4 Drib2Innerx4 RobinInnerx4 Robin2Innerx4 Robin3Innerx4 BinanceInnerx4 CoinbaseInnerx4');
       $('.InnerX, .fin2x4').removeClass('ChaseInnerx4 BoamerInnerx4 Green3Innerx4 PaypalInnerx4 BarclayInnerx4 Coinbase2Innerx4 WhiteInnerx4');
       $('.InnerX, .fin2x4').removeClass('Banres3Innerx4 Ria1Innerx4 Ria2Innerx4 WestunInnerx4 Sofi1Innerx4 Sofi2Innerx4 CblueInnerx4');
       $('.InnerX, .fin2x4').removeClass('Ponce1Innerx4 Ponce2Innerx4');
       $('.InnerX, .fin2x4').removeClass('Chase2Innerx4 Boamer2Innerx4 CitiInnerx4 Banre1Innerx4 Banre4Innerx4 Green4Innerx4 Barclay2Innerx4 Drib3Innerx4 Robin4Innerx4');
       $('.InnerX, .fin2x4').removeClass('Chase3Innerx4 Binance2Innerx4 Coinbase3Innerx4 Westun2Innerx4 Citi2Innerx4 Citi3Innerx4 Ria3Innerx4 China2Innerx4');
       $('.InnerX, .fin2x4').removeClass('Bank0Innerx4 Bank1Innerx4 Bank2Innerx4 Bank3Innerx4 Bank4Innerx4 Bank5Innerx4 Bank6Innerx4 Bank7Innerx4');
    

       $('.priBtnXX').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.priBtnXX').removeClass('redAcm2x4 blueAcm2x4 blue3Acm2x4 blue1Acm2x4 redAcm2x4 red2Acm2x4');
       $('.priBtnXX').removeClass('red3Acm2x4 red4Acm2x4 blue22Acm2x4 blue2Acm2x4 orangeAcm2x4');
       $('.priBtnXX').removeClass('navyAcm2x4 banresAcm2x4 Banres2Acm2x4 ponceAcm2x4  greenAcm2x4 green2Acm2x4');
       $('.priBtnXX').removeClass('liBlueAcm2x4 yellowAcm2x4 liBlue2Acm2x4 MedBlueAcm2x4 BlackAcm2x4');
       $('.priBtnXX').removeClass('DribAcm2x4 Drib2Acm2x4 RobinAcm2x4 Robin2Acm2x4 Robin3Acm2x4 BinanceAcm2x4 CoinbaseAcm2x4');
       $('.priBtnXX').removeClass('ChaseAcm2x4 BoamerAcm2x4 Green3Acm2x4 PaypalAcm2x4 BarclayAcm2x4 Coinbase2Acm2x4 WhiteAcm2x4');
       $('.priBtnXX').removeClass('Banres3Acm2x4 Ria1Acm2x4 Ria2Acm2x4 WestunAcm2x4 Sofi1Acm2x4 Sofi2Acm2x4 CblueAcm2x4 Ponce1Acm2x4 Ponce2Acm2x4');
       $('.priBtnXX').removeClass('Chase2Acm2x4 Boamer2Acm2x4 CitiAcm2x4 Banre1Acm2x4 Banre4Acm2x4 Green4Acm2x4 Barclay2Acm2x4 Drib3Acm2x4 Robin4Acm2x4');
       $('.priBtnXX').removeClass('Chase3Acm2x4 Binance2Acm2x4 Coinbase3Acm2x4 Westun2Acm2x4 Citi2Acm2x4 Citi3Acm2x4 Ria3Acm2x4 China2Acm2x4');
       $('.priBtnXX').removeClass('Bank0Acm2x4 Bank1Acm2x4 Bank2Acm2x4 Bank3Acm2x4 Bank4Acm2x4 Bank5Acm2x4 Bank6Acm2x4 Bank7Acm2x4');


       $('.AccValuesx4').removeClass('redAccValuesx4  blueAccValuesx4  blue3AccValuesx4  blue1AccValuesx4  redAccValuesx4  red2AccValuesx4 ');
       $('.AccValuesx4').removeClass('red3AccValuesx4  red4AccValuesx4  blue22AccValuesx4  blue2AccValuesx4  orangeAccValuesx4 ');
       $('.AccValuesx4').removeClass('navyAccValuesx4  banresAccValuesx4  Banres2AccValuesx4 ponceAccValuesx4   greenAccValuesx4  green2AccValuesx4 ');
       $('.AccValuesx4').removeClass('liBlueAccValuesx4  liBlue2AccValuesx4  yellowAccValuesx4  MedBlueAccValuesx4  MedAccValuesx4  BlackAccValuesx4 ');
       $('.AccValuesx4').removeClass('DribAccValuesx4  Drib2AccValuesx4  RobinAccValuesx4  Robin2AccValuesx4  Robin3AccValuesx4  BinanceAccValuesx4  CoinbaseAccValuesx4 ');
       $('.AccValuesx4').removeClass('ChaseAccValuesx4  BoamerAccValuesx4  Green3AccValuesx4  PaypalAccValuesx4  BarclayAccValuesx4 Coinbase2AccValuesx4 WhiteAccValuesx4');
       $('.AccValuesx4').removeClass('Banres3AccValuesx4 Ria1AccValuesx4 Ria2AccValuesx4 WestunAccValuesx4 Sofi1AccValuesx4 Sofi2AccValuesx4');
       $('.AccValuesx4').removeClass('CblueAccValuesx4 Ponce1AccValuesx4 Ponce2AccValuesx4');
       $('.AccValuesx4').removeClass('Chase2AccValuesx4 Boamer2AccValuesx4 CitiAccValuesx4 Banre1AccValuesx4 Banre4AccValuesx4 Green4AccValuesx4 Barclay2AccValuesx4 Drib3AccValuesx4 Robin4AccValuesx4');
       $('.AccValuesx4').removeClass('Chase3AccValuesx4 Binance2AccValuesx4 Coinbase3AccValuesx4 Westun2AccValuesx4 Citi2AccValuesx4 Citi3AccValuesx4 Ria3AccValuesx4 China2AccValuesx4');
       $('.AccValuesx4').removeClass('Bank0AccValuesx4 Bank1AccValuesx4 Bank2AccValuesx4 Bank3AccValuesx4 Bank4AccValuesx4 Bank5AccValuesx4 Bank6AccValuesx4 Bank7AccValuesx4');



       $('.qty2x4').removeClass('redQty2x4  blueQty2x4  blue3Qty2x4  blue1Qty2x4  redQty2x4  red2Qty2x4 ');
       $('.qty2x4').removeClass('red3Qty2x4  red4Qty2x4  blue22Qty2x4  blue2Qty2x4  orangeQty2x4 ');
       $('.qty2x4').removeClass('navyQty2x4  banresQty2x4  Banres2Qty2x4 ponceQty2x4   greenQty2x4  green2Qty2x4 ');
       $('.qty2x4').removeClass('liBlueQty2x4  liBlue2Qty2x4  yellowQty2x4  MedBlueQty2x4  MedQty2x4  BlackQty2x4 ');
       $('.qty2x4').removeClass('DribQty2x4  Drib2Qty2x4  RobinQty2x4  Robin2Qty2x4  Robin3Qty2x4  BinanceQty2x4  CoinbaseQty2x4 ');
       $('.qty2x4').removeClass('ChaseQty2x4  BoamerQty2x4  Green3Qty2x4  PaypalQty2x4  BarclayQty2x4 Coinbase2Qty2x4 WhiteQty2x4');
       $('.qty2x4').removeClass('Banres3Qty2x4 Ria1Qty2x4 Ria2Qty2x4 WestunQty2x4 Sofi1Qty2x4 Sofi2Qty2x4 CblueQty2x4 Ponce1Qty2x4 Ponce2Qty2x4');
       $('.qty2x4').removeClass('Chase2Qty2x4 Boamer2Qty2x4 CitiQty2x4 Banre1Qty2x4 Banre4Qty2x4 Green4Qty2x4 Barclay2Qty2x4 Drib3Qty2x4 Robin4Qty2x4');
       $('.qty2x4').removeClass('Chase3Qty2x4 Binance2Qty2x4 Coinbase3Qty2x4 Westun2Qty2x4 Citi2Qty2x4 Citi3Qty2x4 Ria3Qty2x4 China2Qty2x4');
       $('.qty2x4').removeClass('Bank0Qty2x4 Bank1Qty2x4 Bank2Qty2x4 Bank3Qty2x4 Bank4Qty2x4 Bank5Qty2x4 Bank6Qty2x4 Bank7Qty2x4');
    

       $('.qtyvalue2x4').removeClass('redQtyvalue2x4  blueQtyvalue2x4  blue3Qtyvalue2x4  blue1Qtyvalue2x4  redQtyvalue2x4  red2Qtyvalue2x4 ');
       $('.qtyvalue2x4').removeClass('red3Qtyvalue2x4  red4Qtyvalue2x4  blue22Qtyvalue2x4  blue2Qtyvalue2x4  orangeQtyvalue2x4 ');
       $('.qtyvalue2x4').removeClass('navyQtyvalue2x4  banresQtyvalue2x4  Banres2Qtyvalue2x4 ponceQtyvalue2x4   greenQtyvalue2x4  green2Qtyvalue2x4 ');
       $('.qtyvalue2x4').removeClass('liBlueQtyvalue2x4  liBlue2Qtyvalue2x4  yellowQtyvalue2x4  MedBlueQtyvalue2x4  MedQtyvalue2x4  BlackQtyvalue2x4 ');
       $('.qtyvalue2x4').removeClass('DribQtyvalue2x4  Drib2Qtyvalue2x4  RobinQtyvalue2x4  Robin2Qtyvalue2x4  Robin3Qtyvalue2x4  BinanceQtyvalue2x4  CoinbaseQtyvalue2x4 ');
       $('.qtyvalue2x4').removeClass('ChaseQtyvalue2x4  BoamerQtyvalue2x4  Green3Qtyvalue2x4  PaypalQtyvalue2x4  BarclayQtyvalue2x4 Coinbase2Qtyvalue2x4 WhiteQtyvalue2x4');
       $('.qtyvalue2x4').removeClass('Banres3Qtyvalue2x4 Ria1Qtyvalue2x4 Ria2Qtyvalue2x4 WestunQtyvalue2x4 Sofi1Qtyvalue2x4 Sofi2Qtyvalue2x4');
       $('.qtyvalue2x4').removeClass('CblueQtyvalue2x4 Ponce1Qtyvalue2x4 Ponce2Qtyvalue2x4');
       $('.qtyvalue2x4').removeClass('Chase2Qtyvalue2x4 Boamer2Qtyvalue2x4 CitiQtyvalue2x4 Banre1Qtyvalue2x4 Banre4Qtyvalue2x4 Green4Qtyvalue2x4 Barclay2Qtyvalue2x4 Drib3Qtyvalue2x4 Robin4Qtyvalue2x4');
       $('.qtyvalue2x4').removeClass('Chase3Qtyvalue2x4 Binance2Qtyvalue2x4 Coinbase3Qtyvalue2x4 Westun2Qtyvalue2x4 Citi2Qtyvalue2x4 Citi3Qtyvalue2x4 Ria3Qtyvalue2x4 China2Qtyvalue2x4');
       $('.qtyvalue2x4').removeClass('Bank0Qtyvalue2x4 Bank1Qtyvalue2x4 Bank2Qtyvalue2x4 Bank3Qtyvalue2x4 Bank4Qtyvalue2x4 Bank5Qtyvalue2x4 Bank6Qtyvalue2x4 Bank7Qtyvalue2x4');
      


       $('.amountx4').removeClass('redAmountx4  blueAmountx4  blue3Amountx4  blue1Amountx4  redAmountx4  red2Amountx4');
       $('.amountx4').removeClass('red3Amountx4  red4Amountx4  blue22Amountx4  blue2Amountx4  orangeAmountx4 ');
       $('.amountx4').removeClass('navyAmountx4  banresAmountx4  Banres2Amountx4 ponceAmountx4   greenAmountx4  green2Amountx4 ');
       $('.amountx4').removeClass('liBlueAmountx4  liBlue2Amountx4  yellowAmountx4  MedBlueAmountx4  MedAmountx4  BlackAmountx4 ');
       $('.amountx4').removeClass('DribAmountx4  Drib2Amountx4  RobinAmountx4  Robin2Amountx4  Robin3Amountx4  BinanceAmountx4  CoinbaseAmountx4 ');
       $('.amountx4').removeClass('ChaseAmountx4  BoamerAmountx4  Green3Amountx4  PaypalAmountx4  BarclayAmountx4 Coinbase2Amountx4 WhiteAmountx4');
       $('.amountx4').removeClass('Banres3Amountx4 Ria1Amountx4 Ria2Amountx4 WestunAmountx4 Sofi1Amountx4 Sofi2Amountx4');
       $('.amountx4').removeClass('CblueAmountx4 Ponce1Amountx4 Ponce2Amountx4');
       $('.amountx4').removeClass('Chase2Amountx4 Boamer2Amountx4 CitiAmountx4 Banre1Amountx4 Banre4Amountx4 Green4Amountx4 Barclay2Amountx4 Drib3Amountx4 Robin4Amountx4');
       $('.amountx4').removeClass('Chase3Amountx4 Binance2Amountx4 Coinbase3Amountx4 Westun2Amountx4 Citi2Amountx4 Citi3Amountx4 Ria3Amountx4 China2Amountx4');
       $('.amountx4').removeClass('Bank0Amountx4 Bank1Amountx4 Bank2Amountx4 Bank3Amountx4 Bank4Amountx4 Bank5Amountx4 Bank6Amountx4 Bank7Amountx4');



       $('.NumPadx4').removeClass('btn-danger btn-success btn-default btn-primary btn-warning');
       $('.NumPadx4').removeClass('redNumColorsx4 blueNumColorsx4 blue3NumColorsx4 blue1NumColorsx4 redNumColorsx4 red2NumColorsx4');
       $('.NumPadx4').removeClass('red3NumColorsx4 red4NumColorsx4 blue22NumColorsx4 blue2NumColorsx4 orangeNumColorsx4');
       $('.NumPadx4').removeClass('navyNumColorsx4 banresNumColorsx4 Banres2NumColorsx4 ponceNumColorsx4 greenNumColorsx4 green2NumColorsx4');
       $('.NumPadx4').removeClass('liBlueNumColorsx4 yellowNumColorsx4 yellowNumColorsx4 BlackNumColorsx4');
       $('.NumPadx4').removeClass('DribNumColorsx4 Drib2NumColorsx4 RobinNumColorsx4 Robin2NumColorsx4 Robin3NumColorsx4 BinanceNumColorsx4 CoinbaseNumColorsx4');
       $('.NumPadx4').removeClass('ChaseNumColorsx4 BoamerNumColorsx4 Green3NumColorsx4 PaypalNumColorsx4 BarclayNumColorsx4 Coinbase2NumColorsx4 WhiteNumColorsx4');
       $('.NumPadx4').removeClass('Banres3NumColorsx4 Ria1NumColorsx4 Ria2NumColorsx4 WestunNumColorsx4 Sofi1NumColorsx4 Sofi2NumColorsx4');
       $('.NumPadx4').removeClass('CblueNumColorsx4 Ponce1NumColorsx4 Ponce2NumColorsx4');
       $('.NumPadx4').removeClass('Chase2NumColorsx4 Boamer2NumColorsx4 CitiNumColorsx4 Banre1NumColorsx4 Banre4NumColorsx4 Green4NumColorsx4 Barclay2NumColorsx4 Drib3NumColorsx4 Robin4NumColorsx4');
       $('.NumPadx4').removeClass('Chase3NumColorsx4 Binance2NumColorsx4 Coinbase3NumColorsx4 Westun2NumColorsx4 Citi2NumColorsx4 Citi3NumColorsx4 Ria3NumColorsx4 China2NumColorsx4');
       $('.NumPadx4').removeClass('Bank0NumColorsx4 Bank1NumColorsx4 Bank2NumColorsx4 Bank3NumColorsx4 Bank4NumColorsx4 Bank5NumColorsx4 Bank6NumColorsx4 Bank7NumColorsx4');



       $('.finBx4').removeClass('redFinBx4 blueFinBx4 blue3FinBx4 blue1FinBx4 redFinBx4 red2FinBx4');
       $('.finBx4').removeClass('red3FinBx4 red4FinBx4 blue22FinBx4 blue2FinBx4 orangeFinBx4');
       $('.finBx4').removeClass('navyFinBx4 banresFinBx4 Banres2FinBx4 ponceFinBx4  greenFinBx4 green2FinBx4');
       $('.finBx4').removeClass('liBlueFinBx4 liBlue2FinBx4 yellowFinBx4 MedBlueFinBx4 BlackFinBx4');
       $('.finBx4').removeClass('DribFinBx4 Drib2FinBx4 RobinFinBx4 Robin2FinBx4 Robin3FinBx4 BinanceFinBx4 CoinbaseFinBx4');
       $('.finBx4').removeClass('ChaseFinBx4 BoamerFinBx4 Green3FinBx4 PaypalFinBx4 BarclayFinBx4 Coinbase2FinBx4 WhiteFinBx4');
       $('.finBx4').removeClass('Banres3FinBx4 Ria1FinBx4 Ria2FinBx4 WestunFinBx4 Sofi1FinBx4 Sofi2FinBx4 CblueFinBx4 Ponce1FinBx4 Ponce2FinBx4');
       $('.finBx4').removeClass('Chase2FinBx4 Boamer2FinBx4 CitiFinBx4 Banre1FinBx4 Banre4FinBx4 Green4FinBx4 Barclay2FinBx4 Drib3FinBx4 Robin4FinBx4');
       $('.finBx4').removeClass('Chase3FinBx4 Binance2FinBx4 Coinbase3FinBx4 Westun2FinBx4 Citi2FinBx4 Citi3FinBx4 Ria3FinBx4 China2FinBx4');
       $('.finBx4').removeClass('Bank0FinBx4 Bank1FinBx4 Bank2FinBx4 Bank3FinBx4 Bank4FinBx4 Bank5FinBx4 Bank6FinBx4 Bank7FinBx4');




$('#english2x4').addClass('btn-default');
// $('.lan2Blankx4').hide();


});







///////////////////////////////////

$('#ATM1Machinex4').click(function(){
$('.lan2Blankx4').hide();
  console.log('buttonsx4 are ' + screenTypex4);

screenTypex4 = 'Machinex4';

// $('.Colorsx4').show();
// $('.ColorsMOBIx4').hide();


});




$('#ATM1Mobilex4').click(function(){
$('.lan2Blankx4').hide();
screenTypex4 = 'Mobilex4';


// $('.Colorsx4').hide();
// $('.ColorsMOBIx4').show();

console.log('buttonsx4 are ' + screenTypex4);


$('.Netx1').show();

});





 // $('#Withdraw4x1').show();
 // $('#ScanWithdrawx1').hide();
 
////////////////////////////////////








 $('.ui2x4').addClass('blueui2x4 ui2x4');


   $('.TapBarx4').hide();
   $('.TapBar2x4').show(); 
   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $('.FintechTapbar2').addClass('FFTSelectedModelx4'); 

     
      $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4, .Bottomlan2MOBIx4').addClass('bluelan2x4');
         $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blueLangBx4');
         $('.langBx4, .langBMOBIx4').addClass('blueLangBx4');
         // $('.lan2MOBIx4 > label').addClass('bluelan2BMOBI');


      $('.BlankLogox4').addClass('blueBlankLogox4');
      $('.SermXX').addClass('blueserm2x4');


      $('.InnerX, .fin2x4').addClass('blueInnerx4');


      $('.ser2x4').addClass('blueSer2x4');
 
      $('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('blueAcm2x4');


      $('.AccValuesx4').addClass('blueAccValuesx4');


      $('.tof2x4').addClass('blueTof2x4');


      $('.qty2x4').addClass('blueQty2x4');
          $('.qtyvalue2x4').addClass('qtyvalue2x4 blueQtyvalue2x4');
          $('.amountx4').addClass('amountx4 blueAmountx4');


       $('.NumPadx4').addClass('blueNumColorsx4');






            // 
            $('.finBx4').addClass('blueFinBx4');
                 
      $('#english2x4').addClass('btn-default');

      // $('.AllFinModels').hide();




$('.AssetSymbolx4').addClass('AssetSymbolMachinex4');
$('.AssetNamex4').addClass('AssetNameMachinex4');
$('.IhaveThisMuchx4').addClass('IhaveThisMuchMachinex4');
$('.MyAssetinRealValx4').addClass('MyAssetinRealValMachinex4');
$('.CurrentPricex4').addClass('CurrentPriceMachinex4');

screenTypex4 = "Machinex4";






// $('.LanBgroupMOBIX4, .LanBgroupX4').hide();
$('.Hellox4').show();

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $('.TapBarFinTech3').addClass('FFTSelectedModelx4');







/*  Pri Blue color*/



   $('#priBluex4, #priBlueMOBIx4').click(function(){
    
    $('.ui2x4').addClass('blueui2x4 ui2x4');


      // $('.lan2x4').removeClass('redlan2x4 liBluelan2x4 navylan2x4 yellowlan2x4');
      // $('.lan2x4').removeClass('greenlan2x4 orangelan2x4 banreslan2x4 blue2lan2x4');
      

      $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('bluelan2x4');


         
         $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blueLangBx4');
         $('#english2x4').addClass('active');

          
          $('.langBx4, .langBMOBIx4').addClass('blueLangBx4');


$('.BlankLogox4').addClass('blueBlankLogox4');
$('.SermXX').addClass('blueserm2x4');

      
      $('.InnerX, .fin2x4').addClass('blueInnerx4');


       $('.priBtnXX').addClass('btn-default');
       $('.priBtnXX').addClass('blueAcm2x4');

       $('.AccValuesx4').addClass('blueAccValuesx4');



        $('.ser2x4').attr('class', 'ser2x4');
        $('.ser2x4').addClass('blueSer2x4');


        
        $('.tof2x4').attr('class', 'tof2x4');
        $('.tof2x4').addClass('blueTof2x4');



        $('.qty2x4').addClass('blueQty2x4');



        
            

       $('.NumPadx4').addClass('blueNumColorsx4 btn-primary');



       

            
       $('.finBx4').addClass('blueFinBx4');

 





});




////////////////////////////  Cblue /////////////////////////////////////



   $('#Cbluex4, #CblueMOBIx4').click(function(){
    
    $('.ui2x4').addClass('Cblueui2x4 ui2x4');


      // $('.lan2x4').removeClass('redlan2x4 liCbluelan2x4 navylan2x4 yellowlan2x4');
      // $('.lan2x4').removeClass('greenlan2x4 orangelan2x4 banreslan2x4 Cblue2lan2x4');
      

      $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Cbluelan2x4');


         
         $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('CblueLangBx4');
         $('#english2x4').addClass('active');

          
          $('.langBx4, .langBMOBIx4').addClass('CblueLangBx4');


$('.BlankLogox4').addClass('CblueBlankLogox4');
$('.SermXX').addClass('Cblueserm2x4');

      
      $('.InnerX, .fin2x4').addClass('CblueInnerx4');


       $('.priBtnXX').addClass('btn-default');
       $('.priBtnXX').addClass('CblueAcm2x4');

       $('.AccValuesx4').addClass('CblueAccValuesx4');



        $('.ser2x4').attr('class', 'ser2x4');
        $('.ser2x4').addClass('CblueSer2x4');


        
        $('.tof2x4').attr('class', 'tof2x4');
        $('.tof2x4').addClass('CblueTof2x4');



        $('.qty2x4').addClass('CblueQty2x4');


  

       $('.NumPadx4').addClass('CblueNumColorsx4 btn-primary');



       

            
       



});



////////////////////////////  Cblue /////////////////////////////////////













                                                /* Blue Color */



   $('#blue1x4, #blue1MOBIx4').click(function(){
    
    $('.ui2x4').addClass('blue1ui2x4 ui2x4');

      $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('blue1lan2x4');

         
         $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blue1LangBx4');
         $('#english2x4').addClass('active');

          
          $('.langBx4, .langBMOBIx4').addClass('blue1LangBx4');


$('.BlankLogox4').addClass('blue1BlankLogox4');
$('.SermXX').addClass('blue1serm2x4');


      
      $('.InnerX, .fin2x4').addClass('blue1Innerx4');


$('.priBtnXX').addClass('btn-primary');
       $('.priBtnXX').addClass('blue1Acm2x4');

       $('.AccValuesx4').addClass('blue1AccValuesx4');


        $('.ser2x4').attr('class', 'ser2x4');
        $('.ser2x4').addClass('blue1Ser2x4');

        
        $('.tof2x4').attr('class', 'tof2x4');
        $('.tof2x4').addClass('blue1Tof2x4');



      
        $('.qty2x4').addClass('blue1Qty2x4');




       $('.NumPadx4').addClass('blueNumColorsx4 btn-primary');

           



       



            
            $('.finBx4').addClass('blue1FinBx4');

 



$('#english2x4, #spanish2, #chinesse2', '#russian2x4', '#german2x4', '#hindi2', '#french2', '#arabic2').click(function(){



});


});







/*  Dark Blue color*/



   $('#DarkBluex4, #DarkBlueMOBIx4').click(function(){
    
    $('.ui2x4').addClass('blueui2x4 ui2x4');


      // $('.lan2x4').removeClass('redlan2x4 liBluelan2x4 navylan2x4 yellowlan2x4');
      // $('.lan2x4').removeClass('greenlan2x4 orangelan2x4 banreslan2x4 blue2lan2x4');

      $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('bluelan2x4');

         
         $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blueLangBx4');
         $('#english2x4').addClass('active');

          
          $('.langBx4, .langBMOBIx4').addClass('blueLangBx4');


$('.BlankLogox4').addClass('blue3BlankLogox4');
$('.SermXX').addClass('blue3serm2x4');


      
      $('.InnerX, .fin2x4').addClass('blue3Innerx4');



$('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('blue3Acm2x4');

$('.AccValuesx4').addClass('blue3AccValuesx4');

        $('.ser2x4').attr('class', 'ser2x4');
        $('.ser2x4').addClass('blueSer2x4');


        
        $('.tof2x4').attr('class', 'tof2x4');
        $('.tof2x4').addClass('blueTof2x4');



     
        $('.qty2x4').addClass('blueQty2x4');



        
            

       $('.NumPadx4').addClass('blueNumColorsx4 btn-primary');

         

   

            
            $('.finBx4').addClass('blue3FinBx4');

 



 





});









// //////////////////////////////////////////////////////
$('#redx4, #redMOBIx4').click(function(){
   
   $('.ui2x4').addClass('redui2x4 ui2x4');



        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('redlan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('redLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('redLangBx4');


$('.BlankLogox4').addClass('redBlankLogox4');
$('.SermXX').addClass('redserm2x4');

      
      $('.InnerX, .fin2x4').addClass('redInnerx4');



$('.priBtnXX').addClass('btn-danger');
      $('.priBtnXX').addClass('redAcm2x4');


$('.AccValuesx4').addClass('redAccValuesx4');


      
        $('.qty2x4').addClass('redQty2x4');



       $('.NumPadx4').addClass('redNumColorsx4 btn-danger');

         

        


            
            $('.finBx4').addClass('redFinBx4');

 








  


});


//////////   Red 2 ui2x4 ////////////////////////////////

$('#red2x4, #red2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('red22ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('red2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('red2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('red2LangBx4');

            $('.BlankLogox4').addClass('red2BlankLogox4');
            $('.SermXX').addClass('red2serm2x4');


   $('.priBtnXX').addClass('btn-danger');   
      $('.InnerX, .fin2x4').addClass('red2Innerx4');



      $('.priBtnXX').addClass('red2Acm2x4');

$('.AccValuesx4').addClass('red2AccValuesx4');





    
        $('.qty2x4').addClass('red2Qty2x4');

           


       $('.NumPadx4').addClass('red2NumColorsx4 btn-danger');

         

        
    

            
            $('.finBx4').addClass('red2FinBx4');

 


});







//////////   Red 3 ui2x4 ////////////////////////////////

$('#red3x4, #red3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('red22ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('red2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('red3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('red3LangBx4');

            $('.BlankLogox4').addClass('red3BlankLogox4');
            $('.SermXX').addClass('red3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('red3Innerx4');


$('.priBtnXX').addClass('btn-danger');
      $('.priBtnXX').addClass('red3Acm2x4');


$('.AccValuesx4').addClass('red3AccValuesx4');

        $('.ser2x4').attr('class', 'ser2x4');
        $('.ser2x4').addClass('red2Ser2x4');



    
        $('.qty2x4').addClass('red3Qty2x4');


           


       $('.NumPadx4').addClass('red3NumColorsx4 btn-danger');

         

        

            
            $('.finBx4').addClass('red3FinBx4');

 

});

////////////////////////////////


//////////   Red 4 ui2x4 ////////////////////////////////

$('#red4x4, #red4MOBIx4').click(function(){

    
    $('.ui2x4').addClass('red22ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('red2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('red4LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('red4LangBx4');

            
            $('.BlankLogox4').addClass('red4BlankLogox4');
            $('.SermXX').addClass('red4serm2x4');

      
      $('.InnerX, .fin2x4').addClass('red4Innerx4');


$('.priBtnXX').addClass('btn-danger');
      $('.priBtnXX').addClass('red4Acm2x4');


$('.AccValuesx4').addClass('red4AccValuesx4');

        $('.qty2x4').addClass('red4Qty2x4');

 

       $('.NumPadx4').addClass('red4NumColorsx4 btn-danger');

         

        
  

            
            $('.finBx4').addClass('red4FinBx4');

 

});










//////////////////////          Light Blue color




$('#lightBlue2x4, #lightBlue2MOBIx4').click(function(){
    
    $('.ui2x4').addClass('MedBlueui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('MedBluelan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('MedBlueLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('MedBlueLangBx4');


$('.BlankLogox4').addClass('MedBlueBlankLogox4');
$('.SermXX').addClass('MedBlueserm2x4');

      
      $('.InnerX, .fin2x4').addClass('MedBlueInnerx4');



$('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('MedBlueAcm2x4');


$('.AccValuesx4').addClass('MedAccValuesx4');


        $('.qty2x4').addClass('MedBlueQty2x4');



           


       $('.NumPadx4').addClass('blueNumColorsx4 btn-primary');  

         


        
   

            
            $('.finBx4').addClass('MedBlueFinBx4');

 








});







//////////////////////          White Blue color




$('#lightBluex4, #lightBlueMOBIx4').click(function(){
    
    $('.ui2x4').addClass('liBlueui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('liBluelan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('liBlueLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('liBlueLangBx4');


$('.BlankLogox4').addClass('liBlueBlankLogox4');
$('.SermXX').addClass('liBlueserm2x4');


      
      $('.InnerX, .fin2x4').addClass('liBlueInnerx4');



$('.priBtnXX').addClass('btn-primary');
      $('.priBtnXX').addClass('liBlue2Acm2x4');


$('.AccValuesx4').addClass('liBlueAccValuesx4');



        $('.qty2x4').addClass('liBlueQty2x4');

 

       $('.NumPadx4').addClass('liBlueNumColorsx4 btn-primary');

         


        
   

            
            $('.finBx4').addClass('liBlue2FinBx4');

 







});








//////////////////////          Navy color




$('#navyBluex4, #navyBlueMOBIx4').click(function(){
   
   $('.ui2x4').addClass('navyui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('navylan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('navyLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('navyLangBx4');


$('.BlankLogox4').addClass('navyBlankLogox4');
$('.SermXX').addClass('navyserm2x4');


      
      $('.InnerX, .fin2x4').addClass('navyInnerx4');

$('.priBtnXX').addClass('btn-primary');
      $('.priBtnXX').addClass('navyAcm2x4');


$('.AccValuesx4').addClass('navyAccValuesx4');

 
        $('.qty2x4').addClass('navyQty2x4');



           
       $('.NumPadx4').addClass('navyNumColorsx4 btn-primary');

         

        


            
            $('.finBx4').addClass('navyFinBx4');

 

  




});






//////////////////////          Navy color




$('#navy2Bluex4, #navy2BlueMOBIx4').click(function(){
   
   $('.ui2x4').addClass('navy2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('navylan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('navyLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('navyLangBx4');




$('.BlankLogox4').addClass('navyBlankLogox4');
$('.SermXX').addClass('navyserm2x4');


      
      $('.InnerX, .fin2x4').addClass('navyInnerx4');


$('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('navyAcm2x4');


$('.AccValuesx4').addClass('navyAccValuesx4');



        $('.qty2x4').addClass('navyQty2x4');




       $('.NumPadx4').addClass('navyNumColorsx4 btn-primary');

         


        
 

            
            $('.finBx4').addClass('navyFinBx4');

 


  




});







//////////////////////          green Color




$('#greenx4, #greenMOBIx4').click(function(){

    
    $('.ui2x4').addClass('greenui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('greenlan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('greenLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('greenLangBx4');


$('.priBtnXX').addClass('btn-default');

$('.BlankLogox4').addClass('greenBlankLogox4');
$('.SermXX').addClass('greenserm2x4');


      
      $('.InnerX, .fin2x4').addClass('greenInnerx4');



      $('.priBtnXX').addClass('greenAcm2x4');

$('.AccValuesx4').addClass('greenAccValuesx4');


        $('.qty2x4').addClass('greenQty2x4');



           

       $('.NumPadx4').addClass('greenNumColorsx4 btn-success');

         


        


            
            $('.finBx4').addClass('greenFinBx4');

 



});











//////////////////////          light green Color




$('#green2x4, #green2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('green2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('green2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('green2LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('green2LangBx4');


$('.BlankLogox4').addClass('green2BlankLogox4');
$('.SermXX').addClass('green2serm2x4');


      
      $('.InnerX, .fin2x4').addClass('green2Innerx4');


 
$('.priBtnXX').addClass('btn-success');
      $('.priBtnXX').addClass('green2Acm2x4');

$('.AccValuesx4').addClass('green2AccValuesx4');



        $('.qty2x4').addClass('green2Qty2x4');



           



       $('.NumPadx4').addClass('green2NumColorsx4 btn-success');

         

        


            
            $('.finBx4').addClass('green2FinBx4');

 




});











//////////////////////          Orange Color




$('#orangex4, #orangeMOBIx4').click(function(){

    
    $('.ui2x4').addClass('orangeui2x4 ui2x4');

        
         
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('orangelan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('orangeLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('orangeLangBx4');



$('.BlankLogox4').addClass('orangeBlankLogox4');
$('.SermXX').addClass('orangeserm2x4');


      
      $('.InnerX, .fin2x4').addClass('orangeInnerx4');


$('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('orangeAcm2x4');


$('.AccValuesx4').addClass('orangeAccValuesx4');


        $('.qty2x4').addClass('orangeQty2x4');

     


       $('.NumPadx4').addClass('orangeNumColorsx4 btn-warning');

         


        


            
            $('.finBx4').addClass('orangeFinBx4');

 


  


});






//////////////////////          BanResColor  //////////////////////    




$('#banresx4, #banresMOBIx4').click(function(){

    
    $('.ui2x4').addClass('banresui2x4 ui2x4');

      
       
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('banreslan2x4');

           
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('banresLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('banresLangBx4');


$('.BlankLogox4').addClass('banresBlankLogox4');
$('.SermXX').addClass('banresserm2x4');


      
      $('.InnerX, .fin2x4').addClass('banresInnerx4');

$('.priBtnXX').addClass('btn-success');
      $('.priBtnXX').addClass('banresAcm2x4');

$('.AccValuesx4').addClass('banresAccValuesx4');



        $('.qty2x4').addClass('banresQty2x4');


           


       $('.NumPadx4').addClass('banresNumColorsx4 btn-primary');

         

        


            
            $('.finBx4').addClass('banresFinBx4');

 



  


});




//////////////////////          Banre1  //////////////////////    




$('#Banre1x4, #Banre1MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Banre1ui2x4 ui2x4');

      
       
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Banre1lan2x4');

           
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Banre1LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('Banre1LangBx4');


$('.BlankLogox4').addClass('Banre1BlankLogox4');
$('.SermXX').addClass('Banre1serm2x4');


      
      $('.InnerX, .fin2x4').addClass('Banre1Innerx4');

$('.priBtnXX').addClass('btn-primary');
      $('.priBtnXX').addClass('Banre1Acm2x4');

$('.AccValuesx4').addClass('Banre1AccValuesx4');



        $('.qty2x4').addClass('Banre1Qty2x4');



           


       $('.NumPadx4').addClass('Banre1NumColorsx4 btn-primary');

         

        


            
            $('.finBx4').addClass('Banre1FinBx4');

 


});




/////////////////////////////Banre1////////////////////////////////////////









//////////////////////          Banres2Color  //////////////////////    




$('#Banres2x4, #Banres2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Banres2ui2x4 ui2x4');

      
       
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Banres2lan2x4');

           
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Banres2LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('Banres2LangBx4');


$('.BlankLogox4').addClass('Banres2BlankLogox4');
$('.SermXX').addClass('Banres2serm2x4');


      
      $('.InnerX, .fin2x4').addClass('Banres2Innerx4');

$('.priBtnXX').addClass('btn-primary');
      $('.priBtnXX').addClass('Banres2Acm2x4');

$('.AccValuesx4').addClass('Banres2AccValuesx4');



        $('.qty2x4').addClass('Banres2Qty2x4');



           


       $('.NumPadx4').addClass('Banres2NumColorsx4 btn-primary');

         

        


            
            $('.finBx4').addClass('Banres2FinBx4');

 



  


});




/////////////////////////////Banres3////////////////////////////////////////





$('#Banres3x4, #Banres3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Banres3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Banres3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Banres3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Banres3LangBx4');


$('.BlankLogox4').addClass('Banres3BlankLogox4');
$('.SermXX').addClass('Banres3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Banres3Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Banres3Acm2x4');

$('.AccValuesx4').addClass('Banres3AccValuesx4');



        $('.qty2x4').addClass('Banres3Qty2x4');



           
    



       $('.NumPadx4').addClass('Banres3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Banres3FinBx4');

 



});




/////////////////////////////Banres3////////////////////////////////////////


//////////////////////      Banre4  //////////////////////    




$('#Banre4x4, #Banre4MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Banre4ui2x4 ui2x4');

      
       
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Banre4lan2x4');

           
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Banre4LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('Banre4LangBx4');


$('.BlankLogox4').addClass('Banre4BlankLogox4');
$('.SermXX').addClass('Banre4serm2x4');


      
      $('.InnerX, .fin2x4').addClass('Banre4Innerx4');

$('.priBtnXX').addClass('btn-primary');
      $('.priBtnXX').addClass('Banre4Acm2x4');

$('.AccValuesx4').addClass('Banre4AccValuesx4');



        $('.qty2x4').addClass('Banre4Qty2x4');



           


       $('.NumPadx4').addClass('Banre4NumColorsx4 btn-primary');

         

        


            
            $('.finBx4').addClass('Banre4FinBx4');

 



  


});




/////////////////////////////Banre4////////////////////////////////////////











/////////////////////////Ponce/////////////////////////


$('#poncex4, #ponceMOBIx4').click(function(){

    
    $('.ui2x4').addClass('ponceui2x4 ui2x4');

      
       
         $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('poncelan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('ponceLangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('ponceLangBx4');



$('.BlankLogox4').addClass('ponceBlankLogox4');
$('.SermXX').addClass('ponceserm2x4');

      
      $('.InnerX, .fin2x4').addClass('ponceInnerx4');

$('.priBtnXX').addClass('btn-default');
      $('.priBtnXX').addClass('ponceAcm2x4');

$('.AccValuesx4').addClass('ponceAccValuesx4');


        $('.qty2x4').addClass('ponceQty2x4');



           

       $('.NumPadx4').addClass('ponceNumColorsx4 btn-default');

         

        
            
            $('.finBx4').addClass('ponceFinBx4');

 


  


});









//////////////////////          Blue 2 Color









$('#blue2x4, #blue2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('blue2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('blue2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blue2LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('blue2LangBx4');


$('.BlankLogox4').addClass('blue2BlankLogox4');
$('.SermXX').addClass('blue2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('blue2Innerx4');



$('.priBtnXX').addClass('btn-danger');
      $('.priBtnXX').addClass('blue2Acm2x4');

$('.AccValuesx4').addClass('blue2AccValuesx4');


        $('.qty2x4').addClass('blue2Qty2x4');



           


       $('.NumPadx4').addClass('blue2NumColorsx4 btn-primary');

         


        



            
            $('.finBx4').addClass('blue2FinBx4');

 



});





///////////////////Citi white///////////////////////////////////////////
               
$('#blue22x4, #blue22MOBIx4').click(function(){

    
    $('.ui2x4').addClass('blue22ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('blue22lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('blue22LangBx4');
            $('#english2x4').addClass('active');

            
            $('.langBx4, .langBMOBIx4').addClass('blue22LangBx4');


$('.BlankLogox4').addClass('blue22BlankLogox4');
$('.SermXX').addClass('blue22serm2x4');


      
      $('.InnerX, .fin2x4').addClass('blue22Innerx4');


$('.priBtnXX').addClass('btn-danger');
      $('.priBtnXX').addClass('blue22Acm2x4');


$('.AccValuesx4').addClass('blue22AccValuesx4');



        $('.qty2x4').addClass('blue22Qty2x4');



           



       $('.NumPadx4').addClass('blue22NumColorsx4 btn-primary');

         


        


            
            $('.finBx4').addClass('blue22FinBx4');

 



  


});


/////////////////////////////////////////////////////////////////////





$('#yellowx4, #yellowMOBIx4').click(function(){

    
    $('.ui2x4').addClass('yellowui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('yellowlan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('yellowLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('yellowLangBx4');


$('.BlankLogox4').addClass('yellowBlankLogox4');
$('.SermXX').addClass('yellowserm2x4');

      
      $('.InnerX, .fin2x4').addClass('yellowInnerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('yellowAcm2x4');

$('.AccValuesx4').addClass('yellowAccValuesx4');



        $('.qty2x4').addClass('yellowQty2x4');



           
    



       $('.NumPadx4').addClass('yellowNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('yellowFinBx4');

 



});




/////////////////////////////Black////////////////////////////////////////





$('#Blackx4, #BlackMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Blackui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Blacklan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BlackLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BlackLangBx4');


$('.BlankLogox4').addClass('BlackBlankLogox4');
$('.SermXX').addClass('Blackserm2x4');

      
      $('.InnerX, .fin2x4').addClass('BlackInnerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('BlackAcm2x4');

$('.AccValuesx4').addClass('BlackAccValuesx4');



        $('.qty2x4').addClass('BlackQty2x4');



           
  

       $('.NumPadx4').addClass('BlackNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('BlackFinBx4');

 



});



/////////////////////////////White////////////////////////////////////////





$('#Whitex4, #WhiteMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Whiteui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Whitelan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('WhiteLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('WhiteLangBx4');


$('.BlankLogox4').addClass('WhiteBlankLogox4');
$('.SermXX').addClass('Whiteserm2x4');

      
      $('.InnerX, .fin2x4').addClass('WhiteInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('WhiteAcm2x4');

$('.AccValuesx4').addClass('WhiteAccValuesx4');



        $('.qty2x4').addClass('WhiteQty2x4');



           
    



       $('.NumPadx4').addClass('WhiteNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('WhiteFinBx4');

 



});


/////////////////////////////White////////////////////////////////////////







/////////////////////////////Drib////////////////////////////////////////





$('#Dribx4, #DribMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Dribui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Driblan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('DribLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('DribLangBx4');


$('.BlankLogox4').addClass('DribBlankLogox4');
$('.SermXX').addClass('Dribserm2x4');

      
      $('.InnerX, .fin2x4').addClass('DribInnerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('DribAcm2x4');

$('.AccValuesx4').addClass('DribAccValuesx4');



        $('.qty2x4').addClass('DribQty2x4');



           
    



       $('.NumPadx4').addClass('DribNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('DribFinBx4');

 



});



/////////////////////////////Drib////////////////////////////////////////





$('#Dribx4, #DribMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Dribui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Blacklan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BlackLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BlackLangBx4');


$('.BlankLogox4').addClass('DribBlankLogox4');
$('.SermXX').addClass('Dribserm2x4');

      
      $('.InnerX, .fin2x4').addClass('DribInnerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('DribAcm2x4');

$('.AccValuesx4').addClass('DribAccValuesx4');



        $('.qty2x4').addClass('DribQty2x4');


            



       $('.NumPadx4').addClass('DribNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('DribFinBx4');

 



});

// //////////////////////////// Drib ////////////////////////////////////


/////////////////////////////Drib2////////////////////////////////////////





$('#Drib2x4, #Drib2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Drib2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Drib2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Drib2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Drib2LangBx4');


$('.BlankLogox4').addClass('Drib2BlankLogox4');
$('.SermXX').addClass('Drib2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Drib2Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Drib2Acm2x4');


$('.AccValuesx4').addClass('Drib2AccValuesx4');


        $('.qty2x4').addClass('Drib2Qty2x4');



           
    



       $('.NumPadx4').addClass('Drib2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Drib2FinBx4');

 



});







// ///////////////////////////////////////////////////////////////////////////


/////////////////////////////Drib3////////////////////////////////////////





$('#Drib3x4, #Drib3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Drib3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Drib3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Drib3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Drib3LangBx4');


$('.BlankLogox4').addClass('Drib3BlankLogox4');
$('.SermXX').addClass('Drib3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Drib3Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Drib3Acm2x4');


$('.AccValuesx4').addClass('Drib3AccValuesx4');


        $('.qty2x4').addClass('Drib3Qty2x4');



           
    



       $('.NumPadx4').addClass('Drib3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Drib3FinBx4');

 



});





// ///////////////////////////////////////////////////////////////////////////





/////////////////////////////Robin////////////////////////////////////////





$('#Robinx4, #RobinMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Robinui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Blacklan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BlackLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BlackLangBx4');


$('.BlankLogox4').addClass('RobinBlankLogox4');
$('.SermXX').addClass('Robinserm2x4');

      
      $('.InnerX, .fin2x4').addClass('RobinInnerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('RobinAcm2x4');

$('.AccValuesx4').addClass('RobinAccValuesx4');



        $('.qty2x4').addClass('RobinQty2x4');



           
    



       $('.NumPadx4').addClass('RobinNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('RobinFinBx4');

 



});



/////////////////////////////Robin2////////////////////////////////////////





$('#Robin2x4, #Robin2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Robin2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Robin2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Robin2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Robin2LangBx4');


$('.BlankLogox4').addClass('Robin2BlankLogox4');
$('.SermXX').addClass('Robin2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Robin2Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Robin2Acm2x4');



$('.AccValuesx4').addClass('Robin2AccValuesx4');


        $('.qty2x4').addClass('Robin2Qty2x4');



           
    



       $('.NumPadx4').addClass('Robin2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Robin2FinBx4');

 



});



/////////////////////////////Robin3////////////////////////////////////////









$('#Robin3x4, #Robin3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Robin3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Robin3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Robin3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Robin3LangBx4');


$('.BlankLogox4').addClass('Robin3BlankLogox4');
$('.SermXX').addClass('Robin3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Robin3Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Robin3Acm2x4');

$('.AccValuesx4').addClass('Robin3AccValuesx4');



        $('.qty2x4').addClass('Robin3Qty2x4');



           
    



       $('.NumPadx4').addClass('Robin3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Robin3FinBx4');

 



});












/////////////////////////////Robin4////////////////////////////////////////





$('#Robin4x4, #Robin4MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Robin4ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Robin4lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Robin4LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Robin4LangBx4');


$('.BlankLogox4').addClass('Robin4BlankLogox4');
$('.SermXX').addClass('Robin4serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Robin4Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Robin4Acm2x4');

$('.AccValuesx4').addClass('Robin4AccValuesx4');



        $('.qty2x4').addClass('Robin4Qty2x4');



           
    



       $('.NumPadx4').addClass('Robin4NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Robin4FinBx4');

 



});






/////////////////////////////Sofi1////////////////////////////////////////





$('#Sofi1x4, #Sofi1MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Sofi1ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Sofi1lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Sofi1LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Sofi1LangBx4');


$('.BlankLogox4').addClass('Sofi1BlankLogox4');
$('.SermXX').addClass('Sofi1serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Sofi1Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Sofi1Acm2x4');

$('.AccValuesx4').addClass('Sofi1AccValuesx4');



        $('.qty2x4').addClass('Sofi1Qty2x4');



           
    



       $('.NumPadx4').addClass('Sofi1NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Sofi1FinBx4');

 



});



/////////////////////////////Sofi1////////////////////////////////////////






/////////////////////////////Sofi2////////////////////////////////////////





$('#Sofi2x4, #Sofi2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Sofi2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Sofi2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Sofi2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Sofi2LangBx4');


$('.BlankLogox4').addClass('Sofi2BlankLogox4');
$('.SermXX').addClass('Sofi2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Sofi2Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Sofi2Acm2x4');

$('.AccValuesx4').addClass('Sofi2AccValuesx4');



        $('.qty2x4').addClass('Sofi2Qty2x4');



           
    



       $('.NumPadx4').addClass('Sofi2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Sofi2FinBx4');

 



});



/////////////////////////////Sofi2////////////////////////////////////////




/////////////////////////////Binance////////////////////////////////////////





$('#Binancex4, #BinanceMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Binanceui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Blacklan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BinanceLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BlackLangBx4');


$('.BlankLogox4').addClass('BinanceBlankLogox4');
$('.SermXX').addClass('Binanceserm2x4');

      
      $('.InnerX, .fin2x4').addClass('BinanceInnerx4');




$('.priBtnXX').addClass('btn-warning');
$('.priBtnXX').addClass('BinanceAcm2x4');

$('.AccValuesx4').addClass('BinanceAccValuesx4');



        $('.qty2x4').addClass('BinanceQty2x4');



           
    

       $('.NumPadx4').addClass('BinanceNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('BinanceFinBx4');

 



});





/////////////////////////////Binance2////////////////////////////////////////


$('#Binance2x4, #Binance2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Binance2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Binance2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Binance2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BlackLangBx4');


$('.BlankLogox4').addClass('Binance2BlankLogox4');
$('.SermXX').addClass('Binance2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Binance2Innerx4');




$('.priBtnXX').addClass('btn-warning');
$('.priBtnXX').addClass('Binance2Acm2x4');

$('.AccValuesx4').addClass('Binance2AccValuesx4');



        $('.qty2x4').addClass('Binance2Qty2x4');



           
    

       $('.NumPadx4').addClass('Binance2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Binance2FinBx4');

 



});



/////////////////////////////Coinbase////////////////////////////////////////










/////////////////////////////Coinbase////////////////////////////////////////






$('#Coinbasex4, #CoinbaseMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Coinbaseui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Coinbaselan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('CoinbaseLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('CoinbaseLangBx4');


$('.BlankLogox4').addClass('CoinbaseBlankLogox4');
$('.SermXX').addClass('Coinbaseserm2x4');

      
      $('.InnerX, .fin2x4').addClass('CoinbaseInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('CoinbaseAcm2x4');

$('.AccValuesx4').addClass('CoinbaseAccValuesx4');



        $('.qty2x4').addClass('CoinbaseQty2x4');


           
    



       $('.NumPadx4').addClass('CoinbaseNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('CoinbaseFinBx4');

 



});




/////////////////////////////Coinbase2////////////////////////////////////////





$('#Coinbase2x4, #Coinbase2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Coinbase2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Coinbase2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Coinbase2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Coinbase2LangBx4');


$('.BlankLogox4').addClass('Coinbase2BlankLogox4');
$('.SermXX').addClass('Coinbase2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Coinbase2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Coinbase2Acm2x4');

$('.AccValuesx4').addClass('Coinbase2AccValuesx4');



        $('.qty2x4').addClass('Coinbase2Qty2x4');


           
    



       $('.NumPadx4').addClass('Coinbase2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Coinbase2FinBx4');

 



});


// /////////////////////////Coinbase2///////////////////////////////////////////////////////////



/////////////////////////////Coinbase3////////////////////////////////////////





$('#Coinbase3x4, #Coinbase3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Coinbase3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Coinbase3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Coinbase3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Coinbase3LangBx4');


$('.BlankLogox4').addClass('Coinbase3BlankLogox4');
$('.SermXX').addClass('Coinbase3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Coinbase3Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Coinbase3Acm2x4');

$('.AccValuesx4').addClass('Coinbase3AccValuesx4');



        $('.qty2x4').addClass('Coinbase3Qty2x4');


           
    



       $('.NumPadx4').addClass('Coinbase3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Coinbase3FinBx4');

 



});


// /////////////////////////Coinbase3///////////////////////////////////////////////////////////







/////////////////////////////Chase////////////////////////////////////////





$('#Chasex4, #ChaseMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Chaseui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Chaselan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('ChaseLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('ChaseLangBx4');


$('.BlankLogox4').addClass('ChaseBlankLogox4');
$('.SermXX').addClass('Chaseserm2x4');

      
      $('.InnerX, .fin2x4').addClass('ChaseInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('ChaseAcm2x4');

$('.AccValuesx4').addClass('ChaseAccValuesx4');



        $('.qty2x4').addClass('ChaseQty2x4');



           
    



       $('.NumPadx4').addClass('ChaseNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('ChaseFinBx4');

 



});







/////////////////////////////Chase2////////////////////////////////////////





$('#Chase2x4, #Chase2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Chase2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Chase2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Chase2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Chase2LangBx4');


$('.BlankLogox4').addClass('Chase2BlankLogox4');
$('.SermXX').addClass('Chase2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Chase2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Chase2Acm2x4');

$('.AccValuesx4').addClass('Chase2AccValuesx4');



        $('.qty2x4').addClass('Chase2Qty2x4');



           
    



       $('.NumPadx4').addClass('Chase2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Chase2FinBx4');

 



});




/////////////////////////////Chase2////////////////////////////////////////


/////////////////////////////Chase3////////////////////////////////////////





$('#Chase3x4, #Chase3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Chase3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Chase3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Chase3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Chase3LangBx4');


$('.BlankLogox4').addClass('Chase3BlankLogox4');
$('.SermXX').addClass('Chase3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Chase3Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Chase3Acm2x4');

$('.AccValuesx4').addClass('Chase3AccValuesx4');



        $('.qty2x4').addClass('Chase3Qty2x4');



           
    



       $('.NumPadx4').addClass('Chase3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Chase3FinBx4');

 



});




/////////////////////////////Chase3////////////////////////////////////////


/////////////////////////////Boamer////////////////////////////////////////





$('#Boamerx4, #BoamerMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Boamerui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Boamerlan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BoamerLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BoamerLangBx4');


$('.BlankLogox4').addClass('BoamerBlankLogox4');
$('.SermXX').addClass('Boamerserm2x4');

      
      $('.InnerX, .fin2x4').addClass('BoamerInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('BoamerAcm2x4');


$('.AccValuesx4').addClass('BoamerAccValuesx4');

 
        $('.qty2x4').addClass('BoamerQty2x4');



           
    



       $('.NumPadx4').addClass('BoamerNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('BoamerFinBx4');

 



});





 

/////////////////////////////Boamer2////////////////////////////////////////





$('#Boamer2x4, #Boamer2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Boamer2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Boamer2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Boamer2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Boamer2LangBx4');


$('.BlankLogox4').addClass('Boamer2BlankLogox4');
$('.SermXX').addClass('Boamer2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Boamer2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Boamer2Acm2x4');


$('.AccValuesx4').addClass('Boamer2AccValuesx4');

 
        $('.qty2x4').addClass('Boamer2Qty2x4');



           
    



       $('.NumPadx4').addClass('Boamer2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Boamer2FinBx4');

 



});







/////////////////////////////Citi////////////////////////////////////////





$('#Citix4, #CitiMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Citiui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Citilan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('CitiLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('CitiLangBx4');


$('.BlankLogox4').addClass('CitiBlankLogox4');
$('.SermXX').addClass('Citiserm2x4');

      
      $('.InnerX, .fin2x4').addClass('CitiInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('CitiAcm2x4');


$('.AccValuesx4').addClass('CitiAccValuesx4');

 
        $('.qty2x4').addClass('CitiQty2x4');



           
    



       $('.NumPadx4').addClass('CitiNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('CitiFinBx4');

 



});


/////////////////////////////Citi////////////////////////////////////////


/////////////////////////////Citi2////////////////////////////////////////





$('#Citi2x4, #Citi2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Citi2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Citi2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Citi2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Citi2LangBx4');


$('.BlankLogox4').addClass('Citi2BlankLogox4');
$('.SermXX').addClass('Citi2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Citi2Innerx4');




$('.priBtnXX').addClass('btn-danger');
$('.priBtnXX').addClass('Citi2Acm2x4');


$('.AccValuesx4').addClass('Citi2AccValuesx4');

 
        $('.qty2x4').addClass('Citi2Qty2x4');



           
    



       $('.NumPadx4').addClass('Citi2NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('Citi2FinBx4');

 



});


/////////////////////////////Citi2////////////////////////////////////////



/////////////////////////////Citi3////////////////////////////////////////





$('#Citi3x4, #Citi3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Citi3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Citi3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Citi3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Citi3LangBx4');


$('.BlankLogox4').addClass('Citi3BlankLogox4');
$('.SermXX').addClass('Citi3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Citi3Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Citi3Acm2x4');


$('.AccValuesx4').addClass('Citi3AccValuesx4');

 
        $('.qty2x4').addClass('Citi3Qty2x4');



           
    



       $('.NumPadx4').addClass('Citi3NumColorsx4 btn-deafult');

         
        

            
            $('.finBx4').addClass('Citi3FinBx4');

 



});


/////////////////////////////Citi3////////////////////////////////////////





/////////////////////////////Green3////////////////////////////////////////





$('#Green3x4, #Green3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Green3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Green3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Green3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Green3LangBx4');


$('.BlankLogox4').addClass('Green3BlankLogox4');
$('.SermXX').addClass('Green3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Green3Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Green3Acm2x4');


$('.AccValuesx4').addClass('Green3AccValuesx4');



        $('.qty2x4').addClass('Green3Qty2x4');



           
    



       $('.NumPadx4').addClass('Green3NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Green3FinBx4');

 



});


/////////////////////////////Green4////////////////////////////////////////





$('#Green4x4, #Green4MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Green4ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Green4lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Green4LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Green4LangBx4');


$('.BlankLogox4').addClass('Green4BlankLogox4');
$('.SermXX').addClass('Green4serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Green4Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Green4Acm2x4');


$('.AccValuesx4').addClass('Green4AccValuesx4');



        $('.qty2x4').addClass('Green4Qty2x4');



           
    



       $('.NumPadx4').addClass('Green4NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Green4FinBx4');

 



});














/////////////////////////////Paypal////////////////////////////////////////





$('#Paypalx4, #PaypalMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Paypalui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Paypallan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('PaypalLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('PaypalLangBx4');


$('.BlankLogox4').addClass('PaypalBlankLogox4');
$('.SermXX').addClass('Paypalserm2x4');

      
      $('.InnerX, .fin2x4').addClass('PaypalInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('PaypalAcm2x4');

$('.AccValuesx4').addClass('PaypalAccValuesx4');



        $('.qty2x4').addClass('PaypalQty2x4');



           
    



       $('.NumPadx4').addClass('PaypalNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('PaypalFinBx4');

 



});




/////////////////////////////Barclay////////////////////////////////////////





$('#Barclayx4, #BarclayMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Barclayui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Barclaylan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('BarclayLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('BarclayLangBx4');


$('.BlankLogox4').addClass('BarclayBlankLogox4');
$('.SermXX').addClass('Barclayserm2x4');

      
      $('.InnerX, .fin2x4').addClass('BarclayInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('BarclayAcm2x4');

$('.AccValuesx4').addClass('BarclayAccValuesx4');



        $('.qty2x4').addClass('BarclayQty2x4');



           
    



       $('.NumPadx4').addClass('BarclayNumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('BarclayFinBx4');

 



});




/////////////////////////////Barclay2////////////////////////////////////////





$('#Barclay2x4, #Barclay2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Barclay2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Barclay2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Barclay2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Barclay2LangBx4');


$('.BlankLogox4').addClass('Barclay2BlankLogox4');
$('.SermXX').addClass('Barclay2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Barclay2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Barclay2Acm2x4');

$('.AccValuesx4').addClass('Barclay2AccValuesx4');



        $('.qty2x4').addClass('Barclay2Qty2x4');



           
    



       $('.NumPadx4').addClass('Barclay2NumColorsx4 btn-warning');

         
        

            
            $('.finBx4').addClass('Barclay2FinBx4');

 



});



/////////////////////////////Barclay2////////////////////////////////////////



/////////////////////////////Ria1////////////////////////////////////////





$('#Ria1x4, #Ria1MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Ria1ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Ria1lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Ria1LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Ria1LangBx4');


$('.BlankLogox4').addClass('Ria1BlankLogox4');
$('.SermXX').addClass('Ria1serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Ria1Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Ria1Acm2x4');

$('.AccValuesx4').addClass('Ria1AccValuesx4');



        $('.qty2x4').addClass('Ria1Qty2x4');



           
    



       $('.NumPadx4').addClass('Ria1NumColorsx4 btn-warning');

         
        

            
            // $('.finBx4').addClass('Ria1FinBx4');

 



});


/////////////////////////////Ria1////////////////////////////////////////

/////////////////////////////Ria2////////////////////////////////////////





$('#Ria2x4, #Ria2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Ria2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Ria2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Ria2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Ria2LangBx4');


$('.BlankLogox4').addClass('Ria2BlankLogox4');
$('.SermXX').addClass('Ria2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Ria2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Ria2Acm2x4');

$('.AccValuesx4').addClass('Ria2AccValuesx4');



        $('.qty2x4').addClass('Ria2Qty2x4');



           
    



       $('.NumPadx4').addClass('Ria2NumColorsx4 btn-warning');

         
        

            
            // $('.finBx4').addClass('Ria2FinBx4');

 



});


/////////////////////////////Ria2//////////////////////////////////////////


/////////////////////////////Ria3////////////////////////////////////////





$('#Ria3x4, #Ria3MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Ria3ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Ria3lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Ria3LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Ria3LangBx4');


$('.BlankLogox4').addClass('Ria3BlankLogox4');
$('.SermXX').addClass('Ria3serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Ria3Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Ria3Acm2x4');

$('.AccValuesx4').addClass('Ria3AccValuesx4');



        $('.qty2x4').addClass('Ria3Qty2x4');



           
    



       $('.NumPadx4').addClass('Ria3NumColorsx4 btn-warning');

         
        

            
            // $('.finBx4').addClass('Ria3FinBx4');

 
});




/////////////////////////////Ria3//////////////////////////////////////////



/////////////////////////////Westun////////////////////////////////////////





$('#Westunx4, #WestunMOBIx4').click(function(){

    
    $('.ui2x4').addClass('Westunui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Westunlan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('WestunLangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('WestunLangBx4');


$('.BlankLogox4').addClass('WestunBlankLogox4');
$('.SermXX').addClass('Westunserm2x4');

      
      $('.InnerX, .fin2x4').addClass('WestunInnerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('WestunAcm2x4');

$('.AccValuesx4').addClass('WestunAccValuesx4');



        $('.qty2x4').addClass('WestunQty2x4');



           
    



       $('.NumPadx4').addClass('WestunNumColorsx4 btn-warning');

         
        

            
            // $('.finBx4').addClass('WestunFinBx4');

 



});


/////////////////////////////Westun////////////////////////////////////////





/////////////////////////////Ponce1////////////////////////////////////////





$('#Ponce1x4, #Ponce1MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Ponce1ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Ponce1lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Ponce1LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Ponce1LangBx4');


$('.BlankLogox4').addClass('Ponce1BlankLogox4');
$('.SermXX').addClass('Ponce1serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Ponce1Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Ponce1Acm2x4');

$('.AccValuesx4').addClass('Ponce1AccValuesx4');



        $('.qty2x4').addClass('Ponce1Qty2x4');


           
    



       $('.NumPadx4').addClass('Ponce1NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('Ponce1FinBx4');

 



});




/////////////////////////////Ponce1////////////////////////////////////////




/////////////////////////////Ponce2////////////////////////////////////////





$('#Ponce2x4, #Ponce2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Ponce2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Ponce2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Ponce2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Ponce2LangBx4');


$('.BlankLogox4').addClass('Ponce2BlankLogox4');
$('.SermXX').addClass('Ponce2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Ponce2Innerx4');




$('.priBtnXX').addClass('btn-primary');
$('.priBtnXX').addClass('Ponce2Acm2x4');

$('.AccValuesx4').addClass('Ponce2AccValuesx4');



        $('.qty2x4').addClass('Ponce2Qty2x4');


           
    



       $('.NumPadx4').addClass('Ponce2NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('Ponce2FinBx4');

 



});




/////////////////////////////Ponce2////////////////////////////////////////

/////////////////////////////China2////////////////////////////////////////





$('#China2x4, #China2MOBIx4').click(function(){

    
    $('.ui2x4').addClass('China2ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('China2lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('China2LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('China2LangBx4');


$('.BlankLogox4').addClass('China2BlankLogox4');
$('.SermXX').addClass('China2serm2x4');

      
      $('.InnerX, .fin2x4').addClass('China2Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('China2Acm2x4');

$('.AccValuesx4').addClass('China2AccValuesx4');



        $('.qty2x4').addClass('China2Qty2x4');


           
    



       $('.NumPadx4').addClass('China2NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('China2FinBx4');

 



});




/////////////////////////////China2////////////////////////////////////////



/////////////////////////////Bank0////////////////////////////////////////





$('#Bank0x4, #Bank0MOBIx4').click(function(){


  FinBackGphoto = false;
  console.log("FinBackGphoto is = " + FinBackGphoto);

    
    $('.ui2x4').addClass('Bank0ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Bank0lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Bank0LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Bank0LangBx4');


$('.BlankLogox4').addClass('Bank0BlankLogox4');
$('.SermXX').addClass('Bank0serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Bank0Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Bank0Acm2x4');

$('.AccValuesx4').addClass('Bank0AccValuesx4');



        $('.qty2x4').addClass('Bank0Qty2x4');


           
    



       $('.NumPadx4').addClass('Bank0NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('Bank0FinBx4');

 



});




/////////////////////////////Bank0////////////////////////////////////////


/////////////////////////////Bank1////////////////////////////////////////





$('#Bank1x4, #Bank1MOBIx4').click(function(){

    
    $('.ui2x4').addClass('Bank1ui2x4 ui2x4');

       
        
        $('.lan2x4, .lan2MOBIx4, .Bottomlan2MOBIx4').addClass('Bank1lan2x4');

            
            $('.HelloNamex4, .CCAx4, .Menux4, .langBx4, .langBMOBIx4').addClass('Bank1LangBx4');
            $('#english2x4').addClass('active');


            
            $('.langBx4, .langBMOBIx4').addClass('Bank1LangBx4');


$('.BlankLogox4').addClass('Bank1BlankLogox4');
$('.SermXX').addClass('Bank1serm2x4');

      
      $('.InnerX, .fin2x4').addClass('Bank1Innerx4');




$('.priBtnXX').addClass('btn-default');
$('.priBtnXX').addClass('Bank1Acm2x4');

$('.AccValuesx4').addClass('Bank1AccValuesx4');



        $('.qty2x4').addClass('Bank1Qty2x4');


           
    



       $('.NumPadx4').addClass('Bank1NumColorsx4 btn-default');

         
        

            
            $('.finBx4').addClass('Bank1FinBx4');

 



});




/////////////////////////////Bank1////////////////////////////////////////








// ////////////////     MOBI       ////////////////////////////////
// ////////////////////////////////////////////////////////////////




// ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////







$('#ATM1Mobilex4').click(function(){

screenTypex4 = 'Mobilex4';

 $('.ui2x4').addClass('ui2MOBIx4 uiXXMOBI');

 $('.RetCashChecksx4').hide();


$('.TapBarx4').addClass('TapBarMOBIx4');
$('.TapBar1x4').addClass('TapBar1MOBIx4');
$('.TapBar2x4').addClass('TapBar2MOBIx4');
$('.TapBar3x4').addClass('TapBar3MOBIx4');
$('.TapBar3ax4').addClass('TapBar3aMOBIx4');
$('.TapBar4x4').addClass('TapBar4MOBIx4');
$('.TapBar5x4').addClass('TapBar5MOBIx4');
$('.TapBar6x4').addClass('TapBar6MOBIx4');
$('.TapBar6ax4').addClass('TapBar6aMOBIx4');
$('.TapBar7x4').addClass('TapBar7MOBIx4');
$('.TapBar7ax4').addClass('TapBar7aMOBIx4');
$('.BottomTapBarx4').addClass('BottomTapBarMOBIx4');



$('.langBMOBIMachinex4').addClass('langBMOBIMachineMOBIx4');
$('.HelloPhotoRightx4').addClass('HelloPhotoRightMOBIx4');
$('.MenuRightx4').addClass('MenuRightMOBIx4');
$('.CCARightx4').addClass('CCARightMOBIx4');
$('.CCAbalRightx4').addClass('CCAbalRightMOBIx4');
$('.BottomTapbarButtonsx4').addClass('BottomTapbarButtonsMOBIx4');
$('.labelText0x4').addClass('labelText0MOBIx4');
$('.CCA4x4').addClass('CCA4MOBIx4')
$('.CCAbal4x4').addClass('CCAbal4MOBIx4');
$('.FriendMemo2x4').addClass('FriendMemo2MOBIx4');
$('.CCA5x4').addClass('CCA5MOBIx4');
$('.CCAbal5x4').addClass('CCAbal5MOBIx4');

$('.HelloPhoto5x4').addClass('HelloPhoto5MOBIx4');
$('.Menu5x4').addClass('Menu5MOBIx4');













      // $('.lan2').addClass('lan2MOBI');
      //    $('.langB').addClass('langBMOBI');
      //    $('.langBother').addClass('langBotherMOBI');

$('#atmHomex4').addClass('active');

$('.ServicePanelHeaderx4').addClass('ServicePanelHeaderMOBIx4');
$('.servicePanelParrax4').addClass('servicePanelParraMOBIx4');






        // $('.lan2x4').hide();
         $('.lan2MOBIx4').show();
         $('.lan2MOBIx4').addClass('bluelan2');

         $('.lan2MOBIx4 > label, .lan2MOBI > button').addClass('langBotherMOBI');
         $('#english2x4').addClass('active');


      $('.SermXX').addClass('serm2MOBIx4');
      $('.innerx4').addClass('innerx4 innerMOBIx4');

      $('.serBother').addClass('serBotherMOBI');
       $('.serDropx4').addClass('serDropMOBIx4');
       // $('.serDropx4 > button').addClass('serDropMOBIx4 > button');

       $('.OtherlabelText').addClass('OtherlabelTextMOBI');





      // $('.ser2').addClass('ser2MOBI');
      //    $('.serB').addClass('SerBMOBI');


$('.acm2x4, .acm2x24').css('border-radius', '40px');

$('.acm2x5, .acm2x25, .acm2x7, .acm2x55, .acm2x57').css('border-radius', '30px');



 $('.depositx4').addClass('depositMOBIx4');
 $('.DepositCCx4, .NewDepositCx4').hide();
 $('.DepositCx4').show();
 $('.CaptureDepositx4').show();
 $('.DepositButtonsx4').addClass('DepositButtonsMOBIx4');
 $('.Depositbillsx4').hide();



$('.sm3Buttons').addClass('sm3ButtonsMOBI');
$('.sm4Buttons').addClass('sm4ButtonsMOBI');
$('.sm5Buttons').addClass('sm5ButtonsMOBI');
$('.sm5Buttons').addClass('sm5ButtonsMOBI');
$('.sm7Buttons').addClass('sm7ButtonsMOBI');
$('.sm2x4').addClass('sm2MOBIx4');
$('.sm2x42').addClass('sm2MOBIx42');


$('.labelTextx24').addClass('labelTextMOBIx24');
$('.labelTextx42').addClass('labelTextMOBIx42');


$('.Serm').addClass('Serm2MOBI');
$('.serm2x2').addClass('serm2MOBIx2');
$('.serm2x3').addClass('serm2MOBIx3');
$('.Serm2x4').addClass('serm2MOBIx4');
$('.serm2x5').addClass('serm2MOBIx5');
$('.serm2x6').addClass('serm2MOBIx6');
$('.serm2x7').addClass('serm2MOBIx7');
$('.serm2x42').addClass('serm2MOBIx42');



$('.innerRightx4').addClass('innerRightMOBIx4');
$('.innerLeftx2').addClass('innerLeftMOBIx2');
$('.innerLeftx4').addClass('innerLeftMOBIx4');
$('.innerLeftx42').addClass('innerLeftMOBIx42');
$('.innerRightx2').addClass('innerRightMOBIx2');
$('.innerLeftx3').addClass('innerLeftMOBIx3');
$('.innerLeftx6').addClass('innerLeftMOBIx6');
$('.innerRightx3').addClass('innerRightMOBIx3');
$('.acm2x4').addClass('acm2MOBIx4');
$('.CoinTypeKPT1').addClass('CoinTypeKPT1MOBI');
$('.CoinnameKPT1').addClass('CoinnameKPT1MOBI');
$('.CoinnameKPT3').addClass('CoinnameKPT3MOBI');
$('.MyCoinsKPT1').addClass('MyCoinsKPT1MOBI');
$('.MyCoinsInUSKPT1').addClass('MyCoinsInUSKPT1MOBI');
$('.CurrentCoinCostInUSKPT1').addClass('CurrentCoinCostInUSKPT1MOBI');
$('.ActivityIconx4').addClass('ActivityIconMOBIx4');
      

$('.ExtraAcm2xx').addClass('ExtraAcm2MOBIxx');
$('.AllAccountsx4, .AllAccountsx24').addClass('AllAccountsMOBIx4');

$('.AllAccountsx1').addClass('AllAccountsMOBIx1');
$('.AllAccountsx2').addClass('AllAccountsMOBIx2');
$('.AllAccountsx3').addClass('AllAccountsMOBIx3');
$('.AllAccountsx4').addClass('AllAccountsMOBIx4');
$('.AllAccountsx13').addClass('AllAccountsMOBIx13');
$('.AllAccountsx14').addClass('AllAccountsMOBIx14');
$('.AllAccountsx15').addClass('AllAccountsMOBIx15');
$('.AllAccountsx55').addClass('AllAccountsMOBIx55');
$('.AllAccountsx57').addClass('AllAccountsMOBIx57');



$('.AccountsX17').addClass('AccountsMOBIX17');
$('.innerRightx17').addClass('innerRightMOBIx17');
$('.acm2x17').addClass('acm2MOBIx17'); 
$('.SymbNamex17').addClass('SymbNameMOBIx17');
$('.CoinTypeKPTx17').addClass('CoinTypeKPTMOBIx17');
$('.CoinnameKPTx17').addClass('CoinnameKPTMOBIx17');
$('.AccAmountx17').addClass('AccAmountMOBIx17');
$('.MyCoinsKPTx17').addClass('MyCoinsKPTMOBIx17');
$('.Statsx17').addClass('StatsMOBIx17');


$('.AccountsX27').addClass('AccountsMOBIX27');
$('.innerRightx27').addClass('innerRightMOBIx27');
$('.acm2Buttonsx27').addClass('acm2ButtonsMOBIx27');
$('.acm2x27').addClass('acm2MOBIx27');
$('.SymbNamex27').addClass('SymbNameMOBIx27');
$('.CoinTypeKPTx27').addClass('CoinTypeKPTMOBIx27');
$('.CoinnameKPTx27').addClass('CoinnameKPTMOBIx27');
$('.AccAmountx27').addClass('AccAmountMOBIx27'); 
$('.MyCoinsKPTx27').addClass('MyCoinsKPTMOBIx27');
$('.Statsx27').addClass('StatsMOBIx27');



$('.AccountsX37').addClass('AccountsMOBIX37');
$('.innerRightx37').addClass('innerRightMOBIx37');
$('.acm2Buttonsx37').addClass('acm2ButtonsMOBIx37');
$('.acm2x37').addClass('acm2MOBIx37');
$('.SymbNamex37').addClass('SymbNameMOBIx37');
$('.CoinTypeKPTx37').addClass('CoinTypeKPTMOBIx37');
$('.CoinnameKPTx37').addClass('CoinnameKPTMOBIx37');
$('.AccAmountx37').addClass('AccAmountMOBIx37');
$('.MyCoinsKPTx37').addClass('MyCoinsKPTMOBIx37'); 
$('.Transactionsx37').addClass('TransactionsMOBIx37');
$('.Statsx37').addClass('StatsMOBIx37');
$('.Statsx37').show();






$('.innerLeftx6c').addClass('innerLeftMOBIx6c');
$('.innerRightx6c').addClass('innerRightMOBIx6c');
$('.sm2x6c').addClass('sm2MOBIx6c');
$('.labelTextx6c').addClass('labelTextMOBIx6c');






$('.NetworthMOBIx6a').addClass('NetworthMOBIx6a');
$('.TotalNetMOBIx6a').addClass('TotalNetMOBIx6a');
$('.NetworthBalMOBIx6a').addClass('NetworthBalMOBIx6a');
$('.CashCreditAssetMOBIx6a').addClass('CashCreditAssetMOBIx6a');
$('.CashCreditAssetBalMOBIx6a').addClass('CashCreditAssetBalMOBIx6a');
$('.sm6ButtonsMOBI6b').addClass('sm6ButtonsMOBI6b');
$('.serm2MOBIx6a').addClass('serm2MOBIx6a');
$('.innerMOBIx6a').addClass('innerMOBIx6a');
$('.innerLeftMOBIx6a').addClass('innerLeftMOBIx6a');
$('.innerRightMOBIx6a').addClass('innerRightMOBIx6a');
$('.sm2MOBIx6a').addClass('sm2MOBIx6a');
$('.acm2MOBIx6a').addClass('acm2MOBIx6a');






$('.NetworthMOBIx6b').addClass('NetworthMOBIx6b');
$('.TotalNetMOBIx6b').addClass('TotalNetMOBIx6b');
$('.NetworthBalMOBIx6b').addClass('NetworthBalMOBIx6b');
$('.CashCreditAssetMOBIx6b').addClass('CashCreditAssetMOBIx6b');
$('.CashCreditAssetBalMOBIx6b').addClass('CashCreditAssetBalMOBIx6b');
$('.sm6ButtonsMOBI6b').addClass('sm6ButtonsMOBI6b');
$('.serm2MOBIx6b').addClass('serm2MOBIx6b');
$('.innerMOBIx6b').addClass('innerMOBIx6b');
$('.innerLeftMOBIx6b').addClass('innerLeftMOBIx6b');
$('.innerRightMOBIx6b').addClass('innerRightMOBIx6b');
$('.sm2MOBIx6b').addClass('sm2MOBIx6b');
$('.acm2MOBIx6b').addClass('acm2MOBIx6b');




$('.NetworthMOBIx6c').addClass('NetworthMOBIx6c');
$('.TotalNetMOBIx6c').addClass('TotalNetMOBIx6c');
$('.NetworthBalMOBIx6c').addClass('NetworthBalMOBIx6c');
$('.CashCreditAssetMOBIx6c').addClass('CashCreditAssetMOBIx6c');
$('.CashCreditAssetBalMOBIx6c').addClass('CashCreditAssetBalMOBIx6c');
$('.sm6cuttonsMOBI6c').addClass('sm6cuttonsMOBI6c');
$('.serm2MOBIx6c').addClass('serm2MOBIx6c');
$('.innerMOBIx6c').addClass('innerMOBIx6c');
$('.innerLeftMOBIx6c').addClass('innerLeftMOBIx6c');
$('.innerRightMOBIx6c').addClass('innerRightMOBIx6c');
$('.sm2MOBIx6c').addClass('sm2MOBIx6c');
$('.acm2MOBIx6c').addClass('acm2MOBIx6c');















      $('.tof2').addClass('tof2MOBIx4');
         $('.tofB').addClass('tofBMOBIx4');
         $('.CurrentSecond1, .CurrentSecond3').css('display', 'block');

$('.feesx4').addClass('feesMOBIx4');
$('.feeInputx4').addClass('feeInputMOBIx4');


      $('.qty2x4').addClass('qty2MOBIx4');
          $('.qtyvalue2x4').addClass('qtyvalue2x4 qtyvalue2MOBIx4');
          $('.amountx4').addClass('amountx4 amountMOBIx4');
            $('.QtyValueCoverx4').addClass('QtyValueCoverMOBIx4');
             $('.PayButtonsBx4').addClass('pyMOBIlabelx4');

$('.payButtonNameandIconx4').addClass('payButtonNameandIconMOBIx4');
$('.payButtonIconx4').addClass('payButtonIconMOBIx4');
$('.PaybuttonNamex4').addClass('PaybuttonNameMOBIx4');
$('.PayButtonValuex4').addClass('PayButtonValueMOBIx4');
$('.PayIcon1x4, .PayIcon3x4').addClass('PayIconMOBIx4');



      $('.backSpacex4').addClass('backSpaceMOBIx4');








      // $('.numV').addClass('NumV');
      $('.NumPadx4').addClass('numVMOBIx4');


      $('.fin2x4').addClass('fin2MOBIx4');






            $('.finBx4').addClass('finBMOBIx4');


          $('.confBack2Yx4').addClass('confBack2Yx4 confBack2YMOBIx4');


      $('.confirm2Yx4, .Scanconfirm2Yx4').addClass('confirm2YMOBIx4');
      $('.back2Yx4, .Scanback2Yx4').addClass('back2YMOBIx4');

$('.addBillx4').addClass('addBillMOBIx4');
$('.schedule2x4').addClass('schedule2MOBIx4');     
$('.closeSer2Panelsx4 ').addClass('closeSer2PanelsMOBIx4');


$('.ServicePanelx4').addClass('servicePanelsMOBIx4');
$('.ServicePanelx4').addClass('servicePanelsMOBIx4 > span');
$('.friendsx4, .DenominatedBillsx4, .Cardx4, .PBillx4, .TLoanx4').addClass('SerPanLabelsMOBIx4');

$('#closeSer2Panelsx4').addClass(' closeSer2PanelsMOBIx4');
$('.Schedulex4').addClass('ScheduleMOBIx4');

$('.Cardx4').addClass('CardMOBIx4');

$('.creditcCardsx4').addClass('CreditcCardsMOBIx4');

$('.lockUnlockCardx4').addClass('lockUnlockCardMOBIx4');


$('.CardLabel').addClass('CardLabelMOBI');
$('.CardLabelStatsx4').addClass('CardLabelStatsMOBIx4');
$('.cardStatsInputx4').addClass('cardStatsInputMOBIx4');
$('.CreditBalMinx4').addClass('CreditBalMinMOBIx4');
$('.CreditBalMinInputx4').addClass('CreditBalMinInputMOBIx4');
$('.CardImputLabelx4').addClass('CardImputLabelMOBIx4');
$('.CardImputx4').addClass('CardImputMOBIx4');
$('.CardLogox4').addClass('CardLogoMOBIx4');




// ///Bill Denomination//////////


$('.billsx4').addClass('billsMOBIx4');
$('.billsButtonx4').addClass('billsButtonMOBIx4');
$('.qtyvalue23x4 ').addClass('qtyvalue23MOBIx4');
$('#billsx4').css('margin-left', '-58px');

$('.SelectBillDenomix4').addClass('SelectBillDenomiMOBIx4 '); 
$('.BillDenomix4').addClass('BillDenomiMOBIx4');
$('.BillDenomiImputLabelx4').addClass('BillDenomiImputLabelMOBIx4');
$('.BillDenomiImputx4').addClass('BillDenomiImputMOBIx4');



// ///Bill Denomination//////////



////quick send

$('.ToggleFriendsMachineHorizx4').hide();

$('.friendsx4').removeClass('friendsMachineHorizx4');
$('.SpecifySendReQAmountx4').removeClass('SpecifySendReQAmountMachineHorizx4');
$('.ContactNamex4').removeClass('ContactNameMachineHorizx4');
$('.MikeBx4').removeClass('MikeBMachineHorizx4');
$('.FriendMemox4 ').removeClass('FriendMemoMachineHorizx4');




$('.SearchScanContactLabelInvoicex4').show('');
$('.servicePanelParratopx4').hide('');
$('.servicePanelParraBottomx4').show('');
$('.friendsx4').addClass('friendsMOBIx4');
$('.friendImputx4').addClass('friendImputMOBIx4');
$('.SpecifySendReQAmountx4').addClass('SpecifySendReQAmountMOBIx4');
$('.friendsSpanx4').addClass('friendsSpanMOBIx4');
$('.SelectFriendx4').addClass('SelectFriendMOBIx4');
$('.SendReqx4').addClass('SendReqMOBIx4');
$('.FriendMemox4').addClass('FriendMemoMOBIx4');
$('.WriteMemox4').addClass('WriteMemoMOBIx4');
$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').addClass('SelectSendOrRequestMOBIx4');
$('.ContactNamex4').addClass('ContactNameMOBIx4');
$('.labelTextmemox4').addClass('labelTextmemoMOBIx4');

$('.Mikex4').addClass('MikeMOBIx4');
$('.MikeBx4').addClass('MikeBMOBIx4');






$('.PBillx4').addClass('PBillsMOBIx4');
$('.SelectBillPayx4').addClass('SelectBillPayMOBIx4');

$('.PbillLabelStatsx4').addClass('PbillLabelStatsMOBIx4');
$('.PbillLabelSmallx4').addClass('PbillLabelSmallMOBIx4');
$('.PbillStatsInputx4').addClass('PbillStatsInputMOBIx4');
$('.PbillSmallInputx4').addClass('PbillSmallInputMOBIx4');
$('.PBillImputLabelx4').addClass('PBillImputLabelMOBIx4');
$('.PBillImputx4').addClass('PBillImputMOBIx4');
$('.PbillLogox4').addClass('PbillLogoMOBIx4'); 
$('.pbcoverx4').addClass('pbcoverMOBIx4'); 
$('.PBillRegularx4').addClass('PBillRegularxMOBIx4');
$('.PBillRegularxMOBIx4, .PBillsMOBIxDoublex4').css('border-radius', '37px');
$('.Pbill8regx4, .Pbill7regx4').addClass('HidePBillsMOBI7and8x4');
$('.PBillShapesx4').hide();
$('.PBillShapesx4').addClass('PBillShapesMOBIx4');

$('.pbshape1x4').show('');




$('.TakeLoanx4').addClass('TakeLoanMOBIx4');
$('.Loanx4').addClass('LoanMOBIx4');
$('.LoanSymbolx4').addClass('LoanSymbolMOBIx4');
$('.LoanNamex4').addClass('LoanNameMOBIx4');
$('.PreApprovedLoanssx4').addClass('PreApprovedLoanssMOBIx4');
$('.MyLoaninRealValx4').addClass('MyLoaninRealValMOBIx4');
$('.EnterLoanQtyx4').addClass('EnterLoanQtyMOBIx4');
$('.InputLoanQtyx4').addClass('InputLoanQtyMOBIx4');



$('.WireTransferLabelsX4').addClass('WireTransferLabelsMOBIX4');
$('.HHH').addClass('HHHMOBI');
$('.WrtLabelx4').addClass('WrtLabelMOBIx4');
$('.PhoneWrLabelx4').addClass('PhoneWrLabelMOBIx4');
$('.WRLabelNamex4').addClass('WRLabelNameMOBIx4');



$('.MerchantLabelsX4').addClass('MerchantLabelsMOBIX4');
$('.MerLabelNamex4').addClass('MerLabelNameMOBIx4');
$('.MerHHH').addClass('MerHHHMOBI');
$('.MerchantLabelx4').addClass('MerchantLabelMOBIx4');
$('.SwipeCardMerLabelx4').addClass('SwipeCardMerLabelMOBIx4');
$('.NameMerLabelx4').addClass('NameMerLabelMOBIx4');
$('.DateMerLabelx4').addClass('DateMerLabelMOBIx4');
$('.SelectChargeOrRefundx4').addClass('SelectChargeOrRefundMOBIx4');


$('.MerchantLabelx4').addClass('MerchantLabelMOBIx4');
$('.MerchLabelNamex4').addClass('MerchLabelNameMOBIx4');
$('.MerchZipx4').addClass('MerchZipMOBIx4');

$('.ChangePinx4').addClass('ChangePinMOBIx4');
$('.ChangePinLabelsX4').addClass('ChangePinLabelsMOBIX4');
$('.ChangePinLx4').addClass('ChangePinLMOBIx4');
$('.ChangePinHHHx4').addClass('ChangePinHHHMOBIx4');
$('.MatchedPinYesx4').addClass('MatchedPinYesMOBIx4');
$('.MatchedPinNOx4').addClass('MatchedPinNOMOBIx4');
$('.ChangepinCoverx4').addClass('ChangepinCoverMOBIx4');



$('.ToogleAssetsToRectanglex4').show('');
$('.SelectAssetsx4').addClass('SelectAssetsMOBIx4');
$('.Assetx4').addClass('AssetMOBIx4');
$('.AssetSymbolx4').addClass('AssetSymbolMOBIx4');
$('.AssetNamex4').addClass('AssetNameMOBIx4');
$('.IhaveThisMuchx4').addClass('IhaveThisMuchMOBIx4');
$('.CurrentPricex4').addClass('CurrentPriceMOBIx4');
$('.MyAssetinRealValx4').addClass('MyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').addClass('EnterAssetQtyMOBIx4');
$('.InputAssetQtyx4').addClass('InputAssetQtyMOBIx4');
$('.totalAssetsheaderx4').addClass('totalAssetsheaderMOBIx4');
$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').addClass('SelectSendOrRequestMOBIx4');
$('.SearchAssetsx4').addClass('SearchAssetsMOBIx4');



$('.AssetSymbolx4').removeClass('AssetSymbolMachinex4');
$('.AssetNamex4').removeClass('AssetNameMachinex4');
$('.IhaveThisMuchx4').removeClass('IhaveThisMuchMachinex4');
$('.MyAssetinRealValx4').removeClass('MyAssetinRealValMachinex4');
$('.CurrentPricex4').removeClass('CurrentPriceMachinex4');





$('.ToogleTransferToSelectx4').show('');
$('.ToogleTransferToSelectx4, .ToogleTransferToColumnx4').addClass('ToogleTransferToColumnMOBIx4');
$('.SelectTransfersx4').addClass('SelectTransfersMOBIx4');
$('.Transferx4').addClass('TransferMOBIx4');
$('.TransferSymbolx4').addClass('TransferSymbolMOBIx4');
$('.TransferNamex4').addClass('TransferNameMOBIx4');
$('.IhaveThisMuchx4').addClass('IhaveThisMuchMOBIx4');
$('.CurrentPricex4').addClass('CurrentPriceMOBIx4');
$('.MyTransferinRealValx4').addClass('MyTransferinRealValMOBIx4');
$('.EnterTransferQtyx4').addClass('EnterTransferQtyMOBIx4');
$('.InputTransferQtyx4').addClass('InputTransferQtyMOBIx4');
$('.totalTransfersheaderx4').addClass('totalTransfersheaderMOBIx4');
$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').addClass('SelectSendOrRequestMOBIx4');
$('.SearchTransferx4').addClass('SearchTransfersMOBIx4');
$('.Thecoverlix4').addClass('ThecoverliMOBIx4');





$('.SelectTransfersx4').addClass('SelectTransfersMOBIx4');
$('.Transferx4').addClass('TransferMOBIx4');
$('.TransferBadgeAndnamex4').addClass('TransferBadgeAndnameMOBIx4');
$('.TransferSymbolx4').addClass('TransferSymbolMOBIx4');
$('.TransferNamex4').addClass('TransferNameMOBIx4');
$('.TransferAndAbrex4').addClass('TransferAndAbreMOBIx4');
$('.TransferIhaveThisMuchx4').addClass('TransferIhaveThisMuchMOBIx4');
$('.SelectTransferFromx4').addClass('SelectTransferFromMOBIx4');
$('.SelectTransferTox4').addClass('SelectTransferToMOBIx4');
$('.TransSelectFromx4').addClass('TransSelectFromMOBIx4');
$('.TransSelectTox4').addClass('TransSelectToMOBIx4');
$('.TransTox4').addClass('TransToMOBIx4');
$('.TransFromx4').addClass('TransFromMOBIx4');
$('.TransferHideTox4').addClass('TransferHideToMOBIx4');
$('.TransferHideFromx4').addClass('TransferHideFromMOBIx4');
$('.TransferDropButtonDropdownx4').addClass('TransferDropButtonDropdownMOBIx4');
$('.MyTransferinRealValx4').addClass('MyTransferinRealValMOBIx4');
$('.arrowTransferx4').addClass('arrowTransferMOBIx4');
$('.arrowTransx4').addClass('arrowTransMOBIx4');
$('.EnterTransferQtyx4').addClass('EnterTransferQtyMOBIx4');
$('.InputTransferQtyx4').addClass('InputTransferQtyMOBIx4');

$('.MainTransferx5').addClass('MainTransferMOBIx5');
$('.MainTransSelectFromx4').addClass('MainTransSelectFromMOBIx4');
$('.MainTransTox4').addClass('MainTransToMOBIx4');
$('.MainTransFromx4').addClass('MainTransFromMOBIx4');
$('.MainTransSelectTox4').addClass('MainTransSelectToMOBIx4');
$('.TransferHideFromx4').addClass('MainTransferHideFromMOBIx4');
$('.TransferHideTox4').addClass('MainTransferHideToMOBIx4');
$('.cheTsav2x5').addClass('cheTsav2MOBIx5');








$('.LoanParrax4').addClass('LoanParraMOBIx4');

$('.cheTsav2x4').addClass('cheTsav2MOBIx4');
$('.savTche2x4').addClass('savTche2MOBIx4');


$('.OperationEndedPanelx4').addClass('OperationEndedPanelMOBIx4');



  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $('.TapBarFinTech1').addClass('FFTSelectedModelx4');
  $('.TapBarFinTech4, .TapBarFinTech5, .TapBarFinTech6,  .TapBarFinTech7,  .TapBarFinTech8').hide();

  Tapbarx4= 'Regular';

   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   $('.Hellox4').hide();
   $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4, .fin2MOBIx4').addClass('RoundFinx4');

   $('.servicePanelsMOBIx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferMOBIx5').removeClass('TapBar2MainTransferMOBIx5 TapBar2MainTransferx5');

// $('.AllFinModels').show();




$('.AccountsXX').addClass('AccountsMOBIXX');
$('.Accountsx13').addClass('AccountsMOBIx13');
$('.Accountsx14').addClass('AccountsMOBIx14');
$('.Accountsx15').addClass('AccountsMOBIx15');
$('.acm2x13').addClass('acm2MOBIx13');
$('.acm2x14').addClass('acm2MOBIx14');
$('.acm2x15').addClass('acm2MOBIx15');
$('.acm2x55').addClass('acm2MOBIx55');
$('.acm2x57').addClass('acm2MOBIx57');
$('.CoinTypeKPT1x14').addClass('CoinTypeKPT1MOBIx14');
$('.CoinnameKPT1x14').addClass('CoinnameKPT1MOBIx14');
$('.MyCoinsKPT1x14').addClass('MyCoinsKPT1MOBIx14');

$('.acm2Buttonsx1').addClass('acm2ButtonsMOBIx1'); 
$('.acm2Buttonsx5').addClass('acm2ButtonsMOBIx5');
$('.acm2Buttonsx55').addClass('acm2ButtonsMOBIx55');




$('.numpadLeftMOBIx4').show();
$('.numpadRightMOBIx4').show();
$('.numpadLargex4').show();


$('.numpadLeftx4').hide();
$('.numpadRightx4').hide();



$('.DivNetsXX').show('');

$('.lan2Blankx4').addClass('lan2BlankMOBIx4');
$('.lan2Blank2x4').addClass('lan2Blank2MOBIx4');

$('.BlankLogox4').addClass('BlankLogoMOBIx4');

$('.AccMiniBsx4').addClass('AccMiniBsMOBIx4');

$('.Statsx1').show().addClass('StatsMOBIx1');
$('.Statsx13').show().addClass('StatsMOBIx13');
$('.Statsx14').show().addClass('StatsMOBIx14');
$('.Statsx5').addClass('StatsMOBIx5'); 
$('.Statsx55').addClass('StatsMOBIx55'); 
$('.Statsx57').addClass('StatsMOBIx57');
$('.Statsx15').addClass('StatsMOBIx15');
$('.Statsx3').addClass('StatsMOBIx3');


$('.ViewStatsx4').addClass('ViewStatsMOBIx4');
$('.ViewStatsChartx4').addClass('ViewStatsChartMOBIx4');
$('.StatsButtonsBalx4').addClass('StatsButtonsBalMOBIx4');
$('.StatsButtonsx4').addClass('StatsButtonsMOBIx4');
$('.Balancex4').addClass('BalanceMOBIx4');
$('.extraStatsx4').addClass('extraStatsMOBIx4');
$('.SelYearMonthx4').addClass('SelYearMonthMOBIx4');
$('.StatMenusx4').addClass('StatMenusMOBIx4'); 

$('.Menux4').addClass('MenuMOBIx4');
$('.HelloNamex4').addClass('HelloNameMOBIx4');
$('.HelloPhotox4').addClass('HelloPhotoMOBIx4');


$('.ThinTapbarx4x4').addClass('ThinTapbarx4MOBIx4');

$('.AtmFin5').addClass('AtmFin5MOBI');
$('.finB5x4').addClass('finB5MOBIx4');
$('.SelectWideCTAx4').addClass('SelectWideCTAMOBIx4');

$('.AtmFin11').addClass('AtmFin11MOBI');
$('.finB1').addClass('finB1MOBI');
$('.AtmFin2a').addClass('AtmFin2aMOBI');
$('.AtmFin2').addClass('AtmFin2MOBI');
$('.FinB2a').addClass('FinB2aMOBI');
$('.FinB2').addClass('FinB2MOBI');
$('.AtmFin3').addClass('AtmFin3MOBI');
$('.FinB3').addClass('FinB3MOBI');
$('.AtmFinIcons').addClass('AtmFinIconsMOBI');
$('.labelTextB3').addClass('labelTextB3MOBI');
$('.AtmFin4').addClass('AtmFin4MOBI');
$('.FinB4').addClass('FinB4MOBI');
$('.AtmFin5').addClass('AtmFin5MOBI');

$('.AccPerformancex4').addClass('AccPerformanceMOBIx4');

$('.RemitElementsx4').addClass('RemitElementsMOBIx4');
$('.RemitLabelsx4').addClass('RemitLabelsMOBIx4'); 
$('.RemitLabels2x4').addClass('RemitLabels2MOBIx4');

$('.flagx14, .flagx13').addClass('flagMOBIx14');


$('.ConfirmRemitx4').addClass('ConfirmRemitMOBIx4');

$('.NumPadx4').addClass('NumPadMOBIx4');


$('.SelectBillDenomix4').addClass('SelectBillDenomiMOBIx4');
$('.SelectBillPayx4').addClass('SelectBillPayMOBIx4');
$('.ServicesXX').addClass('ServicesMOBIXX'); 






$('.SendMoney222x4').addClass('SendMoney222MOBIx4');
$('.friends2x4').addClass('friends2MOBIx4 '); 
$('.SpecifySendReQAmount2x4').addClass('SpecifySendReQAmountMOBI2x4');
$('.ContactName2x4').addClass('ContactName2MOBIx4');
$('.Mike2x4').addClass('Mike2MOBIx4');
$('.MikeB2x4').addClass('MikeB2MOBIx4');



$('.SendMoney333x4').addClass('SendMoney333MOBIx4');
$('.friends3x4').addClass('friends3MOBIx4 '); 
$('.SpecifySendReQAmount3x4').addClass('SpecifySendReQAmountMOBI3x4');
$('.ContactName3x4').addClass('ContactName3MOBIx4');
$('.FriendMemo3x4').addClass('FriendMemo3MOBIx4');
$('.MikeB3x4').addClass('MikeB3MOBIx4');




$('.AccountsX1w8').addClass('AccountsMOBIX1w8');
$('.acm2x1w8').addClass('acm2MOBIx1w8');
$('.AccountsX13w8').addClass('AccountsMOBIX13w8');
$('.acm2x13w8').addClass('acm2x13MOBIw8');
$('.AccountsX14w8').addClass('AccountsX14MOBIw8');
$('.acm2x14w8').addClass('acm2x14MOBIw8');



$('.acm2Buttonsx17').addClass('acm2ButtonsMOBIx17');
$('.acm2Buttonsx15').addClass('acm2ButtonsMOBIx15');




if (TapbarBottomx4 === true){ 

$('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
$('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4');
$('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');

console.log('TapbarBottomx4 = ' + TapbarBottomx4);

}

console.log('TapbarBottomx4 = ' + TapbarBottomx4);










});









$('#ATM1Machinex4').click(function(){

$('.AccountsXX').removeClass('AccountOverflowHidx4');

$('.Networth').hide();


  $('.fin2x4').hide('');
  $('.AtmFin1').show('');

  screenTypex4 = 'Machinex4';

    $('#submit2Yx4').fadeIn();
    $('#Scan2Yx4').hide();

 


 $('.ui2x4').removeClass('ui2MOBIx4 uiXXMOBI');
   
      // $('.lan2').removeClass('lan2MOBI');
      //    $('.langB').removeClass('langBMOBI');
      //    $('.langBother').removeClass('langBotherMOBI');






$('.TapBarx4').removeClass('TapBarMOBIx4');
$('.TapBar1x4').removeClass('TapBar1MOBIx4');
$('.TapBar2x4').removeClass('TapBar2MOBIx4');
$('.TapBar3x4').removeClass('TapBar3MOBIx4');
$('.TapBar3ax4').removeClass('TapBar3aMOBIx4');
$('.TapBar4x4').removeClass('TapBar4MOBIx4');
$('.TapBar5x4').removeClass('TapBar5MOBIx4');
$('.TapBar6x4').addClass('TapBar6MOBIx4');
$('.TapBar6ax4').removeClass('TapBar6aMOBIx4');
$('.TapBar7x4').removeClass('TapBar7MOBIx4');
$('.TapBar7ax4').removeClass('TapBar7aMOBIx4');
$('.BottomTapBarx4').removeClass('BottomTapBarMOBIx4');

$('.langBMOBIMachinex4').removeClass('langBMOBIMachineMOBIx4');
$('.HelloPhotoRightx4').removeClass('HelloPhotoRightMOBIx4');
$('.MenuRightx4').removeClass('MenuRightMOBIx4');
$('.CCARightx4').removeClass('CCARightMOBIx4');
$('.CCAbalRightx4').removeClass('CCAbalRightMOBIx4');
$('.BottomTapbarButtonsx4').removeClass('BottomTapbarButtonsMOBIx4');
$('.labelText0x4').removeClass('labelText0MOBIx4');
$('.CCA4x4').removeClass('CCA4MOBIx4')
$('.CCAbal4x4').removeClass('CCAbal4MOBIx4');
$('.FriendMemo2x4').removeClass('FriendMemo2MOBIx4');
$('.CCA5x4').removeClass('CCA5MOBIx4');
$('.CCAbal5x4').removeClass('CCAbal5MOBIx4');
$('.HelloPhoto5x4').removeClass('HelloPhoto5MOBIx4');
$('.Menu5x4').removeClass('Menu5MOBIx4');













$('.ServicePanelHeaderx4').removeClass('ServicePanelHeaderMOBIx4');
$('.servicePanelParrax4').removeClass('servicePanelParraMOBIx4');




        // $('.lan2x4').show();
         $('.lan2MOBIx4').hide();
         $('.lan2MOBIx4').removeClass('bluelan2');

         $('.lan2MOBIx4 > label, .lan2MOBI > button').removeClass('langBotherMOBI');
         


      $('.SermXX').removeClass('serm2MOBIx4');
      $('.innerx4').removeClass('innerMOBIx4');



      $('.serBother').removeClass('serBotherMOBI');

       $('.serDropx4').removeClass('serDropMOBIx4');
       $('.serDropx4 > button').removeClass('serDropMOBIx4 > button');
       $('.OtherlabelText').removeClass('OtherlabelTextMOBI');


$('.acm2x4, .acm2x24').css('border-radius', '30px');

$('.acm2x5, .acm2x25, .acm2x7, .acm2x55, .acm2x57').css('border-radius', '15px');



 $('.depositx4').removeClass('depositMOBIx4');
 $('.DepositCCx4, .NewDepositCx4').show();
 $('.DepositCx4').hide();
 $('.CaptureDepositx4').hide();
 $('.DepositButtonsx4').removeClass('DepositButtonsMOBIx4');


$('.sm3Buttons').removeClass('sm3ButtonsMOBI');
$('.sm4Buttons').removeClass('sm4ButtonsMOBI');
$('.sm5Buttons').removeClass('sm5ButtonsMOBI');
$('.sm7Buttons').removeClass('sm7ButtonsMOBI');
$('.sm2x4').removeClass('sm2MOBIx4');
$('.sm2x42').removeClass('sm2MOBIx42');


$('.labelTextx24').removeClass('labelTextMOBIx24');
$('.labelTextx42').removeClass('labelTextMOBIx42');



$('.Serm2x4').removeClass('serm2MOBIx4');
$('.innerRightx4').removeClass('innerRightMOBIx4');
$('.innerLeftx2').removeClass('innerLeftMOBIx2');
$('.innerLeftx4').removeClass('innerLeftMOBIx4');
$('.innerLeftx42').removeClass('innerLeftMOBIx42');

$('.innerRightx2').removeClass('innerRightMOBIx2');
$('.innerLeftx3').removeClass('innerLeftMOBIx3');
$('.innerLeftx6').removeClass('innerLeftMOBIx6');
$('.innerRightx3').removeClass('innerRightMOBIx3');
$('.acm2x4').removeClass('acm2MOBIx4');
$('.CoinTypeKPT1').removeClass('CoinTypeKPT1MOBI');
$('.CoinnameKPT1').removeClass('CoinnameKPT1MOBI');
$('.CoinnameKPT3').removeClass('CoinnameKPT3MOBI');
$('.MyCoinsKPT1').removeClass('MyCoinsKPT1MOBI');
$('.MyCoinsInUSKPT1').removeClass('MyCoinsInUSKPT1MOBI');
$('.CurrentCoinCostInUSKPT1').removeClass('CurrentCoinCostInUSKPT1MOBI');
$('.ActivityIconx4').removeClass('ActivityIconMOBIx4');


$('.ExtraAcm2xx').removeClass('ExtraAcm2MOBIxx');
$('.AllAccountsx4, .AllAccountsx24').removeClass('AllAccountsMOBIx4');

$('.AllAccountsx1').removeClass('AllAccountsMOBIx1');
$('.AllAccountsx2').removeClass('AllAccountsMOBIx2');
$('.AllAccountsx3').removeClass('AllAccountsMOBIx3');
$('.AllAccountsx4').removeClass('AllAccountsMOBIx4');
$('.AllAccountsx13').removeClass('AllAccountsMOBIx13');
$('.AllAccountsx14').removeClass('AllAccountsMOBIx14');
$('.AllAccountsx15').removeClass('AllAccountsMOBIx15');
$('.AllAccountsx55').removeClass('AllAccountsMOBIx55');
$('.AllAccountsx57').removeClass('AllAccountsMOBIx57');


       



$('.AccountsX17').removeClass('AccountsMOBIX17');
$('.innerRightx17').removeClass('innerRightMOBIx17');
$('.acm2x17').removeClass('acm2MOBIx17'); 
$('.SymbNamex17').removeClass('SymbNameMOBIx17');
$('.CoinTypeKPTx17').removeClass('CoinTypeKPTMOBIx17');
$('.CoinnameKPTx17').removeClass('CoinnameKPTMOBIx17');
$('.AccAmountx17').removeClass('AccAmountMOBIx17');
$('.MyCoinsKPTx17').removeClass('MyCoinsKPTMOBIx17');
$('.Statsx17').removeClass('StatsMOBIx17');


$('.AccountsX27').removeClass('AccountsMOBIX27');
$('.innerRightx27').removeClass('innerRightMOBIx27');
$('.acm2Buttonsx27').removeClass('acm2ButtonsMOBIx27');
$('.acm2x27').removeClass('acm2MOBIx27');
$('.SymbNamex27').removeClass('SymbNameMOBIx27');
$('.CoinTypeKPTx27').removeClass('CoinTypeKPTMOBIx27');
$('.CoinnameKPTx27').removeClass('CoinnameKPTMOBIx27');
$('.AccAmountx27').removeClass('AccAmountMOBIx27'); 
$('.MyCoinsKPTx27').removeClass('MyCoinsKPTMOBIx27');
$('.Statsx27').removeClass('StatsMOBIx27');



$('.AccountsX37').removeClass('AccountsMOBIX37');
$('.innerRightx37').removeClass('innerRightMOBIx37');
$('.acm2Buttonsx37').removeClass('acm2ButtonsMOBIx37');
$('.acm2x37').removeClass('acm2MOBIx37');
$('.SymbNamex37').removeClass('SymbNameMOBIx37');
$('.CoinTypeKPTx37').removeClass('CoinTypeKPTMOBIx37');
$('.CoinnameKPTx37').removeClass('CoinnameKPTMOBIx37');
$('.AccAmountx37').removeClass('AccAmountMOBIx37');
$('.MyCoinsKPTx37').removeClass('MyCoinsKPTMOBIx37'); 
$('.Transactionsx37').removeClass('TransactionsMOBIx37');
$('.Statsx37').removeClass('StatsMOBIx37');
$('.Statsx37').hide();






$('.NetworthMOBIx6a').removeClass('NetworthMOBIx6a');
$('.TotalNetMOBIx6a').removeClass('TotalNetMOBIx6a');
$('.NetworthBalMOBIx6a').removeClass('NetworthBalMOBIx6a');
$('.CashCreditAssetMOBIx6a').removeClass('CashCreditAssetMOBIx6a');
$('.CashCreditAssetBalMOBIx6a').removeClass('CashCreditAssetBalMOBIx6a');
$('.sm6ButtonsMOBI6b').removeClass('sm6ButtonsMOBI6b');
$('.serm2MOBIx6a').removeClass('serm2MOBIx6a');
$('.innerMOBIx6a').removeClass('innerMOBIx6a');
$('.innerLeftMOBIx6a').removeClass('innerLeftMOBIx6a');
$('.innerRightMOBIx6a').removeClass('innerRightMOBIx6a');
$('.sm2MOBIx6a').removeClass('sm2MOBIx6a');
$('.acm2MOBIx6a').removeClass('acm2MOBIx6a');



$('.NetworthMOBIx6b').removeClass('NetworthMOBIx6b');
$('.TotalNetMOBIx6b').removeClass('TotalNetMOBIx6b');
$('.NetworthBalMOBIx6b').removeClass('NetworthBalMOBIx6b');
$('.CashCreditAssetMOBIx6b').removeClass('CashCreditAssetMOBIx6b');
$('.CashCreditAssetBalMOBIx6b').removeClass('CashCreditAssetBalMOBIx6b');
$('.sm6ButtonsMOBI6b').removeClass('sm6ButtonsMOBI6b');
$('.serm2MOBIx6b').removeClass('serm2MOBIx6b');
$('.innerMOBIx6b').removeClass('innerMOBIx6b');
$('.innerLeftMOBIx6b').removeClass('innerLeftMOBIx6b');
$('.innerRightMOBIx6b').removeClass('innerRightMOBIx6b');
$('.sm2MOBIx6b').removeClass('sm2MOBIx6b');
$('.acm2MOBIx6b').removeClass('acm2MOBIx6b');




$('.NetworthMOBIx6c').removeClass('NetworthMOBIx6c');
$('.TotalNetMOBIx6c').removeClass('TotalNetMOBIx6c');
$('.NetworthBalMOBIx6c').removeClass('NetworthBalMOBIx6c');
$('.CashCreditAssetMOBIx6c').removeClass('CashCreditAssetMOBIx6c');
$('.CashCreditAssetBalMOBIx6c').removeClass('CashCreditAssetBalMOBIx6c');
$('.sm6cuttonsMOBI6c').removeClass('sm6cuttonsMOBI6c');
$('.serm2MOBIx6c').removeClass('serm2MOBIx6c');
$('.innerMOBIx6c').removeClass('innerMOBIx6c');
$('.innerLeftMOBIx6c').removeClass('innerLeftMOBIx6c');
$('.innerRightMOBIx6c').removeClass('innerRightMOBIx6c');
$('.sm2MOBIx6c').removeClass('sm2MOBIx6c');
$('.acm2MOBIx6c').removeClass('acm2MOBIx6c');





$('.innerLeftx6c').removeClass('innerLeftMOBIx6c');
$('.innerRightx6c').removeClass('innerRightMOBIx6c');
$('.sm2x6c').removeClass('sm2MOBIx6c');
$('.labelTextx6c').removeClass('labelTextMOBIx6c');



      $('.tof2').removeClass('tof2MOBIx4');
         $('.tofB').removeClass('tofBMOBIx4');
         $('.CurrentSecond1, .CurrentSecond3').css('display', 'none');



$('.feesx4').removeClass('feesMOBIx4');
$('.feeInputx4').removeClass('feeInputMOBIx4');

      $('.qty2x4').removeClass('qty2MOBIx4');
          $('.qtyvalue2x4').removeClass('qtyvalue2MOBIx4');
          $('.amountx4').removeClass('amountMOBIx4');
          $('.QtyValueCoverx4').removeClass('QtyValueCoverMOBIx4');
          $('.PayButtonsBx4').removeClass('pyMOBIlabelx4');

$('.payButtonNameandIconx4').removeClass('payButtonNameandIconMOBIx4');
$('.payButtonIconx4').removeClass('payButtonIconMOBIx4');
$('.PaybuttonNamex4').removeClass('PaybuttonNameMOBIx4');
$('.PayButtonValuex4').removeClass('PayButtonValueMOBIx4');
$('.PayIcon1x4, .PayIcon3x4').removeClass('PayIconMOBIx4');


      $('.backSpacex4').removeClass('backSpaceMOBIx4');








      // $('.numV').removeClass('NumV');
      $('.NumPadx4').removeClass('numVMOBIx4');


      $('.fin2x4').removeClass('fin2MOBIx4');






            $('.finBx4').removeClass('finBMOBIx4');


          $('.confBack2Yx4').removeClass('confBack2YMOBIx4');



      $('.confirm2Yx4, .Scanconfirm2Yx4').removeClass('confirm2YMOBIx4');
      $('.back2Yx4, .Scanback2Yx4').removeClass('back2YMOBIx4');



$('.ServicePanelx4').removeClass('servicePanelsMOBIx4');
$('.ServicePanelx4').removeClass('servicePanelsMOBIx4 > span');

$('#closeSer2Panelsx4').removeClass(' closeSer2PanelsMOBIx4');
$('.friendsx4, .DenominatedBillsx4, .Cardx4, .PBillx4, .TLoanx4').removeClass('SerPanLabelsMOBIx4');


$('.addBillx4').removeClass('addBillMOBIx4');
$('.schedule2x4').removeClass('schedule2MOBIx4');     
$('.closeSer2Panelsx4 ').removeClass('closeSer2PanelsMOBIx4');



$('.Cardx4').removeClass('CardMOBIx4');
$('.creditcCardsx4').removeClass('CreditcCardsMOBIx4');

$('.lockUnlockCardx4').removeClass('lockUnlockCardMOBIx4');

$('.CardLabel').removeClass('CardLabelMOBI');
$('.CardLabelStatsx4').removeClass('CardLabelStatsMOBIx4');
$('.cardStatsInputx4').removeClass('cardStatsInputMOBIx4');
$('.CreditBalMinx4').removeClass('CreditBalMinMOBIx4');
$('.CreditBalMinInputx4').removeClass('CreditBalMinInputMOBIx4');
$('.CardImputLabelx4').removeClass('CardImputLabelMOBIx4');
$('.CardImputx4').removeClass('CardImputMOBIx4');
$('.CardLogox4').removeClass('CardLogoMOBIx4');



// ///Bill Denomination//////////

$('.billsx4').removeClass('billsMOBIx4');
$('.billsButtonx4').removeClass('billsButtonMOBIx4');
$('.qtyvalue23x4 ').removeClass('qtyvalue23MOBIx4');
$('#billsx4').css('margin-left', '-130px');


$('.SelectBillDenomix4').removeClass('SelectBillDenomiMOBIx4 '); 
$('.BillDenomix4').removeClass('BillDenomiMOBIx4');
$('.BillDenomiImputLabelx4').removeClass('BillDenomiImputLabelMOBIx4');
$('.BillDenomiImputx4').removeClass('BillDenomiImputMOBIx4');


// ///Bill Denomination//////////




// ////////// Friends/////////////

$('.ToggleFriendsMachineHorizx4').show();

   // $('.friendsx4').removeClass('friendsMachineHorizx4');
   // $('.SpecifySendReQAmountx4').removeClass('SpecifySendReQAmountMachineHorizx4');
   // $('.ContactNamex4').removeClass('ContactNameMachineHorizx4');
   // $('.MikeBx4').removeClass('MikeBMachineHorizx4');





$('.friendsx4').removeClass('friendsMOBIxLinearx4'); 
$('.ContactNamex4').removeClass('ContactNameLinearx4');
$('.SpecifySendReQAmountx4').removeClass('SpecifySendReQAmountLinearx4');
$('.Mikex4').removeClass('MikeMOBIx4');
$('.MikeBx4').removeClass('MikeBMOBIx4');
$('.Mikex4, .MikeMOBIx4').removeClass('MikeLinearx4');
$('.MikeBx4, .MikeBMOBIx4').removeClass('MikeBLinearx4');
$('.servicePanelParraBottomx4').removeClass('servicePanelParraBottomLinearx4');
$('.servicePanelParraBottomx4').hide('');
$('.FriendMemoMOBIx4 ').removeClass('FriendMemoMOBIxLinearx4');
$('.friendsNoShowx4').removeClass('friendsNoShowLinearx4');



$('.SearchScanContactLabelInvoicex4').hide('');
$('.servicePanelParratopx4').show('');
$('.servicePanelParraBottomx4').hide('');

$('.friendsx4').removeClass('friendsMOBIx4');
$('.friendImputx4').removeClass('friendImputMOBIx4');
$('.friendsSpanx4').removeClass('friendsSpanMOBIx4');
$('.SpecifySendReQAmountx4').removeClass('SpecifySendReQAmountMOBIx4');
$('.SelectFriendx4').removeClass('SelectFriendMOBIx4');
$('.SendReqx4').removeClass('SendReqMOBIx4');
$('.FriendMemox4').removeClass('FriendMemoMOBIx4');
$('.WriteMemox4').removeClass('WriteMemoMOBIx4');
$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').removeClass('SelectSendOrRequestMOBIx4');
$('.ContactNamex4').removeClass('ContactNameMOBIx4');
$('.labelTextmemox4').removeClass('labelTextmemoMOBIx4');

 



// ////////// Friends/////////////




$('.PBillRegularxMOBIx4, .PBillsMOBIxDoublex4').css('border-radius', '27px');
$('.PBillx4').removeClass('PBillsMOBIx4');
$('.SelectBillPayx4').removeClass('SelectBillPayMOBIx4');

$('.PbillLabelStatsx4').removeClass('PbillLabelStatsMOBIx4');
$('.PbillLabelSmallx4').removeClass('PbillLabelSmallMOBIx4');
$('.PbillStatsInputx4').removeClass('PbillStatsInputMOBIx4');
$('.PbillSmallInputx4').removeClass('PbillSmallInputMOBIx4');
$('.PBillImputLabelx4').removeClass('PBillImputLabelMOBIx4');
$('.PBillImputx4').removeClass('PBillImputMOBIx4');
$('.PbillLogox4').removeClass('PbillLogoMOBIx4'); 
$('.pbcoverx4').removeClass('pbcoverMOBIx4');
$('.PBillRegularx4').removeClass('PBillRegularxMOBIx4');
$('.PBLinearPlusx4, .PBDoublex4, .PBLinix4').hide('');
$('.PBRegularx4').show();
$('.Pbill8regx4, .Pbill7regx4').removeClass('HidePBillsMOBI7and8x4');
$('.PBillShapesx4').hide();
$('.PBillShapesx4').removeClass('PBillShapesMOBIx4');
$('.pbshape01x4').show('');




$('.TakeLoanx4').removeClass('TakeLoanMOBIx4');
$('.Loanx4').removeClass('LoanMOBIx4');
$('.LoanSymbolx4').removeClass('LoanSymbolMOBIx4');
$('.LoanNamex4').removeClass('LoanNameMOBIx4');
$('.PreApprovedLoanssx4').removeClass('PreApprovedLoanssMOBIx4');
$('.MyLoaninRealValx4').removeClass('MyLoaninRealValMOBIx4');
$('.EnterLoanQtyx4').removeClass('EnterLoanQtyMOBIx4');
$('.InputLoanQtyx4').removeClass('InputLoanQtyMOBIx4');




$('.MerchantLabelsX4').removeClass('MerchantLabelsMOBIX4');
$('.MerLabelNamex4').removeClass('MerLabelNameMOBIx4');
$('.MerHHH').removeClass('MerHHHMOBI');
$('.MerchantLabelx4').removeClass('MerchantLabelMOBIx4');
$('.SwipeCardMerLabelx4').removeClass('SwipeCardMerLabelMOBIx4');
$('.NameMerLabelx4').removeClass('NameMerLabelMOBIx4');
$('.DateMerLabelx4').removeClass('DateMerLabelMOBIx4');
$('.SelectChargeOrRefundx4').removeClass('SelectChargeOrRefundMOBIx4');

$('.MerchantLabelx4').removeClass('MerchantLabelMOBIx4');
$('.MerchLabelNamex4').removeClass('MerchLabelNameMOBIx4');
$('.MerchZipx4').removeClass('MerchZipMOBIx4');





$('.WireTransferLabelsX4').removeClass('WireTransferLabelsMOBIX4');
$('.HHH').removeClass('HHHMOBI');
$('.WrtLabelx4').removeClass('WrtLabelMOBIx4');
$('.PhoneWrLabelx4').removeClass('PhoneWrLabelMOBIx4');
$('.WRLabelNamex4').removeClass('WRLabelNameMOBIx4');





$('.ChangePinx4').removeClass('ChangePinMOBIx4');
$('.ChangePinLabelsX4').removeClass('ChangePinLabelsMOBIX4');
$('.ChangePinLx4').removeClass('ChangePinLMOBIx4');
$('.ChangePinHHHx4').removeClass('ChangePinHHHMOBIx4');
$('.MatchedPinYesx4').removeClass('MatchedPinYesMOBIx4');
$('.MatchedPinNOx4').removeClass('MatchedPinNOMOBIx4');
$('.ChangepinCoverx4').removeClass('ChangepinCoverMOBIx4');




$('.ToogleAssetsToLinearx4, .ToogleAssetsToSquarex4, .ToogleAssetsToRectanglex4, .ToogleAssetsToMinix4').hide();
$('.SelectAssetsx4').removeClass('SelectAssetsMOBIx4');
$('.Assetx4').removeClass('AssetMOBIx4');
$('.AssetSymbolx4').removeClass('AssetSymbolMOBIx4');
$('.AssetNamex4').removeClass('AssetNameMOBIx4');
$('.IhaveThisMuchx4').removeClass('IhaveThisMuchMOBIx4');
$('.CurrentPricex4').removeClass('CurrentPriceMOBIx4');
$('.MyAssetinRealValx4').removeClass('MyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('EnterAssetQtyMOBIx4');
$('.InputAssetQtyx4').removeClass('InputAssetQtyMOBIx4');
$('.totalAssetsheaderx4').removeClass('totalAssetsheaderMOBIx4');
$('.SelectOrSellx4, .SelectSendOrRequestx4').removeClass('SelectSendOrRequestMOBIx4');
$('.SearchAssetsx4').removeClass('SearchAssetsMOBIx4');
$('.EnterAsset1x4').removeClass('MiniEnterAssetQtyMOBIx4 RectangledAssetMOBIx4 LinearAssetx4');

$('.AssetSymbolx4').addClass('AssetSymbolMachinex4');
$('.AssetNamex4').addClass('AssetNameMachinex4');
$('.IhaveThisMuchx4').addClass('IhaveThisMuchMachinex4');
$('.MyAssetinRealValx4').addClass('MyAssetinRealValMachinex4');
$('.CurrentPricex4').addClass('CurrentPriceMachinex4');




// $('.ToogleTransferToLinearx4, .ToogleTransferToSquarex4, .ToogleTransferToSelectx4, .ToogleTransferToColumnx4').hide();
$('.ToogleTransferToSelectx4, .ToogleTransferToColumnx4').removeClass('ToogleTransferToColumnMOBIx4');
$('.SelectTransfersx4').removeClass('SelectTransfersMOBIx4');
$('.Transferx4').removeClass('TransferMOBIx4');
$('.TransferSymbolx4').removeClass('TransferSymbolMOBIx4');
$('.TransferNamex4').removeClass('TransferNameMOBIx4');
$('.IhaveThisMuchx4').removeClass('IhaveThisMuchMOBIx4');
$('.CurrentPricex4').removeClass('CurrentPriceMOBIx4');
$('.MyTransferinRealValx4').removeClass('MyTransferinRealValMOBIx4');
$('.EnterTransferQtyx4').removeClass('EnterTransferQtyMOBIx4');
$('.InputTransferQtyx4').removeClass('InputTransferQtyMOBIx4');
$('.totalTransfersheaderx4').removeClass('totalTransfersheaderMOBIx4');
$('.SelectBuyOrSellx4, .SelectSendOrRequestx4').removeClass('SelectSendOrRequestMOBIx4');
$('.SearchTransferx4').removeClass('SearchTransfersMOBIx4');




$('.SelectTransfersx4').removeClass('SelectTransfersMOBIx4');
$('.Transferx4').removeClass('TransferMOBIx4');
$('.TransferBadgeAndnamex4').removeClass('TransferBadgeAndnameMOBIx4');
$('.TransferSymbolx4').removeClass('TransferSymbolMOBIx4');
$('.TransferNamex4').removeClass('TransferNameMOBIx4');
$('.TransferAndAbrex4').removeClass('TransferAndAbreMOBIx4');
$('.TransferIhaveThisMuchx4').removeClass('TransferIhaveThisMuchMOBIx4');
$('.SelectTransferFromx4').removeClass('SelectTransferFromMOBIx4');
$('.SelectTransferTox4').removeClass('SelectTransferToMOBIx4');
$('.TransSelectFromx4').removeClass('TransSelectFromMOBIx4');
$('.TransSelectTox4').removeClass('TransSelectToMOBIx4');
$('.TransTox4').removeClass('TransToMOBIx4');
$('.TransFromx4').removeClass('TransFromMOBIx4');
$('.TransferHideTox4').removeClass('TransferHideToMOBIx4');
$('.TransferHideFromx4').removeClass('TransferHideFromMOBIx4');
$('.TransferDropButtonDropdownx4').removeClass('TransferDropButtonDropdownMOBIx4');
$('.MyTransferinRealValx4').removeClass('MyTransferinRealValMOBIx4');
$('.arrowTransferx4').removeClass('arrowTransferMOBIx4');
$('.arrowTransx4').removeClass('arrowTransMOBIx4');
$('.EnterTransferQtyx4').removeClass('EnterTransferQtyMOBIx4');
$('.InputTransferQtyx4').removeClass('InputTransferQtyMOBIx4');
$('.Thecoverlix4').removeClass('ThecoverliMOBIx4');

$('.MainTransferx5').removeClass('MainTransferMOBIx5');
$('.MainTransSelectFromx4').removeClass('MainTransSelectFromMOBIx4');
$('.MainTransTox4').removeClass('MainTransToMOBIx4');
$('.MainTransFromx4').removeClass('MainTransFromMOBIx4');
$('.MainTransSelectTox4').removeClass('MainTransSelectToMOBIx4');
$('.TransferHideFromx4').removeClass('MainTransferHideFromMOBIx4');
$('.TransferHideTox4').removeClass('MainTransferHideToMOBIx4');
$('.cheTsav2x5').removeClass('cheTsav2MOBIx5');








$('.wireSpanx4').removeClass('wireSpanMOBIx4');


$('.LoanParrax4').removeClass('LoanParraMOBIx4');

$('.cheTsav2x4').removeClass('cheTsav2MOBIx4');
$('.savTche2x4').removeClass('savTche2MOBIx4');


$('.OperationEndedPanelx4').removeClass('OperationEndedPanelMOBIx4');




  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $('.TapBarFinTech1').addClass('FFTSelectedModelx4');
  $('.TapBarFinTech4, .TapBarFinTech5, .TapBarFinTech6,  .TapBarFinTech7,  .TapBarFinTech8').show();



  Tapbarx4= 'Regular';

   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   $('.Hellox4').hide();
   $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2MOBIx4').addClass('RoundFinx4');

   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');

//    $('.fin2x4, .fin2MOBIx4').removeClass('Fin2NoRadiusx4');
// $('.fin2x4, .fin2MOBIx4').removeClass('RoundFinx4');

// $('.AllFinModels').hide();





$('.AccountsXX').removeClass('AccountsMOBIXX');
$('.Accountsx13').removeClass('AccountsMOBIx13');
$('.Accountsx14').removeClass('AccountsMOBIx14');
$('.Accountsx15').removeClass('AccountsMOBIx15');
$('.acm2x13').removeClass('acm2MOBIx13');
$('.acm2x14').removeClass('acm2MOBIx14');
$('.acm2x15').removeClass('acm2MOBIx15');
$('.acm2x55').removeClass('acm2MOBIx55');
$('.acm2x57').removeClass('acm2MOBIx57');
$('.CoinTypeKPT1x14').removeClass('CoinTypeKPT1MOBIx14');
$('.CoinnameKPT1x14').removeClass('CoinnameKPT1MOBIx14');
$('.MyCoinsKPT1x14').removeClass('MyCoinsKPT1MOBIx14');
$('.acm2Buttonsx1').removeClass('acm2ButtonsMOBIx1'); 
$('.acm2Buttonsx5').removeClass('acm2ButtonsMOBIx5');
$('.acm2Buttonsx55').removeClass('acm2ButtonsMOBIx55');



if ((serviceValuex4 === "QuickPay") || (serviceValuex4 === "Assets")){
  $('.submit2Yx4').hide();
}


$('.numpadLeftx4').show();
$('.numpadRightx4').show();


$('.numpadLeftMOBIx4').hide();
$('.numpadRightMOBIx4').hide();
$('.numpadLargex4').hide();


$('.DivNetsXX').hide('');

$('.lan2Blankx4').removeClass('lan2BlankMOBIx4');
$('.lan2Blank2x4').removeClass('lan2Blank2MOBIx4');
$('.BlankLogox4').removeClass('BlankLogoMOBIx4');

$('.AccMiniBsx4').removeClass('AccMiniBsMOBIx4');

$('.Statsx1').hide().removeClass('StatsMOBIx1');
$('.Statsx13').hide().removeClass('StatsMOBIx13');
$('.Statsx14').hide().removeClass('StatsMOBIx14');
$('.Statsx5').hide().removeClass('StatsMOBIx5'); 
$('.Statsx55').hide().removeClass('StatsMOBIx55'); 
$('.Statsx57').hide().removeClass('StatsMOBIx57');
$('.Statsx15').hide().removeClass('StatsMOBIx15');
$('.Statsx3').hide().removeClass('StatsMOBIx3');



$('.ViewStatsx4').removeClass('ViewStatsMOBIx4');
$('.ViewStatsChartx4').removeClass('ViewStatsChartMOBIx4');
$('.StatsButtonsBalx4').removeClass('StatsButtonsBalMOBIx4');
$('.StatsButtonsx4').removeClass('StatsButtonsMOBIx4');
$('.Balancex4').removeClass('BalanceMOBIx4');
$('.extraStatsx4').removeClass('extraStatsMOBIx4');
$('.SelYearMonthx4').removeClass('SelYearMonthMOBIx4');
$('.StatMenusx4').removeClass('StatMenusMOBIx4'); 



$('.Menux4').removeClass('MenuMOBIx4');
$('.HelloNamex4').removeClass('HelloNameMOBIx4');
$('.HelloPhotox4').removeClass('HelloPhotoMOBIx4');

$('.ThinTapbarx4x4').removeClass('ThinTapbarx4MOBIx4');


$('.AtmFin5').removeClass('AtmFin5MOBI');
$('.finB5x4').removeClass('finB5MOBIx4');
$('.SelectWideCTAx4').removeClass('SelectWideCTAMOBIx4');

$('.AtmFin11').removeClass('AtmFin11MOBI');
$('.finB1').removeClass('finB1MOBI');
$('.AtmFin2a').removeClass('AtmFin2aMOBI');
$('.AtmFin2').removeClass('AtmFin2MOBI');
$('.FinB2a').removeClass('FinB2aMOBI');
$('.FinB2').removeClass('FinB2MOBI');
$('.AtmFin3').removeClass('AtmFin3MOBI');
$('.FinB3').removeClass('FinB3MOBI');
$('.AtmFinIcons').removeClass('AtmFinIconsMOBI');
$('.labelTextB3').removeClass('labelTextB3MOBI');
$('.AtmFin4').removeClass('AtmFin4MOBI');
$('.FinB4').removeClass('FinB4MOBI');
$('.AtmFin5').removeClass('AtmFin5MOBI');


$('.AccPerformancex4').removeClass('AccPerformanceMOBIx4');



$('.RemitElementsx4').removeClass('RemitElementsMOBIx4');
$('.RemitLabelsx4').removeClass('RemitLabelsMOBIx4'); 
$('.RemitLabels2x4').removeClass('RemitLabels2MOBIx4');


$('.flagx14, .flagx13').removeClass('flagMOBIx14');

$('.ConfirmRemitx4').removeClass('ConfirmRemitMOBIx4');






$('.AssetMOBIx4').removeClass('MiniAssetMOBIx4 '); 
$('.AssetSymbolMOBIx4').removeClass('MiniAssetSymbolMOBIx4 '); 
$('.AssetNameMOBIx4').removeClass('MiniAssetNameMOBIx4');
$('.IhaveThisMuchMOBIx4').removeClass('MiniIhaveThisMuchMOBIx4');
$('.MyAssetinRealValMOBIx4').removeClass('MiniMyAssetinRealValMOBIx4');
$('.EnterAssetQtyMOBIx4').removeClass('MiniEnterAssetQtyMOBIx4');
$('.InputAssetQtyMOBIx4').removeClass('MiniInputAssetQtyMOBIx4');



$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');


$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');


$('.Assetx4').removeClass('RectangledAssetMOBIx4');
$('.MyAssetinRealValx4').removeClass('RectangledMyAssetinRealValMOBIx4');
$('.EnterAssetQtyx4').removeClass('RectangledEnterAssetQtyMOBIx4');

$('.Assetx4').removeClass('LinearAssetx4');
$('.AssetNamex4').removeClass('LinearAssetNamex4');
$('.AssetBadgeAndnamex4').removeClass('LinearAssetBadgeAndnamex4');
$('.AssetAndAbrex4').removeClass('LinearAssetAndAbrex4');
$('.MyCurrentPricex4').removeClass('LinearMyCurrentPricex4');
$('.EnterAssetQtyx4').removeClass('LinearEnterAssetQtyx4');


$('.NumPadx4').removeClass('NumPadMOBIx4');

$('.SelectBillDenomix4').addClass('SelectBillDenomiMOBIx4');
$('.SelectBillPayx4').addClass('SelectBillPayMOBIx4');
$('.ServicesXX').addClass('ServicesMOBIXX'); 




$('.SendMoney222x4').removeClass('SendMoney222MOBIx4');
$('.friends2x4').removeClass('friends2MOBIx4 '); 
$('.SpecifySendReQAmount2x4').removeClass('SpecifySendReQAmountMOBI2x4');
$('.ContactName2x4').removeClass('ContactName2MOBIx4');
$('.Mike2x4').removeClass('Mike2MOBIx4');
$('.MikeB2x4').removeClass('MikeB2MOBIx4');


$('.SendMoney333x4').removeClass('SendMoney333MOBIx4');
$('.friends3x4').removeClass('friends3MOBIx4 '); 
$('.SpecifySendReQAmount3x4').removeClass('SpecifySendReQAmountMOBI3x4');
$('.ContactName3x4').removeClass('ContactName3MOBIx4');
$('.FriendMemo3x4').removeClass('FriendMemo3MOBIx4');
$('.MikeB3x4').removeClass('MikeB3MOBIx4');


 $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarx4');
 $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarx4');




$('.AccountsX1w8').removeClass('AccountsMOBIX1w8');
$('.acm2x1w8').removeClass('acm2MOBIx1w8');
$('.AccountsX13w8').removeClass('AccountsMOBIX13w8');
$('.acm2x13w8').removeClass('acm2x13MOBIw8');
$('.AccountsX14w8').removeClass('AccountsX14MOBIw8');
$('.acm2x14w8').removeClass('acm2x14MOBIw8');

$('.acm2Buttonsx15').removeClass('acm2ButtonsMOBIx15');




if (TapbarBottomx4 === true){ 

$('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
$('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
$('.MainTransferx5').addClass('TapBar2MainTransferx5');

}



$('.ServicesX1').removeClass('ServicesMOBIXX');



$('.acm2Buttonsx17').removeClass('acm2ButtonsMOBIx17');


});






























$('.NOnumpadLeftx4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.qty2x4 ').removeClass('LeftShiftedqty2x4');
$('.amountx4').removeClass('LeftShiftedamountx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpacex4');
$('.feesx4').removeClass('LeftShiftedfeesx4');
$('.numPeriodx4').removeClass('LeftShiftednumPeriodx4');



$('.amountx4').removeClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('LeftShiftedfeesMOBIx4');


$('.qty2x4 ').removeClass('RightShiftedqty2x4');
$('.amountx4').removeClass('RightShiftedamountx4');
$('.amountInputx4').removeClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('RightShiftedbackSpacex4');
$('.feesx4').removeClass('RightShiftedfeesx4');


$('.amountx4').removeClass('RightshiftedamountMOBIx4');
$('.amountInputx4').removeClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('RightShiftedfeesMOBIx4');

$('.qty2x4').removeClass('qty2MOBIxLargex4');
$('.NumPadx4').removeClass('NumPadMOBIxLargex4');
$('.backSpacex4').removeClass('backSpaceMOBIxLargex4');





});



$('.numpadLeftx4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


$('.amountx4').removeClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('LeftShiftedfeesMOBIx4');





$('.amountx4').removeClass('RightshiftedamountMOBIx4');
$('.amountInputx4').removeClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('RightShiftedfeesMOBIx4');

$('.qty2x4 ').removeClass('RightShiftedqty2x4');
$('.amountx4').removeClass('RightShiftedamountx4');
$('.amountInputx4').removeClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('RightShiftedbackSpacex4');
$('.feesx4').removeClass('RightShiftedfeesx4');


$('.qty2x4').removeClass('qty2MOBIxLargex4');
$('.NumPadx4').removeClass('NumPadMOBIxLargex4');
$('.backSpacex4').removeClass('backSpaceMOBIxLargex4');




$('.qty2x4 ').addClass('LeftShiftedqty2x4');
$('.amountx4').addClass('LeftShiftedamountx4');
$('.amountInputx4').addClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').addClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').addClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').addClass('LeftShiftedbackSpacex4');
$('.feesx4').addClass('LeftShiftedfeesx4');
$('.numPeriodx4').addClass('LeftShiftednumPeriodx4');




});




$('.numpadLeftMOBIx4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.qty2x4 ').removeClass('LeftShiftedqty2x4');
$('.amountx4').removeClass('LeftShiftedamountx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpacex4');
$('.feesx4').removeClass('LeftShiftedfeesx4');


$('.qty2x4 ').removeClass('RightShiftedqty2x4');
$('.amountx4').removeClass('RightShiftedamountx4');
$('.amountInputx4').removeClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('RightShiftedbackSpacex4');
$('.feesx4').removeClass('RightShiftedfeesx4');

$('.amountx4').removeClass('RightshiftedamountMOBIx4');
$('.amountInputx4').removeClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('RightShiftedfeesMOBIx4');

$('.qty2x4').removeClass('qty2MOBIxLargex4');
$('.NumPadx4').removeClass('NumPadMOBIxLargex4');
$('.backSpacex4').removeClass('backSpaceMOBIxLargex4');




$('.amountx4').addClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').addClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').addClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').addClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').addClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').addClass('LeftShiftedfeesMOBIx4');
$('.numPeriodx4').addClass('LeftShiftednumPeriodx4');
});






});


// /////////////////////////

// //////////////NumPad Right /////////////


$('.numpadRightx4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


$('.amountx4').removeClass('RightshiftedamountMOBIx4');
$('.amountInputx4').removeClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('RightShiftedfeesMOBIx4');





$('.amountx4').removeClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('LeftShiftedfeesMOBIx4');

$('.qty2x4 ').removeClass('LeftShiftedqty2x4');
$('.amountx4').removeClass('LeftShiftedamountx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpacex4');
$('.feesx4').removeClass('LeftShiftedfeesx4');

$('.qty2x4').removeClass('qty2MOBIxLargex4');
$('.NumPadx4').removeClass('NumPadMOBIxLargex4');
$('.backSpacex4').removeClass('backSpaceMOBIxLargex4');




$('.qty2x4 ').addClass('RightShiftedqty2x4');
$('.amountx4').addClass('RightShiftedamountx4');
$('.amountInputx4').addClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').addClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').addClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').addClass('RightShiftedbackSpacex4');
$('.feesx4').addClass('RightShiftedfeesx4');
$('.numPeriodx4').addClass('RightShiftednumPeriodx4');



});




$('.numpadRightMOBIx4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.qty2x4 ').removeClass('RightShiftedqty2x4');
$('.amountx4').removeClass('RightShiftedamountx4');
$('.amountInputx4').removeClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('RightShiftedbackSpacex4');
$('.feesx4').removeClass('RightShiftedfeesx4');


$('.qty2x4 ').removeClass('LeftShiftedqty2x4');
$('.amountx4').removeClass('LeftShiftedamountx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpacex4');
$('.feesx4').removeClass('LeftShiftedfeesx4');

$('.amountx4').removeClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('LeftShiftedfeesMOBIx4');


$('.qty2x4').removeClass('qty2MOBIxLargex4');
$('.NumPadx4').removeClass('NumPadMOBIxLargex4');
$('.backSpacex4').removeClass('backSpaceMOBIxLargex4');




$('.amountx4').addClass('RightshiftedamountMOBIx4');
$('.amountInputx4').addClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').addClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').addClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').addClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').addClass('RightShiftedfeesMOBIx4');
$('.numPeriodx4').addClass('RightShiftednumPeriodx4');
});





// //////////////NumPad Right /////////////

/////////////////NumPad Large////////////


$('.numpadLargex4').click(function(){

      $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


$('.amountx4').removeClass('RightshiftedamountMOBIx4');
$('.amountInputx4').removeClass('RightShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('RightShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('RightShiftedfeesMOBIx4');


$('.amountx4').removeClass('LeftshiftedamountMOBIx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputMOBIx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2MOBIx4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadMOBIx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpaceMOBIx4');
$('.feesx4').removeClass('LeftShiftedfeesMOBIx4');

$('.qty2x4 ').removeClass('LeftShiftedqty2x4');
$('.amountx4').removeClass('LeftShiftedamountx4');
$('.amountInputx4').removeClass('LeftShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('LeftShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('LeftShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('LeftShiftedbackSpacex4');
$('.feesx4').removeClass('LeftShiftedfeesx4');


$('.qty2x4 ').removeClass('RightShiftedqty2x4');
$('.amountx4').removeClass('RightShiftedamountx4');
$('.amountInputx4').removeClass('RightShiftedamountInputx4'); 
$('.qtyvalue2x4').removeClass('RightShiftedqtyvalue2x4');
$('.LinearNumPadx4').removeClass('RightShiftedLinearNumPadx4');
$('.backSpacex4').removeClass('RightShiftedbackSpacex4');
$('.feesx4').removeClass('RightShiftedfeesx4');
$('.numPeriodx4').removeClass('RightShiftednumPeriodx4');





$('.qty2x4').addClass('qty2MOBIxLargex4');
$('.NumPadx4').addClass('NumPadMOBIxLargex4');
$('.backSpacex4').addClass('backSpaceMOBIxLargex4');





});










$('.NumberPadModel1x4, .NumberPadModel2x4, .NumberPadModel3x4, .NumberPadModel4x4, .NumberPadModel5x4').click(function(){

  $('.Quanti2x4').hide();
  $('.Quanti1x4').show();
 

});




$('.NumberPadModel6x4').click(function(){

    $('.NumPadModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.Quanti1x4').hide();
  $('.Quanti2x4').show();

});


/////////////////NumPad Large////////////





/////////////Switch Fin Models////////////////////////







$('.AtmFinModel1').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin1').show('');
});



$('.AtmFinModel2a').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin2a').show('');
});



$('.AtmFinModel2b').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin2').show('');
});


$('.AtmFinModel3').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
  $('.RegFinx4').hide('');
  $('.AtmFin3').show('');
});



$('.AtmFinModel4').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin4').show('');
});



$('.AtmFinModel11').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin11').show('');
});



$('.AtmFinModel5').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.RegFinx4').hide('');
  $('.AtmFin5').show('');
});


$('.AtmFinModel6').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.CryptoFinx4').hide('');
  $('.AtmFin6').show('');
});




$('.AtmFinModel6b').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.CryptoFinx4').hide('');
  $('.AtmFin6b').show('');
});




$('.AtmFinModel7').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.CryptoFinx4').hide('');
  $('.AtmFin7').show('');
});



$('.AtmFinModel8').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ExpressFinx4').hide('');
  $('.AtmFin8').show('');
});


$('.AtmFinModel8b').click(function(){
  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ExpressFinx4').hide('');
  $('.AtmFin8b').show('');
});











// /////////////////////////



screenType2x4 = "Machine2x4",

$('#ATM1Machinex4').click(function(){

  screenType2x4 = 'Machine2x4';
  console.log('screenType2x4 = ' + screenType2x4);

});




$('#ATM1Mobilex4').click(function(){

   screenType2x4 = 'Mobile2x4';
   console.log('screenType2x4 = ' + screenType2x4);

;

});













////////////////////////////////////////
////////////////////////////////////////

TapbarBottomx4 = false;





$('.FintechTapbar1').click(function(){

   TapbarBottomx4 = false;

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar1x4').show();


   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');  

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4');
  
});



// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar2').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar2x4').show();  

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 



});


// //////////////////////////////////////////////
// //////////////////////////////////////////////


$('.FintechTapbar2a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar2ax4').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4'); 



    $('.MainTransferx5').addClass('TapBar2MainTransferx5');
    $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
    $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');

 if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

}

});


// //////////////////////////////////////////////
// //////////////////////////////////////////////


$('.FintechTapbar3').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar3x4').show();

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 


});

// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar3a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar3ax4').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');

   if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

   }



});

// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar4').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar4x4').show();

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 


});

// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar4a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar4x4').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4');

   if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

   }



});

// //////////////////////////////////////////////

// //////////////////////////////////////////////

$('.FintechTapbar5').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');
   
   $('.TapBarx4, .Networth ').hide();
   $('.TapBar5x4, .Netx9').show();

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4');

  

     

});



// //////////////////////////////////////////////
// //////////////////////////////////////////////


$('.FintechTapbar5a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');
   
   $('.TapBarx4, .Networth ').hide();
   $('.TapBar5ax4, .Netx9').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4');

   if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

   }


     

});



// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar6').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar6x4').show();

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 



});




// //////////////////////////////////////////////
// //////////////////////////////////////////////


$('.FintechTapbar6a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar6ax4').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4');

   if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

   }



});




// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar7').click(function(){

   TapbarBottomx4 = false;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar7x4').show(); 

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 


});



// //////////////////////////////////////////////
// //////////////////////////////////////////////


$('.FintechTapbar7a').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar7x4').show(); 

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4');

   if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

   } 



});



// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar8').click(function(){

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar8x4').show();  

   $('.BottomTapBarx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 


});



// //////////////////////////////////////////////
// //////////////////////////////////////////////

$('.FintechTapbar8a').click(function(){

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar8ax4').show();  

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4');

   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').removeClass('SendMoney333MOBITapBarMachinex4 SendMoney333MOBITapBarx4'); 


});





// //////////////////////////////////////////////
// //////////////////////////////////////////////



$('.FintechTapbar9').click(function(){

   TapbarBottomx4 = true;   

   $('.FintechTapbar').removeClass('FFTSelectedModelx4');
   $(this).addClass('FFTSelectedModelx4');

   $('.TapBarx4').hide();
   $('.TapBar9x4').show();

   $('.BottomTapBarx4').show();
   $('.fin2x4').addClass('Fin2NoRadiusx4'); 



    $('.MainTransferx5').addClass('TapBar2MainTransferx5');
    $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');
    $('.SendMoney333x4').addClass('SendMoney333MOBITapBarMachinex4');

 if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   $('.SendMoney333x4').addClass('SendMoney333MOBITapBarx4'); 

}

});


// //////////////////////////////////////////////
// //////////////////////////////////////////////














// ////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////

////////////////////////////////////////////////////

////////////////////////////////////////////////////

////////////////////////////////////////////////////

////////////////////////////////////////////////////

// ////////////////////////////////////


$('.TapBarFinTech1').click(function(){

//Tap bar at the top with regular buttons and no user


  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Regular';

  $('.UserNetXX').hide();



   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   $('.Hellox4').hide();
   $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

   $('.LanBgroupX4, .LanBgroupMOBIX4').show();



  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');
   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

   console.log('screenTypex4 = ' + screenTypex4);


  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  
});




$('.TapBarFinTech2').click(function(){
//Tap bar at the top with NO Buttons just the User

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Bottom';




$('.lan2x4').addClass('ThinTapbarx4x4');

 $('.MainTransferx5').addClass('TapBar2MainTransferx5');
 $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');



 if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');

   $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
}


   $('.UserNetXX').hide();

   $('.Hellox4').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIX4').hide();

   $('.lan2MOBIx4').removeClass('lan2MobileTop');

   
   $('.Bottomlan2MOBIx4').show();
   $('.fin2x4, .fin2MOBIx4').removeClass('RoundFinx4');
  
   $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').show('');
   $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');



   $('.ServicePanelx4').addClass('TapBar2servicePanelsMOBIx4');
   



  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  
    
});




$('.TapBarFinTech3').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';


   // $('.lan2x4').hide('');
   // $('.lan2MOBIx4').show('');


   // $('.lan2x4, .lan2MOBIx4').addClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
  

$('.lan2x4').addClass('ThinTapbarx4x4');

 if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');
}



 $('.UserNetx4').hide();
 $('.UserNetXX').hide();
   $('.Hellox4').show();
   $('.LanBgroupMOBIX4').hide();



   // $('.lan2x4, .lan2MOBIx4').addClass('lan2MobileTop');

  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');

   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  

});



// ///////////////////////////////////////////////////////////////////////////////////


// $('.TapBarFinTech3c').click(function(){
// //Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

//   $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
//   $(this).addClass('FFTSelectedModelx4');

//   Tapbarx4= 'Top';




// $('.lan2x4').addClass('ThinTapbarx4x4');

//  if(screenType2x4 === "Mobile2x4"){


//    $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
//    $('.lan2x4').removeClass('UserTapbarx4MOBIx4');
// }



//  $('.UserNetx4').hide();
//  $('.UserNetXX').hide();
//  $('.Hellox4').hide();
//  $('.LanBgroupMOBIX4').hide();

// $('.UserNetx11').show();



//    // $('.lan2x4, .lan2MOBIx4').addClass('lan2MobileTop');

//   $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
//    $('.Bottomlan2MOBIx4').hide();
//    $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


//   $('.fin2MOBIx4').addClass('RoundFinx4');

//    $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
//    $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
//    $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

//   $('.lan2Blankx4').hide();
//   $('.lan2Blank2x4').hide();
//   $('.AllLansxx').show();
  

// });





// ///////////////////////////////////////////////////////////////////////







$('.TapBarFinTech3a').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';


   // $('.lan2x4').hide('');
   // $('.lan2MOBIx4').show('');


   // $('.lan2x4, .lan2MOBIx4').addClass('ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
  

$('.lan2x4').addClass('ThinTapbarx4x4');

 if(screenType2x4 === "Mobile2x4"){


   $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');
}



 $('.UserNetx4').hide();
 $('.UserNetXX').hide();
   $('.Hellox4').show();
   $('.LanBgroupMOBIX4').hide();



   // $('.lan2x4, .lan2MOBIx4').addClass('lan2MobileTop');

  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');

   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  

});







$('.TapBarFinTech4').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';


  $('.Hellox4').hide();
  $('.LanBgroupX4').hide();
  $('.UserNetXX').hide();
  $('.UserNetx4').show();

   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   // $('.Hellox4').hide();
   // $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');


   // $('.LanBgroupX4, .LanBgroupMOBIX4').show();



  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');
   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');


  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  
   
});







$('.TapBarFinTech5').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';


  $('.Hellox4').hide();
  $('.LanBgroupX4').hide();
  $('.UserNetXX').hide();
  $('.UserNet2x4').show();

   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   // $('.Hellox4').hide();
   // $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

   // $('.LanBgroupX4, .LanBgroupMOBIX4').show();



  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');
   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
   
  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  
   
});

// /////////////////////////////////////////////////////







$('.TapBarFinTech6').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';


  $('.Hellox4').hide();
  $('.LanBgroupX4').hide();
  $('.UserNetXX').hide();
  $('.UserNet3x4').show();

   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4x4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   // $('.Hellox4').hide();
   // $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

   // $('.LanBgroupX4, .LanBgroupMOBIX4').show();



  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');
   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  
});





// /////////////////////////////////////////////////////







$('.TapBarFinTech7').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  Tapbarx4= 'Top';



  $('.Hellox4').hide();
  $('.LanBgroupX4').hide();
  $('.UserNetXX').hide();
  $('.UserNet4x4').show();

   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');
   $('.lan2x4').removeClass('ThinTapbarx4MOBIx4 ThinTapbarx4MOBIx4 UserTapbarx4MOBIx4');

   // $('.Hellox4').hide();
   // $('.LanBgroupMOBIX4').show();

   $('.lan2MOBIx4').addClass('lan2MobileTop');

   // $('.LanBgroupX4, .LanBgroupMOBIX4').show();



  $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').hide('');
   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4').removeClass('Fin2NoRadiusx4 RoundFinx4');


  $('.fin2MOBIx4').addClass('RoundFinx4');
   $('.ServicePanelx4').removeClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5 TapBar2MainTransferMOBIx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
  
  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').hide();
  $('.AllLansxx').show();
  

});




$('.TapBarFinTech8').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


 
   // $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');


   $('.UserNetXX').hide();

   $('.Hellox4').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIX4').hide();

   $('.lan2MOBIx4').removeClass('lan2MobileTop');

   
   $('.Bottomlan2MOBIx4').show();
   $('.fin2x4, .fin2MOBIx4').removeClass('RoundFinx4');
  
   $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').show('');
   $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');

   $('.ServicePanelx4').addClass('TapBar2servicePanelsMOBIx4');
   $('.MainTransferx5').addClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').addClass('SendMoney222MOBITapBarMachinex4');

      if(screenType2x4 === "Mobile2x4"){
    
    $('.Bottomlan2MOBIx4').show();
    $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');
    $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');
    $('.SendMoney222x4').addClass('SendMoney222MOBITapBarx4');
   }


  
  $('.AllLansxx').hide();
  $('.lan2Blankx4').show();
  $('.lan2Blank2x4').hide();


});




$('.TapBarFinTech9').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


 
   $('.lan2x4').addClass('ThinTapbarx4x4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');


   $('.UserNetXX').hide();

   $('.Hellox4').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIX4').hide();

   $('.lan2MOBIx4').removeClass('lan2MobileTop');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');
 
   $('.Bottomlan2MOBIx4').hide();
   // $('.fin2x4, .fin2MOBIx4').addClass('RoundFinx4');
  
   $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').show('');
   // $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');

   $('.Bottomlan2MOBIx4').hide();
   $('.fin2x4, .fin2MOBIx4').removeClass('RoundFinx4 Fin2NoRadiusx4');


   if(screenType2x4 === "Mobile2x4"){

    $('.lan2x4').addClass('ThinTapbarx4MOBIx4');

    $('.Bottomlan2MOBIx4').show();
    $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');
    $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');



   }


  
  $('.AllLansxx').hide();
  $('.lan2Blank2x4').hide();
  $('.lan2Blankx4').show();



   
});


$('.TapBarFinTech10').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


 
   $('.lan2x4').addClass('ThinTapbarx4x4');
   $('.lan2x4').removeClass('UserTapbarx4MOBIx4');


   $('.UserNetXX').hide();

   $('.Hellox4').show();
   $('.Menux4').show();
   $('.LanBgroupMOBIX4').hide();

   $('.lan2MOBIx4').removeClass('lan2MobileTop');
   $('.MainTransferx5').removeClass('TapBar2MainTransferx5');
   $('.SendMoney222x4').removeClass('SendMoney222MOBITapBarMachinex4 SendMoney222MOBITapBarx4');

   
   $('.Bottomlan2MOBIx4').hide();
   // $('.fin2x4, .fin2MOBIx4').addClass('RoundFinx4');
  
   $('.Bottomlan2MOBIx4 > .langBx4, .Bottomlan2MOBIx4 > .GrLanBMOBIx4').show('');
   // $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');

   $('.fin2x4, .fin2MOBIx4').removeClass('RoundFinx4 Fin2NoRadiusx4');


   if(screenType2x4 === "Mobile2x4"){

    $('.lan2x4').addClass('ThinTapbarx4MOBIx4');
    
    $('.Bottomlan2MOBIx4').show();
    $('.fin2x4, .fin2MOBIx4').addClass('Fin2NoRadiusx4');
    $('.MainTransferx5').addClass('TapBar2MainTransferMOBIx5');

   }


  
  $('.AllLansxx').hide();
  $('.lan2Blankx4').hide();
  $('.lan2Blank2x4').show();



   
});





$('.TapBarFinTech11').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.LanInnerx4').hide();
  $('.NoLanInnerx4').show();

});







$('.TapBarFinTech12').click(function(){
//Tap bar at the top with user and Buttons and with the empty grey bottom tap bar

  $('.TapBarFinTech').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.NoLanInnerx4').hide();
  $('.LanInnerx4').show();


});













$('.serDropx4 > button').click(function(){

     $('.ExtraAcm2xx').hide();

});


// ////////////////////////////////////






// //////////////////////////////////////////////////////////////////////////////////////





$('.Model1x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model2x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model3x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model4x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model5x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4')
});

$('.Model6x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});

$('.Model7x4').click(function(){
  $('.financialModelx4 ').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');
});





/////////////////////////////////////////


$('.SerModel1x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX1').show();
});


$('.SerModel2x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX4').show();
});


$('.SerModel3x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX24').show();
});


$('.SerModel4x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX42').show();
});


$('.SerModel5x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX5').show();
});


$('.SerModel6x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.FinSerModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

  $('.ServicesXX').hide();
  $('.ServicesX26').show();
});





// /////////////////////////////////


$('.AccModel1x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX1').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});




$('.AccModel2x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX13').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});





$('.AccModel3x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX14').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});



$('.AccModel4x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX5').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});



$('.AccModel45x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX55').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});


$('.AccModel47x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX57').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});




$('.AccModel5x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 
  
  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX15').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});





$('.AccModel5ax4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 
  
  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX17').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});






$('.AccModel5bx4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 
  
  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX27').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});



$('.AccModel5cx4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 
  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX37').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});






$('.AccModel6x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx2').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});




$('.AccModel7x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx3').show();

  if( screenType2x4 === "Mobile2x4"){
  $('.Networth').hide();  
    $('.Netx1').show()
  }

});





$('.AccModel8x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');


$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6').show();

  if( screenType2x4 === "Mobile2x4"){
  $('.Networth').hide();  
    $('.Netx1').hide()
  }

});




$('.AccModel9x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.ExpressATMfinXX, .RegFinsXX').hide(); 
$('.CryptoFinsXX').show(); 


  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6a').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }


  $('.CryptoFinx4').hide();
  $('.AtmFin7').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel7').addClass('FFTSelectedModelx4');



});




$('.AccModel10x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.ExpressATMfinXX, .RegFinsXX').hide(); 
$('.CryptoFinsXX').show(); 


  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6b').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

    $('.CryptoFinx4').hide();
  $('.AtmFin7').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel7').addClass('FFTSelectedModelx4');

});




$('.AccModel11x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.ExpressATMfinXX, .RegFinsXX').hide(); 
$('.CryptoFinsXX').show(); 


  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6c').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

    $('.CryptoFinx4').hide();
  $('.AtmFin7').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel7').addClass('FFTSelectedModelx4');


});






$('.AccModel12x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.ExpressATMfinXX, .RegFinsXX').hide(); 
$('.CryptoFinsXX').show(); 


  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6d').show();

  $('.CryptoFinx4').hide();
  $('.AtmFin6').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel6').addClass('FFTSelectedModelx4');

});





$('.AccModel13x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.ExpressATMfinXX, .RegFinsXX').hide(); 
$('.CryptoFinsXX').show(); 


  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx6e').show();

  $('.CryptoFinx4').hide();
  $('.AtmFin6').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel6').addClass('FFTSelectedModelx4');
      
});








$('.AccModel14x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .RegFinsXX').hide(); 
$('.ExpressATMfinXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx7d').show();

  $('.ExpressFinx4').hide();
  $('.AtmFin8').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel8').addClass('FFTSelectedModelx4');

});







$('.AccModel15x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .RegFinsXX').hide(); 
$('.ExpressATMfinXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx7e').show();

  $('.ExpressFinx4').hide();
  $('.AtmFin8').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel8').addClass('FFTSelectedModelx4');
      
});




$('.AccModel16x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .RegFinsXX').hide(); 
$('.ExpressATMfinXX').show(); 

  $('.SerAcc, .AccountsXX, .AccountXX').hide();
  $('.AccountXx7f').show();

  $('.ExpressFinx4').hide();
  $('.AtmFin8').show();

  $('.AtmFinModel').removeClass('FFTSelectedModelx4');
  $('.AtmFinModel8').addClass('FFTSelectedModelx4');
      
});













$('.AccModel17x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX1w8').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});




$('.AccModel18x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX13w8').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});





$('.AccModel19x4').click(function(){
  console.log('Model1x4 was clicked');
  $('.AccModelx4').removeClass('FFTSelectedModelx4');
  $(this).addClass('FFTSelectedModelx4');

$('.CryptoFinsXX, .ExpressATMfinXX').hide(); 
$('.RegFinsXX').show(); 

  $('.SerAcc').show();
  $('.AccountsXX, .AccountXX').hide();
  $('.AccountsX14w8').show();

    if( screenType2x4 === "Mobile2x4"){
    $('.Networth').hide();  
    $('.Netx1').show()
  }

});





