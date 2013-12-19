var lotto = {};

lotto.choose = function (game) {
    var result = {};

    result.numbers = [];

    if (!game) {
        console.error('No game provided!');
        return false;
    }

    for (var mi=0; mi<game.count; mi++) {
        result.numbers.push(Math.floor(Math.random() * (game.max - game.min) + game.min));
    }

    if (game.extra) {
        result[game.extra.name||'extra'] = [];
        for (var ei=0; ei<game.extra.count; ei++) {
            result[game.extra.name].push(Math.floor(Math.random() * (game.extra.max - game.extra.min) + game.extra.min));
        }
    }

    return result;
};

module.exports = lotto;
