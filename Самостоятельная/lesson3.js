"use strict"
var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
var sum = 0;
var i = 0;
/////среднее арифметическое
for (i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum/arr.length);

/////наибольшее значение
for (i = 0; i < arr.length; i++) {
	if (arr[i] > sum) sum = arr[i];
}
console.log(sum);

/////сумма всех элементов
for (i = 0, sum = 0; i < arr.length;) {
	sum += arr[i++] 
} 
console.log(sum);

///наименьшее значение
for (i = 0; i < arr.length; i++) { 
	if (arr[i] < sum) sum = arr[i];
}
console.log(sum);

