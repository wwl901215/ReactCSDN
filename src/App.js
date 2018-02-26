import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraphContent:"这里是段落，用来测试各种样式，这里是段落，用来测试各种样式，这里是段落，用来测试各种样式，这里是段落，用来测试各种样式这里是段落，用来测试各种样式",

        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ul className="App-ul">
                    <li className="App-li">Coffee</li>
                    <li className="App-li">Milk</li>
                </ul>
                <a href="https://www.baidu.com">点击跳转百度页面</a>
                <p className="App-p">{this.state.paragraphContent}</p>
                <hr/>
                <h2>轮播图的实现</h2>
            </div>
        );
    }
}

export default App;
