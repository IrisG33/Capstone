  $( document ).ready(function() {
	var num=1;
	$("#removeMember").hide();
	$( "#members" ).append(html());
	$("#addAnotherMember").click(function() {
		num+=1;
		$("#removeMember").show();
		$('#members').append(html());
		$("input[name='totalNumberInHousehold']").prop('disabled', 'false');
		$("input[name='totalNumberInHousehold']").val(num);
		$("input[name='totalNumberInHousehold']").prop('disabled', 'true');
	});
	$("#removeMember").click(function() {
		if(num==2)$("#removeMember").hide();
		$('#member'+num).remove("#member"+num);
		num-=1;
		$("input[name='totalNumberInHousehold']").prop('disabled', 'false');
		$("input[name='totalNumberInHousehold']").val(num);
		$("input[name='totalNumberInHousehold']").prop('disabled', 'true');
	});
	
	//form validation on submit
	$("#form2").validate({
		rules: {
			eligibleEffectiveDate: { required: true, maxlength: 10 },
			formerHeadOfHouseholdSSN: { required: true, maxlength: 10 },
			lastName1: { required: true, maxlength: 10 },
			firstName1: { required: true, maxlength: 10 },
			MI1: { required: true, maxlength: 10 },
			dateOfBirth1: { required: true, maxlength: 10 },
			ageOnEffectiveDateOfAction1: { required: true, maxlength: 10 },
			ssn1:{ required: true, maxlength: 10 } 
			}
	});
	
	
	
function html(){
var html="<div class=\"member\" id=\"member"+num+"\">";
if(num!=1) html += "<h4>Member "+num+"</h4>";
else html += "<h4>Head of Household</h4>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Last Name<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_LAST_NAME"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">First Name<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_FIRST_NAME"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">MI<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_MIDDLE_INITIAL"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Date of birth<\/div>";
html += "<div class=\"right\">";
html += "<input type=\"text\" name=\"HTH_DATE_OF_BIRTH"+num+"\" class=\"datepicker\">";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Age on Effective Date of Action<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_AGE_EFFECTIVE_DATE"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Sex<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_SEX"+num+"\">";
html += "  <option value=\"Male\">Male<\/option>";
html += "  <option value=\"Female\">Female<\/option>";
html += "  <option value=\"Cannot reveal\">Cannot reveal<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Relation<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_RELATION"+num+"\">";
html += "  <option value=\"Head\">Head<\/option>";
html += "  <option value=\"Spouse\">Spouse<\/option>";
html += "  <option value=\"Co-head\">Co-head<\/option>";
html += "  <option value=\"Foster child\/Foster Adult\">Foster child\/Foster Adult<\/option>";
html += "   <option value=\"Other youth under 18\">Other youth under 18<\/option>";
html += "  <option value=\"Full-time student 18+\">Full-time student 18+<\/option>";
html += "  <option value=\"Live-in aide\">Live-in aide<\/option>";
html += "  <option value=\"Other adult\">Other adult<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Citizenship<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_CITIZENSHIP"+num+"\">";
html += "  <option value=\"Eligible citizen\">Eligible citizen<\/option>";
html += "  <option value=\"Eligible noncitizen\">Eligible noncitizen<\/option>";
html += "  <option value=\"Ineligible noncitizen\">Ineligible noncitizen<\/option>";
html += "  <option value=\"Pending verification\">Pending verification<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Disability<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_DISABILITY"+num+"\">";
html += "  <option value=\"Yes\">Yes<\/option>";
html += "  <option value=\"No\">No<\/option> ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Race<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_RACE"+num+"\">";
html += "  <option value=\"White\">White<\/option>";
html += "  <option value=\"Black\/African American\">Black\/African American<\/option>";
html += "  <option value=\"American Indian\/Alaska Native\">American Indian\/Alaska Native<\/option>";
html += "  <option value=\"Asian\">Asian<\/option>";
html += "  <option value=\"Native Hawaiian\/Other Pacific Islander\">Native Hawaiian\/Other Pacific Islander<\/option>  ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "";
html += "<div class=\"element\">";
html += "<div class=\"left\">Ethnicity<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_ETHNICITY"+num+"\">";
html += "  <option value=\"Hispanic or Latino\">Hispanic or Latino<\/option>";
html += "  <option value=\"Not Hispanic or Latino\">Not Hispanic or Latino<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "";
html += "<div class=\"element\">";
html += "<div class=\"left\">SSN<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_SSN"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Alien Registration Number<\/div>";
html += "<div class=\"right\"><input type=\"text\" name=\"HTH_ALIEN_REGNO"+num+"\"><\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Meeting Community Service or Self Sufficiency Requirement<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_COMMSERVICE_OR_SSREQ"+num+"\">";
html += "  <option value=\"Yes\">Yes<\/option>";
html += "  <option value=\"No\">No<\/option> ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<\/div>";
return html;
}
});