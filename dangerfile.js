const {schedule, markdown, danger, warn} = require('danger');
const coverage = require('danger-plugin-coverage').default

schedule(coverage())
