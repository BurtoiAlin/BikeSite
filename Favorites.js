
window.addEventListener("load", () => {
    n=parseInt(window.localStorage.getItem("nrBikes"));
    keys=Object.keys(localStorage);
    for(let i=0; i< keys.length;i++){
        if(keys[i].startsWith("bike")){
        bike=JSON.parse(window.localStorage.getItem(keys[i]));
        console.log(bike);
        $("#favorites").append(
                    `<div class="card mx-2" style="width: 18rem;" id="${keys[i]}">
                        <img src="${bike.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${bike.name}</h5>
                            <p class="card-text">${bike.weight}</p>
                            <a href="#" class="btn btn-danger" onclick="remove('${keys[i]}')">Remove</a>
                        </div>
                    </div>`)
        }
        }})

function remove(id){
    window.localStorage.removeItem(id)
    $("#"+id).remove()
    window.localStorage.setItem("nrBikes", parseInt(window.localStorage.getItem("nrBikes"))-1)
}