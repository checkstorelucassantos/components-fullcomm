# components-fullcomm

> Default components for FullComm APPs

[![NPM](https://img.shields.io/npm/v/components-fullcomm.svg)](https://www.npmjs.com/package/components-fullcomm) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install component and its dev dependencies

```bash
npm install --save components-fullcomm
npm i @mui/x-date-pickers @mui/icons-material @mui/material dayjs mui-tel-input
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
        {value={0} label="option 1" img={link/to/image} (optional)}
      ]}
     />
  }
}
```

## Modifying and testing this package

cd ~/projects/components-fullcomm   # go into the package directory<br>
npm link                    # creates global link<br>
cd ~/projects/your-app   # go into some other package directory.<br>
npm link components-fullcomm              # link-install the package<br>

more info at: https://docs.npmjs.com/cli/v10/commands/npm-link

## License

MIT © [checkstorelucassantos](https://github.com/checkstorelucassantos)
