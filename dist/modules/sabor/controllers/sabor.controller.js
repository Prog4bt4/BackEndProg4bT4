"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaborController = void 0;
const sabor_model_1 = require("../models/sabor.model");
class SaborController {
    constructor() {
        this.crearSabor = (req, res) => {
            const nuevaSabor = new sabor_model_1.default({
                sabor: req.body.sabor
            });
            nuevaSabor.save()
                .then(saborCreada => {
                res.status(201).json({
                    ok: true,
                    sabor: saborCreada,
                    message: 'Sabor creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Sabor no creada'
                });
            });
        };
        this.obtenerSabors = (req, res) => {
            sabor_model_1.default.find()
                .then(sabors => {
                res.status(200).json({
                    ok: true,
                    sabors: sabors
                });
                /*
                    [
                        {
                            _id: "kfhsdkfhskfhsd",
                            sabor: "ESPAÑOL"
                        },
                        {
                            _id: "kfhsdkfhskfhsd",
                            sabor: "QUÍMICA"
                        }
                    ]
                */
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarSabor = (req, res) => {
            sabor_model_1.default.findByIdAndUpdate(req.params.id, {
                sabor: req.body.sabor
            })
                .exec()
                .then(saborActualizada => {
                res.status(200).json({
                    ok: true,
                    sabor: saborActualizada
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Sabor no actualizada'
                });
            });
        };
        this.eliminarSabor = (req, res) => {
            sabor_model_1.default.findByIdAndDelete(req.params.id)
                .then(saborEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Sabor eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Sabor no eliminada'
                });
            });
        };
    }
}
exports.SaborController = SaborController;
//# sourceMappingURL=sabor.controller.js.map