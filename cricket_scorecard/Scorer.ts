import { Batsman } from './batsman';
import { Bowler } from './Bowler';
export class Scorer {
    listOfBatsman: Array<Batsman>;
    listOfBowler: Array<Bowler>;
    playerOnStrike:Batsman;
    activeBowler:Bowler;
    totalScore: number;
    balls:number;
    wickets:number;
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.playerOnStrike=null;
        this.listOfBowler = [];
        this.activeBowler=null;
        this.balls=0;
        this.wickets=0;
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }
    addBowler(bowler: Bowler) {
        this.listOfBowler.push(bowler);
    }
    calculateScore(arr) {
        arr.forEach((Data, ballNumber) => {
            for(var i=0;i<this.listOfBatsman.length;i++)
            {
                if(this.listOfBatsman[i].playerName==Data.batsmanName && this.listOfBatsman[i].isOut!=true)
                {
                    this.playerOnStrike = this.listOfBatsman[i];
                    this.playerOnStrike. numberOfBalls_set(1)
                    this.playerOnStrike.addRuns(Data.runsScored);

                   break;
                }
            }
            for(var i=0;i<this.listOfBowler.length;i++)
            {
                if(this.listOfBowler[i].playerName==Data.bowlerName)
                {
                    this.activeBowler = this.listOfBowler[i];
                    this.activeBowler.addRuns(Data.runsScored);
                    this.activeBowler.addBalls();
                    break;
                }
            }
           if(Data.isOut)
           {
               this.wickets++;
            this.activeBowler.addWickets();
               this.playerOnStrike.set_Isout(true);
               this.playerOnStrike.addDismissalType(Data.dismissalType);
            //    console.log(Data.dismissalInfo);
               this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
            //   this.playerOnStrike.addtypeOfWicket(Data.dismissalInfo);
                if(Data.dismissalType=="Run Out")
                {
                    this.playerOnStrike.addtypeOfWicket("(Run Out)");
                }
                else if(Data.dismissalType=="Caught")
                {
                    this.playerOnStrike.addtypeOfWicket("c "+Data.dismissalInfo.fielderName+" b "+Data.bowlerName);
                }
           }
            this.totalScore += Data.runsScored;
            this.balls++;
            
        })
    }
    printScore() {
        console.log('--------------------India vs West Indies---------------------------');
        console.log('');
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName}      ${batsman.typeofWicket}   ${batsman.numberOfRuns}(${batsman.numberOfBalls})`);
            console.log('');
        })
        var overs=(Math.floor((this.balls)/6)+(this.balls%6)/10);
        var rr=this.totalScore/overs*(6/10);
        
            console.log(`Total                ${this.totalScore} for ${this.wickets} in ${overs}  (RR - ${rr}) `);
        console.log('');
        console.log(`BOwler                R                W`);
        console.log('');
        this.listOfBowler.forEach(bowler=>{
            console.log(`${bowler.playerName}              ${bowler.numberOfRunsGiven}             ${bowler.numberOfWickets}`);
            console.log('');
        })
    }
}