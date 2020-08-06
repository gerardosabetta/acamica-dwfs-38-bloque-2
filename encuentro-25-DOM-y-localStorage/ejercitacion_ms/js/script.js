
// function navbarBackground(){
//     document.getElementById("navbar").classList.add('navbar-light');
//     document.getElementById("navbar").classList.remove('bg-primary');

//     if (document.getElementById("navbar").classList.contains('navbar-light'))
//         document.getElementById("navbar").classList.toggle('navbar-light');

//         // document.getElementById("navbar").classList.add('navbar-light');
//         // document.getElementById("navbar").classList.remove('bg-primary');
    
//         // if (document.getElementById("navbar").classList.contains('bg-primary'))
//         //     document.getElementById("navbar").classList.toggle('navbar-light');
// }


// console.log(y);


// Agregar item
function addItem(){
    let ul = document.querySelector('ul');
    let newLi = document.createElement('li');
    let newA = document.createElement('a');

    newLi.classList.add('nav-item');
    newA.classList.add('nav-link');

    newA.textContent = "New Item";

    newLi.appendChild(newA);
    ul.appendChild(newLi);
}

// Agregar negrita a una palabra

function addBold(){
    let bold = document.getElementById('bold');
    bold.style.fontWeight = 'bold';
}


// Cambio de imagen cada 2 segundos

function changeImg()
{
    var img = document.getElementById("img1");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    setTimeout("changeImg()", 2000);
}

var images = [],
x = 0;

images[0] = "img/airplane-flying-right.png";
images[1] = "img/airplane-flying-left.png";
setTimeout("changeImg()", 2000);



function invertImg() {
    var img = document.getElementById('img2').src;

    if (img.indexOf('img/many-airplanes-right.jpg')!=-1) {
        document.getElementById('img3').src = 'img/many-airplanes-right.jpg';
        document.getElementById('img2').src  = 'img/many-airplanes-left.jpg';
        
    }
     else {
       document.getElementById('img2').src = 'img/many-airplanes-right.jpg';
       document.getElementById('img3').src  = 'img/many-airplanes-left.jpg';
   }
}