const api_key = '003671e9f5aada7e8c8d37fcb3b8933e';

async function getCryptoData () {
    const url = `http://api.coinlayer.com/api/live?access_key=${api_key}`

    try {
        let result = await fetch(url)
        let data = await result.json();
        console.log(data)

        const bitcoinPrice = data.rates.BTC;
        const ethereumPrice = data.rates.ETH;
        const tetherPrice = data.rates.USDT;
        const cardanoPrice = data.rates.ADA;
        const bnbPrice = data.rates.BNB;
        const dogecoinPrice = data.rates.DOGE;

        document.getElementById('bitcoin-price').innerHTML = bitcoinPrice
        document.getElementById('ethereum-price').innerHTML = ethereumPrice
        document.getElementById('tether-price').innerHTML = tetherPrice
        document.getElementById('cardano-price').innerHTML = cardanoPrice
        document.getElementById('bnb-price').innerHTML = bnbPrice
        document.getElementById('dogecoin-price').innerHTML = dogecoinPrice
    } catch (error) {
        console.log('Error:', error);
    }

}

getCryptoData()

// Show info even without toggling hover
const toggleButton = document.getElementById('toggle-overlay');
const overlayInfo = document.querySelectorAll('.overlay');

toggleButton.addEventListener('click', () => {
    overlayInfo.forEach((overlayInfo) => {
        overlayInfo.classList.toggle('show');
    })
})