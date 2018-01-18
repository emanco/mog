export default function getUserInitials(name) {
  // Detect if there is at least one space in the name
  const firstSpace = name.indexOf(' ')

  if (firstSpace > -1) {
    //at least one space
    const firstInitial = name.charAt(0)
    const initials = firstInitial + name.charAt(firstSpace+1)
    return initials
  } else if (firstSpace === -1) {
    // There is no space so only one name
    const initials = name.substr(0,2);
    return initials
  } else {
    return 'XX'
  }
};