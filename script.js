function firstNonRepeatedChar(str){
    str = str.toLowerCase();
    if(str.length==0) return null;
    let obj = {};
    
    for(let i=0; i<str.length; i++){
        let ele = str[i];
        if(obj[ele]){
            obj[ele]++
        }
        else{
            obj[ele]=1
        }
    }
    for(let key in obj){
        if(obj[key]==1) return key
    }
    return null
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

