//5.1

const arr = [1,2,3,4,5,6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...params){
    return params.reduce(function(item,total){
        return total + item;
    });
}

console.log(soma(1,2,3));

//5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome:'Gabriel'};
const usuario3 = {...usuario, endereco:{...usuario.endereco,cidade: 'Teste'}};

console.log(usuario2);
console.log(usuario3);
