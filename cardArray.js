const cardArray = [{
        Image: "./images/snowborder2.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
    },
    {
        Image: "./images/snowborder3.jpg",
        Nome: "Someone",
        Cargo: "Monitor de pista",
    },
   

];

function listCard() {
    let list = document.getElementById("container-list")
    cardArray.forEach(res => {
        const divHTML =
            `<div class="card">
           <div class="content">
          <div class="imgBx"><img src="${res.Image}" alt=""></div>
          <div class="contentBx">
            <h3>${res.Nome}<br><span>${res.Cargo}</span></h3>
          </div>
        </div>
    </div>`

        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = divHTML

        list.appendChild(creatDiv.firstChild)
    })
}

listCard()