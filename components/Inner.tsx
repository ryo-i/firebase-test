import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';


// CSS in JS
const H2 = styled.h2`
  /* color: red; */
`;


// Component
function Inner() {
  // Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([])


  useEffect(() => {
    async function getJsonData (url) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setIsLoaded(true);
        const getMembers = resJson;
        console.log('getMembers', getMembers);
        setMembers(getMembers);
      } catch(error) {
        setIsLoaded(true);
        setError(error);
        console.log('err', error);
      }
    };

    const url = 'data/member.json';
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
        <section>
            <h2>JSONファイルから読み込み</h2>
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
        </section>
      </>
    );
  }
}

export default Inner;
