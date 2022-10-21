   function convert(){
const array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);


		document.getElementById("f").value = Math.round(sum)+" sum of [1, 2, 3, 4, 5]";
   }
