const convertToRoman = (value) => { // Nossa função recebe um parametro
    const digits = String(value).split("")
    const romanFormatted = []

    if (typeof value !== 'number') throw new Error('So aceitamos variaveis do tipo integer') // Validamos se o parametro é do tipo Integer

    if (digits.length === 1) {
        return convertDigit(digits[0], 'I', 'V') // Convert I, ou não com prefixo de V
    }

    if (digits.length === 2) {
        return `${convertDigit(digits[0], 'X', 'L')}${convertDigit(digits[1], 'I', 'V')}`// Dezenas converter para X, prefixando ou não com L
    }

    if(digits.length === 3){
        romanFormatted[0] = convertDigit(digits[0], 'C', 'D')
        romanFormatted[1] = convertDigit(digits[1], 'X', 'L')
        romanFormatted[2] = convertDigit(digits[2], 'I', 'V')
        return `${romanFormatted[0]}${romanFormatted[1]}${romanFormatted[2]}`// Dezenas converter para X, prefixando ou não com L
    }

    if(digits.length === 4){
        romanFormatted[0] = `${'M'.repeat(digits[0])}`
        romanFormatted[1] = convertDigit(digits[1], 'C', 'D')
        romanFormatted[2] = convertDigit(digits[2], 'X', 'L')
        romanFormatted[3] = convertDigit(digits[3], 'I', 'V')
        return `${romanFormatted[0]}${romanFormatted[1]}${romanFormatted[2]}${romanFormatted[3]}`
    }
}

function convertDigit(digit, romanNumber, prefix) {
    if (digit >= 5) return `${prefix}${romanNumber.repeat(digit - 5)}`
    return romanNumber.repeat(digit)
}

module.exports = convertToRoman;