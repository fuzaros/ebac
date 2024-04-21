$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault()
        const list = $('#dizer-tarefa').val()
        let novoItem = $('<li></li>').html(`${list}`)
        
        $('ul').append(novoItem)
        $('#dizer-tarefa').val('')
        novoItem.fadeIn()
    })
    
    $('ul').on('click', 'li', function(){
        $(this).css("text-decoration", "line-through")
        $(this).css("color", "red")
    })

    $('form').on('reset', function(){
        $('ul').empty()
    })
})
