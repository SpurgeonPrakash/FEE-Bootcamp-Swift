"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log('--------------------India vs West Indies---------------------------');
        console.log('');
        this.listOfBatsman.forEach(function (batsman) {
            console.log(batsman.playerName + "      " + batsman.typeofWicket + "   " + batsman.numberOfRuns + "(" + batsman.numberOfBalls + ")");
            console.log('');
        });
        var overs = (Math.floor((this.balls) / 6) + (this.balls % 6) / 10);
        var rr = this.totalScore / overs * (6 / 10);
        console.log("Total                " + this.totalScore + " for " + this.wickets + " in " + overs + "  (RR - " + rr + ") ");
        console.log('');
        console.log("BOwler      m           O                R                W");
        console.log('');
        this.listOfBowler.forEach(function (bowler) {
            console.log(bowler.playerName + "      " + bowler.get_madein() + "    " + (Math.floor((bowler.numberOfBalls) / 6) + (bowler.numberOfBalls % 6) / 10) + "         " + bowler.numberOfRunsGiven + "             " + bowler.numberOfWickets);
            console.log('');
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
