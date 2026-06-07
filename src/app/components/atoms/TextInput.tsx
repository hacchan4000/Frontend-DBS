'use client';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

type Variant = 'standard' | 'outlined';

interface TextInputProps {
  label: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  type?: string;
  variant?: Variant;
  disabled?: boolean;
}

export default function TextInput({
  label,
  value,
  onChange,
  className = '',
  error,
  type = 'text',
  variant = 'standard',
  disabled = false,
}: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPasswordType = type === 'password';

  // Determine input type
  const inputType = React.useMemo(() => {
    if (!isPasswordType) return type;
    return showPassword ? 'text' : 'password';
  }, [type, isPasswordType, showPassword]);

  return (
    <div className={`flex w-full flex-col gap-1 pt-4 ${className}`}>
      {variant === 'outlined' && (
        <label className="text-sm font-medium text-gray-600">{label}</label>
      )}

      <TextField
        label={variant === 'standard' ? label : ''}
        value={value}
        onChange={onChange}
        fullWidth
        type={inputType}
        error={!!error}
        helperText={error}
        variant={variant}
        disabled={disabled}
        slotProps={{
          input: {
            endAdornment: isPasswordType && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          },
          inputLabel:
            variant === 'standard'
              ? {
                  sx: {
                    fontFamily: 'Poppins, Arial, sans-serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    color:
                      value !== '' && value !== null
                        ? 'var(--color-gray-500)'
                        : 'var(--color-gray-200)',
                    '&.Mui-focused': {
                      color: 'var(--color-gray-500)',
                    },
                    '&.Mui-error': {
                      color: 'var(--color-red-500)',
                    },
                  },
                }
              : { shrink: true },
        }}
        sx={{
          ...(variant === 'standard' && {
            '& .MuiInput-root:after': {
              borderBottomColor: 'var(--color-primary)',
              borderBottomWidth: '2px',
            },
            '& .MuiInput-root:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'var(--color-primary)',
            },
            '& .MuiInput-root:before': {
              borderBottomColor:
                value !== '' && value !== null
                  ? 'var(--color-primary)'
                  : 'var(--color-gray-400)',
              borderBottomWidth:
                value !== '' && value !== null ? '2px' : '0.5px',
            },
          }),

          ...(variant === 'outlined' && {
            '& .MuiOutlinedInput-root': {
              borderRadius: '6px',
              '& fieldset': {
                borderColor: 'var(--color-gray-200)',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: 'var(--color-gray-200)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--color-gray-200)',
                borderWidth: '2px',
              },
              '&.Mui-error fieldset': {
                borderColor: 'var(--color-red-500)',
              },
            },

            '& .MuiOutlinedInput-input': {
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingLeft: '14px',
              paddingRight: '14px',
            },
          }),
        }}
      />
    </div>
  );
}
