import { Container } from "@/components/container";

export default function Loading() {
  return (
    <main className="bg-background min-h-screen pt-28 pb-20">
      <Container className="max-w-5xl space-y-12">
        {/* Header Skeleton */}
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-orange-500/10" />
          <div className="bg-muted/60 mx-auto h-10 w-3/4 animate-pulse rounded-2xl" />
          <div className="bg-muted/40 mx-auto h-4 w-full animate-pulse rounded-xl" />
        </div>

        {/* Content Rows Skeleton */}
        <div className="space-y-10">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border-border/30 grid grid-cols-1 items-center gap-8 border-b py-6 last:border-b-0 lg:grid-cols-12"
            >
              <div className="bg-muted/50 aspect-video animate-pulse rounded-2xl lg:col-span-7" />
              <div className="space-y-4 lg:col-span-5">
                <div className="h-5 w-24 animate-pulse rounded-full bg-orange-500/10" />
                <div className="bg-muted/60 h-8 w-3/4 animate-pulse rounded-xl" />
                <div className="space-y-2">
                  <div className="bg-muted/40 h-4 w-full animate-pulse rounded" />
                  <div className="bg-muted/40 h-4 w-5/6 animate-pulse rounded" />
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-10 w-32 animate-pulse rounded-xl bg-orange-500/20" />
                  <div className="bg-muted/40 h-10 w-24 animate-pulse rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
