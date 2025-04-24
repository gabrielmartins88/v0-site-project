import Image from "next/image"

export default function CustomerCloudSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      <>
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
        <h2 className="font-normal">Soluções Estratégicas para o Crescimento do Seu Negócio</h2>
        </h2>
        <p className="text-gray-600 mb-6">
          Uma solução unificada e multicanal que permite que sua empresa gerencie e proporcione experiências pessoais,
          envolventes e fluidas para seus clientes.
        </p>
       <div className="services-grid">
       <div className="service-card">
           <i className="fas fa-robot live-icon pulse-icon"></i>
           <i class="fas fa-robot live-icon pulse-icon"></i>
           <div class="content">
               <h3>Agente X</h3>
               <p>Implemente uma automação inteligente no WhatsApp que opera ininterruptamente, proporcionando respostas personalizadas e otimizando o atendimento ao cliente com precisão e eficiência.</p>
           </div>
       </div>
    </div>
  );
}
}
