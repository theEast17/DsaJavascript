const Pyramid = (n) => {
    // 1st
    // for (let i = 1; i <= n; i++) {
    //     let row = '';
    //     for (let j = 1; j <= n - i; j++) {
    //         row += ' ';
    //     }
    //     for (let k = 1; k <= 2 * i - 1; k++) {
    //         row += '*';
    //     }
    //     console.log(row);
    // }

    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }

    // 2nd
    // for (let i = 1; i <= n; i++) {
    //     console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i))
    //   }

 


};

Pyramid(5);
