function random() {
    const w = 420; /*768*/
    const h = 750; /*1080*/
    //document.getElementById('get').style.backgroundImage = "url('https://source.unsplash.com/random/500x500?city,night')";
    document.getElementById('get').style.backgroundImage ="url('https://source.unsplash.com/random/"+ w +"x"+ h +"?city,night')";
    document.getElementById('pa').innerHTML = 'Generating!';
}

function reset() {
    location.replace(document.baseURI);
    //location.reload();
    //window.location.reload(true);
    //location.href = location.href;
    //location.replace(location.href.split("#")[0]);
    //window.location.href = window.location.href.split("#")[0];
}
