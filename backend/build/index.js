"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
// falta direccion
const direccionesRoutes_1 = __importDefault(require("./routes/direccionesRoutes"));
const dispositivosRoutes_1 = __importDefault(require("./routes/dispositivosRoutes"));
const empresasRoutes_1 = __importDefault(require("./routes/empresasRoutes"));
const facturasRoutes_1 = __importDefault(require("./routes/facturasRoutes"));
const historialEstadosRoutes_1 = __importDefault(require("./routes/historialEstadosRoutes"));
const lineasFacturaRoutes_1 = __importDefault(require("./routes/lineasFacturaRoutes"));
const lineasReparacionRoutes_1 = __importDefault(require("./routes/lineasReparacionRoutes"));
const marcasRoutes_1 = __importDefault(require("./routes/marcasRoutes"));
const modelosRoutes_1 = __importDefault(require("./routes/modelosRoutes"));
const poblacionesRoutes_1 = __importDefault(require("./routes/poblacionesRoutes"));
const provinciasRoutes_1 = __importDefault(require("./routes/provinciasRoutes"));
const puestosRoutes_1 = __importDefault(require("./routes/puestosRoutes"));
const reparacionesRoutes_1 = __importDefault(require("./routes/reparacionesRoutes"));
const tipoEstadoRoutes_1 = __importDefault(require("./routes/tipoEstadoRoutes"));
const tipoReparacionRoutes_1 = __importDefault(require("./routes/tipoReparacionRoutes"));
const trabajadoresRoutes_1 = __importDefault(require("./routes/trabajadoresRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/direccion', direccionesRoutes_1.default);
        this.app.use('/dispositivos', dispositivosRoutes_1.default);
        this.app.use('/empresas', empresasRoutes_1.default);
        this.app.use('/facturas', facturasRoutes_1.default);
        this.app.use('/historialEstados', historialEstadosRoutes_1.default);
        this.app.use('/lineasFactura', lineasFacturaRoutes_1.default);
        this.app.use('/lineasReparacion', lineasReparacionRoutes_1.default);
        this.app.use('/marcas', marcasRoutes_1.default);
        this.app.use('/modelos', modelosRoutes_1.default);
        this.app.use('/poblaciones', poblacionesRoutes_1.default);
        this.app.use('/provincias', provinciasRoutes_1.default);
        this.app.use('/puestos', puestosRoutes_1.default);
        this.app.use('/reparaciones', reparacionesRoutes_1.default);
        this.app.use('/tipoEstado', tipoEstadoRoutes_1.default);
        this.app.use('/tipoReparacion', tipoReparacionRoutes_1.default);
        this.app.use('/trabajadores', trabajadoresRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('El servidor esta escuchando en el puerto ', this.app.get('port')));
    }
}
const server = new Server();
server.start();
