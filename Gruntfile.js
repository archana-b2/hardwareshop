/*jslint node: true */
"use strict";
module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
      
    uglify: {
      build: {
        files: {
          'dist/main.js': ['dist/main.js']
        },
        options: {
          mangle: false
        },
		 build1: {
        files: {
          'dist/vendor.js': ['dist/vendor.js']
        },
        options: {
          mangle: false
        }
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
      build: {
        src: [ 'src/app/js/module/itemListModule.js', 'src/app/js/controller/itemListController.js' ],
        dest: 'dist/main.js'
      },
	   build1: {
        src: [ , 'src/lib/jquery.js','src/lib/bootstrap/**/*.js', 'src/lib/angular.js' ],
        dest: 'dist/vendor.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('dev', [ 'concat:build','uglify:build','concat:build1','uglify:build1' ]);
  grunt.registerTask('test', [ 'bower', 'jshint', 'karma:continuous' ]);
  grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
  grunt.registerTask('package', [ 'bower', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist',
    'clean:temp', 'compress:dist' ]);
};