export class qrup
{
    qId:string;
    qrupname:string;
    qeyd:string;       
}

export class tipleri
{
    tipId:string;
    tipName:string;       
}
export class bolme
{
    bId:string;
    bolmeName:string;       
} 
export class madde
{
    mId:string;
    maddeName:string;       
} 
export class aktivi
{
    activId:string;
    activName:string;  
    description:string;  
}  
export class hesab
{
     hesId:string;
     hesnom:string;
     hesname:string;
     bId:string;
     mId:string;
     tipId:string;
     activId:string;
}    
export class shirket
{        
    shId :string;        
    bankadi:string;       
    bankvoen:string;        
    swift:string;        
    muxbirhesab:string;
    bankkodu:string;
    aznhesab:string;        
    shiricrachi :string;
    shirvoen :string;
    cavabdehshexs:string;
    email:string;
    unvan:string;
    userId:string;
    shirpercent:number;
}   
export class mushteri
{ 
     mushId:string;     
     firma:string;
     voen:string;
     muqavilenom:string;
     muqaviletar?:Date;
     valyuta:string;
     odemesherti:string;
     temsilchi:string;
}
export class vahid
{        
    vId:string;  
    vahidadi:string;
}  
export class valyuta
{        
    valId:string;  
    valname:string;
    valnominal:number;
} 
export class vergi
{
    vergiId:string;
    vergikodu:string;    
    vergikodununadi:string;
    vId:string;
    edv_tar?:Date;
    STATE:string;
}

export class verg
{
    CODE:string;
    ADI:string;
    VAHID:string;
    STATE:string;
}
export class hesb
{
    hesId:string;
    hesnom:string;
    hesname:string;
    bId:number;
    mId:string;
    tipId:string;
}