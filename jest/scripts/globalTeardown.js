/* eslint-disable no-console */
/* eslint-disable require-await */
/* Global teardown module.
 **
 ** This module exports an async function that is triggered
 ** once after all test suites.
 **
 */

const chalk = require('chalk');

module.exports = async function() {
    console.log(chalk.red('λ'));
};
