import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    deadOnes: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    this.setState({ students });
    const deadOnes = studentsData.dearlyBeloved();
    this.setState({ deadOnes });
  }

  followTheLight = (id) => {
    studentsData.followTheLight(id);
    const students = studentsData.livingStudents();
    this.setState({ students });
    const deadOnes = studentsData.dearlyBeloved();
    this.setState({ deadOnes });
    // const number = (Math.floor(Math.random() * array.length));
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <SharkTank className='container' students={this.state.students} follow/>
          <Graveyard className='container' deadOnes={this.state.deadOnes} />
        </div>
    </div>
    );
  }
}

export default App;
