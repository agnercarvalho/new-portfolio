const categoryTitles = document.querySelectorAll(".category-title");
const categoryContainers = document.querySelectorAll(".category-container");

console.log(categoryTitles)

let previousActivated = "topMenu"

categoryTitles.forEach(title => {
    title.addEventListener("click", e =>{
        if((e.target.attributes.data.nodeValue !== previousActivated)&&(e.target.classList.contains("category-title"))){
            categoryContainers.forEach(category => {
                category.classList.remove("active-height")
                e.target.parentElement.children[1].classList.add("active-height")
                previousActivated = e.target.attributes.data.nodeValue
            });
        }
        e.stopPropagation()
    })
});
