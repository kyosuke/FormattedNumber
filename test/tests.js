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
  a.set(2000);
  equal(a.toString(), '2,000');
  var b = new FormattedNumber(-3000);
  equal(b.toString(), '-3,000');
  var c = new FormattedNumber(1234567);
  equal(c.toString(), '1,234,567');
  var d = new FormattedNumber(12345.34);
  equal(d.toString(), '12,345.34');
});

test('change thousandsSeparator', function() {
  var a = new FormattedNumber(1000);
  a.thousandsSeparator = ' ';
  equal(a.toString(), '1 000')
})