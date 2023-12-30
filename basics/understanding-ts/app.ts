const names = ["Max","Manuel"];
// OR
const names2 : Array<string> = []; // same as writing string[]
const promise: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
promise.then(data => {
    // But we cannot perform string operations here because TS is not able to check whether or not that is doable - IF Promise<string> is not done in Line 4
});