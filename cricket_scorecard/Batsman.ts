import {Player} from './Player'
export class Batsman extends Player{
    private NumberOfRunsScored:number;
    private NumberOfBallsFaced:number;
    private IsOut:boolean;
    private dismissalType:String;
    private dismissalInfo:object;
    private typeOfWicket:string;
    constructor(name:string)
    {
        super(name);
        this.NumberOfBallsFaced=0;
        this.NumberOfRunsScored=0;
        this.IsOut=false;
        this.dismissalType="Not Out";
        this.typeOfWicket="Not Out";
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
    addDismissalInfo(data :object)
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
    numberOfBalls_set(num_of_balls:number){
           this.NumberOfBallsFaced+=num_of_balls;
    }
    set_Isout(isout){
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