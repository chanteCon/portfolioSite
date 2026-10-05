import { Dispatch, SetStateAction } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
type Field = 'name' | 'email' | 'message';
export default function FormField({
    id,
    label,
    fieldErrors,
    setFieldErrors,
    type,
}: {
    id: Field;
    label: string;
    fieldErrors: Partial<Record<Field, string>>;
    setFieldErrors: Dispatch<SetStateAction<Partial<Record<Field, string>>>>;
    type: string;
}) {
    const fieldError = fieldErrors[id];
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id}>{label.charAt(0).toUpperCase() + label.slice(1)}</Label>
            <Input
                id={id}
                name={id}
                className={fieldError ? 'border-destructive' : ''}
                onChange={() =>
                    setFieldErrors((current) => {
                        const { [id]: _, ...remaining } = current;
                        return remaining;
                    })
                }
                type={type}
            />
            {fieldError && <p className="text-destructive">{fieldError}</p>}
        </div>
    );
}
