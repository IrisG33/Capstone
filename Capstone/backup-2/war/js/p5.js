var num = 4;
var numAsset = 4;
function addIncomeRow()
{ 
  $('#IncomeTable').append(htmlIncome);
}
function htmlIncome(){
	var strVar="";
	num += 1;
	strVar += "<tr><td style=\"word-wrap:break-word;\"><input size = \"21\" type=\"text\" name=\"HTHFI_FAMILY_MEMBER_NAME"+num+"\"><\/td><td style=\"word-wrap:break-word;\"><input size = \"2\" type=\"text\" name=\"HTHFI_NUMBER"+num+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFI_INCOME_CODE"+num+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFI_DOLLARS_PER_YEAR"+num+"\" placeholder =\"$\"><\/td><td><input size = \"20\" type=\"text\" name=\"HTHFI_INCOME_EXCLUSIONS"+num+"\" placeholder =\"$\"><\/td><td><input size = \"24\" type=\"text\" name=\"HTHFI_INCOME_AFTER_EXCLUSIONS"+num+"\" placeholder =\"$\"><\/td><\/tr>";
	return strVar;
}
function removeIncomeRow()
{	
	num -= 1;
	$('#IncomeTable tr:last').remove();
}
function addAssetRow()
{ 
	numAsset += 1;
	$('#assetTable').append(htmlAsset);

}
function htmlAsset(){
	var strVar="";
	strVar += "<tr><td><input size = \"21\" type=\"text\" name=\"HTHFA_FAMILY_MEMBER_NAME"+numAsset+"\"><\/td><td><input size = \"2\" type=\"text\" name=\"HTHFA_NUMBER"+numAsset+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFA_ASSET_TYPE"+numAsset+"\"><\/td><td><input size = \"18\" type=\"text\" name=\"HTHFA_ASSET_CASH_VALUE"+numAsset+"\" placeholder=\"$\"><\/td><td><input size = \"18\" type=\"text\" name=\"HTHFA_ANTICIPATED_INCOME"+numAsset+"\" placeholder=\"$\"><\/td><\/tr>";
	return strVar;
}
function removeAssetRow()
{ 
	numAsset -= 1;
  	$('#assetTable tr:last').remove();
}
