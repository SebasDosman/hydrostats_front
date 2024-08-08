import PropTypes from 'prop-types';

import { CardItem } from './';


export const CardList = ({ people = [] }) => {
    return (
        people.map(person => (
            <CardItem key={ person.id } image={ person.image } career={ person.career } name={ person.name } description={ person.description } github={ person.github } />
        ))
    );
};


CardList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            career: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            github: PropTypes.string.isRequired
        })
    ).isRequired,
};
