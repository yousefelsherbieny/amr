"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, GraduationCapIcon, HomeIcon, MailIcon, PhoneIcon } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Ahmed Hassan",
    email: "ahmed.hassan@edu-tanta.com",
    studentId: "ST-2023-0042",
    phone: "+20 123 456 7890",
    address: "123 El-Nasr Street, Tanta, Egypt",
    dateOfBirth: "15 May 2005",
    class: "Grade 11",
    section: "Computer Science",
    rollNumber: "42",
    bloodGroup: "O+",
    fatherName: "Hassan Ibrahim",
    fatherOccupation: "Engineer",
    fatherPhone: "+20 123 456 7891",
    motherName: "Fatima Ahmed",
    motherOccupation: "Doctor",
    motherPhone: "+20 123 456 7892",
  })

  useEffect(() => {
    // In a real app, you would fetch the profile data from an API
    // For now, we'll use the mock data
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    // In a real app, you would save the profile data to an API
    setIsEditing(false)
  }

  return (
    <div className="p-4 md:p-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Summary Card */}
        <Card className="w-full md:w-1/3">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-icon.png" alt={profileData.name} />
                <AvatarFallback className="text-2xl">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl">{profileData.name}</CardTitle>
            <CardDescription>{profileData.studentId}</CardDescription>
            <div className="mt-2">
              <Badge className="bg-purple-600">{profileData.class}</Badge>
              <Badge variant="outline" className="ml-2">
                {profileData.section}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <HomeIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profileData.dateOfBirth}</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCapIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Roll: {profileData.rollNumber}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Detailed Information */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={profileData.name} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" value={profileData.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={profileData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={profileData.address} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={profileData.dateOfBirth}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Input
                          id="bloodGroup"
                          name="bloodGroup"
                          value={profileData.bloodGroup}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Full Name</h4>
                          <p>{profileData.name}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                          <p>{profileData.email}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                          <p>{profileData.phone}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Address</h4>
                          <p>{profileData.address}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Date of Birth</h4>
                          <p>{profileData.dateOfBirth}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Blood Group</h4>
                          <p>{profileData.bloodGroup}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
                      Save Changes
                    </Button>
                    <Button variant="outline" className="ml-2" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Your academic details and class information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Student ID</h4>
                        <p>{profileData.studentId}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Class</h4>
                        <p>{profileData.class}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Section</h4>
                        <p>{profileData.section}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Roll Number</h4>
                        <p>{profileData.rollNumber}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Academic Year</h4>
                        <p>2024-2025</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Admission Date</h4>
                        <p>10 September 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="family" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Family Information</CardTitle>
                  <CardDescription>Your family details and emergency contacts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">Father's Information</h3>
                      <Separator className="my-2" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Name</h4>
                          <p>{profileData.fatherName}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Occupation</h4>
                          <p>{profileData.fatherOccupation}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                          <p>{profileData.fatherPhone}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Mother's Information</h3>
                      <Separator className="my-2" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Name</h4>
                          <p>{profileData.motherName}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Occupation</h4>
                          <p>{profileData.motherOccupation}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                          <p>{profileData.motherPhone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
