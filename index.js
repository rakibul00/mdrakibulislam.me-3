let loadMoreBtn = document.querySelector("#load-more");
let currentIte = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll(".container .box-container .box")];
    for(var i =currentIte; i < currentIte + 3; i++){
        boxes[i].style.display = "inline-block";
    }
    currentIte += 3;

    if(currentIte>= boxes.length){
        loadMoreBtn.style.display = "none";
    }
}