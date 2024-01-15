const sendForm = () => {
    const form = document.getElementById('form');
    const inputFio = form.querySelector('input[name="fio"]')
    const inputPhone = form.querySelector('input[name="tel"]')
    const urlPost = 'https://jsonplaceholder.typicode.com/posts'
    let data

    const clearInputs = () => {
        inputFio.value = ''
        inputPhone.value = ''
    }

    const sendData = async () => {
        try {
            const response = await fetch(urlPost, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data)
        } catch (e) {
            console.log(e)
        } finally {
            console.log("Данні відправлені")
        }
    }


    form.addEventListener('input', (e) => {
        const click = e.target;
        const name = click.name;

        if (name === 'tel') {
            click.value = click.value.replace(/[^0-9+()-]+/g, '');
            return
        }

        if (name === 'fio') {
            click.value = click.value.replace(/[^а-яёА-ЯЁ -]/g, '');
        }
    })

    form.addEventListener('click', (e) => {
        if (e.target.type === 'submit') {
            data = {
                name: inputFio.value,
                phone: inputPhone.value
            }
            sendData()
            toggleClasses()
            clearInputs()
        }
    })
}

export default sendForm
