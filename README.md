# CRUD usando Redux Toolkit y React JS

Bienvenido al proyecto CRUD, donde Redux Toolkit permite una gestión del estado perfecta. Esta aplicación abarca operaciones fundamentales de creación, lectura, actualización y eliminación (CRUD) para registros de empleados. Utilizando el poder de Redux Toolkit y `createAsyncThunk`, este proyecto permite actualizaciones dinámicas sin actualizar la página.

## Características clave

1. **Agregar empleado:** Incorpora nuevos registros de empleados a la aplicación.
2. **Eliminar empleado:** Elimina registros de empleados sin esfuerzo.
3. **Actualizar empleado:** Modifique instantáneamente los detalles del empleado.
4. **Buscar empleado:** Recupere y muestre los datos de los empleados sin problemas.

## Tecnologías y bibliotecas utilizadas

### Backend

- **Node.js:** Entorno de ejecución backend (Node.js versión 18.16.0).
- **Express:** Servicio de tiempo de ejecución backend.
- **MongoDB:** Almacenamiento de datos confiable.
- **CORS:** Administrar el intercambio de recursos entre orígenes.

### Frontend

- **React:** Interfaz de usuario y componentes frontend.
- **Redux:** Gestión de estado mediante Redux Toolkit.
- **React Redux:** Conecte los componentes de React a la tienda Redux.
- **Redux Toolkit:** Simplifica estados y acciones.
- **createAsyncThunk:** Llamadas API asíncronas a través de middleware.
- **Axios:** Solicitudes API fluidas.
- **Material UI:** Diseño pulido y fácil de usar.

## Estructura de carpetas

El proyecto tiene directorios `frontend` y `backend`. `frontend` contiene la aplicación React; `backend` aloja el servidor Express y la configuración de MongoDB.

## Instalación y uso

**Paso 1:** Instalar dependencias de backend

```bash
cd backend
npm install
```

**Paso 2:** Ejecute el servidor backend

```bash
npm start
```

**Paso 3:** Instalar las dependencias del frontend

```bash
cd frontend
npm install
```

**Paso 4:** Ejecute la aplicación frontend

```bash
npm run dev
```

Navegue a [http://localhost:5173](http://localhost:5173) para acceder a la aplicación.
