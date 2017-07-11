/*jslint node: true */
"use strict";
module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
      
    uglify: {
      dist: {
        files: {
          'dist/main.js': ['dist/main.js']
        },
        options: {
          mangle: false
        }
      }
    },
    
    clean: {
      temp: {
        src: [ 'tmp' ]
      }
    },
    
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'src/app/js/module/itemListModule.js', 'src/app/js/controller/itemListController.js' ],
        dest: 'dist/main.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('dev', [ 'concat:dist','uglify:dist' ]);
  grunt.registerTask('test', [ 'bower', 'jshint', 'karma:continuous' ]);
  grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
  grunt.registerTask('package', [ 'bower', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist',
    'clean:temp', 'compress:dist' ]);
};