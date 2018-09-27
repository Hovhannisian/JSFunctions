
const F1 = function(arg1, arg2, arg3) {       											  //takes, returns using args
	return arg1 + arg2 * arg3
}
console.log(F1(2, 3, 5));




const F2 = function() {                     											  //doesn't take, returns smth
	return 'Hi there!'
}
console.log(F2());




const F3 = function(a) {																  //takes, does smth, doesn't return
 Math.sqrt(a)
}
F3(16);







const F4 = function(a, b, c) {															  //returns the longest str
	if (a.length > b.length && a.length > c.length) 	
		{return a}
		else if (b.length > a.length && b.length >c.length) {
			return b
		}
			else if (c.length > a.length && c.length >b.length) {
				return c}
				else {return "ther're strings with equal length"
        };
};
console.log(F4('which', 'one', 'longer'));




const F5 = function(firstnum, secondnum) {												//compares two numbers
	if(firstnum === secondnum) {
		return 0
	}
	else if(firstnum > secondnum) {
		return 1;
}
else {return -1
}

} 
console.log(F5(59645,59658))






const mult= function(a, b) {															//calculates triangle area using separate mult & div functions
	return a*b
}

const div= function (c,d) {
	return c/d
}
 

const triangleArea = function(base, height) {
	
	let a = mult(base, height);
	return div (a, 2)}
  
  console.log(triangleArea(545,872))






const numLength = function(str){													//length of a number
  const a = str.toString()
  return a.length
}; 
console.log(numLength(463521))



const StrNum = function(str1, str2, num) {											//compares lengths of str with num
	
	if (str1.length + str2.length > num) {
		return 1
	}
	else {
		return -1
	}

}
console.log(StrNum('hello','world',66));




 const runStuff = function (num1, num2, str) {									 //calculates areas of rectangle || triangle
 	if(str === 'rectangle') {
 		return num1*num2
 	}
 	else if (str ==='triangle'){
 		return triangleArea(num1, num2)
 	}
 	else {return -1}
 }
console.log(runStuff(5,6,'triangle'))