//question2
function iterateArray(arr){
    let i = 0;
    while(i< arr.length){
        if (arr[i] == arr[4]){
            console.log(arr[i]);
            break;

        }
        i ++
    } 
}
let arrNum =  [1,2,3,4,5,6,7,8,9];
 iterateArray(arrNum);

 //question3
function continueArray(arr) {
      let i =0;
      while(i<arr.length){
        if (arr[i]=== arr[2]){
            console.log(arr[i]);
            continue;
        }
        i ++

      }
}
let arrFruits = ["apple","plum","banana","strawberries","kiwi"];
continueArray(arrFruits);
 
//question4
function arrStrings(names){
    let i =0;
    for (i<arr.length; i++;){
        console.log(names);

    }
}
let arrNames = ["mary","susan","cathy","loice"];

//question1
function digitsArray(arr){
    const firstFourNumbers =arr.slice(0,4).map(item => item*item);
    console.log(firstFourNumbers)
    const lastTwoNumbers = arr.slice(-2).map(item=> item+10);
    const middleNumbers = arr.slice(4,-2)
    const newValueArr = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers)
}
digitsArray[12,13,14,15,16,17,18,19,20];
 
//question 5
function newstring(str){
    let newString = " "
    let r= str.length -1
    while (r>=0){
        newString += str.substring(r,r+1);

        r --
    }
    console.log(newString);
}
newString("mary","susan","cathy","Loice");