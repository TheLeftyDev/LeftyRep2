const url = 'http://localhost:3000/products'
const spaceJS = document.querySelector(".space")




const req = new XMLHttpRequest;
let products = []
req.open("GET", url)
req.onreadystatechange = () =>{
    if(req.readyState == 4){
        console.log(JSON.parse(req.response));
        const obj = JSON.parse(req.response)
        const arr = obj
        arr.forEach(element => {
            const newPrice = Math.round(0.01*element.qiymet*(100 - element.endirim))
            let stars = Math.floor(element.rating)
            let str = ''
            console.log(stars)
            str += 
        `        <div class="card">
        <img src=${element.link} alt=${element.marka} image>
        <h2>Discounted from $${element.qiymet} to $${newPrice}</h2>
        <h4>${element.marka} ${element.ad}</h4>`
    while(stars>0){
        str += `<img src="star png.png" alt="star" style="height: 30px; width: 30px; margin: 0px;">`
        stars--
    }
    str +=` <h3>${element.rating}/5</h3>
    </div>`
    spaceJS.innerHTML += str;
    });
    }
}
req.send()
