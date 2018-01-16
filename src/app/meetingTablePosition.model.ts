export class MeetingTablePosition {
    public Id:number;
    public Name:string;
    public CountOfChairs:number;
    public IsBoard:boolean;
    public IsProjector:boolean;
    public firstMeetingData:Date;

    constructor (innerJson : any) {
        this.Id = innerJson.Id;
        this.Name = innerJson.Name;
        this.CountOfChairs = innerJson.CountOfChairs;
        this.IsBoard = innerJson.IsBoard;
        this.IsProjector = innerJson.IsProjector;
        this.firstMeetingData = new Date(innerJson.firstMeetingDate);
    }
}