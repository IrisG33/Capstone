  $( document ).ready(function() {
	
	$('input[type=radio][name=HTUA_IS_MAILING_ADD_SAME]').change(function() {
        if (this.value == 'Y') {
            $('input[name=HTUA_MAILING_NUMBERANDSTREET]').val($('input[name=HTUA_UNIT_NUMBERANDSTREET]').val());
			$('input[name=HTUA_MAILING_APTNO]').val($('input[name=HTUA_UNIT_APTNO]').val());
			$('input[name=HTUA_MAILING_CITY]').val($('input[name=HTUA_UNIT_CITY]').val());
			$('input[name=HTUA_MAILING_STATE]').val($('input[name=HTUA_UNIT_STATE]').val());
			$('input[name=HTUA_MAILING_ZIP]').val($('input[name=HTUA_UNIT_ZIP]').val());
        }
        else if (this.value == 'N') {
            $('input[name=HTUA_MAILING_NUMBERANDSTREET]').val('');
			$('input[name=HTUA_MAILING_APTNO]').val('');
			$('input[name=HTUA_MAILING_CITY]').val('');
			$('input[name=HTUA_MAILING_STATE]').val('');
			$('input[name=HTUA_MAILING_ZIP]').val('');
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
