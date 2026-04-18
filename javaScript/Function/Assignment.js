//Qs2.WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”
let str="abcdabcdefgggh";
function uniqueCharacters(str){
    let unique="";
    for(let i=0;i<str.length;i++){
        if(unique.indexOf(str[i])===-1){
            unique+=str[i];
        }
    }
    return unique;
}
console.log(uniqueCharacters(str));