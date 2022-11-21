const ostrich = document.querySelector('.ostrich')
const name = document.querySelector('.name')
const gender = document.querySelector('.gender')
const age = document.querySelector('.age')
const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const arrivalDate = document.querySelector('.arrivalDate')
const fatherId = document.querySelector('.fatherId')
const motherId = document.querySelector('.motherId')
const create = document.querySelector('.create')
const invalidName = document.querySelector('.invalidName')
const invalidGender = document.querySelector('.invalidGender')
const invalidAge = document.querySelector('.invalidAge')
const invalidWeight = document.querySelector('.invalidWeight')
const invalidHeight = document.querySelector('.invalidHeight')
const invalidArrivalDate = document.querySelector('.invalidArrivalDate')
const invalidFatherId = document.querySelector('.invalidFatherId')
const invalidMotherId = document.querySelector('.invalidMotherId')

const expressions = {
    name: /^[a-zA-Z\s]{1,120}$/,
    age: /^[0-9]+$/,
    float: /^([0-9]*[.])?[0-9]+$/,
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
}

window.onload = function onload() {
    if(ostrichIsValid()) {
        tooltipList[0].disable()
        create.disabled = false
    } else {
        age.value = ''
        weight.value = ''
        height.value = ''
    }
}

ostrich.addEventListener('change', () => {
    if(ostrichIsValid()) {
        tooltipList[0].disable()
        create.disabled = false
    } else {
        tooltipList[0].enable()
        create.disabled = true
    }
})

function ostrichIsValid() {
    return nameIsValid() && genderIsValid() && ageIsValid() && weightIsValid() && heightIsValid() && arrivalDateIsValid() && fatherIdIsValid() && motherIdIsValid()
}

function nameIsValid() {
    return expressions.name.test(name.value)
}

function genderIsValid() {
    return gender.value === '0' || gender.value === '1'
}

function ageIsValid() {
    return expressions.age.test(age.value)
}

function weightIsValid() {
    return expressions.float.test(weight.value)
}

function heightIsValid() {
    return expressions.float.test(height.value)
}

function arrivalDateIsValid() {
    return arrivalDate.value !== ''
}

function fatherIdIsValid() {
    return fatherId.value === '' || expressions.uuid.test(fatherId.value)
}

function motherIdIsValid() {
    return motherId.value === '' || expressions.uuid.test(motherId.value)
}

name.addEventListener('change', () => {
    nameIsValid() ? hiddenError(invalidName, name) : showError(invalidName, name, 'Invalid name: cannot be empty, maximum 120 characters and only letters and spaces are allowed.\'')
})

gender.addEventListener('change', () => {
    genderIsValid() ? hiddenError(invalidGender, gender) : showError(invalidGender, gender, 'Please select a gender for the ostrich.')
})

age.addEventListener('change', () => {
    ageIsValid() ? hiddenError(invalidAge, age) : showError(invalidAge, age, 'Invalid age: cannot be empty and only numbers are allowed.')
})

weight.addEventListener('change', () => {
    weightIsValid() ? hiddenError(invalidWeight, weight) : showError(invalidWeight, weight, 'Invalid weight: cannot be empty, only numbers and points or commas are allowed.')
})

height.addEventListener('change', () => {
    heightIsValid() ? hiddenError(invalidHeight, height) : showError(invalidHeight, height, 'Invalid height: cannot be empty, only numbers and points or commas are allowed.')
})

arrivalDate.addEventListener('change', () => {
    arrivalDateIsValid() ? hiddenError(invalidArrivalDate, arrivalDate) : showError(invalidArrivalDate, arrivalDate, 'Please select a date.')
})

fatherId.addEventListener('change', () => {
    fatherIdIsValid() ? hiddenError(invalidFatherId, fatherId) : showError(invalidFatherId, fatherId, 'Please enter a valid UUID.')
})

motherId.addEventListener('change', () => {
    motherIdIsValid() ? hiddenError(invalidMotherId, motherId) : showError(invalidMotherId, motherId, 'Please enter a valid UUID.')
})

function hiddenError(fieldInvalid, field) {
    fieldInvalid.innerHTML = ''
    fieldInvalid.classList.add('hidden')
    field.classList.remove('is-invalid')
}

function showError(fieldInvalid, field, text) {
    fieldInvalid.innerHTML = text
    fieldInvalid.classList.remove('hidden')
    field.classList.add('is-invalid')
}