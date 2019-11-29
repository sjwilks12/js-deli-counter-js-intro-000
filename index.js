function takeANumber (currentLine, newPerson) {
  var spot = currentLine.length + 1
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ` + spot + " in line."
}

function nowServing (currentLine) {
  if (currentLine.length > 0) {
    var upNow = currentLine[0]
    currentLine.shift()
    return `Currently serving ${upNow}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  var list = "The line is currently: "
  for (i = 1; i <= currentLine.length; i++) {
    list = list + i + `. ${currentLine[i - 1]}`
  }
}