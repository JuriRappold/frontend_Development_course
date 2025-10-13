const API = `https://jsonplaceholder.typicode.com`;
const byID = (id) => document.getElementById(id);
const show = (el, ...things) => {
    el.textContent += things.map(t =>
        typeof t === 'string' ? t : JSON.stringify(t, null, 2)
    ).join(' ') + '\n';
};
const clear = (el) => el.textContent="";


//SYNC
byID("syncBtn").onclick = () => {
    const log = byID("log")
    clear(log)
    show(log, 'Start')
    let sum = 0
    for(let i = 0; i < 1e10; i++){
        sum+=i;
    }
    show(log,'sum= ' ,sum)
    show(log, 'End')
}


//ASYNC
byID("asyncBtn").onclick = () => {
    const log = byID("log1"); clear(log);
    show(log, 'Start');
    setTimeout(() => show(log, 'setTimeout callback'), 5000);
    Promise.resolve()
        .then(
            () => show(log, 'Promise microtask')
        )
    show(log, 'END')
}

//Callbacks
function getUserCB(id, cb){
    setTimeout(() => cb(null, {id, name: 'Ada'}), 300);
}

function getPostCB(userID, cb){
    setTimeout(() => cb(null, [{id: 1, userID , title: 'Callback post'}]), 300)
}

function getCommentsCB(postID, cb){
    setTimeout(() => cb(null, [{id: 100, postID, body: 'Nice!'}]), 300)
}
//callback hell
byID('cbBtn').onclick = () => {
    const log = byID('log2'); clear(log)
    show(log, "Fetching with callbacks...");
    getUserCB(7, (e, user) => {
        if (e) return show(log, "Error:", e)
        getPostCB(user.id, (e, posts) => {
            if (e) return show(log, "Error:", e)
            getCommentsCB(posts[0].id, (e, comments) => {
                if (e) return show(log, "Error:", e)
                show(log, {user, post: posts[0], comments: comments[0]})
            })
        })
    })
}

//promises
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const getUserP = (id) => delay(250).then( () => ({id, name: 'Ada'}));
const getPostP = (userID) => delay(250).then( () => [{id: 1, userID, title: 'Promise post'}]);
const getCommentP = (postID) => delay.then( () => [{id: 100, postID, body: 'Great Promises!'}]);

byID('prBtn').onclick = () => {
    const log = byID("log2"); clear(log);

    getUserP(7)
        .then(user => {
            show(log, "user: ", user);
            return getPostP(user.id)
        })
        .then(posts => {
            show(log, "posts: ", posts);
            return getCommentP(posts[0].id)//some more code

        })
        .then(result => show(log, "Result", result))
        .catch(err => show(log, "Error: ", err.message))
        .finally(() => show(log, "Finally (settled)"))
}