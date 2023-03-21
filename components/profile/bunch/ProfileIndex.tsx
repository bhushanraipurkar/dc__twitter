import React from 'react';
import Likes from '../helper/Likes';
import Media from '../helper/Media';
import ProfilePoster from '../helper/ProfilePoster';
import PTab from '../helper/ProfileTab';
import Tweets from '../helper/Tweets';
import TAR from '../helper/TweetsAndReply';
import { useSession } from 'next-auth/react';

const ProfileIndex = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <div>
        <ProfilePoster />
        <PTab />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Login first</h1>
      </div>
    );
  }
};

export default ProfileIndex;
