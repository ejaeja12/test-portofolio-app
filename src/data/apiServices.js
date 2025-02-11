import baseUrl from './apiConfig.js'

export const getGithubRepo = async () => {
  return baseUrl.get('/users/ejaeja12/repos')
}
