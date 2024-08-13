import { test } from '@playwright/test';
import data from './data.json';

test.describe.configure({ mode: 'parallel' });

if (!!data.data) {
  (() => {
    data.data.forEach((item, index) => {
      test(`Account: ${item.email}`, async ({ page }) => {
        await page.goto('https://www.facebook.com/');

        await page.getByTestId('royal_email').fill(item.email);
        await page.getByTestId('royal_pass').fill(item.password);
        await page.getByTestId('royal_login_button').click();

        await page.waitForURL("https://www.facebook.com/");

        await page.locator(`//div[@role='button' and @tabindex='0' and @class="x1i10hfl x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xmjcpbm x107yiy2 xv8uw2v x1tfwpuw x2g32xy x78zum5 x1q0g3np x1iyjqo2 x1nhvcw1 x1n2onr6 xt7dq6l x1ba4aug x1y1aw1k xn6708d xwib8y2 x1ye3gou"]`).click();

        const statusInput = page.locator(`//div[@role='dialog']//form[@method='POST']//div[@role='presentation']/div/div/div/div[1]/p`)

        await statusInput.fill(`<p>123123</p><br/>
          <>asdasd</
          strong>`)

        // const iamgesInput = page.locator(`//input[@type='file' and @multiple and @class='x1s85apg' and @accept='image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv']`)

        await page.locator(`//div[@role='dialog']//form[@method='POST']/div/div/div/div/div/div[3]/div[2]//div[@role='button']`).click();
      });
    })
  })()
}

// throw new Error("Please enter input!!");