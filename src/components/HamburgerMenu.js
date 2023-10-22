import { useState, useContext, createContext } from 'react';

// Create a context to share the state
const HamburgerMenuContext = createContext();

// Custom hook to access and manipulate the state
export function useHamburgerMenu() {
  const context = useContext(HamburgerMenuContext);
  if (!context) {
    throw new Error('useHamburgerMenu must be used within a HamburgerMenuProvider');
  }
  return context;
}

// Provider component to wrap around components needing access to the state
export function HamburgerMenuProvider({ children }) {
  const [show, setShow] = useState(true);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formFilled, setFormFilled] = useState(false);

  return (
    <HamburgerMenuContext.Provider value={{ isHamburgerMenuOpen, setIsHamburgerMenuOpen, loading, setLoading, show, setShow, formFilled, setFormFilled }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
}
