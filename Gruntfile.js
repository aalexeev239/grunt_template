module.exports = function(grunt) {


  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    config: {
      src: 'src',
      dist: 'public'
    },


    // ===========
    // STYLES TASK
    // ===========

    stylus: {
      style: {
        options: {
          compress: false,
          paths: ['<%= config.src %>/styl'],
          urlfunc: 'url64',
          'include css': true
        },
        files: {
          '<%= config.src %>/css/style.css': ['<%= config.src %>/styl/*.styl'],
        }
      }
    },



    autoprefixer: {
      style: {
        options: {
          browsers: ['last 2 versions', 'ie 9']
        },
        src: '<%= config.src %>/css/style.css'
      },
    },




    cmq: {
      style: {
        files: {
          '<%= config.src %>/css/style.css': ['<%= config.src %>/css/style.css']
        }
      }
    },



    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          '<%= config.src %>/css/style.min.css': ['<%= config.src %>/css/style.css']
        }
      }
    },

    // END STYLES TASK




    // ============
    // SCRIPTS TASK
    // ============

    concat: {
      app: {
        src: [
          '<%= config.src %>/js/app/*.js',
          '<%= config.src %>/js/main.js'
        ],
        dest: '<%= config.src %>/js/build/script.js'
      },
      plugins: {
        src: '<%= config.src %>/js/plugins/*.js',
        dest: '<%= config.src %>/js/build/plugins.js'
      }
    },


    uglify: {
      app: {
        src: '<%= config.src %>/js/build/script.js',
        dest: '<%= config.src %>/js/build/script.min.js'
      },
      plugins: {
        src: '<%= config.src %>/js/build/plugins.js',
        dest: '<%= config.src %>/js/build/plugins.min.js'
      }
    },


    // END SCRIPTS TASK





    // ===========
    // IMG TASK
    // ===========

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img/',
          src: ['**/*.{jpg,gif}'],
          dest: '<%= config.src %>/img/'
        }]
      }
    },

    imageoptim: {
      options: {
        quitAfter: true
      },
      allPngs: {
        options: {
          imageAlpha: true,
          jpegMini: false
        },
        src: ['<%= config.src %>/img/**/*.png']
      }
    },

    // END IMG TASK



    // ===========
    // SVG TASK
    // ===========

    svgmin: {
      options: {
        plugins: [
          {
            removeDesc: true
          }
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/_svg',
          src: ['!!ai','*.svg'],
          dest: '<%= config.src %>/_svg/svgmin'
        }]
      }
    },


    grunticon: {
      mysvg: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/_svg',
          src: ['svgmin/*.svg', '*.png'],
          dest: '<%= config.src %>'
        }],
        options: {
          enhanceSVG: true,
          datasvgcss   : 'css/grunticon-icons.data.svg.css',
          datapngcss   : 'css/grunticon-icons.data.png.css',
          urlpngcss    : 'css/grunticon-icons.fallback.css',
          previewhtml  : '_grunticon-preview.html',
          pngfolder    : 'img/svg/png-grunticon',
          pngpath      : '../img/svg/png-grunticon',
          template     : '<%= config.src %>/_svg/_template.hbs',
          defaultWidth : '20px',
          defaultHeight: '20px'
        }
      }
    },



    // END SVG TASK


    // =====
    // CLEAN
    // =====


    clean: {
      dist: '<%= config.dist %>',
      svg: [
        '<%= config.src %>/_svg/svgmin',
        '<%= config.src %>/img/svg/png-grunticon',
        '<%= config.src %>/css/grunticon*'
      ]
    },


    // END CLEAN



    // ==============
    // COPY & REPLACE
    // ==============


    copy: {
      stuff: {
        expand: true,
        cwd: '<%= config.src %>',
        // src: ['**','!less/*'],
        src: [
          '**',
          '!**/styl/**', // no styl
          '!**/_*/**', // ignore '_name' folders
          '!**/js/**', // ignore all js
          'js/build/*'
          ],
        dest: '<%= config.dist %>'
      }
    },


    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /<script src=\"js\/build\/plugins.js/g,
              replacement: '<script src="js/build/plugins.min.js'
            },
            {
              match: /<script src=\"js\/build\/script.js/g,
              replacement: '<script src="js/build/script.min.js'
            }
          ]
        },
        files: [
          {
            expand: true,
            src: ['<%= config.dist %>/*.html']
          }
        ]
      }
    },


    // END COPY & REPLACE


    // ===
    // FTP
    // ===

    // END FTP

    'ftp-deploy': {
      make: {
        auth: {
          host: '77.222.40.32',
          port: 21,
          authKey: 'aalexeev'
        },
        src: '<%= config.dist %>',
        dest: '<%= pkg.name %>',
        forceVerbose: true,
        exclusions: [
          '<%= config.dist %>/**/.DS_Store',
          '<%= config.dist %>/**/Thumbs.db'
        ]
      },
      light: {
        auth: {
          host: '77.222.40.32',
          port: 21,
          authKey: 'aalexeev'
        },
        src: '<%= config.dist %>',
        dest: '<%= pkg.name %>',
        forceVerbose: true,
        exclusions: [
          '<%= config.dist %>/**/.DS_Store',
          '<%= config.dist %>/**/Thumbs.db',
          'bower_components',
          'img',
          'fonts'
        ]
      }
    },


    // =====
    // WATCH
    // =====

    watch: {

      scripts: {
        files: ['<%= config.src %>/js/**/*.js'],
        tasks: ['scripts'],
        options: {
          spawn: false,
          livereload: true
        },
      },


      stylus: {
        files: ['<%= config.src %>/styl/**/*.styl'],
        tasks: ['styles'],
        options: {
          spawn: false,
          livereload: true
        }
      },


      livereload: {
        options: { livereload: true },
        files: ['<%= config.src %>/**/*.html','<%= config.src %>/css/**/*.css','<%= config.src %>/js/**/*.js']
      }
    },


    // END WATCH





    notify: {
      stylus: {
        options: {
          title: 'Готово!',
          message: 'STYLUS героически скомпилирован'
        }
      },
      uglify: {
        options: {
          title: 'Готово!',
          message: 'JS собран! Превосходная работа!'
        }
      },
      images: {
        options: {
          title: 'Готово!',
          message: 'Изображения обработаны!'
        }
      },
      svg: {
        options: {
          title: 'Готово!',
          message: 'svg спрайт сформирован!'
        }
      },
    }

  });






  // Tasks
  grunt.registerTask('styles', [
    'stylus',
    'autoprefixer',
    'cmq',
    'cssmin',
    'notify:stylus'
  ]);


  grunt.registerTask('scripts', [
    'concat',
    'uglify',
    'notify:uglify'
  ]);


  grunt.registerTask('img', [
    'imagemin',
    'imageoptim',
    'notify:images'
  ]);


  grunt.registerTask('svg', [
    'clean:svg',
    'svgmin',
    'grunticon',
    'notify:svg'
  ]);


  grunt.registerTask('cc', [
    'clean:dist',
    'copy',
    'replace'
  ]);


  grunt.registerTask('w', [
    'watch'
  ]);


  grunt.registerTask('b', [
    'styles',
    'scripts',
    'cc',
    'ftp-deploy:light'
  ]);


  grunt.registerTask('make', [
    'styles',
    'scripts',
    'svg',
    'img',
    'cc',
    'ftp-deploy:make'
  ]);
};