export default function buildQueryUrl(url, queryParams) {
  if (!queryParams) {
    return url
  }

  // Converts object into a string
  const query = Object.keys(queryParams).map(function(key) {
    return key + '=' + queryParams[key];
  }).join('&');

  let requestUrl = url;

  console.log(query)

  if (query.length > 0) {
    requestUrl = requestUrl + '?' + query
  }

  return requestUrl
}