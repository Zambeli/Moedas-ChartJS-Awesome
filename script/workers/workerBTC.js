addEventListener("message", event => {
    let moeda = event.data
    conectaAPI(moeda)
    setInterval(() => conectaAPI(moeda),5000)
})

async function conectaAPI () {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
    const conectaTraduzido = await conecta.json()
    postMessage(conectaTraduzido.BTCBRL)
}
