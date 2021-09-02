import * as mongoose from 'mongoose';
import hariModel from '../models/hari';
import { CustomLogger } from '../config/Logger'


export class hariDao {
    private hari = hariModel;
    constructor() { }
public GpCreate(hariData, callback){
new CustomLogger().showLogger('info', 'Enter into hariDao.ts: GpCreate')
let temp = new hariModel(hariData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from hariDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}