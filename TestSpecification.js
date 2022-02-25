describe('Careers Page', function() {
    browser.waitForAngularEnabled(false)

    it('to check the page title', function() {
        browser.get('https://www.atd-us.com/en/careers');
        browser.sleep(1000)
         element(by.id('navbarProducts')).click()

    });

    it('to check the page title', function() {
        browser.get('https://www.atd-us.com/en/careers');
        browser.sleep(1000)
         element(by.id('navbarProgramsServices')).click()

    });

    it('to check the page title', function() {
        browser.get('https://www.atd-us.com/en/careers');
        browser.sleep(1000)
         element(by.id('navbarNewsroom')).click()
    });

    it('should to check the navigate to the bottom of the page', () => {
        browser.get('https://www.atd-us.com/en/careers')
        browser.sleep(1000)
    })

    it(`scroll to end of the page element and click LET'S GETS STARTED`, function() {
        var submitId = element(by.id('contact-submit'));
        var productsId = element(by.id('navbarProducts'))
        browser.driver.get('https://www.atd-us.com/en/careers');
        browser.sleep(2000)
        browser.actions().mouseMove(submitId).perform()
        browser.sleep(2000)
        submitId.click()
        browser.sleep(3000)
        browser.actions().mouseMove(productsId).perform()
        browser.sleep(2000)
    });

});