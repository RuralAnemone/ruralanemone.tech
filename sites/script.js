function m3 () {

  var tab = window.open('about:blank', '_blank');

  tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="https://' + window.location.hostname + '/mother3" frameborder="0"></iframe></body></html>';

  tab.document.close();

}