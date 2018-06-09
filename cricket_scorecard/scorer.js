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
                    _this.playerOnStrike.numberOfBalls_set(1);
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
                _this.activeBowler.addWickets();
                _this.playerOnStrike.set_Isout(true);
                _this.playerOnStrike.addDismissalType(Data.dismissalType);
                //    console.log(Data.dismissalInfo);
                _this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
                //   this.playerOnStrike.addtypeOfWicket(Data.dismissalInfo);
                if (Data.dismissalType == "Run Out") {
                    _this.playerOnStrike.addtypeOfWicket("(Run Out)");
                }
                else if (Data.dismissalType == "Caught") {
                    _this.playerOnStrike.addtypeOfWicket("c " + Data.dismissalInfo.fielderName + " b " + Data.bowlerName);
                }
            }
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
        console.log("BOwler                R                W");
        console.log('');
        this.listOfBowler.forEach(function (bowler) {
            console.log(bowler.playerName + "              " + bowler.numberOfRunsGiven + "             " + bowler.numberOfWickets);
            console.log('');
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
