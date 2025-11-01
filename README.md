# API REST - Talleres de Desarrollo Backend

API REST construida con Node.js y Express. Implementa funciones de los 3 talleres diferentes a través de endpoints POST.

## Descripción

Este proyecto convierte funciones JavaScript de los talleres en una API REST completa con validación de datos, manejo de errores y respuestas estructuradas en JSON.

## Estructura del Proyecto

```
talleres_dllo_backend/
├── modules/
│   ├── taller1.js          # Funciones exportables del taller 1
│   ├── taller2.js          # Funciones exportables del taller 2
│   └── taller3.js          # Funciones exportables del taller 3
├── routes/
│   ├── taller1.routes.js   # Rutas y validaciones del taller 1
│   ├── taller2.routes.js   # Rutas y validaciones del taller 2
│   └── taller3.routes.js   # Rutas y validaciones del taller 3
├── index.js                # Servidor principal Express
├── package.json            # Dependencias y scripts
├── .gitignore             # Archivos ignorados por Git
├── taller1.js             # Archivo original (no modificado)
├── taller2.js             # Archivo original (no modificado)
├── taller3.js             # Archivo original (no modificado)
└── README.md              # Este archivo
```

## Instalación

1. **Clonar el repositorio** (si aplica):
```bash
git clone https://github.com/OmarCifuentes/API-Talleres.git
cd talleres_dllo_backend
```

2. **Instalar dependencias**:
```bash
npm install
```

## Ejecución

### Modo producción:
```bash
npm start
```

### Modo desarrollo (con auto-reload):
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

## Documentación de Endpoints

### Información General
- **Base URL**: `http://localhost:3000`
- **Método**: Todos los endpoints usan `POST`
- **Content-Type**: `application/json`

### Ruta Principal

#### GET /
Muestra información general de la API y lista de endpoints disponibles.

**Ejemplo con cURL**:
```bash
curl http://localhost:3000/
```

---

## TALLER 1

### 1. Convertidor de Temperatura

**Endpoint**: `POST /api/taller1/convertidor-temp`

**Descripción**: Convierte temperatura de Celsius a Fahrenheit.

**Body**:
```json
{
  "tempC": 60
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "temperaturaCelsius": 60,
    "temperaturaFahrenheit": 140
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller1/convertidor-temp \
  -H "Content-Type: application/json" \
  -d "{\"tempC\": 60}"
```

---

### 2. Resolvedor de Ecuaciones Cuadráticas

**Endpoint**: `POST /api/taller1/resolvedor`

**Descripción**: Resuelve ecuaciones cuadráticas usando la fórmula general.

**Body**:
```json
{
  "a": 1,
  "b": 5,
  "c": 4,
  "positivo": true
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "ecuacion": {
      "a": 1,
      "b": 5,
      "c": 4,
      "positivo": true
    },
    "resultado": -1
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller1/resolvedor \
  -H "Content-Type: application/json" \
  -d "{\"a\": 1, \"b\": 5, \"c\": 4, \"positivo\": true}"
```

---

### 3. Mejor Paridad

**Endpoint**: `POST /api/taller1/mejor-paridad`

**Descripción**: Determina si un número es par (método eficiente).

**Body**:
```json
{
  "numero": 8
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "numero": 8,
    "esPar": true
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller1/mejor-paridad \
  -H "Content-Type: application/json" \
  -d "{\"numero\": 8}"
```

---

### 4. Peor Paridad

**Endpoint**: `POST /api/taller1/peor-paridad`

**Descripción**: Determina si un número es par (método ineficiente).

**Body**:
```json
{
  "numero": 7
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "numero": 7,
    "resultado": "El número es impar 7"
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller1/peor-paridad \
  -H "Content-Type: application/json" \
  -d "{\"numero\": 7}"
```

---

## TALLER 2 

### 1. Encontrar Máximo

**Endpoint**: `POST /api/taller2/find-max`

**Descripción**: Encuentra el valor máximo en una lista de números.

**Body**:
```json
{
  "lista": [3, 17, -1, 4, -19]
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "lista": [3, 17, -1, 4, -19],
    "maximo": 17
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller2/find-max \
  -H "Content-Type: application/json" \
  -d "{\"lista\": [3, 17, -1, 4, -19]}"
```

---

### 2. Incluye Número

**Endpoint**: `POST /api/taller2/includes`

**Descripción**: Verifica si un número está presente en una lista.

**Body**:
```json
{
  "lista": [3, 17, -1, 4, -19],
  "numero": 4
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "lista": [3, 17, -1, 4, -19],
    "numero": 4,
    "incluye": true
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller2/includes \
  -H "Content-Type: application/json" \
  -d "{\"lista\": [3, 17, -1, 4, -19], \"numero\": 4}"
```

---

### 3. Suma de Lista

**Endpoint**: `POST /api/taller2/sum`

**Descripción**: Suma todos los elementos de una lista.

**Body**:
```json
{
  "lista": [3, 17, -1, 4, -19]
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "lista": [3, 17, -1, 4, -19],
    "suma": 4
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller2/sum \
  -H "Content-Type: application/json" \
  -d "{\"lista\": [3, 17, -1, 4, -19]}"
```

---

### 4. Números Faltantes

**Endpoint**: `POST /api/taller2/missing-numbers`

**Descripción**: Encuentra los números faltantes en una secuencia.

**Body**:
```json
{
  "lista": [7, 2, 4, 6, 3, 9]
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "lista": [7, 2, 4, 6, 3, 9],
    "numerosFaltantes": [5, 8]
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller2/missing-numbers \
  -H "Content-Type: application/json" \
  -d "{\"lista\": [7, 2, 4, 6, 3, 9]}"
```

---

## TALLER 3

### 1. Desglosar String

**Endpoint**: `POST /api/taller3/desglosar-string`

**Descripción**: Cuenta vocales o consonantes en una cadena.

**Body**:
```json
{
  "cadena": "Hola Mundo",
  "tipo": "vocales"
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "cadena": "Hola Mundo",
    "tipo": "vocales",
    "contador": 4
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller3/desglosar-string \
  -H "Content-Type: application/json" \
  -d "{\"cadena\": \"Hola Mundo\", \"tipo\": \"vocales\"}"
```

---

### 2. Two Sum

**Endpoint**: `POST /api/taller3/two-sum`

**Descripción**: Encuentra dos índices cuya suma sea igual al objetivo.

**Body**:
```json
{
  "lista": [2, 7, 11, 15],
  "objetivo": 9
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "lista": [2, 7, 11, 15],
    "objetivo": 9,
    "indices": [0, 1],
    "encontrado": true
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller3/two-sum \
  -H "Content-Type: application/json" \
  -d "{\"lista\": [2, 7, 11, 15], \"objetivo\": 9}"
```

---

### 3. Conversión Romana

**Endpoint**: `POST /api/taller3/conversion-romana`

**Descripción**: Convierte números romanos a decimales.

**Body**:
```json
{
  "romano": "MCMXCIV"
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "numeroRomano": "MCMXCIV",
    "numeroDecimal": 1994
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller3/conversion-romana \
  -H "Content-Type: application/json" \
  -d "{\"romano\": \"MCMXCIV\"}"
```

---

### 4. Descomposición

**Endpoint**: `POST /api/taller3/descomposicion`

**Descripción**: Descompone una palabra en dos del diccionario.

**Body**:
```json
{
  "cadena": "hola,ho,la,hol,a"
}
```

**Respuesta exitosa**:
```json
{
  "success": true,
  "data": {
    "cadenaOriginal": "hola,ho,la,hol,a",
    "palabrasEncontradas": ["ho", "la"],
    "encontrado": true
  }
}
```

**Ejemplo con cURL**:
```bash
curl -X POST http://localhost:3000/api/taller3/descomposicion \
  -H "Content-Type: application/json" \
  -d "{\"cadena\": \"hola,ho,la,hol,a\"}"
```

---

## Manejo de Errores

### Error 400 - Bad Request
Se retorna cuando los parámetros son inválidos o faltan.

**Ejemplo**:
```json
{
  "success": false,
  "error": "El parámetro tempC es requerido"
}
```

### Error 404 - Not Found
Se retorna cuando la ruta no existe.

**Ejemplo**:
```json
{
  "success": false,
  "error": "Ruta no encontrada",
  "message": "La ruta POST /api/invalida no existe",
  "availableRoutes": "Visita GET / para ver todas las rutas disponibles"
}
```

### Error 500 - Internal Server Error
Se retorna cuando hay un error interno del servidor.

**Ejemplo**:
```json
{
  "success": false,
  "error": "Error interno del servidor",
  "message": "Descripción del error"
}
```

---

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express.js**: Framework web
- **ES6 Modules**: Sistema de módulos moderno

## Dependencias

```json
{
  "express": "^4.18.2"
}
```

## Pruebas

Se pueden probar todos los endpoints usando:

- **cURL**: Ejemplos incluidos en cada endpoint
- **Postman**: Importa las URLs y ejemplos
- **Thunder Client**: Extensión de VS Code (ver sección abajo)
- **Navegador**: Solo para GET /

---
## Autor

OmarCifuentes

