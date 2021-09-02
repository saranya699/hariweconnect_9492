import { Request, Response } from 'express';
import { hariService } from '../service/hariService';
import { CustomLogger } from '../config/Logger'
let hari = new hariService();

export class hariController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
hari.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into hariController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from hariController.ts: GpCreate');
    })}


}