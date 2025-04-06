import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Monitor, Smartphone, Headphones, Code, Cloud } from "lucide-react"
import { hardware, software, services } from "@/lib/deviceData"

export default function UsesPage() {

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Uses</h1>
        <p className="text-muted-foreground mt-2">Hardware, software, and services I use daily.</p>
      </div>

      <Tabs defaultValue="hardware" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="hardware" className="mt-6 space-y-6">
          {hardware.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="software" className="mt-6 space-y-6">
          {software.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="services" className="mt-6 space-y-6">
          {services.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

