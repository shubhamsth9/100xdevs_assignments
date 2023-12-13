// Function that takes n as an argument and runs a counter from 1 to n in an interval of 1 second

function myCustomSetTimeout(i){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}

function counter(n){
    let i = 1;
    // using setInterval
    // const intervalId = setInterval(() => {
    //     if(i === n) clearInterval(intervalId);
    //     console.log(i);
    //     i += 1;
    // }, 1000);

    // without using setInterval
    while(i <= n){
        myCustomSetTimeout(i);
        i += 1;
    }

}

counter(3);