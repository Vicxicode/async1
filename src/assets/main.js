const API = 'https://spotify23.p.rapidapi.com/albums/?ids=27xqCLyTHom0wyjtw08K12';
const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd538b557e9msha9ed1e13f0b949dp11a4d8jsn1ebbf013b994',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const albums = await fetchData(API);
        let view = `
        ${albums.albums.map(cancion => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${cancion.images[0].url}" alt="${cancion.name}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${cancion.tracks.items.map(name => name.name)}
                </h3>
            </div>
            </div>
        `).slice(0,10).join('')}
        `;
        content.innerHTML = view;
    } catch(error) {
        console.log(error);
    }
})();