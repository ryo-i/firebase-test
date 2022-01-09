import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
// import { member } from '../modules/member/member';
// import { inner } from '../data/data.json';


// CSS in JS
const H2 = styled.h2`
  /* color: red; */
`;


// Component
function Inner() {
  // Hooks
  // const [title, setTitle] = useState('内容が無いよう');
  // const [text, setText] = useState('へんじがない、ただのしかばねのようだ。');
  const [group, setGroup] = useState('');
  const [members, setMembers] = useState([])


  useEffect(() => {
    const url = 'data/member.json';
    // const members = member(url);
    // console.log('members', members);
    async function getJsonData (url) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();

        const getGroup = Object.keys(resJson);
        console.log('getGroup', getGroup);
        setGroup(getGroup[0]);

        const getMembers = resJson.baetles;
        console.log('getMembers', getMembers);
        setMembers(getMembers);
      } catch(err) {
          console.log('err', err);
      }
    };
    getJsonData(url);
  }, []);


  // JSX
  return (
    <>
      <section>
          <h2>JSONファイルから読み込み</h2>
          <p>{group}：</p>
          <ul>
            {members.map(member => (
              <li key={member.id}>
                {member.name}（{member.part}）
              </li>
            ))}
          </ul>
      </section>
    </>
  );
}

export default Inner;
