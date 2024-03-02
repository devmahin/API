const category = document.getElementById("category");
const lodding = document.getElementById("lodding")
console.log(lodding)
async function loadCategory() {
    let api = await fetch("https://openapi.programming-hero.com/api/news/categories")
    let data = await api.json()
    let allCategory = data.data.news_category
    allCategory.forEach(btn => {
        let button = document.createElement("button");
        button.className = "btn allButton btn-primary"
        button.innerText = btn.category_name;
        category.appendChild(button)
        button.addEventListener("click", (event) => {
            lodding.classList.remove("hidden")
            displayShowData(btn.category_id)
            const allButton = document.querySelectorAll(".allButton");
            for (let buttonAll of allButton) {
                buttonAll.classList.remove("bg-red-600")
            }
            button.classList.add("bg-red-600")
        })

    })
}



const allCard = document.getElementById("allCard");
async function displayShowData(id) {
    console.log(id)
    allCard.textContent = "";
    let dataApi = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    let data = await dataApi.json()
    data.data.forEach(obj => {
        // console.log(obj)
        let { thumbnail_url, author, image_url, details, _id, total_view, title, rating } = obj;
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
        <figure><img class="h-[200px] w-[350px]" src="${image_url} alt="Movie" />
        </figure>
        <div class="card-body">
            <div class="flex justify-between gap-x-4\">
            <h2 class="card-title w-10/12">${title.slice(0, 30)}</h2>
            <h2>${rating.badge}<sup>${rating.number}</sup></h2>
            </div>
            <p class="w-9/12">${details.slice(0, 200)}</p>
            <div class="flex justify-between items-center">
                <div class="flex items-center  gap-x-5">
                    <div class="avatar">
                        <div class="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                    <h1>${author.name}</h1>
                    <h1>${author.published_date}</h1>
                 </div>
                </div>
            <h1>${total_view}</h1>
            <button class="btn btn-primary" onclick="detailsInformetin('${_id}')">Details</button>
            </div>
        </div>
    </div>
        `
        allCard.appendChild(div)
        lodding.classList.add("hidden")
    })
}


function handelSearch() {
    const inputValue = document.getElementById("inputValue").value;
    if (inputValue) {
        displayShowData(inputValue)
    } else {
        alert("Please valide input")
    }
}

async function detailsInformetin(id) {
    // console.log(id)
    let dataFetch = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    let data = await dataFetch.json()
    detailsFunction(data.data)
}

const modal_hello = document.getElementById("modal_hello")
function detailsFunction(data) {
    modal_hello.showModal()

    let { total_view, title, rating, thumbnail_url, image_url,details} = data[0];
    // console.log(title)
  
    modal_hello.innerHTML = `
    <div class="modal-box">
    <h3 class="font-bold text-lg">${title}</h3>
    <p class="py-4">${details}</p>
    <div class="modal-action">
        <form method="dialog">
            <button class="btn">Close</button>
        </form>
    </div>
</div>
    `
}

loadCategory()
