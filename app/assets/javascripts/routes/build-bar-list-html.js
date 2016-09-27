function buildBarListHtml(bars){
  var listsItems = bars.reduce(function (prev, bar){
    return prev + buildBarHtml(bar);
  }, '');
  return '<ul class="js-ul-bars ul-height">' + listsItems + '</ul>'
}
