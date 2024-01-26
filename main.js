var acc = document.getElementsByClassName("accordion");
var dropTransf = document.getElementsByClassName("imgdrop");
var dropCrip = document.getElementsByClassName("imgdropB");

window.addEventListener("load", () => {
  // let button = document.getElementById("button-pay").checked = false;

  imgMetodo = document.getElementById("imgMetodo");
  imgMetodo.src = "./recursos/tarjeta.png";

  //Efecto card producto
  document.getElementById('active-card').classList.toggle('card-active');

    //Efectos para accordion e imagenes
    slideImg();
    acc[0].classList.toggle("active");

    var panelA = acc[0].nextElementSibling;
    if (!panelA.style.maxHeight) {
        panelA.scrollHeight = 180;
        panelA.style.maxHeight = panelA.scrollHeight + 21 +"px";
        console.log(panelA.scrollHeight);
      }

    acc[0].addEventListener("click", (e) => {
        e.stopPropagation();
        acc[0].classList.toggle("active");
        acc[1].classList.remove("active");
        acc[2].classList.remove("active");
        acc[3].classList.remove("active");
        acc[4].classList.remove("active");
    
        var panelA = acc[0].nextElementSibling;
        var panelB = acc[1].nextElementSibling;
        var panelC = acc[2].nextElementSibling;
        var panelD = acc[3].nextElementSibling;
        var panelE = acc[4].nextElementSibling;

        if (panelA.style.maxHeight) {
            
            panelA.style.maxHeight = null;
            dropTransf[0].classList.toggle("acimg");
            dropTransf[1].classList.toggle("acimg");
            dropTransf[2].classList.toggle("acimg");
            dropTransf[3].classList.toggle("acimg");
            removeSlide();

        } else {
          panelA.style.maxHeight = panelA.scrollHeight + 21 + "px";
          panelB.style.maxHeight = null;
          panelC.style.maxHeight = null;
          panelD.style.maxHeight = null;
          panelE.style.maxHeight = null;

            slideImg();
            
          dropCrip[0].classList.toggle("acimg");
          dropCrip[1].classList.toggle("acimg");
          dropCrip[2].classList.toggle("acimg");
            removeSlideCrip();

          imgMetodo.src = "./recursos/tarjeta.png";
          document.getElementById("text-change").innerText = "Completar pedido";

          // remover requerido de stripe
          document.getElementById("inputNumero").setAttribute("required", "");
          document.getElementById("inputDate").setAttribute("required", "");
          document.getElementById("inputVerifi").setAttribute("required", "");
        } 
    })
    acc[1].addEventListener("click", (e) => {
        e.stopPropagation();
        //Slide transfer
        dropTransf[0].classList.toggle("acimg");
        dropTransf[1].classList.toggle("acimg");
        dropTransf[2].classList.toggle("acimg");
        dropTransf[3].classList.toggle("acimg");
        removeSlide();

        dropCrip[0].classList.toggle("acimg");
        dropCrip[1].classList.toggle("acimg");
        dropCrip[2].classList.toggle("acimg");
        removeSlideCrip();

        acc[1].classList.toggle("active");
        acc[0].classList.remove("active");
        acc[2].classList.remove("active");
        acc[3].classList.remove("active");
        acc[4].classList.remove("active");
    
        var panelA = acc[1].nextElementSibling;
        var panelB = acc[0].nextElementSibling;
        var panelC = acc[2].nextElementSibling;
        var panelD = acc[3].nextElementSibling;
        var panelE = acc[4].nextElementSibling;
        if (panelA.style.maxHeight) {
          panelA.style.maxHeight = null;
        } else {
          panelA.style.maxHeight = panelA.scrollHeight + 21 + "px";
          panelB.style.maxHeight = null;
          panelC.style.maxHeight = null;
          panelD.style.maxHeight = null;
          panelE.style.maxHeight = null;

          imgMetodo.src = "./recursos/binance.png";
          document.getElementById("text-change").innerText = "Completar pedido";

          // remover requerido de stripe
          document.getElementById("inputNumero").removeAttribute("required");
          document.getElementById("inputDate").removeAttribute("required");
          document.getElementById("inputVerifi").removeAttribute("required");
        } 
    })
    acc[2].addEventListener("click", (e) => {
      e.stopPropagation();
        //Slide transfer
        dropTransf[0].classList.toggle("acimg");
        dropTransf[1].classList.toggle("acimg");
        dropTransf[2].classList.toggle("acimg");
        dropTransf[3].classList.toggle("acimg");

        removeSlide();

        acc[2].classList.toggle("active");
        acc[0].classList.remove("active");
        acc[1].classList.remove("active");
        acc[3].classList.remove("active");
        acc[4].classList.remove("active");
    
        var panelA = acc[2].nextElementSibling;
        var panelB = acc[0].nextElementSibling;
        var panelC = acc[1].nextElementSibling;
        var panelD = acc[3].nextElementSibling;
        var panelE = acc[4].nextElementSibling;
       
        if (panelA.style.maxHeight) {
          panelA.style.maxHeight = null;

          dropCrip[0].classList.remove("slideImg");
          dropCrip[1].classList.remove("slideImg");
          dropCrip[2].classList.remove("slideImg");

          dropCrip[0].classList.toggle("acimg");
          dropCrip[1].classList.toggle("acimg");
          dropCrip[2].classList.toggle("acimg");
            removeSlideCrip();

        } else {
          panelA.style.maxHeight = panelA.scrollHeight + 21 + "px";
          panelB.style.maxHeight = null;
          panelC.style.maxHeight = null;
          panelD.style.maxHeight = null;
          panelE.style.maxHeight = null;

          slideImgCrip()

          imgMetodo.src = "./recursos/Bitcoin.svg.png";
          document.getElementById("text-change").innerText = "Completar pedido";

          // remover requerido de stripe
          document.getElementById("inputNumero").removeAttribute("required");
          document.getElementById("inputDate").removeAttribute("required");
          document.getElementById("inputVerifi").removeAttribute("required");
        } 
        
    })

    acc[3].addEventListener("click", (e) => {
      e.stopPropagation();
        //Slide transfer
        dropTransf[0].classList.toggle("acimg");
        dropTransf[1].classList.toggle("acimg");
        dropTransf[2].classList.toggle("acimg");
        dropTransf[3].classList.toggle("acimg");
        removeSlide();

        
        dropCrip[0].classList.toggle("acimg");
        dropCrip[1].classList.toggle("acimg");
        dropCrip[2].classList.toggle("acimg");
        removeSlideCrip();

        acc[3].classList.toggle("active");
        acc[0].classList.remove("active");
        acc[1].classList.remove("active");
        acc[2].classList.remove("active");
        acc[4].classList.remove("active");
    
        var panelA = acc[3].nextElementSibling;
        var panelB = acc[0].nextElementSibling;
        var panelC = acc[1].nextElementSibling;
        var panelD = acc[2].nextElementSibling;
        var panelE = acc[4].nextElementSibling;
        if (panelA.style.maxHeight) {
          panelA.style.maxHeight = null;
        } else {
          panelA.style.maxHeight = panelA.scrollHeight + 21 + "px";
          panelB.style.maxHeight = null;
          panelC.style.maxHeight = null;
          panelD.style.maxHeight = null;
          panelE.style.maxHeight = null;

          imgMetodo.src = "./recursos/paypal.png";
          document.getElementById("text-change").innerText = "Completar pedido";

          // remover requerido de stripe
          document.getElementById("inputNumero").removeAttribute("required");
          document.getElementById("inputDate").removeAttribute("required");
          document.getElementById("inputVerifi").removeAttribute("required");
        } 
    })

    acc[4].addEventListener("click", (e) => {
      e.stopPropagation();
        //Slide transfer
        dropTransf[0].classList.toggle("acimg");
        dropTransf[1].classList.toggle("acimg");
        dropTransf[2].classList.toggle("acimg");
        dropTransf[3].classList.toggle("acimg");
        removeSlide();

        
        dropCrip[0].classList.toggle("acimg");
        dropCrip[1].classList.toggle("acimg");
        dropCrip[2].classList.toggle("acimg");
        removeSlideCrip();

        acc[4].classList.toggle("active");
        acc[0].classList.remove("active");
        acc[1].classList.remove("active");
        acc[2].classList.remove("active");
        acc[3].classList.remove("active");
    
        var panelA = acc[4].nextElementSibling;
        var panelB = acc[0].nextElementSibling;
        var panelC = acc[1].nextElementSibling;
        var panelD = acc[2].nextElementSibling;
        var panelE = acc[3].nextElementSibling;
        if (panelA.style.maxHeight) {
          panelA.style.maxHeight = null;
        } else {
          panelA.style.maxHeight = panelA.scrollHeight + 610 + "px";
          panelB.style.maxHeight = null;
          panelC.style.maxHeight = null;
          panelD.style.maxHeight = null;
          panelE.style.maxHeight = null;
          
          imgMetodo.src = "./recursos/WhatsApp.svg.webp";

          document.getElementById("text-change").innerText = "Enviar comprobante";

          // remover requerido de stripe
          document.getElementById("inputNumero").removeAttribute("required");
          document.getElementById("inputDate").removeAttribute("required");
          document.getElementById("inputVerifi").removeAttribute("required");
        } 
    })

    //Accordion transferencia direccta
    var accx = document.getElementsByClassName("imgacc");

    accx[0].addEventListener("click", function(e) {
      e.stopPropagation();

      accx[0].classList.toggle("active");
      accx[1].classList.remove("active");
      accx[2].classList.remove("active");
      
      var panelA = accx[0].nextElementSibling;
      var panelB = accx[1].nextElementSibling;
      var panelC = accx[2].nextElementSibling;
      if (panelA.style.display === "flex") {
        panelA.style.display = "none";
      } else {
        panelA.style.display = "flex";
        panelB.style.display = "none";
        panelC.style.display = "none";
      }
    });
    accx[1].addEventListener("click", function(e) {
      e.stopPropagation();
      
      accx[0].classList.remove("active");
      accx[1].classList.toggle("active");
      accx[2].classList.remove("active");
      
      var panelA = accx[0].nextElementSibling;
      var panelB = accx[1].nextElementSibling;
      var panelC = accx[2].nextElementSibling;
      if (panelB.style.display === "flex") {
        panelB.style.display = "none";
      } else {
        panelA.style.display = "none";
        panelB.style.display = "flex";
        panelC.style.display = "none";
      }
    });
    accx[2].addEventListener("click", function(e) {
      e.stopPropagation();
      
      accx[0].classList.remove("active");
      accx[1].classList.remove("active");
      accx[2].classList.toggle("active");
      
      var panelA = accx[0].nextElementSibling;
      var panelB = accx[1].nextElementSibling;
      var panelC = accx[2].nextElementSibling;
      if (panelC.style.display === "flex") {
        panelC.style.display = "none";
      } else {
        panelA.style.display = "none";
        panelB.style.display = "none";
        panelC.style.display = "flex";
      }
    });

  })
  //validar formulario
  //primera comprobación o validación en algún campo del formulario
  function validacion() { 

    let valor = document.getElementById("inputEmail").value;

   //Expresión Regular Email
    var ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    var ExpRegLetrasEspacio="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    
    //Evaluación de Cadena Valida de Email 
    if(valor.match(ExpRegEmail)!=null) {
      alert("Email válido");
      //Expresion Regular Letras con Espacio
      valor = document.getElementById("clientName").value;
      //Evaluación de Cadena Valida de Letras con Espacio 
      if(valor.match(ExpRegLetrasEspacio)!=null) {
        alert("Nombre válido");

        valor = document.getElementById("lastName").value;
        if(valor.match(ExpRegLetrasEspacio)!=null) {
          alert("Apellido Valido");
          return true;

        } else {
          alert("Apellido invalido");
          return false;
        }

      } else {
        alert("Nombre inválido");
          return false;
      }

    } else {
      alert("Email inválido");
          return false;
    }
  }

//efecto imagenes acordeon
function slideImg() {
    var dropTransf = document.getElementsByClassName("imgdrop");

    setTimeout(() => {
        dropTransf[3].classList.toggle("slideImg");

        setTimeout(() => {
            dropTransf[2].classList.toggle("slideImg");

          setTimeout(() => {
            dropTransf[1].classList.toggle("slideImg");

            setTimeout(() => {
                dropTransf[0].classList.toggle("slideImg");
              
            }, "70");
          }, "60");
        }, "50");
      }, "50");
}

function removeSlide() {
    var dropTransf = document.getElementsByClassName("imgdrop");
    
    dropTransf[0].classList.toggle("acimg");
    dropTransf[1].classList.toggle("acimg");
    dropTransf[2].classList.toggle("acimg");
    dropTransf[3].classList.toggle("acimg");
    
    dropTransf[0].classList.remove("slideImg");
    dropTransf[1].classList.remove("slideImg");
    dropTransf[2].classList.remove("slideImg");
    dropTransf[3].classList.remove("slideImg");
}
function slideImgCrip() {
    var dropTransf = document.getElementsByClassName("imgdropB");

    setTimeout(() => {
        dropTransf[2].classList.toggle("slideImg");

        setTimeout(() => {
        dropTransf[1].classList.toggle("slideImg");

            setTimeout(() => {
                dropTransf[0].classList.toggle("slideImg");
                
            }, "70");
        }, "70");
    }, "60");
}

function removeSlideCrip() {
    var dropCrip = document.getElementsByClassName("imgdropB");

    dropCrip[0].classList.toggle("acimg");
    dropCrip[1].classList.toggle("acimg");
    dropCrip[2].classList.toggle("acimg");

    dropCrip[0].classList.remove("slideImg");
    dropCrip[1].classList.remove("slideImg");
    dropCrip[2].classList.remove("slideImg");
}

//Terminos y condiciones
function validar(obj){
  let button = document.getElementById("button-pay");
	if(obj.checked==true){
		button.classList.remove("disable");
    button.href = "https://alpha-a19.github.io"
	}else{
		button.classList.toggle("disable");
    button.removeAttribute("href");
	}
}

var btnMenu = document.getElementById("btn-menu")
btnMenu.addEventListener("click", () => {
  var menu = document.getElementById("menu");
  menu.classList.toggle("activeMenu");
  btnMenu.classList.toggle("btn-active");
})

var cont = ["DIAGRAMAS ELECTRICOS TOYOTA Corolla 1.8L 2014", "DIAGRAMAS ELECTRICOS LAND ROVER Range Rover Sport (L320) 2.7 TdV6 (276DT) 2005 – 2009"];

var extraido = cont[1].substr(-0, 20);
var extraidoTwo = cont[1].substr(20);
document.getElementById("DE").innerText = extraido; 
document.getElementById("carText").innerText = extraidoTwo;
