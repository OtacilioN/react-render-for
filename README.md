# react-render-for

> For loop available in React JSX

[![NPM](https://img.shields.io/npm/v/react-render-for.svg)](https://www.npmjs.com/package/react-render-for) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-render-for
```

## Usage

```jsx
import React from 'react'
import RFor from 'react-render-for'

const data = ['Elemento 1', 'Elemento 2', 'Elemento 3'] // ...

const Box = ({ item }) => (
  <div className='BoxStyle'>
    <h6>{item}</h6>
  </div>
)

const App = () => {
  return (
    <div className='AppWrapper'>
      <RFor data={data} renderItem={(item) => <Box item={item} />} />
    </div>
  )
}

export default App
```

## License

MIT © [OtacilioN](https://github.com/OtacilioN)
