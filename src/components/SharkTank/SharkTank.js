import React from 'react';
import PropTypes from 'prop-types';
import LivingStudents from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShade';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    followTheLightEvent: PropTypes.func,
  }

  removeStudent = (e) => {
    e.preventDefault();
    const { followTheLightEvent } = this.props;
    followTheLightEvent();
  }

  render() {
    const myStudents = this.props.students;
    const studentCards = myStudents.map((student) => <LivingStudents key={student.id} student={student}/>);

    return (
    <div className="sharkTank text-center col-6">
              <h1>Shark Tank</h1>
              {
              (myStudents.length === 0) ? (<div><p>Everyone is gone! Refresh to begin again!</p></div>)
                : (<button className='btn btn-danger' onClick={this.removeStudent}>SHARK ATTACK</button>)
              }
      <div className="d-flex flex-wrap flex-row" >{studentCards}</div>
    </div>
    );
  }
}

export default SharkTank;
