export function clientNameMapping(clientCode) {
  switch(clientCode)
    {
      case 'gd' :
        return 'Glasses Direct';
      default :
        return ''
    }
}

export function fraudCheckStatus(statusVal = '') {
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
  if(testVal.indexOf('CONTACTED') > -1) {
    return 'contacted'
  }
  if(testVal.indexOf('NOT CHECKED') > -1) {
    return 'pending'
  }
}

export function homeTrialStatus(statusVal = '') {
  const testVal = statusVal.toUpperCase();
  if (testVal.indexOf('HT COMPLETE') > -1) {
    return 'complete'
  }
  else if (testVal.indexOf('FULFILLED') > -1) {
    return 'fulfilled'
  }
  else if (testVal.indexOf('HT RECEIVED IN WAREHOUSE') > -1) {
    return 'warehouse'
  }
  else if(testVal.indexOf('HT CUSTOMER CONTACTED') > -1) {
    return 'contacted'
  }
  else {
    return ''
  }
}

export function currency(currencyCode) {
  switch(currencyCode) {
    case 'GBP' :
      return '£';
    default:
      return '£';
  }
}

export function getStatusClass(statusVal = '') {
  const testVal = statusVal.toUpperCase();
  switch(testVal)
    {
      case 'COMPLETE' :
        return 'status-complete';
      case 'PAYMENT RECEIVED' :
        return 'status-paid';
      case 'DISPATCHED' :
        return 'status-dispatched';
      case 'IN LAB' :
        return 'status-lab';
      default :
        return ''
    }
}