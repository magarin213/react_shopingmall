import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {AppleOutlined, }  from '@ant-design/icons';
import {Card, Row, Col} from "antd"
import Meta from 'antd/lib/card/Meta';


function LandingPage() {

    const [Products, setProducts] = useState([])




    useEffect(() => {


        Axios.post("/api/product/products")
        .then(response => {
            if(response.data.success){
                console.log(response.data)
                setProducts(response.data.productInfo)
            } else {
                alert("상품 조회를 실패 했습니다.")
            }
        })
    }, [])

    const renderCards = Products.map((product, index) => {
        console.log('product',product)
        return <Col lg={6} md={8} xs={24} key={index}>
        <Card
            cover={<img style={{width:"100%", maxHeight:"150px"}} src={`http://localhost:5000/${product.images[0]}`}/>}
        >
            <Meta
            title={product.title}
            description={`${product.price}`}
            />
        </Card>
        </Col> 
    })


    return (
        <div style={{width:"75%", margin:"3rem auto"}}>
            <div style={{textAlign:"center"}}>
                <h2>Let's Travel Anywhere <AppleOutlined/></h2>

            </div>
        {/* {Filter} */}

        {/* {Search} */}

        {/* {Cards} */}

            <Row gutter={16, 16}>
            {renderCards}
            </Row>




        <div style={{display:"flex", justifyContent:"center"}}>
            <button>더보기</button>
        </div>

        </div>
    )
}

export default LandingPage
