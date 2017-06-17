# Swapi

## Setup

1. Install node modules: `$ npm install`
2. Run everything else: `$ npm run validate`

## Testing

Mocha (the testing framework) and Chai (Node's built in assertion library).

Run tests via: `$ npm run test` or `$ npm test` or `$ npm t`

## ghooks

Using ghooks to run `npm run validate` before `git commit`.

View `package.json` and `.git/hooks/post-checkout` for details.
