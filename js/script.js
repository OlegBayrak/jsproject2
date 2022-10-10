/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advert_block = document.getElementsByClassName('promo__adv');
const movie_ganer = document.getElementsByClassName('promo__genre');
const change_image = document. getElementsByClassName('promo__bg');
const movie_list = document.querySelector('.promo__interactive-list');

advert_block[0].remove();

movie_ganer[0].innerHTML = "драма";

// change_image[0].style.backgroundImage = URL('img/bg.jpg');

movie_list.innerHTML = "";

movieDB.movies.sort();

 movieDB.movies.forEach((film, i) => {
     movie_list.innerHTML += ` 
     <li class="promo__interactive-item">${i+1} ${film}
     <div class="delete"></div>
 </li>`;
});