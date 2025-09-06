const getCategories = () => {
    const url = "https://news-api-fs.vercel.app/api/categories"
    fetch(url).then((res) => res.json()).then((categoriesObj) => makeCategoriesLink(categoriesObj.categories)
    )
}
const makeCategoriesLink = (categories) => {
    let linkContainer = document.getElementById('category-link-container')
    categories.forEach(categorie => {
        linkContainer.innerHTML += `
    <li class="hover:border-b-4 hover:border-rose-700 cursor-pointer">${categorie.title}</li>
    `
    });

}
getCategories()
