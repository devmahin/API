
function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(res => showFunction(res))

}

const show = document.getElementById("show");

function showFunction(data){

    for(let datas of data){
        // console.log(datas)
        let div = document.createElement("div");
        const {id,title,body} = datas;
        console.log(id)
        div.innerHTML +=   `
            <h1>${id}</h1>
            <h2>${title}</h2>
            <p>${body}</p>
             `
    show.appendChild(div)
    }
}

loadUsers()