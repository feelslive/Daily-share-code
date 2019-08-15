/** 
 * 返回包含当前URL参数的对象。
 */
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {}
    );
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}

/** 
 * httpGet
 * 对传递的URL发出GET请求。
 */
const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
};
httpGet(
    'https://jsonplaceholder.typicode.com/posts/1',
    console.log
);

/** 
 * httpPost
 * 发出POST请求
 */
const httpPost = (url, data, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send(data);
};
const newPost = {
    userId: 1,
    id: 1337,
    title: 'Foo',
    body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
    'https://jsonplaceholder.typicode.com/posts',
    data,
    console.log
);
httpPost(
    'https://jsonplaceholder.typicode.com/posts',
    null, // does not send a body
    console.log
);