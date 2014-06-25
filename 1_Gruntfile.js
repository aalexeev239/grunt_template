'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    copy: {
      js: {
        files: [
          {expand: true, cwd: '<%= config.src %>/js/ie', src: '*.js', dest: '<%= config.dist %>/assets/js/ie'},
          {expand: true, cwd: '<%= config.src %>/js/', src: 'main.js', dest: '<%= config.dist %>/assets/js/'}
        ]
      },
      css: {
        expand: true,
        cwd: '<%= config.src %>/styles/vendor',
        src: '*.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      fonts: {
        expand: true,
        cwd: '<%= config.src %>/fonts',
        src: '*.{eot,svg,ttf,woff}',
        dest: '<%= config.dist %>/assets/fonts/'
      },
      /*favicon: {
        expand: true,
        cwd: '<%= config.src %>/',
        src: 'favicon.{ico,png}',
        dest: '<%= config.dist %>/'
      },*/
      stuff: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/files',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.dist %>/assets/files'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.dist %>/assets/img'
        }]
      }
    },

    imagemin: {
      stuff: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/files',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.dist %>/assets/files'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.dist %>/assets/img'
        }]
      }
    },

    // svgmin: {
    //   options: {
    //     plugins: [
    //       { removeViewBox: false },
    //       { removeUselessStrokeAndFill: false }
    //     ]
    //   },
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.src %>/images',
    //       src: ['**/*.svg'],
    //       dest: '<%= config.dist %>/assets/images',
    //       ext: '.svg'
    //     }]
    //   }
    // },

    concat: {
      js: {
        src: [
          '<%= config.src %>/js/plugins/*.js'
        ],
        dest: '<%= config.dist %>/assets/js/vendor/plugins.js'
      }
    },

    uglify: {
      js: {
        src: [
          '<%= config.dist %>/assets/js/vendor/plugins.js'
        ],
        dest: '<%= config.dist %>/assets/js/vendor/plugins.min.js'
      }
    },

    stylus: {
      compile: {
        options: {
          compress: false,
          paths: ['<%= config.src %>/styles'],
          urlfunc: 'url64', // use url64('test.png') in our code to trigger Data URI embedding
          'include css': true
        },
        files: {
          //'<%= config.dist %>/assets/css/ie/ie-lt-8.css': '<%= config.src %>/styles/ie/ie-lt-8.styl', // 1:1 compile
          //'<%= config.dist %>/assets/css/ie/ie-lt-9.css': '<%= config.src %>/styles/ie/ie-lt-9.styl', // 1:1 compile
          '<%= config.dist %>/assets/css/ie/ie-lt-10.css': '<%= config.src %>/styles/ie/ie-lt-10.styl', // 1:1 compile
          '<%= config.dist %>/assets/css/style.css': ['<%= config.src %>/styles/*.styl']
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
      },
      files: {
        expand: true,
        flatten: true,
        src: '<%= config.dist %>/assets/css/*.css',
        dest: '<%= config.dist %>/assets/css/'
      }
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble'],
        options: {
          spawn: false
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/css/{,*/}*.css',
          '<%= config.dist %>/assets/js/{,*/}*.js',
          '<%= config.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      stylus: {
        files: '<%= config.src %>/styles/{,*/}*.styl',
        tasks: ['stylus', 'autoprefixer'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: '<%= config.src %>/js/{,*/}*.js',
        tasks: ['concat:js', 'uglify:js', 'copy:js'],
        options: {
          spawn: false
        }
      },
      //imagemin: {
        //files: [
        //  '<%= config.src %>/files/{,*//*}*.{png,jpg,jpeg,gif,webp}',
        //  '<%= config.src %>/img/{,*//*}*.{png,jpg,jpeg,gif,webp}'
        //],
       // tasks: ['imagemin']
     // },
      //svgmin: {
        //files: ['<%= config.src %>/img/{,*/}*.{svg}'],
        //tasks: ['svgmin']
      //}

    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        layout: '<%= config.src %>/templates/layouts/default.hbs',
        partials: '<%= config.src %>/templates/partials/*.hbs',
      },
      pages: {
        options: {
          layout: '<%= config.src %>/templates/layouts/default.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'copy',
    //'imagemin',
    //'svgmin',
    'stylus',
    'autoprefixer',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
