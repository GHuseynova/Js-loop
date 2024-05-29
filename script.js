// var firstAngle  = +prompt('Please enter first angle')
// var secondAngle = +prompt('Please enter second angle')
// if ( firstAngle+secondAngle >180) {
//     alert('Please enter correct angle')
// }else {
//     console.log(180-(firstAngle+secondAngle));
// }

// var arr = ["45", "67", "89", "23", "55", "88", "93"];
// var number = +prompt("Please enter number");
// var found = false;
// for (var i = 0; i < arr.length; i++) {
//   if (number == arr[i]) {
//     alert(`${number} is in array`);
//     found = true;
//     break;
//   } else {
//     console.log(`${number} isn't in array`);
//   }
// }

var arr = [678, 45,67,89,23,545,188,293];

var sum = 0;
// for (var i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);

// for ( var i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum/arr.length);

// console.log(arr.length); 
// for(var i=0; i<arr.length; i++){
//     if (arr[i]>100 && arr[i]<200) {
//         console.log(arr[i]);
//     }
// }
// for ( var i=0; i<arr.length; i++){
//     if (arr[i]%2==0) {
//         console.log(arr[i]);
//     }
// }
for ( var i=0; i<arr.length; i++){
    if (arr[i]%2!=0) {
        console.log(arr[i]);
    }
}