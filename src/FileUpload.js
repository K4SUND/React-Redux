import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  
    const[imageurl,setImageUrl] = useState();
    const[file,setFile] = useState();
  
  const handleFile = (e)=>{
            setFile(e.target.files[0]);
  }

  const handleUpload=()=>{
            const formData = new FormData();
            formData.append("image",file);
            axios.post("http://localhost:3001/upload",formData)
            .then((res)=>{
              setImageUrl(res.data);
            })
            .catch((err)=>console.log(err));

           


            
  }

  // const handleImage = ()=>{

  //   axios.get("http://localhost:3001/upload")
  //   .then((res)=>{
  //      setImageUrl(res.data);
  //   })
  //   .catch((err)=>console.log(err));


  // }

//   useEffect(() => {

//         }
// , [imageurl]);

  // useEffect(()=>{
  //   axios.get("http://localhost:3001/upload")
  //   .then((res)=>console.log(res.data))
  //   .catch((err)=>console.log(err))

  // },[handleUpload])
  
    return (
    <div>
        <input type="file" onChange={handleFile}></input>
        <button onClick={handleUpload}>Upload</button>
        <div>
        {imageurl && <img src={`http://localhost:3001${imageurl}`}></img>

        }
        </div>
    
    </div>
  )
}
