document.getElementById('calculate-button').addEventListener('click', function(){
    const playerPrice = getValue('player-amount')
    if(isNaN(playerPrice)){
        alert('insert a number')
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
        alert('insert a number')
        return
    }

    const finalTotal = totalPlayerCost + managerCost + coachCost

    
    setValue(finalTotal, 'final-total' )

   
})
