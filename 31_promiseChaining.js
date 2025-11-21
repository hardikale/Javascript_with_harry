function chain(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content == true) resolve("this is resolved");
      else reject("rejected");
    }, 2000);
  });
}

// chain(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

const main =  () => {
  try {
    const response =  chain(true);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

main(); 
