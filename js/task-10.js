function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
// // Пользователь вводит количество элементов в input и 
// // нажимает кнопку Создать, после чего рендерится коллекция.
// // При нажатии на кнопку Очистить, коллекция элементов очищается.

// // <div id="controls">
// //   <input type="number" min="1" max="100" step="1" />
// //   <button type="button" data-create>Create</button>
// //   <button type="button" data-destroy>Destroy</button>
// // </div>

// // <div id="boxes"></div>

// // Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// // Функция создает столько < div >,
// //   сколько указано в amount и добавляет их в div#boxes.

// // Размеры самого первого <div> - 30px на 30px.
// // Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// // Все элементы должены иметь случайный цвет фона в формате HEX. 
// // Используй готовую функцию getRandomHexColor для получения цвета.


// // Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// //   тем самым удаляя все созданные элементы.
// const inputEl = document.querySelector('input');
// const btnCreateEl = document.querySelector('[data-create]');
// const btnDestroyEl = document.querySelector('[data-destroy]');
// const output = document.querySelector('#boxes');
// inputEl.addEventListener('input', onInputEnter);
// btnCreateEl.addEventListener('click', onPictureCreate);
// btnDestroyEl.addEventListener('click', destroyBoxes);

// function onInputEnter(event) {
//   return event.currentTarget.value;
// };
// const inputElVal = onInputEnter;

// let markupBox = [];
// function onPictureCreate(inputElVal) {
//   for (let i = 1; i <= inputElVal; i += 1){
    
//     const markup = `<div style='background-color: ${getRandomHexColor()}; 
//     width: ${20 + i * 10}px; height: {20 + i *10}px;'></div> `;
//     markupBox.push(markup);
    
//   }
// }

// output.innerHTML = markupBox.join('');
// function destroyBoxes(event) {
//   event.currentTarget.reset();
// }
