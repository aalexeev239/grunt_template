// популярные команды
// для сокращений проставь алиас grunt --> g
// grunt build (g b) - собрать проект в public/ и загрузить на гугл диск
// grunt watch (g w)
// grunt clean:empty - первоначальная чистка
// grunt imageoptim - для png
// grunt imagemin - для jpg
// grunt sprite - собрать иконки в спрайт

module.exports = function(grunt) {

  // Тут мы указываем Grunt, что нужно подгрузить задания
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // 1. Вся настройка находится здесь
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //конфиги папок
    config: {
      src: 'src',
      dist: 'public',
      gdrive: '../../Google Диск/Red-Album/www/'
    },

    //конкатенация файлов
    //jquery находится в папке lib, но не подключается
    concat: {
      // options: {
      //   separator: ';'
      // },
      dist: {
        src: [
          'src/js/lib/bootstrap.min.js',
          'src/js/lib/retina.js',
          'src/js/lib/jquery.validate.min.js',
          'src/js/lib/owl.carousel.min.js',
          'src/js/lib/jquery.mmenu.min.all.js',
          '<%= config.src %>/js/main.js'
          ],    
        dest: '<%= config.src %>/js/build/scripts.js'
      }
    },

    //минификация
    uglify: {
      options: {
        //добавляем дату компиляции
        banner: '/*\nAuthor: <%= pkg.author.name %> \nEmail: <%= pkg.author.email %> \n<%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= config.src %>/js/build/scripts.js',
        dest: '<%= config.src %>/js/build/scripts.min.js'
      }
    },

    //боль и страдания
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      src: ['<%= config.src %>/js/main.js']
    },

    //сжатие изображений
    imagemin: {
      stuff: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/files/',
          // src: ['**/*.{png,jpg,gif}'],
          src: ['**/*.{jpg,gif}'],
          dest: '<%= config.src %>/files/'
        }]
      },

      images: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img/',
          // src: ['**/*.{png,jpg,gif}'],
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
        src: ['<%= config.src %>/img/**/*.png', '<%= config.src %>/files/**/*.png']
      }
      //},
      // платно
      // allJpgs: {
      //   options: {
      //     imageAlpha: false,
      //     jpegMini: true
      //   },
      //   src: ['<%= config.src %>/img/**/*.jpg', '<%= config.src %>/files/**/*.jpg']
      // }
    },

    //компилятор лесс
    less: {
      dist: {
        options: {
          // cleancss:"true"
        },

        src: '<%= config.src %>/less/style.less',
        dest: '<%= config.src %>/css/style.css'
      }
    },

    //префиксы
    autoprefixer: {
      single_file: {
        options: {
          // Target-specific options go here.
          browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
        },
        src: '<%= config.src %>/css/style.css'
      },
    },

    //css
    cssmin: {
      options: {
        banner: '/*\nAuthor: <%= pkg.author.name %> \nEmail: <%= pkg.author.email %> \n<%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: '<%= config.src %>/css/style.css',
        dest: '<%= config.src %>/css/style.min.css'
      }
    },

    //отслеживание
    watch: {

      //скрипты минифицировать и подключать
      scripts: {
          files: ['<%= config.src %>/js/**/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
              spawn: false,
          },
      },

      //лесс компилировать, префиксовать и подключать
      less: {
        files: ['<%= config.src %>/less/**/*.less'],
        tasks: ['notify:less','less', 'autoprefixer', 'cssmin'],
        // tasks: ['less', 'autoprefixer', 'cssmin'],
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

    //копирование в папку public
    copy: {
      js: {
        files: [
          { expand: true, 
            cwd: '<%= config.src %>/js/build/', 
            src: 'scripts.min.js', 
            dest: '<%= config.dist %>/js/build/'
          },
    //jQuery!
          {
            src: '<%= config.src %>/js/lib/jquery-1.11.1.min.js',
            dest: '<%= config.dist %>/js/lib/jquery-1.11.1.min.js'
          }
        ],
      },
      css: {
        expand: true,
        cwd: '<%= config.src %>/css',
        src: ['*.css','!style*', 'style.min.css'],
        dest: '<%= config.dist %>/css'
      },
      fonts: {
        expand: true,
        cwd: '<%= config.src %>/fonts',
        src: '*.{eot,svg,ttf,woff}',
        dest: '<%= config.dist %>/fonts/'
      },
      stuff: {
        expand: true,
        cwd: '<%= config.src %>',
        //файлы, начинающиеся с !, копии не подлежат
        src: ['!!**/*','!**/!*','*.{html,png,ico,txt,php}', 'files/**/*','fonts/**/*','img/**/*'],
        dest: '<%= config.dist %>'
      },
      gdrive: {
        expand: true,
        cwd: '<%= config.dist %>',
        src: ['**/*'],
        dest: '<%= config.gdrive %>'
      }
    },

    notify: {
      less: {
        options: {
          title: 'Готово!',  // optional
          message: 'LESS файл скомпилирован', //required
        }
      }
    },

    // чистка файлов
    // фикс от гита
    clean: {
      empty: ['**/_EMPTY.txt'],
      // release: ['<%= config.dist %>/**/*']
      release: ['<%= config.dist %>', '<%= config.gdrive %>']
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/!svg/svg-src',
          src: ['*.svg'],
          dest: '<%= config.src %>/!svg/svg-min'
        }]
      }
    },
    
    grunticon: {
      mysvg: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/!svg/svg-min',
          src: ['*.svg', '*.png'],
          dest: '<%= config.src %>/!svg/svgicon'
        }],
        options: {
          datasvgcss: 'css/icons.data.svg.css',
          datapngcss: 'css/icons.data.png.css',
          urlpngcss: 'css/icons.fallback.css',
          pngfolder: 'png-grunticon',
          pngpath: '../img/png-grunticon',
          defaultWidth: '100',
          defaultHeight: '100'
        }
      }
    },

    sprite: {
    'all': {

      // Пропиши тут пути
      // Location to output spritesheet
      'src': ['<%= config.src %>/img/sprite/icons/*.png'],
      'destImg': '<%= config.src %>/img/sprite/sprite_icons.png',
      'destCSS': 'src/less/sprite_icons.less',
      'imgPath': '../img/sprite/sprite_icons.png',
      'cssTemplate': '<%= config.src %>/img/sprite/!sprite.less.mustache',

      // OPTIONAL: Specify algorithm (top-down, left-right, diagonal [\ format],
          // alt-diagonal [/ format], binary-tree [best packing])
      // Visual representations can be found below
      'algorithm': 'binary-tree',

      // OPTIONAL: Specify padding between images
      'padding': 10,

      // OPTIONAL: Specify engine (auto, phantomjs, canvas, gm, pngsmith)
      'engine': 'pngsmith',

      // OPTIONAL: Specify CSS format (inferred from destCSS' extension by default)
          // (stylus, scss, scss_maps, sass, less, json, json_array, css)
      'cssFormat': 'less',

      // OPTIONAL: Specify settings for algorithm
      'algorithmOpts': {
        // Skip sorting of images for algorithm (useful for sprite animations)
        'sort': false
      }
    }
  }
  });

  // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
  grunt.registerTask('default', ['concat','uglify','imagemin','imageoptim','less','autoprefixer','cssmin']);
  grunt.registerTask('js', ['concat','uglify']);
  grunt.registerTask('css', ['less','autoprefixer','cssmin']);
  grunt.registerTask('pain', ['jshint']);
  grunt.registerTask('build', ['concat','uglify','imagemin','imageoptim','less','autoprefixer','cssmin','copy']);
  grunt.registerTask('b', ['concat','uglify','less','autoprefixer','cssmin','copy']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('svg', ['svgmin']);
  grunt.registerTask('svgicon', ['grunticon:mysvg']);
};