# Proyecto Técnico - Asegurados API y Frontend

Este proyecto es parte de una prueba técnica para desarrollar una solución basada en una API RESTful y un frontend en Angular. La aplicación permite gestionar asegurados y realizar operaciones CRUD.

## **Tecnologías Utilizadas**
- **Backend**: .NET Core 9
  - Entity Framework Core para manejo de la base de datos.
  - Swagger para documentación de la API.
- **Frontend**: Angular 19
  - Uso de componentes standalone.
  - Ngx-pagination para manejo de la paginación.
- **Base de Datos**: SQL Server
- **Despliegue**:
  - Backend: Azure App Service.
  - Frontend: Nastlify.

---

## **Características**

### **Backend**
- **Endpoints:**
  - Crear un asegurado.
  - Obtener asegurados con soporte para paginación.
  - Actualizar un asegurado.
  - Eliminar un asegurado.
  - Filtrar asegurados por número de identificación.
- **Validaciones**:
  - Todos los campos requeridos son validados antes de ser almacenados.
  - Manejo de errores para evitar duplicados.

### **Frontend**
- **Características**:
  - Formulario para crear un asegurado con validaciones.
  - Tabla que muestra la lista de asegurados con soporte para:
    - Paginación.
    - Búsqueda por número de identificación.
    - Edición y eliminación directa desde la tabla.
- **Estilos**:
  - Diseño responsivo usando CSS puro.

### **Despliegue**
- Visite https://asegurados-8885d.web.app.
