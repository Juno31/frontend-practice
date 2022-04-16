import React, { useEffect } from 'react'
import styled from 'styled-components'

const Label = styled.label`
    width: 400px;
    height: 50px;
    padding: 10px 10px;
    
    background-color: #4480f7;
    border: 1px solid #4480f7;
    
    position: relative;
    left: 50%;
    top: 50%;
`

const Input = styled.input`
    // width: 0%;
    // height: 0%;

    opacity: 1;
    position: relative;
    left: 50%;
    top: 50%;

    posiiton: absolute;
`


function Index() {
    

  return (
    <form action='https://api.creatortime.io' method='POST' encType="multipart/form-data"
        onSubmit={function(){

        }}
    >
        {/* <Label> */}
            <Input type={'file'} id='form' multiple
                onChange={function(event){
                    let formData = document.getElementById('form')
                    console.log(formData.files);
                }}
            />
        {/* </Label> */}
        <button>
            전송!
        </button>
    </form>
  )
}

export default Index