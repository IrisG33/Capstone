  $( document ).ready(function() {
	/*
		rule 1 - show "Project Number", "Building Number", "Building Entrance Number", "Unit Number" only if "Public Housing" is chosen "Program" dropdown 
		rule 2 - show "Primary reason for correction" only if "Yes" is chosen in "Correction" radio button
		rule 3 - show "Special Program" only if "Vouchers" is chosen in "Program" dropdown
	*/
	//rules for display
	$("#rule2").hide();
	$("#rule3").hide();
	$("select[name='program']").on('change', function() {
		$("#rule1").hide();
		$("#rule3").hide();
		if($(this).val()=="Public Housing") $("#rule1").show();
		else if($(this).val()=="Vouchers") $("#rule3").show();
    });
	
	$("input:radio[name=correction]").click(function() {
		if($(this).val()=="Yes") $("#rule2").show();
		else if($(this).val()=="No") $("#rule2").hide();
    });
	
	//form validation on submit
	$("#form1").validate({
		//for radio buttons
		errorPlacement: function(error, element) {
			if (element.attr("name") == "FSSParticipation")  { error.insertAfter("#FSSParticipationYes"); }
			else if (element.attr("name") == "specialProgram")  { error.insertAfter("#enhancedVoucher"); }
			else if (element.attr("name") == "primaryReasonForCorrection")  { error.insertAfter("#familyCorrectionOfIncome"); }
			else { error.insertAfter(element); }
		},
		rules: {
			agencyName: "required",
			effectiveDateOfAction: "required",
			dateOfAdmissionToProgram: "required",
			projectedEffectiveDateOfNextReexamination: "required",
			projectedDateOfNextFlatRentAnnualUpdate: "required",
			FSSParticipation: "required",
			phaCode: {
				required: true,
				minlength: 5, 
				maxlength: 5
			},
			primaryReasonForCorrection:{ 
				required: { depends: function(element) {return $("input:radio[name=correction]").val() == "Yes";}},
			},
			projectNumber: {
				required: { depends: function(element) {return $("select[name='program']").val() == "Public Housing";}},
			},
			buildingNumber: {
				required: { depends: function(element) {return $("select[name='program']").val() == "Public Housing";}},
			},
			buildingEntranceNumber: {
				required: { depends: function(element) {return $("select[name='program']").val() == "Public Housing";}},
			},
			unitNumber: {
				required: { depends: function(element) {return $("select[name='program']").val() == "Public Housing";}},
			},
			specialProgram: {
				required: { depends: function(element) {return $("select[name='program']").val() == "Vouchers";}},
			},
			},
		messages: {
			//agencyName: "Please enter your Agency Name",
			//for customizing error messages
				}
	});

});
