const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '21efd2bc7c41145741e6a110a26bcd52',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}


export default apiConfig;