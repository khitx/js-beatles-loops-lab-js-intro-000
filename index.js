function theBeatlesPlay(musicians, instruments) {
  var array = new Array()
  for (var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return array
}
