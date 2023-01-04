function createQuote(qoute, callback) {
    let myQoute = "Link I always say, " + qoute;
    callback(myQoute); // 2
}

function logQoute(qoute) {
    console.log(qoute + 'Yes..');
}

createQuote(" you wil getting better!", logQoute);