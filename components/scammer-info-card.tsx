"use client"

import Image from "next/image"
import { Phone, Facebook, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function ScammerInfoCard() {
  const facebookLink = "https://www.facebook.com/lee.man.3150"
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scammerImages = [
    "/images/scammer-image-1.jpeg",
    "/images/scammer-image-2.jpeg",
    // Add more images here if needed
  ]

  return (
    <Card className="border-red-500 border-2 shadow-xl">
      <CardHeader className="bg-red-600 text-white">
        <CardTitle className="text-2xl font-bold text-center">THÔNG TIN KẺ LỪA ĐẢO</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {scammerImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-96 rounded-lg overflow-hidden shadow-md border-2 border-red-300 bg-gray-100 flex items-center justify-center" // Increased height to h-96
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Scammer Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-red-100 p-4 rounded-lg border border-red-300">
            <h3 className="font-bold text-xl text-red-800 mb-2">🎯 TÊN: LÊ HỒNG NGỌC LỢI</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="font-semibold">SĐT: 0328725536</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-blue-600" />
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold">
                      Facebook: Ngọc Lợi (lee.man.3150)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-lg">
                    <div className="relative bg-white rounded-lg shadow-lg">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className="flex flex-col items-center p-6 pt-8">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-200">
                          <Image
                            src="/placeholder.svg?height=96&width=96"
                            alt="Ngoc Loi Profile Picture"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 border-2 border-white">
                            <Facebook className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <DialogHeader className="text-center mb-4">
                          <DialogTitle className="text-xl font-bold text-gray-800">See more from Ngọc Lợi</DialogTitle>
                          <DialogDescription className="text-sm text-gray-500">
                            Bạn đang chuẩn bị truy cập một liên kết bên ngoài. Hãy cẩn trọng!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="w-full space-y-3">
                          <div className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-50">
                            Email or phone number (Không khả dụng)
                          </div>
                          <div className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-gray-50">
                            Password (Không khả dụng)
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                            <a
                              href={facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsModalOpen(false)}
                            >
                              Tiếp tục đến Facebook
                            </a>
                          </Button>
                          <Button variant="link" className="w-full text-blue-600 hover:text-blue-800">
                            Quên mật khẩu?
                          </Button>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">hoặc</span>
                          </div>
                          <Button
                            className="w-full bg-green-600 hover:bg-green-700"
                            onClick={() => setIsModalOpen(false)}
                          >
                            Tạo tài khoản mới (Không khả dụng)
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-lg text-yellow-800 mb-2">🚨 PHƯƠNG THỨC LỪA ĐẢO:</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Chuyên dụng chuyện lấy lòng thương để vay tiền</li>
              <li>• Rồi lừa đảo, không trả</li>
              <li>• Dù là bạn bè, người thân hay đồng hộ cũng không chừa</li>
              <li>• Dùng chuyện muốn vài triệu không được sẽ đòi sang mượn vài trăm</li>
              <li>• Muốn liên tục nhiều lần sau đó thì quịch</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
