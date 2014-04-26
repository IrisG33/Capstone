  $( document ).ready(function() {
	var num=1;
	$("#removeMember").hide();
	$( "#members" ).append(html());
	$("#addAnotherMember").click(function() {
		num+=1;
		$("#removeMember").show();
		$('#members').append(html());
		$("input[name='HTH_TOTAL_MEMBERS']").prop('readonly', 'false');
		$("input[name='HTH_TOTAL_MEMBERS']").val(num);
		$("input[name='HTH_TOTAL_MEMBERS']").prop('readonly', 'true');
	});
	$("#removeMember").click(function() {
		if(num==2)$("#removeMember").hide();
		$('#member'+num).remove("#member"+num);
		num-=1;
		$("input[name='HTH_TOTAL_MEMBERS']").prop('readonly', 'false');
		$("input[name='HTH_TOTAL_MEMBERS']").val(num);
		$("input[name='HTH_TOTAL_MEMBERS']").prop('readonly', 'true');
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
html += "  <option value=\"M\">Male<\/option>";
html += "  <option value=\"F\">Female<\/option>";
html += "  <option value=\"Cannot reveal\">Cannot reveal<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Relation<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_RELATION"+num+"\">";
html += "  <option value=\"H\">Head<\/option>";
html += "  <option value=\"S\">Spouse<\/option>";
html += "  <option value=\"K\">Co-head<\/option>";
html += "  <option value=\"F\">Foster child\/Foster Adult<\/option>";
html += "  <option value=\"Y\">Other youth under 18<\/option>";
html += "  <option value=\"E\">Full-time student 18+<\/option>";
html += "  <option value=\"L\">Live-in aide<\/option>";
html += "  <option value=\"A\">Other adult<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Citizenship<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_CITIZENSHIP"+num+"\">";
html += "  <option value=\"EC\">Eligible citizen<\/option>";
html += "  <option value=\"EN\">Eligible noncitizen<\/option>";
html += "  <option value=\"IN\">Ineligible noncitizen<\/option>";
html += "  <option value=\"PV\">Pending verification<\/option>";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Disability<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_DISABILITY"+num+"\">";
html += "  <option value=\"Y\">Yes<\/option>";
html += "  <option value=\"N\">No<\/option> ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<div class=\"element\">";
html += "<div class=\"left\">Race<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_RACE"+num+"\">";
html += "  <option value=\"1\">White<\/option>";
html += "  <option value=\"2\">Black\/African American<\/option>";
html += "  <option value=\"3\">American Indian\/Alaska Native<\/option>";
html += "  <option value=\"4\">Asian<\/option>";
html += "  <option value=\"5\">Native Hawaiian\/Other Pacific Islander<\/option>  ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "";
html += "<div class=\"element\">";
html += "<div class=\"left\">Ethnicity<\/div>";
html += "<div class=\"right\">";
html += "<select name=\"HTH_ETHNICITY"+num+"\">";
html += "  <option value=\"H\">Hispanic or Latino<\/option>";
html += "  <option value=\"NH\">Not Hispanic or Latino<\/option>";
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
html += "  <option value=\"1\">Yes<\/option>";
html += "  <option value=\"2\">No<\/option> ";
html += "  <option value=\"3\">Pending<\/option> ";
html += "  <option value=\"4\">Exempt<\/option> ";
html += "  <option value=\"5\">NA<\/option> ";
html += "<\/select>";
html += "<\/div>";
html += "<\/div>";
html += "<\/div>";
return html;
}
});