exports = @

class FormattedNumber
  constructor: (val) ->
    @val = val

  get: -> @val
  
  set: (val) ->
    @val = val

  toString: ()->
    '1,000'

exports.FormattedNumber = FormattedNumber