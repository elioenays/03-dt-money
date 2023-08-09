import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://03-dt-money-api.vercel.app',
})
