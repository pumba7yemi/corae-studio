
// Simulated connector to external CMS (e.g., Strapi)
export function fetchCMSContent(endpoint) {
    return fetch(`https://cms.example.com/api/${endpoint}`)
        .then(res => res.json())
        .catch(err => console.error("CMS Fetch Error:", err));
}
