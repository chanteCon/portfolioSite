import { Dispatch, SetStateAction } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
type Field = 'name' | 'email' | 'message' | 'company';
export default function FormField({
    id,
    label,
    fieldErrors,
    setFieldErrors,
    type,
    className,
    placeholder,
    hideLabel,
}: {
    id: Field;
    label: string;
    fieldErrors: Partial<Record<Field, string>>;
    setFieldErrors: Dispatch<SetStateAction<Partial<Record<Field, string>>>>;
    type: string;
    className?: string;
    placeholder?: string;
    hideLabel?: boolean;
}) {
    const fieldError = fieldErrors[id];
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id} className={hideLabel ? 'hidden' : 'block'}>
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </Label>
            <Input
                id={id}
                name={id}
                className={cn(className, fieldError ? 'border-destructive' : '')}
                onChange={() =>
                    setFieldErrors((current) => {
                        const { [id]: _, ...remaining } = current;
                        return remaining;
                    })
                }
                type={type}
                placeholder={placeholder}
            />
            {fieldError && <p className="text-destructive">{fieldError}</p>}
        </div>
    );
}
