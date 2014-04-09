$( document ).ready(function() {
	$("#rule1").show();
	$("#rule2").hide();	
	$("#rule3").hide();
	$("#rule4").hide();	
	$("#rule5").hide();
	$("select[name='underP']").on('change', function() {
		$("#rule1").show();
		if($(this).val()=="yes") $("#rule1").show();
		else if($(this).val()=="no") $("#rule1").hide();
	});
	
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
	var k = $("#11k");
	var m = $("#11m");
	var n = $("#11n");
	var q = $("#11q");
	var r = $("#11r");
	var s = $("#11s");
	var t = $("#11t");
	var aa = $("#11aa");
	var ae = $("#11ae");
	var af = $("#11af");
	var ag = $("#11ag");
	var ah = $("#11ah");
	var ai = $("#11ai");
	var aj = $("#11aj");
	var ak = $("#11ak");
	var an = $("#11an");
	m.change(function(){
	  $("#11aj").val(m.val());
    });
	k.change(function(){
		var kv = parseInt(k.val());
		var mv = parseInt(m.val());
		var nv = n.val();
		var res = parseInt(kv) + parseInt(mv);
		 $("#11n").val(res);
		var qv = q.val();
		if(qv < nv){
			 $("#11r").val(changeTwoDecimal_f(nv - qv));
		}else{
			 $("#11r").val(0);
		}
		var rv = r.val();
		var diff = kv - rv;
		if(diff >= 0){
		   $("#11st").val(changeTwoDecimal_f(diff));
		   $("#rule2").show();
		   $("#rule3").hide();	
		}else{
		   $("#11sr").val(changeTwoDecimal_f(diff));
		   $("#rule3").show();
		   $("#rule2").hide();		
		}
		if(kv < rv){
			 $("#11t").val(kv);
		}else{
			 $("#11t").val(rv);
		}		
		var aav = nv - qv;
		 $("#11aa").val(aav);
	 	var aav = $("#11aa").val();
	 	var agv = $("#11ag").val();
		$("#11ah").val(aav * agv);
		
		$("#11ai").val($("#11n").val() - $("#11ah").val());
		
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
	});
	
	m.change(function(){
		var kv = k.val();
		var mv = m.val();		
		var nv = n.val();
		var res = parseInt(kv) + parseInt(mv);
		 $("#11n").val(res);
		var qv = q.val();
		if(qv < nv){
			 $("#11r").val(changeTwoDecimal_f(nv - qv));
		}else{
			 $("#11r").val(0);
		}
		var rv = r.val();
		var diff = kv - rv;
		if(diff >= 0){
		   $("#11st").val(changeTwoDecimal_f(diff));
		   $("#rule2").show();
		   $("#rule3").hide();	
		}else{
		   $("#11sr").val(changeTwoDecimal_f(diff));
		   $("#rule3").show();
		   $("#rule2").hide();		
		}
		if(kv < rv){
			 $("#11t").val(kv);
		}else{
			 $("#11t").val(rv);
		}		
		var aav = nv - qv;
		 $("#11aa").val(aav);
	 	var aav = $("#11aa").val();
	 	var agv = $("#11ag").val();
		$("#11ah").val(aav * agv);
		$("#11ai").val($("#11n").val() - $("#11ah").val());
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
	});
	
	q.change(function(){
		var kv = parseInt(k.val());
		var mv = parseInt(m.val());		
		var nv = parseInt(n.val());
		var res = parseInt(kv) + parseInt(mv);
		 $("#11n").val(res);
		var qv = q.val();
		if(qv < nv){
			 $("#11r").val(changeTwoDecimal_f(nv - qv));
		}else{
			 $("#11r").val(0);
		}
		var rv = r.val();
		var diff = kv - rv;
		if(diff >= 0){
		   $("#11st").val(changeTwoDecimal_f(diff));
		   $("#rule2").show();
		   $("#rule3").hide();	
		}else{
		   $("#11sr").val(changeTwoDecimal_f(diff));
		   $("#rule3").show();
		   $("#rule2").hide();		
		}
		if(kv < rv){
			 $("#11t").val(kv);
		}else{
			 $("#11t").val(rv);
		}		
		var aav = nv - qv;
		 $("#11aa").val(aav);
	 	var aav = $("#11aa").val();
	 	var agv = $("#11ag").val();
		$("#11ah").val(aav * agv);
		$("#11ai").val($("#11n").val() - $("#11ah").val());
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
		 
	});
	aa.change(function(){
	 	var aav = $("#11aa").val();
	 	var agv = $("#11ag").val();
		$("#11ah").val(aav * agv);
		$("#11ai").val($("#11n").val() - $("#11ah").val());
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
	});
	ag.change(function(){
	 	var aav = $("#11aa").val();
	 	var agv = $("#11ag").val();
		$("#11ah").val(aav * agv);
		$("#11ai").val($("#11n").val() - $("#11ah").val());
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
	});
	ae.change(function(){
	 	var aev = $("#11ae").val();
	 	var afv = $("#11af").val();
		$("#11ag").val(changeTwoDecimal_f(aev/afv));
	 	var agv = $("#11ag").val();
		var aav = $("#11aa").val();
		$("#11ah").val(changeTwoDecimal_f(aav * agv));
		$("#11ai").val(changeTwoDecimal_f($("#11n").val() - $("#11ah").val()));
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
		}
	});
	af.change(function(){
	 	var aev = $("#11ae").val();
	 	var afv = $("#11af").val();
		$("#11ag").val(changeTwoDecimal_f(aev/afv));
	 	var agv = $("#11ag").val();
		var aav = $("#11aa").val();
		$("#11ah").val(changeTwoDecimal_f(aav * agv));
		$("#11ai").val(changeTwoDecimal_f($("#11n").val() - $("#11ah").val()));
		var aiv = $("#11ai").val();
	 	var ajv = aj.val();
	 	var diff2 = aiv - ajv;
		if(diff2 >= 0){
		   $("#11akt").val(changeTwoDecimal_f(diff2));
		   $("#rule4").show();
		   $("#rule5").hide();	
		   var hap = $("#11akt").val() - kv;
		   $("#11an").val(hap);
		}else{
		   $("#11akr").val(diff2);
		   $("#rule5").show();
		   $("#rule4").hide();	
		   $("#11an").val(kv);
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