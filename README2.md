https://javascriptcentric.medium.com/ultimate-guide-to-setup-next-js-project-structure-husky-prettier-lint-staged-tailwind-shadcn-d447999a2c59


## Ultimate Guide to Setup Next.js Project Structure, Husky, Prettier, Lint-staged, Tailwind, Shadcn


Points that we are going to cover in this article:

Prerequisites.
Setting Up Your Environment
Creating a New Next.js Project
Setting up Project Structure
Environment Variables Setup
Setting up Prettier
Setting up Husky
Setting up Lint-staged
Setting up Shadcn library
Next.js Plugins and Add-ons

1. Setting Up Your Environment
For a smooth development experience, install some useful tools:

VS Code Extensions:
ESLint: Helps detect and fix linting issues in your code.
Prettier: Automatically formats your code on save.
To install extensions, search for them in the VS Code Extensions marketplace.

2. Environment Variables Setup

.env.local

          NEXT_PUBLIC_API_URL=https://api.example.com
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;

6. Setting Up Prettier

          npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss


           .prettierrc


           {
              "printWidth": 120,
              "tabWidth": 2,
              "useTabs": false,
              "semi": true,
              "singleQuote": true,
              "trailingComma": "all",
              "bracketSpacing": true,
              "jsxBracketSameLine": true,
              "arrowParens": "always"
            }



            "format": "npx prettier --write .",
            "format-write": "npx prettier --write --all=true",
            "format-check": "npx prettier --check --all=true"



7. Setting Up Husky

Husky lets you add Git hooks for tasks like linting.

Lint-staged ensures that only staged files are linted and formatted.
In your project directory, run the following command to install husky.

         npm install --save-dev husky
         npx husky install

 To automatically have Git hooks enabled after install, edit package.json

        npm pkg set scripts.prepare="husky install"

After running this you should have this in your package.json

        {
          "scripts": {
              "prepare": "husky install"
            }
        }

The init command simplifies setting up husky in a project. It creates a pre-commit script in .husky/ and updates the prepare script in package.json.

          npx lint-staged -r -p false

8. Setting Up Lint-staged

Lint-staged ensures that only staged files are linted and formatted.Run below to install it.

          npm install lint-staged --save-dev

Lint-staged and Husky will work together to run Prettier and ESLint on staged files before each commit.

In your root directory, create a file .lintstagedrc.json


          {
            "*.js": ["eslint --fix", "prettier --write"],
            "*.jsx": ["eslint --fix", "prettier --write"],
            "*.ts": ["eslint --fix", "prettier --write"],
            "*.tsx": ["eslint --fix", "prettier --write"],
            "*.json": ["prettier --write"],
            "*.md": ["prettier --write"]
          }



try to verify it by running npx lint-staged.

Create a new file commit-msg file inside the .husky folder. and add the below content to it

            npx --no-install commitlint --edit $1

Create a new file .commitlintrc.json and the below content to it

            {
              "extends": [
                "@commitlint/config-conventional"
              ]
            }
Here are some examples of valid commit messages that should pass the commitlint checks:

// Without Scope:

          feat: add new feature for user authentication


// With Scope:

          fix(api): correct API endpoint URL

// With Scope and Additional Details:

chore(config): update ESLint configuration

Ensure your commit message includes a type and a subject. For example:

          git commit -m "chore: Updated the eslint configuration"
          git commit -m "fix: correct spelling in README"


8. Setting Up Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapid UI development. While creating nextjs project it gives options to set up tailwindcss along with nextjs project.

Just onfigure tailwind.config.js:

                module.exports = {
                  content: [
                    './pages/**/*.{js,ts,jsx,tsx}',
                    './components/**/*.{js,ts,jsx,tsx}',
                  ],
                  theme: {
                    extend: {},
                  },
                  plugins: [],
                };


9. Setting Up ShadCN UI

ShadCN is a component library for accessible, customizable UI. To set it up run the below command

                  npx shadcn@latest init

You will be asked a few questions to configure components.json:

Which style would you like to use? › Default
Which color would you like to use as base color? › Neutral
Do you want to use CSS variables for colors? › yes
You can now start adding components to your project.

                  npx shadcn@latest add button

The command above will add the Button component to your project. You can then import it like this:

                  import { Button } from "@/components/ui/button"

                    export default function Home() {
                      return (
                        <div>
                          <Button>Click me</Button>
                        </div>
                      )
                    }

This setup will also update the tailwind.config.ts file like below:

                  import type { Config } from 'tailwindcss';

                  const config: Config = {
                    darkMode: ['class'],
                    content: [
                      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
                      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
                      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
                    ],
                    theme: {
                      extend: {
                        screens: {
                          xl: '1440px',
                        },
                        backgroundImage: {
                          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                        },
                        borderRadius: {
                          lg: 'var(--radius)',
                          md: 'calc(var(--radius) - 2px)',
                          sm: 'calc(var(--radius) - 4px)',
                        },
                        colors: {
                          background: 'hsl(var(--background))',
                          foreground: 'hsl(var(--foreground))',
                          card: {
                            DEFAULT: 'hsl(var(--card))',
                            foreground: 'hsl(var(--card-foreground))',
                          },
                          popover: {
                            DEFAULT: 'hsl(var(--popover))',
                            foreground: 'hsl(var(--popover-foreground))',
                          },
                          primary: {
                            DEFAULT: 'hsl(var(--primary))',
                            foreground: 'hsl(var(--primary-foreground))',
                          },
                          secondary: {
                            DEFAULT: 'hsl(var(--secondary))',
                            foreground: 'hsl(var(--secondary-foreground))',
                          },
                          muted: {
                            DEFAULT: 'hsl(var(--muted))',
                            foreground: 'hsl(var(--muted-foreground))',
                          },
                          accent: {
                            DEFAULT: 'hsl(var(--accent))',
                            foreground: 'hsl(var(--accent-foreground))',
                          },
                          destructive: {
                            DEFAULT: 'hsl(var(--destructive))',
                            foreground: 'hsl(var(--destructive-foreground))',
                          },
                          border: 'hsl(var(--border))',
                          input: 'hsl(var(--input))',
                          ring: 'hsl(var(--ring))',
                          chart: {
                            '1': 'hsl(var(--chart-1))',
                            '2': 'hsl(var(--chart-2))',
                            '3': 'hsl(var(--chart-3))',
                            '4': 'hsl(var(--chart-4))',
                            '5': 'hsl(var(--chart-5))',
                          },
                        },
                      },
                    },
                    plugins: [require('tailwindcss-animate')],
                  };
                  export default config;


10.Next.js Plugins and Add-ons

Next.js allows you to extend its functionality with plugins, such as image optimization, fonts, and analytics. For example, you can use the Next.js image component for optimizing images:

                  import Image from 'next/image';

                    export default function Home() {
                      return <Image src="/logo.png" alt="Logo" width={500} height={500} />;
                    }

You can take your Next.js development to the next level by using plugins and extensions that add functionality and enhance your development workflow. Let me share some of them:

                    next-pwa
                    next-compose-plugins
                    next-seo
                    next-auth
                    next-themes
                    next-nprogress-bar
                    next-i18next
                    next-mdx

Hope You Like this article. Big Thank you For Reading.

Follow me on Medium for more guided articles.