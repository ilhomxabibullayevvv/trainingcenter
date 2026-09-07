import Image from "next/image";

const images = [
  "/rectangle3.jpg",
  "/rectangle4.jpg",
  "/rectangle5.jpg",
  "/rectangle6.jpg",
  "/rectangle7.jpg",
];

export default function Directions() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200] px-5">
        <h2 className="text-center mb-30 text-3xl font-bold text-[#424242]">
          Обучение косметологов
        </h2>

        {/* Tepada 2 ta rasm */}
        <div className="mb-5 grid grid-cols-2 gap-5">
          {images.slice(0, 2).map((image, index) => (
            <div
              key={image}
              className="relative h-[300] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Обучение косметологов ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Pastda 3 ta rasm — yonma-yon */}
        <div className="grid grid-cols-3 gap-5">
          {images.slice(2).map((image, index) => (
            <div
              key={image}
              className="relative h-[250] overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Обучение косметологов ${index + 3}`}
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