for(i=1;i<6;i++){
    var fetchAPI = async function (){
        var Author  = document.getElementById(`author_wisdom${i}`);
        var Quote  = document.getElementById(`quote_wisdom${i}`);
        Author.innerHTML = '<div class="ui active centered inline loader"></div>'
           await $.getJSON("https://api.quotable.io/random?tags=wisdom", function(data){
            return data
            }).then(data => {
                Author.innerHTML = data.author
                Quote.innerHTML = data.content
            })};
    
    fetchAPI()
}


