// double values
function doubleValues(array){
    let newArray=[];
    array.forEach(function(val){
        newArray.push(val *2);
    });
    return newArray;
}

//only eben values
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

function showFirstAndLast(arr){
    const showArr=[];
    arr.forEach(function(val){
        showArr.push(val[0]+val[arr.length-1]);
    })
    return showArr;
}

// add key and value
const arr=[
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Happy'}
];
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key]=value;
    });
    return arr;
}

//vowelcount
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
function doubleValuesWithMap(arr){
    let doubleArr=[];
    arr.map(function(val){
        doubleArr.push(val *2);
    })
return doubleArr;
}

//val times index
function valTimesIndex(arr){
return arr.map(function(val,i){
    return val * i;

});
}

//extractkey

function extractKey(arr,key){
 return arr.map(function(val){
    return val[key];
 });
}
// extract full name
function extractFullName(arr){
    return arr.map(function(full){
        return full.first+ " "+ full.last;
    })
}

//filter 
//filter by value
function filterByValue(arr,key){
 //   let filterArr=[];
    return arr.filter(function(val){
        for(i=0;i<arr.length;i++){
           return val[key] !==undefined;
                
        } 
    });

    }
//find 
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

   function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  // remove vowels 
  function removeVowels(str){
    const vowels='aeiou';
    let lowerCaseletter=str.toLowerCase();
    let split=lowerCaseletter.split("");
    return split.filter(function(val){
        return vowels.indexOf(val)===-1;
    }).join("");
    
  }

  // double Odd Number
  function doubleOddNumbers(arr){
    return arr.filter(function(val){
       return val %2 !==0;
        }).map(function(val){
                return val * 2;
            })
        }
 