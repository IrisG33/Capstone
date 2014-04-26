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
		if($(this).val()=="P") $("#rule1").show();
		else if($(this).val()=="VO") $("#rule3").show();
    });
	
	$("input:radio[name=HTPA_IS_CORRECTED]").click(function() {
		if($(this).val()=="Yes") $("#rule2").show();
		else if($(this).val()=="No") $("#rule2").hide();
    });
	
	//form validation on submit
	$("#form2").validate({
		//for radio buttons
		errorPlacement: function(error, element) {
			if (element.attr("name") == "HTPA_FSS_PARTICIPATION")  { error.insertAfter("#FSSParticipationYes"); }
			else { error.insertAfter(element); }
		},
		rules: {
			HPAD_AGENCY_NAME: { required: true, maxlength: 10 },
			HTPA_EFFECTIVE_DATE: { required: true, maxlength: 10 },
			HTPA_ADMISSION_DATE: { required: true, maxlength: 10 },
			HTPA_PROJEFFECTIVE_DATE_REEXAM: { required: true, maxlength: 10 },
			HTPA_PROJ_DATE_FLATRATE_UPDATE: { required: true, maxlength: 10 },
			HTPA_FSS_PARTICIPATION: { required: true, maxlength: 10 },
			HPAD_PHA_CODE: {
				required: true,
				minlength: 5, 
				maxlength: 5
			},
			HTPA_IF_CORRECTED:{ 
				required: { depends: function(element) {return $("input:radio[name=HTPA_IS_CORRECTED]").val() == "Yes";}},
			},
			HPTBD_PROJECT_NUM: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			HPTBD_BLD_NUM: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			HPTBD_BLD_ENT_NUM: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			HPTBD_UNIT_NUM: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Public Housing";}},
			},
			HTPA_SPECIAL_PROGRAMS: {
				required: { depends: function(element) {return $("select[name='HPTBD_PRGM']").val() == "Vouchers";}},
			},
			},
		messages: {
			//agencyName: "Please enter your Agency Name",
			//for customizing error messages
				}
	});

});
