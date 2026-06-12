import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

interface DateProps {
  label: string;
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  error?: string;
}

export default function DateInput({
  label,
  value,
  onChange,
  error,
}: DateProps) {
  return (
    <div>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}