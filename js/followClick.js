const followButton = document.querySelectorAll("span.clickable");

console.log(typeof followButton);

followButton.forEach(item=>{
    item.addEventListener("click", ()=>{
        if(item.classList.contains("following")) {
            item.classList.remove("following");
            item.classList.add("follow");
            item.innerHTML = 'Follow <i class="fas fa-plus-circle"></i>';
        }else{
            item.classList.remove("follow");
            item.classList.add("following");
            item.innerHTML = 'Following<i class="fas fa-check-circle"></i>';
        }
    })
})