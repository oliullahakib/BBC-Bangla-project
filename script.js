const getCategories = () => {
    const url = "https://news-api-fs.vercel.app/api/categories"
    fetch(url).then((res) => res.json()).then((categoriesObj) => makeCategoriesLink(categoriesObj.categories)
    ).catch((err) => console.log(err))
}
const makeCategoriesLink = (categories) => {
    let linkContainer = document.getElementById('category-link-container')
    categories.forEach(categorie => {
        linkContainer.innerHTML += `
    <li id = ${categorie.id} onclick=getNews('${categorie.id}') class="hover:border-b-4 border-rose-700 hover:border-rose-700 cursor-pointer">${categorie.title}</li>
    `
    });
document.getElementById('main').classList.add('border-b-4')
}

const getNews = (id) => {

    let url = `https://news-api-fs.vercel.app/api/categories/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((categorieNews) => showCategoreNews(categorieNews.articles))

}
const showCategoreNews = (articles) => {

    let newsContainer = document.getElementById('news-card-container')
    newsContainer.innerHTML = ""
    articles.forEach(article => {
        newsContainer.innerHTML += `
    <div class="news-card ">
                    <img class="mx-auto"
                        src="${article.image.srcset[0].url}"
                        alt="">
                    <div class="px-2 mt-3">
                        <h2 class="text-xl font-medium">${article.title}</h2>
                        <p class="text-gray-500">${article.time}</p>
                    </div>
                    <div class="mt-3">
                        <button class="btn">Details</button>
                        <button class="btn">BookMark</button>
                    </div>
                </div>
    `

    })

   
}
document.getElementById('category-link-container').addEventListener("click", (e) => {
document.getElementById('main').classList.remove('border-b-4')
    if (e.target.localName === "li") {
        let allLi = e.target.parentNode.querySelectorAll('li')
        allLi.forEach(li => li.classList.remove('border-b-4'))
        e.target.classList.add('border-b-4')
        document.getElementById('section-heading').innerText = e.target.innerText;
        
    };

})

getNews('main')
getCategories()
