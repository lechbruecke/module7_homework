let F_konstruktor_ober = function() {
	this.eingeschaltet = false
	this.f_aus = ()=>{
		this.eingeschaltet = false
	}
	this.f_ein = ()=>{
		this.eingeschaltet = true
	}
}

let F_konstruktor_lampe = function(menge, kraft) { 
	// this
	this.menge = menge
	this.kraft = kraft
}

let F_konstruktor_mikrowelle = function(V, kraft) {
	this.V = V
	this.kraft = kraft
}

F_konstruktor_lampe.prototype = new F_konstruktor_ober() 
F_konstruktor_mikrowelle.prototype = new F_konstruktor_ober() 

let enti_lampe = new F_konstruktor_lampe(5, 10)
let enti_mikrowelle = new F_konstruktor_mikrowelle(30, 100)

let mass = [enti_lampe, enti_mikrowelle]

let f_rechnen = ()=>{
	let gesamt_kraft = 0

	for (let i = 0; i < mass.length; i++) {
		let a = mass[i]
		if (a.eingeschaltet === true) {
			gesamt_kraft = gesamt_kraft + a.kraft
		}
	}
	return gesamt_kraft
}

enti_lampe.f_ein()
enti_mikrowelle.f_ein()

console.log( enti_lampe.eingeschaltet )
console.log( f_rechnen() )
