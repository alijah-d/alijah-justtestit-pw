# Buggy JustTestIt E2E Tests

This repository contains end-to-end tests for the Buggy JustTestIt application using Playwright.

## Project Structure

The project is organized into the following structure:

- `tests/` - Contains all test files and page objects
  - `common/` - Common functionality shared across tests
    - `constants.ts` - Application constants and messages
    - `config.ts` - Configuration with environment variables
    - `page/` - Common page objects
  - `profile/` - Profile specific tests, page objects and assertions

## Prerequisites

- Node.js (latest LTS version recommended)
- Yarn package manager

## Setup

1. Clone the repository:

```bash
git clone https://github.com/alijah-d/alijah-justtestit-pw.git
cd alijah-justtestit-pw
```

2. Clone the repository:

```bash
yarn install
```

3. Configure environment variables:

Create a .env file (if not existing) at the root of the project with the following values:

```bash
BASE_URL=https://buggy.justtestit.org/
LOGIN=alijahtest
PASSWORD=Test123!
```

## Running Tests

The project is configured with yarn scripts to run tests:

```bash
# Run the update profile test
yarn test:updateProfile
```
