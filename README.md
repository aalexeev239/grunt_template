grunt_template
==============

# How to set up Grunt

1. Запустите терминал и перейдите в нужную директорию `cd projectname`.
2. Убедитесь в наличии стартового файла `package.json`.
3. Запустите команду `npm install`.
4. Установите командную строку `npm install -g grunt-cli`.
5. Очередь `Gruntfile.js` 'появиться' на сцене!
6. Устанавливаем и конфигурируем плагины 

#Плагины

###Load tasks
Не паримся с подгрузкой заданий

```npm install --save-dev load-grunt-tasks```

###Concat
собирает все файлы в один

```npm install grunt-contrib-concat --save-dev```

###Uglify
Сжать js

```npm install grunt-contrib-uglify --save-dev```

###JShint
Заставляет вас плакать, глядя на код

```npm install grunt-contrib-jshint --save-dev```

###Imagemin
Ужимает картинки

```npm install grunt-contrib-imagemin --save-dev```

###Watch
Наблюдает за изменениями в лайв-режиме

```npm install grunt-contrib-watch --save-dev```

###Less
Компилирует `less` файлы

```npm install grunt-contrib-less --save-dev```

###Autoprefixer
Префиксы на `css`.
Иногда обновляй базу префиксов `npm update caniuse-db`

```npm install grunt-autoprefixer --save-dev```

###CSS-min
Минификация `css`

```npm install grunt-contrib-cssmin --save-dev```

###Заголовок
Описание

```plugin```
