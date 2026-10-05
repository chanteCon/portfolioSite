import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
type AppDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    message: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
};

export function AppDialog({
    open,
    onOpenChange,
    title,
    message,
    footer,
    children,
}: AppDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                {children}

                {footer}
            </DialogContent>
        </Dialog>
    );
}
