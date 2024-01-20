const lessons = [
  { id: 1, title: 'Урок 1', problems: ['Задача 1', 'Задача 2', 'Задача 3'] },
  { id: 2, title: 'Урок 2', problems: ['Задача 1', 'Задача 2', 'Задача 3'] },
  // Добавьте другие уроки с их проблемами по аналогии
];

$(document).ready(function() {
  showLessons();
});

function showLessons() {
  const lessonsList = $('#lessons-list');
  lessonsList.empty();

  lessons.forEach(lesson => {
    const listItem = $('<li></li>');
    const link = $('<a></a>', {
      text: lesson.title,
      click: function() {
        showProblems(lesson.id);
      }
    });

    listItem.append(link);
    lessonsList.append(listItem);
  });
}

function showProblems(lessonId) {
  const selectedLesson = lessons.find(lesson => lesson.id === lessonId);
  $('#selected-lesson-title').text(selectedLesson.title);

  const problemsList = $('#problems-list');
  problemsList.empty();

  selectedLesson.problems.forEach((problem, index) => {
    const listItem = $('<li></li>');
    const link = $('<a></a>', {
      text: problem,
      click: function() {
        showSolution(lessonId, index);
      }
    });

    listItem.append(link);
    problemsList.append(listItem);
  });

  $('#problems-container').show();
}

function showSolution(lessonId, problemIndex) {
  const selectedProblem = lessons.find(lesson => lesson.id === lessonId).problems[problemIndex];
  $('#selected-problem-title').text(selectedProblem);

  // Пример реального решения задачи
  const solutionText = $('#solution-text');
  solutionText.html('<strong>Решение:</strong> Это место предназначено для решения выбранной задачи.');

  $('#solution-container').show();
}


