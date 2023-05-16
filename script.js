// Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. 
// Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, 
// в противном случае false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result1 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false

// let checkEmail = (string) => string.includes("@",".")

// let result1 = checkEmail("some@email.com")
// 	let result2 = checkEmail("someemailcom")
// 	console.log(result1)
// console.log(result2)


// Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// Steven

// let initCap = (string) => newStr = string[0].toUpperCase() + string.slice(1)
  

// let result1 = initCap("sam")
// 	let result2 = initCap("steven")
// 	console.log(result1)
// console.log(result2)

// Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. 
// Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let cards = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859',
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699' 
// ]

// clearDataCards(cards)

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]


// 	Результат: ['Home','About','FAQ','Contacts']



