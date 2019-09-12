import Axios from "axios";

//1--------------------------------------------
/*
const delay = () => new Promise(resolve => setTimeout(resolve,1000));

async function umPorSegundo(){
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

umPorSegundo();
*/

//2---------------------------------------------
/*
import axios from 'axios';

async function getUserfromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    }catch(err){
        console.log("Usuário não existe");
    }
}

getUserfromGithub('diego3g');
getUserfromGithub('diego3g12334');
*/

//3--------------------------------------------
/*
import axios from 'axios';
class GitHub{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        }catch(err){
            console.log('Usuario não encontrado');
        }
    }
}

GitHub.getRepositories('rocketseat/rocketseat.com.br');
GitHub.getRepositories('rocketseat/rasfs');
*/

//4------------------------------------------------
/*
import axios from 'axios';

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    }catch(err){
        console.log('Usuario não existe');
    }
};

buscaUsuario('diego3g');
*/






