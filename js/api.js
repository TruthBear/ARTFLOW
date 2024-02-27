fetch('../php/handleAPI.php')
.then(res => res.json())
.then(data => console.log(data.db))