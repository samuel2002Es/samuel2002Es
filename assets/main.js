const url = 'https://youtube-v38.p.rapidapi.com/playlist/videos/?id=PLlFc8LYTsDOz2o3R7Q7uRTOolNM3Z5zLm&hl=en&gl=US';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '562ebd80b9msh5f67a20261acc4ep1a2a12jsndf5f3fb4c31c',
		'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
	}
};

async function fetchdata(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
fetchdata(url);
 /* cuando cargue la pagina automaticamente se ejecuta esta funcion */
(async ()=>{
    try {
        const videos = await fetchdata(url);
        console.log(videos)
        let view = `
    ${videos.contents.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.video.thumbnails[3].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')} 
    `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error)
        content.innerHTML = '<h2 class="text-2xl font-bold tracking-tight text-gray-900">A ocurrido un error al intentar cargar los videos</h2>'
    }

})();  
