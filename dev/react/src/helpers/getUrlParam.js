export default function getUrlParam(urlString, key) {
    function parseParams() {
        var params = {},
            e,
            a = /\+/g,  // Regex for replacing addition symbol with a space
            r = /([^&=]+)=?([^&]*)/g,
            d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
            q = urlString;

        while (e = r.exec(q))
            params[d(e[1])] = d(e[2]);

        return params;
    }

    const queryStringParams = parseParams();

    return queryStringParams[key];
  };