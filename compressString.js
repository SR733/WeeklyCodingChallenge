/*Implement a method to perform basic 
string compression using the counts 
of repeated characters. For example, 
the string aabcccccaaa would become 
a2blc5a3. If the "compressed" string 
would not become smaller than the 
original string, your method should 
return the original string. You can 
assume the string has only uppercase 
and lowercase letters (a - z)*/



function compressString(str){
    let compStr = "";
    let currentLetter = str.charAt(0);
    let letterCount = 0;

    for(let i = 0; i < str.length; i++){
        if(currentLetter == str.charAt(i)){
            letterCount++;
        } else {
            compStr += currentLetter + letterCount;
            letterCount = 1;
            currentLetter = str.charAt(i);
        }
    }
    compStr+= currentLetter + letterCount;
    if(compStr.length < str.length){
        return compStr
    } else {
        return str
    }
}

console.log(compressString('aaabbb'));