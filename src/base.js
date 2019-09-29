import PropTypes from 'prop-types';

export const EventPropType = {
  title: PropTypes.node,
  cover: PropTypes.string,
  exp: PropTypes.node,
  where: PropTypes.node,
  caption: PropTypes.node,
  roles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.number,
    need: PropTypes.number,
  })),
  description: PropTypes.string,
};
