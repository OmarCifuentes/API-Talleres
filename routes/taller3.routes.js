import express from 'express';
import { desglosarString, twoSum, conversionRomana, descomposicion } from '../modules/taller3.js';

const router = express.Router();

// POST /api/taller3/desglosar-string
router.post('/desglosar-string', (req, res) => {
    try {
        const { cadena, tipo } = req.body;

        if (!cadena || !tipo) {
            return res.status(400).json({
                success: false,
                error: 'Los parámetros cadena y tipo son requeridos'
            });
        }

        if (typeof cadena !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro cadena debe ser un string'
            });
        }

        if (typeof tipo !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro tipo debe ser un string'
            });
        }

        if (tipo !== 'vocales' && tipo !== 'consonantes') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro tipo debe ser "vocales" o "consonantes"'
            });
        }

        const resultado = desglosarString(cadena, tipo);

        res.json({
            success: true,
            data: {
                cadena,
                tipo,
                contador: resultado
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

// POST /api/taller3/two-sum
router.post('/two-sum', (req, res) => {
    try {
        const { lista, objetivo } = req.body;

        if (!lista || objetivo === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Los parámetros lista y objetivo son requeridos'
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

        if (typeof objetivo !== 'number') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro objetivo debe ser un número'
            });
        }

        const resultado = twoSum(lista, objetivo);

        res.json({
            success: true,
            data: {
                lista,
                objetivo,
                indices: resultado,
                encontrado: resultado.length > 0
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

// POST /api/taller3/conversion-romana
router.post('/conversion-romana', (req, res) => {
    try {
        const { romano } = req.body;

        if (!romano) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro romano es requerido'
            });
        }

        if (typeof romano !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro romano debe ser un string'
            });
        }

        const caracteresValidos = /^[IVXLCDM]+$/;
        if (!caracteresValidos.test(romano)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro romano debe contener solo caracteres romanos válidos (I, V, X, L, C, D, M)'
            });
        }

        const resultado = conversionRomana(romano);

        res.json({
            success: true,
            data: {
                numeroRomano: romano,
                numeroDecimal: resultado
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

// POST /api/taller3/descomposicion
router.post('/descomposicion', (req, res) => {
    try {
        const { cadena } = req.body;

        if (!cadena) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro cadena es requerido'
            });
        }

        if (typeof cadena !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro cadena debe ser un string'
            });
        }

        if (!cadena.includes(',')) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro cadena debe contener al menos una coma separando la palabra objetivo del diccionario'
            });
        }

        const resultado = descomposicion(cadena);

        res.json({
            success: true,
            data: {
                cadenaOriginal: cadena,
                palabrasEncontradas: resultado,
                encontrado: resultado.length > 0
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
