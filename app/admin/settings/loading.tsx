import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-10 w-[150px]" />
        <Skeleton className="h-4 w-[300px] mt-1" />
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="md:w-1/4">
          <Skeleton className="h-[250px] w-full rounded-md" />
        </div>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[180px]" />
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}

              <Skeleton className="h-px w-full" />

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-3 w-[250px]" />
                </div>
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>

              <Skeleton className="h-10 w-[150px]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
