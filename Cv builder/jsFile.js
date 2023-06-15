let question_principale = document.querySelector(".question");

let LesReponses = [...document.querySelectorAll(".les-reponses .button-28")];
var i = 0 ;
var son  = new Audio();
var win  = new Audio();
var lost  = new Audio();
son.src="Loop_sic.mp3";
win.src="Loop_sic.mp3";
lost.src="JDN9R8G-orchestral-stab-lost.mp3";


let score = document.getElementById("sc");
var listeQuestion = [
  {
    question: "Quelle est la capitale du Congo-Brazzaville ?",
    propositions: ["Brazzaville", "Pointe-Noire", "Dolisie", "Ouesso"],
    reponse: 0
  },
  {
    question: "Quel est le nom du fleuve principal qui traverse le Congo-Brazzaville ?",
    propositions: ["Congo", "Niger", "Nil", "Zambèze"],
    reponse: 0
  },
  {
    question: "Quel est le symbole national du Congo-Brazzaville ?",
    propositions: ["Okoumé", "Sapeurs", "Léopard", "Coq de pêche"],
    reponse: 2
  },
  {
    question: "En quelle année le Congo-Brazzaville a-t-il obtenu son indépendance ?",
    propositions: ["1958", "1960", "1965", "1972"],
    reponse: 1
  },
  {
    question: "Qui était le premier président du Congo-Brazzaville après son indépendance ?",
    propositions: ["Fulbert Youlou", "Alphonse Massamba-Débat", "Marius Moutet", "Jacques Opangault"],
    reponse: 0
  },
  {
    question: "Quel est le nom de la plus grande réserve naturelle du Congo-Brazzaville ?",
    propositions: ["Parc national de Nouabalé-Ndoki", "Réserve de faune d'Odzala", "Parc national de Conkouati-Douli", "Réserve naturelle de Gorilla"],
    reponse: 1
  },
  {
    question: "Combien d'arrondissements compte la ville de Brazzaville ?",
    propositions: ["5", "8", "10", "12"],
    reponse: 2
  },
  {
    question: "Qui est considéré comme le père de l'indépendance du Congo-Brazzaville ?",
    propositions: ["Marius Moutet", "Alphonse Massamba-Débat", "Jacques Opangault", "Fulbert Youlou"],
    reponse: 3
  },
  {
    question: "Quelle est la monnaie officielle du Congo-Brazzaville ?",
    propositions: ["Franc CFA", "Euro", "Dollar américain", "Naira"],
    reponse: 0,
  },
  {
    question: "Quel est le plat traditionnel le plus populaire au Congo-Brazzaville ?",
    propositions: ["Foufou", "Pondu", "Chikwanga", "Saka-saka"],
    reponse: 1
  },
  {
    question: "Combien de présidents le Congo-Brazzaville a-t-il eu depuis son indépendance ?",
    propositions: ["4", "6", "8", "10"],
    reponse: 0
  },
  {
    question: "Quel est le plus grand groupe ethnique du Congo-Brazzaville ?",
    propositions: ["Kongo", "Lari", "Teke", "Mbochi"],
    reponse: 2
  },
  {
    question: "Quel est le nom du célèbre parc national qui abrite des gorilles des plaines au Congo-Brazzaville ?",
    propositions: ["Parc national de Nouabalé-Ndoki", "Parc national d'Odzala-Kokoua", "Réserve naturelle de Gorilla", "Parc national de Conkouati-Douli"],
    reponse: 1
  },
  {
    question: "Quel est le principal produit d'exportation du Congo-Brazzaville ?",
    propositions: ["Pétrole", "Café", "Diamants", "Bois"],
    reponse: 0
  },
  {
    question: "Quel est le nom de la plus haute montagne du Congo-Brazzaville ?",
    propositions: ["Mont Nabemba", "Mont Berongou", "Mont Bambouto", "Mont Lékoni"],
    reponse: 1
  },
  {
    question: "Quel est le festival culturel le plus important au Congo-Brazzaville ?",
    propositions: ["Festival Mantsina sur scène", "Festival Mbonda Elela", "Festival N'sangu Ndji-Ndji", "Festival Fespam"],
    reponse: 3
  },
  {
    question: "Quel est le nom de l'île située en face de Brazzaville, sur le fleuve Congo ?",
    propositions: ["Île Mbamou", "Île Mbianda", "Île Mbamou Island", "Île Mbamou-Punikin"],
    reponse: 1
  },
  {
    question: "Quel est le principal sport pratiqué au Congo-Brazzaville ?",
    propositions: ["Football", "Basketball", "Athlétisme", "Boxe"],
    reponse: 0
  },
  {
    question: "Qui est l'auteur du célèbre roman 'Les soleils des indépendances' qui se déroule au Congo-Brazzaville ?",
    propositions: ["Sony Labou Tansi", "Alain Mabanckou", "André Gide", "Ahmadou Kourouma"],
    reponse: 3
  },
  {
    question: "Quel est le surnom donné à l'équipe nationale de football du Congo-Brazzaville ?",
    propositions: ["Les Diables Rouges", "Les Éperviers", "Les Aigles de Carthage", "Les Étalons"],
    reponse: 0
  }
];


function generateNomber(){
let n = (Math.floor(Math.random()*(listeQuestion.length)));
return n;
}

function debut () {
  son.play();
  window.addEventListener('load', () => {
    var n = generateNomber();
    question_principale.textContent = listeQuestion[n].question;
  
    for (var i = 0; i < 4; i++) {
      LesReponses[i].textContent = listeQuestion[n].propositions[i];
  
      LesReponses[i].addEventListener('click', (event) => {
        var selectedAnswer = event.target;
        var correctAnswerIndex = listeQuestion[n].reponse;
  
        if (selectedAnswer.textContent !== listeQuestion[n].propositions[correctAnswerIndex]) {
          
          selectedAnswer.style.background = "red";
          son.pause();
          lost.play();
          LesReponses[correctAnswerIndex].style.background = "green";
          i++;
          score.textContent+=i;
        }
        son.pause();
        win.play();
  
        // Désactiver tous les boutons après la sélection
       setTimeout(()=>{ for (var j = 0; j < 4; j++) {
        LesReponses[j].disabled = true;
        location.reload();
      }},2000)
      });
    }
  
  });
  
   
};
debut();



