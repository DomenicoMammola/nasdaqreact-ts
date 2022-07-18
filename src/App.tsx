import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFormB from './SearchFormB';
import SearchForm from './SearchForm';
import SearchFormHook from './SearchFormHook';
import StockOld from './StockOld';
import Stock, { StockProps, StockQuotationProps } from './Stock';

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

type AppState = {
  showMsg: boolean,
  maggiorenne: string,
  listaStock: Array<StockQuotationProps>
}

class App extends Component<any, AppState> {
  state: AppState = {
    showMsg: false,
    maggiorenne: '',
    listaStock: []
  }
  mostroMessaggio = (evento: any) => {
    const valore: boolean = !this.state.showMsg;
    this.setState({ showMsg: valore });
  }

  showMaggiorenne = (nome: string) => {
    this.setState({ maggiorenne: nome });
  }

  aggiornoStock = (e: React.MouseEvent) => {
    e.preventDefault();
    const newStock = {nome: 'AMZN', quotazione : 1200};
    this.setState({listaStock: [newStock]});

  }

  constructor(props: any) {
    super(props);
    //this.state.listaStock = [{ nome: 'APPL', quotazione: 250 }];
    console.log('1g) GENITORE: creo istanza');
  }

  static getDerivedStateFromProps(np: any, ps: any) {
    console.log('1ga) GENITORE check props e state');
    return null;
  }

  componentDidMount() {
    console.log('3g) GENITORE: DidMount');
    const quot: StockQuotationProps =  { nome: 'MAZI', quotazione: 350 };    
    const stock = [quot];
    console.log(this.state.listaStock);
    this.setState({listaStock: stock}); //state.listaStock.push(quot);
    //this.state.listaStock.push(quot);
    console.log(this.state.listaStock);
    //this.setState({ maggiorenne: 'CICCIO' });
  }

  render() {
    console.log('2g) GENITORE: render');
    return (
      <div className="App">
        <header className="App-header">          
          <p>Applicazione stock quote</p>
          <button onClick={this.aggiornoStock}>TopStock</button>
          {this.state.listaStock.map(el => <Stock key={el.nome} datistock={el} />)}

          {/*
          <p>
            <SearchFormHook></SearchFormHook>
          </p>
          <p onClick={this.mostroMessaggio}>
            Cliccami.
          </p>
          {this.state.showMsg && <p>Messaggio nascosto</p>}
          
           <SearchFormB ></SearchFormB> 
          <p>
            <SearchForm></SearchForm>
          </p>
          <p>
            <StockOld nome={"Apple"} eta={14} showEta={this.showMaggiorenne}></StockOld>
          </p>          

          */}
          <p>Maggiorenne: {this.state.maggiorenne}</p>
        </header>
      </div>
    );

  }
}

export default App;
