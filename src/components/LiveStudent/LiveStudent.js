import React from 'react';
import studentShape from '../../helpers/propz/studentShade';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }


  render() {
    const { student } = this.props;

    return (
      <div className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudents;
