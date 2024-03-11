import React from 'react';
import TabNavigation from './TabNavigation';
import DefaultNavigation from './DefaultNavigation';

export default function CheckNavigation() {
  const isUser = false;
  return (
    <>
      {isUser ? (
        <>
          <TabNavigation />
        </>
      ) : (
        <>
          <DefaultNavigation />
        </>
      )}
    </>
  );
}
