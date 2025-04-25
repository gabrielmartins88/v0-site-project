import { Button } from "@/components/ui/button"
import { MessageSquare, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a192f] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços: Pacotes Personalizados</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Escolha o pacote ideal para transformar sua empresa com automação inteligente, otimizando processos e
            aumentando conversões.
          </p>
          <Button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-6 mt-4">Converse com o Agente X</Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pacotes de Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pacote Neo */}
          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-r from-[#0066cc]/10 to-transparent pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-[#0a192f]">Pacote Neo (Básico)</CardTitle>
                <Badge className="bg-[#0066cc] text-white">R$ 249/mês</Badge>
              </div>
              <p className="text-gray-600 mt-2">
                Ideal para empresas que estão começando no mundo da automação e precisam de um ponto de partida sólido.
                Inclui 1 usuário.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Automação de mensagens básicas: Respostas pré-programadas para dúvidas frequentes (ex.: horários,
                    endereço).
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Suporte a uma única rede social: Escolha entre WhatsApp, Instagram ou Facebook.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relatórios básicos: Insights mensais sobre interações e desempenho.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Biblioteca de modelos prontos: Textos e fluxos de automação padrão personalizáveis.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Limite de 350 mensagens automatizadas por mês (~44 tokens por mensagem de 200 caracteres).
                  </span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-semibold">Exemplo prático:</span> Uma pequena loja de roupas usa o Pacote Neo
                  para responder automaticamente a perguntas sobre horários e endereços no WhatsApp, economizando 5
                  horas semanais de atendimento manual e aumentando a satisfação do cliente.
                </p>
              </div>
              <Button className="w-full mt-6 bg-[#0066cc] hover:bg-[#0052a3]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Pacote Trinity */}
          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-r from-[#0066cc]/10 to-transparent pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-[#0a192f]">Pacote Trinity (Intermediário)</CardTitle>
                <Badge className="bg-[#0066cc] text-white">R$ 599/mês</Badge>
              </div>
              <p className="text-gray-600 mt-2">
                Voltado para empresas com presença digital consolidada que desejam otimizar processos. Inclui 3
                usuários.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Automação multicanal: WhatsApp, Instagram, Facebook (opção de disparo de emails de remarketing).
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integração com CRMs, ERPs e plataformas de e-commerce (ex.: Shopify, WooCommerce).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Análise de métricas detalhada: Relatórios semanais com recomendações.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Suporte prioritário: Atendimento rápido para dúvidas e suporte técnico.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integração com banco de dados.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limite de 1350 mensagens mensais.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-semibold">Exemplo prático:</span> Um e-commerce usa o Pacote Trinity para
                  automatizar mensagens no WhatsApp e Instagram, integrando com seu CRM. Isso aumenta a conversão em 20%
                  com follow-ups automáticos, economizando 10 horas semanais.
                </p>
              </div>
              <Button className="w-full mt-6 bg-[#0066cc] hover:bg-[#0052a3]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pacote Zion */}
          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-r from-[#0066cc]/10 to-transparent pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-[#0a192f]">Pacote Zion (Avançado)</CardTitle>
                <Badge className="bg-[#0066cc] text-white">A partir de R$ 1.599/mês</Badge>
              </div>
              <p className="text-gray-600 mt-2">
                Para empresas que buscam excelência em automação e dominar a experiência do cliente. Inclui 15 usuários.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chatbots com IA avançada: Respostas personalizadas e contextuais (modelos como GPT).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relatórios preditivos: Previsão de tendências e comportamento do cliente.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automação omnichannel: WhatsApp, redes sociais, email, site.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Suporte humano integrado: Atendentes podem assumir conversas importantes.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integração avançada: Suporte a múltiplos sistemas via API.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limite de 10.000 mensagens mensais.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#0066cc]/5 rounded-lg">
                <h4 className="font-semibold text-[#0a192f] mb-2">Serviços de Tráfego Pago (Opcional)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Campanhas automatizadas de vendas: Funis com segmentação avançada.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0066cc] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automação de funil de vendas: Captação de leads e follow-ups.</span>
                  </li>
                </ul>
                <Badge className="mt-3 bg-[#0066cc]/20 text-[#0066cc] hover:bg-[#0066cc]/30">+R$ 599/mês</Badge>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-semibold">Exemplo prático:</span> Uma clínica médica usa o Pacote Zion para
                  automatizar agendamentos no WhatsApp e site, com IA que responde perguntas complexas. Isso reduz 80%
                  do tempo de atendimento e aumenta os agendamentos em 40%.
                </p>
              </div>
              <Button className="w-full mt-6 bg-[#0066cc] hover:bg-[#0052a3]">Solicitar Orçamento</Button>
            </CardContent>
          </Card>

          {/* Pacote Personalizado */}
          <Card className="border-2 border-[#0066cc]/20 shadow-lg hover:shadow-xl transition-all">
            <CardHeader className="bg-gradient-to-r from-[#0066cc]/10 to-transparent pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-[#0a192f]">Pacote Personalizado (Sob Medida)</CardTitle>
                <Badge className="bg-[#0066cc] text-white">Sob consulta</Badge>
              </div>
              <p className="text-gray-600 mt-2">
                Ideal para empresas que desejam uma solução sob medida. Escolha os serviços que melhor atendem às suas
                necessidades.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="automacao-basica"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="automacao-basica" className="ml-2 text-gray-700">
                      Automação de mensagens básicas
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rede-social"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="rede-social" className="ml-2 text-gray-700">
                      Suporte a uma única rede social
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="multicanal"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="multicanal" className="ml-2 text-gray-700">
                      Automação multicanal
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="omnichannel"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="omnichannel" className="ml-2 text-gray-700">
                      Automação omnichannel
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="chatbots"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="chatbots" className="ml-2 text-gray-700">
                      Chatbots com IA avançada
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="relatorios-basicos"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="relatorios-basicos" className="ml-2 text-gray-700">
                      Relatórios básicos (mensais)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="relatorios-detalhados"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="relatorios-detalhados" className="ml-2 text-gray-700">
                      Relatórios detalhados (semanais)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="relatorios-preditivos"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="relatorios-preditivos" className="ml-2 text-gray-700">
                      Relatórios preditivos
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="suporte-prioritario"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="suporte-prioritario" className="ml-2 text-gray-700">
                      Suporte prioritário
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="trafego-pago"
                      className="h-4 w-4 text-[#0066cc] rounded border-gray-300 focus:ring-[#0066cc]"
                    />
                    <label htmlFor="trafego-pago" className="ml-2 text-gray-700">
                      Serviços de tráfego pago
                    </label>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-[#0066cc] hover:bg-[#0052a3]">Solicitar Orçamento Personalizado</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comparativo de Pacotes</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0a192f] text-white">
                  <th className="p-4 text-left">Recurso</th>
                  <th className="p-4 text-center">Pacote Neo</th>
                  <th className="p-4 text-center">Pacote Trinity</th>
                  <th className="p-4 text-center">Pacote Zion</th>
                  <th className="p-4 text-center">Pacote Personalizado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Número de Usuários</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center">15</td>
                  <td className="p-4 text-center">Sob medida</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Automação de Mensagens</td>
                  <td className="p-4 text-center">Básica</td>
                  <td className="p-4 text-center">Multicanal</td>
                  <td className="p-4 text-center">Omnichannel</td>
                  <td className="p-4 text-center">Personalizável</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Integrações Externas</td>
                  <td className="p-4 text-center">Não</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-[#0066cc] mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-[#0066cc] mx-auto" />
                  </td>
                  <td className="p-4 text-center">Personalizável</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Relatórios</td>
                  <td className="p-4 text-center">Básicos (mensais)</td>
                  <td className="p-4 text-center">Detalhados (semanais)</td>
                  <td className="p-4 text-center">Preditivos</td>
                  <td className="p-4 text-center">Personalizável</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Capacidade de Mensagens</td>
                  <td className="p-4 text-center">350 mensagens/mês</td>
                  <td className="p-4 text-center">1350 mensagens/mês</td>
                  <td className="p-4 text-center">10.000 mensagens/mês</td>
                  <td className="p-4 text-center">Sob medida</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Suporte</td>
                  <td className="p-4 text-center">Básico</td>
                  <td className="p-4 text-center">Prioritário</td>
                  <td className="p-4 text-center">24/7 com IA + suporte humano</td>
                  <td className="p-4 text-center">Personalizável</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 font-medium">Tráfego Pago</td>
                  <td className="p-4 text-center">Não</td>
                  <td className="p-4 text-center">Não</td>
                  <td className="p-4 text-center">Opcional (+R$ 599/mês)</td>
                  <td className="p-4 text-center">Personalizável</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-[#0066cc]">Preço</td>
                  <td className="p-4 text-center font-bold text-[#0066cc]">R$ 249/mês</td>
                  <td className="p-4 text-center font-bold text-[#0066cc]">R$ 599/mês</td>
                  <td className="p-4 text-center font-bold text-[#0066cc]">R$ 1.599/mês</td>
                  <td className="p-4 text-center font-bold text-[#0066cc]">Sob consulta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Diferenciais do Pacote Neo vs. WhatsApp Business Gratuito
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          O Pacote Neo da Nexus Solutions vai além das funcionalidades básicas do WhatsApp Business, oferecendo
          automação mais inteligente e suporte especializado para o seu negócio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Automação mais Inteligente</h3>
                <p className="text-gray-600">Fluxos elaborados com mensagens dinâmicas baseadas em palavras-chave.</p>
                <p className="text-sm text-[#0066cc] italic mt-2">
                  Exemplo: "Obrigado pelo interesse! Prefere A ou B?"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Relatórios Detalhados</h3>
                <p className="text-gray-600">Insights mensais sobre interações e desempenho.</p>
                <p className="text-sm text-[#0066cc] italic mt-2">
                  Exemplo: Descubra quais produtos são mais consultados e otimize suas vendas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Suporte Técnico Especializado</h3>
                <p className="text-gray-600">Orientação para configurar e personalizar suas ferramentas.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Conexão com Outras Redes</h3>
                <p className="text-gray-600">Automatize WhatsApp, Instagram ou Facebook em um só lugar.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Treinamento Inicial</h3>
                <p className="text-gray-600">Suporte para usar as ferramentas de forma eficiente.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:border-[#0066cc]/30 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#0066cc]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f]">Automação Escalável</h3>
                <p className="text-gray-600">Comece com o básico e cresça para planos mais avançados.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-[#0a192f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Escolha o Pacote Ideal para o Seu Negócio</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossos pacotes foram projetados para atender às suas necessidades, desde o básico até soluções avançadas.
            Converse com o Agente X e descubra qual é o melhor para você!
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
