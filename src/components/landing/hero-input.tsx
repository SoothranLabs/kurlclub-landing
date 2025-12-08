'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Button from '../shared/button';

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  suffixIcon?: React.ReactNode;
  onSuffixClick?: () => void;
  mode?: 'light' | 'dark';
}

const HeroInput: React.FC<InputProps> = ({
  type = 'email',
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  required = false,
  className = '',
  suffixIcon,
  onSuffixClick,
  mode = 'light',
}) => {
  const [email, setEmail] = useState(value || '');

  const validateEmail = (mail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
  };

  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Navigate to enquiry page with email parameter
    router.push(`/enquiry?email=${encodeURIComponent(email)}`);

    if (onSuffixClick) onSuffixClick();
  };

  return (
    <div
      className={`flex items-center w-full px-2 sm:px-3 py-2 rounded-xl border
          focus-within:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ${className} ${mode === 'dark' ? 'border-secondary-blue-500 focus-within:border-secondary-blue-500 hover:border-secondary-blue-500' : 'border-white/24 focus-within:border-primary-green-500 hover:border-primary-green-500'}`}
    >
      <input
        id={name}
        type={type}
        name={name}
        value={email}
        placeholder={placeholder || 'Enter your email'}
        onChange={(e) => {
          setEmail(e.target.value);
          if (onChange) onChange(e);
        }}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        required={required}
        className={`w-full bg-transparent outline-none text-[14px] sm:text-[16px] ${
          mode === 'light'
            ? 'text-white placeholder:text-white/60'
            : 'text-secondary-blue-500 placeholder:text-secondary-blue-500'
        }`}
      />

      {suffixIcon && (
        <Button
          className={`${mode === 'dark' && 'bg-secondary-blue-800 text-primary-green-600 hover:bg-secondary-blue-800'}`}
          onClick={handleButtonClick}
        >
          Get started
        </Button>
      )}
    </div>
  );
};

export default HeroInput;
