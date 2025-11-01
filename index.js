import express from 'express';
import taller1Routes from './routes/taller1.routes.js';
import taller2Routes from './routes/taller2.routes.js';
import taller3Routes from './routes/taller3.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API de Talleres - Backend Desarrollo',
        version: '1.0.0',
        endpoints: {
            taller1: {
                'POST /api/taller1/convertidor-temp': 'Convierte temperatura de Celsius a Fahrenheit',
                'POST /api/taller1/resolvedor': 'Resuelve ecuaciones cuadráticas',
                'POST /api/taller1/mejor-paridad': 'Determina si un número es par (método eficiente)',
                'POST /api/taller1/peor-paridad': 'Determina si un número es par (método ineficiente)'
            },
            taller2: {
                'POST /api/taller2/find-max': 'Encuentra el valor máximo en una lista',
                'POST /api/taller2/includes': 'Verifica si un número está en una lista',
                'POST /api/taller2/sum': 'Suma todos los elementos de una lista',
                'POST /api/taller2/missing-numbers': 'Encuentra números faltantes en una secuencia'
            },
            taller3: {
                'POST /api/taller3/desglosar-string': 'Cuenta vocales o consonantes en una cadena',
                'POST /api/taller3/two-sum': 'Encuentra dos índices que sumen un objetivo',
                'POST /api/taller3/conversion-romana': 'Convierte números romanos a decimales',
                'POST /api/taller3/descomposicion': 'Descompone una palabra en dos del diccionario'
            }
        },
        documentation: 'Consulta el README.md para ejemplos detallados de uso'
    });
});

app.use('/api/taller1', taller1Routes);
app.use('/api/taller2', taller2Routes);
app.use('/api/taller3', taller3Routes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Ruta no encontrada',
        message: `La ruta ${req.method} ${req.path} no existe`,
        availableRoutes: 'Visita GET / para ver todas las rutas disponibles'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/`);
});
