const search = async (endpoint, source, accessToken, proximity, bbox, types, countries, query) => {
  const uri = endpoint + '/geocoding/v5/' +
    source + '/' + encodeURIComponent(query) + '.json' +
    '?access_token=' + accessToken +
    (proximity ? '&proximity=' + proximity : '') +
    (bbox ? '&bbox=' + bbox : '') +
    (types ? '&types=' + encodeURIComponent(types) : '')
    (countries ? '&countries=' + encodeURIComponent(countries) : '')

  const response = await fetch(uri)
  if (response.status === 200) {
    const result = await response.json()

    return result
  } else {
    return null
  }
}

export default search
