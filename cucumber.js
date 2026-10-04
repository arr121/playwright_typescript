module.exports = {
 
default: {
 
require: [
'e2e/StepDefinitions/*.ts',
'e2e/Hooks/*.ts'
],
 
requireModule: ['ts-node/register'],
 
format: [
'progress',
'html:reports/cucumber-report/report.html'
],
 
paths: [
'e2e/Features/*.feature'
]
}
}