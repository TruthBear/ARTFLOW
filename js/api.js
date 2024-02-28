const artsPerformanceApi = async () => {
  try {
    return fetch('../php/handleAPI.php')
    .then(res => res.json())
    .then(result => result.db);
  } catch (err) {
    console.error("에러");
    throw err;
  }
};

export default artsPerformanceApi;
