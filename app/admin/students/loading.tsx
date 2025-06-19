import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-10 w-full max-w-sm" />
        <Skeleton className="h-10 w-[120px]" />
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all" disabled>
            All Students
          </TabsTrigger>
          <TabsTrigger value="active" disabled>
            Active
          </TabsTrigger>
          <TabsTrigger value="new" disabled>
            New Enrollments
          </TabsTrigger>
          <TabsTrigger value="attention" disabled>
            Requires Attention
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <StudentCardSkeleton key={i} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StudentCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <Skeleton className="h-32 w-full" />
          <div className="mt-14 p-4">
            <div className="mb-2 flex items-center justify-between">
              <Skeleton className="h-5 w-[120px]" />
              <Skeleton className="h-5 w-[60px]" />
            </div>
            <Skeleton className="h-4 w-[100px]" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Skeleton className="h-8 w-[60px]" />
              <Skeleton className="h-8 w-[60px]" />
              <Skeleton className="h-8 w-[60px]" />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Skeleton className="h-9 w-[60px]" />
              <Skeleton className="h-9 w-[60px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
