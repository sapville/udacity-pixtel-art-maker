function main() {
  console.log('main is called');
}

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  const height = $.url('?height');
  const width = $.url('?width');

  function concatColString() {
    let colString = '';
    for (let i = 0; i < width; i++) {
      colString += '<td></td>';
    }
    return colString;
  }

  if (height === undefined || width === undefined || height === 0 || width === 0) {
    $('#input_height').val(1);
    $('#input_width').val(1);
    return;
  }

  $('#input_height').val(height);
  $('#input_width').val(width);

  const pageTable = $('#pixel_canvas');
  for (let i = 0; i < height; i++) {
    pageTable.append($('<tr>'));
    pageTable.children('tr').last().append($(concatColString()));
  }
}
