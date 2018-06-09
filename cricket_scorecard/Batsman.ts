import {Player} from './Player'
import { Input, DismissalInfo } from './input';
export class Batsman extends Player{
    private NumberOfRunsScored:number;
    private NumberOfBallsFaced:number;
    private typeOfWicket:string;
    private dismissalInfo:DismissalInfo;
    private dismissalType:string|null;
    private IsOut:boolean;
    constructor(name:string)
    {
        super(name);
        this.NumberOfBallsFaced=0;
        this.NumberOfRunsScored=0;
        this.typeOfWicket="Not Out";
        this.dismissalInfo={};
        this.dismissalType=null;
        this.IsOut=false;
    }
    addtypeOfWicket(wicket_type:string)
    {
        this.typeOfWicket=wicket_type;

    }
    get typeofWicket()
    {
        return this.typeOfWicket;
    }
    get numberOfRuns():number{
            return this.NumberOfRunsScored;
    }
    addDismissalInfo(data :DismissalInfo)
    {
        // console.log(data);
        this.dismissalInfo=data;
    }
    get DismissalInfo():object{
        return this.dismissalInfo;
    }
    get Dismissaltype(){
        return this.dismissalType;
    }
    addDismissalType(type: string)
    {
        this.dismissalType=type;
    }

    numberOfRuns_set(num_of_runs:number){
           this.NumberOfRunsScored=num_of_runs;
    }
    numberOfBalls_set(){
           this.NumberOfBallsFaced++;
    }
    set_Isout(isout:boolean){
        this.IsOut=isout;
    }
    get numberOfBalls():number{
        return this.NumberOfBallsFaced;
    }
    get isOut():boolean{
        return this.IsOut;
    }
    get DismissalType(){
        return this.dismissalType;
    }
    addRuns(score:number):number{
        return this.NumberOfRunsScored+=score;
    }
}