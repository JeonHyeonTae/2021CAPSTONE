import React from "react";


function Group({Groupnumber,user,authenticated}) {
  if(authenticated === !null){
    return (
      <div className = "mainn">
      <h1>{Groupnumber} 그룹의 정보들</h1>
      <h2>현재 {user.name}로그인중</h2>
     </div>
   );
  }
  else{
   return (
    <div className = "mainn">
      <h1>{Groupnumber} 그룹의 정보들</h1>
     </div>
    );
  }
}

export default Group;