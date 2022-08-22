// fucntion for getting vlaue 

function getValue(feildID){
    const getField = document.getElementById(feildID)
    const getFieldString = getField.value
    const getValue = parseInt(getFieldString)
    getField.value = ''
    return getValue
}



// function for getting inner text

function getInnerText(feildID){
    const getField = document.getElementById(feildID)
    const getFieldString = getField.innerText
    const getInnerText = parseInt(getFieldString)
    return getInnerText
}


// fuction for setting a vlaue

function setValue(value, id){
    const getValue = document.getElementById(id)
    getValue.innerText = value
}



// function for add event listner

function addEventListener(fieldID, listPlayerName){
    document.getElementById(fieldID).addEventListener('click', function(){

        const button = document.getElementById(fieldID)
        button.setAttribute('disabled', true) 
    
        const playerName = document.getElementById(listPlayerName)
        const innerText = playerName.innerText

        const playerList = document.getElementById('player-list')
        const timeCount = document.getElementsByTagName('li').length
        console.log(timeCount)

        if(timeCount < 5){  
            const creat = document.createElement('li')
            creat.innerText = innerText
            playerList.appendChild(creat)

        }  else{
            alert('Vacancy is full. You cant add more player in this card. ')

        }
        
    
    
    })
}
