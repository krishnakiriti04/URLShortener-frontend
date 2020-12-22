async function shrink() {
    let data = document.getElementById('fullurl').value;
    fetch("http://localhost:5000/shorturl", {
        method: 'POST',
        body: JSON.stringify({ "url": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        alert('URL Shrinked!!');
    }).catch(err => console.log(err));

    document.getElementById('fullurl').innerHTML = "";
    location.reload(true);
}

async function filldata() {

    let raw = await fetch('http://localhost:5000/load');
    let data = await raw.json();

    let tbody = document.createElement('tbody');
    tbody.id = "table-body"
    data.forEach(url => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = `<a href="${url.fullURL}">${url.fullURL}</a>`
        let td2 = document.createElement('td');
        td2.innerHTML = `<a target="_blank" href="http://localhost:5000/${url.shortURL}">http://localhost:5000/${url.shortURL}</a>`
        let td3 = document.createElement('td');
        td3.innerHTML = url.clicks;
        tr.append(td1, td2, td3);
        tbody.append(tr);
    })
    document.getElementById('urlTable').appendChild(tbody);
}


filldata();