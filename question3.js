//Question 3: Program to search for a Element in an array of string.


let arr = ["Ford","Volkswagen","Skoda","Honda","Hyundai"];
arr.forEach((ele,i)=>{
    if(ele==="Volkswagen"){
        console.log(`${ele} is present at position ${i}`);
    }
});