const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenação, template)

console.log(`1+1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)