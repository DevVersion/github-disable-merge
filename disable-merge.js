(function() {

  function addStyleString(str) {
      var node = document.createElement('style');
      node.innerHTML = str;
      document.body.appendChild(node);
  }

  addStyleString(
    '.js-merge-branch-action {' +
      'pointer-events: none;' +
      'background: #FF4747;' +
      'background-image: none;' +
      'border-color: white;' +
    '}'
  );

})();