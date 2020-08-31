//Question 4: Program to Display only elements containing 'a' in them from a array.



let array = ["Ford","Volkswagen","Skoda","Honda","Hyundai"];

let i = 0;
while(i <= array.length){
    let data = array[i].toLowerCase();
    if(data.includes('d') == true)
        console.log(data);
    i++;
}

