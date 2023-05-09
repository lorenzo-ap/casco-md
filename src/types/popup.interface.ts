import React from 'react';

export interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
