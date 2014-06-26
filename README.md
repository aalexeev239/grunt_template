grunt_template
==============

# Устанавливаем GRUNT

1. Запустите терминал и перейдите в нужную директорию `cd projectname`.
2. Убедитесь в наличии стартового файла `package.json`.
3. Запустите команду `npm install`.
4. Установите командную строку `npm install -g grunt-cli`.
5. Очередь `Gruntfile.js` 'появиться' на сцене!
6. Устанавливаем и конфигурируем плагины 

#Плагины

###Load tasks
Не паримся с подгрузкой заданий в `Gruntfile.js`. [Ссыль](https://www.npmjs.org/package/load-grunt-tasks)

```
npm install load-grunt-tasks --save-dev
```

###Concat
Cобирает все файлы в один. [Ссыль](https://www.npmjs.org/package/grunt-contrib-concat)

```
npm install grunt-contrib-concat --save-dev
```

###Uglify
Сжать js. [Ссыль](https://www.npmjs.org/package/grunt-contrib-uglify)

```
npm install grunt-contrib-uglify --save-dev
```

###JShint
Заставляет вас плакать, глядя на код. [Ссыль](https://www.npmjs.org/package/grunt-contrib-jshint)

```
npm install grunt-contrib-jshint --save-dev
```

###Imagemin
Ужимает картинки. [Ссыль](https://www.npmjs.org/package/grunt-contrib-imagemin)

```
npm install grunt-contrib-imagemin --save-dev
```

###Watch
Наблюдает за изменениями в лайв-режиме. [Ссыль](https://www.npmjs.org/package/grunt-contrib-watch)

```
npm install grunt-contrib-watch --save-dev
```

###Less
Компилирует `less` файлы. [Ссыль](https://www.npmjs.org/package/grunt-contrib-less)

```
npm install grunt-contrib-less --save-dev
```

###Autoprefixer
Префиксы на `css`.
Иногда обновляй базу префиксов `npm update caniuse-db`. [Ссыль](https://www.npmjs.org/package/grunt-autoprefixer)

```
npm install grunt-autoprefixer --save-dev
```

###CSS-min
Минификация. `css` [Ссыль](https://www.npmjs.org/package/grunt-contrib-cssmin)

```
npm install grunt-contrib-cssmin --save-dev
```

###Заголовок
Описание. [Ссыль]()

```
plugin
```
