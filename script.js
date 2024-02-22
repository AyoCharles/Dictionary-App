const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const btn = document.getElementById('search-btn');
const body = document.getElementById('body');
const result = document.getElementById('result');
const sound = document.getElementById('sound');

btn.addEventListener('click', () => {
    let input = document.getElementById('input').value;

    fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        result.innerHTML = `
        <div id="word-sound" class="md:flex items-center justify-between pt-3">
        <h3 class="text-6xl font-bold capitalize">${input}</h3>
        <button onclick="sounds()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
        </button>
        
          
    </div>
    <p id="phonetics" class="font-semibold">${data[0].phonetic || ""}</p>

    <div id="property1" class="mt-5">
        <p class="mb-5 font-bold text-2xl capitalize">${data[0].meanings[0].partOfSpeech}</p>
        <p class="mb-3  font-semibold">Meanings</p>
        <ul class="list-disc ">
            <li> ${data[0].meanings[0].definitions[0].definition || ""}</li>
            <p class="font-semibold italic mt-3">Example: <span>${data[0].meanings[0].definitions[0].example || ""} </span></p>
    
        </ul>
        
    </div>

    <div>
        <p class="mt-5 font-bold ">Synonyms: <span class="">${data[0].meanings[0].definitions[0].synonyms[0] || ""} </span></p>
    </div>

        `
        sound.setAttribute('src', `${data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio || data[0].phonetics[3].audio}`);
        console.log(sound);

    })
    .catch(() => {
        result.innerHTML = `
        <p class="pt-3 text-xl">Invalid Word or Word not Available</p>
        `
    })
    
    
   
});

async function sounds() {
    await sound.play();
}



const serif = document.getElementById('serif');
const sansSerif = document.getElementById('sans-serif');
const mono = document.getElementById('mono');
const mode = document.getElementById('mode');

serif.addEventListener('click', () => {
    body.style.fontFamily = `Georgia, 'Times New Roman', Times, serif`;
});

sansSerif.addEventListener('click', () => {
    body.style.fontFamily = `Arial, Helvetica, sans-serif`;
});

mono.addEventListener('click', () => {
    body.style.fontFamily = `monospace`;
});


let toggle = true;

mode.addEventListener('click', () => {
    console.log('clicked');
    
    if (toggle) {
        body.style.background = 'black';
        // mode.innerHTML = 'Light Mode';
        mode.style.color = 'white';
        body.style.color = 'white';
    } else {
        body.style.background = 'white';
        // mode.innerHTML = 'Dark Mode';
        mode.style.color = 'grey';
        body.style.color = 'black';
    }

    toggle = !toggle;

});

const burger = document.getElementById('burger');
const options = document.getElementById('options');

burger.addEventListener('click', () => {
    if (options.classList.contains('hidden')) {
        options.classList.remove('hidden');
    } else {
        options.classList.add('hidden');
    }
});


