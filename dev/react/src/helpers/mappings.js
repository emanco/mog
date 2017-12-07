export function clientNameMapping(clientCode) {
  switch(clientCode)
    {
      case 'gd' :
        return 'Glasses Direct';
      default :
        return ''
    }
}

export function fraudCheckStatus(statusVal) {
  const testVal = statusVal.toUpperCase();
  if (testVal.indexOf('PASSED') > -1) {
    return 'passed'
  }
  if (testVal.indexOf('MAYBE') > -1) {
    return 'maybe'
  }
  if (testVal.indexOf('FAILED') > -1) {
    return 'failed'
  }
}