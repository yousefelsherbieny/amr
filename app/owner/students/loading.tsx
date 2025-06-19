import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-[100px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <Skeleton className="h-10 w-[350px] mb-2 md:mb-0" />
          <div className="flex flex-col sm:flex-row gap-2">
            <Skeleton className="h-10 w-[250px]" />
            <Skeleton className="h-10 w-[100px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Skeleton className="h-5 w-[150px] mb-2" />
                      <Skeleton className="h-4 w-[180px]" />
                    </div>
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    {Array(4)
                      .fill(0)
                      .map((_, j) => (
                        <div key={j} className="flex items-center">
                          <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Skeleton className="h-5 w-[80px] rounded-full" />
                  <Skeleton className="h-5 w-[100px] rounded-full" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[200px] mb-2" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-muted rounded-lg p-4">
                  <Skeleton className="h-5 w-[150px] mb-2" />
                  <Skeleton className="h-40 w-full" />
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
