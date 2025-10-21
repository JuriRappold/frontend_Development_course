const fetchCache = {};
async function cachedFetch(url) {
    if (fetchCache[url]){
        console.log("Returning from cache...");

    }
}