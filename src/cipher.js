const cipher = {

    encode: function (mensaje1,offset) {
        let menReturn =''; 
        for (let i=0; i < mensaje1.length; i++) {
            let numAscii = mensaje1.charCodeAt(i);
                let position = (numAscii-32+offset)%255+32;
                menReturn += String.fromCharCode(position);
            }

    return menReturn;
    },
    
    decode: function(mensaje1,offset) {
        let menReturn =''; 
        for (let i=0; i < mensaje1.length; i++) {
            let numAscii = mensaje1.charCodeAt(i);
                let position = (numAscii-32-offset)%255+32;
                menReturn += String.fromCharCode(position);
            }
    
    return menReturn;
        }
    
    };
    
    
    export default cipher;
    
    
    