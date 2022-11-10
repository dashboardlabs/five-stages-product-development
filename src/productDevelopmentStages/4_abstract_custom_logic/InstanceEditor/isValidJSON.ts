const isValidJSON = (formJSON: string): boolean => {
  try {
    JSON.parse(formJSON)
    return true
  } catch {
    return false
  }
}

export default isValidJSON
