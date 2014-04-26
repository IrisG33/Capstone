$( document ).ready(function() {

});
var numAsset = 1;
var numIncome = 1;
function addIncomeRow()
{ 
  $('#IncomeTable tr:last').after(htmlIncome);
}
function removeIncomeRow()
{ 
  $('#IncomeTable tr:last').remove();
}
function addAssetRow()
{ 
  $('#assetTable tr:last').after(htmlAsset);
}
function removeAssetRow()
{ 
  $('#assetTable tr:last').remove();
}
function htmlAsset(){
	var strVar="";
	strVar += "<tr><td><input size = \"21\" type=\"text\" name=\"HTHFA_FAMILY_MEMBER_NAME"+numAsset+"\"><\/td><td><input size = \"2\" type=\"text\" name=\"HTHFA_NUMBER"+numAsset+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFA_ASSET_TYPE"+numAsset+"\"><\/td><td><input size = \"18\" type=\"text\" name=\"HTHFA_ASSET_CASH_VALUE"+numAsset+"\" id = \"cashValueAsset"+numAsset+"\" placeholder=\"$\"><\/td><td><input size = \"18\" type=\"text\" id = \"income"+numAsset+"\" name=\"HTHFA_ANTICIPATED_INCOME"+numAsset+"\" placeholder=\"$\"><\/td><\/tr>";
	return strVar;
}
function htmlIncome(){
	var strVar2="";
	strVar2 += "<tr><td style=\"word-wrap:break-word;\"><input size = \"21\" type=\"text\" name=\"HTHFI_FAMILY_MEMBER_NAME"+numIncome+"\"><\/td><td style=\"word-wrap:break-word;\"><input size = \"2\" type=\"text\" name=\"HTHFI_NUMBER"+numIncome+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFI_INCOME_CODE"+numIncome+"\"><\/td><td><input size = \"13\" type=\"text\" name=\"HTHFI_DOLLARS_PER_YEAR"+numIncome+"\" placeholder =\"$\"><\/td><td><input size = \"20\" type=\"text\" name=\"HTHFI_INCOME_EXCLUSIONS"+numIncome+"\" placeholder =\"$\"><\/td><td><input size = \"24\" type=\"text\" name=\"HTHFI_INCOME_AFTER_EXCLUSIONS"+numIncome+"\" placeholder =\"$\"><\/td><\/tr>";
	return strVar2;
}
$(function() {
	var f = $("#6f");
	var g= $("#6g");
	var h= $("#6h");
	var i= $("#6i");
	var j= $("#6j");
	var gg= $("#7g");
	var ii= $("#7i");
	
	f.change(function(){
		var fv = f.val();
		var hv = h.val();
		if(fv <= 5000){
		    i.val(0);
		}else{
			i.val(fv*hv);
		}
		if(parseInt(i.val())>parseInt(g.val())){
			j.val(i.val());
		}else{
			j.val(g.val());
		}		
		ii.val(parseInt(j.val())+parseInt(gg.val()));
	})
	h.change(function(){
		var fv = f.val();
		var hv = h.val();
		if(fv <= 5000){
		    i.val(0);
		}else{
			i.val(fv*hv);
		}
		if(parseInt(i.val())>parseInt(g.val())){
			j.val(i.val());
		}else{
			j.val(g.val());
		}		
		ii.val(parseInt(j.val())+parseInt(gg.val()));
	})
	g.change(function(){
		var fv = f.val();
		var hv = h.val();
		if(fv <= 5000){
		    i.val(0);
		}else{
			i.val(fv*hv);
		}
		if(parseInt(i.val())>parseInt(g.val())){
			j.val(i.val());
		}else{
			j.val(g.val());
		}		
		ii.val(parseInt(j.val())+parseInt(gg.val()));	
	})
	gg.change(function(){
		var fv = f.val();
		var hv = h.val();
		if(fv <= 5000){
		    i.val(0);
		}else{
			i.val(fv*hv);
		}
		if(parseInt(i.val())>parseInt(g.val())){
			j.val(i.val());
		}else{
			j.val(g.val());
		}		
		ii.val(parseInt(j.val())+parseInt(gg.val()));	
	})
});