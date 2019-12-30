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
    const deadOnes = studentsData.dearlyBeloved();
    this.setState({ students, deadOnes });
  }

  followTheLightEvent = () => {
    const randomStudent = Math.floor(Math.random() * this.state.students.length);
    const randomStudentId = this.state.students[randomStudent].id;
    studentsData.followTheLight(randomStudentId);
    const students = studentsData.livingStudents();
    const deadOnes = studentsData.dearlyBeloved();
    this.setState({ students, deadOnes });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <SharkTank className='container' students={this.state.students} followTheLightEvent={this.followTheLightEvent} />
          <Graveyard className='container' deadOnes={this.state.deadOnes} />
        </div>
    </div>
    );
  }
}

export default App;
