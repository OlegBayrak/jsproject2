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
console.log(advert_block);
advert_block[0].remove();
console.log(movie_ganer);
// movie_ganer.textContent = 'Replacement text';
movie_ganer[0].innerHTML = "драма";
console.dir(change_image);
change_image[0].style.backgroundImage = URL('img/bg.jpg');