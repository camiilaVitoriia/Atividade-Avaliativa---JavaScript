var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener ("click", function(event) {
	
    event.preventDefault();
	
	var form = document.querySelector("#form-alunos");

	

	var nome  = form.nome.value;
    var nota1 = form.nota1.value;
    var nota2 = form.nota2.value;
    var nota3 = form.nota3.value;
	

	var alunoTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var nota1Td = document.createElement("td");
	var nota2Td = document.createElement("td");
	var nota3Td = document.createElement("td");
    var mediaTd = document.createElement("td");
    var situacaoTd = document.createElement("td");


	nomeTd.textContent = nome;
	nota1Td.textContent = nota1;
	nota2Td.textContent = nota2;
	nota3Td.textContent = nota3;
	mediaTd.textContent = media = calculamedia(nota1, nota2, nota3);
	situacaoTd.textContent = verifica(media)

	alunoTr.appendChild(nomeTd);
	alunoTr.appendChild(nota1Td);
	alunoTr.appendChild(nota2Td);
	alunoTr.appendChild(nota3Td);
	alunoTr.appendChild(mediaTd);
	alunoTr.appendChild(situacaoTd)
    
	var tabela = document.querySelector("#tabela-alunos");
	tabela.appendChild(alunoTr);
});

function verifica(media) {
    if (media >= 7) {
    
        return "Aprovado"

    }

    if (media < 4) {
    
        return "Reprovado"

    }

    if (media >= 4 && media < 7) {
    
        return "Prova final"

    }
}



