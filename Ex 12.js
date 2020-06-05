dog.bark = function () {
	console.log("Гав-гав! Меня зовут " + this.name + "!");
};

var dog = {
	name: "Оладушек",
	legs: 4,
	isAwesome: true,
	age: 6
};
//dog.bark();

var speak = function () {
	console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
	sound: "Мяу",
	name: "Варежка",
	speak: speak
};

//cat.speak();
