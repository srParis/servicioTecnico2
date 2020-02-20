import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';

// falta direccion
import direccionesRoutes from './routes/direccionesRoutes';
import dispositivosRoutes from './routes/dispositivosRoutes';
import empresasRoutes from './routes/empresasRoutes';
import facturasRoutes from './routes/facturasRoutes';
import historialEstadosRoutes from './routes/historialEstadosRoutes';
import lineasFacturaRoutes from './routes/lineasFacturaRoutes';
import lineasReparacionRoutes from './routes/lineasReparacionRoutes';
import marcasRoutes from './routes/marcasRoutes';
import modelosRoutes from './routes/modelosRoutes';
import poblacionesRoutes from './routes/poblacionesRoutes';
import provinciasRoutes from './routes/provinciasRoutes';
import puestosRoutes from './routes/puestosRoutes';
import reparacionesRoutes from './routes/reparacionesRoutes';
import tipoEstadoRoutes from './routes/tipoEstadoRoutes';
import tipoReparacionRoutes from './routes/tipoReparacionRoutes';
import trabajadoresRoutes   from './routes/trabajadoresRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app:Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/usuarios',usuariosRoutes);
        this.app.use('/direcciones', direccionesRoutes);
        this.app.use('/dispositivos', dispositivosRoutes);
        this.app.use('/empresas', empresasRoutes);
        this.app.use('/facturas', facturasRoutes);
        this.app.use('/historialEstados', historialEstadosRoutes);
        this.app.use('/lineasFactura', lineasFacturaRoutes);
        this.app.use('/lineasReparacion', lineasReparacionRoutes);
        this.app.use('/marcas', marcasRoutes);
        this.app.use('/modelos', modelosRoutes);
        this.app.use('/poblaciones', poblacionesRoutes);
        this.app.use('/provincias', provinciasRoutes);
        this.app.use('/puestos', puestosRoutes);
        this.app.use('/reparaciones', reparacionesRoutes);
        this.app.use('/tipoEstado', tipoEstadoRoutes);
        this.app.use('/tipoReparacion',tipoReparacionRoutes);
        this.app.use('/trabajadores', trabajadoresRoutes);
    

    }

    start():void{
        this.app.listen(this.app.get('port'), () => console.log('El servidor esta escuchando en el puerto ', this.app.get('port')));
    }
}

const server = new Server();
server.start();