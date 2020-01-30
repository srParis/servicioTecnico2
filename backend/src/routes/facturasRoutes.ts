import {Router} from 'express';
import {facturasController} from '../controllers/facturasController';

class FacturasRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',facturasController.create);
        this.router.get('/',facturasController.read);
        this.router.put('/:id',facturasController.update);
        this.router.delete('/:id',facturasController.delete);
        this.router.get('/:id',facturasController.readone);
    }
}
const facturasRoutes = new FacturasRoutes();
export default facturasRoutes.router;