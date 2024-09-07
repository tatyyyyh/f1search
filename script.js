function pesquisar() {

    let section = document.getElementById("resultado");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    campoPesquisa = campoPesquisa.toLowerCase();
    let nominho = "";
    let equipezinha = "";
    if (campoPesquisa == ""){
        section.innerHTML = "<h2>Digite algo!</h2>";
        return;
    }
    for (let pilotinho of pilotos) {
        nominho = pilotinho.nome.toLowerCase()
        if (nominho.includes(campoPesquisa)){
    resultados += `
    <div class="card" id="cardP">
    <div class="item"><img src="${pilotinho.img}" alt="${pilotinho.nome}" class="foto"></div>
    <div class="item" style="padding: 2vh;">
        <h2>${pilotinho.nome}</h2>
        <li>Equipe: ${pilotinho.equipe}</li>
        <li>País: ${pilotinho.pais}</li>
        <li>Nascimento: ${pilotinho.nasc}</li>
        <li>Número: ${pilotinho.numero}</li>
        <li>Pontos: ${pilotinho.pontos}</li>
        <li>Vitórias: ${pilotinho.vitorias}</li>
        <li>Pódios: ${pilotinho.podios}</li>
        <li>Posição: ${pilotinho.posicao}</li>
        <a href="${pilotinho.insta}" target="_blank"><img class="insta" src="https://static.xx.fbcdn.net/assets/?revision=473883378671712&name=desktop-instagram-gradient-logo&density=1" alt=""></a>
    </div>  `
        } 

    };
    
    for (let equipa of equipes) {
        equipezinha = equipa.nomeEquipe.toLowerCase();
        if (equipezinha.includes(campoPesquisa)) {
            
        resultados += `
        <div class="card" id="cardE" style="background-color: var(--${equipa.color})">
        <div class="item" id="fotoEquipe"><img src="${equipa.img}" alt="${equipa.nomeEquipe}" class="foto"></div>
        <div class="item" style="padding: 2vh;">
            <h2>${equipa.nomeEquipe}</h2>
            <li>Nome Completo: ${equipa.nomeCompleto}</li>
            <li>Chefe: ${equipa.chefe}</li>
            <li>Pilotos: ${equipa.piloto}</li>
            <li>Base: ${equipa.base}</li>
            <li>Motor: ${equipa.motor}</li>
            <li>Chassi: ${equipa.chassi}</li>
            <li>Pontos: ${equipa.pontos}</li>
            <li>Posição: ${equipa.posicao}</li>
            <a href="${equipa.insta}" target="_blank"><img class="insta" src="https://static.xx.fbcdn.net/assets/?revision=473883378671712&name=desktop-instagram-gradient-logo&density=1" alt=""></a>
        </div>
        ` 
        }
    };
    if (!resultados){
        resultados = "Nada foi encontrado!";
    }
    section.innerHTML = resultados;
}