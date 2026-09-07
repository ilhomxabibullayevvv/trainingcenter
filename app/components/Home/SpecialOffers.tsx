import Image from "next/image";

const images = ["/rectangle8.jpg", "/rectangle9.jpg", "/rectangle10.jpg"];

export default function SpecialOffers() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="text-center mb-15 text-3xl font-bold text-[#424242]">
          Специальные предложения
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative h-[380] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Специальное предложение ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
