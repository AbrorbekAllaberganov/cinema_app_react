import React, {Component} from 'react';
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

class Main extends Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=9d63b571&s=Panda')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovie = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=9d63b571&s=${str}${type !== 'all' ? `&type=${type}` : ``}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        return (
            <div className={"content container"}>
                <Search search={this.searchMovie}/>
                {this.state.loading ? <Loader/> : (<Movies movies={this.state.movies}/>)}
            </div>
        );
    }
}

export default Main;