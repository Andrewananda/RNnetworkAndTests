export const Utils = {
  CheckUserDetails: function (user) {
    if (user.password === user.confirmPassword) {
      console.log('User Password match');
      return 1;
    } else {
      console.log('Password dont match error');
      return 0;
    }
  },
};
