var acc = document.getElementsByClassName("accordion");
var dropTransf = document.getElementsByClassName("imgdrop");
var dropCrip = document.getElementsByClassName("imgdropB");

function checkedBnb() {
    let span = "<span class='checkmark'></span>";
    if(document.getElementById("checkA").checked == true) {
        document.getElementById("label-bnb").textContent = "¡Seleccionado!"
    } else {
        //document.getElementById("label-bnb").insertAdjacentHTML("beforeend", span);
        document.getElementById("label-bnb").textContent = "Seleccionar";
    }
}

window.addEventListener("load", () => {
  var contButton = document.querySelector(".cont-button-pay");
  var tarjeta = document.createElement("a");
  var binance = document.createElement("a");
  var cripto = document.createElement("a");
  var paypal = document.createElement("a");
  var trasferencia = document.createElement("a");

  tarjeta.textContent = "Realizar pedido con Tarjeta";
  binance.textContent = "Realizar pedido con Binance Pay";
  cripto.textContent = "Realizar pedido con Criptomonedas";
  paypal.textContent = "Realizar pedido con PayPal";
  trasferencia.textContent = "Enviar comprobante de pago (Via WhatsApp)";

  contButton.appendChild(tarjeta);


  //Efecto card producto
  document.getElementById('card').classList.toggle('cardActive');

  const formulario = document.querySelector("#formTarjeta");

  formulario.inputNumero.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
      numeroTarjeta.textContent = '1234 1234 1234 1234';

      logoMarca.innerHTML = '';
    }

  });

    //Efectos para accordion e imagenes
    slideImg();
    acc[0].classList.toggle("active");

    var panelA = acc[0].nextElementSibling;
    if (!panelA.style.maxHeight) {
        panelA.scrollHeight = 180;
        panelA.style.maxHeight = panelA.scrollHeight + 21 +"px";
        console.log(panelA.scrollHeight);
      }

    acc[0].addEventListener("click", () => {

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

            contButton.replaceChildren(tarjeta);
        } 
    })
    acc[1].addEventListener("click", () => {
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

          contButton.replaceChildren(binance);
        } 
    })
    acc[2].addEventListener("click", () => {
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

          contButton.replaceChildren(cripto);
        } 
        
    })

    acc[3].addEventListener("click", () => {
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

          contButton.replaceChildren(paypal);
        } 
    })

    acc[4].addEventListener("click", () => {
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
          
          contButton.replaceChildren(trasferencia);
        } 
    })

    var accx = document.getElementsByClassName("imgacc");

    accx[0].addEventListener("click", function() {
      
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
    accx[1].addEventListener("click", function() {
      
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
    accx[2].addEventListener("click", function() {
      
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

var cont = ["DIAGRAMAS ELECTRICOS TOYOTA Corolla 1.8L 2014", "DIAGRAMAS ELECTRICOS LAND ROVER Range Rover Sport (L320) 2.7 TdV6 (276DT) 2005 – 2009"];

var extraido = cont[1].substr(-0, 20);
var extraidoTwo = cont[1].substr(20);
document.getElementById("DE").innerText = extraido; 
document.getElementById("carText").innerText = extraidoTwo;

