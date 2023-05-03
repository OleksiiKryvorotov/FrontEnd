

const wrapper = document.querySelector(".wrapper");
const button = document.querySelector(".NewImageButton");

button.addEventListener("click", () => {
  const image = document.createElement('img');
  image.src = 'http://placekitten.com/1000/500';
  wrapper.append(image);
});
