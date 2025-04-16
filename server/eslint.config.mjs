import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: { browser: globals.browser, node: globals.node },
    },
])
