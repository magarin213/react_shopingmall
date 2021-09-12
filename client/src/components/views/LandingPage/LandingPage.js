import React, { useEffect } from 'react'
import Axios from 'axios'

function LandingPage() {

    useEffect(() => {


        Axios.post("/apu/product/products")
        .then(res => {
            if(res.data.success){

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
