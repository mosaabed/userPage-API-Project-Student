//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            friendsList:[],
            myProfile:{},
            favoritQuote: ""  ,
            favPokimn:{}

        }
    }
    loadAllData()
    {
        this.gitRandUserAPI()
        this.gitRandQuoteAPI()
        this.gitRandPokimoneAPI()
    }
    gitRandUserAPI()
    {
        $.ajax({
	        method: "GET",
	        url: `https://randomuser.me/api/?results=7`,
	        success:  (data)=> {
                this.data.myProfile = data.results[0]
                this.data.friendsList = data.results.slice(1,data.results.length)},
	        error: function (xhr, text, error) {
                console.log(text);
                console.log("hmmmmmmmmmmmmmmmmm");
	        }
        }); 
    }

    gitRandQuoteAPI()
    {
        $.ajax({
	        method: "GET",
	        url: `https://api.kanye.rest`,
	        success:  (data)=> {
                this.data.favoritQuote = data
               
	        },
	        error: function (xhr, text, error) {
                console.log(text);
                console.log("hmmmmmmmmmmmmmmmmm222222222222");
	        }
        }); 
        
    }

    _getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }

    gitRandPokimoneAPI()
    {
        $.ajax({
	        method: "GET",
	        url: `https://pokeapi.co/api/v2/ability`,
	        success:  (data)=> {
                let x =(this._getRndInteger(0, 20) )
                this.data.favPokimn = data.results[x]
                console.log(this.data.favPokimn)
	        },
	        error: function (xhr, text, error) {
                console.log(text);
                console.log("hmmmmmmmmmmmmmmmmm333333333333");
	        }
        }); 
        
    }
}
