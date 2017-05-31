//Tallest Mountain excercise

(function() {
console.log("************************************");
console.log("Tallest Mountain solution");
var MountHeights = [350, 122, 57, 5765, 34, 4];
var maxheight= MountHeights.sort(function(a, b){return b-a});
console.log(maxheight);
console.log(maxheight[0]);
var minheight= MountHeights.sort(function(a, b){return a-b});
console.log(minheight);
console.log(minheight[0]);

})();


//change Machine excercise

 (function() {

var Amount = 147;
var bills = [20, 10, 5, 1];
var count = [];
var billcount;
console.log("************************************");
console.log("Change Machine solution");
for(let i=0; i< bills.length; i++)
{
    billcount = Math.floor(Amount/bills[i]);
    count.push(billcount);
    Amount = (Amount - (billcount*bills[i]));
}
console.log(147 + " is splitted into " + bills + " bills in the following order " + count);

})();
//***************************************************

//HarePopulation excercise

(function() {

var startpopulation = 200;
var birthrate = 0.1;
var numofweeks = 5;
console.log("************************************");
console.log("HarePopulation solution");
FuturePopulation = startpopulation + (startpopulation * birthrate * numofweeks);
console.log("There will be " + FuturePopulation +  " Cherokee Hares after " + numofweeks + " weeks");

})();

//***************************************************

// Letter Occurance
(function() {
var word ="Hangman lite";
var letter = 'a';
var index;
index = word.indexOf(letter);
//console.log(index);
var count = 0;
console.log("************************************");
console.log("Letter Occurance in the word solution");
while(index !== -1){
  count++;
  index = word.indexOf(letter, index+1);
  //console.log(index);
}
console.log(letter + " present in the Hangaman Lite word " + count + " times");

})();

//***************************************************

// Palindrome check solution
(function() {

 var word = "kayak";
 var splitString = word.split("");
 //console.log(splitString);
 var reverseArray = splitString.reverse();
 //console.log(reverseArray);
 var joinArray = reverseArray.join("");
 console.log("************************************");
 console.log("Palindrome Word Check solution");
 // Word comparison
 if (word == joinArray)
 {
   console.log(word + " & " + joinArray + " are matching :true");
 }
 else {
   console.log(word + " & " + joinArray + " are not matching :false");
 };

 // each letter comparison
 for(let i=0; i< splitString.length; i++)
 {
   if(splitString[i] == reverseArray[splitString.length-1-i]){
   console.log(splitString[i] + " and " + reverseArray[splitString.length-1-i] + " are matching");
 }
   else{
     console.log(splitString[i] + " and " + reverseArray[splitString.length-1-i] + " are not matching");
   }
 }
})();
