import { SaborController } from "../controllers/sabor.controller";

export class SaborRoutes {
    private saborController: SaborController = new SaborController(); 
    
    public routes(app): void {
        app.route('/sabor')
        .get(this.saborController.obtenerSabors)
        .post(this.saborController.crearSabor);

        app.route('/sabor/:id')
        .put(this.saborController.actualizarSabor)
        .delete(this.saborController.eliminarSabor);
    }
}