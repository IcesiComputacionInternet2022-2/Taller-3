
/**
 * 
 * @param {string} url url to send the request  
 * @param {object} obj object destinated to the API
 * @returns response from the API
 */
async function postPrayer(url,obj){
    let res = await fetch(url,{
        method : "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body : JSON.stringify(obj)
    })
    
    let response = await res.json()
    let status = res.status
    return {...response, status}
}

async function getPrayer(url){
    let res = await fetch(url)
    let response = await res.json()
    
    return response
}

export {postPrayer,getPrayer}