"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.playerOnStrike = null;
        this.listOfBowler = [];
        this.activeBowler = null;
        this.balls = 0;
        this.wickets = 0;
        this.flag = false;
        this.count = 0;
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsman.push(batsman);
    };
    Scorer.prototype.addBowler = function (bowler) {
        this.listOfBowler.push(bowler);
    };
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        arr.forEach(function (Data, ballNumber) {
            for (var i = 0; i < _this.listOfBatsman.length; i++) {
                if (_this.listOfBatsman[i].playerName == Data.batsmanName && _this.listOfBatsman[i].isOut != true) {
                    _this.playerOnStrike = _this.listOfBatsman[i];
                    _this.playerOnStrike.numberOfBalls_set();
                    _this.playerOnStrike.addRuns(Data.runsScored);
                    break;
                }
            }
            for (var i = 0; i < _this.listOfBowler.length; i++) {
                if (_this.listOfBowler[i].playerName == Data.bowlerName) {
                    _this.activeBowler = _this.listOfBowler[i];
                    _this.activeBowler.addRuns(Data.runsScored);
                    _this.activeBowler.addBalls();
                    break;
                }
            }
            if (Data.isOut) {
                _this.wickets++;
                if (_this.activeBowler)
                    _this.activeBowler.addWickets();
                if (_this.playerOnStrike)
                    _this.playerOnStrike.set_Isout(true);
                if (Data.dismissalType && _this.playerOnStrike) {
                    _this.playerOnStrike.addDismissalType(Data.dismissalType);
                }
                if (Data.dismissalInfo && _this.playerOnStrike) {
                    _this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
                }
                if (Data.dismissalType == "Run Out" && _this.playerOnStrike) {
                    _this.playerOnStrike.addtypeOfWicket("(Run Out)");
                }
                else if (Data.dismissalType == "Caught" && Data.dismissalInfo && _this.playerOnStrike) {
                    _this.playerOnStrike.addtypeOfWicket("c " + Data.dismissalInfo.fielderName + " b " + Data.bowlerName);
                }
                if (_this.flag == false && Data.runsScored == 0) {
                    _this.flag = true;
                    _this.count = 1;
                }
                else if (_this.flag == true && Data.runsScored == 0) {
                    _this.count++;
                    if (_this.count == 6) {
                        if (_this.activeBowler)
                            _this.activeBowler.madein();
                        _this.count = 0;
                        _this.flag = false;
                    }
                }
                else
                    _this.flag = false;
            }
            if (Data.extraInfo)
                _this.totalScore += Data.extraInfo.runsOffered;
            _this.totalScore += Data.runsScored;
            _this.balls++;
        });
    };
    Scorer.prototype.printScore = function () {
        console.log(chalk.blue('India') + ' vs ' + chalk.red('England'));
        this.listOfBatsman.forEach(function (batsman) {
            if (batsman.isOut)
                console.log((batsman.playerName).padEnd(15) + (batsman.typeofWicket).padEnd(35) + (batsman.numberOfRuns) + "(" + (batsman.numberOfBalls) + ")");
            else
                console.log(chalk.green((batsman.playerName + '*').padEnd(15)) + (batsman.typeofWicket).padEnd(35) + (batsman.numberOfRuns) + "(" + (batsman.numberOfBalls) + ")");
        });
        console.log('');
        var overs = (Math.floor((this.balls) / 6) + (this.balls % 6) / 10);
        var rr = this.totalScore / overs * (6 / 10);
        console.log(chalk.yellow('Total').padEnd(15) + chalk.blue(this.totalScore) + " for " + chalk.red(this.wickets) + " in " + chalk.yellow(overs) + " overs " + " (RR - " + (rr) + ")");
        console.log('');
        console.log("BOwler".padEnd(20) + "M".padEnd(15) + "O".padEnd(16) + "R".padEnd(15) + "W");
        console.log('');
        this.listOfBowler.forEach(function (bowler) {
            var bowler_over = Math.floor((bowler.numberOfBalls) / 6) + (bowler.numberOfBalls % 6) / 10;
            //var made=bowler.get_madein();
            console.log((bowler.playerName).padEnd(20) + (bowler.get_madein()) + "              " + (bowler_over) + "              " + (bowler.numberOfRunsGiven) + "              " + (bowler.numberOfWickets));
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
