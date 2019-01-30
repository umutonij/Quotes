export class Quotes {
    public showDescription:boolean
    constructor(public id:number, 
        public name:string,
       public quote: string,
       public author: string,
        public completeDate:Date){
        this.showDescription=false

    }
}
