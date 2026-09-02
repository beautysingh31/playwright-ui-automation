

const {test,expect}=require ('../src/fixtures/pagefixture');
const {DataEntry}=require('../src/pages/data.entry');
const { generateContactDetails } = require('../src/data/datafactory');


test('data entry',async({page,dataentryfixtture})=>{

await page.goto('/');
const contact=generateContactDetails();
await dataentryfixtture.fillContactForm(contact);
await dataentryfixtture.checkGender('Male');
await dataentryfixtture.selectDays(['Monday','Tuesday']);
await dataentryfixtture.selectCountry('India');
await dataentryfixtture.mutipleColours(['Blue','Green','Yellow']);
await dataentryfixtture.multiplelist(['Fox','Giraffe']);
await dataentryfixtture.fillDatepicker('01/01/2026');

await dataentryfixtture.startDate('2026-01-01');
await dataentryfixtture.endDate('2026-05-07');
await dataentryfixtture.datepicker('2','Feb','2026');
await dataentryfixtture.submit();

});