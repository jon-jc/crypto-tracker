import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import Image from "next/image";

export default function CryptoTracker() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Crypto Tracker</CardTitle>
        <CardDescription>
          Real-time data for multiple cryptocurrencies, including their current
          price, market cap, and percentage change.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              alt="BTC"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-lg sm:text-xl">Bitcoin</h2>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                BTC
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-lg sm:text-xl">$48,235.45</h2>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                Current Price
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-lg sm:text-xl">+3.25%</h2>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                Change
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="grid gap-1.5">
              <h2 className="font-semibold text-lg sm:text-xl">$905.2B</h2>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                Market Cap
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Card className="flex flex-col">
            <CardHeader className="flex items-center gap-4">
              <CardDescription>Price</CardDescription>
              <CardTitle>$48,235.45</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <LineChart className="aspect-[2/1]" />
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex items-center gap-4">
              <CardDescription>Market Cap</CardDescription>
              <CardTitle>$905.2B</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CurvedlineChart className="aspect-[2/1]" />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

function CurvedlineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
