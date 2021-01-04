// FORMAT DATE FOR CREATED AT
export const formatDate = (object, origin) => {
  if (object !== undefined) {
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

// SET COLOR FOR BLOG POSTS
export const setColor = (id) => {
  // const colors = ['rgb(239,114,24)', 'rgb(29,157,65)', 'rgb(201,13,13)', 'rgb(133,107,123)', 'rgb(235,183,45)', 'rgb(54,70,209)']
  const colors = ['orange', 'green', 'red', 'purple', 'yellow', 'blue']

  const colordIdx = id % 6
  return colors[colordIdx]
}
