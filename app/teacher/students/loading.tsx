import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-9 w-[80px]" />
          <Skeleton className="h-9 w-[80px]" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-full" />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="all" disabled>
            All Students
          </TabsTrigger>
          <TabsTrigger value="active" disabled>
            Active
          </TabsTrigger>
          <TabsTrigger value="inactive" disabled>
            Inactive
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div>
                          <Skeleton className="h-5 w-[120px] mb-1" />
                          <Skeleton className="h-4 w-[80px]" />
                        </div>
                      </div>
                      <Skeleton className="h-6 w-[80px] rounded-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                      </div>

                      <div className="space-y-1">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                      </div>

                      <div className="space-y-1">
                        <Skeleton className="h-5 w-[100px]" />
                        <div className="flex flex-wrap gap-1">
                          <Skeleton className="h-6 w-[80px] rounded-full" />
                          <Skeleton className="h-6 w-[100px] rounded-full" />
                          <Skeleton className="h-6 w-[90px] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex border-t divide-x h-10">
                    <Skeleton className="flex-1 rounded-none" />
                    <Skeleton className="flex-1 rounded-none" />
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
