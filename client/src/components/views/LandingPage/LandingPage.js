import React, { useEffect } from 'react'
import Axios from 'axios'

function LandingPage() {

    useEffect(() => {


        Axios.post("/api/product/products")
        .then(res => {
            if(res.data.success){
                console.log(res.data)
            } else {
                alert("상품 조회를 실패 했습니다.")
            }
        })
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
