import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Group from './Group';


function Grouplist({path,Gn,user}) {
  const { email, password, name, group } = user || {};
  const authenticated = user != null;
  var lists = [];
  var i = 0;
  const Hchange=()=>{
    Gn({group});
  };
  while(i<5){
    lists.push(<li><Link to={`${path}/${i}`}  >{i}그룹</Link></li>);
    i=i+1;
  }

  return (
    <div className = "gmain">
      {authenticated ? (
          <Route><li>
            <Link to={`${path}/${group}`} onClick = {Hchange}>
              {name}가 속해있는 {group}그룹
            </Link></li>
            {lists}
          </Route>
        ) : (
          <>
            {lists}
          </>
        )}
    </div>
  );
}

export default Grouplist;