export async function getData(setLoading, setData) {
  setLoading(true);
  await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((res) => res.json())
    .then((result) => {
      setData(result);
      setLoading(false);
    });
}

export async function sendData(dataLen, data) {
  console.log(typeof data);
  const smallData = data.filter(function (data, index, array) {
    return index < dataLen;
  });
  //const smallData = [1, 2, 3, 4, 5];
  await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
    //async () =>
    method: "POST",
    body: JSON.stringify({
      data: smallData,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
