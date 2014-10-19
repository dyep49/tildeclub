require.config({
  paths: {
    app: 'angular/app',
    angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min',
    'angular-resource': '//cdnjs.cloudflare.com/ajax/libs/angular/1.2.20/angular-resource.min',
    'angular-route': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-route.min',
    angularAMD: '//cdn.jsdelivr.net/angular.amd/0.2.1/angularAMD.min',
    HomeController: 'angular/controllers/home',
    scribe: "../bower_components/scribe/scribe",
    "scribe-plugin-blockquote-command": "../bower_components/scribe-plugin-blockquote-command/scribe-plugin-blockquote-command",
    "scribe-plugin-curly-quotes": "../bower_components/scribe-plugin-curly-quotes/scribe-plugin-curly-quotes",
    "scribe-plugin-formatter-plain-text-convert-new-lines-to-html": "../bower_components/scribe-plugin-formatter-plain-text-convert-new-lines-to-html/scribe-plugin-formatter-plain-text-convert-new-lines-to-html",
    "scribe-plugin-heading-command": "../bower_components/scribe-plugin-heading-command/scribe-plugin-heading-command",
    "scribe-plugin-intelligent-unlink-command": "../bower_components/scribe-plugin-intelligent-unlink-command/scribe-plugin-intelligent-unlink-command",
    "scribe-plugin-keyboard-shortcuts": "../bower_components/scribe-plugin-keyboard-shortcuts/scribe-plugin-keyboard-shortcuts",
    "scribe-plugin-link-prompt-command": "../bower_components/scribe-plugin-link-prompt-command/scribe-plugin-link-prompt-command",
    "scribe-plugin-sanitizer": "../bower_components/scribe-plugin-sanitizer/scribe-plugin-sanitizer",
    "scribe-plugin-smart-lists": "../bower_components/scribe-plugin-smart-lists/scribe-plugin-smart-lists",
    "scribe-plugin-toolbar": "../bower_components/scribe-plugin-toolbar/scribe-plugin-toolbar",
    scribeInput: "angular/directives/scribe-input",
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
    toTrusted: "angular/filters/toTrusted",
    BirthdayController: 'angular/controllers/birthday'
  },
  shim: {
    angularAMD: [
      'angular'
    ],
    'angular-route': [
      'angular'
    ]
  },
  deps: [
    'app'
  ]
});