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
          Nexus Solutions Cloud <span className="font-normal">é sua nuvem de clientes. Tudo em um só lugar</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Uma solução unificada e multicanal que permite que sua empresa gerencie e proporcione experiências pessoais,
          envolventes e fluidas para seus clientes.
        </p>
      </div>
    </div>
  )
}
