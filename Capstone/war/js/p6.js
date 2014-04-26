var sign = false;
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
  $("#assetTable").append('<tr><td><select name="familyMemberName" id="familyMemberName"><option value="name1">name1</option><option value="name2">name2</option><option value="name3">name3</option><option value="name4">name4</option></select></td><td><input size = "2" type="text" id="no" name="no"></td><td><input size = "42" type="text" id="typeOfDeduction" name="typeOfDeduction"></td><td><input size = "21" type="text" id="amount" name="amount" placeholder="$"></td></tr>');
}
function removeRow()
{ 
  $("#assetTable tr:last").remove();
}
	