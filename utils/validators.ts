

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export const validateRole = (role: string): boolean => {
  return role === 'admin' || role === 'user';
}
