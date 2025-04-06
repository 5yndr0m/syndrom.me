import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { hardware, software, services } from "@/lib/deviceData";

export function HardwareContent() {
  return (
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
  );
}

export function SoftwareContent() {
  return (
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
  );
}

export function ServicesContent() {
  return (
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
  );
}