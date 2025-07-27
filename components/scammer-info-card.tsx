"use client"

import Image from "next/image"
import { Phone, Facebook, X, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
    <Card className="border-red-500 border-2 shadow-xl w-full max-w-full mx-auto overflow-hidden">
      <CardHeader className="bg-red-600 text-white p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">THÔNG TIN KẺ LỪA ĐẢO</CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="relative w-full mb-6 overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {scammerImages.map((src, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden shadow-md border-2 border-red-300 bg-gray-100">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Ảnh chứng minh lừa đảo ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-1 sm:p-2"
                      priority={index === 0}
                      quality={85}
                    />
                  </div>
                  <div className="text-center text-xs text-gray-500 mt-2">
                    Ảnh {index + 1}/{scammerImages.length}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 border-gray-300 h-7 w-7 sm:h-8 sm:w-8" />
            <CarouselNext className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 border-gray-300 h-7 w-7 sm:h-8 sm:w-8" />
          </Carousel>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
            <h3 className="font-bold text-lg sm:text-xl text-red-800 mb-2">🎯 TÊN: LÊ HỒNG NGỌC LỢI</h3>
            <div className="space-y-2 text-gray-800">
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                <Phone className="h-4 w-4 flex-shrink-0 text-red-600" />
                <span className="font-semibold break-all">SĐT: 0328725536</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                <Facebook className="h-4 w-4 flex-shrink-0 text-blue-600" />
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold text-left">
                      Facebook: Ngọc Lợi (lee.man.3150)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95%] sm:max-w-md p-0 overflow-hidden rounded-lg">
                    <div className="relative bg-white rounded-lg shadow-lg">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className="flex flex-col items-center p-4 sm:p-6 pt-10 sm:pt-12">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-gray-200">
                          <Image
                            src="/placeholder.svg"
                            alt="Ảnh đại diện Ngọc Lợi"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 border-2 border-white">
                            <Facebook className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                        </div>
                        <DialogHeader className="text-center mb-3 sm:mb-4">
                          <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">Xem thêm về Ngọc Lợi</DialogTitle>
                          <DialogDescription className="text-xs sm:text-sm text-gray-500">
                            Bạn đang chuẩn bị truy cập một liên kết bên ngoài. Hãy cẩn trọng!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="w-full space-y-3">
                          <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-gray-50">
                            Email hoặc số điện thoại (Không khả dụng)
                          </div>
                          <div className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-gray-50">
                            Mật khẩu (Không khả dụng)
                          </div>
                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-11" 
                            asChild
                          >
                            <a
                              href={facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsModalOpen(false)}
                              className="flex items-center justify-center"
                            >
                              Tiếp tục đến Facebook
                            </a>
                          </Button>
                          <Button 
                            variant="link" 
                            className="w-full text-blue-600 hover:text-blue-800 text-xs sm:text-sm h-8"
                          >
                            Quên mật khẩu?
                          </Button>
                          <div className="relative flex justify-center text-xs uppercase my-1">
                            <span className="bg-white px-2 text-gray-500">hoặc</span>
                          </div>
                          <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base h-10 sm:h-11"
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

          <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-base sm:text-lg text-yellow-800 mb-2 flex items-center gap-2">
              <span className="text-red-600">🚨</span> PHƯƠNG THỨC LỪA ĐẢO:
            </h4>
            <ul className="text-gray-800 space-y-1.5 text-sm sm:text-[15px] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Chuyên dùng chuyện lấy lòng thương để vay tiền</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Sau đó lừa đảo, không trả tiền</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Dù là bạn bè, người thân hay đồng hộ cũng không chừa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Dùng chuyện muốn vay vài triệu không được sẽ đòi sang mượn vài trăm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Muốn liên tục nhiều lần sau đó thì quịch</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
