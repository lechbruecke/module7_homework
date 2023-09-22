class Ober {
	constructor() { // нет аргументов
		this.eingeschaltet = false
		this.f_aus = ()=>{
			this.eingeschaltet = false
		}
		this.f_ein = ()=>{
			this.eingeschaltet = true
		}
	}
}

class Lampe extends Ober {
	constructor(arg1, arg2) {
		super() // нет аргументов
		this.menge = arg1
		this.kraft = arg2
	}
}

class MW extends Ober {
	constructor(arg1, arg2) {
		super() // нет аргументов
		this.umfang = arg1
		this.kraft = arg2
	}
}

let lampe = new Lampe(5, 10); console.log(lampe);
let mikrowelle = new MW(30, 100)

let m = [lampe, mikrowelle]

let f1 = ()=>{
	let gesamt_kraft = 0

	for (let i = 0; i < m.length; i++) {
		let a = m[i]
		if (a.eingeschaltet === true) {
			gesamt_kraft = gesamt_kraft + a.kraft
		}
	}
	return gesamt_kraft
}

lampe.f_ein()
mikrowelle.f_ein()

console.log( lampe.eingeschaltet )
console.log( f1() )
