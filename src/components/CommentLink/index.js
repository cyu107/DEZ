import React from 'react';

// constants
import { EXTERNAL_LINKS } from '../../constants';

// styles
import './styles.scss';

const CommentLink = ({ comment }) => {
  return (
    <a
      className="comment-link_wrapper"
      href={EXTERNAL_LINKS.DISCORD}
      target="_blank"
      rel="noopener noreferrer"
    >
      {comment}
    </a>
  );
};

export { CommentLink };
