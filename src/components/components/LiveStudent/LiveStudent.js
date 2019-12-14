import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../../helpers/propz/studentShade';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }


  render() {
    const { student } = this.props;

    return (
      <div className="card col-3">
        <div className="card-body">
          <h5 className="card-title">{student.firstName} + {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LiveStudents;
