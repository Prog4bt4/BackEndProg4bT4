import { Request, Response } from 'express';
import * as _ from 'lodash';
import Sabor from '../models/sabor.model';
import { exec } from 'child_process';

export class SaborController {
    crearSabor = (req: Request, res: Response) => {
        const nuevaSabor = new Sabor({
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
    }

    obtenerSabors = (req: Request, res: Response) => {
        Sabor.find()
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
    }

    actualizarSabor = (req: Request, res: Response) => {
        Sabor.findByIdAndUpdate(req.params.id,{
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
    }

    eliminarSabor = (req: Request, res: Response) => {
        Sabor.findByIdAndDelete(req.params.id)
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
    }
}