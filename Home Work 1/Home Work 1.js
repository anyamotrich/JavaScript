var colors = ['silver','black','gold'];
var price ;

while (true) {
    colors = prompt('Color');
   if (colors === 'silver') {
       price = 300;
       img = document.write('<img src="silver.png" alt="silver">');
       break;
   }
   if (colors === 'black') {
       price = 500;
       img = document.write('<img src="black.png" alt="black">');
       break;
   }
   if (colors === 'gold') {
       price = 1000;
       img = document.write('<img src="gold.png" alt="gold">');
       break;
   }
}

var memory = [64,128,256];
var x = 50;
memory = prompt('Memory');
for(memory = x; x = x;) {
    console.log(price + x);
    break;
}
document.write(price + x + '$')





