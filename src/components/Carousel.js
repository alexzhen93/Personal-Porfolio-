import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import GitHub from '../assets/images/GitHub.png';
import LinkedIn from '../assets/images/LinkedIn.png';
import SplitIt from '../assets/images/SplitIt.png';
import Weather from '../assets/images/Weather.png';
import Alex from '../assets/images/Alex.png';
import Resume from '../assets/pdfs/Resume.pdf';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Personal Resume',
                    subTitle: 'Resume',
                    imgSrc: Alex,
                    link: Resume,
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: 'Personal and School Projects',
                    imgSrc: GitHub,
                    link: 'https://github.com/alexzhen93',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    subTitle: 'Professional network',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/jia-peng-zhen-6455a1170/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Split it',
                    subTitle: 'Spliting Bill Web App',
                    imgSrc: SplitIt,
                    link: 'https://app-split-it.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'SimpleWeather',
                    subTitle: 'Weather App',
                    imgSrc: Weather,
                    link: 'https://weather-app-az.herokuapp.com/',
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
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;