exports = @

class FormattedNumber
  constructor: (val) ->
    @val = val

  get: -> @val

  toString: ()->
    '1,000'

exports.FormattedNumber = FormattedNumber