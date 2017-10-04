/**
 * makeGrid - is called as a document.ready() handler, draws a table to fill and sets a handler for
 * clicking on a cell of the table
 *
 * @return {NaN}  retunrs nothing
 */
function makeGrid() {

  /**
   * the url parsing function is provided by github library websanova/js-url
   */
  const height = $.url('?height');
  const width = $.url('?width');

  /**
   * concatColString - concatenates column cells in one row
   *
   * @return {String} column cells concatenated in a row
   */
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

  pageTable.on('click', 'td', function() {
    $(this).css('background-color', $('#colorPicker').val());
  });
}
