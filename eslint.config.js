import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';

export default [
  // Add recommended ESLint rules for JS and TS
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  
  // Add recommended Astro rules
  ...eslintPluginAstro.configs.recommended,

  // Custom configuration for your specific needs
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      tailwindcss: 'eslint-plugin-tailwindcss',
    },
    rules: {
      'astro/no-unknown-element': 'warn',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
    }
  }
];
