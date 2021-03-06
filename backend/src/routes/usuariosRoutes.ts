import {Router} from 'express';
import {usuariosController} from '../controllers/usuariosController';

class UsuariosRoutes {
    public router:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.router.post('/',usuariosController.create);
        this.router.get('/',usuariosController.read);
        this.router.put('/:id',usuariosController.update);
        this.router.delete('/:id',usuariosController.delete);
        this.router.get('/:id',usuariosController.readone);
        this.router.post('/login', usuariosController.readlogin);
        this.router.post('/loginGF', usuariosController.readloginGoogle);
        this.router.post('/userEm', usuariosController.userEmail);
    }
}
const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
