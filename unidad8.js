function saberMas(){
    document.getElementById('saber')
    var selector = confirm('¿Quieres saber más sobre este filosofo?')

    if(selector == true){
        var parrafo = document.getElementById('ReneD')
        parrafo.style.display = 'block'
    } else if(selector == false){
        alert("Que lastima, te habría interesado saber que su gran libro fue “El discurso del método”, un libro que fue la base para desarrollar el método científico.")
    }else{
        alert("No se a ingresado una respuesta")
    }
}

function dataNietzche(){
    document.getElementById('conocerNietz')
    var selector = confirm('¿Quieres saber algo más sobre Friedrich Nietzsche?')

    if(selector == true){
        var parrafo = document.getElementById('FNietz')
        parrafo.style.display = 'block'
    } else if(selector == false){
        alert("Bueno, Friedrich Nietzsche no es de tu interes, pero aporto mucho al pensamiento existencialista, criticò fuertemente a la iglesia catolica y desarrollo el concepto del super hombre a traves de la etica moral")
    }else{
        alert("No se a ingresado una respuesta")
    }
}

var biblio1 = ["Copleston, F. (2011). Historia de la Filosofía (varios tomos). Barcelona: Ariel", "Russell, B. (2010) Historia de la filosofía occidental. Barcelona: Espasa Libros.", "Mosterín. J. (1984). Historia de la Filosofía (varios volúmenes). Madrid: Alianza Editorial"]
var biblio2 = [" González, F. H., & González, S. S. (2011). El racionalismo de Descartes.", "Sartre, Jean Paul (1945). El existencialismo es un humanismo", " Lefebvre, Henri (1954). El existencialismo"]

function plusAyuda(){
    var biblioAmpliatoria = confirm('¿Necesitas reforzar tus bases de Filosofía introductoria?')
    if(biblioAmpliatoria == true){
        for(var i=0; i<3; i++){
            alert('Te recomendamos la siguiente bibliografía para introducirte en la Filosofía: '+biblio1[i]+'.')
        }
    }else if (biblioAmpliatoria == false){
        for(var i=0; i<3; i++){
                alert('Amplia mas sobre la modernidad con estos libros: '+biblio2[i]+'.')
        }
    }
    
}