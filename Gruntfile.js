'use strict';

module.exports = function(grunt) {
  //Load grunt tasks automatically from package.json
  require('load-grunt-tasks')(grunt);

  //Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    connect: {
      uses_defaults: {}
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/*.js']
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['index.html, **/*.html']
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    bower: {
      all: {
        rjsConfig: 'js/main.js'
      }
    }
  });

  grunt.registerTask('default', [
    'connect',
    'sass',
    'watch'
  ])




}