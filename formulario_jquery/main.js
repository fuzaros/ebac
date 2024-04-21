$(document).ready (function(){
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-10'
    })

    $('#cep').mask('00000-000', {
        placeholder:('00000-000')
    })
    
    $('form').validate({
        rules: {
            nome:{required: true },
            email:{required: true },
            tel:{required: true, minlength: 14},
            cpf:{required: true },
            ende:{ required: true},
            cep:{required: true, minlength: 9}
        },
        
        messages: {
            nome: "Digite o nome completo!",
            email: "Todas as letras em minusculas",
            telefone:"Digite o seu número de tefone móvel",
            cpf: "Digite seu CPF sem os pontos e hífen",
            ende: "Digite seu endereço ex: rua, nº e bairro",
            cep: "Digite um cep valido sem o hífen",
        },
        
        submitHandler: function(form){
            alert(`Cadastro concluído com sucesso!`);
            
            nome.value = "";
            email.value = "";
            tel.value = "";
            cpf.value = "";
            ende.value = "";
            cep.value = "";
        },
        
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Verifique se os ${camposIncorretos} campos estão corretos!`);
            }
        },
        
    })
})