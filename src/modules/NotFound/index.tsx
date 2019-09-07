import React, {FC} from 'react';

interface IProps {
    className?: string;
}

const NotFound: FC<IProps> = props => {
    return (
        <h1>
            NotFound
        </h1>
    )
}

export default NotFound;