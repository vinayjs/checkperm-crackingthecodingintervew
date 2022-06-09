var checkPermute = function(stringOne ,stringTwo){
    if(stringOne.length != stringTwo.length){
        return false
    }else {
        var sortedstringOne = stringOne.split('').sort().join('');
        var sortedstringTwo = stringTwo.split('').sort().join('');
        return sortedstringOne ==sortedstringTwo;
    }
};


console.log(checkPermute("vinay", "nitin"));