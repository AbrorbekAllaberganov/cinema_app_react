import React, {Component} from 'react';

class Search extends Component {
    state = {
        search: 'panda',
        type: 'all'
    }

    handleSearch = (e) => {
        this.setState({search: e.target.value})
    }
    handleKey = (e) => {
        console.log(e.key)
        if (e.key === 'Enter')
            this.props.search(this.state.search,this.state.type);
    }

    handleFilter = (e) => {
        this.setState({type: e.target.dataset.type}, () => {
                this.props.search(this.state.search,this.state.type)
            }
        )
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder={"Search"}
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleSearch}
                        onKeyDown={this.handleKey}
                    />
                    <button onClick={() => {
                        this.props.search(this.state.search,this.state.type)
                    }} className="btn search-btn" type="submit" name="action">
                        Search movie
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={"all"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={"movie"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={"series"}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>

            </div>
        );
    }
}

export default Search;