# test-innovations

## Tech

Tecnologías usadas:

- Vue.j
- SASS  
- API https://swapi.dev/
- GIT

Metas conseguidas:

1. Creadas 4 vistas, una principal donde poder acceder desde ella a cada una de las vistas para las personas, naves espaciales y planetas.
2. Creados 3 componentes, uno para el header, otro para el footer y otro como main, desde el cual accedemos al resto de vistas.
3. Consumí la API de 2 formas distintas:
    - En la vista de personas, estoy usando la Store, para que podais comprobar que sé utilizarla.
    - En las otras dos vistas restantes estoy usando axios, paquete preinstalado que podeis ver su configuracion en Main.js.
4. Estoy usando la metodología BEM, para las clases.
5. Creé los estilos desde una carpeta propia de CSS, la cual tengo atomizada, las variables separadas del reset y del resto de configuraciones de CSS,
   simplemente creo un archivo general.scss, en el cual importo todos los estilos y desde app.js solo importo general.scss.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
