import { Request, Response } from 'express';
import {hariDao} from '../dao/hariDao';
import { CustomLogger } from '../config/Logger'
let hari = new hariDao();

export class hariService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into hariService.ts: GpCreate')
     const  hariData = req.body;
     hari.GpCreate(hariData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from hariService.ts: GpCreate')
         callback(response);
         });
    }


}