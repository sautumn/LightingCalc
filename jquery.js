function DMXpatcher(dmxStart,fixChains,numFix,fixNumStart){
//TO DO: need to check boundaries on dmx

  if (dmxStart < 1){
    console.log("Please enter a value for dmx start that is greater than 0.");
    return;
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



$('document').ready(function(){
var tableData = [];
    $('#getval').click(function(){
        tableData.push(DMXpatcher(
        parseInt($('#dmxstart').val(),10),
        parseInt($('#fixchains').val(),10),
        parseInt($('#numfix').val(),10),
        parseInt($('#fixnumstart').val(),10)
      ));
      alert(tableData);
    });
});
