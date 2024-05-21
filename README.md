# Buscador de películas

## Tabla de contenido
- [Descripcion](#descripción)
- [Instalacion](#instalación)
- [Uso](#uso)
- [Tecnologia](#tecnología)

## Descripción

Página clone de Netflix enfocado en realiza búsquedas de películas basado en dos criterios:
 
 - Texto: Filtra por título o descripción de la película
 - Género: Filtra por el género de la película

Ambos filtros pueden ser usados en paralelo para poder tener un mejor control de las películas mostradas.

## Instalación
### Pre-requisitos
- Node.js v20+
- npm v10+

Instalar los node_modules del proyecto con npm

> Ingresar a la carpeta del proyecto y ejecutar

```
  npm install
```

### Configuración .env
Se tiene un archivo .env.example el cuál contiene la dirección en donde se encuentra el archivo json. En este caso, configurar el puerto según su preferencia y renombrar el archivo para que solo quede: 

```
.env
```

## Uso
Empezar el programa ejecutando el siguiente comando:

```
  npm run dev
```

En la página principal, filtrar a través del input text de la barra superior y del selector de género:

![image](https://res.cloudinary.com/dlhsturyl/image/upload/v1716266162/test/r2msqwddn5imnegswggm.gif)

## Tecnología
El proyecto cuenta con las siguientes dependencias instaladas:

  - axios: Para realizar peticiones al json
  - sass: pre procesador de css
  - react-router-dom: Para enrutado de páginas

El resto de features se implementó directamente con React y con sus propios hooks.

Para el manejo de los datos traídos del json, se utilizo los mismos hooks de react:

  - useContext
  - useReducer