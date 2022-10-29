/* eslint-disable @typescript-eslint/no-var-requires */
"use strict"
/* plop-templates/component/prompt.js*/
exports.__esModule = true
let notEmpty = require("../utils")
module.exports = {
  description: "Create a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is your component name?",
      validate: notEmpty("name"),
    },
    {
      type: "list",
      name: "level",
      message: "What level of atomic design?",
      choices: [
        {
          name: "Atoms",
          value: "atoms",
        },
        {
          name: "Molecules",
          value: "molecules",
        },
        {
          name: "Organisms",
          value: "organisms",
        },
        {
          name: "Templates",
          value: "templates",
        },
      ],
    },
  ],
  actions: function (data) {
    // https://github.com/plopjs/plop#case-modifiers
    let name = "{{pascalCase name}}"
    let fileName = "{{pascalCase name}}"
    let level = "{{lowerCase level}}"
    let actions = [
      {
        type: "add",
        path: "src/components/".concat(level, "/").concat(fileName, "/index.tsx"),
        templateFile: "plop-templates/component/index.tsx.hbs",
        data: {
          name: name,
        },
      },
      // {
      //   type: "add",
      //   path: "src/components/".concat(level, "/").concat(fileName, "/index.styled.tsx"),
      //   templateFile: "plop-templates/component/index.styled.tsx.hbs",
      //   data: {
      //     name: name,
      //   },
      // },
      {
        type: "add",
        path: "src/components/".concat(level, "/").concat(fileName, "/index.stories.tsx"),
        templateFile: "plop-templates/component/index.stories.tsx.hbs",
        data: {
          name: name,
          level: level,
        },
      },
    ]
    return actions
  },
}
