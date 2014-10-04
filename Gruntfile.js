'use strict';

module.exports = function(grunt) {
  //Load grunt tasks automatically from package.json
  require('load-grunt-tasks')(grunt);

  //Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    // serve: {
    //   options: {
    //     port: 3000
    //   }
    // },
    connect: {
      uses_defaults: {}
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['**/*.js']
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
    }
  });

  grunt.registerTask('default', [
    'connect',
    'sass',
    'watch'
  ])




}