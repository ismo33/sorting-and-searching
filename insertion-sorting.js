
function insertion(array){
    for (i=1 ; i<array.length ; i++){
        let j=i;
        while (j!=0) {
            if (array[j]<array[j-1]){
                let temp=array[j];
                array[j]=array[j-1];
                array[j-1]=temp;
            }
             j=j-1;
        }
    }
return array;
}

let arr=[6,9,0,18,2,4];
console.log(insertion(arr));
