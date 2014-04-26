$( document ).ready(function() {
	$("#nonproprated").hide();
	$("#moved").hide();
	
	$("select[name='HTPHHV_FAMILY_PHA_JURISDICTION']").on('change', function() {
		$("#nonproprated").hide();
		if($(this).val()=="Yes") $("#moved").hide();
		else if($(this).val()=="No") $("#moved").show();
    });
	$("select[name='ifProrated']").on('change', function() {
		$("#nonproprated").hide();
		if($(this).val()=="y") $("#nonproprated").hide();
		else if($(this).val()=="n") $("#nonproprated").show();
    });
});

$(function() {
	// f g h i j k m n p q r s aa ab ac ad ae af
	var j = $("#12j");
	var k = $("#12k");
	var m = $("#12m");
	var p = $("#12p");
	var q = $("#12q");
	var r = $("#12r");
	var s = $("#12s");
	var t = $("#12t");
	var u = $("#12u");
	var v = $("#12v");
	var w = $("#12w");
	var ab = $("#12ab");
	var ac = $("#12ac");
	var ad = $("#12ad");
	var ae = $("#12ae");
	var af = $("#12af");
	var ag = $("#12ag");
	var ah = $("#12ah");
	var ai = $("#12ai");
	var aj = $("#12aj");
	
	j.change(function(){
		p.val(parseInt(k.val()) + parseInt(m.val()));
		if(parseInt(j.val()) < parseInt(p.val())){
			q.val(parseInt(j.val()));
		}else{
			q.val(parseInt(p.val()));
		}
		s.val(parseInt(q.val()) - parseInt(r.val()));
		t.val(parseInt(p.val()) - parseInt(s.val()));
		if(parseInt(k.val())<parseInt(s.val())){
			u.val(parseInt(k.val()));
		}else{
			u.val(parseInt(s.val()));
		}
		v.val(parseInt(k.val()) - parseInt(u.val()));
		var diff = parseInt(s.val()) - parseInt(u.val());
		if(parseInt(diff) < parseInt(m.val())){
			w.val(parseInt(diff));
		}else{
			w.val(parseInt(m.val()));
		}
		var diff2 = parseInt(s.val());
		if(parseInt(diff2) < parseInt(p.val())){
			ab.val(s.val());
		}else{
			ab.val(p.val());
		}
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
		}
	});
	k.change(function(){
		p.val(parseInt(k.val()) + parseInt(m.val()));
		if(parseInt(j.val()) < parseInt(p.val())){
			q.val(parseInt(j.val()));
		}else{
			q.val(parseInt(p.val()));
		}
		s.val(parseInt(q.val()) - parseInt(r.val()));
		t.val(parseInt(p.val()) - parseInt(s.val()));
		if(parseInt(k.val())<parseInt(s.val())){
			u.val(parseInt(k.val()));
		}else{
			u.val(parseInt(s.val()));
		}
		v.val(parseInt(k.val()) - parseInt(u.val()));
		var diff = parseInt(s.val()) - parseInt(u.val());
		if(parseInt(diff) < parseInt(m.val())){
			w.val(parseInt(diff));
		}else{
			w.val(parseInt(m.val()));
		}
		var diff2 = parseInt(s.val());
		if(parseInt(diff2) < parseInt(p.val())){
			ab.val(s.val());
		}else{
			ab.val(p.val());
		}
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
		}
	});
	m.change(function(){
		p.val(parseInt(k.val()) + parseInt(m.val()));
		if(parseInt(j.val()) < parseInt(p.val())){
			q.val(parseInt(j.val()));
		}else{
			q.val(parseInt(p.val()));
		}
		s.val(parseInt(q.val()) - parseInt(r.val()));
		t.val(parseInt(p.val()) - parseInt(s.val()));
		if(parseInt(k.val())<parseInt(s.val())){
			u.val(parseInt(k.val()));
		}else{
			u.val(parseInt(s.val()));
		}
		v.val(parseInt(k.val()) - parseInt(u.val()));
		var diff = parseInt(s.val()) - parseInt(u.val());
		if(parseInt(diff) < parseInt(m.val())){
			w.val(parseInt(diff));
		}else{
			w.val(parseInt(m.val()));
		}
		var diff2 = parseInt(s.val());
		if(parseInt(diff2) < parseInt(p.val())){
			ab.val(s.val());
		}else{
			ab.val(p.val());
		}
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
		}
	});
	r.change(function(){
		p.val(parseInt(k.val()) + parseInt(m.val()));
		if(parseInt(j.val()) < parseInt(p.val())){
			q.val(parseInt(j.val()));
		}else{
			q.val(parseInt(p.val()));
		}
		s.val(parseInt(q.val()) - parseInt(r.val()));
		t.val(parseInt(p.val()) - parseInt(s.val()));
		if(parseInt(k.val())<parseInt(s.val())){
			u.val(parseInt(k.val()));
		}else{
			u.val(parseInt(s.val()));
		}
		v.val(parseInt(k.val()) - parseInt(u.val()));
		var diff = parseInt(s.val()) - parseInt(u.val());
		if(parseInt(diff) < parseInt(m.val())){
			w.val(parseInt(diff));
		}else{
			w.val(parseInt(m.val()));
		}
		var diff2 = parseInt(s.val());
		if(parseInt(diff2) < parseInt(p.val())){
			ab.val(s.val());
		}else{
			ab.val(p.val());
		}
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
		}
	});
	ac.change(function(){
		ae.val(parseInt(ac.val())/parseInt(ad.val()));
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
		}
	});
	ad.change(function(){
		ae.val(parseInt(ac.val())/parseInt(ad.val()));
		af.val(parseInt(ab.val()) * parseInt(ae.val()));
		ag.val(parseInt(p.val()) - parseInt(af.val()));
		ah.val(m.val());
		ai.val(parseInt(ag.val()) - parseInt(ah.val()));
		if(ai.val() < 0){
			aj.val(k.val());
		}else{
			aj.val(parseInt(k.val()) - parseInt(ai.val()));
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