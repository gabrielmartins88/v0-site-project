import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, MapPin, Phone, Mail, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a192f] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <Mail className="h-8 w-8 mr-3 animate-pulse" /> Fale com a Gente
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Converse com nossos consultores especializados para encontrar a melhor solução de automação para o seu
            negócio, ou acione o Agente X para esclarecer dúvidas de forma rápida e eficiente. Estamos aqui para ajudar
            sua empresa a crescer com tecnologia de ponta!
          </p>
        </div>
      </section>

      {/* Action Boxes Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-[#0066cc] animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Central de Ajuda</h3>
              <p className="text-gray-600">
                Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-[#0066cc] animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Já é Nosso Cliente?</h3>
              <p className="text-gray-600">Fale diretamente com o Agente X para suporte rápido e personalizado.</p>
              <Link
                href="https://wa.me/+5551999999999?text=Olá,%20sou%20cliente%20e%20preciso%20de%20suporte!"
                className="text-[#0066cc] mt-4 hover:underline"
              >
                Abrir WhatsApp
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0066cc] animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Fale com um Consultor</h3>
              <p className="text-gray-600">
                Agende uma consulta estratégica com um de nossos CEOs para transformar seu negócio.
              </p>
              <Link
                href="https://wa.me/+5551999998888?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20da%20Nexus%20Solutions!"
                className="text-[#0066cc] mt-4 hover:underline"
              >
                Agendar Consulta
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0a192f] flex items-center justify-center">
              <MessageSquare className="h-7 w-7 mr-3 animate-bounce" /> Envie Sua Mensagem
            </h2>
            <p className="text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível. Todos os campos são
              obrigatórios.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  className="border-gray-300 focus:border-[#0066cc] focus:ring-[#0066cc]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  required
                  className="border-gray-300 focus:border-[#0066cc] focus:ring-[#0066cc]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Telefone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                required
                className="border-gray-300 focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Descreva como podemos ajudar você..."
                required
                className="border-gray-300 focus:border-[#0066cc] focus:ring-[#0066cc] min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white py-3">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0a192f] flex items-center justify-center">
              <MapPin className="h-7 w-7 mr-3 animate-pulse" /> Onde Estamos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visite-nos em nossa sede em Canoas, Rio Grande do Sul, ou entre em contato online.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.828558227672!2d-51.18346468477015!3d-29.91897998194355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU1JzA4LjMiUyA1McKwMTAnNTkuNSJX!5e0!3m2!1spt-BR!2sbr!4v1697234567890!5m2!1spt-BR!2sbr"
              className="w-full h-[400px] border-0 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              title="Localização da Nexus Solutions"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0a192f] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-3 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                  <span className="font-medium text-[#0a192f]">Como posso contratar um pacote da Nexus Solutions?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                  </span>
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">
                    Você pode escolher um pacote diretamente em nossa página de serviços e enviar sua mensagem pelo
                    formulário de contato acima para iniciar o processo.
                  </p>
                </div>
              </details>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                  <span className="font-medium text-[#0a192f]">Os pacotes incluem suporte técnico?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                  </span>
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">
                    Sim! Todos os pacotes incluem suporte técnico. O Pacote Neo tem suporte básico, enquanto o Trinity e
                    Zion oferecem suporte prioritário e 24/7, respectivamente.
                  </p>
                </div>
              </details>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                  <span className="font-medium text-[#0a192f]">Posso personalizar meu pacote?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                  </span>
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">
                    Sim, oferecemos o Pacote Personalizado, onde você escolhe os serviços que deseja. Confira os
                    detalhes na página de serviços e envie sua solicitação pelo formulário de contato.
                  </p>
                </div>
              </details>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                  <span className="font-medium text-[#0a192f]">Qual é o prazo para implementação da automação?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                  </span>
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">
                    O prazo varia conforme o pacote e a complexidade do projeto. Para o Pacote Neo, a implementação leva
                    cerca de 3 a 5 dias úteis. Pacotes mais avançados, como o Zion, podem levar de 7 a 15 dias úteis.
                  </p>
                </div>
              </details>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                  <span className="font-medium text-[#0a192f]">
                    Quanto tempo leva para receber uma resposta após enviar o formulário?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                  </span>
                </summary>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">
                    Nosso objetivo é responder dentro de 24 horas úteis. Para solicitações urgentes, mencione isso na
                    sua mensagem e faremos o possível para responder o mais rápido possível.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-[#0a192f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções de automação inteligente podem
            impulsionar seus resultados.
          </p>
          <Button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-6 text-lg">Fale com o Agente X</Button>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg bg-[#0066cc] hover:bg-[#0052a3]">
          <MessageSquare className="h-8 w-8" />
        </Button>
      </div>
    </main>
  )
}
