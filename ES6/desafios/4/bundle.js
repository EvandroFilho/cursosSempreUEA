//4.1
const empresa = {
  nome: 'Rocketseat',
  endereço: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
const {
  nome,
  endereço: {
    cidade,
    estado
  }
} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado); //4.2

/*
function mostraInfo(usuario){
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
*/

function mostraInfo(usuario) {
  const {
    nome,
    idade
  } = usuario;
  return `${nome} tem ${idade} anos`;
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
