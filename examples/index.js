const { getAvailability } = require('../dist/')

getAvailability({ devices: ['MWHM2ZD/A', 'MWHR2ZD/A'], location: '10115' }).then(console.log)
