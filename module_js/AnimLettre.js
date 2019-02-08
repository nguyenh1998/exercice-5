import {
    Util
} from './Util.js'

export class AnimLettre {

    constructor(lesLettres, elementParent, finAnim) {
        this.lesLettres = lesLettres;
        this.elmParent = elementParent;
        this.animLettre()
        this.finAnim = finAnim

    }

    animLettre() {
        console.log('introduction')
        let phrase = this.lesLettres
        console.log(phrase)
        
        let elmPrincipale = this.creerElement(this.elmParent,
            'div',
            this.lesLettres,
            'mot')

            // let i = 0;
            // //let ensembleDesLettre = document.querySelectorAll(".mot > div")
            // let lesLettres = document.querySelectorAll(".mot:nth-child(1) > div")
            // let nbLettres = lesLettres.length;
            // //Quand la page est chargée, on attribue un délai cumulatif de 0.5s
            // //pour débuter l'animation de chaque lettre du mot JOYEUX
    
            // for (let uneLettre of lesLettres){
                
            //     uneLettre.style.animationDelay = (i * 0.5) + "s";
            //     uneLettre.style.color = tabCouleur[(i++)%7]
                
            // }
        
    
            // //Quand l'animation de la dernière lettre du mot joyeux est terminée la fonction animerNoel est appelée	
            // lesLettres[nbLettres - 1].addEventListener("animationend", animerNoel, false);
            // console.log('lesLettres[nbLettres - 1]' + lesLettres[nbLettres - 1].innerHTML)
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

}