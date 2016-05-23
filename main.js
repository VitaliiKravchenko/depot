/*
var carName = "BMW";
var carSpeed = 60;
var hasAutomaticTransmission = true;
var car ;
//console.log(typeof car);

//console.log(a);

var fullName = 'Herbert Wels';
var firstName = fullName.substr(0, 7);
//console.log(firstName);
//console.log (fullName.indexOf('ber'));

var fullName1 = 'Jon Snow';
//console.log(fullName1[0] + '.' + fullName1[fullName1.indexOf('Sno')] + '.');
//console.log(fullName[0] + '.' + fullName[fullName.indexOf('Wel')] + '.');

var login = 'Jo';
var email = 'test';
var phone = '';

var firstRule = login.length >= 3 && login.length <= 20;
var secondRule = email.length > 0 || phone.length > 0;
var result = firstRule && secondRule;

//if (result) 	
//	{console.log('valid');
//} else 
//{	console.log('invalid');
//	if (login.length < 3) {
//		console.log('You have entered ' + login.length + ' characters. You should put more than 2 chars for login');
//	}
//	var phoneOrEmail = phone.length = 0 ? 'You should input phone' : 'You should pu email';
//	console.log(phoneOrEmail);
//}




//var genre = 'cheap';
//switch(genre) {
//	case 'cheap':
//		console.log('reno, lanos');
//	break;

//	case 'premium':
//		console.log('bmw, mersedes');
//	break;

//	default:
//		console.log('hundai')
//	break;
//}

var i=10;
var i = 0;
//while (i < 5) {
//	console.log(i+=2);
//	console.log('======');
//}



//var first = text.substr(0, text.indexOf(' ') - 1);
//var characNum = text.indexOf(' ');
//console.log(first);
//console.log(characNum);
//var second = text.substr(text.indexOf(' ')); 
//console.log(second);

var fullText = 'Javascript is very popular, creative, interest, famous language in wwweb world. You can read, test jsknights.';
var text = fullText;
var lessOrThreeChar = fourChar = fiveChar = sixOrMoreChar =0;
while (checkComa !=0) {
	var indexComa = text.indexOf(',') == -1 ? text.indexOf('.') : text.indexOf(',');
	var firstPart = text.substr(0, indexComa); 
	var secondPart = text.substr(indexComa+1);
	var text = firstPart + secondPart;
	var checkComa = indexComa == -1 ? 0 : 1;
}
while (finish != 0) {
	var numSpace = text.indexOf(' ');
	var word = numSpace == -1 ? text.substr(0) : text.substr(0, numSpace);
	var text = text.substr(numSpace+1);
	
	if (word.length <= 3) { 
		 lessOrThreeChar++;
		}
	else {
		if (word.length == 4) { 
			 fourChar++;
		}
		else { 
			if (word.length == 5) { 
				 fiveChar++;
			}
			else {
				 sixOrMoreChar++;
			}
			}
			}
			
	var finish = numSpace == -1 ?  0 : 1;
}

var totalWords = lessOrThreeChar + fourChar + fiveChar + sixOrMoreChar;
var lessOrThreeCharPercent = lessOrThreeChar / totalWords * 100;
var fourCharPercent = fourChar / totalWords * 100;
var fiveCharPercent = fiveChar / totalWords * 100;
var sixOrMoreCharPercent = sixOrMoreChar / totalWords * 100;

console.log(fullText);
console.log('Three or less words are ' + lessOrThreeChar + ' and it is ' + lessOrThreeCharPercent + '%');
console.log('Four words are ' + fourChar + ' and it is ' + fourCharPercent + '%');
console.log('Five words are ' + fiveChar + ' and it is ' + fiveCharPercent + '%');
console.log('Six or more words are ' + sixOrMoreChar + ' and it is ' + sixOrMoreCharPercent + '%');
*/
/*
var title = 'The time machine'
console.log(title.length);
*/
/*
var letters = 'ABC';
for (i = 0; i< letters.length; i++) {
//	console.log(letters[i] + i);
	var letter = letters[i];
	for (j = 1; j< 4; j++) {
		console.log(letter + j);
		}
}   */


/*
var text = 'Hello. Good. Buy. Awesome.Perfect.'

for (i =0; i< text.length; i++) {
	var letter = text[i];
	
	if (i%2 ==1) {
		continue;
	}
	
	if (text[i] == '.') {
		console.log(i);
		break;
	}
}  */

/*
var cup = {
	color: 'white',
	size: 'big',
	'coffe type': 'latte'
}
//console.log(cup.color, cup.size);
key = 'coffe type';
//console.log(cup['coffe type']);
//console.log(cup[key]);
cup['temperature']= 90;
console.log(cup);
console.dir(cup);
*/

/*
var book = {
	title: 'time machine',
	color: 'green',
	author: {
		name: 'Gerbert',
		lastname: 'Wales',
		country: {
			lat: 50,
			lon: 0
		}
	}
};

//console.log(book.author.country.lat, book['author']['country']['lon']);
//console.log(book);

for (var key in book.author) {
//	console.log(key);
};

if ('title' in book) {
	//console.log('key exists');
};

book.pageCount = 100;

delete book.pageCount;
//console.log(book.pageCount);

//console.log(book);


var album = {
		size: 'big',
		painting: 'yes'
		};
//console.log(album);

var albook = book;

for (var key in album) {
albook[key] = album[key];
};

console.log(albook);
*/
/*
var names = ['John', 'Nina', 'Marina'];

names.push('Katie');
console.log(names);
names.pop();
console.log(names);
names.unshift('Baddy');
console.log(names);
names.shift();
console.log(names);
*/

/*
var names = ['John', 'Nina', 'Marina'];

for (i = 0; i< names.length; i++) {
	if (names[i] == 'Nina') {
		console.log('Nina has index', i);
		break;
	}
}
console.log('Nina has index', names.indexOf('Nina'));

names.splice(1, 1, 'Paul', 'Derek');
console.log(names);
*/

//var names = ['John', 'Nina', 'Derek', 'Marina'];

//var sliced = names.slice(1, 3);
//console.log(sliced);

/*
var namesString = ('John,Nina,Derek,Marina');
var names = namesString.split(',');
console.log(names);
var nam = names.join('|');
console.log(nam);
*/

/*
var friends = ['Katie', 'Bud'];
var neighbours = ['Mary', 'Andrew'];
var partyGuests = neighbours.concat(friends);
console.log(partyGuests);
friends[2] = 'James';
console.log(friends);
*/
/*
var names = ['John', 'Nina', 'Derek', 'Marina'];
names[4] = 'Bob';
names[10] = 'Rik';
for (var i = 0; i < names.length; i++) {
	console.log(i, names[i]);
}
*/
/*
var names = ['Ann', 'Jone'];
names.color = 'green';
//console.log(names);
//console.log(names.color);
//names[50] = 'Bob';
//console.log(names);

for (key in names) {
	console.log(key, names[key]);
}
console.log(names.length);
delete names[1];
console.log(names.length);
console.log(names);
*/
/*
var a = '4' - 3;
console.log(a);
*/

/*
var a = []; 

if (a) {
	console.log('True');
  }	else {
		console.log('False');
	}
*/

/*
function pron(name) {
	if (name) {
		console.log(name);
	} else {
		console.log('not valid');
	}
}
pron('Johnny');

var bool = !!'a';
console.log(typeof bool);
console.log(bool);
*/
/*
var str = String(false);
console.log(str);
console.log(typeof(str));
*/
/*
function printHello() {
	console.log('***********');
	console.log('Hello There');
	console.log('***********');
}

for (i=0; i<10; i++) {
	printHello();
}
*/
/*
function adding(a, b) {
	c = a+b;
	console.log(a, '+', b, '=', c);
}

adding(5, 45);
*/
/*
function adding(a, b, c) {
	return a+b+c;
}
var result = adding(4, 7, 3);
console.log(result);
*/
/*
var books = [
	{
		title: "Prelude to Foundation",
		author: "Isaac Asimov",
		numberOfPages: 512
	},
	
	{
		title: "The Tomb of Atuan",
		author: "Ursula K. Le Guin",
		numberOfPages: 192
	},
	
	{
		title: "Starship Troopers",
		author: "Robert A. Heinlein",
		numberOfPages: 263
	}
];

//console.log(books.length);

function findBiggestBook(books) {
	var book = null;
	var maxPages = 0;
	
	for (var i = 0; i < books.length; i++) {
		if (books[i].numberOfPages > maxPages) {
			var book = books[i];
			var maxPages = books[i].numberOfPages;
		}
	}
	return book;
}

//var theBiggestBook = findBiggestBook(books);
//console.log(theBiggestBook);

function findBookByTitle(name) {
	var filtBook = [];
	for (var i = 0; i < books.length; i++) {
		
		var b = books[i].title;
		var findTitle = b.indexOf(name);
		
		
		if (findTitle > 0) {
			filtBook.push(b);
			//filtBook.push('b');
			//console.log(b);
		}
	}
	//return filtBook;
	console.log(filtBook);
}

findBookByTitle('h');
*/
/*
function add(a, b, c) {
	console.log(a, b, c);
	console.log(arguments[3], arguments[4]);
	return a + b + c;
}

var result = add(1, 2, 3, 4, 5);
console.log(result);
*/
/*
function add() {
	total = 0;
	console.log(arguments);
	for (var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

var result = add(3, 6, 7);
console.log(result);

var result = add(1, 3, 5);
console.log(result);
*/
/*
function printHello() {
	console.log('Hello');
}

printHello();

console.log(typeof printHello());
*/