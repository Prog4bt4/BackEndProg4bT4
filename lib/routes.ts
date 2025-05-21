import { SaborRoutes } from "./modules/sabor/routes/sabor.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private saborRoutes: SaborRoutes = new SaborRoutes(); 

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.saborRoutes.routes(app);
    }
}