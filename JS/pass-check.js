// check-auth.js
window.onload = function () {
    const storedUsername = localStorage.getItem("username");
    
    if (!storedUsername || !isUserActive(storedUsername)) {
        // Перенаправление на страницу входа, если пользователь не авторизован или истек срок действия
        window.location.href = "login.html";
    }

    // Отображение имени пользователя на странице
    document.getElementById("username").innerText = storedUsername;
};

function isUserActive(username) {
    // Поиск пользователя с введенным именем
    const user = users.find(u => u.username === username);

    // Проверка, активен ли пользователь на текущий момент
    if (user) {
        const currentDate = new Date();
        const expirationDate = new Date(user.expirationDate);
        return currentDate <= expirationDate;
    }

    return false;
}
