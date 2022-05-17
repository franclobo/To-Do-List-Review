import './style.css';

import { list } from './modules/class.js';

import toDoList from './modules/todolist.js';

const formList = document.querySelector('.form');

formList.addEventListener('submit', (event) => {
  event.preventDefault();
  toDoList();
});

window.addEventListener('load', () => {
  if (list) {
    list.forEach((task) => {
      toDoList(task);
    });
  }
});