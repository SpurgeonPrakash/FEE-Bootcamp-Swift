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
    Scorer.prototype.updateBatsman = function (playerOnStrike, runs) {
        this.playerOnStrike = playerOnStrike;
        this.playerOnStrike.numberOfBalls_set();
        this.playerOnStrike.addRuns(runs);
    };
    Scorer.prototype.updateBowler = function (activeBowler, runs) {
        this.activeBowler = activeBowler;
        this.activeBowler.addRuns(runs);
        this.activeBowler.addBalls();
    };
    Scorer.prototype.madein = function (runs) {
        if (this.flag == false && runs == 0) {
            this.flag = true;
            this.count = 1;
        }
        else if (this.flag == true && runs == 0) {
            this.count++;
            if (this.count == 6) {
                if (this.activeBowler)
                    this.activeBowler.madein();
                this.count = 0;
                this.flag = false;
            }
        }
        else
            this.flag = false;
    };
    Scorer.prototype.onOut = function (Data) {
        if (Data.isOut) {
            this.wickets++;
            if (this.activeBowler)
                this.activeBowler.addWickets();
            if (this.playerOnStrike) {
                this.playerOnStrike.set_Isout(true);
                if (Data.dismissalType)
                    this.playerOnStrike.addDismissalType(Data.dismissalType);
                if (Data.dismissalInfo) {
                    this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
                }
                if (Data.dismissalType == "Run Out") {
                    this.playerOnStrike.addtypeOfWicket("(Run Out)");
                }
                else if (Data.dismissalType == "Caught" && Data.dismissalInfo) {
                    this.playerOnStrike.addtypeOfWicket("c " + Data.dismissalInfo.fielderName + " b " + Data.bowlerName);
                }
            }
        }
    };
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        arr.forEach(function (Data, ballNumber) {
            for (var i = 0; i < _this.listOfBatsman.length; i++) {
                if (_this.listOfBatsman[i].playerName == Data.batsmanName && _this.listOfBatsman[i].isOut != true) {
                    _this.updateBatsman(_this.listOfBatsman[i], Data.runsScored);
                    break;
                }
            }
            for (var i = 0; i < _this.listOfBowler.length; i++) {
                if (_this.listOfBowler[i].playerName == Data.bowlerName) {
                    _this.updateBowler(_this.listOfBowler[i], Data.runsScored);
                    break;
                }
            }
            _this.onOut(Data);
            _this.madein(Data.runsScored);
            if (Data.extraInfo)
                _this.totalScore += Data.extraInfo.runsOffered;
            _this.totalScore += Data.runsScored;
            _this.balls++;
        });
    };
    Scorer.prototype.printScore = function () {
        console.log(chalk.magenta("------------------------------------------------------------------------"));
        console.log(chalk.blue('India') + ' vs ' + chalk.red('England'));
        console.log(chalk.magenta("------------------------------------------------------------------------"));
        this.listOfBatsman.forEach(function (batsman) {
            if (batsman.isOut)
                console.log((batsman.playerName).padEnd(15) + (batsman.typeofWicket).padEnd(35) + (batsman.numberOfRuns) + "(" + (batsman.numberOfBalls) + ")");
            else
                console.log(chalk.green((batsman.playerName + '*').padEnd(15)) + (batsman.typeofWicket).padEnd(35) + (batsman.numberOfRuns) + "(" + (batsman.numberOfBalls) + ")");
        });
        console.log('');
        var overs = (Math.floor((this.balls) / 6) + (this.balls % 6) / 10);
        var rr = this.totalScore / overs * (6 / 10);
        console.log(chalk.yellow(('Total-').padEnd(15)) + chalk.blue(this.totalScore) + " for " + chalk.red(this.wickets) + " in " + chalk.yellow(overs) + " overs " + " (RR - " + (rr) + ")");
        console.log('');
        console.log("Bowler".padEnd(20) + "M".padEnd(15) + "O".padEnd(16) + "R".padEnd(15) + "W");
        console.log('');
        this.listOfBowler.forEach(function (bowler) {
            var bowler_over = Math.floor((bowler.numberOfBalls) / 6) + (bowler.numberOfBalls % 6) / 10;
            //var made=bowler.get_madein();
            console.log((bowler.playerName).padEnd(20) + (bowler.get_madein()) + "              " + (bowler_over) + "              " + (bowler.numberOfRunsGiven) + "              " + (bowler.numberOfWickets));
        });
        console.log(chalk.magenta("------------------------------------------------------------------------"));
    };
    return Scorer;
}());
exports.Scorer = Scorer;
