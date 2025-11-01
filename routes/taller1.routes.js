import express from 'express';
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from '../modules/taller1.js';

const router = express.Router();

// POST /api/taller1/convertidor-temp
router.post('/convertidor-temp', (req, res) => {
    try {
        const { tempC } = req.body;

        if (tempC === undefined || tempC === null) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro tempC es requerido'
            });
        }

        if (typeof tempC !== 'number') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro tempC debe ser un número'
            });
        }

        const resultado = convertidorTemp(tempC);

        res.json({
            success: true,
            data: {
                temperaturaCelsius: tempC,
                temperaturaFahrenheit: resultado
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

// POST /api/taller1/resolvedor
router.post('/resolvedor', (req, res) => {
    try {
        const { a, b, c, positivo } = req.body;

        if (a === undefined || b === undefined || c === undefined || positivo === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Los parámetros a, b, c y positivo son requeridos'
            });
        }

        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            return res.status(400).json({
                success: false,
                error: 'Los parámetros a, b y c deben ser números'
            });
        }

        if (typeof positivo !== 'boolean') {
            return res.status(400).json({
                success: false,
                error: 'El parámetro positivo debe ser un booleano (true o false)'
            });
        }

        const resultado = resolvedor(a, b, c, positivo);

        res.json({
            success: true,
            data: {
                ecuacion: {
                    a,
                    b,
                    c,
                    positivo
                },
                resultado
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

// POST /api/taller1/mejor-paridad
router.post('/mejor-paridad', (req, res) => {
    try {
        const { numero } = req.body;

        if (numero === undefined || numero === null) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro numero es requerido'
            });
        }

        if (typeof numero !== 'number' || !Number.isInteger(numero)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro numero debe ser un número entero'
            });
        }

        const resultado = mejorParidad(numero);

        res.json({
            success: true,
            data: {
                numero,
                esPar: resultado
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

// POST /api/taller1/peor-paridad
router.post('/peor-paridad', (req, res) => {
    try {
        const { numero } = req.body;

        if (numero === undefined || numero === null) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro numero es requerido'
            });
        }

        if (typeof numero !== 'number' || !Number.isInteger(numero)) {
            return res.status(400).json({
                success: false,
                error: 'El parámetro numero debe ser un número entero'
            });
        }

        const resultado = peorParidad(numero);

        res.json({
            success: true,
            data: {
                numero,
                resultado
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
