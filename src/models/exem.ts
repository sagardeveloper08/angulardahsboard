

export class _question
{
    userId?:string;
    quId:number;
    questin:string;
    a_answer:string;
    b_answer:string;
    c_answer:string;
    d_answer:string;
    ansId:number;
    subId:string;
    qu_hiden:boolean;     
}
export class _subject
{
    subId:number;
    subname:string;
    descrip:string;      
}
export class _answer
{
    ansId:number;
    answer:string;      
}
export class _exam
{
    //exId:number;
    userId:string;
    quId:number;
    rating:number;
    examdate:string;
    descrip:string;
    ex_hiden:boolean;        
}