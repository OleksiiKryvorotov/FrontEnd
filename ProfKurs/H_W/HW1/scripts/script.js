// 5. --- Написать стрелочную функцию, которая перебирает массив слов. Массив слов передается через аргумент. И возвращает нам самое длинное слово

const giveMeTheLongestWord = (word) => {
    let longest = ''
    for (let i = 0; i < word.length; i++) {
      if(word[i].length > longest.length) {
        longest = word[i]
      }         
    }
    return longest
}
const arr = ['Oli', 'Done', 'Apple']
const longest = giveMeTheLongestWord(arr)

console.log(giveMeTheLongestWord(arr))