tests/getFilesCount.test.js
---------------------------

Протестируйте функцию `getFilesCount(path, log)`, которая считает количество всех файлов в указанной директории и всех поддиректориях. В отличие от предыдущей версии задания, здесь нас интересует только то, что эта функция выполняет логирование. Мы хотим убедиться, что она отправляет сообщение в лог. Для этого придётся воспользоваться моком.

### Подсказки

-   [toHaveBeenCalledTimes](https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber)
-   [toHaveBeenCalledWith](https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-)