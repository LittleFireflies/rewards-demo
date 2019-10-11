const BASE_URL = "https://staging-dot-bekraf-developer-conference.appspot.com"

const fetchApi = url => {
    return fetch(url, {
        mode: "no-cors"
    }).then(response => {
        console.log(response.status)
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText))
        } else {
            return Promise.resolve(response)
        }
    }).then(response => response.json())
        .catch(err => {
            console.log(err)
        })
}

const showData = data => {
    let element = document.getElementById("reward-items")
    let content = '';
    for (reward of data) {
        content += `
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${reward.name}</h5>
                    <p class="card-text">${reward.points}.</p>
                    <a href="#" class="btn btn-primary">Redeem</a>
                </div>
            </div>
        </div>
    `
    } 

    element.innerHTML = content
}

const getRewards = () => {
    fetchApi(BASE_URL + "/rewards")
        .then(data => {
            showData(data)
        })
}

getRewards()