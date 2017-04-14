# Yarn
Replaces NPM for doing installs

* deterministic: install dependencies in any way and always end up with the same structure
* Faster than NPM
* good for building apps - not as good for building libraries

`yarn.lock` is what yarn outputs into the project directory

    yarn

instead of `npm install`

___

## Global Installs

* `jest@v16.0.2` for unit testing
* `nodemon`
* `webpack@2.1.0-beta.25` for module loading
* `standard@v8.4.0` for style linting

___

## `createClass` vs. `createElement`
createClass creates a blueprint for and element, allowing you to create many of the same class.
createElement creates a new, single instance of that blueprint. With JSX, you don't need to use createElement because JSX calls it for you.

___

## standard
A non-configurable (pre-configured) eslint tool meant to standardize style and conventions, sidestepping the conversation about what rules to include and exclude.

Does NOT like semicolons

___


