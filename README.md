# Proyecto Final

## Consigna
Desarrollar en angular un ecommerce u otro sitio de su preferencia con las siguientes paginas:

 - Home: Listado más de 2 productos, items, etc.
 - Detalle de producto
 - Al navegar a dicha página mostrar el detalle completo del producto
 - Formulario de contacto con validaciones

Los datos de los productos podrán ser consultados a:
 - API REST (desarrolladas de manera particular por cada alumno, no se evalúa en el curso)
 - Mock de datos con archivos json
 - API REST publicas

## Resolución
Para este trabajo práctico se utilizó como API la siguiente API pública: WizardWorldAPI (https://wizard-world-api.herokuapp.com/swagger/index.html). La misma contiene métodos los cuales devuelven diferentes tipos de datos del universo de Harry Potter. Si bien existen 5 tipos de datos diferentes para este trabajo solamente se utilizaron 2: Elixirs y Spells. Además la API cuenta con un método Post que permite enviar un feedback asique también lo utilizamos para nuestro formulario.

Al ingresar a la página accedemos directamente al Home en donde se encontrará una bienvenida y una breve descripción sobre la página. En la parte superior derecha encontraremos las diferentes opciones por las que navegar. Además, los botones 'Learn about Spells' y 'Learn about Elixirs' también nos permiten navegar hacia las páginas con los diferentes listados

![image](https://github.com/user-attachments/assets/596bce7b-047f-43b2-87b3-77b838540172)

### Página Spells
Accedemos a esta página a traves del menu de la barra superior o del botón 'Learn about Spells'

En esta página encontraremos una tabla con todos los hechizos disponibles en el Wizard Wold. Esta página obtiene la información de todos los hechizos existentes a través del método GET /Spells (https://wizard-world-api.herokuapp.com/Spells) de nuestra API. Además la tabla nos permite hacer click sobre la fila del hechizo del cual queramos ver más detalle y al hacer click nos redirecciona a la página de detalle del hechizo.

![image](https://github.com/user-attachments/assets/1291246b-3b46-4ec3-b365-46a367b87e99)

#### Detalle del hechizo

![image](https://github.com/user-attachments/assets/082bc943-6788-4256-bdf5-759b8e855a60)

![image](https://github.com/user-attachments/assets/22963bb7-0b50-44ac-b26e-0c74394bece7)

El link 'Back to the spells list' nos permite volver a la página anterior, es decir, a la de Spells.

### Página Elixirs
Accedemos a esta página a traves del menu de la barra superior o del botón 'Learn about Elixirs'

En esta página encontraremos una grilla con tarjetas que contienen todos los elixirs disponibles en el Wizard Wold. Esta página obtiene la información de todos los elixirs existentes a través del método GET /Elixirs (https://wizard-world-api.herokuapp.com/Elixirs) de nuestra API. Además cada tarjeta contiene un botón 'More Info' que nos permite navegar a una página con más detalle del elixir seleccionado.

![image](https://github.com/user-attachments/assets/379b910f-d61c-489c-bf5a-f83a04e78a7b)

### Detalle del Elixir

![image](https://github.com/user-attachments/assets/c21a6eea-14eb-4415-aba9-93d0feda805d)

![image](https://github.com/user-attachments/assets/e23522cc-365e-41b9-9062-7a90de7bddd6)

![image](https://github.com/user-attachments/assets/8a3709b4-925c-4424-aa3e-3af01b8c7e8e)

Al igual quen para los hechizos contamos con un link 'Back to the elixir list' que nos permite volver a la página con todos los elixirs.

## Página Add your Feedback
Accedemos a esta página a traves del menu de la barra superior.

En esta página tenemos un pequeño formulario que nos permite ingresar el tipo de feedback y el feedback para luego enviarlo utilizando el método POST /Feedback (https://wizard-world-api.herokuapp.com/Feedback) de nuestra API. Este método recibe un objeto que además tiene un entityID que sera generado de manera aleatorio en nuestro código. 
Nota: la api no cuenta con un método get para acceder a los feedbacks almacenados por lo que por eso no se muestra el resultado de que efectivamente se guardo.

![image](https://github.com/user-attachments/assets/6a84b10c-375e-4b19-9306-c994edde45ef)

El formulario cuenta con diferentes validaciones:
  - En primer lugar el botón 'Confirm' permanece deshabilitado mientras el formulario tenga los campos (obligatorios ambos) vacios o con algun error.

    ![image](https://github.com/user-attachments/assets/c036ec57-928e-4b00-81ba-14633ed55c6d)

  - Además si alguno de los campos esta incompleto (y recién una vez que el usuario hizo click en ese campo) se muestra un mensaje de alerta:
    
    ![image](https://github.com/user-attachments/assets/c22cd836-1e32-4385-bd29-7d725a1fdc44)

Una vez que el formulario se completa correctamente y el usuario hace click en el botón 'Confirm' se muestra un mensaje de alerta indicando que la información se guardo correctamente y se resetea el formulario

![image](https://github.com/user-attachments/assets/472f9f1a-2efe-4f0a-89d3-5739f3c8ce11)

![image](https://github.com/user-attachments/assets/ad93798f-15d4-4be5-9801-f88ff3e8ea8d)

## Página Not Found
En caso de que el usuario ingrese a una dirección url no válida se mostrará la siguiente página de error:

![image](https://github.com/user-attachments/assets/57ae5bc5-5d98-4d1b-9f04-5e755e970386)
