This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Desafio Reba


## Indice
- [Desafio Reba](#desafio-reba)
  - [Indice](#indice)
  - [Intro Desafio](#intro-desafio)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Scripts](#scripts)
  - [Estructura de carpetas](#estructura-de-carpetas)
- [Preview](#preview)


## Intro Desafio
Desafío técnico

Objetivo:
El principal objetivo es construir una Aplicación Móvil con React Native para
Android y/o iOS.
Se divide en requisitos mínimos y opcionales para que puedas demostrar tu
experiencia y conocimientos.
Consigna
Desarrollar una aplicación móvil en React Native +0.60 sin Expo para Android y/o
iOS que consuma servicios de una API REST pública. Puede elegir la API REST pero
tenga en cuenta que deberá tener al menos dos endpoints de forma tal de:
```
● Obtener un listado de elementos. Dicho listado se debe mostrar en la
pantalla principal.
● Obtener el detalle de un elemento. El detalle del elemento se debe mostrar
en una nueva pantalla.
```
Además, se tendrá en cuenta: creatividad, diseño de la aplicación, manejo de
estilos, manejo de componentes, jerarquía de carpetas y organización del
proyecto.
```
Requisitos mínimos:
● Usar componentes funcionales y hooks.
● Crear al menos un custom hook.
● Usar React Navigation v5 o v6.
● Que funcione en al menos una plataforma (Android/iOS).
● Usar typescript.
Requisitos opcionales:
● Crear al menos un test unitario en Jest.
● Crear una opción para marcar/desmarcar elementos del listado como
favoritos. Estos elementos deberán aparecer al comienzo del listado y
persistirse entre sesiones de uso de la aplicación.
```
Entregar
El link con acceso al repositorio donde esté subido el código. Agregar un
README.md con toda la información necesaria para correr el proyecto localmente y
realizar la evaluación.


## Requisitos
-   Node v20.0.0
-   Emulador o dispositivo android 


## Instalación

- Instalar  dependencias: 
```
npm install
```
- Ejecutar metro: 
```
npm start
```
- Ejecutar aplicacion: 

```
npm run android
```
- En caso de probar en celular, copiar el apk  que se encuentra en la carpeta APK dentro del proyecto al dispositivo e instalar.



## Scripts

- Crear APK para android:
```
npm run android-release
```
- Ejecutar tests:
```
npm run test
```
- Ejecutar Metro:
```
npm start
```


## Estructura de carpetas
```
├── APK
├── src
│   ├── assets
│   ├── components
│   ├── helper
│   ├── hooks
│   ├── layouts
│   ├── navigation
│   └── services
```

- `APK` : Directorio donde se encuentra el APK de la aplicación.
¡Por supuesto! Aquí tienes una versión breve para tu README.md:

- `assets`: Recursos estáticos como imágenes, fuentes y archivos de audio.
- `components`: Componentes reutilizables de React para construir la interfaz de usuario.
- `helper`: Funciones auxiliares y utilidades para tareas comunes.
- `hooks`: Hooks personalizados de React para reutilizar la lógica en toda la aplicación.
- `layouts`: Componentes de alto nivel que definen la estructura de las pantallas.
- `navigation`: Configuración y lógica de navegación de la aplicación.
- `services`: Integración con servicios externos y manejo de API. Se utiliza la API [SWAPI
The Star Wars API](https://swapi.dev/) la cual obtiene datos de los personajes de Stars Wars.

# Preview
![preview](https://github.com/chacalhell/desafioReba/blob/master/preview.gif?raw=true)
