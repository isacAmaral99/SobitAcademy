import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        // https://www.youtube.com/watch?v=piVu8Dyn9UA&t=2s
        // "https://www.youtube.com/embed/piVu8Dyn9UA"
        // <iframe width="989" height="565" src="https://www.youtube.com/embed/TvLL4fGia9E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        src={`https://www.youtube.com/embed/fOznK7LBf2I`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
