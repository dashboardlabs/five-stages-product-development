const isValidJSON = (jsonString: string): boolean => {
  try {
    JSON.parse(jsonString)
    return true
  } catch {
    return false
  }
}

export default isValidJSON
