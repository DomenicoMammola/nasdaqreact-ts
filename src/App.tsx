import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFormB from './SearchFormB';
import SearchForm from './SearchForm';
import Stock, { StockProps } from './Stock';

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

type AppState = {
  showMsg: boolean,
  maggiorenne: string
}

class App extends Component<any, AppState> {
  state: AppState = {
    showMsg: false,
    maggiorenne: ''
  }
  mostroMessaggio = (evento : any) => {
    const valore : boolean = ! this.state.showMsg;
    this.setState({showMsg : valore});
  }

  showMaggiorenne = (nome : string) => {
    this.setState({maggiorenne: nome});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.mostroMessaggio}>
            Cliccami.
          </p>
          {this.state.showMsg && <p>Messaggio nascosto</p>}
          
          <SearchFormB ></SearchFormB>
          <p>
            <SearchForm></SearchForm>
          </p>
          <p>
            <Stock nome={"Apple"} eta={14} showEta={this.showMaggiorenne}></Stock>
          </p>
          <p>Maggiorenne: {this.state.maggiorenne}</p>
        </header>
      </div>
    );

  }
}

export default App;
