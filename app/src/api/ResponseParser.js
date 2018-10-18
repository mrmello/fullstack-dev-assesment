/**
 * Rejects the promise if the response is invalid.
 * Resolves for a weather object ready to be render and stored in
 * localStorage through a hashCode of three decimal case precision latitude
 * and longitude object. This object also contains the cache expiration time.
 */
export function campaignsParser(response) {
  return new Promise((resolve, reject) => {
    if(!response.data[0]) {
      reject()
    } else {
      let arrayStatus = []
      for(let campaign of response.data) {
        var map = new Map()
        let index = arrayStatus.findIndex(element => element.has(campaign.status))
        if(index > -1) {
          arrayStatus.splice(index, 1, map.set(campaign.status, [arrayStatus[index].get(campaign.status)[0], campaign]))
        } else {
          arrayStatus.push(map.set(campaign.status, [{campaign}]))
        }
      }
      resolve(arrayStatus)
    }
  })
}

export function campaignByIdParser(response) {
  return new Promise((resolve, reject) => {
    if(!response.data[0]) {
      reject()
    } else {
      resolve(response.data[0])
    }
  })
}
