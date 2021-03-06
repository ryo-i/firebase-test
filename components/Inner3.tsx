import React, { useState, useEffect, useContext }  from 'react';
import { Context } from '../pages/index';


// Component
function Inner3() {
  // Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([])
  const context = useContext(Context);
  const url = context.url;
  console.log('url', url);


  useEffect(() => {
    async function getJsonData (url) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setIsLoaded(true);
        const getMembers = resJson.documents;
        console.log('getMembers', getMembers);

        const resultMembers = [];
        for (var i = 0; i < getMembers.length; i++) {
          const thisMember = {
            id: 0,
            name: '',
            part: ''
          };
          thisMember.id = getMembers[i].fields.id.integerValue;
          thisMember.name = getMembers[i].fields.name.stringValue;
          thisMember.part = getMembers[i].fields.part.stringValue;
          resultMembers.push(thisMember);
        }
        console.log('resultMembers', resultMembers);

        setMembers(resultMembers);
      } catch(error) {
        setIsLoaded(true);
        setError(error);
        console.log('err', error);
      }
    };

    getJsonData(url);
  }, []);


  // JSX
  if (error) {
    return <p>エラー: {error.message}</p>;
  } else if (!isLoaded) {
    return <p>読み込み中...</p>;
  } else {
    return (
      <>
        <dl>
          <dt>ビートルズ：</dt>
          <dd>
            <ul>
              {members.map(member => (
                <li key={member.id}>
                  {member.name}（{member.part}）
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </>
    );
  }
}

export default Inner3;
