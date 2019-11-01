const FetchForListComponent = ({ title, content }) => {

  let url = 'http://142.93.51.96/posts'

  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ title, content })
  })
    .then(res => res.json())
    .then(response => {
      console.log(response[0].content, response[0].title, response[0].id)
    })

  return (null)
}

export default FetchForListComponent
