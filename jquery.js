function DMXpatcher(dmxStart,fixChains,numFix,fixNumStart){
//TO DO: need to check boundaries on dmx

  if (dmxStart < 1){
    return "Please enter a value for dmx start that is greater than 0.";
  }
  if ( fixNumStart + numFix > 512 ){
    return "DMX cannot exceed 512, Please try again.";
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

    $('#getval').click(function(e){
      var tableData = [];
      e.preventDefault();
      tableData.push(DMXpatcher(
        parseInt($('#dmxstart').val(),10),
        parseInt($('#fixchains').val(),10),
        parseInt($('#numfix').val(),10),
        parseInt($('#fixnumstart').val(),10)
      ));

      $('#my-table').html('<table>' + tableData[0].map((item) => {
        return '<tr><td>'+item[0]+'</td><td>'+item[1]+'</td></tr>';
      }).join('') + '</table>');
    });
});
