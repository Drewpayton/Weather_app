//API URL

async function getData() {
  const apiUrl = "https://dogapi.dog/api/v2/breeds";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err.message);
  }
}

getData();
