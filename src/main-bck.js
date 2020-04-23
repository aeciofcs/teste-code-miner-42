/*
const arr = [1,3,4,5,8,10];

// Percorre todo o vetor e executa
// uma ação nossa. 
const newArr = arr.map(function(item){
    return item * 2;    
});
const newArr2 = arr.map(function(item,index){
    return item + index;    
});

console.log(newArr)
console.log(newArr2)

// reduce = consumir todo o vetor e 
// transformar em uma unica informação 
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// pegar todos os numeros que são pares de 
// do array. o Retorno do filter é true ou false 
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// find: verificar se existe alguma informação dentro
//do array. Retorna true ou false; 
const find = arr.find(function(item){
    return item === 2;
});

console.log(find);

// arrow function 
const newArr3 = arr.map(item => item * 2);
console.log(newArr3);

// valores padrão: 
const soma = (a=4, b=6) => a + b;
console.log(soma(1));
console.log(soma());

// Desestruturação 
const usuario = {
    nome: 'Aécio',
    idade: 37,
    endereco: {
        cidade: 'Mossoro',
        estado: 'RN',
    },
    empresa: 'Rocketseat'
};
console.log(usuario);
const { nome, idade, endereco:{cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
//const { endereco:{cidade} } = usuario;
//console.log(cidade);

// Podemos desestruturar nos parametros de funções: 
//passa o objeto como parametro e nos parametros da função
//faz a desestruturação.
function mostraNome( {nome,idade} ){
    console.log('Pela função: ' + nome + '. Sua idade é: ' 
                + idade + ' anos.');
}
mostraNome(usuario);

// Operadores rest e spread;
//tem que instalar o pacote pq não é nativo do JS. 
//Inslaremos através do Babel;

// REST = serve para pegar o resto das propriedades
// Exemplo com Objeto
const usuario2 = {
    nome2: 'Aécio Silva',
    idade: 37,
    endereco: {
        cidade: 'Mossoro',
        estado: 'RN',
    },
    empresa: 'Rocketseat'
};
const { nome2, ...resto } = usuario2;
console.log(nome2);
console.log(resto);

// Exemplo de REST com arrays;
const [a,b,...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// Exemplo parametro de funções
function somar(a,b,...params){
    return a + b + 
    params.reduce((total,item) => total+item,0);
}
console.log(somar(1,1));

//SPREAD
const usuario1 = {
    nome: 'Anny',
    idade: 9,
    empresa: 'Rocketseat'
}
const usuario3 = {...usuario1, nome: 'Anna Patricia'};
console.log(usuario3);

// template literals: incluir variaveis dentro de strings.
console.log(nome);
console.log(idade);
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//Object Short Syntax
*/

import Axios from "axios";

/*
//Desafio do Modulo 01 - JavaScript ES6
//Exercicio 1
class Usuario {    
    constructor(email, senha){        
        this.email = email;
        this.senha = senha;
        this.admin = false;       
    }
    isAdmin(){
        return this.admin;
    }  
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email,senha);        
        this.admin = true;
    }    
}
const User1 = new Usuario('annapatrician@gmail.com', '123456');
const Adm1  = new Admin('aeciofcs@gmail.com', 'pihgfm');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
*/

/*
//Exercicio 2
//2.1
const usuarios = [
    {nome: 'Diego',   idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas',   idade: 30, empresa: 'Facebook'}
];

const idades = usuarios.map(function(item){
    return item.idade;
});

console.log(idades);

//2.2
const filter = usuarios.filter(function(item){
    return (item.idade >= 18 && item.empresa === 'Rocketseat');
});

console.log(filter);

//2.3
const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

//2.4
const mult = usuarios
    .map(usu => ({...usu, idade: usu.idade * 2 }) )
    .filter(usu => usu.idade <= 50 );
console.log(mult);
*/


/*
//Exercicio 3

//3.1
const arr = [1,2,3,4,5];
arr.map(function(item){
    return item + 10;
});
//Arrow Function
arr.map(item => item + 10);

//3.2
const usuario = { nome: 'Diego', idade: 23 };

//function mostraIdade(usuario){
//   return usuario.idade;
//}

const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));

//3.3
const nome  = "Diego";
const idade = 23;

//function mostraUsuario(nome = 'Diego', idade = 18){
//    return {nome, idade};
//}
const mostraUsuario = 
(nome = 'Diego', idade = 18) => ({nome, idade});

//console.log(mostraUsuario(nome,idade));
//console.log(mostraUsuario(nome));

//3.4

//const promise = function(){
//    return new Promise(function(resolve, reject){
//        return resolve();
//    })
//};

const promise1 = () => new Promise( (resolve, reject) => resolve() );

console.log(promise1());
*/

/*
//Exercicio 4
//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};
const {nome, endereco:{cidade}, endereco:{estado} } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//4.2
function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({nome: 'Diego', idade: 23}));
*/

//import {soma, sub} from './funcoes';
//import soma from './soma';
//console.log(soma(1,2));
//console.log(sub(2,1));

//alert('Testando...');

/*
import ClasseUsuario from './functions';
import {idade} from './functions';

//1.1
ClasseUsuario.info();
//1.2
console.log(idade);

//1.3
import ClasseUsuario, {idade as IdadeUsuario} from './functions';
ClasseUsuario.info();
console.log(IdadeUsuario);
*/



// async e await

//const minhaPromise = () => new Promise( (resolve, reject) => {
//    setTimeout( () => { resolve('OK') }, 2000 );
//});

/*
minhaPromise()
    .then( response => {
        console.log(response);
    })
    .catch(err => {

    });
*/

/* async function executaPromise(){
    //const response = await minhaPromise();
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    //console.log(response);
} */

/* const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};
executaPromise(); */


// trabalhando com axios e async/await
/* import axios from 'axios';

class Api {    
    static async getUserInfo(username){        
        try{            
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err){
            console.warn('Erro na API');
        }
        
    }
    
}

Api.getUserInfo('aeciofcsa'); */

//Função delay aciona o .then apos 1s
/* const delay = () => new Promise( resolve => setTimeout(resolve, 1000 ) );
async function umPorSegundo(){
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s')
    await delay();
    console.log('4s')
    await delay();    
    console.log('5s')
} */
//umPorSegundo();

//
/* import axios from 'axios';
async function getUserFromGitHub(user){
    try{        
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err) {
        console.log('Usuário Não existe');
    }
    
    //.then(response => {
    //    console.log(response.data);
    //})
    //.catch(err => {
    //    console.log('Usuário não existe');
    //})
}

getUserFromGitHub('diego3g');
getUserFromGitHub('aeciofcs'); */

import axios from 'axios';
class Github{
    static getRepositories(repo){
        axios.get(`https://api.github.com/repos/${repo}`)                   
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositorio não existe');
        })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');