import {test,expect} from '@playwright/test';

test('Opening Flipkart',async({browser})=>{
const browserContext= await browser.newContext();
const page1=await browserContext.newPage();

await page1.goto("https://www.amazon.in");
await page1.getByRole('link',{name:'Mobiles'}).click();
await page1.waitForTimeout(10000);

});
