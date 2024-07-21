import { useState, createContext, useContext, useCallback, ReactNode } from 'react';

const AnimationLockContext = createContext({
  variables: {} as { [key: string]: any },
  getVariable: (name: string): any => false,
  setVariable: (name: string, value: any) => {},
  removeVariable: (name: string) => {}
});

/**
 * Creates a context provider for animation lock.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @return {ReactElement} The animation lock provider component.
 */
export const AnimationLockProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [variables, setVariables] = useState<{ [key: string]: any }>({});

  // Function to get the value of a variable
  const getVariable = useCallback((name: string) => {
    return variables[name];
  }, [variables]);

  // Function to set the value of a variable
  const setVariable = useCallback((name: string, value: any) => {
    setVariables(prev => ({ ...prev, [name]: value }));
  }, []);

  // Function to remove a variable
  const removeVariable = useCallback((name: string) => {
    setVariables(prev => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  return (
    <AnimationLockContext.Provider value={{ 
      variables, 
      getVariable,
      setVariable, 
      removeVariable 
    }}>
      {children}
    </AnimationLockContext.Provider>
  );
};

export const useAnimationLock = () => useContext(AnimationLockContext);
