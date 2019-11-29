function takeANumber (currentLine, newPerson) {
  var spot = currentLine.length + 1
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ` + spot + " in line."
}
