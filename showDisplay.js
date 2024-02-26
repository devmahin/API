
function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(res => showFunction(res))

}

const show = document.getElementById("show");

function showFunction(data){
    for(let datas of data){
        // console.log(datas)
        const {id,title,body} = datas;
        console.log(id)
        show.innerHTML +=   `
            <h1>${id}</h1>
            <h2>${title}</h2>
            <p>${body}</p>
             `
    }
}

loadUsers()