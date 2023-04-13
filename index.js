(function(){
    "use strict";
    
    function hrefTargetValite(){

        const hrefElements = Array.from(document.querySelectorAll('a')).filter(i => i.attributes[0].value.includes('http'));

        if(hrefElements.length > 0){
            hrefElements.map(hrefElement => {
                if(!hrefElement.getAttribute('target') || hrefElement.getAttribute('target') !== 'blank'){
                    hrefElement.setAttribute('target', '_blank');
                }
            });
        }
    
    }


    /**
     * 
     * Executa ao completar o carregamento do DOM
     * 
    */
    window.addEventListener('DOMContentLoaded', hrefTargetValite);

})();