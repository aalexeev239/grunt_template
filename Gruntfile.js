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
      dist: 'public'
    },

    //конкатенация файлов
    //jquery находится в папке lib, но не подключается
    concat: {
      // options: {
      //   separator: ';'
      // },
      dist: {
        src: ['<%= config.src %>/js/lib/*.js', '!<%= config.src %>/js/lib/jquery-1.11.1.min.js', '<%= config.src %>/js/main.js'],    
        dest: '<%= config.src %>/js/build/scripts.js'
      }
    },

    //минификация
    uglify: {
      options: {
        //добавляем дату компиляции
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.src %>/files/'
        }]
      },

      images: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.src %>/img/'
        }]
      }
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
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
        tasks: ['less', 'autoprefixer', 'cssmin'],
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
        src: ['*.{html,png,ico}', 'files/**/*','fonts/**/*','img/**/*'],
        dest: '<%= config.dist %>'
      },
    },

    // чистка файлов
    // фикс от гита
    clean: {
      empty: ['**/_EMPTY.txt']
    }
  });

  // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
  grunt.registerTask('default', ['concat','uglify','imagemin','less','autoprefixer','cssmin']);
  grunt.registerTask('js', ['concat','uglify']);
  grunt.registerTask('css', ['less','autoprefixer','cssmin']);
  grunt.registerTask('pain', ['jshint']);
  grunt.registerTask('build', ['concat','uglify','imagemin','less','autoprefixer','cssmin','copy']);
};