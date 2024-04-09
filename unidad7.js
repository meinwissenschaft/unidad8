
alert('Bienvenidos a Introduccion a la Filosofia, te haremos unas preguntas para que el nuetro sitio web te sea más util')

//cuestionario de 5 pregunmtas:
var preg1 = prompt('¿Has estudiado o tenido algún contacto con la Fílosofia?')
var preg2 = prompt('¿Cuántas horas le dedicas a la lectura?')
var preg3 = prompt('¿Sueles hacer resúmenes, mapas conceptuales o alguna técnica de estudio a la hora de leer?')
var preg4 = prompt('¿Conoces los filósofos clásicos que conforman el periodo clásico de la Filosofía?')
var preg5 = prompt('¿Hay algo en especial de la filosofía moderna que te gustaría aprender?')

var cantHoras = 90
var semanas = 12
var horasPorDia = (cantHoras / semanas) / 7
var resultado = Math.round(horasPorDia)
