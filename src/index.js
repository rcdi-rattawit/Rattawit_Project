import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeart from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC4qC-KVygcmY54uOICpM8FFLpriI8hpN0';

class App extends Component {  
    constructor(props){
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null
        };

        this.videoSearch('coresuccesssystem');
    }

    videoSearch(term) {
        YTSeart({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}


// Take this components generated HTML and put it on the page
// (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));