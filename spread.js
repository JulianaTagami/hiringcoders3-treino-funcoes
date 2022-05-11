let list = [1, 2, 5];
let listIncluir = [3, 4];

console.log(list);
console.log(listIncluir);

for(let i = 0; i < listIncluir.length; i++) {
    for(let j = 0; j < list.length; j++) {
        if (list[j] >= listIncluir[i]) {
            list.splice(j, 0, listIncluir[i]);
            j++;
        }
    } 
}
console.log(list);





let arr = ['a', 'b', 'c'];

let arr2 = arr;

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
