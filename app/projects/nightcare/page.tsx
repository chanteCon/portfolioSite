import { NIGHTCARE_URL } from '@/app/constants';

import { ArrowUpRight, Gamepad2 } from 'lucide-react';

export default function NightCarePage() {
    return (
        <div className="flex flex-col gap-12">
            <section>
                <p className="text-sm text-accent">UNIVERSITY PROJECT</p>

                <h1 className="mt-2 text-3xl text-primary sm:text-4xl">NightCare</h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    A horror escape room game created as part of a university team project using
                    Unreal Engine 4.
                </p>

                <a
                    href={NIGHTCARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                    View project
                    <ArrowUpRight className="size-4" />
                </a>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Overview</h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    NightCare is a horror escape room game set in a daycare environment. The player
                    explores an unsettling version of the daycare, solving puzzles and interacting
                    with objects throughout the environment.
                </p>
            </section>

            <section>
                <h2 className="text-2xl text-primary">What I worked on</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-border bg-card p-5">
                        <Gamepad2 className="size-5 text-accent" />

                        <h3 className="mt-3 text-base">Gameplay</h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Helped build gameplay interactions, puzzles, and mechanics that guide
                            the player through the environment.
                        </p>
                    </div>

                    <div className="rounded-md border border-border bg-card p-5">
                        <Gamepad2 className="size-5 text-accent" />

                        <h3 className="mt-3 text-base">Environment</h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Worked as part of the team to create an immersive daycare environment
                            using Unreal Engine 4.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Technology</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                    {['Unreal Engine 4', 'Blueprints'].map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
