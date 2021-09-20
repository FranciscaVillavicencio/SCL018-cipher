const cipher = {

    encode: function (offset,mensaje1) {
        try {
        if (offset === null || offset === 0) {
            throw TypeError('Debes ingresar una clave válida');
        }
    }
    catch(TypeError) {
        throw TypeError('Debes ingresar una clave válida');
    }
        
        let menReturn =''; 
        for (let i=0; i < mensaje1.length; i++) {
            let numAscii = mensaje1.charCodeAt(i); 

            if (numAscii >= 65 && numAscii <=90) {
                let position = (numAscii-65+offset)%26+65;
                menReturn+=String.fromCharCode(position);
            }
            else if (numAscii >= 97 && numAscii <=122) {
                let position = (numAscii-97+offset)%26+97;
                menReturn+=String.fromCharCode(position);

              } else 
              menReturn += String.fromCharCode(numAscii);
        }

    return menReturn;
    },
    
    decode: function(offset,mensaje1) {
        try{

        if (offset === null || offset === 0) {
            throw TypeError('Debes ingresar una clave válida');
        }
    }
    catch(TypeError) {
        throw TypeError('Debes ingresar una clave válida');
    }

        let menReturn =''; 
        for (let i=0; i < mensaje1.length; i++) {
            let numAscii = mensaje1.charCodeAt(i);
            let numberLine = (numAscii-65-offset);
            let numberLineTwo = (numAscii-97-offset);

            while (numberLine<0){
                numberLine = numberLine + 26;
            }

            if (numAscii >= 65 && numAscii <=90) {
            let position = numberLine%26+65;
            menReturn += String.fromCharCode(position);
            }
            else if (numAscii >= 97 && numAscii <=122) {
                while (numberLineTwo<0){
                    numberLineTwo = numberLineTwo + 26;
                }
                let position = numberLineTwo%26+97;
                menReturn+=String.fromCharCode(position);

                } else 
              menReturn += String.fromCharCode(numAscii);
            }

    return menReturn;
        }
    
    };
    
    
    export default cipher;
    
    
    