const validation = {
    username: {
      presence: {
        message: '^Please enter an username address'
      },
      email: {
        message: '^Please enter a valid username address'
      }
    },
    
    password: {
      presence: {
        message: '^Please enter a password'
      },
      length: {
        minimum: 8,
        message: '^Your password must be at least 8 characters'
      }
    }
  }
  
  export default validation