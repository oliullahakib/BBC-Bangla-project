const getCategories = () => {
    const url = "https://news-api-fs.vercel.app/api/categories"
    fetch(url).then((res) => res.json()).then((categoriesObj) => makeCategoriesLink(categoriesObj.categories)
    )
}
const makeCategoriesLink = (categories) => {
    let linkContainer = document.getElementById('category-link-container')
    categories.forEach(categorie => {
        linkContainer.innerHTML += `
    <li class="hover:border-b-4 border-rose-700 hover:border-rose-700 cursor-pointer">${categorie.title}</li>
    `
    });

}
document.getElementById('category-link-container').addEventListener("click",(e)=>{
    
    if(e.target.localName ==="li"){
      let allLi =  e.target.parentNode.querySelectorAll('li') 
        allLi.forEach(li=>li.classList.remove('border-b-4'))
        e.target.classList.add('border-b-4')
        
    };
    
})

getCategories()
