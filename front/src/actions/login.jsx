import axios from 'axios';

import consts from '../consts';

const userLogin = component =>
  axios
    .post(consts.WELCOME_API_LOGIN_URL, { email: component.state.email, password: component.state.password })
    .then((response) => {
      if (response.data.length) {
        component.setState({
          connected: true,
          isAdmin: response.data[0].admin,
        });
      } else {
        component.setState({
          message: 'L\'identifiant ou le mot de passe est incorrect',
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

export default userLogin;