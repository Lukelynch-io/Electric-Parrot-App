@regtest
Feature: Bitcoin Core Regtest Health check

    Health check on Bitcoin Core (REGTEST)

    Scenario: Health Check
        Given I make a health check to bitcoin core on regtest
        Then I should receive response code 200