const Pattern = (n) => {
    // for (let i = 1; i <= n; i++) {
    //     let star = ''
    //     for (let j = 1; j <= i; j++) {
    //         star += '*'
    //     }
    //     console.log(star)
    // }


    // for(let i=1;i<=n;i++){
    //     let star=''
    //     for(j=1;j<=n-i;j++){
    //         star+=' '
    //     }
    //     for(let k=1;k<=i;k++){
    //         star+='*'
    //     }
    //     console.log(star)
    // }

            // or


    // for(let i=1;i<=n;i++){
    //     let star=''
    //     for(j=1;j<=n;j++){
    //         if(j<=n-i){
    //             star+=' '
    //         }else{
    //             star+='*'
    //         }
    //     }
    //     console.log(star)
    // }

    // for(let i=1;i<=n;i++){
    //     let star=''
    //     for(let j=1;j<=n-i+1;j++){
    //         star+='*'
    //     }
    //     console.log(star)
    // }

            // or


    // for(let i=n;i>=1;i--){
    //     let star=''
    //     for(let j=1;j<=i;j++){
    //         star+='*'
    //     }
    //     console.log(star)
    // }


    for(let i=n;i>=1;i--){
        let star=''
        for(let j=1;j<=n-i;j++){
            star+=' '
        }
        for(let k=1;k<=i;k++){
            star+='*'
        }
        console.log(star)
    }

}

Pattern(5)