
let text
let karar = 5
document.getElementById("karar_artır").onclick = () => {karar = ++document.getElementById("karar").innerHTML; if(karar > 11) karar=document.getElementById("karar").innerHTML=0}
document.getElementById("karar_azalt").onclick = () => {karar = --document.getElementById("karar").innerHTML; if(karar < 0)  karar=document.getElementById("karar").innerHTML=11}

const matrix = [
	"EF|G#AâBCçD^EF|G#AâBCçD^",
	"BCçD^EF|G#AâBCçD^EF|G#Aâ",
	"G#AâBCçD^EF|G#AâBCçD^EF|",
	"D^EF|G#AâBCçD^EF|G#AâBCç",
	"AâBCçD^EF|G#AâBCçD^EF|G#",
	"EF|G#AâBCçD^EF|G#AâBCçD^"
]
String.prototype.insertAt = function(index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index);
}
const arrayDiff = (a, b) => a.filter(x => !b.includes(x))


function çevir () {
	
	const altılar = altılılarınİndexleri()
	altılar.map(ekle)
	
	function ekle (n) {
		let digi= []
		for (let i=0 ; i<6; ++i) {
			const yatayda= [...text[n+i].matchAll(/\d+/g)]
			yatayda.map(y => {
				digi.push({ v: y[0], i: y.index, t:i})
			})
		}
		digi.sort((a,b)=>b.i-a.i)
		
		digi.map(fret=> {
			
			text[n+fret.t] = text[n+fret.t].insertAt(fret.i+(~~fret.v/10)+1, "("+matrix[fret.t][(parseInt(fret.v)+17-karar)%12]+")")
	
			const aynıSütundakiler = digi.filter(dd => dd.i+(dd.v.length-1) == fret.i+(fret.v.length-1) && dd.t != fret.t)
			const sütundaTekMiyim = aynıSütundakiler.length == 0
			const sütundaİlkMiyim = !sütundaTekMiyim && aynıSütundakiler.every(dd => dd.t > fret.t)
						
			let çizgiEklenecekTeller = 
			[0,1,2,3,4,5].filter(tt => tt!= fret.t)
			
			if (sütundaTekMiyim) {
				for (let j of çizgiEklenecekTeller) {
					text[n+j] = text[n+j].insertAt(fret.i+(~~fret.v/10)+1, "---")
				}
			} else if (sütundaİlkMiyim) {
				çizgiEklenecekTeller = arrayDiff(çizgiEklenecekTeller, aynıSütundakiler.map(dd => dd.t))
				for (let j of çizgiEklenecekTeller) {
					text[n+j] = text[n+j].insertAt(fret.i+(~~fret.v/10)+1, "---")
				}
			}
		})
	}
	
	
	function altılılarınİndexleri () {
		let arr = []
		for (let i=0 ; i<text.length-6; ++i) {
			for (let j=0 ; j<5; ++j) {
				const condition = 
				text[i][j]  =='-' &&
				text[i+1][j]=='-' &&
				text[i+2][j]=='-' &&
				text[i+3][j]=='-' &&
				text[i+4][j]=='-' &&
				text[i+5][j]=='-' 
				if (condition) {
					arr.push(i)
					break
				}
			}
		}
		return arr
	}
}

