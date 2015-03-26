Package.describe({
  name: 'joelsweb:leaflet-boundary-canvas',
  version: '0.0.1',
  summary: 'Meteor package for leaflet-boundaries',
  git: 'https://github.com/joelsweb/meteor-leaflet-boundary-canvas.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/BoundaryCanvas.js'
  ], 'client');
});

