export const getApi = () => {
  if(window.location.hostname === 'hackyourfuture.dk') {
    return 'https://tdla96bnzi.execute-api.eu-central-1.amazonaws.com/production'
  } else {
    return 'http://localhost:3001'
  }
}
