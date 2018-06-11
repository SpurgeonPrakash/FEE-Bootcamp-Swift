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
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name) {
        var _this = _super.call(this, name) || this;
        _this.NumberOfRunsGiven = 0;
        _this.NumberOfBalls = 0;
        _this.NumberOfWickets = 0;
        _this.Madein = 0;
        return _this;
    }
    Bowler.prototype.madein = function () {
        this.Madein++;
    };
    Bowler.prototype.get_madein = function () {
        return this.Madein;
    };
    Object.defineProperty(Bowler.prototype, "numberOfRunsGiven", {
        get: function () {
            return this.NumberOfRunsGiven;
        },
        set: function (runs) {
            this.NumberOfRunsGiven = runs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "numberOfBalls", {
        get: function () {
            return this.NumberOfBalls;
        },
        set: function (balls) {
            this.NumberOfBalls = balls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "numberOfWickets", {
        get: function () {
            return this.NumberOfWickets;
        },
        enumerable: true,
        configurable: true
    });
    Bowler.prototype.addWickets = function () {
        this.NumberOfWickets++;
    };
    Bowler.prototype.addRuns = function (score) {
        return this.NumberOfRunsGiven += score;
    };
    Bowler.prototype.addBalls = function () {
        this.NumberOfBalls++;
    };
    return Bowler;
}(Player_1.Player));
exports.Bowler = Bowler;
