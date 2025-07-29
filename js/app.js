const header = document.createElement('header');

header.style.backgroundColor = 'gray';
header.style.height = '90px';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.position = 'fixed';
header.style.top = '0px';
header.style.left = '0';
header.style.right = '0';
header.style.transition = 'top 0.3s ease';




const nomDuSite = document.createElement('h1');
nomDuSite.classList.add('titreDuSite');
nomDuSite.textContent = 'Generator D. I. V.';
nomDuSite.style.color = 'white';
nomDuSite.style.marginLeft = '20px';
header.appendChild(nomDuSite);

const conteneurDeLiensDuHeader = document.createElement('nav');
conteneurDeLiensDuHeader.style.display = 'flex';
conteneurDeLiensDuHeader.style.marginRight = '30px';
conteneurDeLiensDuHeader.style.alignItems = 'right';
conteneurDeLiensDuHeader.style.fontSize = '20px';
conteneurDeLiensDuHeader.behavior = 'smooth';


const linkHeader1 = document.createElement('a');
linkHeader1.href = '#titreFormulaire';
linkHeader1.textContent = 'Contacte';
linkHeader1.style.color = 'white';
linkHeader1.style.marginRight = '30px'
linkHeader1.style.textDecoration = 'none';
linkHeader1.style.padding = '10px';
linkHeader1.style.transition = '0.5s'
linkHeader1.behavior = 'smooth';
linkHeader1.classList.add('lien1');


const linkHeader2 = document.createElement('a');
linkHeader2.href = '#conteneurDuJeuPierrePapierEtc';
linkHeader2.textContent = 'Jeu';
linkHeader2.style.color = 'white';
linkHeader2.style.marginRight = '30px'
linkHeader2.style.marginLeft = '30px'
linkHeader2.style.textDecoration = 'none';
linkHeader2.style.padding = '10px';
linkHeader2.style.transition = '0.5s'
linkHeader2.behavior = 'smooth';
linkHeader2.classList.add('lien2');

const linkHeader3 = document.createElement('a');
linkHeader3.href = '#mainCases';
linkHeader3.textContent = 'Couleur';
linkHeader3.style.color = 'white';
linkHeader3.style.marginRight = '30px'
linkHeader3.style.marginLeft = '30px'
linkHeader3.style.textDecoration = 'none';
linkHeader3.style.padding = '10px';
linkHeader3.style.transition = '0.5s'
linkHeader3.behavior = 'smooth';
linkHeader3.classList.add('lien3');

let lastScroll = window.scrollY;


window.addEventListener('scroll', () => {

  const currentScroll = window.scrollY;

  if (currentScroll> lastScroll) {
    header.style.top = '-100px';
    header.style.bottom = '0px';
  }else {
    header.style.top = '0px';
    header.style.bottom = '100px';
  }
  lastScroll = currentScroll;
})

conteneurDeLiensDuHeader.appendChild(linkHeader1);
conteneurDeLiensDuHeader.appendChild(linkHeader2);
conteneurDeLiensDuHeader.appendChild(linkHeader3);
header.appendChild(conteneurDeLiensDuHeader);
document.body.appendChild(header);




const conteneurEntier = document.createElement('div');
conteneurEntier.style.marginTop = '150px';
conteneurEntier.style.display = 'flex';
conteneurEntier.style.flexDirection = 'column';
conteneurEntier.style.alignItems = 'center';
conteneurEntier.style.marginLeft = '25%';
conteneurEntier.style.marginRight = '25%';
conteneurEntier.style.width = '45%';
conteneurEntier.style.marginBottom = '100px';
conteneurEntier.style.backgroundColor = 'gray';
conteneurEntier.style.padding = '50px';
conteneurEntier.style.borderRadius = '10px';
conteneurEntier.style.color = 'white';
conteneurEntier.style.border = '3px solid white'

//creation du titre
const titreFormulaire = document.createElement('h1');
titreFormulaire.textContent = 'Contactez-nous';
titreFormulaire.style.color = 'white';
titreFormulaire.id = 'titreFormulaire';
titreFormulaire.style.textAlign = 'center';
titreFormulaire.style.marginTop = '10px';
conteneurEntier.append(titreFormulaire);

//creation des labels et inputs avec une fonction
function creeFormule(labelText, type, id, placeholder = ''){
  const label = document.createElement('label');
  const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');

  label.textContent= labelText;
  label.htmlFor = id;

  input.type = type !== 'textarea' ? type : undefined;
  input.id = id;
  input.required = true;


  input.style.textAlign = 'center';
  input.style.marginTop = '7px';
  input.style.marginBottom = '7px';



  if (type === 'textarea') {
    label.style.fontSize = '20px';
    input.style.height = '150px';
    input.style.width = '500px';



  }

  if (type !== 'textarea') {
    label.style.fontSize = '20px';
    input.style.height = '50px';
    input.style.width = '350px';

  }

  if (placeholder) input.placeholder = placeholder;
  conteneurEntier.append(label);
  conteneurEntier.append(input);
}



// les champs du formulaire
creeFormule('Votre nom', 'text', 'nom' , 'Entrez votre nom');
creeFormule('Votre prenom', 'text' , 'prenom', 'Entrez votre prenom');
creeFormule('Votre adresse email', 'email', 'email', 'Entrez votre adresse mail');
creeFormule('Votre message', 'textarea', 'message' , 'Entrez votre message');

const btnEnvoyer = document.createElement('button');
btnEnvoyer.textContent = 'Envoyer';
btnEnvoyer.style.marginTop = '10px';
btnEnvoyer.style.marginBottom = '5px';
btnEnvoyer.style.backgroundColor = 'white';
btnEnvoyer.style.color = 'black';
btnEnvoyer.style.border = '2px solid black';
btnEnvoyer.style.borderRadius = '5px';
btnEnvoyer.style.padding = '10px';
btnEnvoyer.style.fontSize = '20px';

btnEnvoyer.addEventListener('click', function(){
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;


  alert(`Merci ${prenom} ${nom} !\n C'est carré brother pour le message`);
})

conteneurEntier.append(btnEnvoyer);
document.body.appendChild(conteneurEntier);
document.body.style.backgroundColor = 'black';



const conteneurDuJeuPierrePapierEtc = document.createElement('div');
conteneurDuJeuPierrePapierEtc.style.border = '3px solid white';
conteneurDuJeuPierrePapierEtc.id = 'conteneurDuJeuPierrePapierEtc';
conteneurDuJeuPierrePapierEtc.style.alignItems = 'center';

 const titreJeu = document.createElement('h1');
 titreJeu.textContent = 'Choisissez un bouton';
 titreJeu.style.color = 'white';
 titreJeu.style.textAlign = 'center';
 titreJeu.style.marginTop = '10px';
 conteneurDuJeuPierrePapierEtc.append(titreJeu);

const choixUtilisateur = document.createElement('h2');



const btnPierre = document.createElement('button');
const btnPapier = document.createElement('button');
const btnSisceau = document.createElement('button');

const textChoixDeLordinateur = document.createElement('h2');
const textAffichageResultat = document.createElement('h2');

textAffichageResultat.style.color = 'white';
textAffichageResultat.style.textAlign = 'center';
textAffichageResultat.style.marginTop = '10px';

choixUtilisateur.style.color = 'white';
choixUtilisateur.style.textAlign = 'center';
choixUtilisateur.style.marginTop = '10px';

textChoixDeLordinateur.style.color = 'white';
textChoixDeLordinateur.style.textAlign = 'center';
textChoixDeLordinateur.style.marginTop = '10px';

textAffichageResultat.style.color = 'white';
textAffichageResultat.style.textAlign = 'center';
textAffichageResultat.style.marginTop = '10px';

const conteneurDesBoutons = document.createElement('div');
conteneurDesBoutons.style.alignItems = 'center';
conteneurDesBoutons.style.display = 'flex';
conteneurDesBoutons.style.justifyContent = 'space-around';
conteneurDesBoutons.style.marginTop = '10px';
conteneurDesBoutons.style.marginBottom = '10px';
conteneurDesBoutons.style.width = '50%';
conteneurDesBoutons.style.backgroundColor = 'gray';
conteneurDesBoutons.style.padding = '50px';
conteneurDesBoutons.style.border = '3px solid white';
conteneurDesBoutons.style.borderRadius = '10px';
conteneurDesBoutons.style.color = 'white';
conteneurDesBoutons.style.marginLeft = '20%';
conteneurDesBoutons.style.marginRight = '25%';

btnPierre.textContent = 'Pierre';
btnPierre.style.backgroundColor = 'white';
btnPierre.style.color = 'black';
btnPierre.style.border = '2px solid black';
btnPierre.style.borderRadius = '5px';
btnPierre.style.padding = '10px';
btnPierre.style.fontSize = '20px';
btnPierre.style.textAlign = 'center';


btnPapier.textContent = 'Papier';
btnPapier.style.backgroundColor = 'white';
btnPapier.style.color = 'black';
btnPapier.style.border = '2px solid black';
btnPapier.style.borderRadius = '5px';
btnPapier.style.padding = '10px';
btnPapier.style.fontSize = '20px';
btnPapier.style.textAlign = 'center';

btnSisceau.textContent = 'Ciseau';
btnSisceau.style.backgroundColor = 'white';
btnSisceau.style.color = 'black';
btnSisceau.style.border = '2px solid black';
btnSisceau.style.borderRadius = '5px';
btnSisceau.style.padding = '10px';
btnSisceau.style.fontSize = '20px';
btnSisceau.style.textAlign = 'center';

function jouer(choixNum, choixTexte) {
  NombreChoisiParLutilisateur = choixNum;
  choixUtilisateur.textContent = `Vous avez choisi ${choixTexte}`;

  const nombreAleatoireChoix = Math.floor(Math.random() * 3) + 1;

  if (nombreAleatoireChoix === 1) {
    textChoixDeLordinateur.textContent = "L'ordinateur a choisi Pierre";
  } else if (nombreAleatoireChoix === 2) {
    textChoixDeLordinateur.textContent = "L'ordinateur a choisi Papier";
  } else {
    textChoixDeLordinateur.textContent = "L'ordinateur a choisi Sisceau";
  }

  if (nombreAleatoireChoix === NombreChoisiParLutilisateur) {
    textAffichageResultat.textContent = "C'est une Égalité";
  } else if (
    (nombreAleatoireChoix === 1 && NombreChoisiParLutilisateur === 3) ||
    (nombreAleatoireChoix === 2 && NombreChoisiParLutilisateur === 1) ||
    (nombreAleatoireChoix === 3 && NombreChoisiParLutilisateur === 2)
  ) {
    textAffichageResultat.textContent = "Vous avez Perdu";
  } else {
    textAffichageResultat.textContent = "Vous avez Gagné";
  }
}


btnPierre.addEventListener('click', () =>
  jouer(1, "Pierre"));
btnPapier.addEventListener('click', () =>
  jouer(2, "Papier"));
btnSisceau.addEventListener('click', () =>
  jouer(3, "Sisceau"));



btnReinitialiser = document.createElement('button');
btnReinitialiser.textContent = 'Reinitialiser';
btnReinitialiser.style.backgroundColor = 'white';
btnReinitialiser.style.color = 'black';
btnReinitialiser.style.border = '2px solid black';
btnReinitialiser.style.borderRadius = '5px';
btnReinitialiser.style.padding = '10px';
btnReinitialiser.style.fontSize = '20px';
btnReinitialiser.style.textAlign = 'center';

btnReinitialiser.addEventListener('click', function(){
  choixUtilisateur.textContent = '';
  textAffichageResultat.textContent = '';
  textChoixDeLordinateur.textContent = '';
})


conteneurDuJeuPierrePapierEtc.append(btnReinitialiser);
conteneurDuJeuPierrePapierEtc.append(conteneurDesBoutons);
conteneurDuJeuPierrePapierEtc.append(textAffichageResultat);
conteneurDuJeuPierrePapierEtc.append(choixUtilisateur);
conteneurDuJeuPierrePapierEtc.append(textChoixDeLordinateur);
conteneurDesBoutons.append(btnPierre);
conteneurDesBoutons.append(btnPapier);
conteneurDesBoutons.append(btnSisceau);
document.body.appendChild(conteneurDuJeuPierrePapierEtc);


const mainCases = document.createElement('main');

mainCases.id = 'mainCases';
mainCases.style.width = '80%';
mainCases.style.marginLeft = '5%';
mainCases.style.marginTop = '100px';
mainCases.style.marginBottom = '100px';
mainCases.style.backgroundColor = 'gray';
mainCases.style.padding = '50px';
mainCases.style.border = '3px solid white';
mainCases.style.borderRadius = '10px';
mainCases.style.color = 'white';
mainCases.style.alignItems = 'center';
mainCases.style.textAlign = 'center';

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}




const sectionCases = document.createElement('a');
sectionCases.style.border = '3px solid white';
sectionCases.style.padding = '50px';
sectionCases.style.borderRadius = '10px';
sectionCases.style.color = 'white';
sectionCases.style.alignItems = 'center';
sectionCases.style.marginTop = '20px';
sectionCases.style.marginBottom = '20px';
sectionCases.style.marginBottom = '50px';
sectionCases.style.width = '90%';
sectionCases.style.display = 'flex';
sectionCases.style.justifyContent = 'space-around';



const case1Hautes = document.createElement('a');
const case2Hautes = document.createElement('a');

case1Hautes.style.marginTop = '30px';
case1Hautes.style.marginBottom = '30px';
case1Hautes.style.border = '3px solid white';
case1Hautes.style.height = '100px';
case1Hautes.style.width = '30%';


case2Hautes.style.border = '3px solid white';
case2Hautes.style.marginTop = '30px';
case2Hautes.style.marginBottom = '30px';
case2Hautes.style.height = '100px';
case2Hautes.style.width = '30%';


const tripleCases = document.createElement('a');


tripleCases.style.border = '3px solid white';
tripleCases.style.borderRadius = '10px';
tripleCases.style.display = 'flex';
tripleCases.style.justifyContent = 'space-around';
tripleCases.style.alignItems = 'center';
tripleCases.style.marginTop = '30px';
tripleCases.style.marginBottom = '20px';
tripleCases.style.width = '99%';

const case1Basse = document.createElement('a');
const case2Basse = document.createElement('a');
const case3Basse = document.createElement('a');


case1Basse.style.marginTop = '30px';
case1Basse.style.marginBottom = '30px';
case1Basse.style.border = '3px solid white';
case1Basse.style.height = '100px';
case1Basse.style.width = '30%';


case2Basse.style.border = '3px solid white';
case2Basse.style.marginTop = '30px';
case2Basse.style.marginBottom = '30px';
case2Basse.style.height = '100px';
case2Basse.style.width = '30%';


case3Basse.style.border = '3px solid white';
case3Basse.style.marginTop = '30px';
case3Basse.style.marginBottom = '30px';
case3Basse.style.height = '100px';
case3Basse.style.width = '30%';


sectionCases.style.backgroundColor = getRandomColor();
tripleCases.style.backgroundColor = getRandomColor();
case1Hautes.style.backgroundColor = getRandomColor();
case2Hautes.style.backgroundColor = getRandomColor();
case1Basse.style.backgroundColor = getRandomColor();
case2Basse.style.backgroundColor = getRandomColor();
case3Basse.style.backgroundColor = getRandomColor();


function getDominantColor(rgbString) {
  const rgb = rgbString.match(/\d+/g).map(Number);
  const [r, g, b] = rgb;

  if (r >= g && r >= b) return 'rouge';
  if (g >= r && g >= b) return 'vert';
  return 'bleu';
}

function redirectByColor(colorName) {
  switch (colorName) {
    case 'rouge':
      window.location.href = 'https://fr.wikipedia.org/wiki/Rouge';
      break;
    case 'vert':
      window.location.href = 'https://fr.wikipedia.org/wiki/Vert';
      break;
    case 'bleu':
      window.location.href = 'https://fr.wikipedia.org/wiki/Bleu';
      break;
  }
}


function attachClickHandler(element) {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const color = window.getComputedStyle(element).backgroundColor;
    const dominant = getDominantColor(color);
    redirectByColor(dominant);
  });
}

const allCases = [case1Hautes, case2Hautes, case1Basse, case2Basse, case3Basse];
allCases.forEach(attachClickHandler);

mainCases.append(sectionCases);
sectionCases.append(case1Hautes);
sectionCases.append(case2Hautes);
mainCases.append(tripleCases);
tripleCases.append(case1Basse);
tripleCases.append(case2Basse);
tripleCases.append(case3Basse);
document.body.appendChild(mainCases);

const footer = document.createElement('footer');
footer.style.backgroundColor = 'gray';
footer.style.height = '100px';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.color = 'white';
footer.style.marginTop = '100px';

const texteBasPage = document.createElement("h2");

texteBasPage.textContent = "Vous êtes arrivé au bas de la page";

footer.append(texteBasPage);
document.body.appendChild(footer);
