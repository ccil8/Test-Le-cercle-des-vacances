import axios from 'axios';

import consts from '../consts';

const Elevateur2 =component =>
    axios
        .post(consts.WELCOME_API_ELEVATEUR2_URL, { action: component.state.action})

export default Elevateur2;