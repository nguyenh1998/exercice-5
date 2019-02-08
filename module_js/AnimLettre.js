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
    
        let elmPrincipale = this.creerElement(this.elmParent,
            'div',
            '',
            'mot')

        let elmVeille = this.creerElement(elmPrincipale,
            'div',
            'Veille')

        let elmTechnologique = this.creerElement(elmPrincipale,
            'div',
            'Technologique')
        
        let i = 0;
        let lesLettres = document.querySelectorAll(".mot:nth-child(1) > div")
        //Quand la page est chargée, on attribue un délai cumulatif de 0.5s
        //pour débuter l'animation de chaque lettre du mot JOYEUX

        for (let uneLettre of lesLettres){
            
            uneLettre.style.animationDelay = (i * 0.5) + "s";
            
        }
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