import React from "react";

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

//export interface SearchFormBProps {ck1: false, ck2: false}

type SearchFormBState = {
    ck1 : boolean;
    ck2 : boolean;
}

class SearchFormB extends React.Component <any, SearchFormBState > {
    state : SearchFormBState = {
        ck1 : false,
        ck2 : false
    };
    onChangeCk = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'ck1') {
            this.setState({ck1: event.target.checked});
            console.log('ck1');
        } else {
            this.setState({ck2 : event.target.checked});
            console.log('ck2');
        };        
    };   
    render () {
        return (
            <div>
                <input type="checkbox" name="ck1" checked={this.state.ck1} value='Campo1' onChange={this.onChangeCk} />Campo1
                <input type="checkbox" name="ck2" checked={this.state.ck2} value='Campo2' onChange={this.onChangeCk} />Campo2
            </div>
        );
    }
}

export default SearchFormB;