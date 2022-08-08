import { faker } from '@faker-js/faker/locale/pt_BR';

export const primeiroNome = faker.name.firstName
export const nomeDoMeio = faker.name.middleName
export const ultimoNome = faker.name.lastName
export const nomeCompleto = faker.name.findName
export const numeroCartaoCredito = faker.finance.creditCardNumber
export const CVV = faker.finance.creditCardCVV
export const end = faker.address.street
export const cid = faker.address.city
export const nCartao = faker.helpers.replaceCreditCardSymbols
export const crm = faker.datatype.number
export const texto = faker.lorem.paragraphs
export const UF = faker.address.countryCode
export const foto = (() => {
    return faker.image.avatar()
})


