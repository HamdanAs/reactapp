import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '../../Components/Table/Table';

const url = "http://localhost:4567/med?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ewogICJ1c2VybmFtZSI6ICJhZG1pbiIsCiAgInRpbWVzdGFtcCI6IDE2Mzc3MTc3NDM4OTIKfQ.IMWxDUEc3vq-wv5s1UXBcGGbkGBMXjvnPCDLhC8jIZA"

const Items = () => {
  const [barang, setBarang] = useState('')

  async function fetchData(){
    await axios.get(url).then((res) => {
      setBarang(res.data)

      console.log(barang)
    }, [])
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div>
      <h1>{barang.result[0].name}</h1>
    </div>
  )
}

export default Items;