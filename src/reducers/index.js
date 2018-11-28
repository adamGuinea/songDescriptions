import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:04'},
        {title: 'I Would Do Anything', duration: '7:29'},
        {title: 'Shot To The Heart', duration: '3:18'},
        {title: 'Mamacita', duration: '5:01'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});