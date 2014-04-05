$(document).ready(function() {
	$("#rule1").hide();
	$("#rule2").hide();
	$("select[name='larger62']").on('change', function() {
		$("#rule1").hide();
		if ($(this).val() == "yes") { 
			$("#rule1").show();
		} else {
			$("#rule1").hide();
		}
	});

	$("select[name='disable'").on('change', function() {
		$("#rule2").hide();
		if ($(this).val() == "yes") $("#rule2").show();
		else $("#rule2").hide();
	});


})