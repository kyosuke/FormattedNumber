exports = @

class FormattedNumber
  
  constractor: (val) ->
    @val = val

  toString: ()->
    '1,000'

exports.FormattedNumber = FormattedNumber