(function() {
  var FormattedNumber, exports;

  exports = this;

  FormattedNumber = (function() {

    function FormattedNumber(val) {
      this.val = val;
      this.thousandsSeparator = ',';
    }

    FormattedNumber.prototype._addThousandsSeparator = function() {
      var num, prevNum;
      num = String(this.val);
      while (num !== prevNum) {
        prevNum = num;
        num = num.replace(/^(-?\d+)(\d{3})/, "$1" + this.thousandsSeparator + "$2");
      }
      return num;
    };

    FormattedNumber.prototype.get = function() {
      return this.val;
    };

    FormattedNumber.prototype.set = function(val) {
      return this.val = val;
    };

    FormattedNumber.prototype.toString = function() {
      return this._addThousandsSeparator();
    };

    return FormattedNumber;

  })();

  exports.FormattedNumber = FormattedNumber;

}).call(this);
