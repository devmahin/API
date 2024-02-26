
function loadUser2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => myFunction(data))

}


function myFunction(users) {
    // console.log(users)
    const list = document.getElementById("list")
    
    users.map(val => {
        var li = document.createElement("li")
        li.innerText = val.name
        list.appendChild(li) 
        // console.log(val.name)
    })
}