import axios from 'axios';
const KEY = "AIzaSyD_J_KR7_TTMfI1vvK6yle3I1l2C3JB3RE";

const YoutubeSearch = () => {
    axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 7,
            key: KEY
        }
    })
};

export default YoutubeSearch;