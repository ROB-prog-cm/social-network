export const required = value => {
  if (value) return undefined;
  return 'error'
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Max ${maxLength}`;
  return undefined
}
