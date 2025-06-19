import { Badge } from "@/components/ui/badge"
import { Settings2, User, Lock, Bell, LayoutGrid, Moon, SunMedium, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your dashboard settings and preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="md:w-1/4">
            <TabsList className="flex w-full flex-col justify-start md:h-full">
              <TabsTrigger value="general" className="justify-start text-left w-full">
                <Settings2 className="mr-2 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="profile" className="justify-start text-left w-full">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="security" className="justify-start text-left w-full">
                <Lock className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start text-left w-full">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="appearance" className="justify-start text-left w-full">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Appearance
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure general settings for your admin dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="school-name">School Name</Label>
                    <Input id="school-name" defaultValue="Faculty of Computer and Information" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      defaultValue="Sibirbay Campus – Tanta – The Arab Republic Of Egypt"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" defaultValue="admin@fci.edu" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="020" />
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>System Maintenance Mode</Label>
                      <div className="text-sm text-muted-foreground">
                        When enabled, only administrators can access the system.
                      </div>
                    </div>
                    <Switch aria-label="Toggle maintenance mode" />
                  </div>

                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Settings</CardTitle>
                  <CardDescription>Configure timezone, date format, and language preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="Africa/Cairo">Cairo Time (EET)</option>
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="America/Anchorage">Alaska Time (AKT)</option>
                      <option value="Pacific/Honolulu">Hawaii Time (HT)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <select
                      id="date-format"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="ar">Arabic</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>

                  <Button>Save Regional Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile information and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Admin User" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="admin@fci.edu" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" defaultValue="System Administrator" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Enter a short bio..." className="min-h-[100px]" />
                  </div>

                  <Button>Update Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Update your password and security settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button>Change Password</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Enhance your account's security with two-factor authentication.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <div className="text-sm text-muted-foreground">
                        Requires an additional verification step when logging in.
                      </div>
                    </div>
                    <Switch aria-label="Toggle two-factor authentication" />
                  </div>

                  <Button variant="outline">Setup Two-Factor Authentication</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                  <CardDescription>Manage your active sessions and devices.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Current Session</div>
                          <div className="text-sm text-muted-foreground">Windows 11 • Chrome • Tanta, Epypt</div>
                        </div>
                        <Badge variant="secondary">Active Now</Badge>
                      </div>
                    </div>

                    <Button variant="destructive">Sign Out All Other Sessions</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Configure how and when you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <div className="text-sm text-muted-foreground">
                        Receive email notifications for important events.
                      </div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle email notifications" />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Student Registration Alerts</Label>
                      <div className="text-sm text-muted-foreground">Get notified when new students register.</div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle student registration alerts" />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Faculty Updates</Label>
                      <div className="text-sm text-muted-foreground">
                        Get notified about faculty changes and updates.
                      </div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle faculty updates" />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>System Alerts</Label>
                      <div className="text-sm text-muted-foreground">Receive critical system and security alerts.</div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle system alerts" />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Reports & Analytics</Label>
                      <div className="text-sm text-muted-foreground">Get summaries of reports and analytics.</div>
                    </div>
                    <Switch aria-label="Toggle reports and analytics" />
                  </div>

                  <Button>Save Notification Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the appearance of your dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <RadioGroup defaultValue="system" className="grid grid-cols-3 gap-4 pt-2">
                      <div>
                        <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                        <Label
                          htmlFor="theme-light"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <SunMedium className="mb-2 h-6 w-6" />
                          Light
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                        <Label
                          htmlFor="theme-dark"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <Moon className="mb-2 h-6 w-6" />
                          Dark
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="system" id="theme-system" className="sr-only" />
                        <Label
                          htmlFor="theme-system"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <Laptop className="mb-2 h-6 w-6" />
                          System
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Dashboard Layout</Label>
                    <RadioGroup defaultValue="default" className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <RadioGroupItem value="default" id="layout-default" className="sr-only" />
                        <Label
                          htmlFor="layout-default"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="mb-2 space-y-1 rounded-md bg-muted p-2">
                            <div className="h-2 w-[80px] rounded-full bg-primary/70" />
                            <div className="h-2 w-[120px] rounded-full bg-muted-foreground/20" />
                          </div>
                          Default
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="compact" id="layout-compact" className="sr-only" />
                        <Label
                          htmlFor="layout-compact"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="mb-2 space-y-1 rounded-md bg-muted p-2">
                            <div className="h-2 w-[60px] rounded-full bg-primary/70" />
                            <div className="h-2 w-[100px] rounded-full bg-muted-foreground/20" />
                          </div>
                          Compact
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Show welcome message</Label>
                      <div className="text-sm text-muted-foreground">Display a welcome message on the dashboard.</div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle welcome message" />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Show quick stats</Label>
                      <div className="text-sm text-muted-foreground">Display quick statistics on the dashboard.</div>
                    </div>
                    <Switch defaultChecked aria-label="Toggle quick stats" />
                  </div>

                  <Button>Save Appearance Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
