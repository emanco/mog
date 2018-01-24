import axios from 'axios'
import { customersEndpoint, addressLookupEndpoint, addressAPIKey } from '../../constants/endpoints'
import buildQueryUrl from '../../helpers/buildQueryUrl'
import addressLookup from '../../mock-data/address-lookup'

const initialState = {
    addressLookup: {
      addresses: []
    }
}

export default function createCustomerReducer(state = initialState, action = '') {
    switch (action.type)
    {
    case 'FETCH_ADDRESS_PENDING' :
      return {
        ...state,
        loading: true,
        success: false,
        payload: {}
      }
    case 'FETCH_ADDRESS_FULFILLED' :
      const addresses = modifyAddressData(action.payload.data.addresses)
      console.log(addresses)
      return {
        ...state,
        loading: false,
        success: true,
        addressLookup: addresses
      }
    case 'FETCH_ADDRESS_REJECTED' :
      return {
        ...state,
        loading: false,
        success: false,
        payload: {
            message: action.payload.message
        }
      }
    default:
        return state;
    }
}

const lookupAddress = (postcode) => {

  return (dispatch) => {
    dispatch({
      type: 'FETCH_ADDRESS',
      payload: axios.get(addressLookupEndpoint + postcode + '?api-key=' + addressAPIKey)
    })
  }
};

// modifyAddressData - this is called in the reducer before the nextState object is returned
const modifyAddressData = (addresses) => {
  console.log(addresses)
  const newAddresses = addresses.map((val, key) => {
    const addressArray = val.split(',');
    return {
      line1: addressArray[0],
      line2: addressArray[1],
      line3: addressArray[2],
      line4: addressArray[3],
      locality: addressArray[4],
      city: addressArray[5],
      county: addressArray[6],
      label: addressArray[0],
      value: key //passing the array key as the value so we can use it later, but this won't be posted to the server anyway so it doesn't matter.
    }
  })

  return newAddresses;

}

export { lookupAddress };