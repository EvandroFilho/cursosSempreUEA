const usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //map

const idades = usuarios.map(function ({
  idade
}) {
  return idade;
});
console.log(idades); //filter

const maiorIdadeRocketseat = usuarios.filter(function ({
  idade,
  empresa
}) {
  return empresa == 'Rocketseat' && idade >= 18;
});
console.log(maiorIdadeRocketseat); //find

const trabalhaGoogle = usuarios.find(function ({
  empresa
}) {
  return empresa == 'Google';
});
console.log(trabalhaGoogle); //unido operacoes

for (usuario of usuarios) {
  usuario.idade *= 2;
}

console.log(usuarios);
const usuariosCinquentaAnos = usuarios.filter(function ({
  idade
}) {
  return idade <= 50;
});
console.log(usuariosCinquentaAnos);
