// gera os cards da div
const cardArray = [{
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
        flagsImg: ["./images/PS.png", "./images/EUA2.png","./images/PS.png"]
    },
    {
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
        flagsImg: ["./images/PS.png", "./images/EUA2.png","./images/PS.png"]
    },
    {
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
        flagsImg: ["./images/PS.png", "./images/EUA2.png","./images/PS.png"]
    },
    {
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
        flagsImg: ["./images/PS.png", "./images/EUA2.png","./images/PS.png"]
    },
    {
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
        flagsImg: ["./images/PS.png", "./images/EUA2.png","./images/PS.png"]
    },


];

// Funcão para criar os cards
function listCard() {
    let list = document.getElementById("container-list")
    cardArray.forEach(res => {
        const divHTML =
            `<div class="card">
           <div class="content">
          <div class="imgBx"><img src="${res.Image}" alt=""></div>
          <div class="contentBx">
            <h3>${res.Nome}<br><span>${res.Cargo}</span></h3>
            <div class="flags">
            <span><img src="${res.flagsImg[0]}" alt=""></span>
            <span><img src="${res.flagsImg[1]}" alt=""></span>
            <span><img src="${res.flagsImg[2]}" alt=""></span>
        </div>
          </div>
        </div>
    </div>`

        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = divHTML

        list.appendChild(creatDiv.firstChild)
    })
}

listCard()