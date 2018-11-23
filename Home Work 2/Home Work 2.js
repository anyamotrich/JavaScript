var color = prompt('Chose color : "Gold" , "Black" or "Silver" ?'); 

switch (color) {
    case 'gold':
    document.write('<img src="gold.png" alt="gold">');
        ;break;
    case 'black':
    document.write('<img src="black.png" alt="black">');
        break;
    case 'silver':
    document.write('<img src="silver.png" alt="silver">');
        break;  
    default :
    document.write('<img src="default.png" alt="default">');
    }

var memory = prompt('"64 GB" or "256 GB" ?'); 

switch (memory) {
    case '64':
    document.write('999$');
        break;
    case '256':
        document.write('1499$');
        break;
}

