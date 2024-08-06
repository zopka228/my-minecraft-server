document.addEventListener('DOMContentLoaded', () => {
    const newsContent = document.getElementById('news-content');
    
    // Здесь вы можете загрузить новости с вашего сервера
    const news = [
        'Сервер обновлен до версии 1.20!',
        'Добавлены новые игровые режимы.'
    ];

    newsContent.innerHTML = news.map(item => `<p>${item}</p>`).join('');
});
