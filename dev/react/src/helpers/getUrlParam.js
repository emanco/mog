export default function getUrlParam(urlString, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(urlString);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};