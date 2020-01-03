const students = [
  {
    id: '1',
    firstName: 'Alesha',
    lastName: 'Reed',
    imgUrl: 'https://avatars0.githubusercontent.com/u/39807157?s=400&v=4',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    imgUrl: 'https://avatars1.githubusercontent.com/u/47763728?s=400&v=4',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    imgUrl: 'https://avatars1.githubusercontent.com/u/52020883?s=400&v=4',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    imgUrl: 'https://avatars1.githubusercontent.com/u/54124397?s=400&v=4',
    isDead: false,
  },
  {
    id: '5',
    firstName: 'Crystal',
    lastName: 'Broach',
    imgUrl: 'https://avatars3.githubusercontent.com/u/51486216?s=400&v=4',
    isDead: false,
  },
  {
    id: '6',
    firstName: 'Denise',
    lastName: 'Baker',
    imgUrl: 'https://avatars2.githubusercontent.com/u/38984447?s=400&v=4',
    isDead: false,
  },
  {
    id: '7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    imgUrl: 'https://avatars0.githubusercontent.com/u/36553398?s=400&v=4',
    isDead: false,
  },
  {
    id: '8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    imgUrl: 'https://avatars3.githubusercontent.com/u/26425684?s=400&v=4',
    isDead: false,
  },
  {
    id: '9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    imgUrl: 'https://avatars1.githubusercontent.com/u/52087296?s=460&v=4',
    isDead: false,
  },
  {
    id: '10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    imgUrl: 'https://avatars3.githubusercontent.com/u/21040719?s=400&v=4',
    isDead: false,
  },
  {
    id: '11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    imgUrl: 'https://avatars1.githubusercontent.com/u/51467735?s=400&v=4',
    isDead: false,
  },
  {
    id: '12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    imgUrl: 'https://avatars3.githubusercontent.com/u/51938283?s=400&v=4',
    isDead: false,
  },
  {
    id: '13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    imgUrl: 'https://avatars0.githubusercontent.com/u/47404655?s=400&v=4',
    isDead: false,
  },
  {
    id: '14',
    firstName: 'John',
    lastName: 'Key',
    imgUrl: 'https://avatars2.githubusercontent.com/u/54037058?s=400&v=4',
    isDead: false,
  },
  {
    id: '15',
    firstName: 'John',
    lastName: 'Thielman',
    imgUrl: 'https://avatars2.githubusercontent.com/u/54124593?s=400&v=4',
    isDead: false,
  },
  {
    id: '16',
    firstName: 'John',
    lastName: 'Johnson',
    imgUrl: 'https://avatars1.githubusercontent.com/u/51214463?s=400&v=4',
    isDead: false,
  },
  {
    id: '17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    imgUrl: 'https://avatars3.githubusercontent.com/u/54123694?s=400&v=4',
    isDead: false,
  },
  {
    id: '18',
    firstName: 'Laura',
    lastName: 'Collins',
    imgUrl: 'https://avatars0.githubusercontent.com/u/51382883?s=400&v=4',
    isDead: false,
  },
  {
    id: '19',
    firstName: 'Maggie',
    lastName: 'Greene',
    imgUrl: 'https://avatars1.githubusercontent.com/u/54197223?s=400&v=4',
    isDead: false,
  },
  {
    id: '20',
    firstName: 'Maria',
    lastName: 'Brock',
    imgUrl: 'https://avatars3.githubusercontent.com/u/54127296?s=400&v=4',
    isDead: false,
  },
  {
    id: '21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    imgUrl: 'https://avatars1.githubusercontent.com/u/53092019?s=400&v=4',
    isDead: false,
  },
  {
    id: '22',
    firstName: 'Randy',
    lastName: 'Tate',
    imgUrl: 'https://avatars3.githubusercontent.com/u/54008854?s=400&v=4',
    isDead: false,
  },
  {
    id: '23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    imgUrl: 'https://avatars2.githubusercontent.com/u/40898992?s=400&v=4',
    isDead: false,
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

const followTheLight = (id) => {
  const studentIndex = students.findIndex((student) => student.id === id);
  students[studentIndex].isDead = true;
};

export default { livingStudents, dearlyBeloved, followTheLight };
