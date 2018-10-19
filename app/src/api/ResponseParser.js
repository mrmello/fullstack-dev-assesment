/**
 * Rejects the promise if the response is invalid.
 * Resolves for a object ready to be rendered
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

/**
 * Rejects the promise if the response is invalid.
 * Resolves for a object ready to be rendered
 */
export function campaignByIdParser(response) {
  return new Promise((resolve, reject) => {
    if(!response.data[0]) {
      reject()
    } else {
      resolve(response.data[0])
    }
  })
}
