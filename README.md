# Apple Availability Checker

Library to check for availability of Apple devices in Apple stores.

## Usage

```javascript
import { getAvailability } from 'apple-availability-checker'

getAvailability({ devices: ['MWHM2ZD/A', 'MWHR2ZD/A'], location: '10115' }).then(console.log)
```

 ## Additional information

Current device identifiers (October 2019):

### iPhone 11 Pro
- grey, 64 GB: MWC22ZD/A
- grey, 256 GB: MWC72ZD/A
- grey, 512 GB: MWCD2ZD/A

- silver, 64 GB: MWC32ZD/A
- silver, 256 GB: MWC82ZD/A
- silver, 512 GB: MWCE2ZD/A

- midnight green, 64 GB: MWC62ZD/A
- midnight green, 256 GB: MWCC2ZD/A
- midnight green, 512 GB: MWCG2ZD/A

- gold, 64 GB: MWC52ZD/A
- gold, 256 GB: MWC92ZD/A
- gold, 512 GB: MWCF2ZD/A