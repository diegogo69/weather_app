# Setting up the webpack project


##  Create a package.json
To create a default one use:

`npm init -y`


##  Install webpack. 
Runs with `npx webpack` and outputs the project contents in the **dist** directory

`npm install --save-dev webpack webpack-cli`


##  Create a webpack config file 

The project template already have one. `touch webpack.config.js`


##  Handling HTML HtmlWebpackPlugin 

`npm install --save-dev html-webpack-plugin`


##  Loading CSS (imported on JS) 

`npm install --save-dev style-loader css-loader`

  
##  Loading images from the HTML (not css nor js)
We use html-loader to load images from an html file like **template.html**

`npm install --save-dev html-loader`


##  Installing Webpack dev server

Runs with `npx webpack serve` and is hosted on <http://localhost:8080/>

`npm install --save-dev webpack-dev-server`


## Installing webpack-merge

This allows us to use separate webpack configuration files for different modes, and merge them in a common config file   

`npm install --save-dev webpack-merge`


## Installing eslint-config-airbnb-base

The package requires eslint and eslint-plugin-import.


### Install the correct versions of each package, which are listed by the command:

`npm info "eslint-config-airbnb-base@latest" peerDependencies`

It may be `npm install --save-dev eslint@8.2.0 eslint-plugin-import@2.25.2` Recall to use --save-dev flag


### Install eslint-config-airbnb-base

npm install --save-dev eslint-config-airbnb-base

Add `"extends": "airbnb-base"` to your .eslintrc


### Create an .eslintrc JavaScript configuration file
 
`touch .eslintrc.js`

```
// .eslintrc.js example
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
}
```


## Install Prettier locally

npm install --save-dev --save-exact prettier


### Create an empty config file to let editors and other tools know you are using Prettier

node --eval "fs.writeFileSync('.prettierrc','{}\n')"


### Create a .prettierignore file to let the Prettier CLI and editors know which files to not format

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"


### Install eslint-config-prettier

npm install --save-dev eslint-config-prettier


### Add eslint-config-prettier to your .eslintrc.js ESLint configuration

__eslintrc:__ Add "prettier" to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.

```
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
