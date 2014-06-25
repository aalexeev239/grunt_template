module.exports = function(grunt) {

  // 1. Вся настройка находится здесь
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
    options: {
      // define a string to put between each file in the concatenated output
      separator: ';'
    },
    dist: {
      src: [
        'js/lib/jquery-1.11.1.min.js',//jquery
        'js/lib/bootstrap.min.js',//bootstrap
        'js/lib/json2.js',
        'js/lib/underscore-min.js',
        'js/lib/moment-2.5.1.js',
        'js/lib/jquery.mousewheel-3.0.6.pack.js',
        'js/lib/clndr.min.js', // календарь
        'js/lib/jquery.iosslider.min.js',//iosslider
        'js/lib/jquery.bxslider.min.js',//bx slider
        //'js/lib/jquery.easing-1.3.js',
        'js/lib/jquery.fancybox.pack.js',
        'js/lib/jquery.validate.min.js',
        'js/jquery_aalexeev.js'  // рабочий файл
      ],
      dest: 'js/build/<%= pkg.name %>.js'
    }
  },

  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'js/build/<%= pkg.name %>.js',
      dest: 'js/build/<%= pkg.name %>.min.js'
    }
  },

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
    src: ['js/jquery_aalexeev.js']
  },

  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'img/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'img/'
      }]
    }
  }, 

  less: {
    dist: {
      options: {
        // cleancss:"true"
      },

      src: 'less/style.less',
      dest: 'css/style.css'
    }
  },

  autoprefixer: {
    single_file: {
      options: {
        // Target-specific options go here.
      },
      src: 'css/style.css'
    },
  },

  cssmin: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    dist: {
      src: 'css/style.css',
      dest: 'css/style.min.css'
    }
  },

  watch: {

    scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },

    less: {
      files: ['less/**/*.less'],
      tasks: ['less', 'autoprefixer', 'cssmin'],
      options: {
          spawn: false,
          livereload: true
      }
    },

    livereload: {
      options: { livereload: true },
      files: ['**/*.html','css/**/*.css','js/**/*.js']
    }
  }

  });

  // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
  require('load-grunt-tasks')(grunt);

  // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
  grunt.registerTask('default', ['concat','uglify','imagemin','less','autoprefixer','cssmin']);
  grunt.registerTask('js', ['concat','uglify','less']);
  grunt.registerTask('css', ['less','autoprefixer','cssmin']);

};