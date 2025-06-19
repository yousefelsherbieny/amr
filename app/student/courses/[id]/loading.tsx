import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-8 w-[300px]" />
      </div>

      <Skeleton className="h-48 md:h-64 w-full rounded-lg" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="h-10 w-full max-w-md" />

          <div className="space-y-6">
            <div className="border rounded-lg">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-1/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-10 w-[200px]" />
              </div>
            </div>

            <div className="border rounded-lg">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-1/4" />
                <div className="space-y-4">
                  <div className="space-y-2 border-b pb-4">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-[40px]" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-[40px]" />
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-[40px]" />
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-6 w-[50px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
