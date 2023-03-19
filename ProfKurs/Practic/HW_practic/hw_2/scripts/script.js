// Создать объект названием View
// У объекта должны быть свойства (все свойства функции):
// - addParagraph - добавляет параграф в body
// аргументы (текст, цвет, размер шрифта)
// - changeBodyColor - меняет цвет body
// aргументы (цвет)
// - addImage - добавляет картинку в body
// аргументы (путь к картинке, ширина, высота)

const View = {
    addParagraph: (text, color, fontSize) => {
      const p = document.createElement('p');
      p.innerText = text;
      p.style.color = color;
      p.style.fontSize = fontSize;
      document.body.appendChild(p);
    },
    
    changeBodyColor: (color) => {
      document.body.style.backgroundColor = color;
    },
    
    addImage: (src, width, height) => {
      const img = document.createElement('img');
      img.src = src;
      img.width = width;
      img.height = height;
      document.body.appendChild(img);
    }
  };

    View.addParagraph('MANOWAR', 'red', '32px');
    View.changeBodyColor('black');
    View.addImage('https://cdn.antenne.de/thumbs/images/galleries/489991/165044_05_eric_joey1400x1000.011c6919.jpg', 1200, 900);