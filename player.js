document.getElementById('calculate-button').addEventListener('click', function(){
    const playerPrice = getValue('player-amount')

    if(isNaN(playerPrice)){
        alert('Please give a number value to continue.')
        return
    }

    const timeCount = document.getElementsByTagName('li').length
    const allPlayerCost = playerPrice * timeCount
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

addEventListener('first-button', 'first-player')
addEventListener('sec-button', 'sec-player')
addEventListener('third-button', 'third-player')
addEventListener('fourth-button', 'fourth-player')
addEventListener('fifth-button', 'fifth-player')
addEventListener('sixth-button', 'sixth-player')



