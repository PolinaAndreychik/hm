Feature: WebDriverIo tests

   Scenario Outline: I should see page url changing from <currentUrl> to <anotherUrl>
      Given I navigate to "<website>"
      When I go to page "<title>"
      And I move to first category on menu <firstCategory>
      And I move to second category on menu <secondCategory>
      Then I should see current page url <currentUrl>
      And I move to next page
      Then I should see another page url <anotherUrl>

      Examples:
      |website                | title |firstCategory | secondCategory | currentUrl           | anotherUrl             |
      | https://webdriver.io/ | API   | element      | addValue       | api/element/addValue | api/element/clearValue |
      | https://webdriver.io/ | Docs  | Guides       | Timeouts       | docs/timeouts        | docs/emulation         |