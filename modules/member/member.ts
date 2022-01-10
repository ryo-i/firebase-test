async function member (url) {
    try {
        const res = await fetch(url);
        const member = await res.json();
        console.log('member', member);
      } catch(err) {
        console.log('err!');
        console.log(err);
    }
};

export { member };