const fs = require('fs'); // Импортируем встроенный модуль fs

// Функция для записи логов в файл log.txt
function logMessage(message) {
  fs.appendFile('log.txt', `${message}\n`, (err) => { // Добавляем сообщение в файл log.txt
    if (err) throw err; // Если ошибка, выбрасываем её
    console.log('Log saved!'); // Сообщаем, что лог сохранён
  });
}

module.exports = logMessage; // Экспортируем функцию для использования в других файлах
