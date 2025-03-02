 PROYECTO TIENDA ONLINE:
 El proyecto consisten en una tienda online dividida principalmente en dos partes: cliente y backoffice. Además tenemos el componente footer page-not-found, services y layout (que nos servira para cambiar entre las dos partes principales).

 -LAYOUT:
 En cliente y backoffice encontramos el componente layout que une ambas partes con appcomponent(se definen las rutas en app.routes), permitiendonos variar entre una parte y otra.

 En layout de cliente tenemos el header y footer(me falta hacerlo) y el app-router-outlet que nos permitirá variar entre los componentes (home, login, registro, tienda)
 
 En layout de backoffice tenemos, como en cliente, el header arriba y la parte de abajo la dividimos en 2: una parte es un sidebar con diferentes opciones de usuario (izq) y el resto (drcha) sera el app-router-outlet, que nos llevara de forma predeterminada a controlpanel. 

 -ZONA CLIENTE:
 Es la zona visible para los usuarios de la tienda. Aquí tenemos los componentes: header-cliente, home, layout, login, registro, tienda. Solamente tengo hechos headercliente, login y resgitro, y he tocado layout()

----> header-cliente: encontramos el boton iniciar sesion que nos llevara a ---> login en login hay dos opciones o inicias sesion (email + contraseña de 6 digitos) lo que te llevara a backoffice o le das a registrarte lo que te llevara al componente registro. Allí rellenas un formulario y al clicar en registrate ahora te llevara de nuevo a login.


 
 
 
 
 
 
 
 
 
 
 
 
 
 Tipografías
  - Poppins
  - Montserrat
  - Roboto 
  - Open Sans
  - Lato
  - Raleway
  - Lora

  - Poppins + Montserrat
  - Raleway + Montserrat (Viceversa)
  - Open Sans + Poppins
  - Raleway + Lora
  - Open Sans + Roboto (Viceversa)
  - Roboto + Montserrat
  - Montserrat
  - Poppins


https://hencework.com/theme/hound/rtl-light/


titulo
Paginas backoffice
-Inicio
-Perfil
-Cmabiar contraseña
-Productos
-Cerrar sesion
----------
-Redes sociales

////////////////////////////////////////////////
PUNTOS DE RUPTURA DE RESPONSIVE (MEDIA)
->Movilex muy pequeños se encuentran entre los 350px-375px de ancho -->  de forma manual
->Tamaño medio de móviles =576px sm
->Móviles más grande y tablets pequeñas ->769px md
->Móviles (la mayoría) en landscapes y tablets grandes =992px lg 
->Otras tablets y portatiles con pantallas pequeñas =1200 xl
--> Ordenadores con pantallas grandes --> 1400px = xxl
-->A partit de 1400px cualquier tipo de pantalla grande 