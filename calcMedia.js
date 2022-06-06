var alunos = document.querySelectorAll(".aluno");


for (var i = 0; i < alunos.length; i++) {
    var alunos = alunos[i];
    console.log(alunos.textContent)
    var tdNota1 = alunos.querySelector(".info-nota1");
    var nota1 = tdNota1.textContent;

    var tdNota2 = alunos.querySelector(".info-nota2");
    var nota2 = tdNota2.textContent;

    var tdNota3 = alunos.querySelector(".info-nota3");
    var nota3 = tdNota3.textContent;

    var tdMedia = alunos.querySelector(".info-media");
    tdMedia.textContent = media
    

    var tdSituacao = alunos.querySelector(".info-situacao");
    var situacao = tdSituacao.textContent;

    var media = calculamedia(nota1, nota2, nota3);

    if (media >= 7) {
        tdMedia.textContent = media;
        tdSituacao.textContent = "Aprovado";

    }

    else if (media <= 4) {
        tdMedia.textContent = media;
        tdSituacao.textContent = "Reprovado";

    }

    else if (media >= 4 && media < 7) {
        tdMedia.textContent = media;
        tdSituacao.textContent = "Prova final";

    }



    

function calculamedia(nota1, nota2, nota3) {
    var media = 0;
    media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3)
    return media.toFixed(2);
}

function verifica(media) {
    if (media >= 7) {
    
        return tdSituacao.textContent = "Aprovado";

    }

    else if (media <= 4) {
    
        return tdSituacao.textContent = "Reprovado";

    }

    else if (media >= 4 || media < 7) {
    
        return tdSituacao.textContent = "Prova final";

    }
}
}

