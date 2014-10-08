'use strict';

define(['app', 'scribe', 'scribe-plugin-blockquote-command', 'scribe-plugin-curly-quotes', 'scribe-plugin-formatter-plain-text-convert-new-lines-to-html', 'scribe-plugin-heading-command', 'scribe-plugin-intelligent-unlink-command', 'scribe-plugin-keyboard-shortcuts', 'scribe-plugin-link-prompt-command', 'scribe-plugin-sanitizer', 'scribe-plugin-smart-lists', 'scribe-plugin-toolbar', 'jquery'], function(app, Scribe, scribePluginBlockquoteCommand,scribePluginCurlyQuotes,scribePluginFormatterPlainTextConvertNewLinesToHtml,scribePluginHeadingCommand,scribePluginIntelligentUnlinkCommand,scribePluginKeyboardShortcuts,scribePluginLinkPromptCommand,scribePluginSanitizer,scribePluginSmartLists,scribePluginToolbar, $) {

  app.directive('scribecms', function($http, $timeout, $filter) {
    /**
     * Keyboard shortcuts
     */

    var ctrlKey = function (event) { return event.metaKey || event.ctrlKey; };

    var commandsToKeyboardShortcutsMap = Object.freeze({
      bold: function (event) { return event.metaKey && event.keyCode === 66; }, // b
      italic: function (event) { return event.metaKey && event.keyCode === 73; }, // i
      strikeThrough: function (event) { return event.altKey && event.shiftKey && event.keyCode === 83; }, // s
      removeFormat: function (event) { return event.altKey && event.shiftKey && event.keyCode === 65; }, // a
      linkPrompt: function (event) { return event.metaKey && ! event.shiftKey && event.keyCode === 75; }, // k
      unlink: function (event) { return event.metaKey && event.shiftKey && event.keyCode === 75; }, // k,
      insertUnorderedList: function (event) { return event.altKey && event.shiftKey && event.keyCode === 66; }, // b
      insertOrderedList: function (event) { return event.altKey && event.shiftKey && event.keyCode === 78; }, // n
      blockquote: function (event) { return event.altKey && event.shiftKey && event.keyCode === 87; }, // w
      h2: function (event) { return ctrlKey(event) && event.keyCode === 50; } // 2
    });

    return {
      restrict: 'E',
      require: 'ngModel',
      templateUrl: 'js/angular/directives/templates/scribe.html',
      scope: {
        ngModel: '=?'
      },
      link: function(scope, element, attrs, ngModel) {
        
        var scribeEl = $(element).find('.scribe')[0];
        var scribe = new Scribe(scribeEl, { allowBlockElements: true });

        var scribeHtml = $(element).find('.scribe-html').first();

        scribe.on('content-changed', updateHTML);

        function updateHTML() { 
          var text = scribe.getHTML();
          setText(text);
        }

        function setText(text) {
          $timeout(function() {
            scope.$apply(function() {
              scope.ngModel.text = text;        
            });  
            scribeHtml.val(text);                         
          });
        }

          /**
           * Plugins
           */
          scribe.use(scribePluginBlockquoteCommand());
          scribe.use(scribePluginHeadingCommand(2));
          scribe.use(scribePluginIntelligentUnlinkCommand());
          scribe.use(scribePluginLinkPromptCommand());
          scribe.use(scribePluginToolbar(document.querySelector('.toolbar-editing')));
          scribe.use(scribePluginSmartLists());
          scribe.use(scribePluginCurlyQuotes());
          scribe.use(scribePluginKeyboardShortcuts(commandsToKeyboardShortcutsMap));

          // Formatters
          scribe.use(scribePluginSanitizer({
            tags: {
              p: {},
              br: {},
              b: {},
              strong: {},
              i: {},
              strike: {},
              blockquote: {},
              ol: {},
              ul: {},
              li: {},
              a: { href: true },
              h2: {}
            }
          }));
          scribe.use(scribePluginFormatterPlainTextConvertNewLinesToHtml());


          // scope.clearScribe = function() {
          //   scribe.setContent('<p><br></p>')
          // }



      }
    };
  });
});