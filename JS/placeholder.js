const taskInput = document.getElementById('taskNumber');

taskInput.addEventListener('change', () => {
    const inputText = taskInput.value.trim().toLowerCase();

    // Переводы уроков с русского на английский
    const subjectTranslations = {
        'химия': 'chemistry',
        'алгебра': 'algebra',
        // Добавьте другие предметы по мере необходимости
    };

    // Проверяем, если введено только число, переходим на страницу результатов
    if (/^\d+$/.test(inputText)) {
        const resultsURL = `results.html?taskNumber=${inputText}`;
        window.location.href = resultsURL;
    }
    // Проверяем, если введен только предмет, переходим на страницу выбора номера урока
    else if (/^[а-яА-Я]+$/.test(inputText)) {
        const subjectTranslation = subjectTranslations[inputText] || inputText;
        const subjectURL = `${subjectTranslation}.html`;
        window.location.href = subjectURL;
    }
    // Проверяем, если введен предмет и число, предполагаем, что это задание по соответствующему предмету
    else if (/^([а-яА-Я]+)\s(\d+)$/.test(inputText)) {
        const [, subject, taskNumber] = inputText.match(/^([а-яА-Я]+)\s(\d+)$/);
        const subjectTranslation = subjectTranslations[subject] || subject;
        const taskURL = `${subjectTranslation}_task${taskNumber}.html`;
        window.location.href = taskURL;
    }
});
