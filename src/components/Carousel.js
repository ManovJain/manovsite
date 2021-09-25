import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import AnimBigIdeas from '../assets/images/AnimBigIdeas.png';
import Manov from '../assets/images/Manov.png';
import Ultimate from '../assets/images/Ultimate.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Academics",
                    subTitle: "Learn about what I've done at school!",
                    imgSrc: AnimBigIdeas,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: "Manov Jain",
                    subTitle: "Welcome to my website!",
                    imgSrc: Manov,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: "Hobbies",
                    subTitle: "Learn more about my interests!",
                    imgSrc: Ultimate,
                    link: '',
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