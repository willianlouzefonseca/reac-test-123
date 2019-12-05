import React from 'react';
import Chip from './components/chip/chip';
import Card from './components/card/card';
import Dropdown from './components/dropdown/dropdown';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      car: [
        {
          id: 0,
          title: 'Monza',
          selected: false,
          key: 'car'
        },
        {
          id: 1,
          title: 'Civic',
          selected: false,
          key: 'car'
        },
        {
          id: 2,
          title: 'Corolla',
          selected: false,
          key: 'car'
        },
        {
          id: 3,
          title: 'City',
          selected: false,
          key: 'car'
        },
        {
          id: 4,
          title: 'Fit',
          selected: false,
          key: 'car'
        }
      ]
    }
    this.toggleSelected = this.toggleSelected.bind(this);
    this.resetThenSet = this.resetThenSet.bind(this)
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render(){
    return (
      <div>
        <div className='col'>
          <Chip avatar={'https://picsum.photos/id/237/200/200'}/>
        </div>
        <div className='col'>
          <Card image={'https://picsum.photos/id/237/200/300'}/>
        </div>
        <div className='col'>
          <Dropdown 
            title="Select a car"
            list={this.state.car}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

export default App;
