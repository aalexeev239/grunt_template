##Перед началом

1. Исправьте данные в `package.json`
2. Переименуйте и настройте `TEMPLATE.sublime-package`
3. Обновите `.gitignore`
4. Добавьте файл `.ftppass` согласно требованиям плагина [ftp-deploy](https://github.com/zonak/grunt-ftp-deploy)
5. Удалите это вступление

##Начало
1. Запустите команду `npm i` (unix: без [sudo](https://docs.npmjs.com/getting-started/fixing-npm-permissions))
2. Запустите задачу `grunt make`
3. Убедитесь, что проект создался. Появится файл `src/index.html` с чеклистом.

##Важно

Полностью готовая версия сайта находится в папке `public`. 

Версия для разработки находится в `src`. Для работы с этой версией необходимо установить Grunt. Запуск команды `grunt make` соберет все необходимые файлы и самостоятельно скомпилирует их в папку  `public`. Будьте внимательны, все изменения в папке `public` будут стерты и заменены на новые. Дополнительные команды вы найдете в `Gruntfile.js`.


Алексеев Андрей,
alexeev.andrey.a@gmail.com
