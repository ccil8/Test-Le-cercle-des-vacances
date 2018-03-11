import axios from 'axios';

import consts from '../consts';

const Elevateur1 =component =>
    axios
        .post(consts.WELCOME_API_ELEVATEUR1_URL, { action: component.state.action})

export default Elevateur1;