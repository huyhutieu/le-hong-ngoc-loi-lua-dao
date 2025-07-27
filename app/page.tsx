"use client" // Make sure this page is a client component to use the interactive ScammerInfoCard
import { AlertTriangle, Shield, Users, Facebook, Phone } from "lucide-react" // Added Phone icon
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScammerInfoCard from "@/components/scammer-info-card" // Import the new component
import Image from "next/image"
import { useToast } from "@/hooks/use-toast" // Import useToast hook
import { Toaster } from "@/components/ui/toaster" // Import Toaster component

export default function ScamWarningPage() {
  const phoneNumber = "0328725536" // Define the phone number
  const { toast } = useToast() // Initialize useToast

  const handleShareClick = () => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          toast({
            title: "Đã copy!",
            description: "Hãy đi chia sẻ link cảnh báo này.",
            duration: 3000,
          })
        })
        .catch((err) => {
          console.error("Failed to copy URL: ", err)
          toast({
            title: "Lỗi!",
            description: "Không thể sao chép liên kết. Vui lòng thử lại.",
            variant: "destructive",
            duration: 3000,
          })
        })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="h-8 w-8 animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">CẢNH BÁO LỪA ĐẢO</h1>
            <AlertTriangle className="h-8 w-8 animate-pulse" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 max-w-7xl">
        {/* Main Warning Alert */}
        <Alert className="mb-6 sm:mb-8 border-red-500 bg-red-50 border-2 mx-auto max-w-4xl">
          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
          <AlertDescription className="text-base sm:text-lg font-semibold text-red-800">
            <span className="block text-lg sm:text-xl mb-2">⚠️ NGUY HIỂM - TRÁNH XA ⚠️</span>
            Đây là thông tin về kẻ lừa đảo đã được xác minh. Hãy chia sẻ để bảo vệ cộng đồng!
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Scammer Information Card - Replaced by ScammerInfoCard component */}
          <ScammerInfoCard />

          {/* Right Column: Facebook Profile Screenshot, Safety Tips, and Actions */}
          <div className="space-y-6">
            {/* New Card for Facebook Profile Screenshot */}
            <Card className="border-blue-500 border-2">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Facebook className="h-6 w-6" />
                  TRANG FACEBOOK CỦA ĐỐI TƯỢNG
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex justify-center items-center">
                <Image
                  src="/images/facebook-profile-screenshot.png"
                  alt="Facebook Profile Screenshot"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md border border-gray-200"
                />
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="border-blue-500 border-2">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  CÁCH BẢO VỆ BẢN THÂN
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">
                      1
                    </Badge>
                    <p className="text-sm">
                      <strong>Tuyệt đối không cho mượn</strong> bằng bất kì hình thức hay câu chuyện nào
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">
                      2
                    </Badge>
                    <p className="text-sm">
                      Đối tượng Ngọc Lợi thường lợi dụng <strong>lòng thương và cảm xúc</strong>. Hãy tỉnh táo !!!
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">
                      3
                    </Badge>
                    <p className="text-sm">
                      Nếu phát hiện hành vi lừa đảo, hãy <strong>cảnh báo người xung quanh</strong>, tránh để đối tượng
                      tiếp tục lừa những người khác.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="border-green-500 border-2">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  HÀNH ĐỘNG BẢO VỆ CỘNG ĐỒNG
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" onClick={handleShareClick}>
                  📢 CHIA SẺ CẢNH BÁO
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700" size="lg" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    GỌI ĐIỆN CHO ĐỐI TƯỢNG: {phoneNumber}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Warning */}
        <div className="mt-12 text-center">
          <Alert className="border-orange-500 bg-orange-50 border-2 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <AlertDescription className="text-lg font-semibold text-orange-800">
              <span className="block mb-2">🛡️ HÃY CẢNH GIÁC VÀ BẢO VỆ BẢN THÂN! 🛡️</span>
              Nếu bạn đã từng bị lừa đảo bởi người này, hãy chia sẻ trang này kèm nội dung của bạn để cảnh báo đến mọi
              người.
            </AlertDescription>
          </Alert>
        </div>
      </main>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-700 shadow-lg animate-pulse">
          🚨 BÁO CÁO
        </Button>
      </div>
      <Toaster /> {/* Add Toaster component here */}
    </div>
  )
}
