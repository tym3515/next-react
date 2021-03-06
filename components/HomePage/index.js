import React from 'react';
import cowsay from 'cowsay-browser';
import styles from './index.less';
import { Router } from '../../routers';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';

function HomePage({ homeStore }) {
    return (
        <React.Fragment>
            <h2 className={styles.title}>Hello World!{homeStore.name}</h2>
            <Button type="primary" onClick={() => {Router.pushRoute('/demo/455')}}>动态路由</Button>
            &nbsp;&nbsp;
            <Button type="primary" onClick={() => {Router.pushRoute('/nested_router')}}>嵌套路由</Button>
            <pre>
                {cowsay.say({ text: 'hi there!' })}
            </pre>
        </React.Fragment>
    );
}

export default inject('homeStore')(observer(HomePage));