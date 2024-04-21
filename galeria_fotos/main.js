$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideToggle()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display:none" ></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class= "overlay-imagem-link"><a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em Tamanho real"> Ver imagem em Tamanho real</a>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)

        $('#endereco-imagem-nova').val('')
    })
})