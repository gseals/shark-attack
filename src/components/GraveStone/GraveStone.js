import React from 'react';
import studentShape from '../../helpers/propz/studentShade';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }


  render() {
    const { student } = this.props;

    return (
      <div className="card col-6">
        <img src="https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_960_720.png" className="card-img-top" alt="tombstone"/>
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default GraveStone;
