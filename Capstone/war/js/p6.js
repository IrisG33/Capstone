var sign = false;
var num = 5;
$(document).ready(function() {	
	$("#aa").hide();
	$("#rule2").hide();
	$("select[name='larger62']").on('change', function() {
		$("#aa").hide();
		if ($(this).val() == "no") { 
			$("#aa").show();
			sign = true;
			$("#8k").val(0);
		} else {
			$("#aa").hide();
		}
	});
	$("select[name='expenses']").on('change', function() {
		$("#rule2").hide();
		if ($(this).val() == "yes") { 
			$("#rule2").show();
		} else {
			$("#rule2").hide();
		}
	});
})
function addRow()
{ 
   var strVar="";
   strVar += "<tr><td><select name=\"HTPFD_SNO_HOUSEHOLD_NAME"+num+"\" id=\"familyMemberName\"><option value=\"name1\">name1<\/option><option value=\"name2\">name2<\/option><option value=\"name3\">name3<\/option><option value=\"name4\">name4<\/option><\/select><\/td><td><input size = \"2\" type=\"text\" id=\"no\" name=\"HTPFD_NO"+num+"\"><\/td><td><input size = \"42\" type=\"text\" id=\"typeOfDeduction\" name=\"HTPFD_DEDUCTION_TYPE"+num+"\"><\/td><td><input size = \"21\" type=\"text\" id=\"amount\" name=\"HTPFD_AMOUNT"+num+"\" placeholder=\"$\"><\/td><\/tr>";
   $("#assetTable").append(strVar);
   num++;
}
function removeRow()
{ 
  $("#assetTable tr:last").remove();
  num--;
}
	