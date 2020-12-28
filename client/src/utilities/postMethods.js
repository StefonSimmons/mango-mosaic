// FORMAT DATE FOR CREATED AT
export const formatDate = (post) => {
  if (post !== undefined) {
    const milliseconds = Date.parse(post.created_at)
    const dateObj = new Date(milliseconds)
    const post_datetime = dateObj.toLocaleString("en-US").substring(0, 11).replace(',', '')
    return post_datetime
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