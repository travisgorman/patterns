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
![](https://camo.githubusercontent.com/41830215b4097f57cd7780ad127fb0917fc8f818/68747470733a2f2f63646e2e7261776769742e636f6d2f6665726f73732f7374616e646172642f6d61737465722f737469636b65722e737667)

A pre-configured eslint tool meant to standardize style and conventions, sidestepping the conversation about what rules to include and exclude. Not meant to be configurable.

###Some Standard Rules

**Does NOT like semicolons**

* 2 spaces for indentation
* single quotes for strings (except to avoid escaping)
* no unused variables
* add a space after keywords
* add a space before a function declaration's parenthesis
* triple equality check
* operators must be spaced
* space after commas
* *else* statements on same line as their braces
* curly braces for multi-line `if` statements
* prefix browser globals with `window`
* no multiple blank lines
* For *ternary operator* in a multi-line setting, place `?` and `:`on their own lines
* extra parenthesis for conditional assignments
* spaces inside single line blocks
* camelcase variable and function names
* no trailing commas
* add space between colon and value in key value pairs
* constructor names must begin with capital letter
* no trailing commas
* constructor with no arguments must be invokes with parenthesis
* constructors of derived classes must call `super`
* array literals instead of array constructors
* single import statement per module

[JavaScript Standard Style Abridged](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style)
[Standard](https://github.com/feross/standard)


___

## Testing with Jest and Enzyme

    import { shallowToJson } from 'enzyme'

- a helper tool meant to connect Enzyme and Jest's snapshot testing
- `react-test-renderer` and `enzyme` can't be imported into the same file


___

## Coverage Testing with Istanbul
Shows you how much of your code is covered by testing - what percentage of each file and what lines are uncovered.

___












___


