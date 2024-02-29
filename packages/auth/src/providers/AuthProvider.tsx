import React from 'react';
import AuthService from '../services/AuthService';
import { AuthContext } from '../contexts/AuthContext';

enum ActionTypes {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

type Action = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  isLoading: boolean;
  isSignOut: boolean;
  mobileNumber: string;
};

const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...prevState,
        isSignOut: action.payload,
        isLoading: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...prevState,
        isSignOut: false,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignOut: true,
      };
    default:
      return prevState;
  }
};

const AuthProvider = ({
  children,
}: {
  children: (data: State) => React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    isSignOut: true,
    mobileNumber: '234817736363'
  });


  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        try {
          await AuthService.shared.setCredentials('dummy-auth-token');
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_IN });
      },
      signOut: async () => {
        try {
          await AuthService.shared.removeCredentials();
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_OUT });
      },
      signUp: async () => {
        try {
          await AuthService.shared.setCredentials('dummy-auth-token');
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_IN });
      },
    }),
    [],
  );

  React.useEffect(() => {
    const restoreToken = async () => {
      let userToken;

      try {
        userToken = await AuthService.shared.getCredentials();
      } catch (e) {
        // Handle error
      }

      dispatch({ type: ActionTypes.RESTORE_TOKEN, payload: !userToken });
    };

    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {children(state)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// import React from 'react';
// import AuthService from '../services/AuthService';
// import { AuthContext } from '../contexts/AuthContext';

// enum ActionTypes {
//   RESTORE_TOKEN = 'RESTORE_TOKEN',
//   SIGN_IN = 'SIGN_IN',
//   SIGN_OUT = 'SIGN_OUT',
// }

// type Action = {
//   type: ActionTypes;
//   payload?: any;
// };

// type State = {
//   isLoading: boolean;
//   isSignout: boolean;
//   mobileNumber: string;
// };

// const reducer = (prevState: State, action: Action): State => {
//   switch (action.type) {
//     case ActionTypes.RESTORE_TOKEN:
//       return {
//         ...prevState,
//         isSignout: action.payload,
//         isLoading: false,
//       };
//     case ActionTypes.SIGN_IN:
//       return {
//         ...prevState,
//         isSignout: false,
//         mobileNumber: '234817736363', 
//       };
//     case ActionTypes.SIGN_OUT:
//       return {
//         ...prevState,
//         isSignout: true,
//         mobileNumber: '', 
//       };
//     default:
//       return prevState;
//   }
// };

// const AuthProvider = ({ children }: {
//   children: React.ReactNode;
// }) => {
//   const [state, dispatch] = React.useReducer(reducer, {
//     isLoading: true,
//     isSignout: false,
//     mobileNumber: '',
//   });

//   const authActions = React.useMemo(() => ({
//     signIn: async () => {
//       dispatch({ type: ActionTypes.SIGN_IN });
//     },
//     signOut: async () => {
//       dispatch({ type: ActionTypes.SIGN_OUT });
//     },
//     signUp: async () => {
//       dispatch({ type: ActionTypes.SIGN_IN });
//     },
//   }), []);

//   React.useEffect(() => {
//     const restoreToken = async () => {
//       dispatch({ type: ActionTypes.RESTORE_TOKEN, payload: false }); 
//     };

//     restoreToken();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ ...authActions, ...state }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;