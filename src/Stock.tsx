import { stat } from 'fs';
import React from 'react'
import { threadId } from 'worker_threads';

export interface StockQuotationProps { nome: string, quotazione: number };
export interface StockProps {datistock: StockQuotationProps};

type StockState = {    
    quotazione: number;
}

export class Stock extends React.Component<StockProps, StockState> {
    state : StockState = {        
        quotazione: this.props.datistock.quotazione
    }

    constructor (props : StockProps){
        super(props);        
        console.log('1f) FIGLIO - Creo istanza ' + this.props.datistock.nome);
    }
    componentDidMount(){
        console.log('3f) FIGLIO - DidMount ' + this.props.datistock.nome);
    }
    componentDidUpdate(prevProps : StockProps, prevState: StockState){
        console.log('4f) FIGLIO - DidUpdate ' + this.props.datistock.nome);
        if (prevProps.datistock.quotazione !== this.props.datistock.quotazione) {
            this.setState((state : StockState, props: StockProps) => ({quotazione: props.datistock.quotazione}));
        }
    }
    aggiornoStock = () => {
        console.log('aggiornoStock');
        this.setState((state: StockState, props: StockProps)  => ({quotazione: state.quotazione + 10 }));
    }
    render() {
        console.log('2f) FIGLIO - render ' + this.props.datistock.nome);
        return (
            <div>
                <p>{this.props.datistock.nome}</p>
                <p>{this.state.quotazione}</p>
                <button onClick={this.aggiornoStock}>AGGIORNA</button>
                </div>
        )
    }
}

export default Stock