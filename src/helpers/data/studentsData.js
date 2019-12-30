const students = [
  {
    id: '1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: '5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: '6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: '7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: '8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: '9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: '10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: '11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: '12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: '13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: '14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: '15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: '16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: '17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: '18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: '19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: '20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: '21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: '22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: '23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: true,
  },
];

const livingStudents = () => {
  const aliveStudents = [];
  students.forEach((response) => {
    if (response.isDead === false) {
      aliveStudents.push(response);
    }
  });
  return aliveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = [];
  students.forEach((response) => {
    if (response.isDead === true) {
      deadStudents.push(response);
    }
  });
  return deadStudents;
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default { livingStudents, dearlyBeloved, followTheLight };
