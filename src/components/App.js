import React from 'react';
import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';
import Filter from './Filter';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch ('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }) )
  }

  handleChange = event => {
    console.log("changing fruit")
    this.setState({ currentFilter: event.target.value });
    // if (event.target.value === "All"){
    //     this.setState({fruit: this.state.fruit.map((fruit) => {
    //       fruit
    //     })
    //   })
    // } else {
    //     this.setState({fruit: this.state.fruit.filter((fruit) => {
    //       fruit.fruit_type === event.target.value
    //     })
    //   })
    // }
  }

  render(){
    return(
      <div>
        <Filter filters={this.state.filters} handleChange={this.handleChange} />

      <FilteredFruitList fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
      </div>
    )
  }
}

export default App;

// => <FruitBasket />;
