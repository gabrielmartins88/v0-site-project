import Image from "next/image"

export default function CustomerCloudSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <Image
          src="/placeholder.svg?height=400&width=500"
          alt="Customer Cloud Illustration"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Nexus Solutions <span className="font-normal"> Tudo em um só lugar</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Uma solução unificada e multicanal que permite que sua empresa gerencie e proporcione experiências pessoais,
          envolventes e fluidas para seus clientes.
        </p>
      </div>
      <section className="mt-16 w-full" id="services">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          <i className="fas fa-cogs animate-spin mr-2 text-blue-600" />
          Soluções Estratégicas para o Crescimento do Seu Negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md flex gap-4">
            <i className="fas fa-robot text-3xl text-blue-600 animate-pulse" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Agente X</h3>
              <p>
                Implemente uma automação inteligente no WhatsApp que opera ininterruptamente, proporcionando respostas
                personalizadas e otimizando o atendimento ao cliente com precisão e eficiência.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex gap-4">
            <i className="fas fa-bullhorn text-3xl text-blue-600 animate-bounce" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Tráfego Pago</h3>
              <p>
                Desenvolva campanhas publicitárias altamente segmentadas que capturam leads qualificados, maximizando o
                retorno sobre investimento e expandindo sua base de clientes de forma estratégica.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex gap-4">
            <i className="fas fa-chart-line text-3xl text-blue-600 animate-pulse" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
              <p>
                Transforme dados brutos em insights acionáveis com análises avançadas, permitindo decisões estratégicas
                que otimizam processos e impulsionam o desempenho de vendas.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex gap-4">
            <i className="fas fa-headset text-3xl text-blue-600 animate-bounce" />
            <div>
              <h3 className="text-xl font-semibold mb-2">IA para Vendas e Suporte</h3>
              <p>
                Automatize processos de vendas e suporte com soluções de IA que personalizam interações, engajam
                clientes e promovem a fidelização em larga escala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
