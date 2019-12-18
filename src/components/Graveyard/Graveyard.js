import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShade';

class Graveyard extends React.Component {
  static propTypes = {
    deadOnes: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const myDeadOnes = this.props.deadOnes;
    console.log('dead', myDeadOnes);
    const studentCards = myDeadOnes.map((student) => <GraveStone key={student.id} student={student}/>);

    return (
      <div className="graveYard col-6">
        {studentCards}
      </div>
    );
  }
}

export default Graveyard;
