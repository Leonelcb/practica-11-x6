readme-index
1-El usuario accede a la página
HTML.
2-El navegador renderiza la página y carga los recursos especificados, como la hoja de estilos CSS y el script JavaScript.
3-Se muestra una imagen de fondo y un formulario de inicio de sesión que consta de dos campos de entrada (uno para el nombre de usuario y otro para la contraseña) y un botón de "Iniciar sesión".
4-El usuario puede ingresar su nombre de usuario y contraseña en los campos correspondientes del formulario.
5-Cuando el usuario hace clic en el botón "Iniciar sesión" o envía el formulario (presionando Enter), se activa el evento de envío del formulario.
6-El navegador intenta enviar los datos del formulario al servidor.
7-Si ambos campos de entrada (nombre de usuario y contraseña) tienen datos válidos (no están vacíos), el formulario se envía con éxito.
8-Si se envía con éxito, el navegador ejecutará el script JavaScript especificado en script.js.
9-El script JavaScript asociado al formulario puede realizar diversas acciones, como validar los datos del formulario, enviar una solicitud al servidor para autenticar al usuario, mostrar mensajes de error o redirigir al usuario a otra página según el resultado del inicio de sesión.
10-fin
|
|
readme Nueva_pagina.html
1-El usuario accede a la página HTML.
2-El navegador renderiza la página y carga los recursos especificados, como la hoja de estilos CSS.
3-Se muestra una imagen de "Dragon Ball Super" junto con una descripción de la serie.
4-Debajo de la descripción, se muestran varios botones que enlazan a diferentes recursos relacionados con Dragon Ball Super, como el anime en latino, el manga, Dragon Ball Heroes y las películas.
5-Si el usuario hace clic en uno de los botones, se redirige a la página correspondiente al recurso seleccionado.
6-Si el usuario hace clic en el botón "Volver al inicio de sesión", se activa la función goBack() que redirige al usuario de vuelta a la página de inicio de sesión en el proyecto de Replit.
7-La función goBack() cambia la ubicación de la ventana actual del navegador a la URL especificada, que en este caso es la página de inicio de sesión del proyecto en Replit.
8-fin
|
|
readme script.js
1-Espera a que el formulario con el ID "loginForm" se envíe.
2-Cuando se envía el formulario, se activa la función de devolución de llamada del evento.
3-La función de devolución de llamada recibe el evento como argumento y llama al método preventDefault() sobre el evento. Esto evita que el formulario se envíe de forma predeterminada y evita la recarga de la página.
4-El script obtiene el valor de los campos de entrada "username" y "password" del formulario.
5-Comprueba si el nombre de usuario es "leonelcbz" y la contraseña es "leonel123@". Si coinciden, procede al paso 6. Si no coinciden, procede al paso 7.
6-Si la combinación de nombre de usuario y contraseña es correcta, redirige a una nueva página llamada "nueva_pagina.html" mediante la asignación de una nueva URL a window.location.href.
7-Si la combinación de nombre de usuario y contraseña no es correcta, muestra una alerta al usuario con el mensaje "Nombre de usuario o contraseña incorrectos".
8-fin


este layout trata sobre un inicio de sesion que te lleva a una pagina,con una breve descripcion de lo que es dragon ball super y al momento de picarles a los links como:dragon ball super latino o dragon ball super manga etc,te lleva a una pagina a ver el contenido que elegiste.