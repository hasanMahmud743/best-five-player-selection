document.getElementById('calculate-button').addEventListener('click', function(){
    const playerPrice = getValue('player-amount')

    if(isNaN(playerPrice)){
        alert('Please give a number value to continue.')
        return
    }
    const allPlayerCost = playerPrice * 5
    setValue(allPlayerCost, 'player-ex' )

   
})



document.getElementById('total-calculate').addEventListener('click', function(){
    const totalPlayerCost = getInnerText('player-ex')
    const managerCost = getValue('manager-cost')
    const coachCost = getValue('coach-cost')

    if(isNaN(managerCost + coachCost)){
        alert('Please give a number value to continue.')
        return
    }

    const finalTotal = totalPlayerCost + managerCost + coachCost
    setValue(finalTotal, 'final-total' )

})




// document.getElementById('click-one').addEventListener('click', function(){

//     const button = document.getElementById('click-one')
//     button.setAttribute('disabled', true) 

//     const playerName = document.getElementById('player-name')
//     const innerText = playerName.innerText
//     const playerList = document.getElementById('player-list')

//     const creat = document.createElement('li')
//     creat.innerText = innerText
//     playerList.appendChild(creat)



// })

addEventListener('first-button', 'first-player')
addEventListener('sec-button', 'sec-player')
addEventListener('third-button', 'third-player')
addEventListener('fourth-button', 'fourth-player')
addEventListener('fifth-button', 'fifth-player')
addEventListener('sixth-button', 'sixth-player')



