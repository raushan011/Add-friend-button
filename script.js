var add = document.querySelector("#add");
var remove = document.querySelector('#remove');

    add.addEventListener("click", function(){
        document.querySelector("h5").innerHTML = "Friends"
        document.querySelector("h5").style.color = "green"
        

    })
    remove.addEventListener("click", function(){
        document.querySelector("h5").innerHTML = "Stranger"
        document.querySelector("h5").style.color = "red"
    })