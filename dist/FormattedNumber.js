(function() {
  var FormattedNumber, exports;

  exports = this;

  FormattedNumber = (function() {

    function FormattedNumber() {}

    FormattedNumber.prototype.constractor = function(val) {
      return this.val = val;
    };

    FormattedNumber.prototype.toString = function() {
      return '1,000';
    };

    return FormattedNumber;

  })();

  exports.FormattedNumber = FormattedNumber;

}).call(this);
