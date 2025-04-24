import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ChevronDown } from "lucide-react"
import CustomerCloudSection from "@/components/customer-cloud-section"
import Logo from "@/components/logo"
import AutoScrollingLogos from "@/components/auto-scrolling-logos"
import ChatBot from "@/components/chat-bot"
import IntelligentSearch from "@/components/intelligent-search"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a192f] text-white">
        <div className="container mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex justify-between items-center py-2 text-sm border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="flex items-center gap-1">
                Institucional <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#">Fale conosco</Link>
              <Link href="#" className="flex items-center gap-1">
                Login <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1">
                PT <ChevronDown className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
            <nav className="flex items-center gap-6">
              <Link href="#" className="flex items-center gap-1 font-medium">
                Customer Cloud <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 font-medium">
                Soluções <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="font-medium">
                Preços
              </Link>
              <Link href="#" className="font-medium">
                Clientes
              </Link>
              <Link href="#" className="flex items-center gap-1 font-medium">
                Parceiros <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="font-medium">
                Blog
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <IntelligentSearch />
              <Button className="bg-[#0066cc] hover:bg-[#0052a3] flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Atendimento ao Cliente
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0a192f] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevando a Eficiência Empresarial com a Nexus</h1>
            <p className="text-xl md:text-2xl mb-6">
              Desbloqueie o potencial do seu negócio com soluções de automação avançadas, integrando inteligência artificial para otimizar a comunicação e maximizar resultados.
            </p>
            <Button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-6">SAIBA COMO</Button>
          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc] to-[#00a3ff] opacity-50 rounded-full blur-[100px] transform -translate-x-1/4"></div>
            <video
            src="/chamada-home.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 w-full max-w-[600px] rounded-lg shadow-lg"
            />
            {/*<Image
              src="/placeholder.svg?height=500&width=600"
              alt="Customer Experience"
              width={600}
              height={500}
              className="relative z-10"
            />-->*/}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Mais de 12.000 clientes moldando um novo mundo de experiências
          </h2>
        </div>
        <AutoScrollingLogos />
      </section>

      {/* Customer Cloud Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CustomerCloudSection />
        </div>
      </section>

      {/* Chatbot */}
      <ChatBot />
    </main>
  )
}
