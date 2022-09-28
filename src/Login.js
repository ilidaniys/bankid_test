import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import QrCode from "./QrCode";
import SVG from 'react-inlinesvg';

const ButtonWrapper = styled.div`
  height: 14rem;
  width: 23rem;
  //border: .1rem solid black;
  //border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: var(--orange-7);
`;
const Button = styled.div`
  padding: 2rem 5rem;
  border: .1rem solid green;
  background: lime;
  border-radius: .5rem;
  cursor: pointer;
  :hover{
    filter: brightness(80%);
  }
`
const Login = () => {
    const [login, setLogin] = useState(true)
    const [authStatus, setAuthStatus] = useState("")
    const [orderRef, setOrderRef] = useState("")

    const [qrCode, setQrCode] = useState(null)

    const LoginHandler = (event) => {
        event.preventDefault()
       axios.post('https://bankid-test-server.herokuapp.com/auth', {
            personalNumber: "201701012393",
            ip: "79.110.128.236"
        })
            .then(res => {
                console.log("auth", res)
                setOrderRef(res.data.orderRef)
                axios.post('https://bankid-test-server.herokuapp.com/collect', {
                    orderRef: res.data.orderRef
                })
                    .then(res => {
                        console.log("orderRef", res)
                    })
                    .catch(e => {
                        console.log(e)
                    })
                setAuthStatus("pending")

            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(()=>{
        if (authStatus === "pending"){
            let time = 1
            const timer = setInterval(() => {
                console.log(time)
                axios.post('https://bankid-test-server.herokuapp.com/qrcode', {
                    orderRef,
                    time
                }).then(res => {
                    // console.log("qrcode", res.data.qrcode)
                    // const qrArray = res.data.qrcode.split(">")
                    // const fixArray = qrArray.map(elem => {
                    //     return `${elem}>`
                    // })
                    setQrCode(res.data.qrcode)
                    console.log(res.data.qrcode)
                    time++
                })
            }, 1000);
            return () => clearInterval(timer);
        }

    }, [authStatus, orderRef])

    return (
        <ButtonWrapper>
             {qrCode ?  <SVG src={qrCode} />
                     :  <Button onClick={LoginHandler}>Login</Button>
             }


        </ButtonWrapper>
    );
};

export default Login;
