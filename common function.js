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
