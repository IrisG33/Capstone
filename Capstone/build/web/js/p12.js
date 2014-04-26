$( document ).ready(function() {
	
	$("#moveUnder").hide();
	$("select[name='HTPHHO_FAMILY_PHA_JURISDICTION']").on('change', function() {
		$("#moveUnder").hide();
		if($(this).val()=="y") $("#moveUnder").show();
		else if($(this).val()=="n") $("#moveUnder").hide();
    });
	
});

$(function() {
	// f g h i j k m n p q r s aa ab ac ad ae af
	var f = $("#15f");
	var g = $("#15g");
	var h = $("#15h");
	var i = $("#15i");
	var j = $("#15j");
	var k = $("#15k");
	var m = $("#15m");
	var n = $("#15n");
	var p = $("#15p");
	var q = $("#15q");
	var r = $("#15r");
	var s = $("#15s");
	var aa = $("#15aa");
	var ab = $("#15ab");
	var ac = $("#15ac");
	var ad = $("#15ad");
	var ae = $("#15ae");
	var af = $("#15af");
	
	f.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	g.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	h.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	i.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	j.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	k.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));
	});
	n.change(function(){
		var sum = 0;
		var fv = parseInt(f.val());
		var gv = parseInt(g.val());
		var hv = parseInt(h.val());
		var iv = parseInt(i.val());
		var jv = parseInt(j.val());
		var kv = parseInt(k.val());
		sum = parseInt(fv) + parseInt(gv) + parseInt(hv) +parseInt(iv) + parseInt(jv) + parseInt(kv);
		m.val(sum);
		if(parseInt(m.val()) < parseInt(n.val())){
			p.val(m.val());
		}else{
			p.val(n.val());
		}
		var diff = parseInt(p.val()) - parseInt(q.val());
		if(diff > 0){
			r.val(diff);
		}else{
			r.val(0);
		}
		s.val(parseInt(m.val()) - parseInt(r.val()));
		aa.val(r.val());
		ae.val(parseInt(aa.val()) * parseInt(ad.val()));
		af.val(parseInt(m.val()) - parseInt(ae.val()));	
	});
	ab.change(function(){
		ad.val(parseInt(ab.val())/parseInt(ac.val()));
	});
	ac.change(function(){
		ad.val(parseInt(ab.val())/parseInt(ac.val()));
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