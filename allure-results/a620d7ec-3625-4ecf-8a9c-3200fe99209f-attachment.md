# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datentry.spec.js >> data entry
- Location: tests/datentry.spec.js:8:1

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByLabel('Name:')

```

# Test source

```ts
  1   |  class DataEntry{
  2   | 
  3   | 
  4   |     constructor (page)
  5   |     {
  6   |         this.page=page;
  7   |         this.name=page.getByLabel('Name:');
  8   |         this.email=page.getByRole('textbox', { name: 'Enter EMail' });
  9   |         this.phone=page.getByRole('textbox', { name: 'Enter Phone' });
  10  |         this.address=page.getByRole('textbox', { name: 'Address:' });
  11  |         this.submit=page.getByRole('button',{name:'Submit'});
  12  |         this.datepicker1=page.locator('#datepicker');
  13  |     
  14  | 
  15  |     }
  16  | 
  17  | 
  18  | 
  19  |         async fillContactForm({ name, email, phone }) {
> 20  |     await this.name.fill(name);
      |                     ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  21  |     await this.email.fill(email);
  22  |     await this.phone.fill(phone);
  23  |       await this.address.fill(address);
  24  | }
  25  | 
  26  |     async checktGender(value)
  27  |     {
  28  |      await this.page.getByRole('radio',{name:value}).check();
  29  | 
  30  |     }
  31  | 
  32  |     async getDayCheckbox(noOfDays,days)
  33  |     {
  34  |        
  35  |        await page.getByRole('checkbox', { name: days }).check();
  36  |     }
  37  | 
  38  |     async selectDays(arrayDays)
  39  |     {
  40  |         for(const day of arrayDays)
  41  |         {
  42  |            const checkbox= await page.getByRole('checkbox', { name: day });
  43  |            checkbox.check();
  44  |         }
  45  |     }
  46  | 
  47  |     async selectCountry(country)
  48  |     {
  49  |          await page.getByLabel('Country:').selectOption(country);
  50  |     }
  51  | 
  52  |     async singlecolour(color)
  53  |     {
  54  |       await page.getByLabel('Colors:').selectOption(color);
  55  |     }
  56  | 
  57  |     async mutipleColours(colourarray)
  58  |     {
  59  |         for(const colour of colourarray)
  60  |         {
  61  |            await page.getByLabel('Colors:').selectOption(colour);
  62  |     }
  63  | 
  64  |     }
  65  | 
  66  |     async singlelist(value)
  67  |     {
  68  |         page.getByLabel('Sorted List:').selectOption(value);
  69  |     }
  70  | 
  71  | 
  72  |     async multiplelist(arraylist)
  73  |     {
  74  |         for(const list of arraylist )
  75  |         {
  76  |               page.getByLabel('Sorted List:').selectOption(list);
  77  |         }
  78  |     }
  79  | 
  80  |     async startDate(date)
  81  |     {
  82  |          await page.getByPlaceholder('Start Date').fill(date);
  83  | 
  84  |     }
  85  | 
  86  |      async endDate(date)
  87  |     {
  88  |          await page.getByPlaceholder('End Date').fill(date);
  89  | 
  90  |     }
  91  | 
  92  |     async datepicker(day,month,year)
  93  |     {
  94  |         await page.getByRole('textbox', { name: 'SelectedDate' }).click();
  95  |          // Month/Year are native <select> dropdowns
  96  |       await this.page.locator('.ui-datepicker-month').selectOption({ label: month });
  97  |           await this.page.locator('.ui-datepicker-year').selectOption({ label: year });
  98  | 
  99  |   // Day link — matched by its data-date attribute (stable, unambiguous)
  100 |   await this.page.locator(`a[data-date="${day}"]`).click();
  101 |     }
  102 | 
  103 |     async fillDatepicker(date) {
  104 |   await this.datepicker1.fill(date); // e.g. '09/15/2026'
  105 | }
  106 | 
  107 | 
  108 | async submit()
  109 | {
  110 |     await this.submit.click();
  111 | }
  112 | }
  113 | 
  114 | 
  115 | module.exports = { DataEntry };
```