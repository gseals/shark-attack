import React from 'react';
import studentShape from '../../helpers/propz/studentShade';
import './LiveStudent.scss';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }


  render() {
    const { student } = this.props;

    return (
      <div className="studentCard col-4">
        <div>
          <img src={student.imgUrl} className="card-img-top stImg" alt={student.firstName} />
          <h5 className="cardTxt">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudents;
