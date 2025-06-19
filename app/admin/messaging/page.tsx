import { Search, PlusCircle, Send, Paperclip, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample conversations data
const conversations = [
  {
    id: 1,
    name: "Faculty Group",
    lastMessage: "Meeting is rescheduled to 2 PM tomorrow.",
    time: "1h ago",
    unread: 2,
    isGroup: true,
    members: ["Dr. Sarah Johnson", "Dr. James Wilson", "Prof. Emily Chen", "+ 5 more"],
    online: false,
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    lastMessage: "I'll send the updated course materials shortly.",
    time: "3h ago",
    unread: 0,
    isGroup: false,
    online: true,
  },
  {
    id: 3,
    name: "Student Affairs Team",
    lastMessage: "We need to discuss the new admission process.",
    time: "Yesterday",
    unread: 0,
    isGroup: true,
    members: ["Jessica Lee", "Michael Rodriguez", "Emily Brown", "+ 3 more"],
    online: false,
  },
  {
    id: 4,
    name: "Prof. Emily Chen",
    lastMessage: "Can we meet to discuss the Physics curriculum?",
    time: "Yesterday",
    unread: 1,
    isGroup: false,
    online: false,
  },
  {
    id: 5,
    name: "IT Support",
    lastMessage: "The system maintenance is scheduled for this weekend.",
    time: "2 days ago",
    unread: 0,
    isGroup: false,
    online: true,
  },
]

// Sample messages for the selected conversation
const messages = [
  {
    id: 1,
    sender: "Dr. James Wilson",
    content: "Hello! I wanted to discuss the updated course materials for CS101.",
    time: "10:30 AM",
    isSelf: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hi Dr. Wilson, I'm available now. What changes are you considering?",
    time: "10:35 AM",
    isSelf: true,
  },
  {
    id: 3,
    sender: "Dr. James Wilson",
    content:
      "I'm thinking about adding a new section on advanced algorithms and data structures. Students have been requesting more content in that area.",
    time: "10:37 AM",
    isSelf: false,
  },
  {
    id: 4,
    sender: "You",
    content:
      "That sounds like a great addition. Do you have the materials ready or do you need assistance preparing them?",
    time: "10:40 AM",
    isSelf: true,
  },
  {
    id: 5,
    sender: "Dr. James Wilson",
    content:
      "I have most of it prepared, but I could use some help organizing the lab assignments. I'll send what I have shortly.",
    time: "10:45 AM",
    isSelf: false,
  },
]

export default function MessagingPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="grid h-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {/* Sidebar - Conversation List */}
        <div className="border-r md:col-span-1 lg:col-span-1">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <h1 className="text-xl font-bold">Messages</h1>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <PlusCircle className="h-5 w-5" />
              <span className="sr-only">New message</span>
            </Button>
          </div>

          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
            </div>
          </div>

          <div className="h-[calc(100vh-15rem)] overflow-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-start gap-3 border-b p-4 hover:bg-muted/50 ${
                  conversation.id === 2 ? "bg-muted" : ""
                }`}
              >
                <Avatar>
                  {conversation.isGroup ? (
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  ) : (
                    <>
                      <AvatarImage src={`/abstract-geometric-shapes.png?height=40&width=40&query=${conversation.name}`} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </>
                  )}
                </Avatar>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{conversation.name}</span>
                      {conversation.online && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{conversation.time}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground line-clamp-1">{conversation.lastMessage}</span>
                    {conversation.unread > 0 && (
                      <Badge variant="default" className="ml-auto">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
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
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/thoughtful-doctor.png" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Dr. James Wilson</div>
                <div className="text-xs text-muted-foreground">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Clear Chat</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isSelf ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {!message.isSelf && <div className="mb-1 text-xs font-medium">{message.sender}</div>}
                  <div>{message.content}</div>
                  <div
                    className={`mt-1 text-right text-xs ${
                      message.isSelf ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon" className="h-9 w-9">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
