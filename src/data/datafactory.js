const { faker } = require('@faker-js/faker');

export function generateContactDetails()
{
return {
    name:faker.person.fullName(),
     email: faker.internet.email(),
    phone: faker.string.numeric(10),
    address: faker.location.streetAddress()
}

}