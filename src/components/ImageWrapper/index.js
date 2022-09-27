import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

function ImageWrapper (props) {
  const { children, width, height, ...restProps } = props;

  const wrapperStyles = {
    width,
    height,
  };

  return (
    <div style={wrapperStyles} {...restProps} className={styles.wrapper}>
      {children}
    </div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
