let f1 = (arg)=>{
	for (let schluessel in arg) {
		if ( arg.hasOwnProperty(schluessel) ) { // в данном объекте есть ли СОБСТВЕННЫЙ ключ 
			console.log(
				`${schluessel} : ${arg[schluessel]}`
			)
		}
	}
}

let ober = {
	alter : 19,
	geschlecht : 'maennlich',
	stadt : 'Samara',
}

let unter = Object.create(ober) // создаёт новый объект, которому добавляем прототип
unter.a = 1

f1(unter)
