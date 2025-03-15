
https://medium.com/@jan.hesters/how-to-set-up-next-js-15-for-production-in-2024-347f542922b4

https://github.com/janhesters/nextjs-production-app-example

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
  $     git add --all
  $     npx cz

## Vitest : If you want to avoid bugs and prevent regressions, you need to write tests. Vitest is a great choice because it has the same API as the most popular framework, which is Jest, but it runs faster.

        npm install -D vitest

https://janhesters.com/blog/12-keys-write-senior-level-tests


## React Testing Library : You also want to write tests for your React components. For that, you can use the React Testing Library, often abbreviated as RTL.

        npm install --save-dev @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event @types/react @types/react-dom happy-dom @vitejs/plugin-react vite-tsconfig-paths

create a vitest.config.ts file.


## Styling
       npx shadcn@latest init
Now let’s talk about styling. The two most important aspects to get right are accessibility and maintainability. One of the most popular libraries out there that nails both of these aspects is Shadcn. It uses Tailwind for streamlined style management and Radix for enhanced accessibility.

For  adding components.

        npx shadcn@latest add card
## internationalization — or i18n

        npm install negotiator @formatjs/intl-localematcher
        npm install --save-dev @types/negotiator

https://nextjs.org/docs/app/building-your-application/routing/internationalization


negotiator: This library helps parse the Accept-Language header from the browser to determine the user's preferred languages.
@formatjs/intl-localematcher: This library matches the user's preferred languages with the supported locales in your application.
middleware.ts:
It intercepts all requests.
It uses getLocale to determine the user's locale.
If the URL doesn't include a locale, it redirects to the URL with the determined locale.
[locale]/layout.tsx:
It sets the lang attribute of the <html> tag.
It also can pass the locale to the generateMetadata function to create dynamic metadata.
[locale]/page.tsx:
It uses getDictionary to load the appropriate locale's messages.
It renders the page with the translated text.
lib/i18n.ts:
getLocale extracts the language from the request headers.
getDictionary dynamically imports the locale JSON file.


##
##


