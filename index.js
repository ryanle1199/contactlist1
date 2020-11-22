async function fetchAPI(url, method = "GET", sendData = null) {
  const fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE2MDU1NDc2MTIsImV4cCI6MTYwNjE1MjQxMn0.0M8gx3k-RzcGcvHqIA7u1W4F997StQ0jWSmtg3_j6Jo",
    },
  };

  if (sendData) {
    fetchOptions.body = JSON.stringify(sendData);
  }

  const response = await fetch(url, fetchOptions);
  const data = await response.json();

  return data;
}

export default fetchAPI;