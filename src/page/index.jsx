import React from "react";

function Index(){
  const [mapleName,setMapleName] = React.useState('');

  console.log(mapleName)
  return(
    <div className="cont">
        <div className="input_wrap">
          <label htmlFor="maple_name">메이플 닉네임</label>
          <input id="maple_name" type="text" onChange={setMapleName} />
          <button id="maple_name_btn">입력</button>
        </div>
    </div>
  )
}

export default Index;