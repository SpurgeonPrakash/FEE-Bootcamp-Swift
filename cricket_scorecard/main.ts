import { Batsman } from './batsman';
import { Scorer } from './scorer';
import { Bowler } from './Bowler';
const scorer = new Scorer();
const batsman_list=["K L Rahul","Rohit","Kohli"];
const bowler_list=["Bravo","narine","Lance"];
for(var i=0;i<batsman_list.length;i++)
{
    scorer.addBatsman(new Batsman(batsman_list[i]));
}
for(var i=0;i<bowler_list.length;i++)
scorer.addBowler(new Bowler(bowler_list[i]));

var obj = ([
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": 'Root',
            "hasBatsmanCrossed": true,
            "batsmanOut": "striker" ,
        },
        "batsmanName": 'K L Rahul',
        "bowlerName": 'Bravo'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Rohit',
        "bowlerName": 'Bravo'
    },
    {
        "runsScored": 4,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Bravo'
    },
    
    {
        "runsScored": 0,
        "isOut": false,
        "isExtra": true,
        "extraType": 'byes',
        "extraInfo": {
            "runsOffered": 2
        },
        "batsmanName": 'Kohli',
        "bowlerName": 'Bravo'
    },
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Caught',
        "dismissalInfo": {
            "fielderName": 'butler',
            "hasBatsmanCrossed": false
        },
        "batsmanName": 'Kohli',
        "bowlerName": 'narine'
    }
   
]
);

scorer.calculateScore(obj);
scorer.printScore();