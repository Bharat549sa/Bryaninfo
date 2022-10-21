function convert1(){
let arr = [5, 2, 56, 23, 23, 10];
temp = 0;
arr.forEach((element) => {


    if(temp < element){
        temp = element;
    }
});
console.log('the largest numbe rin the array: ${temp}');

document.getElementById("c").value = Math.round(temp)+" the largest numbe rin the array of [5, 2, 56, 23, 23, 10]: ${temp}";
}
