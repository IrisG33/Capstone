$( document ).ready(function() {
	var num = 0;
	function addIncomeRow()
	{ 	num += 1;
		$('#IncomeTable').append('<tr><td style="word-wrap:break-word;"><input size = "21" type="text" name="familyMemberName').append(num).append('"></td><td style="word-wrap:break-word;"><input size = "2" type="text" name="no"').append(num).append('></td><td><input size = "13" type="text" name="incomdeCode"').append(num).append('></td><td><input size = "21" type="text" name="calculation"').append(num).append('></td><td><input size = "13" type="text" name="dollarsPerYear"').append(num).append(' placeholder ="$"></td><td><input size = "20" type="text" name="incomeExclusions"').append(num).append(' placeholder ="$"></td><td><input size = "24" type="text" name="incomeAfterExclusions"').append(num).append(' placeholder ="$"></td></tr>');
	}


});

function removeIncomeRow()
{ 
  $('#IncomeTable tr:last').remove();
}
function addAssetRow()
{ 
  $('#assetTable').append('<tr><td><input size = "21" type="text" name="familyMemberName"></td><td><input size = "2" type="text" name="no"></td><td><input size = "13" type="text" name="typeOfAsset"></td><td><input size = "21" type="text" name="calculation"></td><td><input size = "18" type="text" name="cashValueOfAsset" placeholder="$"></td><td><input size = "18" type="text" name="anticipatedIncome" placeholder="$"></td></tr>');
}
function removeAssetRow()
{ 
  $('#assetTable tr:last').remove();
}