const photo = document.getElementById("photo")
console.log(photo);

const photoBtn = document.getElementById("photoBtn")
console.log(photoBtn);

const readingCardWrap = document.querySelector(".readingCardWrap")
console.log(readingCardWrap);

const readingCardText = document.querySelector(".readingCardText")
console.log(readingCardText);

const decideBtn = document.querySelector(".decideBtn")
const redoBtn = document.querySelector(".redoBtn")

let storage = [];

let storageNum = 0;

photoBtn.addEventListener("change",(e)=>{
    const reader = new FileReader();
    reader.onload = (e) =>{
        readingCardWrap.style.backgroundImage = `url(${e.target.result})`;
        // karuta.setAttribute("src",e.target.result);
    }
    reader.readAsDataURL(e.target.files[0])

    readingCardText.style.display = "none"

    // localStorage.setItem("photo1",{img:`${e.target.files[0]}`})

    photo.style.display = "none"
    photoBtn.style.display = "none"

    decideBtn.style.display = "block"
    redoBtn.style.display = "block"

    decideBtn.addEventListener("click",()=>{
        localStorage.setItem(`photo${storageNum}`,{img:`${e.target.files[0]}`})
        readingCardText.style.display = "block"
        readingCardWrap.style.backgroundImage = "none"
        storageNum = storageNum+1;
    })
})

function textEdit(){
    localStorage.setItem(`photo${storageNum}`)
}



