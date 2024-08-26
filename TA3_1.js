const imagen = document.getElementById('imagen');

imagen.addEventListener('mouseover', function () {
    imagen.src = 'https://vanguardia.com.mx/binrepository/855x1024/0c111/855d801/none/11604/STIX/cr7_14_VG3388694_MG2033958.jpg';
});

imagen.addEventListener("mouseout",function(){
    imagen.src= "img1.jpg"
});