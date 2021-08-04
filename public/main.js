getData()



async function getData() {
    const data = await fetch('/api')
    showDataHtml(data)
}


function showDataHtml(data) {
    let div1 = document.createElement('div')
    div1.textContent = data
    document.body.appendChild(div1)
    console.log(div1)
}
// $.get('/api', (data) => {
//     let resultData = data.json
//     let h2 = document.createElement('h2')
//     h2.textContent = resultData
//     document.body.appendChild(h2)
//     console.log('this is the result of the api get request', data.json)
// })