/* ### Transformar notas escolares  

Crie um algoritimo que trasnforme as notas do sistema numérico para sistemas de notas em caracteres tipo A B C D F

* de 90 para cima -  A
* entre 80 - 89   -  B
* entre 70 - 79   -  C
* entre 60 - 69   -  D
* menor que 60    -  F

*/

let nota = 100

if (nota >= 90 && nota <= 100) {
  // * de 90 para cima -  A
  console.log('A')
} else if (nota >= 80 && nota <= 89) {
  // * entre 80 - 89   -  B
  console.log('B')
} else if (nota >= 70 && nota <= 79) {
  // * entre 70 - 79   -  C
  console.log('C')
} else if (nota >= 60 && nota <= 69) {
  // * entre 60 - 69   -  D
  console.log('D')
} else if (nota < 60 && nota >= 0) {
  // * menor que 60    -  F
  console.log('F')
} else {
  // Sistema de verificação
  console.log('Nota inseriada é invalida')
}
