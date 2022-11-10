const isValidJSON = (formCode: string): boolean => {
  try {
    JSON.parse(formCode)
    return true
  } catch {
    return false
  }
}

export default isValidJSON
