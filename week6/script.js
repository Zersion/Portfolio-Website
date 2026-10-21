const button = document.getElementById("generate-button");
const memeText = document.getElementById("meme-text");
const memeImage = document.getElementById("meme-image");

const image = document.getElementById("image");

const supabaseClient = supabase.createClient(
    "https://uspxokoxzbajirtyhtjv.supabase.co",
    "sb_publishable_QfPcMD4M9fWHFAL5oHRznA_7g7g-v5Y"
);
const memeDatabase = document.getElementById("meme-database");

const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveMeme);


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

    fetch("https://api.datamuse.com/words?ml=dream")
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

async function getMemes() {

    const { data, error } = await supabaseClient
      .from("memes")
      .select("*")
      .order("id", { ascending: true });
  
    if (error) {
      console.error("Could not retrieve memes:", error);
      return;
    }
  
    data.forEach(meme => {
      const memeDiv = document.createElement("div");
      memeDiv.className = "meme";
  
      const image = document.createElement("img");
      image.src = meme.image_url;
      image.className = "meme-image";
  
      const text = document.createElement("p");
      text.textContent = meme.meme_text;
      text.className = "meme-text";
  
      memeDiv.appendChild(image);
      memeDiv.appendChild(text);
  
      memeDatabase.appendChild(memeDiv);
    });
}

async function saveMeme() {

    const { error } = await supabaseClient
      .from("memes")
      .insert({
        image_url: memeImage.src,
        meme_text: memeText.textContent
      });
  
    if (error) {
      console.error("Could not save meme:", error);
    } else {
      console.log("Meme saved!");
    }
}

getMemes();