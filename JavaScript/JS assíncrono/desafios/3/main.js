var buttonElement = document.querySelector('#app button');


  
buttonElement.onclick = function(){
    var inputElement = document.querySelector('#app input');
    var listElement = document.querySelector('#app ul');

    axios.get('https://api.github.com/users/' + inputElement.value)
        .then(function(response){
            var element = document.createElement('li');
            
            var text = "";
            var loadingText = "Carregando";
            var loadingTextElement = document.createTextNode(loadingText);
            
            element.appendChild(loadingTextElement);
            listElement.appendChild(element);
            
            
            var list = Object.entries(response.data);
            for(const [id, data] of list){
                text += `${id} ${data}` + "\n";
            }
            element.removeChild(element.childNodes[0]);
            var textElement = document.createTextNode(text);
            element.appendChild(textElement);
            
            element.appendChild(textElement);
            //console.log(text);
            listElement.appendChild(element);
            console.log(listElement);
          
        }) 
        .catch(function(error){
            var element = document.createElement('li');

            var errorText = "ERRO 404 NOT FOUND >:(";
            var errorTextElement = document.createTextNode(errorText);
            element.appendChild(errorTextElement);
            listElement.appendChild(element);
        });

    inputElement.value = '';
}


