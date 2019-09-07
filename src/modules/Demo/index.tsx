import React, {FC} from 'react';

interface IProps {
    className?: string;
}

const Demo: FC<IProps> = props => {
    return (
        <>
            <h1>
                Demo
            </h1>
            <ul>
                <li>
                    <a href="http://demo-library.jokingzhang.com/" target="_blank" rel="library">
                        MDN 本地图书馆网站（LocalLibrary）前后端分离版
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Demo;