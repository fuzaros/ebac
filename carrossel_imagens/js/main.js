$(document).ready(function(){
    $('#carrousel-imagens').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })


    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoDeInteresse: {
                required: true,
            }
        }, 
        messages: {
            nome: 'Ponha seu nome aqui seu fdp'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos no formulário!`)
            }

        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interese').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })
})