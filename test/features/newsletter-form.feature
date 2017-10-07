Feature: Newsletter Form

Scenario: Submit with invalid email address

  Given I open the `home page`
  Then I see the `newsletter input`
  And I enter an invalid e-mail address "invalid-address" into `newsletter input`
  And I click the `submit button`
  Then I see an `error message`

Scenario: Submit with valid email address

  Given I open the `home page`
  Then I see the `newsletter input`
  And I enter a valid e-mail address "valid@email.com into" into `newsletter input`
  And I click the `submit button`
  Then I see a `success message`
