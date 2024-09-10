function Prefix(strArr){

    let prefix=strArr[0];

    // for(let i=1;i<prefix.length;i++){
    //     while(strArr[i].indexOf(prefix)!==0){
    //         prefix=prefix.slice(0,prefix.length-1)
    //     }
    // }

    for(let i=1;i<strArr.length;i++){
        for(let j=0;j<prefix.length;j++){
            if(prefix[j]===strArr[i][j]){
                continue
            }else{
                prefix=prefix.slice(0,j)
            }
        }
    }

    console.log(prefix)

}


Prefix(['flower','floy','flot','floght'])


