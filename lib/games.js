var games = {
    "megamillions": {
        "min": 1,
        "max": 75,
        "count": 5,
        "extra": {
            "min": 1,
            "max": 15,
            "count": 1,
            "name": "mega_ball"
        }
    },
    "powerball": {
        "min": 1,
        "max": 59,
        "count": 5,
        "extra": {
            "min": 1,
            "max": 35,
            "count": 1,
            "name": "power_ball"
        }
    },
    "pick3": {
        "min": 0,
        "max": 9,
        "count": 3
    },
    "pick4": {
        "min": 0,
        "max": 9,
        "count": 4
    },
    "pick5": {
        "min": 0,
        "max": 9,
        "count": 5
    }
};

module.exports = games;
