import React, {FC} from 'react';

interface IProps {
    className?: string;
}

const Blog: FC<IProps> = props => {
    return (
        <h1>
            Blog
        </h1>
    )
}

export default Blog;