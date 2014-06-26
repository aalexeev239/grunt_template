##Устанавливаем [GRUNT](http://gruntjs.com/)

1. Запустите терминал и перейдите в нужную директорию `cd projectname`.
2. Убедитесь в наличии файла `package.json` и актуальности указанной в нем информации.
3. Запустите команду `npm install` (возможно, под рутом).
4. Установите командную строку `npm install -g grunt-cli`.
5. А теперь очередь `Gruntfile.js` появиться на сцене! Настройте установленные плагины.
6. Шестого пункта нет. Все готово! 
Ниже приведены плагины, собранные в `package.json`.

##Окей, и что делать?

Grunt выполняет заранее сконфигурированные задачи из под терминала.
Просто перейдите в корневую директорию проекта и напишите `grunt` или `grunt xxx` и наслаждайтесь процессом. `xxx` – это название задачи или плагина.

Вот что понадобится для работы:

| Задача | Что делает |
| ------------------- | --- |
| `grunt clean:empty` | Удалить все файлы с названием `_EMPTY.txt` Этот таск должен быть запущен сразу после того, как мы скачали проект с Гитхаба. Гитхаб, к сожалению, не умеет видеть пустые папки. |
| `grunt js` | Выполнит конкатенацию и минификацию скриптов |
| `grunt css` | Скомпилирует **less**, обработает автопрефиксером и сожмет **css** |
| `grunt imagemin` | Сожмет изображения в **src/img** и **src/files** |
| `grunt` | Дефолтное задание, выполнит верхние три |
| `grunt watch` | Отслеживает изменения в коде и применяет соответвующие функции. Например, перекомпилирует **css** при изменении **less** файла. Работает режим `livereload`. Установите [расширение для браузера](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions) и наслаждайтесь |
| `grunt pain` | Этот чудный таск запускает `jshint`. Вы смотрите на свой код и у вас резко ухудшается настроение |
| `grunt build` | Скомпилирует и сожмет скриты и **css**, обработает изображения и перенесет ужатые файлы в папку **public/**. Также будут перенесены **html**, **ico** и **png** файлы из папки **src/** (но не внутренних) |

##Плагины

###Load tasks
Не паримся с подгрузкой заданий в `Gruntfile.js`. [Линк](https://www.npmjs.org/package/load-grunt-tasks)

```
npm install load-grunt-tasks --save-dev
```

###Time grunt
Показывает время выполнения задания в консоли [Линк](https://www.npmjs.org/package/time-grunt)

```
npm install --save-dev time-grunt
```

###Copy
Копируем файлы [Линк](https://www.npmjs.org/package/time-grunt)

```
npm install grunt-contrib-copy
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
Заставляет вас плакать, глядя на свой код. [Линк](https://www.npmjs.org/package/grunt-contrib-jshint)

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


###Clean
Удаляет файлы. [Линк](https://github.com/gruntjs/grunt-contrib-clean)

```
npm install grunt-contrib-clean --save-dev
```


<!-- ###Заголовок
Описание. [Линк]()

```
plugin
```
 -->