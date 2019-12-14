import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/components/ShartTank/SharkTank';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <h1>Shark Tank</h1>
          <button className='btn btn-danger'>SHARK ATTACK</button>
          <SharkTank students={this.state.students} />
      </div>
    );
  }
}

export default App;
