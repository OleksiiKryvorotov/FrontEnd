const body = document.querySelector('body')

const logoImage = document.createElement('img')
const wraper = document.createElement('div')
const input = document.createElement('input')

wraper.classList.add('wraper')
logoImage.classList.add('google')
input.classList.add('search')
// срабатывает по клику:
input.addEventListener('click', () => {
    // console.log(1);
})

logoImage.setAttribute('src', './media/googlelogo_color_272x92dp.png')
logoImage.setAttribute('alt', 'logo of Google')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Поиск')


body.append(wraper)
wraper.append(logoImage)
wraper.append(input)