let  dataStore = new APIManager()
dataStore.loadAllData() 
let renderall = new Renderer()

$("#desplayButton").click(function()
{
    renderall.render(dataStore.data);
})

$("#loadButton").click(function()
{
    dataStore.loadAllData() 
})

