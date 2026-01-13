
// ex 1

function returnTrue() {
  return true;
}

returnTrue();

// ex 2

function returnFalse() {
  return false;
}

returnFalse();


// ex 3 

function isEven(number) {
  return number % 2 === 0;
}

isEven(2);
isEven(3);
 
// ex 4

function isOdd(number) {
  return number % 2 !== 0;
}

isOdd(3);
isOdd(2);

// ex 5

function isGreaterThan10(number) {
    return number > 10;
}
isGreaterThan10(5);
isGreaterThan10(10);
isGreaterThan10(11);

// ex 6

function isLessThan30(number) {
    return number < 30 ;
}
isLessThan30(5);
isLessThan30(30);
isLessThan30(32);

// ex 7

function isEqualTo10(number) {
    return number === 10;
}
isEqualTo10(1);
isEqualTo10(10);
isEqualTo10(15);

// ex 8

function isGreaterOrEqualTo15(number) {
    return number > 15;
    return number === 15;
}
isGreaterOrEqualTo15(0);
isGreaterOrEqualTo15(15);
isGreaterOrEqualTo15(20);

// ex 9

function isLessOrEqualTo8(number) {
    return number > 8;
    return number === 8;
}
isLessOrEqualTo8(2);
isLessOrEqualTo8(8);
isLessOrEqualTo8(12);


// ex 10

function isLessThan(num1, num2) {
    return num1<num2;
}
isLessThan(2, 3);
isLessThan(3, 2);
isLessThan(3, 3);

// ex 11

function isEqualTo(num1, num2) {
    return num1===num2;
}
isEqualTo(3, 3);
isEqualTo(3, 2);

// ex 12

function isOldEnoughToDrive(age) {
    return age >= 18;
}
isOldEnoughToDrive(12);
isOldEnoughToDrive(18);
isOldEnoughToDrive(20);

// ex 13

function isValidPassword(password) {
    return password.length >= 8;
}
isValidPassword("hello");


 // ex 14
function longerString(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else if (string2.length > string1.length) {
    return string2;
  } else {
    return "both";
  } 
}
longerString("cat", "kitty");
longerString("Hello", "Hi");
longerString("Hello", "World");



// ex 15 

function opposite(boolean) {
    return !boolean;
}
opposite(true);
opposite(false);

// ex 16 

function rectAreaGreaterThan50(length, width) {
  return length * width >= 50;
}
rectAreaGreaterThan50(10, 6);
rectAreaGreaterThan50(10, 5);
rectAreaGreaterThan50(2, 3);

// ex 17 

function budgetStatus(number) {
  if (number > 250) {
    return "over budget";
  } else {
    return "under budget";
  }
}
budgetStatus(260);