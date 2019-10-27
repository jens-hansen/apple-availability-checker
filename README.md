# Apple Availability Checker

Library to check for availability of Apple devices in Apple stores.

## Usage

```bash
npm install apple-availability-checker
```

or 

```bash
yarn add apple-availability-checker
```

```javascript
import { getAvailability } from 'apple-availability-checker'

getAvailability({ devices: ['MWHM2ZD/A', 'MWHR2ZD/A'], location: '10115' }).then(console.log)
```

