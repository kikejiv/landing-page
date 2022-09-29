//
const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11f95b2f97mshc7daf39c16a9a36p11d883jsn73a13500465c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//para llamar la 
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//funcion que se invoca asi misma debido a que despues llama el mismo codigo de arribah acia abajo 
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(videos => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${videos.snippet.thumbnails.high.url}" alt="${videos.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${videos.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')}
        
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);

    }
})();