import { Batsman } from './batsman';
import { Bowler } from './Bowler';
import { Input,DismissalInfo } from './input';
export class Scorer {
    listOfBatsman: Array<Batsman>;
    listOfBowler: Array<Bowler>;
    playerOnStrike:Batsman|null;
    activeBowler:Bowler|null;
    totalScore: number;
    balls:number;
    wickets:number;
    flag:boolean;
    count:number;
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
        this.playerOnStrike=null;
        this.listOfBowler = [];
        this.activeBowler=null;
        this.balls=0;
        this.wickets=0;
        this.flag=false;
        this.count=0;
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }
    addBowler(bowler: Bowler) {
        this.listOfBowler.push(bowler);
    }
    calculateScore(arr:Array <Input>) {
        arr.forEach((Data, ballNumber) => {
            for(var i=0;i<this.listOfBatsman.length;i++)
            {
                if(this.listOfBatsman[i].playerName==Data.batsmanName && this.listOfBatsman[i].isOut!=true)
                {
                    this.playerOnStrike = this.listOfBatsman[i];
                    this.playerOnStrike.numberOfBalls_set();
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
               if(this.activeBowler)
                     this.activeBowler.addWickets();
               if(this.playerOnStrike)
                    this.playerOnStrike.set_Isout(true);
               if(Data.dismissalType && this.playerOnStrike)
               {
                this.playerOnStrike.addDismissalType(Data.dismissalType);
               }
               if(Data.dismissalInfo &&this.playerOnStrike)
               {
                this.playerOnStrike.addDismissalInfo(Data.dismissalInfo);
               }
            
                if(Data.dismissalType=="Run Out" &&this.playerOnStrike)
                {
                    this.playerOnStrike.addtypeOfWicket("(Run Out)");
                }
                else if(Data.dismissalType=="Caught" &&Data.dismissalInfo &&this.playerOnStrike)
                {
                    this.playerOnStrike.addtypeOfWicket("c "+Data.dismissalInfo.fielderName+" b "+Data.bowlerName);
                }
                if(this.flag==false&&Data.runsScored==0)
                {
                    this.flag=true;
                    this.count=1;
                }
                else if(this.flag==true&&Data.runsScored==0)
                {
                    this.count++;
                    if(this.count==6){
                        if(this.activeBowler)
                        this.activeBowler.madein();
                        this.count=0;
                        this.flag=false;
                    }
                }
                else
                this.flag=false;

           }
           if(Data.extraInfo)
            this.totalScore += Data.extraInfo.runsOffered;
            this.totalScore+=Data.runsScored;
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
        console.log(`BOwler      m           O                R                W`);
        console.log('');
        this.listOfBowler.forEach(bowler=>{
            console.log(`${bowler.playerName}      ${bowler.get_madein()}    ${Math.floor((bowler.numberOfBalls)/6)+(bowler.numberOfBalls%6)/10}         ${bowler.numberOfRunsGiven}             ${bowler.numberOfWickets}`);
            console.log('');
        })
    }
}