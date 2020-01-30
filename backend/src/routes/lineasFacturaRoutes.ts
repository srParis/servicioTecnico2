import {Router} from 'express';
import {lineasFacturaController} from '../controllers/lineasFacturaController';

class LineasFacturaRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',lineasFacturaController.create);
        this.router.get('/',lineasFacturaController.read);
        this.router.put('/:id',lineasFacturaController.update);
        this.router.delete('/:id',lineasFacturaController.delete);
        this.router.get('/:id',lineasFacturaController.readone);
    }
}
const lineasFacturaRoutes = new LineasFacturaRoutes();
export default lineasFacturaRoutes.router;