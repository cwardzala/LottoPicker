#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    lotto = require('./lib/lotto'),
    games = require('./lib/games'),
    colors = require('colors');

program
  .version('0.1.0')
  .option('-g, --game [type]', 'Generate numbers for [game]')
  .option('-l, --list', 'List all the games available.')
  .parse(process.argv);

if (program.game) {
    var game = games[program.game],
        nums;

    if (!game) {
        console.error('Game "%s" does not exist!'.red, program.game);
        return false;
    }

    nums = lotto.choose(game);
    console.log('numbers'.underline.green);
    console.log(nums.numbers.join(' '));
    if (game.extra) {
        console.log(game.extra.name.replace('_', ' ').underline.cyan);
        console.log(nums[game.extra.name].join(' '));
    }
}

if (program.list) {
    console.log('Games Available'.green);
    for (var name in games) {
        console.log('   * %s', name);
    }
}


