import React from 'react';
import Likes from '../helper/Likes';
import Media from '../helper/Media';
import ProfilePoster from '../helper/ProfilePoster';
import PTab from '../helper/ProfileTab';
import Tweets from '../helper/Tweets';
import TAR from '../helper/TweetsAndReply';

const ProfileIndex = () => {
  return (
    <div>
      <ProfilePoster />
      <PTab />
    </div>
  );
};

export default ProfileIndex;
