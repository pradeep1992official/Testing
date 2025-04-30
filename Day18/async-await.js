const getName = async () => {
  try {
    let name = await namePromise;
    console.log(`Name recived ${name}`);
  } catch {
    console.log("No data found");
  }
};

const namePromise = new Promise((resolve, reject) => {
  console.log("Getting name from the DB..");
  setTimeout(() => {
    resolve("Pradeep");
  }, 2000);
});

getName();
