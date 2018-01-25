/* Endpoints to the live API */
export const baseURL = 'http://mbfoa.dev2.glassesdirecttesting.co.uk/api/v1';
export const authTokenEndpoint = baseURL + '/auth/token';
export const fraudCheckOrders = baseURL + '/fraud-check-orders';
export const postOrderNoteEndpoint = baseURL + '/order-notes';
export const orderStatusUpdateEndpoint = baseURL + '/order-status-updates';
export const customersEndpoint = baseURL + '/customers';
export const homeTrialEndpoint = baseURL + '/hometrial-orders';
export const homeTrialPatchEndpoint = baseURL + '/hometrials'; // this isn't right

export const addressLookupEndpoint = 'https://api.getaddress.io/find/'
export const addressAPIKey = 'ol_y-u8i6EKIwsZ399UaoA11978'

export const createCustomerEndpoint = baseURL + '/customers'