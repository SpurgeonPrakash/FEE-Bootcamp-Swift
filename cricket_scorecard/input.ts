export interface Input{
    runsScored: number;
    isOut: boolean;
    dismissalType?: string;
    dismissalInfo?: DismissalInfo;
    batsmanName: string;
    bowlerName: string; 
    extraInfo?: ExtraInfo;
    isExtra?: boolean;
    extraType?: string;
   
}

export interface DismissalInfo
{
    fielderName?: string;
    hasBatsmanCrossed?: boolean;
    batsmanOut?: string;
}
export interface ExtraInfo
{
    runsOffered:number;
}


