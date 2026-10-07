const button = document.getElementById("generate-button");
const memeText = document.getElementById("meme-text");
const memeImage = document.getElementById("meme-image");

const image = document.getElementById("image");

button.addEventListener("click", generateMeme);

function generateMeme() {

    // Get text
    // fetch("https://corporatebs-generator.sameerkumar.website/?" + Date.now())
    //     .then(response => response.json())
    //     .then(data => {
    //     memeText.textContent = data.phrase;
    //     });

    fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=1")
        .then(response => response.json())
        .then(data => {
            memeText.textContent = data[0];
        });

    fetch("https://api.datamuse.com/words?ml=ecstatic")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

    // // Get image
    // fetch("https://yesno.wtf/api?" + Date.now())
    //     .then(response => response.json())
    //     .then(data => {
    //     memeImage.src = data.image;
    //     });
    
    // memeImage.src = "https://robohash.org/naomi";

    fetch("https://nekos.best/api/v2/wink")
        .then(response => response.json())
        .then(data => {
            image.src = data.results[0].url;
        });

}