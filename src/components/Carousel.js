import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import GitHub from '../assets/images/GitHub.png';
import LinkedIn from '../assets/images/LinkedIn.png';
import Alex from '../assets/images/Alex.png';
import Resume from '../assets/pdfs/Resume.pdf';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'Personal and School Projects',
                    imgSrc: GitHub,
                    link: 'https://github.com/alexzhen93',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'Professional network',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/jia-peng-zhen-6455a1170/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Personal Resume',
                    subTitle: 'Resume of all my work and personal experiences',
                    imgSrc: Alex,
                    link: Resume,
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;