# react-minigraph

-   Check out the [demo](https://pitilezard.github.io/react-minigraph)
-   Doc is [available here](https://pitilezard.github.io/react-minigraph/doc.html)

## Install

```bash
npm install react-minigraph --save
yarn add react-minigraph
```

## Run the demo

```bash
yarn install
yarn dev
```

## Use

```tsx
import { MiniGraph, MiniGraphLine, MiniGraphNormalBand, MiniGraphAverage};

const data: number[] = [ /* Your data */ ];

<MiniGraph data={data}>
    <MiniGraphLine curved filled />
    <MiniGraphNormalBand />
    <MiniGraphAverage />
</MiniGraphLine>
```

Will get you this:

![Graph1](/demo/img/graph-line-curved-average-band.png)

Colours are automatically generated using [chroma-js](https://vis4.net/chromajs/), if you don't specify the starting colour, it'll pick one randomly.

## Prior Art

This project was inspired by [react-sparklines](https://www.npmjs.com/package/react-sparklines).
