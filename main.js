function dom() {
    const nome = document.getElementById('nomeInput').value;
    const mes = document.getElementById('mesInput').value.toLowerCase();
    const anonascimento = parseInt(document.getElementById('anoInput').value);
    const anoatual = new Date().getFullYear();

    let msgmes = '';
    let msgano = '';

    if (mes === 'janeiro' || mes === 'fevereiro' || mes === 'março') {
        msgmes = `Feliz ano novo, ${nome}! `;
    } else if (mes === 'abril' || mes === 'maio' || mes === 'junho') {
        msgmes = `Parabéns, ${nome}! voçê nasceu quase no meio do ano`;
    } else if (mes === 'julho' || mes === 'agosto' || mes === 'setembro') {
        msgmes = `Ei, ${nome}! A metade do ano já passou, mas ainda há muito a ser feito. Vamos lá!`;
    } else if (mes === 'outubro' || mes === 'novembro' || mes === 'dezembro') {
        msgmes = `Feliz aniversário, ${nome}! ta quase acabando o ano.`;
    } else {
        msgmes = `Olá, ${nome}! Mês não reconhecido.`;
    }

    const idadeatual = anoatual - anonascimento;
    msgano = `Ao terminar o ano, você terá ${idadeatual} anos. Que seja um ano incrível para você!`;

    const resultado = `${msgmes}\n${msgano}`;
    
    // Exibe o resultado em algum lugar no seu HTML, por exemplo, em um elemento com o ID 'resultado'.
    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = function() {
    dom();
};

