import Image from 'next/image'

export default function SingleImage() {
  const imageSrc = '/images/clients/Company.png'; // Replace with your image path

  return (
    <div className="bg-[#fff] py-10 flex justify-center">
      <div className="m-4">
        <Image src={imageSrc} alt="Single Image" width={1321} height={139} className="rounded-lg " />
      </div>
    </div>
  )
}