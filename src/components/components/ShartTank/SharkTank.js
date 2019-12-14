import React from 'react';
import PropTypes from 'prop-types';
import LivingStudents from '../LiveStudent/LiveStudent';
import studentShape from '../../../helpers/propz/studentShade';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myStudents = this.props.students;
    const studentCards = myStudents.map((student) => <LivingStudents key={student.id} student={student}/>);

    return (
    <div className="sharkTank row">
      {studentCards}
    </div>
    );
  }
}

export default SharkTank;
