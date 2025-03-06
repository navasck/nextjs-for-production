
https://medium.com/@jan.hesters/how-to-set-up-next-js-15-for-production-in-2024-347f542922b4


## Getting Started
npx create-next-app@latest

## Type Checks With TypeScript
"type-check": "tsc -b"

## Code Formatting : Prettier is an opinionated code formatter that eliminates style discussions during code reviews.
npm install --save-dev prettier prettier-plugin-tailwindcss

Create aprettier.config.js file with your preferred rules.

"format": "prettier --write .",

## ESLint : ESLint can scan your code for both stylistic and logical issues. Install ESLint and its plugins, like unicorn, playwright and import sort.
npm install --save-dev @typescript-eslint/parser eslint-plugin-unicorn eslint-plugin-import eslint-plugin-playwright eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort

.eslintrc.json

"lint:fix": "next lint --fix",

## Commitlint : Install Commitlint and its necessary configurations. This includes Husky, which helps manage Git hooks.
npm install --save-dev @commitlint/cli@latest @commitlint/config-conventional@latest husky@latest

Initialize Husky in your project to set up the basic configuration.
        npx husky-init && npm install

Add hooks to automate linting and type checking before each commit, and customize your commit message workflow.

        npx husky add .husky/pre-commit 'npm run lint && npm run type-check'
        npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'

The pre-commit hook runs after git commit, but before the commit message is finalized and runs linting and type-checking on your code.

The prepare-commit-msg hook runs after git commit is initiated but before the commit message editor opens. It runs commitizen CLI to let you craft conventional commit messages. You'll learn how to use this hook in a bit.

Remove the line that says npm test from .husky/_/pre-commit.


Make sure these scripts are executable.

    chmod a+x .husky/pre-commit
    chmod a+x .husky/prepare-commit-msg

Install Commitizen, which provides a CLI for crafting conventional commit messages.

    npm install --save-dev commitizen cz-conventional-changelog

Create your commitlint.config.cjs file with rules that suit your team's needs. This setup ensures your commit messages are consistent and relevant to the changes made.

Run the following command to start crafting your commit messages using a guided CLI.
  $ git add --all
  $ npx cz
## Deploy on Vercel


