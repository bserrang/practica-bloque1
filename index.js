// CONTENIDO DE LA PRÁCTICA:
// Vamos a crear una lista de elementos directamente desde javascript a partir del array aportado en este documento, en la variable "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no a algo que esté por encima) sobre el fondo de la página (elemento body), debe aparecer un alert en el que se indique el color que tiene en ese momento en hexadecimal.
//    * Al hacer click directamente sobre uno de los items de la lista debe aparecer un alert en el que se indique el color que tiene en ese momento en hexadecimal
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
]