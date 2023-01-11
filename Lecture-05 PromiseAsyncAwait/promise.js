function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log("Demo!!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then(() => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error!");
    });