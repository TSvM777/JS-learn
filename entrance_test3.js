function trimSpaces(str) {
    return str.split('').filter(item => item !== ' ').join('')
}