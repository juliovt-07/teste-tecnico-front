import axios from 'axios'

const reqresClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*' 
  },
});

const economiaClient = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br',
  headers: {
    'Content-Type': 'application/json'
  },
});

export { reqresClient, economiaClient }