let input1 = parseInt(prompt("Please enter a number: "));

for(let count = 1; count <= input1; count++){
    if(count % 5 == 0 && count % 3 == 0){
        console.log("COUNT: " + count + " - COCO MELON");
    }else if(count % 3 == 0){
        console.log("COUNT: " + count + " - COCO");
    }else if(count % 5 == 0){
        console.log("COUNT: " + count + " - MELON");
    }else{
        console.log("COUNT: " + count);
    }
}