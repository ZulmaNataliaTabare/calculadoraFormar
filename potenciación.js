function potenciación(base,exponente){
    let i=0;
    let resultado=1;

    if (exponente==0){
        return resultado=1
    }

    else if(exponente<0){
        exponente*=-1
        do{
            i+=1;
            resultado*=base;
        }while(i<exponente);
        return `1/${resultado} = ${1 / resultado}`;
    }

    else{
        do{
            i+=1;
            resultado*=base;
        }while(i<exponente);
    
        return resultado
    }


}
module.exports = potenciación;


