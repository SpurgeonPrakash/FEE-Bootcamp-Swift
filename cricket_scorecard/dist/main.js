"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var batsman_1 = require("./batsman");
var scorer_1 = require("./scorer");
var Bowler_1 = require("./Bowler");
var scorer = new scorer_1.Scorer();
var batsman_list = ["K L Rahul", "Rohit", "Kohli", "Ambati Rayudu", "Pathan", "Dhoni"];
var bowler_list = ["Bravo", "narine", "Lance", "StanLake", "Billings", "Watson"];
for (var i = 0; i < batsman_list.length; i++) {
    scorer.addBatsman(new batsman_1.Batsman(batsman_list[i]));
    scorer.addBowler(new Bowler_1.Bowler(bowler_list[i]));
}
var obj = new Array();
obj = [
    {
        runsScored: 0,
        isOut: true,
        dismissalType: "Run Out",
        dismissalInfo: {
            fielderName: 'Root',
            hasBatsmanCrossed: true,
            batsmanOut: "STRIKER",
        },
        batsmanName: 'K L Rahul',
        bowlerName: 'Bravo'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Bravo'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Bravo'
    },
    {
        runsScored: 0,
        isOut: false,
        isExtra: true,
        extraType: 'byes',
        extraInfo: {
            runsOffered: 2
        },
        batsmanName: 'Kohli',
        bowlerName: 'Bravo'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Kohli',
        bowlerName: 'narine'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Ambati Rayudu',
        bowlerName: 'StanLake'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Thampi',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Ambati Rayudu',
        bowlerName: 'StanLake'
    },
    {
        runsScored: 6,
        isOut: false,
        batsmanName: 'Pathan',
        bowlerName: 'Billings'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Thampi',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Pathan',
        bowlerName: 'Billings'
    },
    {
        runsScored: 2,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'Watson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Dhoni',
        bowlerName: 'watson'
    }
];
scorer.calculateScore(obj);
scorer.printScore();
