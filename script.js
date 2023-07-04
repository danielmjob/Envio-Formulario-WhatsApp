
const evento2 = document.getElementById('enviar')

function enviarFormularioWhatsapp(){

        let nome = document.getElementById('nome').value;
        let assunto = document.getElementById('assunto').value;
        let mensagem = document.getElementById('mensagem').value;
        let numero= 5561992371633;

        

        if (nome == "" & assunto=="" & mensagem==""){
                console.log(" Campos obrigatórios Vazios");
        }else{
                var win= window.open(`https://wa.me/${numero}?text=*Nome:*%20${nome}%0A*Assunto:*%20${assunto}%0A*Mensagem:*%0A${mensagem}`,'_blank');

                // %0A quebra a linha
        }
}