# Formulario Web Interactivo - Actividad Evaluada

Este proyecto consiste en la creación de un formulario web funcional y responsivo, desarrollado para la asignatura de **Diseño y Desarrollo de Software + IA**. El objetivo principal es demostrar el dominio de la estructura semántica en HTML5, el diseño basado en el modelo de caja (Box Model) con CSS y la manipulación del DOM mediante JavaScript.

## 📋 Descripción del Proyecto
La página web presenta un portal de registro de usuarios. Permite capturar datos personales mediante distintos tipos de entradas (texto, email, fecha, selección, etc.) y procesa el envío de forma local mostrando una confirmación dinámica al usuario.

## 📂 Estructura de Carpetas
El proyecto sigue una organización de archivos estricta para asegurar la separación de responsabilidades:

```text
/proyecto-formulario
│── index.html              # Estructura principal de la página
└── assets/                 # Recursos del proyecto
    ├── css/
    │   └── style.css       # Estilos, diseño y Box Model
    ├── js/
    │   └── script.js       # Lógica de interacción y manipulación del DOM
    └── img/
        └── imagen.jpg      # Imagen decorativa del encabezado

```
### 🛠️ Tecnologías y Semántica Usada

## Estructura Semántica Aplicada
Se utilizaron etiquetas semánticas para mejorar la accesibilidad y el SEO, siguiendo los estándares W3C:

* **`<header>`**: Encabezado principal con banner y título.
* **`<main>`**: Contenedor del contenido principal de la aplicación.
* **`<article>`**: Bloque autónomo que contiene el formulario de registro.
* **`<fieldset>` y `<legend>`**: Agrupación lógica de campos relacionados (ej: Género).
* **`<aside>`**: Sección de ayuda y soporte ubicada al final de la página.
* **`<label>` e `<input>`**: Vinculación correcta para asegurar la accesibilidad.

## CSS3 (Diseño)
El diseño se centra en el CSS Box Model:

* Padding: Espaciado interno en inputs y contenedores para legibilidad.

* Margin: Separación entre secciones y elementos del formulario.

* Border: Definición visual de campos y secciones.

* Flexbox: Utilizado en .layout-principal para organizar el flujo vertical del formulario y la ayuda.

## JavaScript (Interacción)
Se implementó lógica dinámica para mejorar la experiencia del usuario:

* Selección de elementos mediante document.getElementById y document.querySelector.

* Uso de addEventListener para capturar el evento submit.

* Empleo de event.preventDefault() para gestionar el envío sin recargar la página.

* Manipulación del DOM para cambiar el color y texto del título tras el éxito.

* Uso de form.reset() para limpiar los campos automáticamente.


