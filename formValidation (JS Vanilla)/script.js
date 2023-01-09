const isValidEmail = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form');
const message = document.querySelector('.thanks');
const inputEmail = document.querySelector('input[name="email"]');
const inputName = document.querySelector('input[name="name"]');
const inputCpf = document.querySelector('input[name="cpf"]');
const inputMessage = document.querySelector('.message');

let isValidForm = false

const resetInput = (element) => {
    element.classList.remove('invalid')
    element.nextElementSibling.classList.add('error-hidden')
}

const invalidateElement = (element) => {
    element.classList.add('invalid')
    element.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
}

const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
        invalidateElement(inputName)
    }

    if (!isValidEmail(inputEmail.value)) {
        invalidateElement(inputEmail)
    }
    if (!isValidCPF(inputCpf.value)) {
        invalidateElement(inputCpf)
    }

    if (!inputMessage.value) {
        invalidateElement(inputMessage)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()

    if (isValidForm) {
        // Post - Backend (fetch)
        form.remove()
        message.classList.remove('error-hidden')
        console.log('Validou e enviou')
    }
})

inputName.addEventListener('input', () => {
    resetInput(inputName)
})

inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)
})

inputCpf.addEventListener('input', () => {
    resetInput(inputCpf)
})

inputMessage.addEventListener('input', () => {
    resetInput(inputMessage)
})