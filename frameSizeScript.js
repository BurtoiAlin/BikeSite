function sizeCalculator(){
    var height = document.getElementById("height").value;
    var inseam = document.getElementById("inseam").value;
    
    $("#sizeResult").empty()
    if(height<148 ||height>200){
        document.getElementById("height").value = "";
        document.getElementById("inseam").value = "";
        $("#sizeResult").append("Height out of chart range.\nReenter value.");
        return;
    }
    if(inseam<60 ||inseam>93){
        document.getElementById("height").value = "";
        document.getElementById("inseam").value = "";
        $("#sizeResult").append("Inseam out of chart range.\nReenter value.");
        return;
    }
    if((height>=148 && height<=158) && (inseam>=60 && inseam<=73)){
        $("#sizeResult").append("XS  12-14 inch frame");
        window.sessionStorage.setItem("lastSize", "XS  12-14 inch frame");
        return;
    }
    else if((height>=158 && height<=168) && (inseam>=63 && inseam<=76)){
        $("#sizeResult").append("S  14-16 inch frame");
        window.sessionStorage.setItem("lastSize", "S  14-16 inch frame");
        return;
    }
    else if((height>=168 && height<=178) && (inseam>=66 && inseam<=78)){
        $("#sizeResult").append("M 16-18 inch frame");
        window.sessionStorage.setItem("lastSize", "M 16-18 inch frame");
        return;
    }
    else if((height>=178 && height<=185) && (inseam>=68 && inseam<=84)){
        $("#sizeResult").append("L  18-20 inch frame");
        window.sessionStorage.setItem("lastSize", "L  18-20 inch frame");
        return;
    }
    else if((height>=185 && height<=193) && (inseam>=71 && inseam<=89)){
        $("#sizeResult").append("XL 20-22 inch frame");
        window.sessionStorage.setItem("lastSize", "XL 20-22 inch frame");
        return;
    }
    else if((height>=193 && height<=200) && (inseam>=73 && inseam<=93)){
        $("#sizeResult").append("XXL 22+ inch frame");
        window.sessionStorage.setItem("lastSize", "XXL 22+ inch frame");
        return;
    }
    else{
        $("#sizeResult").append("With this informations we cannot recomend a proper fitment");
        document.getElementById("height").value = "";
        document.getElementById("inseam").value = "";
        return;
    }
}

function lastSize(){
    $("#lastSize").empty();
    $("#lastSize").append("Last calculated value:  " + window.sessionStorage.getItem("lastSize"));
}

function reset(){
    $("#sizeResult").empty();
    document.getElementById("height").value = "";
    document.getElementById("inseam").value = "";
}