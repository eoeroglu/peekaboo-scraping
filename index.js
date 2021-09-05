const axios = require('axios');
const fs = require('fs');

const requestData = {
  sortType: 'trending',
  targetEntities: '_all',
  city: '',
  country: '',
  lat: 24.861462,
  long: 67.009939,
  language: 'en',
  categoryId: '1',
  category: 'food',
  limit: 0,
  offset: 0,
  sourceEntityId: '_all',
  atlId: '_all',
};

axios.default
  .post('https://peekaboo.guru/api/v8/entities', requestData, {
    headers: {
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzIsInJvbGUiOiJndWVzdCIsImlhdCI6MTU1MzcwMDgwNiwianRpIjoiUEpJMXFTb2ktQzRBZFJWcm9nb3RNV2UzV3VXcFdXTm0ifQ.2mb26xL4Qt7FfBQZ-XQvp-fhecMpaVUVXWp_GEST_6U',
    },
  })
  .then(({ data }) => {
    fs.writeFile('./data.json', JSON.stringify(data), function (err) {
      if (err) return console.log(err);
      console.log('Hello World > helloworld.txt');
    });
  })
  .catch((err) => {
    console.log(err);
    debugger;
  });
