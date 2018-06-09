import {Player} from './Player'
export class Bowler extends Player{
    private NumberOfRunsGiven:number;
    private NumberOfBalls:number;
    private NumberOfWickets:number;
    constructor(name:string)
    {
        super(name);
        this.NumberOfRunsGiven=0;
        this.NumberOfBalls=0;
        this.NumberOfWickets=0;
    }
    set numberOfRunsGiven(runs:number){
         this.NumberOfRunsGiven=runs;
    }
    set numberOfBalls(balls:number){
        this.NumberOfBalls=balls;
    }
    get numberOfWickets():number{
            return this.NumberOfWickets;
    }
    addWickets(){
        this.NumberOfWickets++;
    }
    get numberOfRunsGiven():number{
            return this.NumberOfRunsGiven;
    }
    get numberOfBalls():number{
        return this.NumberOfBalls;
    }
    addRuns(score:number):number{  
        return this.NumberOfRunsGiven+=score;
    }
    addBalls(){  
        this.NumberOfBalls++;
    }


}