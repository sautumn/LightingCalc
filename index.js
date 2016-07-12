//DMX Patcher
function DMXpatcher(dmxStart,fixChains,numFix,fixNumStart){
//TO DO: need to check boundaries on dmx

  if (dmxStart < 1){
    console.log("Please enter a value for dmx start that is greater than 0.");
    return
  }
  if ( fixNumStart + numFix > 512 ){
    console.log("DMX cannot exceed 512, Please try again.");
    return;
  }
  var valuesArray = [];
  for (var i = 0; i < numFix; i++) {
    valuesArray.push([fixNumStart,dmxStart]);
    fixNumStart++;
    dmxStart += fixChains;
  }
  return valuesArray;
}
console.log(DMXpatcher(1,16,8,201));

function decimaltobinary(decimalValue) {
    return decimalValue.toString(2).split('');
}

console.log(decimaltobinary(25));
