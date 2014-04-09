function addRow()
{ 
  $('#assetTable').append('<tr><td><input type="text" name="familyMemberName"></td><td><input type="text" name="no"></td><td><input type="text" name="typeOfAsset"></td><td><input type="text" name="calculation"></td><td><input type="text" name="cashValueOfAsset" placeholder="$"></td><td><input type="text" name="anticipatedIncome" placeholder="$"></td></tr>');
}
function removeRow()
{ 
  $('#assetTable tr:last').remove();
}