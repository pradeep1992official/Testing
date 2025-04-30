const getStates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let state = "TN";
      console.log(state);
      resolve(state);
    }, 2000);
  });
};

const getCity = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let city = "TRK";
      console.log(city);
      resolve(city);
    }, 2000);
  });
};

const done = () => {
  console.log("Completed");
};

// const getAddress = () => {
//     getStates(() => {
//         getCity(() => {
//             done();
//         });
//     });
// };

const getAddress = () => {
  getStates()
    .then((state) => {
      return getCity();
    })
    .then(() => {
      done();
    });
};
