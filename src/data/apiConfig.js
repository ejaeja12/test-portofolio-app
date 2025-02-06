import axios from 'axios'

const baseUrl = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {'X-GitHub-Api-Version': '2022-11-28'}
})

export default baseUrl