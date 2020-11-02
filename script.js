const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let inProgressChangeColor = false; //смена цветов в процессе?
let timeIntervalID = null; //переменная для хранения ID интервала

const randomIntegerFromInterval = (min, max) => {
  //функция генерации случайного числа в заданном интервале
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  //собираем ссылки на все необходимые элементы
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.btnStart.addEventListener("click", btnStartEvent); //регистрируем событие по кнопке старт
refs.btnStop.addEventListener("click", btnStopEvent); //регистрируем событие по кнопке стоп

function selectColor(colors) {
  //принимает массив цветов и возвращается случайный цвет из этого массива
  return colors[randomIntegerFromInterval(0, colors.length)];
}

function setBodyColor(color) {
  //устанавливает полученный цвет на фон body
  refs.body.style.backgroundColor = color;
  console.log("Новый цвет установлен");
}

function btnStartEvent() {
  //функция для обработки события по кнопке Старт

  if (inProgressChangeColor) {
    //выходим из функции, если смена цветов уже в процессе
    console.log("Событие не может выполнится повторно, пока оно в процессе");
    return;
  }

  inProgressChangeColor = true; //отмечаем, что функция смены цветов активна
  timeIntervalID = setInterval(() => {
    setBodyColor(selectColor(colors)); //устанавливаем случайный цвет на фон body
  }, 1000);
}

function btnStopEvent() {
  //функция для обработки события по кнопке Стоп
  inProgressChangeColor = false; //отмечаем, что функция смены цветов остановлена
  clearInterval(timeIntervalID); //очищаем интервал
  console.log("Обновление цвета прекращено!");
}
