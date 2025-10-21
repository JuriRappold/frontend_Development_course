async function cachedFetch(url, maxAge = 60000){
    const cached = localStorage.getItem(url);
    if(cached) {
        const {timestamp, data} = JSON.parse(cached);

        if (Date.now() - timestamp < maxAge) {

            console.log("returning from local storage");
            return data;
        }
    }

    console.log("Fetching from network...");
    const response = await fetch(url);
    const data =  await response.json();

    localStorage.setItem(url, JSON.stringify({timestamp: Date.now(), data}))

    return data;
}

cachedFetch("https://dummyjson.com/posts").then(console.log);