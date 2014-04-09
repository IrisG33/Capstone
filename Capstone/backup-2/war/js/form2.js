  $( document ).ready(function() {
	/*
		rule 1 - show "Project Number", "Building Number", "Building Entrance Number", "Unit Number" only if "Public Housing" is chosen "Program" dropdown 
		rule 2 - show "Primary reason for correction" only if "Yes" is chosen in "Correction" radio button
		rule 3 - show "Special Program" only if "Vouchers" is chosen in "Program" dropdown
	*/
	//rules for display
	$("#rule2").hide();
	$("#rule3").hide();
	$("select[name='HPTBD_PRGM']").on('change', function() {
		$("#rule1").hide();
		$("#rule3").hide();
		if($(this).val()=="Public Housing") $("#rule1").show();
		else if($(this).val()=="Vouchers") $("#rule3").show();
    });
	
	$("input:radio[name=HTPA_IS_CORRECTED]").click(function() {
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
			agencyName: { required: true, maxlength: 10 },
			effectiveDateOfAction: { required: true, maxlength: 10 },
			dateOfAdmissionToProgram: { required: true, maxlength: 10 },
			projectedEffectiveDateOfNextReexamination: { required: true, maxlength: 10 },
			projectedDateOfNextFlatRentAnnualUpdate: { required: true, maxlength: 10 },
			FSSParticipation: { required: true, maxlength: 10 },
			phaCode: {
				required: true,
				minlength: 5, 
				maxlength: 5
			},
			primaryReasonForCorrection:{ 
				required: { depends: function(element) {return $("input:radio[name=HTPA_IS_CORRECTED]").val() == "Yes";}},
			},
			projectNumber: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			buildingNumber: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			buildingEntranceNumber: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			unitNumber: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			specialProgram: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Vouchers";}},
			},
			},
		messages: {
			//agencyName: "Please enter your Agency Name",
			//for customizing error messages
				}
	});

});
