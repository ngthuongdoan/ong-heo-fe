"use strict"
exports.__esModule = true
const component = require("./plop-templates/component/prompt")
const hook = require("./plop-templates/hook/prompt")
module.exports = function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setGenerator("component", component)
	plop.setGenerator("hook", hook)
}
