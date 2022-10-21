# Markdown Links 

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.



## 2. Diagrama de Flujo.

Diagrama de flujo implementado para la realización del CLI
![Diagrama de flujo](img/diagramadeFlujo.jpg)


## 3. Documentación técnica de la librería.

Las herramientas y dependencias implementadas para la construcción de esta Librería fueron las siguientes:

|Especificaciones técnicas|
| ---------------------- |
| **Lenguaje**           |
|JavaScript ECMAScript 6|
| **Ejecución**           |
|Node.js|
| **Dependencias y modulos NPM**|
|chalk                   |
|node-fetch              |
|File System             |
|Path                    |



### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

Por ejemplo:
![Ingreso de Ruta Inválida](img/ingresoRutaInvalida.png)

![Ingreso de Ruta Válida](img/ingresoRutaValida.png)

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`
![--validate](img/opcionValidate.png)

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

``

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail`  de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

![--stats](img/opcionStats.png)

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.


También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![Opciones](img/opciones.png)
