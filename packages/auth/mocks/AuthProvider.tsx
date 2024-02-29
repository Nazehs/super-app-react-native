import React from 'react';

interface CreateAuthProviderMockProps {
  isSignOut?: boolean;
  isLoading?: boolean;
}

type AuthProviderMockProps = {
  [K in keyof CreateAuthProviderMockProps]-?: NonNullable<
    CreateAuthProviderMockProps[K]
  >;
};

export const createAuthProviderMock = ({
  isSignOut = false,
  isLoading = false,
}: CreateAuthProviderMockProps) => {
  return ({
    children,
  }: {
    children: ({
      isSignOut,
      isLoading,
    }: AuthProviderMockProps) => React.ReactNode;
  }) => {
    return <>{children({ isSignOut, isLoading })}</>;
  };
};
