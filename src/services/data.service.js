const _api = 'http://localhost:3000/_api';

const _headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
function request(resource: string, options: any): Promise {
    return new Promise((accept, reject) => {
        fetch(`${_api}`, options).then(response => {
            if (response.ok) {
                response.json().then(json => accept(json)).catch(err => reject(err));
            }
        }).catch(err => {
            reject(err);
        });
    });
}
export async function get(resource, options) {
    return request(`${_api}/${resource}`, {method: 'GET', ..._headers, ...options});
}

export async function post(resource, options) {
    return request(`${_api}/${resource}`, {method: 'POST', ..._headers, ...options});
}

