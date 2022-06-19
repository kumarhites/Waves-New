import axios from "axios";
const url = 'https://ncsmusic.p.rapidapi.com/';

const options = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'f3eb4c1a78msh2d89f060ea21644p174ee3jsna5ac473991db',
    'X-RapidAPI-Host': 'ncsmusic.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export const getSongs = async () => {
    try {
        //request
        const {data} = await axios.get(url, options);
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

