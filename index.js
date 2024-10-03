// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

// Create components
class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </nav>
                    <SearchBar />
                </header>
                <main>
                    <Feed />
                    <Sidebar />
                </main>
            </div>
        );
    }
}

// Render app
ReactDOM.render(<App />, document.getElementById('root'));