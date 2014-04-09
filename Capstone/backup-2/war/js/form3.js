  $( document ).ready(function() {
	
	$('input[type=radio][name=HTUA_IS_MAILING_ADD_SAME]').change(function() {
        if (this.value == 'Yes') {
            $('input[name=mailingNumberAndStreet]').val($('input[name=occupiedNumberAndStreet]').val());
			$('input[name=mailingApt]').val($('input[name=occupiedApt]').val());
			$('input[name=mailingCity]').val($('input[name=occupiedCity]').val());
			$('input[name=mailingState]').val($('input[name=occupiedState]').val());
			$('input[name=mailingZip]').val($('input[name=occupiedZip]').val());
        }
        else if (this.value == 'No') {
            $('input[name=mailingNumberAndStreet]').val('');
			$('input[name=mailingApt]').val('');
			$('input[name=mailingCity]').val('');
			$('input[name=mailingState]').val('');
			$('input[name=mailingZip]').val('');
        }
    });
	
	
	
	//form validation on submit
	$("#form3").validate({
		rules: {
			dateEnteredWaitingList: { required: true, maxlength: 10 },
			zipCodeBeforeAdmission: { required: true, maxlength: 10 },
			yearUnitWasBuilt: { required: true, maxlength: 10 },
			dateOfLastAnnualHQSInspection: { required: true, maxlength: 10 },
			dateUnitLastPassedHQSInspection: { required: true, maxlength: 10 },
			numberOfBedroomsInUnit: { required: true, maxlength: 10 },
			
			occupiedNumberAndStreet: { required: true, maxlength: 10 },
			occupiedApt: { required: true, maxlength: 10 },
			occupiedCity: { required: true, maxlength: 10 },
			occupiedState: { required: true, maxlength: 10 },
			occupiedZip: { required: true, maxlength: 10 },
			
			mailingNumberAndStreet: { required: true, maxlength: 10 },
			mailingApt: { required: true, maxlength: 10 },
			mailingCity: { required: true, maxlength: 10 },
			mailingState: { required: true, maxlength: 10 },
			mailingZip: { required: true, maxlength: 10 },
			
			}
	});

});
