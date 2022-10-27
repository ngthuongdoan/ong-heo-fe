/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
/* plop-templates/component/prompt.js*/
exports.__esModule = true
let notEmpty = require('../utils')

module.exports = {
  description: 'Create a custom react hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your hook name?',
      validate: notEmpty('name'),
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/hooks/{{camelCase name}}.ts',
      templateFile: 'plop-templates/hook/index.ts.hbs',
    },
  ],
}
