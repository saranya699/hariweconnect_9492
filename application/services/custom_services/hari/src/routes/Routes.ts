import { Request, Response, NextFunction } from "express";
import { hariController } from '../controller/hariController';


export class Routes {
    private hari: hariController = new hariController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/hari').post(this.hari.GpCreate);
     }

}