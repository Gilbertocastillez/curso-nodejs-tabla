const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async(base = 5, listar=false, hasta=10) => {
    try {
       
        let salida = "";
      
        for (let i = 1; i <= hasta; i++) {
          salida += `${base} x ${i} = ${base * i}\n`;
        }
      
        if(listar){
            console.log("=============================");
            console.log("Tabla del: ".red, base);
            console.log("=============================".cyan);
      
             console.log(salida.rainbow);
        }
        
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
      
        return(`tabla-${base}.txt`.rainbow)
    } catch (err) {
        throw err
    }

 
};

module.exports = {
    crearArchivo
}

