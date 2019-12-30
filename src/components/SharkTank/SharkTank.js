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
    e.preventdefault();
    const { followTheLightEvent } = this.props;
    followTheLightEvent();
  }

  render() {
    const myStudents = this.props.students;
    const studentCards = myStudents.map((student) => <LivingStudents key={student.id} student={student}/>);

    return (
    <div className="sharkTank col-6">
              <h1>Shark Tank</h1>
          <button className='btn btn-danger' onClick={this.removeStudent}>SHARK ATTACK</button>
      <div>{studentCards}</div>
    </div>
    );
  }
}

export default SharkTank;
