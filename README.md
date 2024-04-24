# components-fullcomm

> Default components for FullComm APPs

[![NPM](https://img.shields.io/npm/v/components-fullcomm.svg)](https://www.npmjs.com/package/components-fullcomm) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install component and it's dev dependencies

```bash
npm install --save components-fullcomm
npm i @mui/x-date-pickers @mui/icons-material @mui/material dayjs
```

## Usage

```jsx
import React, { Component } from 'react'
import { FCSelect } from 'components-fullcomm';

class Example extends Component {
  render() {
    return <FCSelect
      label="My Label"
      onChange={handleChange}
      options={[
      value={0} label="option 1" img={link/to/image} (optional)
     />
  }
}
```

## License

MIT © [checkstorelucassantos](https://github.com/checkstorelucassantos)
