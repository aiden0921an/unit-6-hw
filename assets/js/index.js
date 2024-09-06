

//grabs search history from local storage otherwise returns an empty array
const cityHistory= document.getElementById('cities')
const searchHistory=JSON.parse(localStorage.getItem('searchHistory')) || [];



function searchHistory(){
    if (!cityHistory.includes(city)){
        cityHistory.push(city)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        //add function to render
    }
}


function renderSearchedCity(){
    searchHistory.forEach((city) => {
        
    })
}