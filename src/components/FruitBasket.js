import React from 'react';
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList'

const FruitBasket = () => {

    return (
      <div className="fruit-basket">
      {/* <Filter handleChange={handleFilterChange} />
        <FilteredFruitList
          filter={selectedFilter} /> */}
      </div>
    );
  }

  FruitBasket.defaultProps = {
    fruit: "fruit",
    filters: "filters",
    currentFilter: "currentFilter",
    updateFilterCallback: "updateFilterCallback"
  }

export default FruitBasket;
