for(i=1;i<3;i++){
    var fetchAPI = async function (){
        var Author  = document.getElementById(`author_rel${i}`);
        var Quote  = document.getElementById(`quote_rel${i}`);
        Author.innerHTML = '<div class="ui active centered inline loader"></div>'

           await $.getJSON("https://api.quotable.io/random?tags=religion", function(data){
            return data
            }).then(data => {
                Author.innerHTML = data.author
                Quote.innerHTML = data.content
            })};
    
    fetchAPI()
}


