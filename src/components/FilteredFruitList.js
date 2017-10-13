import React from 'react';

const FilteredFruitList = (props) => {

  let filteredFruits = props.fruit.filter((fruit) => {
    return (fruit.fruit_type === `${props.currentFilter}`)
  })

    console.log(filteredFruits)
    console.log(props.currentFilter)
    // console.log(props.fruit)
    return (
      <ul className="fruit-list">
        {!props.currentFilter || props.currentFilter === "all" ?
          props.fruit.map((fruit, index) => {
            return (<li key={index}>{fruit.char}</li>)
            }
          ) : filteredFruits.map((fruit,index)=>{
                return (<li key={index}>{fruit.char}</li>)
              })
          }
      </ul>
    );
  }

FilteredFruitList.defaultProps = {
  fruit: "fruit",
  filter: "filter"
}

export default FilteredFruitList;
