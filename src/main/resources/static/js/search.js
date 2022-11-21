const searchForm = document.querySelector('.searchForm')
const parameter = document.querySelector('.parameter')
const search = document.querySelector('.search')
const invalidParameter = document.querySelector('.invalidParameter')

const expressions = {
    name: /^[a-zA-Z\s]{1,120}$/,
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
}

function onloadSearch() {
    if(parameterIsValid()) {

        tooltipList[0].disable()
        search.disabled = false
    }
}

searchForm.addEventListener('change', () => {
    if(parameterIsValid()) {
        tooltipList[0].disable()
        search.disabled = false
    } else {
        tooltipList[0].enable()
        search.disabled = true
    }
})

function parameterIsValid(){
    return expressions.name.test(parameter.value) || expressions.uuid.test(parameter.value)
}

parameter.addEventListener('change', () => {
    parameterIsValid() ? hiddenError(invalidParameter, parameter) : showError(invalidParameter, parameter, 'If it is a name, it cannot be empty, maximum 120 characters and only letters and spaces are allowed. If it is an id please enter a valid uuid.')
})