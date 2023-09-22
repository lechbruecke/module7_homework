let f1 = (schluessel, ob)=>{
	return schluessel in ob // есть ли в объекте такой ключ
}

let ob = {
	a : 1
}

console.log(
	f1('a', ob)
)
