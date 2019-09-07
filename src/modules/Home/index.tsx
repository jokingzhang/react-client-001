import React, {FC} from 'react';

interface IProps {
    className?: string;
}

const Home: FC<IProps> = props => {
    return (
        <h1>
            Home
        </h1>
    )
}

export default Home;