// double values
//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValues(array){
    let newArray=[];
    array.forEach(function(val){
        newArray.push(val *2);
    });
    return newArray;
}

//only eben values
//Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onylyEvenValues(arr){
    let newArr=[];
        arr.forEach(function(val){
            if(val % 2 ===0){
                newArr.push(val);
            }
            });
            return newArr;
        }
         
// show first and last
//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(arr){
    const showArr=[];
    arr.forEach(function(val){
        showArr.push(val[0]+val[arr.length-1]);
    })
    return showArr;
}

// add key and value
//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key]=value;
    });
    return arr;
}

//vowelcount
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str){
    let splitArr=str.split("");
    
    let obj={};
    const vowels="aeiou";
    
    splitArr.forEach(function(letter){
        let lowerCaseletter=letter.toLowerCase();
        if(vowels.indexOf(lowerCaseletter) !== -1){
            if(obj[lowerCaseletter]){
            obj[lowerCaseletter] ++ || 1;
          }else{
              obj[lowerCaseletter]=1;
            }
        }
    });
    return obj;

}
// map
//double value with map
//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap(arr){
    let doubleArr=[];
    arr.map(function(val){
        doubleArr.push(val *2);
    })
return doubleArr;
}

//val times index
//Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr){
return arr.map(function(val,i){
    return val * i;

});
}

//extractkey
//Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr,key){
 return arr.map(function(val){
    return val[key];
 });
}
// extract full name
//Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(arr){
    return arr.map(function(full){
        return full.first+ " "+ full.last;
    })
}

//filter 
//filter by value
//Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(arr,key){
 //   let filterArr=[];
    return arr.filter(function(val){
        for(i=0;i<arr.length;i++){
           return val[key] !==undefined;
                
        } 
    });

    }
//find 
//Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.


function find(arr,searchValue){
 return arr.filter(function(val){

    if(searchValue===val){
        return searchValue;
    }else{
        return undefined;
    }
 })[0];
}

//findInObj   
//Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

   function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  // remove vowels 
  //Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
  function removeVowels(str){
    const vowels='aeiou';
    let lowerCaseletter=str.toLowerCase();
    let split=lowerCaseletter.split("");
    return split.filter(function(val){
        return vowels.indexOf(val)===-1;
    }).join("");
    
  }

  // double Odd Number
  //Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
  function doubleOddNumbers(arr){
    return arr.filter(function(val){
       return val %2 !==0;
        }).map(function(val){
                return val * 2;
            })
        }
 