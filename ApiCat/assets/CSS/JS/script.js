const BASE_URL = "https://api.thecatapi.com/v1/images/search";

const getCats = async() => {

     const data = await fetch(BASE_URL)
     const json = awiat data.json(); 
     return json.webpurl;

};
    
const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();

};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);



