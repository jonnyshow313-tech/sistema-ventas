# Sistema de Ventas

Este repositorio contiene la estructura base para un sistema de ventas con frontend y backend separados.

## Stack sugerido
- Frontend: React + Vite
- Backend: Node.js + Express
- Base de datos: PostgreSQL / MySQL
- Estilo: CSS modular / componentes reutilizables

## Estructura del proyecto

```bash
sistema-ventas/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## Modulos principales
- Dashboard administrativo
- Gestión de productos
- Gestión de clientes
- Control de ventas
- Reportes y estadísticas
- Inventario
- Usuarios y roles

## Ejecución local

### 1. Instala dependencias
```bash
npm install
```

### 2. Inicia frontend y backend
```bash
npm run dev
```

## Puertos por defecto
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Estado inicial
La estructura actual incluye una base funcional con:
- API Express con endpoints de prueba
- Frontend React con panel de ventas inicial
- Archivos de configuración para desarrollo local

## Siguientes pasos recomendados
1. Agregar autenticación JWT
2. Conectar base de datos
3. CRUD de productos y clientes
4. Generar facturas
5. Crear reportes por fecha y vendedor
6. Implementar roles de usuario
