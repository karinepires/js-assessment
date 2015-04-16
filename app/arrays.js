if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var posItem = arr.indexOf(item);
        while(posItem !== -1){
            //arr = arr.slice(0,posItem).concat( arr.slice(posItem+1,arr.length) );
            arr.splice(posItem, 1);
            // delete arr[posItem];
            posItem = arr.indexOf(item);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var posItem = arr.indexOf(item);
        while(posItem !== -1){
            //arr = arr.slice(0,posItem).concat( arr.slice(posItem+1,arr.length) );
            arr.splice(posItem, 1);
            // delete arr[posItem];
            posItem = arr.indexOf(item);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr = [item].concat(arr);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        arr1 = arr1.concat(arr2);
        return arr1;
    },

    insert : function(arr, item, index) {
        arr = arr.slice(0,index).concat( item, arr.slice(index,arr.length) );
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item){
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var countItems = {};
        var duplicatesItems = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] in countItems && countItems[arr[i]] === 1){
                duplicatesItems.push(arr[i]);
                countItems[arr[i]] += 1;
            }else{
                countItems[arr[i]] = 1;
            }
        }
        return duplicatesItems;
    },

    square : function(arr) {
        arr = arr.map(function(x){ return Math.pow(x,2);} );
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var indexOccurences = [];
        var indexSearch = 0;
        var findAt = arr.indexOf(target, indexSearch);
        while(findAt !== -1){
            indexOccurences.push(findAt);
            indexSearch = findAt+1;
            findAt = arr.indexOf(target, indexSearch);
        }
        return indexOccurences;
    }
  };
});
