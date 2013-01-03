test('get', function() {
  var a = new FormattedNumber(1000);
  equal(a.get(), 1000);
})

test('set', function() {
  var a = new FormattedNumber(1000);
  a.set(2000);
  equal(a.get(), 2000);
})


test('thousandsSeparator', function () {
  var a = new FormattedNumber(1000);
  equal(a.toString(), '1,000');
});