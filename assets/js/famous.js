for(i=1;i<6;i++){
    var fetchAPI = async function (){
        var Author  = document.getElementById(`author_famous${i}`);
        var Quote  = document.getElementById(`quote_famous${i}`);
        Author.innerHTML = '<div class="ui active centered inline loader"></div>'

           await $.getJSON("https://api.quotable.io/random?tags=famous-quotes", function(data){
            return data
            }).then(data => {
                Author.innerHTML = data.author
                Quote.innerHTML = data.content
            })};
    
    fetchAPI()
}


