let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 7000);
});

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com");
  });

  test("Sign in to GitHub", async () => {
    const signLink = 'a[href="/login"]';
    await page.waitForSelector(signLink);
    await page.click(signLink);
    await page.waitForTimeout(2000);
    const singTitle = await page.title();
    expect(singTitle).toEqual("Sign in to GitHub · GitHub");
  }, 10000);

  test("Pricing title", async () => {
        const pricingLink = "nav > ul > li > a";
        await page.waitForSelector(pricingLink);
        await page.click(pricingLink);
        await page.waitForTimeout(2000);
        const pricingTitle = await page.title();
        expect(pricingTitle).toContain("Plans for every developer");
      }, 10000);
});

test("Sponsors GitHub", async () => {
  page = await browser.newPage();
  await page.goto(
    "https://github.com/sponsors"
  );
  const sponsorsLink = 'a[class="btn-mktg mb-2"]';
  await page.waitForSelector(sponsorsLink);
  await page.click(sponsorsLink);
  await page.waitForTimeout(2000);
  const sponsorsTitle = await page.title();
  expect(sponsorsTitle).toEqual("Explore GitHub Sponsors · GitHub");
}, 10000);