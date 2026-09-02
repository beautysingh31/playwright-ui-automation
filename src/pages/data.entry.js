 class DataEntry{


    constructor (page)
    {
        this.page=page;
        this.name=page.locator('#name');
        this.email=page.getByRole('textbox', { name: 'Enter EMail' });
        this.phone=page.getByRole('textbox', { name: 'Enter Phone' });
        this.address=page.getByRole('textbox', { name: 'Address:' });
        this.submitBtn=page.locator('.submit-btn');
        this.datepicker1=page.locator('#datepicker');
    this.datepicker2=page.locator('#txtDate');

    }



        async fillContactForm({ name, email, phone,address }) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.phone.fill(phone);
      await this.address.fill(address);
}

    async checkGender(value)
    {
       await this.page.getByRole('radio', { name: value, exact: true }).check();

    }

    async getDayCheckbox(noOfDays,days)
    {
       
       await page.getByRole('checkbox', { name: days }).check();
    }

    async selectDays(arrayDays)
    {
        for(const day of arrayDays)
        {
           const checkbox= await this.page.getByRole('checkbox', { name: day });
           await checkbox.check();
        }
    }

    async selectCountry(country)
    {
         await this.page.getByLabel('Country:').selectOption(country);
    }

    async singlecolour(color)
    {
      await this.page.getByLabel('Colors:').selectOption(color);
    }

    async mutipleColours(colourarray)
    {
        for(const colour of colourarray)
        {
           await this.page.getByLabel('Colors:').selectOption(colour);
    }

    }

    async singlelist(value)
    {
        this.page.getByLabel('Sorted List:').selectOption(value);
    }


    async multiplelist(arraylist)
    {
        for(const list of arraylist )
        {
              this.page.getByLabel('Sorted List:').selectOption(list);
        }
    }

    async startDate(date)
    {
         await this.page.locator('#start-date').fill(date);

    }

     async endDate(date)
    {
         await this.page.locator('#end-date').fill(date);

    }

    async datepicker(day,month,year)
    {
         await this.datepicker2.click();
         // Month/Year are native <select> dropdowns
      await this.page.locator('.ui-datepicker-month').selectOption({ label: month });
          await this.page.locator('.ui-datepicker-year').selectOption({ label: year });

  // Day link — matched by its data-date attribute (stable, unambiguous)
  await this.page.locator(`a[data-date="${day}"]`).click();
    }

    async fillDatepicker(date) {
  await this.datepicker1.fill(date); // e.g. '09/15/2026'
}


async submit()
{
    await this.submitBtn.click();
}

}


module.exports = { DataEntry };