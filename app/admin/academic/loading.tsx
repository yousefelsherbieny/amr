import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AcademicLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[150px]" />
      </div>

      <Skeleton className="h-10 w-[300px]" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-6 w-[60px]" />
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-[120px]" />
            <Skeleton className="h-4 w-[180px] mt-1" />

            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-2 w-full" />

              <div className="grid grid-cols-2 gap-2 pt-4">
                <Skeleton className="h-[60px] w-full rounded-md" />
                <Skeleton className="h-[60px] w-full rounded-md" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-[180px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-[120px]" />
                      <Skeleton className="h-4 w-[160px] mt-1" />
                    </div>
                  </div>
                ))}
            </div>

            <Skeleton className="h-10 w-full mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-[150px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-[150px]" />
                      <Skeleton className="h-4 w-[180px] mt-1" />
                    </div>
                  </div>
                ))}
            </div>

            <Skeleton className="h-10 w-full mt-4" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[350px]" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-[100px] w-full rounded-xl" />
              ))}
          </div>

          <Skeleton className="h-[250px] w-full mt-6 rounded-xl" />
        </CardContent>
      </Card>
    </div>
  )
}
