import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,randint,combinaison_listes} from "/modules/outils.js"


/**
 * Description didactique de l'exercice
 * @Auteur 
 * Référence 2L35
 * Date 2021-01-15 
*/
export default function NomQuelconqueDeLaFonctionQuiCreeExercice() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Exercice exemple";
  this.consigne = "";
  this.nb_questions = 10;
  this.nb_cols = 2; // Uniquement pour la sortie LaTeX
  this.nb_cols_corr = 2; // Uniquement pour la sortie LaTeX
  this.sup = 1; // Niveau de difficulté à ne définir que si on peut le modifier avec un formulaire en paramètre
  this.tailleDiaporama = 100; // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte
  this.video = "" // Id YouTube ou url

  this.nouvelle_version = function () {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = ['distributiviteSimple','distributiviteSimple','distributiviteSimple','distributiviteDouble']; // On créé 3 types de questions
    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions); // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, texte, texte_corr, k, a, b, cpt = 0; i < this.nb_questions && cpt < 50;) {
        // Boucle principale où i+1 correspond au numéro de la question
      switch (liste_type_de_questions[i]) { // Suivant le type de question, le contenu sera différent
        case 'distributiviteSimple':
          k = randint(2,9)
          a = randint(2,9)
          b = randint(2,9)  
          texte = `$${k}(${a}x-${b})$`;
          texte_corr = `Correction ${i+1} de type 1`;
          break;
        case 'disitributiviteDouble': 
            texte = `Question ${i+1} de type 2`;
            texte_corr = `Correction ${i+1} de type 2`;
          break;
        case 'type3': // Table de 200
            texte = `Question ${i+1} de type 2`;
            texte_corr = `Correction ${i+1} de type 2`;
          break;
        
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

// python3 list-to-js.py pour faire apparaitre l'exercice dans le menu

