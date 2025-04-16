import test, {
    Browser,
    BrowserContext,
    chromium,
    Page
  } from '@playwright/test';
import { Profile } from '../page/ProfilePage';
import { HomePage } from '../../common/page/HomePage';
import { ProfileAssertions } from '../assertions/ProfileAssertions';
import { config } from '../../common/config.ts';
import { faker } from '@faker-js/faker';

test.describe('Updating Profile', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let homePage: HomePage;
    let profilePage: Profile;
    let profileAssertions: ProfileAssertions;

    async function setup() {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();

        homePage = new HomePage({ page });
        profilePage = new Profile({ page });
        profileAssertions = new ProfileAssertions({ page });
    }

    test.beforeAll(async () => {
        await setup();

        await homePage.goToBaseUrl();
    });

    test('Updating Profile - Address and Hobby', async () => {
        await homePage.loginAccount({ login: config.login.user, password: config.login.password });
        await homePage.goToProfilePage();

        await profilePage.fillAddress(faker.location.streetAddress());
        await profilePage.selectHobby();
        await profilePage.saveProfile();

        await profileAssertions.assertSuccessMessage();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});