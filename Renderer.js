
class Renderer {
    constructor()
    {}
    
  
    render(data){
        this.friendsDesplay(data.friendsList)
        this.profileDesplay(data.myProfile)
        this.favQuoteDesplay(data.favoritQuote)
        this.pokimonDesplay(data.favPokimn)
    }    

    pokimonDesplay(data){
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);

        $('.pokemon-container').empty().append(newHTML);
    }

    favQuoteDesplay(data){
        const source = $('#favquote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);

        $('.quote-container').empty().append(newHTML);
    }

    profileDesplay(data){
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);

        $('.user-container').empty().append(newHTML);
    }

    friendsDesplay(data)
    {
       
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
    
        $('.friends-container').empty().append(newHTML);
    }

  

}