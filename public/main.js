const btn = document.querySelector('#btn')
const container = document.querySelector('.container')

// loadEventListeners()
getData()
// function loadEventListeners() {
//     btn.addEventListener('click', getData)
// }

async function getData() {
    console.log('This is working')
    const res = await fetch('/api')
    const data = await res.json()
    updateHtml(data)
}

function updateHtml(data) {
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        const div = document.createElement('div')
        div.textContent = current.task
        div.id = i
        div.className = (current.complete === "no") ? 'div_task': "div_completed" 
        div.addEventListener('click', (e) => {
            const flip = e.target.className === "div_task"
            
            sendPatch(e.target.innerText, (flip) ? 'yes': 'no')
            e.target.className = (flip) ? 'div_completed': "div_task"
            console.log('this is the e param', e.target.innerText)
        })
        container.appendChild(div)
    }
}

function sendPatch(key, value) {
    
    console.log('this is the key value', key)
    console.log('this is the value', value)
}























