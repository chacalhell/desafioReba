This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Desafio Reba


## Indice
- [Desafio Reba](#desafio-reba)
  - [Indice](#indice)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Scripts](#scripts)
  - [Estructura de carpetas](#estructura-de-carpetas)
- [Preview](#preview)

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
![preview]()
