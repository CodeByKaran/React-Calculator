import React,{useState,useEffect} from 'react'
import Button from "./components/Button.jsx"
import Screen from "./components/Screen.jsx"
import Message from "./components/Message.jsx"


export default function App() {
  
  const [string, setstring] = useState("")
  const [answer,setanswer]=useState("")
  const [message,setmessage]=useState("")
  
  const removeMessage=()=>{
    let time=1500;
    setTimeout(()=>setmessage(""),time)
  }
  
  const setNewAnswerOnKeyDown=(str)=>{
    try{
     let newAns = eval(
       str).toString()
     setanswer(newAns)
     }catch(err){}
  }
  
  const HandleButtonsClick=(val)=>{
  try{
   if(val==="="){
   const strAns = eval(string).toString()
   setanswer(strAns)
   }else if(val==="C"){
     setstring("")
     setanswer("")
   }else if(val==="Del"){
     if(string.length==1) setanswer("")
     let newStr = string.slice(0,string.length-1)
     setstring(newStr)
     setNewAnswerOnKeyDown(newStr)
   }else{
    if(!string.includes('+')&&string.length>=15&&!string.includes('-')&&string.length>=15&&!string.includes('*')&&string.length>=15&&!string.includes('/')&&string.length>=15&&!string.includes('%')&&string.length>=15){
      setmessage(`Max Limit Reached`)
      removeMessage()
    }else{
    let newStr = string + val
     setstring(newStr)
     setNewAnswerOnKeyDown(newStr)
    }
   }
  }catch(err){
    setmessage(`Invalid Input!`)
    removeMessage()
  }
  }
  
  return (
    <center>
    <center className="h-screen flex items-center justify-center">
    <div className="w-9/12">
    <Screen value={string} answer={answer}/>
    <div className="flex flex-wrap  w-full justify-between">
    <Button value={"C"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"Del"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"%"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"/"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"9"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"8"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"7"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"*"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"6"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"5"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"4"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"-"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"3"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"2"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"1"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"+"}HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"0"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"00"} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"."} HandleButtonsClick={HandleButtonsClick}/>
    <Button value={"="} HandleButtonsClick={HandleButtonsClick} spBtn={true}/> 
    </div>
  </div>
  </center>
  {message&&
  <Message message={message}/>
  }
  </center>
  )
}