type FeatureCardProps = {
    text: string;
    icon: React.ReactNode;
};

export function FeatureCard({ text, icon }: FeatureCardProps) {
    return (
        <div className="flex items-start gap-3 rounded-md border border-border bg-card p-4">
            {icon}
            <p className="text-sm text-muted-foreground">{text}</p>
        </div>
    );
}
