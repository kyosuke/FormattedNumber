test('thousandsSeparator', function () {
  var a = new FormattedNumber(1000);
  equal(a.toString(), '1,000');
});