import React, { useState } from 'react'
import { Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';

const {TextArea} = Input;

const Continents = [
  {key:1, value: "Africa"},
  {key:2, value: "Europe"},
  {key:3, value: "Asia"},
  {key:4, value: "North America"},
  {key:5, value: "South America"},
  {key:6, value: "Australia"},
  {key:7, value: "Antarctrica"}
]


function UploadProductPage() {

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Pirce, setPirce] = useState(0)
  const [Continent, setContinent] = useState(1)
  const [Images, setImages] = useState([])

  const titleChangeJandler = (e) => {
    setTitle(e.currentTarget.value)
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value)
  }

  const PriceChangeHandler = (e) => {
    setPirce(e.currentTarget.value)
  }

  const continentChangeHandler = (e) => {
    setContinent(e.currentTarget.value)
  }

  const updateImages = (newImages) => {
    setImages(newImages)
  }



  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto"}}>
      <div style={{ textAlign:"center", marginBottom:"2rem"}}>
        <h2>여행 상품 업로드</h2>
      </div>
    
    <FileUpload refreshFunction={updateImages} />

    <Form>

    <br/>
    <br/>
    <label>이름</label>
    <Input onChange={titleChangeJandler} value={Title}/>
    <br/>
    <br/>
    <label>설명</label>
    <TextArea onChange={descriptionChangeHandler} value={Description}/>
    <br/>
    <br/>
    <label>가격($)</label>
    <Input type="number" onChange={PriceChangeHandler} value={Pirce}/>
    <br/>
    <br/>
    <select onChange={continentChangeHandler} value={Continent}>
      {Continents.map(item => (
        <option key={item.key} value={item.key}>{item.value}</option>
      ))}
    </select>

    <br/>
    <br/>
    <Button >
      확인
    </Button>

    </Form>
    
    </div>
  )
}

export default UploadProductPage
