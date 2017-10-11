Feature: Newsletter Form

Scenario: Submit the footer form with invalid email address

  Given I open the `home page`
  Then I see the `footer` `newsletter form` `email input`
  When I enter "invalid-address" into the `footer` `newsletter form` `email input`
  And I click the `footer` `newsletter form` `submit button`
  Then I see an `error message` in the `footer` `newsletter form`
  But I don't see a `success message` in the `footer` `newsletter form`

Scenario: Submit the footer form with valid email address

  Given I open the `home page`
  Then I see the `footer` `newsletter form` `email input`
  When I enter "valid@address.com" into the `footer` `newsletter form` `email input`
  And I click the `footer` `newsletter form` `submit button`
  Then I see a `success message` in the `footer` `newsletter form`
  But I don't see an `error message` in the `footer` `newsletter form`
