// FORMAT DATE FOR CREATED AT
export const formatDate = (object, origin) => {
  if (object !== undefined) {
    console.log(object)
    const milliseconds = Date.parse(object.created_at)
    const dateObj = new Date(milliseconds)
    const createdAtDateFormat =
      origin === 'post'
        ? dateObj.toLocaleString("en-US").substring(0, 11).replace(',', '') 
        : dateObj.toLocaleString("en-US").replace(',', '')
    return createdAtDateFormat
  }
}

// GETS READ TIME
export const getReadTime = (post) => {
  const parsedContentArr = JSON.parse(post.content).blocks
  const textWordCountArr = parsedContentArr.map(c => {
    return c.text.split(' ').length
  });
  const contentTextLength = textWordCountArr.reduce((acc, curr) => acc + curr)
  const avgWPM = 170
  const minutesToRead = Math.floor(contentTextLength / avgWPM)
  return minutesToRead
}