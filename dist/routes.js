"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const sabor_routes_1 = require("./modules/sabor/routes/sabor.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.saborRoutes = new sabor_routes_1.SaborRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.saborRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map