// ==========Promise===========

// console.localStorage(`request data`) / есть 4 вида запроса

// const p = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log(`preparing data ...` )
//         const backendData={
//             server: `AAA`,
//             port: 2000,
//             status: `500- server not found`
//         }
//         // resolve(backendData) /request approved and solved/ ответ положительный
//         // reject(backendData)  / request denied/откланен запрос
//     },2000);
// })
// p
// .then((data)=>console.log(`OK`, data))
// .catch((err)=>{
//     console.error(`ERROR`, err)
// })
// .finally((data)=>console.log(`Final answer`))

// >>>>>>>>>> HTTP methods/ виды запросов
// Get (получаем данные из бека)
// POST (отпраляем данные из бека)
// PUT PATCH(редактирование данных, изменение)
// DELETE (удленние данных)

// Виды HTTP статусов ============== Hyper Text Transmition Protocol 
// 200 - все правильно, ошибок нет
// 300 - перенаправление
// 400 - ошибка во фронтенде - неправельный запрос
// 500 - ошибеа сервера (обратится в бэкэнд)

// ===========Fetch======Async=======Await=======
// memorize this syntaxes!!!!!!

// const search = async()=>{
//     let url = `type here any url address`
//     let request = await fetch (url)
//     let response = await request.JSON()
//     console.log(response)
// }
// ================================================

// >>>>>>>>>GIFi project 

const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=27&q='

const input=document.getElementById(`input`)
const btn=document.getElementById(`btn`)
const output=document.getElementById(`output`)

// ищет данные (поисковик)

const SearchGiphy = async(e)=>{
    e.preventDefault()
    let text = input.value 
    let url = API+KEY+secondStr+text 
    let request = await fetch(url)
    let response = await request.json()
    input.value=``
    output.innerHTML=``
    renderGiphy(response.data)
    console.log(response.data)
  
}

// отрисовываем (всегда вызываем внутри поисковика)

const renderGiphy = (data)=>{
    data.forEach(element=>{
        let div = document.createElement(`div`)
        let iframe = document.createElement(`iframe`)
        let h3 = document.createElement(`h3`)
        iframe.src = element.embed_url 
        h3.innerHTML=element.title
        output.append(div)
        div.append(h3, iframe)
    })
}
btn.addEventListener(`click`, SearchGiphy)