const getStates = (callback) => {
    setTimeout(() => {
        let state = "TN";
        console.log(state);
        callback();
    }, 2000);
};

const getCity = (callback) => {
    setTimeout(() => {
        let city = "TRK";
        console.log(city);
        callback();
    }, 2000);
};

const done = () => {
    console.log("Completed");
};
 
const getAddress = () => {
    getStates(() => {
        getCity(() => {
            done();
        });
    });
};

getAddress();