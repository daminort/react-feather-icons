# React Feather Icons

> An icon set based on [Feather Icons](https://feathericons.com/)

[![NPM](https://img.shields.io/npm/v/@daminort/react-feather-icons.svg)](https://www.npmjs.com/package/@daminort/react-feather-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live demo
<a name="live"></a>

You can see and play around with all icons on [Demo Page](https://daminort.github.io/react-feather-icons)

## Motivation
<a name="motivation"></a>

Inspired by awesome [Feather Icons](https://feathericons.com/) and really useful application of [@gaddafirusli](https://twitter.com/gaddafirusli) - [iconsvg.xyz](https://iconsvg.xyz), this icon set was created.

This set is based on [Feather Icons](https://feathericons.com/) `v4.19.0`, but also includes several icons created by [@gaddafirusli](https://twitter.com/gaddafirusli) specially for his site [iconsvg.xyz](https://iconsvg.xyz).

## Install
<a name="install"></a>

```shell
npm install --save @daminort/react-feather-icons
```

## Usage
<a name="usage"></a>

```jsx
import React, { Component } from 'react'
import Icon from '@daminort/react-feather-icons'

class Example extends Component {
  render () {
    return (
      <Icon
        name="arrowUp"
        size="48"
        thickness="2"
        ends="round"
        joins="round"
        color="#000000"
      />
    )
  }
}
```

## Props
<a name="props"></a>

| Name | Type | Required | Default value |
|---------|-------|---------|-------------|
|name|string|*||
|size|number||24|
|thickness|number||2|
|ends|string: 'butt', 'round', or 'square'||round|
|joins|string: 'bevel', 'round' or 'arcs'||round|
|color|string||currentColor|

## License
<a name="license"></a>

[MIT](/LICENSE) © [Daminort](https://github.com/daminort)
