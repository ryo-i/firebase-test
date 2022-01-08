async function member (url) {
    try {
        const res = await fetch(url);
        const member = await res.json();
        console.log('member', member);

        /* const text: string = hello.baetles;
        const selector: string = hello.message.selector;
        const dom: HTMLButtonElement = document.querySelector(selector) as HTMLButtonElement;

        if (!text) {
            throw new Error('テキストが見つからないYo！');
        } else if (!selector) {
            throw new Error('セレクタ名が見つからないYo！');
        } else if (!dom) {
            throw new Error('DOMが見つからないYo！');
        }

        dom.innerHTML = text;
        console.log('text-> ' + text); */
      } catch(err) {
        console.log('err!');
        console.log(err);
    }
};

export { member };