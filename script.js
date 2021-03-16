"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.count = numberOfFilms;

let a = prompt("Один из последних просмотренных фильмов?",  "");
let b = prompt("Насколько оцените его?,  ''");
let c = prompt("Один из последних просмотренных фильмов?",  "");
let d = prompt("Насколько оцените его?,  ''");

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

console.log(personalMovieDB);