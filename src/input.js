import react, { useEffect, useState } from 'react'

const Input = (props) => {
    // let list =props.items
    const form = {
        border: 'solid gray',
         height: '300px',
          width: '400px', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent:'space-around',
          alignItems:'center',
          fontSize:'25px'
          
        },
        input = {
          border:'solid lightgray',
          wordWrap: 'break-word',
        height:"50px",
        width:"300px"
    }
    
    const [items, setItemState] = useState(props.items)
   

let value = ""
let output=""
let image=""


function handleImage(e){
const file = e.target.files[0]
image = URL.createObjectURL(file)
}
    function handleChange(e) {
 value= e.target.value


    }
    function handleContent(e) {
        output = e.target.value
       
           }

    function handleSubmit(e) {
        
        e.preventDefault()
        document.forms[0].reset()
    }
    function submit(e) {

        items.push({heading:value,text:output,image:image})
        setItemState([...items])
        console.log({items})

      }
      useEffect(()=>{
        let storage = JSON.parse(
          localStorage.getItem('items')) 
        setItemState([...storage])
        // console.log(storage)
      },[])
   

      useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(items))
        // console.log(items)
      },[items])  

useEffect((e)=>{},[])



  function AddItem(){

      
      items.push(items[0])
     
  setItemState([...items])

   
  }

 

  function RemoveItem(){

  items.pop()
  
  setItemState([...items])

    console.log(items)
  }
    


  
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
    <button onClick={AddItem}>ADD</button>
    <button onClick={RemoveItem}>REMOVE</button>
    </div>
<h1>CREATE YOUR CARD</h1>
            <form onSubmit={handleSubmit} style={form} >
                <label>
                    
                    <input  onChange={handleImage}type='file'/>
                </label>

                <label>
                 
                <textarea onChange={handleChange} placeholder="Heading" style={input} ></textarea> 
                </label>
                <label>
                
                <textarea onChange={handleContent} placeholder="Text" style={input}></textarea>
                </label>
                <input onClick={submit} type='submit' style={input} />
                {/* <button>Read article</button> */}
            </form>



<div className='container' >
      {items.map((item, index) => (

          <div key={index} className='card' >

            <div className='image'>
              <img src={item.image} alt="" />
            </div>
            <section>
              <div>
                <h2>{item.heading}</h2>
              </div>
              <div className='paragraph'>
                <p> {item.text} </p>
               
              </div>
              <div className='btn'>
                <button>Read article</button>
              </div>
            </section>
          </div>
      ))
      
    }
    </div>

        </>
    );
}

export default Input;