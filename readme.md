![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.

## Using this component

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@isquadrepair/appointment-form@0.0.2/dist/isquad-appointment-form/isquad-appointment-form.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install @isquadrepair/appointment-form --save`
- Put a script tag similar to this `<script src='node_modules/@isquadrepair/appointment-form@0.0.2/dist/isquad-appointment-form/isquad-appointment-form.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install @isquadrepair/appointment-form --save`
- Add an import to the npm packages `import @isquadrepair/appointment-form;`
- Then you can use the element anywhere in your template, JSX, html etc
-

### Manually Copy Component to your project after build

Build the component for production, run:

```bash
npm run build
```

- Copy `dist/isquad-appointment-form` directory in to your project

To use this component copy the following into your Html file, just use it like any other HTML element:

```html
<appointment-form></appointment-form>
<script>
  const minutesStep = '30';
  const formSubmitUrl =
    'https://us-central1-nestjs-ionic-form-i.cloudfunctions.net/api/v1/forms/sendMails';
  const isMobileAppointment = false;
  const mobileHours = {
    Monday: { from: 10, to: 19, closed: false },
    Tuesday: { from: 10, to: 19, closed: false },
    Wednesday: { from: 10, to: 19, closed: false },
    Thursday: { from: 10, to: 19, closed: false },
    Friday: { from: 10, to: 19, closed: false },
    Saturday: { from: 10, to: 19, closed: false },
    Sunday: { from: 10, to: 19, closed: false },
  };
  // Hours in military format
  const locations = {
    'San Diego (Miramar)': {
      Monday: { from: 10, to: 19, closed: false },
      Tuesday: { from: 10, to: 19, closed: false },
      Wednesday: { from: 10, to: 19, closed: false },
      Thursday: { from: 10, to: 19, closed: false },
      Friday: { from: 10, to: 19, closed: false },
      Saturday: { from: 10, to: 17, closed: false },
      Sunday: { closed: true },
      selected: false,
    },
    'El Cajon': {
      Monday: { from: 9, to: 19, closed: false },
      Tuesday: { from: 9, to: 19, closed: false },
      Wednesday: { from: 9, to: 19, closed: false },
      Thursday: { from: 9, to: 19, closed: false },
      Friday: { from: 9, to: 19, closed: false },
      Saturday: { from: 10, to: 19, closed: false },
      Sunday: { from: 11, to: 17, closed: false },
      selected: false,
    },
    'Mission Valley': {
      Monday: { from: 9, to: 19, closed: false },
      Tuesday: { from: 9, to: 19, closed: false },
      Wednesday: { from: 9, to: 19, closed: false },
      Thursday: { from: 9, to: 19, closed: false },
      Friday: { from: 9, to: 19, closed: false },
      Saturday: { from: 10, to: 19, closed: false },
      Sunday: { from: 11, to: 17, closed: false },
      selected: false,
    },
    'Santee': {
      Monday: { from: 9, to: 19, closed: false },
      Tuesday: { from: 9, to: 19, closed: false },
      Wednesday: { from: 9, to: 19, closed: false },
      Thursday: { from: 9, to: 19, closed: false },
      Friday: { from: 9, to: 19, closed: false },
      Saturday: { from: 10, to: 19, closed: false },
      Sunday: { from: 11, to: 16, closed: false },
      selected: false,
    },
    'Encinitas': {
      Monday: { from: 10, to: 17, closed: false },
      Tuesday: { from: 10, to: 17, closed: false },
      Wednesday: { from: 10, to: 17, closed: false },
      Thursday: { from: 10, to: 17, closed: false },
      Friday: { from: 10, to: 17, closed: false },
      Saturday: { from: 10, to: 3, closed: false },
      Sunday: { closed: true },
      selected: false,
    },
    'Carlsbad': {
      Monday: { from: 10, to: 18, closed: false },
      Tuesday: { from: 10, to: 18, closed: false },
      Wednesday: { from: 10, to: 18, closed: false },
      Thursday: { from: 10, to: 18, closed: false },
      Friday: { from: 10, to: 18, closed: false },
      Saturday: { from: 10, to: 15, closed: false },
      Sunday: { closed: true },
      selected: false,
    },
    'Oceanside': {
      Monday: { from: 10, to: 20, closed: false },
      Tuesday: { from: 10, to: 20, closed: false },
      Wednesday: { from: 10, to: 20, closed: false },
      Thursday: { from: 10, to: 20, closed: false },
      Friday: { from: 10, to: 20, closed: false },
      Saturday: { from: 10, to: 20, closed: false },
      Sunday: { from: 10, to: 20, closed: false },
      selected: false,
    },
    'Mobile Service': {
      Monday: { from: 9, to: 19, closed: false },
      Tuesday: { from: 9, to: 19, closed: false },
      Wednesday: { from: 9, to: 19, closed: false },
      Thursday: { from: 9, to: 19, closed: false },
      Friday: { from: 10, to: 19, closed: false },
      Saturday: { from: 10, to: 17, closed: false },
      Sunday: { closed: true },
      selected: false,
    },
  };
  var cmp = document.querySelector('appointment-form');
  cmp.locations = locations;
  cmp.minutesStep = minutesStep;
  cmp.formSubmitUrl = formSubmitUrl;
  cmp.isMobileAppointment = isMobileAppointment;
  cmp.mobileHours = mobileHours;
</script>
```
