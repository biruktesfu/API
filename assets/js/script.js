for(i=1;i<6;i++){
    var fetchAPI = async function (){
        var Author  = document.getElementById(`author${i}`);
        var Quote  = document.getElementById(`quote${i}`);
        Author.innerHTML = '<div class="ui active centered inline loader"></div>'
           await $.getJSON("https://api.quotable.io/random", function(data){
            return data
            }).then(data => {
                Author.innerHTML = data.author
                Quote.innerHTML = data.content
            })};
    
    fetchAPI()
    
}




