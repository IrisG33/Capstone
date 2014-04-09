$( document ).ready(function() {

	$("#rule1").hide();
	$("#rule2").hide();
	$("#rule3").hide();
	$("#rule4").hide();
	$("#p8").validate({
		rules: {
			TTP: { required: true, maxlength: 10 },
			unitRent: { required: true, maxlength: 10 },			
		},
		messages: {
			//agencyName: "Please enter your Agency Name",
			//for customizing error messages
		}
	});

});

$(function() {
	console.log("Hi");
	var ttp = $("#TTP");
	var cRent= $("#ceilingRent");
	var uAllowance = $("#utilityAllowance");
	var lowRent = $("#lowRent");
	var h = $("#10h");
	var i = $("#10i");	
	var j = $("#10j");	
	var k= $("#10k");	
	var n = $("#10n");
	var p = $("#10p");
	var r = $("#10r");
	r.change(function(){
		var hv = h.val();
		var nv = n.val();
		p.val(hv - nv);
		var rv = r.val();
		var sv = p.val() - rv;
		if(sv >= 0){
			$("#10st").val(changeTwoDecimal_f(sv));
			$("#rule3").show();
			$("#rule4").hide();	
		}else{
			$("#10sr").val(changeTwoDecimal_f(sv));
			$("#rule4").show();
			$("#rule3").hide();
		}
	})
	j.change(function(){  
		var iv = i.val();
		var jv = j.val();
		var kv = k.val();
		n.val((changeTwoDecimal_f(iv / kv)*jv));
		var hv = h.val();
		var nv = n.val();
		p.val(hv - nv);
		var rv = r.val();
		var sv = p.val() - rv;
		if(sv >= 0){
			$("#10st").val(changeTwoDecimal_f(sv));
			$("#rule3").show();
			$("#rule4").hide();	
		}else{
			$("#10sr").val(changeTwoDecimal_f(sv));
			$("#rule4").show();
			$("#rule3").hide();
		}
	});
	k.change(function(){  
		var iv = i.val();
		var jv = j.val();
		var kv = k.val();
		n.val((changeTwoDecimal_f(iv / kv)*jv));
		var hv = h.val();
		var nv = n.val();
		p.val(hv - nv);
		var rv = r.val();
		var sv = p.val() - rv;
		if(sv >= 0){
			$("#10st").val(changeTwoDecimal_f(sv));
			$("#rule3").show();
			$("#rule4").hide();	
		}else{
			$("#10sr").val(changeTwoDecimal_f(sv));
			$("#rule4").show();
			$("#rule3").hide();
		}
	});
	h.change(function(){  
		var hv = h.val();
		var av = ttp.val();
		$("#10i").val(hv - av);
		var iv = i.val();
		var jv = j.val();
		var kv = k.val();
		n.val((changeTwoDecimal_f(iv / kv)*jv));	
		var nv = n.val();
		p.val(hv - nv);var rv = r.val();
		var sv = p.val() - rv;
		if(sv >= 0){
			$("#10st").val(changeTwoDecimal_f(sv));
			$("#rule3").show();
			$("#rule4").hide();	
		}else{
			$("#10sr").val(changeTwoDecimal_f(sv));
			$("#rule4").show();
			$("#rule3").hide();
		}
	});
	ttp.change(function(){  
        var num1 = ttp.val();// 取得first对象的值  
        var num2 = cRent.val();// 取得second对象的值  
        var sum = 0;
		if((num1-0) < (num2-0)){
			sum = num1;
		}else{
			sum = num2;
		}
		$("#lowRent").val(sum);
		var diff = 0;
		diff = lowRent.val() - uAllowance.val();
		if(diff >= 0){
			$("#tenantRent").val(diff);
			$("#rule1").show();
			$("#rule2").hide();			
		}else{
			$("#creditTenant").val(diff);
			$("#rule1").hide();
			$("#rule2").show();
		}
		var hv = h.val();
		var av = ttp.val();
		$("#10i").val(hv - av);
		var iv = i.val();
		var jv = j.val();
		var kv = k.val();
		n.val((changeTwoDecimal_f(iv / kv)*jv));
		var nv = n.val();
		p.val(hv - nv);var rv = r.val();
		var sv = p.val() - rv;
		if(sv >= 0){
			$("#10st").val(changeTwoDecimal_f(sv));
			$("#rule3").show();
			$("#rule4").hide();	
		}else{
			$("#10sr").val(changeTwoDecimal_f(sv));
			$("#rule4").show();
			$("#rule3").hide();
		}
	});
    cRent.change(function(){  
        var num1 = ttp.val();// 取得first对象的值  
        var num2 = cRent.val();// 取得second对象的值  
        var sum = 0;
		if((num1-0) < (num2-0)){
			sum = num1;
		}else{
			sum = num2;
		}
		$("#lowRent").val(sum);
		var diff = 0;
		diff = lowRent.val() - uAllowance.val();
		if(diff >= 0){
			$("#tenantRent").val(diff);
			$("#rule1").show();
			$("#rule2").hide();			
		}else{
			$("#creditTenant").val(diff);
			$("#rule1").hide();
			$("#rule2").show();
		}
		
	}); 
    uAllowance.change(function(){  
        var num1 = ttp.val();// 取得first对象的值  
        var num2 = cRent.val();// 取得second对象的值  
        var sum = 0;
		if((num1-0) < (num2-0)){
			sum = num1;
		}else{
			sum = num2;
		}
		$("#lowRent").val(sum);
		var diff = 0;
		diff = lowRent.val() - uAllowance.val();
		if(diff >= 0){
			$("#tenantRent").val(diff);
			$("#rule1").show();
			$("#rule2").hide();			
		}else{
			$("#creditTenant").val(Math.round(diff*100)/100);
			$("#rule1").hide();
			$("#rule2").show();
		}
	}); 

});
function changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}