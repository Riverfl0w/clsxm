# @riverfl0w/clsxm

This is `@riverfl0w/clsxm`, a small, efficient utility that combines the functionality of `clsx` and `tailwind-merge`. It is designed for projects using Tailwind CSS, providing a streamlined way to handle conditional class names and optimize them for production.

## Features

- **Efficient Class Name Merging:** Seamlessly merge class names using `clsx` and optimize them using `tailwind-merge`.
- **Tailwind CSS Compatibility:** Perfect for projects using Tailwind CSS.
- **Simple API:** Easy-to-use function that takes any number of class name arguments.

## Installation

To install `@riverfl0w/clsxm`, you can use npm or yarn:

```bash
npm install @riverfl0w/clsxm
# or
yarn add @riverfl0w/clsxm
```

## Usage

Import `clsxm` into your project and use it to concatenate and optimize class names:

```ts
import clsxm from '@riverfl0w/clsxm';

const buttonClass = clsxm(
  'p-4',
  'text-white',
  { 'bg-blue-500': !isError, 'bg-red-500': isError },
  { 'rounded-lg': isLarge },
);
```

## API

### `clsxm(...classes)`

- `...classes: (ClassValue[])`` - An array of class values (string, array, object, or null/undefined).

Returns a string of optimized class names.`

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Authors

- Mathieu Bour - mathieu@riverflow.co
- Valentin Pollart - valentin@riverflow.co

## Licensing

The code in this project is licensed under MIT license.
