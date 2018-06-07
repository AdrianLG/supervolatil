# GuruNewAble

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

__________

# Important Updates! 
 
El compilador de PUG ha sido incluido a este proyecto, por lo que debera correr el proyecto via 
 
`npm start`

## Agregar nuevas paginas

Es facil. lo unico que hay que hacer es 

`ng g c ruta/y/nombre/del/componente`
`ng g m ruta/y/nombre/del/componente`

Despues ir a `app.module.ts` y quitar el componente que se añidio automaticamente

Despues configurar el nuevo `module.ts` recien generado copiando el contenido de otro modulo existente.

Agregar la nueva ruta en `app.routing.ts`

Posteriormente ir a `app/shared/menu-items/menu-items.ts` y agregar la nueva ruta al `sidebar menu`

*Suerte*