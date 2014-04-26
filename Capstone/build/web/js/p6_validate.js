$(document).ready(function() {
	$("#rule1").hide();
	$("#rule2").hide();

	var isUnder62 = true;
	var isDisable = false;
	$("select[name='under62']").on('change', function() {
		// $("#rule1").hide();
		if ($(this).val() == "yes") { 
			isUnder62 = true;
			if (isUnder62 && !isDisable) {
				$("#rule4").hide();
			} else if (!isUnder62 && !isDisable) {
				$("#rule1").show();
				$("#rule3").show();
				$("#rule2").hide();
			} else {
				$("#rule4").show();
			} 
			// console.log("hi");
			// $("#rule1").show();
		} else {
			isUnder62 = false;
			if (isUnder62 && !isDisable) {
				$("#rule4").hide();
			} else if (!isUnder62 && !isDisable) {
				$("#rule1").show();
				$("#rule3").show();
				$("#rule2").hide();
			} else  {
				$("#rule4").show();
			} 
			// console.log("hi2");
			// $("#rule1").hide();
		}
	});

	$("select[name='disable']").on('change', function() {
		// $("#rule2").hide();
		// if ($(this).val() == "yes") $("#rule2").show();
		// else $("#rule2").hide();
		if ($(this).val() == "yes") {
			isDisable = true;
			if (isUnder62 && !isDisable) {
				$("#rule4").hide();
			} else if (!isUnder62 && !isDisable) {
				$("#rule1").show();
				$("#rule3").show();
				$("#rule2").hide();
			} else {
				$("#rule4").show();
			} 
		} else {
			isDisable = false;
			if (isUnder62 && !isDisable) {
				$("#rule4").hide();
			} else if (!isUnder62 && !isDisable) {
				$("#rule1").show();
				$("#rule3").show();
				$("#rule2").hide();
			} else {
				$("#rule4").show();
			} 
		}
	});

	// fake value
	$("#totalAnnualIncome").val(9999.00);
	$("#q8").val(4);
	$("#q8").text("4");

	$(".amount").each(function() {
		$(this).keyup(function() {
			deductionSum();
		})
	})

	// 8f
	setMedicalThreshold();

	// 8h
	setMaxDisablAllow();

	// 8s
	calc8s();

	// 8x calculate total allowances


	//store TTP
	$("#TTP").change(function() {
		localStorage.setItem("TTP", $(this).val());
		alert("TTP" + localStorage.getItem("TTP"));
	});
})

function totalAllow() {
	var e8 = $("#e8").val();
	var n8 = $("#n8").val();
	var p8 = $("#p8").val();
	var s8 = $("#s8").val();
	var t8 = $("#t8").val();
	var result = e8 + n8 + p8 + s8 + t8;
	$("#x8").val(result);
	$("#x8").text(result.toFixed(2));
}

function setMedicalThreshold() {
	var totalAnnualIncome = $("#totalAnnualIncome").val();
	var result = totalAnnualIncome * 0.3;
	$("#f8").val(result);
	$("#f8").text(result.toFixed(2));
	setMaxDisablAllow();
}

function setMaxDisablAllow() {
	var val1 = parseFloat($("#g8").val()) - parseFloat($("#f8").val());
	if (val1 >= 0) {
		$("#h8").val(val1);
		$("#h8").text(val1);
	} else {
		if ($("select[name='under62']").val() == "yes" && $("select[name='disable']").val() != "yes") {
			$("#h8").val(0);
			$("#h8").text(0);
		} else {
			$("#h8").val(parseFloat($("#g8").val()));
			$("#h8").text(parseFloat($("#g8").val()));
		}
	}

}

function deductionSum() {
	var sum = 0;
	$(".amount").each(function() {
		if (!isNaN(this.value) && this.value.length != 0) {
			sum += parseFloat(this.value);
		}
	});
	$("#e8").val(sum);
	$("#e8").text("$ " + sum.toFixed(2));
}

function calc8s() {
	var numDepend = parseFloat($("#q8").val());
	var unitAllow = parseFloat($("#r8").val());
	var result = numDepend * unitAllow;
	$("#s8").val(result);
	$("#s8").text(result);
}

function addRow()
{ 
  $("#assetTable").append('<tr><td><select name="familyMemberName" id="familyMemberName"><option value="name1">name1</option><option value="name2">name2</option><option value="name3">name3</option><option value="name4">name4</option></select></td><td><input size = "2" type="text" id="no" name="no"></td><td><input size = "42" type="text" id="typeOfDeduction" name="typeOfDeduction"></td><td><input size = "21" type="text" id="amount" name="amount" placeholder="$"></td></tr>');
}
function removeRow()
{ 
  $("#assetTable tr:last").remove();
}