import {
    Util
} from './Util.js'

export class AnimLettre {

    constructor(s, elementHeader, finAnim) {
        this.lesLettres = s.lesLettres;
        this.elmHeader = elementHeader;
        this.animLettre()
        this.finAnim = finAnim

    }

    animLettre() {
        let elmConteneur = this.creerElement(this.elmHeader,
            'div',
            this.lesLettres,
            'mot')
    }

    creerLettre(elmParent, balise, contenu, classCss) {
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