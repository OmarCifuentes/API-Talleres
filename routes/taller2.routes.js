import express from 'express';
import { findMax, includes, sum, missingNumbers } from '../modules/taller2.js';

const router = express.Router();

// POST /api/taller2/find-max
router.post('/find-max', (req, res) => {
    try {
        const { lista } = req.body;

        if (!lista) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista es requerido'
            });
        }

        if (!Array.isArray(lista)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista debe ser un array'
            });
        }

        if (lista.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'La lista no puede estar vacía'
            });
        }

        if (!lista.every(item => typeof item === 'number')) {
            return res.status(400).json({
                success: false,
                error: 'Todos los elementos de la lista deben ser números'
            });
        }

        const resultado = findMax(lista);

        res.json({
            success: true,
            data: {
                lista,
                maximo: resultado
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            message: error.message
        });
    }
});

// POST /api/taller2/includes
router.post('/includes', (req, res) => {
    try {
        const { lista, numero } = req.body;

        if (!lista || numero === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Los parámetros lista y numero son requeridos'
            });
        }

        if (!Array.isArray(lista)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista debe ser un array'
            });
        }

        if (typeof numero !== 'number') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro numero debe ser un número'
            });
        }

        const resultado = includes(lista, numero);

        res.json({
            success: true,
            data: {
                lista,
                numero,
                incluye: resultado
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            message: error.message
        });
    }
});

// POST /api/taller2/sum
router.post('/sum', (req, res) => {
    try {
        const { lista } = req.body;

        if (!lista) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista es requerido'
            });
        }

        if (!Array.isArray(lista)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista debe ser un array'
            });
        }

        if (!lista.every(item => typeof item === 'number')) {
            return res.status(400).json({
                success: false,
                error: 'Todos los elementos de la lista deben ser números'
            });
        }

        const resultado = sum(lista);

        res.json({
            success: true,
            data: {
                lista,
                suma: resultado
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            message: error.message
        });
    }
});

// POST /api/taller2/missing-numbers
router.post('/missing-numbers', (req, res) => {
    try {
        const { lista } = req.body;

        if (!lista) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista es requerido'
            });
        }

        if (!Array.isArray(lista)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro lista debe ser un array'
            });
        }

        if (!lista.every(item => typeof item === 'number' && Number.isInteger(item))) {
            return res.status(400).json({
                success: false,
                error: 'Todos los elementos de la lista deben ser números enteros'
            });
        }

        const resultado = missingNumbers(lista);

        res.json({
            success: true,
            data: {
                lista,
                numerosFaltantes: resultado
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
            message: error.message
        });
    }
});

export default router;
