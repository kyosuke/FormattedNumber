exports = @

class FormattedNumber
  constructor: (val) ->
    @val = val
    @thousandsSeparator = ',';

  _addThousandsSeparator: ->
    num = String(@val)
    while (num != prevNum)
      prevNum = num
      num = num.replace(/^(-?\d+)(\d{3})/, "$1#{@thousandsSeparator}$2")
    num

  get: -> @val

  set: (val) ->
    @val = val

  toString: ->
    @_addThousandsSeparator()

exports.FormattedNumber = FormattedNumber