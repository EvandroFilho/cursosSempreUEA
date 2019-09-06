var buttonElement = document.querySelector('#app button');

buttonElement.onclick = function(){
    var inputElement = document.querySelector('#app input');
    var listElement = document.querySelector('#app ul');

    axios.get('https://api.github.com/users/' + inputElement.value)
        .then(function(response){
            var list = Object.entries(response.data);
            var element = document.createElement('li');
            
            var text = "";
            for(const [id, data] of list){
                text += `${id} ${data}` + ' ';
            }
            
            var textElement = document.createTextNode(text);
            element.appendChild(textElement);
            
            element.appendChild(textElement);
            //console.log(text);
            listElement.appendChild(element);
            console.log(listElement);
           
        }) 
        .catch(function(error){
            console.warn(error);
        });

    inputElement.value = '';
}


