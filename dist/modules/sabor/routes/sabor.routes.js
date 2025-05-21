"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaborRoutes = void 0;
const sabor_controller_1 = require("../controllers/sabor.controller");
class SaborRoutes {
    constructor() {
        this.saborController = new sabor_controller_1.SaborController();
    }
    routes(app) {
        app.route('/sabor')
            .get(this.saborController.obtenerSabors)
            .post(this.saborController.crearSabor);
        app.route('/sabor/:id')
            .put(this.saborController.actualizarSabor)
            .delete(this.saborController.eliminarSabor);
    }
}
exports.SaborRoutes = SaborRoutes;
//# sourceMappingURL=sabor.routes.js.map