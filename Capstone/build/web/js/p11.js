$( document ).ready(function() {
	$("#trent").hide();
	$("#crent").hide();
	$("#nonproprated").hide();
	
	$("select[name='ifProrated']").on('change', function() {
		$("#nonproprated").hide();
		if($(this).val()=="y") $("#nonproprated").hide();
		else if($(this).val()=="n") $("#nonproprated").show();
    });
});

$(function() {
	// f g h i j k m n p q r s aa ab ac ad ae af
	var f = $("#f13");
	var g = $("#g13");
	var h = $("#h13");
	var i = $("#i13");
	var j = $("#j13");
	var kt = $("#kt13");
	var kc = $("#kr13");
	var m = $("#m13");
	var p = $("#p13");
	var q = $("#q13");
	var r = $("#r13");
	var s = $("#s13");
	var t = $("#t13");
	var u = $("#u13");
	var v = $("#v13");
	var w = $("#w13");
	var x = $("#x13");
	var z = $("#z13");
	
	f.change(function(){
		h.val(parseInt(f.val()) + parseInt(g.val()));
		var jv = j.val();
		var hv = h.val();
		var iv = i.val();
		if(parseInt(j.val()) > parseInt(h.val()) + parseInt(i.val())){
			kt.val(h.val());
		}else{
			var diff = j.val() - i.val();
			if(parseInt(diff) >= 0){
				$("#trent").show();
				kt.val(diff);
				$("#crent").hide();
				m.val(parseInt(h.val()) - parseInt(kt.val()));
			}else{
				$("#crent").show();
				kc.val(diff);
				$("#trent").hide();
				m.val(kc.val());
			}
		}
		p.val(parseInt(h.val()) + parseInt(i.val()));
		q.val(p.val() - j.val());
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
		}
	});
	g.change(function(){
		h.val(parseInt(f.val()) + parseInt(g.val()));
		var jv = j.val();
		var hv = h.val();
		var iv = i.val();
		if(parseInt(j.val()) > parseInt(h.val()) + parseInt(i.val())){
			kt.val(h.val());
		}else{
			var diff = j.val() - i.val();
			if(parseInt(diff) >= 0){
				$("#trent").show();
				kt.val(diff);
				$("#crent").hide();
				m.val(parseInt(h.val()) - parseInt(kt.val()));
			}else{
				$("#crent").show();
				kc.val(diff);
				$("#trent").hide();
				m.val(kc.val());
			}
		}
		p.val(parseInt(h.val()) + parseInt(i.val()));
		q.val(p.val() - j.val());
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
		}
	});	
	i.change(function(){
		h.val(parseInt(f.val()) + parseInt(g.val()));
		var jv = j.val();
		var hv = h.val();
		var iv = i.val();
		if(parseInt(j.val()) > parseInt(h.val()) + parseInt(i.val())){
			kt.val(h.val());
		}else{
			var diff = j.val() - i.val();
			if(parseInt(diff) >= 0){
				$("#trent").show();
				kt.val(diff);
				$("#crent").hide();
				m.val(parseInt(h.val()) - parseInt(kt.val()));
			}else{
				$("#crent").show();
				kc.val(diff);
				$("#trent").hide();
				m.val(kc.val());
			}
		}
		p.val(parseInt(h.val()) + parseInt(i.val()));
		q.val(p.val() - j.val());
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
		}
	});	
	j.change(function(){
		h.val(parseInt(f.val()) + parseInt(g.val()));
		var jv = j.val();
		var hv = h.val();
		var iv = i.val();
		if(parseInt(j.val()) > parseInt(h.val()) + parseInt(i.val())){
			kt.val(h.val());
		}else{
			var diff = j.val() - i.val();
			if(parseInt(diff) >= 0){
				$("#trent").show();
				kt.val(diff);
				$("#crent").hide();
				m.val(parseInt(h.val()) - parseInt(kt.val()));
			}else{
				$("#crent").show();
				kc.val(diff);
				$("#trent").hide();
				m.val(kc.val());
			}
		}
		p.val(parseInt(h.val()) + parseInt(i.val()));
		q.val(p.val() - j.val());
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
		}
	});
	r.change(function(){
		t.val(changeTwoDecimal_f(parseInt(r.val()) / parseInt(s.val())));
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
		}
	});
	s.change(function(){
		t.val(changeTwoDecimal_f(parseInt(r.val()) / parseInt(s.val())));
		u.val(parseInt(q.val()) * parseInt(t.val()));
		v.val(parseInt(p.val()) - parseInt(u.val()));
		w.val(i.val());
		x.val(parseInt(v.val()) - parseInt(w.val()));
		var diff2 = parseInt(h.val()) - parseInt(x.val());
		if(parseInt(x.val()) < 0){
			z.val(parseInt(h.val()));
		}else{
			z.val(parseInt(diff2));
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