import { Skeleton } from "@/components/ui/skeleton"

export default function MessagingLoading() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="grid h-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {/* Sidebar - Conversation List */}
        <div className="border-r md:col-span-1 lg:col-span-1">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          <div className="p-4">
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="h-[calc(100vh-15rem)] overflow-auto space-y-4 p-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-5 w-36" />
                      <Skeleton className="h-4 w-14" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex h-full flex-col md:col-span-2 lg:col-span-3">
          {/* Chat Header */}
          <div className="flex h-14 items-center justify-between border-b px-4">
            <div className="flex items-center">
              <Skeleton className="h-8 w-8 rounded-full mr-2" />
              <div>
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-3 w-16 mt-1" />
              </div>
            </div>
            <div>
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <Skeleton className={`h-24 ${index % 2 === 0 ? "w-3/4" : "w-2/3"} rounded-lg`} />
                </div>
              ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-10 flex-1 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
