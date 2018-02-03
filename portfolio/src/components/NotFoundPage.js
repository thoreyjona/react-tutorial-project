import React from 'react';
import {Link} from 'react-router-dom';
//Using client site routing with Link instead of full page refresh with a
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;