
const GerarQRCode = () => {
    var inputUser = document.querySelector('textarea').value;

    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=400x400&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUser);
    
    //encodeURIComponent = transfroma texto em url

    document.querySelector('#QRCodeImage').src = conteudoQRCode;

}