module.exports = function(grunt) {
grunt.initConfig({
pkg: grunt.file.readJSON('package.json')
concat: {
  options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['src/app/js/module/itemListModule.js'],['src/app/js/controller/itemListController.js'],
    // the location of the resulting JS file
    dest: 'dist/main.js'
  }
},
uglify: {
  options: {
    // the banner is inserted at the top of the output
    banner: '/*! main.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dist: {
    files: {
      'dist/main.min.js': ['<%= concat.dist.dest %>']
    }
  }
}

});
grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', []);

};