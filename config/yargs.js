const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: 'true',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l',{
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla'
              })
              .options('h',{
                alias: 'hasta',
                type: 'number',
                default:10,
                describe: 'Numero hasta donde quieres la tabla'
            })
                .check((argv, options) => {
                    if ( isNaN(argv.b)){
                      throw 'La base tiene que ser un numero'  
                    } return true;
                })
                .argv;
                
module.exports = argv;
