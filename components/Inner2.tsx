import React, { useState, useEffect, useContext }  from 'react';
import { Context } from '../pages/index';


// Component
function Inner2() {
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
        const getMembers = resJson;
        console.log('getMembers', getMembers);

        const keyId = getMembers.values[0][0];
        const keyName = getMembers.values[0][1];
        const keyPart = getMembers.values[0][2];

        const resultMembers = [];
        for (var i = 1; i < getMembers.values.length; i++) {
          const thisMember = {};
          thisMember[keyId] = getMembers.values[i][0];
          thisMember[keyName] = getMembers.values[i][1];
          thisMember[keyPart] = getMembers.values[i][2];
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

export default Inner2;
