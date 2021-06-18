let BikeArr = []

window.addEventListener("load", () => {
    var xhttp = new XMLHttpRequest();
    if(window.localStorage.getItem("nrBikes") == null)
        window.localStorage.setItem("nrBikes", "0");
    xhttp.open("GET", "/Bikes.json", true);
    xhttp.send();
    xhttp.onreadystatechange = (data) => {
        if (data.currentTarget.readyState == 4 && data.currentTarget.status == 200) {
            bikes = data.currentTarget.responseText
            bikeCount = JSON.parse(bikes)["bikes"]
            
            for (let i = 0; i < bikeCount.length; i++) {
                bike = new Bike(bikeCount[i].name, bikeCount[i].weight, bikeCount[i].image, bikeCount[i].id);
                BikeArr.push(bike);
                $("#catalog").append(
                    `<div class="card mx-2" style="width: 18rem;">
                        <img src="${bike.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${bike.name}</h5>
                            <p class="card-text">${bike.weight}</p>
                            <a href="#" class="btn btn-primary" onclick="addFavorite('${bike.id}')">Add to favorites</a>
                        </div>
                    </div>`)
            }
        }
    }
})

class Bike {
    constructor(name, weight, image, id) {
        this.name = name;
        this.weight = weight;
        this.image = image;
        this.id = id;
    }
}
function addFavorite(id){
    console.log(id);
    bike=BikeArr[BikeArr.findIndex((element) =>(element.id==id))];
    window.localStorage.setItem("bike" + window.localStorage.getItem("nrBikes"), JSON.stringify(bike));
    window.localStorage.setItem("nrBikes", parseInt(window.localStorage.getItem("nrBikes")) + 1);
}
