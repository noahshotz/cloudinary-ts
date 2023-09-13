# Cloudinary image manager in React TS
## About

This is a WIP basic implementation of an image manager using Cloudinary in React TS.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Following enviroment variables need to be set:

`VITE_API_KEY` - Your cloudinary API key

`VITE_API_SECRET` - Your cloudinary API secret

`VITE_CLOUD_NAME` - Your cloudinary cloud name

`VITE_UPLOAD_PRESET` - Your cloudinary upload secret

`VITE_FIREBASE_API_KEY`

`VITE_FIREBASE_APP_ID`

`VITE_FIREBASE_AUTH_DOMAIN`

`VITE_FIREBASE_MEASUREMENT_ID`

`VITE_FIREBASE_SENDER_ID`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
