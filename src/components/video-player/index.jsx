import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  return (
    <video
      width={props.width}
      height={props.height}
      poster={`../img/${props.img.fileName}.${props.img.extension}`}
      autoPlay={true}
    >
      <source src={props.preview} />
    </video>
  );
}

VideoPlayer.defaultProps = {
  preview: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  width: 300,
  height: 150,
  img: {
    fileName: `aviator`,
    extension: `jpg`,
  },
};

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  img: PropTypes.shape({
    fileName: PropTypes.string,
    extension: PropTypes.string,
  }),
};

export default VideoPlayer;
