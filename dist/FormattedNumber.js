(function() {
  var FormattedNumber, exports;

  exports = this;

  FormattedNumber = (function() {

    function FormattedNumber(val) {
      this.val = val;
    }

    FormattedNumber.prototype.get = function() {
      return this.val;
    };

    FormattedNumber.prototype.toString = function() {
      return '1,000';
    };

    return FormattedNumber;

  })();

  exports.FormattedNumber = FormattedNumber;

}).call(this);
