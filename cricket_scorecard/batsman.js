"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name) {
        var _this = _super.call(this, name) || this;
        _this.NumberOfBallsFaced = 0;
        _this.NumberOfRunsScored = 0;
        _this.IsOut = false;
        _this.dismissalType = "Not Out";
        _this.typeOfWicket = "Not Out";
        return _this;
    }
    Batsman.prototype.addtypeOfWicket = function (wicket_type) {
        this.typeOfWicket = wicket_type;
    };
    Object.defineProperty(Batsman.prototype, "typeofWicket", {
        get: function () {
            return this.typeOfWicket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "numberOfRuns", {
        get: function () {
            return this.NumberOfRunsScored;
        },
        enumerable: true,
        configurable: true
    });
    Batsman.prototype.addDismissalInfo = function (data) {
        // console.log(data);
        this.dismissalInfo = data;
    };
    Object.defineProperty(Batsman.prototype, "DismissalInfo", {
        get: function () {
            return this.dismissalInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "Dismissaltype", {
        get: function () {
            return this.dismissalType;
        },
        enumerable: true,
        configurable: true
    });
    Batsman.prototype.addDismissalType = function (type) {
        this.dismissalType = type;
    };
    Batsman.prototype.numberOfRuns_set = function (num_of_runs) {
        this.NumberOfRunsScored = num_of_runs;
    };
    Batsman.prototype.numberOfBalls_set = function (num_of_balls) {
        this.NumberOfBallsFaced += num_of_balls;
    };
    Batsman.prototype.set_Isout = function (isout) {
        this.IsOut = isout;
    };
    Object.defineProperty(Batsman.prototype, "numberOfBalls", {
        get: function () {
            return this.NumberOfBallsFaced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "isOut", {
        get: function () {
            return this.IsOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "DismissalType", {
        get: function () {
            return this.dismissalType;
        },
        enumerable: true,
        configurable: true
    });
    Batsman.prototype.addRuns = function (score) {
        return this.NumberOfRunsScored += score;
    };
    return Batsman;
}(Player_1.Player));
exports.Batsman = Batsman;
