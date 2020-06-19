import React from 'react';
import './Style.css';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hello, my name is Alex</p>
            </Content>
        </div>
    );
}

export default AboutPage;