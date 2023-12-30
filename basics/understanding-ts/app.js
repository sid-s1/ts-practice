var names = ["Max", "Manuel"];
// OR
var names2 = []; // same as writing string[]
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is done");
    }, 2000);
});
promise.then(function (data) {
    // But we cannot perform string operations here because TS is not able to check whether or not that is doable - IF Promise<string> is not done in Line 4
});
