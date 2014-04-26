  $( document ).ready(function() {
	/*
		rule 1 - show "Project Number", "Building Number", "Building Entrance Number", "Unit Number" only if "Public Housing" is chosen "Program" dropdown 
		rule 2 - show "Primary reason for correction" only if "Yes" is chosen in "Correction" radio button
		rule 3 - show "Special Program" only if "Vouchers" is chosen in "Program" dropdown
	*/
	//rules for display
	$("#fssp").hide();
	$("#wvpp").hide();
	$("select[name='choice']").on('change', function() {
		$("#fssp").hide();
		$("#wvpp").hide();
		if($(this).val()=="Yes") $("#fssp").show();
		else if($(this).val()=="No") $("#wvpp").show();
    });
	
});
