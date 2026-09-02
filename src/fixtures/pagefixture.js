const { test: base } = require('@playwright/test');
const { BasePage } = require('../pages/base.page');
const { DataEntry } = require('../pages/data.entry');

export const test=base.extend({

basepagefixture:async({page},use)=>{
    const basepagefixture=new BasePage(page);
    await use(basepagefixture);
},

dataentryfixtture:async({page},use)=>{

    const dataentryfixtture=new DataEntry(page);
    await use(dataentryfixtture);
}



});







