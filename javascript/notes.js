// JavaScript - JS 
function show(){
    document.getElementById("patric").style.display = "block"
}
function hello(){
    let name = prompt("What is your name?", "Koro Sensei")
    document.getElementById("title").innerHTML = "Hello " + name + "!"
}

function enter(){
    document.getElementById("btn").style.color = "white"
    document.getElementById("btn").style.backgroundColor = "green"
}
function down(){
    document.getElementById("btn").style.backgroundColor = "red"
}
function out(){
    document.getElementById("btn").style.color = "black"
    document.getElementById("btn").style.backgroundColor = "lightgrey"
}
let images = ["https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/utahvalley/timpanogoswildflowershrzFworked0_30a2fbec-5056-a36a-0b341a89e6e9b7d9.jpg", "https://images.ctfassets.net/0wjmk6wgfops/5JD8w0POZhQ3qrd67umb3x/20641b214beec98ee856a8b51b278947/1d4f485432_d05d7611-2084-4c25-ac90-807915184a65.jpg?q=70", "https://i.etsystatic.com/37394532/r/il/27e6c7/5018857984/il_fullxfull.5018857984_l9h3.jpg", "https://www.earthdiver.com/cdn-cgi/image/width=2000,quality=75,format=auto/https://assets.earthdiver.com/media/media-2727695.jpg?xxx", "https://images.squarespace-cdn.com/content/v1/63c60d44c98af85334537583/644359f9-c213-4d77-bdb0-b78b7f8424f3/Mount_Timpanogos_at_sunset.jpg", "https://cdn.allparkcity.com/images/content/4887_8924_Mt_Timpanogos_Sundance_Ski_Resort_lg.jpg",  "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Timpanogos_-_01-07-08.jpg"]
let counter = 0

function change(){
    if(counter < images.length){
        document.getElementById("image").src = images[counter]
        counter += 1
    }else{
        counter = 0
        document.getElementById("image").src = images[counter]
    }

}

function popup(){
    window.alert("Don't click this. Really!")
}