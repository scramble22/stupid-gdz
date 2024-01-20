window.onload = function () {
    const correctPassword = "жопа хуй 777";
    const storedPassword = localStorage.getItem("pass");

    if (storedPassword !== correctPassword) {
        // Перенаправление на страницу входа, если пароль не совпадает
        window.location.href = "login.html";
    }
};