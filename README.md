# Caffeine Components

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

This is a React component library, built with Radix UI and Tailwind CSS.
Integration with Storybook provides documentation and a way to run the library
locally, so that the components can be tested during development.

## Available Scripts

### Running Locally

```
npm run storybook
```

### Build the component library

```
npm run build
```

### Run all tests

```
npm run test
```

### Run all tests with coverage

```
npm run test-coverage
```

### Lint all code files

```
npm run lint
```

## Contributing

### Documentation

Each component is expected to have it's own story file, to document how it is
to be used, and what their props are for. Storybook will automatically extract
the prop's comments as that prop's description in the Storybook page. Thus, it
is good practice to comment each prop, describing what it is for.

The stories should include:

* Each (noteworthy) variant of that component
* Sample code of how to use the component
* A props table detailing each prop for the component

## Decisions

### Radix UI

With all the available component libraries out there, why was this headless
component library chosen? Libraries that have their own design system, such
as Material UI, can be difficult to customize when it comes to the look and
feel. Headless components provides a blank slate, so they can be styled in
whatever way one may want. The focus on accessibility also ensures that an
important aspect of UIs is already taken care of. Thus, Radix UI provides
fully functional and accessible components that we can then style in the
way we want.

### Tailwind CSS

Tailwind CSS was chosen because it is one of the most highly regarded
styling solutions out there and it can be easily adapted to use our
design tokens to apply a custom style to the functional components
provided by Radix UI.

In addition to that, Tailwind Variants is also utilized to enhance the
developer experience. It provides a nice API to make it easier to build all the
variants of the components.
