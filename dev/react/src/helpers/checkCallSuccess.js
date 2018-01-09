export default function checkCallSuccess (resStatus, successCallback, failCallback) {
  //if status of response is a failure we assume their not logged in. We could go further and check for status codes but it's unlikely it would be anything else with this app.
  if (resStatus.indexOf('FAIL') > -1) {
    // JWT Token is likely invalid. Redirect ot login
    failCallback()
  } else {
    successCallback()
  }
}