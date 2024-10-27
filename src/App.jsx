
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => setData(response.data))
    .catch(error => setError(error))
  }, [])

  if(error){
    return <div>Error : {error.message}</div>
  }

  const handleDelete = (id) =>{
    const afterDelete = data.filter((item) => item.id !== id)
    setData(afterDelete)
  }
  return (
    <>
    <div>
      <h1>Fetch Api using axios</h1>
      {data ? (
        data.map((item) => (
          <div key={item.id} style={{display:'flex',gap:'10px'}}>
            <p>{item.id} : {item.title}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>...Loading</p>
      )}
    </div>
    </>
  )
}

export default App