class FamilyTree {
	constructor(name, hairColor, eyeColor, vertical) {
		this.name = name;
		this.hairColor = hairColor;
		this.eyeColor = eyeColor;
		this.vertical = function vertical(){
			console.log(name + " can jump " + vertical + " inches.");
		}
	}
	familyReport(){
			return `
			Name:${this.name},
			Hair Color:${this.hairColor},
			Eye Color:${this.eyeColor},
			Vertical Jump:${this.vertical} inches`
		}
}
class Grandparents extends FamilyTree{
	constructor(name, hairColor, eyeColor, vertical){
		super(name, hairColor, eyeColor, vertical);
	}
	familyReport(){
		let title ="GrandParents"
		return `${title} ${super.familyReport()}`;
	}
}

let grandpa = new Grandparents();
	grandpa.name = "Ong";
	grandpa.hairColor = "Silver";
	grandpa.eyeColor = "brown";
	grandpa.vertical = 0;
console.log(grandpa);

let grandma = new Grandparents();
	grandma.name = "Ba";
	grandma.hairColor = "Silver";
	grandma.eyeColor = "brown";
	grandma.vertical = 0;
console.log(grandma);

class Parents extends FamilyTree{
	constructor(name, hairColor, eyeColor, vertical){
		super(name, hairColor, eyeColor, vertical);
	}
	familyReport(){
		let title ="Parents"
		return `${title} ${super.familyReport()}`;
	}
}

let dad = new Parents();
	dad.name = "Phi";
	dad.hairColor = "Silver";
	dad.eyeColor = "brown";
	dad.vertical = 4;
console.log(dad);

let mom = new Parents();
	mom.name = "Mandy";
	mom.hairColor = "black";
	mom.eyeColor = "brown";
	mom.vertical = 3;
console.log(mom);

class Children extends FamilyTree{
	constructor(name, hairColor, eyeColor, vertical){
		super(name, hairColor, eyeColor, vertical);
	}
	familyReport(){
		let title ="Children"
		return `${title} ${super.familyReport()}`;
	}
}

let brother1 = new Children();
	brother1.name = "Phung";
	brother1.hairColor = "black";
	brother1.eyeColor = "brown";
	brother1.vertical = 6;
console.log(brother1);

let sister1 = new Children();
	sister1.name = "Be";
	sister1.hairColor = "black/brown";
	sister1.eyeColor = "brown";
	sister1.vertical = 3;
console.log(sister1);

let sister2 = new Children();
	sister2.name = "Ut";
	sister2.hairColor = "black";
	sister2.eyeColor = "brown";
	sister2.vertical = 3;
console.log(sister2);

let brother2 = new Children();
	brother2.name = "Micheal";
	brother2.hairColor = "black";
	brother2.eyeColor = "brown";
	brother2.vertical = 10;
console.log(brother2);

let me = new Children();
	me.name = "Long";
	me.hairColor = "black";
	me.eyeColor = "brown";
	me.vertical = 400;
console.log(me);

let sister3 = new Parents();
	sister3.name = "Ai-vy";
	sister3.hairColor = "black";
	sister3.eyeColor = "brown";
	sister3.vertical = 3;
console.log(sister3);
