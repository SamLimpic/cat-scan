/* eslint-disable no-undef */
const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// @ts-ignore
export const api = axios.create({
  baseURL: base,
  timeout: 30000,
  withCredentials: true
})

// @ts-ignore
export const catFactApi = axios.create({
  baseURL: 'https://catfact.ninja/fact?max_length=75',
  timeout: 30000
})

// not set up yet
