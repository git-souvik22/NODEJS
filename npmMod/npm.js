// Chalk & Validator
import chalk from 'chalk';

import validator from 'validator';

// console.log(chalk.red.underline.inverse("FAILED"));
const res = validator.isEmail("souvikr915gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res) );




