grunt_template
==============

# Устанавливаем [GRUNT](http://gruntjs.com/)

1. Запустите терминал и перейдите в нужную директорию `cd projectname`.
2. Убедитесь в наличии файла `package.json` и актуальности указанной в нем информации.
3. Запустите команду `npm install` (возможно, под рутом).
4. Установите командную строку `npm install -g grunt-cli`.
5. А теперь очередь `Gruntfile.js` появиться на сцене! Настройте установленные плагины.
6. Шестого пункта нет. Все готово! 
Ниже приведены плагины, собранные в `package.json`.

#Плагины

###Load tasks
Не паримся с подгрузкой заданий в `Gruntfile.js`. [Линк](https://www.npmjs.org/package/load-grunt-tasks)

```
npm install load-grunt-tasks --save-dev
```

###Concat
Cобирает все файлы в один. [Линк](https://www.npmjs.org/package/grunt-contrib-concat)

```
npm install grunt-contrib-concat --save-dev
```

###Uglify
Сжать js. [Линк](https://www.npmjs.org/package/grunt-contrib-uglify)

```
npm install grunt-contrib-uglify --save-dev
```

###JShint
Заставляет вас плакать, глядя на код. [Линк](https://www.npmjs.org/package/grunt-contrib-jshint)

```
npm install grunt-contrib-jshint --save-dev
```

###Imagemin
Ужимает картинки. [Линк](https://www.npmjs.org/package/grunt-contrib-imagemin)

```
npm install grunt-contrib-imagemin --save-dev
```

###Watch
Наблюдает за изменениями в лайв-режиме. [Линк](https://www.npmjs.org/package/grunt-contrib-watch)

```
npm install grunt-contrib-watch --save-dev
```

###Less
Компилирует `less` файлы. [Линк](https://www.npmjs.org/package/grunt-contrib-less)

```
npm install grunt-contrib-less --save-dev
```

###Autoprefixer
Префиксы на `css`.
Иногда обновляй базу префиксов `npm update caniuse-db`. [Линк](https://www.npmjs.org/package/grunt-autoprefixer)

```
npm install grunt-autoprefixer --save-dev
```

###CSS-min
Минификация. `css` [Линк](https://www.npmjs.org/package/grunt-contrib-cssmin)

```
npm install grunt-contrib-cssmin --save-dev
```

###Заголовок
Описание. [Линк]()

```
plugin
```
