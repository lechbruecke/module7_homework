let f1 = ()=>{
	let unter = Object.create(null) // создает новый объект, передаем прототип
	return unter
}
console.log( f1() )

let eltern = { // объект с прототипом 
	a : 1 // собственное св-во объекта 
}
console.log( eltern.hasOwnProperty('a') ) // true
console.log( eltern )


let kind = f1() // объект без прототипа 
kind.b = 2 // собственное св-во объекта 

console.log(kind)  
console.log( kind.hasOwnProperty('b') )



