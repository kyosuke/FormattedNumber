/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
        ' Licensed <%= pkg.license %> */'
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:dist/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      min: {
        src: ['<banner:meta.banner>', '<file_strip_banner:dist/<%= pkg.name %>.min.js>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    coffee: {
      app: {
        src : 'src/<%= pkg.name %>.coffee',
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['src/**/*.coffee', 'test/**/*.js'],
      tasks: 'coffee qunit min'
    }
  });

  // Default task.
  grunt.registerTask('default', 'coffee qunit min concat');

};
