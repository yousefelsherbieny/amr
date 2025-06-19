import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-9 w-[120px]" />
        </div>
      </div>

      <Tabs defaultValue="mark" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="mark" disabled>
            Mark Attendance
          </TabsTrigger>
          <TabsTrigger value="records" disabled>
            Attendance Records
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mark" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <Skeleton className="h-6 w-[200px] mb-2" />
                  <Skeleton className="h-4 w-[300px]" />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[50px] mb-2" />
                    <Skeleton className="h-10 w-[180px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[50px] mb-2" />
                    <Skeleton className="h-10 w-[180px]" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead>
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="w-[150px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="text-center w-[120px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="text-center w-[120px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="text-center w-[120px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                    <TableHead className="w-[150px]">
                      <Skeleton className="h-4 w-full" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-4 w-[150px]" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-2 w-full" />
                            <Skeleton className="h-4 w-[30px]" />
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Skeleton className="h-8 w-8 rounded-full mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <Skeleton className="h-8 w-8 rounded-full mx-auto" />
                        </TableCell>
                        <TableCell className="text-center">
                          <Skeleton className="h-8 w-8 rounded-full mx-auto" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-8 w-full" />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-10 w-[120px]" />
              <Skeleton className="h-10 w-[150px]" />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
