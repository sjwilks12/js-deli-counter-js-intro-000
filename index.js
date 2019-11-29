function takeANumber (currentLine, newPerson) {
  var spot = currentLine.length + 1
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ` + spot + " in line."
}

function nowServing (currentLine) {
  if (currentLine.length > 0) {
    var upNow = currentLine[0]
    currentLine.shift()
    return upNow
  }
  else {
    return "There is nobody waiting to be served!"
  }
}