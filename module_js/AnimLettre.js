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
            this.lesLettres,
            'mot')

        
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